# 🔮 Gift Genius: The Alchemical Gift Oracle

![Version](https://img.shields.io/badge/Version-v5.0_Alchemy-purple)
![Status](https://img.shields.io/badge/Status-Active-success)
![AI Model](https://img.shields.io/badge/Powered%20By-Gemini%201.5%20Flash-blueviolet)

> **Ketika intuisi bertemu algoritma.** Gift Genius bukan lagi sekadar pencari kado, melainkan laboratorium magis yang menggabungkan psikologi, astrologi, dan kreativitas untuk menemukan hadiah yang tak terpikirkan sebelumnya.

**Gift Genius** adalah aplikasi web *Client-Side* futuristik yang mengubah seni memberi hadiah. Ditenagai oleh **Google Gemini Multimodal AI**, aplikasi ini memiliki dua mode utama: **The Oracle** (untuk pencarian mendalam berbasis kepribadian) dan **The Alchemy Lab** (untuk menciptakan kado *crossover* unik dari dua hobi berbeda).


---

## 🌌 Fitur Unggulan (v5.0 The Alchemy Update)

Aplikasi kini terbagi menjadi dua ruangan magis yang dapat diakses melalui navigasi utama:

### 🔮 Ruang 1: The Oracle (Deep Dive Discovery)
Pencarian kado berbasis pemahaman mendalam tentang penerima.
* **Aura Reading (Visual):** Unggah foto kamar atau OOTD target. AI akan membaca estetika visualnya (*Cottagecore, Industrial, dsb*).
* **Cosmic Alignment (Zodiak):** Integrasi arketipe astrologi untuk mempertajam saran kado.
* **Melodic Muse (Musik):** Menerjemahkan selera musik (misal: *Jazz, K-Pop*) menjadi barang fisik yang relevan.
* **Contextual Spells:** Filter cerdas untuk **Budget** (*Under 100k - Sultan*) dan **Acara** (*Birthday, Apology, Anniversary*).

### ⚗️ Ruang 2: The Alchemy Lab (Creative Remix)
Tempat bereksperimen menggabungkan dua hal yang tidak berhubungan.
* **Fusion Engine:** Masukkan dua elemen berbeda (misal: *"Suka Masak"* + *"Suka Star Wars"*).
* **AI Synthesis:** Gemini akan mencari barang nyata yang menggabungkan keduanya (Hasil: *Spatula Lightsaber* atau *Celemek Darth Vader*).
* **Solusi Kreatif:** Cocok untuk teman yang punya hobi unik atau kontradiktif.

### ✨ Fitur Pendukung
* **The Constellation Landing:** Halaman pembuka interaktif dengan rasi bintang kata kunci untuk memulai pencarian instan.
* **Greeting Scroll:** Generator ucapan kartu otomatis yang puitis.
* **Share the Magic:** Ekspor hasil rekomendasi menjadi gambar kristal (.png) siap posting.

---

## 🛠️ Teknologi (Vibe Coding Stack)

Dibangun dengan arsitektur modern tanpa backend server (*Serverless Client-Side*).

* **Frontend:** [Next.js 14](https://nextjs.org/) (App Router)
* **AI Core:** [Google Gemini API](https://aistudio.google.com/) (`gemini-1.5-flash` Multimodal)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) (Tema: *Mystical Glassmorphism*)
* **Assets:** [Lucide React](https://lucide.dev/) & [html2canvas](https://html2canvas.hertzen.com/)

---

## 💡 Panduan Penggunaan

### Mode Oracle 🔮
1.  Pilih **Menu Oracle**.
2.  Isi deskripsi penerima dan unggah foto mereka untuk **Aura Reading**.
3.  Buka panel *"Cosmic Details"* untuk memasukkan **Zodiak** dan **Musik**.
4.  Klik **"Reveal"** untuk melihat takdir hadiah mereka.

### Mode Alchemy ⚗️
1.  Pilih **Menu Alchemy Lab**.
2.  Isi **Elemen 1** (cth: Hobi Memancing).
3.  Isi **Elemen 2** (cth: Teknologi/Gadget).
4.  Klik **"Fuse Elements"** (Leburkan).
5.  Lihat hasil persilangan kreatif yang disarankan AI.

---

## 🚀 Cara Menjalankan (Lokal)

Ingin menjalankan Orakel ini di komputer Anda sendiri?

1.  **Clone Repo:**
    ```bash
    git clone [https://github.com/username/gift-genius.git](https://github.com/username/gift-genius.git)
    cd gift-genius
    ```

2.  **Install Mantra (Dependencies):**
    ```bash
    npm install
    ```

3.  **Kunci Rahasia (API Key):**
    Buat file `.env.local` dan masukkan API Key Google AI Studio Anda:
    ```env
    NEXT_PUBLIC_GEMINI_API_KEY=masukkan_kunci_rahasia_anda
    ```

4.  **Buka Portal:**
    ```bash
    npm run dev
    ```
    Buka `http://localhost:3000` di browser Anda.

---

## 🤝 Berkontribusi

Kami mengundang para penyihir kode untuk berkontribusi! Apakah Anda ingin menambahkan fitur **Spotify Connect** atau **Kalender Ulang Tahun**?

1.  Fork repositori ini.
2.  Buat branch fitur (`git checkout -b fitur-baru`).
3.  Commit perubahan.
4.  Push dan buat Pull Request.

---

<div align="center">
  <p>Didukung oleh Google Gemini AI</p>
</div>
