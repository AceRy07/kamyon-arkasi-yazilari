import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/oswald";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const baslik = "Kamyon Arkası Yazıları — Türkiye'nin yol arşivi";
const aciklama =
  "Türkiye yollarında gördüğümüz kamyon arkası yazılarını fotoğraflıyor, bir araya getiriyoruz. Aşkı, gurbeti, esprisi, duası... Hepsi tek yerde.";

export const metadata: Metadata = {
  title: baslik,
  description: aciklama,
  openGraph: { title: baslik, description: aciklama, siteName: "Kamyon Arkası Yazıları", locale: "tr_TR", type: "website" },
  twitter: { card: "summary", title: baslik, description: aciklama },
};

export const viewport: Viewport = { themeColor: "#1b1b1d" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className="flex min-h-screen flex-col">
        <a
          href="#icerik"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-yol focus:px-4 focus:py-3 focus:font-semibold"
        >
          İçeriğe geç
        </a>
        <Header />
        <div id="icerik" className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
