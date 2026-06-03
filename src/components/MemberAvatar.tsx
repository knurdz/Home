"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { Member } from "@/data/members";

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
        if (member.image.startsWith("/")) {
            sources.push(member.image);
        }
        for (const ext of TEAM_IMAGE_EXTENSIONS) {
            const path = `/team/${slug}.${ext}`;
            if (!sources.includes(path)) {
                sources.push(path);
            }
        }
        if (member.image && !member.image.startsWith("/") && !sources.includes(member.image)) {
            sources.push(member.image);
        }
        return sources;
    }, [member.image, slug]);

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
