# Manajemen Pemasok

**Manajemen pemasok memastikan bahwa vendor, penyedia cloud, dan mitra yang menjadi sandaran suatu layanan menyampaikan apa yang disepakati dan bahwa Anda dapat mengatasi ketika mereka tidak; ia berhasil ketika pemasok diperlakukan sebagai bagian dari layanan, kontrak sesuai dengan tingkat layanan yang Anda janjikan, dan hubungan mencakup tinjauan bersama serta rencana keluar.**

## Mengapa ini penting

Sedikit layanan yang disampaikan oleh satu organisasi saja. Aplikasi seluler sebuah bank berjalan di platform cloud, memakai pemroses pembayaran, mengirim pesan melalui pemasok telekomunikasi, dan didukung di luar jam kerja oleh penyedia layanan terkelola. Masing-masing adalah mata rantai dalam rangkaian. Ketika satu gagal, pelanggan tidak membedakan antara bank dan pemasoknya. Bank yang bertanggung jawab.

Manajemen pemasok adalah praktik yang menghadapi kenyataan ini. Ia mencakup memilih pemasok, menyepakati apa yang akan mereka sediakan, memantau kinerja mereka, mengelola hubungan, dan merencanakan perubahan atau kegagalan. Ketika berfungsi, pemasok menjadi bagian dari tim layanan, dengan tujuan bersama dan komunikasi terbuka. Ketika gagal, organisasi menemukan terlalu terlambat bahwa kontrak menjanjikan lebih sedikit daripada layanan yang telah mereka janjikan kepada pelanggan mereka sendiri, atau bahwa meninggalkan pemasok akan memakan dua tahun.

Layanan modern membuatnya lebih sulit dan lebih penting. Platform cloud dan produk software-as-a-service menyediakan kemampuan dalam hitungan menit dan bisa sulit ditinggalkan. Layanan AI menambah ketergantungan baru pada model dan praktik data yang tidak dapat dilihat pembeli. Topik ini menjelaskan praktiknya, pengaturan utama, dan jebakannya. Ia terhubung dengan manajemen tingkat layanan (Topik 3.7 — Manajemen Tingkat Layanan), kontinuitas layanan (Topik 3.12 — Manajemen Kontinuitas Layanan), dan manajemen keuangan (Topik 4.5 — Manajemen keuangan dan FinOps). Ia tidak memberikan nasihat hukum atau pengadaan; dapatkan itu dari spesialis yang tepat.

## Konsep inti

**Pemasok.** Pihak yang menyediakan produk atau layanan kepada organisasi, seperti vendor, kontraktor, penyedia cloud, atau mitra. Dalam istilah ITIL 4, pemasok muncul dalam dimensi "mitra dan pemasok" (lihat Topik 1.6 — Empat Dimensi Manajemen Layanan). Pemasok juga bisa pesaing, pelanggan, atau bagian dari kelompok korporat yang sama.

**Manajemen pemasok.** Praktik memastikan bahwa pemasok organisasi dan kinerja mereka dikelola dengan tepat untuk mendukung penyediaan produk dan layanan bermutu yang lancar. Wikipedia menjelaskan gagasan terkait di bawah supplier relationship management dan vendor management system.

**Alih daya (outsourcing).** Mengontrakkan suatu aktivitas kepada pihak eksternal. Wikipedia menjelaskan outsourcing dan offshoring, dengan motif dan risikonya. Alih daya memindahkan pekerjaan; ia tidak memindahkan tanggung jawab atas hasil kepada pelanggan.

**Multisourcing dan integrasi.** Banyak organisasi memakai beberapa pemasok, masing-masing untuk bagian layanan yang berbeda. Wikipedia menjelaskan multisourcing. Seseorang harus mengoordinasikan mereka agar pelanggan melihat satu layanan. Peran ini kadang disebut service integration and management (SIAM), yang dijelaskan di Wikipedia, dan dapat dijalankan oleh pelanggan, pemasok utama, atau spesialis. Lihat skill service-integration-and-management dalam panduan ini.

