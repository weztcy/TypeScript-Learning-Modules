/**
 * Submodul: 218_generic_promises.ts
 * Topik: Generic Promises
 * Tujuan: Membuat fungsi wrapper asynchronous yang mengembalikan Promise dengan tipe data generik T.
 */

console.log("=== Generic Promises di TypeScript ===");

function ambilDataTersimpan<T>(kunci: string, mockData: T): Promise<T> {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`[STORAGE] Berhasil mengambil data untuk kunci: '${kunci}'`);
            resolve(mockData);
        }, 50);
    });
}

interface PreferensiPengguna {
    tema: "terang" | "gelap";
    bahasa: string;
}

ambilDataTersimpan<PreferensiPengguna>("user_pref", { tema: "gelap", bahasa: "id-ID" })
    .then((pref) => {
        console.log(`Tema Terpilih   : ${pref.tema}`);
        console.log(`Bahasa Antarmuka: ${pref.bahasa}`);
    });
