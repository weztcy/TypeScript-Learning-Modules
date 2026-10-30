/**
 * Submodul: 164_utility_returntype.ts
 * Topik: Utility Type ReturnType<T>
 * Tujuan: Memperoleh tipe data kembalian dari suatu fungsi secara otomatis.
 */

console.log("=== Utility Type ReturnType<T> di TypeScript ===");

function buatSesiPengguna(nama: string, durasiMenit: number) {
    return {
        idSesi: `SESI-${Math.floor(Math.random() * 10000)}`,
        namaPengguna: nama,
        kedaluwarsaPada: new Date(Date.now() + durasiMenit * 60000)
    };
}

// Mengekstrak tipe kembalian dari fungsi buatSesiPengguna
type TipeSesi = ReturnType<typeof buatSesiPengguna>;

const sesiAktif: TipeSesi = buatSesiPengguna("Hendra Setiawan", 60);

console.log(`ID Sesi      : ${sesiAktif.idSesi}`);
console.log(`Pengguna     : ${sesiAktif.namaPengguna}`);
console.log(`Kedaluwarsa  : ${sesiAktif.kedaluwarsaPada.toLocaleTimeString("id-ID")}`);
