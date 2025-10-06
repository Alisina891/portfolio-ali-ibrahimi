import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ این بخش جدید است
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#3B82F6",
};

export const metadata: Metadata = {
  title: "Ali Sina Ibrahimi - Full Stack Developer & Web Designer",
  description:
    "Portfolio of Ali Sina Ibrahimi, a passionate Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. View my projects and get in touch.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Next.js",
    "Node.js",
    "Web Development",
    "Frontend Developer",
    "Backend Developer",
    "Ali Sina Ibrahimi",
    "Portfolio",
    "JavaScript",
    "TypeScript",
  ],
  authors: [{ name: "Ali Sina Ibrahimi" }],
  creator: "Ali Sina Ibrahimi",
  publisher: "Ali Sina Ibrahimi",
  robots: "index, follow",
  openGraph: {
    title: "Ali Sina Ibrahimi - Full Stack Developer",
    description:
      "Portfolio showcasing full-stack development projects using React, Next.js, and Node.js. Specializing in modern web applications and digital solutions.",
    url: "https://alisina-dev.vercel.app",
    siteName: "Ali Sina Portfolio",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ali Sina Ibrahimi - Full Stack Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ali Sina Ibrahimi - Full Stack Developer",
    description:
      "Portfolio showcasing full-stack development projects using modern technologies",
    creator: "@alisina891",
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preload critical resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ali Sina Ibrahimi",
              jobTitle: "Full Stack Developer",
              url: "https://alisina-dev.vercel.app",
              sameAs: [
                "https://github.com/Alisina891",
                "https://www.linkedin.com/in/ali-sina-ibrahimi-b510a232b",
              ],
              knowsAbout: [
                "React",
                "Next.js",
                "Node.js",
                "TypeScript",
                "JavaScript",
                "Web Development",
                "Full Stack Development",
              ],
              description:
                "Full Stack Developer specializing in modern web technologies and digital solutions.",
              alumniOf: {
                "@type": "Organization",
                name: "Self-Taught Developer",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
