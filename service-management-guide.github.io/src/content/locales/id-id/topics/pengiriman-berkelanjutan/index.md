# Pengiriman berkelanjutan

**Pengiriman berkelanjutan (continuous delivery) adalah praktik menjaga perangkat lunak selalu dalam keadaan siap dirilis dan mengirimkan perubahan kecil ke layanan yang hidup secara sering, melalui langkah build, uji, dan deploy yang otomatis; ia membuat perubahan lebih aman dengan membuatnya lebih kecil, dan inilah cara tim agile mengubah layanan yang hidup tanpa menunggu rilis triwulanan.**

## Mengapa ini penting

Perubahan adalah sumber risiko terbesar dalam layanan yang hidup, dan respons yang lazim adalah memperlambatnya: rilis lebih sedikit, persetujuan lebih banyak, siklus pengujian lebih besar. Masing-masing membuat rilis berikutnya lebih besar, yang membuatnya lebih berisiko, yang mendorong kehati-hatian yang lebih besar. Tim mendapati diri mereka merilis sekali per kuartal dengan akhir pekan panjang yang penuh kerja cemas.

Pengiriman berkelanjutan membalik siklus itu. Jika perubahan kecil, dampaknya mudah dipahami, mudah diuji, dan mudah dibalik. Jika dirilis melalui pipeline otomatis, pemeriksaan yang sama berjalan setiap kali, dalam urutan yang sama, dengan catatan. Jika rilis dapat dilakukan kapan saja, tim dapat menanggapi layanan yang gagal atau kebutuhan pelanggan dalam hitungan jam, bukan minggu.

Bagi manajemen layanan, pengiriman berkelanjutan penting karena mengubah wujud kendali. Praktik pemampuan perubahan yang dibangun di sekitar rapat dewan mingguan tidak dapat mengimbangi 20 rilis per hari, dan tidak perlu bila pipeline membawa pemeriksaannya (lihat Topik 3.4 — Pemampuan Perubahan dan Topik 6.4 — Pipeline dan perubahan otomatis). Topik ini menjelaskan praktiknya, kosakatanya, dan cara memperkenalkannya tanpa kehilangan kendali.

## Konsep inti

**Continuous integration.** Pengembang menggabungkan pekerjaan mereka ke jalur utama bersama secara sering, setidaknya setiap hari, dan setiap penggabungan memicu build dan pengujian otomatis. Tujuannya adalah menemukan masalah integrasi ketika masih kecil. Artikel Wikipedia tentang continuous integration menjelaskan praktik dan asal-usulnya dalam extreme programming.

**Continuous delivery.** Build yang lolos pemeriksaan otomatis selalu berada dalam keadaan yang dapat dirilis. Keputusan untuk merilis adalah keputusan bisnis, diambil ketika sesuai, bukan rintangan teknis. Dalam rumusan standar, rilis adalah satu klik dan berisiko rendah.

**Continuous deployment.** Langkah lanjutan di mana setiap perubahan yang lolos pipeline dirilis ke produksi secara otomatis, tanpa persetujuan manual. Ini pilihan, bukan syarat pengiriman berkelanjutan, dan lebih cocok untuk sebagian layanan dan sebagian risiko daripada yang lain.

**Pipeline deployment.** Rangkaian tahap otomatis: build, pengujian unit, pengujian integrasi, pemeriksaan keamanan, deployment ke lingkungan uji, pengujian penerimaan, dan rilis. Setiap tahap meneruskan perubahan atau menghentikannya. Pipeline adalah mekanisme pengaman sekaligus sumber bukti, karena mencatat apa yang diperiksa.

**Batch kecil.** Merilis perubahan kecil berarti masing-masing menyentuh sedikit hal. Hukum Little dari teori antrean, yang dijelaskan Wikipedia, menjelaskan sebagian efeknya: dengan laju pekerjaan yang sama, batch yang lebih kecil berarti antrean lebih pendek dan keterlambatan lebih singkat. Batch kecil juga membuat kesalahan lebih mudah ditelusuri ke penyebabnya.

**Memisahkan deployment dari rilis.** Deployment menaruh kode di server produksi. Rilis membuat fitur tersedia bagi pengguna. Teknik seperti feature toggle memungkinkan Anda men-deploy kode dalam keadaan mati dan mengaktifkannya kemudian, untuk sebagian pengguna lebih dulu. Ini mengurangi risiko setiap langkah. Lihat Topik 3.5 — Manajemen Rilis dan Deployment.

