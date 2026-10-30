/**
 * Submodul: 253_node_file_write.ts
 * Topik: Menulis File (fs/promises writeFile)
 * Tujuan: Menulis data teks terstruktur ke media penyimpanan disk secara aman.
 */

import * as fs from "fs/promises";
import * as path from "path";

console.log("=== Menulis File dengan fs/promises ===");

async function demonstrasiTulisFile(): Promise<void> {
    const fileOutput = path.join(__dirname, "catatan_temp.txt");
    const konten = `Catatan Log Sistem TypeScript\nDibuat pada: ${new Date().toISOString()}\nStatus: Sukses`;

    try {
        await fs.writeFile(fileOutput, konten, "utf-8");
        console.log(`File berhasil ditulis ke: ${path.basename(fileOutput)}`);
        
        // Membaca kembali untuk verifikasi
        const hasil = await fs.readFile(fileOutput, "utf-8");
        console.log("Isi berkas yang baru ditulis:");
        console.log(hasil);

        // Membersihkan file temp
        await fs.unlink(fileOutput);
        console.log("File sementara berhasil dibersihkan.");
    } catch (err: any) {
        console.error("Gagal operasi tulis berkas:", err.message);
    }
}

demonstrasiTulisFile();
