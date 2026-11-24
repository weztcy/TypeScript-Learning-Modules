/**
 * Submodul: 152_key_remapping.ts
 * Topik: Key Remapping via 'as' ([K in keyof T as NewKey])
 * Tujuan: Mengubah format nama properti pada mapped types (misal menambahkan prefix 'get_').
 */

console.log("=== Key Remapping via 'as' di TypeScript ===");

interface InfoAkun {
    nama: string;
    saldo: number;
}

// Mengubah nama properti 'nama' menjadi 'getNama' dan 'saldo' menjadi 'getSaldo'
type BuatGetters<T> = {
    [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};

const getterAkun: BuatGetters<InfoAkun> = {
    getNama: () => "Budi Santoso",
    getSaldo: () => 7500000
};

console.log(`Nama Pengguna : ${getterAkun.getNama()}`);
console.log(`Saldo Akun    : Rp ${getterAkun.getSaldo().toLocaleString("id-ID")}`);
