/**
 * Submodul: 282_nestjs_rest_api.ts
 * Topik: REST API Lengkap Berbasis NestJS Architecture
 * Tujuan: Menggabungkan Controller, Service, dan DTO ke dalam arsitektur modul utuh terstruktur.
 */

console.log("=== REST API Lengkap Arsitektur NestJS ===");

// 1. DTO
interface BuatBukuDTO {
    judul: string;
    pengarang: string;
    tahun: number;
}

// 2. Service (Logika Bisnis)
class BukuService {
    private koleksi: BuatBukuDTO[] = [
        { judul: "Mastering TypeScript Architecture", pengarang: "Team Lead", tahun: 2026 }
    ];

    ambilKoleksi(): BuatBukuDTO[] {
        return this.koleksi;
    }

    tambahBuku(dto: BuatBukuDTO): BuatBukuDTO {
        this.koleksi.push(dto);
        console.log(`Buku baru '${dto.judul}' berhasil ditambahkan ke perpustakaan.`);
        return dto;
    }
}

// 3. Controller
class BukuController {
    constructor(private readonly service: BukuService) {}

    getAll() {
        return this.service.ambilKoleksi();
    }

    create(dto: BuatBukuDTO) {
        return this.service.tambahBuku(dto);
    }
}

// 4. Modul Eksekusi
const bukuService = new BukuService();
const bukuController = new BukuController(bukuService);

bukuController.create({ judul: "Clean Code TypeScript", pengarang: "Robert C.", tahun: 2025 });
console.log("Daftar Buku Terkini:", bukuController.getAll());
