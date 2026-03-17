import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cydenti Brand Guidelines",
  description: "Official brand guidelines for Cydenti.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased bg-slate-50 text-slate-900`}
      >
        <div className="flex">
            <div className="fixed inset-y-0 z-50 flex w-72 flex-col">
              <Sidebar />
            </div>
            <main className="pl-72 w-full min-h-screen py-12">
                <div className="max-w-6xl mx-auto px-16">
                    {children}
                </div>
            </main>
        </div>
      </body>
    </html>
  );
}
