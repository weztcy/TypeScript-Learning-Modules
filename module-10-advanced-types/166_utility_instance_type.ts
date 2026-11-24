/**
 * Submodul: 166_utility_instance_type.ts
 * Topik: Utility Type InstanceType<T>
 * Tujuan: Memperoleh tipe instance yang dihasilkan oleh fungsi konstruktor atau class.
 */

console.log("=== Utility Type InstanceType<T> di TypeScript ===");

class ManajerBasisData {
    namaKoneksi = "PostgreSQL-Pool";
    cekKoneksi(): boolean {
        return true;
    }
}

// InstanceType mengekstrak tipe objek yang dihasilkan oleh class ManajerBasisData
type InstanceDatabase = InstanceType<typeof ManajerBasisData>;

const dbInstance: InstanceDatabase = new ManajerBasisData();

console.log(`Nama Koneksi : ${dbInstance.namaKoneksi}`);
console.log(`Status Hidup : ${dbInstance.cekKoneksi() ? "ONLINE" : "OFFLINE"}`);
