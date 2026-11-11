"use client";

import { useState } from "react";
import { KATEGORILER } from "@/lib/posts";

const input = "min-h-12 w-full rounded-md border-2 border-asfalt bg-white px-4 text-[17px] text-asfalt";

// Frontend aşaması: form henüz bir sunucuya gönderilmiyor, yalnızca doğrulanıp onay gösteriliyor.
export default function SubmitForm() {
  const [dosya, setDosya] = useState("");
  const [gonderildi, setGonderildi] = useState(false);

  if (gonderildi) {
    return (
      <div role="status" className="kart-golge flex min-w-0 flex-[1_1_560px] flex-col gap-4 rounded-lg border-2 border-asfalt bg-kagit p-8">
        <h2 className="font-display text-3xl font-bold uppercase">Teşekkürler!</h2>
        <p className="text-lg leading-relaxed text-gri">Yazın alındı. Kontrolden sonra arşive eklenecek.</p>
        <button type="button" onClick={() => { setGonderildi(false); setDosya(""); }} className="min-h-[52px] cursor-pointer self-start rounded-md border-2 border-asfalt bg-yol px-8 text-lg font-semibold">Yeni yazı gönder</button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const f = new FormData(e.currentTarget);
        if (f.get("web_sitesi")) return; // bot tuzağı
        setGonderildi(true);
      }}
      className="kart-golge relative flex min-w-0 flex-[1_1_560px] flex-col gap-7 rounded-lg border-2 border-asfalt bg-kagit p-6 sm:p-8"
    >
      <div className="flex flex-col gap-2.5">
        <label htmlFor="foto" className="text-base font-semibold">Fotoğraf</label>
        <label htmlFor="foto" className="flex min-h-[200px] cursor-pointer flex-col items-center justify-center gap-2.5 rounded-lg border-2 border-dashed border-asfalt bg-[#f7f0e0] p-6 text-center hover:bg-[#f1e8d3]">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1b1b1d" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 16V5" /><path d="M7.5 9.5 12 5l4.5 4.5" /><path d="M4 16v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3" />
          </svg>
          <span className="text-[17px] font-semibold">{dosya || "Fotoğrafı seç ya da buraya bırak"}</span>
          <span className="text-sm text-gri">JPG, PNG veya WebP · en fazla 8 MB · yazı net okunmalı</span>
        </label>
        <input id="foto" name="foto" type="file" accept="image/jpeg,image/png,image/webp" required className="sr-only" onChange={(e) => setDosya(e.target.files?.[0]?.name ?? "")} />
      </div>

      <div className="flex flex-col gap-2.5">
        <label htmlFor="metin" className="text-base font-semibold">Kamyonun arkasındaki yazı</label>
        <input id="metin" name="metin" type="text" required minLength={3} maxLength={140} placeholder="Yazıyı olduğu gibi yaz" className={input} />
      </div>

      <div className="flex flex-wrap gap-6">
        <div className="flex min-w-[220px] flex-1 flex-col gap-2.5">
          <label htmlFor="kategori" className="text-base font-semibold">Kategori</label>
          <select id="kategori" name="kategori" required defaultValue="" className={input}>
            <option value="" disabled>Seç</option>
            {KATEGORILER.map((k) => <option key={k} value={k}>{k}</option>)}
          </select>
        </div>
        <div className="flex min-w-[220px] flex-1 flex-col gap-2.5">
          <label htmlFor="konum" className="text-base font-semibold">Nerede gördün?</label>
          <input id="konum" name="konum" type="text" maxLength={80} placeholder="Örn. İstanbul – Ankara yolu" className={input} />
        </div>
      </div>

      <div className="flex flex-col gap-2.5">
        <label htmlFor="gonderen" className="text-base font-semibold">Adın <span className="font-normal text-gri">(isteğe bağlı)</span></label>
        <input id="gonderen" name="gonderen" type="text" maxLength={40} placeholder="Sayfada görünecek ad" className={input} />
      </div>

      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="web_sitesi">Web sitesi</label>
        <input id="web_sitesi" name="web_sitesi" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <label htmlFor="onay" className="flex cursor-pointer items-start gap-3 text-base leading-normal">
        <input id="onay" name="onay" type="checkbox" required className="mt-0.5 h-6 w-6 shrink-0 accent-asfalt" />
        <span>
          Fotoğrafı kendim çektim ve sitede yayımlanmasına izin veriyorum.{" "}
          <a href="/gizlilik" className="font-semibold text-kirmizi underline">Gizlilik ve KVKK</a>
        </span>
      </label>

      <button type="submit" className="min-h-[52px] cursor-pointer self-start rounded-md border-2 border-asfalt bg-yol px-8 text-lg font-semibold text-asfalt hover:brightness-95">Gönder</button>
    </form>
  );
}
