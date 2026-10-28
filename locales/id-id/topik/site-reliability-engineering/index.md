# Site Reliability Engineering

**Site reliability engineering (SRE) memperlakukan operasi sebagai masalah rekayasa: ia menetapkan target keandalan yang terukur, membelanjakan error budget untuk perubahan, menghilangkan toil yang berulang dengan perangkat lunak, dan belajar dari kegagalan tanpa menyalahkan; ia mengungkapkan banyak praktik manajemen layanan dalam istilah rekayasa.**

## Mengapa ini penting

Setiap layanan memiliki ketegangan antara perubahan dan keandalan. Pelanggan menginginkan fitur baru dan menginginkan layanan berfungsi. Tim yang mendorong perubahan dengan cepat menyebabkan gangguan, dan tim yang menjaga stabilitas memperlambat segalanya. Tanpa cara untuk menimbang keduanya, perdebatan diselesaikan oleh siapa yang paling lantang, atau oleh insiden terakhir.

Site reliability engineering menawarkan cara untuk membuat pertukaran itu eksplisit. Ia bermula dari gagasan bahwa keandalan sempurna tidak mungkin dan tidak diinginkan: pengguna tidak dapat membedakan ketersediaan 99,999 persen dari 99,99 persen ketika perangkat dan jaringan mereka sendiri gagal lebih sering dari itu, dan setiap angka sembilan tambahan berbiaya jauh lebih besar. Maka tim menyepakati target yang sesuai dengan kebutuhan pengguna, mengukurnya, dan memakai ruang antara target dan kesempurnaan sebagai anggaran untuk risiko.

SRE dimulai di Google pada awal 2000-an dan dijelaskan dalam buku-buku yang diterbitkan perusahaan itu secara daring. Banyak organisasi lain telah mengadopsi sebagiannya. Bagi manajemen layanan, nilainya adalah memberi versi konkret bergaya rekayasa dari gagasan yang disebut ITIL manajemen tingkat layanan, manajemen ketersediaan, dan perbaikan berkelanjutan. Topik ini menjelaskan gagasan utamanya dan mengingatkan agar tidak menyalinnya tanpa konteks yang membuatnya berhasil.

## Konsep inti

**Apa itu SRE.** Wikipedia menggambarkan site reliability engineering sebagai kumpulan prinsip dan praktik yang menerapkan aspek rekayasa perangkat lunak pada infrastruktur dan operasi TI, untuk menciptakan sistem yang dapat diskalakan dan andal. Tim SRE biasanya mencakup orang dengan keterampilan perangkat lunak dan sistem yang mengotomatiskan pekerjaan operasi dan ikut dalam desain demi keandalan.

**Service level indicator (SLI).** Ukuran suatu aspek layanan sebagaimana dialami pengguna, seperti proporsi permintaan yang berhasil, atau proporsi yang selesai dalam 300 milidetik. Indikator yang baik mencerminkan apa yang dipedulikan pengguna, bukan apa yang mudah diukur.

**Service level objective (SLO).** Target untuk sebuah indikator selama suatu periode, misalnya "99,9 persen permintaan berhasil dalam 30 hari bergulir". Sasaran itu adalah tujuan internal yang disepakati antara orang yang menjalankan layanan dan orang yang bergantung padanya. Wikipedia menjelaskan service level objective sebagai bagian dari perjanjian tingkat layanan.

**Service level agreement (SLA).** Kontrak dengan konsekuensi, sering finansial, jika layanan turun di bawah tingkat yang disepakati. SLA biasanya menetapkan target yang lebih longgar daripada SLO internal, sehingga tim mendapat peringatan sebelum pelanggaran. Lihat Topik 3.7 — Manajemen Tingkat Layanan.

**Error budget.** Jumlah ketidakandalan yang diizinkan: jika sasarannya 99,9 persen, anggarannya adalah sisa 0,1 persen. Selama masih ada anggaran, tim boleh mengambil risiko, seperti merilis lebih cepat. Ketika anggaran habis, tim memperlambat perubahan dan berinvestasi pada keandalan. Anggaran membuat pertukaran antara keandalan dan perubahan menjadi keputusan bersama yang terukur, bukan perdebatan.

