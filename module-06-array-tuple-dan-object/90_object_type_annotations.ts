/**
 * Submodul: 90_object_type_annotations.ts
 * Topik: Object Type Annotations
 * Tujuan: Menetapkan kontrak tipe eksplisit pada properti objek.
 */

console.log("=== Object Type Annotations di TypeScript ===");

// Menentukan struktur tipe objek secara eksplisit (inline type annotation)
const serverNode: {
    ipAddress: string;
    port: number;
    lokasiDataCenter: string;
    statusOnline: boolean;
} = {
    ipAddress: "192.168.1.50",
    port: 8080,
    lokasiDataCenter: "Jakarta IDC 3D",
    statusOnline: true
};

console.log("Informasi Server Terkelola:");
console.log(`Alamat IP  : ${serverNode.ipAddress}:${serverNode.port}`);
console.log(`Lokasi     : ${serverNode.lokasiDataCenter}`);
console.log(`Status     : ${serverNode.statusOnline ? "Online" : "Offline"}`);
