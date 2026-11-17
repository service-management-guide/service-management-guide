# Manajemen Konfigurasi

**Manajemen konfigurasi menjaga gambaran yang akurat dan dapat dipakai tentang komponen yang menyusun layanan Anda dan bagaimana mereka terhubung, agar Anda dapat menilai dampak perubahan atau kegagalan; tim modern memperoleh gambaran itu dari infrastruktur sebagai kode dan penemuan, dengan basis data konfigurasi sebagai tampilannya, bukan daftar yang dijaga dengan tangan.**

## Mengapa ini penting

Ketika server basis data gagal pada pukul 2 pagi, pertanyaan pertama adalah apa yang bergantung padanya. Ketika seseorang mengusulkan perubahan pada aturan jaringan, pertanyaan pertama adalah apa yang mungkin dirusaknya. Ketika auditor menanyakan bagaimana suatu layanan dibangun, pertanyaan pertama adalah di mana kebenarannya dituliskan. Ketiganya membutuhkan hal yang sama: gambaran terkini yang tepercaya tentang apa yang ada dan bagaimana bagian-bagiannya berhubungan.

Banyak organisasi mencoba menyediakannya dengan basis data manajemen konfigurasi (CMDB): basis data item konfigurasi dan hubungannya. Banyak juga yang mendapati bahwa ia menjadi kuburan catatan usang, dijaga dengan tangan, dipercaya oleh tak seorang pun. Catatan menjadi usang dalam hitungan minggu, karena aset nyata berubah lebih cepat daripada yang dapat diperbarui siapa pun lewat formulir. CMDB menjadi artefak kepatuhan, bukan alat.

Dua gagasan menyelamatkan praktik ini. Pertama, perlakukan definisi infrastruktur sebagai kode dalam kontrol versi, sehingga sumber kebenaran adalah hal yang menciptakan sistem, bukan deskripsi tentangnya. Kedua, isi gambaran secara otomatis dari penemuan dan dari kode itu, dan pakai untuk pertanyaan khusus: dampak perubahan, cakupan insiden, kepemilikan. Topik ini menjelaskan praktik dan jebakannya. Ia terhubung dengan manajemen aset (Topik 4.1 — Manajemen aset), pemampuan perubahan (Topik 3.4 — Pemampuan Perubahan), infrastruktur sebagai kode (Topik 6.3 — Infrastruktur sebagai kode dan GitOps), dan katalog layanan (Topik 3.8 — Manajemen Katalog Layanan).

## Konsep inti

**Manajemen konfigurasi.** Dalam pengertian ITIL, praktik memastikan bahwa informasi yang akurat dan andal tentang konfigurasi layanan, dan item konfigurasi yang mendukungnya, tersedia ketika dan di mana dibutuhkan. Dalam rekayasa, "manajemen konfigurasi" juga merujuk pada disiplin mempertahankan sistem dalam keadaan yang dikenal dan konsisten. Wikipedia menjelaskan configuration management dalam pengertian yang lebih luas. Panduan ini memakai kedua pengertian dan menyebutkan mana yang dimaksud.

**Item konfigurasi (CI).** Komponen apa pun yang perlu dikelola untuk menyampaikan layanan TI. Wikipedia menjelaskan configuration item. Contohnya server, aplikasi, basis data, perangkat jaringan, sumber daya cloud, sertifikat, dan kadang dokumen dan kontrak. Setiap CI memiliki atribut (jenis, versi, pemilik, status) dan hubungan dengan CI lain.

**Basis data manajemen konfigurasi (CMDB).** Repositori CI, atributnya, dan hubungannya. Wikipedia menjelaskan CMDB. CMDB bukan lembar kerja aset: nilainya terletak pada hubungan, yang memungkinkan pertanyaan seperti "layanan mana yang memakai basis data ini?".

**Sistem manajemen konfigurasi (CMS).** Kumpulan alat dan data yang lebih luas yang memberi tampilan konfigurasi lintas sumber. ITIL menjelaskan CMS yang memfederasi data dari beberapa tempat, bukan satu basis data. Wikipedia menjelaskan federated database system sebagai salah satu cara menggabungkan sumber tanpa menyalinnya.

