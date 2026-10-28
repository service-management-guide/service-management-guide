# Ketersediaan, Kapasitas, dan Kinerja

**Manajemen ketersediaan, kapasitas, dan kinerja menjaga layanan tetap dapat dipakai, cukup besar, dan cukup cepat untuk permintaan yang dihadapinya; ketiganya berhasil ketika target berasal dari kebutuhan pengguna, risiko dirancang keluar melalui redundansi dan pengujian, dan perkiraan diperiksa terhadap kenyataan alih-alih dipercaya begitu saja.**

## Mengapa ini penting

Pengguna menilai layanan atas tiga hal sebelum yang lain: dapatkah saya memakainya, apakah ia sanggup ketika banyak orang memakainya, dan apakah ia cepat? Kegagalan pada salah satunya tampak sebagai pekerjaan yang hilang, pembelian yang ditinggalkan, dan telepon yang marah. Namun ketiganya mudah diabaikan sampai hari yang buruk: peluncuran yang menggandakan lalu lintas, tenggat yang membuat semua orang menuju sistem pada jam terakhir, kegagalan satu komponen yang tidak disadari siapa pun bahwa segalanya bergantung padanya.

Praktik-praktik ini ada untuk menghindari hari-hari buruk itu dengan memikirkannya lebih dulu. Mereka menanyakan seberapa banyak kegagalan yang dapat ditoleransi layanan dan berapa biayanya, seberapa banyak permintaan yang harus ditangani dan bagaimana permintaan itu akan tumbuh, serta seberapa cepat ia harus merespons. Jawabannya berupa pilihan desain seperti redundansi, pengujian yang menemukan batas sebelum pengguna menemukannya, dan perkiraan yang diperiksa dan diperbarui.

ITIL 4 menjelaskan tiga praktik terkait: manajemen ketersediaan, manajemen kapasitas dan kinerja, dan, yang berkaitan erat, manajemen kontinuitas layanan (Topik 3.12 — Manajemen Kontinuitas Layanan). Tim rekayasa menemuinya sebagai rekayasa keandalan, rekayasa kinerja, dan perencanaan kapasitas, dengan memakai SLO dan error budget (Topik 2.6 — Site Reliability Engineering). Topik ini menyatukan gagasan-gagasan itu dan menjelaskan cara memakainya tanpa berlebihan: lebih banyak ketersediaan tidak selalu lebih baik, karena setiap angka sembilan tambahan berbiaya lebih besar. Ia terhubung dengan manajemen tingkat layanan (Topik 3.7 — Manajemen Tingkat Layanan) dan pemantauan (Topik 3.10 — Pemantauan dan Manajemen Peristiwa).

## Konsep inti

**Ketersediaan.** Kemampuan layanan menjalankan fungsi yang disepakati ketika dibutuhkan. Wikipedia menggambarkan availability sebagai proporsi waktu sistem berfungsi. Biasanya dinyatakan sebagai persentase dalam suatu periode, seperti 99,9 persen dalam sebulan, yang mengizinkan sekitar 43 menit henti. Angka itu hanya bermakna ketika Anda mendefinisikan apa arti "berfungsi" bagi pengguna.

**Keandalan dan kemampuan dipelihara.** Keandalan adalah berapa lama layanan berjalan tanpa gagal; kemampuan dipelihara (maintainability) adalah seberapa cepat ia dapat dipulihkan. Ketersediaan bergantung pada keduanya. Artikel Wikipedia tentang reliability engineering dan mean time between failures (MTBF) menjelaskan ukurannya. Pada banyak layanan modern, pemulihan cepat lebih mungkin dicapai daripada kegagalan yang jarang.

**Redundansi dan titik kegagalan tunggal.** Redundansi berarti memiliki komponen cadangan agar satu kegagalan tidak menghentikan layanan. Titik kegagalan tunggal adalah komponen yang kegagalannya menghentikan segalanya. Artikel Wikipedia tentang redundancy dan single point of failure menjelaskan gagasannya. Menemukan titik kegagalan tunggal, termasuk orang, pemasok, dan sertifikat yang kedaluwarsa, adalah tugas inti ketersediaan.

