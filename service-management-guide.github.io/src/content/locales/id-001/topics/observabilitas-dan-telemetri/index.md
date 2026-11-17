# Observabilitas dan telemetri

**Observabilitas adalah kemampuan mengajukan pertanyaan baru kepada sistem yang berjalan dan mendapat jawaban dari data yang dipancarkannya: metrik, log, dan trace yang membawa konteks konsisten; ia membuahkan hasil ketika telemetri dirancang sejak awal, distandarkan pada format terbuka, dijaga pada biaya yang terjangkau, dan dipakai untuk memahami pengalaman pengguna, bukan hanya kesehatan mesin.**

## Mengapa ini penting

Pemantauan menjawab pertanyaan yang sudah Anda pikirkan sebelumnya. Apakah layanan hidup? Apakah disk penuh? Apakah latensi di atas dua detik? Itu pertanyaan yang baik, dan menangkap kegagalan yang pernah Anda lihat. Namun layanan modern gagal dengan cara baru. Perubahan pada satu komponen memperlambat permintaan di komponen lain. Data tak biasa dari satu pelanggan memicu jalur langka. Dependensi tiga lapis di bawah memburuk, dan tak seorang pun punya dasbor untuknya.

Ketika kegagalan baru tiba, tim perlu mengajukan pertanyaan yang tidak diantisipasi siapa pun: permintaan mana yang lambat, untuk pengguna mana, melalui layanan mana, sejak rilis mana? Jika sistem memancarkan data yang kaya dan terhubung, tim dapat mengikuti jejaknya. Jika tidak, mereka menebak, menambah logging, deploy ulang, dan menunggu kegagalan terjadi lagi. Wikipedia menjelaskan observabilitas dalam perangkat lunak sebagai kemampuan memahami keadaan internal sistem dari keluaran eksternalnya, gagasan yang dipinjam dari teori kendali.

Kerja praktisnya ada pada telemetri: data yang dipancarkan sistem tentang dirinya sendiri. Telemetri yang baik dirancang, konsisten, dan terhubung, sehingga keluhan pengguna dapat ditelusuri ke satu permintaan, permintaan ke layanan yang disentuhnya, dan kelambatan ke panggilan tertentu. Topik ini menjelaskan jenis utama telemetri, standar yang membuatnya portabel, dan biaya serta risiko yang menyertainya. Ia dibangun di atas pemantauan (Topik 3.10 — Pemantauan dan Manajemen Peristiwa) dan terhubung dengan SRE (Topik 2.6 — Site Reliability Engineering), AIOps (Topik 5.2 — AIOps), dan tata kelola data (Topik 7.2 — Fondasi dan tata kelola data).

## Konsep inti

**Telemetri.** Data yang dikumpulkan dari sistem dan dikirim ke tempat di mana ia dapat diperiksa. Wikipedia menjelaskan telemetry secara umum. Dalam perangkat lunak, sinyal utamanya adalah metrik, log, dan trace, dengan yang lebih baru seperti profil dan peristiwa.

**Metrik.** Angka yang diukur dari waktu ke waktu, seperti laju permintaan, laju kesalahan, latensi, pemakaian memori, dan kedalaman antrean. Metrik murah disimpan dan bagus untuk tren, peringatan, dan dasbor. Metrik merangkum, sehingga kehilangan rincian tentang permintaan individual. Time series database, yang dijelaskan di Wikipedia, menyimpannya secara efisien; Prometheus adalah contoh sumber terbuka yang banyak dipakai.

**Log.** Catatan berstempel waktu atas peristiwa diskret, seperti pesan kesalahan atau transaksi yang selesai. Wikipedia menjelaskan logging in computing. Log memuat rincian, dan volumenya besar serta mahal untuk disimpan dan dicari. Log terstruktur, dengan kolom bernama yang konsisten alih-alih teks bebas, lebih mudah dikueri dan dikaitkan dengan sinyal lain.

**Trace.** Catatan jalur satu permintaan melalui bagian-bagian sistem terdistribusi, menunjukkan layanan mana yang dilaluinya dan berapa lama masing-masing. Wikipedia menjelaskan tracing in software. Trace menjawab "ke mana waktunya pergi?" dalam sistem yang dibangun dari banyak layanan, seperti microservices, yang juga dijelaskan Wikipedia.