**Toil.** Pekerjaan yang manual, berulang, dapat diotomatiskan, bersifat taktis, dan tumbuh bersama layanan tanpa menambah nilai yang bertahan. Contohnya memulai ulang layanan secara manual, memproses jenis permintaan yang sama dengan tangan, dan menanggapi peringatan yang bising. Praktik SRE membatasi persentase waktu yang dihabiskan untuk toil, sering sekitar setengah, dan memakai sisanya untuk pekerjaan rekayasa yang menguranginya.

**Pemantauan dan peringatan.** Peringatan harus dapat ditindaklanjuti dan terkait dengan gejala yang dirasakan pengguna, dengan respons yang jelas. Peringatan bising yang tidak ditindaklanjuti siapa pun mengajari orang untuk mengabaikannya. Lihat Topik 3.10 — Pemantauan dan Manajemen Peristiwa dan Topik 7.4 — Observabilitas dan telemetri.

**Respons insiden dan tinjauan tanpa menyalahkan.** SRE menekankan peran yang jelas selama insiden, komunikasi, dan tinjauan terstruktur sesudahnya yang melihat sistem dan menghasilkan tindakan yang dilacak. Lihat Topik 3.2 — Manajemen Insiden dan Topik 3.3 — Manajemen Masalah.

**Kapasitas dan kinerja.** SRE mencakup memperkirakan permintaan, menguji batas, dan merencanakan kapasitas agar pertumbuhan tidak menyebabkan kegagalan. Lihat Topik 3.11 — Ketersediaan, Kapasitas, dan Kinerja.

**Rekayasa rilis dan perubahan.** Rilis yang andal dan dapat diulang, sering dengan peluncuran progresif dan rollback otomatis, adalah bagian dari pekerjaan SRE. Lihat Topik 2.2 — Pengiriman berkelanjutan.

**Melatih kegagalan.** Chaos engineering menyuntikkan kegagalan secara sengaja, terkendali, untuk menemukan kelemahan sebelum insiden nyata melakukannya. Game day melatih respons. Lihat Topik 3.12 — Manajemen Kontinuitas Layanan.

**SRE dan DevOps.** Keduanya berbagi banyak gagasan. Gambaran yang umum adalah bahwa SRE adalah salah satu cara menerapkan prinsip DevOps, dengan sekumpulan praktik spesifik seperti SLO, error budget, dan batas toil. Lihat Topik 2.5 — DevOps.

**SRE dan ITIL.** SLO dan error budget berada di samping manajemen tingkat layanan; tinjauan tanpa menyalahkan berada di samping manajemen masalah; pengurangan toil mendukung perbaikan berkelanjutan. SRE menjelaskan bagaimana tim teknis dapat melakukan pekerjaan semacam itu, sedangkan ITIL menjelaskan praktik yang dibutuhkan organisasi secara keseluruhan.

**Batas menyalin.** SRE dikembangkan di organisasi rekayasa yang sangat besar dengan skala dan staf tertentu. Tim kecil tidak bisa, dan tidak perlu, menyalin strukturnya. Mulailah dengan beberapa gagasan: pilih indikator yang berpusat pada pengguna, tetapkan sasaran, dan tuliskan apa yang akan Anda lakukan ketika anggaran habis.

**Bagaimana lensa-lensa cocok.** SRE sebagian besar adalah sisi rekayasa dari lensa agile untuk layanan yang hidup. AI dapat membantu triase peringatan dan ringkasan insiden, di bawah tinjauan manusia. Otomatisasi adalah alat utama melawan toil. Analitik menyediakan SLI dan data tentang toil dan insiden.

## Praktik terbaik

