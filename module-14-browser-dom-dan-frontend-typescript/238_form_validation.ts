/**
 * Submodul: 238_form_validation.ts
 * Topik: Validasi Formulir Frontend
 * Tujuan: Memeriksa kelengkapan dan format data isian pengguna sebelum dikirimkan ke server.
 */

console.log("=== Validasi Formulir di TypeScript ===");

interface FormPendaftaran {
    namaLengkap: string;
    email: string;
    umur: number;
}

interface HasilValidasi {
    valid: boolean;
    daftarError: string[];
}

function validasiFormulir(data: FormPendaftaran): HasilValidasi {
    const error: string[] = [];

    if (data.namaLengkap.trim().length < 3) {
        error.push("Nama lengkap minimal harus terdiri dari 3 karakter.");
    }
    if (!data.email.includes("@") || !data.email.includes(".")) {
        error.push("Alamat email tidak valid.");
    }
    if (data.umur < 17) {
        error.push("Usia pendaftar minimal harus 17 tahun.");
    }

    return {
        valid: error.length === 0,
        daftarError: error
    };
}

const dataTes1: FormPendaftaran = { namaLengkap: "Al", email: "salah-email", umur: 15 };
const dataTes2: FormPendaftaran = { namaLengkap: "Bambang Pamungkas", email: "bambang@bola.id", umur: 32 };

console.log("Tes 1 (Data tidak lengkap):", validasiFormulir(dataTes1));
console.log("Tes 2 (Data valid):", validasiFormulir(dataTes2));
