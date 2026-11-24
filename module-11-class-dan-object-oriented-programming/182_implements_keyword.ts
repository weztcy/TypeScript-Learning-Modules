/**
 * Submodul: 182_implements_keyword.ts
 * Topik: Keyword 'implements'
 * Tujuan: Mengharuskan class memenuhi satu atau lebih kontrak interface secara ketat.
 */

console.log("=== Keyword 'implements' di TypeScript ===");

interface Bekerja {
    bekerja(): void;
}

interface Istirahat {
    istirahat(durasiMenit: number): void;
}

// Class dapat mengimplementasikan beberapa interface sekaligus
class Programmer implements Bekerja, Istirahat {
    constructor(public nama: string) {}

    bekerja(): void {
        console.log(`${this.nama} sedang menulis kode TypeScript bebas bug.`);
    }

    istirahat(durasiMenit: number): void {
        console.log(`${this.nama} beristirahat dan minum kopi selama ${durasiMenit} menit.`);
    }
}

const dev = new Programmer("Dimas Wahyu");
dev.bekerja();
dev.istirahat(15);
