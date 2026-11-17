# Pipeline dan perubahan otomatis

**Pipeline pengiriman dapat membawa kontrol yang dibutuhkan pemampuan perubahan: pengujian, pemeriksaan keamanan, pemeriksaan kebijakan, tinjauan sejawat, pemisahan tugas, dan jejak bukti untuk setiap perubahan; persetujuan manusia yang tersisa adalah untuk penilaian yang tidak dapat dibuat pipeline.**

## Mengapa ini penting

Ketika perubahan jarang dan besar, kontrol berarti rapat. Orang berkumpul, membaca dokumen, dan sepakat bahwa rilis boleh berlanjut. Ketika perubahan menjadi sering dan kecil, rapat tidak dapat diskalakan. Tim yang merilis dua puluh kali sehari tidak dapat mengadakan dua puluh dewan. Namun ia dapat menjalankan rangkaian pemeriksaan yang sama dua puluh kali, dengan ketelitian yang konsisten, dan menyimpan catatan masing-masing.

Itulah sumbangan pipeline bagi manajemen layanan. Urutan otomatis yang sama yang membangun dan men-deploy perubahan juga dapat mengujinya, memindainya untuk kelemahan, memeriksanya terhadap kebijakan, mewajibkan peninjau kedua, dan menuliskan apa yang terjadi. Hasilnya sering kontrol yang lebih baik daripada yang diberikan rapat: konsisten, terikat pada perubahan yang sebenarnya, dan tersedia bagi auditor lama setelahnya. Wikipedia menjelaskan continuous delivery dan test automation sebagai praktik yang memungkinkan hal ini.

Pipeline juga sesuatu yang baru untuk ditata kelola. Ia memegang kredensial yang dapat mengubah produksi, ia dapat salah dikonfigurasi sehingga melewati pemeriksaan, dan ia dapat membuai tim agar memercayai centang hijau yang menguji sedikit. Topik ini menjelaskan cara merancang pipeline sebagai kontrol, cara menghasilkan bukti bagi auditor, dan cara mempertahankan penilaian manusia yang tidak dapat digantikan otomatisasi. Ia dibangun di atas pengiriman berkelanjutan (Topik 2.2 — Pengiriman berkelanjutan) dan pemampuan perubahan (Topik 3.4 — Pemampuan Perubahan), terhubung dengan infrastruktur sebagai kode (Topik 6.3 — Infrastruktur sebagai kode dan GitOps) dan manajemen rilis (Topik 3.5 — Manajemen Rilis dan Deployment), dan berbagi kepedulian dengan keamanan informasi (Topik 3.13 — Manajemen Keamanan Informasi).

## Konsep inti

**Pipeline.** Urutan tahap otomatis yang membawa perubahan dari kode sumber ke produksi: build, uji, pindai, kemas, deploy, verifikasi. Wikipedia menjelaskan pipeline dalam perangkat lunak. Setiap tahap lolos atau gagal, dan kegagalan menghentikan perubahan. Pipeline didefinisikan sebagai kode dan disimpan dalam kontrol versi.

**Continuous integration dan delivery.** Menggabungkan perubahan sering dan menjaga setiap build dapat dirilis, sebagaimana dijelaskan dalam Topik 2.2 — Pengiriman berkelanjutan. Pipeline adalah mesin keduanya. Wikipedia menjelaskan continuous integration dan continuous delivery.

**Tahap sebagai kontrol.** Setiap tahap adalah kontrol dengan tujuan:

| Tahap | Kontrol yang disediakan |
|---|---|
| Build | Perubahan dikompilasi dan dikemas secara dapat direproduksi |
| Pengujian unit dan integrasi | Perilaku yang diketahui masih berfungsi |
| Analisis statis dan pemindaian keamanan | Cacat umum dan dependensi rentan ditemukan |
| Pemeriksaan kebijakan | Aturan seperti tagging, enkripsi, dan wilayah yang disetujui terpenuhi |
| Tinjauan sejawat | Orang kedua telah membaca perubahan |
| Deploy bertahap dan verifikasi | Perubahan berfungsi di tempat aman sebelum paparan lebih luas |