**Toleransi kesalahan dan degradasi yang anggun.** Sistem yang toleran kesalahan tetap bekerja ketika bagian-bagiannya gagal; yang terdegradasi dengan anggun kehilangan sebagian fungsi tetapi mempertahankan intinya. Misalnya, situs belanja mungkin menonaktifkan rekomendasi namun tetap memproses pesanan. Rancang untuk yang kedua di mana toleransi penuh terlalu mahal.

**Failover.** Beralih ke komponen cadangan ketika yang utama gagal. Harus diuji; failover yang tidak teruji sering gagal ketika dibutuhkan. Lihat Topik 3.12 — Manajemen Kontinuitas Layanan.

**Kapasitas.** Throughput maksimum yang dapat disampaikan layanan. Manajemen kapasitas memastikan ada cukup, dan tidak jauh lebih dari cukup, untuk memenuhi permintaan saat ini dan mendatang dengan biaya yang disepakati. Artikel Wikipedia tentang capacity planning menjelaskannya.

**Permintaan (demand).** Beban yang ditempatkan pada layanan: pengguna, permintaan, volume data. Permintaan bervariasi menurut jam, hari, musim, dan peristiwa, dan dipengaruhi oleh peluncuran, kampanye, dan peristiwa eksternal. Memahami polanya lebih penting daripada rata-ratanya.

**Skalabilitas dan autoscaling.** Kemampuan menangani lebih banyak beban dengan menambah sumber daya. Platform cloud memungkinkan penskalaan otomatis yang menambah kapasitas ketika beban naik. Ini membantu tetapi tidak menghilangkan kebutuhan perencanaan: ia punya batas, memakan biaya, dan tidak memperbaiki basis data yang tidak dapat diskalakan. Lihat Topik 4.5 — Manajemen keuangan dan FinOps.

**Kinerja.** Seberapa cepat dan efisien layanan merespons. Ukuran yang umum adalah latensi (berapa lama sebuah permintaan), throughput (berapa banyak permintaan ditangani), dan tingkat kesalahan. Wikipedia menjelaskan latency dalam rekayasa. Pengguna menyadari ekor yang lambat, jadi lihat persentil, seperti ke-95, bukan hanya rata-rata. Lihat Topik 3.7 — Manajemen Tingkat Layanan.

**Antrean dan kejenuhan.** Ketika sistem mendekati pemakaian penuh, waktu menunggu tumbuh tajam. Teori antrean (queueing theory), yang dijelaskan di Wikipedia, menjelaskan mengapa layanan yang berjalan pada 95 persen kapasitas terasa sangat berbeda dari yang pada 60 persen. Sisakan ruang.

**Rekayasa dan pengujian kinerja.** Merancang dan menguji untuk kinerja sepanjang pengembangan, bukan hanya di akhir. Load testing menerapkan permintaan yang diharapkan; stress testing mendorong melampauinya untuk menemukan titik patah. Wikipedia menjelaskan keduanya. Uji di lingkungan yang menyerupai produksi, dengan data yang realistis.

**Peramalan.** Memperkirakan permintaan di masa depan dari riwayat, peristiwa yang diketahui, dan pertumbuhan. Wikipedia menjelaskan metode peramalan. Perkiraan tidak pasti: catat asumsi, tunjukkan rentang, dan bandingkan prediksi dengan apa yang terjadi. Lihat Topik 7.5 — Analitik prediktif dan peramalan.

**Pertukaran biaya.** Setiap peningkatan ketersediaan atau kapasitas memakan biaya. Tingkat yang tepat bergantung pada biaya kegagalan dan kelambatan bagi bisnis. Buat pertukaran itu eksplisit bersama orang yang membayar, dan tuliskan.

