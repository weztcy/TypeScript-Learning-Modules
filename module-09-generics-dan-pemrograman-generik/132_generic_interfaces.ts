/**
 * Submodul: 132_generic_interfaces.ts
 * Topik: Generic Interfaces
 * Tujuan: Merancang kontrak interface pembungkus respon API yang fleksibel untuk berbagai model data.
 */

console.log("=== Generic Interfaces di TypeScript ===");

// Interface pembungkus respon API generik
interface ResponStandarAPI<T> {
    kodeStatus: number;
    pesan: string;
    payload: T;
}

interface ProfilPengguna {
    userId: string;
    namaLengkap: string;
}

interface RingkasanTransaksi {
    trxId: string;
    totalBayar: number;
}

const responUser: ResponStandarAPI<ProfilPengguna> = {
    kodeStatus: 200,
    pesan: "Data profil berhasil ditemukan",
    payload: { userId: "USR-01", namaLengkap: "Dewi Anggraini" }
};

const responTrx: ResponStandarAPI<RingkasanTransaksi> = {
    kodeStatus: 201,
    pesan: "Transaksi berhasil dibukukan",
    payload: { trxId: "TRX-998", totalBayar: 450000 }
};

console.log(`Respon 1: [${responUser.kodeStatus}] ${responUser.payload.namaLengkap}`);
console.log(`Respon 2: [${responTrx.kodeStatus}] Rp ${responTrx.payload.totalBayar.toLocaleString("id-ID")}`);