**Konteks dan korelasi.** Yang membuat ketiga sinyal kuat bersama adalah konteks bersama: pengenal yang mengikat baris log dengan trace dan permintaan pengguna, dan label seperti layanan, versi, dan lingkungan pada segala sesuatu. Tanpa konteks bersama, Anda memiliki tiga tumpukan data. Dengannya, Anda dapat berpindah dari permintaan lambat dalam metrik ke trace lalu ke baris log yang menjelaskannya.

**Instrumentasi.** Menambahkan kode yang menghasilkan telemetri. Wikipedia menjelaskan instrumentation in programming. Ia dapat otomatis, melalui pustaka dan agen, atau manual, di mana pengembang menambahkan sinyal yang penting bagi bisnis, seperti "pesanan dibuat". Instrumentasikan apa yang dilakukan pengguna, bukan hanya apa yang dilakukan mesin.

**OpenTelemetry dan standar terbuka.** OpenTelemetry adalah proyek sumber terbuka, di bawah Cloud Native Computing Foundation (yang dijelaskan Wikipedia), yang menyediakan format dan perangkat bersama untuk memancarkan metrik, log, dan trace, terlepas dari perangkat yang menyimpan dan menganalisisnya. Periksa situs proyek itu sendiri untuk keadaan terkininya. Tujuannya memungkinkan Anda mengumpulkan telemetri sekali dan mengirimkannya ke back end yang kompatibel, mengurangi lock-in. Wikipedia menjelaskan open standards dan vendor lock-in secara umum. Lihat Topik 3.14 — Manajemen Pemasok.

**Pemantauan versus observabilitas.** Pemantauan mengawasi kondisi yang diketahui dan memperingatkan; observabilitas mendukung penjelajahan kondisi yang tidak diketahui. Keduanya saling melengkapi: peringatan memberi tahu ada yang salah, penjelajahan memberi tahu mengapa. Lihat Topik 3.10 — Pemantauan dan Manajemen Peristiwa.

**Indikator tingkat layanan dari telemetri.** SLI, seperti persentase permintaan yang berhasil dalam suatu waktu, dihitung dari telemetri. Definisikan dari sudut pandang pengguna, dan ukur di tempat permintaan pengguna masuk ke sistem. Lihat Topik 2.6 — Site Reliability Engineering dan artikel Wikipedia tentang service-level objective.

**Telemetri pengguna dan bisnis.** Real user monitoring dan synthetic monitoring, yang dijelaskan di Wikipedia, menunjukkan pengalaman dari luar: waktu muat halaman, keberhasilan perjalanan, kesalahan di peramban dan aplikasi. Peristiwa bisnis, seperti pendaftaran dan pembayaran, mengaitkan kesehatan teknis dengan hasil. Lihat Topik 7.7 — Analitik pengalaman dan sentimen.

**Kardinalitas dan biaya.** Kardinalitas adalah jumlah nilai berbeda dari sebuah label. Metrik yang diberi label pengenal pengguna memiliki kardinalitas sangat besar dan dapat membanjiri penyimpanan metrik. Wikipedia menjelaskan cardinality in data modeling. Volume telemetri tumbuh bersama lalu lintas dan rincian, dan biaya penyimpanan dan pemrosesan tumbuh bersamanya. Putuskan apa yang disimpan dengan rincian penuh, apa yang disampel, dan apa yang diagregasi.

**Pengambilan sampel.** Menyimpan hanya sebagian trace atau log. Wikipedia menjelaskan sampling in statistics. Sampling memangkas biaya dan dapat menyembunyikan peristiwa langka; pertimbangkan menyimpan semua kesalahan dan permintaan lambat dan mengambil sampel yang normal.

**Retensi.** Berapa lama telemetri disimpan. Simpan data berinci tinggi sebentar, dan agregat lebih lama. Retensi memengaruhi biaya, penyelidikan, dan privasi. Lihat Topik 7.2 — Fondasi dan tata kelola data.

