/**
 * Submodul: 141_generic_factory.ts
 * Topik: Generic Factory Pattern
 * Tujuan: Menginstansiasi objek class secara dinamis menggunakan constructor signature generik.
 */

console.log("=== Generic Factory di TypeScript ===");

// Tipe konstruktor generik: { new(...args: any[]): T }
type Konstruktor<T> = new (...args: any[]) => T;

class RobotPembersih {
    nama = "CleanBot-V1";
    bekerja() {
        console.log(`${this.nama} sedang membersihkan ruangan.`);
    }
}

class DronePengantar {
    nama = "SkyDrop-X";
    bekerja() {
        console.log(`${this.nama} sedang mengantarkan paket.`);
    }
}

function buatPeralatan<T>(KelasTarget: Konstruktor<T>): T {
    console.log(`Membuat instance baru dari: ${KelasTarget.name}`);
    return new KelasTarget();
}

const robot = buatPeralatan(RobotPembersih);
robot.bekerja();

const drone = buatPeralatan(DronePengantar);
drone.bekerja();
