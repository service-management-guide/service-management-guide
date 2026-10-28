# Model operasi dan keterampilan AI

**Model operasi AI menyatakan siapa yang memiliki sistem AI, bagaimana didanai, dibangun atau dibeli, dijalankan, dan dipensiunkan, serta keterampilan apa yang dibutuhkan orang; ia berhasil ketika setiap pemakaian AI dikelola sebagai produk dengan siklus hidup, tim pemampu kecil membantu yang lain, dan kapabilitas dibangun melalui praktik, bukan hanya kursus.**

## Mengapa ini penting

Organisasi jarang mengadopsi AI secara terencana. Satu tim membeli perangkat, tim lain membangun prototipe, vendor menyalakan fitur. Setiap keputusan masuk akal secara lokal. Bersama-sama mereka membentuk aset yang tidak dirancang siapa pun: perangkat ganda, kontrol yang tidak konsisten, kepemilikan yang tidak jelas, dan biaya yang muncul di faktur. Ketika ada yang salah, tak seorang pun tahu siapa yang bertanggung jawab. Ketika ada yang berjalan baik, tak seorang pun dapat mengulanginya.

Model operasi adalah jawaban atas "bagaimana kita bekerja dengan AI sebagai organisasi?". Ia menjelaskan peran dan tanggung jawab, bagaimana keputusan dibuat, bagaimana pekerjaan didanai, bagaimana sistem dibangun atau dibeli dan dijaga tetap berjalan, dan bagaimana orang belajar. Ia tidak harus besar. Model organisasi kecil mungkin muat dalam satu halaman. Yang penting adalah bahwa pertanyaan-pertanyaannya punya jawaban.

Kebutuhannya lebih tajam untuk AI daripada untuk banyak teknologi lain karena sistem AI berubah: model diperbarui oleh vendor, data bergeser, dan perilaku mengalami drift. Mereka membutuhkan perawatan berkelanjutan, yang disediakan tim produk, bukan proyek yang berakhir saat peluncuran. Topik ini menjelaskan unsur utama model operasi AI dan keterampilan yang menyertainya. Ia dibangun di atas kepemilikan produk (Topik 2.8 — Kepemilikan Produk dan Layanan), tata kelola AI (Topik 5.6 — Tata kelola, risiko, dan kepatuhan AI), dan manajemen keuangan (Topik 4.5 — Manajemen keuangan dan FinOps), dan terhubung dengan perubahan organisasi (Topik 8.3 — Perubahan Organisasi dan Adopsi).

## Konsep inti

**Model operasi.** Deskripsi tentang bagaimana organisasi menyampaikan nilai: struktur, proses, orang, teknologi, dan tata kelolanya. Wikipedia menjelaskan operating model. Model operasi AI adalah bagian yang mencakup bagaimana AI dipilih, didanai, dibangun atau dibeli, dijalankan, ditata kelola, dan diperbaiki.

**AI sebagai produk.** Sistem AI memiliki pengguna, tujuan, backlog, biaya, dan siklus hidup. Perlakukan sebagai produk dengan pemilik, sebagaimana dijelaskan dalam Topik 2.8 — Kepemilikan Produk dan Layanan. Pemilik bertanggung jawab atas hasil, data, mutu, dan risiko, serta memutuskan kapan memperbaiki atau mempensiunkannya.

**Siklus hidup.** Tahapnya mencakup mengidentifikasi peluang, menilai nilai dan risiko, membangun atau membeli, menguji, men-deploy, mengoperasikan dan memantau, memperbaiki, dan mempensiunkan. Machine learning operations (MLOps), yang dijelaskan di Wikipedia, menerapkan disiplin rekayasa pada siklus hidup model: pemberian versi, deployment, pemantauan, dan pelatihan ulang. Untuk model vendor, tahap yang sama berlaku dengan lebih sedikit bagian teknis dan lebih banyak kontrak dan pemantauan.

**Peran.** Peran yang khas mencakup sponsor eksekutif, pemilik produk AI untuk setiap sistem, insinyur yang membangun dan menjalankannya, pemilik data untuk data yang dipakainya, mitra keamanan dan privasi, penasihat hukum, serta orang yang memakainya dan yang terdampak olehnya. Tim kecil menggabungkan peran. Sebutkan, dan buat jelas siapa yang memutuskan.

