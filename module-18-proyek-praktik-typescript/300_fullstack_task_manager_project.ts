/**
 * Submodul: 300_fullstack_task_manager_project.ts
 * Topik: Proyek Praktik - Aplikasi Manajemen Tugas Full-Stack (Task Manager)
 * Tujuan: Merangkum seluruh kurikulum TypeScript dalam arsitektur aplikasi backend REST API, DTO, Repository, Service, dan Analytics.
 */

console.log("============================================================");
console.log("   PROYEK PRAKTIK 2: APLIKASI MANAJEMEN TUGAS FULL-STACK    ");
console.log("============================================================");

// 1. Domain Types & Enums
type PrioritasTugas = "RENDAH" | "SEDANG" | "TINGGI" | "URGENT";
type StatusTugas = "TODO" | "SEDANG_DIKERJAKAN" | "DALAM_REVIEW" | "SELESAI";

interface TugasEntitas {
    id: string;
    judul: string;
    deskripsi: string;
    prioritas: PrioritasTugas;
    status: StatusTugas;
    tanggalDibuat: Date;
    tanggalSelesai?: Date;
}

// 2. Result Type Pattern untuk Penanganan Hasil Bisnis yang Aman
type Result<T, E = string> = { sukses: true; data: T } | { sukses: false; error: E };

// 3. In-Memory Task Repository
class TaskRepository {
    private koleksi: Map<string, TugasEntitas> = new Map();

    simpan(tugas: TugasEntitas): TugasEntitas {
        this.koleksi.set(tugas.id, tugas);
        return tugas;
    }

    cariSemua(): TugasEntitas[] {
        return Array.from(this.koleksi.values());
    }

    cariBerdasarkanId(id: string): TugasEntitas | undefined {
        return this.koleksi.get(id);
    }
}

// 4. Task Service (Logika Bisnis & Validasi State Transition)
class TaskService {
    constructor(private repo: TaskRepository) {}

    buatTugas(judul: string, deskripsi: string, prioritas: PrioritasTugas): Result<TugasEntitas> {
        if (!judul || judul.trim().length < 3) {
            return { sukses: false, error: "Judul tugas minimal harus 3 karakter!" };
        }

        const id = `TSK-${Math.floor(1000 + Math.random() * 9000)}`;
        const tugasBaru: TugasEntitas = {
            id,
            judul: judul.trim(),
            deskripsi: deskripsi.trim(),
            prioritas,
            status: "TODO",
            tanggalDibuat: new Date()
        };

        const tersimpan = this.repo.simpan(tugasBaru);
        return { sukses: true, data: tersimpan };
    }

    ubahStatus(id: string, statusTarget: StatusTugas): Result<TugasEntitas> {
        const tugas = this.repo.cariBerdasarkanId(id);
        if (!tugas) {
            return { sukses: false, error: `Tugas ID '${id}' tidak ditemukan!` };
        }

        // Validasi transisi status bisnis
        if (tugas.status === "SELESAI") {
            return { sukses: false, error: "Tugas yang sudah selesai tidak dapat diubah statusnya!" };
        }

        tugas.status = statusTarget;
        if (statusTarget === "SELESAI") {
            tugas.tanggalSelesai = new Date();
        }

        this.repo.simpan(tugas);
        return { sukses: true, data: tugas };
    }

    dapatkanLaporanMetrik() {
        const seluruhTugas = this.repo.cariSemua();
        const total = seluruhTugas.length;
        const selesai = seluruhTugas.filter((t) => t.status === "SELESAI").length;
        const sedangJalan = seluruhTugas.filter((t) => t.status === "SEDANG_DIKERJAKAN").length;
        const persentaseSelesai = total === 0 ? 0 : Math.round((selesai / total) * 100);

        return {
            totalTugas: total,
            selesai,
            sedangJalan,
            persentaseSelesai: `${persentaseSelesai}%`
        };
    }
}

// 5. REST Controller Simulation
class TaskController {
    constructor(private service: TaskService) {}

    handleCreate(judul: string, deskripsi: string, prioritas: PrioritasTugas) {
        console.log(`[API POST /tasks] Request: "${judul}" [Prioritas: ${prioritas}]`);
        const res = this.service.buatTugas(judul, deskripsi, prioritas);
        if (res.sukses) {
            console.log(`  -> Response 201 Created: ID ${res.data.id} berhasil diterbitkan.`);
        } else {
            console.log(`  -> Response 400 Bad Request: ${res.error}`);
        }
        return res;
    }

    handleUpdateStatus(id: string, status: StatusTugas) {
        console.log(`[API PATCH /tasks/${id}] Mengubah status ke: ${status}`);
        const res = this.service.ubahStatus(id, status);
        if (res.sukses) {
            console.log(`  -> Response 200 OK: Status berhasil dimutasi ke '${res.data.status}'.`);
        } else {
            console.log(`  -> Response 422 Unprocessable: ${res.error}`);
        }
        return res;
    }

    handleGetDashboard() {
        console.log("[API GET /dashboard/metrics] Menghitung metrik performa sprint...");
        const metrik = this.service.dapatkanLaporanMetrik();
        console.log("  -> Dashboard Analytics:", metrik);
        return metrik;
    }
}

// 6. Eksekusi Alur End-to-End
const repository = new TaskRepository();
const service = new TaskService(repository);
const controller = new TaskController(service);

// Membuat tugas-tugas
const t1 = controller.handleCreate("Implementasi JWT Authentication", "Membuat middleware otentikasi Bearer token", "URGENT");
const t2 = controller.handleCreate("Refactoring Database Schema", "Migrasi kolom ke Prisma ORM", "SEDANG");
const t3 = controller.handleCreate("Desain Halaman Profil Pengguna", "Menggunakan Tailwind CSS", "RENDAH");

// Menguji validasi kegagalan
controller.handleCreate("No", "Tugas tidak valid", "RENDAH");

if (t1.sukses) {
    controller.handleUpdateStatus(t1.data.id, "SEDANG_DIKERJAKAN");
    controller.handleUpdateStatus(t1.data.id, "DALAM_REVIEW");
    controller.handleUpdateStatus(t1.data.id, "SELESAI");
    // Menguji proteksi tidak boleh diubah jika sudah selesai
    controller.handleUpdateStatus(t1.data.id, "TODO");
}

if (t2.sukses) {
    controller.handleUpdateStatus(t2.data.id, "SEDANG_DIKERJAKAN");
}

// Melihat ringkasan dashboard akhir
controller.handleGetDashboard();
console.log("Seluruh alur proyek Task Manager berhasil diselesaikan dengan sukses!");
