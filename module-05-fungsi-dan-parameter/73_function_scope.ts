/**
 * Submodul: 73_function_scope.ts
 * Topik: Scope Fungsi (Ruang Lingkup)
 * Tujuan: Memahami batasan akses variabel global, lokal fungsi, dan blok internal.
 */

console.log("=== Scope Fungsi di TypeScript ===");

// Variabel ber-scope global
const namaAplikasiGlobal: string = "Portal Akademik";

function jalankanModulNilai(): void {
    // Variabel ber-scope lokal fungsi
    const batasNilaiLokal: number = 70;
    
    console.log(`[Dalam Fungsi] Mengakses variabel global: ${namaAplikasiGlobal}`);
    console.log(`[Dalam Fungsi] Batas nilai lokal: ${batasNilaiLokal}`);
    
    if (true) {
        // Variabel ber-scope blok kurung kurawal
        const pesanBlok: string = "Status: Lulus seleksi";
        console.log(`  [Dalam Blok IF] ${pesanBlok}`);
    }
}

jalankanModulNilai();
console.log(`[Luar Fungsi] Mengakses variabel global: ${namaAplikasiGlobal}`);
