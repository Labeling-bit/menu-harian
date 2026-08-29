# Website Menu Harian — GitHub Pages

Website ini dibuat untuk menampilkan menu berdasarkan tanggal. Satu QR Code dapat dipakai terus-menerus.

## Cara kerja
QR Code → alamat GitHub Pages → website membaca tanggal hari ini → data menu tanggal tersebut ditampilkan.

## File
- `index.html` = tampilan website
- `data.js` = data menu harian

## Cara menambah menu
Buka `data.js`, lalu tambahkan data tanggal baru dengan format `YYYY-MM-DD`.

Contoh:
`"2026-08-29": { ... }`

Setelah disimpan dan di-upload ke GitHub, GitHub Pages akan memperbarui website.

## GitHub Pages
1. Buat repository baru, misalnya `menu-harian`.
2. Upload `index.html`, `data.js`, dan file lain jika ada.
3. Buka Settings → Pages.
4. Pilih Deploy from a branch.
5. Pilih branch `main` dan folder `/root`.
6. Save.
7. Tunggu sampai alamat GitHub Pages aktif.

Contoh alamat:
https://USERNAME.github.io/menu-harian/

Alamat inilah yang nanti dibuat menjadi QR Code.
