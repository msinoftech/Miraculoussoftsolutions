import type { Metadata } from "next";
import { APP_NAME, BASE_URL } from "@/app/lib/config";

export const metadata: Metadata = {
  title: `Case Studies | ${APP_NAME}`,
  description: "Explore how Miraculous Soft Solutions designs, builds, and scales digital products across SaaS, healthcare, eCommerce, ERP, and enterprise platforms.",
  keywords: [
    "software case studies",
    "digital product portfolio",
    "SaaS development projects",
    "enterprise platform case studies",
    "web application success stories",
  ],
  alternates: {
    canonical: `${BASE_URL}/case-studies`,
  },
  openGraph: {
    title: `Case Studies | ${APP_NAME}`,
    description:
      "Real-world product delivery stories across industries — strategy, engineering, performance, and measurable business outcomes.",
    url: `${BASE_URL}/case-studies`,
    type: "website",
    siteName: APP_NAME,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: APP_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@miraculous_soft",
    creator: "@miraculous_soft",
    title: `Case Studies | ${APP_NAME}`,
    description:
      "Real-world product delivery stories across industries — strategy, engineering, performance, and measurable business outcomes.",
    images: ["/og-image.png"],
  },
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
