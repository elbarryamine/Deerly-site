import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#fdf7ef] flex flex-col items-center justify-center p-6 text-center">
      <div className="relative w-32 h-32 mb-8 animate-bounce-subtle">
        <Image
          src="/logo-transparent.png"
          alt="Deerly Logo"
          fill
          className="object-contain opacity-80"
          priority
        />
      </div>

      <div className="max-w-md space-y-6">
        <h1 className="text-6xl font-bold text-black tracking-tight">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800">
          Lost in the forest?
        </h2>
        <p className="text-muted text-lg leading-relaxed">
          The page you&apos;re looking for has wandered off the path. Let&apos;s
          get you back to your gratitude garden.
        </p>

        <div className="pt-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-black text-white font-semibold hover:bg-black/80 transition-all shadow-lg hover:shadow-xl active:scale-95 group"
          >
            <span className="mr-2 group-hover:-translate-x-1 transition-transform">
              ←
            </span>
            Return Home
          </Link>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 blur-3xl rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/5 blur-3xl rounded-full" />
      </div>
    </main>
  );
}
