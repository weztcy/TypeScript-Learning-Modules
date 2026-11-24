/**
 * Submodul: 269_express_routes.ts
 * Topik: Routing Express dengan Router
 * Tujuan: Mengorganisasikan endpoint API ke dalam modul-modul rute terpisah secara modular.
 */

import express, { Router, Request, Response } from "express";

console.log("=== Routing Express Modular ===");

const penggunaRouter: Router = express.Router();

// Mendefinisikan sub-rute untuk pengguna
penggunaRouter.get("/", (req: Request, res: Response) => {
    res.json([{ id: 1, nama: "Ahmad Dahlan" }]);
});

penggunaRouter.get("/:id", (req: Request, res: Response) => {
    res.json({ id: req.params.id, nama: "Detail Pengguna Terpilih" });
});

const app = express();
app.use("/api/pengguna", penggunaRouter);

console.log("Rute modular terpasang pada /api/pengguna:");
console.log("  - GET /api/pengguna     -> Daftar seluruh pengguna");
console.log("  - GET /api/pengguna/:id -> Detail pengguna berdasarkan ID");
