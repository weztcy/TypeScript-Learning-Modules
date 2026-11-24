/**
 * Submodul: 118_in_operator_narrowing.ts
 * Topik: Narrowing Menggunakan Operator 'in'
 * Tujuan: Memeriksa keberadaan nama atribut unik untuk membedakan struktur interface.
 */

console.log("=== Narrowing Menggunakan Operator 'in' ===");

interface MobilBalap {
    kecepatanMaksKmH: number;
    aktifkanNitro: () => void;
}

interface SepedaGunung {
    kecepatanMaksKmH: number;
    jumlahGear: number;
}

function pacuKendaraan(k: MobilBalap | SepedaGunung): void {
    console.log(`Kecepatan Maksimal: ${k.kecepatanMaksKmH} km/h`);
    
    // Memeriksa apakah properti 'aktifkanNitro' ada dalam objek k
    if ("aktifkanNitro" in k) {
        console.log("Tipe: Mobil Balap!");
        k.aktifkanNitro();
    } else {
        console.log(`Tipe: Sepeda Gunung dengan ${k.jumlahGear} tingkatan gear.`);
    }
}

pacuKendaraan({
    kecepatanMaksKmH: 320,
    aktifkanNitro: () => console.log("NITRO DIAKTIFKAN: Wuuush!")
});

pacuKendaraan({
    kecepatanMaksKmH: 45,
    jumlahGear: 21
});
