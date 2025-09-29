import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Nav from "./Sections/Nav";

const nunito = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // choose what you need
  variable: '--font-nunito',
});


export const metadata: Metadata = {
  title: "Bags of Blessings",
  description: 'Fresh groceries delivered to you',
  icons: {
    icon: "/logo.jpeg"
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable}`}>
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
