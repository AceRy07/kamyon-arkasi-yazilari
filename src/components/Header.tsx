import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-asfalt">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="text-krem no-underline" aria-label="Kamyon Arkası Yazıları ana sayfa">
          <span className="font-display text-2xl font-bold uppercase tracking-[0.02em]">
            Kamyon Arkası Yazıları<span className="text-yol">.com</span>
          </span>
        </Link>
        <nav aria-label="Ana menü" className="flex flex-wrap items-center gap-x-6 gap-y-1">
          <Link href="/#yazilar" className="py-3 font-medium text-krem no-underline hover:text-yol">Yazılar</Link>
          <Link href="/#nasil" className="py-3 font-medium text-krem no-underline hover:text-yol">Nasıl çalışır?</Link>
          <Link href="/yazi-gonder" className="rounded-md bg-yol px-5 py-3 font-semibold text-asfalt no-underline hover:brightness-95">Yazı gönder</Link>
        </nav>
      </div>
    </header>
  );
}