**Tim pemampu atau pusat keunggulan.** Kelompok kecil yang membantu tim lain memakai AI dengan baik: ia menawarkan panduan, templat, perangkat yang disetujui, pelatihan, dan tinjauan untuk pemakaian berisiko lebih tinggi. Wikipedia menjelaskan center of excellence. Risikonya adalah ia menjadi hambatan atau gerbang. Yang baik membuat jalur yang aman menjadi jalur yang mudah, dan bekerja bersama tim, bukan untuk mereka.

**Model terpusat, federasi, dan tertanam.** Dalam model terpusat, satu tim membangun dan menjalankan AI untuk semua. Dalam model tertanam, setiap tim produk melakukannya sendiri. Model federasi menggabungkan platform dan standar bersama dengan kepemilikan lokal. Sebagian besar organisasi berakhir dengan campuran federasi. Pilih menurut skala pemakaian, keterampilan yang tersedia, dan risiko.

**Bangun, beli, atau konfigurasikan.** Setiap pemakaian AI dapat dibangun sendiri, dibeli sebagai produk, atau dirakit dari model dan data Anda sendiri. Wikipedia menjelaskan keputusan build-or-buy sebagai bentuk analisis biaya–manfaat. Pertimbangkan total biaya, risiko ketergantungan pada vendor, kendali data, kecepatan, dan keterampilan yang Anda butuhkan. Lihat Topik 3.14 — Manajemen Pemasok.

**Pendanaan.** Danai sistem AI sebagai produk dengan tim yang menetap di mana mereka penting, bukan sebagai proyek sekali jalan. Sertakan biaya operasional, seperti biaya pemakaian, hosting, pemantauan, dan dukungan. Lacak biaya per kasus penggunaan dan per hasil. Lihat Topik 4.5 — Manajemen keuangan dan FinOps.

**Platform dan layanan bersama.** Komponen bersama, seperti gerbang model yang disetujui, pustaka prompt dan skill, harness evaluasi, katalog data, dan pencatatan, mengurangi usaha ganda dan mempermudah kendali. Lihat Topik 5.7 — Keterampilan dan Prompt AI.

**Fondasi data.** AI bergantung pada data yang akurat, dapat diakses, dan ditata kelola. Banyak inisiatif AI macet pada data, bukan pada model. Lihat Topik 7.2 — Fondasi dan tata kelola data.

**Keterampilan dan kapabilitas.** Orang membutuhkan rentang keterampilan: memahami apa yang dapat dan tidak dapat dilakukan AI (sering disebut literasi AI, bentuk literasi digital yang dijelaskan Wikipedia), menulis prompt yang jelas dan memeriksa hasil, menilai risiko, membangun dan menguji sistem, serta mengelola data. Peran berbeda membutuhkan kedalaman berbeda. Wikipedia menjelaskan upskilling dan retraining sebagai pendekatan membangun keterampilan.

**Belajar sambil mengerjakan.** Keterampilan tumbuh paling banyak dari praktik pada pekerjaan nyata dengan umpan balik, didukung pelatihan singkat dan contoh. Komunitas praktik, yang dijelaskan di Wikipedia, membantu orang berbagi apa yang berhasil. Pasangkan pengguna berpengalaman dan baru. Lihat Topik 8.5 — Jalur Belajar dan Sertifikasi.

**Dampak pada orang dan peran.** AI mengubah tugas, dan dalam beberapa peran, jumlah orang yang dibutuhkan. Wikipedia menjelaskan technological unemployment sebagai kekhawatiran yang lama diperdebatkan. Jujurlah kepada staf tentang niat Anda, libatkan mereka dalam desain, dan rencanakan penempatan ulang dan pelatihan ulang. Lihat Topik 8.3 — Perubahan Organisasi dan Adopsi.

**Nilai dan hasil.** Definisikan hasil yang harus diperbaiki setiap sistem AI, seperti waktu penyelesaian, mutu, atau kepuasan pengguna, dengan garis dasar dan cara mengukur. Wikipedia menjelaskan return on investment dan batasnya. Waspadai perkiraan penghematan yang menghitung waktu yang "dihemat" namun tidak pernah dialokasikan ulang.

**Standar dan jaminan.** Kerangka seperti ISO/IEC 42001 dan NIST AI Risk Management Framework menjelaskan unsur sistem manajemen yang harus dicakup model operasi. Lihat Topik 5.6 — Tata kelola, risiko, dan kepatuhan AI.

