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
            Last Updated: February 8, 2026
          </p>
        </header>

        <div className="prose prose-lg prose-headings:font-bold prose-headings:text-black prose-p:text-gray-700 prose-a:text-primary max-w-none space-y-16">
          {/* Introduction */}
          <section>
            <h2 className="text-3xl mb-6">Introduction</h2>
            <p className="leading-relaxed">
              This Privacy Policy describes how Deerly (&quot;we,&quot;
              &quot;our,&quot; or &quot;us&quot;) collects, uses, and shares
              information when you use our mobile application (the
              &quot;App&quot;). We are committed to protecting your privacy and
              being transparent about our data practices, ensuring your
              gratitude journey remains a safe and private space.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-3xl mb-6">Information We Collect</h2>
            <h3 className="text-xl font-semibold mb-3">
              1. Information You Provide Directly
            </h3>
            <p className="mb-6 leading-relaxed">
              When you complete the onboarding process or use the App, we
              collect: basic profile (name and age range to personalize your
              experience), mindfulness preferences (reasons for using the app,
              e.g. happiness or focus, to tailor reflections), gratitude entries
              (the text and reflections you write), and notification settings
              (your preferred reminder times and whether notifications are
              enabled).
            </p>
            <h3 className="text-xl font-semibold mb-3">
              2. Information Automatically Collected
            </h3>
            <p className="leading-relaxed">
              To improve the app, we may collect technical data through
              third-party partners: device info (platform, OS version, app
              version), usage analytics (anonymous interaction data to
              understand which features are most helpful), and performance data
              (crash reports to ensure reliability and fix bugs).
            </p>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="text-3xl mb-6">How We Use Your Information</h2>
            <p className="leading-relaxed">
              We use the collected information for personalization (to address
              you by name and provide reflections relevant to your age and
              goals), cloud synchronization (to securely store your data so you
              can access your journal across devices), push notifications (to
              send you daily reminders at your chosen times), and app
              improvement (to fix bugs and develop new features based on how
              users interact with the app).
            </p>
          </section>

          {/* Push Notifications */}
          <section>
            <h2 className="text-3xl mb-6">Push Notifications</h2>
            <p className="leading-relaxed">
              The App uses push notifications to deliver reminders and
              motivations. Notifications are scheduled based on your chosen
              frequency and time, are completely optional and can be disabled
              anytime in Settings, and are used solely for your mindfulness
              practice, never for marketing.
            </p>
          </section>

          {/* Third-Party Services */}
          <section>
            <h2 className="text-3xl mb-6">Third-Party Services</h2>
            <p className="leading-relaxed">
              We use a few trusted partners to power Deerly. Cloud storage
              securely stores your profile and gratitude entries with encryption
              to keep your data synced. In-app purchases manage premium features
              and subscription status safely via Apple or Google&apos;s payment
              systems.
            </p>
          </section>

          {/* Advertising and Analytics */}
          <section>
            <h2 className="text-3xl mb-6">Advertising and Analytics</h2>
            <p className="mb-6 leading-relaxed">
              We may use advertising and analytics technologies to measure the
              effectiveness of our marketing and, where you have consented, to
              deliver relevant ads.
            </p>
            <h3 className="text-xl font-semibold mb-3">
              Device and advertising identifiers
            </h3>
            <p className="mb-6 leading-relaxed">
              When you consent, we may collect your device or advertising
              identifier (such as the IDFA on iOS). We use these identifiers for
              ad attribution (measuring which ad campaigns led to installs or
              other actions), campaign effectiveness (understanding how our
              advertising performs), and, if you allow tracking, personalized
              advertising (to show you more relevant ads, including on other
              apps and services).
            </p>
            <h3 className="text-xl font-semibold mb-3">
              Sharing with ad partners
            </h3>
            <p className="mb-6 leading-relaxed">
              When you consent to tracking, we may share your device or
              advertising identifier with advertising and analytics partners
              (such as TikTok) for attribution, measurement, and personalized
              advertising. This data may be linked to your device or other
              identifiers these partners use. If you do not consent to tracking,
              we do not use your identifier for cross-app tracking or
              personalized advertising in this way.
            </p>
            <h3 className="text-xl font-semibold mb-3">Your choices</h3>
            <p className="mb-6 leading-relaxed">
              You can control whether we use your identifier for tracking. On
              iOS, go to Settings → Privacy & Security → Tracking and turn off
              tracking for Deerly (or adjust your choice when we show the
              prompt). If we offer an in-app way to change your tracking
              preference, you can update it there.
            </p>
            <p className="leading-relaxed text-gray-700">
              Where required by law (for example under the GDPR in the European
              Union or the CCPA in California), we rely on your consent as the
              legal basis for this processing. You may withdraw your consent at
              any time using the controls above; withdrawal does not affect the
              lawfulness of processing before withdrawal.
            </p>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-3xl mb-6">Data Security & Ownership</h2>
            <p className="leading-relaxed">
              Your data belongs to you. We use industry-standard encryption and
              secure cloud infrastructure to keep your entries private. We do
              not sell your personal data or your journal entries to third
              parties. We implement industry-standard security measures,
              including HTTPS/TLS encryption for all data transmission. You have
              the right to access and export your data at any time, to delete
              your account and all associated data permanently, and to update
              your profile information whenever needed.
            </p>
          </section>

          {/* GDPR / European Users */}
          <section>
            <h2 className="text-3xl mb-6">European Users (GDPR)</h2>
            <p className="mb-4 leading-relaxed">
              As we serve users in the European Union, we comply with the
              General Data Protection Regulation (GDPR). Your rights include:
              the right to erasure (&quot;right to be forgotten&quot; regarding
              your personal data), the right to object to processing based on
              legitimate interests, and data portability (to receive your data
              in a structured, machine-readable format).
            </p>
            <p className="mb-4 leading-relaxed">
              For advertising and analytics that use your device or advertising
              identifier, we rely on your consent; you may withdraw consent at
              any time via your device settings (e.g. Settings → Privacy &
              Security → Tracking on iOS).
            </p>
            <p className="text-sm italic leading-relaxed">
              European users may lodge a complaint with their local supervisory
              authority (e.g., CNIL in France).
            </p>
          </section>

          {/* California Users (CCPA) */}
          <section>
            <h2 className="text-3xl mb-6">California Users (CCPA)</h2>
            <p className="leading-relaxed mb-4">
              California residents have the right to know what personal
              information we collect, to delete their personal information, and
              to opt out of the &quot;sale&quot; or &quot;sharing&quot; of
              personal information as defined under the California Consumer
              Privacy Act (CCPA). You can opt out of tracking and limit how your
              device or advertising identifier is used for personalized
              advertising via the controls described in the Advertising and
              Analytics section above (e.g. Settings → Privacy & Security →
              Tracking on iOS).
            </p>
          </section>

          {/* Contact Us */}
          <footer>
            <h2 className="text-3xl mb-6">Contact Us</h2>
            <p className="leading-relaxed mb-4">
              If you have any questions or wish to exercise your data rights
              (including &quot;GDPR Request&quot;), please reach out.
            </p>
            <p className="leading-relaxed mb-2">
              Email:{" "}
              <a
                href="mailto:itselbarryamine@gmail.com"
                className="underline hover:text-primary transition-colors"
              >
                itselbarryamine@gmail.com
              </a>
            </p>
            <p className="leading-relaxed mb-2">
              Developer: Amine Elbarry. App: Deerly - Mindfulness & Gratitude.
            </p>
          </footer>
        </div>
      </div>
    </main>
  );
}
