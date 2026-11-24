/**
 * Submodul: 231_dom_text_content.ts
 * Topik: Manipulasi textContent dan innerText
 * Tujuan: Mengubah isi teks sebuah elemen DOM secara aman tanpa kerentanan XSS injection.
 */

console.log("=== Manipulasi textContent di TypeScript ===");

class ElemenTeks {
    private _konten: string = "";

    get textContent(): string {
        return this._konten;
    }

    set textContent(nilai: string) {
        // textContent menyandikan karakter khusus HTML secara otomatis
        this._konten = nilai;
        console.log(`[DOM UPDATE] Konten elemen diperbarui menjadi: "${this._konten}"`);
    }
}

const paragrafStatus = new ElemenTeks();
paragrafStatus.textContent = "Sistem dalam status operasional normal.";
paragrafStatus.textContent = "Peringatan: Pemeliharaan terjadwal malam ini pukul 23:00 WIB.";
