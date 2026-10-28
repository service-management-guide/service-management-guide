# Manajemen Layanan Agile

**Manajemen layanan agile menerapkan nilai-nilai agile pada desain dan perbaikan praktik manajemen layanan itu sendiri: setiap praktik memiliki pemilik yang bertindak seperti pemilik produk, backlog kecil berisi perbaikan, lingkar umpan balik pendek dengan orang yang memakai praktik itu, dan kontrol yang terbangun di dalam pekerjaan.**

## Mengapa ini penting

Praktik manajemen layanan sering dirancang sekali, dituliskan dalam dokumen proses, lalu ditegakkan. Dokumen itu menua seiring teknologi dan organisasi berubah. Orang menyiasati langkah yang tidak lagi masuk akal, dan praktik menyimpang dari apa yang tertulis di atas kertas. Merevisinya menjadi proyek dengan komite dan siklus panjang, dan ketika revisi itu tiba, ia sudah usang.

Jika gagasan agile baik untuk membangun perangkat lunak, ia seharusnya juga baik untuk merancang praktik yang mengatur bagaimana perangkat lunak dijalankan. Praktik seperti pemampuan perubahan dapat diperlakukan sebagai produk dengan pengguna, yaitu orang yang mengajukan dan menyetujui perubahan. Pemiliknya dapat mendengarkan pengguna tersebut, menyimpan backlog perbaikan kecil, merilisnya sering, dan memeriksa apakah membantu. Itulah yang dimaksud topik ini dengan manajemen layanan agile.

Gagasan ini sejalan dengan prinsip panduan ITIL 4, seperti "maju secara iteratif dengan umpan balik" dan "mulai dari posisi Anda sekarang" (lihat Topik 1.5 — Prinsip Panduan ITIL), dan cocok dengan fokus perbaikan berkelanjutan dari sistem nilai layanan. Uraian pemilik tentang versi ITIL terbaru menekankan pendekatan penciptaan nilai yang mengaitkan strategi, penyampaian, dan hasil terukur (lihat Topik 1.3 — ITIL 5). Praktik yang membaik dalam langkah kecil dan menunjukkan hasilnya sesuai dengan arah itu.

## Konsep inti

**Praktik sebagai produk.** Praktik seperti manajemen insiden melayani sekumpulan pengguna: penanggap, pelanggan, manajer, auditor. Pemilik praktik, yang bertindak seperti pemilik produk, bertanggung jawab atas seberapa baik praktik itu melayani mereka. Pemilik mengumpulkan umpan balik, menyimpan backlog perubahan praktik, dan memutuskan apa yang diubah selanjutnya. Lihat Topik 2.8 — Kepemilikan Produk dan Layanan.

**Backlog proses.** Daftar perbaikan praktik yang singkat dan berurutan: formulir yang disederhanakan, langkah yang dibuang, laporan yang dihentikan, otomatisasi baru. Butir berasal dari pengguna, dari tinjauan insiden, dan dari pengukuran. Artikel Wikipedia tentang backlog menjelaskan gagasannya. Pemilik meninjau daftar secara berkala bersama pengguna dan memilih beberapa butir untuk dicoba.

**Perubahan kecil dengan umpan balik.** Perubahan praktik dilakukan dalam potongan kecil dan dicoba dengan kelompok terbatas lebih dulu, misalnya satu tim atau satu jenis permintaan. Pemilik menanyakan kepada pengguna apa yang terjadi dan mempertahankan, menyesuaikan, atau membalik perubahan itu. Ini menggantikan penulisan ulang besar-besaran dokumen proses.

**Pengguna praktik.** Mereka yang harus mengikuti praktik adalah penggunanya yang utama. Pengalaman mereka penting: praktik yang tidak dapat mereka ikuti akan diabaikan atau dimanipulasi. Libatkan beberapa dari mereka dalam setiap perubahan.

**Kontrol di dalam pekerjaan.** Di mana praktik ada untuk mengelola risiko, seperti persetujuan perubahan berisiko, manajemen layanan agile lebih suka membangun kontrol ke dalam perangkat dan pipeline, yang menghasilkan bukti sebagai produk sampingan. Lihat Topik 2.2 — Pengiriman berkelanjutan dan Topik 3.4 — Pemampuan Perubahan.

**Dokumentasi ringan.** Deskripsikan praktik dalam satu atau dua halaman: tujuan, siapa yang terlibat, apa yang terjadi, cara meminta bantuan, dan cara memperbaikinya. Simpan rincian dalam perangkat dan panduan singkat yang mutakhir. Manual prosedur yang panjang jarang dibaca.

