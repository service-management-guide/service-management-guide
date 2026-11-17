# Manajemen Rilis dan Deployment

**Manajemen rilis dan deployment memisahkan dua keputusan yang dulu menjadi satu: kapan kode ditempatkan pada sistem produksi (deployment) dan kapan perilakunya tersedia bagi pengguna (rilis); memisahkannya, dengan feature flag, peluncuran bertahap, dan catatan rilis yang jelas, membuat perubahan lebih aman dan lebih tenang.**

## Mengapa ini penting

Hari peluncuran menegangkan karena terlalu banyak hal terjadi sekaligus. Kode baru dipasang, fitur baru dinyalakan, pengguna bertemu dengannya untuk pertama kali, dan tim dukungan mengetahuinya dari keluhan pertama. Jika ada yang salah, semuanya terbelit, dan satu-satunya jalan kembali mungkin berupa rollback yang membatalkan semuanya.

Tim yang memisahkan deployment dari rilis menghindari sebagian besar hal itu. Kode masuk ke produksi dengan tenang, dalam keadaan mati, beberapa hari sebelum pengguna melihatnya. Ketika tim siap, sebuah flag menyalakan fitur untuk kelompok kecil, lalu lebih banyak. Jika ada yang salah, flag mematikannya dalam hitungan detik. Deployment, yang merupakan tindakan teknis, terjadi menurut jadwal insinyur. Rilis, yang merupakan tindakan bisnis dan pelanggan, terjadi ketika organisasi siap.

Topik ini menjelaskan kedua gagasan itu, teknik yang mendukungnya, dan praktik yang menjaga pengguna, staf dukungan, dan auditor tetap terinformasi. Ia dibangun di atas pengiriman berkelanjutan (Topik 2.2 — Pengiriman berkelanjutan) dan pemampuan perubahan (Topik 3.4 — Pemampuan Perubahan), dan terhubung dengan manajemen konfigurasi (Topik 4.4 — Manajemen Konfigurasi) dan manajemen pengetahuan (Topik 3.9 — Manajemen Pengetahuan).

## Konsep inti

**Deployment.** Tindakan memindahkan perangkat lunak, konfigurasi, atau komponen lain ke suatu lingkungan, seperti uji atau produksi. Artikel Wikipedia tentang software deployment menjelaskan aktivitas yang terlibat. Deployment adalah operasi teknis yang menaruh sesuatu di tempat ia dapat berjalan.

**Rilis.** Membuat layanan, fitur, atau versi tersedia untuk dipakai. Rilis dapat terjadi pada saat yang sama dengan deployment atau kemudian. ITIL 4 menjelaskan "manajemen rilis" sebagai praktik membuat layanan dan fitur baru dan yang berubah tersedia untuk dipakai, dan "manajemen deployment" sebagai memindahkan komponen ke lingkungan hidup.

**Mengapa dipisahkan.** Risiko deployment adalah tentang apakah kode berjalan dan berperilaku benar. Risiko rilis adalah tentang apakah pengguna, dukungan, dan bisnis siap. Melakukan keduanya pada waktu berbeda memungkinkan Anda mengelola setiap risiko dengan orang dan alat yang tepat.

**Feature flag.** Juga disebut feature toggle, adalah sakelar di dalam kode atau di sistem kendali yang mengaktifkan atau menonaktifkan fitur pada saat berjalan, tanpa deployment baru. Wikipedia menjelaskan feature toggle dan penggunaannya. Flag dapat per pengguna, per kelompok, per persentase lalu lintas, atau global. Perlu kehati-hatian: flag lama menumpuk dan menjadi kompleksitas tersembunyi.

**Peluncuran bertahap.** Merilis ke kelompok kecil lebih dulu dan memperluas secara bertahap. Variasinya mencakup pengguna internal lebih dulu, persentase kecil lalu lintas, satu wilayah, atau pelanggan percontohan. Setiap tahap memberi umpan balik sebelum lebih banyak orang terpapar.

**Blue–green dan rolling deployment.** Dalam blue–green deployment, ada dua lingkungan produksi; satu melayani pengguna sementara yang lain menerima versi baru, dan lalu lintas dialihkan ketika siap, dengan peralihan kembali yang cepat bila perlu. Dalam rolling deployment, instans diperbarui beberapa pada satu waktu. Wikipedia menjelaskan keduanya. Masing-masing memiliki pertukaran dalam biaya, kompleksitas, dan penanganan data.

