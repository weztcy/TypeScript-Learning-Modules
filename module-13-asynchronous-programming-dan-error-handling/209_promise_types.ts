/**
 * Submodul: 209_promise_types.ts
 * Topik: Promise Types (Promise<T>)
 * Tujuan: Menjamin keamanan tipe data muatan yang dikembalikan oleh sebuah Promise.
 */

console.log("=== Promise Types (Promise<T>) di TypeScript ===");

interface DataProfilMahasiswa {
    nim: string;
    nama: string;
    jurusan: string;
    ipk: number;
}

function ambilProfilMahasiswa(nim: string): Promise<DataProfilMahasiswa> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                nim,
                nama: "Gita Savitri",
                jurusan: "Teknik Kimia",
                ipk: 3.88
            });
        }, 80);
    });
}

ambilProfilMahasiswa("13012026")
    .then((mhs: DataProfilMahasiswa) => {
        console.log(`NIM     : ${mhs.nim}`);
        console.log(`Nama    : ${mhs.nama}`);
        console.log(`Jurusan : ${mhs.jurusan}`);
        console.log(`IPK     : ${mhs.ipk.toFixed(2)}`);
    });
