# Modul 3: Operator dan Pengambilan Keputusan

## A. Judul Modul
- **Nomor Modul:** 03
- **Nama Modul:** Operator dan Pengambilan Keputusan
- **Ruang Lingkup:** Penggunaan operator aritmetika, penugasan (*assignment*), perbandingan identik (*strict comparison*), operator logika, manipulasi bitwise, pre/post increment, operator ternary, *nullish coalescing* (`??`), *optional chaining* (`?.`), pemeriksa tipe (`typeof`, `instanceof`, `in`), percabangan `if...else`, struktur `switch...case`, teknik *exhaustive checking* berbasis `never`, serta pemahaman *Control Flow Analysis* (CFA).
- **Tujuan Pembelajaran:** Mampu merancang alur logika program yang bersih dan aman, memanfaatkan fitur modern TypeScript untuk menangani nilai null/undefined secara elegan, dan menjamin penanganan seluruh kondisi data diskret secara lengkap saat masa kompilasi.

---

## B. Daftar Materi atau Submodul
27. [`27_arithmetic_operators.ts`](27_arithmetic_operators.ts) : Operator aritmetika
28. [`28_assignment_operators.ts`](28_assignment_operators.ts) : Operator penugasan
29. [`29_comparison_operators.ts`](29_comparison_operators.ts) : Operator perbandingan
30. [`30_logical_operators.ts`](30_logical_operators.ts) : Operator logika
31. [`31_bitwise_operators.ts`](31_bitwise_operators.ts) : Operator bitwise
32. [`32_increment_decrement.ts`](32_increment_decrement.ts) : Increment dan decrement
33. [`33_ternary_operator.ts`](33_ternary_operator.ts) : Operator ternary
34. [`34_nullish_coalescing.ts`](34_nullish_coalescing.ts) : Nullish coalescing
35. [`35_optional_chaining.ts`](35_optional_chaining.ts) : Optional chaining
36. [`36_typeof_operator.ts`](36_typeof_operator.ts) : Operator `typeof`
37. [`37_instanceof_operator.ts`](37_instanceof_operator.ts) : Operator `instanceof`
38. [`38_in_operator.ts`](38_in_operator.ts) : Operator `in`
39. [`39_if_statement.ts`](39_if_statement.ts) : Percabangan `if`
40. [`40_switch_statement.ts`](40_switch_statement.ts) : Percabangan `switch`
41. [`41_switch_exhaustiveness.ts`](41_switch_exhaustiveness.ts) : Pemeriksaan kelengkapan switch
42. [`42_control_flow_analysis.ts`](42_control_flow_analysis.ts) : Control flow analysis

---

## C. Penjelasan Setiap Submodul

### 27. 27_arithmetic_operators.ts
- **Tujuan:** Melakukan perhitungan matematika dasar menggunakan operator aritmetika standar.
- **Konsep Utama:** Penjumlahan (`+`), pengurangan (`-`), perkalian (`*`), pembagian (`/`), modulo (`%`), dan pemangkatan (`**`).
- **Penjelasan Source Code:** Menghitung operasi aritmetika antara dua bilangan numerik dan memformat desimal hasil bagi.
- **Cara Menjalankan:**
  ```bash
  npx tsx 27_arithmetic_operators.ts
  ```
- **Hasil yang Diharapkan:** Output operasi matematika lengkap ditampilkan di konsol.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 27_arithmetic_operators](output/27_arithmetic_operators.png)
- **Lokasi Source Code:** [27_arithmetic_operators.ts](27_arithmetic_operators.ts)

### 28. 28_assignment_operators.ts
- **Tujuan:** Menggunakan penugasan majemuk untuk memodifikasi nilai variabel secara efisien.
- **Konsep Utama:** Operator penugasan compound (`+=`, `-=`, `*=`, `/=`, `%=`).
- **Penjelasan Source Code:** Memperbarui skor secara bertahap menggunakan serangkaian operasi aritmetika tersingkat.
- **Cara Menjalankan:**
  ```bash
  npx tsx 28_assignment_operators.ts
  ```
