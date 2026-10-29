export const CATS = [["Tips Magang", "tips-magang"], ["Karier Digital", "karier-digital"], ["Teknologi", "teknologi"], ["Studi Kasus", "studi-kasus"], ["Berita PKL Di Saka", "berita-saka-digipro"]] as const;
export const catSlug = (n: string) => CATS.find((c) => c[0] === n)?.[1] ?? n.toLowerCase().replace(/\s+/g, "-");
export const fmt = (d: Date) => d.toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });
export const readTime = (t: string) => Math.max(1, Math.round(t.split(/\s+/).length / 200));
