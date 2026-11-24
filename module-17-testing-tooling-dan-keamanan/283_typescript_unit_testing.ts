/**
 * Submodul: 283_typescript_unit_testing.ts
 * Topik: Unit Testing di TypeScript
 * Tujuan: Memahami konsep dasar unit testing (asertasi nilai aktual vs nilai yang diharapkan).
 */

console.log("=== Unit Testing Dasar di TypeScript ===");

// Fungsi logika bisnis yang diuji
function hitungTotalBelanja(hargaSatuan: number, kuantitas: number, diskonPersen: number = 0): number {
    const subtotal = hargaSatuan * kuantitas;
    const potongan = (subtotal * diskonPersen) / 100;
    return subtotal - potongan;
}

// Harness asertasi unit test sederhana
function assertEqual<T>(aktual: T, diharapkan: T, pesanUji: string): void {
    if (aktual === diharapkan) {
        console.log(`[PASS] ${pesanUji}`);
    } else {
        console.error(`[FAIL] ${pesanUji} -> Aktual: ${aktual}, Diharapkan: ${diharapkan}`);
    }
}

// Menjalankan skenario unit test
assertEqual(hitungTotalBelanja(10000, 3), 30000, "Menghitung 3 barang tanpa diskon harus bernilai 30.000");
assertEqual(hitungTotalBelanja(50000, 2, 10), 90000, "Menghitung 2 barang diskon 10% harus bernilai 90.000");
