import Link from "next/link";
import type { Metadata } from "next";
import SubmitForm from "@/components/SubmitForm";

export const metadata: Metadata = { title: "Yazı gönder — Kamyon Arkası Yazıları" };

const ipuclari = [
  ["Güvenli çek.", "Direksiyondayken fotoğraf çekme; park halindeyken ya da yolcu koltuğundan çek."],
  ["Net olsun.", "Yazının tamamı kadrajda ve okunur olmalı."],
  ["Gizlilik.", "Plakalar ve yüzler yayımlanmadan önce gizlenir."],
  ["Kontrol.", "Gönderiler yayımlanmadan önce incelenir."],
];

export default function YaziGonder() {
  return (
    <main className="py-16">
      <div className="mx-auto max-w-[1200px] px-6">
        <Link href="/" className="inline-block py-2.5 font-semibold text-kirmizi no-underline hover:underline">← Ana sayfaya dön</Link>
        <h1 className="mt-3 font-display text-[clamp(38px,6vw,64px)] font-bold uppercase leading-[1.05]">Yazı gönder</h1>
        <p className="mt-4 max-w-[620px] text-lg leading-relaxed text-gri">Yolda gördüğün kamyon arkası yazısının fotoğrafını ve birkaç bilgiyi paylaş. Kontrolden sonra arşive eklenir.</p>
        <div className="mt-12 flex flex-wrap items-start gap-10">
          <SubmitForm />
          <aside className="on-dark min-w-0 max-w-[440px] flex-[1_1_320px] rounded-lg bg-asfalt p-8 text-krem">
            <h2 className="font-display text-3xl font-bold uppercase text-yol">Gönderirken</h2>
            <ul className="mt-5 flex flex-col gap-4 text-base leading-relaxed text-[#d9d4c7]">
              {ipuclari.map(([b, m]) => (
                <li key={b}><strong className="text-krem">{b}</strong> {m}</li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </main>
  );
}
