# Modul 8: Union, Intersection, dan Type Narrowing

## A. Judul Modul
- **Nomor Modul:** 08
- **Nama Modul:** Union, Intersection, dan Type Narrowing
- **Ruang Lingkup:** Penggunaan *union types* (`|`), *intersection types* (`&`), *discriminated unions* (tagged unions), teknik dasar *type narrowing*, *type guards* bawaan (`typeof`, `instanceof`), fungsi penjaga tipe kustom (*custom type guards*), predikat tipe (*type predicates*), penyempitan dengan operator `in`, penyempitan kesetaraan (*equality narrowing*), penyempitan nilai kebenaran (*truthiness narrowing*), struktur *discriminated switch*, pemeriksaan kelengkapan (*exhaustive checking* dengan `never`), operator mutakhir `satisfies`, penegasan tipe (*type assertions* `as`), penegasan kekal (*const assertions* `as const`), *non-null assertion* (`!`), serta simulasi nominal typing melalui *branded types*.
- **Tujuan Pembelajaran:** Menguasai seluruh strategi penyempitan tipe di TypeScript, merancang struktur data bervarian banyak yang aman (*tagged union*), serta mencegah galat logika dengan menjamin penanganan seluruh cabang data saat kompilasi.

---

## B. Daftar Materi atau Submodul
111. [`111_union_types.ts`](111_union_types.ts) : Union types
112. [`112_intersection_types.ts`](112_intersection_types.ts) : Intersection types
113. [`113_discriminated_unions.ts`](113_discriminated_unions.ts) : Discriminated unions
114. [`114_type_narrowing.ts`](114_type_narrowing.ts) : Type narrowing
115. [`115_type_guards.ts`](115_type_guards.ts) : Type guards
116. [`116_custom_type_guards.ts`](116_custom_type_guards.ts) : Custom type guards
117. [`117_type_predicates.ts`](117_type_predicates.ts) : Type predicates
118. [`118_in_operator_narrowing.ts`](118_in_operator_narrowing.ts) : Narrowing menggunakan `in`
119. [`119_instanceof_narrowing.ts`](119_instanceof_narrowing.ts) : Narrowing menggunakan `instanceof`
120. [`120_equality_narrowing.ts`](120_equality_narrowing.ts) : Equality narrowing
121. [`121_truthiness_narrowing.ts`](121_truthiness_narrowing.ts) : Truthiness narrowing
122. [`122_discriminated_switch.ts`](122_discriminated_switch.ts) : Discriminated union dengan switch
123. [`123_exhaustive_checks.ts`](123_exhaustive_checks.ts) : Exhaustive checking
124. [`124_satisfies_operator.ts`](124_satisfies_operator.ts) : Operator `satisfies`
125. [`125_type_assertions.ts`](125_type_assertions.ts) : Type assertions
126. [`126_const_assertions.ts`](126_const_assertions.ts) : Const assertions
127. [`127_non_null_assertion.ts`](127_non_null_assertion.ts) : Non-null assertion
128. [`128_branded_types.ts`](128_branded_types.ts) : Branded types

---

## C. Penjelasan Setiap Submodul

### 111. 111_union_types.ts
- **Tujuan:** Menerima variasi alternatif tipe data pada parameter fungsi dan variabel.
- **Konsep Utama:** Operator union `string | number` dan union literal status.
- **Penjelasan Source Code:** Menangani pengenal ID numerik atau string serta memperbarui status koneksi.
- **Cara Menjalankan:**
  ```bash
  npx tsx 111_union_types.ts
  ```
- **Hasil yang Diharapkan:** Pengenal terformat dan transisi status koneksi tercetak ke konsol.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 111_union_types](output/111_union_types.png)
- **Lokasi Source Code:** [111_union_types.ts](111_union_types.ts)

### 112. 112_intersection_types.ts
- **Tujuan:** Menggabungkan beberapa interface objek menjadi satu tipe data komposit.
- **Konsep Utama:** Operator intersection `KontakPribadi & HakAksesAdministrator`.
- **Penjelasan Source Code:** Membuat akun superuser yang menggabungkan identitas kontak dan perizinan akses.
- **Cara Menjalankan:**
  ```bash
  npx tsx 112_intersection_types.ts
  ```