**Gerbang mutu (quality gate).** Syarat yang harus dipenuhi perubahan untuk melanjutkan, seperti pengujian lolos, tidak ada kerentanan kritis, atau cakupan tidak turun. Wikipedia menjelaskan quality control secara lebih luas. Gerbang harus sedikit, jelas, dan cepat. Gerbang yang sering ditimpa atau diabaikan mengajari tim untuk mengabaikan gerbang.

**Pengujian otomatis.** Pengujian unit, integrasi, dan ujung ke ujung berjalan pada setiap perubahan. Wikipedia menjelaskan test automation, unit testing, dan integration testing. Nilainya terletak pada seberapa Anda memercayainya: pengujian yang tidak stabil mengikis kepercayaan. Lihat Topik 2.2 — Pengiriman berkelanjutan.

**Pemindaian keamanan.** Analisis statis memeriksa kode untuk pola kelemahan; software composition analysis memeriksa pustaka yang Anda pakai untuk kerentanan yang diketahui. Wikipedia menjelaskan static application security testing dan software composition analysis. Temuan perlu ditriase, karena banyak yang berisiko rendah atau palsu.

**Policy as code.** Aturan yang ditulis sebagai kode yang dapat diperiksa mesin dan diterapkan dalam pipeline, misalnya "tidak ada bucket penyimpanan yang boleh publik". Mereka membuat persyaratan dapat diuji dan hasilnya dapat dicatat. Lihat Topik 6.3 — Infrastruktur sebagai kode dan GitOps.

**Pemisahan tugas.** Orang yang menulis perubahan bukan satu-satunya yang menyetujuinya. Wikipedia menjelaskan separation of duties. Dalam pipeline hal ini ditegakkan dengan mewajibkan peninjau kedua dan mencegah penulis menyetujui perubahannya sendiri. Di mana regulasi mensyaratkannya, pipeline dapat menunjukkan siapa melakukan apa.

**Jenis perubahan dalam pipeline.** Perubahan standar, seperti pembaruan konfigurasi rutin, dapat lewat dengan pemeriksaan otomatis saja tanpa persetujuan manual. Perubahan normal dengan risiko lebih tinggi dapat menambah langkah persetujuan manusia dalam pipeline. Perubahan darurat memakai pipeline yang sama dalam mode cepat, dengan catatan yang sama. Lihat Topik 3.4 — Pemampuan Perubahan.

**Bukti.** Pipeline mencatat apa yang berubah (commit), siapa yang meninjau, pemeriksaan apa yang berjalan dan hasilnya, siapa atau apa yang men-deploy, dan kapan. Wikipedia menjelaskan audit trail. Bukti harus disimpan di tempat yang tidak dapat diubah oleh orang yang bersangkutan, dan mudah diambil menurut perubahan.

**Rantai pasok perangkat lunak.** Pipeline membangun dari komponen yang disediakan pihak lain, memakai perangkat dari pihak lain, dan menghasilkan artefak yang di-deploy. Wikipedia menjelaskan software supply chain dan gagasan provenance, catatan yang dapat diverifikasi tentang dari mana artefak berasal. Praktiknya mencakup mematok versi, menandatangani artefak, dan menyimpan bill of materials. Lihat Topik 4.2 — Manajemen Aset Perangkat Lunak.

**Peluncuran progresif dan verifikasi.** Setelah deploy, pipeline dapat memeriksa indikator kesehatan dan rollback otomatis jika memburuk. Teknik seperti peluncuran bertahap dan feature flag dijelaskan dalam Topik 3.5 — Manajemen Rilis dan Deployment.

**Keamanan pipeline.** Pipeline dapat men-deploy ke produksi, sehingga ia sasaran bernilai tinggi. Lindungi: batasi siapa yang dapat mengubah definisi pipeline, pakai kredensial berumur pendek, isolasi lingkungan build, dan pantau aktivitas yang tidak biasa. Perlakukan perubahan pada pipeline sehati-hati perubahan pada produksi.

**Bypass dan pengecualian.** Beberapa perubahan tidak akan cocok: perbaikan data, tindakan vendor manual. Definisikan jalur pengecualian yang dicatat, dengan persetujuan, alih-alih membiarkan orang mencari siasat. Tinjau pengecualian secara berkala.

