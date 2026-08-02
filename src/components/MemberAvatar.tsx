"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { Member, withMemberImageVersion } from "@/data/members";

interface MemberAvatarProps {
    member: Member;
    priority?: boolean;
}

const TEAM_IMAGE_EXTENSIONS = ["png", "jpg", "jpeg"] as const;

export default function MemberAvatar({ member, priority = false }: MemberAvatarProps) {
    // Priority: explicit local path -> /team/{slug}.* -> GitHub avatar -> initials
    const getSlug = () => {
        if (member.github) {
            const parts = member.github.split('/').filter(Boolean);
            return parts[parts.length - 1];
        }
        return member.name.toLowerCase().replace(/\s+/g, '-');
    };

    const slug = getSlug();
    const imageSources = useMemo(() => {
        const sources: string[] = [];
        const add = (path: string) => {
            const versioned = withMemberImageVersion(member, path);
            if (!sources.includes(versioned)) {
                sources.push(versioned);
            }
        };
        if (member.image.startsWith("/")) {
            add(member.image);
        }
        for (const ext of TEAM_IMAGE_EXTENSIONS) {
            add(`/team/${slug}.${ext}`);
        }
        if (member.image && !member.image.startsWith("/")) {
            add(member.image);
        }
        return sources;
    }, [member, slug]);

    const [sourceIndex, setSourceIndex] = useState(0);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        setSourceIndex(0);
        setHasError(false);
    }, [member.name, imageSources]);

    const imgSrc = imageSources[sourceIndex];

    const handleError = () => {
        if (sourceIndex < imageSources.length - 1) {
            setSourceIndex((index) => index + 1);
        } else {
            setHasError(true);
        }
    };

    if (hasError) {
        return (
            <div className="w-full h-full flex items-center justify-center text-muted font-bold text-lg bg-card">
                {member.name.substring(0, 2).toUpperCase()}
            </div>
        );
    }

    return (
        <Image
            src={imgSrc}
            alt={member.name}
            fill
            className="object-cover transition-opacity duration-300"
            onError={handleError}
            priority={priority}
        />
    );
}
