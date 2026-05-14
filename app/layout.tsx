import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ogden Pest Management - Trusted Local Pest Control in Central Oregon",
  description: "Licensed pest control expert serving Redmond, Bend, and Central Oregon. Fast response, honest pricing, eco-friendly solutions.",
  keywords: "pest control, Central Oregon, Redmond, Bend, local pest management",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
