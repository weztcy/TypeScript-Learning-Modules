# Modul 17: Testing, Tooling, dan Keamanan

## A. Judul Modul
- **Nomor Modul:** 17
- **Nama Modul:** Testing, Tooling, dan Keamanan
- **Ruang Lingkup:** Pengujian unit (*unit testing*), pengenalan runner modern Vitest, pengujian dengan Jest (*matchers*), teknik *mock functions* (spy & stub), pengujian integrasi (*integration testing*), pengujian endpoint API, pengelolaan data uji (*test fixtures & factories*), pengujian tipe statis masa kompilasi (*type testing*), standardisasi kode dengan ESLint, pemformatan otomatis dengan Prettier, manajemen dependensi npm, konfigurasi variabel lingkungan terketik, validasi input aman (pencegahan path traversal), pencegahan serangan XSS (*Cross-Site Scripting*), pemodelan tipe data autentikasi (JWT Claims), serta sistem otorisasi berbasis peran (*Role-Based Access Control / RBAC*).
- **Tujuan Pembelajaran:** Menguasai seluruh aspek penjaminan mutu perangkat lunak (*Quality Assurance*), standarisasi lingkungan perkakas pengembangan (*tooling*), serta penerapan prinsip rekayasa perangkat lunak yang aman (*secure coding practices*) dalam proyek TypeScript.

---

## B. Daftar Materi atau Submodul
283. [`283_typescript_unit_testing.ts`](283_typescript_unit_testing.ts) : Unit testing
284. [`284_vitest_basic.ts`](284_vitest_basic.ts) : Pengujian dengan Vitest
285. [`285_jest_basic.ts`](285_jest_basic.ts) : Pengujian dengan Jest
286. [`286_mock_functions.ts`](286_mock_functions.ts) : Mock functions
287. [`287_integration_testing.ts`](287_integration_testing.ts) : Integration testing
288. [`288_api_testing.ts`](288_api_testing.ts) : Pengujian API
289. [`289_test_fixtures.ts`](289_test_fixtures.ts) : Test fixtures
290. [`290_type_testing.ts`](290_type_testing.ts) : Pengujian tipe secara statis
291. [`291_eslint_typescript.ts`](291_eslint_typescript.ts) : ESLint untuk TypeScript
292. [`292_prettier_typescript.ts`](292_prettier_typescript.ts) : Format kode dengan Prettier
293. [`293_npm_package_management.ts`](293_npm_package_management.ts) : Pengelolaan paket npm
294. [`294_environment_configuration.ts`](294_environment_configuration.ts) : Konfigurasi environment
295. [`295_secure_input_validation.ts`](295_secure_input_validation.ts) : Validasi input yang aman
296. [`296_xss_prevention.ts`](296_xss_prevention.ts) : Pencegahan XSS
297. [`297_authentication_types.ts`](297_authentication_types.ts) : Tipe data autentikasi
298. [`298_authorization_types.ts`](298_authorization_types.ts) : Tipe data otorisasi

---

## C. Penjelasan Setiap Submodul

### 283. 283_typescript_unit_testing.ts
- **Tujuan:** Menguji fungsi logika kalkulasi diskon belanja secara terisolasi menggunakan harness asertasi.
- **Konsep Utama:** Pengecekan kesetaraan nilai aktual vs nilai yang diharapkan.
- **Penjelasan Source Code:** Menguji perhitungan harga tanpa diskon dan harga setelah potongan diskon 10%.
- **Cara Menjalankan:**
  ```bash
  npx tsx 283_typescript_unit_testing.ts
  ```
- **Hasil yang Diharapkan:** Dua laporan uji unit [PASS] tercetak ke terminal.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 283_typescript_unit_testing](output/283_typescript_unit_testing.png)
- **Lokasi Source Code:** [283_typescript_unit_testing.ts](283_typescript_unit_testing.ts)

