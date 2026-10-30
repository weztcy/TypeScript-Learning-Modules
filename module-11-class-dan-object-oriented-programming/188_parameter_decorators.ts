/**
 * Submodul: 188_parameter_decorators.ts
 * Topik: Pengenalan Decorators dan Parameter Metadata
 * Tujuan: Memahami konsep dasar decorators pada TypeScript untuk logging dan instrumentasi method/parameter.
 */

console.log("=== Pengenalan Decorators dan Metadata di TypeScript ===");

// 1. Method Decorator sederhana untuk mencatat eksekusi method
function LogEksekusi(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log(`[DECORATOR LOG] Memanggil method: '${propertyKey}' dengan argumen:`, JSON.stringify(args));
        const hasil = originalMethod.apply(this, args);
        console.log(`[DECORATOR LOG] Method '${propertyKey}' selesai dieksekusi. Hasil:`, hasil);
        return hasil;
    };
    return descriptor;
}

class LayananKalkulator {
    @LogEksekusi
    tambah(a: number, b: number): number {
        return a + b;
    }

    @LogEksekusi
    kalikan(a: number, b: number): number {
        return a * b;
    }
}

const kalkulator = new LayananKalkulator();
const r1 = kalkulator.tambah(14, 26);
const r2 = kalkulator.kalikan(7, 8);

console.log(`Hasil Akhir Penjumlahan: ${r1}`);
console.log(`Hasil Akhir Perkalian  : ${r2}`);