**Pipeline sebagai produk.** Pipeline membutuhkan pemilik, backlog, dokumentasi, dan pengguna yang memberi umpan balik. Pipeline yang lambat atau tidak stabil mengajari orang menghindarinya.

**Bagaimana lensa-lensa cocok.** Pipeline adalah tempat lensa agile dan lensa otomatisasi bertemu tata kelola. AI dapat menyarankan pengujian, meninjau perubahan, dan menjelaskan kegagalan, di bawah tinjauan manusia. Analitik memakai data pipeline untuk menunjukkan pengiriman dan mutu perubahan.

## Praktik terbaik

1. **Rancang setiap tahap sebagai kontrol bernama.** Untuk setiap tahap, tulis risiko yang ditanganinya, siapa pemiliknya, dan apa arti kegagalan. Buang tahap yang tidak menangani risiko nyata.
2. **Jaga pipeline tetap cepat.** Bidik hasil dalam hitungan menit untuk jalur umum. Jalankan pemeriksaan lambat secara paralel atau di tahap lebih akhir, dengan umpan balik jelas, agar orang tidak mencari jalan pintas.
3. **Jadikan pipeline satu-satunya jalur.** Perubahan produksi melaluinya, dengan jalur pengecualian yang dicatat untuk sisanya. Blokir akses langsung bila bisa.
4. **Tegakkan pemisahan tugas dalam perangkat.** Wajibkan peninjau kedua yang berkualifikasi, cegah penulis menyetujui perubahannya sendiri, dan catat kedua identitas.
5. **Perlakukan kegagalan dengan serius.** Pengujian atau pemindaian yang gagal menghentikan perubahan. Jangan izinkan penimpaan rutin, dan wajibkan persetujuan serta alasan yang dicatat ketika diperlukan.
6. **Triase temuan keamanan.** Tetapkan ambang menurut keparahan dan keterpaparan, perbaiki yang serius, dan lacak sisanya. Setel aturan untuk mengurangi derau agar temuan dibaca.
7. **Catat bukti secara otomatis.** Tangkap commit, peninjau, pemeriksaan, hasil, artefak, dan rincian deployment dalam penyimpanan yang tidak dapat disunting penulis perubahan. Kaitkan dengan catatan perubahan.
8. **Amankan pipeline itu sendiri.** Batasi siapa yang dapat mengubah definisi, pakai kredensial berumur pendek dengan cakupan minimum, patok perangkat dan dependensi, dan tandatangani artefak.
9. **Verifikasi setelah deployment.** Periksa indikator kesehatan, dan rollback atau jeda ketika memburuk. Laporkan hasil dalam catatan yang sama.
10. **Tinjau pipeline secara berkala.** Lihat pemeriksaan mana yang menangkap masalah nyata, mana yang diabaikan, berapa lama proses berjalan, dan pengecualian apa yang terjadi. Perbaiki dan pangkas.

## Pertanyaan untuk dibahas bersama tim Anda

**Kontrol perubahan kita yang mana yang disediakan pipeline hari ini, dan mana yang masih bergantung pada rapat atau formulir?**
Daftarkan kontrolnya. Harapkan sebagian manual yang bisa diotomatiskan. Lanjutkan dengan memilih satu untuk dipindahkan ke pipeline.

**Apa yang akan dilihat auditor jika meminta bukti satu perubahan dari bulan lalu?**
Cobalah. Harapkan harus menyusun dari beberapa sistem. Lanjutkan dengan menyepakati satu catatan per perubahan dan cara mengambilnya.

**Seberapa sering orang menimpa atau melewati pemeriksaan yang gagal, dan mengapa?**
Minta data. Harapkan lebih banyak dari yang dikatakan siapa pun. Lanjutkan dengan melihat pemeriksaan yang paling sering ditimpa untuk diperbaiki atau dibuang.

**Siapa yang dapat mengubah definisi pipeline, dan siapa yang meninjau perubahan itu?**
Pertanyaan ini menguji keamanan pipeline. Harapkan akses yang luas. Lanjutkan dengan membatasi akses dan mewajibkan tinjauan untuk perubahan pipeline.

