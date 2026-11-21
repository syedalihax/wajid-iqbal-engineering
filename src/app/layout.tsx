import type { Metadata } from "next";
import { Plus_Jakarta_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { COMPANY_INFO } from "@/data/company";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Wajid Iqbal & Engineering | Civil & Turnkey Construction in Karachi",
    template: "%s | Wajid Iqbal & Engineering",
  },
  description:
    "Licensed construction and civil engineering firm serving Karachi for over 30 years. Specialists in residential villas, commercial plazas, automotive showrooms (Haval, Chery), schools, and interior design.",
  keywords: [
    "construction company in Karachi",
    "civil engineering contractors Karachi",
    "house construction DHA Karachi",
    "commercial building contractor Karachi",
    "automotive showroom construction Pakistan",
    "Wajid Iqbal and Engineering",
  ],
  openGraph: {
    title: "Wajid Iqbal & Engineering | 30+ Years Building Karachi",
    description:
      "Licensed residential, commercial, institutional, and civil engineering contractors in Karachi. Led by CEO Iqbal Khan.",
    locale: "en_PK",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ConstructionBusiness",
    name: COMPANY_INFO.name,
    description:
      "Licensed residential, commercial, showroom, institutional, and civil engineering construction company operating exclusively in Karachi for over 30 years.",
    founder: {
      "@type": "Person",
      name: COMPANY_INFO.ceoName,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Street No. 2, Near Chase Up, Hassan Square",
      addressLocality: "Karachi",
      addressRegion: "Sindh",
      addressCountry: "PK",
    },
    areaServed: {
      "@type": "City",
      name: "Karachi",
    },
    telephone: ["+923000288366", "+923219292411"],
    email: COMPANY_INFO.email,
  };

  return (
    <html lang="en" className={jakarta.variable + " " + plexMono.variable}>
      <body className="font-sans text-[#0F172A] bg-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
