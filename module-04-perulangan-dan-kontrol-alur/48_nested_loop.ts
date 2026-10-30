/**
 * Submodul: 48_nested_loop.ts
 * Topik: Nested Loop (Perulangan Bersarang)
 * Tujuan: Menjalankan perulangan di dalam perulangan lain, cocok untuk matriks atau tabel perkalian.
 */

console.log("=== Nested Loop (Tabel Perkalian 3x3) ===");

const ukuran: number = 3;

// Perulangan luar (baris)
for (let baris: number = 1; baris <= ukuran; baris++) {
    let outputBaris: string = "";
    
    // Perulangan dalam (kolom)
    for (let kolom: number = 1; kolom <= ukuran; kolom++) {
        const perkalian = baris * kolom;
        // Memformat output agar rata rapi
        outputBaris += `${baris}x${kolom}=${perkalian}	`;
    }
    
    console.log(`Baris ${baris}: ${outputBaris}`);
}
