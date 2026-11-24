/**
 * Submodul: 10_typescript_playground.ts
 * Topik: Eksperimen kode TypeScript
 * Tujuan: Mendemonstrasikan eksperimen fitur-fitur modern TypeScript dalam satu alur terpadu.
 */

// Eksperimen kombinasi Type Alias, Union Type, dan Optional Parameter
type OperasiHitung = "tambah" | "kurang" | "kali";

function kalkulatorMini(a: number, b: number, aksi: OperasiHitung, label?: string): string {
    let hasil: number;
    switch (aksi) {
        case "tambah":
            hasil = a + b;
            break;
        case "kurang":
            hasil = a - b;
            break;
        case "kali":
            hasil = a * b;
            break;
    }
    const deskripsi = label ? `[${label}] ` : "";
    return `${deskripsi}Hasil dari ${a} ${aksi} ${b} = ${hasil}`;
}

console.log("=== Eksperimen Kode di TypeScript Playground ===");
console.log(kalkulatorMini(15, 5, "tambah", "Penjumlahan"));
console.log(kalkulatorMini(20, 8, "kurang", "Pengurangan"));
console.log(kalkulatorMini(6, 7, "kali"));
