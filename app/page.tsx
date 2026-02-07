"use client";

import Image from "next/image";
import { useState, useTransition } from "react";
import { joinWaitlist } from "./actions";

const APP_STORE_URL = "https://apps.apple.com/us/app/deerly/id6758270158";

export default function Home() {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [errorMsg, setErrorMsg] = useState("");
  const [showAndroidWaitlist, setShowAndroidWaitlist] = useState(false);

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

          {/* Download: iOS → App Store, Android → Waitlist */}
          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 w-full">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-black text-white font-medium hover:bg-black/80 transition-all shadow-md hover:shadow-lg active:scale-[0.98] w-full sm:w-auto"
            >
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Download on iOS
            </a>
            <button
              type="button"
              onClick={() => setShowAndroidWaitlist(true)}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border-2 border-black text-black font-medium hover:bg-black/5 transition-all active:scale-[0.98] w-full sm:w-auto"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" aria-hidden>
                <path
                  fill="currentColor"
                  d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,12L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"
                />
              </svg>
              Android — Join Waitlist
            </button>
          </div>

          {showAndroidWaitlist && (
            <div className="w-full pt-2 animate-fade-in-up">
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
                <div className="p-4 rounded-2xl bg-white/60 border border-green-200 text-green-800 flex items-center gap-3">
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
          )}
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

      <section className="w-full max-w-5xl py-24 space-y-24">
        <div className="text-center space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-black tracking-tight">
            Everything you need to grow.
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            Beautifully designed tools to help you cultivate mindfulness, track
            progress, and build a lasting habit of gratitude.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {/* Feature 1 */}
          <div className="flex flex-col gap-8 group">
            <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden bg-primary/5 border border-primary/10 shadow-sm group-hover:shadow-md transition-shadow">
              <Image
                src="/feature-1.png"
                alt="Smart Evaluation & Audio Entries"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4 px-4">
              <h3 className="text-2xl font-bold text-black">
                Smart Evaluation & Audio Entries
              </h3>
              <p className="text-muted leading-relaxed">
                Write or record gratitude moments your way. Our AI analyzes
                every entry to uncover emotional patterns, growth trends, and
                insights into your evolving mindset.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col gap-8 group">
            <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden bg-gold/5 border border-gold/10 shadow-sm group-hover:shadow-md transition-shadow">
              <Image
                src="/feature-2.png"
                alt="Tree Growth & Streaks"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4 px-4">
              <div className="space-y-1">
                <h3 className="text-2xl font-bold text-black">
                  Tree Growth & Streaks Visualization
                </h3>
              </div>
              <p className="text-muted leading-relaxed">
                Each entry nurtures your tree, turning consistency into a
                beautiful visual symbol of your personal growth journey.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col gap-8 group">
            <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden bg-lavender/40 border border-lavender shadow-sm group-hover:shadow-md transition-shadow">
              <Image
                src="/feature-3.png"
                alt="Home Widgets"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4 px-4">
              <div className="space-y-1">
                <h3 className="text-2xl font-bold text-black">
                  Home Widgets
                  <br />
                  Gratitude at a glance
                </h3>
              </div>
              <p className="text-muted leading-relaxed">
                Stay mindful throughout the day with widgets that surface your
                latest entries and reminders—right on your home screen.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col gap-8 group">
            <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden bg-black/5 border border-black/10 shadow-sm group-hover:shadow-md transition-shadow">
              <Image
                src="/feature-4.png"
                alt="See your gratitude in numbers"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4 px-4">
              <h3 className="text-2xl font-bold text-black text-pretty">
                See your gratitude in numbers
              </h3>
              <p className="text-muted leading-relaxed">
                Track moods, streaks, and consistency over time with clear
                visuals that turn your gratitude practice into meaningful
                insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="w-full max-w-5xl py-12 border-t border-black/5 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="relative w-8 h-8 opacity-50">
            <Image
              src="/logo-transparent.png"
              alt="Deerly"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-sm text-muted">
            © 2026 Deerly. All rights reserved.
          </p>
        </div>
        <div className="flex gap-8">
          <a
            href="/privacy"
            className="text-sm text-muted hover:text-black transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="/terms-of-use"
            className="text-sm text-muted hover:text-black transition-colors"
          >
            Terms of Use
          </a>
          <a
            href="/support"
            className="text-sm text-muted hover:text-black transition-colors"
          >
            Support
          </a>
        </div>
      </footer>
    </main>
  );
}
