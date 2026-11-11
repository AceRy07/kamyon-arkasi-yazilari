# Kamyon Arkası Yazıları

Türkiye yollarında görülen kamyon arkası yazılarının arşivi. **Şu an yalnızca frontend** (Next.js 15 + Tailwind CSS 4 + TypeScript).

## Çalıştırma

```bash
npm install
npm run dev
```

## Yapı

- `src/app` — sayfalar: ana sayfa, `yazi/[slug]`, `yazi-gonder`, `gizlilik`
- `src/components` — Header, Footer, PostCard, LikeButton, SubmitForm
- `src/lib/posts.ts` — geçici örnek veri (backend eklenince değişecek)

## Sıradaki adımlar (backend)

- Yazıların veritabanından gelmesi, fotoğraf yükleme
- Beğenilerin sunucuda tutulması
- Gönderilerin moderasyon paneli