**Peta layanan (service map).** Tampilan yang menunjukkan bagaimana layanan bergantung pada komponennya. Peta layanan teknis menghubungkan aplikasi, basis data, server, dan jaringan. Tampilan bisnis menghubungkan layanan dengan orang dan proses yang didukungnya. Peta dipakai dalam insiden dan perubahan. Lihat Topik 3.8 — Manajemen Katalog Layanan.

**Garis dasar dan drift.** Garis dasar (baseline) adalah konfigurasi yang dikenal dan disetujui pada satu titik waktu. Drift adalah selisih antara garis dasar dan apa yang sebenarnya berjalan, sering dari perubahan manual. Wikipedia menjelaskan baseline dalam configuration management. Mendeteksi dan mengoreksi drift menjaga sistem konsisten dan aman.

**Infrastruktur sebagai kode (IaC).** Mendefinisikan infrastruktur, seperti server, jaringan, dan sumber daya cloud, dalam berkas teks yang disimpan dalam kontrol versi dan diterapkan oleh alat. Wikipedia menjelaskan infrastructure as code. Alat seperti Terraform, Ansible, dan manifes Kubernetes menyatakan keadaan yang diinginkan, dan alat membuat kenyataan cocok dengannya. Kode adalah dokumentasi sekaligus mekanismenya. Lihat Topik 6.3 — Infrastruktur sebagai kode dan GitOps.

**Idempotensi dan keadaan yang diinginkan.** Alat konfigurasi yang baik dapat dijalankan berulang kali dengan hasil yang sama: ia hanya melakukan apa yang perlu untuk mencapai keadaan yang dijelaskan. Wikipedia menjelaskan idempotence. Ini membuat aman untuk menerapkan ulang konfigurasi untuk mendeteksi dan memperbaiki drift.

**Sumber kebenaran.** Tempat di mana suatu fakta otoritatif. Untuk konfigurasi yang diinginkan, itu repositori kode; untuk apa yang sebenarnya berjalan, itu penemuan atau keadaan platform itu sendiri; untuk kepemilikan, mungkin katalog atau registri tim. Putuskan sumber untuk setiap jenis fakta, dan hindari menyimpan fakta yang sama dengan tangan di dua tempat. Wikipedia menjelaskan gagasan single source of truth.

**Penemuan (discovery).** Alat yang memindai jaringan, akun cloud, dan platform untuk menemukan apa yang ada dan bagaimana terhubung. Penemuan menemukan apa yang tidak dicatat siapa pun, tetapi menghasilkan banyak rincian dan sebagian derau, dan memerlukan aturan tentang item mana yang disimpan dan bagaimana menamainya.

**Hubungan dan analisis dampak.** Mengetahui bahwa aplikasi A memakai basis data B memungkinkan Anda bertanya apa yang terdampak jika B berubah atau gagal. Wikipedia menjelaskan change impact analysis dan dependency graph. Basis data graf (graph database), yang dijelaskan di Wikipedia, adalah satu cara menyimpan dan menanyakan hubungan. Analisis dampak hanya sebaik hubungan yang dicatat.

**Mutu data.** Akurasi, kelengkapan, dan ketepatan waktu menentukan nilai data. Definisikan atribut mana yang penting dan seberapa segar harus. Kumpulan data akurat yang lebih kecil lebih berguna daripada kumpulan besar yang tidak andal. Lihat Topik 7.2 — Fondasi dan tata kelola data.

**Ruang lingkup.** Jangan mencoba mencatat segalanya. Pilih CI dan hubungan yang Anda butuhkan untuk keputusan Anda: layanan kritis, komponen utamanya, dan kepemilikannya. Perluas seiring nilai ditunjukkan.

**Kepemilikan.** Setiap CI atau kelompok memiliki pemilik yang bertanggung jawab atasnya dan atas datanya. Tanpa kepemilikan, data membusuk.