**Temuan dari pemindai kita yang mana yang kita baca, dan mana yang kita abaikan?**
Tanyakan kepada insinyur. Harapkan "sebagian besar diabaikan". Lanjutkan dengan menyetel pemindai ke temuan yang akan ditindaklanjuti orang.

**Di mana AI dapat membantu dalam pipeline, dan apa yang harus tetap keputusan manusia?**
AI dapat mengusulkan pengujian, merangkum kegagalan, dan meninjau kode. Persetujuan risiko dan pengecualian harus tetap manusia. Lanjutkan dengan menguji coba pengujian yang disarankan AI dengan tinjauan.

## Dalam praktik: contoh manajemen layanan

Badan jaminan sosial nasional menjalankan sekitar 80 aplikasi. Perubahan pada sistem perhitungan tunjangannya memerlukan dewan tinjauan mingguan dan formulir panjang, dan rilis terjadi bulanan. Kantor audit mendapati bahwa dewan menyetujui hampir semuanya dan bahwa bukti untuk perubahan individual tersebar. Para insinyur badan berargumen bahwa pipeline dapat melakukan lebih baik.

Manajer pengiriman menjalankan uji coba pada satu aplikasi. Pipeline membangun aplikasi, menjalankan 1.800 pengujian unit dan integrasi serta serangkaian pengujian regresi yang diambil dari cacat masa lalu, memindai kode dan pustaka, memeriksa definisi infrastruktur terhadap kebijakan, dan mewajibkan tinjauan dari insinyur kedua yang pernah mengerjakan sistem. Setiap putaran menulis catatan: commit, peninjau, hasil uji, hasil pemindaian, pengenal artefak, dan rincian deployment, disimpan dalam log yang tidak dapat disunting insinyur.

Proses perubahan dirancang ulang dalam tiga jalur. Perubahan rutin, seperti pembaruan teks dan konfigurasi minor, adalah standar: jika pipeline lolos, perubahan di-deploy ke kelompok percontohan lalu ke semua orang, tanpa dewan. Perubahan pada aturan perhitungan tunjangan bersifat normal dan, sebagai tambahan, memerlukan persetujuan dari analis kebijakan, yang melihat ringkasan dalam bahasa sederhana dan hasil uji. Perbaikan darurat memakai pipeline yang sama dengan rangkaian uji yang dipersingkat dan tinjauan retrospektif.

Kantor audit meninjau sampel 30 perubahan, dan mendapati bahwa buktinya lengkap untuk semuanya dan bahwa pipeline memblokir empat perubahan karena gagal pemeriksaan. Kantor juga mencatat bahwa dua insinyur berulang kali saling menyetujui perubahan, dan meminta aturan agar peninjau dirotasi.

Yang berubah: rilis menjadi mingguan, dewan berfokus pada perubahan aturan, dan auditor dapat mengambil bukti untuk perubahan apa pun dalam hitungan menit. Yang masih sulit: aplikasi yang lebih tua tidak dapat menjalankan pengujian otomatis, sehingga perubahannya tetap memakai jalur lama; pemindai menandai banyak isu pustaka berisiko rendah, dan insinyur mulai mengabaikan laporannya; dan kredensial pipeline sendiri ternyata memiliki akses lebih luas dari yang dibutuhkan. Manajer menambahkan penyetelan pemindai, rotasi peninjau, dan tinjauan kredensial pipeline.

## Empat perspektif

### Tim produk dan pengiriman

Miliki pipeline untuk layanan Anda: jaga agar cepat, tepercaya, dan jujur tentang apa yang diperiksanya. Tulis pengujian yang menangkap kesalahan nyata, perbaiki yang tidak stabil, dan perlakukan temuan sebagai pekerjaan. Jangan melewatinya.

### Tim layanan dan operasi

Bantu menentukan pemeriksaan dan indikator kesehatan yang dipakai pipeline setelah deployment. Pakai bukti dalam insiden dan tinjauan. Simpan jalur pengecualian untuk keadaan darurat sungguhan.

### Kepemimpinan dan tata kelola

