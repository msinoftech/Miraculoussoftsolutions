import type { Metadata } from "next";
import { APP_NAME, BASE_URL, contactInfo } from "./lib/config";
import { Bebas_Neue } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const bebas_neue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: `Top Website Design and Development Company - ${APP_NAME}`,
  description: `${APP_NAME} is #1 Top Ranked Website Design and Development Company dedicated to build up web applications for to make online presence`,
  keywords: [ "IT company", "web development", "mobile apps", "cloud solutions" ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: `${BASE_URL}`,
  },
  openGraph: {
    title: `Top Website Design and Development Company - ${APP_NAME}`,
    description: `${APP_NAME} is #1 Top Ranked Website Design and Development Company dedicated to build up web applications for to make online presence`,
    siteName: `${APP_NAME}`,
    images: [
      {
        url: `${BASE_URL}${contactInfo.logo}`,
        width: 500,
        height: 500,
        alt: `${APP_NAME} — Top Website Design and Development Company`,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: `Top Website Design and Development Company - ${APP_NAME}`,
    description: `${APP_NAME} is #1 Top Ranked Website Design and Development Company dedicated to build up web applications for to make online presence`,
    images: [`${BASE_URL}${contactInfo.logo}`],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebas_neue.variable}`}>
      <body>
        <div id="cursor"></div>
        <div id="cursor-ring"></div>
        
        <Navbar />
        <main>{children}</main>
        <Footer />
        
        {/* Custom Cursor Script */}
        <Script id="custom-cursor-script" strategy="afterInteractive">
          {`
            const cur = document.getElementById("cursor");
            const ring = document.getElementById("cursor-ring");

            if (cur && ring) {
              let mx = 0;
              let my = 0;

              document.addEventListener("mousemove", (e) => {
                mx = e.clientX;
                my = e.clientY;
                cur.style.left = mx + "px";
                cur.style.top = my + "px";
                ring.style.left = mx + "px";
                ring.style.top = my + "px";
              });

              document
                .querySelectorAll("button,a,.svc-card,.testi-card,.ind-tile,.why-card,.cap-item,.process-item")
                .forEach((el) => {
                  el.addEventListener("mouseenter", () => {
                    cur.style.width = "18px";
                    cur.style.height = "18px";
                    ring.style.width = "54px";
                    ring.style.height = "54px";
                  });

                  el.addEventListener("mouseleave", () => {
                    cur.style.width = "10px";
                    cur.style.height = "10px";
                    ring.style.width = "36px";
                    ring.style.height = "36px";
                  });
                });
            }

            const io = new IntersectionObserver(
              (entries) => {
                entries.forEach((e) => {
                  if (e.isIntersecting) {
                    e.target.classList.add("in");
                    io.unobserve(e.target);
                  }
                });
              },
              { threshold: 0.1 }
            );

            document.querySelectorAll(".rv").forEach((el) => io.observe(el));
          `}
        </Script>
      </body>
    </html>
  );
}
