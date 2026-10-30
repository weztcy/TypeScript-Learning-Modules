/**
 * Submodul: 289_test_fixtures.ts
 * Topik: Test Fixtures & Factories
 * Tujuan: Menyiapkan dataset dummy terstandar dan konsisten untuk kebutuhan pengujian berulang.
 */

console.log("=== Test Fixtures & Factories di TypeScript ===");

interface PenggunaFixture {
    id: number;
    nama: string;
    email: string;
    peran: "ADMIN" | "USER";
    saldoAktif: number;
}

// Factory function untuk memproduksi fixture data pengguna
function buatPenggunaFixture(overrides: Partial<PenggunaFixture> = {}): PenggunaFixture {
    return {
        id: Math.floor(Math.random() * 1000) + 1,
        nama: "Pengguna Uji Coba",
        email: "test.user@domain.id",
        peran: "USER",
        saldoAktif: 100000,
        ...overrides
    };
}

const userStandar = buatPenggunaFixture();
const adminKhusus = buatPenggunaFixture({ nama: "Admin Penilai", peran: "ADMIN", saldoAktif: 9999999 });

console.log("Fixture Pengguna Standar:", userStandar);
console.log("Fixture Admin Khusus   :", adminKhusus);
