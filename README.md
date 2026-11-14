# Nafis — Portfolio

Website portofolio personal berbasis React + Vite. Dibuat sebagai static site sehingga mudah di-deploy ke Vercel.

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka URL lokal yang ditampilkan Vite.

## Build

```bash
npm run build
npm run preview
```

Hasil build berada di folder `dist/`.

## Deploy ke Vercel

1. Ekstrak folder project ini.
2. Push seluruh isi folder ke repository GitHub.
3. Masuk ke Vercel, pilih **Add New → Project**, lalu import repository.
4. Framework preset: **Vite**.
5. Build command: `npm run build`.
6. Output directory: `dist`.
7. Klik **Deploy**.

Tidak memerlukan environment variables.

## Sebelum dipublikasikan

Edit `src/main.jsx`, khususnya:
- `EMAIL_KAMU@example.com` → email aktif.
- `https://github.com/USERNAME` → URL GitHub.
- `https://www.linkedin.com/in/USERNAME` → URL LinkedIn.
- Periksa kembali deskripsi proyek dan pengalaman agar sesuai dengan kontribusi aktual.
- Tambahkan tautan demo atau repository proyek jika memang tersedia.

## Catatan konten

Deskripsi kemampuan dibuat berdasarkan informasi yang sudah tersedia. Website tidak mencantumkan angka pencapaian, sertifikasi, atau klaim tingkat kemahiran yang belum dikonfirmasi.
