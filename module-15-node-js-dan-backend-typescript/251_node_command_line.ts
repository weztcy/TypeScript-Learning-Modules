/**
 * Submodul: 251_node_command_line.ts
 * Topik: Command-Line Arguments (process.argv)
 * Tujuan: Membaca dan mem-parsing argumen CLI yang diteruskan pengguna ke skrip Node.js.
 */

console.log("=== Command-Line Arguments (process.argv) ===");

// process.argv[0] adalah path node, process.argv[1] adalah path skrip, sisanya adalah argumen kustom
const argumenKustom: string[] = process.argv.slice(2);

console.log(`Total argumen kustom diterima: ${argumenKustom.length}`);

// Menangani simulasi argumen flags (misal: --mode=production --port=8080)
const opsiArgumen: Record<string, string> = {
    mode: "development",
    port: "3000"
};

argumenKustom.forEach((arg) => {
    if (arg.startsWith("--")) {
        const [kunci, nilai] = arg.replace("--", "").split("=");
        if (kunci && nilai) {
            opsiArgumen[kunci] = nilai;
        }
    }
});

console.log("Konfigurasi Argumen Terurai:");
console.log(opsiArgumen);
