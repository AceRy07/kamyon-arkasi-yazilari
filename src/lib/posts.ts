export const KATEGORILER = ["Aşk", "Anne-Baba", "Esprili", "Gurbet", "Felsefe", "Yol", "Diğer"] as const;
export type Kategori = (typeof KATEGORILER)[number];

export type Yazi = {
  id: string;
  slug: string;
  baslik: string;
  kategori: Kategori;
  konum?: string;
  gonderen: string;
  tarih: string; // ISO
  begeni: number;
  foto?: string; // public/ altındaki yol
};

// Geçici veri — backend eklenince veritabanından gelecek.
export const YAZILAR: Yazi[] = [
  { id: "yeni-6", slug: "isi-dusen-sirinleri", baslik: "İşi düşen şirinleri, işi biten gargameli oynuyor", kategori: "Esprili", gonderen: "Anonim", tarih: "2026-11-11", begeni: 0, foto: "/yazilar/6.jpg" },
  { id: "yeni-5", slug: "sen-gozlerime-esir", baslik: "Sen gözlerime esir, bense kahkahalarına müptelayım", kategori: "Aşk", gonderen: "Anonim", tarih: "2026-11-10", begeni: 0, foto: "/yazilar/5.jpg" },
  { id: "yeni-4", slug: "zaten-dunyaya-gelmeye-gelmedik-mi", baslik: "Zaten dünyaya gelmeye gelmedik mi?", kategori: "Esprili", gonderen: "Anonim", tarih: "2026-11-09", begeni: 0, foto: "/yazilar/4.jpg" },
  { id: "yeni-3", slug: "elegi-eledik", baslik: "Eleği eledik, düşen düştü, kalan dostlara selam olsun", kategori: "Diğer", gonderen: "Anonim", tarih: "2026-11-08", begeni: 0, foto: "/yazilar/3.jpg" },
  { id: "yeni-2", slug: "dogarken-kulagima-3-kere", baslik: "Doğarken kulağıma 3 kere borç borç borç diye mi fısıldadılar bitmiyor", kategori: "Esprili", gonderen: "Anonim", tarih: "2026-11-07", begeni: 0, foto: "/yazilar/2.jpg" },
  { id: "yeni-1", slug: "kaplan-kotunlerin-fikirleri", baslik: "Kaplan kötünlerin fikirleri yüzünden uykusunu kaçırmaz", kategori: "Felsefe", gonderen: "Anonim", tarih: "2026-11-06", begeni: 0, foto: "/yazilar/1.jpg" },
  { id: "seed-6", slug: "yol-uzun-hikaye-cok", baslik: "Yol uzun, hikâye çok", kategori: "Yol", konum: "Samsun – Ordu sahil yolu", gonderen: "Örnek", tarih: "2026-10-06", begeni: 0 },
  { id: "seed-5", slug: "gurbetin-yolu-uzun-donusu-hasret", baslik: "Gurbetin yolu uzun, dönüşü hasret", kategori: "Gurbet", konum: "Erzurum çıkışı", gonderen: "Örnek", tarih: "2026-10-05", begeni: 0 },
  { id: "seed-4", slug: "sevdan-yolcu-etti-yol-bana-kaldi", baslik: "Sevdan yolcu etti, yol bana kaldı", kategori: "Aşk", konum: "Konya yolu", gonderen: "Örnek", tarih: "2026-10-04", begeni: 0 },
  { id: "seed-3", slug: "takip-mesafeni-koru-hayat-kisa", baslik: "Takip mesafeni koru, hayat kısa", kategori: "Esprili", konum: "Mersin – Adana otoyolu", gonderen: "Örnek", tarih: "2026-10-03", begeni: 0 },
  { id: "seed-2", slug: "anam-duasi-babam-sofrasi", baslik: "Anam duası, babam sofrası", kategori: "Anne-Baba", konum: "Bursa çevre yolu", gonderen: "Örnek", tarih: "2026-10-02", begeni: 0 },
  { id: "seed-1", slug: "bu-da-gecer-yahu", baslik: "Bu da geçer yahu", kategori: "Felsefe", konum: "İstanbul – Ankara yolu", gonderen: "Örnek", tarih: "2026-10-01", begeni: 0 },
];

export function yaziBul(slug: string) {
  return YAZILAR.find((y) => y.slug === slug);
}

export function tarihYaz(iso: string) {
  return new Intl.DateTimeFormat("tr-TR", { day: "numeric", month: "long", year: "numeric" }).format(new Date(iso));
}