### 284. 284_vitest_basic.ts
- **Tujuan:** Mengenal blok pengujian modern Vitest menggunakan `describe`, `it`, dan `expect`.
- **Konsep Utama:** Matcher `.toBe()` dan `.toBeTruthy()`.
- **Penjelasan Source Code:** Menguji operasi transformasi kapital dan pengecekan substring teks.
- **Cara Menjalankan:**
  ```bash
  npx tsx 284_vitest_basic.ts
  ```
- **Hasil yang Diharapkan:** Laporan kelulusan kedua kasus uji bertanda centang ditampilkan.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 284_vitest_basic](output/284_vitest_basic.png)
- **Lokasi Source Code:** [284_vitest_basic.ts](284_vitest_basic.ts)

### 285. 285_jest_basic.ts
- **Tujuan:** Memvalidasi mutasi saldo rekening pengirim dan penerima dalam pengujian fungsional.
- **Konsep Utama:** Pengujian operasi transfer dana perbankan dengan Jest.
- **Penjelasan Source Code:** Memastikan saldo rekening A berkurang dan saldo rekening B bertambah tepat nominalnya.
- **Cara Menjalankan:**
  ```bash
  npx tsx 285_jest_basic.ts
  ```
- **Hasil yang Diharapkan:** Status TEST PASSED untuk pengujian transfer dana tercetak.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 285_jest_basic](output/285_jest_basic.png)
- **Lokasi Source Code:** [285_jest_basic.ts](285_jest_basic.ts)

### 286. 286_mock_functions.ts
- **Tujuan:** Merekam histori jumlah pemanggilan dan argumen fungsi dependen menggunakan mock spy.
- **Konsep Utama:** Implementasi mock function pencatat riwayat panggilan fungsi.
- **Penjelasan Source Code:** Menguji logger tiruan dan memverifikasi bahwa ia dipanggil sebanyak dua kali.
- **Cara Menjalankan:**
  ```bash
  npx tsx 286_mock_functions.ts
  ```
- **Hasil yang Diharapkan:** Jumlah pemanggilan dan riwayat argumen mock tercetak jelas.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 286_mock_functions](output/286_mock_functions.png)
- **Lokasi Source Code:** [286_mock_functions.ts](286_mock_functions.ts)

### 287. 287_integration_testing.ts
- **Tujuan:** Memvalidasi integrasi data antara controller kasir dan media penyimpanan database.
- **Konsep Utama:** Pengujian integrasi alur transaksi penambahan barang dan kalkulasi total.
- **Penjelasan Source Code:** Menghitung total belanja dua item dan memverifikasi akumulasi nilainya.
- **Cara Menjalankan:**
  ```bash
  npx tsx 287_integration_testing.ts
  ```
- **Hasil yang Diharapkan:** Konfirmasi integrasi sukses dengan total nilai Rp 150.000 ditampilkan.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 287_integration_testing](output/287_integration_testing.png)
- **Lokasi Source Code:** [287_integration_testing.ts](287_integration_testing.ts)

### 288. 288_api_testing.ts
- **Tujuan:** Menguji respon endpoint API mencakup kode status 200 dan validitas format array payload.
- **Konsep Utama:** Validasi menyeluruh respon HTTP dari perspektif klien.
- **Penjelasan Source Code:** Menjalankan pemanggilan simulasi GET /api/v1/modules dan mengevaluasi hasilnya.
- **Cara Menjalankan:**
  ```bash
  npx tsx 288_api_testing.ts
  ```
- **Hasil yang Diharapkan:** Laporan kelulusan API TEST PASSED tercetak ke terminal.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 288_api_testing](output/288_api_testing.png)
- **Lokasi Source Code:** [288_api_testing.ts](288_api_testing.ts)

### 289. 289_test_fixtures.ts
- **Tujuan:** Menyediakan pabrik pembuatan data dummy pengguna yang konsisten untuk pengujian.
- **Konsep Utama:** Factory pattern fixture `buatPenggunaFixture(overrides)`.
- **Penjelasan Source Code:** Menghasilkan data pengguna reguler dan admin khusus dengan saldo kustom.
- **Cara Menjalankan:**
  ```bash
  npx tsx 289_test_fixtures.ts
  ```
