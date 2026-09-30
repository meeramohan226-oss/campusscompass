import type { Metadata } from "next";
import { Noto_Serif, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";

const notoSerif = Noto_Serif({
  variable: "--font-serif-heading",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CampusCompass | Kerala Student Resource Portal",
  description: "One-stop mobile-first resource portal for college students in Kerala (KTU, SSLC/+2, Thrissur). Scholarships, Transport, Stays, Part-time Jobs & Campus Connect.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${notoSerif.variable} ${inter.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-navy-950 text-slate-100 font-sans selection:bg-brand-primary selection:text-slate-950 pb-20 md:pb-0">
        <Header />
        <main className="flex-1 max-w-md w-full mx-auto px-4 py-4 md:max-w-4xl md:px-6">
          {children}
        </main>
        <BottomNav />
      </body>
    </html>
  );
}
