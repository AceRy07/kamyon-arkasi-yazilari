"use client";

import { useEffect, useState } from "react";

const KEY = "kay-begeniler";

function oku(): Record<string, number> {
  try {
    return JSON.parse(localStorage.getItem(KEY) ?? "{}");
  } catch {
    return {};
  }
}

// Frontend aşaması: beğeniler tarayıcıda (localStorage) tutulur. Backend gelince API'ye bağlanacak.
export default function LikeButton({ id, baslangic }: { id: string; baslangic: number }) {
  const [sayi, setSayi] = useState(baslangic);
  const [begenildi, setBegenildi] = useState(false);

  useEffect(() => {
    if (oku()[id]) {
      setBegenildi(true);
      setSayi(baslangic + 1);
    }
  }, [id, baslangic]);

  function begen() {
    if (begenildi) return;
    setBegenildi(true);
    setSayi((s) => s + 1);
    try {
      localStorage.setItem(KEY, JSON.stringify({ ...oku(), [id]: 1 }));
    } catch {}
  }

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm tabular-nums text-gri" aria-live="polite">{sayi}</span>
      <button
        type="button"
        onClick={begen}
        disabled={begenildi}
        aria-label="Beğen"
        aria-pressed={begenildi}
        className="flex min-h-11 min-w-11 cursor-pointer items-center justify-center rounded-full border-2 border-asfalt bg-transparent disabled:cursor-default disabled:bg-yol"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1b1b1d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 20.5s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.6a4.3 4.3 0 0 1 7.5 2.7c0 5.6-7.5 10.2-7.5 10.2z" />
        </svg>
      </button>
    </div>
  );
}
