/**
 * Submodul: 60_function_expression.ts
 * Topik: Function Expression
 * Tujuan: Menyimpan fungsi anonim ke dalam variabel beranotasi tipe.
 */

console.log("=== Function Expression di TypeScript ===");

// Fungsi anonim yang ditugaskan ke sebuah konstanta
const konversiCelciusKeFahrenheit = function (celcius: number): number {
    return (celcius * 9 / 5) + 32;
};

const suhuC = 30;
const suhuF = konversiCelciusKeFahrenheit(suhuC);

console.log(`Suhu ${suhuC}°C setara dengan ${suhuF}°F`);
