# Modul 18: Proyek Praktik TypeScript

## A. Judul Modul
- **Nomor Modul:** 18
- **Nama Modul:** Proyek Praktik TypeScript
- **Ruang Lingkup:** Integrasi komprehensif seluruh materi kurikulum TypeScript (Fundamental, Variabel & Tipe Data, Operator, Perulangan, Fungsi, Koleksi Objek & Tuple, Interfaces & Enums, Narrowing & Type Guards, Generics, Advanced Types, Object-Oriented Programming, Modularitas, Asynchronous Programming, Backend Architecture, hingga Validasi & Keamanan) ke dalam dua studi kasus aplikasi dunia nyata yang fungsional dan lengkap.
- **Tujuan Pembelajaran:** Mampu merancang, mengimplementasikan, menguji, dan menyajikan solusi perangkat lunak berskala penuh dengan standar industri (*production-grade TypeScript*), menerapkan arsitektur bersih (*Clean Architecture*), serta menjamin keandalan sistem tanpa kompromi pada aspek keamanan maupun kebenaran logika.

---

## B. Daftar Materi atau Submodul
299. [`299_student_management_project.ts`](299_student_management_project.ts) : Sistem pengelolaan mahasiswa
300. [`300_fullstack_task_manager_project.ts`](300_fullstack_task_manager_project.ts) : Aplikasi manajemen tugas full-stack

---

## C. Penjelasan Setiap Submodul

### 299. 299_student_management_project.ts
- **Tujuan:** Membangun aplikasi Sistem Pengelolaan Mahasiswa (*Student Management System*) komprehensif berbasis arsitektur OOP, interface kontrak, enum, dan manipulasi data koleksi map.
- **Konsep Utama:** Model entitas mahasiswa, transkrip mata kuliah berbobot SKS, kalkulasi Indeks Prestasi Kumulatif (IPK) otomatis, evaluasi predikat kelulusan (*Cumlaude, Sangat Memuaskan, Memuaskan*), serta pencetakan transkrip akademik formal.
- **Penjelasan Source Code:** Class `SistemAkademikMahasiswa` mengelola pendaftaran mahasiswa baru, menginputkan nilai huruf beserta konversi bobot numeriknya, menghitung rasio total poin SKS terhadap total beban SKS, dan menampilkan kartu transkrip resmi ke terminal.
- **Cara Menjalankan:**
  ```bash
  npx tsx 299_student_management_project.ts
  ```
- **Hasil yang Diharapkan:** Laporan transkrip akademik resmi mahasiswa lengkap dengan rincian mata kuliah, IPK, dan predikat kelulusan ditampilkan rapi.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 299_student_management_project](output/299_student_management_project.png)
- **Lokasi Source Code:** [299_student_management_project.ts](299_student_management_project.ts)

### 300. 300_fullstack_task_manager_project.ts
- **Tujuan:** Merancang dan mengimplementasikan aplikasi Manajemen Tugas Full-Stack (*Task Manager Application*) menggunakan arsitektur berlapis (Controller, Service, Repository, DTO, Result Pattern, dan Analytics Dashboard).
- **Konsep Utama:** Enums status tugas (`TODO`, `SEDANG_DIKERJAKAN`, `DALAM_REVIEW`, `SELESAI`), pemodelan prioritas tugas, penanganan kegagalan dengan pola fungsional `Result<T, E>`, aturan mutasi state bisnis, serta modul analitik performa sprint tim.
- **Penjelasan Source Code:** Program mengimplementasikan alur REST API end-to-end: pembuatan tugas baru dengan validasi panjang judul, mutasi status berjenjang dari TODO hingga SELESAI, pencegahan perubahan status pada tugas yang sudah rampung, serta perhitungan metrik produktivitas tim.
- **Cara Menjalankan:**
  ```bash
  npx tsx 300_fullstack_task_manager_project.ts
  ```
- **Hasil yang Diharapkan:** Riwayat panggilan endpoint REST API simulasi, mutasi status tugas, penolakan masukan tidak sah, dan laporan dashboard analytics tercetak ke terminal.
- **Screenshot Hasil Eksekusi:**
  ![Hasil Eksekusi 300_fullstack_task_manager_project](output/300_fullstack_task_manager_project.png)
- **Lokasi Source Code:** [300_fullstack_task_manager_project.ts](300_fullstack_task_manager_project.ts)

---

## E. Ringkasan Modul
Modul 18 menjadi kulminasi dan mahakarya penutup dari seluruh perjalanan pembelajaran kurikulum TypeScript. Melalui implementasi Sistem Pengelolaan Mahasiswa dan Aplikasi Manajemen Tugas Full-Stack, pembelajar membuktikan penguasaan komprehensif atas logika komputasi, keamanan tipe data statis, penataan arsitektur bersih, hingga ketangguhan perangkat lunak di dunia profesional nyata.
