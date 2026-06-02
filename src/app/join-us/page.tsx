"use client";

import { useState } from "react";
import ScrollIndicator from "@/components/ScrollIndicator";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhyJoinUs from "@/components/WhyJoinUs";

type FormState = "idle" | "sending" | "success" | "error";

type DialogState = {
  open: boolean;
  title: string;
  message: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const whatsappPattern = /^07\d{8}$/;

function validateForm(form: {
  name: string;
  email: string;
  whatsapp: string;
  about: string;
  why: string;
}) {
  const name = form.name.trim();
  const email = form.email.trim();
  const whatsapp = form.whatsapp.trim();
  const about = form.about.trim();
  const why = form.why.trim();

  if (!name || !email || !whatsapp || !about || !why) {
    return "Please fill in every field before submitting.";
  }

  if (!emailPattern.test(email)) {
    return "Please enter a valid email address.";
  }

  if (!whatsappPattern.test(whatsapp)) {
    return "WhatsApp number must start with 07 and contain exactly 10 digits.";
  }

  return "";
}

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
  const [dialog, setDialog] = useState<DialogState>({
    open: false,
    title: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const showErrorDialog = (message: string) => {
    setDialog({
      open: true,
      title: "Submission blocked",
      message,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationError = validateForm(form);
    if (validationError) {
      setStatus("error");
      setErrorMsg(validationError);
      showErrorDialog(validationError);
      return;
    }

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
        const message = data.error ?? "Unknown error";
        setErrorMsg(message);
        setStatus("error");
        showErrorDialog(message);
      }
    } catch {
      const message = "Network error. Please try again.";
      setErrorMsg(message);
      setStatus("error");
      showErrorDialog(message);
    }
  };

  return (
    <>
      <ScrollIndicator />

      {/* Navigation */}
      <Navbar activePage="join-us" />

      <main className="min-h-screen pt-site-header-lg pb-16 sm:pb-20 px-4 sm:px-6 overflow-x-hidden">
        <div className="container mx-auto max-w-6xl min-w-0">

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

          <WhyJoinUs />

          <section className="mt-10 pt-10 border-t border-border">
            <div className="mx-auto max-w-3xl space-y-6">
              <div className="bg-card border border-border rounded-lg p-4 sm:p-6">
                <p className="mono-font text-xs text-muted mb-3">// intake.status</p>
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500 animate-pulse shrink-0" />
                  <span className="mono-font text-sm text-yellow-500">limited intake</span>
                </div>
                <p className="text-muted text-sm leading-relaxed">
                  We only accept a{" "}
                  <span className="text-foreground font-semibold">limited number of new members</span>{" "}
                  each intake cycle. Spots are filled on a first-come, first-reviewed basis — submit your
                  application early before this round closes.
                </p>
              </div>

              {status === "success" ? (
                <div className="bg-card border border-green-500/30 rounded-lg p-8 text-center space-y-4">
                  <div className="text-4xl">🚀</div>
                  <h2 className="text-2xl font-bold mono-font text-foreground">Application Submitted!</h2>
                  <p className="text-muted">
                    Thanks for your interest in joining Knurdz. We&apos;ve received your application and will get back to you soon via email or WhatsApp.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-4 px-6 py-2 border border-border rounded hover:bg-card transition-colors mono-font text-sm"
                  >
                    $ reset --hard
                  </button>
                </div>
              ) : (
                <form noValidate onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium mono-font text-muted">
                        Name
                      </label>
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
                      <label htmlFor="email" className="block text-sm font-medium mono-font text-muted">
                        Email
                      </label>
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
                    <label htmlFor="whatsapp" className="block text-sm font-medium mono-font text-muted">
                      WhatsApp Number
                    </label>
                    <input
                      required
                      type="tel"
                      id="whatsapp"
                      name="whatsapp"
                      value={form.whatsapp}
                      onChange={handleChange}
                      placeholder="0771234567"
                      className="w-full bg-card border border-border rounded px-4 py-3 focus:border-foreground transition-colors outline-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="about" className="block text-sm font-medium mono-font text-muted">
                      Tell us about yourself
                    </label>
                    <textarea
                      required
                      id="about"
                      name="about"
                      rows={4}
                      value={form.about}
                      onChange={handleChange}
                      placeholder="Your background, skills, and interests..."
                      className="w-full bg-card border border-border rounded px-4 py-3 focus:border-foreground transition-colors outline-none resize-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="why" className="block text-sm font-medium mono-font text-muted">
                      Why do you want to join Knurdz?
                    </label>
                    <textarea
                      required
                      id="why"
                      name="why"
                      rows={4}
                      value={form.why}
                      onChange={handleChange}
                      placeholder="What motivates you to work with us?"
                      className="w-full bg-card border border-border rounded px-4 py-3 focus:border-foreground transition-colors outline-none resize-none"
                    />
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
          </section>
        </div>
      </main>

      {dialog.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <button
            type="button"
            aria-label="Close dialog overlay"
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setDialog((prev) => ({ ...prev, open: false }))}
          />
          <div
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="join-us-dialog-title"
            aria-describedby="join-us-dialog-message"
            className="relative z-10 w-full max-w-lg rounded-2xl border border-red-500/20 bg-card p-6 shadow-2xl"
          >
            <div className="mb-4 flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-red-500 text-xl">
                !
              </div>
              <div>
                <h2 id="join-us-dialog-title" className="text-xl font-bold mono-font text-foreground">
                  {dialog.title}
                </h2>
                <p id="join-us-dialog-message" className="mt-2 text-sm leading-relaxed text-muted">
                  {dialog.message}
                </p>
              </div>
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setDialog((prev) => ({ ...prev, open: false }))}
                className="px-5 py-2 rounded border border-border text-sm mono-font hover:bg-card/80 transition-colors"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
