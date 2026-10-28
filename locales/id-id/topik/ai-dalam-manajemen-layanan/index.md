# AI dalam manajemen layanan

**Kecerdasan buatan (AI) masuk ke manajemen layanan di service desk, operasi, pengetahuan, perubahan, dan dukungan keputusan; perlakukan setiap pemakaian sebagai layanan dengan pemilik, manusia yang memutuskan di tempat kerugian mungkin terjadi, cara untuk menangkap kesalahan, dan ukuran apakah ia membantu.**

## Mengapa ini penting

AI telah berpindah dari topik riset menjadi fitur dari perangkat yang sudah dipakai tim layanan. Sistem tiket menyarankan kategori. Platform pemantauan mengelompokkan peringatan. Asisten obrolan menjawab pertanyaan staf. Penyunting kode menyusun skrip. Sebagian di antaranya dinyalakan oleh vendor, dan tak seorang pun di tim memutuskan untuk mengadopsinya.

Potensinya nyata. Banyak pekerjaan layanan adalah membaca, menulis, memilah, dan mencari, tugas yang dikerjakan AI saat ini cukup baik untuk menghemat waktu. Risikonya juga nyata. Sistem AI menghasilkan jawaban yang lancar yang bisa salah, dapat menyembunyikan bagaimana ia sampai pada kesimpulan, dapat membocorkan data, dan dapat gagal dengan cara yang sulit diprediksi. Tim yang mengadopsi AI tanpa kepemilikan, tinjauan, dan ukuran mewarisi risiko itu tanpa manfaatnya.

Topik ini adalah peta bagian AI dari panduan ini. Ia menjelaskan jenis-jenis utama AI dalam pekerjaan layanan, di mana ia membantu, di mana tidak, dan apa yang ditanyakan sebelum mengadopsi. Topik-topik berikutnya masuk lebih dalam: operasi (Topik 5.2 — AIOps), service desk (Topik 5.3 — Service desk AI dan agen virtual), AI generatif (Topik 5.4 — AI generatif untuk insiden, pengetahuan, dan perubahan), agen yang bertindak (Topik 5.5 — AI agentik dan pengawasan manusia), tata kelola (Topik 5.6 — Tata kelola, risiko, dan kepatuhan AI), prompt dan skill (Topik 5.7 — Keterampilan dan Prompt AI), dan model operasi (Topik 5.8 — Model operasi dan keterampilan AI). Uraian pemilik tentang versi ITIL terbaru menyebut AI sebagai bagian dari lingkungan yang harus ditangani manajemen layanan (lihat Topik 1.3 — ITIL 5).

## Konsep inti

**Kecerdasan buatan.** Istilah luas untuk sistem yang menjalankan tugas yang biasanya membutuhkan kecerdasan manusia, seperti mengenali pola, memahami bahasa, dan membuat rekomendasi. Artikel Wikipedia tentang artificial intelligence menjelaskan bidang ini dan sejarahnya. Istilah ini mencakup banyak teknik berbeda, dan apa yang dimaksud orang dengan "AI" bervariasi. Ketika Anda membahas sebuah pemakaian, sebutkan tekniknya dan tugasnya.

**Pembelajaran mesin (machine learning).** Sistem yang mempelajari pola dari data alih-alih mengikuti aturan eksplisit. Wikipedia menjelaskan machine learning dan cabang-cabangnya. Contoh dalam pekerjaan layanan mencakup mengklasifikasikan tiket, mendeteksi metrik yang tidak biasa, dan memprediksi kegagalan. Mereka bergantung pada data pelatihan, dan dapat menurun ketika kondisi berubah, masalah yang dijelaskan Wikipedia sebagai concept drift.

**AI generatif dan model bahasa besar.** Sistem yang menghasilkan konten baru, seperti teks, kode, atau gambar, dari prompt. Model bahasa besar (LLM) dilatih pada teks dalam jumlah besar dan dapat merangkum, menyusun, menerjemahkan, dan menjawab pertanyaan. Wikipedia menjelaskan generative AI dan large language model. Keluarannya lancar dan tidak dijamin benar.

**Halusinasi.** Keluaran yang meyakinkan tetapi salah atau tidak berdasar. Wikipedia menjelaskan hallucination dalam AI. Dalam pekerjaan layanan, ia bisa berarti perintah yang dikarang, kebijakan yang dibuat-buat, atau akar masalah yang diyakini tetapi salah. Rencanakan untuknya: dasarkan jawaban pada sumber, tampilkan sumber, dan periksa sebelum bertindak.

