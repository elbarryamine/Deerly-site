import Link from "next/link";
import Image from "next/image";

export default function TermsOfUse() {
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
            Terms of Use
          </h1>
          <p className="text-muted flex items-center gap-2">
            Last Updated: January 26, 2026
          </p>
        </header>

        <div className="prose prose-lg prose-headings:font-bold prose-headings:text-black prose-p:text-gray-700 prose-a:text-primary max-w-none space-y-16">
          {/* 1. Acceptance */}
          <section>
            <h2 className="text-3xl mb-6">1. Acceptance of Terms</h2>
            <p className="leading-relaxed">
              These Terms of Use ("Terms") constitute a legally binding
              agreement between you and Amine Elbarry ("we", "us", "our", or
              "Developer") regarding your use of the Deerly mobile application
              ("App"). By downloading, installing, accessing, or using the App,
              you agree to be bound by these Terms.
            </p>
          </section>

          {/* 2. Description */}
          <section>
            <h2 className="text-3xl mb-6">2. Description of Service</h2>
            <p className="mb-4 text-gray-700 italic">
              Deerly is a mindfulness and gratitude companion that provides:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>Daily gratitude journaling and reflections.</li>
              <li>Personalized mindfulness prompts based on your goals.</li>
              <li>
                Secure cloud storage for your entries to keep your data synced.
              </li>
              <li>Premium features available through paid in-app purchases.</li>
            </ul>
          </section>

          {/* 3. Eligibility */}
          <section>
            <h2 className="text-3xl mb-6">3. Eligibility</h2>
            <p className="leading-relaxed">
              You must be at least 13 years of age to use this App. If you are
              under 18, you represent that you have obtained parental or
              guardian consent to use Deerly.
            </p>
          </section>

          {/* 4. Subscriptions */}
          <section className="bg-lavender/30 p-8 rounded-3xl border border-lavender">
            <h2 className="text-2xl font-bold mb-4">
              4. Premium Subscriptions
            </h2>
            <p className="mb-4">
              Certain features require a paid subscription, processed through
              Apple's App Store or Google Play Store.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-gray-600">
              <li>
                Subscriptions automatically renew unless cancelled 24 hours
                before the period ends.
              </li>
              <li>
                Payments are charged to your App Store or Play Store account.
              </li>
              <li>
                Free trials may be offered; you will be charged after the trial
                unless you cancel.
              </li>
              <li>
                In-app purchases and subscriptions are managed securely within
                the App.
              </li>
            </ul>
          </section>

          {/* 5. Medical Disclaimer */}
          <section className="bg-red-50/50 p-8 rounded-3xl border border-red-100">
            <h2 className="text-2xl font-bold mb-4 text-red-900">
              5. Medical Disclaimer
            </h2>
            <p className="font-bold text-red-800 mb-2 underline">
              DEERLY IS NOT MEDICAL ADVICE.
            </p>
            <p className="leading-relaxed text-red-700 mb-4">
              The content provided is for informational and motivational
              purposes only. It is not a substitute for professional mental
              health advice, diagnosis, or treatment.
            </p>
            <p className="text-sm text-red-600">
              If you are experiencing a mental health crisis, please contact
              emergency services (911 in the US, 112 in the EU, or 3114 in
              France).
            </p>
          </section>

          {/* 6. Intellectual Property */}
          <section>
            <h2 className="text-3xl mb-6">6. Intellectual Property</h2>
            <p className="leading-relaxed">
              The App, including its design, logo, and original content, is
              owned by the Developer and protected by intellectual property
              laws. You retain full ownership of the text and entries you create
              within the App.
            </p>
          </section>

          {/* 7. Prohibited Uses */}
          <section>
            <h2 className="text-3xl mb-6">7. Prohibited Uses</h2>
            <p className="mb-4">You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Reverse engineer or decompile the App.</li>
              <li>Use the App for any illegal or unauthorized purpose.</li>
              <li>Interfere with the App's servers or functionality.</li>
              <li>Harass or harm others through the use of the Service.</li>
            </ul>
          </section>

          {/* 8. Limitation of Liability */}
          <section>
            <h2 className="text-3xl mb-6">8. Limitation of Liability</h2>
            <p className="leading-relaxed text-gray-600">
              To the maximum extent permitted by law, the Developer shall not be
              liable for any indirect, incidental, or consequential damages
              arising out of your use of the App. For EU consumers, this does
              not affect your statutory rights regarding digital content
              conformity.
            </p>
          </section>

          {/* 9. Contact */}
          <footer className="bg-primary/5 p-10 rounded-[2rem] border border-primary/10">
            <h2 className="text-3xl mb-4 text-primary">Contact us</h2>
            <p className="leading-relaxed mb-6">
              For questions regarding these terms, please contact us:
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
                <strong>Location:</strong> France
              </p>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}
