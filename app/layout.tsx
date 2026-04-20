import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const bebas_neue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: ["400"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Top Website Design and Development Company - MiraculousSoftsolutions",
  description: "MiraculousSoftsolutions is #1 Top Ranked Website Design and Development Company dedicated to build up web applications for to make online presence",
  keywords: [ "IT company", "web development", "mobile apps", "cloud solutions", "Miraculous Soft Solutions"],
  authors: [{ name: "Miraculous Soft Solutions" }],
  openGraph: {
    title: "Top Website Design and Development Company - MiraculousSoftsolutions",
    description: "MiraculousSoftsolutions is #1 Top Ranked Website Design and Development Company dedicated to build up web applications for to make online presence",
    url: "https://yourdomain.com",
    siteName: "MiraculousSoftsolutions",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MiraculousSoftsolutions",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Top Website Design and Development Company - MiraculousSoftsolutions",
    description: "MiraculousSoftsolutions is #1 Top Ranked Website Design and Development Company dedicated to build up web applications for to make online presence",
    images: ["/og-image.png"],
  },

  metadataBase: new URL("https://yourdomain.com"),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebas_neue.variable} ${inter.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