**Bagaimana lensa-lensa cocok.** Praktik agile memperlakukan pekerjaan keandalan sebagai bagian backlog dan menguji lebih awal dan sering. AI dapat mendeteksi anomali dan mendukung peramalan di bawah tinjauan. Otomatisasi menskalakan sumber daya dan melakukan failover. Analitik menyediakan data untuk ketiga praktik.

## Praktik terbaik

1. **Tetapkan target ketersediaan dari kebutuhan pengguna.** Tanyakan apa yang terjadi ketika layanan mati selama satu jam, sehari, seminggu. Tetapkan target, dan biaya, yang sesuai. Tuliskan definisi "tersedia" dari sudut pandang pengguna.
2. **Temukan titik kegagalan tunggal.** Petakan komponen dan ketergantungan layanan penting, dan tanyakan apa yang terjadi jika masing-masing gagal. Sertakan sertifikat, lisensi, orang, dan pemasok.
3. **Rancang untuk kegagalan.** Pakai redundansi di mana biayanya dibenarkan, buat komponen gagal secara independen, dan putuskan apa yang dapat dimatikan untuk melindungi inti.
4. **Uji failover dan pemulihan.** Latih failover di lingkungan yang aman, dan catat waktu yang dibutuhkan. Perbaiki apa yang diungkap latihan.
5. **Kenali pola permintaan Anda.** Kumpulkan data beban menurut jam, hari, dan musim, dan daftarkan peristiwa mendatang yang diketahui seperti peluncuran dan tenggat. Rencanakan untuk puncak, bukan rata-rata.
6. **Sisakan ruang (headroom).** Jangan menjalankan komponen penting mendekati kapasitas penuh. Tetapkan ambang peringatan yang memberi tahu cukup awal untuk bertindak.
7. **Uji kinerja sebelum pengguna melakukannya.** Jalankan pengujian beban dan stres terhadap skenario realistis sebelum rilis besar dan menjelang puncak yang diketahui. Pelajari di mana sistem patah.
8. **Perkirakan dan periksa.** Buat perkiraan dengan asumsinya, tinjau secara berkala terhadap kenyataan, dan sesuaikan. Bagikan rentang, bukan angka tunggal.
9. **Awasi ekornya.** Laporkan latensi persentil dan tingkat kesalahan, dan selidiki permintaan paling lambat. Rata-rata menyembunyikan pengalaman pengguna yang sial.
10. **Timbang biaya dan risiko secara terbuka.** Tunjukkan kepada pemilik biaya setiap tingkat ketersediaan dan kapasitas, dan catat keputusan dan siapa yang membuatnya.

## Pertanyaan untuk dibahas bersama tim Anda

**Apa yang akan hilang dari pengguna kita jika layanan ini mati selama satu jam, dan apakah target kita sesuai?**
Pertanyaan ini mengaitkan target dengan dampak. Harapkan bahwa pengguna berbeda memberi jawaban berbeda. Minta contoh nyata. Lanjutkan dengan menulis target beserta biayanya dan memeriksanya bersama pelanggan.

**Apa titik kegagalan tunggal kita, termasuk yang bukan mesin?**
Gambar ketergantungan satu layanan kritis. Harapkan kejutan: sertifikat yang tidak dilacak siapa pun, satu insinyur, pemasok tanpa cadangan. Lanjutkan dengan memilih satu untuk dikurangi.

**Kapan terakhir kali kita menguji failover, dan apa yang terjadi?**
Tanyakan tanggal dan hasilnya. Harapkan "tidak pernah" atau "berhasil di lingkungan uji". Lanjutkan dengan merencanakan latihan dengan waktu pemulihan yang dinyatakan.

**Jam tersibuk dalam setahun untuk layanan ini kapan, dan apakah kita siap?**
Pikirkan tenggat, peluncuran, dan obral. Tanyakan apa yang terjadi terakhir kali. Lanjutkan dengan merencanakan pengujian beban untuk puncak berikutnya.

