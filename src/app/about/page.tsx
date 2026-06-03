"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect, useCallback } from "react";
import ScrollIndicator from "@/components/ScrollIndicator";
import Navbar from "@/components/Navbar";
import BannerSlider from "@/components/BannerSlider";
import Footer from "@/components/Footer";
import GalleryNavArrow, {
  GalleryPreviewMobileNav,
} from "@/components/GalleryNavArrow";
import { members, Member } from "@/data/members";
import { communityStats, vision, mission, alwaysBuildingLine } from "@/data/community";
import MemberAvatar from "@/components/MemberAvatar";
import TeamMemberPreview from "@/components/TeamMemberPreview";
import StatCard from "@/components/StatCard";
import ValuesSection from "@/components/ValuesSection";
import ProtocolsSection from "@/components/ProtocolsSection";
import galleryData from "@/data/gallery.json";

type GalleryFilter = "all" | "event" | "project" | "team";

interface GalleryItem {
  id: string;
  title: string;
  description: string;
  src: string;
  alt: string;
  date: string;
  category: string;
  tags: string[];
  group?: "event" | "project" | "team";
}

const unsortedGalleryImages: GalleryItem[] = [
  ...galleryData.events.map((item) => ({ ...item, group: "event" as const })),
  ...galleryData.projects.map((item) => ({ ...item, group: "project" as const })),
  ...galleryData.team.map((item) => ({ ...item, group: "team" as const })),
];

const allGalleryImages: GalleryItem[] = unsortedGalleryImages.sort((a, b) => {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
});

