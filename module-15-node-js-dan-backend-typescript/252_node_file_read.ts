/**
 * Submodul: 252_node_file_read.ts
 * Topik: Membaca File (fs/promises)
 * Tujuan: Membaca berkas teks dari sistem penyimpanan secara asynchronous dan terketik.
 */

import * as fs from "fs/promises";
import * as path from "path";

console.log("=== Membaca File dengan fs/promises ===");

async function demonstrasiBacaFile(): Promise<void> {
    const targetFile = path.join(process.cwd(), "package.json");
    try {
        console.log(`Membaca berkas: ${targetFile}`);
        const dataMentah = await fs.readFile(targetFile, "utf-8");
        const json = JSON.parse(dataMentah);
        
        console.log(`Nama Paket   : ${json.name}`);
        console.log(`Versi Paket  : ${json.version}`);
        console.log("Status: Pembacaan berkas berhasil 100%!");
    } catch (err: any) {
        console.error("Gagal membaca berkas:", err.message);
    }
}

demonstrasiBacaFile();
