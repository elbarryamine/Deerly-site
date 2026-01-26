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
            <p className="leading-relaxed mb-8">
              Have questions about Deerly? Need help with your account or have a
              suggestion to make the app better? We&apos;d love to hear from
              you.
            </p>

            <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold mb-4">Email Support</h3>
              <p className="mb-6 text-gray-600">
                For the fastest response, please email us directly. We typically
                respond within 24-48 hours.
              </p>
              <a
                href="mailto:itselbarryamine@gmail.com"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-black text-white font-semibold hover:bg-black/80 transition-all shadow-lg hover:shadow-xl active:scale-95"
              >
                itselbarryamine@gmail.com
              </a>
            </div>
          </section>

          <section>
            <h2 className="text-3xl mb-6">Common Questions</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  How do I restore my subscription?
                </h3>
                <p>
                  If you&apos;ve upgraded to Pro and switched devices, you can
                  restore your purchase in the App Settings. Ensure you&apos;re
                  logged into the same Apple or Google account used for the
                  original purchase.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Is my data private?
                </h3>
                <p>
                  Yes. Your gratitude entries are yours alone. We use secure
                  encryption for cloud sync and do not share your personal
                  journal entries with anyone.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Can I export my entries?
                </h3>
                <p>
                  We are currently working on an export feature. If you need
                  your data urgently, please contact us via email and we will
                  assist you.
                </p>
              </div>
            </div>
          </section>

          <footer className="bg-primary/5 p-10 rounded-[2rem] border border-primary/10 mt-16">
            <h2 className="text-2xl font-bold mb-4 text-primary">
              Still need help?
            </h2>
            <p className="leading-relaxed mb-6">
              If your question isn&apos;t answered above, don&apos;t hesitate to
              reach out. Our goal is to make your experience with Deerly as
              smooth as possible.
            </p>
            <div className="space-y-2">
              <p className="font-medium text-lg">
                <a
                  href="mailto:itselbarryamine@gmail.com"
                  className="underline hover:text-primary transition-colors"
                >
                  itselbarryamine@gmail.com
                </a>
              </p>
              <p className="text-sm text-muted">
                Amine Elbarry — Developer of Deerly
              </p>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}
