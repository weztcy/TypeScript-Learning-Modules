/**
 * Submodul: 170_class_properties.ts
 * Topik: Class Properties (Inisialisasi & Tipe Properti)
 * Tujuan: Mengelola properti class dengan inisialisasi default dan validasi tipe.
 */

console.log("=== Class Properties di TypeScript ===");

class AkunGame {
    username: string;
    level: number = 1; // Nilai inisialisasi default
    koinEmas: number = 500;
    statusVIP: boolean = false;

    constructor(namaUser: string) {
        this.username = namaUser;
    }

    tampilkanStatus(): void {
        console.log(`Pemain: ${this.username} | Level: ${this.level} | Koin: ${this.koinEmas} | VIP: ${this.statusVIP}`);
    }
}

const player1 = new AkunGame("DragonSlayer99");
player1.tampilkanStatus();

player1.level = 10;
player1.koinEmas += 2500;
player1.statusVIP = true;
console.log("Setelah kenaikan level & top-up:");
player1.tampilkanStatus();
