# Modul 7: Type Aliases, Interface, dan Enum

## A. Judul Modul
- **Nomor Modul:** 07
- **Nama Modul:** Type Aliases, Interface, dan Enum
- **Ruang Lingkup:** Penggunaan *type aliases*, *interface* dasar, properti opsional (`?`), properti terkunci (*readonly*), interface fungsi (*function types*), tanda tangan indeks (*index signatures*), perluasan interface (*interface extends*), penggabungan deklarasi (*declaration merging*), komparasi mendalam antara type alias dan interface, enumerasi angka (*numeric enum*), enumerasi string (*string enum*), enumerasi konstan (*const enum*), alternatif enum berbasis *union types* dan `as const`, komposisi tipe objek majemuk, serta studi kasus pemodelan data domain nyata.
- **Tujuan Pembelajaran:** Mampu merancang pemodelan tipe data skala enterprise, memilih secara tepat antara type alias dan interface sesuai kebutuhan arsitektur, serta mengelola konstanta diskret secara aman dan efisien.

---

## B. Daftar Materi atau Submodul
95. [`95_type_aliases.ts`](95_type_aliases.ts) : Type aliases
96. [`96_interface_basic.ts`](96_interface_basic.ts) : Interface dasar
97. [`97_interface_optional_properties.ts`](97_interface_optional_properties.ts) : Optional properties
98. [`98_interface_readonly_properties.ts`](98_interface_readonly_properties.ts) : Readonly interface properties
99. [`99_interface_function_types.ts`](99_interface_function_types.ts) : Function types pada interface
100. [`100_interface_index_signatures.ts`](100_interface_index_signatures.ts) : Index signatures pada interface
101. [`101_interface_extends.ts`](101_interface_extends.ts) : Pewarisan interface
102. [`102_interface_declaration_merging.ts`](102_interface_declaration_merging.ts) : Declaration merging
103. [`103_type_alias_vs_interface.ts`](103_type_alias_vs_interface.ts) : Type alias dan interface
104. [`104_enum_basic.ts`](104_enum_basic.ts) : Enum dasar
105. [`105_numeric_enum.ts`](105_numeric_enum.ts) : Numeric enum
106. [`106_string_enum.ts`](106_string_enum.ts) : String enum
107. [`107_const_enum.ts`](107_const_enum.ts) : Const enum
108. [`108_enum_alternatives.ts`](108_enum_alternatives.ts) : Alternatif enum menggunakan union types
109. [`109_object_type_composition.ts`](109_object_type_composition.ts) : Komposisi tipe object
110. [`110_data_modeling.ts`](110_data_modeling.ts) : Pemodelan tipe data

---

## C. Penjelasan Setiap Submodul

### 95. 95_type_aliases.ts
- **Tujuan:** Membuat nama alias yang bermakna bagi tipe primitif, union, dan bentuk objek.
- **Konsep Utama:** Sintaks `type Nama = ...` untuk abstraksi tipe data.
- **Penjelasan Source Code:** Mengonstruksi model pelanggan dengan type alias ID, status, dan data profil.
- **Cara Menjalankan:**
  ```bash
  npx tsx 95_type_aliases.ts
  ```
- **Hasil yang Diharapkan:** Profil pelanggan lengkap tercetak ke terminal.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 95_type_aliases](output/95_type_aliases.png)
- **Lokasi Source Code:** [95_type_aliases.ts](95_type_aliases.ts)

### 96. 96_interface_basic.ts
- **Tujuan:** Merancang kontrak formal bentuk objek yang wajib dipenuhi oleh objek konkret.
- **Konsep Utama:** Sintaks `interface Kendaraan` dengan properti dan method.
- **Penjelasan Source Code:** Objek mobil sedan mematuhi kontrak interface dan mengeksekusi metode menyalakan mesin.
- **Cara Menjalankan:**
  ```bash
  npx tsx 96_interface_basic.ts
  ```
- **Hasil yang Diharapkan:** Spesifikasi mobil dan pesan mesin menyala tercetak.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 96_interface_basic](output/96_interface_basic.png)
- **Lokasi Source Code:** [96_interface_basic.ts](96_interface_basic.ts)

### 97. 97_interface_optional_properties.ts
- **Tujuan:** Mengizinkan beberapa properti interface bersifat opsional menggunakan tanda tanya (`?`).
- **Konsep Utama:** Fleksibilitas pemodelan entitas yang memiliki atribut opsional.
- **Penjelasan Source Code:** Membedakan objek profil siswa dengan atau tanpa nomor telepon dan catatan khusus.
- **Cara Menjalankan:**
  ```bash
  npx tsx 97_interface_optional_properties.ts
  ```
- **Hasil yang Diharapkan:** Data kedua siswa tercetak dengan penanganan atribut kosong yang rapi.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 97_interface_optional_properties](output/97_interface_optional_properties.png)
- **Lokasi Source Code:** [97_interface_optional_properties.ts](97_interface_optional_properties.ts)

