/**
 * Submodul: 174_readonly_class_properties.ts
 * Topik: Readonly Class Properties
 * Tujuan: Mengunci properti class agar nilainya hanya dapat diisi pada saat deklarasi atau di dalam konstruktor.
 */

console.log("=== Readonly Class Properties di TypeScript ===");

class PerangkatKeras {
    readonly nomorSeri: string;
    readonly modelChipset: string = "ARM-Cortex-M4";
    statusOperasional: boolean = true;

    constructor(noSeri: string) {
        this.nomorSeri = noSeri; // Inisialisasi dalam konstruktor diizinkan
    }

    tampilkanSpesifikasi(): void {
        console.log(`No. Seri : ${this.nomorSeri}`);
        console.log(`Chipset  : ${this.modelChipset}`);
        console.log(`Status   : ${this.statusOperasional ? "ONLINE" : "OFFLINE"}`);
    }
}

const iotNode = new PerangkatKeras("SN-IOT-2026-X99");
iotNode.tampilkanSpesifikasi();
// iotNode.nomorSeri = "SN-NEW"; // Error kompilasi: Cannot assign to 'nomorSeri' because it is a read-only property
