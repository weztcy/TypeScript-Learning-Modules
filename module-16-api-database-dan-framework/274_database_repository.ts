/**
 * Submodul: 274_database_repository.ts
 * Topik: Repository Pattern untuk Database
 * Tujuan: Mengabstraksikan operasi penyimpanan data dari logika bisnis utama.
 */

console.log("=== Repository Pattern untuk Database ===");

interface MahasiswaEntitas {
    id: string;
    namaLengkap: string;
    ipk: number;
}

interface MahasiswaRepository {
    simpan(data: MahasiswaEntitas): Promise<MahasiswaEntitas>;
    cariBerdasarkanId(id: string): Promise<MahasiswaEntitas | null>;
}

class InDiskMahasiswaRepository implements MahasiswaRepository {
    private tabel: Map<string, MahasiswaEntitas> = new Map();

    async simpan(data: MahasiswaEntitas): Promise<MahasiswaEntitas> {
        this.tabel.set(data.id, data);
        console.log(`[REPO] Mahasiswa [${data.id}] ${data.namaLengkap} berhasil disimpan.`);
        return data;
    }

    async cariBerdasarkanId(id: string): Promise<MahasiswaEntitas | null> {
        return this.tabel.get(id) ?? null;
    }
}

const repo = new InDiskMahasiswaRepository();
repo.simpan({ id: "M01", namaLengkap: "Rizki Ramadhan", ipk: 3.92 })
    .then(() => repo.cariBerdasarkanId("M01"))
    .then((hasil) => console.log("Hasil Query Repo:", hasil));
