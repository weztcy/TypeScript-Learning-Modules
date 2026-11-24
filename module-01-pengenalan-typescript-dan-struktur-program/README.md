# Modul 1: Pengenalan TypeScript dan Struktur Program

## A. Judul Modul
- **Nomor Modul:** 01
- **Nama Modul:** Pengenalan TypeScript dan Struktur Program
- **Ruang Lingkup:** Pengenalan dasar bahasa TypeScript, struktur file dan program, tata cara komentar, output konsol, deklarasi variabel dasar, alur kerja compiler `tsc`, konfigurasi `tsconfig.json`, penegakan *strict mode*, dan pembuatan eksperimen interaktif.
- **Tujuan Pembelajaran:** Memahami filosofi TypeScript sebagai *superset* terketik dari JavaScript, mengonfigurasi lingkungan kerja pengembangan, serta mampu menulis, mengompilasi, dan mengeksekusi program TypeScript dengan benar.

---

## B. Daftar Materi atau Submodul
1. [`01_hello_world.ts`](01_hello_world.ts) : Program pertama TypeScript
2. [`02_typescript_structure.ts`](02_typescript_structure.ts) : Struktur program TypeScript
3. [`03_comments.ts`](03_comments.ts) : Komentar program
4. [`04_console_output.ts`](04_console_output.ts) : Output menggunakan console
5. [`05_variable_declaration.ts`](05_variable_declaration.ts) : Deklarasi variabel
6. [`06_typescript_compiler.ts`](06_typescript_compiler.ts) : Penggunaan compiler TypeScript
7. [`07_compile_and_run.ts`](07_compile_and_run.ts) : Kompilasi dan eksekusi program
8. [`08_typescript_configuration.ts`](08_typescript_configuration.ts) : Konfigurasi TypeScript
9. [`09_strict_mode.ts`](09_strict_mode.ts) : Strict mode
10. [`10_typescript_playground.ts`](10_typescript_playground.ts) : Eksperimen kode TypeScript

---

## C. Penjelasan Setiap Submodul

### 1. 01_hello_world.ts
- **Tujuan:** Menulis dan menjalankan program pengantar TypeScript pertama dengan tipe data string eksplisit.
- **Konsep Utama:** Static typing dasar, variabel `const`, dan pemanggilan `console.log`.
- **Penjelasan Source Code:** Program menginisialisasi variabel `pesanSalam` bertipe `string` dan mencetaknya ke konsol terminal.
- **Cara Menjalankan:**
  ```bash
  npx tsx 01_hello_world.ts
  ```
- **Hasil yang Diharapkan:** Teks salam pembuka muncul di terminal.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 01_hello_world](output/01_hello_world.png)
- **Lokasi Source Code:** [01_hello_world.ts](01_hello_world.ts)

### 2. 02_typescript_structure.ts
- **Tujuan:** Mengenal elemen arsitektur dasar program TypeScript (tipe data kustom, fungsi, parameter terketik).
- **Konsep Utama:** Pembuatan Type Alias `Pelajar`, fungsi `void`, serta pemanggilan fungsi dengan argumen objek.
- **Penjelasan Source Code:** Program mendefinisikan bentuk data profil pelajar, membuat fungsi pencetak profil, dan menguji eksekusinya dengan objek konkret.
- **Cara Menjalankan:**
  ```bash
  npx tsx 02_typescript_structure.ts
  ```
- **Hasil yang Diharapkan:** Tampilan data profil terstruktur tercetak pada terminal.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 02_typescript_structure](output/02_typescript_structure.png)
- **Lokasi Source Code:** [02_typescript_structure.ts](02_typescript_structure.ts)

### 3. 03_comments.ts
- **Tujuan:** Menggunakan berbagai sintaks komentar edukatif dan dokumentasi JSDoc/TSDoc di TypeScript.
- **Konsep Utama:** Komentar single-line (`//`), multi-line (`/* */`), dan format dokumentasi fungsi (`/** */`).
- **Penjelasan Source Code:** Mendemonstrasikan anotasi fungsi `hitungTotal` dengan tag `@param` dan `@returns` untuk dokumentasi kode yang bersih.
- **Cara Menjalankan:**
  ```bash
  npx tsx 03_comments.ts
  ```
- **Hasil yang Diharapkan:** Menampilkan informasi variabel dan hasil kalkulasi dari fungsi terdokumentasi.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 03_comments](output/03_comments.png)
- **Lokasi Source Code:** [03_comments.ts](03_comments.ts)

### 4. 04_console_output.ts
- **Tujuan:** Menggunakan berbagai metode output konsol untuk keperluan logging dan debugging.
- **Konsep Utama:** Metode `console.log`, `console.info`, `console.warn`, `console.error`, dan `console.table`.
- **Penjelasan Source Code:** Menampilkan berbagai tingkatan log informasi dan menampilkan array data dalam bentuk tabel terformat.
- **Cara Menjalankan:**
  ```bash
  npx tsx 04_console_output.ts
  ```
- **Hasil yang Diharapkan:** Menampilkan aneka format pesan konsol dan tabel daftar nilai.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 04_console_output](output/04_console_output.png)
- **Lokasi Source Code:** [04_console_output.ts](04_console_output.ts)

