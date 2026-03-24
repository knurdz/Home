"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ScrollIndicator from "@/components/ScrollIndicator";
import ThemeToggle from "@/components/ThemeToggle";
import { members, galleryImages } from "@/data/members";

type GalleryFilter = "all" | "event" | "project" | "team";

export default function AboutPage() {
  const [filter, setFilter] = useState<GalleryFilter>("all");

  const filteredImages = filter === "all"
    ? galleryImages
    : galleryImages.filter(img => img.category === filter);

  return (
    <>
      <ScrollIndicator />

      {/* Grid Background */}
      <div className="fixed inset-0 -z-10 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img
              src="/logo/knurdz-logo-horizontal.svg"
              alt="Knurdz"
              className="h-14 w-auto"
            />
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-400 hover:text-white transition-colors mono-font text-sm">
              /home
            </Link>
            <Link href="/#projects" className="text-gray-400 hover:text-white transition-colors mono-font text-sm">
              /projects
            </Link>
            <Link href="/#partners" className="text-gray-400 hover:text-white transition-colors mono-font text-sm">
              /partners
            </Link>
            <Link href="/about" className="text-white transition-colors mono-font text-sm">
              /about
            </Link>
            <ThemeToggle />
            <Link
              href="/contact"
              className="px-6 py-2 rounded border border-white hover:bg-white hover:text-black transition-all font-medium mono-font text-sm"
            >
              cd contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-6 pt-32 pb-20">
        <div className="container mx-auto max-w-7xl text-center">
          <span className="inline-block px-4 py-2 rounded border border-white/20 text-gray-400 text-sm mono-font mb-6">
            $ cat about.md
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mono-font leading-tight mb-6">
            <span className="text-white">About</span>{" "}
            <span className="text-gray-600">Knurdz</span>
            <span className="text-green-500">.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We&apos;re a community of passionate creators, developers, and innovators
            building the future of digital experiences together.
          </p>
        </div>
      </section>

      {/* Community Info Section */}
      <section className="relative py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            {/* Left - Mission */}
            <div>
              <span className="px-4 py-2 rounded border border-white/20 text-gray-400 text-sm mono-font inline-block mb-6">
                $ git log --mission
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mono-font mb-6">
                Our <span className="text-gray-600">Mission</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-4">
                Knurdz is more than just a development community—we&apos;re a collective of
                innovators committed to pushing the boundaries of what&apos;s possible in
                technology.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                We believe in open collaboration, continuous learning, and building products
                that make a real impact. From web applications to mobile solutions, we craft
                experiences that users love.
              </p>
            </div>

            {/* Right - Stats */}
            <div className="grid grid-cols-2 gap-6">
              <StatCard number="50+" label="Projects Delivered" />
              <StatCard number="100+" label="Community Members" />
              <StatCard number="5+" label="Years Experience" />
              <StatCard number="20+" label="Active Contributors" />
            </div>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-6">
            <ValueCard
              icon="🚀"
              title="Innovation First"
              description="We embrace cutting-edge technologies and creative solutions to solve complex problems."
            />
            <ValueCard
              icon="🤝"
              title="Collaboration"
              description="Building together makes us stronger. We share knowledge and support each other."
            />
            <ValueCard
              icon="💡"
              title="Continuous Learning"
              description="Technology evolves, and so do we. We&apos;re committed to growth and learning."
            />
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="relative py-20 px-6 bg-gray-950">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <span className="px-4 py-2 rounded border border-white/20 text-gray-400 text-sm mono-font inline-block mb-6">
              $ git log --contributors
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mono-font mb-4">
              Meet Our <span className="text-gray-600">Team</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The talented individuals making it all happen
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {members.map((member) => (
              <div
                key={member.name}
                className="group relative bg-white/5 backdrop-blur-xl rounded-lg border border-white/10 hover:border-white/30 transition-all duration-300 overflow-hidden"
              >
                {/* Member Image */}
                <div className="relative h-64 bg-gradient-to-br from-white/10 to-white/5 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Placeholder for member image */}
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-green-500/20 to-blue-500/20 border-2 border-white/20 flex items-center justify-center">
                      <span className="text-5xl font-bold mono-font text-white/40">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                  {/* Uncomment when images are available */}
                  {/* <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  /> */}
                </div>

                {/* Member Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mono-font mb-2 text-white">
                    {member.name}
                  </h3>
                  <p className="text-green-500 mono-font text-sm mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Social Links */}
                  <div className="flex gap-3">
                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded border border-white/10 hover:border-green-500/50 hover:bg-green-500/5 transition-all text-gray-400 hover:text-green-500"
                        title="GitHub"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    )}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded border border-white/10 hover:border-green-500/50 hover:bg-green-500/5 transition-all text-gray-400 hover:text-green-500"
                        title="LinkedIn"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                    )}
                    {member.twitter && (
                      <a
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded border border-white/10 hover:border-green-500/50 hover:bg-green-500/5 transition-all text-gray-400 hover:text-green-500"
                        title="Twitter"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
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
      <section className="relative py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <span className="px-4 py-2 rounded border border-white/20 text-gray-400 text-sm mono-font inline-block mb-6">
              $ ls -la ./gallery/
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mono-font mb-4">
              Community <span className="text-gray-600">Gallery</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
              Moments captured from our journey together
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-3 justify-center">
              {(['all', 'event', 'project', 'team'] as GalleryFilter[]).map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-6 py-2 rounded border transition-all mono-font text-sm ${
                    filter === category
                      ? 'border-green-500 bg-green-500/10 text-green-500'
                      : 'border-white/10 text-gray-400 hover:border-white/30 hover:text-white'
                  }`}
                >
                  {category === 'all' ? 'all' : `--${category}`}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-video bg-gradient-to-br from-white/10 to-white/5 rounded-lg border border-white/10 hover:border-white/30 transition-all duration-300 overflow-hidden"
              >
                {/* Placeholder for gallery image */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-green-500/20 to-blue-500/20 border-2 border-white/20 flex items-center justify-center mb-4">
                    <span className="text-3xl">
                      {image.category === 'event' ? '🎉' : image.category === 'project' ? '💻' : '👥'}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mono-font text-white mb-2">
                    {image.title}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {image.description}
                  </p>
                </div>
                {/* Uncomment when images are available */}
                {/* <Image
                  src={image.url}
                  alt={image.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                /> */}

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <span className="inline-block px-2 py-1 rounded text-xs mono-font bg-green-500/20 text-green-500 border border-green-500/30 mb-2">
                      {image.category}
                    </span>
                    <h3 className="text-lg font-bold mono-font text-white mb-1">
                      {image.title}
                    </h3>
                    <p className="text-sm text-gray-300">
                      {image.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-6 bg-gray-950">
        <div className="container mx-auto max-w-5xl">
          <div className="relative bg-white/5 rounded-lg border border-white/10 p-12 md:p-16 text-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold mono-font">
                Join Our <span className="text-gray-600">Community</span>
                <span className="text-green-500">!</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Ready to collaborate, learn, and build amazing things together?
              </p>
              <div className="flex flex-wrap gap-4 justify-center mono-font text-sm">
                <Link
                  href="/contact"
                  className="px-10 py-5 rounded bg-white text-black hover:bg-gray-200 transition-all font-bold"
                >
                  git init collaboration
                </Link>
                <Link
                  href="/#projects"
                  className="px-10 py-5 rounded border-2 border-white/20 hover:border-white transition-all font-bold"
                >
                  explore projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/10 py-12 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <Link href="/" className="block hover:opacity-80 transition-opacity">
                <img
                  src="/logo/knurdz-logo-horizontal.svg"
                  alt="Knurdz"
                  className="h-8 w-auto"
                />
              </Link>
              <p className="text-gray-400 text-sm">
                Building extraordinary digital experiences for the world.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 mono-font text-sm">/company</h3>
              <ul className="space-y-2 text-gray-400 text-sm mono-font">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    about.md
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    careers.md
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    blog.md
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 mono-font text-sm">/services</h3>
              <ul className="space-y-2 text-gray-400 text-sm mono-font">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    web_dev
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    mobile_apps
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    design_sys
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 mono-font text-sm">/connect</h3>
              <ul className="space-y-2 text-gray-400 text-sm mono-font">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    linkedin
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    github
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-gray-500 mono-font text-sm">
            <p>
              &copy; {new Date().getFullYear()} Knurdz. All rights reserved.{" "}
              <span className="text-green-500">v1.0.0</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="bg-white/5 backdrop-blur-xl rounded-lg border border-white/10 p-6 text-center">
      <div className="text-4xl font-bold mono-font text-green-500 mb-2">
        {number}
      </div>
      <div className="text-sm text-gray-400 mono-font">
        {label}
      </div>
    </div>
  );
}

function ValueCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="bg-white/5 backdrop-blur-xl rounded-lg border border-white/10 p-8 hover:border-white/30 transition-all group">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mono-font text-white mb-3 group-hover:text-green-500 transition-colors">
        {title}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
