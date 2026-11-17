# Rantai Nilai Layanan

**Rantai nilai layanan ITIL 4 adalah model operasi yang terdiri dari enam aktivitas — rencanakan, perbaiki, libatkan, rancang dan transisikan, peroleh atau bangun, serta sampaikan dan dukung — yang dilalui setiap aliran nilai dalam urutannya sendiri; gunakan untuk menemukan di mana pekerjaan menunggu dan siapa yang memiliki setiap serah terima.**

## Mengapa ini penting

Pekerjaan dalam organisasi layanan jarang bergerak dalam garis lurus. Sebuah permintaan masuk, seseorang mengajukan pertanyaan, perubahan dirancang, pemasok dihubungi, perubahan di-deploy, lalu dukungan mengambil alih. Setiap langkah milik tim yang berbeda, dan tak seorang pun melihat seluruh jalurnya. Hasilnya adalah keterlambatan yang tidak disebabkan satu tim pun dan tidak bisa diperbaiki satu tim pun.

Rantai nilai layanan memberi jalur itu sebuah bentuk. Ia menamai enam aktivitas yang bersama-sama mengubah permintaan menjadi nilai, dan memungkinkan Anda menggambarkan perjalanan tertentu, sebuah aliran nilai, sebagai rute melalui aktivitas-aktivitas itu. Karena aktivitasnya generik, model yang sama cocok untuk rilis perangkat lunak, permintaan laptop, atau insiden, dengan rute yang berbeda.

Topik ini menjelaskan enam aktivitas, bagaimana aliran nilai berbeda dari rantai, dan cara memakai model ini pada pekerjaan nyata. Topik ini menguraikan ITIL 4, versi yang terdokumentasi luas. ITIL (Versi 5), yang diperkenalkan PeopleCert pada 2026, mungkin menyajikan model operasi secara berbeda; periksa halaman pemilik sebelum mengutipnya sebagai yang terkini (lihat Topik 1.3 — ITIL 5).

## Konsep inti

**Enam aktivitas.** Dalam ITIL 4 aktivitasnya adalah:

| Aktivitas | Tujuan dalam kata sederhana |
|---|---|
| Rencanakan | Menjaga pemahaman bersama tentang visi, keadaan saat ini, dan arah di seluruh organisasi |
| Perbaiki | Menjaga layanan, praktik, dan produk terus membaik |
| Libatkan | Memahami kebutuhan pemangku kepentingan, serta menjaga hubungan yang baik dan transparansi |
| Rancang dan transisikan | Memastikan produk dan layanan memenuhi ekspektasi mutu, biaya, dan waktu ke pasar |
| Peroleh atau bangun | Memastikan komponen tersedia pada waktu dan tempat yang dibutuhkan, dan memenuhi spesifikasi |
| Sampaikan dan dukung | Memastikan layanan disampaikan dan didukung sesuai spesifikasi dan ekspektasi yang disepakati |

**Masukan dan keluaran.** Rantai menerima dua jenis masukan: peluang dan permintaan dari luar, serta hasil aktivitas lain dari dalam. Setiap aktivitas menghasilkan keluaran yang mengalir ke aktivitas lain, dan seluruh rantai menghasilkan produk dan layanan bagi konsumen. Nilai terwujud ketika konsumen memakai layanan, bukan ketika rantai selesai.

**Aliran nilai.** Serangkaian langkah yang dilakukan organisasi untuk menciptakan dan menyampaikan produk dan layanan kepada konsumen. Aliran nilai bersifat spesifik: "menyelesaikan insiden besar", "melakukan onboarding karyawan baru", "merilis perubahan aplikasi seluler". Masing-masing mengikuti jalurnya sendiri melalui aktivitas-aktivitas itu. Artikel Wikipedia tentang value stream dan value-stream mapping menjelaskan gagasan ini dan asal-usul lean-nya.

**Bukan rantai nilai Porter.** Cendekiawan manajemen Michael Porter menjelaskan "rantai nilai" pada 1985 untuk perusahaan manufaktur, dengan aktivitas utama dan pendukung. Rantai ITIL meminjam namanya dan gagasan aktivitas yang menambah nilai, tetapi ia menggambarkan operasi layanan dan bukan model yang sama. Saat membaca materi lama, periksa mana yang dimaksud.

**Aktivitas bukan tim atau fase.** Aktivitas adalah jenis pekerjaan, bukan departemen. Dalam organisasi kecil satu orang bisa melakukan keenamnya dalam sehari. Dalam organisasi besar aktivitas yang sama bisa terjadi di banyak tempat. Rantai tidak memaksakan urutan; aliran nilai yang menentukannya.

