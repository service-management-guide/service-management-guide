# Kepemilikan Produk dan Layanan

**Kepemilikan produk dan layanan berarti satu orang yang ditunjuk bertanggung jawab atas sebuah produk atau layanan sepanjang masa hidupnya, dari gagasan hingga pensiun, termasuk menjalankannya; ini adalah model di balik "you build it, you run it", dan peralihan ke arahnya merupakan tema dalam panduan ITIL terbaru.**

## Mengapa ini penting

Banyak organisasi teknologi dibangun di sekitar proyek. Sebuah tim didanai, membangun sesuatu, menyerahkannya ke operasi, lalu bubar. Orang yang memahami desainnya pergi tepat ketika layanan mulai berjalan. Operasi mewarisi sistem yang tidak mereka pilih, dengan dokumentasi yang ditulis terburu-buru. Tak seorang pun memiliki pertanyaan "apakah ini masih layak dijalankan?" sampai krisis atau audit memaksanya.

Kepemilikan produk dan layanan membalik pola itu. Sebuah produk atau layanan memiliki tim yang stabil dan pemilik yang ditunjuk yang bertanggung jawab atas hasilnya dari waktu ke waktu: apakah memenuhi kebutuhan pelanggan, berapa biayanya, seberapa andal, dan kapan harus berubah atau berakhir. Pendanaan mengikuti produk, bukan proyek. Tim yang membangunnya tetap tinggal untuk menjalankan dan memperbaikinya.

Uraian pemilik tentang ITIL (Versi 5), yang diperkenalkan PeopleCert pada 2026, merujuk pada produk dan layanan digital secara bersamaan (lihat Topik 1.3 — ITIL 5). ITIL 4 sudah menyebut pemilik layanan dan, untuk produk, pemilik produk. Topik ini menjelaskan peran-peran itu, bagaimana keduanya berbeda, dan cara memperkenalkan kepemilikan tanpa sekadar melabeli ulang staf yang ada.

## Konsep inti

**Produk.** Konfigurasi sumber daya organisasi yang dirancang untuk menawarkan nilai kepada konsumen. Dalam perangkat lunak, produk adalah sesuatu seperti aplikasi, platform, atau sistem internal. Artikel Wikipedia tentang product management dan product lifecycle menjelaskan gagasan umum mengelola sesuatu dari pengenalan melalui pertumbuhan dan kematangan hingga penurunan.

**Layanan.** Sarana untuk memungkinkan penciptaan nilai bersama dengan memfasilitasi hasil yang ingin dicapai pelanggan (lihat Topik 1.1 — Manajemen layanan). Layanan disampaikan melalui produk dan sumber daya lain. Satu produk dapat mendukung beberapa layanan, dan satu layanan dapat memakai beberapa produk. Pembedaannya kurang penting dibandingkan memastikan keduanya dimiliki.

**Pemilik produk (product owner).** Dalam Scrum, satu orang bertanggung jawab memaksimalkan nilai produk dan mengelola backlog. Istilah ini telah menyebar melampaui Scrum untuk berarti orang yang memutuskan apa yang seharusnya dilakukan produk selanjutnya. Manajer produk di banyak organisasi menjalankan peran yang sama dengan tugas yang lebih luas seperti strategi, penetapan harga, dan analisis pasar.

**Pemilik layanan (service owner).** Orang yang bertanggung jawab atas penyampaian layanan tertentu: mutunya, biayanya, dan perbaikannya. Pemilik layanan bekerja dengan mereka yang menjalankannya dan dengan pelanggan. ITIL 4 menggambarkan pemilik layanan sebagai bertanggung jawab atas layanan sebagaimana dialami pelanggan.

**Pemilik praktik.** Orang yang bertanggung jawab atas bagaimana suatu praktik, seperti manajemen insiden atau pemampuan perubahan, berjalan di seluruh organisasi. Pemilik praktik bukan pemilik layanan; kedua peran bersinggungan di tempat suatu layanan memakai praktik.

**Kepemilikan produk dan layanan bersama-sama.** Dalam organisasi yang lebih kecil, satu orang bisa menjadi keduanya. Dalam yang lebih besar, pemilik produk memutuskan apa yang harus menjadi produk itu, dan pemilik layanan memastikan ia dijalankan dengan baik dan memenuhi tingkat layanan. Keduanya harus terus berhubungan, atau produk berkembang dengan cara yang tidak dapat didukung layanan.

