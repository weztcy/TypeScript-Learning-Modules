/**
 * Submodul: 271_express_controllers.ts
 * Topik: Controller Express
 * Tujuan: Memisahkan logika bisnis dari definisi rute ke dalam class atau fungsi controller terisolasi.
 */

import { Request, Response } from "express";

console.log("=== Controller Express di TypeScript ===");

interface MahasiswaDTO {
    id: number;
    nama: string;
    jurusan: string;
}

class MahasiswaController {
    private database: MahasiswaDTO[] = [
        { id: 1, nama: "Fajar Nugraha", jurusan: "Teknik Informatika" },
        { id: 2, nama: "Indah Permata", jurusan: "Sistem Informasi" }
    ];

    ambilSemua = (req: Request, res: Response): void => {
        console.log(`[CONTROLLER] Mengambil ${this.database.length} data mahasiswa.`);
    };

    ambilBerdasarkanId = (id: number): MahasiswaDTO | null => {
        return this.database.find((m) => m.id === id) ?? null;
    };
}

const controller = new MahasiswaController();
controller.ambilSemua({} as Request, {} as Response);
const cari = controller.ambilBerdasarkanId(1);
console.log("Hasil pencarian ID 1:", cari);
