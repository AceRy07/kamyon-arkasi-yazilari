import type { Metadata } from "next";

export const metadata: Metadata = { title: "Gizlilik ve KVKK — Kamyon Arkası Yazıları" };

const bolumler = [
  ["Hangi verileri alıyoruz?", "Yazı gönderirken yüklediğin fotoğrafı, yazıyı, kategoriyi, görüldüğü yeri ve isteğe bağlı olarak verdiğin adı işleriz. Hesap açmanı istemiyoruz; e-posta adresi toplamıyoruz."],
  ["Plaka ve yüzler", "Fotoğraflarda görünebilecek plaka ve yüzler kişisel veri sayılabilir. Bu nedenle gönderiler yayımlanmadan önce incelenir; plaka ve yüzler gizlenir ya da gönderi yayımlanmaz."],
  ["Fotoğraf hakları", "Yalnızca kendi çektiğin fotoğrafları gönder. Gönderirken, fotoğrafın sitede yayımlanmasına izin vermiş olursun. Kaldırılmasını istediğin bir içerik için iletişim adresine yazabilirsin."],
  ["Çerezler", "Yalnızca işlevsel iki çerez kullanıyoruz: aynı yazıyı birden çok kez beğenmeni önlemek için bir beğeni çerezi ve yönetici girişi için bir oturum çerezi. Reklam ya da takip çerezi yok."],
  ["Haklarınız", "6698 sayılı KVKK kapsamında verilerinin silinmesini veya düzeltilmesini talep edebilirsin. Taleplerini [İLETİŞİM E-POSTASI] adresine iletebilirsin."],
];

export default function Gizlilik() {
  return (
    <main className="py-16">
      <div className="mx-auto max-w-[760px] px-6">
        <h1 className="font-display text-[clamp(38px,6vw,56px)] font-bold uppercase leading-[1.05]">Gizlilik ve KVKK</h1>
        <p className="mt-4 rounded-md border-2 border-yol bg-[#fff6d6] px-4 py-3 text-[15px]">
          Bu sayfa bir taslaktır. Siteyi yayına almadan önce bir hukuk danışmanıyla gözden geçirip veri sorumlusu bilgilerini ([ADINIZ / ÜNVANINIZ], [İLETİŞİM E-POSTASI]) doldurun.
        </p>
        <div className="mt-8 flex flex-col gap-8 text-[17px] leading-relaxed">
          {bolumler.map(([b, m]) => (
            <section key={b}>
              <h2 className="font-display text-2xl font-bold uppercase">{b}</h2>
              <p className="mt-2">{m}</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
