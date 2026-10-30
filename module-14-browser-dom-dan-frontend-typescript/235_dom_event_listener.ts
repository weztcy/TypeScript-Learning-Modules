/**
 * Submodul: 235_dom_event_listener.ts
 * Topik: Event Listener (addEventListener)
 * Tujuan: Menangani interaksi pengguna (klik, ketikan, perubahan) dengan event listener terketik.
 */

console.log("=== Event Listener di TypeScript ===");

type EventHandler = (event: { tipe: string; timestamp: number }) => void;

class EventBusMock {
    private pendengar: Map<string, EventHandler[]> = new Map();

    addEventListener(tipeEvent: string, handler: EventHandler): void {
        const list = this.pendengar.get(tipeEvent) ?? [];
        list.push(handler);
        this.pendengar.set(tipeEvent, list);
        console.log(`[LISTENER TERPASANG] Event: '${tipeEvent}'`);
    }

    dispatch(tipeEvent: string): void {
        const list = this.pendengar.get(tipeEvent) ?? [];
        list.forEach((fn) => fn({ tipe: tipeEvent, timestamp: Date.now() }));
    }
}

const tombolCheckout = new EventBusMock();

tombolCheckout.addEventListener("click", (e) => {
    console.log(`[EVENT TERPANGGIL] Pengguna mengklik tombol checkout pada ${e.timestamp}!`);
});

console.log("Mensimulasikan klik pengguna...");
tombolCheckout.dispatch("click");
