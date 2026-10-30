# Modul 2: Variabel dan Tipe Data Dasar

## A. Judul Modul
- **Nomor Modul:** 02
- **Nama Modul:** Variabel dan Tipe Data Dasar
- **Ruang Lingkup:** Pendeklarasian variabel modern dan legacy (`let`, `const`, `var`), tipe data primitif (`string`, `number`, `boolean`, `bigint`, `symbol`), tipe data khusus (`null`, `undefined`, `any`, `unknown`, `never`, `void`), inferensi tipe otomatis (*type inference*), serta tipe literal (*literal types*).
- **Tujuan Pembelajaran:** Menguasai seluruh sistem tipe primitif TypeScript, mampu memilih jenis deklarasi yang aman untuk mencegah bug, serta memahami peran pengamanan tipe statis dalam pengembangan aplikasi.

---

## B. Daftar Materi atau Submodul
11. [`11_let_variable.ts`](11_let_variable.ts) : Deklarasi variabel dengan `let`
12. [`12_const_variable.ts`](12_const_variable.ts) : Deklarasi variabel dengan `const`
13. [`13_var_variable.ts`](13_var_variable.ts) : Deklarasi variabel dengan `var`
14. [`14_type_annotations.ts`](14_type_annotations.ts) : Type annotations
15. [`15_string_type.ts`](15_string_type.ts) : Tipe data `string`
16. [`16_number_type.ts`](16_number_type.ts) : Tipe data `number`
17. [`17_boolean_type.ts`](17_boolean_type.ts) : Tipe data `boolean`
18. [`18_bigint_type.ts`](18_bigint_type.ts) : Tipe data `bigint`
19. [`19_symbol_type.ts`](19_symbol_type.ts) : Tipe data `symbol`
20. [`20_null_undefined.ts`](20_null_undefined.ts) : Tipe `null` dan `undefined`
21. [`21_any_type.ts`](21_any_type.ts) : Tipe `any`
22. [`22_unknown_type.ts`](22_unknown_type.ts) : Tipe `unknown`
23. [`23_never_type.ts`](23_never_type.ts) : Tipe `never`
24. [`24_void_type.ts`](24_void_type.ts) : Tipe `void`
25. [`25_type_inference.ts`](25_type_inference.ts) : Type inference
26. [`26_literal_types.ts`](26_literal_types.ts) : Literal types

---

## C. Penjelasan Setiap Submodul

### 11. 11_let_variable.ts
- **Tujuan:** Memahami cakupan blok (*block scope*) dan mutabilitas variabel dengan `let`.
- **Konsep Utama:** Re-assignment variabel dan pembatasan akses variabel di luar blok kurung kurawal.
- **Penjelasan Source Code:** Program memperbarui skor pemain dan mendemonstrasikan bahwa variabel bonus di dalam blok `if` tidak bocor ke luar.
- **Cara Menjalankan:**
  ```bash
  npx tsx 11_let_variable.ts
  ```
- **Hasil yang Diharapkan:** Skor awal dan perubahan skor tercetak dengan benar.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 11_let_variable](output/11_let_variable.png)
- **Lokasi Source Code:** [11_let_variable.ts](11_let_variable.ts)

### 12. 12_const_variable.ts
- **Tujuan:** Menggunakan konstanta untuk nilai tetap dan memahami mutabilitas internal objek.
- **Konsep Utama:** Immutabilitas variabel primitif dan mutabilitas properti objek pada konstanta.
- **Penjelasan Source Code:** Mendefinisikan konstanta gravitasi dan objek profil pengguna yang propertinya diperbarui.
- **Cara Menjalankan:**
  ```bash
  npx tsx 12_const_variable.ts
  ```
- **Hasil yang Diharapkan:** Informasi konstanta dan perubahan gelar pengguna ditampilkan.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 12_const_variable](output/12_const_variable.png)
- **Lokasi Source Code:** [12_const_variable.ts](12_const_variable.ts)

### 13. 13_var_variable.ts
- **Tujuan:** Mengetahui perilaku deklarasi lama `var` terkait *function scope* dan fenomena *hoisting*.
- **Konsep Utama:** Perbedaan mendasar antara *block scope* (`let`) dan *function scope* (`var`).
- **Penjelasan Source Code:** Menunjukkan kebocoran variabel `statusPengiriman` dari blok `if` ke tingkat fungsi.
- **Cara Menjalankan:**
  ```bash
  npx tsx 13_var_variable.ts
  ```
- **Hasil yang Diharapkan:** Bukti variabel bocor keluar blok kurung kurawal tercetak ke konsol.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 13_var_variable](output/13_var_variable.png)
- **Lokasi Source Code:** [13_var_variable.ts](13_var_variable.ts)

### 14. 14_type_annotations.ts
- **Tujuan:** Menuliskan type annotation secara eksplisit pada variabel primitif dan fungsi.
- **Konsep Utama:** Sintaks `: type` pada deklarasi variabel dan parameter/kembalian fungsi.
- **Penjelasan Source Code:** Fungsi `buatLaporanPengguna` menerima parameter beranotasi lengkap dan mengembalikan string terformat.
- **Cara Menjalankan:**
  ```bash
  npx tsx 14_type_annotations.ts
  ```