**Progressive delivery.** Merilis ke sebagian kecil pengguna terlebih dulu, mengamati, dan memperluas secara bertahap. Variannya mencakup canary release, di mana kelompok kecil mendapat perubahan, dan blue–green deployment, di mana dua lingkungan produksi bergantian sehingga peralihan dapat dibalik dengan cepat.

**Kontrol versi dan pengembangan berbasis trunk.** Semua perubahan, termasuk konfigurasi dan definisi infrastruktur, berada dalam kontrol versi. Banyak tim bekerja pada satu cabang utama dengan cabang berumur pendek, yang menjaga integrasi tetap sering. Lihat Topik 6.3 — Infrastruktur sebagai kode dan GitOps.

**Umpan balik dan pemulihan yang cepat.** Tujuannya adalah menemukan kesalahan dengan cepat dan pulih dengan cepat. Program riset tentang pengiriman perangkat lunak, seperti karya DevOps Research and Assessment (DORA), melacak ukuran seperti frekuensi deployment, lead time perubahan, tingkat kegagalan perubahan, dan waktu pemulihan layanan. Perlakukan sebagai pertanyaan tentang sistem Anda, bukan skor untuk tim; lihat buku *Service Management Metrics*.

**Apa yang dibutuhkannya.** Pengujian otomatis yang Anda percayai, pipeline yang stabil, kemampuan untuk rollback atau roll forward, pemantauan produksi yang menunjukkan dampak perubahan, dan tim yang memiliki apa yang dirilisnya. Tanpa hal-hal ini, rilis yang sering adalah kecerobohan; dengan semuanya, rilis lebih aman daripada yang jarang.

**Bagaimana lensa-lensa cocok.** Pengiriman berkelanjutan adalah bentuk praktis dari lensa agile untuk layanan yang hidup. Asisten AI membantu menulis dan meninjau kode dan pengujian di bawah tinjauan manusia. Otomatisasi adalah inti pipeline. Analitik memberi tahu Anda apa yang dilakukan pipeline dan layanan.

## Praktik terbaik

1. **Jaga agar jalur utama selalu dapat dirilis.** Perlakukan build yang rusak sebagai prioritas utama tim. Aturan seperti "perbaiki atau revert dalam satu jam" menjaga integrasi tetap sehat.
2. **Buat perubahan kecil.** Bidik perubahan yang dapat dipahami peninjau dalam hitungan menit. Jika perubahan besar, pecah, misalnya dengan merilis langkah persiapan lebih dulu.
3. **Otomatiskan pemeriksaan yang Anda percayai.** Pemeriksaan build, unit, integrasi, dan keamanan berjalan pada setiap perubahan. Tambahkan pemeriksaan ketika insiden menunjukkan celah, dan buang yang tidak pernah gagal dan memakan waktu, setelah diskusi.
4. **Gunakan satu jalur pipeline untuk semua perubahan.** Hindari jalur khusus untuk perubahan mendesak. Satu jalur yang cukup cepat untuk keadaan darurat lebih aman daripada pengecualian yang jarang dilatih.
5. **Pisahkan deployment dari rilis.** Gunakan feature toggle dan peluncuran bertahap agar perilaku baru dapat dinyalakan untuk beberapa pengguna dan dimatikan kembali dengan cepat. Catat keadaan setiap toggle dan buang yang lama.
6. **Rencanakan jalan kembali.** Untuk setiap perubahan, ketahui cara rollback atau roll forward, dan latih. Perubahan data memerlukan perhatian khusus, karena rollback kode tidak dapat membatalkannya.
7. **Pantau dampak setiap rilis.** Amati tingkat kesalahan, latensi, dan indikator yang terlihat pengguna selama periode tertentu setelah rilis, dan permudah menghubungkan perubahan dengan gejala.
8. **Tuliskan apa yang diperiksa pipeline.** Deskripsi singkat setiap tahap, tujuannya, dan pemiliknya memungkinkan auditor, staf baru, dan operasi memahaminya.
9. **Libatkan operasi sejak awal.** Bawa orang operasi dan dukungan ke dalam desain, agar logging, runbook, dan peringatan menjadi bagian dari perubahan, bukan renungan belakangan.
10. **Perbaiki pipeline sebagai produk.** Beri ia pemilik dan backlog. Pipeline yang lambat dan tidak stabil mengajari orang untuk menghindarinya.

## Pertanyaan untuk dibahas bersama tim Anda

