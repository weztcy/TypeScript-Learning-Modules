# Modul 6: Array, Tuple, dan Object

## A. Judul Modul
- **Nomor Modul:** 06
- **Nama Modul:** Array, Tuple, dan Object
- **Ruang Lingkup:** Penggunaan array standar, anotasi tipe array (`T[]` vs `Array<T>`), koleksi kekal (*readonly array*), metode manipulasi array (`push`, `pop`, `shift`, `unshift`, `slice`, `splice`), metode fungsional (`map`, `filter`, `reduce`), algoritma pemilahan data (*sorting*), destrukturisasi array, struktur data tuple berukuran tetap, tuple bernama (*named tuple*), elemen tuple opsional, pemodelan objek dasar, anotasi tipe objek terstruktur, destrukturisasi objek dengan alias & default value, properti terkunci (*readonly properties*), tanda tangan indeks (*index signatures*), serta pemeriksaan properti berlebih (*excess property checks*).
- **Tujuan Pembelajaran:** Menguasai seluruh manipulasi struktur data majemuk di TypeScript, memanfaatkan tuple untuk representasi relasional ringan, serta membangun objek yang memiliki integritas dan keamanan tipe tinggi.

---

## B. Daftar Materi atau Submodul
77. [`77_array_basic.ts`](77_array_basic.ts) : Array dasar
78. [`78_array_type_annotations.ts`](78_array_type_annotations.ts) : Tipe data array
79. [`79_readonly_array.ts`](79_readonly_array.ts) : Readonly array
80. [`80_array_methods.ts`](80_array_methods.ts) : Metode array
81. [`81_array_map.ts`](81_array_map.ts) : Metode `map()`
82. [`82_array_filter.ts`](82_array_filter.ts) : Metode `filter()`
83. [`83_array_reduce.ts`](83_array_reduce.ts) : Metode `reduce()`
84. [`84_array_sorting.ts`](84_array_sorting.ts) : Pengurutan array
85. [`85_array_destructuring.ts`](85_array_destructuring.ts) : Array destructuring
86. [`86_tuple_basic.ts`](86_tuple_basic.ts) : Tuple
87. [`87_named_tuple.ts`](87_named_tuple.ts) : Named tuple
88. [`88_optional_tuple_elements.ts`](88_optional_tuple_elements.ts) : Optional tuple elements
89. [`89_object_basic.ts`](89_object_basic.ts) : Object dasar
90. [`90_object_type_annotations.ts`](90_object_type_annotations.ts) : Object type annotations
91. [`91_object_destructuring.ts`](91_object_destructuring.ts) : Object destructuring
92. [`92_readonly_properties.ts`](92_readonly_properties.ts) : Readonly properties
93. [`93_index_signatures.ts`](93_index_signatures.ts) : Index signatures
94. [`94_excess_property_checks.ts`](94_excess_property_checks.ts) : Excess property checks

---

## C. Penjelasan Setiap Submodul

### 77. 77_array_basic.ts
- **Tujuan:** Membuat array data terketik, mengakses elemen berdasarkan indeks, dan menambahkan data.
- **Konsep Utama:** Array numerik `number[]`, properti `.length`, dan operasi `.push()`.
- **Penjelasan Source Code:** Mengakses nilai pertama dan ketiga serta menambahkan nilai baru ke array nilai siswa.
- **Cara Menjalankan:**
  ```bash
  npx tsx 77_array_basic.ts
  ```
- **Hasil yang Diharapkan:** Jumlah elemen awal dan daftar nilai setelah penambahan tercetak.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 77_array_basic](output/77_array_basic.png)
- **Lokasi Source Code:** [77_array_basic.ts](77_array_basic.ts)

### 78. 78_array_type_annotations.ts
- **Tujuan:** Mengetahui ragam sintaks anotasi tipe array, termasuk array bertipe campuran (*union array*).
- **Konsep Utama:** Sintaks `T[]`, `Array<T>`, dan array union `(string | number)[]`.
- **Penjelasan Source Code:** Mendemonstrasikan tiga gaya deklarasi array data di TypeScript.
- **Cara Menjalankan:**
  ```bash
  npx tsx 78_array_type_annotations.ts
  ```
