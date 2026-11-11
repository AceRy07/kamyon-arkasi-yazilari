import Link from "next/link";
import PostCard from "@/components/PostCard";
import TruckIllustration from "@/components/TruckIllustration";
import { KATEGORILER, YAZILAR } from "@/lib/posts";

const kucuk = (s: string) => s.toLocaleLowerCase("tr-TR");

const adimlar = [
  { no: "01", baslik: "Gör", metin: "Yolda ilgini çeken bir kamyon arkası yazısı gördüğünde aklında tut." },
  { no: "02", baslik: "Çek", metin: "Direksiyondayken değil; park halindeyken ya da yolcu koltuğundan fotoğrafla. Güvenlik her şeyden önce." },
  { no: "03", baslik: "Gönder", metin: "Fotoğrafı yükle, yazıyı ve yolu ekle. Kontrolden sonra arşivde yerini alır." },
];

const chip = "inline-flex min-h-11 items-center rounded-full border-2 border-asfalt px-5 text-base font-semibold no-underline";

export default async function Home({ searchParams }: { searchParams: Promise<{ kategori?: string; q?: string }> }) {
  const { kategori, q } = await searchParams;
  const aranan = q?.trim() ?? "";
  const liste = YAZILAR.filter(
    (y) =>
      (!kategori || y.kategori === kategori) &&
      (!aranan || kucuk(`${y.baslik} ${y.konum}`).includes(kucuk(aranan))),
  );

  return (
    <main>
      <section className="on-dark relative bg-asfalt">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-12 px-6 pb-24 pt-[72px]">
          <div className="min-w-0 flex-[1_1_520px]">
            <p className="mb-5 font-display text-lg font-medium uppercase tracking-[0.18em] text-yol">Türkiye&apos;nin yol arşivi</p>
            <h1 className="font-display text-[clamp(44px,7vw,92px)] font-bold uppercase leading-[1.02] text-krem">
              Yolun diliyle yazılmış, <span className="text-yol">kamyonun arkasından</span> okunmuş.
            </h1>
            <p className="mt-7 max-w-[560px] text-[19px] leading-relaxed text-[#d9d4c7]">
              Türkiye yollarında gördüğümüz kamyon arkası yazılarını fotoğraflıyor, bir araya getiriyoruz. Aşkı, gurbeti, esprisi, duası... Hepsi tek yerde.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/yazi-gonder" className="rounded-md bg-yol px-7 py-4 text-lg font-semibold text-asfalt no-underline hover:brightness-95">Yazı gönder</Link>
              <a href="#yazilar" className="rounded-md border-2 border-krem px-[26px] py-3.5 text-lg font-semibold text-krem no-underline hover:bg-krem hover:text-asfalt">Yazılara göz at</a>
            </div>
          </div>
          <div className="flex min-w-0 flex-[1_1_360px] justify-center">
            <TruckIllustration />
          </div>
        </div>
        <div className="yol-cizgisi absolute inset-x-0 bottom-[30px] h-2 opacity-90" aria-hidden="true" />
      </section>

      <section id="yazilar" className="scroll-mt-4 py-[88px]">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <h2 className="font-display text-[clamp(34px,5vw,52px)] font-bold uppercase leading-[1.05]">Yolda görülenler</h2>
              <p className="mt-3 max-w-[560px] text-[17px] leading-normal text-gri">Okuyucuların yollarda yakaladığı yazılar, en yeniden eskiye.</p>
            </div>
            <form role="search" action="/#yazilar" method="get" className="flex gap-2">
              {kategori && <input type="hidden" name="kategori" value={kategori} />}
              <label htmlFor="ara" className="sr-only">Yazılarda ara</label>
              <input id="ara" type="search" name="q" defaultValue={aranan} placeholder="Yazı ya da yer ara" className="min-h-12 w-64 max-w-full rounded-md border-2 border-asfalt bg-white px-4 text-[17px]" />
              <button type="submit" className="min-h-12 cursor-pointer rounded-md border-2 border-asfalt bg-asfalt px-5 font-semibold text-krem hover:bg-asfalt-2">Ara</button>
            </form>
          </div>

          <nav aria-label="Kategoriler" className="-mx-6 mt-8 overflow-x-auto px-6 pb-2">
            <ul className="flex gap-3 sm:flex-wrap">
              <li className="shrink-0">
                <Link href="/#yazilar" aria-current={!kategori ? "page" : undefined} className={`${chip} ${!kategori ? "bg-asfalt text-krem" : "bg-transparent text-asfalt hover:bg-yol"}`}>Hepsi</Link>
              </li>
              {KATEGORILER.map((k) => (
                <li key={k} className="shrink-0">
                  <Link href={`/?kategori=${encodeURIComponent(k)}#yazilar`} aria-current={kategori === k ? "page" : undefined} className={`${chip} ${kategori === k ? "bg-asfalt text-krem" : "bg-transparent text-asfalt hover:bg-yol"}`}>{k}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {liste.length ? (
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {liste.map((y) => <PostCard key={y.id} yazi={y} />)}
            </div>
          ) : (
            <p className="mt-10 text-lg text-gri">Bu aramayla eşleşen yazı bulunamadı.</p>
          )}
        </div>
      </section>

      <section id="nasil" className="on-dark scroll-mt-4 bg-asfalt py-[88px] text-krem">
        <div className="mx-auto max-w-[1200px] px-6">
          <h2 className="font-display text-[clamp(34px,5vw,52px)] font-bold uppercase leading-[1.05]">Nasıl çalışır?</h2>
          <ol className="mt-12 flex flex-wrap gap-10">
            {adimlar.map((a) => (
              <li key={a.no} className="min-w-0 flex-[1_1_280px]">
                <p className="font-display text-6xl font-bold leading-none text-yol" aria-hidden="true">{a.no}</p>
                <h3 className="mb-2.5 mt-3 font-display text-[28px] font-medium uppercase">{a.baslik}</h3>
                <p className="text-[17px] leading-relaxed text-[#d9d4c7]">{a.metin}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-yol py-[72px]">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-7 px-6">
          <h2 className="max-w-[640px] font-display text-[clamp(32px,4.5vw,48px)] font-bold uppercase leading-[1.1] text-asfalt">Yolda yeni bir yazı mı gördün? Arşive ekle.</h2>
          <Link href="/yazi-gonder" className="rounded-md bg-asfalt px-[30px] py-4 text-lg font-semibold text-krem no-underline hover:bg-asfalt-2">Yazı gönder</Link>
        </div>
      </section>
    </main>
  );
}