- **Hasil yang Diharapkan:** Riwayat perubahan nilai skor tercetak terurut.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 28_assignment_operators](output/28_assignment_operators.png)
- **Lokasi Source Code:** [28_assignment_operators.ts](28_assignment_operators.ts)

### 29. 29_comparison_operators.ts
- **Tujuan:** Membandingkan nilai menggunakan operator perbandingan identik dan relasional.
- **Konsep Utama:** Pembedaan strict comparison (`===`, `!==`) terhadap batas ambang kelayakan.
- **Penjelasan Source Code:** Mengevaluasi kualifikasi usia pelamar terhadap batas minimal kerja.
- **Cara Menjalankan:**
  ```bash
  npx tsx 29_comparison_operators.ts
  ```
- **Hasil yang Diharapkan:** Hasil evaluasi logika perbandingan berupa boolean tercetak.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 29_comparison_operators](output/29_comparison_operators.png)
- **Lokasi Source Code:** [29_comparison_operators.ts](29_comparison_operators.ts)

### 30. 30_logical_operators.ts
- **Tujuan:** Menggabungkan beberapa kondisi boolean dengan operator logika.
- **Konsep Utama:** Logika AND (`&&`), OR (`||`), dan negasi NOT (`!`).
- **Penjelasan Source Code:** Menentukan izin mengemudi dan kepesertaan acara berdasarkan kepemilikan berkas.
- **Cara Menjalankan:**
  ```bash
  npx tsx 30_logical_operators.ts
  ```
- **Hasil yang Diharapkan:** Hasil evaluasi gabungan kondisi logika tercetak jelas.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 30_logical_operators](output/30_logical_operators.png)
- **Lokasi Source Code:** [30_logical_operators.ts](30_logical_operators.ts)

### 31. 31_bitwise_operators.ts
- **Tujuan:** Memahami operasi tingkat bit biner untuk keperluan optimasi sistem rendah.
- **Konsep Utama:** Operasi bitwise AND (`&`), OR (`|`), XOR (`^`), NOT (`~`), dan pergeseran bit (`<<`).
- **Penjelasan Source Code:** Memanipulasi angka 5 dan 3 pada representasi biner dan menampilkan hasil desimalnya.
- **Cara Menjalankan:**
  ```bash
  npx tsx 31_bitwise_operators.ts
  ```
- **Hasil yang Diharapkan:** Nilai perhitungan bitwise tercetak lengkap beserta anotasi biner.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 31_bitwise_operators](output/31_bitwise_operators.png)
- **Lokasi Source Code:** [31_bitwise_operators.ts](31_bitwise_operators.ts)

### 32. 32_increment_decrement.ts
- **Tujuan:** Memahami perbedaan waktu evaluasi pada pre-increment dan post-increment.
- **Konsep Utama:** Siklus evaluasi ekspresi vs mutasi nilai variabel.
- **Penjelasan Source Code:** Memperagakan kenaikan nilai variabel sebelum dan sesudah instruksi dibaca.
- **Cara Menjalankan:**
  ```bash
  npx tsx 32_increment_decrement.ts
  ```
- **Hasil yang Diharapkan:** Perbandingan nilai hasil post-increment dan pre-increment tercetak runut.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 32_increment_decrement](output/32_increment_decrement.png)
- **Lokasi Source Code:** [32_increment_decrement.ts](32_increment_decrement.ts)

### 33. 33_ternary_operator.ts
- **Tujuan:** Menulis percabangan kondisional ekspresi inline secara ringkas.
- **Konsep Utama:** Operator ternary `kondisi ? benar : salah` dan format nested ternary.
- **Penjelasan Source Code:** Menentukan status kelulusan dan pemberian grade nilai siswa.
- **Cara Menjalankan:**
  ```bash
  npx tsx 33_ternary_operator.ts
  ```
