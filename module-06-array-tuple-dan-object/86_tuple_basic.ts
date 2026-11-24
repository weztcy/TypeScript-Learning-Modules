/**
 * Submodul: 86_tuple_basic.ts
 * Topik: Tuple Dasar
 * Tujuan: Membuat array dengan jumlah elemen tetap dan tipe data yang sudah ditentukan per posisi.
 */

console.log("=== Tuple Dasar di TypeScript ===");

// Tuple beranggotakan 3 elemen: string (nama), number (umur), boolean (status aktif)
let profilTuple: [string, number, boolean];

profilTuple = ["Rudi Hartono", 35, true];

console.log(`Nama        : ${profilTuple[0]}`);
console.log(`Usia        : ${profilTuple[1]} tahun`);
console.log(`Status Aktif: ${profilTuple[2]}`);

// Mengubah elemen tuple pada indeks yang valid dengan tipe yang cocok
profilTuple[1] = 36;
console.log(`Ulang tahun! Usia baru: ${profilTuple[1]}`);