**Cloud dan software as a service.** Cloud computing dan software as a service memindahkan infrastruktur dan aplikasi kepada penyedia. Wikipedia menjelaskan keduanya. Tanggung jawab dibagi: penyedia mengamankan dan menjalankan platform; pelanggan mengonfigurasi, memakai, dan mengamankan apa yang ditaruhnya di sana. Pembagiannya berbeda menurut model layanan, dan salah memahaminya adalah penyebab insiden yang umum. Baca uraian penyedia tentang model tanggung jawab bersamanya.

**Kontrak dan perjanjian.** Kontrak menyatakan apa yang akan disediakan pemasok, dengan harga berapa, pada tingkat layanan apa, dan dengan pemulihan apa. Kontrak penopang mendukung tingkat layanan yang telah Anda janjikan kepada pelanggan Anda sendiri; keduanya harus konsisten. Lihat Topik 3.7 — Manajemen Tingkat Layanan. Artikel Wikipedia tentang contract management menjelaskan pengelolaan perjanjian sepanjang masa hidupnya.

**Uji tuntas (due diligence).** Memeriksa pemasok sebelum berkomitmen: kesehatan keuangan, praktik keamanan, referensi, sertifikasi, dan kemampuan memenuhi kebutuhan. Wikipedia menjelaskan due diligence. Sesuaikan skala pemeriksaan dengan pentingnya pemasok.

**Manajemen kinerja.** Memantau apa yang disampaikan pemasok terhadap apa yang disepakati, dengan tinjauan berkala. Ukuran harus mencerminkan apa yang penting bagi Anda dan didasarkan pada data yang dapat Anda periksa. Key performance indicator dijelaskan di Wikipedia, begitu pula kehati-hatian atasnya. Lihat buku *Service Management Metrics*.

**Hubungan dan tata kelola.** Hubungan pemasok memerlukan kontak yang ditunjuk di kedua sisi, rapat teratur, jalur eskalasi, dan cara untuk menyampaikan kekhawatiran. Nadanya penting: pemasok yang diperlakukan sebagai lawan cenderung melindungi diri; pemasok yang diperlakukan sebagai mitra cenderung membagikan masalah lebih awal.

**Vendor lock-in.** Keadaan di mana berpindah pemasok mahal atau tidak praktis. Wikipedia menjelaskan vendor lock-in. Lock-in kadang merupakan harga yang dapat diterima demi nilai; seharusnya menjadi pilihan yang disadari. Standar terbuka dan interoperabilitas, yang dijelaskan di Wikipedia, menguranginya.

**Perencanaan keluar.** Rencana untuk mengakhiri hubungan: bagaimana data dan layanan akan dipindahkan, berapa lama, berapa biayanya, dan apa yang harus disediakan pemasok. Wikipedia menjelaskan exit strategy secara umum. Rencana keluar yang tidak pernah diperiksa hanyalah harapan. Untuk pemasok kritis, uji sebagiannya.

**Konsentrasi dan ketergantungan.** Bergantung besar pada satu pemasok, atau pada beberapa yang bersandar pada penyedia dasar yang sama, menciptakan risiko konsentrasi. Petakan ketergantungan, termasuk yang tidak langsung. Lihat Topik 3.12 — Manajemen Kontinuitas Layanan.

**Keamanan informasi dan data.** Pemasok sering menangani data sensitif. Sepakati persyaratan keamanan, pelaporan insiden, hak audit, serta lokasi dan pengembalian data. Periksa hukum yang berlaku bagi Anda. Lihat Topik 3.13 — Manajemen Keamanan Informasi.

**Pemasok AI.** Pemasok model dan layanan AI membawa pertanyaan khusus: data apa yang mereka pakai untuk melatih, apakah masukan Anda disimpan, bagaimana perubahan model diumumkan, dan pengawasan apa yang dapat Anda terapkan. Lihat Topik 5.6 — Tata kelola, risiko, dan kepatuhan AI.

