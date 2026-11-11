import Link from "next/link";

const linkClass = "py-2.5 text-krem no-underline hover:text-yol";

export default function Footer() {
  return (
    <footer className="bg-asfalt py-14 text-[#d9d4c7]">
      <div className="mx-auto flex max-w-[1200px] flex-wrap justify-between gap-8 px-6">
        <div className="min-w-0 flex-1 basis-80">
          <p className="text-krem">
            <span className="font-display text-[22px] font-bold uppercase tracking-[0.02em]">
              Kamyon Arkası Yazıları<span className="text-yol">.com</span>
            </span>
          </p>
          <p className="mt-3 max-w-[420px] text-[15px] leading-relaxed">
            Fotoğraflarda plakalar ve yüzler gizlenir. Gönderilen her yazı yayımlanmadan önce incelenir.
          </p>
        </div>
        <nav aria-label="Alt menü" className="flex flex-wrap items-start gap-x-7 gap-y-1">
          <Link href="/#yazilar" className={linkClass}>Yazılar</Link>
          <Link href="/#nasil" className={linkClass}>Nasıl çalışır?</Link>
          <Link href="/yazi-gonder" className={linkClass}>Yazı gönder</Link>
          <Link href="/gizlilik" className={linkClass}>Gizlilik ve KVKK</Link>
        </nav>
      </div>
    </footer>
  );
}
