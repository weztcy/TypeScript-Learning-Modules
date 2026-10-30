/**
 * Submodul: 37_instanceof_operator.ts
 * Topik: Operator 'instanceof'
 * Tujuan: Menguji apakah suatu objek merupakan instance dari suatu class tertentu.
 */

console.log("=== Operator 'instanceof' di TypeScript ===");

class DokumenPDF {
    constructor(public namaFile: string) {}
    cetakPDF() {
        console.log(`Mencetak dokumen PDF: ${this.namaFile}`);
    }
}

class DokumenExcel {
    constructor(public namaFile: string, public jumlahSheet: number) {}
    hitungData() {
        console.log(`Menghitung lembar kerja Excel: ${this.jumlahSheet} sheet.`);
    }
}

function prosesBerkas(berkas: DokumenPDF | DokumenExcel): void {
    // Narrowing menggunakan instanceof
    if (berkas instanceof DokumenPDF) {
        berkas.cetakPDF();
    } else if (berkas instanceof DokumenExcel) {
        berkas.hitungData();
    }
}

const file1 = new DokumenPDF("Panduan_TypeScript.pdf");
const file2 = new DokumenExcel("Laporan_Keuangan_2026.xlsx", 5);

prosesBerkas(file1);
prosesBerkas(file2);