**Bagaimana lensa-lensa cocok.** Manajemen pemasok menerapkan perbaikan berkelanjutan pada hubungan: tinjauan teratur dan perbaikan bersama. AI dapat membantu membaca kontrak dan merangkum kinerja, di bawah tinjauan hukum dan manusia. Otomatisasi mengumpulkan data kinerja dan tanggal perpanjangan. Analitik menunjukkan kinerja dan pengeluaran pemasok.

## Praktik terbaik

1. **Kenali pemasok Anda dan apa yang disediakan masing-masing.** Simpan register pemasok dengan layanan yang didukungnya, tanggal kontrak, pemilik, dan tingkat kritis. Sertakan layanan cloud yang dibeli dengan kartu.
2. **Sesuaikan kontrak dengan komitmen Anda sendiri.** Untuk setiap layanan yang Anda janjikan, periksa bahwa setiap kontrak pendukung mengizinkannya. Tutup kesenjangan dengan menegosiasi ulang, menambah redundansi, atau mengubah janji Anda.
3. **Sesuaikan uji tuntas dengan risiko.** Periksa pemasok kritis dengan teliti; pakai pemeriksaan lebih ringan untuk yang kecil. Tinjau kembali ketika pemasok berganti kepemilikan atau ruang lingkup.
4. **Tunjuk pemilik di kedua sisi.** Setiap pemasok memiliki pemilik hubungan internal dan kontak yang ditunjuk di pemasok. Tetapkan jalur eskalasi di muka.
5. **Tinjau kinerja secara berkala.** Bertemu sesuai jadwal, lihat data dan insiden, dan sepakati tindakan. Bagikan kinerja layanan Anda sendiri agar pemasok melihat dampaknya.
6. **Perlakukan pemasok sebagai bagian dari tim di tempat yang penting.** Sertakan mereka dalam tinjauan insiden dan dalam perencanaan perubahan yang memengaruhi mereka. Bagikan informasi yang membantu mereka membantu Anda.
7. **Pahami tanggung jawab bersama.** Untuk layanan cloud dan perangkat lunak, tuliskan apa yang dilakukan pemasok dan apa yang Anda lakukan. Periksa bahwa bagian Anda tercakup.
8. **Rencanakan keluar.** Untuk pemasok kritis, dokumentasikan bagaimana Anda akan berpindah, termasuk ekspor data, jangka waktu, dan biaya. Uji sebagiannya, seperti mengekspor data.
9. **Awasi konsentrasi.** Petakan layanan mana yang bergantung pada pemasok yang sama atau penyedia dasar yang sama. Putuskan di mana redundansi layak dibayar.
10. **Sertakan pertanyaan keamanan, privasi, dan AI.** Tanyakan kepada pemasok bagaimana mereka melindungi data, melaporkan insiden, dan memakai atau melatih dengan data Anda, dan catat jawabannya.

## Pertanyaan untuk dibahas bersama tim Anda

**Pemasok mana yang dapat menghentikan layanan kita yang paling penting, dan apa yang akan kita lakukan?**
Daftarkan mereka, termasuk yang tidak langsung. Harapkan satu atau dua kejutan. Lanjutkan dengan memilih satu pemasok kritis dan menanyakan bagaimana kita akan mengatasi gangguan seminggu.

**Di mana kontrak pemasok menjanjikan lebih sedikit daripada yang kita janjikan kepada pelanggan?**
Letakkan angkanya berdampingan. Harapkan kesenjangan pada waktu respons dan ketersediaan. Lanjutkan dengan memilih satu kesenjangan untuk ditutup atau disampaikan kepada pelanggan.

**Siapa pemilik setiap hubungan pemasok, dan kapan terakhir kali mereka bertemu pemasok?**
Kepemilikan sering diasumsikan. Tanyakan tanggal pertemuan terakhir dan apa hasilnya. Lanjutkan dengan menetapkan pemilik dan jadwal.

**Berapa lama waktu yang dibutuhkan untuk meninggalkan pemasok terbesar kita, dan apa yang akan hilang?**
Cobalah menjawab secara konkret. Harapkan "bertahun-tahun" atau "tidak tahu". Lanjutkan dengan menyusun rencana keluar kasar dan menguji ekspor data.

