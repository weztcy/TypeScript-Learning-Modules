/**
 * Submodul: 244_mutation_observer.ts
 * Topik: Mutation Observer API
 * Tujuan: Mengamati perubahan pada pohon DOM (penambahan node anak atau modifikasi atribut).
 */

console.log("=== Mutation Observer API ===");

interface MockMutationRecord {
    type: "childList" | "attributes";
    targetNode: string;
    addedNodesCount: number;
}

function prosesMutasiDOM(records: MockMutationRecord[]): void {
    records.forEach((record) => {
        if (record.type === "childList") {
            console.log(`[MUTASI] Node baru ditambahkan ke #${record.targetNode} (${record.addedNodesCount} elemen anak)`);
        } else if (record.type === "attributes") {
            console.log(`[MUTASI] Atribut pada #${record.targetNode} mengalami perubahan!`);
        }
    });
}

prosesMutasiDOM([
    { type: "childList", targetNode: "daftar-komentar", addedNodesCount: 2 },
    { type: "attributes", targetNode: "modal-login", addedNodesCount: 0 }
]);
