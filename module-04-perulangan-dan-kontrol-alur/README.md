# Modul 4: Perulangan dan Kontrol Alur

## A. Judul Modul
- **Nomor Modul:** 04
- **Nama Modul:** Perulangan dan Kontrol Alur
- **Ruang Lingkup:** Penggunaan perulangan standar `for`, `while`, `do-while`, perulangan koleksi `for...of` dan `for...in`, perulangan bersarang (*nested loop*), penghentian iterasi dengan `break` dan `continue`, akumulator pencacah (*counter*), iterasi array objek terketik, kondisi perulangan majemuk, serta implementasi algoritma dasar (pola angka, faktorial, uji bilangan prima, dan deret Fibonacci).
- **Tujuan Pembelajaran:** Menguasai kontrol iterasi dan alur logika perulangan di TypeScript secara optimal, mampu memanipulasi koleksi data kompleks secara aman, serta menerapkan algoritma komputasi klasik secara iteratif dan efisien.

---

## B. Daftar Materi atau Submodul
43. [`43_for_loop.ts`](43_for_loop.ts) : Perulangan `for`
44. [`44_while_loop.ts`](44_while_loop.ts) : Perulangan `while`
45. [`45_do_while_loop.ts`](45_do_while_loop.ts) : Perulangan `do-while`
46. [`46_for_of_loop.ts`](46_for_of_loop.ts) : Perulangan `for...of`
47. [`47_for_in_loop.ts`](47_for_in_loop.ts) : Perulangan `for...in`
48. [`48_nested_loop.ts`](48_nested_loop.ts) : Nested loop
49. [`49_break_statement.ts`](49_break_statement.ts) : Pernyataan `break`
50. [`50_continue_statement.ts`](50_continue_statement.ts) : Pernyataan `continue`
51. [`51_loop_counter.ts`](51_loop_counter.ts) : Penghitung perulangan
52. [`52_array_iteration.ts`](52_array_iteration.ts) : Iterasi koleksi
53. [`53_loop_with_types.ts`](53_loop_with_types.ts) : Perulangan dengan tipe data
54. [`54_loop_conditions.ts`](54_loop_conditions.ts) : Kondisi perulangan
55. [`55_number_patterns.ts`](55_number_patterns.ts) : Pola angka
56. [`56_factorial_loop.ts`](56_factorial_loop.ts) : Faktorial menggunakan loop
57. [`57_prime_number.ts`](57_prime_number.ts) : Pemeriksaan bilangan prima
58. [`58_fibonacci_loop.ts`](58_fibonacci_loop.ts) : Deret Fibonacci

---

## C. Penjelasan Setiap Submodul

### 43. 43_for_loop.ts
- **Tujuan:** Melakukan pengulangan terhitung dengan struktur `for` standar.
- **Konsep Utama:** Inisialisasi indeks counter, evaluasi batas henti, dan post-expression inkremental.
- **Penjelasan Source Code:** Menghitung nilai dan kuadrat dari angka 1 hingga 5 secara sekuensial.
- **Cara Menjalankan:**
  ```bash
  npx tsx 43_for_loop.ts
  ```
- **Hasil yang Diharapkan:** Tabel iterasi nilai dan hasil kuadrat tercetak rapi.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 43_for_loop](output/43_for_loop.png)
- **Lokasi Source Code:** [43_for_loop.ts](43_for_loop.ts)

### 44. 44_while_loop.ts
- **Tujuan:** Melakukan perulangan berbasis kondisi pra-syarat dinamis.
- **Konsep Utama:** Pengulangan berulang selama kondisi boolean bernilai `true`.
- **Penjelasan Source Code:** Mensimulasikan konsumsi bahan bakar pada setiap putaran lintasan hingga tangki kosong.
- **Cara Menjalankan:**
  ```bash
  npx tsx 44_while_loop.ts
  ```
- **Hasil yang Diharapkan:** Penurunan volume bahan bakar per putaran hingga 0L tercetak runut.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 44_while_loop](output/44_while_loop.png)
- **Lokasi Source Code:** [44_while_loop.ts](44_while_loop.ts)

### 45. 45_do_while_loop.ts
- **Tujuan:** Menjamin minimal satu iterasi dijalankan sebelum validasi kondisi dilakukan.
- **Konsep Utama:** Struktur pasca-evaluasi (*post-condition loop*).
- **Penjelasan Source Code:** Mensimulasikan percobaan ping server minimal sekali hingga kuota batas coba terpenuhi.
- **Cara Menjalankan:**
  ```bash
  npx tsx 45_do_while_loop.ts
  ```
- **Hasil yang Diharapkan:** Catatan percobaan ping 1 sampai 3 tercetak ke terminal.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 45_do_while_loop](output/45_do_while_loop.png)
- **Lokasi Source Code:** [45_do_while_loop.ts](45_do_while_loop.ts)

### 46. 46_for_of_loop.ts
- **Tujuan:** Menjelajahi nilai elemen koleksi iterable (*array*) secara langsung.
- **Konsep Utama:** Iterasi nilai (*value-based loop*) tanpa memerlukan pengelolaan indeks manual.
- **Penjelasan Source Code:** Membaca array daftar nama bahasa pemrograman dan menghitung jumlah karakternya.
- **Cara Menjalankan:**
  ```bash
  npx tsx 46_for_of_loop.ts
  ```