**Uji coba dan penskalaan.** Proof of concept murah dan sering mengesankan. Penskalaan adalah tempat masalah muncul: mutu data, integrasi, keamanan, biaya, dan dukungan. Wikipedia menjelaskan proof of concept. Rencanakan peralihan dari uji coba ke produksi sejak awal, termasuk siapa yang menjalankannya.

**Bagaimana lensa-lensa cocok.** Model operasi mengorganisasi lensa AI. Praktik agile menyarankan tim produk yang menetap dan uji coba singkat. Otomatisasi dan analitik adalah tetangga: otomatisasi bertindak atas keluaran AI, dan analitik menyediakan data serta ukurannya.

## Praktik terbaik

1. **Perlakukan setiap sistem AI yang penting sebagai produk.** Tunjuk pemilik, tim, backlog, anggaran, dan siklus hidup, termasuk pensiun. Tinjau nilai dan risiko setiap sistem secara berkala.
2. **Tuliskan peran dan hak keputusan.** Katakan siapa yang menjadi sponsor, siapa yang memiliki setiap sistem, siapa yang menyetujui pemakaian berisiko lebih tinggi, dan siapa yang dapat menghentikannya. Jaga dalam satu halaman.
3. **Bentuk tim pemampu kecil.** Beri mandat untuk menyediakan panduan, perangkat, pelatihan, dan tinjauan, dan ukur dari seberapa banyak ia membantu tim, bukan dari berapa banyak gerbang yang dijalankannya.
4. **Pilih bangun, beli, atau konfigurasikan berdasarkan bukti.** Bandingkan total biaya, risiko, kendali data, kecepatan, dan keterampilan untuk setiap kasus. Catat keputusan dan tinjau kembali ketika keadaan berubah.
5. **Danai biaya operasional sejak awal.** Anggarkan biaya pemakaian, pemantauan, dukungan, dan perbaikan, bukan hanya pembangunan. Lacak biaya per kasus penggunaan dan per hasil.
6. **Sediakan platform bersama.** Tawarkan perangkat yang disetujui dan layanan umum untuk akses, pencatatan, evaluasi, dan prompt serta skill. Buat jalur yang disetujui lebih cepat daripada siasat.
7. **Berinvestasi pada data.** Tunjuk pemilik data, perbaiki masalah mutu yang menghalangi kasus penggunaan, dan dokumentasikan sumber. Mulailah dengan data yang dibutuhkan kasus penggunaan pertama.
8. **Bangun keterampilan menurut peran.** Tawarkan pelatihan singkat dan praktis untuk semua orang, pelatihan lebih dalam untuk pembangun dan pemilik, dan waktu untuk berlatih pada tugas nyata. Ciptakan tempat untuk berbagi apa yang berhasil.
9. **Jujur tentang orang.** Katakan apa yang Anda maksudkan untuk peran dan jumlah personel, libatkan staf dalam merancang cara kerja baru, dan dukung mereka yang pekerjaannya berubah.
10. **Rencanakan jalan dari uji coba ke produksi.** Sebelum uji coba, putuskan apa itu keberhasilan, siapa yang akan menjalankannya, kontrol apa yang dibutuhkan, dan berapa biayanya pada skala penuh. Hentikan uji coba yang tidak dapat memenuhi ujian itu.

## Pertanyaan untuk dibahas bersama tim Anda

**Siapa yang memiliki setiap sistem AI yang kita pakai, dan siapa yang memutuskan kapan mengubah atau menghentikannya?**
Pakai inventaris. Harapkan celah. Lanjutkan dengan menetapkan pemilik dan mencatat hak keputusan untuk tiga sistem terpenting.

**Apa yang kita inginkan dilakukan kelompok AI pusat untuk kita, dan apa yang harus tetap pada setiap tim?**
Diskusikan bantuan versus kendali. Harapkan pandangan berbeda antara mereka yang menginginkan standar dan yang menginginkan kecepatan. Lanjutkan dengan mendaftar tiga layanan yang harus disediakan kelompok itu.

**Untuk pembelian atau pembangunan AI terakhir kita, apakah kita membandingkan opsi, dan apa yang akan kita putuskan hari ini?**
Lihat catatan keputusan. Harapkan sedikit. Lanjutkan dengan menyepakati templat singkat untuk keputusan bangun, beli, atau konfigurasikan.