1. **Pilih indikator yang mencerminkan pengalaman pengguna.** Tanyakan apa yang akan dikatakan pengguna sebagai "berfungsi": halaman yang termuat, pembayaran yang selesai, berkas yang tiba. Ukur itu, bukan penggunaan CPU.
2. **Tetapkan sasaran bersama orang yang bergantung pada layanan.** Sepakati angka yang sesuai kebutuhan nyata, dituliskan dengan periode dan cara pengukurannya. Tinjau kembali ketika kebutuhan berubah.
3. **Gunakan error budget untuk membuat keputusan.** Tuliskan apa yang terjadi ketika anggaran hampir habis, seperti membekukan perubahan berisiko, dan siapa yang memutuskan. Sepakati ini sebelum pertama kali penting.
4. **Jaga sasaran lebih ketat daripada perjanjian.** Tetapkan target internal agar Anda menyadari masalah sebelum melanggar kontrak. Lihat Topik 3.7 — Manajemen Tingkat Layanan.
5. **Hitung dan batasi toil.** Lacak berapa banyak waktu yang dipakai untuk pekerjaan manual berulang, dan tetapkan batas. Gunakan sisanya untuk menghilangkan sumber toil terbesar.
6. **Beri peringatan atas gejala, dan jaga agar peringatan dapat ditindaklanjuti.** Setiap peringatan harus mengatakan apa yang salah bagi pengguna dan apa yang harus dilakukan. Hapus atau perbaiki peringatan yang tidak ditindaklanjuti siapa pun.
7. **Bagi piket secara adil dan berkelanjutan.** Batasi jumlah panggilan per shift, sediakan pelatihan dan jalur eskalasi yang terdokumentasi, dan tinjau bebannya secara berkala. Lihat Topik 8.3 — Perubahan Organisasi dan Adopsi.
8. **Tinjau insiden tanpa menyalahkan dan tuntaskan.** Tulis linimasa, faktor penyumbang, dan tindakan dengan pemilik dan tanggal. Periksa bahwa tindakan telah dikerjakan.
9. **Latih kegagalan dalam kondisi aman.** Jalankan game day dan eksperimen chaos kecil di staging atau dengan paparan terbatas, dengan tombol berhenti yang jelas.
10. **Mulai dari yang kecil.** Pilih satu layanan penting, definisikan satu atau dua SLI dan sebuah SLO, dan belajar dari hasilnya sebelum memperluas.

## Pertanyaan untuk dibahas bersama tim Anda

**Apa yang akan dikatakan pengguna kita tentang arti "berfungsi" untuk layanan ini, dan apakah kita mengukurnya?**
Ini titik awal untuk indikator. Tim sering mengukur kesehatan server sebagai gantinya. Tanyakan kapan terakhir kali pengguna tidak puas sementara dasbor kita hijau. Lanjutkan dengan memilih satu indikator yang menghadap pengguna untuk diukur.

**Seberapa andal layanan ini sebenarnya perlu, dan siapa yang memutuskan?**
Target sering ditetapkan karena kebiasaan, misalnya "lima sembilan". Tanyakan apa yang dilakukan pengguna ketika layanan mati dan berapa biaya satu jam henti. Harapkan perbedaan pendapat. Lanjutkan dengan menyusun sasaran dan memeriksanya bersama pelanggan.

**Apa yang akan kita lakukan ketika kita telah menghabiskan error budget, dan apakah kita benar-benar akan melakukannya?**
Kebijakan yang tidak pernah diterapkan mengajari orang untuk mengabaikannya. Tanyakan apa yang terjadi terakhir kali keandalan menurun dan perubahan terus berjalan. Lanjutkan dengan menyepakati respons yang kecil dan spesifik serta siapa yang memutuskan.

**Apa tiga sumber toil terbesar tim kita, dan apa yang dibutuhkan untuk menghilangkan masing-masing?**
Minta orang mendaftar tugas berulang dan memperkirakan waktunya. Harapkan memulai ulang manual, perbaikan data, dan permintaan akses. Lanjutkan dengan memilih satu butir dan memperkirakan pekerjaan untuk mengotomatiskannya, dibandingkan dengan waktu yang dihemat selama setahun.