- **Hasil yang Diharapkan:** Profil lengkap superuser dengan seluruh properti gabungan ditampilkan.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 112_intersection_types](output/112_intersection_types.png)
- **Lokasi Source Code:** [112_intersection_types.ts](112_intersection_types.ts)

### 113. 113_discriminated_unions.ts
- **Tujuan:** Membedakan varian respon API menggunakan properti pembeda harfiah (*discriminant*).
- **Konsep Utama:** Properti pembeda literal `status: "SUKSES" | "GAGAL"`.
- **Penjelasan Source Code:** Fungsi `tampilkanHasilAPI` mencetak data jika sukses atau mencetak error jika gagal.
- **Cara Menjalankan:**
  ```bash
  npx tsx 113_discriminated_unions.ts
  ```
- **Hasil yang Diharapkan:** Respon sukses berisi daftar data dan respon gagal berisi pesan kesalahan ditampilkan.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 113_discriminated_unions](output/113_discriminated_unions.png)
- **Lokasi Source Code:** [113_discriminated_unions.ts](113_discriminated_unions.ts)

### 114. 114_type_narrowing.ts
- **Tujuan:** Mempersempit tipe gabungan union ke tipe tunggal menggunakan kondisi `typeof`.
- **Konsep Utama:** Type narrowing percabangan untuk string dan number.
- **Penjelasan Source Code:** Fungsi `gandakanNilai` mengulang teks jika string atau mengalikan dua jika number.
- **Cara Menjalankan:**
  ```bash
  npx tsx 114_type_narrowing.ts
  ```
- **Hasil yang Diharapkan:** Penggandaan string dan perkalian angka tercetak dengan benar.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 114_type_narrowing](output/114_type_narrowing.png)
- **Lokasi Source Code:** [114_type_narrowing.ts](114_type_narrowing.ts)

### 115. 115_type_guards.ts
- **Tujuan:** Memvalidasi tipe objek instance class secara runtime menggunakan `instanceof`.
- **Konsep Utama:** Type guard `hewan instanceof Kucing`.
- **Penjelasan Source Code:** Memanggil metode suara meong atau gukguk sesuai kelas instansinya.
- **Cara Menjalankan:**
  ```bash
  npx tsx 115_type_guards.ts
  ```
- **Hasil yang Diharapkan:** Suara kucing dan anjing tercetak tepat sesuai jenis objeknya.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 115_type_guards](output/115_type_guards.png)
- **Lokasi Source Code:** [115_type_guards.ts](115_type_guards.ts)

### 116. 116_custom_type_guards.ts
- **Tujuan:** Menulis fungsi pengecekan tipe kustom dengan penanda kembalian tipe khusus.
- **Konsep Utama:** Penanda `hewan is Burung` pada fungsi validator kustom.
- **Penjelasan Source Code:** Membedakan antara entitas burung (terbang) dan ikan (berenang) secara presisi.
- **Cara Menjalankan:**
  ```bash
  npx tsx 116_custom_type_guards.ts
  ```
- **Hasil yang Diharapkan:** Aksi terbang elang dan berenang hiu tercetak sesuai predikat tipe.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 116_custom_type_guards](output/116_custom_type_guards.png)
- **Lokasi Source Code:** [116_custom_type_guards.ts](116_custom_type_guards.ts)

### 117. 117_type_predicates.ts
- **Tujuan:** Membersihkan data array dari nilai `null` atau `undefined` secara aman dengan `type predicate`.
- **Konsep Utama:** Fungsi `nilai is T` dalam metode `Array.prototype.filter()`.
- **Penjelasan Source Code:** Memfilter daftar kota sehingga menghasilkan tipe murni `string[]`.
- **Cara Menjalankan:**
  ```bash
  npx tsx 117_type_predicates.ts
  ```
- **Hasil yang Diharapkan:** Array hasil penyaringan bebas null tercetak rapi.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 117_type_predicates](output/117_type_predicates.png)
- **Lokasi Source Code:** [117_type_predicates.ts](117_type_predicates.ts)

### 118. 118_in_operator_narrowing.ts
- **Tujuan:** Menggunakan operator `"properti" in objek` untuk membedakan dua interface yang berbeda.
- **Konsep Utama:** Deteksi fitur `aktifkanNitro` pada mobil balap vs sepeda gunung.
- **Penjelasan Source Code:** Menjalankan nitro mobil atau mencetak gigi gear sepeda gunung.
- **Cara Menjalankan:**
  ```bash
  npx tsx 118_in_operator_narrowing.ts
  ```
