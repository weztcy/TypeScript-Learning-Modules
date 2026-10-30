/**
 * Submodul: 203_project_references.ts
 * Topik: Project References pada Monorepo
 * Tujuan: Memecah proyek besar menjadi beberapa sub-proyek TypeScript mandiri untuk kompilasi bertahap (incremental builds).
 */

console.log("=== Project References di TypeScript ===");

interface SubProyekRef {
    namaProyek: string;
    path: string;
    composite: boolean;
}

const strukturMonorepo: SubProyekRef[] = [
    { namaProyek: "core-domain", path: "./packages/core", composite: true },
    { namaProyek: "api-backend", path: "./packages/api", composite: true },
    { namaProyek: "web-client", path: "./packages/web", composite: true }
];

console.log("Struktur Referensi Sub-Proyek Monorepo:");
for (const p of strukturMonorepo) {
    console.log(`- Subproyek: ${p.namaProyek.padEnd(15, " ")} | Path: ${p.path} | Composite: ${p.composite}`);
}