**Kontainer dan cloud.** Platform modern menciptakan dan menghancurkan sumber daya terus-menerus. Catatan satu kontainer tidak bermakna sejam kemudian. Lacak pada tingkat yang penting, seperti layanan dan deployment, dan pakai label dan tag untuk mengaitkan sumber daya dengan pemilik dan layanan.

**Bagaimana lensa-lensa cocok.** Manajemen konfigurasi mendukung agile dan pengiriman berkelanjutan dengan membuat lingkungan dapat diulang. AI dapat membantu menemukan hubungan, menyarankan tautan yang hilang, dan menjawab pertanyaan tentang dampak, di bawah tinjauan. Otomatisasi menerapkan konfigurasi dan menjaga gambaran tetap mutakhir. Analitik memakai data untuk menemukan risiko dan biaya.

## Praktik terbaik

1. **Mulai dari pertanyaan yang perlu Anda jawab.** Daftarkan keputusan yang akan didukung data, seperti dampak perubahan, cakupan insiden, dan kepemilikan. Catat hanya yang menjawabnya.
2. **Perlakukan kode sebagai sumber kebenaran untuk keadaan yang diinginkan.** Definisikan infrastruktur dan konfigurasi dalam kontrol versi, tinjau perubahan, dan terapkan dengan alat. Hindari perubahan manual pada sistem hidup.
3. **Isi gambaran secara otomatis.** Pakai penemuan dan data platform untuk mengumpan CMDB atau peta layanan, dan rekonsiliasi dengan kode. Batasi entri manual pada fakta yang tidak dapat ditemukan, seperti kepemilikan.
4. **Definisikan sumber setiap fakta.** Untuk setiap atribut, putuskan di mana ia otoritatif, dan di mana salinan diizinkan. Tunjukkan sumber dan waktu pembaruan terakhir.
5. **Petakan layanan kritis lebih dulu.** Bangun peta layanan untuk layanan terpenting, termasuk ketergantungan pada pemasok dan platform bersama. Uji terhadap insiden atau perubahan nyata.
6. **Deteksi dan perbaiki drift.** Bandingkan keadaan aktual dengan keadaan yang diinginkan menurut jadwal, dan beri peringatan atas perbedaan. Perlakukan drift berulang sebagai sinyal tentang proses atau akses.
7. **Tunjuk pemilik untuk setiap item dan untuk mutu data.** Tunjukkan pemilik dalam catatan. Tinjau catatan usang dan yatim secara berkala.
8. **Kaitkan konfigurasi dengan catatan perubahan dan insiden.** Permudah melihat dari sebuah perubahan CI mana yang disentuhnya dan dari sebuah insiden CI mana yang terlibat. Periksa bahwa tautan dipakai.
9. **Pakai label dan tag secara konsisten.** Di lingkungan cloud, wajibkan tag untuk pemilik, layanan, dan lingkungan saat pembuatan, dan tegakkan dalam pipeline.
10. **Ukur kegunaannya.** Lacak seberapa sering data dipakai dalam perubahan dan insiden, dan seberapa sering keliru. Perbaiki penyebabnya, dan pensiunkan data yang tidak dipakai siapa pun.

## Pertanyaan untuk dibahas bersama tim Anda

**Keputusan apa yang ingin kita dukung dengan data konfigurasi, dan apakah ia mendukungnya hari ini?**
Mulailah dari pemakaian. Harapkan jawaban seperti dampak perubahan dan cakupan insiden. Cobalah pada perubahan terbaru. Lanjutkan dengan memilih satu pemakaian dan menguji data terhadapnya.

**Di mana deskripsi sebenarnya dari infrastruktur kita: dalam kode, dalam basis data, dalam kepala orang?**
Tanyakan sumber kebenaran untuk tiga sistem. Harapkan beberapa jawaban. Lanjutkan dengan memilih satu sistem dan memindahkan definisinya ke kontrol versi.

**Kapan terakhir kali CMDB menyesatkan kita, dan mengapa?**
Minta kasus nyata. Harapkan hubungan yang usang atau hilang. Cari penyebabnya, seperti entri manual. Lanjutkan dengan memilih satu sumber data untuk diotomatiskan.

