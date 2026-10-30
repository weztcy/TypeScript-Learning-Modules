/**
 * Submodul: 67_function_overloads.ts
 * Topik: Function Overloads
 * Tujuan: Mendefinisikan beberapa tanda tangan (signature) fungsi untuk variasi tipe input/output.
 */

console.log("=== Function Overloads di TypeScript ===");

// 1. Overload signatures: menentukan variasi pemanggilan yang sah
function cetakIdentitas(id: number): string;
function cetakIdentitas(nama: string, usia: number): string;

// 2. Implementation signature: implementasi tunggal yang menangani seluruh variasi di atas
function cetakIdentitas(arg1: number | string, arg2?: number): string {
    if (typeof arg1 === "number") {
        return `Karyawan ID: #EMP-${arg1}`;
    } else {
        return `Karyawan Nama: ${arg1}, Usia: ${arg2} tahun`;
    }
}

console.log(cetakIdentitas(1024));
console.log(cetakIdentitas("Citra Kirana", 28));
