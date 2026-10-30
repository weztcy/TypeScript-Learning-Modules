/**
 * Submodul: 272_express_rest_api.ts
 * Topik: REST API Lengkap dengan Express (CRUD)
 * Tujuan: Mengintegrasikan rute, DTO, middleware, dan controller menjadi satu REST API fungsional.
 */

import express, { Request, Response } from "express";

console.log("=== REST API CRUD dengan Express ===");

interface ItemTugas {
    id: number;
    judul: string;
    selesai: boolean;
}

const app = express();
app.use(express.json());

const daftarTugas: ItemTugas[] = [
    { id: 1, judul: "Mempelajari TypeScript Generics", selesai: true },
    { id: 2, judul: "Membangun REST API Express", selesai: false }
];

// 1. GET: Ambil semua tugas
app.get("/todos", (req: Request, res: Response) => {
    res.json(daftarTugas);
});

// 2. POST: Tambah tugas baru
app.post("/todos", (req: Request, res: Response) => {
    const tugasBaru: ItemTugas = {
        id: daftarTugas.length + 1,
        judul: req.body.judul ?? "Tugas Tanpa Judul",
        selesai: false
    };
    daftarTugas.push(tugasBaru);
    res.status(201).json(tugasBaru);
});

console.log("Endpoints CRUD Tugas Siap:");
console.log("  - GET  /todos : Mengambil seluruh daftar tugas");
console.log("  - POST /todos : Membuat tugas baru");
console.log("Total tugas terdata awal:", daftarTugas.length);
