import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingBar from "@/components/BookingBar";

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
});

const lato = Lato({ 
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Badriville Resort - Luxury in the Himalayas",
  description: "Experience the complete Himalayan experience at Badriville Resort and Homestay.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
      <body className={`font-sans bg-background text-text antialiased`}>
        <Header />
        <main className="min-h-screen pb-24 md:pb-32">
          {children}
        </main>
        <Footer />
        <BookingBar />
      </body>
    </html>
  );
}