**Berapa biaya berkelanjutan dari pemakaian AI kita, dan siapa yang membayar?**
Minta angkanya. Harapkan hal yang tidak diketahui, terutama biaya pemakaian. Lanjutkan dengan memilih satu kasus penggunaan dan menyusun estimasi biaya.

**Keterampilan apa yang dibutuhkan orang untuk memakai AI dengan baik dalam pekerjaan mereka, dan bagaimana mereka akan memperolehnya?**
Tanyakan menurut peran. Harapkan celah dalam memeriksa dan memahami batas. Lanjutkan dengan merencanakan sesi latihan pada tugas nyata.

**Apa yang telah kita katakan kepada staf tentang bagaimana AI akan mengubah pekerjaan mereka, dan apakah mereka percaya?**
Tanyakan langsung kepada staf. Harapkan kecemasan. Lanjutkan dengan menyepakati apa yang dapat dikatakan pimpinan dengan jujur dan apa yang akan mereka lakukan untuk mendukung orang.

## Dalam praktik: contoh manajemen layanan

Badan perlindungan lingkungan nasional memiliki 30 pemakaian AI yang tersebar di departemennya: asisten obrolan, model yang menandai pembacaan sensor yang tidak biasa, perangkat yang merangkum tanggapan konsultasi, dan beberapa uji coba yang dijalankan kelompok riset. Kepala digital yang baru mendapati bahwa tiga departemen membayar layanan transkripsi yang serupa, bahwa dua uji coba telah berjalan lebih dari setahun tanpa keputusan, dan bahwa tak seorang pun dapat mengatakan berapa yang dibelanjakan badan untuk AI.

Ia membentuk tim pemampu kecil beranggotakan empat orang, diambil dari TI, data, keamanan, dan hukum. Tugas pertamanya adalah inventaris, selesai dalam sebulan. Yang kedua adalah model operasi satu halaman: setiap pemakaian AI memiliki pemilik yang ditunjuk di bisnis; tim pemampu menyediakan gerbang model yang disetujui dengan pencatatan, pustaka prompt dan skill yang telah ditinjau, dan tinjauan risiko untuk pemakaian berisiko sedang dan tinggi dalam sepuluh hari kerja; dan rapat portofolio triwulanan memutuskan uji coba mana yang diskalakan, diubah, atau dihentikan.

Rapat portofolio menghentikan lima uji coba yang tidak punya pemilik atau ukuran, dan menggabungkan tiga kontrak transkripsi menjadi satu. Untuk model anomali sensor, yang mendukung keputusan tentang peringatan polusi, pemilik menugaskan tinjauan mutu data dan menyiapkan pemantauan drift. Pendanaan untuk dua sistem paling berharga berpindah dari anggaran proyek menjadi anggaran tim tahunan, termasuk biaya pemakaian.

Untuk keterampilan, tim menawarkan sesi praktis dua jam untuk semua staf tentang memakai AI dengan aman, dan kursus yang lebih panjang untuk 40 orang yang membangun atau memiliki sistem. Komunitas praktik bertemu setiap bulan. Serikat yang mewakili staf menanyakan apa arti AI bagi pekerjaan; kepala digital berkomitmen secara tertulis bahwa program tidak akan dipakai untuk memangkas posisi dalam dua tahun, dan bahwa penghematan waktu akan masuk ke backlog pekerjaan inspeksi.

Yang berubah: badan memiliki satu inventaris, pemilik yang jelas, dan satu tempat untuk meminta bantuan. Yang masih sulit: sebagian kelompok riset melihat jalur tinjauan sebagai rem dan masih menjalankan perangkat informal; biaya pemakaian lebih tinggi dari perkiraan untuk dua sistem dan anggaran tidak disesuaikan; dan komitmen tentang pekerjaan membatasi opsi yang ingin dipertahankan keuangan. Kepala digital meninjau kecepatan jalur dan anggaran setiap triwulan.

## Empat perspektif

### Tim produk dan pengiriman

Miliki sistem AI Anda sebagai produk: backlog, pemantauan, biaya, dan pensiun. Pakai platform bersama dan pustaka yang disetujui. Minta bantuan tim pemampu sejak dini.

### Tim layanan dan operasi

Ikut dalam menjalankan sistem AI dan laporkan apa yang Anda lihat. Pelajari cara memeriksa keluaran, dan beri tahu pemilik tentang drift dan kesalahan. Pakai perangkat bersama.