**Praktik berkontribusi pada aktivitas.** Setiap praktik, seperti manajemen insiden atau pemampuan perubahan, membantu satu atau lebih aktivitas. Memetakan praktik ke aktivitas menunjukkan tumpang tindih dan kesenjangan (lihat Topik 1.4 — Sistem nilai layanan). Misalnya, praktik pemampuan perubahan dapat menyentuh rancang dan transisikan, peroleh atau bangun, serta sampaikan dan dukung.

**Aliran dan penantian.** Pertanyaan yang berguna tentang aliran nilai bukanlah berapa lama setiap langkah, tetapi di mana pekerjaan menunggu. Di sebagian besar organisasi, pekerjaan menghabiskan jauh lebih banyak waktu menunggu di antara aktivitas daripada dikerjakan. Tradisi lean dalam memetakan aliran nilai, yang dibahas di Topik 2.4 — Lean dan kaizen dan Topik 7.6 — Analitik proses dan aliran nilai, ada untuk menyingkapnya.

**Continuous delivery sebagai aliran nilai.** Perubahan perangkat lunak yang mengalir dari gagasan ke produksi melewati rencanakan, libatkan, rancang dan transisikan, peroleh atau bangun, serta sampaikan dan dukung, dengan perbaiki berjalan berdampingan. Praktik continuous delivery memperpendek penantian di antaranya (lihat Topik 2.2 — Pengiriman berkelanjutan).

**Bagaimana lensa-lensa cocok.** Agile memperpendek lingkar di dalam rantai dan meningkatkan keterlibatan pemangku kepentingan dalam "libatkan". AI dapat membantu di dalam aktivitas, misalnya merangkum permintaan dalam "libatkan" atau mengusulkan pengujian dalam "rancang dan transisikan". Otomatisasi memindahkan pekerjaan antar aktivitas tanpa serah terima manual. Analitik mengukur aliran melalui rantai.

## Praktik terbaik

1. **Petakan aliran nilai nyata, bukan rantai secara umum.** Pilih satu aliran spesifik, seperti menangani permintaan akses dari pelanggan, dan telusuri satu contoh terbaru dari awal sampai akhir. Gunakan tanggal nyata.
2. **Tandai aktivitas tempat setiap langkah berada.** Beri label setiap langkah dalam penelusuran dengan aktivitas yang dilayaninya. Anda sering menemukan beberapa langkah dalam satu aktivitas dan tak satu pun di aktivitas lain, dan itu sebuah temuan.
3. **Ukur penantian secara terpisah dari pengerjaan.** Catat berapa lama pekerjaan dikerjakan dan berapa lama ia berada dalam antrean. Laporkan keduanya; selisihnya biasanya mengejutkan orang.
4. **Temukan serah terima.** Setiap kali pekerjaan berpindah dari satu tim ke tim lain, tanyakan informasi apa yang ikut dan apa yang hilang. Pengerjaan ulang yang berulang sering berasal dari serah terima yang buruk.
5. **Perlakukan libatkan sebagai aktivitas kelas satu.** Banyak tim layanan merencanakan dan menyampaikan dengan baik tetapi melibatkan dengan buruk. Periksa bahwa pemangku kepentingan dilibatkan sejak awal dan umpan balik kembali kepada orang yang memutuskan.
6. **Buat perbaiki terlihat di setiap aliran.** Cari di mana gagasan perbaikan masuk ke aliran dan siapa yang meninjaunya. Jika tidak ada titik masuk, perbaikan akan bergantung pada aksi heroik.
7. **Tunjuk pemilik untuk setiap aliran nilai.** Satu orang bertanggung jawab atas aliran dari ujung ke ujung dan dapat meminta tim berubah. Tanpa pemilik, setiap tim mengoptimalkan bagiannya sendiri.
8. **Gunakan rantai untuk menempatkan otomatisasi.** Cari langkah yang stabil, berulang, dan dipahami, lalu otomatiskan, dengan log. Jangan mengotomatiskan langkah yang hanya merupakan gejala dari keputusan yang hilang.
9. **Tinjau peta setelah perubahan.** Pemasok, perangkat, atau asisten AI baru mengubah rutenya. Gambar ulang aliran dan tanyakan apa yang bergeser.
10. **Jaga agar model tetap ringan.** Jika peta menjadi diagram besar yang tidak dipakai siapa pun, sederhanakan. Satu halaman yang menunjukkan penantian lebih berharga daripada bagan lengkap.

## Pertanyaan untuk dibahas bersama tim Anda

