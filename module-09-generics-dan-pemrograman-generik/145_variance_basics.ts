/**
 * Submodul: 145_variance_basics.ts
 * Topik: Dasar Variance (Covariance dan Contravariance)
 * Tujuan: Memahami bagaimana hubungan subtipe ditransmisikan pada tipe generik.
 */

console.log("=== Dasar Variance di TypeScript ===");

class Hewan {
    constructor(public nama: string) {}
}

class Anjing extends Hewan {
    gonggong() {
        console.log(`${this.nama}: Guk guk!`);
    }
}

// Covariance: Jika Anjing adalah subtipe Hewan, maka Anjing[] dapat ditugaskan ke readonly Hewan[]
const kawananAnjing: Anjing[] = [new Anjing("Milo"), new Anjing("Buddy")];
const kawananHewan: readonly Hewan[] = kawananAnjing;

console.log(`Jumlah hewan dalam koleksi: ${kawananHewan.length}`);
kawananAnjing[0].gonggong();
console.log("Covariance memungkinkan tipe wadah menyesuaikan hirarki subtipe anggotanya.");