- **Hasil yang Diharapkan:** Objek fixture pengguna standar dan admin khusus ditampilkan.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 289_test_fixtures](output/289_test_fixtures.png)
- **Lokasi Source Code:** [289_test_fixtures.ts](289_test_fixtures.ts)

### 290. 290_type_testing.ts
- **Tujuan:** Menguji kesetaraan tipe data tingkat lanjut pada masa kompilasi tanpa runtime overhead.
- **Konsep Utama:** Utilitas `HarapTipeSama<T, U>` untuk pembuktian keabsahan aljabar tipe.
- **Penjelasan Source Code:** Membuktikan bahwa `string | number` identik dengan `number | string`.
- **Cara Menjalankan:**
  ```bash
  npx tsx 290_type_testing.ts
  ```
- **Hasil yang Diharapkan:** Hasil pengujian kesetaraan tipe (true/false) tercetak ke konsol.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 290_type_testing](output/290_type_testing.png)
- **Lokasi Source Code:** [290_type_testing.ts](290_type_testing.ts)

### 291. 291_eslint_typescript.ts
- **Tujuan:** Mengetahui aturan linter ESLint utama untuk menjaga standar kualitas kode TypeScript.
- **Konsep Utama:** Larangan `any` eksplisit, kewajiban return type, dan deteksi variabel tak terpakai.
- **Penjelasan Source Code:** Menguraikan peran dari masing-masing aturan linting populer.
- **Cara Menjalankan:**
  ```bash
  npx tsx 291_eslint_typescript.ts
  ```
- **Hasil yang Diharapkan:** Rincian aturan linter dan tujuannya ditampilkan rapi.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 291_eslint_typescript](output/291_eslint_typescript.png)
- **Lokasi Source Code:** [291_eslint_typescript.ts](291_eslint_typescript.ts)

### 292. 292_prettier_typescript.ts
- **Tujuan:** Mengonfigurasi parameter pemformat kode otomatis Prettier (.prettierrc).
- **Konsep Utama:** Pengaturan tanda titik koma, spasi indentasi, dan batas lebar karakter.
- **Penjelasan Source Code:** Menampilkan struktur konfigurasi standar pemformat kode Prettier.
- **Cara Menjalankan:**
  ```bash
  npx tsx 292_prettier_typescript.ts
  ```
- **Hasil yang Diharapkan:** Konfigurasi JSON Prettier tercetak ke terminal.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 292_prettier_typescript](output/292_prettier_typescript.png)
- **Lokasi Source Code:** [292_prettier_typescript.ts](292_prettier_typescript.ts)

### 293. 293_npm_package_management.ts
- **Tujuan:** Mengelompokkan paket dependensi runtime vs dependensi kompilasi pada package.json.
- **Konsep Utama:** Pembedaan blok `dependencies` (Express, Zod) dan `devDependencies` (TypeScript, Types).
- **Penjelasan Source Code:** Menjelaskan pembagian paket yang dibutuhkan di produksi dan masa build.
- **Cara Menjalankan:**
  ```bash
  npx tsx 293_npm_package_management.ts
  ```
- **Hasil yang Diharapkan:** Daftar paket runtime dan dev dependencies ditampilkan.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 293_npm_package_management](output/293_npm_package_management.png)
- **Lokasi Source Code:** [293_npm_package_management.ts](293_npm_package_management.ts)

### 294. 294_environment_configuration.ts
- **Tujuan:** Memvalidasi kelengkapan variabel lingkungan sebelum proses bootstrap server dimulai.
- **Konsep Utama:** Parsing nilai `PORT`, `NODE_ENV`, dan validasi skema URL basis data.
- **Penjelasan Source Code:** Menjamin variabel PORT bernilai angka yang valid dan mengembalikan config terketik.
- **Cara Menjalankan:**
  ```bash
  npx tsx 294_environment_configuration.ts
  ```