**Berapa lama perubahan terkecil kita sampai ke produksi, dan di mana ia menunggu?**
Pertanyaan ini menemukan keterlambatan. Minta contoh nyata dengan stempel waktu. Penantian khasnya adalah pengujian manual, persetujuan, akses lingkungan, dan jendela rilis. Lanjutkan dengan memilih penantian terlama dan langkah pertama untuk memangkasnya.

**Persetujuan manual mana yang dapat digantikan pemeriksaan pipeline, dan risiko apa yang dikendalikan masing-masing?**
Setiap persetujuan ada karena suatu alasan, sering kali insiden bertahun-tahun lalu. Tanyakan risiko apa yang ditangani dan bukti apa yang akan memuaskan pemberi persetujuan. Harapkan perlawanan dari pemilik kontrol; minta mereka membantu merancang penggantinya. Lanjutkan dengan mencoba satu pengganti dengan tanggal tinjauan.

**Apa yang terjadi ketika rilis salah? Seberapa cepat kita bisa membalikkannya, dan sudahkah kita berlatih?**
Tim sering menemukan bahwa rollback hanya ada di atas kertas. Tanyakan kapan terakhir kali dipakai. Lanjutkan dengan merencanakan latihan di lingkungan yang aman.

**Pengujian mana yang kita percayai, dan mana yang kita abaikan?**
Pengujian yang tidak stabil mengikis kepercayaan. Tanyakan kegagalan mana yang dianggap enteng oleh tim. Harapkan jawaban jujur tentang pengujian yang "biasanya lolos setelah diulang". Lanjutkan dengan memilih satu pengujian tidak stabil untuk diperbaiki atau dihapus.

**Bagaimana kita tahu dalam satu jam apakah rilis merugikan pengguna?**
Pertanyaan ini menguji pemantauan. Jawabannya berkisar dari "kami menunggu keluhan" hingga dasbor dan peringatan otomatis. Tanyakan indikator mana yang akan menangkap rilis buruk terakhir. Lanjutkan dengan memilih satu indikator untuk ditambahkan dan diperiksa.

**Di mana AI dapat membantu di pipeline kita, dan siapa yang meninjau hasilnya?**
AI dapat menyusun pengujian, meninjau perubahan, dan menjelaskan kegagalan. Tanyakan apa yang akan dihasilkan setiap pemakaian dan siapa yang bertanggung jawab. Harapkan antusiasme dan sedikit pengawasan. Lanjutkan dengan memilih satu pemakaian berisiko rendah dengan tinjauan manusia dan ukuran kesalahan.

## Dalam praktik: contoh manajemen layanan

Tim digital sebuah grup rumah sakit regional menjalankan layanan janji temu pasien yang dipakai 30 klinik. Rilis dilakukan triwulanan dalam jendela akhir pekan dengan daftar periksa pengujian yang besar. Dua rilis terakhir melampaui jadwal, dan salah satunya memperkenalkan kesalahan yang muncul pada Senin pagi berupa janji temu yang dipesan ganda.

Ketua tim, bekerja dengan pemilik layanan, mengusulkan langkah-langkah kecil. Pertama mereka mengotomatiskan build dan 200 pengujian regresi terpenting, agar berjalan pada setiap perubahan. Kedua mereka menaruh konfigurasi ke dalam kontrol versi dan mewajibkan tinjauan sejawat untuk setiap perubahan. Ketiga mereka menambahkan feature toggle agar aturan pemesanan baru dapat diaktifkan untuk satu klinik lebih dulu. Petugas keselamatan klinis, yang menandatangani layanan, meminta bukti bahwa setiap perubahan telah diuji dan ditinjau. Tim menunjukkan catatan pipeline untuk setiap rilis.

Setelah empat bulan, tim merilis setiap minggu, dan risiko Senin pagi lebih kecil karena perubahan lebih kecil dan terlihat. Perubahan aturan pemesanan ganda pertama kali diaktifkan di satu klinik, tertangkap pada hari kedua ketika seorang resepsionis memperhatikan pesan yang aneh, dan dimatikan dalam hitungan menit.

Yang berubah: rilis tidak lagi menjadi peristiwa akhir pekan dan petugas keselamatan meninjau bukti alih-alih menghadiri rapat. Yang masih sulit: rangkaian pengujian masih melewatkan beberapa kasus pemesanan yang kompleks, antarmuka lama ke sistem rekam pasien tidak punya pengujian otomatis, dan dua klinik tidak senang dengan perubahan mingguan karena memengaruhi pelatihan mereka. Tim menyepakati kalender perubahan untuk fitur yang sensitif terhadap pelatihan dan terus menambah pengujian ketika insiden mengungkap celah.

