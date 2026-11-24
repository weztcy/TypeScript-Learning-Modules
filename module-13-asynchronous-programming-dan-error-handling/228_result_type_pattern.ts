/**
 * Submodul: 228_result_type_pattern.ts
 * Topik: Pola Result Type (Ok / Err)
 * Tujuan: Menggantikan exception throwing dengan return value eksplisit yang memuat keberhasilan atau kegagalan.
 */

console.log("=== Pola Result Type (Ok / Err) di TypeScript ===");

// Model Result Type terinspirasi dari bahasa Rust
type Result<T, E = Error> =
    | { ok: true; value: T }
    | { ok: false; error: E };

function bagiAngkaAman(pembilang: number, penyebut: number): Result<number, string> {
    if (penyebut === 0) {
        return { ok: false, error: "Penyebut tidak boleh bernilai nol!" };
    }
    return { ok: true, value: pembilang / penyebut };
}

const r1 = bagiAngkaAman(100, 4);
const r2 = bagiAngkaAman(50, 0);

function tampilkanResult(res: Result<number, string>): void {
    if (res.ok) {
        console.log(`Kalkulasi Sukses -> Hasil: ${res.value}`);
    } else {
        console.log(`Kalkulasi Gagal  -> Kesalahan: "${res.error}"`);
    }
}

tampilkanResult(r1);
tampilkanResult(r2);
