"use client";

import { useState } from "react";
import ScrollIndicator from "@/components/ScrollIndicator";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type FormState = "idle" | "sending" | "success" | "error";

export default function JoinUsPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    whatsapp: "",
    about: "",
    why: "",
  });
  const [status, setStatus] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/join-us", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
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

      {/* Navigation */}
      <Navbar activePage="join-us" />

      <main className="min-h-screen pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">

          {/* Header */}
          <div className="mb-16 text-center lg:text-left">
            <span className="inline-block px-4 py-2 rounded border border-border text-muted text-sm mono-font mb-6">
              $ git checkout -b join-the-team
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mono-font leading-tight">
              <span className="text-foreground">Join</span>{" "}
              <span className="text-faded">Us</span>
              <span className="text-green-500">.</span>
            </h1>
            <p className="mt-4 text-xl text-muted max-w-xl">
              Ready to build the future with Knurdz? We&apos;re always looking for talented individuals.
            </p>
          </div>

          {/* Why Join Us Section */}
          <div className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold mono-font mb-10 flex items-center gap-4">
              <span className="text-green-500">Why</span> Join Us<span className="text-green-500">?</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-lg border border-border bg-card/30 hover:border-foreground/30 transition-colors group">
                <div className="text-green-500 mb-4 text-2xl font-bold mono-font group-hover:translate-x-1 transition-transform inline-block">01/ Innovation</div>
                <h3 className="text-xl font-bold mb-2 mono-font text-foreground">Future engineering</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Join a community that experiments with the latest in code, hardware, and social innovation.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card/30 hover:border-foreground/30 transition-colors group">
                <div className="text-green-500 mb-4 text-2xl font-bold mono-font group-hover:translate-x-1 transition-transform inline-block">02/ Impact</div>
                <h3 className="text-xl font-bold mb-2 mono-font text-foreground">Real-world solutions</h3>
                <p className="text-muted text-sm leading-relaxed">
                  We build tools and platforms that solve actual problems and create meaningful social change.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card/30 hover:border-foreground/30 transition-colors group">
                <div className="text-green-500 mb-4 text-2xl font-bold mono-font group-hover:translate-x-1 transition-transform inline-block">03/ Community</div>
                <h3 className="text-xl font-bold mb-2 mono-font text-foreground">Collective growth</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Work alongside passionate creators in a collaborative environment where everyone learns and grows.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-3xl">
            {status === "success" ? (
              <div className="bg-card border border-green-500/30 rounded-lg p-8 text-center space-y-4">
                <div className="text-4xl">🚀</div>
                <h2 className="text-2xl font-bold mono-font text-foreground">Application Submitted!</h2>
                <p className="text-muted">
                  Thanks for your interest in joining Knurdz. We&apos;ve received your application and will get back to you soon via email or WhatsApp.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-4 px-6 py-2 border border-border rounded hover:bg-card transition-colors mono-font text-sm"
                >
                  $ reset --hard
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium mono-font text-muted">Name</label>
                    <input
                      required
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full bg-card border border-border rounded px-4 py-3 focus:border-foreground transition-colors outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium mono-font text-muted">Email</label>
                    <input
                      required
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full bg-card border border-border rounded px-4 py-3 focus:border-foreground transition-colors outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="whatsapp" className="block text-sm font-medium mono-font text-muted">WhatsApp No</label>
                  <input
                    required
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    value={form.whatsapp}
                    onChange={handleChange}
                    placeholder="+1 (234) 567-890"
                    className="w-full bg-card border border-border rounded px-4 py-3 focus:border-foreground transition-colors outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="about" className="block text-sm font-medium mono-font text-muted">Tell us about yourself</label>
                  <textarea
                    required
                    id="about"
                    name="about"
                    rows={4}
                    value={form.about}
                    onChange={handleChange}
                    placeholder="Your background, skills, and interests..."
                    className="w-full bg-card border border-border rounded px-4 py-3 focus:border-foreground transition-colors outline-none resize-none"
                  ></textarea>
                </div>

                <div className="space-y-2">
                  <label htmlFor="why" className="block text-sm font-medium mono-font text-muted">Why do you want to join Knurdz?</label>
                  <textarea
                    required
                    id="why"
                    name="why"
                    rows={4}
                    value={form.why}
                    onChange={handleChange}
                    placeholder="What motivates you to work with us?"
                    className="w-full bg-card border border-border rounded px-4 py-3 focus:border-foreground transition-colors outline-none resize-none"
                  ></textarea>
                </div>

                {status === "error" && (
                  <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-500 rounded text-sm mono-font">
                    Error: {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full md:w-auto px-8 py-4 bg-foreground text-background font-bold mono-font hover:opacity-90 transition-all disabled:opacity-50"
                >
                  {status === "sending" ? "$ git commit -m 'sending...'" : "$ git push knurdz main"}
                </button>
              </form>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
