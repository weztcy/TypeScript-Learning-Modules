/**
 * Submodul: 213_promise_race.ts
 * Topik: Promise.race()
 * Tujuan: Mengambil hasil dari Promise pertama yang paling cepat selesai (baik resolve maupun reject).
 */

console.log("=== Promise.race() di TypeScript ===");

const serverSingapura = new Promise<string>((resolve) =>
    setTimeout(() => resolve("Respon dari Server Singapura (70ms)"), 70)
);

const serverTokyo = new Promise<string>((resolve) =>
    setTimeout(() => resolve("Respon dari Server Tokyo (120ms)"), 120)
);

console.log("Menguji kecepatan respon server terdekat (race)...");

Promise.race([serverSingapura, serverTokyo])
    .then((pemenang) => {
        console.log(`[PEMENANG TERCEPAT]: ${pemenang}`);
    });
