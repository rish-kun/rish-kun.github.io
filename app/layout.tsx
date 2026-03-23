import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rishit — CS Student",
  description:
    "Portfolio of Rishit — CS Student working on Backend, DevOps, and ML/Agentic systems.",
  openGraph: {
    title: "Rishit — CS Student",
    description: "Backend · DevOps · ML",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={openSans.variable}>
      <body className="bg-[#faf8f4] text-neutral-900 font-sans antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
