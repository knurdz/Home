import Link from "next/link";
import Terminal from "@/components/Terminal";
import ScrollIndicator from "@/components/ScrollIndicator";
import ThemeToggle from "@/components/ThemeToggle";
import { featuredProjects, upcomingProjects } from "@/data/projects";
import { partners } from "@/data/partners";

export default function Home() {
  return (
    <>
      {/* Custom Scroll Indicator - Git Branch Style */}
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
        ></div>
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
            <a
              href="/"
              className="text-gray-400 hover:text-white transition-colors mono-font text-sm"
            >
              /home
            </a>
            <a
              href="#projects"
              className="text-gray-400 hover:text-white transition-colors mono-font text-sm"
            >
              /projects
            </a>
            <a
              href="#partners"
              className="text-gray-400 hover:text-white transition-colors mono-font text-sm"
            >
              /partners
            </a>
            <a
              href="/about"
              className="text-gray-400 hover:text-white transition-colors mono-font text-sm"
            >
              /about
            </a>
            <ThemeToggle />
            <a href="/contact" className="px-6 py-2 rounded border border-white hover:bg-white hover:text-black transition-all font-medium mono-font text-sm">
              cd contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center px-6 pt-20"
      >
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="inline-block">
                <span className="px-4 py-2 rounded border border-white/20 text-gray-400 text-sm mono-font">
                  $ ./welcome --community
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mono-font">
                <span className="text-white">Build.</span>
                <br />
                <span className="text-gray-600">Innovate.</span>
                <br />
                <span className="text-white">
                  Together<span className="text-green-500">.</span>
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed">
                A community of creators building extraordinary digital
                experiences. Fork, commit, deploy.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start mono-font text-sm">
                <button className="px-8 py-4 rounded bg-white text-black hover:bg-gray-200 transition-all font-semibold">
                  git clone projects
                </button>
                <button className="px-8 py-4 rounded border-2 border-white/20 hover:border-white transition-all font-semibold">
                  man knurdz
                </button>
              </div>
            </div>
            {/* Right Visual: Terminal-like */}
            <div className="relative hidden lg:block">
              <Terminal />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-32 px-6">
        <div className="container mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-20">
            <span className="px-4 py-2 rounded border border-white/20 text-gray-400 text-sm mono-font">
              $ git log --graph --all
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mt-6 mb-4 mono-font">
              Featured <span className="text-gray-600">Projects</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our repository of innovative solutions and shipped features
            </p>
          </div>

          {/* Git Branch Visualization - Featured */}
          <div className="relative">
            {/* Central Branch Line (SVG) */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
              <svg
                className="branch-svg w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="50%"
                  y1="0"
                  x2="50%"
                  y2="100%"
                  stroke="#333333"
                  strokeWidth="2"
                  className="git-branch-line"
                />
                <circle cx="50%" cy="15%" r="6" fill="#22c55e" className="git-dot" />
                <circle cx="50%" cy="50%" r="6" fill="#22c55e" className="git-dot" style={{ animationDelay: "0.2s" }} />
                <circle cx="50%" cy="85%" r="6" fill="#22c55e" className="git-dot" style={{ animationDelay: "0.4s" }} />
              </svg>
            </div>

            {/* Featured Projects Grid */}
            <div className="space-y-32 relative">
              {featuredProjects.map((project, index) => {
                const isRight = index % 2 === 0;
                const card = (
                  <div className="group relative bg-white/5 backdrop-blur-xl rounded-lg border border-white/10 overflow-hidden hover:border-white/30 transition-all duration-300 p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div className="mono-font text-sm text-gray-500">
                        <span className="text-green-500">●</span> {project.branch}
                      </div>
                      <span className="text-xs text-gray-600 mono-font">
                        commit {project.commit}
                      </span>
                    </div>
                    <Link href={`/projects/${project.slug}`}>
                      <h3 className="text-3xl font-bold mb-3 mono-font hover:opacity-75 transition-opacity cursor-pointer">
                        {project.name}
                      </h3>
                    </Link>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag: string) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded border border-white/20 text-gray-400 text-xs mono-font"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="text-white font-semibold flex items-center gap-2 transition-all mono-font text-sm hover:gap-4 cursor-pointer"
                    >
                      git show details →
                    </Link>
                  </div>
                );

                return (
                  <div key={project.name} className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className="lg:order-1">
                      {!isRight && card}
                    </div>
                    <div className="lg:order-2">
                      {isRight && card}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Upcoming Projects */}
          <div className="mt-32">
            <div className="text-center mb-12">
              <span className="px-4 py-2 rounded border border-yellow-500/30 text-yellow-500/80 text-sm mono-font">
                $ git stash list --upcoming
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-6 mb-4 mono-font">
                Upcoming <span className="text-gray-600">Projects</span>
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                In progress — currently being crafted in our dev branches
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {upcomingProjects.map((project) => (
                <div
                  key={project.name}
                  className="relative bg-white/[0.02] backdrop-blur-xl rounded-lg border border-dashed border-white/15 p-8 opacity-80"
                >
                  {/* Upcoming badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-2 py-1 rounded text-xs mono-font bg-yellow-500/10 text-yellow-500/80 border border-yellow-500/20">
                      // upcoming
                    </span>
                  </div>
                  <div className="flex items-start gap-4 mb-4 pr-24">
                    <div className="mono-font text-sm text-gray-600">
                      <span className="text-yellow-600">◐</span> {project.branch}
                    </div>
                    <span className="text-xs text-gray-700 mono-font ml-auto">
                      commit {project.commit}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 mono-font text-gray-300 flex items-center gap-3">
                    {project.name}
                    {(project.slug === "project-titanic" || project.slug === "arduino-remote") && (
                      <span className="text-xs font-normal mono-font text-gray-600 border border-white/10 rounded px-2 py-0.5">
                        working title
                      </span>
                    )}
                  </h3>
                  <p className="text-gray-500 mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded border border-white/10 text-gray-600 text-xs mono-font"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="relative py-32 px-6 bg-gray-950">
        <div className="container mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-20">
            <span className="px-4 py-2 rounded border border-white/20 text-gray-400 text-sm mono-font">
              $ cat partners.json
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mt-6 mb-4 mono-font">
              Our <span className="text-gray-600">Partners</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Collaborating with industry leaders to ship production-ready solutions
            </p>
          </div>

          {/* Partners Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="group relative bg-white/5 backdrop-blur-xl rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300 p-10"
              >
                {/* Logo - Centered at top */}
                <div className="flex justify-center mb-8">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="h-20 w-auto object-contain"
                  />
                </div>

                {/* Partner Info */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mono-font text-white mb-3">
                    {partner.name}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-4">
                    {partner.description}
                  </p>
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-white/20 hover:border-green-500/50 hover:bg-green-500/5 transition-all text-sm mono-font text-gray-400 hover:text-green-500"
                  >
                    <span>Visit Website</span>
                    <span>↗</span>
                  </a>
                </div>

                {/* Projects Section */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex items-center gap-2 mb-6">
                    <span className="text-xs mono-font text-gray-500 uppercase tracking-wider">
                      Projects ({partner.projects.length})
                    </span>
                    <div className="flex-1 h-px bg-white/5"></div>
                  </div>
                  <div className="space-y-3">
                    {partner.projects.map((project) => {
                      const statusConfig = {
                        live: {
                          color: "text-green-500",
                          bg: "bg-green-500/10",
                          border: "border-green-500/30",
                          dotBg: "bg-green-500",
                          label: "Live"
                        },
                        beta: {
                          color: "text-orange-500",
                          bg: "bg-orange-500/10",
                          border: "border-orange-500/30",
                          dotBg: "bg-orange-500",
                          label: "Beta"
                        },
                        development: {
                          color: "text-blue-500",
                          bg: "bg-blue-500/10",
                          border: "border-blue-500/30",
                          dotBg: "bg-blue-500",
                          label: "In Development"
                        },
                        design: {
                          color: "text-purple-500",
                          bg: "bg-purple-500/10",
                          border: "border-purple-500/30",
                          dotBg: "bg-purple-500",
                          label: "In Design"
                        },
                        upcoming: {
                          color: "text-yellow-500",
                          bg: "bg-yellow-500/10",
                          border: "border-yellow-500/30",
                          dotBg: "bg-yellow-500",
                          label: "Upcoming"
                        }
                      };

                      const status = statusConfig[project.status];

                      return (
                        <a
                          key={project.slug}
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/project block p-4 rounded-lg bg-white/5 border border-white/10 hover:border-green-500/50 hover:bg-green-500/5 transition-all"
                        >
                          <div className="flex items-center justify-between gap-3">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-1">
                                <h4 className="font-semibold text-gray-200 group-hover/project:text-white transition-colors mono-font">
                                  {project.name}
                                </h4>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs mono-font ${status.bg} ${status.border} ${status.color}`}>
                                <span className={`w-1.5 h-1.5 rounded-full ${status.dotBg}`}></span>
                                {status.label}
                              </span>
                              <span className="text-gray-600 group-hover/project:text-green-500 transition-colors text-xl">
                                ↗
                              </span>
                            </div>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="relative py-32 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="relative bg-white/5 rounded-lg border border-white/10 p-12 md:p-20 text-center overflow-hidden">
            <div className="relative z-10 space-y-8">
              <div className="mono-font text-sm text-green-500 mb-4">
                $ ./ready_to_build.sh
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mono-font">
                Ready to <span className="text-gray-600">Create</span>
                <br />
                Something Amazing<span className="text-green-500">?</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Join our community and let&apos;s build the future together
              </p>
              <div className="flex flex-wrap gap-4 justify-center mono-font text-sm">
                <button className="px-10 py-5 rounded bg-white text-black hover:bg-gray-200 transition-all font-bold">
                  git init project
                </button>
                <a href="/contact" className="px-10 py-5 rounded border-2 border-white/20 hover:border-white transition-all font-bold">
                  curl -X POST /contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/10 py-12 px-6 bg-gray-950">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
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
            {/* Links */}
            <div>
              <h3 className="font-semibold mb-4 mono-font text-sm">/company</h3>
              <ul className="space-y-2 text-gray-400 text-sm mono-font">
                <li>
                  <a href="/about" className="hover:text-white transition-colors">
                    about.md
                  </a>
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
              <h3 className="font-semibold mb-4 mono-font text-sm">
                /services
              </h3>
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
