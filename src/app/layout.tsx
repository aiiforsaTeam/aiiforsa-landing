import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClientProviders } from "@/components/ClientProviders";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AiiForsa - AI-Powered Career Intelligence Platform",
  description: "Transform your career with AI-driven insights. AiiForsa empowers job seekers and businesses with cutting-edge AI technology for personalized career advice, smart job matching, and optimized hiring.",
  keywords: ["AI career advisor", "job matching", "CV review", "recruitment platform", "career guidance", "ATS optimization"],
  authors: [{ name: "AiiForsa" }],
  openGraph: {
    title: "AiiForsa - AI-Powered Career Intelligence Platform",
    description: "Transform your career with AI-driven insights. Get personalized career advice, match with perfect opportunities, and optimize your hiring process.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AiiForsa - AI-Powered Career Intelligence Platform",
    description: "Transform your career with AI-driven insights. Get personalized career advice, match with perfect opportunities, and optimize your hiring process.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme');
                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
