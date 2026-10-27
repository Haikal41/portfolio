# Portfolio Website - Alif Auliya' Haikal
**Backend Developer & SQL / Database Specialist**  
*Lulusan S1 Universitas Darul 'Ulum Jombang (UNDAR)*

Website portofolio modern bertema **Modern Futuristic Dark Theme** yang terinspirasi dari desain viral TikTok DevGreg (@https.gregormondragon), dirancang khusus dengan performa tinggi, animasi responsif, dan struktur bersih.

---

## 🚀 Fitur Utama

* **Floating Pill Navbar**: Menu navigasi elegan dengan indikator aktif dan badge `• Available`.
* **Hero Section**:
  * Efek mesin tik (*Typewriter Effect*) dinamis berganti role.
  * Kartu terminal/code editor mockup bergaya macOS (`database.sql`) dengan sintaks SQL terformat rapi.
  * Tombol CTA *View Projects* & *Let's Talk*, serta deretan media sosial.
* **About Me**:
  * Bio profesional dan latar belakang akademik S1 Universitas Darul 'Ulum Jombang.
  * Kartu avatar dengan *neon aura glow*.
  * 3 Kartu statistik interaktif (*Total Projects*, *Certificates*, *S1 UNDAR Jombang*).
* **Academic Foundation (Interactive Timeline)**:
  * Garis waktu vertikal 4 tahun perjalanan perkuliahan di Universitas Darul 'Ulum Jombang.
  * Dilengkapi mata kuliah utama, tech stack, dan skripsi / tugas akhir.
* **Portfolio Showcase**:
  * Tab Switcher 3-in-1:
    1. **Projects**: Kartu proyek database transaksional, sistem informasi akademik API, query optimization, serta modal detail teknis.
    2. **Certificates**: Kartu sertifikasi bernomor (01–05).
    3. **Tech Stack**: Grid teknologi terbagi atas *Database Layer*, *Backend (Server-side)*, *Tools & DevOps*, dan *Frontend Basics*.
* **Contact Me & Footer**:
  * Informasi email, domisili Jombang, status ketersediaan kerja, dan formulir kirim pesan interaktif.

---

## 🛠️ Cara Menjalankan Proyek di Komputer Anda

Buka terminal (PowerShell atau Command Prompt) di folder `C:\portfolio`:

### 1. Menjalankan Server Pengembangan (Dev Server):
```bash
npm run dev
```
Setelah itu, buka browser di alamat: `http://localhost:5000`

### 2. Membangun untuk Produksi (Build):
```bash
npm run build
```
File siap hosting akan tersimpan di folder `dist/`.

---

## 🎨 Kustomisasi Data Pribadi
Semua data teks, proyek, sertifikat, dan tautan sosial media dapat Anda ubah dengan sangat mudah di file:
`C:\portfolio\src\data\portfolioData.js`

### Mengganti file CV
Letakkan file PDF CV Anda di `public/cv.pdf` (nama file harus sama). Tombol **Download CV** di bagian About akan otomatis mengunduh file tersebut. Kalau ingin nama/URL lain, ubah `cvUrl` di `portfolioData.js`.

---

## 📬 Form Kontak (Web3Forms)

Form kontak mengirim pesan langsung ke email pemilik situs melalui [Web3Forms](https://web3forms.com) — tanpa backend.

1. Daftar di https://web3forms.com menggunakan email tujuan
2. Salin **Access Key** yang dikirim ke email Anda
3. Isi file `.env` di root proyek (contoh tersedia di `.env.example`):

   ```env
   VITE_WEB3FORMS_ACCESS_KEY=access-key-anda
   ```

4. Restart dev server (`npm run dev`)

> Access key ini memang tampil di browser karena pengiriman dilakukan dari sisi client. Amankan dengan mengaktifkan **Domain Restriction** di dashboard Web3Forms agar hanya domain portofolio Anda yang bisa mengirim pesan.