**Berapa banyak panggilan yang diterima petugas piket kita bulan lalu, dan berapa yang memerlukan tindakan manusia?**
Pertanyaan ini menguji mutu peringatan dan beban kerja. Minta angkanya; jika tak seorang pun tahu, itu sebuah temuan. Lanjutkan dengan memilih peringatan paling bising untuk diperbaiki atau dihapus.

**Di mana AI dapat membantu dengan peringatan atau ringkasan insiden, dan bagaimana kita akan menyadari kesalahannya?**
AI dapat mengelompokkan peringatan, menyusun ringkasan, dan menyarankan langkah runbook. Ia juga dapat menyembunyikan sinyal nyata atau mengarang penyebab. Tanyakan siapa pemiliknya dan bagaimana keluarannya diperiksa. Lanjutkan dengan menguji alat ringkasan berdampingan dengan proses manusia dan membandingkannya.

## Dalam praktik: contoh manajemen layanan

Tim arsip digital sebuah perpustakaan nasional menjalankan layanan pencarian untuk para peneliti. Tim yang beranggotakan enam orang berjaga bergiliran. Panggilan tiba pada malam hari sekitar sekali seminggu, sebagian besar dari peringatan ruang disk pada server batch yang dibersihkan seseorang secara manual. Manajemen meminta "ketersediaan 99,99 persen" dalam rencana tahunan, padahal tak seorang pun telah mengukur kinerja saat ini.

Ketua tim mengusulkan eksperimen yang lebih kecil. Bersama dua peneliti, tim mendefinisikan satu indikator: proporsi permintaan pencarian yang mengembalikan hasil dalam dua detik. Mereka mengukurnya selama sebulan, dan mendapati 99,2 persen. Para peneliti mengatakan mereka menyadari kelambatan hanya ketika pencarian memakan waktu lebih dari lima detik, yang terjadi pada sekitar 0,3 persen permintaan, sebagian besar selama pembangunan ulang indeks semalam. Mereka menyepakati sasaran 99,5 persen dalam dua detik selama 30 hari, dan kebijakan error budget: jika lebih dari 75 persen anggaran terpakai dalam suatu periode, tim menjeda rilis yang tidak mendesak dan memperbaiki penyebab terbesar.

Tim juga menghitung toil. Membersihkan disk secara manual memakan sekitar dua jam sebulan dan membangunkan seseorang. Mereka mengotomatiskan pembersihan, menambahkan peringatan untuk pertumbuhan yang cepat alih-alih disk penuh, dan melatih game day untuk memulihkan indeks dari cadangan.

Yang berubah: panggilan malam berkurang, dan rilis dijeda satu kali pada kuartal pertama ketika anggaran menipis, dengan penyebab ditelusuri ke satu kueri yang lambat. Yang masih sulit: rencana tahunan masih berbunyi "99,99 persen", karena manajer senior belum setuju menggantinya; pembangunan ulang indeks bergantung pada layanan penyimpanan yang dijalankan departemen lain; dan tim tidak yakin apakah peneliti di zona waktu lain mengalami layanan dengan cara yang sama. Ketua membawa redaksi rencana itu ke tinjauan berikutnya.

## Empat perspektif

### Tim produk dan pengiriman

Bagikan sasaran dan anggaran dengan operasi. Sertakan pekerjaan keandalan dalam backlog, rilis secara progresif, dan amati dampak perubahan. Ketika anggaran habis, bergabunglah dalam upaya mengurangi penyebabnya.

### Tim layanan dan operasi

Definisikan indikator bersama pengguna, jaga peringatan tetap dapat ditindaklanjuti, dan gunakan waktu Anda untuk rekayasa yang menghilangkan toil. Bawa beban piket dan data insiden ke perencanaan. Tulis tinjauan yang mengarah pada tindakan yang dilacak.

### Kepemimpinan dan tata kelola

Sepakati sasaran yang mencerminkan kebutuhan nyata, dan dukung kebijakan anggaran ketika ia mengharuskan perlambatan perubahan. Danai waktu untuk pengurangan toil dan pekerjaan keandalan. Jangan meminta kesempurnaan.

### Pelanggan dan pengguna

