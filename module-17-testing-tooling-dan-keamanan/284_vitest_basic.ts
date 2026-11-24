/**
 * Submodul: 284_vitest_basic.ts
 * Topik: Pengujian dengan Vitest
 * Tujuan: Mengenal sintaks suite pengujian modern Vitest (describe, it/test, expect).
 */

console.log("=== Pengujian dengan Vitest (describe, it, expect) ===");

// Simulasi antarmuka pengujian Vitest
function describe(namaSuite: string, fn: () => void) {
    console.log(`[SUITE] ${namaSuite}`);
    fn();
}

function it(namaKasus: string, fn: () => void) {
    try {
        fn();
        console.log(`  ✓ ${namaKasus}`);
    } catch (err: any) {
        console.log(`  ✗ ${namaKasus} (${err.message})`);
    }
}

function expect<T>(aktual: T) {
    return {
        toBe(diharapkan: T) {
            if (aktual !== diharapkan) throw new Error(`Diharapkan ${diharapkan}, namun menerima ${aktual}`);
        },
        toBeTruthy() {
            if (!aktual) throw new Error("Diharapkan bernilai truthy");
        }
    };
}

describe("Suite Pengujian Operasi String", () => {
    it("harus mengubah huruf kapital secara benar", () => {
        expect("typescript".toUpperCase()).toBe("TYPESCRIPT");
    });

    it("harus mendeteksi keberadaan substring", () => {
        expect("belajar typescript".includes("types")).toBeTruthy();
    });
});