**Kesiapan rilis.** Sekumpulan singkat pertanyaan yang dijawab sebelum rilis: apakah pengujian lolos; apakah pemantauan mencakup perilaku baru; apakah staf dukungan tahu apa yang berubah dan bagaimana membantu; apakah dokumentasi dan artikel pengetahuan siap; apakah ada rencana rollback; dan apakah bisnis menyetujui tanggalnya. Jaga agar singkat dan terkait dengan risiko nyata.

**Catatan rilis.** Deskripsi tentang apa yang berubah, ditulis untuk orang yang perlu tahu. Audiens berbeda membutuhkan catatan berbeda: pengguna ingin tahu apa yang baru atau berbeda; staf dukungan ingin tahu apa yang diharapkan; operasi ingin tahu apa yang berubah secara teknis. Artikel Wikipedia tentang release notes dan changelog menjelaskan bentuk yang umum.

**Pemberian versi.** Skema penamaan versi agar orang dapat membicarakannya. Semantic versioning, salah satu skema populer yang dijelaskan di bawah software versioning di Wikipedia, memakai nomor mayor, minor, dan patch untuk menandai jenis perubahan. Pilih skema dan terapkan secara konsisten.

**Perubahan data.** Perubahan pada struktur dan data basis data lebih sulit dibalik daripada perubahan kode. Pola seperti membuat perubahan kompatibel ke belakang, menjalankan struktur lama dan baru berdampingan, dan bermigrasi dalam langkah kecil mengurangi risiko. Wikipedia menjelaskan schema migration.

**Hotfix dan patch.** Perbaikan mendesak yang dibuat di luar siklus normal, biasanya untuk memperbaiki kesalahan serius atau kerentanan. Mereka memerlukan rute yang dipercepat dengan disiplin yang sama: uji, tinjau, deploy melalui pipeline, dan catat. Lihat Topik 3.4 — Pemampuan Perubahan.

**Lingkungan.** Lingkungan uji, staging, dan produksi, masing-masing dengan tujuan. Semakin mirip lingkungan uji dengan produksi, semakin andal pengujiannya. Artikel Wikipedia tentang deployment environment menjelaskan susunan yang umum.

**Rantai pasok perangkat lunak.** Rilis mencakup komponen dari pihak lain, seperti pustaka dan citra kontainer. Software bill of materials mendaftarnya, yang membantu dalam menanggapi kerentanan. Lihat Topik 4.2 — Manajemen Aset Perangkat Lunak.

**Bagaimana lensa-lensa cocok.** Praktik rilis adalah lensa agile pada titik kontak dengan pengguna: rilis kecil dengan umpan balik. AI dapat menyusun catatan rilis dan merangkum perubahan, di bawah tinjauan. Otomatisasi menjalankan pipeline dan peluncuran. Analitik menunjukkan bagaimana rilis berperilaku.

## Praktik terbaik

1. **Deploy kecil dan sering.** Taruh perubahan di produksi dalam potongan kecil, di balik flag bila berguna. Deployment yang sering membuat masing-masing berisiko rendah dan rutin.
2. **Rilis dengan tujuan.** Putuskan bersama bisnis kapan pengguna harus melihat fitur, dan pakai flag atau peluncuran bertahap untuk mengendalikannya. Jangan biarkan jadwal deployment mendikte rilis.
3. **Luncurkan secara bertahap.** Mulai dengan kelompok kecil yang terinformasi, amati indikator, dan perluas. Definisikan di muka apa yang akan Anda lihat dan apa yang akan membuat Anda berhenti.
4. **Jaga agar flag tetap rapi.** Catat tujuan, pemilik, dan tanggal penghapusan setiap flag. Hapus flag setelah peluncuran. Uji kedua keadaan selama flag hidup.
5. **Buat jalan kembali cepat.** Ketahui cara mematikan flag, rollback, atau failover, dan latih. Untuk perubahan data, rencanakan langkah yang kompatibel ke depan.
6. **Siapkan dukungan sebelum rilis.** Beri service desk catatan rilis, panduan singkat, dan masalah yang diketahui sebelum pengguna melihat perubahan. Tanyakan apa yang mereka butuhkan.
7. **Tulis catatan rilis untuk pembacanya.** Katakan apa yang berubah dalam istilah pengguna, apa yang diharapkan, dan di mana mendapat bantuan. Simpan rincian teknis dalam catatan terpisah.
8. **Periksa kesiapan secara singkat.** Pakai daftar periksa singkat yang konsisten untuk rilis signifikan. Lewati untuk yang rutin yang sudah dicakup pipeline.
9. **Amati rilis.** Pantau tingkat kesalahan, kinerja, dan indikator pengguna selama dan setelah peluncuran, dan tugaskan seseorang untuk mengamati. Catat apa yang Anda lihat.
10. **Catat apa yang dirilis.** Simpan catatan versi, tanggal, dan keadaan flag, yang membantu dalam insiden dan audit. Hasilkan dari pipeline bila bisa.

