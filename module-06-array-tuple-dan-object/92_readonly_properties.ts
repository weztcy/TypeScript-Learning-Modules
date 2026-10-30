/**
 * Submodul: 92_readonly_properties.ts
 * Topik: Readonly Properties pada Objek
 * Tujuan: Mengunci properti tertentu agar nilainya tidak dapat diubah setelah inisialisasi.
 */

console.log("=== Readonly Properties pada Objek ===");

interface RekeningBank {
    readonly nomorRekening: string; // Tidak boleh diubah seumur hidup
    readonly namaPemilik: string;
    saldo: number;                 // Boleh dimutasi
}

const rekening: RekeningBank = {
    nomorRekening: "123-456-7890",
    namaPemilik: "Danang Kusuma",
    saldo: 2500000
};

console.log(`No. Rekening : ${rekening.nomorRekening}`);
console.log(`Pemilik      : ${rekening.namaPemilik}`);
console.log(`Saldo Awal   : Rp ${rekening.saldo.toLocaleString("id-ID")}`);

// rekening.nomorRekening = "999"; // Error kompilasi: Cannot assign to 'nomorRekening' because it is a read-only property

rekening.saldo += 500000;
console.log(`Saldo Baru   : Rp ${rekening.saldo.toLocaleString("id-ID")}`);
