import Link from "next/link";
import Image from "next/image";

export default function PrivacyPolicy() {
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

        <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-muted mb-12">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="prose prose-lg prose-headings:font-bold prose-headings:text-black prose-p:text-gray-700 prose-a:text-primary max-w-none space-y-8">
          <section>
            <h2 className="text-2xl mb-4">1. Introduction</h2>
            <p className="leading-relaxed">
              Welcome to Deerly ("we," "our," or "us"). We are committed to
              protecting your personal information and your right to privacy.
              This Privacy Policy explains what information we collect, how we
              use it, and your rights in relation to it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4">2. Information We Collect</h2>
            <p className="mb-4">
              We collect minimal information necessary to provide you with a
              personalized experience.
            </p>

            <h3 className="text-xl font-semibold mb-2">
              Information You Provide to Us
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Name & Age:</strong> We collect your name and age
                directly within the app to personalize your profile and tailor
                the user experience appropriate for your age group.
              </li>
              <li>
                <strong>Email Address:</strong> When you sign up or log in, we
                collect your email address to secure your account, allow for
                account recovery, and communicate important updates.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl mb-4">3. How We Use Your Information</h2>
            <p className="mb-4">
              We use the information we collect for the following specific
              purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>personalization:</strong> To address you by name and
                customize content (such as gratitude prompts or insights) to be
                relevant to your age and life stage.
              </li>
              <li>
                <strong>Experience Optimization:</strong> To improve our app's
                functionality and ensure it runs smoothly on your device.
              </li>
              <li>
                <strong>Account Management:</strong> To manage your
                registration, login, and provide customer support.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl mb-4">4. Data Security</h2>
            <p className="leading-relaxed">
              We value your trust in providing us your Personal Information,
              thus we are striving to use commercially acceptable means of
              protecting it. But remember that no method of transmission over
              the internet, or method of electronic storage is 100% secure and
              reliable, and we cannot guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4">5. Contact Us</h2>
            <p className="leading-relaxed">
              If you have any questions or suggestions about our Privacy Policy,
              do not hesitate to contact us.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