**Aliran nilai mana yang paling penting bagi pelanggan kita, dan siapa yang memilikinya dari ujung ke ujung?**
Ini dimulai dengan kepemilikan. Orang sering menyebut proses tetapi bukan orang. Anda mungkin menemukan beberapa pemilik untuk bagian-bagiannya dan tak seorang pun untuk keseluruhannya. Lanjutkan dengan memilih satu aliran dan satu orang yang bertanggung jawab untuk dicoba selama satu kuartal.

**Di mana pekerjaan terakhir menunggu paling lama, dan mengapa?**
Gunakan contoh nyata dengan tanggal. Jawaban khasnya adalah persetujuan, antrean untuk spesialis, dan menunggu informasi dari pelanggan. Tanyakan apa yang ditunggu pekerjaan itu, bukan siapa yang lambat. Lanjutkan dengan menanyakan apa yang akan menghilangkan penantian itu.

**Dari keenam aktivitas, mana yang paling buruk kita lakukan?**
Tim biasanya menjawab "libatkan" atau "perbaiki" jika ditanya dengan jujur. Minta bukti: persyaratan yang terlewat, gagasan perbaikan yang tidak ditindaklanjuti siapa pun. Lanjutkan dengan memilih satu perubahan kecil pada aktivitas itu.

**Informasi apa yang hilang pada serah terima terbesar kita?**
Tanyakan kepada tim penerima apa yang mereka harap telah mereka ketahui. Harapkan konteks yang hilang, prioritas yang tidak jelas, dan kurangnya riwayat. Lanjutkan dengan menyepakati satu bidang atau percakapan yang menyertai pekerjaan.

**Langkah mana dalam aliran kita yang ada hanya karena keputusan yang hilang?**
Beberapa langkah, seperti persetujuan berulang, menggantikan aturan yang belum ditulis siapa pun. Tanyakan siapa yang akan menyetujui pekerjaan itu jika aturannya ada dan apa bunyi aturannya. Lanjutkan dengan menyusun aturan untuk satu kasus.

**Apa yang akan kita lakukan secara berbeda dalam aliran ini jika asisten AI dapat menyusun draf, merangkum, atau merutekan di setiap langkah?**
Pertanyaan ini memunculkan di mana AI dapat membantu dan di mana ia menambah risiko. Tanyakan pemilik dan titik tinjauan. Lanjutkan dengan memilih satu langkah berisiko rendah untuk diuji coba dengan seseorang yang meninjau setiap keluaran.

## Dalam praktik: contoh manajemen layanan

Departemen TI sebuah universitas menangani permintaan untuk menyiapkan lingkungan komputasi riset bagi proyek baru. Para peneliti mengeluh bahwa prosesnya memakan waktu berminggu-minggu. Pemilik layanan menelusuri satu permintaan terbaru melalui rantai nilai.

Permintaan tiba lewat email (libatkan), diklarifikasi dalam tiga kali pertukaran, disetujui oleh petugas pendanaan, diteruskan ke tim infrastruktur yang membangun lingkungan (peroleh atau bangun), diuji oleh tim kedua (rancang dan transisikan), dan diserahkan ke dukungan dengan catatan singkat (sampaikan dan dukung). Total waktu yang berlalu adalah 23 hari kerja. Waktu pengerjaan langsung, dijumlahkan dari orang-orang yang terlibat, kurang dari empat hari. Sisanya adalah penantian: untuk klarifikasi, untuk persetujuan, dan untuk antrean tim kedua.

Departemen melakukan tiga perubahan. Departemen mengganti pertukaran email dengan formulir singkat yang menanyakan pertanyaan yang selalu diajukan di setiap kasus, menyetujui sebelumnya permintaan di bawah ambang pendanaan tertentu, dan meminta tim infrastruktur menjalankan pengujian dasar sebagai bagian dari pembangunan, dengan tim kedua meninjau sampel. Departemen juga menunjuk kepala komputasi riset sebagai pemilik aliran.

Yang berubah: jenis permintaan yang sama kini memakan waktu sekitar sembilan hari kerja, berdasarkan beberapa permintaan berikutnya yang ditelusuri tim. Yang masih sulit: ambang persetujuan awal bergantung pada aturan keuangan yang tidak dikendalikan departemen, dan pendekatan pengambilan sampel belum disepakati dengan tim keamanan, sehingga sebagian lingkungan masih menunggu tinjauan. Pemilik mencatat keduanya untuk tinjauan perbaikan berikutnya.

## Empat perspektif

### Tim produk dan pengiriman

