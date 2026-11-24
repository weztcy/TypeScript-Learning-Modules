/**
 * Submodul: 242_url_api.ts
 * Topik: URL dan URLSearchParams API
 * Tujuan: Membedah dan menyusun parameter query URL secara aman dan terstandar.
 */

console.log("=== URL dan URLSearchParams API ===");

const rawURL = "https://toko.id/produk/cari?kategori=elektronik&halaman=2&sort=termurah";
const url = new URL(rawURL);

console.log(`Protokol : ${url.protocol}`);
console.log(`Hostname : ${url.hostname}`);
console.log(`Pathname : ${url.pathname}`);

// Membaca query parameters
console.log("Query Parameters:");
console.log(`- Kategori : ${url.searchParams.get("kategori")}`);
console.log(`- Halaman  : ${url.searchParams.get("halaman")}`);
console.log(`- Sort     : ${url.searchParams.get("sort")}`);

// Menambahkan parameter baru
url.searchParams.set("diskon", "true");
console.log(`URL Diperbarui: ${url.toString()}`);
