import { Sofia_Sans, Syne } from "next/font/google";
import "./globals.css";

const sofia = Sofia_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Negin Shafaei",
  description: "Welcome to my Journey",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${sofia.variable} ${syne.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
