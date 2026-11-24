/**
 * Submodul: 248_browser_modules.ts
 * Topik: Modul TypeScript dalam Lingkungan Browser
 * Tujuan: Mengintegrasikan hasil kompilasi modul ES ke dalam tag HTML <script type="module">.
 */

console.log("=== Modul TypeScript dalam Browser ===");

const cuplikanHTML = `
<!-- Memuat berkas JavaScript hasil kompilasi TypeScript sebagai modul ES6 murni -->
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Aplikasi Web Modern</title>
</head>
<body>
    <div id="app"></div>
    <script type="module" src="./dist/main.js"></script>
</body>
</html>
`;

console.log("Integrasi Standar TypeScript dengan Browser Modern:");
console.log(cuplikanHTML.trim());
console.log("Browser modern mendukung eksekusi ES Module secara native tanpa bundling wajib!");