**Retrieval-augmented generation.** Pola di mana sistem lebih dulu mengambil dokumen yang relevan, seperti artikel pengetahuan, lalu meminta model menjawab hanya dengan memakainya. Wikipedia menjelaskan pendekatannya. Ia mengurangi, tetapi tidak menghilangkan, jawaban yang salah, dan bergantung pada mutu dokumen. Lihat Topik 3.9 — Manajemen Pengetahuan.

**Agen.** Sistem yang tidak hanya menjawab tetapi mengambil tindakan: memanggil alat, mengubah catatan, menjalankan skrip. Wikipedia menjelaskan intelligent agent secara umum. Agen menaikkan taruhan karena kesalahan berdampak di dunia nyata. Lihat Topik 5.5 — AI agentik dan pengawasan manusia.

**Di mana AI membantu dalam manajemen layanan.** Pemakaian yang khas terbagi dalam lima kelompok:

| Area | Contoh | Kehati-hatian utama |
|---|---|---|
| Service desk | Mengklasifikasikan dan merutekan tiket, menyusun balasan, menjawab pertanyaan umum | Jawaban salah atau karangan kepada pengguna |
| Operasi | Mengelompokkan peringatan, menemukan anomali, menyarankan penyebab | Sinyal yang terlewat tanpa disadari |
| Pengetahuan | Mencari, merangkum, dan menyusun artikel | Draf yang menyebarkan kesalahan |
| Perubahan dan pengiriman | Menyusun kode dan pengujian, menilai risiko perubahan, menulis catatan rilis | Kode yang tidak aman atau salah, skor risiko yang terlalu dipercaya |
| Dukungan keputusan | Merangkum data, meramalkan permintaan, menemukan pola | Kesimpulan yang terlalu yakin dari data yang lemah |

**Manusia dalam lingkaran (human in the loop).** Seseorang meninjau atau menyetujui keluaran atau tindakan AI sebelum berlaku. Wikipedia menjelaskan sistem human-in-the-loop. Ia adalah kontrol, dan hanya berfungsi jika orang itu punya waktu, informasi, dan wewenang untuk berkata tidak. Wikipedia juga menjelaskan automation bias, kecenderungan terlalu mengandalkan saran otomatis, yang dapat mengubah pemeriksaan manusia menjadi stempel karet.

**Keterjelasan (explainability).** Kemampuan menyatakan mengapa sistem menghasilkan suatu keluaran. Wikipedia menjelaskan explainable AI. Untuk sebagian pemakaian, seperti meranking tiket, alasan kasar sudah cukup; untuk yang lain, seperti keputusan yang memengaruhi akses atau gaji seseorang, Anda memerlukan lebih. Putuskan seberapa banyak penjelasan yang dibutuhkan setiap pemakaian.

**Bias dan keadilan.** AI yang dilatih pada data masa lalu dapat mereproduksi pola masa lalu, termasuk yang tidak adil. Wikipedia menjelaskan algorithmic bias. Dalam pekerjaan layanan, bias dapat muncul pada siapa yang mendapat bantuan lebih cepat, permintaan siapa yang ditandai, atau bahasa siapa yang dipahami sistem dengan baik.

**Data dan privasi.** Perangkat AI memproses data yang Anda berikan, seperti teks tiket dengan rincian pribadi. Ke mana data pergi, berapa lama disimpan, dan apakah ia melatih model lain adalah pertanyaan sentral. Lihat Topik 5.6 — Tata kelola, risiko, dan kepatuhan AI.

**Risiko keamanan.** Sistem AI memiliki kelemahannya sendiri, seperti prompt injection, di mana teks dalam dokumen atau pesan mencoba memberi model instruksi baru. Wikipedia menjelaskan prompt injection. Perlakukan masukan dari luar sebagai tidak tepercaya.

**Siklus hidup dan operasi.** Model yang dipakai memerlukan pemantauan, pelatihan ulang atau penggantian, pemberian versi, dan pensiun. MLOps, yang dijelaskan di Wikipedia, menerapkan disiplin rekayasa pada hal ini. Untuk model vendor, Anda tetap perlu melacak perubahan perilaku setelah pembaruan.

