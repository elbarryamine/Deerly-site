import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import envConfig from "@/lib/envConfig";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Deerly - Cultivate Gratitude",
  description:
    "Grow your gratitude tree with daily affirmations and reflections.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const clarityProjectId = envConfig.clarity.projectId;

  return (
    <html lang="en">
      <head>
        {clarityProjectId ? (
          <Script id="ms-clarity" strategy="afterInteractive">{`
                (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "${clarityProjectId}");
          `}</Script>
        ) : null}
      </head>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
