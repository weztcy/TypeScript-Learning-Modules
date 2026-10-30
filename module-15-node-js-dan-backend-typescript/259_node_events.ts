/**
 * Submodul: 259_node_events.ts
 * Topik: EventEmitter (events module)
 * Tujuan: Mengimplementasikan pola arsitektur berbasis event (*Event-Driven Architecture*) terketik.
 */

import { EventEmitter } from "events";

console.log("=== EventEmitter di Node.js ===");

interface EventPesanan {
    orderId: string;
    total: number;
}

class ManajerPesanan extends EventEmitter {
    buatPesanan(orderId: string, total: number): void {
        console.log(`Membuat pesanan baru [${orderId}] senilai Rp ${total.toLocaleString("id-ID")}`);
        // Memicu event 'pesananDibuat'
        this.emit("pesananDibuat", { orderId, total });
    }
}

const toko = new ManajerPesanan();

// Mendaftarkan event listener
toko.on("pesananDibuat", (data: EventPesanan) => {
    console.log(`[NOTIFIKASI GUDANG] Menyiapkan paket pesanan #${data.orderId}`);
});

toko.on("pesananDibuat", (data: EventPesanan) => {
    console.log(`[EMAIL INVOICE] Mengirim tagihan Rp ${data.total.toLocaleString("id-ID")} ke email pembeli.`);
});

toko.buatPesanan("TRX-2026-001", 350000);
