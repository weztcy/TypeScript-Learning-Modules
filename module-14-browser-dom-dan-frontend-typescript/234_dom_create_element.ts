/**
 * Submodul: 234_dom_create_element.ts
 * Topik: Membuat Elemen DOM Baru (document.createElement & appendChild)
 * Tujuan: Mengonstruksi hierarki elemen DOM secara programatis.
 */

console.log("=== Membuat Elemen DOM Baru di TypeScript ===");

interface SimpulDOM {
    tag: string;
    teks?: string;
    anak: SimpulDOM[];
}

function buatElemen(tag: string, teks?: string): SimpulDOM {
    return { tag, teks, anak: [] };
}

function lampirkanAnak(induk: SimpulDOM, anak: SimpulDOM): void {
    induk.anak.push(anak);
}

// Membangun daftar unordered list (ul > li)
const daftarMenu = buatElemen("ul");
lampirkanAnak(daftarMenu, buatElemen("li", "Beranda Aplikasi"));
lampirkanAnak(daftarMenu, buatElemen("li", "Katalog Modul"));
lampirkanAnak(daftarMenu, buatElemen("li", "Pengaturan Akun"));

console.log(`Elemen Induk: <${daftarMenu.tag}> berisi ${daftarMenu.anak.length} elemen anak:`);
daftarMenu.anak.forEach((itm) => console.log(`  <${itm.tag}>${itm.teks}</${itm.tag}>`));