Perlakukan pipeline pengiriman Anda sebagai aliran nilai dan telusuri perubahan dari gagasan sampai layanan yang berjalan. Tunjukkan penantiannya, dan bekerjalah bersama operasi pada serah terima ke sampaikan dan dukung. Sertakan aktivitas libatkan dalam rencana Anda, dengan pelanggan dilibatkan sejak awal.

### Tim layanan dan operasi

Anda memiliki sebagian besar sampaikan dan dukung, dan Anda menerima serah terima dari pihak lain. Catat apa yang Anda butuhkan dan tidak Anda dapatkan pada setiap serah terima, dan bawa ke pemilik aliran. Tawarkan untuk meninjau desain lebih awal, ketika mengubahnya lebih murah.

### Kepemimpinan dan tata kelola

Minta agar aliran nilai dimiliki dan diukur dari ujung ke ujung. Lihat penantiannya, bukan hanya usahanya. Danai serah terima serta aktivitas libatkan dan perbaiki, yang mudah kekurangan dana.

### Pelanggan dan pengguna

Anda melihat aliran dari luar: permintaan masuk dan sesuatu kembali kemudian. Tanyakan kepada penyedia apa langkah-langkahnya dan di mana permintaan Anda berada. Beri tahu mereka di mana Anda ditanya pertanyaan yang sama dua kali.

## Agile, AI, otomatisasi, dan analitik

### Agile

Gunakan siklus pendek di dalam setiap aktivitas, dengan pemangku kepentingan terlibat sepanjang waktu, dan perlakukan peta aliran sebagai backlog perbaikan. Perhatian: mempercepat satu aktivitas, seperti build, tidak memperbaiki aliran jika aktivitas berikutnya adalah hambatannya.

### AI

AI dapat membantu di dalam aktivitas: merangkum utas permintaan yang panjang dalam "libatkan", menyusun kasus uji dalam "rancang dan transisikan", atau menyarankan artikel pengetahuan dalam "sampaikan dan dukung". Tunjuk pemilik, pertahankan seseorang yang meninjau keluaran, dan catat apa yang dipakai. Perhatian: langkah AI yang merutekan pekerjaan secara salah menambah jenis penantian baru; lacak koreksinya. Lihat Topik 5.1 — AI dalam manajemen layanan.

### Otomatisasi

Otomatiskan serah terima dan langkah rutin, seperti membuat catatan dan memberi tahu tim berikutnya, agar pekerjaan bergerak tanpa menunggu orang mengingat. Simpan log dan cara untuk membatalkan. Perhatian: otomatisasi dapat mempercepat aliran menuju hambatan dan membuat antrean lebih panjang. Lihat Topik 6.2 — Otomatisasi alur kerja dan orkestrasi.

### Analitik

Gunakan stempel waktu di batas aktivitas untuk menghitung lead time, waktu pengerjaan, dan waktu penantian untuk setiap aliran. Perhatian: stempel waktu bergantung pada bagaimana orang memakai status tiket, dan ukuran "waktu dalam aktivitas" bisa dimanipulasi dengan memindahkan tiket antarstatus; periksa terhadap penelusuran pekerjaan nyata. Lihat Topik 7.6 — Analitik proses dan aliran nilai dan buku *Service Management Metrics*.

## Mode kegagalan umum

- **Menggambar rantai, bukan aliran.** Enam kotak tergantung di dinding dan tidak menjelaskan apa pun. Telusuri permintaan nyata dengan tanggal.
- **Mengoptimalkan satu aktivitas.** Satu tim mempercepat build dan aliran tetap lambat. Ukur dari ujung ke ujung dan temukan penantian terlama.
- **Mengabaikan libatkan dan perbaiki.** Perencanaan dan penyampaian kuat dan umpan balik lemah. Beri keduanya pemilik dan waktu yang eksplisit.
- **Aliran tanpa pemilik.** Setiap tim membela langkahnya sendiri. Tunjuk satu orang yang bertanggung jawab atas aliran.
- **Mencampuradukkan rantai dengan model Porter.** Pembaca membawa gagasan yang keliru. Katakan model mana yang Anda maksud.
- **Memperlakukan aktivitas sebagai tim.** Model diubah menjadi bagan organisasi. Pertahankan aktivitas sebagai jenis pekerjaan yang dilakukan banyak tim.

## Model kematangan

