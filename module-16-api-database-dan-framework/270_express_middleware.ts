/**
 * Submodul: 270_express_middleware.ts
 * Topik: Middleware Express
 * Tujuan: Menyisipkan pemrosesan logging, autentikasi header, dan transformasi data sebelum controller.
 */

import { Request, Response, NextFunction } from "express";

console.log("=== Middleware Express di TypeScript ===");

// Middleware pencatat aktivitas (Logger Middleware)
function loggerMiddleware(req: Request, res: Response, next: NextFunction): void {
    const waktu = new Date().toLocaleTimeString("id-ID");
    console.log(`[MIDDLEWARE LOG] ${waktu} | ${req.method} ${req.url}`);
    next(); // Melanjutkan ke handler berikutnya
}

// Middleware validasi header otorisasi
function authGuardMiddleware(req: Request, res: Response, next: NextFunction): void {
    const authHeader = req.headers["authorization"];
    if (authHeader && authHeader.startsWith("Bearer ")) {
        console.log("[AUTH MIDDLEWARE] Token Bearer valid!");
        next();
    } else {
        console.log("[AUTH MIDDLEWARE] Akses ditolak: Header Authorization tidak ditemukan.");
    }
}

// Simulasi eksekusi pipeline middleware
const mockReq = { method: "GET", url: "/api/dashboard", headers: { authorization: "Bearer TOKEN_RAHASIA" } } as any;
const mockRes = {} as any;

loggerMiddleware(mockReq, mockRes, () => {
    authGuardMiddleware(mockReq, mockRes, () => {
        console.log("[CONTROLLER] Berhasil mencapai controller endpoint utama!");
    });
});