**Bagaimana kita tahu ketika seseorang mengubah sistem hidup dengan tangan?**
Pertanyaan ini menguji deteksi drift. Harapkan "kita tidak tahu". Lanjutkan dengan menyepakati pemindaian pada satu sistem dan aturan tentang apa yang terjadi selanjutnya.

**Siapa pemilik setiap item konfigurasi kritis kita, dan bagaimana kita menemukan pemiliknya pukul 3 pagi?**
Tanyakan di mana kepemilikan dicatat. Cobalah dengan beberapa item. Lanjutkan dengan menambahkan tag pemilik dan memeriksanya.

**Bagaimana AI dapat membantu menjaga gambaran konfigurasi kita akurat, dan apa yang akan kita periksa secara manual?**
AI dapat menyarankan hubungan dan menemukan anomali. Ia juga dapat mengarang tautan. Tanyakan siapa pemilik pemakaian dan bagaimana kesalahan ditemukan. Lanjutkan dengan membandingkan hubungan yang disarankan AI dengan peta yang diverifikasi secara manual untuk satu layanan.

## Dalam praktik: contoh manajemen layanan

Tim digital sebuah perusahaan kereta api nasional menjalankan platform tiket yang terdiri dari sekitar 60 layanan di dua penyedia cloud dan pusat data on-premises yang lama. CMDB memuat 40.000 catatan, sebagian besar dimasukkan dengan tangan, dan tim operasi mengatakan ia salah sekitar sepertiga waktu. Selama gangguan baru-baru ini, antrean pesan yang gagal menghentikan penjualan tiket; tak seorang pun menyadari bahwa program loyalitas juga memakainya sampai pelanggan mengeluh.

Pemimpin platform menetapkan tujuan yang lebih sempit: untuk sepuluh layanan paling kritis, peta layanan harus cukup benar untuk menjawab "apa yang terdampak jika komponen ini gagal?" dalam lima menit. Tim mendefinisikan masing-masing dari kesepuluh layanan dalam kode, dengan pemilik dan ketergantungan dinyatakan sebagai tag dalam definisi. Pekerjaan malam membaca platform cloud dan repositori kode, membangun peta, dan menandai perbedaan antara keduanya. Pusat data dicakup oleh penemuan, dan keluarannya dicocokkan dengan nama layanan yang sama dengan tinjauan manual untuk item baru.

Dalam satu kuartal, peta untuk sepuluh layanan itu dipercaya. Pada insiden berikutnya, basis data yang gagal dalam layanan pembayaran menunjukkan lima layanan yang membaca darinya, dan tim memberi tahu pemilik mereka dalam hitungan menit. Laporan drift menemukan 14 perubahan manual di produksi, tiga di antaranya aturan grup keamanan yang dibuka selama insiden lama dan tidak pernah ditutup.

Yang berubah: insiden dan perubahan kini dimulai dengan peta, dan CMDB lama dipensiunkan untuk layanan-layanan ini. Yang masih sulit: 50 layanan lainnya belum tercakup, dan tim yang memilikinya melihat sedikit alasan untuk mengerjakannya; penemuan pusat data masih menghasilkan derau; dan beberapa ketergantungan, seperti API pemasok, tidak dapat ditemukan dan dimasukkan dengan tangan. Pemimpin platform memilih sepuluh layanan berikutnya berdasarkan riwayat insiden dan menegosiasikan waktu dengan pemiliknya.

## Empat perspektif

### Tim produk dan pengiriman

Definisikan infrastruktur dan konfigurasi Anda dalam kode, beri tag sumber daya dengan pemilik dan layanan, dan hindari perubahan manual pada sistem hidup. Jaga informasi ketergantungan tetap mutakhir sebagai bagian dari desain Anda.

### Tim layanan dan operasi

Pakai peta dalam insiden dan perubahan, dan laporkan di mana ia keliru. Deteksi drift, tutup perubahan sementara, dan jaga data kepemilikan tetap mutakhir.

### Kepemimpinan dan tata kelola

