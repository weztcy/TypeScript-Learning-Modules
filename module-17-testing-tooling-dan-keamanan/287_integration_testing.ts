/**
 * Submodul: 287_integration_testing.ts
 * Topik: Integration Testing (Pengujian Integrasi Komponen)
 * Tujuan: Menguji interaksi antara lapisan Controller, Service, dan Database secara terintegrasi.
 */

console.log("=== Integration Testing di TypeScript ===");

interface EntitasKeranjang {
    item: string;
    harga: number;
}

class DatabaseServiceMock {
    private items: EntitasKeranjang[] = [];
    async simpanItem(data: EntitasKeranjang) {
        this.items.push(data);
        return true;
    }
    async hitungTotal() {
        return this.items.reduce((acc, curr) => acc + curr.harga, 0);
    }
}

class KasirController {
    constructor(private db: DatabaseServiceMock) {}

    async tambahDanCekTotal(nama: string, harga: number) {
        await this.db.simpanItem({ item: nama, harga });
        return await this.db.hitungTotal();
    }
}

async function jalankanUjiIntegrasi() {
    console.log("[INTEGRATION TEST] Menguji alur Controller -> Database...");
    const db = new DatabaseServiceMock();
    const kasir = new KasirController(db);

    const total1 = await kasir.tambahDanCekTotal("Buku TypeScript", 120000);
    const total2 = await kasir.tambahDanCekTotal("Kopi Espresso", 30000);

    if (total2 === 150000) {
        console.log(`✓ INTEGRASI SUKSES: Total kumulatif Rp ${total2.toLocaleString("id-ID")} terverifikasi.`);
    }
}

jalankanUjiIntegrasi();