### Kepemimpinan dan tata kelola

Sponsori modelnya, tunjuk pemilik, dan danai tim yang menetap dan biaya operasional. Minta pandangan portofolio, dengan nilai dan risiko. Jujurlah kepada staf tentang dampak pada peran.

### Pelanggan dan pengguna

Anda seharusnya tahu siapa yang bertanggung jawab atas sistem AI yang memengaruhi Anda dan bagaimana menyampaikan kekhawatiran. Tanyakan bagaimana umpan balik Anda sampai kepada pemilik.

## Agile, AI, otomatisasi, dan analitik

### Agile

Jalankan produk AI dengan tim yang menetap, siklus singkat, dan tinjauan teratur bersama pengguna dan pemangku kepentingan. Perlakukan model operasi itu sendiri sebagai sesuatu yang diperbaiki dalam langkah kecil. Perhatian: hindari meluncurkan program AI besar dengan rencana tetap; mulailah dengan beberapa kasus penggunaan dan belajar.

### AI

Topik ini tentang mengelola AI itu sendiri: pemilik, siklus hidup, pendanaan, dan keterampilan. AI dapat membantu analisis portofolio dan dokumentasi, di bawah tinjauan. Perhatian: tim pemampu yang menyetujui segalanya atau tidak sama sekali kehilangan kredibilitas; sesuaikan tinjauan dengan risiko. Lihat Topik 5.6 — Tata kelola, risiko, dan kepatuhan AI.

### Otomatisasi

Otomatiskan umpan inventaris, pelaporan biaya, pencatatan, dan pemeriksaan kebijakan dalam platform bersama, agar jalur yang aman juga menjadi jalur yang mudah. Perhatian: otomatisasi yang memblokir pemakaian tanpa alternatif yang disetujui mendorong orang ke perangkat bayangan. Lihat Topik 6.1 — Strategi otomatisasi.

### Analitik

Lacak portofolio: jumlah pemakaian, pemilik, biaya per kasus penggunaan, ukuran nilai, insiden, waktu tinjauan, dan cakupan keterampilan. Perhatian: jumlah proyek AI atau staf yang dilatih menghargai aktivitas dan bukan hasil; padukan dengan ukuran nilai dan mutu. Lihat Topik 7.3 — Pengukuran dan pelaporan dan buku *Service Management Metrics*.

## Mode kegagalan umum

- **Perangkat yang menjalar.** Setiap tim membeli sendiri. Simpan inventaris dan konsolidasikan.
- **Sistem tanpa pemilik.** Tak seorang pun memelihara atau menghentikannya. Tunjuk pemilik dan tinjau portofolio.
- **Proyek, bukan produk.** Tim bubar setelah peluncuran. Danai tim yang menetap untuk sistem yang penting.
- **Pusat yang menjadi penjaga gerbang.** Tim pemampu menghambat pekerjaan. Jadikan ia layanan dengan target respons.
- **Biaya operasional diabaikan.** Biaya pemakaian mengejutkan anggaran. Sertakan sejak awal.
- **Pelatihan tanpa praktik.** Kursus dihadiri dan kebiasaan tidak berubah. Berlatih pada tugas nyata.
- **Diam tentang pekerjaan.** Ketakutan menyebar. Katakan apa yang Anda maksudkan dan libatkan staf.

## Model kematangan

| Dimensi | Memulai | Mengembangkan | Menstandardisasi | Mengelola | Mengorkestrasi |
|---|---|---|---|---|---|
| Kepemilikan dan peran | Tidak jelas | Para pelopor | Pemilik yang ditunjuk dan hak keputusan untuk setiap sistem | Peran ditinjau bersama hasil | Peran dikoordinasikan di seluruh perusahaan dan mitra |
| Pendanaan dan siklus hidup | Dana proyek | Sebagian dana operasional | Pendanaan menetap untuk sistem kunci, siklus hidup terdefinisi | Biaya dan nilai ditinjau secara teratur | Portofolio didanai dan diseimbangkan ulang menurut nilai dan risiko |
| Platform dan pemampuan | Perangkat individu | Panduan bersama | Platform, pustaka, dan layanan tinjauan yang disetujui | Pemakaian dan kepuasan diukur | Platform terintegrasi dengan tata kelola dan otomatisasi |
| Keterampilan | Ad hoc | Pelatihan kesadaran | Pembelajaran berbasis peran dengan praktik | Keterampilan dilacak terhadap kebutuhan | Keterampilan direncanakan di seluruh tenaga kerja dengan dukungan untuk perubahan |