Minta bukti bahwa data dipakai dan akurat, bukan jumlah catatan. Danai otomatisasi dan disiplin kepemilikan. Dukung aturan bahwa perubahan hidup melalui kode.

### Pelanggan dan pengguna

Anda diuntungkan ketika penyedia mengetahui apa bergantung pada apa: diagnosis lebih cepat dan lebih sedikit kejutan dari perubahan. Tanyakan apakah layanan yang Anda andalkan memiliki pemilik dan peta dampak.

## Agile, AI, otomatisasi, dan analitik

### Agile

Bangun gambaran dalam langkah kecil, mulai dari layanan paling kritis, dan perbaiki bersama orang yang memakainya. Tinjau kegunaannya setelah insiden. Perhatian: proyek CMDB big-bang mengulang kegagalan lama; mulailah dari pertanyaan dan beberapa layanan.

### AI

AI dapat menyarankan hubungan dari log dan trace, menjawab pertanyaan dampak dalam bahasa alami, dan menemukan pencilan, dengan pemilik dan verifikasi manusia. Perhatian: AI dapat menyimpulkan ketergantungan yang tidak ada atau melewatkan yang nyata; validasi terhadap insiden yang diketahui. Lihat Topik 5.2 — AIOps.

### Otomatisasi

Otomatiskan penemuan, rekonsiliasi, deteksi drift, dan penegakan tag, dengan log dan tinjauan pengecualian. Perhatian: impor otomatis dapat membanjiri basis data dengan catatan bernilai rendah; saring menurut apa yang mendukung keputusan. Lihat Topik 6.3 — Infrastruktur sebagai kode dan GitOps.

### Analitik

Lihat kelengkapan data untuk layanan kritis, akurasi yang ditemukan dalam insiden, jumlah drift, waktu untuk menemukan pemilik, dan pemakaian data dalam perubahan. Perhatian: menghitung catatan atau kolom yang terisi mendorong volume di atas akurasi; ukur seberapa sering data membantu dan seberapa sering menyesatkan. Lihat buku *Service Management Metrics* dan Topik 7.2 — Fondasi dan tata kelola data.

## Mode kegagalan umum

- **CMDB yang diisi dengan tangan.** Data membusuk cepat. Isi melalui penemuan dan kode.
- **Mencatat segalanya.** Derau menyembunyikan nilai. Batasi ruang lingkup pada keputusan.
- **Dua sumber untuk fakta yang sama.** Keduanya tidak cocok. Nyatakan satu sumber.
- **Tidak ada kepemilikan.** Tak seorang pun mengoreksi kesalahan. Tetapkan pemilik.
- **Perubahan manual pada sistem hidup.** Drift tumbuh. Ubah melalui kode dan deteksi drift.
- **Hubungan hilang.** Analisis dampak gagal. Petakan layanan kritis lebih dulu.
- **Melacak sumber daya yang sementara.** Catatan langsung usang. Lacak pada tingkat layanan, dengan tag.

## Model kematangan

| Dimensi | Memulai | Mengembangkan | Menstandardisasi | Mengelola | Mengorkestrasi |
|---|---|---|---|---|---|
| Ruang lingkup | Tidak jelas | Server utama didaftar | Layanan kritis dan ketergantungan dipetakan | Ruang lingkup diperluas menurut nilai dan insiden | Cakupan luas di seluruh aset dan pemasok |
| Sumber kebenaran | Lembar kerja dan ingatan | Sebagian infrastruktur dalam kode | Keadaan yang diinginkan dalam kode, keadaan aktual melalui penemuan | Rekonsiliasi diotomatiskan dan dipantau | Satu tampilan terkoordinasi yang diumpan kode, penemuan, dan platform |
| Mutu data | Tidak diketahui | Pemeriksaan acak | Atribut dan kesegaran terdefinisi | Akurasi diukur dalam insiden dan perubahan | Mutu dipastikan terus-menerus dengan tinjauan manusia |
| Pemakaian | Jarang dipakai | Dipakai dalam sebagian insiden | Dipakai rutin dalam perubahan dan insiden | Pemakaian dan nilai dilacak | Data menggerakkan risiko, biaya, dan perencanaan lintas layanan |

