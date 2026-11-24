/**
 * Submodul: 26_literal_types.ts
 * Topik: Literal Types
 * Tujuan: Membatasi nilai variabel hanya pada nilai harfiah tertentu (string, number, atau boolean literal).
 */

console.log("=== Literal Types di TypeScript ===");

// Mendefinisikan tipe literal yang membatasi nilai tema aplikasi
type TemaAplikasi = "terang" | "gelap" | "otomatis";

// Mendefinisikan tipe literal angka untuk kode status HTTP sukses
type KodeStatusSukses = 200 | 201 | 204;

function aturTema(tema: TemaAplikasi): void {
    console.log(`Tema aplikasi berhasil diubah ke: '${tema}'`);
}

function tanggapiStatus(status: KodeStatusSukses): void {
    console.log(`Respon diterima dengan kode sukses HTTP: ${status}`);
}

aturTema("gelap");
aturTema("terang");
tanggapiStatus(200);
tanggapiStatus(201);
