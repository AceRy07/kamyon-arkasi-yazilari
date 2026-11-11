import Link from "next/link";
import type { Yazi } from "@/lib/posts";
import LikeButton from "./LikeButton";

export function FotoYok() {
  return (
    <div className="foto-yok flex h-full w-full items-center justify-center">
      <span className="text-sm font-semibold uppercase tracking-[0.12em] text-[#d0d0d4]">Fotoğraf yakında</span>
    </div>
  );
}

export default function PostCard({ yazi }: { yazi: Yazi }) {
  return (
    <article className="kart-golge flex flex-col overflow-hidden rounded-lg border-2 border-asfalt bg-kagit">
      <Link href={`/yazi/${yazi.slug}`} tabIndex={-1} aria-hidden="true" className="relative block aspect-[4/3] bg-asfalt-2">
        <FotoYok />
      </Link>
      <div className="flex flex-1 flex-col gap-3.5 p-5">
        <Link
          href={`/?kategori=${encodeURIComponent(yazi.kategori)}#yazilar`}
          className="self-start rounded-full bg-yol px-3 py-1 text-[13px] font-semibold uppercase tracking-wide text-asfalt no-underline"
        >
          {yazi.kategori}
        </Link>
        <h3 className="font-display text-[28px] font-bold uppercase leading-[1.15]">
          <Link href={`/yazi/${yazi.slug}`} className="text-asfalt no-underline hover:text-kirmizi">{yazi.baslik}</Link>
        </h3>
        <p className="text-[15px] text-gri">{yazi.konum}</p>
        <div className="mt-auto flex items-center justify-between gap-3 border-t border-[#d9d2c2] pt-3.5">
          <span className="text-sm text-gri">Gönderen: {yazi.gonderen}</span>
          <LikeButton id={yazi.id} baslangic={yazi.begeni} />
        </div>
      </div>
    </article>
  );
}
