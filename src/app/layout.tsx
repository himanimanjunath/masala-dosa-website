import type { Metadata } from "next";
import { Geist, Geist_Mono, Lato, Merriweather} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

 const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["400", "700"],
});


const lato = Lato({            // Add Lato font setup here
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],     // optionally specify weights you want
});

export const metadata: Metadata = {
  title: "Masala Dosa - Vegetarian Restaurant",
  description: "Authentic South Indian Cuisine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lato.variable} ${merriweather.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
