/**
 * Submodul: 116_custom_type_guards.ts
 * Topik: Custom Type Guards
 * Tujuan: Membuat fungsi validator kustom untuk memverifikasi tipe objek yang rumit.
 */

console.log("=== Custom Type Guards di TypeScript ===");

interface Burung {
    nama: string;
    terbang: () => void;
}

interface Ikan {
    nama: string;
    berenang: () => void;
}

// Custom type guard yang mengembalikan boolean dan menandai predikat 'hewan is Burung'
function adalahBurung(hewan: Burung | Ikan): hewan is Burung {
    return (hewan as Burung).terbang !== undefined;
}

const elang: Burung = { nama: "Elang Jawa", terbang: () => console.log("Terbang tinggi di angkasa!") };
const hiu: Ikan = { nama: "Hiu Martil", berenang: () => console.log("Berenang cepat di laut dalam!") };

function gerakkanHewan(hewan: Burung | Ikan): void {
    console.log(`Hewan: ${hewan.nama}`);
    if (adalahBurung(hewan)) {
        hewan.terbang();
    } else {
        hewan.berenang();
    }
}

gerakkanHewan(elang);
gerakkanHewan(hiu);
