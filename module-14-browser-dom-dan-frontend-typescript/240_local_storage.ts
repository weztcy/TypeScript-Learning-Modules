/**
 * Submodul: 240_local_storage.ts
 * Topik: Local Storage (Penyimpanan Persisten Browser)
 * Tujuan: Menyimpan dan membaca kembali data teks/JSON yang bertahan meskipun browser ditutup.
 */

console.log("=== Local Storage di TypeScript ===");

class MockLocalStorage {
    private storage: Map<string, string> = new Map();

    setItem(key: string, value: string): void {
        this.storage.set(key, value);
    }

    getItem(key: string): string | null {
        return this.storage.get(key) ?? null;
    }

    removeItem(key: string): void {
        this.storage.delete(key);
    }
}

const penyimpananLokal = new MockLocalStorage();

// Menyimpan data objek dengan serialisasi JSON
const preferensi = { tema: "dark", ukuranFont: 16 };
penyimpananLokal.setItem("pref_app", JSON.stringify(preferensi));

// Membaca kembali data dan deserialisasi
const raw = penyimpananLokal.getItem("pref_app");
if (raw) {
    const dataPref = JSON.parse(raw);
    console.log("Data Preferensi dari LocalStorage:");
    console.log(`Tema: ${dataPref.tema}, Ukuran Font: ${dataPref.ukuranFont}px`);
}