**Irama tinjauan.** Tetapkan waktu teratur, seperti bulanan, untuk meninjau backlog, ukuran, dan umpan balik, serta memutuskan apa yang diubah. Di antara tinjauan, perbaikan mendesak dapat dilakukan bila perlu.

**Eksperimen.** Perlakukan perubahan sebagai eksperimen dengan efek yang diharapkan dan tanggal pemeriksaan. Misalnya: "Kami memperkirakan menghapus persetujuan kedua untuk perubahan berisiko rendah akan memangkas lead time satu hari tanpa kegagalan yang lebih banyak. Kami akan memeriksa setelah empat minggu." Jika efeknya tidak terlihat, ubah kembali.

**Agile dan ITIL bersama-sama.** Manajemen layanan agile tidak membuang kerangka kerja. Ia memakai praktik ITIL sebagai sumber gagasan dan kosakata, dan menyesuaikannya. Di mana praktik adalah kontrol risiko dengan konsekuensi nyata, ia mempertahankan kontrol dan mengubah cara memenuhinya.

**Apa yang tidak dimaksudkannya.** Ia tidak berarti membuang dokumentasi, mengabaikan persyaratan audit, atau menjalankan seremoni demi seremoni itu sendiri. Jika tim Anda memilih memakai sprint atau Kanban untuk pekerjaan perbaikan, keduanya bisa cocok; intinya adalah siklus umpan balik dan perubahan kecil yang berkelanjutan.

**Bagaimana lensa-lensa cocok.** Backlog pemilik praktik adalah lensa agile yang diarahkan pada manajemen layanan itu sendiri. AI dapat menganalisis tiket dan umpan balik untuk menyarankan perbaikan, di bawah tinjauan. Otomatisasi mengubah aturan praktik menjadi perilaku perangkat. Analitik menunjukkan apakah praktik berfungsi.

## Praktik terbaik

1. **Tunjuk pemilik praktik.** Setiap praktik utama memiliki satu orang yang bertanggung jawab atas mutu dan perbaikannya. Pemilik adalah pengguna praktik sekaligus perancangnya.
2. **Mulai dari kesulitan pengguna.** Tanyakan kepada orang yang mengikuti praktik apa yang lambat, tidak jelas, atau tidak berguna, dan daftarkan jawabannya. Mulailah dari yang mereka angkat, bukan dari yang disarankan kerangka kerja.
3. **Pelihara backlog yang singkat dan terlihat.** Tunjukkan di tempat yang dapat dilihat pengguna. Batasi jumlah butir yang sedang berjalan, dan selesaikan sebelum memulai yang lain.
4. **Ubah dalam langkah kecil.** Coba setiap perubahan dengan satu tim atau satu jenis permintaan, dengan ekspektasi yang dinyatakan dan tanggal tinjauan.
5. **Ukur efeknya.** Pilih satu atau dua indikator untuk setiap perubahan, seperti waktu untuk menyetujui atau persentase permintaan yang dikembalikan karena informasi kurang. Katakan bagaimana ukuran itu bisa menyesatkan.
6. **Bangun kontrol ke dalam perangkat.** Bila mungkin, jadikan tindakan yang aman sebagai bawaan, seperti kolom wajib atau pemeriksaan otomatis, dan catat bukti secara otomatis.
7. **Tulis lebih sedikit, tautkan lebih banyak.** Jaga deskripsi praktik tetap singkat, tautkan ke perangkat dan contoh, dan buang halaman yang tidak dibaca siapa pun.
8. **Tinjau secara berirama.** Adakan tinjauan bulanan singkat dengan beberapa pengguna, dan umumkan apa yang berubah dan mengapa.
9. **Hormati persyaratan yang nyata.** Periksa dengan audit, keamanan, dan hukum ketika perubahan menyentuh kontrol, dan libatkan mereka sejak dini agar Anda dapat menjelaskan bagaimana metode baru memenuhi tujuannya.
10. **Pensiunkan yang tidak membantu.** Buang langkah, formulir, dan laporan yang tidak menunjukkan nilai, dan nyatakan secara terbuka.

## Pertanyaan untuk dibahas bersama tim Anda