**Privasi dan keamanan dalam telemetri.** Log dan trace dapat memuat data pribadi, kredensial, dan rahasia, secara tidak sengaja atau sengaja. Wikipedia menjelaskan personal data. Bersihkan atau hindari kolom sensitif di sumbernya, kendalikan akses, dan tetapkan retensi. Telemetri juga sumber data keamanan. Lihat Topik 3.13 — Manajemen Keamanan Informasi.

**Observabilitas untuk AI.** Sistem AI membutuhkan telemetrinya sendiri: masukan, keluaran, latensi, biaya, laju kesalahan dan penolakan, umpan balik pengguna, dan sinyal drift. Catat cukup untuk menyelidiki jawaban yang salah, dengan kehati-hatian terhadap data yang dicatat. Lihat Topik 5.1 — AI dalam manajemen layanan.

**Platform dan kepemilikan.** Banyak organisasi menjalankan platform telemetri bersama, dengan standar penamaan, pelabelan, dan retensi, dan tim yang memiliki sinyal dari layanan mereka. Tim platform menyediakan perangkat dan panduan; tim layanan memiliki apa yang mereka pancarkan dan bagaimana mereka memakainya.

**Bagaimana lensa-lensa cocok.** Observabilitas adalah basis data bagi analitik dan AIOps. Praktik agile memperlakukan instrumentasi sebagai bagian dari definisi selesai. Otomatisasi memakai telemetri untuk menskalakan dan memperbaiki.

## Praktik terbaik

1. **Instrumentasikan saat membangun.** Perlakukan telemetri sebagai bagian fitur. Masukkan ke definisi selesai, dan tinjau bersama desain.
2. **Standarkan nama dan konteks.** Sepakati nama layanan, himpunan label, satuan, dan pengenal permintaan yang dibawa melalui setiap layanan. Dokumentasikan dan periksa dalam pipeline.
3. **Pancarkan log terstruktur.** Pakai kolom bernama yang konsisten, sertakan pengenal permintaan, dan jaga pesan singkat. Hindari mencatat rahasia dan data pribadi yang tidak perlu.
4. **Lacak jalur yang penting.** Instrumentasikan perjalanan pengguna utama dan panggilan antarlayanan, dan teruskan konteks melalui setiap lompatan, termasuk antrean dan panggilan eksternal.
5. **Definisikan indikator dari sudut pandang pengguna.** Hitung SLI dari telemetri di titik kontak pengguna, dan tambahkan peristiwa bisnis yang menunjukkan apakah pengguna mencapai apa yang mereka tuju.
6. **Pakai format terbuka.** Utamakan standar terbuka untuk memancarkan telemetri, agar Anda dapat mengganti back end tanpa instrumentasi ulang. Periksa dukungan di platform Anda.
7. **Kendalikan biaya dengan sengaja.** Tetapkan anggaran telemetri, hindari label berkardinalitas tinggi, sampel lalu lintas normal, simpan kesalahan dan permintaan lambat, dan bertingkatkan retensi.
8. **Lindungi telemetri.** Bersihkan data sensitif di sumbernya, batasi akses, dan terapkan aturan retensi. Pantau akses ke penyimpanan telemetri.
9. **Buat dapat dipakai.** Beri tim dasbor bersama, kueri tersimpan, dan pelatihan tentang cara menyelidiki. Tautkan peringatan ke telemetri dan runbook yang relevan.
10. **Tinjau telemetri setelah insiden.** Tanyakan apa yang tidak dapat Anda lihat selama insiden, dan tambahkan. Hapus sinyal yang tidak dipakai siapa pun.

## Pertanyaan untuk dibahas bersama tim Anda

**Pada insiden terakhir kita, apa yang ingin kita ketahui tetapi tidak dapat kita temukan?**
Tanyakan kepada para penanggap. Harapkan celah dalam trace, konteks, atau data tingkat pengguna. Lanjutkan dengan memilih satu celah dan menambahkan sinyalnya.

**Dapatkah kita mengikuti satu permintaan pengguna melalui semua layanan yang disentuhnya?**
Cobalah dengan permintaan nyata. Harapkan putus di antrean dan panggilan eksternal. Lanjutkan dengan meneruskan pengenal melalui putus yang pertama.

**Apa yang kita log yang seharusnya tidak, dan apa yang tidak kita log yang seharusnya?**
Lihat sampel log. Harapkan rahasia, data pribadi, dan derau. Lanjutkan dengan menyepakati aturan dan pembersihan.

