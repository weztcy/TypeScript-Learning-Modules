/**
 * Submodul: 204_path_aliases.ts
 * Topik: Path Aliases (compilerOptions.paths)
 * Tujuan: Menghindari impor relatif bersarang yang rumit (../../../) dengan menggunakan alias path (seperti @/ atau @components/).
 */

console.log("=== Path Aliases di TypeScript ===");

interface PathAliasMapping {
    alias: string;
    targetDirektori: string[];
}

const pemetaanPath: PathAliasMapping[] = [
    { alias: "@core/*", targetDirektori: ["src/core/*"] },
    { alias: "@utils/*", targetDirektori: ["src/utils/*"] },
    { alias: "@models/*", targetDirektori: ["src/models/*"] }
];

console.log("Daftar Pemetaan Path Alias (tsconfig.json paths):");
for (const m of pemetaanPath) {
    console.log(`  ${m.alias.padEnd(12, " ")} -> ${m.targetDirektori.join(", ")}`);
}
console.log("Contoh Penggunaan: import { User } from '@models/User';");
