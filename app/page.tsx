"use client";

import Image from "next/image";
import { useState, useTransition } from "react";
import { joinWaitlist } from "./actions";

export default function Home() {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (email) {
      startTransition(async () => {
        const result = await joinWaitlist(email);
        if (result.success) {
          setJoined(true);
          setEmail("");
        } else {
          setErrorMsg(result.message || "Something went wrong.");
        }
      });
    }
  };

  return (
    <main className="flex flex-col items-center justify-center p-5 lg:p-24 gap-20">
      <section className="w-full max-w-5xl flex flex-col lg:flex-row items-center justify-between gap-20">
        {/* Left Content */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 max-w-2xl">
          <div className="relative w-32 h-32 mb-4">
            <Image
              src="/logo-transparent.png"
              alt="Deerly Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-black leading-[1.1]">
            Grow your internal <span className="text-primary">Gratitude</span>{" "}
            Garden. with <span className="text-primary">Deerly.</span>
          </h1>

          <p className="text-xl text-muted leading-relaxed max-w-lg">
            Turn daily reflections into a thriving digital forest. Track your
            streaks, get Smart depth insights, and cultivate a healthier mind
            with Deerly.
          </p>

          <div className="w-full pt-4">
            {!joined ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-6 py-4 rounded-full border border-black bg-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-black placeholder:text-muted/70"
                />
                <button
                  type="submit"
                  disabled={isPending}
                  className="px-8 py-4 rounded-full bg-black text-white font-semibold hover:bg-black/80 transition-all shadow-lg hover:shadow-xl active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isPending ? "Joining..." : "Join Waitlist"}
                </button>
              </form>
            ) : (
              <div className="p-4 rounded-2xl bg-white/60 border border-green-200 text-green-800 flex items-center gap-3 animate-fade-in-up">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">You&apos;re on the list!</p>
                  <p className="text-sm opacity-80">
                    We&apos;ll notify you when we launch.
                  </p>
                </div>
              </div>
            )}
            {errorMsg && (
              <p className="mt-2 text-sm text-red-500 font-medium">
                {errorMsg}
              </p>
            )}
            <p className="mt-4 text-sm text-muted">
              Get early access & exclusive founder rewards.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 w-full">
            <div className="flex flex-col gap-1 sm:items-start items-center">
              <span className="font-bold text-lg text-black">
                Smart Evaluation
              </span>
              <span className="text-sm text-muted text-center sm:text-left">
                Deep analysis of your gratitude
              </span>
            </div>
            <div className="flex flex-col gap-1 sm:items-start items-center">
              <span className="font-bold text-lg text-black">
                Audio Entries
              </span>
              <span className="text-sm text-muted text-center sm:text-left">
                Transcribe moments instantly
              </span>
            </div>
            <div className="flex flex-col gap-1 sm:items-start items-center">
              <span className="font-bold text-lg text-black">Home Widgets</span>
              <span className="text-sm text-muted text-center sm:text-left">
                Keep gratitude close
              </span>
            </div>
            <div className="flex flex-col gap-1 sm:items-start items-center">
              <span className="font-bold text-lg text-black">Tree Growth</span>
              <span className="text-sm text-muted text-center sm:text-left">
                Visualize your progress
              </span>
            </div>
            <div className="flex flex-col gap-1 sm:items-start items-center col-span-2 sm:col-span-1">
              <span className="font-bold text-lg text-black">Streaks</span>
              <span className="text-sm text-muted text-center sm:text-left">
                Build a lasting habit
              </span>
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div className="flex-1 relative w-full flex justify-center lg:justify-end">
          {/* Decorative Elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-linear-to-tr from-primary/20 via-gold/10 to-transparent blur-3xl rounded-full -zA-10" />

          <div className="relative z-10 w-[200px] sm:w-[250px] lg:w-[350px] aspect-[9/19.5] -rotate-2 hover:rotate-0 transition-transform duration-500 ease-out">
            <div className="absolute inset-0 bg-black rounded-[48px] shadow-2xl scale-[1.02] translate-y-2 opacity-20 blur-xl" />
            <div className="relative h-full w-full rounded-[40px] border-8 border-black overflow-hidden shadow-2xl bg-white">
              <Image
                src="/screenshot.png"
                alt="App Screenshot"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
            {/* Glossy reflection effect */}
            <div className="absolute inset-0 rounded-[40px] ring-1 ring-black/5 pointer-events-none" />
          </div>
        </div>
      </section>

      <footer className="w-full max-w-5xl flex justify-center lg:justify-start gap-6">
        <a
          href="/privacy"
          className="text-md hover:text-muted transition-colors underline decoration-dotted underline-offset-4"
        >
          Privacy Policy
        </a>
        <a
          href="/terms-of-use"
          className="text-md hover:text-muted transition-colors underline decoration-dotted underline-offset-4"
        >
          Terms of Use
        </a>
      </footer>
    </main>
  );
}
