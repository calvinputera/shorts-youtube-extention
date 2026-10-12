<div align="center">

# YT Shorts Custom PiP 📺

Ekstensi Google Chrome untuk menonton **YouTube Shorts** dalam mode **Picture-in-Picture (PiP) interaktif**.  
*Interactive Picture-in-Picture Google Chrome extension for YouTube Shorts with full playback controls.*

---

### 🌐 Pilih Bahasa / Select Language
**[🇮🇩 Bahasa Indonesia](#-bahasa-indonesia)** &nbsp;•&nbsp; **[🇬🇧 English](#-english)**

---

</div>

<br />

# 🇮🇩 Bahasa Indonesia

Ekstensi Google Chrome untuk menonton **YouTube Shorts** dalam mode **Picture-in-Picture (PiP) interaktif** dengan kontrol video lengkap (Play/Pause, timeline scrubber, navigasi Next/Prev, dan fitur Auto-Next).

Dibuat menggunakan Chrome **Document Picture-in-Picture API**.

## ✨ Fitur Utama

- 🪟 **Jendela PiP Interaktif:** Jendela melayang (*floating window*) yang tetap berada di atas aplikasi lain.
- ⏱️ **Timeline & Progress Bar (Scrubber):** Arahkan kursor (*hover*) ke video untuk melihat durasi dan klik progress bar untuk langsung lompat (*seek*) ke detik tertentu.
- ⏯️ **Kontrol Playback:** Klik langsung pada video atau gunakan tombol navigasi untuk Play/Pause.
- ⏩ **Fast Forward & Rewind:** Tombol cepat untuk maju (+10s) atau mundur (-10s).
- ↕️ **Navigasi Shorts:** Tombol `Next` dan `Prev` langsung berpindah ke video Shorts berikutnya/sebelumnya tanpa perlu kembali ke tab YouTube.
- 🔁 **Auto-Next Mode:** Menonton Shorts secara hands-free! Video akan otomatis bergulir ke video berikutnya ketika video yang sedang berjalan selesai.

## 📋 Persyaratan

- **Google Chrome** versi 116 ke atas (atau browser berbasis Chromium terbaru yang mendukung *Document Picture-in-Picture API*).

## 🚀 Panduan Instalasi di Google Chrome

Ikuti langkah-langkah berikut untuk memasang ekstensi ini secara manual (*Load Unpacked*):

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
   - Klik tombol **Load unpacked** (*Muat yang belum dibongkar*) di pojok kiri atas.
   - Pilih folder tempat file ekstensi ini berada (folder yang berisi file `manifest.json` dan `content.js`).

4. **Selesai!**
   - Ekstensi **YT Shorts Custom PiP** sekarang telah aktif dan siap digunakan.

## 🎯 Cara Menggunakan

1. Buka situs YouTube dan tonton video Shorts apa pun (contoh: [youtube.com/shorts](https://www.youtube.com/shorts)).
   > *Catatan: Jika tab YouTube sudah terbuka sebelum ekstensi dipasang, silakan refresh/muat ulang halaman YouTube (F5).*
2. Di pojok kanan bawah halaman Shorts, Anda akan melihat tombol merah bertuliskan:  
   **`📺 Buka PiP Shorts`**
3. Klik tombol tersebut untuk membuka jendela Picture-in-Picture.
4. Anda sekarang bisa multitasking sambil menonton Shorts di sudut layar!

## 🎮 Kontrol pada Jendela PiP

| Tombol / Aksi | Fungsi |
| :--- | :--- |
| **Klik Area Video** | Memutar atau menjeda (*Play / Pause*) video |
| **Hover Video** | Memunculkan overlay timeline & durasi waktu |
| **Klik Progress Bar** | Lompat (*seek*) ke menit/detik yang diklik |
| **`⏯ Play/Pause`** | Memutar / menjeda video |
| **`⏪ -10s`** | Mundur 10 detik |
| **`⏩ +10s`** | Maju 10 detik |
| **`⬆ Prev`** | Beralih ke Shorts sebelumnya |
| **`⬇ Next`** | Beralih ke Shorts berikutnya |
| **`🔁 Auto: OFF / ON`** | Mengaktifkan/menonaktifkan auto-scroll ke video berikutnya saat video selesai |

## 💡 Tips & Troubleshooting

- **Tombol "Buka PiP Shorts" tidak muncul?**
  - Pastikan Anda berada di URL Shorts (`/shorts/`).
  - Lakukan refresh halaman (`Ctrl + R` atau `F5`).
- **Setelah mengedit kode:**
  - Jika Anda memodifikasi file `content.js` atau `manifest.json`, kembali ke `chrome://extensions/` lalu klik ikon putar balik/reload (🔄) pada kartu ekstensi **YT Shorts Custom PiP**.
- **Browser tidak mendukung:**
  - Pastikan Google Chrome Anda sudah diperbarui ke versi terbaru (versi 116+).

---

<br />

# 🇬🇧 English

A Google Chrome extension to watch **YouTube Shorts** in an **interactive Picture-in-Picture (PiP)** mode with complete playback controls (Play/Pause, timeline scrubber, Next/Prev navigation, and Auto-Next feature).

Built using Chrome's **Document Picture-in-Picture API**.

## ✨ Key Features

- 🪟 **Interactive PiP Window:** An always-on-top floating window that stays above other desktop applications.
- ⏱️ **Interactive Timeline & Progress Bar (Scrubber):** Hover over the video to reveal the current time/duration, and click on the progress bar to seek instantly.
- ⏯️ **Playback Control:** Click anywhere on the video preview or use the control buttons to Play/Pause.
- ⏩ **Fast Forward & Rewind:** Quick 10-second skip ahead (+10s) or jump back (-10s).
- ↕️ **Shorts Navigation:** Next and Previous buttons navigate to adjacent Shorts directly from the PiP window without switching back to YouTube.
- 🔁 **Auto-Next Mode:** Hands-free binge watching! Automatically scrolls to the next Short when the current one finishes.

## 📋 Requirements

- **Google Chrome** version 116 or higher (or any modern Chromium-based browser supporting the *Document Picture-in-Picture API*).

## 🚀 Installation Guide in Google Chrome

Follow these steps to install the extension manually (*Load Unpacked*):

1. **Open the Chrome Extensions Page:**
   - Open Google Chrome.
   - Enter the following URL into your address bar and press `Enter`:
     ```text
     chrome://extensions/
     ```
   - Or click the three dots menu in the top right > **Extensions** > **Manage Extensions**.

2. **Enable Developer Mode:**
   - In the top right corner of the Extensions page, toggle **Developer mode** to ON.

3. **Load the Extension (Load Unpacked):**
   - Click the **Load unpacked** button in the top left corner.
   - Select this extension project folder (the folder containing `manifest.json` and `content.js`).

4. **Done!**
   - **YT Shorts Custom PiP** is now installed and active.

## 🎯 How to Use

1. Open YouTube and visit any YouTube Shorts video (e.g., [youtube.com/shorts](https://www.youtube.com/shorts)).
   > *Note: If you already had YouTube open before installing, please refresh the page (F5).*
2. Look for the floating red button in the bottom right corner of the page:  
   **`📺 Buka PiP Shorts`**
3. Click the button to launch the Picture-in-Picture window.
4. Enjoy multitasking while watching YouTube Shorts!

## 🎮 PiP Window Controls

| Button / Action | Description |
| :--- | :--- |
| **Click Video Area** | Toggle Play / Pause |
| **Hover Video** | Reveals timeline progress bar & time counter |
| **Click Progress Bar** | Seek directly to the clicked timestamp |
| **`⏯ Play/Pause`** | Toggle playback |
| **`⏪ -10s`** | Rewind 10 seconds |
| **`⏩ +10s`** | Fast-forward 10 seconds |
| **`⬆ Prev`** | Navigate to the previous Short |
| **`⬇ Next`** | Navigate to the next Short |
| **`🔁 Auto: OFF / ON`** | Toggle auto-advancing to the next Short upon completion |

## 💡 Troubleshooting & Tips

- **The "Buka PiP Shorts" button does not show up?**
  - Make sure you are on a Shorts URL (`/shorts/`).
  - Refresh the page (`Ctrl + R` or `F5`).
- **After modifying code:**
  - If you edit `content.js` or `manifest.json`, return to `chrome://extensions/` and click the reload icon (🔄) on the **YT Shorts Custom PiP** card.
- **"Document Picture-in-Picture API not supported" error:**
  - Make sure your browser is updated to Google Chrome 116 or higher.

---

## 📁 File Structure / Struktur File

```text
shorts-pip-extension/
├── manifest.json   # Chrome extension configuration (Manifest V3)
├── content.js      # PiP UI injection, media streaming & navigation logic
└── README.md       # Documentation & usage guide
```