**Praktik kita yang mana yang disiasati orang, dan mengapa?**
Siasat menunjukkan di mana praktik tidak cocok dengan pekerjaan. Minta contoh spesifik, seperti formulir yang diisi dengan "n/a". Jangan langsung memperlakukannya sebagai ketidakpatuhan. Lanjutkan dengan memilih satu siasat dan menanyakan perubahan apa yang akan mempermudah jalur resmi.

**Siapa yang memiliki setiap praktik kita, dan bagaimana mereka mendengar dari orang yang memakainya?**
Banyak praktik tidak punya pemilik dan jalur umpan balik. Tanyakan kapan terakhir kali pemilik berbicara dengan pengguna. Harapkan keheningan. Lanjutkan dengan menyepakati percakapan teratur dengan beberapa pengguna.

**Apa perubahan terkecil pada satu praktik yang dapat kita coba minggu depan, dan bagaimana kita tahu itu membantu?**
Pertanyaan ini mendorong eksperimen kecil. Tim sering mengusulkan perancangan ulang. Desak untuk sesuatu yang sangat kecil, dengan ukuran dan tanggal tinjauan. Lanjutkan dengan menyebut pemilik dan pemeriksanya.

**Kontrol kita yang mana yang dapat dipenuhi oleh perangkat atau pipeline sebagai ganti rapat atau formulir?**
Cari kontrol yang bergantung pada orang yang mengingat. Tanyakan bukti apa yang dibutuhkan auditor. Lanjutkan dengan mencoba satu kontrol otomatis dengan melibatkan pemilik kontrol.

**Seberapa panjang dokumentasi praktik kita, dan siapa yang membacanya?**
Periksa apakah dokumen dipakai. Tanyakan kepada karyawan baru apa yang mereka baca. Harapkan manual panjang yang tidak dibuka siapa pun. Lanjutkan dengan menyusun versi satu halaman dari satu praktik dan mengujinya dengan karyawan baru.

**Bagaimana AI dapat membantu kita melihat apa yang tidak berfungsi dalam praktik kita, dan apa yang ingin kita periksa secara manual?**
AI dapat menemukan pola dalam tiket dan umpan balik. Ia juga dapat menemukan pola yang merupakan artefak dari cara orang mengisi kolom. Tanyakan siapa yang akan membaca sampel. Lanjutkan dengan membandingkan analisis AI atas tiket satu bulan dengan tinjauan manual.

## Dalam praktik: contoh manajemen layanan

Departemen TI sebuah universitas memiliki praktik pemampuan perubahan dengan dewan tinjauan mingguan. Staf mengatakan formulirnya panjang dan dewan menambah satu minggu pada setiap perubahan. Auditor menghargainya, karena menyediakan catatan. Pemilik praktik, seorang manajer layanan senior, memutuskan memperlakukannya sebagai produk.

Ia mewawancarai delapan orang yang mengajukan perubahan dalam sebulan terakhir dan menghadiri satu rapat dewan. Ia mendapati bahwa 70 persen perubahan bersifat rutin dan berisiko rendah, bahwa formulir memiliki 22 kolom yang hanya delapan di antaranya yang pernah dibaca, dan bahwa dewan sebagian besar menyetujui apa yang dilihatnya. Ia membuat backlog singkat: memperpendek formulir, mendefinisikan kategori "perubahan standar" yang disetujui sebelumnya berdasarkan risiko, bukan lewat rapat, dan menautkan setiap catatan perubahan ke hasil pengujian otomatis.

Ia mencoba formulir yang lebih pendek dengan satu tim selama empat minggu, dengan ekspektasi bahwa waktu rata-rata dari permintaan hingga persetujuan untuk perubahan standar akan turun dari enam hari menjadi dua. Ia meminta auditor internal meninjau aturan perubahan standar yang diusulkan. Auditor meminta pemeriksaan sampel dan tinjauan bulanan atas kegagalan. Tim setuju. Setelah empat minggu rata-ratanya turun menjadi di bawah dua hari, dan jumlah perubahan yang gagal tidak naik.

Yang berubah: dewan kini menghabiskan waktunya pada 30 persen perubahan yang berisiko nyata, dan catatan dihasilkan dari pipeline. Yang masih sulit: tim lain memakai perangkat berbeda yang tidak dapat menunjukkan hasil pengujian, sehingga catatan mereka tetap manual; pengambilan sampel oleh auditor menambah pekerjaan yang belum dialokasikan sumber dayanya; dan sebagian anggota dewan merindukan ritual mingguan yang lama dan merasa peran mereka menyusut. Pemilik mempertahankan tinjauan bulanan dan meminta gagasan dari dewan.