## Empat perspektif

### Tim produk dan pengiriman

Miliki pipeline dan apa yang dirilisnya. Jaga perubahan tetap kecil, pengujian tepercaya, dan toggle rapi. Sertakan logging, peringatan, dan runbook dalam definisi selesai, dan amati dampak setiap rilis.

### Tim layanan dan operasi

Bantu menentukan apa yang diperiksa pipeline dan apa yang ditunjukkan pemantauan. Bekerjalah dengan pengembang pada rollback dan pada seperti apa "sehat" itu. Minta catatan rilis ketika insiden dimulai.

### Kepemimpinan dan tata kelola

Danai pipeline, pengujian, dan pemantauan, yang mudah kekurangan dana. Minta bukti kendali dari pipeline alih-alih rapat. Jangan memakai ukuran pengiriman untuk meranking tim.

### Pelanggan dan pengguna

Harapkan perubahan kecil yang sering dan perbaikan yang cepat. Beri tahu tim ketika perubahan mengganggu Anda, misalnya saat pelatihan atau periode sibuk, dan minta pemberitahuan untuk perubahan yang signifikan.

## Agile, AI, otomatisasi, dan analitik

### Agile

Pengiriman berkelanjutan adalah sisi penyampaian dari praktik agile: perubahan yang berfungsi dalam potongan kecil, dengan pemangku kepentingan terlibat dan tinjauan teratur tentang apa yang diperbaiki. Perhatian: jangan menyamakannya dengan metode tertentu; tim dapat menyampaikan secara berkelanjutan dengan atau tanpa sprint.

### AI

Asisten AI dapat menyusun kode, pengujian, dan catatan rilis, serta merangkum kegagalan, dengan pemilik yang ditunjuk dan seseorang meninjau setiap keluaran sebelum masuk pipeline. Perhatian: kode yang dihasilkan dapat membawa masalah keamanan atau lisensi; jalankan pemeriksaan yang sama seperti untuk perubahan apa pun, dan lacak persentase perubahan berbantuan AI yang menyebabkan cacat. Lihat Topik 5.4 — AI generatif untuk insiden, pengetahuan, dan perubahan.

### Otomatisasi

Otomatiskan build, pengujian, pemindaian keamanan, deployment, dan jejak bukti, dan buat rollback otomatis bila bisa. Perhatian: pipeline hijau menunjukkan pemeriksaan lolos, bukan bahwa perubahannya benar; pertahankan tinjauan manusia untuk keputusan desain dan risiko. Lihat Topik 6.4 — Pipeline dan perubahan otomatis.

### Analitik

Lacak lead time perubahan, frekuensi deployment, tingkat kegagalan perubahan, dan waktu pemulihan, sebagai pertanyaan bagi sistem. Perhatian: ketika ukuran ini menjadi target, tim memecah perubahan secara artifisial atau menghindari pencatatan kegagalan; gunakan dengan pagar pengaman dalam buku *Service Management Metrics*.

## Mode kegagalan umum

- **Rilis sering tanpa pengujian.** Kecepatan naik dan kepercayaan turun. Bangun pemeriksaan lebih dulu, dan rilis sesering yang didukungnya.
- **Jalur terpisah untuk perubahan mendesak.** Jalur mendesak tidak teruji dan berisiko. Buat jalur utama cukup cepat untuk keadaan darurat.
- **Feature toggle berumur panjang.** Toggle lama menumpuk dan tak seorang pun tahu apa yang menyala. Lacak toggle dan buang setelah peluncuran.
- **Tidak ada latihan rollback.** Rollback gagal ketika dibutuhkan. Latih di lingkungan yang aman.
- **Pengujian tidak stabil diabaikan.** Orang berhenti percaya pada build merah. Perbaiki atau buang pengujian yang tidak stabil.
- **Memperlakukan pipeline sebagai pekerjaan orang lain.** Ia membusuk. Beri ia pemilik dan backlog.
- **Ukuran dipakai untuk meranking tim.** Tim memanipulasi angka. Gunakan ukuran untuk menemukan masalah, bukan membandingkan orang.

## Model kematangan