## Pertanyaan untuk dibahas bersama tim Anda

**Apa beda deploy dan rilis di organisasi kita, dan siapa yang memutuskan masing-masing?**
Di banyak tim keduanya adalah peristiwa yang sama. Tanyakan siapa yang memutuskan menaruh kode di produksi dan siapa yang memutuskan kapan pengguna melihatnya. Harapkan jawaban yang kabur. Lanjutkan dengan memilih satu fitur untuk dipisahkan.

**Seberapa cepat kita bisa mematikan fitur baru jika menyebabkan kerugian?**
Uji jawabannya. Beberapa tim dapat mematikan flag dalam hitungan detik; yang lain memerlukan deployment baru dan persetujuan. Tanyakan kapan terakhir kali. Lanjutkan dengan memilih satu fitur berisiko dan merencanakan sakelar mati yang cepat.

**Apa yang diketahui tim dukungan kita tentang rilis sebelum pengguna melihatnya?**
Tanyakan kepada service desk. Harapkan "tidak ada sampai panggilan pertama". Lanjutkan dengan menyepakati paket informasi standar dan waktunya, seperti 48 jam sebelumnya.

**Feature flag mana yang kita miliki, dan mana yang seharusnya sudah hilang?**
Daftar flag sering menunjukkan banyak yang tidak diingat siapa pun. Tanyakan siapa pemilik masing-masing. Lanjutkan dengan menjadwalkan penghapusan yang tertua dan menambahkan kolom pemilik.

**Bagaimana kita merilis perubahan yang memengaruhi basis data, dan apa yang terjadi jika kita perlu kembali?**
Perubahan data menyebabkan kejutan terburuk. Minta migrasi terakhir dan rencana rollback-nya. Lanjutkan dengan menyepakati pola, seperti perubahan yang kompatibel ke belakang dalam dua langkah.

**Di mana AI dapat membantu dengan catatan rilis atau kesiapan, dan apa yang harus diverifikasi seseorang?**
AI dapat menyusun catatan dari pesan commit dan tiket. Ia dapat keliru menyatakan apa yang berubah. Tanyakan siapa yang membaca draf dan membandingkannya dengan perubahan. Lanjutkan dengan menguji draf AI untuk catatan internal, dengan seseorang menyetujui masing-masing.

## Dalam praktik: contoh manajemen layanan

Katalog daring sebuah perpustakaan nasional dipakai peneliti di seluruh dunia. Tim merilis halaman pencarian yang didesain ulang. Sebelumnya, perubahan seperti ini akan tayang pada Selasa malam dengan pengumuman singkat. Kali ini pemilik layanan meminta peluncuran bertahap.

Tim men-deploy halaman baru ke produksi seminggu lebih awal, dalam keadaan mati. Lalu mengaktifkannya untuk staf internal, dan hari berikutnya untuk 5 persen pengunjung yang dipilih acak. Pemimpin rilis mengamati tingkat keberhasilan pencarian dan jumlah kesalahan, dan service desk menerima panduan satu halaman serta daftar singkat masalah yang diketahui dua hari sebelumnya. Pada hari ketiga, seorang peneliti dalam kelompok percontohan melaporkan bahwa pencarian dengan karakter non-Inggris tertentu gagal. Tim mematikan flag untuk semua pengguna dalam satu menit, memperbaiki masalah pada pagi berikutnya, dan memulai ulang peluncuran pada 5 persen. Dua minggu kemudian, halaman baru tersedia untuk semua orang, dan flag dijadwalkan untuk dihapus.

Yang berubah: kegagalan memengaruhi segelintir pengguna selama sehari, dan meja dukungan siap menghadapi pertanyaan. Yang masih sulit: sistem flag berada di perangkat terpisah yang aksesnya tidak dikendalikan ketat, sehingga tim meminta tinjauan; catatan rilis ditulis pengembang dan para peneliti merasa membingungkan; dan pemeliharaan ganda halaman pencarian lama dan baru memakan sekitar seminggu usaha. Pemilik menambahkan penyunting yang menghadap pengguna pada langkah catatan rilis.