**Apa yang kita asumsikan ditangani penyedia cloud untuk kita, dan apa yang sebenarnya harus kita lakukan?**
Periksa dokumentasi penyedia. Harapkan asumsi tentang cadangan, akses, dan konfigurasi. Lanjutkan dengan mendaftar tanggung jawab kita sendiri dan siapa pemilik masing-masing.

**Apa yang dilakukan setiap pemasok AI dengan data kita, dan bagaimana mereka akan memberi tahu kita tentang perubahan model?**
Baca ketentuannya. Harapkan ketidakpastian. Lanjutkan dengan bertanya langsung kepada pemasok dan mencatat jawabannya dalam register.

## Dalam praktik: contoh manajemen layanan

Layanan pengisian pajak daring sebuah otoritas pajak nasional bergantung pada lima pemasok: platform cloud, penyedia verifikasi identitas, gerbang SMS untuk kode sekali pakai, layanan pemindaian dokumen, dan penyedia layanan terkelola yang mendukung platform di luar jam kerja. Komitmen otoritas sendiri kepada wajib pajak adalah bahwa layanan tersedia selama musim pengisian dengan respons empat jam atas insiden.

Pemilik layanan membuat register satu halaman dan membandingkan setiap kontrak dengan komitmen itu. Kontrak penyedia layanan terkelola menjanjikan respons delapan jam di luar jam kerja. Kontrak gerbang SMS tidak menyebut ketersediaan dan tidak ada kewajiban melaporkan insiden. Kontrak penyedia identitas harus diperpanjang dalam empat bulan, dan keluar akan memakan sekitar sembilan bulan karena cara data identitas disimpan.

Ia mengambil tiga tindakan. Ia menegosiasi ulang respons penyedia layanan terkelola menjadi empat jam untuk musim pengisian, dengan harga yang diserahkan kepada pemegang anggaran untuk diputuskan. Ia menambahkan gerbang SMS kedua sebagai cadangan, dan menyepakati untuk menguji peralihannya. Dan ia memulai kajian keluar untuk penyedia identitas, dimulai dengan ekspor data uji, dan memakainya dalam diskusi perpanjangan untuk meminta ketentuan yang lebih baik tentang portabilitas data. Ia menjadwalkan tinjauan triwulanan dengan masing-masing dari kelima pemasok, dihadiri manajer akun pemasok.

Yang berubah: otoritas dapat menyatakan janji mana kepada wajib pajak yang didukung setiap kontrak, dan cadangan SMS berfungsi pada pengujian pertama. Yang masih sulit: biaya respons tambahan untuk penyedia layanan terkelola diperdebatkan oleh keuangan; kegagalan regional platform cloud sendiri tetap menjadi ketergantungan tunggal yang perbaikannya belum didanai otoritas; dan penyedia identitas belum menyetujui ketentuan portabilitas. Pemilik layanan mencatat ini sebagai risiko terbuka dengan pemilik.

## Empat perspektif

### Tim produk dan pengiriman

Ketahui pemasok mana yang menjadi sandaran produk Anda dan apa yang mereka janjikan. Rancang untuk kegagalan pemasok bila praktis, dan bangun integrasi yang memungkinkan peralihan. Libatkan pemasok dalam perencanaan perubahan yang memengaruhi mereka.

### Tim layanan dan operasi

Jaga kontak pemasok dan jalur eskalasi tetap mutakhir, bagikan insiden dengan pemasok segera, dan catat kinerja mereka. Angkat kesenjangan kontrak yang Anda temui dalam praktik.

### Kepemimpinan dan tata kelola

Putuskan ketergantungan mana yang dapat diterima, dan danai redundansi dan pekerjaan keluar yang menyusul. Minta bukti bahwa kontrak mendukung komitmen Anda. Waspadai konsentrasi dan lock-in.

### Pelanggan dan pengguna

Anda mungkin tidak melihat pemasok penyedia Anda, tetapi Anda bergantung pada mereka. Tanyakan ketergantungan apa yang dimiliki layanan, dan apa yang terjadi jika satu gagal. Harapkan informasi yang jelas dalam insiden besar.

