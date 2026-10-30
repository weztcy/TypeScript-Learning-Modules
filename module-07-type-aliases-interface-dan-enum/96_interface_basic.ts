/**
 * Submodul: 96_interface_basic.ts
 * Topik: Interface Dasar
 * Tujuan: Mendefinisikan kontrak bentuk objek yang dapat diimplementasikan oleh class atau objek literal.
 */

console.log("=== Interface Dasar di TypeScript ===");

// Mendefinisikan interface Kendaraan
interface Kendaraan {
    merk: string;
    model: string;
    tahunProduksi: number;
    nyalakan(): void;
}

// Objek konkret yang mematuhi kontrak interface Kendaraan
const mobilPribadi: Kendaraan = {
    merk: "Honda",
    model: "Civic RS",
    tahunProduksi: 2024,
    nyalakan() {
        console.log(`Mobil ${this.merk} ${this.model} dinyalakan (Brumm!).`);
    }
};

console.log(`Spesifikasi: ${mobilPribadi.merk} ${mobilPribadi.model} (${mobilPribadi.tahunProduksi})`);
mobilPribadi.nyalakan();