**Akuntabilitas dan tanggung jawab.** Akuntabilitas berarti harus menjawab atas hasil dan memiliki wewenang memutuskan. Tanggung jawab berarti mengerjakan pekerjaannya. Pemilik bertanggung jawab secara akuntabel dan dapat mendelegasikan pekerjaan, tetapi tidak dapat mendelegasikan pertanggungjawabannya. Matriks penugasan tanggung jawab seperti RACI (responsible, accountable, consulted, informed) dapat membantu memperjelas; lihat skill RACI dalam panduan ini.

**Tim yang menetap.** Tim yang membangun dan menjalankan produk tetap bersama dari waktu ke waktu dan mempertahankan pengetahuannya. Pendanaan mendukung tim yang stabil dengan misi, bukan proyek sekali jalan. Pengetahuan, hubungan dengan pelanggan, dan rasa tanggung jawab tumbuh sebagai hasilnya.

**You build it, you run it.** Ungkapan ini, dikaitkan dengan Werner Vogels dari Amazon, merangkum gagasan bahwa tim yang membangun layanan bertanggung jawab menjalankannya. Ia membawa umpan balik dari produksi kepada orang yang dapat memperbaiki penyebabnya. Ia memerlukan dukungan, batas piket, dan layanan platform, atau akan membebani pengembang. Lihat Topik 2.5 — DevOps.

**Siklus hidup.** Produk atau layanan melewati tahap: gagasan, pengembangan, peluncuran, pertumbuhan, kematangan, dan pensiun. Pemilik bertanggung jawab atas setiap tahap, termasuk yang terakhir, yang sering diabaikan. Biaya pemeliharaan perangkat lunak bertahan bertahun-tahun; artikel Wikipedia tentang software maintenance menjelaskan jenis-jenisnya.

**Hasil di atas keluaran.** Pemilik dinilai atas hasil seperti keberhasilan pelanggan dan keandalan yang berkelanjutan, bukan hanya fitur yang dikirim. Memilih dan melacak hasil adalah bagian dari peran; lihat Topik 7.3 — Pengukuran dan pelaporan.

**Melabeli ulang bukanlah perubahan.** Mengganti "manajer proyek" menjadi "pemilik produk" dalam jabatan tanpa mengubah wewenang, pendanaan, atau akuntabilitas tidak memberikan manfaat dari model mana pun. Kepemilikan memerlukan kekuasaan untuk memprioritaskan, anggaran untuk bertindak, dan akuntabilitas untuk menjawab.

**Bagaimana lensa-lensa cocok.** Kepemilikan adalah prasyarat bagi lensa lainnya: seseorang harus bertanggung jawab atas pengiriman berkelanjutan, pemakaian AI, otomatisasi, dan analitik. Sistem AI juga membutuhkan pemilik (lihat Topik 5.8 — Model operasi dan keterampilan AI).

## Praktik terbaik

1. **Tunjuk pemilik untuk setiap produk dan layanan.** Taruh namanya di tempat yang dapat dilihat orang, seperti katalog. Periksa bahwa orang itu tahu ia memegang peran tersebut.
2. **Beri pemilik wewenang yang nyata.** Pemilik dapat memprioritaskan pekerjaan, berkata tidak, dan memutuskan pertukaran dalam anggaran. Jika setiap keputusan pergi ke komite, perannya hanya hiasan.
3. **Danai tim yang menetap.** Bila mungkin, danai tim dan misinya selama setahun atau lebih, dan tinjau hasilnya secara berkala alih-alih mendanai setiap proyek.
4. **Jaga pemilik dekat dengan pelanggan.** Pemilik harus sering berbicara dengan pengguna dan pelanggan, dan melihat data tentang bagaimana layanan dipakai. Pemilik yang mengandalkan ringkasan segera kehilangan kontak.
5. **Hubungkan pemilik produk dan layanan.** Di mana perannya terpisah, minta mereka bertemu secara teratur, berbagi backlog atau setidaknya visibilitas, dan menyepakati bagaimana kebutuhan operasional masuk ke rencana produk.
6. **Sertakan operasi dalam backlog produk.** Pekerjaan keandalan, keamanan, dan pemeliharaan harus bersaing dengan fitur dalam satu daftar, dengan pemilik yang memutuskan prioritas.
7. **Rencanakan seluruh masa hidup.** Tanyakan sejak awal apa yang melibatkan pensiun, dan tinjau setiap tahun apakah produk masih layak biayanya. Pensiunkan yang tidak lagi layak.
8. **Definisikan hasil pemilik.** Nyatakan apa yang menjadi tanggung jawab pemilik, seperti kepuasan pelanggan, target keandalan, dan biaya, dan tinjau bersama pemilik.
9. **Dukung piket dan "you run it".** Jika tim menjalankan apa yang mereka bangun, beri mereka pelatihan, batas beban, layanan platform, dan jalur eskalasi. Lihat Topik 2.6 — Site Reliability Engineering.
10. **Sertakan AI dan otomatisasi dalam aset.** Perlakukan setiap sistem AI dan otomatisasi signifikan sebagai produk atau bagian dari produk, dengan pemilik dan siklus hidup.

