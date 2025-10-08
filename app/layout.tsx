import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Nav from "./Sections/Nav";
import Footer from "./Sections/Footer";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'], // 900 = Black
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: "Bags of Blessings",
  description: 'Fresh groceries delivered to you',
  icons: {
    icon: "/logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable}`}>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
