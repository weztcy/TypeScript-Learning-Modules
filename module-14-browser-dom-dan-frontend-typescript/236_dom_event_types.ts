/**
 * Submodul: 236_dom_event_types.ts
 * Topik: Tipe Event DOM (MouseEvent, KeyboardEvent, FocusEvent)
 * Tujuan: Mengakses properti khusus sesuai jenis event (seperti .clientX, .key, .altKey).
 */

console.log("=== Tipe Event DOM di TypeScript ===");

interface CustomMouseEvent {
    clientX: number;
    clientY: number;
    tombol: number; // 0 = klik kiri, 2 = klik kanan
}

interface CustomKeyboardEvent {
    key: string;
    ctrlKey: boolean;
    shiftKey: boolean;
}

function tanganiKlikMouse(e: CustomMouseEvent): void {
    console.log(`[Mouse Event] Koordinat: (${e.clientX}, ${e.clientY}) | Tombol: ${e.tombol === 0 ? "Kiri" : "Kanan"}`);
}

function tanganiTekanTombol(e: CustomKeyboardEvent): void {
    const ctrl = e.ctrlKey ? "Ctrl + " : "";
    console.log(`[Keyboard Event] Tombol ditekan: ${ctrl}${e.key}`);
}

tanganiKlikMouse({ clientX: 420, clientY: 180, tombol: 0 });
tanganiTekanTombol({ key: "S", ctrlKey: true, shiftKey: false });
