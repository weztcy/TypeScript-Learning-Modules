/**
 * Submodul: 196_module_resolution.ts
 * Topik: Module Resolution Strategies
 * Tujuan: Memahami bagaimana compiler TypeScript melacak dan menyelesaikan lokasi path import (Node vs Classic).
 */

console.log("=== Module Resolution di TypeScript ===");

interface InfoResolusiModul {
    strategi: "Node16" | "NodeNext" | "Bundler";
    pencarianRelatif: string;
    pencarianNonRelatif: string;
}

const resolusi: InfoResolusiModul = {
    strategi: "NodeNext",
    pencarianRelatif: "Mencari dari direktori lokal ./ atau ../ dengan ekstensi file",
    pencarianNonRelatif: "Mencari ke dalam folder node_modules/ secara hierarkis ke atas"
};

console.log(`Strategi Resolusi : ${resolusi.strategi}`);
console.log(`Import Relatif    : ${resolusi.pencarianRelatif}`);
console.log(`Import Non-relatif: ${resolusi.pencarianNonRelatif}`);