- **Hasil yang Diharapkan:** Penilaian kelulusan dan grade tercetak ke terminal.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 33_ternary_operator](output/33_ternary_operator.png)
- **Lokasi Source Code:** [33_ternary_operator.ts](33_ternary_operator.ts)

### 34. 34_nullish_coalescing.ts
- **Tujuan:** Menetapkan nilai default yang aman hanya jika variabel bernilai `null` atau `undefined`.
- **Konsep Utama:** Keunggulan operator `??` dibandingkan `||` saat menangani angka `0` atau string kosong `""`.
- **Penjelasan Source Code:** Membuktikan bahwa nilai 0 dipertahankan saat menggunakan `??`, tidak ditimpa nilai default.
- **Cara Menjalankan:**
  ```bash
  npx tsx 34_nullish_coalescing.ts
  ```
- **Hasil yang Diharapkan:** Perbandingan hasil operator `||` vs `??` ditampilkan secara transparan.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 34_nullish_coalescing](output/34_nullish_coalescing.png)
- **Lokasi Source Code:** [34_nullish_coalescing.ts](34_nullish_coalescing.ts)

### 35. 35_optional_chaining.ts
- **Tujuan:** Mengakses hierarki properti bersarang secara aman tanpa risiko error fatal runtime.
- **Konsep Utama:** Operator `?.` untuk menghentikan evaluasi menjadi `undefined` bila referensi induk bernilai kosong.
- **Penjelasan Source Code:** Mengambil properti alamat karyawan yang mungkin tidak terdefinisi secara aman.
- **Cara Menjalankan:**
  ```bash
  npx tsx 35_optional_chaining.ts
  ```
- **Hasil yang Diharapkan:** Kota karyawan terdata dan fallback "Belum terdata" tercetak tanpa melempar TypeError.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 35_optional_chaining](output/35_optional_chaining.png)
- **Lokasi Source Code:** [35_optional_chaining.ts](35_optional_chaining.ts)

### 36. 36_typeof_operator.ts
- **Tujuan:** Memeriksa tipe data variabel saat runtime dan mempersempit union type (*type guard*).
- **Konsep Utama:** Operator `typeof` pada tipe primitif JavaScript/TypeScript.
- **Penjelasan Source Code:** Fungsi `prosesNilai` membedakan logika penanganan string vs number secara terisolasi.
- **Cara Menjalankan:**
  ```bash
  npx tsx 36_typeof_operator.ts
  ```
- **Hasil yang Diharapkan:** Output string kapital dan kuadrat angka tercetak sesuai tipenya.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 36_typeof_operator](output/36_typeof_operator.png)
- **Lokasi Source Code:** [36_typeof_operator.ts](36_typeof_operator.ts)

### 37. 37_instanceof_operator.ts
- **Tujuan:** Mengetahui konstruktor class pembentuk objek untuk mengamankan pemanggilan method.
- **Konsep Utama:** Operator `instanceof` untuk class narrowing.
- **Penjelasan Source Code:** Fungsi `prosesBerkas` mengarahkan aksi pencetakan PDF atau penghitungan data Excel.
- **Cara Menjalankan:**
  ```bash
  npx tsx 37_instanceof_operator.ts
  ```
- **Hasil yang Diharapkan:** Metode spesifik dari masing-masing instance class terpanggil dengan benar.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 37_instanceof_operator](output/37_instanceof_operator.png)
- **Lokasi Source Code:** [37_instanceof_operator.ts](37_instanceof_operator.ts)

### 38. 38_in_operator.ts
- **Tujuan:** Memeriksa keberadaan nama properti di dalam objek untuk menentukan varian interface.
- **Konsep Utama:** Operator `"properti" in objek` sebagai type narrowing discriminator.
- **Penjelasan Source Code:** Mengidentifikasi apakah kendaraan merupakan mobil atau perahu berdasarkan properti `kemudiStir`.
- **Cara Menjalankan:**
  ```bash
  npx tsx 38_in_operator.ts
  ```
