/**
 * Submodul: 206_compiler_options.ts
 * Topik: Compiler Options Lanjutan
 * Tujuan: Memahami pengaturan ketat compiler (noImplicitAny, strictNullChecks, noUnusedLocals).
 */

console.log("=== Compiler Options Lanjutan di TypeScript ===");

const opsiKetat = [
    { opsi: "noImplicitAny", fungsi: "Melarang variabel memiliki tipe 'any' implisit tanpa anotasi." },
    { opsi: "strictNullChecks", fungsi: "Mencegah nilai null/undefined dioperasikan pada tipe non-nullable." },
    { opsi: "noUnusedLocals", fungsi: "Memunculkan error jika ada variabel lokal yang tidak terpakai." },
    { opsi: "noImplicitReturns", fungsi: "Memastikan seluruh cabang percabangan fungsi mengembalikan nilai." }
];

console.log("Opsi Compiler Ketat untuk Kualitas Kode Produksi:");
for (const o of opsiKetat) {
    console.log(`- ${o.opsi.padEnd(18, " ")} : ${o.fungsi}`);
}