## Agile, AI, otomatisasi, dan analitik

### Agile

Sertakan pemasok dalam tinjauan dan perbaikan bersama yang teratur, dan bidik siklus umpan balik yang singkat dengan mereka. Perhatian: tim agile dapat mengadopsi layanan dengan cepat tanpa pemeriksaan; jaga register pemasok tetap mutakhir dan tinjau ketergantungan baru.

### AI

AI dapat membantu membaca kontrak, membandingkan ketentuan dengan komitmen layanan, dan merangkum laporan pemasok, di bawah tinjauan staf hukum dan pengadaan. Tunjuk pemilik. Perhatian: ringkasan kontrak oleh AI dapat melewatkan atau mengarang klausul; selalu periksa terhadap dokumennya, dan ambil nasihat hukum untuk penafsiran. Lihat Topik 5.6 — Tata kelola, risiko, dan kepatuhan AI.

### Otomatisasi

Otomatiskan pengumpulan data kinerja pemasok, pengingat perpanjangan, dan pemeriksaan konfigurasi cloud, dengan pemilik untuk pengecualian. Perhatian: penyediaan otomatis layanan pihak ketiga dapat menciptakan ketergantungan yang tidak terlacak; kaitkan penyediaan dengan register. Lihat Topik 6.1 — Strategi otomatisasi.

### Analitik

Lacak kinerja pemasok terhadap ukuran yang disepakati, pengeluaran menurut pemasok, porsi insiden, dan konsentrasi ketergantungan. Perhatian: angka yang dilaporkan pemasok mungkin didefinisikan menguntungkan mereka, dan penalti yang terkait satu ukuran mengundang manipulasi; verifikasi dengan data Anda sendiri. Lihat buku *Service Management Metrics* dan Topik 7.3 — Pengukuran dan pelaporan.

## Mode kegagalan umum

- **Kontrak di bawah komitmen.** Janji melebihi apa yang harus disampaikan pemasok. Bandingkan dan tutup kesenjangan.
- **Pemasok di luar register.** Layanan bayangan menjamur. Simpan register dan kaitkan dengan pembelian.
- **Hubungan yang bermusuhan.** Pemasok menyembunyikan masalah. Bagikan tujuan dan tinjau bersama.
- **Tidak ada rencana keluar.** Berpindah tidak praktis. Rencanakan dan uji keluar yang kritis.
- **Tanggung jawab bersama disalahpahami.** Layanan cloud diasumsikan aman dan dicadangkan. Dokumentasikan siapa melakukan apa.
- **Konsentrasi tersembunyi.** Beberapa pemasok bersandar pada penyedia yang sama. Petakan ketergantungan tidak langsung.
- **Mengabaikan ketentuan data AI.** Masukan disimpan atau dipakai untuk pelatihan. Tanyakan dan catat.

## Model kematangan

| Dimensi | Memulai | Mengembangkan | Menstandardisasi | Mengelola | Mengorkestrasi |
|---|---|---|---|---|---|
| Visibilitas | Pemasok diketahui oleh tim | Register pemasok utama | Register dengan pemilik, tingkat kritis, dan kontrak | Register dijaga mutakhir dari pembelian dan penemuan | Ketergantungan dipetakan lintas pemasok dan penyedia tidak langsung |
| Kontrak | Ditandatangani dan diarsipkan | Ditinjau saat perpanjangan | Diselaraskan dengan komitmen layanan kami | Kinerja dan pemulihan ditinjau | Kontrak disesuaikan di seluruh rantai pasok |
| Hubungan | Transaksional | Kontak yang ditunjuk | Tinjauan teratur dengan tindakan | Perbaikan bersama dan pembelajaran bersama | Pemasok terintegrasi dalam perencanaan dan pemulihan |
| Keluar dan risiko | Tidak ada | Kesadaran | Rencana keluar untuk pemasok kritis | Sebagian diuji | Redundansi dan jalan keluar dikelola di seluruh portofolio |

## Daftar periksa

