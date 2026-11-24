/**
 * Submodul: 223_fetch_get_request.ts
 * Topik: HTTP GET Request
 * Tujuan: Mengambil data dari endpoint REST API dan memetakan responnya ke interface terketik.
 */

console.log("=== HTTP GET Request di TypeScript ===");

interface PostArtikel {
    id: number;
    judul: string;
    diterbitkan: boolean;
}

async function ambilPostingan(id: number): Promise<PostArtikel> {
    console.log(`Mengirim HTTP GET /api/posts/${id}...`);
    // Simulasi respons HTTP GET terketik
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id,
                judul: "Panduan Arsitektur TypeScript Skala Besar",
                diterbitkan: true
            });
        }, 50);
    });
}

ambilPostingan(101).then((post) => {
    console.log("Hasil GET Request Diterima:");
    console.log(`- ID    : ${post.id}`);
    console.log(`- Judul : "${post.judul}"`);
    console.log(`- Rilis : ${post.diterbitkan ? "Publik" : "Draf"}`);
});
