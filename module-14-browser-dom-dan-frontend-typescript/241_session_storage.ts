/**
 * Submodul: 241_session_storage.ts
 * Topik: Session Storage (Penyimpanan Sementara Tab Browser)
 * Tujuan: Mengelola data state sementara yang terhapus saat tab atau window browser ditutup.
 */

console.log("=== Session Storage di TypeScript ===");

class MockSessionStorage {
    private sessionMap: Map<string, string> = new Map();

    setItem(key: string, value: string): void {
        this.sessionMap.set(key, value);
    }

    getItem(key: string): string | null {
        return this.sessionMap.get(key) ?? null;
    }
}

const sesiBrowser = new MockSessionStorage();
sesiBrowser.setItem("token_jwt_sementara", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...");

const token = sesiBrowser.getItem("token_jwt_sementara");
console.log(`Token Sesi Aktif: ${token?.substring(0, 25)}...`);
console.log("Data SessionStorage terisolasi pada tab browser yang aktif.");