- **Hasil yang Diharapkan:** Karakteristik dan aksi spesifik kendaraan tercetak ke terminal.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 118_in_operator_narrowing](output/118_in_operator_narrowing.png)
- **Lokasi Source Code:** [118_in_operator_narrowing.ts](118_in_operator_narrowing.ts)

### 119. 119_instanceof_narrowing.ts
- **Tujuan:** Menangani objek turunan runtime standar JavaScript seperti `Date`.
- **Konsep Utama:** Percabangan `waktu instanceof Date` untuk memformat tanggal secara lokal.
- **Penjelasan Source Code:** Memformat objek Date ke tanggal Indonesia dan menangani string polos.
- **Cara Menjalankan:**
  ```bash
  npx tsx 119_instanceof_narrowing.ts
  ```
- **Hasil yang Diharapkan:** Format tanggal objek lokal dan tanggal teks tercetak.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 119_instanceof_narrowing](output/119_instanceof_narrowing.png)
- **Lokasi Source Code:** [119_instanceof_narrowing.ts](119_instanceof_narrowing.ts)

### 120. 120_equality_narrowing.ts
- **Tujuan:** Mempersempit tipe dua variabel yang beririsan saat keduanya bernilai identik (`===`).
- **Konsep Utama:** Penyempitan irisan tipe string saat nilai sama persis.
- **Penjelasan Source Code:** Mengonversi teks string ke huruf kapital saat kondisi equality terpenuhi.
- **Cara Menjalankan:**
  ```bash
  npx tsx 120_equality_narrowing.ts
  ```
- **Hasil yang Diharapkan:** Pesan kesamaan nilai identik tercetak ke konsol.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 120_equality_narrowing](output/120_equality_narrowing.png)
- **Lokasi Source Code:** [120_equality_narrowing.ts](120_equality_narrowing.ts)

### 121. 121_truthiness_narrowing.ts
- **Tujuan:** Memeriksa keberadaan data array sebelum mengakses properti panjang elemen.
- **Konsep Utama:** Pengecekan kondisi truthiness `if (namaList && namaList.length > 0)`.
- **Penjelasan Source Code:** Menangani array berisi, array kosong, dan input undefined/null.
- **Cara Menjalankan:**
  ```bash
  npx tsx 121_truthiness_narrowing.ts
  ```
- **Hasil yang Diharapkan:** Daftar anggota tercetak jika ada, atau pesan kosong ditampilkan.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 121_truthiness_narrowing](output/121_truthiness_narrowing.png)
- **Lokasi Source Code:** [121_truthiness_narrowing.ts](121_truthiness_narrowing.ts)

### 122. 122_discriminated_switch.ts
- **Tujuan:** Menggunakan struktur `switch` untuk menghitung keliling ragam bangun datar secara rapi.
- **Konsep Utama:** Discriminated union geometri (persegi, persegi panjang, lingkaran).
- **Penjelasan Source Code:** Menghitung keliling dari ketiga varian bentuk bangun datar.
- **Cara Menjalankan:**
  ```bash
  npx tsx 122_discriminated_switch.ts
  ```
- **Hasil yang Diharapkan:** Keliling ketiga bentuk bangun datar ditampilkan akurat.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 122_discriminated_switch](output/122_discriminated_switch.png)
- **Lokasi Source Code:** [122_discriminated_switch.ts](122_discriminated_switch.ts)

### 123. 123_exhaustive_checks.ts
- **Tujuan:** Menjamin keutuhan penanganan seluruh nilai prioritas dengan tipe `never`.
- **Konsep Utama:** Pemanfaatan `const _exhaustiveCheck: never = prioritas`.
- **Penjelasan Source Code:** Mengembalikan durasi SLA tiket perbaikan sesuai tingkat prioritas.
- **Cara Menjalankan:**
  ```bash
  npx tsx 123_exhaustive_checks.ts
  ```
- **Hasil yang Diharapkan:** Durasi SLA untuk seluruh tingkatan prioritas tercetak lengkap.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 123_exhaustive_checks](output/123_exhaustive_checks.png)
- **Lokasi Source Code:** [123_exhaustive_checks.ts](123_exhaustive_checks.ts)