- **Hasil yang Diharapkan:** Setiap bahasa pemrograman tercetak beserta jumlah karakternya.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 46_for_of_loop](output/46_for_of_loop.png)
- **Lokasi Source Code:** [46_for_of_loop.ts](46_for_of_loop.ts)

### 47. 47_for_in_loop.ts
- **Tujuan:** Mengiterasi properti kunci (*keys*) pada sebuah objek JavaScript/TypeScript.
- **Konsep Utama:** Penjelajahan properti objek menggunakan type-safe key indexing `keyof`.
- **Penjelasan Source Code:** Mengambil setiap spesifikasi teknis komputer laptop dari objek `laptopDev`.
- **Cara Menjalankan:**
  ```bash
  npx tsx 47_for_in_loop.ts
  ```
- **Hasil yang Diharapkan:** Pasangan kunci dan nilai spesifikasi laptop tercetak lengkap.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 47_for_in_loop](output/47_for_in_loop.png)
- **Lokasi Source Code:** [47_for_in_loop.ts](47_for_in_loop.ts)

### 48. 48_nested_loop.ts
- **Tujuan:** Membangun perulangan dua dimensi (matriks/baris dan kolom).
- **Konsep Utama:** Perulangan di dalam perulangan untuk menghasilkan data koordinat atau grid.
- **Penjelasan Source Code:** Menyusun tabel perkalian matriks 3x3 menggunakan dua lapis loop `for`.
- **Cara Menjalankan:**
  ```bash
  npx tsx 48_nested_loop.ts
  ```
- **Hasil yang Diharapkan:** Tabel perkalian 3x3 dengan format tabulasi tercetak rapi.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 48_nested_loop](output/48_nested_loop.png)
- **Lokasi Source Code:** [48_nested_loop.ts](48_nested_loop.ts)

### 49. 49_break_statement.ts
- **Tujuan:** Menghentikan perulangan secara dini saat kriteria berhenti terpenuhi.
- **Konsep Utama:** Efisiensi pencarian dengan melompat keluar dari blok iterasi.
- **Penjelasan Source Code:** Mencari nomor antrean target dalam array dan langsung memutus loop saat ditemukan.
- **Cara Menjalankan:**
  ```bash
  npx tsx 49_break_statement.ts
  ```
- **Hasil yang Diharapkan:** Log pencarian berhenti tepat saat nomor antrean target ditemukan.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 49_break_statement](output/49_break_statement.png)
- **Lokasi Source Code:** [49_break_statement.ts](49_break_statement.ts)

### 50. 50_continue_statement.ts
- **Tujuan:** Mengabaikan sisa kode pada iterasi berjalan dan langsung berpindah ke siklus berikutnya.
- **Konsep Utama:** Penyaringan elemen dalam perulangan tanpa menghentikan keseluruhan loop.
- **Penjelasan Source Code:** Melewati angka genap untuk hanya menampilkan angka ganjil antara 1 sampai 10.
- **Cara Menjalankan:**
  ```bash
  npx tsx 50_continue_statement.ts
  ```
- **Hasil yang Diharapkan:** Deretan angka ganjil 1, 3, 5, 7, 9 tercetak ke terminal.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 50_continue_statement](output/50_continue_statement.png)
- **Lokasi Source Code:** [50_continue_statement.ts](50_continue_statement.ts)

### 51. 51_loop_counter.ts
- **Tujuan:** Menghitung jumlah frekuensi kemunculan data berdasarkan kondisi tertentu.
- **Konsep Utama:** Pola akumulator pencacah (*counter pattern*).
- **Penjelasan Source Code:** Menghitung rasio jumlah siswa yang lulus dan perlu remedial berdasarkan batas KKM.
- **Cara Menjalankan:**
  ```bash
  npx tsx 51_loop_counter.ts
  ```
- **Hasil yang Diharapkan:** Rekapitulasi total siswa lulus dan remedial ditampilkan.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 51_loop_counter](output/51_loop_counter.png)
- **Lokasi Source Code:** [51_loop_counter.ts](51_loop_counter.ts)

### 52. 52_array_iteration.ts
- **Tujuan:** Membandingkan tiga gaya utama penelusuran elemen array di lingkungan TypeScript.
- **Konsep Utama:** For-loop tradisional, for...of, dan metode fungsional `Array.prototype.forEach()`.
- **Penjelasan Source Code:** Menampilkan nama-nama kota menggunakan tiga pendekatan yang berbeda.
- **Cara Menjalankan:**
  ```bash
  npx tsx 52_array_iteration.ts
  ```
- **Hasil yang Diharapkan:** Daftar kota ditampilkan melalui ketiga metode iterasi.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 52_array_iteration](output/52_array_iteration.png)
- **Lokasi Source Code:** [52_array_iteration.ts](52_array_iteration.ts)

