/**
 * Submodul: 121_truthiness_narrowing.ts
 * Topik: Truthiness Narrowing
 * Tujuan: Mempersempit tipe dengan mengevaluasi apakah nilai bernilai truthy atau falsy.
 */

console.log("=== Truthiness Narrowing di TypeScript ===");

function cetakDaftarNama(namaList?: string[] | null): void {
    // Mengecek truthiness: jika namaList adalah truthy (bukan undefined, bukan null)
    if (namaList && namaList.length > 0) {
        console.log(`Daftar Anggota (${namaList.length} orang):`);
        namaList.forEach((nama, i) => console.log(`  ${i + 1}. ${nama}`));
    } else {
        console.log("Daftar anggota kosong atau tidak disediakan.");
    }
}

cetakDaftarNama(["Andi", "Beni", "Citra"]);
cetakDaftarNama(null);
cetakDaftarNama();