### 124. 124_satisfies_operator.ts
- **Tujuan:** Memvalidasi kecocokan bentuk tipe objek tanpa kehilangan kekhususan tipe propertinya.
- **Konsep Utama:** Operator modern `satisfies` pada tema warna palet.
- **Penjelasan Source Code:** Mengakses metode string `.toLowerCase()` dan indeks tuple tanpa type-assertion.
- **Cara Menjalankan:**
  ```bash
  npx tsx 124_satisfies_operator.ts
  ```
- **Hasil yang Diharapkan:** Warna primer hex dan rincian RGB sekunder tercetak langsung.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 124_satisfies_operator](output/124_satisfies_operator.png)
- **Lokasi Source Code:** [124_satisfies_operator.ts](124_satisfies_operator.ts)

### 125. 125_type_assertions.ts
- **Tujuan:** Mengubah persepsi compiler terhadap tipe data variabel menggunakan kata kunci `as`.
- **Konsep Utama:** Type assertion `dataMentah as string` dari input unknown.
- **Penjelasan Source Code:** Membaca kode laporan dan memanggil fungsi manipulasi substring.
- **Cara Menjalankan:**
  ```bash
  npx tsx 125_type_assertions.ts
  ```
- **Hasil yang Diharapkan:** Informasi kode laporan dan prefix karakter tercetak ke konsol.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 125_type_assertions](output/125_type_assertions.png)
- **Lokasi Source Code:** [125_type_assertions.ts](125_type_assertions.ts)

### 126. 126_const_assertions.ts
- **Tujuan:** Mengunci seluruh atribut objek menjadi konstanta literal mendalam (*deep readonly*).
- **Konsep Utama:** Sintaks `as const` pada objek konfigurasi keamanan aplikasi.
- **Penjelasan Source Code:** Menampilkan konfigurasi login dan daftar peran terotorisasi yang kekal.
- **Cara Menjalankan:**
  ```bash
  npx tsx 126_const_assertions.ts
  ```
- **Hasil yang Diharapkan:** Rincian parameter keamanan aplikasi tercetak rapi.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 126_const_assertions](output/126_const_assertions.png)
- **Lokasi Source Code:** [126_const_assertions.ts](126_const_assertions.ts)

### 127. 127_non_null_assertion.ts
- **Tujuan:** Menjamin secara eksplisit bahwa nilai variabel yang mungkin nullable pasti tidak kosong.
- **Konsep Utama:** Operator tanda seru `!` untuk mengabaikan tipe null/undefined.
- **Penjelasan Source Code:** Mengakses teks judul elemen web dengan jaminan non-null.
- **Cara Menjalankan:**
  ```bash
  npx tsx 127_non_null_assertion.ts
  ```
- **Hasil yang Diharapkan:** Panjang karakter dan isi judul elemen web ditampilkan.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 127_non_null_assertion](output/127_non_null_assertion.png)
- **Lokasi Source Code:** [127_non_null_assertion.ts](127_non_null_assertion.ts)

### 128. 128_branded_types.ts
- **Tujuan:** Mencegah bug pertukaran nilai primitif yang berbeda konteks menggunakan simulasi *nominal typing*.
- **Konsep Utama:** Branded type `string & { readonly __brand: Tag }`.
- **Penjelasan Source Code:** Memvalidasi ID Pengguna dan ID Produk agar tidak dapat saling ditukarkan.
- **Cara Menjalankan:**
  ```bash
  npx tsx 128_branded_types.ts
  ```
- **Hasil yang Diharapkan:** Konfirmasi pemrosesan pesanan berhasil dan penjelasan proteksi branded types tercetak.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 128_branded_types](output/128_branded_types.png)
- **Lokasi Source Code:** [128_branded_types.ts](128_branded_types.ts)

---

## E. Ringkasan Modul
Modul 8 mengupas tuntas teknik penanganan union, intersection, dan type narrowing dalam TypeScript. Dengan menguasai discriminated unions, custom type guards, predikat tipe, exhaustive checking, operator mutakhir `satisfies`, hingga teknik `branded types`, pembelajar kini mampu menulis kode yang tangguh, adaptif, serta bebas dari celah kesalahan tipe saat masa kompilasi.
