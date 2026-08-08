"use client";

import AppwriteStaticImage from "@/components/AppwriteStaticImage";
import { useEffect, useMemo, useRef, useState } from "react";
import { Member, withMemberImageVersion } from "@/data/members";
import { staticAssetImageFallbacks } from "@/lib/static-assets";

interface MemberAvatarProps {
  member: Member;
  priority?: boolean;
}

const TEAM_IMAGE_EXTENSIONS = ["png", "jpg", "jpeg"] as const;
const AVATAR_WIDTH = 256;

function MemberImageAttempt({
  path,
  alt,
  priority,
  onFailed,
}: {
  path: string;
  alt: string;
  priority: boolean;
  onFailed: () => void;
}) {
  const isLocal = path.startsWith("/");
  const imgSrc = isLocal ? path : path;
  const maxAttempts = isLocal
    ? 1 + staticAssetImageFallbacks(path, AVATAR_WIDTH, 80).length
    : 1;
  const attemptsRef = useRef(0);

  useEffect(() => {
    attemptsRef.current = 0;
  }, [path]);

  const handleError = () => {
    attemptsRef.current += 1;
    if (attemptsRef.current >= maxAttempts) {
      onFailed();
    }
  };

  return (
    <AppwriteStaticImage
      src={imgSrc}
      alt={alt}
      fill
      sizes="(max-width: 768px) 80px, 144px"
      className="object-cover transition-opacity duration-300"
      onError={handleError}
      priority={priority}
      loading={priority ? "eager" : "lazy"}
      fallbackWidth={AVATAR_WIDTH}
    />
  );
}

export default function MemberAvatar({
  member,
  priority = false,
}: MemberAvatarProps) {
  const getSlug = () => {
    if (member.github) {
      const parts = member.github.split("/").filter(Boolean);
      return parts[parts.length - 1];
    }
    return member.name.toLowerCase().replace(/\s+/g, "-");
  };

  const slug = getSlug();
  const imageSources = useMemo(() => {
    const sources: string[] = [];
    const add = (p: string) => {
      const versioned = withMemberImageVersion(member, p);
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

  const currentPath = imageSources[sourceIndex];

  const handlePathFailed = () => {
    if (sourceIndex < imageSources.length - 1) {
      setSourceIndex((index) => index + 1);
    } else {
      setHasError(true);
    }
  };

  if (hasError || !currentPath) {
    return (
      <div className="w-full h-full flex items-center justify-center text-muted font-bold text-lg bg-card">
        {member.name.substring(0, 2).toUpperCase()}
      </div>
    );
  }

  return (
    <MemberImageAttempt
      key={currentPath}
      path={currentPath}
      alt={member.name}
      priority={priority}
      onFailed={handlePathFailed}
    />
  );
}
