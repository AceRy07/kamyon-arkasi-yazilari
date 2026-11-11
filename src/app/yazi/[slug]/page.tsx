import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import LikeButton from "@/components/LikeButton";
import { Foto } from "@/components/PostCard";
import { YAZILAR, tarihYaz, yaziBul } from "@/lib/posts";

export function generateStaticParams() {
  return YAZILAR.map((y) => ({ slug: y.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const y = yaziBul((await params).slug);
  return y ? { title: `${y.baslik} — Kamyon Arkası Yazıları` } : {};
}

export default async function YaziSayfasi({ params }: { params: Promise<{ slug: string }> }) {
  const y = yaziBul((await params).slug);
  if (!y) notFound();

  return (
    <main className="py-12">
      <article className="mx-auto max-w-[1000px] px-6">
        <Link href="/#yazilar" className="inline-block py-2.5 font-semibold text-kirmizi no-underline hover:underline">← Tüm yazılar</Link>
        <div className="kart-golge mt-4 overflow-hidden rounded-lg border-2 border-asfalt bg-kagit">
          <div className="relative aspect-[4/3] w-full bg-asfalt-2 sm:aspect-[16/10]"><Foto yazi={y} /></div>
          <div className="flex flex-col gap-5 p-6 sm:p-10">
            <Link href={`/?kategori=${encodeURIComponent(y.kategori)}#yazilar`} className="self-start rounded-full bg-yol px-3.5 py-1 text-[13px] font-semibold uppercase tracking-wide text-asfalt no-underline">{y.kategori}</Link>
            <h1 className="font-display text-[clamp(34px,6vw,64px)] font-bold uppercase leading-[1.05]">{y.baslik}</h1>
            <dl className="flex flex-wrap gap-x-10 gap-y-3 text-[16px]">
              {y.konum && <div><dt className="text-sm text-gri">Görüldüğü yer</dt><dd className="font-semibold">{y.konum}</dd></div>}
              <div><dt className="text-sm text-gri">Gönderen</dt><dd className="font-semibold">{y.gonderen}</dd></div>
              <div><dt className="text-sm text-gri">Tarih</dt><dd className="font-semibold">{tarihYaz(y.tarih)}</dd></div>
            </dl>
            <div className="flex items-center justify-between gap-4 border-t border-[#d9d2c2] pt-5">
              <span className="text-sm text-gri">Beğendiysen kalbe dokun</span>
              <LikeButton id={y.id} baslangic={y.begeni} />
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