## Daftar periksa

- [ ] Setiap sistem AI yang penting memiliki pemilik produk yang ditunjuk.
- [ ] Peran dan hak keputusan dituliskan dalam satu halaman.
- [ ] Tim pemampu kecil menyediakan perangkat, panduan, dan tinjauan.
- [ ] Keputusan bangun, beli, atau konfigurasikan dicatat.
- [ ] Biaya operasional dianggarkan dan dilacak per kasus penggunaan.
- [ ] Layanan platform bersama membuat jalur yang disetujui mudah.
- [ ] Pelatihan berbasis peran dan mencakup praktik pada tugas nyata.
- [ ] Kami telah memberi tahu staf dengan jujur bagaimana AI akan memengaruhi pekerjaan mereka.

## Prompt AI

**Bandingkan bangun, beli, dan konfigurasikan.**

```text
Our use case: [describe]. Our constraints: [data sensitivity, skills, budget, timeline]. Options: [list].
Draft a comparison table with criteria (total cost over three years, data control, speed, risk of dependency, skills needed, ability to change) and for each option what we know and what we do not know from my description. Do not choose an option or invent costs.
List what you are unsure of.
```

**Susun draf model operasi satu halaman untuk didiskusikan.**

```text
Our organization: [type, size]. Our AI uses today: [list]. Our governance bodies: [list].
Draft a one-page operating model with roles, decision rights, funding approach, how AI is built or bought, how risk review works, and how skills are built. Mark every assumption and leave [blank] where my description gives no basis.
List what you are unsure of.
```

**Rencanakan keterampilan menurut peran.**

```text
Roles in our team: [list with what each does]. AI uses planned: [list].
For each role, list the skills needed (use of AI, checking outputs, risk, building, data), one practice activity on real work, and one way to see that the skill has grown. Do not name courses or vendors.
List what you are unsure of.
```

## Skill AI

- [portfolio-management](../../../../skills/portfolio-management/SKILL.md): gunakan untuk meninjau portofolio AI demi nilai dan risiko.
- [mlops](../../../../skills/mlops/SKILL.md): gunakan untuk mengelola model sepanjang siklus hidupnya.
- [training-needs-analysis](../../../../skills/training-needs-analysis/SKILL.md): gunakan untuk mendefinisikan keterampilan yang dibutuhkan setiap peran.
- [raci-matrix](../../../../skills/raci-matrix/SKILL.md): gunakan untuk memperjelas peran dan hak keputusan.
- [roi-analysis](../../../../skills/roi-analysis/SKILL.md): gunakan untuk menimbang biaya dan manfaat pemakaian AI.

## Sumber utama

- NIST, AI Risk Management Framework: struktur yang mencakup tata kelola dan peran organisasi.
- ISO/IEC 42001 (standar itu sendiri): persyaratan sistem manajemen untuk AI; baca edisi terkini dari penerbitnya.
- Marty Cagan, *Empowered* (2020): tentang tim produk dan bagaimana organisasi mendukungnya.
- Wikipedia, "MLOps" dan "Operating model": ikhtisar siklus hidup dan konsepnya.

## Referensi

1. Operating model — Wikipedia — https://en.wikipedia.org/wiki/Operating_model
2. MLOps — Wikipedia — https://en.wikipedia.org/wiki/MLOps
3. Center of excellence — Wikipedia — https://en.wikipedia.org/wiki/Center_of_excellence
4. Product management — Wikipedia — https://en.wikipedia.org/wiki/Product_management
5. Cost–benefit analysis — Wikipedia — https://en.wikipedia.org/wiki/Cost%E2%80%93benefit_analysis
6. Digital literacy — Wikipedia — https://en.wikipedia.org/wiki/Digital_literacy
7. Community of practice — Wikipedia — https://en.wikipedia.org/wiki/Community_of_practice
8. Technological unemployment — Wikipedia — https://en.wikipedia.org/wiki/Technological_unemployment
9. Return on investment — Wikipedia — https://en.wikipedia.org/wiki/Return_on_investment
10. Proof of concept — Wikipedia — https://en.wikipedia.org/wiki/Proof_of_concept
11. AI Risk Management Framework — NIST — https://www.nist.gov/itl/ai-risk-management-framework