- **Hasil yang Diharapkan:** Laporan data pengguna tercetak rapi.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 14_type_annotations](output/14_type_annotations.png)
- **Lokasi Source Code:** [14_type_annotations.ts](14_type_annotations.ts)

### 15. 15_string_type.ts
- **Tujuan:** Memanipulasi teks menggunakan string primitif dan template literal multiline.
- **Konsep Utama:** Interpolasi string `${}`, manipulasi huruf besar/kecil, dan pengecekan panjang karakter.
- **Penjelasan Source Code:** Menghitung panjang karakter judul buku dan mengubahnya menjadi huruf kapital.
- **Cara Menjalankan:**
  ```bash
  npx tsx 15_string_type.ts
  ```
- **Hasil yang Diharapkan:** Ringkasan informasi buku tercetak dengan format rapi.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 15_string_type](output/15_string_type.png)
- **Lokasi Source Code:** [15_string_type.ts](15_string_type.ts)

### 16. 16_number_type.ts
- **Tujuan:** Memahami berbagai format bilangan (desimal, heksadesimal, biner, oktal) dan nilai khusus `NaN` & `Infinity`.
- **Konsep Utama:** Representasi numerik IEEE 754 float 64-bit di TypeScript/JavaScript.
- **Penjelasan Source Code:** Mendemonstrasikan deklarasi berbagai basis angka dan menampilkan nilai desimalnya.
- **Cara Menjalankan:**
  ```bash
  npx tsx 16_number_type.ts
  ```
- **Hasil yang Diharapkan:** Konversi dari berbagai basis bilangan ke desimal dan nilai khusus tercetak.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 16_number_type](output/16_number_type.png)
- **Lokasi Source Code:** [16_number_type.ts](16_number_type.ts)

### 17. 17_boolean_type.ts
- **Tujuan:** Menggunakan nilai kebenaran logika (`true` / `false`) dalam operasi logika.
- **Konsep Utama:** Operator perbandingan dan evaluasi logika kondisi (`&&`, `!`).
- **Penjelasan Source Code:** Mengevaluasi ambang batas kapasitas server untuk menentukan kesiapan sistem.
- **Cara Menjalankan:**
  ```bash
  npx tsx 17_boolean_type.ts
  ```
- **Hasil yang Diharapkan:** Status kesiapan server berdasarkan evaluasi kondisi boolean tercetak.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 17_boolean_type](output/17_boolean_type.png)
- **Lokasi Source Code:** [17_boolean_type.ts](17_boolean_type.ts)

### 18. 18_bigint_type.ts
- **Tujuan:** Mengelola bilangan bulat yang melebihi batas aman angka JavaScript (`Number.MAX_SAFE_INTEGER`).
- **Konsep Utama:** Notasi literal `n` pada bigint dan operasi aritmetika antar bilangan besar.
- **Penjelasan Source Code:** Menjumlahkan dua angka integer raksasa tanpa kehilangan presisi angka.
- **Cara Menjalankan:**
  ```bash
  npx tsx 18_bigint_type.ts
  ```
- **Hasil yang Diharapkan:** Angka integer presisi tinggi dan hasil penjumlahannya ditampilkan.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 18_bigint_type](output/18_bigint_type.png)
- **Lokasi Source Code:** [18_bigint_type.ts](18_bigint_type.ts)

### 19. 19_symbol_type.ts
- **Tujuan:** Menciptakan nilai unik dan mempelajari penggunaannya sebagai kunci properti objek.
- **Konsep Utama:** Sifat unik `Symbol()` dan proteksi properti tersembunyi.
- **Penjelasan Source Code:** Menunjukkan bahwa dua Symbol dengan nama serupa tidak identik dan menggunakannya pada objek `AkunInternal`.
- **Cara Menjalankan:**
  ```bash
  npx tsx 19_symbol_type.ts
  ```
- **Hasil yang Diharapkan:** Hasil perbandingan identitas `false` dan akses properti symbol tercetak.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 19_symbol_type](output/19_symbol_type.png)
- **Lokasi Source Code:** [19_symbol_type.ts](19_symbol_type.ts)

### 20. 20_null_undefined.ts
- **Tujuan:** Membedakan kondisi variabel belum diinisialisasi (`undefined`) dan ketiadaan nilai yang disengaja (`null`).
- **Konsep Utama:** Nullable type (`string | null`) dan transisi nilai variabel.
- **Penjelasan Source Code:** Mensimulasikan hasil pencarian berkas dari status awal null hingga dokumen ditemukan.
- **Cara Menjalankan:**
  ```bash
  npx tsx 20_null_undefined.ts
  ```
- **Hasil yang Diharapkan:** Status nilai sebelum dan sesudah pencarian dokumen tercetak.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 20_null_undefined](output/20_null_undefined.png)
- **Lokasi Source Code:** [20_null_undefined.ts](20_null_undefined.ts)

