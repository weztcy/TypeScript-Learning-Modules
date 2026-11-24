/**
 * Submodul: 299_student_management_project.ts
 * Topik: Proyek Praktik - Sistem Pengelolaan Mahasiswa (Student Management System)
 * Tujuan: Mengintegrasikan konsep tipe, interface, generics, class OOP, dan manipulasi data koleksi dalam satu proyek utuh.
 */

console.log("============================================================");
console.log("   PROYEK PRAKTIK 1: SISTEM PENGELOLAAN DATA MAHASISWA      ");
console.log("============================================================");

// 1. Definisi Tipe dan Enum
enum ProgramStudi {
    TeknikInformatika = "Teknik Informatika",
    SistemInformasi = "Sistem Informasi",
    TeknikKomputer = "Teknik Komputer"
}

type PredikatKelulusan = "Dengan Pujian (Cumlaude)" | "Sangat Memuaskan" | "Memuaskan" | "Cukup";

interface NilaiMataKuliah {
    kodeMK: string;
    namaMK: string;
    sks: number;
    nilaiHuruf: "A" | "B" | "C" | "D" | "E";
    bobot: number;
}

interface Mahasiswa {
    nim: string;
    nama: string;
    prodi: ProgramStudi;
    semester: number;
    daftarNilai: NilaiMataKuliah[];
}

// 2. Class Layanan Pengelolaan Mahasiswa
class SistemAkademikMahasiswa {
    private database: Map<string, Mahasiswa> = new Map();

    // Mendaftarkan mahasiswa baru
    tambahMahasiswa(nim: string, nama: string, prodi: ProgramStudi, semester: number): Mahasiswa {
        if (this.database.has(nim)) {
            throw new Error(`Mahasiswa dengan NIM ${nim} sudah terdaftar!`);
        }
        const mhs: Mahasiswa = {
            nim,
            nama,
            prodi,
            semester,
            daftarNilai: []
        };
        this.database.set(nim, mhs);
        console.log(`[PENDAFTARAN] Mahasiswa [${nim}] ${nama} berhasil didaftarkan.`);
        return mhs;
    }

    // Menambahkan rekap nilai mata kuliah
    tambahNilai(nim: string, kodeMK: string, namaMK: string, sks: number, nilaiHuruf: "A" | "B" | "C" | "D" | "E"): void {
        const mhs = this.database.get(nim);
        if (!mhs) {
            console.error(`Error: Mahasiswa dengan NIM ${nim} tidak ditemukan.`);
            return;
        }

        const konversiBobot: Record<string, number> = {
            A: 4.0,
            B: 3.0,
            C: 2.0,
            D: 1.0,
            E: 0.0
        };

        const entriNilai: NilaiMataKuliah = {
            kodeMK,
            namaMK,
            sks,
            nilaiHuruf,
            bobot: konversiBobot[nilaiHuruf]
        };

        mhs.daftarNilai.push(entriNilai);
        console.log(`[NILAI INPUT] NIM ${nim} -> ${namaMK} (${nilaiHuruf}, Bobot: ${entriNilai.bobot})`);
    }

    // Menghitung Indeks Prestasi Kumulatif (IPK)
    hitungIPK(nim: string): number {
        const mhs = this.database.get(nim);
        if (!mhs || mhs.daftarNilai.length === 0) return 0.0;

        const totalSKS = mhs.daftarNilai.reduce((acc, curr) => acc + curr.sks, 0);
        const totalPoin = mhs.daftarNilai.reduce((acc, curr) => acc + (curr.bobot * curr.sks), 0);

        return totalSKS === 0 ? 0.0 : Number((totalPoin / totalSKS).toFixed(2));
    }

    // Menentukan predikat akademik berdasarkan IPK
    evaluasiPredikat(ipk: number): PredikatKelulusan {
        if (ipk >= 3.75) return "Dengan Pujian (Cumlaude)";
        if (ipk >= 3.50) return "Sangat Memuaskan";
        if (ipk >= 3.00) return "Memuaskan";
        return "Cukup";
    }

    // Mencetak Transkrip Akademik Mahasiswa
    cetakTranskrip(nim: string): void {
        const mhs = this.database.get(nim);
        if (!mhs) return;

        const ipk = this.hitungIPK(nim);
        const predikat = this.evaluasiPredikat(ipk);

        console.log("\n------------------------------------------------------------");
        console.log(`               TRANSKRIP AKADEMIK RESMI                    `);
        console.log("------------------------------------------------------------");
        console.log(`NIM           : ${mhs.nim}`);
        console.log(`Nama Lengkap  : ${mhs.nama}`);
        console.log(`Program Studi : ${mhs.prodi}`);
        console.log(`Semester      : ${mhs.semester}`);
        console.log("Daftar Mata Kuliah:");
        mhs.daftarNilai.forEach((mk, i) => {
            console.log(`  ${i + 1}. [${mk.kodeMK}] ${mk.namaMK.padEnd(25, " ")} | ${mk.sks} SKS | Nilai: ${mk.nilaiHuruf}`);
        });
        console.log("------------------------------------------------------------");
        console.log(`Indeks Prestasi Kumulatif (IPK) : ${ipk}`);
        console.log(`Predikat Kelulusan              : ${predikat}`);
        console.log("------------------------------------------------------------\n");
    }
}

// 3. Eksekusi Skenario Proyek
const sistem = new SistemAkademikMahasiswa();

// Pendaftaran mahasiswa
sistem.tambahMahasiswa("10126001", "Alifian Dewantoro", ProgramStudi.TeknikInformatika, 6);
sistem.tambahMahasiswa("10126002", "Nadhira Az-Zahra", ProgramStudi.SistemInformasi, 4);

// Input nilai mata kuliah
sistem.tambahNilai("10126001", "IF201", "Struktur Data & Algoritma", 4, "A");
sistem.tambahNilai("10126001", "IF202", "Pemrograman Web Lanjut", 3, "A");
sistem.tambahNilai("10126001", "IF203", "Basis Data Relasional", 3, "B");
sistem.tambahNilai("10126001", "IF204", "Rekayasa Perangkat Lunak", 3, "A");

sistem.tambahNilai("10126002", "SI101", "Analisis Proses Bisnis", 3, "A");
sistem.tambahNilai("10126002", "SI102", "Desain Antarmuka Pengguna", 3, "B");

// Cetak hasil transkrip
sistem.cetakTranskrip("10126001");
sistem.cetakTranskrip("10126002");
