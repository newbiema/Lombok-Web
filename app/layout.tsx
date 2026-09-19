import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lombokweb.site"),
  title: "LombokWeb - Jasa Pembuatan Website Profesional di Lombok",
  description:
    "Jasa pembuatan website profesional di Lombok untuk UMKM, travel, villa, company profile, dan berbagai kebutuhan bisnis.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "LombokWeb - Jasa Pembuatan Website Profesional di Lombok",
    description:
      "Website modern untuk bisnis Lombok. Mobile-friendly, cepat, SEO-friendly, dan siap menerima inquiry lewat WhatsApp.",
    url: "/",
    siteName: "LombokWeb",
    locale: "id_ID",
    type: "website",
    images: [{ url: "/images/logo.webp", alt: "Logo LombokWeb" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "LombokWeb - Jasa Website Profesional untuk Bisnis Lombok",
    description:
      "Buat website bisnis yang modern, cepat, dan langsung terhubung ke WhatsApp.",
    images: ["/images/logo.webp"],
  },
  icons: {
    icon: ["/favicon.ico", "/favicon-32x32.png", "/favicon-16x16.png"],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={manrope.variable}>
      <head>
        <link rel="stylesheet" href="/css/output.css" />
        <link rel="stylesheet" href="/css/fontawesome.min.css" />
        <link rel="stylesheet" href="/css/lombokweb-design.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