**Seberapa akurat tiga perkiraan kapasitas terakhir kita?**
Pertanyaan ini menguji pembelajaran. Harapkan bahwa tak seorang pun memeriksa. Bandingkan perkiraan dengan kenyataan. Lanjutkan dengan menyepakati siklus tinjauan dan mencatat asumsi.

**Bagaimana AI dapat membantu meramalkan permintaan atau mendeteksi masalah lebih awal, dan bagaimana kita tahu ia salah?**
AI dapat menemukan pola dalam telemetri. Ia juga dapat mencocokkan derau. Tanyakan siapa pemiliknya dan dengan apa ia akan dibandingkan. Lanjutkan dengan menjalankan perkiraan AI berdampingan dengan metode yang ada selama satu kuartal.

## Dalam praktik: contoh manajemen layanan

Badan pinjaman mahasiswa nasional menjalankan portal permohonan. Sebagian besar tahun portal menangani beberapa ribu pengguna sehari. Pada dua hari terakhir sebelum tenggat permohonan tahunan, portal menangani jauh lebih dari seratus kali lipat. Dua tahun lalu ia jatuh pada malam terakhir; tahun lalu ia bertahan dengan penskalaan darurat dan semalam lembur.

Pemilik layanan mulai pada Januari, jauh sebelum tenggat berikutnya. Ia meminta data lalu lintas tiga tahun terakhir, jam demi jam, dan menemukan bentuk yang konsisten: kenaikan lambat selama minggu terakhir, kenaikan tajam pada hari terakhir, dan puncak pada tiga jam terakhir. Ia meminta tim mengidentifikasi titik kegagalan tunggal. Mereka menemukan bahwa portal bergantung pada layanan verifikasi identitas yang dijalankan pemasok dengan batas laju tetap, yang akan membatasi throughput sekitar separuh dari puncak yang diharapkan.

Tim melakukan tiga hal. Mereka menegosiasikan batas laju yang lebih tinggi dengan pemasok dan mendapat kenaikan sementara untuk minggu terakhir. Mereka menjalankan pengujian beban pada Maret dan Juni memakai pola tahun sebelumnya ditambah 30 persen, dan menemukan bahwa basis data menjadi hambatan pada sekitar 70 persen puncak yang diharapkan, yang diperbaiki dengan menambah replika baca dan menyimpan cache beberapa kueri mahal. Dan mereka menyiapkan mode terdegradasi: pada hari terakhir, fitur tidak esensial seperti kalkulator tabungan dimatikan jika beban melewati ambang.

Pada hari tenggat, portal menangani puncak. Layanan identitas melambat pada jam tersibuk tetapi tidak gagal, dan mode terdegradasi diaktifkan sekali, selama 40 menit. Yang berubah: tidak ada gangguan dan tidak ada krisis lembur. Yang masih sulit: batas pemasok adalah soal kontrak yang diatur ulang setiap tahun; perkiraan kenaikan 30 persen adalah asumsi, dan kenaikan sebenarnya 22 persen, sehingga tim mungkin kelebihan belanja; dan belum ada yang menguji kegagalan wilayah penuh, yang masih akan menghentikan layanan. Pemilik mencatat ini dalam rencana tahun depan.

## Empat perspektif

### Tim produk dan pengiriman

Rancang untuk kegagalan dan beban: buat komponen mandiri, uji kinerja saat Anda membangun, dan kenali batas Anda. Sertakan mode terdegradasi dan batas laju dalam desain.

### Tim layanan dan operasi

Kenali pola permintaan dan ruang kapasitas. Latih failover, awasi ekor yang lambat, dan beri peringatan dini tentang tren. Jaga peta ketergantungan tetap mutakhir.

### Kepemimpinan dan tata kelola

Putuskan tingkat ketersediaan dan kapasitas dengan memperhatikan biaya dan risiko, dan minta bukti di baliknya. Danai pengujian dan latihan, bukan hanya peralatan. Waspadai puncak yang diketahui.

### Pelanggan dan pengguna