Anda seharusnya ditanya apa arti "berfungsi" bagi Anda dan diberi tahu apa targetnya. Laporkan masalah dengan jelas, dan harapkan mendengar apa yang dilakukan. Jika target tampak keliru untuk kebutuhan Anda, katakan.

## Agile, AI, otomatisasi, dan analitik

### Agile

SRE menambahkan target keandalan yang terukur pada pengiriman dan perbaikan berkelanjutan. Libatkan pemangku kepentingan dalam menetapkan sasaran, dan tinjau secara berkala. Perhatian: error budget tidak menggantikan penilaian; beberapa insiden, seperti pelanggaran data, penting terlepas dari anggaran.

### AI

AI dapat mengelompokkan peringatan terkait, mengusulkan kemungkinan penyebab, dan menyusun ringkasan insiden. Setiap pemakaian memerlukan pemilik dan manusia yang bertanggung jawab atas keputusan, serta cara membandingkan saran AI dengan apa yang sebenarnya terjadi. Perhatian: AI yang menekan peringatan untuk mengurangi kebisingan dapat menyembunyikan kegagalan nyata; uji dengan insiden yang diketahui. Lihat Topik 5.2 — AIOps.

### Otomatisasi

Otomatiskan toil: memulai ulang, pembersihan, akses rutin, dan diagnosis berulang, dengan log, batas, dan cara untuk mematikannya. Perhatian: otomatisasi yang bertindak pada produksi dapat memperburuk insiden; tambahkan pembatas laju dan penghentian manual. Lihat Topik 6.6 — Otomatisasi runbook dan perbaikan otomatis.

### Analitik

Gunakan SLI, pencapaian SLO, laju penggunaan error budget, jam toil, dan mutu peringatan. Perhatian: sasaran yang dipilih karena mudah dicapai, atau indikator yang mengabaikan bagian pengalaman pengguna, memberi rasa tenang yang palsu; periksa terhadap keluhan pengguna. Lihat Topik 7.4 — Observabilitas dan telemetri dan buku *Service Management Metrics*.

## Mode kegagalan umum

- **Menyalin angka dari pihak lain.** "Lima sembilan" diadopsi tanpa mengetahui kebutuhannya. Putuskan dari kebutuhan pengguna dan biaya.
- **Indikator yang melewatkan pengguna.** Dasbor hijau dan pengguna mengeluh. Ukur apa yang dialami pengguna.
- **Kebijakan anggaran yang tidak diikuti siapa pun.** Perubahan berlanjut ketika anggaran habis. Sepakati responsnya di muka dan terapkan.
- **Kebisingan peringatan.** Petugas piket mengabaikan panggilan. Jadikan setiap peringatan dapat ditindaklanjuti.
- **Toil sebagai hal normal.** Tim tidak pernah mendapat waktu untuk mengotomatiskan. Hitung dan tetapkan batas.
- **SRE sebagai penamaan ulang operasi.** Praktiknya tidak diadopsi. Definisikan indikator, sasaran, dan anggaran.
- **Budaya pahlawan.** Satu orang menyelesaikan setiap insiden. Bagikan pengetahuan dan runbook.

## Model kematangan

| Dimensi | Memulai | Mengembangkan | Menstandardisasi | Mengelola | Mengorkestrasi |
|---|---|---|---|---|---|
| Indikator dan sasaran | Tidak ada ukuran yang menghadap pengguna | Hanya ukuran infrastruktur | SLI dan SLO berpusat pada pengguna untuk layanan kunci | Sasaran ditinjau bersama pengguna dan biaya | Sasaran dikoordinasikan lintas layanan yang saling bergantung |
| Error budget | Tidak ada | Dibahas | Kebijakan tertulis diterapkan | Hasil kebijakan ditinjau | Anggaran dibagikan lintas tim dan mitra |
| Toil | Tidak diukur | Diidentifikasi secara informal | Dihitung dan dibatasi | Dikurangi dengan otomatisasi yang dilacak | Dikurangi lintas layanan dengan perangkat bersama |
| Pembelajaran dari insiden | Menyalahkan | Sebagian tinjauan | Tinjauan tanpa menyalahkan dengan tindakan yang dilacak | Penyelesaian tindakan dan pengulangan diukur | Pembelajaran dibagikan di seluruh organisasi |

