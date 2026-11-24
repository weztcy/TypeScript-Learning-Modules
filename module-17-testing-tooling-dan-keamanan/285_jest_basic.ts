/**
 * Submodul: 285_jest_basic.ts
 * Topik: Pengujian dengan Jest
 * Tujuan: Memahami ekosistem pengujian Jest yang matang dan matcher assertion standarnya.
 */

console.log("=== Pengujian dengan Jest Matchers ===");

interface AkunSaldo {
    id: number;
    saldo: number;
}

function transferDana(pengirim: AkunSaldo, penerima: AkunSaldo, nominal: number): boolean {
    if (pengirim.saldo < nominal) return false;
    pengirim.saldo -= nominal;
    penerima.saldo += nominal;
    return true;
}

// Simulasi pengujian Jest
console.log("Menjalankan test case: 'Transfer dana antar-rekening'");
const akunA = { id: 1, saldo: 500000 };
const akunB = { id: 2, saldo: 100000 };

const berhasil = transferDana(akunA, akunB, 150000);

if (berhasil && akunA.saldo === 350000 && akunB.saldo === 250000) {
    console.log("✓ TEST PASSED: Saldo pengirim berkurang dan saldo penerima bertambah sesuai nominal.");
} else {
    console.log("✗ TEST FAILED: Ketidaksesuaian saldo pasca transfer!");
}