export default function AboutPage() {
  const [activeMember, setActiveMember] = useState<Member | null>(null);
  const [filter, setFilter] = useState<GalleryFilter>("all");
  const [imageLoading, setImageLoading] = useState<Record<string, boolean>>({});
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filteredImages =
    filter === "all"
      ? allGalleryImages
      : allGalleryImages.filter((img) => img.group === filter);

  const previewImage =
    previewIndex !== null ? filteredImages[previewIndex] ?? null : null;
  const isFirstImage = previewIndex === 0;
  const isLastImage = previewIndex === filteredImages.length - 1;

  const openPreview = useCallback((index: number) => {
    setPreviewIndex(index);
  }, []);

  const closePreview = useCallback(() => {
    setPreviewIndex(null);
  }, []);

  const goToPrevious = useCallback(() => {
    setPreviewIndex((current) =>
      current !== null && current > 0 ? current - 1 : current
    );
  }, []);

  const goToNext = useCallback(() => {
    setPreviewIndex((current) =>
      current !== null && current < filteredImages.length - 1
        ? current + 1
        : current
    );
  }, [filteredImages.length]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
        const scrollAmount = 400; // Adjust scroll distance
        const currentScroll = scrollContainerRef.current.scrollLeft;
        scrollContainerRef.current.scrollTo({
            left: direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount,
            behavior: 'smooth'
        });
    }
  };

  useEffect(() => {
    setPreviewIndex(null);
  }, [filter]);

  useEffect(() => {
    if (previewIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closePreview();
      } else if (event.key === "ArrowLeft" && previewIndex > 0) {
        goToPrevious();
      } else if (
        event.key === "ArrowRight" &&
        previewIndex < filteredImages.length - 1
      ) {
        goToNext();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [
    previewIndex,
    filteredImages.length,
    closePreview,
    goToPrevious,
    goToNext,
  ]);

  return (
    <>
      <Navbar activePage="about" />
      <ScrollIndicator />

      <BannerSlider />

      {/* Hero Section */}
      <section className="relative flex items-center justify-center px-4 sm:px-6 pt-6 sm:pt-8 md:pt-12 pb-12 sm:pb-16 md:pb-20">
        <div className="container mx-auto max-w-3xl text-center space-y-6 sm:space-y-8">
          <div className="space-y-4 sm:space-y-6">
            <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded border border-border text-muted text-xs sm:text-sm mono-font">
              $ cat about.md
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mono-font leading-tight">
              <span className="text-foreground">About</span>{" "}
              <span className="text-faded">Knurdz</span>
              <span className="text-green-500">.</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed px-1">
              A collective of passionate creators engineering the future through code, hardware, and social innovation.
            </p>
          </div>

          <div className="mx-auto max-w-2xl rounded-lg border border-border bg-card/40 px-4 py-5 sm:px-6 sm:py-6 md:px-8 md:py-7 text-center space-y-4 sm:space-y-5">
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              <span className="font-semibold text-green-500">Founded in 2025</span>
              , uniting creators and innovators in one open community.
            </p>
            <div className="h-px w-12 bg-border mx-auto" aria-hidden />
            <div className="space-y-2">
              <p className="mono-font text-xs text-green-500/80">// always.building</p>
              <p className="text-sm md:text-base text-muted leading-relaxed">{alwaysBuildingLine}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Info Section */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 mb-10 sm:mb-12">
            <div>
              <span className="px-4 py-2 rounded border border-border text-muted text-sm mono-font inline-block mb-4 sm:mb-6">
                $ cat vision.md
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mono-font mb-4 sm:mb-6 text-foreground">
                Our <span className="text-faded">Vision</span>
              </h2>
              <p className="text-muted text-base sm:text-lg leading-relaxed">{vision}</p>
            </div>

            <div>
              <span className="px-4 py-2 rounded border border-border text-muted text-sm mono-font inline-block mb-4 sm:mb-6">
                $ git log --mission
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mono-font mb-4 sm:mb-6 text-foreground">
                Our <span className="text-faded">Mission</span>
              </h2>
              <p className="text-muted text-base sm:text-lg leading-relaxed">{mission}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-2">
            {communityStats.map((stat) => (
              <StatCard
                key={stat.label}
                number={stat.number}
                label={stat.label}
                duration={stat.duration}
              />
            ))}
          </div>

          <ValuesSection />
        </div>
      </section>

      <ProtocolsSection />

      {/* Team Members Section */}
      <section id="team" className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-background-alt">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <span className="px-4 py-2 rounded border border-border text-muted text-sm mono-font inline-block mb-4 sm:mb-6">
              $ git log --contributors
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mono-font mb-3 sm:mb-4 text-foreground">
              Meet Our <span className="text-faded">Team</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted max-w-2xl mx-auto px-1">
              The talented individuals making it all happen
            </p>
          </div>

          <div className="relative group/timeline">
             {/* Scroll Controls */}
             {/* Desktop Scroll Controls */}
             <div className="hidden md:flex justify-between w-full px-4 md:px-12 mb-2 mt-8 z-30 pointer-events-none sticky left-0">
                 <button 
                    onClick={() => scroll('left')}
                    className="p-3 rounded-full bg-card border border-border text-foreground hover:bg-green-500 hover:border-green-500 transition-all pointer-events-auto shadow-lg"
                    aria-label="Scroll left"
                 >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                 </button>

                 <button 
                    onClick={() => scroll('right')}
                    className="p-3 rounded-full bg-card border border-border text-foreground hover:bg-green-500 hover:border-green-500 transition-all pointer-events-auto shadow-lg"
                    aria-label="Scroll right"
                 >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                 </button>
             </div>

            {/* Desktop Timeline View */}
            <div ref={scrollContainerRef} className="hidden md:flex relative w-full overflow-x-auto min-h-125 items-center scroll-smooth">
              <div className="flex items-center min-w-max px-20 relative pt-32 pb-40">
                  {/* Central Horizontal Line */}
                  <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-green-500/50 to-transparent transform -translate-y-1/2" />
                  
                  {members.map((member, index) => (
                      <div key={member.name} className="relative mx-8 md:mx-16 group">
                          
                          {/* Card Component - Alternating Top/Bottom */}
                          <div 
                              className={`absolute left-1/2 transform -translate-x-1/2 w-72 md:w-80 transition-all duration-300 z-20 group-hover:z-30 group-hover:scale-105 ${
                                  index % 2 === 0 
                                      ? 'bottom-[calc(100%+3rem)] mb-0 origin-bottom' 
                                      : 'top-[calc(100%+3rem)] mt-0 origin-top'
                              }`}
                              onClick={() => setActiveMember(member)}
                          >
                              <div className="bg-card/90 backdrop-blur-xl border border-border rounded-xl p-5 group-hover:border-green-500 transition-colors duration-300 relative overflow-visible shadow-xl group-hover:shadow-[0_0_20px_rgba(34,197,94,0.2)]">
                                  {/* Decorative Tech Elements */}
                                  <div className="absolute top-0 right-0 p-3 opacity-20 pointer-events-none text-[10px] font-mono text-green-500 text-right leading-tight">
                                      {`ID: ${index.toString().padStart(3, '0')}\nUSR: ${member.nickname ?? member.name.split(' ')[0].toUpperCase()}`}
                                  </div>
                                
                                <h3 className="text-xl font-bold text-foreground mb-1 mono-font">{member.name}</h3>
                                <div className="text-green-500 text-xs mono-font mb-3 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                    {member.role}
                                </div>

                                {member.bio && (
                                    <p className="text-muted text-xs leading-relaxed mb-4 line-clamp-3">
                                        {member.bio}
                                    </p>
                                )}

                                <div className="flex gap-3 pt-3 border-t border-border">
                                    {member.github && (
                                        <a href={member.github} target="_blank" rel="noreferrer" className="text-muted hover:text-foreground transition-colors text-xs mono-font flex items-center gap-1.5">
                                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                            GH
                                        </a>
                                    )}
                                    {member.linkedin && (
                                        <a href={member.linkedin} target="_blank" rel="noreferrer" className="text-muted hover:text-foreground transition-colors text-xs mono-font flex items-center gap-1.5">
                                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                                            LI
                                        </a>
                                    )}
                                </div>
                            </div>
                            
                            {/* Connector Line */}
                            <div className={`absolute left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-linear-to-b from-green-500/50 to-transparent ${
                                index % 2 === 0 ? '-bottom-12 bg-linear-to-t' : '-top-12'
                            }`} />
                        </div>

                        {/* The Node (Image) */}
                        <div 
                            className="relative z-10 w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-background-alt bg-card overflow-hidden shadow-[0_0_15px_rgba(34,197,94,0.4)] group-hover:scale-125 group-hover:border-green-400 group-hover:shadow-[0_0_25px_rgba(34,197,94,0.6)] transition-all duration-300 group-node cursor-pointer"
                            onClick={() => setActiveMember(member)}
                            role="button"
                            aria-label={`View details for ${member.name}`}
                        >
                            <div className="relative w-full h-full"> 
                                <MemberAvatar member={member} />
                            </div>
                        </div>

                    </div>
                ))}
            </div>
          </div>
          </div>

          {/* Mobile Grid View */}
          <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">
            {members.map((member, index) => (
              <div 
                key={member.name} 
                className="bg-card/90 backdrop-blur-xl border border-border rounded-xl overflow-hidden shadow-lg hover:border-green-500 transition-colors duration-300"
              >
                  <div className="flex flex-col items-center p-5 sm:p-6 text-center">
                    <div className="relative w-24 h-24 mb-4 rounded-full border-4 border-green-500/20 overflow-hidden shadow-lg">
                        <MemberAvatar member={member} />
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-1 mono-font">{member.name}</h3>
                    <div className="text-green-500 text-sm mono-font mb-4 flex items-center justify-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        {member.role}
                    </div>

                    {member.bio && (
                        <p className="text-muted text-sm leading-relaxed mb-6 line-clamp-3">
                            {member.bio}
                        </p>
                    )}

                    <div className="flex justify-center gap-4 w-full pt-4 border-t border-border">
                        {member.github && (
                            <a href={member.github} target="_blank" rel="noreferrer" className="text-muted hover:text-foreground transition-colors text-sm mono-font flex items-center gap-2 px-3 py-1 rounded-md hover:bg-white/5">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                GH
                            </a>
                        )}
                        {member.linkedin && (
                            <a href={member.linkedin} target="_blank" rel="noreferrer" className="text-muted hover:text-foreground transition-colors text-sm mono-font flex items-center gap-2 px-3 py-1 rounded-md hover:bg-white/5">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                                LI
                            </a>
                        )}
                    </div>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <span className="px-4 py-2 rounded border border-border text-muted text-sm mono-font inline-block mb-4 sm:mb-6">
              $ ls -la ./gallery/
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mono-font mb-3 sm:mb-4 text-foreground">
              Community <span className="text-faded">Gallery</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted max-w-2xl mx-auto mb-6 sm:mb-8 px-1">
              Moments captured from our journey together
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center px-1">
              {(['all', 'event', 'project', 'team'] as GalleryFilter[]).map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 sm:px-6 py-2 rounded border transition-all mono-font text-xs sm:text-sm ${
                    filter === category
                      ? 'border-green-500 bg-green-500/10 text-green-500'
                      : 'border-border text-muted hover:border-foreground/30 hover:text-foreground'
                  }`}
                >
                  {category === 'all' ? 'all' : `--${category}`}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid - Enhanced Design */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                onClick={() => openPreview(index)}
                className="group relative aspect-square cursor-pointer"
              >
                {/* Decorative Frame */}
                <div className="absolute -inset-1 md:-inset-2 bg-linear-to-br from-green-500/20 via-transparent to-blue-500/20 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Outer Border Frame */}
                <div className="relative bg-card/10 backdrop-blur-sm rounded-xl p-2 border border-border group-hover:border-foreground/40 transition-all duration-300 shadow-lg shadow-black/20">

                  {/* Inner Content Container */}
                  <div className="relative aspect-square bg-card rounded-lg border-12 border-background-alt/95 group-hover:border-background-alt transition-all duration-300 overflow-hidden shadow-xl">

                    {/* Corner Decorations */}
                    <div className="absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 border-green-500 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-1 right-1 w-3 h-3 border-t-2 border-r-2 border-green-500 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-1 left-1 w-3 h-3 border-b-2 border-l-2 border-green-500 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2 border-green-500 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Skeleton loader */}
                    {imageLoading[image.id] !== false && (
                      <div
                        className="absolute inset-0 bg-linear-to-r from-card via-background-alt to-card"
                        style={{
                          backgroundSize: '200% 100%',
                          animation: 'shimmer 1.5s ease-in-out infinite'
                        }}
                      >
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-8 h-8 border-2 border-muted border-t-green-500 rounded-full animate-spin" />
                        </div>
                      </div>
                    )}

                    {/* Gallery image - preserving proportions with minimal cropping */}
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      quality={85}
                      loading={index < 8 ? "eager" : "lazy"}
                      priority={index < 4}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,...(omitted)"
                      className={`transition-all duration-500 ${
                        imageLoading[image.id] !== false
                          ? 'scale-110 blur-lg object-cover'
                          : 'scale-100 blur-0 group-hover:scale-105 object-cover'
                      }`}
                      style={{ objectPosition: 'center center' }}
                      onLoadingComplete={() => setImageLoading(prev => ({ ...prev, [image.id]: false }))}
                      onLoad={() => setImageLoading(prev => ({ ...prev, [image.id]: false }))}
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-background/95 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                      <div className="p-4 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <span className="inline-block px-3 py-1 rounded-full text-xs mono-font bg-green-500/30 text-green-400 border border-green-500/50 mb-3 backdrop-blur-sm">
                          {image.category}
                        </span>
                        <h3 className="text-sm font-bold mono-font text-foreground mb-1 line-clamp-2">
                          {image.title}
                        </h3>
                        <p className="text-xs text-muted line-clamp-2 opacity-90">
                          {image.description}
                        </p>
                      </div>
                    </div>

                    {/* Scan Line Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                      <div className="absolute inset-0 bg-linear-to-b from-transparent via-green-500/10 to-transparent animate-pulse" />
                    </div>
                  </div>

                  {/* Tech Badge */}
                  <div className="absolute -top-2 -right-2 bg-green-500 text-black text-xs mono-font px-2 py-1 rounded-full border-2 border-white shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100">
                    #{String(index + 1).padStart(2, '0')}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-background-alt">
        <div className="container mx-auto max-w-5xl">
          <div className="relative bg-card rounded-lg border border-border p-6 sm:p-8 md:p-12 lg:p-16 text-center">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mono-font text-foreground">
                Join Our <span className="text-faded">Community</span>
                <span className="text-green-500">!</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted max-w-2xl mx-auto px-1">
                Ready to collaborate, learn, and build amazing things together?
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center mono-font text-sm">
                <Link
                  href="/contact"
                  className="px-6 sm:px-10 py-3.5 sm:py-5 rounded bg-foreground text-background hover:opacity-90 transition-all font-bold text-center"
                >
                  git init collaboration
                </Link>
                <Link
                  href="/#projects"
                  className="px-6 sm:px-10 py-3.5 sm:py-5 rounded border-2 border-border hover:border-foreground transition-all font-bold text-foreground text-center"
                >
                  explore projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Team Member Preview */}
      <TeamMemberPreview member={activeMember} onClose={() => setActiveMember(null)} />

      {/* Image Preview Modal */}
      {previewImage && previewIndex !== null && (
        <div
          className="fixed inset-0 z-200 flex items-center justify-center bg-background/95 backdrop-blur-sm p-0 sm:p-4 md:px-20 md:py-8"
          onClick={closePreview}
          role="dialog"
          aria-modal="true"
          aria-label={`Image preview, ${previewIndex + 1} of ${filteredImages.length}`}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              closePreview();
            }}
            className="group absolute top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 z-102 min-h-11 min-w-11 p-2.5 sm:p-3 rounded-full bg-card/90 border border-border text-foreground hover:bg-red-500 hover:border-red-500 hover:text-white active:opacity-90 transition-all shadow-lg touch-manipulation"
            aria-label="Close preview"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 stroke-current group-hover:stroke-white mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div
            className="relative w-full sm:max-w-6xl max-h-[92dvh] sm:max-h-[85vh] md:max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {filteredImages.length > 1 && (
              <>
                <GalleryNavArrow
                  direction="prev"
                  disabled={isFirstImage}
                  onClick={goToPrevious}
                />
                <GalleryNavArrow
                  direction="next"
                  disabled={isLastImage}
                  onClick={goToNext}
                />
              </>
            )}

            <div className="relative bg-card border-0 sm:border border-border rounded-none sm:rounded-xl overflow-hidden shadow-2xl flex flex-col max-h-[100dvh] sm:max-h-[85vh] md:max-h-[90vh] w-full h-full sm:h-auto">
              <div className="relative flex-1 min-h-0 w-full bg-black/5 flex items-center justify-center overflow-hidden">
                <Image
                  key={previewImage.id}
                  src={previewImage.src}
                  alt={previewImage.alt}
                  width={1920}
                  height={1080}
                  quality={95}
                  className="w-full h-full object-contain max-h-[60dvh] sm:max-h-[70vh] md:max-h-[85vh] p-0 sm:px-14 md:px-4 sm:py-4 md:py-0"
                  priority
                />
              </div>

              <div className="shrink-0 p-4 sm:p-5 md:p-8 bg-card border-t border-border sm:border-none md:absolute md:bottom-0 md:left-0 md:right-0 md:bg-linear-to-t md:from-black/90 md:via-black/50 md:to-transparent md:border-none">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                  <span className="inline-block px-2 py-0.5 rounded text-[10px] sm:text-xs mono-font bg-green-500/20 text-green-500 border border-green-500/30">
                    {previewImage.category}
                  </span>
                  <span className="text-[10px] sm:text-xs mono-font text-muted md:text-gray-300">
                    {new Date(previewImage.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  {filteredImages.length > 1 && (
                    <span className="ml-auto text-[10px] sm:text-xs mono-font text-muted md:text-gray-300 tabular-nums">
                      {previewIndex + 1} / {filteredImages.length}
                    </span>
                  )}
                </div>
                <h3 className="text-base sm:text-lg md:text-2xl font-bold mono-font text-foreground md:text-white mb-1.5 sm:mb-2 leading-snug break-words">
                  {previewImage.title}
                </h3>
                <p className="text-muted text-xs sm:text-sm md:text-gray-200 leading-relaxed line-clamp-4 sm:line-clamp-none">
                  {previewImage.description}
                </p>
                {filteredImages.length > 1 && (
                  <GalleryPreviewMobileNav
                    isFirstImage={isFirstImage}
                    isLastImage={isLastImage}
                    onPrevious={goToPrevious}
                    onNext={goToNext}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