### 53. 53_loop_with_types.ts
- **Tujuan:** Memproses kumpulan data terstruktur (*array of objects*) dengan validasi interface.
- **Konsep Utama:** Agregasi nilai properti objek terketik `ProdukToko`.
- **Penjelasan Source Code:** Mengakumulasi total valuasi moneter seluruh inventaris barang di gudang.
- **Cara Menjalankan:**
  ```bash
  npx tsx 53_loop_with_types.ts
  ```
- **Hasil yang Diharapkan:** Rincian subtotal per produk dan total valuasi gudang terformat Rupiah.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 53_loop_with_types](output/53_loop_with_types.png)
- **Lokasi Source Code:** [53_loop_with_types.ts](53_loop_with_types.ts)

### 54. 54_loop_conditions.ts
- **Tujuan:** Mengendalikan siklus hidup perulangan menggunakan beberapa kondisi logika majemuk (`&&`).
- **Konsep Utama:** Multi-variabel guard condition dalam perulangan while.
- **Penjelasan Source Code:** Mensimulasikan pertumbuhan modal usaha harian hingga batas hari atau target tercapai.
- **Cara Menjalankan:**
  ```bash
  npx tsx 54_loop_conditions.ts
  ```
- **Hasil yang Diharapkan:** Riwayat laba harian dan saldo modal hingga kondisi berhenti terpenuhi.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 54_loop_conditions](output/54_loop_conditions.png)
- **Lokasi Source Code:** [54_loop_conditions.ts](54_loop_conditions.ts)

### 55. 55_number_patterns.ts
- **Tujuan:** Membentuk pola visual piramida segitiga berbasis deret angka menggunakan nested loop.
- **Konsep Utama:** Hubungan koordinat baris dan jumlah kolom dalam pembentukan pola geometris.
- **Penjelasan Source Code:** Menghasilkan 5 baris segitiga angka dari baris 1 sampai 5.
- **Cara Menjalankan:**
  ```bash
  npx tsx 55_number_patterns.ts
  ```
- **Hasil yang Diharapkan:** Pola visual segitiga angka tercetak rapi pada konsol.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 55_number_patterns](output/55_number_patterns.png)
- **Lokasi Source Code:** [55_number_patterns.ts](55_number_patterns.ts)

### 56. 56_factorial_loop.ts
- **Tujuan:** Menghitung operasi matematika faktorial $n!$ secara iteratif tanpa rekursi.
- **Konsep Utama:** Perkalian akumulatif iteratif dan penanganan edge case untuk $0!$ dan $1!$.
- **Penjelasan Source Code:** Fungsi `hitungFaktorial` mengembalikan hasil perkalian dari 1 hingga $n$.
- **Cara Menjalankan:**
  ```bash
  npx tsx 56_factorial_loop.ts
  ```
- **Hasil yang Diharapkan:** Hasil hitung faktorial untuk beberapa angka uji tercetak tepat.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 56_factorial_loop](output/56_factorial_loop.png)
- **Lokasi Source Code:** [56_factorial_loop.ts](56_factorial_loop.ts)

### 57_prime_number.ts
- **Tujuan:** Menguji sifat keprimaan bilangan bulat menggunakan teknik loop teroptimasi.
- **Konsep Utama:** Algoritma eliminasi faktor dengan batas $\sqrt{n}$ dan pola $6k \pm 1$.
- **Penjelasan Source Code:** Fungsi `adalahPrima` memeriksa sepuluh angka sampel untuk menentukan status primanya.
- **Cara Menjalankan:**
  ```bash
  npx tsx 57_prime_number.ts
  ```
- **Hasil yang Diharapkan:** Status prima atau bukan prima dari seluruh sampel tercetak teratur.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 57_prime_number](output/57_prime_number.png)
- **Lokasi Source Code:** [57_prime_number.ts](57_prime_number.ts)

### 58. 58_fibonacci_loop.ts
- **Tujuan:** Membentuk barisan bilangan Fibonacci secara berurutan dan cepat.
- **Konsep Utama:** Rekurensi iteratif di mana suku ke-$i$ diperoleh dari penjumlahan dua suku terdahulu.
- **Penjelasan Source Code:** Fungsi `buatDeretFibonacci` mengembalikan 10 suku pertama barisan angka Fibonacci.
- **Cara Menjalankan:**
  ```bash
  npx tsx 58_fibonacci_loop.ts
  ```
- **Hasil yang Diharapkan:** Deret Fibonacci 10 suku pertama tercetak lengkap dipisahkan tanda panah.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 58_fibonacci_loop](output/58_fibonacci_loop.png)
- **Lokasi Source Code:** [58_fibonacci_loop.ts](58_fibonacci_loop.ts)

---

## E. Ringkasan Modul
Modul 4 memberikan penguasaan penuh atas berbagai teknik perulangan dan kontrol alur di TypeScript. Pembelajar tidak hanya memahami perbedaan teknis perulangan `for`, `while`, `do-while`, `for...of`, dan `for...in`, tetapi juga mampu mengombinasikannya dengan fitur TypeScript untuk memproses array objek terstruktur secara aman, menerapkan pola pencacah, serta memecahkan problem komputasi klasik seperti faktorial, bilangan prima, dan deret Fibonacci.
