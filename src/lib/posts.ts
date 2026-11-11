export const KATEGORILER = ["Aşk", "Anne-Baba", "Esprili", "Gurbet", "Felsefe", "Yol", "Diğer"] as const;
export type Kategori = (typeof KATEGORILER)[number];

export type Yazi = {
  id: string;
  slug: string;
  baslik: string;
  kategori: Kategori;
  konum: string;
  gonderen: string;
  tarih: string; // ISO
  begeni: number;
  foto?: string;
};

// Geçici örnek veri — backend eklenince veritabanından gelecek.
export const YAZILAR: Yazi[] = [
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
