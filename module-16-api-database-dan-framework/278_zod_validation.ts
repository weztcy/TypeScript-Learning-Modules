/**
 * Submodul: 278_zod_validation.ts
 * Topik: Validasi Skema Menggunakan Zod
 * Tujuan: Mengintegrasikan validasi schema runtime yang secara otomatis menghasilkan tipe TypeScript (z.infer).
 */

import { z } from "zod";

console.log("=== Validasi Menggunakan Zod di TypeScript ===");

// Mendefinisikan schema validasi menggunakan pustaka Zod
const UserSchema = z.object({
    username: z.string().min(3, "Username minimal 3 karakter"),
    email: z.string().email("Format surel tidak valid"),
    usia: z.number().int().min(18, "Usia minimal 18 tahun"),
    peran: z.enum(["admin", "editor", "viewer"]).default("viewer")
});

// Mengekstrak tipe data TypeScript otomatis dari schema Zod
type TipePenggunaZod = z.infer<typeof UserSchema>;

// Data valid
const dataValid = {
    username: "johndoe",
    email: "john@perusahaan.co.id",
    usia: 28,
    peran: "editor" as const
};

// Melakukan parsing validasi
const hasilVerifikasi: TipePenggunaZod = UserSchema.parse(dataValid);
console.log("Data Lolos Validasi Zod:");
console.log(hasilVerifikasi);

// Data salah untuk menguji penangkapan error
const hasilSalah = UserSchema.safeParse({ username: "a", email: "bukan-email", usia: 12 });
if (!hasilSalah.success) {
    console.log("Daftar Kesalahan Zod:");
    hasilSalah.error.issues.forEach((issue) => {
        console.log(`- Jalur: ${issue.path.join(".")} -> ${issue.message}`);
    });
}