**Kerangka tata kelola.** Artificial Intelligence Act Uni Eropa, yang dijelaskan di Wikipedia, menetapkan kewajiban hukum yang bergantung pada kategori risiko. ISO/IEC 42001 menetapkan sistem manajemen AI, dan National Institute of Standards and Technology Amerika Serikat menerbitkan AI Risk Management Framework. Semua ini adalah kosakata dan struktur untuk tata kelola; bukan pengganti nasihat hukum.

**Bagaimana lensa-lensa cocok.** AI adalah salah satu dari empat lensa. Praktik agile menyarankan uji coba kecil dengan pengguna nyata dan umpan balik singkat. Otomatisasi adalah tetangga terdekatnya: AI memutuskan atau menyarankan, otomatisasi bertindak. Analitik menyediakan data yang dipelajari AI dan ukuran yang menunjukkan apakah ia membantu.

## Praktik terbaik

1. **Mulai dari masalah, bukan alat.** Sebutkan kesulitan spesifik, seperti waktu yang dihabiskan memilah tiket, dan ukuran perbaikan. Lalu tanyakan apakah AI jawaban yang tepat, atau perbaikan yang lebih sederhana berfungsi.
2. **Simpan inventaris pemakaian AI.** Daftarkan setiap fitur dan perangkat AI yang dipakai, termasuk fitur vendor dan perangkat pribadi yang dipakai staf untuk bekerja. Catat tujuan, data, pemilik, dan status.
3. **Tunjuk pemilik untuk setiap pemakaian.** Satu orang bertanggung jawab atas apa yang dilakukan AI, data apa yang dipakainya, dan apa yang terjadi ketika ia salah. Tanpa pemilik, tak seorang pun menyadari penurunan.
4. **Putuskan di mana manusia memutuskan.** Untuk setiap pemakaian, tuliskan apa yang boleh dilakukan AI sendiri, apa yang perlu ditinjau, dan apa yang tidak boleh dilakukannya. Buat tinjauan itu nyata: beri peninjau waktu dan konteks.
5. **Dasarkan jawaban pada sumber Anda sendiri.** Pakai pengambilan dari pengetahuan yang telah ditinjau, tunjukkan sumber kepada pengguna, dan katakan dengan jelas ketika tidak ada sumber yang mendukung jawaban.
6. **Uji sebelum dan sesudah peluncuran.** Susun kumpulan kasus uji yang realistis dengan jawaban yang diketahui, termasuk yang canggung dan yang bersifat adversarial. Jalankan sebelum rilis dan setelah setiap perubahan pada model atau data.
7. **Ukur nilai dan kesalahan.** Lacak waktu yang dihemat, mutu keluaran, koreksi oleh manusia, keluhan pengguna, dan biaya. Ambil sampel keluaran secara berkala.
8. **Lindungi data.** Putuskan data apa yang boleh dikirim ke perangkat mana, hapus rincian pribadi dan sensitif bila bisa, dan periksa ketentuan kontrak tentang retensi dan pemakaian untuk pelatihan.
9. **Rencanakan kegagalan.** Permudah mematikan fitur AI, merutekan ke manusia, dan memulihkan. Latih kegagalan layanan AI yang Anda andalkan.
10. **Bangun keterampilan dan bagikan pembelajaran.** Latih orang memakai AI dengan baik dan mempertanyakannya. Bagikan apa yang berhasil dan gagal lintas tim. Lihat Topik 5.7 — Keterampilan dan Prompt AI.

## Pertanyaan untuk dibahas bersama tim Anda

**Di mana kita sudah memakai AI, termasuk fitur yang tidak kita pilih dan perangkat yang dipakai orang sendiri?**
Tanyakan kepada semua orang, dan periksa pengaturan vendor. Harapkan daftar yang lebih panjang dari yang diperkirakan siapa pun. Lanjutkan dengan mencatat setiap pemakaian beserta pemiliknya.

**Tugas kita yang mana yang sebagian besar membaca, menulis, dan memilah, dan mana yang tidak ingin kita serahkan keputusannya kepada mesin?**
Pertanyaan ini memilah tugas menurut kesesuaian. Harapkan kesepakatan pada penyusunan draf dan perbedaan pendapat pada keputusan. Lanjutkan dengan memilih satu tugas berisiko rendah untuk diuji coba.

**Apa yang akan kita lakukan jika asisten AI kita memberi pengguna jawaban salah yang meyakinkan, dan bagaimana kita mengetahuinya?**
Telusuri skenarionya. Harapkan celah dalam deteksi. Lanjutkan dengan menyepakati cara mengambil sampel keluaran dan mengumpulkan umpan balik pengguna.

