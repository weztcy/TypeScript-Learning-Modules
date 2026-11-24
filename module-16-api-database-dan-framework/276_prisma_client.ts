/**
 * Submodul: 276_prisma_client.ts
 * Topik: Konsep Prisma Client di TypeScript
 * Tujuan: Memahami arsitektur Prisma ORM sebagai generator query terketik 100% otomatis.
 */

console.log("=== Konsep Prisma Client di TypeScript ===");

// Model simulasi schema Prisma
interface UserPrismaModel {
    id: number;
    email: string;
    nama: string | null;
    peran: "USER" | "ADMIN";
}

// Simulasi struktur delegat Prisma Client
class MockPrismaClient {
    user = {
        findMany: async (args?: { where?: Partial<UserPrismaModel> }): Promise<UserPrismaModel[]> => {
            console.log("[PRISMA QUERY] prisma.user.findMany() dijalankan dengan kriteria:", args);
            return [
                { id: 1, email: "admin@prisma.io", nama: "Admin Sistem", peran: "ADMIN" },
                { id: 2, email: "user@prisma.io", nama: "User Reguler", peran: "USER" }
            ];
        }
    };
}

const prisma = new MockPrismaClient();

prisma.user.findMany({ where: { peran: "ADMIN" } })
    .then((hasil) => {
        console.log(`Ditemukan ${hasil.length} pengguna Prisma:`);
        hasil.forEach((u) => console.log(`- [${u.peran}] ${u.nama} (${u.email})`));
    });
