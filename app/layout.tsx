import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Demo County - Official County Government Website",
  description: "Demo County government services, property assessments, permits, and resources for residents and businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
        
        {/* Modern React Chatbot Widget */}
        <Script
          src={process.env.NEXT_PUBLIC_CHATBOT_URL || '/chatbot.min.js'}
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
