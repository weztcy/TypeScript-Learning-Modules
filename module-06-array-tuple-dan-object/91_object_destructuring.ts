/**
 * Submodul: 91_object_destructuring.ts
 * Topik: Object Destructuring
 * Tujuan: Mengekstrak properti objek ke dalam variabel lokal dengan alias dan nilai default.
 */

console.log("=== Object Destructuring di TypeScript ===");

interface ProfilPenulis {
    id: number;
    namaLengkap: string;
    email: string;
    kotaAsal?: string;
}

const penulisBuku: ProfilPenulis = {
    id: 501,
    namaLengkap: "Tere Liye",
    email: "kontak@tereliye.id"
};

// Destrukturisasi properti namaLengkap dengan alias 'nama', dan kotaAsal dengan nilai default
const { namaLengkap: nama, email, kotaAsal = "Indonesia" } = penulisBuku;

console.log(`Nama Penulis : ${nama}`);
console.log(`Surel        : ${email}`);
console.log(`Kota Asal    : ${kotaAsal}`);