Beri tahu penyedia tentang periode tersibuk Anda dan apa biaya kegagalan bagi Anda. Tanyakan tingkat ketersediaan apa yang direncanakan dan apa yang terjadi ketika terlewat.

## Agile, AI, otomatisasi, dan analitik

### Agile

Sertakan pekerjaan keandalan dan kinerja dalam backlog, uji lebih awal dan sering dalam pipeline, dan belajar dari setiap insiden dan puncak. Perhatian: mendorong keandalan ke "nanti" membangun utang yang muncul pada saat terburuk.

### AI

AI dapat mendeteksi anomali, meramalkan permintaan dari riwayat dan peristiwa, dan menyarankan tindakan penskalaan, dengan pemilik dan keputusan manusia atas biaya dan risiko. Perhatian: model yang dilatih pada hari-hari normal dapat gagal pada peristiwa yang belum pernah terjadi; bandingkan dengan garis dasar sederhana dan jaga seseorang tetap bertanggung jawab. Lihat Topik 5.2 — AIOps.

### Otomatisasi

Otomatiskan penskalaan, failover, pemeriksaan kesehatan, dan pengujian beban dalam pipeline, dengan batas dan log. Perhatian: autoscaling dapat menaikkan biaya atau menyembunyikan rilis yang cacat; tetapkan anggaran dan peringatan, dan uji aturan penskalaan. Lihat Topik 6.6 — Otomatisasi runbook dan perbaikan otomatis.

### Analitik

Kumpulkan permintaan, pemakaian, persentil latensi, tingkat kesalahan, dan akurasi perkiraan. Perhatian: target pemakaian dapat dimanipulasi dengan memindahkan beban, dan rata-rata menyembunyikan ekor yang lambat; periksa dengan data pengalaman pengguna. Lihat Topik 7.5 — Analitik prediktif dan peramalan dan buku *Service Management Metrics*.

## Mode kegagalan umum

- **Target karena kebiasaan.** "Lima sembilan" dijanjikan tanpa alasan. Tetapkan target dari kebutuhan pengguna dan biaya.
- **Titik kegagalan tunggal tersembunyi.** Sertifikat atau seseorang menghentikan segalanya. Petakan ketergantungan secara luas.
- **Failover tidak teruji.** Ia gagal ketika dibutuhkan. Latih secara berkala.
- **Merencanakan untuk rata-rata.** Puncak membanjiri sistem. Rencanakan untuk puncak yang diketahui dan sisakan ruang.
- **Perkiraan tidak pernah diperiksa.** Kesalahan berulang. Bandingkan prediksi dengan kenyataan.
- **Autoscaling sebagai obat segala penyakit.** Biaya dan hambatan tetap ada. Uji batas dan tetapkan anggaran.
- **Hanya rata-rata.** Ekor yang lambat diabaikan. Laporkan persentil.

## Model kematangan

| Dimensi | Memulai | Mengembangkan | Menstandardisasi | Mengelola | Mengorkestrasi |
|---|---|---|---|---|---|
| Ketersediaan | Reaktif | Target untuk layanan kunci | Target, redundansi, dan failover teruji | Ketersediaan diukur terhadap pengalaman pengguna | Ketersediaan dirancang dan dikelola lintas layanan dan pemasok |
| Kapasitas | Ditambah saat habis | Pemantauan dasar | Pola permintaan diketahui dan diperkirakan dengan asumsi | Akurasi perkiraan ditinjau | Kapasitas direncanakan dan disesuaikan otomatis dengan pengawasan |
| Kinerja | Hanya keluhan | Beberapa ukuran | Target persentil dan pengujian beban sebelum rilis | Tren dan regresi kinerja dilacak | Kinerja direkayasa sepanjang siklus hidup |
| Kesadaran biaya | Tidak diketahui | Diketahui kasar | Pertukaran didokumentasikan dengan pemilik | Biaya dan risiko ditinjau secara berkala | Biaya, risiko, dan keandalan dioptimalkan bersama |

## Daftar periksa