Minta bukti dari pipeline, bukan lebih banyak rapat. Danai pengujian, pemindaian, dan keamanan pipeline. Tinjau penimpaan dan pengecualian. Jangan mengira pipeline hijau berarti sistem aman.

### Pelanggan dan pengguna

Anda diuntungkan oleh perubahan yang sering dan lebih aman. Anda seharusnya diberi tahu tentang perubahan signifikan yang memengaruhi Anda, dan dapat melaporkan masalah setelah rilis.

## Agile, AI, otomatisasi, dan analitik

### Agile

Perubahan kecil dan sering yang lolos pemeriksaan yang sama setiap kali adalah bentuk praktis kendali agile. Perbaiki pipeline dari insiden dan umpan balik. Perhatian: jangan memperlakukan pipeline sebagai selesai; celah pengujian tumbuh seiring sistem berubah.

### AI

AI dapat menyarankan pengujian, meninjau perubahan, merangkum kegagalan, dan mentriase temuan, dengan seseorang bertanggung jawab atas setiap keputusan. Perhatian: pengujian buatan AI mungkin lolos sambil menguji sedikit, dan tinjauan kode oleh AI dapat melewatkan isu keamanan; ukur cacat yang lolos, dan pertahankan tinjauan manusia untuk risiko. Lihat Topik 5.4 — AI generatif untuk insiden, pengetahuan, dan perubahan.

### Otomatisasi

Pipeline adalah otomatisasi jalan menuju produksi, termasuk pemeriksaan dan catatan. Lindungi sebagai infrastruktur kritis dengan identitas sendiri, hak istimewa paling sedikit, dan pemantauan. Perhatian: persetujuan otomatis berdasarkan aturan yang lemah memberi jaminan palsu; tinjau apa yang sebenarnya diperiksa setiap aturan. Lihat Topik 6.1 — Strategi otomatisasi.

### Analitik

Lacak lead time, frekuensi deployment, tingkat kegagalan perubahan, waktu pemulihan, jumlah penimpaan, cacat yang lolos, dan temuan menurut keparahan. Perhatian: ukuran pengiriman mudah dimanipulasi dan tidak boleh meranking tim; lacak cacat yang lolos untuk menguji pemeriksaan. Lihat buku *Service Management Metrics* dan Topik 7.3 — Pengukuran dan pelaporan.

## Mode kegagalan umum

- **Hijau berarti aman.** Pengujian tipis dan lolos. Tinjau apa yang sebenarnya diuji setiap pemeriksaan dan lacak cacat yang lolos.
- **Penimpaan rutin.** Pemeriksaan dilewati. Buat penimpaan jarang, disetujui, dan ditinjau.
- **Pipeline lambat.** Orang mencari jalan pintas. Jaga jalur umum tetap cepat.
- **Derau pemindai.** Temuan diabaikan. Setel dan triase.
- **Bukti tersebar.** Audit memakan berminggu-minggu. Catat otomatis di satu tempat.
- **Pipeline berhak istimewa berlebih.** Satu kompromi menjangkau segalanya. Batasi akses dan pakai kredensial berumur pendek.
- **Menyetujui sendiri.** Penulis menyetujui pekerjaannya sendiri. Tegakkan pemisahan tugas dalam perangkat.

## Model kematangan

| Dimensi | Memulai | Mengembangkan | Menstandardisasi | Mengelola | Mengorkestrasi |
|---|---|---|---|---|---|
| Kontrol | Pemeriksaan manual | Build dan sebagian pengujian | Pengujian, pemindaian, kebijakan, dan tinjauan pada setiap perubahan | Efektivitas pemeriksaan diukur | Kontrol menyesuaikan otomatis menurut risiko dengan pengawasan manusia |
| Bukti | Formulir dan email | Sebagian log | Catatan otomatis per perubahan | Bukti diaudit dan disampel | Bukti berkelanjutan lintas pipeline dan pemasok |
| Keamanan pipeline | Kredensial bersama | Kesadaran | Hak istimewa paling sedikit, perangkat dipatok, definisi dilindungi | Pipeline dipantau dan diuji | Rantai pasok diverifikasi dari ujung ke ujung |
| Aliran | Lambat, manual | Build lebih cepat | Jalur umum cepat dengan jalur pengecualian | Aliran dan kegagalan diukur | Pengiriman dioptimalkan lintas layanan |

