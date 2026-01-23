import Link from "next/link";
import Image from "next/image";

export default function TermsOfUse() {
  return (
    <main className="min-h-screen bg-[#fdf7ef] text-black font-sans">
      <div className="max-w-3xl mx-auto px-6 py-12 lg:py-24">
        <div className="relative w-24 h-24 mb-6">
          <Image
            src="/logo-transparent.png"
            alt="Deerly Logo"
            fill
            className="object-contain"
          />
        </div>

        <Link
          href="/"
          className="inline-flex items-center text-muted hover:text-primary transition-colors mb-8"
        >
          ← Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-2">Terms of Use</h1>
        <p className="text-muted mb-12">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="prose prose-lg prose-headings:font-bold prose-headings:text-black prose-p:text-gray-700 prose-a:text-primary max-w-none space-y-8">
          <section>
            <h2 className="text-2xl mb-4">1. Acceptance of Terms</h2>
            <p className="leading-relaxed">
              By accessing and using Deerly ("the App"), you agree to be bound
              by these Terms of Use ("Terms"). If you disagree with any part of
              the terms, you may not access the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4">2. Use of Service</h2>
            <p className="leading-relaxed">
              Deerly provides a digital platform for gratitude journaling and
              personal growth. You agree to use the service only for lawful
              purposes and in accordance with these Terms. You are granted a
              limited, non-exclusive, non-transferable license to use the App
              for personal, non-commercial use.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4">3. User Accounts</h2>
            <p className="mb-4">
              When you create an account with us, you guarantee that the
              information you provide, including your name, age, and email, is
              accurate, complete, and current.
            </p>
            <p className="leading-relaxed">
              You are responsible for maintaining the confidentiality of your
              account and password and for restricting access to your device.
              You agree to accept responsibility for all activities that occur
              under your account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4">4. Intellectual Property</h2>
            <p className="leading-relaxed">
              The Service and its original content (excluding Content provided
              by users), features, and functionality are and will remain the
              exclusive property of Deerly and its licensors. The Service is
              protected by copyright, trademark, and other laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4">5. Disclaimer</h2>
            <p className="leading-relaxed">
              Your use of the Service is at your sole risk. The Service is
              provided on an "AS IS" and "AS AVAILABLE" basis. The Service is
              provided without warranties of any kind, whether express or
              implied, including, but not limited to, implied warranties of
              merchantability, fitness for a particular purpose,
              non-infringement, or course of performance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4">6. Changes to Terms</h2>
            <p className="leading-relaxed">
              We reserve the right, at our sole discretion, to modify or replace
              these Terms at any time. By continuing to access or use our
              Service after those revisions become effective, you agree to be
              bound by the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4">7. Contact Us</h2>
            <p className="leading-relaxed">
              If you have any questions about these Terms, please contact us.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
