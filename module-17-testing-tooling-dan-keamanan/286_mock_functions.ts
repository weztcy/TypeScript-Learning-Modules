/**
 * Submodul: 286_mock_functions.ts
 * Topik: Mock Functions (Spy & Stub)
 * Tujuan: Mengisolasi pengujian dengan merekam pemanggilan fungsi (*spy*) dan menggantikan fungsi dependen.
 */

console.log("=== Mock Functions di TypeScript ===");

// Implementasi Mock Function sederhana
function buatMockFn<T extends (...args: any[]) => any>(implementasiAsli: T) {
    const riwayatPanggilan: any[][] = [];
    
    const mock = function (...args: any[]) {
        riwayatPanggilan.push(args);
        return implementasiAsli(...args);
    };

    mock.getPanggilan = () => riwayatPanggilan;
    mock.banyaknyaPanggilan = () => riwayatPanggilan.length;

    return mock;
}

const mockLogger = buatMockFn((pesan: string) => `[LOG]: ${pesan}`);

mockLogger("Pesan Pertama");
mockLogger("Pesan Kedua");

console.log(`Jumlah pemanggilan mock function: ${mockLogger.banyaknyaPanggilan()} kali`);
console.log("Riwayat argumen pemanggilan:", mockLogger.getPanggilan());
