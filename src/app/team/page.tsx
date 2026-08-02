"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollIndicator from "@/components/ScrollIndicator";
import TeamRoleCard from "@/components/TeamRoleCard";
import TeamMemberPreview from "@/components/TeamMemberPreview";
import { Member } from "@/data/members";
import {
  teamRolesByLevel,
  resolveTeamMember,
  TeamRoleSlot,
} from "@/data/team";

function HierarchyConnector() {
  return (
    <div
      className="w-px h-8 sm:h-10 bg-linear-to-b from-green-500/60 to-green-500/20 my-1 sm:my-2"
      aria-hidden
    />
  );
}

export default function TeamPage() {
  const [activeMember, setActiveMember] = useState<Member | null>(null);
  const hierarchyLevels = useMemo(() => teamRolesByLevel(), []);

  const openPreview = (member: Member, roleTitle: string) => {
    setActiveMember({ ...member, role: roleTitle });
  };

  const closePreview = () => {
    setActiveMember(null);
  };

  const renderSlot = (slot: TeamRoleSlot, featured: boolean) => (
    <TeamRoleCard
      key={slot.id}
      title={slot.title}
      member={resolveTeamMember(slot)}
      featured={featured}
      onSelect={(m) => openPreview(m, slot.title)}
    />
  );

  return (
    <>
      <Navbar activePage="team" />
      <ScrollIndicator />

      <main className="pt-site-header-lg pb-16 sm:pb-20">
        <section className="relative px-4 sm:px-6 py-10 sm:py-14 md:py-16">
          <div className="container mx-auto max-w-4xl text-center space-y-5 sm:space-y-6">
            <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded border border-border text-muted text-xs sm:text-sm mono-font">
              $ cat team/org.json
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mono-font leading-tight text-foreground">
              Our <span className="text-faded">Team</span>
              <span className="text-green-500">.</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
              The people leading Knurdz, building events, hardware, software,
              and community together.
            </p>
          </div>
        </section>

        <section className="relative px-4 sm:px-6 pb-10 sm:pb-14 md:pb-16">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col items-center">
              {hierarchyLevels.map((levelRoles, levelIndex) => {
                const level = levelIndex + 1;
                const isFirst = levelIndex === 0;
                const isSoloRow = levelRoles.length === 1;
                const isLeadershipRow = level <= 3;

                return (
                  <div
                    key={level}
                    className="flex flex-col items-center w-full"
                  >
                    {!isFirst && <HierarchyConnector />}

                    {isSoloRow && isLeadershipRow ? (
                      <div className="grid grid-cols-1 w-full max-w-6xl md:max-w-md md:mx-auto">
                        {renderSlot(levelRoles[0], level === 1)}
                      </div>
                    ) : (
                      <div
                        className={`grid gap-4 sm:gap-6 w-full ${
                          levelRoles.length >= 3
                            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl"
                            : levelRoles.length === 2
                              ? "grid-cols-1 sm:grid-cols-2 max-w-2xl"
                              : "max-w-md grid-cols-1"
                        }`}
                      >
                        {levelRoles.map((slot) => renderSlot(slot, false))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="relative px-4 sm:px-6 py-10 sm:py-14 bg-background-alt">
          <div className="container mx-auto max-w-3xl text-center">
            <div className="rounded-lg border border-border bg-card/40 px-6 py-8 sm:py-10 space-y-4">
              <p className="text-muted text-sm sm:text-base leading-relaxed">
                Want to build with us? Explore how we work on the about page or
                reach out directly.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center mono-font text-sm">
                <Link
                  href="/about"
                  className="px-6 py-3 rounded border-2 border-border hover:border-foreground transition-all font-bold text-foreground"
                >
                  cat about.md
                </Link>
                <Link
                  href="/join-us"
                  className="px-6 py-3 rounded bg-foreground text-background hover:opacity-90 transition-all font-bold"
                >
                  join the team
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <TeamMemberPreview member={activeMember} onClose={closePreview} />
    </>
  );
}