**Data apa yang kita kirim ke perangkat AI, dan apakah kita telah membaca ketentuannya?**
Daftarkan perangkat dan data. Harapkan akun pribadi dan ketentuan yang tidak diketahui. Lanjutkan dengan menyepakati aturan tentang apa yang tidak boleh ditempelkan ke perangkat eksternal.

**Bagaimana kita tahu bahwa suatu pemakaian AI sepadan dengan biayanya?**
Minta ukuran manfaat dan ukuran kerugian. Harapkan "rasanya lebih cepat". Lanjutkan dengan memilih satu pemakaian dan menyepakati ukuran sebelum-sesudah.

**Keterampilan apa yang dibutuhkan orang kita untuk memakai AI dengan baik, dan siapa yang akan mengajarkannya?**
Pikirkan menulis prompt yang baik, memeriksa jawaban, dan mengenali batas. Harapkan rentang kepercayaan diri yang lebar. Lanjutkan dengan merencanakan sesi latihan singkat dengan tugas nyata.

## Dalam praktik: contoh manajemen layanan

Tim TI jaringan perpustakaan umum nasional mendukung 200 cabang dan sekitar 6.000 staf. Service desk menangani volume tinggi pertanyaan berulang tentang pencetakan, login, dan sistem peminjaman. Kepala layanan ingin memakai AI untuk memangkas antrean, dan vendor sistem tiket baru saja menambahkan asisten AI, dinyalakan secara bawaan untuk obrolan yang menghadap staf.

Manajer layanan pertama-tama mendaftar pemakaian AI. Selain asisten vendor, ia menemukan bahwa dua analis memakai perangkat obrolan publik untuk merangkum tiket, dan seorang pengembang telah membuat skrip yang menyusun draf balasan. Ia memberi masing-masing pemilik dan menetapkan aturan: tidak ada data pribadi di perangkat publik. Ia lalu memilih satu pemakaian untuk diperbaiki: asisten yang menghadap staf yang menjawab pertanyaan "bagaimana saya", hanya memakai basis pengetahuan yang disetujui, dengan tautan sumber dan tombol yang terlihat untuk menjangkau manusia.

Ia menyusun 60 pertanyaan uji dari tiket nyata, termasuk sepuluh yang tidak dapat dijawab basis pengetahuan, di mana perilaku yang benar adalah mengatakannya. Versi pertama menjawab tiga dari sepuluh itu dengan langkah karangan. Tim memperketat instruksi dan menambahkan aturan untuk menolak ketika tidak ada artikel yang cocok, dan kegagalan turun menjadi satu. Selama bulan pertama, seorang agen desk membaca setiap percakapan yang tidak diselesaikan oleh asisten, dan sampel dari sisanya.

Yang berubah: asisten menyelesaikan sekitar sepertiga percakapan tanpa tiket, dan agen menghabiskan lebih sedikit waktu untuk pertanyaan berulang. Yang masih sulit: basis pengetahuan memiliki artikel usang yang dikutip asisten, sehingga tim harus membersihkannya; vendor mengubah model dasarnya tanpa pemberitahuan, yang pernah mengubah perilaku semalam; dan staf di cabang kecil kadang lebih suka menelepon. Manajer menetapkan pengujian bulanan, kontak yang disepakati untuk perubahan model, dan pesan jelas bahwa menelepon tetap tersedia.

## Empat perspektif

### Tim produk dan pengiriman

Pakai AI untuk menyusun kode, pengujian, dan dokumentasi, di bawah tinjauan dan pemeriksaan pipeline Anda yang biasa. Catat di mana AI dipakai, dan waspadai kode yang tidak aman atau tidak berlisensi. Perlakukan fitur AI dalam produk Anda sendiri sebagai layanan dengan pemilik.

### Tim layanan dan operasi

Pakai AI untuk memilah, merangkum, dan mencari, dengan seseorang memutuskan apa pun yang memengaruhi pengguna atau sistem. Laporkan kesalahan dan nyaris celaka, dan bantu menyetel apa yang dilihat dan dikatakan AI.

### Kepemimpinan dan tata kelola

Minta inventaris, pemilik, ukuran, dan rencana kegagalan. Tetapkan aturan yang jelas tentang data dan keputusan. Danai pelatihan dan pengujian, bukan hanya lisensi.

### Pelanggan dan pengguna