## Pertanyaan untuk dibahas bersama tim Anda

**Produk dan layanan kita yang mana yang tidak memiliki satu pemilik yang bertanggung jawab, dan siapa yang menjawab ketika ada yang salah?**
Pertanyaan ini menemukan kesenjangan. Harapkan platform bersama, integrasi, dan sistem lama muncul. Desak untuk seorang manusia, bukan nama tim. Lanjutkan dengan memilih satu kesenjangan dan menyepakati siapa yang akan mengambilnya.

**Keputusan apa yang dapat dibuat pemilik kita tanpa bertanya kepada orang lain?**
Pertanyaan ini menguji wewenang. Pemilik sering dapat mengurutkan ulang backlog tetapi tidak dapat merekrut, membelanjakan, atau mempensiunkan. Tanyakan keputusan terakhir yang naik ke atas. Lanjutkan dengan menyepakati satu keputusan untuk didelegasikan.

**Bagaimana tim kita didanai, dan apa yang terjadi pada tim ketika proyek berakhir?**
Pertanyaan ini menguji kemenetapan. Jawabannya mungkin mencakup bahwa tim bubar, atau pendanaan diperbarui setiap tahun dengan ketidakpastian. Tanyakan pengetahuan apa yang hilang terakhir kali. Lanjutkan dengan menyebut satu layanan yang layak mendapat pendanaan stabil.

**Bagaimana kebutuhan operasional sampai ke backlog produk saat ini?**
Pekerjaan keandalan dan pemeliharaan sering tersingkir. Tanyakan siapa yang memutuskan prioritas dan bagaimana utang teknis ditimbang. Lanjutkan dengan menyepakati porsi kapasitas minimum untuk pekerjaan operasional.

**Produk kita yang mana yang seharusnya dipensiunkan, dan siapa yang akan memutuskan?**
Pensiun jarang dimiliki. Tanyakan berapa biaya setiap produk lama dalam waktu dan risiko. Harapkan perlawanan. Lanjutkan dengan memilih satu kandidat dan mendaftar apa yang harus benar agar bisa dimatikan.

**Siapa yang memiliki setiap sistem AI yang kita pakai, dan bagaimana kita tahu?**
Fitur AI datang tertanam dalam perangkat vendor dan proyek internal. Minta inventaris dan pemilik untuk masing-masing. Lanjutkan dengan memilih sistem yang paling tidak dimiliki dan menetapkan pemilik.

## Dalam praktik: contoh manajemen layanan

Sebuah badan cuaca nasional menjalankan situs web prakiraan publik, layanan data yang dipakai maskapai dan petani, dan platform peramalan internal. Masing-masing dibangun oleh proyek terpisah dan diserahkan ke kelompok operasi pusat. Ketika layanan data maskapai gagal saat badai, butuh enam jam untuk menemukan seseorang yang dapat mengubah format data: tim proyek telah dibubarkan, dan operasi hanya memiliki dokumen serah terima.

Kepala digital yang baru bertanya, untuk masing-masing dari ketiganya, siapa yang bertanggung jawab. Untuk situs web jawabannya adalah direktur komunikasi, yang tidak tahu rincian teknisnya. Untuk layanan data tidak ada yang disebut. Untuk platform, tiga orang mengatakan mereka yang bertanggung jawab.

Kepala menunjuk pemilik produk untuk masing-masing, dipilih dari orang yang berwenang memutuskan, dan membentuk tim menetap kecil untuk masing-masing, diambil dari orang yang membangunnya dan dari operasi. Ia mengubah pendanaan layanan data, dari anggaran proyek menjadi anggaran tim tahunan, dan meminta pemilik produk menetapkan dua hasil: ketersediaan selama cuaca ekstrem, dan waktu untuk memperbaiki masalah format. Pelanggan maskapai diundang ke tinjauan triwulanan.

Yang berubah: pada badai berikutnya tim layanan data memperbaiki masalah format dalam waktu kurang dari satu jam, dan pelanggan melihat kontak yang ditunjuk. Yang masih sulit: ketiga pemilik produk bersaing untuk insinyur platform yang sama; pemilik platform peramalan tidak memiliki wewenang atas anggaran superkomputer, yang berada di departemen lain; dan pemilik situs web masih melapor ke struktur komunikasi yang tidak memprioritaskan utang teknis. Kepala membawa soal insinyur bersama dan pembagian anggaran ke tim eksekutif.