- [ ] Target ketersediaan didasarkan pada kebutuhan pengguna dan biaya, dengan definisi yang jelas.
- [ ] Titik kegagalan tunggal untuk layanan penting dipetakan dan dilacak.
- [ ] Failover telah dilatih dan diukur waktunya.
- [ ] Kami mengenal pola permintaan dan puncak mendatang.
- [ ] Kami menjalankan pengujian beban sebelum rilis besar dan puncak yang diketahui.
- [ ] Perkiraan mencatat asumsi dan diperiksa terhadap kenyataan.
- [ ] Kami melaporkan latensi persentil dan tingkat kesalahan.
- [ ] Pertukaran biaya dan risiko dicatat dengan pemilik.

## Prompt AI

**Temukan titik kegagalan tunggal.**

```text
Here is a description of how [service] works and what it depends on: [paste].
List each component and dependency, and for each one say what the description implies would happen if it failed, or "not stated". Mark candidate single points of failure and questions to ask. Do not assume redundancy that is not described.
List what you are unsure of.
```

**Ringkas pola permintaan.**

```text
Here is hourly request data for [period]: [paste summary or data].
Describe the daily, weekly, and seasonal patterns you can see, give the peak-to-average ratio, and list dates that look unusual. Do not forecast.
List what you are unsure of.
```

**Susun draf rencana pengujian beban.**

```text
Our service: [describe]. Expected peak: [number and pattern]. Known limits or concerns: [list].
Draft a test plan with scenarios, load levels, what to measure, what would make us stop, and risks of testing. Specify that it is run only in a safe environment.
List what you are unsure of.
```

## Skill AI

- [capacity-planning](../../../../skills/capacity-planning/SKILL.md): gunakan untuk memperkirakan permintaan dan merencanakan sumber daya.
- [load-testing](../../../../skills/load-testing/SKILL.md): gunakan untuk merancang dan menjalankan pengujian beban.
- [performance-testing](../../../../skills/performance-testing/SKILL.md): gunakan untuk menelaah kecepatan dan daya tanggap.
- [demand-forecasting](../../../../skills/demand-forecasting/SKILL.md): gunakan untuk memperkirakan permintaan di masa depan dengan ketidakpastian yang dinyatakan.
- [chaos-testing](../../../../skills/chaos-testing/SKILL.md): gunakan untuk menguji bagaimana kegagalan menyebar.

## Sumber utama

- Betsy Beyer dan lainnya (ed.), *Site Reliability Engineering* (2016): bab tentang menangani beban berlebih dan penyeimbangan beban, gratis di sre.google.
- PeopleCert, halaman sertifikasi ITIL: uraian pemilik tentang praktik ketersediaan dan kapasitas.
- Wikipedia, "High availability" dan "Capacity planning": ikhtisar gagasan utama.
- Wikipedia, "Queueing theory": matematika di balik penantian dan kejenuhan.

## Referensi

1. Availability — Wikipedia — https://en.wikipedia.org/wiki/Availability
2. High availability — Wikipedia — https://en.wikipedia.org/wiki/High_availability
3. Capacity planning — Wikipedia — https://en.wikipedia.org/wiki/Capacity_planning
4. Reliability engineering — Wikipedia — https://en.wikipedia.org/wiki/Reliability_engineering
5. Mean time between failures — Wikipedia — https://en.wikipedia.org/wiki/Mean_time_between_failures
6. Single point of failure — Wikipedia — https://en.wikipedia.org/wiki/Single_point_of_failure
7. Redundancy (engineering) — Wikipedia — https://en.wikipedia.org/wiki/Redundancy_(engineering)
8. Load testing — Wikipedia — https://en.wikipedia.org/wiki/Load_testing
9. Queueing theory — Wikipedia — https://en.wikipedia.org/wiki/Queueing_theory
10. Forecasting — Wikipedia — https://en.wikipedia.org/wiki/Forecasting
11. Site Reliability Engineering: How Google Runs Production Systems — Google — https://sre.google/sre-book/table-of-contents/
