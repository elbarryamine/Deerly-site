import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Support - Deerly",
  description: "Contact Deerly support for help with your gratitude journey.",
};

export default function Support() {
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
          <h1 className="text-5xl font-bold mb-4 tracking-tight">Support</h1>
          <p className="text-muted flex items-center gap-2">
            We&apos;re here to help you grow your gratitude garden.
          </p>
        </header>

        <div className="prose prose-lg prose-headings:font-bold prose-headings:text-black prose-p:text-gray-700 prose-a:text-primary max-w-none space-y-16">
          <section>
            <h2 className="text-3xl mb-6">Contact Us</h2>
            <p className="leading-relaxed mb-6">
              Have questions about Deerly? Need help with your account or have a
              suggestion to make the app better? We&apos;d love to hear from
              you.
            </p>
            <h3 className="text-xl font-semibold mb-3">Email Support</h3>
            <p className="leading-relaxed mb-4">
              For the fastest response, please email us directly. We typically
              respond within 24-48 hours. Email:{" "}
              <a
                href="mailto:itselbarryamine@gmail.com"
                className="underline hover:text-primary transition-colors"
              >
                itselbarryamine@gmail.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-3xl mb-6">Common Questions</h2>
            <h3 className="text-xl font-semibold mb-3">
              How do I restore my subscription?
            </h3>
            <p className="mb-6 leading-relaxed">
              If you&apos;ve upgraded to Pro and switched devices, you can
              restore your purchase in the App Settings. Ensure you&apos;re
              logged into the same Apple or Google account used for the original
              purchase.
            </p>
            <h3 className="text-xl font-semibold mb-3">Is my data private?</h3>
            <p className="mb-6 leading-relaxed">
              Yes. Your gratitude entries are yours alone. We use secure
              encryption for cloud sync and do not share your personal journal
              entries with anyone.
            </p>
            <h3 className="text-xl font-semibold mb-3">
              Can I export my entries?
            </h3>
            <p className="leading-relaxed">
              We are currently working on an export feature. If you need your
              data urgently, please contact us via email and we will assist you.
            </p>
          </section>

          <footer>
            <h2 className="text-3xl mb-6">Still need help?</h2>
            <p className="leading-relaxed mb-4">
              If your question isn&apos;t answered above, don&apos;t hesitate to
              reach out. Our goal is to make your experience with Deerly as
              smooth as possible.
            </p>
            <p className="leading-relaxed mb-2">
              <a
                href="mailto:itselbarryamine@gmail.com"
                className="underline hover:text-primary transition-colors"
              >
                itselbarryamine@gmail.com
              </a>
            </p>
            <p className="leading-relaxed text-muted">
              Amine Elbarry — Developer of Deerly
            </p>
          </footer>
        </div>
      </div>
    </main>
  );
}