## Empat perspektif

### Tim produk dan pengiriman

Rancang untuk deployment dan rilis yang terpisah: pakai flag, buat perubahan data kompatibel, dan rencanakan jalan kembali. Amati rilis Anda sendiri, dan tulis catatan yang dapat dipahami pengguna dan dukungan.

### Tim layanan dan operasi

Bantu mendefinisikan kesiapan, pemantauan, dan rollback. Minta informasi rilis lebih awal dan beri tahu pengembang apa yang Anda butuhkan. Jaga akurasi catatan tentang apa yang ada di produksi.

### Kepemimpinan dan tata kelola

Putuskan waktu rilis bersama bisnis, bukan menurut kalender deployment. Danai pipeline dan perangkat flag. Minta peluncuran bertahap untuk fitur berdampak tinggi, dan hindari tekanan untuk merilis pada tanggal tetap terlepas dari kesiapan.

### Pelanggan dan pengguna

Anda seharusnya mendengar tentang perubahan yang penting dalam istilah yang Anda pahami, dan dapat melaporkan masalah dengan mudah. Jika Anda ikut akses awal, harapkan diminta umpan balik dan beri tahu tim apa yang Anda lihat.

## Agile, AI, otomatisasi, dan analitik

### Agile

Rilis kecil yang sering dengan pengguna nyata terlibat pada tahap awal memberi umpan balik cepat. Perlakukan setiap rilis sebagai langkah belajar dan sesuaikan yang berikutnya. Perhatian: jangan merilis fitur yang tidak diinginkan pengguna hanya karena pipeline bisa; periksa nilainya bersama pengguna.

### AI

AI dapat menyusun catatan rilis dari perubahan dan tiket, merangkum umpan balik setelah peluncuran, dan menyarankan apa yang diamati. Tunjuk pemilik, dan minta seseorang membandingkan draf dengan perubahan sebelum diterbitkan. Perhatian: catatan rilis yang meyakinkan tetapi salah menyesatkan pengguna dan dukungan; periksa terhadap perubahan yang sebenarnya. Lihat Topik 5.4 — AI generatif untuk insiden, pengetahuan, dan perubahan.

### Otomatisasi

Otomatiskan deployment, peluncuran bertahap, pemeriksaan kesehatan, penghentian otomatis pada indikator buruk, dan rollback, dengan log dan penimpaan manual. Perhatian: aturan peluncuran otomatis yang terpicu oleh indikator buruk dapat salah tembak; uji, dan jaga agar seseorang tetap terinformasi. Lihat Topik 6.4 — Pipeline dan perubahan otomatis.

### Analitik

Bandingkan indikator antara kelompok yang dirilis dan yang lain selama peluncuran, seperti kesalahan, keberhasilan tugas, dan keluhan. Perhatian: kelompok kecil memberi hasil yang bising, dan membandingkan tanpa hati-hati dapat menyesatkan; sepakati apa yang akan Anda lihat dan berapa lama menunggu. Lihat Topik 7.3 — Pengukuran dan pelaporan dan buku *Service Management Metrics*.

## Mode kegagalan umum

- **Rilis dan deployment terikat.** Setiap peluncuran berisiko. Pisahkan dengan flag dan peluncuran bertahap.
- **Flag yang tidak dimiliki siapa pun.** Kode dipenuhi jalur mati. Catat pemilik dan tanggal penghapusan.
- **Tidak ada jalan kembali yang cepat.** Rilis buruk berlangsung berjam-jam. Latih rollback dan sakelar flag.
- **Dukungan tahu dari panggilan pertama.** Desk tidak siap. Beri catatan dan panduan sebelumnya.
- **Catatan rilis ditulis untuk pengembang.** Pengguna tidak dapat membacanya. Tulis untuk audiensnya.
- **Perubahan data tidak direncanakan.** Rollback mustahil. Pakai langkah kecil yang kompatibel.
- **Tidak mengamati apa-apa.** Masalah ditemukan oleh pengguna. Tunjuk pengamat dan tetapkan indikator.

## Model kematangan