Anda seharusnya tahu ketika Anda berbicara dengan AI dan dapat menjangkau manusia. Beri tahu penyedia ketika jawaban salah atau tidak membantu. Berhati-hatilah dengan data pribadi yang Anda bagikan.

## Agile, AI, otomatisasi, dan analitik

### Agile

Cobalah AI dalam uji coba kecil dengan pengguna nyata, belajar dari umpan balik, dan putuskan untuk mempertahankan, mengubah, atau menghentikan. Libatkan pemangku kepentingan dalam apa yang boleh dilakukan AI. Perhatian: demo yang berhasil bukan bukti bahwa suatu pemakaian aman atau bernilai; jalankan uji coba nyata dengan ukuran.

### AI

Topik ini adalah lensa AI itu sendiri: setiap pemakaian memerlukan pemilik, manusia yang memutuskan di tempat kerugian mungkin terjadi, deteksi kesalahan, dan ukuran. Perhatian: jangan mendelegasikan akuntabilitas kepada vendor atau model; Anda tetap bertanggung jawab atas hasil yang disampaikan layanan Anda.

### Otomatisasi

AI memutuskan atau menyarankan; otomatisasi bertindak. Hubungkan keduanya dengan hati-hati, dengan batas pada apa yang dapat terjadi tanpa persetujuan, log, dan cara untuk berhenti. Perhatian: AI yang memicu otomatisasi dapat melipatgandakan kesalahan dengan cepat; tambahkan pembatas laju dan tinjauan. Lihat Topik 6.1 — Strategi otomatisasi.

### Analitik

Ukur manfaat, tingkat kesalahan yang ditemukan dalam sampel, umpan balik pengguna, dan biaya. Perhatian: angka pemakaian dan peringkat pengguna dapat tampak bagus sementara mutu buruk; ambil sampel keluaran dan bandingkan dengan garis dasar. Lihat Topik 7.3 — Pengukuran dan pelaporan dan buku *Service Management Metrics*.

## Mode kegagalan umum

- **Alat sebelum masalah.** Fitur dinyalakan dan tak seorang pun mengukur manfaat. Mulai dari kesulitan dan ukuran.
- **Tidak ada inventaris.** Pemakaian berlipat ganda tanpa terlihat. Daftarkan setiap pemakaian AI dengan pemilik.
- **Tinjauan manusia hanya nama.** Peninjau menjadi stempel karet. Beri waktu, konteks, dan wewenang, dan ambil sampel keputusan mereka.
- **Jawaban salah yang meyakinkan.** Pengguna bertindak atas saran karangan. Dasarkan jawaban, kutip sumber, dan menolak ketika tidak yakin.
- **Kebocoran data.** Teks sensitif masuk ke perangkat eksternal. Tetapkan aturan dan periksa ketentuan.
- **Mengabaikan perubahan model.** Perilaku bergeser setelah pembaruan vendor. Uji secara teratur dan tetapkan kontak untuk perubahan.
- **Tidak ada jalan keluar.** Layanan bergantung pada AI tanpa cadangan. Sediakan rute ke manusia dan sakelar mati.

## Model kematangan

| Dimensi | Memulai | Mengembangkan | Menstandardisasi | Mengelola | Mengorkestrasi |
|---|---|---|---|---|---|
| Inventaris dan kepemilikan | Pemakaian tidak diketahui | Pemakaian utama didaftar | Inventaris dengan pemilik dan tujuan | Inventaris ditinjau dan diuji | Inventaris terintegrasi dengan katalog dan tata kelola |
| Keputusan manusia | Tidak didefinisikan | Tinjauan informal | Titik tinjauan terdefinisi untuk setiap pemakaian | Mutu tinjauan disampel | Tinjauan disesuaikan menurut risiko dan bukti |
| Pengujian dan pemantauan | Tidak ada | Demo | Kumpulan uji dan pengambilan sampel teratur | Kesalahan dan drift diukur | Evaluasi berkelanjutan lintas pemakaian |
| Data dan risiko | Tidak jelas | Kesadaran | Aturan tentang data dan ketentuan vendor | Kepatuhan diperiksa dan diaudit | Risiko dikelola lintas tim dan pemasok |

## Daftar periksa