- **Hasil yang Diharapkan:** Kumpulan daftar nama, gaji, dan data campuran tercetak ke konsol.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 78_array_type_annotations](output/78_array_type_annotations.png)
- **Lokasi Source Code:** [78_array_type_annotations.ts](78_array_type_annotations.ts)

### 79. 79_readonly_array.ts
- **Tujuan:** Mengamankan koleksi array agar tidak dapat dimutasi atau diubah nilainya.
- **Konsep Utama:** Tipe `readonly string[]` dan pencegahan mutasi saat fase kompilasi.
- **Penjelasan Source Code:** Menyimpan kode negara ASEAN dalam format readonly array yang aman.
- **Cara Menjalankan:**
  ```bash
  npx tsx 79_readonly_array.ts
  ```
- **Hasil yang Diharapkan:** Daftar kode negara ASEAN tercetak dan penegasan status immutabilitas.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 79_readonly_array](output/79_readonly_array.png)
- **Lokasi Source Code:** [79_readonly_array.ts](79_readonly_array.ts)

### 80. 80_array_methods.ts
- **Tujuan:** Menggunakan metode manipulasi array bawaan untuk operasi antrean data.
- **Konsep Utama:** Operasi `.unshift()`, `.pop()`, `.shift()`, dan `.slice()`.
- **Penjelasan Source Code:** Mensimulasikan pemrosesan nomor antrean pelanggan secara berurutan.
- **Cara Menjalankan:**
  ```bash
  npx tsx 80_array_methods.ts
  ```
- **Hasil yang Diharapkan:** Log perubahan urutan antrean tercetak runut.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 80_array_methods](output/80_array_methods.png)
- **Lokasi Source Code:** [80_array_methods.ts](80_array_methods.ts)

### 81. 81_array_map.ts
- **Tujuan:** Melakukan transformasi fungsional seluruh elemen array ke format baru.
- **Konsep Utama:** Metode `.map()` dengan fungsi callback terketik.
- **Penjelasan Source Code:** Mengonversi harga produk dari kurs USD ke Rupiah dan membentuk string label.
- **Cara Menjalankan:**
  ```bash
  npx tsx 81_array_map.ts
  ```
- **Hasil yang Diharapkan:** Daftar nama produk beserta konversi harga Rupiah ditampilkan rapi.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 81_array_map](output/81_array_map.png)
- **Lokasi Source Code:** [81_array_map.ts](81_array_map.ts)

### 82. 82_array_filter.ts
- **Tujuan:** Menyaring elemen array yang memenuhi kriteria predikat logika tertentu.
- **Konsep Utama:** Metode `.filter()` dan penyaringan array objek terstruktur.
- **Penjelasan Source Code:** Menyaring staf divisi Engineering dengan skor kinerja di atas 85.
- **Cara Menjalankan:**
  ```bash
  npx tsx 82_array_filter.ts
  ```
- **Hasil yang Diharapkan:** Data karyawan yang lolos kualifikasi filter tercetak.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 82_array_filter](output/82_array_filter.png)
- **Lokasi Source Code:** [82_array_filter.ts](82_array_filter.ts)

### 83. 83_array_reduce.ts
- **Tujuan:** Mengakumulasikan nilai seluruh elemen array menjadi satu output tunggal.
- **Konsep Utama:** Metode `.reduce()` dengan initial value akumulator.
- **Penjelasan Source Code:** Menghitung total omset pendapatan dari riwayat transaksi penjualan.
- **Cara Menjalankan:**
  ```bash
  npx tsx 83_array_reduce.ts
  ```
- **Hasil yang Diharapkan:** Total transaksi dan akumulasi omset Rupiah tercetak jelas.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 83_array_reduce](output/83_array_reduce.png)
- **Lokasi Source Code:** [83_array_reduce.ts](83_array_reduce.ts)

### 84. 84_array_sorting.ts
- **Tujuan:** Mengurutkan array numerik secara benar menggunakan fungsi perbandingan (*comparator*).
- **Konsep Utama:** Pengurutan `(a - b)` untuk ascending dan `(b - a)` untuk descending.
- **Penjelasan Source Code:** Mengurutkan deret angka acak secara menaik dan menurun tanpa merusak data asli.
- **Cara Menjalankan:**
  ```bash
  npx tsx 84_array_sorting.ts
  ```