### 98. 98_interface_readonly_properties.ts
- **Tujuan:** Menjamin integritas data sertifikat agar identitas dan tanggal tidak dapat dimodifikasi.
- **Konsep Utama:** Properti `readonly` pada interface sertifikat digital.
- **Penjelasan Source Code:** Memperbarui status verifikasi sertifikat sementara id dan penerima terkunci.
- **Cara Menjalankan:**
  ```bash
  npx tsx 98_interface_readonly_properties.ts
  ```
- **Hasil yang Diharapkan:** Informasi sertifikat dan perubahan status verifikasi tercetak.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 98_interface_readonly_properties](output/98_interface_readonly_properties.png)
- **Lokasi Source Code:** [98_interface_readonly_properties.ts](98_interface_readonly_properties.ts)

### 99. 99_interface_function_types.ts
- **Tujuan:** Mendefinisikan interface yang khusus bertindak sebagai kontrak tanda tangan fungsi (*callable*).
- **Konsep Utama:** Callable interface `(angka1: number, angka2: number): number`.
- **Penjelasan Source Code:** Mengikat fungsi penjumlahan dan modulus ke dalam kontrak interface matematika.
- **Cara Menjalankan:**
  ```bash
  npx tsx 99_interface_function_types.ts
  ```
- **Hasil yang Diharapkan:** Hasil eksekusi operasi tambah dan modulus tercetak tepat.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 99_interface_function_types](output/99_interface_function_types.png)
- **Lokasi Source Code:** [99_interface_function_types.ts](99_interface_function_types.ts)

### 100. 100_interface_index_signatures.ts
- **Tujuan:** Mengizinkan penambahan istilah baru pada interface kamus secara dinamis.
- **Konsep Utama:** Index signature `[istilah: string]: string`.
- **Penjelasan Source Code:** Mengelola kamus definisi komputasi dengan kunci fleksibel.
- **Cara Menjalankan:**
  ```bash
  npx tsx 100_interface_index_signatures.ts
  ```
- **Hasil yang Diharapkan:** Definisi istilah compiler dan interface tercetak ke terminal.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 100_interface_index_signatures](output/100_interface_index_signatures.png)
- **Lokasi Source Code:** [100_interface_index_signatures.ts](100_interface_index_signatures.ts)

### 101. 101_interface_extends.ts
- **Tujuan:** Menggunakan pewarisan interface (*extends*) untuk membentuk hirarki model domain bertingkat.
- **Konsep Utama:** Perluasan dari `EntitasDasar` -> `KategoriProduk` -> `ItemKatalog`.
- **Penjelasan Source Code:** Objek barang dagang mewarisi properti id, tanggal, kategori, dan harga secara terintegrasi.
- **Cara Menjalankan:**
  ```bash
  npx tsx 101_interface_extends.ts
  ```
- **Hasil yang Diharapkan:** Rincian barang dagang dari seluruh hirarki pewarisan tercetak.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 101_interface_extends](output/101_interface_extends.png)
- **Lokasi Source Code:** [101_interface_extends.ts](101_interface_extends.ts)

### 102. 102_interface_declaration_merging.ts
- **Tujuan:** Memahami kemampuan penggabungan deklarasi otomatis interface dengan nama yang sama.
- **Konsep Utama:** Declaration merging untuk memperluas definisi konfigurasi aplikasi.
- **Penjelasan Source Code:** Dua deklarasi terpisah dari `KonfigurasiAplikasi` menyatu menjadi satu kontrak utuh.
- **Cara Menjalankan:**
  ```bash
  npx tsx 102_interface_declaration_merging.ts
  ```
- **Hasil yang Diharapkan:** Seluruh properti konfigurasi hasil penggabungan ditampilkan.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 102_interface_declaration_merging](output/102_interface_declaration_merging.png)
- **Lokasi Source Code:** [102_interface_declaration_merging.ts](102_interface_declaration_merging.ts)

### 103. 103_type_alias_vs_interface.ts
- **Tujuan:** Memahami perbedaan fungsional dan panduan praktis memilih antara type alias dan interface.
- **Konsep Utama:** Perbandingan sintaks objek, kapabilitas union types, dan kompatibilitas struktural.
- **Penjelasan Source Code:** Membandingkan titik koordinat berbasis interface dan type alias melalui fungsi komparasi.
- **Cara Menjalankan:**
  ```bash
  npx tsx 103_type_alias_vs_interface.ts
  ```
- **Hasil yang Diharapkan:** Hasil analisis komparasi koordinat tercetak ke konsol.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 103_type_alias_vs_interface](output/103_type_alias_vs_interface.png)
- **Lokasi Source Code:** [103_type_alias_vs_interface.ts](103_type_alias_vs_interface.ts)

### 104. 104_enum_basic.ts
- **Tujuan:** Mengorganisasi konstanta diskret menggunakan enumerasi bawaan TypeScript.
- **Konsep Utama:** Enum arah mata angin dengan inisialisasi angka otomatis mulai dari 0.
- **Penjelasan Source Code:** Mengakses nilai ordinal enum dan nama harfiahnya.
- **Cara Menjalankan:**
  ```bash
  npx tsx 104_enum_basic.ts
  ```
- **Hasil yang Diharapkan:** Nilai numerik dan nama anggota enum tercetak.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 104_enum_basic](output/104_enum_basic.png)
- **Lokasi Source Code:** [104_enum_basic.ts](104_enum_basic.ts)