| Dimensi | Memulai | Mengembangkan | Menstandardisasi | Mengelola | Mengorkestrasi |
|---|---|---|---|---|---|
| Pemetaan aliran | Tidak ada peta | Satu aliran ditelusuri | Aliran utama dipetakan dengan data nyata | Peta diperbarui dan dipakai untuk keputusan | Aliran dipetakan lintas tim, pemasok, dan platform |
| Pengukuran aliran | Hanya usaha | Waktu yang berlalu diketahui | Waktu pengerjaan dan penantian dilaporkan | Hambatan dilacak dan ditindaklanjuti | Aliran dioptimalkan di seluruh sistem |
| Kepemilikan | Tim memiliki langkah | Pemilik untuk aliran utama | Setiap aliran kunci memiliki pemilik | Pemilik meninjau aliran dan hasil bagi pelanggan | Pemilik berkoordinasi lintas aliran dan mitra |
| Libatkan dan perbaiki | Ad hoc | Sebagian umpan balik ditangkap | Umpan balik dan perbaikan memiliki titik masuk yang didefinisikan | Hasil keduanya diukur | Umpan balik dan perbaikan terhubung lintas aliran |

## Daftar periksa

- [ ] Kami tahu aliran nilai mana yang paling penting bagi pelanggan.
- [ ] Setiap aliran kunci memiliki pemilik yang ditunjuk.
- [ ] Kami menelusuri setidaknya satu permintaan nyata dengan tanggal.
- [ ] Kami mengetahui waktu pengerjaan dan waktu penantian untuk aliran itu.
- [ ] Kami mengidentifikasi serah terima utama dan apa yang hilang pada masing-masing.
- [ ] Libatkan dan perbaiki masing-masing memiliki titik masuk yang didefinisikan.
- [ ] Kami menempatkan otomatisasi pada langkah yang stabil dan berulang dengan log.
- [ ] Kami menggambar ulang aliran setelah perubahan besar.

## Prompt AI

**Analisis penelusuran untuk menemukan penantian.**

```text
Here is a trace of one request through our process, with timestamps and who handled each step: [paste trace].
Calculate for each step the elapsed time from the previous step, and list the three longest gaps. For each, suggest two questions to find out why the work waited. Do not assume causes.
List what you are unsure of.
```

**Beri label langkah dengan aktivitas rantai nilai.**

```text
Below are the steps in our process for [stream name]: [paste steps].
Label each with one of the six ITIL 4 value chain activities (plan, improve, engage, design and transition, obtain or build, deliver and support) and give a one-line reason. Mark labels you are unsure about and list which activities have no steps.
Do not add steps.
```

**Susun pertanyaan untuk tinjauan serah terima.**

```text
We hand work from [team A] to [team B] in the stream [name]. The information handed over is: [list].
Write ten questions to ask team B about what they need that they do not receive. Avoid suggesting answers.
List what you are unsure of.
```

## Skill AI

- [value-stream-map](../../../../skills/value-stream-map/SKILL.md): gunakan untuk memetakan dan mengukur aliran nilai.
- [workflow-analysis](../../../../skills/workflow-analysis/SKILL.md): gunakan untuk menganalisis langkah, penantian, dan serah terima dalam sebuah proses.
- [kaizen](../../../../skills/kaizen/SKILL.md): gunakan untuk mengubah temuan menjadi eksperimen perbaikan kecil.

## Sumber utama

- PeopleCert, halaman sertifikasi ITIL: deskripsi pemilik tentang panduan ITIL dan versi terbaru.
- Wikipedia, "Value stream": konsep yang diorganisasi oleh rantai.
- Wikipedia, "Value-stream mapping": teknik lean untuk menemukan penantian.
- Wikipedia, "Value chain": model asli Porter, agar tidak tertukar dengan keduanya.

## Referensi

1. ITIL — Wikipedia — https://en.wikipedia.org/wiki/ITIL
2. IT service management — Wikipedia — https://en.wikipedia.org/wiki/IT_service_management
3. Value chain — Wikipedia — https://en.wikipedia.org/wiki/Value_chain
4. Michael Porter — Wikipedia — https://en.wikipedia.org/wiki/Michael_Porter
5. Value stream — Wikipedia — https://en.wikipedia.org/wiki/Value_stream
6. Value-stream mapping — Wikipedia — https://en.wikipedia.org/wiki/Value-stream_mapping
7. Lean manufacturing — Wikipedia — https://en.wikipedia.org/wiki/Lean_manufacturing
8. Workflow — Wikipedia — https://en.wikipedia.org/wiki/Workflow
9. Continuous delivery — Wikipedia — https://en.wikipedia.org/wiki/Continuous_delivery
10. ITIL Foundation Bridge (Version 5) — PeopleCert — https://www.peoplecert.org/browse-certifications/it-governance-and-service-management/ITIL-1/itil-foundation-bridge-version-5-4158
