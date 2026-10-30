/**
 * Submodul: 199_ambient_modules.ts
 * Topik: Ambient Modules (declare module ...)
 * Tujuan: Memberikan definisi tipe untuk modul pihak ketiga atau aset non-kode (seperti file .css atau .png).
 */

console.log("=== Ambient Modules di TypeScript ===");

// Simulasi sintaks ambient module deklarasi tipe
const deskripsiAmbient = `
declare module "*.png" {
    const src: string;
    export default src;
}
declare module "library-lama-js" {
    export function prosesData(input: string): boolean;
}
`;

console.log("Ambient module digunakan untuk mendeklarasikan tipe bagi modul eksternal tanpa type definitions resmi:");
console.log(deskripsiAmbient.trim());