**Berapa yang kita belanjakan untuk telemetri, dan apa yang kita dapat darinya?**
Minta angkanya dan sumber terbesar. Harapkan kejutan. Lanjutkan dengan memilih sinyal yang paling mahal dan paling jarang dipakai untuk dipangkas atau disampel.

**Seberapa terikat kita pada perangkat telemetri saat ini, dan apa yang dibutuhkan untuk menggantinya?**
Perkirakan. Harapkan "banyak". Lanjutkan dengan memilih satu layanan untuk diinstrumentasi dengan standar terbuka.

**Telemetri apa yang dihasilkan fitur AI kita, dan dapatkah kita menyelidiki jawaban yang salah darinya?**
Tanyakan. Harapkan catatan minimal. Lanjutkan dengan menyepakati apa yang dicatat, dengan batas privasi, dan mencoba sebuah penyelidikan.

## Dalam praktik: contoh manajemen layanan

API publik sebuah dinas cuaca nasional melayani beberapa juta permintaan sehari melalui delapan layanan internal. Pengguna mengeluh tentang respons lambat sesekali untuk lokasi tertentu. Pemantauan menunjukkan API dalam target latensinya rata-rata, dan setiap layanan tampak sehat secara terpisah. Insinyur piket menghabiskan dua hari mengejar masalah itu.

Tim platform telah beralih ke instrumentasi OpenTelemetry. Pada gateway API dan empat dari delapan layanan, permintaan membawa pengenal trace dan setiap layanan mencatat span dengan pewaktuan. Dengan trace, seorang insinyur menyaring permintaan lambat dalam seminggu terakhir dan melihat bahwa hampir semuanya melewati panggilan yang sama: pencarian di layanan data geografis untuk lokasi dengan karakter tak biasa dalam namanya, yang memakan waktu sepuluh kali lebih lama dari biasanya. Empat layanan lain belum diinstrumentasi, tetapi celahnya kini cukup sempit untuk diselidiki dengan tangan. Penyebabnya indeks basis data yang hilang untuk kueri itu, dan perbaikannya memakan satu jam.

Tim meninjau biaya. Pengeluaran telemetri tumbuh 40 persen dalam enam bulan, sebagian besar dari label pada sebuah metrik yang memuat lokasi yang diminta, yang bernilai ratusan ribu. Mereka membuang label itu, menyimpan lokasi dalam trace dan log, dan mengambil sampel 5 persen trace biasa sambil menyimpan semua kesalahan dan permintaan lambat. Pembersihan menghapus alamat IP dari log setelah 24 jam, setelah petugas privasi mencatat bahwa alamat itu dihitung sebagai data pribadi di beberapa yurisdiksi.

Tim juga menambahkan sinyal bisnis: hitungan panggilan API yang mengembalikan hasil kosong, yang di masa lalu dilaporkan pengguna sebagai "tidak ada data". Ia menunjukkan pola setiap kali model diperbarui.

Yang berubah: penyelidikan memakan jam, bukan hari, dan biaya turun sepertiga. Yang masih sulit: empat layanan masih tanpa trace, dan dua dimiliki lembaga lain; aturan sampling sudah menyembunyikan kesalahan langka yang muncul hanya pada lalu lintas tak tersampel dan ditemukan dalam log; dan insinyur butuh latihan untuk memakai perangkat trace dengan baik. Tim menjadwalkan sesi pelatihan dan menetapkan aturan menyimpan semua trace yang memiliki kesalahan apa pun.

## Empat perspektif

### Tim produk dan pengiriman

Bangun telemetri ke dalam fitur: nama konsisten, pengenal permintaan, log terstruktur, span pada jalur kunci, dan peristiwa bisnis. Hindari rahasia dalam sinyal, dan tinjau telemetri dalam desain.

### Tim layanan dan operasi

Pakai telemetri untuk menyelidiki, bukan hanya memperingatkan. Jaga dasbor, kueri, dan runbook tetap tertaut, dan beri tahu pengembang apa yang tidak dapat Anda lihat. Awasi biaya dan mutu telemetri.

### Kepemimpinan dan tata kelola

