/**
 * Submodul: 277_prisma_crud.ts
 * Topik: Operasi CRUD dengan Prisma ORM
 * Tujuan: Mensimulasikan operasi Create, Read, Update, Delete dengan type-safety Prisma.
 */

console.log("=== Operasi CRUD dengan Prisma ORM ===");

interface ArtikelData {
    id: number;
    judul: string;
    konten: string;
    diterbitkan: boolean;
}

class MockPrismaCRUD {
    private data: ArtikelData[] = [];

    async create(judul: string, konten: string): Promise<ArtikelData> {
        const item = { id: this.data.length + 1, judul, konten, diterbitkan: false };
        this.data.push(item);
        console.log(`[CREATE] Artikel ID #${item.id} berhasil disimpan.`);
        return item;
    }

    async update(id: number, diterbitkan: boolean): Promise<ArtikelData | null> {
        const item = this.data.find((a) => a.id === id);
        if (item) {
            item.diterbitkan = diterbitkan;
            console.log(`[UPDATE] Status artikel #${id} diubah menjadi: ${diterbitkan ? "Rilis" : "Draf"}`);
            return item;
        }
        return null;
    }
}

const prismaService = new MockPrismaCRUD();

async function alurPrisma() {
    const art = await prismaService.create("Mengenal ORM Modern", "Prisma memberikan type safety luar biasa.");
    await prismaService.update(art.id, true);
}

alurPrisma();