- [ ] Kami menyimpan inventaris pemakaian AI, termasuk fitur vendor dan perangkat pribadi.
- [ ] Setiap pemakaian memiliki pemilik yang ditunjuk.
- [ ] Kami menuliskan apa yang boleh dilakukan setiap AI sendiri, apa yang perlu ditinjau, dan apa yang tidak boleh dilakukannya.
- [ ] Jawaban didasarkan pada sumber yang telah ditinjau dan menampilkannya.
- [ ] Kami memiliki kumpulan uji dan menjalankannya secara teratur.
- [ ] Kami mengambil sampel keluaran dan melacak kesalahan, koreksi, dan umpan balik.
- [ ] Kami memiliki aturan tentang data apa yang masuk ke perangkat mana.
- [ ] Pengguna dapat menjangkau manusia, dan kami dapat mematikan setiap pemakaian AI.

## Prompt AI

**Daftarkan pemakaian AI dari deskripsi perangkat kita.**

```text
Here is a description of the tools our team uses and what each does: [paste].
List which tools probably include AI features, what each might do, what data it might process, and a question to ask the vendor or owner. Mark clearly which items are guesses and do not state facts about vendors.
List what you are unsure of.
```

**Susun draf pertanyaan uji untuk asisten.**

```text
Our assistant answers questions about [topics] using only these documents: [list titles].
Write 30 test questions: 15 that the documents answer, 10 that they do not, and 5 that try to make the assistant ignore its instructions. For each, state the correct behavior. Do not include real personal data.
List what you are unsure of.
```

**Siapkan tinjauan pemakaian AI.**

```text
AI use: [describe]. Owner: [role]. Data used: [list]. Decisions it affects: [list].
Draft a one-page review with: purpose, what it may do alone, what needs human review, how errors are detected, how it is switched off, and open questions. Mark every item you could not fill from my description.
List what you are unsure of.
```

## Skill AI

- [prompt-engineering](../../../../skills/prompt-engineering/SKILL.md): gunakan untuk merancang prompt yang jelas, berdasar, dan dapat diuji.
- [machine-learning-model-card](../../../../skills/machine-learning-model-card/SKILL.md): gunakan untuk mendokumentasikan apa yang dilakukan model, datanya, dan batasnya.
- [risk-register](../../../../skills/risk-register/SKILL.md): gunakan untuk mencatat risiko AI, pemilik, dan keputusan.
- [itil-5](../../../../skills/itil-5/SKILL.md): gunakan untuk mengaitkan pemakaian AI dengan panduan terbaru dari pemilik, dengan klaim yang belum diverifikasi ditandai.
- [mlops](../../../../skills/mlops/SKILL.md): gunakan untuk mengelola model sepanjang siklus hidupnya.

## Sumber utama

- NIST, AI Risk Management Framework: struktur yang banyak dipakai untuk mengidentifikasi dan mengelola risiko AI.
- ISO/IEC 42001 (standar itu sendiri): persyaratan untuk sistem manajemen kecerdasan buatan; baca edisi terkini dari penerbitnya.
- PeopleCert, halaman sertifikasi ITIL: uraian pemilik tentang ITIL (Versi 5), termasuk AI.
- Wikipedia, "Artificial intelligence" dan "Large language model": ikhtisar bidang dan teknologinya.

## Referensi

1. Artificial intelligence — Wikipedia — https://en.wikipedia.org/wiki/Artificial_intelligence
2. Machine learning — Wikipedia — https://en.wikipedia.org/wiki/Machine_learning
3. Generative AI — Wikipedia — https://en.wikipedia.org/wiki/Generative_AI
4. Large language model — Wikipedia — https://en.wikipedia.org/wiki/Large_language_model
5. Hallucination (artificial intelligence) — Wikipedia — https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence)
6. Retrieval-augmented generation — Wikipedia — https://en.wikipedia.org/wiki/Retrieval-augmented_generation
7. Human-in-the-loop — Wikipedia — https://en.wikipedia.org/wiki/Human-in-the-loop
8. Automation bias — Wikipedia — https://en.wikipedia.org/wiki/Automation_bias
9. Algorithmic bias — Wikipedia — https://en.wikipedia.org/wiki/Algorithmic_bias
10. Artificial Intelligence Act — Wikipedia — https://en.wikipedia.org/wiki/Artificial_Intelligence_Act
11. ITIL Foundation Bridge (Version 5) — PeopleCert — https://www.peoplecert.org/browse-certifications/it-governance-and-service-management/ITIL-1/itil-foundation-bridge-version-5-4158
12. AI Risk Management Framework — NIST — https://www.nist.gov/itl/ai-risk-management-framework
