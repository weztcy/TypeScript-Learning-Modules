/**
 * Submodul: 113_discriminated_unions.ts
 * Topik: Discriminated Unions (Tagged Unions)
 * Tujuan: Membedakan varian tipe dalam union menggunakan properti penanda harfiah bersama (discriminant property).
 */

console.log("=== Discriminated Unions di TypeScript ===");

interface ResponSukses {
    status: "SUKSES"; // Discriminant property
    data: string[];
}

interface ResponGagal {
    status: "GAGAL"; // Discriminant property
    pesanError: string;
}

type HasilAPI = ResponSukses | ResponGagal;

function tampilkanHasilAPI(hasil: HasilAPI): void {
    // Memeriksa discriminant 'status'
    if (hasil.status === "SUKSES") {
        console.log(`[SUKSES] Jumlah data diterima: ${hasil.data.length}`);
        console.log(`Data: ${hasil.data.join(", ")}`);
    } else {
        console.log(`[GAGAL] Penyebab error: ${hasil.pesanError}`);
    }
}

tampilkanHasilAPI({ status: "SUKSES", data: ["Server 1", "Server 2", "Backup Server"] });
tampilkanHasilAPI({ status: "GAGAL", pesanError: "Timeout koneksi setelah 5000ms" });