## Empat perspektif

### Tim produk dan pengiriman

Anda adalah pengguna utama praktik perubahan dan rilis. Berikan umpan balik sejak dini, ikuti uji coba, dan bangun kontrol ke dalam pipeline Anda agar praktik dapat mengandalkan bukti.

### Tim layanan dan operasi

Anda sering memiliki praktiknya. Bertindaklah sebagai pemilik produk: dengarkan pengguna, simpan backlog singkat, dan coba perubahan kecil. Bagikan hasil dan pensiunkan langkah yang tidak membantu.

### Kepemimpinan dan tata kelola

Minta backlog praktik, ukuran, dan umpan balik yang telah didengar para pemilik. Dukung perubahan yang mengganti kontrol manual dengan kontrol bawaan, setelah melibatkan audit dan risiko. Jangan menuntut dokumen panjang.

### Pelanggan dan pengguna

Ketika suatu praktik memengaruhi Anda, seperti formulir permintaan, Anda seharusnya dapat mengatakan apa yang canggung dan melihatnya membaik. Tanyakan siapa pemiliknya dan bagaimana memberi umpan balik.

## Agile, AI, otomatisasi, dan analitik

### Agile

Topik ini adalah lensa agile yang diterapkan pada praktik: langkah kecil, keterlibatan pemangku kepentingan, tinjauan teratur, dan perbaikan berkelanjutan. Perhatian: jangan menjalankan ritual agile di sekitar praktik; pertahankan fokus pada umpan balik dan perubahan kecil.

### AI

AI dapat menganalisis tiket dan umpan balik untuk menyarankan perbaikan, menyusun deskripsi praktik satu halaman, dan memeriksa teks baru terhadap aturan sumbernya, dengan seseorang meninjau. Setiap pemakaian memerlukan pemilik. Perhatian: AI dapat menulis prosedur yang rapi yang tidak diikuti siapa pun; uji dengan pengguna nyata. Lihat Topik 5.1 — AI dalam manajemen layanan.

### Otomatisasi

Ubah aturan praktik menjadi perilaku perangkat: perutean, kolom wajib, persetujuan otomatis untuk perubahan berisiko rendah, dan penangkapan bukti. Simpan log dan cara untuk membalik perubahan. Perhatian: menanamkan aturan yang cacat dalam otomatisasi mengerasnya; coba aturannya secara manual lebih dulu. Lihat Topik 6.2 — Otomatisasi alur kerja dan orkestrasi.

### Analitik

Gunakan beberapa indikator tentang kinerja setiap praktik, seperti waktu untuk menyetujui, pengerjaan ulang, dan kepuasan pengguna. Perhatian: menghitung kepatuhan, seperti "persentase perubahan dengan formulir lengkap", bisa dimanipulasi dan sedikit berbicara tentang apakah praktik membantu; lihat Topik 7.3 — Pengukuran dan pelaporan dan buku *Service Management Metrics*.

## Mode kegagalan umum

- **Perancangan ulang praktik sebagai proyek.** Komite menulis ulang proses selama berbulan-bulan. Buat perubahan kecil dengan umpan balik.
- **Tidak ada pemilik praktik.** Tak seorang pun memperbaikinya. Tunjuk pemilik.
- **Pemilik tidak pernah berbicara dengan pengguna.** Praktik menyimpang. Jadwalkan percakapan teratur.
- **Membuang kontrol tanpa pengganti.** Keberatan risiko dan audit menyusul. Penuhi tujuan kontrol dalam perangkat.
- **Dokumen panjang.** Tak seorang pun membacanya. Tulis satu halaman dan tautkan ke rinciannya.
- **Hanya mengukur kepatuhan.** Orang mengisi formulir dan tidak ada yang membaik. Ukur hasil dan pengalaman.
- **Seremoni tanpa perubahan.** Rapat berlangsung dan backlog tidak bergerak. Batasi pekerjaan yang sedang berjalan dan selesaikan butir.

## Model kematangan

