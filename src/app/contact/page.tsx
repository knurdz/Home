"use client";

import Link from "next/link";
import { useState } from "react";
import ScrollIndicator from "@/components/ScrollIndicator";
import ThemeToggle from "@/components/ThemeToggle";

type FormState = "idle" | "sending" | "success" | "error";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        const data = await res.json();
        setErrorMsg(data.error ?? "Unknown error");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  };

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
          <Link href="/" className="flex items-center gap-3">
            <span className="text-2xl font-bold mono-font tracking-tighter">
              <span className="text-white">K</span>
              <span className="text-gray-500">nurdz</span>
              <span className="text-green-500">_</span>
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-400 hover:text-white transition-colors mono-font text-sm">
              /home
            </Link>
            <Link href="/#projects" className="text-gray-400 hover:text-white transition-colors mono-font text-sm">
              /projects
            </Link>
            <Link href="/#clients" className="text-gray-400 hover:text-white transition-colors mono-font text-sm">
              /clients
            </Link>
            <ThemeToggle />
            <Link
              href="/contact"
              className="px-6 py-2 rounded border border-green-500 text-green-500 hover:bg-green-500 hover:text-black transition-all font-medium mono-font text-sm"
            >
              git checkout contact
            </Link>
          </div>
        </div>
      </nav>

      <main className="min-h-screen pt-28 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">

          {/* Header */}
          <div className="mb-16 text-center lg:text-left">
            <span className="inline-block px-4 py-2 rounded border border-white/20 text-gray-400 text-sm mono-font mb-6">
              $ curl -X POST /contact --data &apos;{`{}`}&apos;
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mono-font leading-tight">
              <span className="text-white">Get in</span>{" "}
              <span className="text-gray-600">Touch</span>
              <span className="text-green-500">.</span>
            </h1>
            <p className="mt-4 text-xl text-gray-400 max-w-xl">
              Open a new issue — let&apos;s build something together.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">

            {/* Left — Info Panel */}
            <div className="lg:col-span-2 space-y-6">

              {/* Connection info card */}
              <div className="bg-white/5 border border-white/10 rounded-lg p-6 space-y-4">
                <p className="mono-font text-xs text-gray-500 mb-2">// connection.config</p>

                <div className="space-y-4">
                  <InfoRow icon="✉" label="email" value="hello@knurdz.com" href="mailto:hello@knurdz.com" />
                  <InfoRow icon="🐦" label="twitter" value="@knurdz" href="https://twitter.com/knurdz" />
                  <InfoRow icon="🔗" label="linkedin" value="/company/knurdz" href="https://linkedin.com/company/knurdz" />
                  <InfoRow icon="🐙" label="github" value="github.com/knurdz" href="https://github.com/knurdz" />
                </div>
              </div>

              {/* Response time card */}
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <p className="mono-font text-xs text-gray-500 mb-3">// process.status</p>
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="mono-font text-sm text-green-500">online &amp; available</span>
                </div>
                <p className="text-gray-400 text-sm">
                  We typically respond within <span className="text-white font-semibold">24 hours</span>.
                </p>
              </div>

              {/* Services card */}
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <p className="mono-font text-xs text-gray-500 mb-4">// services.list</p>
                <ul className="space-y-2">
                  {["Web Development", "Mobile Apps", "UI/UX Design", "AI Integration", "Consulting"].map((s) => (
                    <li key={s} className="flex items-center gap-2 mono-font text-sm text-gray-300">
                      <span className="text-green-500">›</span> {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right — Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white/5 border border-white/10 rounded-lg overflow-hidden">
                {/* Terminal title bar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/[0.03]">
                  <span className="w-3 h-3 rounded-full bg-red-500/70" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <span className="w-3 h-3 rounded-full bg-green-500/70" />
                  <span className="ml-3 mono-font text-xs text-gray-500">new-issue.sh</span>
                </div>

                <form onSubmit={handleSubmit} className="p-8 space-y-6">
                  {/* Name + Email */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <Field
                      label="name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                    <Field
                      label="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <label className="mono-font text-xs text-gray-500">
                      <span className="text-green-500">$</span> --subject
                    </label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 mono-font text-sm text-white focus:outline-none focus:border-green-500/50 transition-colors"
                    >
                      <option value="" className="bg-black">Select a topic...</option>
                      <option value="project" className="bg-black">New Project</option>
                      <option value="collaboration" className="bg-black">Collaboration</option>
                      <option value="consulting" className="bg-black">Consulting</option>
                      <option value="general" className="bg-black">General Inquiry</option>
                      <option value="other" className="bg-black">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="mono-font text-xs text-gray-500">
                      <span className="text-green-500">$</span> --message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Describe your project or inquiry..."
                      className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 mono-font text-sm text-white placeholder-gray-600 focus:outline-none focus:border-green-500/50 transition-colors resize-none"
                    />
                  </div>

                  {/* Status messages */}
                  {status === "success" && (
                    <div className="flex items-center gap-3 px-4 py-3 rounded border border-green-500/30 bg-green-500/10 mono-font text-sm text-green-400">
                      <span>✓</span>
                      <span>Message sent! We&apos;ll be in touch shortly.</span>
                    </div>
                  )}
                  {status === "error" && (
                    <div className="flex items-center gap-3 px-4 py-3 rounded border border-red-500/30 bg-red-500/10 mono-font text-sm text-red-400">
                      <span>✗</span>
                      <span>{errorMsg || "Something went wrong. Please try again."}</span>
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full py-4 rounded bg-white text-black hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-bold mono-font text-sm flex items-center justify-center gap-2"
                  >
                    {status === "sending" ? (
                      <>
                        <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                        sending...
                      </>
                    ) : (
                      <span>git commit -m &quot;new inquiry&quot;</span>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6 bg-gray-950">
        <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
          <Link href="/" className="text-2xl font-bold mono-font tracking-tighter">
            <span className="text-white">K</span>
            <span className="text-gray-500">nurdz</span>
            <span className="text-green-500">_</span>
          </Link>
          <p className="text-gray-500 mono-font text-sm">
            &copy; {new Date().getFullYear()} Knurdz. All rights reserved.{" "}
            <span className="text-green-500">v1.0.0</span>
          </p>
        </div>
      </footer>
    </>
  );
}

// ── Small helpers ──────────────────────────────────────────────

function Field({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  required,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) {
  return (
    <div className="space-y-2">
      <label className="mono-font text-xs text-gray-500">
        <span className="text-green-500">$</span> --{label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 mono-font text-sm text-white placeholder-gray-600 focus:outline-none focus:border-green-500/50 transition-colors"
      />
    </div>
  );
}

function InfoRow({
  icon,
  label,
  value,
  href,
}: {
  icon: string;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-start gap-3 group"
    >
      <span className="text-lg mt-0.5">{icon}</span>
      <div>
        <p className="mono-font text-xs text-gray-500">// {label}</p>
        <p className="mono-font text-sm text-gray-300 group-hover:text-white transition-colors">
          {value}
        </p>
      </div>
    </a>
  );
}