### 21. 21_any_type.ts
- **Tujuan:** Memahami cara kerja tipe *escape hatch* `any` dan risiko kehilangannya pengecekan tipe statis.
- **Konsep Utama:** Fleksibilitas dinamis tipe `any` dan potensi bahaya runtime.
- **Penjelasan Source Code:** Mengubah tipe variabel `dataDinamis` dari string, ke number, hingga objek bebas.
- **Cara Menjalankan:**
  ```bash
  npx tsx 21_any_type.ts
  ```
- **Hasil yang Diharapkan:** Nilai variabel pada setiap perubahan tipe data tercetak ke terminal.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 21_any_type](output/21_any_type.png)
- **Lokasi Source Code:** [21_any_type.ts](21_any_type.ts)

### 22. 22_unknown_type.ts
- **Tujuan:** Menggunakan `unknown` sebagai alternatif aman dari `any` yang mengharuskan pengecekan tipe (*type guard*).
- **Konsep Utama:** Keamanan tipe top-type dan proses narrowing dengan `typeof`.
- **Penjelasan Source Code:** Memeriksa tipe data input sebelum memanggil metode string `.toUpperCase()`.
- **Cara Menjalankan:**
  ```bash
  npx tsx 22_unknown_type.ts
  ```
- **Hasil yang Diharapkan:** Teks terformat berhasil dieksekusi setelah lolos verifikasi tipe.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 22_unknown_type](output/22_unknown_type.png)
- **Lokasi Source Code:** [22_unknown_type.ts](22_unknown_type.ts)

### 23. 23_never_type.ts
- **Tujuan:** Memahami tipe kembalian fungsi yang tidak pernah mengembalikan nilai normal (misal melempar eksepsi).
- **Konsep Utama:** Representasi nilai yang tidak pernah terjadi dan *exhaustive checking*.
- **Penjelasan Source Code:** Fungsi pelempar eksepsi sistem bertipe `never` dan penanganannya dalam blok `try...catch`.
- **Cara Menjalankan:**
  ```bash
  npx tsx 23_never_type.ts
  ```
- **Hasil yang Diharapkan:** Pesan simulasi sistem dan penangkapan eksepsi tercetak ke konsol.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 23_never_type](output/23_never_type.png)
- **Lokasi Source Code:** [23_never_type.ts](23_never_type.ts)

### 24. 24_void_type.ts
- **Tujuan:** Menandai fungsi yang tidak memiliki nilai kembali (*return value*).
- **Konsep Utama:** Perbedaan antara fungsi penghasil nilai dan fungsi *side-effect* (logging/prosedur).
- **Penjelasan Source Code:** Fungsi pencatat log aktivitas dengan stempel waktu dan tipe return `void`.
- **Cara Menjalankan:**
  ```bash
  npx tsx 24_void_type.ts
  ```
- **Hasil yang Diharapkan:** Log stempel waktu aktivitas tercetak rapi di konsol.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 24_void_type](output/24_void_type.png)
- **Lokasi Source Code:** [24_void_type.ts](24_void_type.ts)

### 25. 25_type_inference.ts
- **Tujuan:** Memahami kemampuan compiler dalam menebak tipe data secara otomatis berdasarkan inisialisasi awal.
- **Konsep Utama:** Efisiensi kode dengan membiarkan compiler menyimpulkan tipe primitif dan return type.
- **Penjelasan Source Code:** Deklarasi variabel tanpa type annotation eksplisit namun tetap terikat secara statis.
- **Cara Menjalankan:**
  ```bash
  npx tsx 25_type_inference.ts
  ```
- **Hasil yang Diharapkan:** Data produk, stok, dan hasil kalkulasi tercetak dengan benar.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 25_type_inference](output/25_type_inference.png)
- **Lokasi Source Code:** [25_type_inference.ts](25_type_inference.ts)

### 26. 26_literal_types.ts
- **Tujuan:** Membatasi nilai variabel hanya pada himpunan nilai harfiah tertentu.
- **Konsep Utama:** String literal union type dan number literal type.
- **Penjelasan Source Code:** Memvalidasi input tema aplikasi dan kode status HTTP sukses menggunakan tipe literal.
- **Cara Menjalankan:**
  ```bash
  npx tsx 26_literal_types.ts
  ```
- **Hasil yang Diharapkan:** Konfirmasi perubahan tema dan penerimaan kode status tercetak ke terminal.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 26_literal_types](output/26_literal_types.png)
- **Lokasi Source Code:** [26_literal_types.ts](26_literal_types.ts)

---

## E. Ringkasan Modul
Modul 2 memberikan pemahaman komprehensif mengenai seluruh spektrum sistem tipe dasar dalam TypeScript. Pelajar kini menguasai perbedaan mendasar antara tipe mutabel dan konstan, tipe data angka, string, logika boolean, bigint, serta keistimewaan tipe-tipe khusus seperti `unknown`, `never`, `void`, dan `literal types` untuk membangun kode yang kuat dan bebas dari bug ketidakcocokan tipe data.
