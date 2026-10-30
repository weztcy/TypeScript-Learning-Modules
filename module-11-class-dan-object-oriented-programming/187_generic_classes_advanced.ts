/**
 * Submodul: 187_generic_classes_advanced.ts
 * Topik: Generic Classes Lanjutan
 * Tujuan: Mengembangkan tempat penyimpanan (Repository) CRUD generik dengan ID bertipe dinamis.
 */

console.log("=== Generic Classes Lanjutan (Repository Pattern) ===");

interface EntitasBeridentitas<ID> {
    id: ID;
}

class RepositoriMemori<T extends EntitasBeridentitas<ID>, ID> {
    private koleksi: Map<ID, T> = new Map();

    simpan(data: T): void {
        this.koleksi.set(data.id, data);
        console.log(`Menyimpan data ID: ${data.id}`);
    }

    cariBerdasarkanID(id: ID): T | undefined {
        return this.koleksi.get(id);
    }

    ambilSemua(): T[] {
        return Array.from(this.koleksi.values());
    }
}

interface MahasiswaData extends EntitasBeridentitas<number> {
    nama: string;
    jurusan: string;
}

const repoMahasiswa = new RepositoriMemori<MahasiswaData, number>();
repoMahasiswa.simpan({ id: 101, nama: "Arya Wiguna", jurusan: "Teknik Informatika" });
repoMahasiswa.simpan({ id: 102, nama: "Bela Cantika", jurusan: "Sistem Informasi" });

const mhs = repoMahasiswa.cariBerdasarkanID(101);
console.log(`Hasil Pencarian ID 101: ${mhs?.nama} (${mhs?.jurusan})`);
console.log(`Total data tersimpan: ${repoMahasiswa.ambilSemua().length} mahasiswa.`);
