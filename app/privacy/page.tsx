import Link from "next/link";
import Image from "next/image";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#fdf7ef] text-black font-sans selection:bg-primary/10">
      <div className="max-w-3xl mx-auto px-6 py-12 lg:py-24">
        <div className="relative w-20 h-20 mb-8">
          <Image
            src="/logo-transparent.png"
            alt="Deerly Logo"
            fill
            className="object-contain"
          />
        </div>

        <Link
          href="/"
          className="inline-flex items-center text-muted hover:text-primary transition-all mb-8 group"
        >
          <span className="mr-2 group-hover:-translate-x-1 transition-transform">
            ←
          </span>{" "}
          Back to Home
        </Link>

        <header className="mb-16">
          <h1 className="text-5xl font-bold mb-4 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-muted flex items-center gap-2">
            Last Updated: January 26, 2026
          </p>
        </header>

        <div className="prose prose-lg prose-headings:font-bold prose-headings:text-black prose-p:text-gray-700 prose-a:text-primary max-w-none space-y-16">
          {/* Introduction */}
          <section>
            <h2 className="text-3xl mb-6">Introduction</h2>
            <p className="leading-relaxed">
              This Privacy Policy describes how Deerly ("we," "our," or "us")
              collects, uses, and shares information when you use our mobile
              application (the "App"). We are committed to protecting your
              privacy and being transparent about our data practices, ensuring
              your gratitude journey remains a safe and private space.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-3xl mb-6">Information We Collect</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  1. Information You Provide Directly
                </h3>
                <p className="mb-4">
                  When you complete the onboarding process or use the App, we
                  collect:
                </p>
                <ul className="list-disc pl-6 space-y-3">
                  <li>
                    <strong>Basic Profile:</strong> Name and age range to
                    personalize your experience.
                  </li>
                  <li>
                    <strong>Mindfulness Preferences:</strong> Reasons for using
                    the app (e.g., happiness, focus) to tailor reflections.
                  </li>
                  <li>
                    <strong>Gratitude Entries:</strong> The text and reflections
                    you write, which are the core of your personal history.
                  </li>
                  <li>
                    <strong>Notification Settings:</strong> Your preferred
                    reminder times and whether notifications are enabled.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">
                  2. Information Automatically Collected
                </h3>
                <p className="mb-4 text-gray-600">
                  To improve the app, we may collect technical data through
                  third-party partners:
                </p>
                <ul className="list-disc pl-6 space-y-3">
                  <li>
                    <strong>Device Info:</strong> Platform (iOS/Android), OS
                    version, and app version.
                  </li>
                  <li>
                    <strong>Usage Analytics:</strong> Anonymous interaction data
                    to understand which features are most helpful.
                  </li>
                  <li>
                    <strong>Performance Data:</strong> Crash reports to ensure
                    reliability and fix bugs.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="text-3xl mb-6">How We Use Your Information</h2>
            <p className="mb-4">
              We use the collected information for these primary purposes:
            </p>
            <ul className="list-disc pl-6 space-y-4">
              <li>
                <strong>Personalization:</strong> To address you by name and
                provide reflections relevant to your age and goals.
              </li>
              <li>
                <strong>Cloud Synchronization:</strong> To securely store your
                data so you can access your journal across devices.
              </li>
              <li>
                <strong>Push Notifications:</strong> To send you daily reminders
                at your chosen times.
              </li>
              <li>
                <strong>App Improvement:</strong> To fix bugs and develop new
                features based on how users interact with the app.
              </li>
            </ul>
          </section>

          {/* Push Notifications */}
          <section className="bg-lavender/30 p-8 rounded-3xl border border-lavender">
            <h2 className="text-2xl font-bold mb-4">Push Notifications</h2>
            <p className="leading-relaxed mb-4">
              The App uses push notifications to deliver reminders and
              motivations. These notifications are:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Scheduled based on your chosen frequency and time.</li>
              <li>
                Completely optional and can be disabled anytime in Settings.
              </li>
              <li>
                Used solely for your mindfulness practice, never for marketing.
              </li>
            </ul>
          </section>

          {/* Third-Party Services */}
          <section>
            <h2 className="text-3xl mb-6">Third-Party Services</h2>
            <p className="mb-6">
              We use a few trusted partners to power Deerly:
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
                <h4 className="font-bold mb-1">Cloud Storage</h4>
                <p className="text-sm text-gray-500 mb-2">Data Sync</p>
                <p className="text-sm">
                  Securely stores your profile and gratitude entries with
                  encryption to keep your data synced.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
                <h4 className="font-bold mb-1">In-App Purchases</h4>
                <p className="text-sm text-gray-500 mb-2">Subscriptions</p>
                <p className="text-sm">
                  Manages premium features and subscription status safely via
                  Apple or Google's payment systems.
                </p>
              </div>
            </div>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-3xl mb-6">Data Security & Ownership</h2>
            <p className="leading-relaxed mb-6">
              Your data belongs to you. We use industry-standard encryption and
              secure cloud infrastructure to keep your entries private. We do
              not sell your personal data or your journal entries to third
              parties. We implement industry-standard security measures,
              including HTTPS/TLS encryption for all data transmission. You have
              the right to:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Access & Export:</strong> View or download your data at
                any time.
              </li>
              <li>
                <strong>Deletion:</strong> Delete your account and all
                associated data permanently.
              </li>
              <li>
                <strong>Correction:</strong> Update your profile information
                whenever needed.
              </li>
            </ul>
          </section>

          {/* GDPR / European Users */}
          <section className="border-t border-gray-100 pt-16">
            <h2 className="text-3xl mb-6">European Users (GDPR)</h2>
            <p className="mb-6">
              As we serve users in the European Union, we comply with the
              General Data Protection Regulation (GDPR). Your rights include:
            </p>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong>Right to Erasure:</strong> The "right to be forgotten"
                regarding your personal data.
              </p>
              <p>
                <strong>Right to Object:</strong> Object to processing based on
                legitimate interests.
              </p>
              <p>
                <strong>Data Portability:</strong> Receive your data in a
                structured, machine-readable format.
              </p>
            </div>
            <p className="mt-8 text-sm italic">
              European users may lodge a complaint with their local supervisory
              authority (e.g., CNIL in France).
            </p>
          </section>

          {/* Contact Us */}
          <footer className="bg-primary/5 p-10 rounded-[2rem] border border-primary/10">
            <h2 className="text-3xl mb-4 text-primary">Contact Us</h2>
            <p className="leading-relaxed mb-6">
              If you have any questions or wish to exercise your data rights
              (including "GDPR Request"), please reach out:
            </p>
            <div className="space-y-2">
              <p className="font-medium">
                Email:{" "}
                <a
                  href="mailto:itselbarryamine@gmail.com"
                  className="underline hover:text-primary transition-colors"
                >
                  itselbarryamine@gmail.com
                </a>
              </p>
              <p>
                <strong>Developer:</strong> Amine Elbarry
              </p>
              <p>
                <strong>App:</strong> Deerly - Mindfulness & Gratitude
              </p>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}
