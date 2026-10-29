export const SITE = {
  name: "PKL Di Saka", url: "https://sakadigipro.com", phone: "6282131087971", phoneDisplay: "+62 821-3108-7971",
  street: "Jl. Band. Palmerah No.D3-35B, Cemorokandang, Kec. Kedungkandang",
  city: "Kota Malang", region: "Jawa Timur", zip: "65138",
  address: "Jl. Band. Palmerah No.D3-35B, Cemorokandang, Kec. Kedungkandang, Kota Malang, Jawa Timur 65138",
  hours: "Senin–Jumat, 08.00–17.00 WIB",
};
export const NAV = [
  ["Beranda", "/"], ["Tentang", "/tentang/"], ["Fokus Bisnis", "/fokus-bisnis/"], ["Keahlian", "/keahlian/"],
  ["Portofolio", "/portofolio/"], ["Industri yang Dilayani", "/industri/"], ["Blog", "/blog/"],
] as const;
export const wa = (text = "Halo PKL Di Saka, saya ingin bertanya.") =>
  `https://wa.me/${SITE.phone}?text=${encodeURIComponent(text)}`;
export const MSG = {
  magang: "Halo PKL Di Saka, saya ingin mendaftar program magang. Mohon info persyaratannya.",
  layanan: (n: string) => `Halo PKL Di Saka, saya tertarik dengan layanan ${n}.`,
  proyek: (t: string) => `Halo PKL Di Saka, saya melihat proyek ${t} dan ingin berdiskusi.`,
};
export const faqSchema = (f: { q: string; a: string }[]) => ({
  "@type": "FAQPage", mainEntity: f.map((x) => ({ "@type": "Question", name: x.q, acceptedAnswer: { "@type": "Answer", text: x.a } })),
});