## Empat perspektif

### Tim produk dan pengiriman

Miliki produk sepanjang masa hidupnya. Buat pekerjaan operasional terlihat di backlog, pelajari bagaimana pelanggan memakai apa yang Anda bangun, dan ikut menjalankannya. Angkat masalahnya ketika model kepemilikan meninggalkan celah.

### Tim layanan dan operasi

Ketahui siapa yang memiliki setiap layanan dan beri tahu mereka apa yang Anda lihat: insiden, permintaan, dan biaya. Tawarkan untuk berbagi beban menjalankan apa yang dibangun tim, dengan batas yang jelas.

### Kepemimpinan dan tata kelola

Tunjuk pemilik, beri mereka wewenang dan anggaran, dan minta pertanggungjawaban atas hasil. Danai tim yang menetap dan minta tinjauan siklus hidup. Hindari melabeli ulang peran tanpa mengubah keputusan.

### Pelanggan dan pengguna

Anda seharusnya tahu kepada siapa berbicara tentang suatu produk atau layanan dan melihat bahwa umpan balik Anda berujung pada tindakan. Tanyakan siapa yang memiliki apa yang Anda pakai, dan beri tahu mereka apa yang penting.

## Agile, AI, otomatisasi, dan analitik

### Agile

Pemilik menjaga pemangku kepentingan tetap terlibat, memprioritaskan satu backlog yang mencakup pekerjaan operasional, dan merilis dalam potongan kecil. Perhatian: pemilik yang hanya meneruskan permintaan dari orang lain tidak memiliki produk; peran ini memerlukan penilaian dan wewenang.

### AI

Pemilik bertanggung jawab atas setiap sistem AI dalam produk atau layanannya: apa yang dilakukannya, data apa yang dipakainya, di mana seseorang memutuskan, dan bagaimana kesalahan ditemukan. AI dapat membantu pemilik merangkum umpan balik dan pemakaian, di bawah tinjauan. Perhatian: jangan terima "vendor yang memiliki AI-nya" sebagai jawaban; Anda tetap bertanggung jawab atas pemakaiannya. Lihat Topik 5.6 — Tata kelola, risiko, dan kepatuhan AI.

### Otomatisasi

Pemilik memutuskan apa yang diotomatiskan dan bertanggung jawab atas apa yang dilakukan otomatisasi dalam layanannya, termasuk log dan rollback-nya. Perhatian: otomatisasi yang dibangun tim platform tetap memerlukan pemilik di sisi layanan; tetapkan satu. Lihat Topik 6.1 — Strategi otomatisasi.

### Analitik

Pemilik seharusnya memiliki data tentang pemakaian, keandalan, biaya, dan hasil pelanggan, dan membahasnya secara teratur. Perhatian: jika pemilik dinilai dari satu angka, mereka akan menyetelnya; pakai sekumpulan kecil yang mencakup hasil dan pengalaman. Lihat buku *Service Management Metrics* dan Topik 7.3 — Pengukuran dan pelaporan.

## Mode kegagalan umum

- **Pemilik hanya di nama.** Jabatan diberikan dan wewenang tidak. Definisikan keputusan dan anggaran.
- **Pendanaan proyek untuk layanan yang hidup.** Tim bubar dan pengetahuan pergi. Danai tim yang menetap.
- **Pemilik produk tanpa operasi.** Fitur menang dan keandalan menderita. Taruh pekerjaan operasional dalam satu backlog.
- **Tidak ada pensiun.** Produk lama berlanjut dan menghabiskan kapasitas. Tinjau siklus hidup setiap tahun.
- **Melabeli ulang peran.** Tidak ada yang berubah bagi pelanggan. Ubah keputusan, pendanaan, dan akuntabilitas.
- **AI dan otomatisasi tanpa pemilik.** Sistem bertindak tanpa ada yang menjawab. Tunjuk pemilik untuk masing-masing.
- **Pemilik jauh dari pelanggan.** Keputusan bertumpu pada ringkasan. Wajibkan kontak teratur dengan pengguna.

## Model kematangan

