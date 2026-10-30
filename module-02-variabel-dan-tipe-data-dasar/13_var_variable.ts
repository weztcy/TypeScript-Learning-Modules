/**
 * Submodul: 13_var_variable.ts
 * Topik: Deklarasi variabel dengan 'var'
 * Tujuan: Memahami perilaku legacy var (function scope dan hoisting) serta mengapa let/const lebih disarankan.
 */

console.log("=== Deklarasi Variabel Legacy dengan 'var' ===");

// Variabel 'var' memiliki sifat function-scoped atau globally-scoped, BUKAN block-scoped
var kotaAsal: string = "Bandung";

function demonstrasiScopeVar() {
    // Hoisting: var dideklarasikan di awal fungsi secara otomatis oleh runtime
    if (true) {
        var statusPengiriman = "Terkirim";
    }
    // Variabel statusPengiriman dapat bocor dan dibaca di luar blok kurung kurawal if
    console.log(`Status dalam fungsi (bocor keluar if): ${statusPengiriman}`);
}

demonstrasiScopeVar();
console.log(`Kota asal: ${kotaAsal}`);
console.log("Catatan: Dalam modern TypeScript/JavaScript, selalu prioritaskan 'const' dan 'let' daripada 'var'.");
