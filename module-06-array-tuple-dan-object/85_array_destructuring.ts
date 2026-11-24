/**
 * Submodul: 85_array_destructuring.ts
 * Topik: Array Destructuring
 * Tujuan: Mengekstrak elemen array ke dalam variabel individual dan memanfaatkan rest element.
 */

console.log("=== Array Destructuring di TypeScript ===");

const koordinatGPS: [number, number, number] = [-6.2088, 106.8456, 15];

// Destrukturisasi posisi latitude, longitude, dan altitude
const [latitude, longitude, elevasi] = koordinatGPS;

console.log(`Latitude  : ${latitude}`);
console.log(`Longitude : ${longitude}`);
console.log(`Elevasi   : ${elevasi} mdpl`);

// Destrukturisasi dengan rest element (...sisa)
const daftarSkor: number[] = [100, 95, 85, 80, 75];
const [juara1, juara2, ...finalisLain] = daftarSkor;

console.log(`Juara 1: ${juara1}, Juara 2: ${juara2}`);
console.log("Finalis Lainnya:", finalisLain);