| Dimensi | Memulai | Mengembangkan | Menstandardisasi | Mengelola | Mengorkestrasi |
|---|---|---|---|---|---|
| Kepemilikan | Tidak jelas untuk banyak hal | Pemilik untuk produk utama | Setiap produk dan layanan memiliki pemilik yang ditunjuk dan berdaya | Kepemilikan ditinjau terhadap hasil | Pemilik berkoordinasi lintas aset dan mitra |
| Pendanaan | Per proyek | Beberapa tim menetap | Tim menetap didanai berdasarkan misi | Pendanaan ditinjau bersama hasil | Pendanaan beradaptasi di seluruh portofolio |
| Siklus hidup | Hanya dari gagasan ke peluncuran | Pemeliharaan disadari | Tahap siklus hidup dan pensiun direncanakan | Keputusan siklus hidup diambil berdasarkan bukti | Siklus hidup portofolio dikelola lintas layanan |
| Menjalankan apa yang dibangun | Serah terima ke operasi | Piket bersama dalam satu tim | "You build it, you run it" dengan dukungan dan batas | Beban dan keandalan diukur | Didukung platform dan dibagikan lintas tim |

## Daftar periksa

- [ ] Setiap produk dan layanan memiliki pemilik yang ditunjuk, terlihat di katalog.
- [ ] Pemilik dapat memprioritaskan, membelanjakan dalam anggaran, dan berkata tidak.
- [ ] Tim yang menjalankan layanan menetap dan didanai jangka panjang.
- [ ] Pekerjaan operasional berada di backlog yang sama dengan fitur.
- [ ] Pemilik berbicara dengan pelanggan secara teratur dan melihat data pemakaian.
- [ ] Pemilik produk dan layanan bertemu secara teratur.
- [ ] Kami meninjau siklus hidup setiap produk setiap tahun, termasuk pensiun.
- [ ] Setiap sistem AI dan otomatisasi signifikan memiliki pemilik.

## Prompt AI

**Temukan kesenjangan kepemilikan.**

```text
Here is a list of our products, services, platforms, and AI-enabled features, with any owners we have recorded: [paste list].
Produce a table with item, owner (only as given; otherwise "none recorded"), and one question to find out who is really accountable. Do not guess owners.
List what you are unsure of.
```

**Susun draf deskripsi peran pemilik untuk didiskusikan.**

```text
Our context: [type of organization, size]. The role: owner of [product or service].
Draft a one-page description with: outcomes the owner is accountable for, decisions the owner can make, decisions that need approval, and people the owner works with. Keep it plain and mark every assumption.
List what you are unsure of.
```

**Siapkan tinjauan siklus hidup.**

```text
Here are facts about our product [name]: age, users, running cost, incidents last year, and planned work: [paste facts].
List questions to ask in a lifecycle review, including whether to continue, change, or retire it. Do not recommend a decision.
List what you are unsure of.
```

## Skill AI

- [raci-matrix](../../../../skills/raci-matrix/SKILL.md): gunakan untuk memperjelas siapa yang bertanggung jawab secara akuntabel dan secara pelaksanaan.
- [product-roadmap](../../../../skills/product-roadmap/SKILL.md): gunakan untuk merencanakan arah produk bersama pemangku kepentingan.
- [portfolio-management](../../../../skills/portfolio-management/SKILL.md): gunakan untuk meninjau produk dan layanan di seluruh aset.
- [user-story](../../../../skills/user-story/SKILL.md): gunakan untuk menyatakan kebutuhan pelanggan dalam backlog.

## Sumber utama

- PeopleCert, halaman sertifikasi ITIL: uraian pemilik tentang panduan ITIL untuk produk dan layanan digital.
- Marty Cagan, *Inspired* (2017): uraian yang banyak dibaca tentang peran manajer produk.
- Gene Kim dan lainnya, *The DevOps Handbook*: tentang tim yang membangun dan menjalankan layanan.
- Wikipedia, "Product management" dan "Product lifecycle": latar belakang netral.

## Referensi

1. Product management — Wikipedia — https://en.wikipedia.org/wiki/Product_management
2. Product lifecycle — Wikipedia — https://en.wikipedia.org/wiki/Product_lifecycle
3. Scrum (project management) — Wikipedia — https://en.wikipedia.org/wiki/Scrum_(project_management)
4. Accountability — Wikipedia — https://en.wikipedia.org/wiki/Accountability
5. Raci — Wikipedia — https://en.wikipedia.org/wiki/Raci
6. Software maintenance — Wikipedia — https://en.wikipedia.org/wiki/Software_maintenance
7. Total cost of ownership — Wikipedia — https://en.wikipedia.org/wiki/Total_cost_of_ownership
8. Backlog — Wikipedia — https://en.wikipedia.org/wiki/Backlog
9. Werner Vogels — Wikipedia — https://en.wikipedia.org/wiki/Werner_Vogels
10. ITIL Foundation Bridge (Version 5) — PeopleCert — https://www.peoplecert.org/browse-certifications/it-governance-and-service-management/ITIL-1/itil-foundation-bridge-version-5-4158
