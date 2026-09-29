import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://institutmartessi.com"),
  title: "Institut Martessi — Site en cours de développement",
  description:
    "Le nouveau site de l'Institut Martessi est en cours de préparation. Travail – Discipline – Succès, depuis 2008.",
  icons: {
    icon: "/logo.webp",
  },
  openGraph: {
    title: "Institut Martessi — Site en cours de développement",
    description:
      "Notre nouveau site est en cours de préparation. Revenez bientôt.",
    images: [{ url: "/logo.webp", width: 1024, height: 1024 }],
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
