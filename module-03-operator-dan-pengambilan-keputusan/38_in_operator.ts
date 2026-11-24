/**
 * Submodul: 38_in_operator.ts
 * Topik: Operator 'in'
 * Tujuan: Memeriksa keberadaan nama properti dalam sebuah objek untuk type narrowing.
 */

console.log("=== Operator 'in' di TypeScript ===");

interface Mobil {
    roda: number;
    kemudiStir: () => void;
}

interface Perahu {
    dayung: () => void;
}

function kemudikanKendaraan(kendaraan: Mobil | Perahu): void {
    // Operator 'in' memeriksa apakah kunci 'kemudiStir' ada pada objek kendaraan
    if ("kemudiStir" in kendaraan) {
        console.log("Kendaraan ini adalah Mobil darat!");
        kendaraan.kemudiStir();
    } else {
        console.log("Kendaraan ini adalah Perahu air!");
        kendaraan.dayung();
    }
}

const sedan: Mobil = {
    roda: 4,
    kemudiStir: () => console.log("Menyetir di jalan tol")
};

const kano: Perahu = {
    dayung: () => console.log("Mendayung di sungai")
};

kemudikanKendaraan(sedan);
kemudikanKendaraan(kano);