- **Hasil yang Diharapkan:** Deretan angka asli, hasil sort ascending, dan descending ditampilkan.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 84_array_sorting](output/84_array_sorting.png)
- **Lokasi Source Code:** [84_array_sorting.ts](84_array_sorting.ts)

### 85. 85_array_destructuring.ts
- **Tujuan:** Mengekstrak nilai elemen array ke variabel individual dengan sintaks destrukturisasi.
- **Konsep Utama:** Pemecahan posisi elemen dan pengumpulan sisa elemen dengan rest operator `...`.
- **Penjelasan Source Code:** Mengambil koordinat GPS dan memisahkan juara 1, juara 2, serta finalis lain.
- **Cara Menjalankan:**
  ```bash
  npx tsx 85_array_destructuring.ts
  ```
- **Hasil yang Diharapkan:** Nilai latitude, longitude, elevasi, dan daftar finalis tercetak.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 85_array_destructuring](output/85_array_destructuring.png)
- **Lokasi Source Code:** [85_array_destructuring.ts](85_array_destructuring.ts)

### 86. 86_tuple_basic.ts
- **Tujuan:** Menggunakan struktur data tuple dengan panjang dan tipe posisi elemen yang kaku.
- **Konsep Utama:** Tipe `[string, number, boolean]` dan mutasi indeks sah.
- **Penjelasan Source Code:** Menyimpan profil pengguna dalam tuple dan memperbarui usia saat ulang tahun.
- **Cara Menjalankan:**
  ```bash
  npx tsx 86_tuple_basic.ts
  ```
- **Hasil yang Diharapkan:** Data profil awal dan pembaruan usia tuple tercetak.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 86_tuple_basic](output/86_tuple_basic.png)
- **Lokasi Source Code:** [86_tuple_basic.ts](86_tuple_basic.ts)

### 87. 87_named_tuple.ts
- **Tujuan:** Meningkatkan keterbacaan kode dengan menyematkan label dokumentasi pada tuple.
- **Konsep Utama:** Named tuple `[x: number, y: number]` dan respon status HTTP.
- **Penjelasan Source Code:** Menentukan koordinat 2D dan membaca status API menggunakan named tuple.
- **Cara Menjalankan:**
  ```bash
  npx tsx 87_named_tuple.ts
  ```
- **Hasil yang Diharapkan:** Koordinat posisi dan status respon API ditampilkan.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 87_named_tuple](output/87_named_tuple.png)
- **Lokasi Source Code:** [87_named_tuple.ts](87_named_tuple.ts)

### 88. 88_optional_tuple_elements.ts
- **Tujuan:** Membuat elemen tuple yang dapat diabaikan atau bernilai opsional pada posisi ujung.
- **Konsep Utama:** Elemen opsional `[lebar: number, tinggi: number, format?: string]`.
- **Penjelasan Source Code:** Menangani dimensi gambar dua dimensi dengan atau tanpa penentuan format ekstensi.
- **Cara Menjalankan:**
  ```bash
  npx tsx 88_optional_tuple_elements.ts
  ```
- **Hasil yang Diharapkan:** Format dimensi standar dan lengkap tercetak dengan tepat.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 88_optional_tuple_elements](output/88_optional_tuple_elements.png)
- **Lokasi Source Code:** [88_optional_tuple_elements.ts](88_optional_tuple_elements.ts)

### 89. 89_object_basic.ts
- **Tujuan:** Membuat objek literal dengan kombinasi properti data dan metode fungsi internal.
- **Konsep Utama:** Struktur objek key-value dan pemanggilan metode `this`.
- **Penjelasan Source Code:** Mengelola mobil sedan dan menyalakan mesinnya melalui metode objek.
- **Cara Menjalankan:**
  ```bash
  npx tsx 89_object_basic.ts
  ```
- **Hasil yang Diharapkan:** Spesifikasi mobil dan perubahan status mesin tercetak ke terminal.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 89_object_basic](output/89_object_basic.png)
- **Lokasi Source Code:** [89_object_basic.ts](89_object_basic.ts)

