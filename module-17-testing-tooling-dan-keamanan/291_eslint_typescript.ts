/**
 * Submodul: 291_eslint_typescript.ts
 * Topik: ESLint untuk TypeScript
 * Tujuan: Menegakkan aturan gaya penulisan kode dan mendeteksi potensi bug secara statis (*linting*).
 */

console.log("=== ESLint untuk TypeScript (@typescript-eslint) ===");

const aturanESLintPenting = [
    { rule: "@typescript-eslint/no-explicit-any", tujuan: "Mencegah penggunaan tipe 'any' yang menghilangkan type safety." },
    { rule: "@typescript-eslint/explicit-function-return-type", tujuan: "Mewajibkan fungsi memiliki return type eksplisit." },
    { rule: "@typescript-eslint/no-unused-vars", tujuan: "Mendeteksi variabel atau parameter yang tidak terpakai." },
    { rule: "@typescript-eslint/strict-boolean-expressions", tujuan: "Mencegah kesalahan evaluasi truthiness terselubung." }
];

console.log("Aturan Linter Populer untuk Proyek TypeScript:");
for (const a of aturanESLintPenting) {
    console.log(`- ${a.rule.padEnd(45, " ")}: ${a.tujuan}`);
}
