/**
 * Submodul: 99_interface_function_types.ts
 * Topik: Function Types pada Interface
 * Tujuan: Menjadikan interface sebagai kontrak formal untuk tanda tangan fungsi.
 */

console.log("=== Function Types pada Interface ===");

// Interface yang menggambarkan tanda tangan fungsi matematika
interface OperasiMatematika {
    (angka1: number, angka2: number): number;
}

// Mengimplementasikan interface ke variabel fungsi
const tambah: OperasiMatematika = (a, b) => a + b;
const modulus: OperasiMatematika = (a, b) => a % b;

console.log(`Operasi Tambah (15, 25)  = ${tambah(15, 25)}`);
console.log(`Operasi Modulus (20, 6)  = ${modulus(20, 6)}`);