Danai platform, standar, dan pelatihan. Minta bukti bahwa telemetri memperpendek penyelidikan dan mencerminkan pengalaman pengguna. Tetapkan anggaran dan aturan privasi, dan utamakan standar terbuka.

### Pelanggan dan pengguna

Anda diuntungkan ketika penyedia dapat menelusuri masalah Anda ke penyebabnya dengan cepat. Berikan rincian saat melaporkan masalah, seperti waktu dan apa yang Anda lakukan, yang membantu menemukan permintaan Anda.

## Agile, AI, otomatisasi, dan analitik

### Agile

Tambahkan instrumentasi dalam langkah kecil bersama setiap fitur, dan haluskan setelah setiap insiden. Tinjau dasbor bersama tim dan hapus yang tidak dipakai siapa pun. Perhatian: menempelkan telemetri di akhir menghasilkan celah; masukkan ke definisi selesai.

### AI

AI dapat merangkum trace dan log, mengelompokkan anomali, dan menjawab pertanyaan tentang telemetri, dengan pemilik dan pemeriksaan. Fitur AI juga membutuhkan telemetrinya sendiri. Perhatian: analisis AI bergantung pada mutu dan konteks data; label yang buruk menghasilkan kesimpulan yang buruk. Lihat Topik 5.2 — AIOps.

### Otomatisasi

Otomatiskan instrumentasi bila pustaka memungkinkan, tegakkan standar penamaan dan label dalam pipeline, dan pakai telemetri untuk penskalaan dan perbaikan dengan batas. Perhatian: otomatisasi yang dipicu telemetri berderau dapat salah tembak; uji ambang dan tambahkan batas. Lihat Topik 6.6 — Otomatisasi runbook dan perbaikan otomatis.

### Analitik

Pakai telemetri untuk SLI, tren, kapasitas, dan pengalaman pengguna, dan untuk biaya telemetri itu sendiri. Perhatian: sampling dan agregasi mengubah apa yang dapat ditunjukkan data, dan label berkardinalitas tinggi dapat mendistorsi atau merusak sistem; catat batasnya dalam laporan. Lihat Topik 7.1 — Analitik untuk manajemen layanan dan buku *Service Management Metrics*.

## Mode kegagalan umum

- **Tiga tumpukan data.** Metrik, log, dan trace tidak dapat dikaitkan. Bagikan pengenal dan label.
- **Telemetri sebagai renungan akhir.** Celah muncul saat insiden. Instrumentasikan bersama fitur.
- **Label berkardinalitas tinggi.** Biaya dan kinerja menderita. Batasi label dan simpan rincian dalam trace dan log.
- **Rahasia dan data pribadi dalam log.** Data sensitif bocor. Bersihkan di sumber dan kendalikan akses.
- **Terkunci pada satu perangkat.** Berganti mahal. Pakai standar terbuka.
- **Segalanya disimpan selamanya.** Biaya naik. Bertingkatkan retensi dan sampel.
- **Dasbor yang tidak dipakai siapa pun.** Upaya terbuang. Pangkas dan kaitkan dengan keputusan.

## Model kematangan

| Dimensi | Memulai | Mengembangkan | Menstandardisasi | Mengelola | Mengorkestrasi |
|---|---|---|---|---|---|
| Cakupan | Metrik infrastruktur | Layanan kunci dengan metrik dan log | Metrik, log, dan trace dengan konteks bersama pada perjalanan kunci | Cakupan ditinjau setelah insiden | Cakupan konsisten lintas layanan dan pemasok |
| Standar | Tidak ada | Konvensi lokal | Penamaan, label, dan format terbuka disepakati | Standar diperiksa dalam pipeline | Standar dibagikan dan berkembang bersama platform |
| Biaya dan retensi | Tidak dikelola | Kesadaran | Anggaran, sampling, dan retensi bertingkat | Biaya per sinyal dan nilainya ditinjau | Biaya dan nilai dioptimalkan terus-menerus |
| Perlindungan | Tidak jelas | Kendali akses dasar | Aturan pembersihan, akses, dan retensi | Kepatuhan dipantau | Kendali terbangun dalam pengumpulan dan penyimpanan |

## Daftar periksa

