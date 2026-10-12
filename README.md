# YT Shorts Custom PiP 📺

Ekstensi Google Chrome untuk menonton **YouTube Shorts** dalam mode **Picture-in-Picture (PiP) interaktif** dengan kontrol video lengkap (Play/Pause, navigasi Next/Prev, dan fitur Auto-Next).

Dibuat menggunakan Chrome **Document Picture-in-Picture API**.

---

## ✨ Fitur Utama

- 🪟 **Jendela PiP Interaktif:** Jendela melayang (floating window) yang tetap berada di atas aplikasi lain.
- ⏱️ **Timeline & Progress Bar (Scrubber):** Arahkan kursor (_hover_) ke video untuk melihat durasi dan klik progress bar untuk langsung lompat (_seek_) ke detik tertentu.
- ⏯️ **Kontrol Playback:** Klik langsung pada video atau gunakan tombol navigasi untuk Play/Pause.
- ⏩ **Fast Forward & Rewind:** Tombol cepat untuk maju (+10s) atau mundur (-10s).
- ↕️ **Navigasi Shorts:** Tombol `Next` dan `Prev` langsung berpindah ke video Shorts berikutnya/sebelumnya tanpa perlu kembali ke tab YouTube.
- 🔁 **Auto-Next Mode:** Menonton Shorts secara hands-free! Video akan otomatis bergulir ke video berikutnya ketika video yang sedang berjalan selesai.

---

## 📋 Persyaratan

- **Google Chrome** versi 116 ke atas (atau browser berbasis Chromium terbaru yang mendukung _Document Picture-in-Picture API_).

---

## 🚀 Panduan Instalasi di Google Chrome

Ikuti langkah-langkah berikut untuk memasang ekstensi ini secara manual (_Load Unpacked_):

1. **Buka Halaman Ekstensi Chrome:**
   - Buka Google Chrome.
   - Ketikkan alamat berikut di bilah URL lalu tekan `Enter`:
     ```text
     chrome://extensions/
     ```
   - Atau klik menu titik tiga di pojok kanan atas Chrome > **Extensions** > **Manage Extensions**.

2. **Aktifkan Developer Mode (Mode Pengembang):**
   - Di pojok kanan atas halaman ekstensi, aktifkan toggle **Developer mode**.

3. **Muat Ekstensi (Load Unpacked):**
   - Klik tombol **Load unpacked** (_Muat yang belum dibongkar_) di pojok kiri atas.
   - Pilih folder tempat file ekstensi ini berada (folder yang berisi file `manifest.json` dan `content.js`).

4. **Selesai!**
   - Ekstensi **YT Shorts Custom PiP** sekarang telah aktif dan siap digunakan.

---

## 🎯 Cara Menggunakan

1. Buka situs YouTube dan tonton video Shorts apa pun (contoh: [youtube.com/shorts](https://www.youtube.com/shorts)).
   > _Catatan: Jika tab YouTube sudah terbuka sebelum ekstensi dipasang, silakan refresh/muat ulang halaman YouTube (F5)._
2. Di pojok kanan bawah halaman Shorts, Anda akan melihat tombol merah bertuliskan:  
   **`📺 Buka PiP Shorts`**
3. Klik tombol tersebut untuk membuka jendela Picture-in-Picture.
4. Anda sekarang bisa multitasking sambil menonton Shorts di sudut layar!

---

## 🎮 Kontrol pada Jendela PiP

| Tombol / Aksi           | Fungsi                                                                        |
| :---------------------- | :---------------------------------------------------------------------------- |
| **Klik Area Video**     | Memutar atau menjeda (_Play / Pause_) video                                   |
| **Hover Video**         | Memunculkan overlay timeline & durasi waktu                                   |
| **Klik Progress Bar**   | Lompat (_seek_) ke menit/detik yang diklik                                    |
| **`⏯ Play/Pause`**     | Memutar / menjeda video                                                       |
| **`⏪ -10s`**           | Mundur 10 detik                                                               |
| **`⏩ +10s`**           | Maju 10 detik                                                                 |
| **`⬆ Prev`**            | Beralih ke Shorts sebelumnya                                                  |
| **`⬇ Next`**            | Beralih ke Shorts berikutnya                                                  |
| **`🔁 Auto: OFF / ON`** | Mengaktifkan/menonaktifkan auto-scroll ke video berikutnya saat video selesai |

---

## 💡 Tips & Troubleshooting

- **Tombol "Buka PiP Shorts" tidak muncul?**
  - Pastikan Anda berada di URL Shorts (`/shorts/`).
  - Lakukan refresh halaman (`Ctrl + R` atau `F5`).
- **Setelah mengedit kode:**
  - Jika Anda memodifikasi file `content.js` atau `manifest.json`, kembali ke `chrome://extensions/` lalu klik ikon putar balik/reload (🔄) pada kartu ekstensi **YT Shorts Custom PiP**.
- **Browser tidak mendukung:**
  - Pastikan Google Chrome Anda sudah diperbarui ke versi terbaru.

---

## 📁 Struktur File

```text
shorts-pip-extension/
├── manifest.json   # Konfigurasi Manifest V3 ekstensi Chrome
├── content.js      # Logika injeksi UI PiP & kontrol sinkronisasi video
└── README.md       # Panduan penggunaan
```
# shorts-youtube-extention
