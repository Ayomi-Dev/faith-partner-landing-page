import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lord Faith Partner School — Building Tomorrow's Leaders",
  description:
    "Faith Partner School offers world-class education from Nursery through Secondary School. 98% WAEC pass rate. WAEC & NECO approved. Lagos, Nigeria.",
  keywords: [
    "school Lagos Nigeria",
    "WAEC approved school",
    "best secondary school Lagos",
    "Lord Faith Partner School",
    "nursery primary secondary school Nigeria",
  ],
  openGraph: {
    title: "Lord Faith Partner School — Building Tomorrow's Leaders",
    description:
      "Quality education from Nursery to SS3. Excellence, character, innovation — shaping futures since 2014.",
    type: "website",
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lord Faith Partner School",
    description: "Building Tomorrow's Leaders Through Quality Education",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}