## Daftar periksa

- [ ] Kami memiliki setidaknya satu indikator yang menghadap pengguna untuk setiap layanan penting.
- [ ] Masing-masing memiliki sasaran yang disepakati dengan orang yang bergantung padanya.
- [ ] Kami menuliskan apa yang terjadi ketika error budget hampir habis.
- [ ] Sasaran internal kami lebih ketat daripada perjanjian kami.
- [ ] Kami melacak toil dan memiliki batas.
- [ ] Peringatan dapat ditindaklanjuti, dan yang bising diperbaiki atau dihapus.
- [ ] Beban piket diukur dan berkelanjutan.
- [ ] Tinjauan insiden bebas menyalahkan dan tindakan dilacak hingga selesai.

## Prompt AI

**Susun draf kandidat indikator.**

```text
Our service: [describe what it does and who uses it]. What users complain about: [list].
Propose up to five candidate service level indicators, each with what it measures, how it could be computed from [available data sources], and one way it could mislead. Do not choose an objective.
List what you are unsure of.
```

**Hitung laju penggunaan error budget.**

```text
Our objective: [for example, 99.5 percent of requests under two seconds over 30 days]. Here are daily counts of good and total events for the period: [paste data].
Calculate attainment so far, the error budget used as a percentage, and the daily burn rate, showing each calculation. Do not predict beyond the data.
List what you are unsure of.
```

**Peringkatkan kandidat toil.**

```text
Here is a list of repetitive tasks our team does, with how often and how long each takes: [paste list].
Compute hours per month for each, rank them, and for the top five list one question about whether automating it is safe. Do not recommend specific tools.
List what you are unsure of.
```

## Skill AI

- [service-level-agreement](../../../../skills/service-level-agreement/SKILL.md): gunakan untuk mengaitkan sasaran dengan perjanjian.
- [postmortem](../../../../skills/postmortem/SKILL.md): gunakan untuk menjalankan tinjauan tanpa menyalahkan dengan tindakan yang dilacak.
- [chaos-testing](../../../../skills/chaos-testing/SKILL.md): gunakan untuk merencanakan eksperimen kegagalan yang aman.
- [capacity-planning](../../../../skills/capacity-planning/SKILL.md): gunakan untuk memperkirakan permintaan dan batas.

## Sumber utama

- Betsy Beyer, Chris Jones, Jennifer Petoff, dan Niall Richard Murphy (ed.), *Site Reliability Engineering: How Google Runs Production Systems* (2016), tersedia gratis di sre.google: sumber utama untuk praktik-praktik ini.
- Betsy Beyer dan lainnya (ed.), *The Site Reliability Workbook* (2018): panduan praktis untuk adopsi.
- Wikipedia, "Site reliability engineering": ikhtisar netral.
- Wikipedia, "Service-level objective": latar belakang istilah-istilah.

## Referensi

1. Site reliability engineering — Wikipedia — https://en.wikipedia.org/wiki/Site_reliability_engineering
2. Service-level objective — Wikipedia — https://en.wikipedia.org/wiki/Service-level_objective
3. Service level indicator — Wikipedia — https://en.wikipedia.org/wiki/Service_level_indicator
4. Service-level agreement — Wikipedia — https://en.wikipedia.org/wiki/Service-level_agreement
5. Capacity planning — Wikipedia — https://en.wikipedia.org/wiki/Capacity_planning
6. Reliability engineering — Wikipedia — https://en.wikipedia.org/wiki/Reliability_engineering
7. Chaos engineering — Wikipedia — https://en.wikipedia.org/wiki/Chaos_engineering
8. Observability (software) — Wikipedia — https://en.wikipedia.org/wiki/Observability_(software)
9. Postmortem documentation — Wikipedia — https://en.wikipedia.org/wiki/Postmortem_documentation
10. Site Reliability Engineering: How Google Runs Production Systems — Google — https://sre.google/sre-book/table-of-contents/