- **Hasil yang Diharapkan:** Metode kemudi mobil dan perahu terpanggil sesuai jenis objek.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 38_in_operator](output/38_in_operator.png)
- **Lokasi Source Code:** [38_in_operator.ts](38_in_operator.ts)

### 39. 39_if_statement.ts
- **Tujuan:** Mengatur alur logika program melalui struktur percabangan bertingkat.
- **Konsep Utama:** Pengambilan keputusan multi-kondisi dengan `if`, `else if`, dan `else`.
- **Penjelasan Source Code:** Menentukan wujud zat air (padat/es, cair, gas/uap) berdasarkan input suhu.
- **Cara Menjalankan:**
  ```bash
  npx tsx 39_if_statement.ts
  ```
- **Hasil yang Diharapkan:** Klasifikasi wujud zat pada tiga suhu uji berbeda tercetak ke terminal.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 39_if_statement](output/39_if_statement.png)
- **Lokasi Source Code:** [39_if_statement.ts](39_if_statement.ts)

### 40. 40_switch_statement.ts
- **Tujuan:** Memetakan nilai diskret banyak kemungkinan ke tindakan yang tepat secara rapi.
- **Konsep Utama:** Pemilihan blok eksekusi dengan `switch`, `case`, `break`, dan `default`.
- **Penjelasan Source Code:** Mengembalikan agenda jadwal kerja mingguan berdasarkan nama hari.
- **Cara Menjalankan:**
  ```bash
  npx tsx 40_switch_statement.ts
  ```
- **Hasil yang Diharapkan:** Jadwal aktivitas untuk beberapa hari terpilih tercetak rapi.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 40_switch_statement](output/40_switch_statement.png)
- **Lokasi Source Code:** [40_switch_statement.ts](40_switch_statement.ts)

### 41. 41_switch_exhaustiveness.ts
- **Tujuan:** Menjamin secara kompilasi bahwa seluruh cabang union type ditangani tuntas (*exhaustive checking*).
- **Konsep Utama:** Pemanfaatan tipe `never` di bagian `default` switch-case.
- **Penjelasan Source Code:** Menangani setiap varian status pesanan dan memblokir peluang status yang tertinggal.
- **Cara Menjalankan:**
  ```bash
  npx tsx 41_switch_exhaustiveness.ts
  ```
- **Hasil yang Diharapkan:** Deskripsi status pesanan tercetak lengkap dan aman dari kemungkinan unhandled case.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 41_switch_exhaustiveness](output/41_switch_exhaustiveness.png)
- **Lokasi Source Code:** [41_switch_exhaustiveness.ts](41_switch_exhaustiveness.ts)

### 42. 42_control_flow_analysis.ts
- **Tujuan:** Memahami bagaimana compiler TypeScript melacak alur eksekusi untuk mempersempit tipe data secara cerdas.
- **Konsep Utama:** Control Flow Analysis (CFA) dan discriminated union otomatis.
- **Penjelasan Source Code:** Menghitung luas bangun datar (persegi vs lingkaran) dengan pembedaan tipe otomatis pada cabang if-else.
- **Cara Menjalankan:**
  ```bash
  npx tsx 42_control_flow_analysis.ts
  ```
- **Hasil yang Diharapkan:** Perhitungan luas persegi dan lingkaran tercetak akurat.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 42_control_flow_analysis](output/42_control_flow_analysis.png)
- **Lokasi Source Code:** [42_control_flow_analysis.ts](42_control_flow_analysis.ts)

---

## E. Ringkasan Modul
Modul 3 membahas seluruh spektrum operator dan mekanisme percabangan modern dalam TypeScript. Pembelajar kini memahami cara kerja operator aritmetika, logika, bitwise, hingga operator canggih seperti `??` dan `?.` untuk kode yang lebih ringkas. Melalui teknik *exhaustive checking* dan *Control Flow Analysis*, aplikasi dapat dibuat jauh lebih aman karena potensi galat logika dapat dicegah sebelum program dijalankan.