| Dimensi | Memulai | Mengembangkan | Menstandardisasi | Mengelola | Mengorkestrasi |
|---|---|---|---|---|---|
| Pemisahan deploy dan rilis | Peristiwa yang sama | Beberapa flag dipakai | Flag dan peluncuran bertahap untuk fitur signifikan | Keputusan peluncuran berdasarkan data | Peluncuran diotomatiskan dengan pagar pengaman lintas layanan |
| Rollback | Lambat dan manual | Didokumentasikan | Rute cepat yang dilatih | Waktu pemulihan diukur | Otomatis dan diuji secara teratur |
| Komunikasi | Diumumkan saat peluncuran | Catatan untuk sebagian rilis | Catatan untuk setiap audiens, dukungan diberi pengarahan sebelumnya | Catatan diuji bersama pembaca | Komunikasi terintegrasi dengan pipeline dan kanal |
| Catatan | Ingatan dan email | Lembar kerja | Dihasilkan dari pipeline | Dipakai dalam tinjauan dan audit | Terkait lintas versi, flag, dan insiden |

## Daftar periksa

- [ ] Kami memisahkan deployment dari rilis untuk perubahan signifikan.
- [ ] Feature flag memiliki pemilik dan tanggal penghapusan.
- [ ] Kami meluncurkan secara bertahap dengan indikator dan kriteria berhenti yang terdefinisi.
- [ ] Kami tahu cara mematikan atau rollback dengan cepat, dan telah melatihnya.
- [ ] Dukungan menerima informasi rilis sebelum pengguna.
- [ ] Catatan rilis ditulis untuk pembacanya.
- [ ] Perubahan data dibuat dalam langkah yang kompatibel dan dapat dibalik.
- [ ] Catatan tentang apa yang dirilis dihasilkan dari pipeline.

## Prompt AI

**Susun draf catatan rilis untuk ditinjau.**

```text
Here are the changes in this release: [paste list of changes with ticket titles]. The audience is [users, support staff, or operations].
Draft release notes of under 200 words in plain language, grouped by what users will notice, and list items you could not describe without guessing. Do not add features or dates that are not in the list.
List what you are unsure of.
```

**Siapkan daftar periksa kesiapan rilis.**

```text
Our release: [describe]. Risks we know of: [list]. Our usual checks: [list].
Draft a checklist of up to ten yes/no questions to answer before release, with who answers each. Keep it short and tied to the listed risks.
List what you are unsure of.
```

**Rencanakan peluncuran bertahap.**

```text
Our feature: [describe]. Our users: [groups and sizes]. Indicators we can measure: [list].
Propose three stages with the audience, what to watch, how long, and what would make us stop. Note what the indicators cannot tell us. Do not claim any stage is safe.
List what you are unsure of.
```

## Skill AI

- [release-notes](../../../../skills/release-notes/SKILL.md): gunakan untuk menulis catatan rilis bagi setiap audiens.
- [changelog](../../../../skills/changelog/SKILL.md): gunakan untuk menyimpan riwayat perubahan yang jelas.
- [shift-left-testing](../../../../skills/shift-left-testing/SKILL.md): gunakan untuk menguji lebih awal dalam pipeline.
- [runbook](../../../../skills/runbook/SKILL.md): gunakan untuk mendokumentasikan langkah peluncuran dan rollback.

## Sumber utama

- Jez Humble dan David Farley, *Continuous Delivery* (2010): dasar untuk pipeline deployment dan teknik rilis.
- PeopleCert, halaman sertifikasi ITIL: uraian pemilik tentang praktik manajemen rilis dan deployment.
- Wikipedia, "Software deployment" dan "Feature toggle": ikhtisar gagasan utamanya.
- Wikipedia, "Release management": latar belakang disiplin ini.

## Referensi

1. Release management — Wikipedia — https://en.wikipedia.org/wiki/Release_management
2. Software deployment — Wikipedia — https://en.wikipedia.org/wiki/Software_deployment
3. Software release life cycle — Wikipedia — https://en.wikipedia.org/wiki/Software_release_life_cycle
4. Feature toggle — Wikipedia — https://en.wikipedia.org/wiki/Feature_toggle
5. Blue–green deployment — Wikipedia — https://en.wikipedia.org/wiki/Blue%E2%80%93green_deployment
6. Release notes — Wikipedia — https://en.wikipedia.org/wiki/Release_notes
7. Changelog — Wikipedia — https://en.wikipedia.org/wiki/Changelog
8. Software versioning — Wikipedia — https://en.wikipedia.org/wiki/Software_versioning
9. Schema migration — Wikipedia — https://en.wikipedia.org/wiki/Schema_migration
10. Deployment environment — Wikipedia — https://en.wikipedia.org/wiki/Deployment_environment
11. Continuous delivery — Wikipedia — https://en.wikipedia.org/wiki/Continuous_delivery
