# 🔮 Gift Genius: The AI Gift Oracle

![Project Status](https://img.shields.io/badge/Status-Active-purple)
![Version](https://img.shields.io/badge/Version-v3.0-blue)
![Tech Stack](https://img.shields.io/badge/Built%20With-Next.js%20%7C%20Gemini%20Vision%20%7C%20Tailwind-blueviolet)

> **Jangan biarkan "Gift-Giving Anxiety" menghantui Anda.** Gift Genius bukan sekadar pencari barang, melainkan Orakel Digital yang membaca aura, konteks, dan emosi untuk menemukan hadiah yang sempurna.

**Gift Genius** adalah aplikasi web berbasis AI (*Client-Side*) yang mengubah pengalaman mencari kado menjadi sebuah perjalanan magis. Dengan memanfaatkan **Google Gemini Multimodal AI**, aplikasi ini bisa "melihat" foto target Anda, memahami konteks acara, dan memberikan rekomendasi yang sangat personal.


---

## ✨ Fitur Baru (v3.0 Constellation Update)

Kami telah merombak total pengalaman pengguna dengan fitur-fitur magis berikut:

### 🌌 1. The Constellation of Vibes (Landing Page)
Lupakan formulir yang membosankan. Di halaman pembuka, Anda akan disambut oleh rasi bintang kata kunci (*Cozy, Gamer, Luxury, etc*).
* **Cara Kerja:** Klik salah satu "Bintang Vibe", dan aplikasi akan langsung terbuka dengan konteks yang sudah terisi otomatis. Solusi instan untuk *writer's block*!

### 🔮 2. Aura Reading (Visual Analysis)
Terkadang kata-kata tidak cukup untuk menggambarkan selera seseorang.
* **Cara Kerja:** Unggah foto kamar, meja kerja, atau OOTD target Anda.
* **Teknologi:** Gemini Vision akan menganalisis estetika visual (misal: *Cottagecore, Industrial, Minimalist*) dan menyarankan kado yang selaras dengan "Aura" tersebut.

### 🎡 3. The Occasion Wheel & Budget Spell
Kado ulang tahun berbeda dengan kado permintaan maaf.
* **Occasion Wheel:** Pilih konteks acara (*Birthday, Anniversary, Apology, Cheer Up*) untuk menyesuaikan nada emosional kado.
* **Budget Spell:** Slider interaktif untuk menjaga rekomendasi tetap ramah di kantong (*Under 100k* hingga *Sultan Mode*).

### 📤 4. Share the Magic
Butuh pendapat teman sebelum membeli?
* **Fitur:** Ekspor kartu rekomendasi menjadi gambar cantik (.png) dengan satu klik (ditenagai oleh `html2canvas`) untuk dibagikan ke Instagram Story atau WhatsApp.

### 📜 5. The Greeting Scroll
Sudah beli kadonya, tapi bingung nulis ucapannya?
* **Fitur:** AI akan membuatkan pesan kartu ucapan yang puitis, lucu, atau menyentuh hati sesuai dengan barang yang Anda pilih.

---

## 🛠️ Teknologi di Balik Layar

Aplikasi ini dibangun dengan filosofi **"Vibe Coding"**: Cepat, Estetik, dan Tanpa Backend Server.

* **Frontend:** [Next.js 14](https://nextjs.org/) (App Router)
* **AI Brain:** [Google Gemini API](https://aistudio.google.com/) (Model `gemini-1.5-flash` Multimodal)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) (Tema: *Ethereal Glassmorphism*)
* **Image Processing:** `html2canvas` (Untuk fitur Share)
* **Icons:** [Lucide React](https://lucide.dev/)

---

## 💡 Cara Menggunakan Orakel Ini

1.  **Pilih Vibe:** Di halaman depan, klik salah satu kata kunci yang melayang (misal: "Creative").
2.  **Berikan Petunjuk:**
    * Ketik detail tambahan tentang penerima.
    * (Opsional) Upload foto mereka untuk fitur **Aura Reading**.
3.  **Atur Batasan:** Putar *Occasion Wheel* ke acara yang sesuai dan geser *Budget Slider*.
4.  **Reveal:** Klik tombol **"Reveal Gifts"**. Biarkan animasi magis bekerja.
5.  **Keputusan:**
    * Lihat 3 Kartu Kaca hasil rekomendasi.
    * Klik **"Tulis Ucapan"** untuk menyalin pesan manis.
    * Klik **"Share"** untuk menyimpan gambar kartu.
    * Klik **"Search"** untuk membeli barangnya.

---

## 🤝 Berkontribusi

Proyek ini bersifat *Open Source*. Jika Anda ingin menambahkan fitur baru (misal: Filter Zodiak atau Integrasi Spotify), silakan berkontribusi!

1.  Fork repositori ini.
2.  Buat branch fitur baru (`git checkout -b fitur-zodiak`).
3.  Commit perubahan Anda.
4.  Push ke branch tersebut.
5.  Buat Pull Request.

---

<div align="center">
  <p>Didukung oleh Google Gemini API</p>
</div>