### 90. 90_object_type_annotations.ts
- **Tujuan:** Menetapkan kontrak tipe inline secara ketat pada sebuah objek.
- **Konsep Utama:** Objek beranotasi lengkap untuk manajemen data infrastruktur server.
- **Penjelasan Source Code:** Mengonfigurasi parameter IP, port, lokasi data center, dan status server.
- **Cara Menjalankan:**
  ```bash
  npx tsx 90_object_type_annotations.ts
  ```
- **Hasil yang Diharapkan:** Rincian data server terkelola ditampilkan secara terstruktur.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 90_object_type_annotations](output/90_object_type_annotations.png)
- **Lokasi Source Code:** [90_object_type_annotations.ts](90_object_type_annotations.ts)

### 91. 91_object_destructuring.ts
- **Tujuan:** Mengekstrak properti objek dengan alias variabel kustom dan nilai default.
- **Konsep Utama:** Destrukturisasi `{ properti: alias = default }`.
- **Penjelasan Source Code:** Membaca profil penulis buku dengan alias nama dan fallback nilai kota asal.
- **Cara Menjalankan:**
  ```bash
  npx tsx 91_object_destructuring.ts
  ```
- **Hasil yang Diharapkan:** Nama, email, dan kota asal penulis tercetak ke konsol.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 91_object_destructuring](output/91_object_destructuring.png)
- **Lokasi Source Code:** [91_object_destructuring.ts](91_object_destructuring.ts)

### 92. 92_readonly_properties.ts
- **Tujuan:** Mengunci properti objek agar nilainya tidak dapat di-reassign pasca inisialisasi.
- **Konsep Utama:** Penanda `readonly` pada properti interface objek.
- **Penjelasan Source Code:** Mempertahankan nomor rekening dan nama pemilik bank sementara saldo tetap mutabel.
- **Cara Menjalankan:**
  ```bash
  npx tsx 92_readonly_properties.ts
  ```
- **Hasil yang Diharapkan:** Rekening bank dan saldo baru setelah penambahan tercetak jelas.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 92_readonly_properties](output/92_readonly_properties.png)
- **Lokasi Source Code:** [92_readonly_properties.ts](92_readonly_properties.ts)

### 93. 93_index_signatures.ts
- **Tujuan:** Mengelola objek dengan kunci properti dinamis tanpa batas menggunakan index signatures.
- **Konsep Utama:** Format `[kunci: string]: number` untuk kamus data dinamis.
- **Penjelasan Source Code:** Mengelola daftar harga menu kafe yang dapat ditambahkan item baru kapan saja.
- **Cara Menjalankan:**
  ```bash
  npx tsx 93_index_signatures.ts
  ```
- **Hasil yang Diharapkan:** Seluruh daftar harga menu kafe tercetak dalam format rapi.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 93_index_signatures](output/93_index_signatures.png)
- **Lokasi Source Code:** [93_index_signatures.ts](93_index_signatures.ts)

### 94. 94_excess_property_checks.ts
- **Tujuan:** Memahami pencegahan kesalahan ketik (*typo*) melalui pemeriksaan properti berlebih pada object literal.
- **Konsep Utama:** Perbedaan perlakuan antara literal langsung vs passing via variabel referensi.
- **Penjelasan Source Code:** Memanggil fungsi pencarian dengan opsi literal dan membandingkannya dengan variabel terpisah.
- **Cara Menjalankan:**
  ```bash
  npx tsx 94_excess_property_checks.ts
  ```
- **Hasil yang Diharapkan:** Pesan parameter pencarian dan kesimpulan proteksi typo tercetak.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 94_excess_property_checks](output/94_excess_property_checks.png)
- **Lokasi Source Code:** [94_excess_property_checks.ts](94_excess_property_checks.ts)

---

## E. Ringkasan Modul
Modul 6 telah membahas secara tuntas struktur data majemuk inti dalam ekosistem TypeScript: array, tuple, dan objek. Pembelajar kini menguasai manipulasi fungsional array modern (`map`, `filter`, `reduce`), pemanfaatan tuple berlabel untuk pasangan data ringkas, proteksi immutabilitas melalui *readonly*, hingga perancangan objek dinamis menggunakan *index signatures* serta proteksi *excess property checks*.
