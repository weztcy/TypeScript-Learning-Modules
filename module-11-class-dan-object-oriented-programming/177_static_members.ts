/**
 * Submodul: 177_static_members.ts
 * Topik: Static Members (static properties & methods)
 * Tujuan: Mengelola data dan fungsi utilitas yang melekat pada class itu sendiri, bukan pada instance objek.
 */

console.log("=== Static Members di TypeScript ===");

class UtilitasMatematika {
    // Properti statis (konstanta bersama)
    static readonly PHI: number = 3.14159265359;
    private static totalKalkulasi: number = 0;

    // Metode statis (dapat dipanggil tanpa membuat instance new UtilitasMatematika)
    static hitungLuasLingkaran(radius: number): number {
        UtilitasMatematika.totalKalkulasi++;
        return UtilitasMatematika.PHI * radius * radius;
    }

    static cekTotalPemanggilan(): number {
        return UtilitasMatematika.totalKalkulasi;
    }
}

console.log(`Nilai Konstanta Phi: ${UtilitasMatematika.PHI}`);
console.log(`Luas Lingkaran (r=7) : ${UtilitasMatematika.hitungLuasLingkaran(7).toFixed(2)}`);
console.log(`Luas Lingkaran (r=10): ${UtilitasMatematika.hitungLuasLingkaran(10).toFixed(2)}`);
console.log(`Total pemanggilan metode statis: ${UtilitasMatematika.cekTotalPemanggilan()} kali`);