### 105. 105_numeric_enum.ts
- **Tujuan:** Menetapkan nilai numerik eksplisit pada anggota enum dan menggunakan reverse mapping.
- **Konsep Utama:** Kode status HTTP (200, 201, 400, 404, 500) dan pencarian nama dari angka status.
- **Penjelasan Source Code:** Memvalidasi kode 200 dan mencari nama status dari kode 404.
- **Cara Menjalankan:**
  ```bash
  npx tsx 105_numeric_enum.ts
  ```
- **Hasil yang Diharapkan:** Nilai kode status dan hasil reverse mapping nama status ditampilkan.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 105_numeric_enum](output/105_numeric_enum.png)
- **Lokasi Source Code:** [105_numeric_enum.ts](105_numeric_enum.ts)

### 106. 106_string_enum.ts
- **Tujuan:** Memberikan representasi nilai string yang jelas untuk proses serialisasi dan debugging.
- **Konsep Utama:** String enum peran pengguna (`ADMINISTRATOR`, `PENGAJAR`, `PESERTA`).
- **Penjelasan Source Code:** Menguji hak akses pengguna berdasarkan peran string enum.
- **Cara Menjalankan:**
  ```bash
  npx tsx 106_string_enum.ts
  ```
- **Hasil yang Diharapkan:** Informasi peran dan rincian hak akses tercetak ke terminal.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 106_string_enum](output/106_string_enum.png)
- **Lokasi Source Code:** [106_string_enum.ts](106_string_enum.ts)

### 107. 107_const_enum.ts
- **Tujuan:** Menghilangkan overhead objek JavaScript saat runtime dengan meng-inline nilai konstan.
- **Konsep Utama:** `const enum ModeWarna` untuk optimasi bundle aplikasi tingkat tinggi.
- **Penjelasan Source Code:** Mengakses kode warna heksadesimal langsung tanpa pembuatan objek helper runtime.
- **Cara Menjalankan:**
  ```bash
  npx tsx 107_const_enum.ts
  ```
- **Hasil yang Diharapkan:** Kode warna tombol dan indikator sukses ditampilkan.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 107_const_enum](output/107_const_enum.png)
- **Lokasi Source Code:** [107_const_enum.ts](107_const_enum.ts)

### 108. 108_enum_alternatives.ts
- **Tujuan:** Menggunakan alternatif enum modern berbasis `as const` object dan union types.
- **Konsep Utama:** Idiom modern `typeof OBJ[keyof typeof OBJ]` untuk tipe data yang lebih ramah tooling.
- **Penjelasan Source Code:** Mengelola status transaksi menggunakan objek konstan dan union literal.
- **Cara Menjalankan:**
  ```bash
  npx tsx 108_enum_alternatives.ts
  ```
- **Hasil yang Diharapkan:** Pembaruan status transaksi tercetak sukses.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 108_enum_alternatives](output/108_enum_alternatives.png)
- **Lokasi Source Code:** [108_enum_alternatives.ts](108_enum_alternatives.ts)

### 109. 109_object_type_composition.ts
- **Tujuan:** Mengomposisikan beberapa tipe parsial menjadi satu model data terpadu menggunakan intersection (`&`).
- **Konsep Utama:** Intersection type `Identitas & Kontak & Keamanan`.
- **Penjelasan Source Code:** Menggabungkan profil identitas, kontak, dan hak akses menjadi model staf lengkap.
- **Cara Menjalankan:**
  ```bash
  npx tsx 109_object_type_composition.ts
  ```
- **Hasil yang Diharapkan:** Objek staf lengkap hasil komposisi ditampilkan ke terminal.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 109_object_type_composition](output/109_object_type_composition.png)
- **Lokasi Source Code:** [109_object_type_composition.ts](109_object_type_composition.ts)

### 110. 110_data_modeling.ts
- **Tujuan:** Menerapkan seluruh konsep pemodelan data terpadu pada studi kasus e-commerce nyata.
- **Konsep Utama:** Integrasi interface, enum, array terketik, dan method penghitungan total harga.
- **Penjelasan Source Code:** Mengelola alur pesanan barang pembeli dan mengkalkulasi total tagihan otomatis.
- **Cara Menjalankan:**
  ```bash
  npx tsx 110_data_modeling.ts
  ```
- **Hasil yang Diharapkan:** Detail pesanan e-commerce dan total tagihan Rupiah ditampilkan rapi.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 110_data_modeling](output/110_data_modeling.png)
- **Lokasi Source Code:** [110_data_modeling.ts](110_data_modeling.ts)

---

## E. Ringkasan Modul
Modul 7 memberikan fondasi arsitektur tipe data tingkat lanjut dalam TypeScript. Melalui penguasaan Type Aliases, Interfaces, dan Enums, pembelajar mampu merancang kontrak perangkat lunak yang ekspresif, mudah dirawat, dan kebal dari kesalahan ketik. Fitur deklarasi gabungan, pewarisan interface, serta alternatif enum modern memastikan kode siap untuk proyek berskala enterprise.
