import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const playfair = localFont({
  src: [
    {
      path: "../../fonts/PlayfairDisplay-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../fonts/PlayfairDisplay-Italic.ttf",
      weight: "400",
      style: "italic",
    }
  ],
  variable: "--font-playfair",
});

const futuraBold = localFont({
  src: "../../fonts/FuturaBold.ttf",
  variable: "--font-futura-bold",
});

const futuraBook = localFont({
  src: "../../fonts/FuturaBook.ttf",
  variable: "--font-futura-book",
});

export const metadata: Metadata = {
  title: "Swathy Moorthy - Ecommerce Strategist",
  description: "Portfolio of Swathy Moorthy",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${futuraBold.variable} ${futuraBook.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