| Dimensi | Memulai | Mengembangkan | Menstandardisasi | Mengelola | Mengorkestrasi |
|---|---|---|---|---|---|
| Frekuensi rilis | Triwulanan atau lebih jarang | Bulanan | Mingguan atau lebih, pada jalur standar | Frekuensi disetel menurut risiko dan permintaan | Berkelanjutan lintas layanan, dengan progressive delivery |
| Otomatisasi | Build dan pengujian manual | Build otomatis | Build, pengujian, dan deploy otomatis | Pipeline dipantau dan diperbaiki sebagai produk | Pipeline dibagikan dan ditata kelola lintas tim |
| Bukti kendali | Rapat dan daftar periksa | Sebagian catatan | Catatan pipeline untuk setiap perubahan | Bukti disampel dan ditinjau | Bukti berkelanjutan, dengan tinjauan manusia atas risiko |
| Pemulihan | Rollback tidak jelas | Rollback didokumentasikan | Rollback atau roll-forward dilatih | Waktu pemulihan diukur | Pemulihan diotomatiskan dan diuji secara teratur |

## Daftar periksa

- [ ] Jalur utama dapat dirilis setiap saat.
- [ ] Setiap perubahan melalui satu pipeline otomatis.
- [ ] Pengujian yang kami percayai berjalan pada setiap perubahan; pengujian tidak stabil diperbaiki atau dibuang.
- [ ] Kami memisahkan deployment dari rilis, dengan feature toggle dilacak.
- [ ] Kami tahu cara rollback atau roll forward dan telah melatihnya.
- [ ] Kami memantau dampak setiap rilis.
- [ ] Pipeline memiliki pemilik, backlog, dan deskripsi pemeriksaannya.
- [ ] Perubahan berbantuan AI ditinjau dan dilacak.

## Prompt AI

**Temukan penantian dalam sebuah rilis.**

```text
Here is a timeline of our last release, from "change ready" to "in production": [paste timeline with timestamps and who acted].
List each wait and how long it was, then give two questions per wait to find its cause. Do not assume causes.
List what you are unsure of.
```

**Usulkan pemeriksaan pipeline untuk sebuah risiko.**

```text
Our service: [describe]. The risk we want to control: [describe, such as untested configuration change].
List five automated checks that could address it, what each would catch, and what each would miss. Do not claim a check removes the risk.
Mark assumptions and list what you are unsure of.
```

**Susun draf rencana latihan rollback.**

```text
Our release process: [paste steps]. Our rollback method: [describe, or write "unknown"].
Draft a one-page rehearsal plan with steps, roles, success criteria, and what to record. Include a safe environment only; do not suggest rehearsing in production.
List what you are unsure of.
```

## Skill AI

- [shift-left-testing](../../../../skills/shift-left-testing/SKILL.md): gunakan untuk memindahkan pengujian lebih awal dalam pipeline.
- [test-driven-development](../../../../skills/test-driven-development/SKILL.md): gunakan untuk membangun pengujian bersama perubahan.
- [release-notes](../../../../skills/release-notes/SKILL.md): gunakan untuk mendeskripsikan setiap rilis bagi pelanggan dan dukungan.

## Sumber utama

- Jez Humble dan David Farley, *Continuous Delivery* (2010): buku yang menamai dan menjelaskan praktik ini.
- DORA (dora.dev): riset dan laporan tentang kinerja pengiriman perangkat lunak.
- Wikipedia, "Continuous delivery": ringkasan prinsip dan praktik terkait.
- Wikipedia, "Continuous integration": praktik yang mendasarinya.

## Referensi

1. Continuous delivery — Wikipedia — https://en.wikipedia.org/wiki/Continuous_delivery
2. Continuous integration — Wikipedia — https://en.wikipedia.org/wiki/Continuous_integration
3. Continuous deployment — Wikipedia — https://en.wikipedia.org/wiki/Continuous_deployment
4. Feature toggle — Wikipedia — https://en.wikipedia.org/wiki/Feature_toggle
5. Blue–green deployment — Wikipedia — https://en.wikipedia.org/wiki/Blue%E2%80%93green_deployment
6. Little's law — Wikipedia — https://en.wikipedia.org/wiki/Little%27s_law
7. Version control — Wikipedia — https://en.wikipedia.org/wiki/Version_control
8. Test automation — Wikipedia — https://en.wikipedia.org/wiki/Test_automation
9. DevOps — Wikipedia — https://en.wikipedia.org/wiki/DevOps
10. DORA — DevOps Research and Assessment — https://dora.dev