- [ ] Telemetri adalah bagian dari definisi selesai kami.
- [ ] Kami memiliki nama, label, satuan, dan pengenal permintaan yang disepakati dan dibawa lintas layanan.
- [ ] Log terstruktur dan bebas dari rahasia serta data pribadi yang tidak perlu.
- [ ] Perjalanan pengguna kunci dilacak ujung ke ujung.
- [ ] SLI dihitung dari telemetri di titik kontak pengguna.
- [ ] Kami memakai format terbuka untuk memancarkan telemetri.
- [ ] Kami memiliki anggaran telemetri dengan sampling dan retensi bertingkat.
- [ ] Kami meninjau apa yang tidak dapat kami lihat setelah setiap insiden.

## Prompt AI

**Temukan celah telemetri dari sebuah insiden.**

```text
Here is the timeline of an incident and notes on what responders tried to find out: [paste].
List each question the responders could not answer, what signal would have answered it (metric, log, trace, user data), and a question for the owning team. Do not assume any signal exists.
List what you are unsure of.
```

**Tinjau sampel log untuk data sensitif.**

```text
Here is a sample of log lines from our service: [paste, already partially scrubbed].
List any content that looks like secrets, personal data, or internal details, quoting the exact text, and suggest categories of scrub rules. Do not guess whether any is real.
List what you are unsure of.
```

**Usulkan standar penamaan dan label.**

```text
Our services: [list]. Our environments: [list]. Our teams: [list]. What we want to be able to filter by: [list].
Draft a one-page standard for service names, label keys, allowed values, and request identifiers, with examples. Warn about labels that could have very many distinct values. Do not name a vendor.
List what you are unsure of.
```

## Skill AI

- [anomaly-analysis](../../../../skills/anomaly-analysis/SKILL.md): gunakan untuk menelaah pola tak biasa dalam telemetri.
- [data-pipeline](../../../../skills/data-pipeline/SKILL.md): gunakan untuk merancang bagaimana telemetri bergerak dan disimpan.
- [data-governance](../../../../skills/data-governance/SKILL.md): gunakan untuk menetapkan aturan privasi, retensi, dan akses.
- [key-risk-indicators](../../../../skills/key-risk-indicators/SKILL.md): gunakan untuk memilih sinyal peringatan dini.
- [performance-testing](../../../../skills/performance-testing/SKILL.md): gunakan untuk menguji latensi dan kapasitas dengan telemetri.

## Sumber utama

- OpenTelemetry (opentelemetry.io): standar terbuka dan perangkat untuk metrik, log, dan trace.
- Charity Majors, Liz Fong-Jones, dan George Miranda, *Observability Engineering* (2022): panduan praktisi tentang pendekatan ini.
- Betsy Beyer dan lainnya (ed.), *Site Reliability Engineering* (2016), bab tentang pemantauan, gratis di sre.google.
- Wikipedia, "Observability (software)" dan "Telemetry": ikhtisar gagasan ini.

## Referensi

1. Observability (software) — Wikipedia — https://en.wikipedia.org/wiki/Observability_(software)
2. Telemetry — Wikipedia — https://en.wikipedia.org/wiki/Telemetry
3. Logging (computing) — Wikipedia — https://en.wikipedia.org/wiki/Logging_(computing)
4. Tracing (software) — Wikipedia — https://en.wikipedia.org/wiki/Tracing_(software)
5. Time series database — Wikipedia — https://en.wikipedia.org/wiki/Time_series_database
6. Prometheus (software) — Wikipedia — https://en.wikipedia.org/wiki/Prometheus_(software)
7. Cloud Native Computing Foundation — Wikipedia — https://en.wikipedia.org/wiki/Cloud_Native_Computing_Foundation
8. Instrumentation (computer programming) — Wikipedia — https://en.wikipedia.org/wiki/Instrumentation_(computer_programming)
9. Cardinality (data modeling) — Wikipedia — https://en.wikipedia.org/wiki/Cardinality_(data_modeling)
10. Real user monitoring — Wikipedia — https://en.wikipedia.org/wiki/Real_user_monitoring
11. Synthetic monitoring — Wikipedia — https://en.wikipedia.org/wiki/Synthetic_monitoring
12. OpenTelemetry — Cloud Native Computing Foundation — https://opentelemetry.io