## Daftar periksa

- [ ] Setiap tahap pipeline memiliki tujuan bernama dan pemilik.
- [ ] Jalur umum berjalan dalam hitungan menit.
- [ ] Perubahan produksi melalui pipeline, dengan jalur pengecualian yang dicatat.
- [ ] Pemisahan tugas ditegakkan dalam perangkat.
- [ ] Pemeriksaan yang gagal menghentikan perubahan, dan penimpaan disetujui dan ditinjau.
- [ ] Bukti dicatat otomatis di penyimpanan yang tidak dapat disunting penulis.
- [ ] Definisi pipeline dan kredensial dilindungi dan ditinjau.
- [ ] Kami meninjau efektivitas pemeriksaan, termasuk cacat yang lolos.

## Prompt AI

**Petakan kontrol ke pipeline.**

```text
Here is our list of change controls: [paste]. Here is a description of what our pipeline does: [paste].
For each control, say whether the pipeline description appears to provide it, partly provide it, or not mention it, quoting the words. Do not assume checks that are not described.
List what you are unsure of.
```

**Tinjau putaran pipeline yang gagal.**

```text
Here is the log of a failed run: [paste, with secrets removed].
Summarize which stage failed, the error messages, and the three most likely areas to check, labeling each as a hypothesis. Do not suggest overriding the failure.
List what you are unsure of.
```

**Siapkan sampel bukti untuk audit.**

```text
Here are the records for [number] changes: [paste summary with commit, reviewers, checks, results].
For each, check whether it shows a reviewer who is not the author, passing tests, scan results, and deployment time, and list gaps. Do not infer anything not in the records.
List what you are unsure of.
```

## Skill AI

- [change-request](../../../../skills/change-request/SKILL.md): gunakan untuk mendeskripsikan perubahan dan bukti yang dibutuhkannya.
- [shift-left-testing](../../../../skills/shift-left-testing/SKILL.md): gunakan untuk memindahkan pengujian lebih awal dalam pipeline.
- [security-testing](../../../../skills/security-testing/SKILL.md): gunakan untuk merencanakan pemeriksaan keamanan pipeline.
- [compliance-testing](../../../../skills/compliance-testing/SKILL.md): gunakan untuk memeriksa bukti terhadap persyaratan kontrol.
- [test-driven-development](../../../../skills/test-driven-development/SKILL.md): gunakan untuk membangun pengujian bersama perubahan.

## Sumber utama

- Jez Humble dan David Farley, *Continuous Delivery* (2010): uraian fondasi tentang pipeline deployment.
- Nicole Forsgren, Jez Humble, dan Gene Kim, *Accelerate* (2018): riset tentang praktik pengiriman dan kinerja.
- DORA (dora.dev): riset dan laporan berkelanjutan.
- Wikipedia, "Continuous delivery" dan "Software supply chain": ikhtisar praktik dan risikonya.

## Referensi

1. Continuous delivery — Wikipedia — https://en.wikipedia.org/wiki/Continuous_delivery
2. Continuous integration — Wikipedia — https://en.wikipedia.org/wiki/Continuous_integration
3. Test automation — Wikipedia — https://en.wikipedia.org/wiki/Test_automation
4. Unit testing — Wikipedia — https://en.wikipedia.org/wiki/Unit_testing
5. Integration testing — Wikipedia — https://en.wikipedia.org/wiki/Integration_testing
6. Static application security testing — Wikipedia — https://en.wikipedia.org/wiki/Static_application_security_testing
7. Software composition analysis — Wikipedia — https://en.wikipedia.org/wiki/Software_composition_analysis
8. Software supply chain — Wikipedia — https://en.wikipedia.org/wiki/Software_supply_chain
9. Separation of duties — Wikipedia — https://en.wikipedia.org/wiki/Separation_of_duties
10. Audit trail — Wikipedia — https://en.wikipedia.org/wiki/Audit_trail
11. Code signing — Wikipedia — https://en.wikipedia.org/wiki/Code_signing
12. DORA research — DevOps Research and Assessment — https://dora.dev/research/
