# Frontend PT. Atlantis

Ini merupakan proyek **frontend** dari PT. Atlantis. Proyek ini berupa **website company profile** yang dapat diakses melalui browser. Website ini dikembangkan menggunakan **JavaScript** dengan framework **Next.js** dan beberapa library pendukung seperti React.js dan Tailwind CSS.

---

## 📁 Struktur Folder / Proyek

Berikut adalah struktur folder utama beserta penjelasannya:

- **`app/`**  
  Folder ini adalah fitur dari **Next.js App Router**. Di dalamnya berisi struktur halaman, layout, dan route aplikasi.

- **`components/`**  
  Tempat menyimpan komponen UI terpisah yang bisa digunakan ulang, seperti tombol (`Button.jsx`), navbar, card, dan komponen visual lainnya.

- **`node_modules/`**  
  Folder ini berisi semua **dependency dan library** yang di-install melalui **npm**. Folder ini otomatis dibuat saat menjalankan `npm install`.

- **`public/`**  
  Folder untuk menyimpan file statis seperti **gambar, ikon, CSS, atau font**. File di dalam folder ini dapat diakses langsung dari URL.

- **File konfigurasi utama:**
  - `.gitignore` – Menentukan file/folder yang tidak diikutkan ke dalam Git.
  - `eslint.config.mjs` – Konfigurasi ESLint untuk pengecekan kualitas kode.
  - `jsconfig.json` – Konfigurasi path dan alias module JavaScript.
  - `next.config.mjs` – Konfigurasi utama untuk Next.js.
  - `postcss.config.mjs` – Konfigurasi PostCSS (biasanya untuk Tailwind CSS).
  - `package.json` – Daftar dependensi dan skrip proyek.
  - `README.md` – Dokumentasi proyek ini.

---

## 🧰 Tools & Teknologi yang Digunakan

- **Next.js** – Framework React untuk membangun aplikasi web modern dan server-side rendering.
- **React.js** – Library JavaScript untuk membangun UI.
- **Tailwind CSS** – Utility-first CSS framework untuk styling yang cepat dan efisien.
- **PostCSS** – Digunakan bersama Tailwind untuk memproses CSS.
- **ESLint** – Linter untuk menjaga kualitas dan konsistensi penulisan kode.
- **npm** – Node Package Manager untuk mengelola dependensi.

---

## 🚀 Langkah Instalasi

Berikut cara instalasi dan menjalankan proyek ini secara lokal:

1. **Clone repository ini:**
   ```bash
   git clone https://github.com/username/nama-proyek.git
   cd nama-proyek