## Daftar periksa

- [ ] Kami mendaftar pertanyaan yang harus dijawab data konfigurasi kami.
- [ ] Keadaan yang diinginkan untuk sistem kunci berada dalam kontrol versi.
- [ ] Penemuan mengumpan peta layanan kami dan direkonsiliasi dengan kode.
- [ ] Setiap fakta memiliki sumber kebenaran yang terdefinisi.
- [ ] Layanan kritis memiliki ketergantungan yang dipetakan, diuji terhadap peristiwa nyata.
- [ ] Kami mendeteksi dan mengoreksi drift konfigurasi.
- [ ] Setiap item konfigurasi atau kelompok memiliki pemilik.
- [ ] Kami mengukur seberapa sering data membantu dan seberapa sering menyesatkan.

## Prompt AI

**Temukan ketergantungan yang hilang dari sebuah insiden.**

```text
Here is the timeline of an incident, with the services that were affected: [paste]. Here is our service map for the failing component: [paste].
List affected services that the map does not show as dependent on the failing component, and for each give a question to verify the link. Do not infer dependencies without evidence in the timeline.
List what you are unsure of.
```

**Bandingkan keadaan yang diinginkan dan aktual.**

```text
Here is the desired configuration from our code: [paste]. Here is what discovery found running: [paste].
List differences by type (missing, extra, changed), and for each one a question about why it differs. Do not recommend fixes.
List what you are unsure of.
```

**Susun draf aturan tag kepemilikan.**

```text
Our cloud resources are used by these teams and services: [list]. Tags we want on every resource: [list].
Draft a tagging standard of under one page with rules, allowed values, and how to enforce it in the pipeline. Do not name specific tools unless I list them.
List what you are unsure of.
```

## Skill AI

- [configuration-management](../../../../skills/configuration-management/SKILL.md): gunakan untuk merancang dan memelihara catatan konfigurasi dan hubungan.
- [workflow-analysis](../../../../skills/workflow-analysis/SKILL.md): gunakan untuk menelusuri ketergantungan dalam proses atau sistem.
- [mermaid-diagram](../../../../skills/mermaid-diagram/SKILL.md): gunakan untuk menggambar peta layanan dalam teks.
- [data-quality](../../../../skills/data-quality/SKILL.md): gunakan untuk mendefinisikan dan memeriksa mutu data konfigurasi.

## Sumber utama

- PeopleCert, halaman sertifikasi ITIL: uraian pemilik tentang praktik manajemen konfigurasi layanan.
- Kief Morris, *Infrastructure as Code* (edisi ke-2, 2020): panduan praktis untuk mendefinisikan dan mengelola infrastruktur dalam kode.
- Wikipedia, "Configuration management" dan "Configuration management database": ikhtisar gagasan ini.
- Wikipedia, "Infrastructure as code": pendekatan rekayasa untuk keadaan yang diinginkan.

## Referensi

1. Configuration management — Wikipedia — https://en.wikipedia.org/wiki/Configuration_management
2. Configuration management database — Wikipedia — https://en.wikipedia.org/wiki/Configuration_management_database
3. Configuration item — Wikipedia — https://en.wikipedia.org/wiki/Configuration_item
4. Infrastructure as code — Wikipedia — https://en.wikipedia.org/wiki/Infrastructure_as_code
5. Baseline (configuration management) — Wikipedia — https://en.wikipedia.org/wiki/Baseline_(configuration_management)
6. Idempotence — Wikipedia — https://en.wikipedia.org/wiki/Idempotence
7. Single source of truth — Wikipedia — https://en.wikipedia.org/wiki/Single_source_of_truth
8. Change impact analysis — Wikipedia — https://en.wikipedia.org/wiki/Change_impact_analysis
9. Graph database — Wikipedia — https://en.wikipedia.org/wiki/Graph_database
10. Federated database system — Wikipedia — https://en.wikipedia.org/wiki/Federated_database_system
11. Data quality — Wikipedia — https://en.wikipedia.org/wiki/Data_quality
