/**
 * Submodul: 150_mapped_types.ts
 * Topik: Mapped Types ([K in keyof T])
 * Tujuan: Mentransformasikan seluruh properti dalam suatu tipe objek menjadi tipe baru secara sistematis.
 */

console.log("=== Mapped Types di TypeScript ===");

interface SensorStatus {
    suhu: number;
    kelembapan: number;
    tekanan: number;
}

// Mapped type: mengubah setiap properti menjadi tipe boolean (status aktif/tidak)
type SensorStatusFlags<T> = {
    [K in keyof T]: boolean;
};

const indikatorSensor: SensorStatusFlags<SensorStatus> = {
    suhu: true,
    kelembapan: false,
    tekanan: true
};

console.log("Status Indikator Sensor (Mapped ke boolean):");
for (const [kunci, aktif] of Object.entries(indikatorSensor)) {
    console.log(`- Sensor ${kunci}: ${aktif ? "NORMAL" : "PERLU KALIBRASI"}`);
}
