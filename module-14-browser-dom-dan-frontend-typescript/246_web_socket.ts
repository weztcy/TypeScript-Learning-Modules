/**
 * Submodul: 246_web_socket.ts
 * Topik: WebSocket API
 * Tujuan: Membangun komunikasi dua arah real-time (*full-duplex*) antara klien browser dan server.
 */

console.log("=== WebSocket API di TypeScript ===");

enum StatusWebSocket {
    CONNECTING = 0,
    OPEN = 1,
    CLOSING = 2,
    CLOSED = 3
}

interface PesanChat {
    pengirim: string;
    teks: string;
    waktu: string;
}

class MockWebSocketClient {
    public readyState: StatusWebSocket = StatusWebSocket.CONNECTING;

    hubungkan(): void {
        setTimeout(() => {
            this.readyState = StatusWebSocket.OPEN;
            console.log("[WS STATUS] Koneksi WebSocket ke wss://chat.domain.id:8080 TERBUKA.");
            this.kirimPesan({ pengirim: "Klien1", teks: "Halo semua!", waktu: new Date().toLocaleTimeString("id-ID") });
        }, 50);
    }

    kirimPesan(pesan: PesanChat): void {
        if (this.readyState === StatusWebSocket.OPEN) {
            console.log(`[WS KIRIM] [${pesan.waktu}] ${pesan.pengirim}: ${pesan.teks}`);
        }
    }
}

const ws = new MockWebSocketClient();
ws.hubungkan();
