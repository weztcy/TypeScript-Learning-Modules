/**
 * Submodul: 220_async_generators.ts
 * Topik: Async Generators (async function*)
 * Tujuan: Menghasilkan urutan nilai asynchronous secara on-demand menggunakan kata kunci 'yield'.
 */

console.log("=== Async Generators di TypeScript ===");

async function* generatorSinyalSensor(jumlahSampel: number): AsyncGenerator<number, void, unknown> {
    for (let i = 1; i <= jumlahSampel; i++) {
        await new Promise((resolve) => setTimeout(resolve, 40));
        // Menghasilkan pembacaan sinyal acak
        const sinyal = Math.floor(20 + Math.random() * 10);
        yield sinyal;
    }
}

async function pantauSensor() {
    console.log("Memulai pemantauan sinyal sensor IoT:");
    let no = 1;
    for await (const nilai of generatorSinyalSensor(4)) {
        console.log(`  Sampel ${no++}: Suhu terdeteksi = ${nilai}°C`);
    }
    console.log("Pemantauan selesai.");
}

pantauSensor();