- [ ] Kami menyimpan register pemasok dengan pemilik, tingkat kritis, dan tanggal kontrak.
- [ ] Setiap kontrak pemasok dibandingkan dengan komitmen yang didukungnya.
- [ ] Setiap pemasok kritis memiliki pemilik hubungan yang ditunjuk dan jalur eskalasi.
- [ ] Kami mengadakan tinjauan teratur dengan pemasok kritis.
- [ ] Kami telah mendokumentasikan tanggung jawab bersama untuk layanan cloud.
- [ ] Pemasok kritis memiliki rencana keluar, dengan sebagian diuji.
- [ ] Kami mengetahui risiko konsentrasi kami.
- [ ] Kami telah bertanya kepada pemasok AI dan data tentang pemakaian data dan perubahan model.

## Prompt AI

**Bandingkan kontrak dengan komitmen kita.**

```text
Here are the relevant terms from a supplier contract: [paste clauses]. Here are the commitments we make to our own customers for the supported service: [paste].
List each of our commitments and say whether the contract text supports it, conflicts with it, or is silent, quoting the exact words. Do not give legal advice or interpret ambiguous clauses.
List what you are unsure of.
```

**Susun draf pertanyaan tinjauan pemasok.**

```text
Supplier: [name and what they provide]. Recent facts: [incidents, performance data, changes].
Draft ten questions for the quarterly review, covering performance, incidents, changes, risks, and improvements. Avoid blame and do not suggest facts I did not give.
List what you are unsure of.
```

**Petakan ketergantungan dari sebuah daftar.**

```text
Here is a list of our services and the suppliers each uses: [paste]. Here is what I know about what each supplier itself depends on: [paste, or write "unknown"].
Produce a table showing, for each supplier, which services depend on it, and highlight suppliers that appear in many services or that share an underlying provider. Mark every assumption.
List what you are unsure of.
```

## Skill AI

- [vendor-management](../../../../skills/vendor-management/SKILL.md): gunakan untuk mengelola pemilihan dan kinerja pemasok.
- [service-integration-and-management](../../../../skills/service-integration-and-management/SKILL.md): gunakan untuk mengoordinasikan beberapa pemasok menjadi satu layanan.
- [service-level-agreement](../../../../skills/service-level-agreement/SKILL.md): gunakan untuk menyelaraskan perjanjian di seluruh rantai.
- [risk-register](../../../../skills/risk-register/SKILL.md): gunakan untuk mencatat risiko dan keputusan pemasok.

## Sumber utama

- PeopleCert, halaman sertifikasi ITIL: uraian pemilik tentang praktik manajemen pemasok.
- Wikipedia, "Supplier relationship management" dan "Outsourcing": ikhtisar gagasan ini.
- Wikipedia, "Vendor lock-in": ringkasan risiko dan penyebabnya.
- Dokumentasi penyedia cloud tentang model tanggung jawab bersama mereka sendiri: pernyataan otoritatif tentang siapa melakukan apa.

## Referensi

1. Supplier relationship management — Wikipedia — https://en.wikipedia.org/wiki/Supplier_relationship_management
2. Vendor management system — Wikipedia — https://en.wikipedia.org/wiki/Vendor_management_system
3. Outsourcing — Wikipedia — https://en.wikipedia.org/wiki/Outsourcing
4. Multisourcing — Wikipedia — https://en.wikipedia.org/wiki/Multisourcing
5. Service integration and management — Wikipedia — https://en.wikipedia.org/wiki/Service_integration_and_management
6. Vendor lock-in — Wikipedia — https://en.wikipedia.org/wiki/Vendor_lock-in
7. Contract management — Wikipedia — https://en.wikipedia.org/wiki/Contract_management
8. Due diligence — Wikipedia — https://en.wikipedia.org/wiki/Due_diligence
9. Exit strategy — Wikipedia — https://en.wikipedia.org/wiki/Exit_strategy
10. Cloud computing — Wikipedia — https://en.wikipedia.org/wiki/Cloud_computing
11. Interoperability — Wikipedia — https://en.wikipedia.org/wiki/Interoperability