| Dimensi | Memulai | Mengembangkan | Menstandardisasi | Mengelola | Mengorkestrasi |
|---|---|---|---|---|---|
| Kepemilikan praktik | Tidak ada pemilik | Pemilik untuk praktik utama | Setiap praktik memiliki pemilik dan backlog | Pemilik meninjau hasil bersama pengguna | Pemilik berkoordinasi lintas praktik dan mitra |
| Perubahan pada praktik | Penulisan ulang besar yang jarang | Perbaikan sesekali | Eksperimen kecil teratur dengan tinjauan | Hasil diukur dan ditindaklanjuti | Eksperimen dibagikan di seluruh organisasi |
| Kontrol | Manual dan lewat rapat | Sebagian bawaan | Kontrol standar terbangun dalam perangkat | Bukti disampel dan ditinjau | Kontrol diotomatiskan dan disesuaikan dengan risiko |
| Dokumentasi | Manual panjang | Beberapa panduan singkat | Deskripsi satu halaman yang dijaga mutakhir | Pemakaian dokumen diperiksa | Panduan bersama yang dapat dicari dalam konteks |

## Daftar periksa

- [ ] Setiap praktik utama memiliki pemilik yang ditunjuk.
- [ ] Setiap pemilik menyimpan backlog yang singkat dan terlihat.
- [ ] Kami berbicara dengan pengguna setiap praktik secara teratur.
- [ ] Kami mencoba perubahan dalam langkah kecil dengan ukuran dan tanggal tinjauan.
- [ ] Kontrol dibangun ke dalam perangkat bila memungkinkan.
- [ ] Audit dan risiko dilibatkan ketika kontrol berubah.
- [ ] Deskripsi praktik singkat dan mutakhir.
- [ ] Kami mempensiunkan langkah yang tidak membantu dan menyatakannya.

## Prompt AI

**Analisis umpan balik tentang sebuah praktik.**

```text
Here is feedback from people who follow our [practice name] practice, with names removed: [paste feedback].
Group it into up to six themes, count each, quote two short examples per theme, and list questions the owner should ask. Do not suggest solutions.
List what you are unsure of.
```

**Susun draf deskripsi praktik satu halaman.**

```text
Here is the current description of our [practice] practice: [paste text].
Draft a one-page version with: purpose, who is involved, what happens, how to ask for help, and how it is improved. Keep every rule that appears in the original; mark any rule you are unsure how to phrase. Do not add rules.
List what you are unsure of.
```

**Rencanakan eksperimen kecil.**

```text
We want to change [practice step] to [proposed change]. Our current measure: [describe]. The people affected: [list].
Write an experiment plan: expectation, one or two measures, how each could mislead, who to involve, how long to run it, and what would make us reverse it. Do not claim the change will work.
List what you are unsure of.
```

## Skill AI

- [agile-principles](../../../../skills/agile-principles/SKILL.md): gunakan untuk memeriksa perubahan praktik terhadap nilai-nilai agile.
- [kaizen](../../../../skills/kaizen/SKILL.md): gunakan untuk merencanakan eksperimen perbaikan kecil.
- [change-request](../../../../skills/change-request/SKILL.md): gunakan untuk merancang catatan perubahan yang lebih ringan.
- [workflow-analysis](../../../../skills/workflow-analysis/SKILL.md): gunakan untuk menganalisis langkah dan penantian sebuah praktik.

## Sumber utama

- PeopleCert, halaman sertifikasi ITIL: uraian pemilik tentang panduan ITIL dan versi terbarunya.
- Wikipedia, "Backlog": latar belakang tentang daftar yang menggerakkan perbaikan.
- Wikipedia, "Continual improvement process": gagasan perubahan yang berkelanjutan.
- Wikipedia, "Agile management": penerapan gagasan agile pada manajemen.

## Referensi

1. Agile management — Wikipedia — https://en.wikipedia.org/wiki/Agile_management
2. Backlog — Wikipedia — https://en.wikipedia.org/wiki/Backlog
3. Continual improvement process — Wikipedia — https://en.wikipedia.org/wiki/Continual_improvement_process
4. Business process — Wikipedia — https://en.wikipedia.org/wiki/Business_process
5. Feedback — Wikipedia — https://en.wikipedia.org/wiki/Feedback
6. Agile software development — Wikipedia — https://en.wikipedia.org/wiki/Agile_software_development
7. ITIL — Wikipedia — https://en.wikipedia.org/wiki/ITIL
8. IT service management — Wikipedia — https://en.wikipedia.org/wiki/IT_service_management
9. Self-organization — Wikipedia — https://en.wikipedia.org/wiki/Self-organization
10. ITIL Foundation Bridge (Version 5) — PeopleCert — https://www.peoplecert.org/browse-certifications/it-governance-and-service-management/ITIL-1/itil-foundation-bridge-version-5-4158