### 5. 05_variable_declaration.ts
- **Tujuan:** Menguasai deklarasi variabel dengan `let`, `const`, dan inferensi tipe otomatis.
- **Konsep Utama:** Mutabilitas variabel, immutabilitas konstanta, dan *type inference*.
- **Penjelasan Source Code:** Mendeklarasikan variabel ID, nama pengguna, dan saldo rekening dengan tipe eksplisit maupun implisit, lalu melakukan mutasi saldo.
- **Cara Menjalankan:**
  ```bash
  npx tsx 05_variable_declaration.ts
  ```
- **Hasil yang Diharapkan:** Menampilkan identitas pengguna dan perubahan saldo rekening.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 05_variable_declaration](output/05_variable_declaration.png)
- **Lokasi Source Code:** [05_variable_declaration.ts](05_variable_declaration.ts)

### 6. 06_typescript_compiler.ts
- **Tujuan:** Memahami cara kerja kompilasi dari kode TypeScript menjadi kode JavaScript standar.
- **Konsep Utama:** Peran kompilasi `tsc`, transformasi tipe, dan eksekusi fungsi kalkulasi geometris.
- **Penjelasan Source Code:** Menghitung keliling lingkaran menggunakan rumus matematika berbasis parameter terketik `number`.
- **Cara Menjalankan:**
  ```bash
  npx tsx 06_typescript_compiler.ts
  ```
- **Hasil yang Diharapkan:** Menampilkan penjelasan peran compiler dan hasil hitung keliling lingkaran.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 06_typescript_compiler](output/06_typescript_compiler.png)
- **Lokasi Source Code:** [06_typescript_compiler.ts](06_typescript_compiler.ts)

### 7. 07_compile_and_run.ts
- **Tujuan:** Menguasai tahapan siklus hidup eksekusi kode TypeScript (Type Checking -> Transpilasi -> Runtime).
- **Konsep Utama:** Objek interface `ServerConfig` dan simulasi inisialisasi server.
- **Penjelasan Source Code:** Mengonstruksi konfigurasi jaringan lokal dan memformat URL endpoint server.
- **Cara Menjalankan:**
  ```bash
  npx tsx 07_compile_and_run.ts
  ```
- **Hasil yang Diharapkan:** Menampilkan tahapan alur kompilasi dan endpoint simulasi server.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 07_compile_and_run](output/07_compile_and_run.png)
- **Lokasi Source Code:** [07_compile_and_run.ts](07_compile_and_run.ts)

### 8. 08_typescript_configuration.ts
- **Tujuan:** Mengenal parameter konfigurasi mendasar pada berkas `tsconfig.json`.
- **Konsep Utama:** Opsi target kompilasi ECMAScript, sistem modul, dan opsi kompatibilitas.
- **Penjelasan Source Code:** Membuat model interface `TsConfigSummary` dan mencetak arti dari setiap opsi konfigurasi utama.
- **Cara Menjalankan:**
  ```bash
  npx tsx 08_typescript_configuration.ts
  ```
- **Hasil yang Diharapkan:** Penjelasan masing-masing opsi konfigurasi tercetak rapi.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 08_typescript_configuration](output/08_typescript_configuration.png)
- **Lokasi Source Code:** [08_typescript_configuration.ts](08_typescript_configuration.ts)

### 9. 09_strict_mode.ts
- **Tujuan:** Memahami proteksi bug melalui *strict mode* (`strict: true`), terutama penanganan *null safety*.
- **Konsep Utama:** Union type nullable (`string | null`) dan teknik *type narrowing* melalui pengecekan kondisi.
- **Penjelasan Source Code:** Fungsi `formatNama` memvalidasi input null secara aman sebelum memanggil metode pemrosesan string `.trim()`.
- **Cara Menjalankan:**
  ```bash
  npx tsx 09_strict_mode.ts
  ```
- **Hasil yang Diharapkan:** Output terformat untuk string valid dan nilai default ramah untuk input null.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 09_strict_mode](output/09_strict_mode.png)
- **Lokasi Source Code:** [09_strict_mode.ts](09_strict_mode.ts)

### 10. 10_typescript_playground.ts
- **Tujuan:** Melakukan uji coba gabungan berbagai sintaks TypeScript modern dalam fungsi utilitas kalkulator sederhana.
- **Konsep Utama:** String literal union type, optional parameters, dan struktur switch-case terarah.
- **Penjelasan Source Code:** Fungsi `kalkulatorMini` menerima operasi tertentu (`tambah`, `kurang`, `kali`) dan label opsional untuk mencetak hasil kalkulasi.
- **Cara Menjalankan:**
  ```bash
  npx tsx 10_typescript_playground.ts
  ```
- **Hasil yang Diharapkan:** Hasil dari berbagai operasi aritmetika mini tercetak ke konsol.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 10_typescript_playground](output/10_typescript_playground.png)
- **Lokasi Source Code:** [10_typescript_playground.ts](10_typescript_playground.ts)

---

## E. Ringkasan Modul
Modul 1 telah meletakkan pondasi krusial bagi pengembangan perangkat lunak menggunakan TypeScript. Pelajar diperkenalkan pada sintaks dasar, cara kerja compiler, pentingnya validasi statis untuk mencegah bug saat runtime, struktur dokumentasi yang baik, serta konfigurasi standar proyek TypeScript.