- **Hasil yang Diharapkan:** Rincian parameter environment yang berhasil diparsing tercetak.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 294_environment_configuration](output/294_environment_configuration.png)
- **Lokasi Source Code:** [294_environment_configuration.ts](294_environment_configuration.ts)

### 295. 295_secure_input_validation.ts
- **Tujuan:** Membersihkan input nama berkas untuk mencegah serangan Directory Traversal (`../`).
- **Konsep Utama:** Sanitasi karakter berbahaya menggunakan ekspresi reguler.
- **Penjelasan Source Code:** Mensterilkan jalur input berbahaya `../../etc/passwd` menjadi nama aman.
- **Cara Menjalankan:**
  ```bash
  npx tsx 295_secure_input_validation.ts
  ```
- **Hasil yang Diharapkan:** Perbandingan input bahaya dan hasil sanitasi aman ditampilkan.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 295_secure_input_validation](output/295_secure_input_validation.png)
- **Lokasi Source Code:** [295_secure_input_validation.ts](295_secure_input_validation.ts)

### 296. 296_xss_prevention.ts
- **Tujuan:** Mencegah serangan injeksi skrip HTML berbahaya (XSS) melalui fungsi escaping karakter khusus.
- **Konsep Utama:** Konversi karakter `<`, `>`, `&`, `"`, `'` menjadi entitas HTML aman.
- **Penjelasan Source Code:** Menetralisir tag `<script>` pada komentar pengguna sebelum dirender.
- **Cara Menjalankan:**
  ```bash
  npx tsx 296_xss_prevention.ts
  ```
- **Hasil yang Diharapkan:** Teks asli dan teks hasil escaping aman ditampilkan ke konsol.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 296_xss_prevention](output/296_xss_prevention.png)
- **Lokasi Source Code:** [296_xss_prevention.ts](296_xss_prevention.ts)

### 297. 297_authentication_types.ts
- **Tujuan:** Merancang antarmuka terketik untuk payload klaim token JWT (*JSON Web Token*).
- **Konsep Utama:** Field standar JWT (`sub`, `nama`, `email`, `peran`, `iat`, `exp`).
- **Penjelasan Source Code:** Menghitung sisa masa berlaku token dan mencetak klaim autentikasi.
- **Cara Menjalankan:**
  ```bash
  npx tsx 297_authentication_types.ts
  ```
- **Hasil yang Diharapkan:** Rincian klaim token sesi dan durasi aktif tercetak rapi.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 297_authentication_types](output/297_authentication_types.png)
- **Lokasi Source Code:** [297_authentication_types.ts](297_authentication_types.ts)

### 298. 298_authorization_types.ts
- **Tujuan:** Mengontrol hak akses tindakan sistem berbasis model Role-Based Access Control (RBAC).
- **Konsep Utama:** Template literal izin `Tindakan:SumberDaya` dan fungsi pemeriksa `punyaIzin`.
- **Penjelasan Source Code:** Mengevaluasi izin admin untuk membaca laporan, menghapus laporan, dan transaksi.
- **Cara Menjalankan:**
  ```bash
  npx tsx 298_authorization_types.ts
  ```
- **Hasil yang Diharapkan:** Status verifikasi hak izin tindakan admin tercetak jelas.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 298_authorization_types](output/298_authorization_types.png)
- **Lokasi Source Code:** [298_authorization_types.ts](298_authorization_types.ts)

---

## E. Ringkasan Modul
Modul 17 memberikan wawasan mendalam mengenai piramida pengujian perangkat lunak, standardisasi perkakas (tooling), serta benteng pertahanan keamanan aplikasi TypeScript. Pembelajar kini mampu menulis unit test, integration test, dan API test secara mandiri, memanfaatkan mock functions & test fixtures, menyetel konfigurasi linter dan formatter, serta mengamankan aplikasi dari kerentanan umum seperti SQLi, XSS, dan kebocoran otorisasi.
