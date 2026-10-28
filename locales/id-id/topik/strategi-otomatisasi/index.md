# Strategi otomatisasi

**Strategi otomatisasi memutuskan apa yang diotomatiskan dan apa yang tidak, dalam urutan apa, dengan kontrol apa; ia mengikuti prinsip ITIL "optimalkan dan otomatiskan" dengan menyederhanakan lebih dulu, mengotomatiskan pekerjaan berulang yang stabil dengan log dan rollback, dan memperlakukan setiap otomatisasi sebagai produk yang membutuhkan pemilik dan pemeliharaan.**

## Mengapa ini penting

Otomatisasi adalah pengungkit tertua dalam operasi teknologi, dan yang paling sering ditarik tanpa rencana. Seseorang menulis skrip untuk menghemat satu jam, dan berhasil. Orang lain menulis yang lain. Dalam dua tahun tim memiliki ratusan skrip, pekerjaan terjadwal, dan aturan alur kerja, ditulis oleh orang yang sudah pergi, tidak dipahami siapa pun, dan menjadi sandaran segalanya. Kegagalan diam-diam pada salah satunya menjatuhkan layanan, dan tim mengetahui apa yang diotomatiskannya dengan menemukan apa yang berhenti.

Kesalahan sebaliknya juga umum. Tim menetapkan target "mengotomatiskan 80 persen tugas" dan mengotomatiskan hal yang terjadi dua kali setahun, atau yang bergantung pada penilaian, atau yang berubah setiap bulan. Usaha itu tidak pernah balik modal, dan otomatisasinya harus dipelihara selamanya. Sementara itu pekerjaan yang akan membalas otomatisasi sepuluh kali lipat tetap manual karena membosankan dan tak seorang pun menanyakannya.

Strategi menghindari keduanya. Ia memilih apa yang diotomatiskan berdasarkan bukti imbal hasil, mengurutkan pekerjaan agar penyederhanaan datang sebelum penulisan skrip, dan memperlakukan hasilnya sebagai sesuatu yang dimiliki dan dipelihara. Ia juga memperhitungkan biaya manusia yang nyata: ketika mesin menangani hal rutin, orang tersisa dengan pengecualian yang sulit dan lebih sedikit kesempatan melatih dasar-dasarnya. Topik ini memaparkan pilihan-pilihan itu. Ia adalah pintu masuk ke Bagian 6 dan berkaitan dengan otomatisasi alur kerja (Topik 6.2 — Otomatisasi alur kerja dan orkestrasi), infrastruktur sebagai kode (Topik 6.3 — Infrastruktur sebagai kode dan GitOps), pipeline (Topik 6.4 — Pipeline dan perubahan otomatis), swalayan (Topik 6.5 — Swalayan dan pemenuhan otomatis), dan otomatisasi runbook (Topik 6.6 — Otomatisasi runbook dan perbaikan otomatis). Kaitannya dengan AI ada di Topik 5.1 — AI dalam manajemen layanan.

## Konsep inti

**Otomatisasi.** Pemakaian teknologi untuk melakukan tugas dengan keterlibatan manusia yang berkurang. Wikipedia menjelaskan automation secara luas di seluruh industri. Dalam manajemen layanan, ia berkisar dari skrip terjadwal hingga alur kerja yang melintasi perangkat, hingga sistem yang memutuskan dan bertindak. Kata ini mencakup hal yang sangat berbeda, jadi sebutkan jenisnya dalam setiap diskusi.

**Optimalkan, lalu otomatiskan.** Prinsip panduan ITIL 4 "optimalkan dan otomatiskan" menyatakan agar memastikan pekerjaan seefektif mungkin, lalu memakai teknologi untuk mencapai lebih banyak (lihat Topik 1.5 — Prinsip Panduan ITIL). Urutannya disengaja. Mengotomatiskan proses yang membingungkan atau boros mengunci kebingungan dan pemborosannya di tempat dan mempersulit perubahan. Pemikiran lean sampai pada pandangan yang sama (lihat Topik 2.4 — Lean dan kaizen).

**Apa yang membuat tugas menjadi kandidat yang baik.** Cari pekerjaan yang sering, dipahami dengan baik, berbasis aturan, rawan kesalahan bila dikerjakan dengan tangan, dan stabil. Uraian Wikipedia tentang business process automation dan robotic process automation (RPA) menjelaskan sasaran umum, seperti memindahkan data antarsistem. Kandidat yang buruk adalah yang jarang, berubah, ambigu, atau bergantung pada penilaian atau empati.

**Imbal hasil otomatisasi.** Aturan kasar adalah membandingkan waktu yang dihemat per tahun, ditambah nilai kesalahan yang berkurang dan respons yang lebih cepat, dengan biaya membangun, menjalankan, dan memelihara otomatisasi. Wikipedia menjelaskan return on investment dan cost–benefit analysis. Sertakan pemeliharaan: otomatisasi rusak ketika sistem di sekitarnya berubah. Nyatakan asumsi dan rentang, karena angkanya perkiraan.

**Di mana mencari.** Mulailah dengan data. Process mining, yang dijelaskan di Wikipedia, memakai log peristiwa untuk menunjukkan bagaimana pekerjaan sebenarnya mengalir. Data tiket dan permintaan menunjukkan tugas mana yang berulang. Tanyakan kepada orang yang mengerjakan apa yang membosankan atau membuat frustrasi mereka. Prinsip Pareto menyarankan bahwa sebagian kecil jenis tugas menyumbang sebagian besar volume.

**Tingkat otomatisasi.** Dari manual, melalui berbantuan (perangkat menyiapkan, orang bertindak), hingga bersyarat (sistem bertindak dan orang menyetujui), hingga otonom dalam batas. Pilih tingkat per tugas menurut biaya kesalahan dan kemampuan membatalkannya. Lihat Topik 5.5 — AI agentik dan pengawasan manusia.

**Kontrol.** Setiap otomatisasi membutuhkan log tentang apa yang dilakukannya dan kapan, batas pada apa yang dapat disentuhnya, cara untuk menghentikannya, dan cara untuk membalik efeknya. Wikipedia menjelaskan fail-safe design: ketika sistem gagal, ia harus gagal dengan cara yang paling sedikit merugikan. Lihat Topik 3.4 — Pemampuan Perubahan.

**Otomatisasi sebagai produk.** Otomatisasi memiliki pengguna, pemilik, backlog, dokumentasi, pengujian, dan siklus hidup. Tanpa pemilik ia membusuk. Artikel Wikipedia tentang technical debt berlaku: skrip yang ditulis terburu-buru dan tidak pernah dipelihara menjadi kewajiban. Lihat Topik 2.8 — Kepemilikan Produk dan Layanan.

**Prosedur standar lebih dulu.** Prosedur tertulis dan teruji, seperti runbook atau standard operating procedure (dijelaskan di Wikipedia), adalah spesifikasi terbaik untuk otomatisasi. Jika Anda tidak dapat menuliskan apa yang dilakukan orang itu, Anda belum siap mengotomatiskannya. Lihat Topik 3.9 — Manajemen Pengetahuan.

**Perangkat dan platform.** Opsinya berkisar dari skrip shell dan penjadwal seperti cron, melalui platform alur kerja dan orkestrasi, hingga RPA dan platform low-code. Wikipedia menjelaskan masing-masing. Pilih perangkat paling sederhana yang dapat dipelihara, dan utamakan perangkat dengan kontrol versi, pengujian, dan audit bawaan. Lihat Topik 6.2 — Otomatisasi alur kerja dan orkestrasi.

**Keterampilan dan ironi otomatisasi.** Dalam makalah terkenal tahun 1983, peneliti Lisanne Bainbridge menjelaskan ironies of automation: ketika otomatisasi menangani sebagian besar tugas, orang tersisa dengan kasus yang sulit dan jarang, namun memiliki lebih sedikit latihan dan perasaan terhadap sistem. Wikipedia menjelaskan makalah itu. Pelajaran praktisnya adalah menjaga orang tetap berlatih, menunjukkan kepada mereka apa yang dilakukan otomatisasi, dan merancang serah terima agar seseorang dapat turun tangan.

**Bus factor dan pengetahuan.** Otomatisasi dapat memusatkan pengetahuan pada penulisnya. Wikipedia menjelaskan bus factor. Tinjau, dokumentasikan, dan bagikan, agar lebih dari satu orang dapat memelihara setiap otomatisasi.

**Keamanan.** Otomatisasi memegang kredensial dan memiliki kuasa. Otomatisasi yang terkompromi adalah sasaran yang menarik. Beri masing-masing identitas sendiri dengan izin minimum, simpan rahasia dengan aman, dan tinjau akses. Lihat Topik 3.13 — Manajemen Keamanan Informasi.

**Orang dan kepercayaan.** Staf mungkin takut otomatisasi mengancam pekerjaan mereka, atau bahwa mereka akan disalahkan atas kegagalannya. Libatkan mereka dalam memilih apa yang diotomatiskan, katakan bagaimana waktu yang dihemat akan dipakai, dan beri pengakuan atas pekerjaan membangun dan memelihara otomatisasi. Lihat Topik 8.3 — Perubahan Organisasi dan Adopsi.

**Bagaimana lensa-lensa cocok.** Otomatisasi adalah lensa ketiga. Praktik agile menyarankan mengotomatiskan dalam langkah kecil dan belajar dari masing-masing. AI menambah cara untuk memutuskan dan menyusun; otomatisasi bertindak. Analitik mengidentifikasi kandidat dan menunjukkan apakah otomatisasi memenuhi janjinya.

## Praktik terbaik

1. **Mulai dari data dan kesulitan.** Lihat volume tiket dan permintaan, process mining bila tersedia, dan apa yang dianggap membosankan staf. Pilih berdasarkan bukti, bukan apa yang sedang tren.
2. **Sederhanakan lebih dulu.** Buang langkah dan persetujuan yang tidak menambah nilai sebelum Anda membuatkan skripnya. Tanyakan seperti apa prosesnya jika Anda memulai dari awal.
3. **Tuliskan prosedurnya.** Dokumentasikan langkah, masukan, keluaran, dan pengecualian. Uji prosedur dengan meminta orang lain mengikutinya. Pakai sebagai spesifikasi.
4. **Perkirakan imbal hasil dengan jujur.** Bandingkan waktu yang dihemat dengan biaya pembangunan dan pemeliharaan, dengan rentang. Hitung pengurangan kesalahan dan kecepatan di tempat yang penting. Buang kandidat yang tidak balik modal.
5. **Otomatiskan dalam langkah kecil.** Mulailah dengan satu bagian, seperti mengumpulkan data untuk seseorang, lalu perluas. Rilis sering dan belajar.
6. **Pilih tingkat otonomi menurut risiko.** Biarkan tugas berisiko rendah yang dapat dibalik berjalan sendiri dengan log, dan pertahankan manusia dalam lingkaran untuk yang berkonsekuensi atau tidak dapat dibalik.
7. **Bangun log, batas, dan rollback.** Catat setiap tindakan, batasi seberapa banyak satu putaran dapat mengubah, dan tuliskan jalan kembali. Uji.
8. **Beri setiap otomatisasi pemilik dan rumah.** Simpan kode dalam kontrol versi dengan tinjauan dan pengujian, dokumentasikan, dan daftarkan dalam register dengan pemilik dan apa yang bergantung padanya.
9. **Jaga keterampilan tetap hidup.** Tunjukkan kepada orang apa yang dilakukan otomatisasi, latih cadangan manual untuk tugas penting, dan putar orang melalui kasus sulit.
10. **Tinjau dan pensiunkan.** Periksa secara berkala otomatisasi mana yang dipakai dan mana yang gagal, perbaiki atau buang, dan ukur manfaat terhadap perkiraan.

## Pertanyaan untuk dibahas bersama tim Anda

**Tugas apa yang paling sering kita ulang, dan mana yang paling ingin tidak pernah kita kerjakan lagi?**
Tanyakan kepada semua orang. Harapkan penyiapan akun, laporan, dan perbaikan data. Lanjutkan dengan memilih tiga dan memperkirakan jam per bulan.

**Untuk kandidat teratas kita, seperti apa prosesnya jika kita menyederhanakannya sebelum mengotomatiskan?**
Gambar. Harapkan langkah yang tidak dapat dibenarkan siapa pun. Lanjutkan dengan membuang satu sebelum menulis kode apa pun.

**Otomatisasi apa yang sudah kita andalkan, siapa pemilik masing-masing, dan apa yang terjadi jika satu gagal diam-diam?**
Buat daftar. Harapkan kejutan dan yatim. Lanjutkan dengan menunjuk pemilik dan menambahkan pemeriksaan kegagalan.

**Tugas kita yang mana yang harus tetap manual karena membutuhkan penilaian atau empati?**
Diskusikan. Harapkan kesepakatan pada urusan sensitif dan perbedaan pendapat di tepi. Lanjutkan dengan menulis batasnya dan siapa yang boleh mengubahnya.

**Bagaimana kita menjaga keterampilan mengerjakan tugas dengan tangan jika otomatisasi tidak tersedia?**
Tanyakan kapan terakhir kali seseorang mengerjakannya secara manual. Harapkan sudah lama. Lanjutkan dengan merencanakan latihan berkala.

**Bagaimana kita akan memakai waktu yang dibebaskan otomatisasi, dan sudahkah kita memberi tahu tim?**
Ini membangun kepercayaan. Harapkan ketidakpastian dan sedikit ketakutan. Lanjutkan dengan menyepakati ke mana waktu yang dihemat akan pergi dan mengatakannya secara terbuka.

## Dalam praktik: contoh manajemen layanan

Registri nasional kelahiran, kematian, dan pernikahan menjalankan tim TI kecil berisi sepuluh orang yang mendukung 600 staf. Seorang manajer mengusulkan "mengotomatiskan semua yang mungkin" dan memiliki daftar 120 tugas kandidat. Ketua layanan menduga sebagian besar tidak akan balik modal dan meminta peringkat.

Tim menghabiskan dua minggu mengumpulkan data. Dari enam bulan tiket, mereka mendapati 70 persen volume jatuh ke dalam delapan jenis tugas, dipimpin oleh akun karyawan baru, reset kata sandi, perubahan kotak surat bersama, dan pembuatan laporan bulanan. Mereka memperkirakan jam per bulan untuk masing-masing, dan menanyakan kepada orang yang terlibat apa yang salah. Akun karyawan baru, 40 jam sebulan, melibatkan sebelas langkah manual, tiga di antaranya duplikat dan dua adalah persetujuan yang tidak pernah ditolak. Mereka menyederhanakannya menjadi delapan langkah sebelum menulis apa pun.

Mereka mengotomatiskan secara bertahap. Pertama, skrip mengumpulkan informasi dan membuat akun, dengan teknisi meninjau hasilnya. Setelah dua bulan berjalan tanpa kesalahan, skrip berjalan tanpa pengawasan untuk peran standar, dengan log dan pemeriksaan harian, dan teknisi menangani peran non-standar. Reset kata sandi pindah ke jalur swalayan sistem identitas, yang disediakan vendor. Laporan bulanan, yang memakan 12 jam, bergantung pada data dari tiga sistem dalam format berbeda, dan tim memutuskan tidak mengotomatiskannya sampai sumber datanya diperbaiki.

Setiap otomatisasi didaftarkan, dengan pemilik, repositori, dan rollback. Satu teknisi ditugaskan berotasi menangani secara manual setiap kuartal, agar keterampilan terjaga. Manajer menyepakati bahwa waktu yang dihemat akan masuk ke backlog peningkatan versi yang tertunda, dan mengatakannya dalam rapat tim.

Yang berubah: sekitar 70 jam sebulan dibebaskan, dan karyawan baru memiliki akun yang berfungsi pada hari pertama. Yang masih sulit: skrip harus diperbarui setiap kali struktur direktori berubah, yang terjadi dua kali pada kuartal pertama; hanya dua teknisi yang memahaminya; dan manajer masih bertanya mengapa 110 kandidat lainnya tidak dikerjakan. Ketua menunjukkan datanya dan menyepakati untuk meninjau daftar setiap semester.

## Empat perspektif

### Tim produk dan pengiriman

Bangun untuk otomatisasi: ekspos antarmuka yang jelas, hindari langkah manual dalam rilis dan deployment, dan sediakan runbook yang dapat dibuatkan skripnya oleh orang lain. Miliki otomatisasi yang Anda buat.

### Tim layanan dan operasi

Kenali tugas berulang Anda, sederhanakan, dan otomatiskan yang stabil dengan log dan rollback. Jaga keterampilan manual tetap hidup, dan daftarkan apa yang Anda otomatiskan dengan pemilik.

### Kepemimpinan dan tata kelola

Minta bukti imbal hasil dan kontrol, bukan jumlah otomatisasi. Katakan bagaimana waktu yang dihemat akan dipakai. Danai pemeliharaan dan keterampilan serta pembangunan.

### Pelanggan dan pengguna

Anda diuntungkan oleh layanan yang lebih cepat dan konsisten, dan Anda tetap harus dapat menjangkau manusia untuk pengecualian. Beri tahu penyedia di mana otomatisasi gagal menangani kasus Anda.

## Agile, AI, otomatisasi, dan analitik

### Agile

Otomatiskan dalam inkremen kecil, bersama orang yang mengerjakan, dan tinjau hasilnya. Perlakukan backlog otomatisasi sebagai bagian dari backlog perbaikan. Perhatian: kecepatan menyampaikan otomatisasi dapat melampaui kemampuan memeliharanya; batasi pekerjaan yang sedang berjalan dan pensiunkan yang lama.

### AI

AI dapat membantu menemukan kandidat dengan mengelompokkan tugas, menyusun skrip dan prosedur, dan memutuskan dalam batas apa yang dilakukan. Setiap otomatisasi berbantuan AI membutuhkan pemilik, pengujian, dan kontrol yang sama. Perhatian: skrip hasil buatan dapat memuat kesalahan atau pola yang tidak aman; tinjau dan uji seperti kode lain. Lihat Topik 5.1 — AI dalam manajemen layanan.

### Otomatisasi

Topik ini adalah lensa itu sendiri: pilih, sederhanakan, bangun dengan kontrol, miliki, dan tinjau. Perhatian: otomatisasi memusatkan kuasa dan menyembunyikan kompleksitas; jaga log tetap terbaca dan beri orang sarana untuk memahami dan menghentikannya.

### Analitik

Pakai data tiket, process mining, data waktu dan kesalahan, dan hasil setelah otomatisasi. Perhatian: perkiraan jam yang dihemat sering digelembungkan, dan ukuran seperti "jumlah otomatisasi" menghargai volume; lacak waktu yang benar-benar dibebaskan, kesalahan, dan kegagalan. Lihat Topik 7.6 — Analitik proses dan aliran nilai dan buku *Service Management Metrics*.

## Mode kegagalan umum

- **Mengotomatiskan kekacauan.** Kebingungan terlestarikan. Sederhanakan lebih dulu.
- **Otomatisasi menurut target.** Tugas dipilih demi hitungan. Pilih menurut imbal hasil dan kebutuhan.
- **Skrip yatim.** Tak seorang pun memiliki atau memahaminya. Daftarkan, tetapkan pemilik, dan tinjau.
- **Tidak ada log atau rollback.** Kegagalan tidak dapat ditelusuri atau dibatalkan. Bangun keduanya.
- **Keterampilan memudar.** Tak seorang pun dapat mengerjakan tugas dengan tangan. Latih dan putar.
- **Biaya pemeliharaan tersembunyi.** Otomatisasi rusak setiap ada perubahan di dekatnya. Hitung pemeliharaan dalam imbal hasil.
- **Ketakutan dan kerahasiaan.** Staf menolak. Libatkan mereka dan katakan bagaimana hasil akan dipakai.

## Model kematangan

| Dimensi | Memulai | Mengembangkan | Menstandardisasi | Mengelola | Mengorkestrasi |
|---|---|---|---|---|---|
| Pemilihan | Skrip ad hoc | Kandidat didaftar | Kandidat dipilih menurut data dan imbal hasil | Hasil dibandingkan dengan perkiraan | Portofolio dipilih dan diseimbangkan ulang menurut nilai dan risiko |
| Kontrol | Tidak ada | Sebagian pencatatan | Log, batas, dan rollback menjadi standar | Kontrol diuji dan diaudit | Kontrol terbangun dalam platform bersama |
| Kepemilikan | Individu | Penulis diketahui | Register dengan pemilik, kontrol versi, dan tinjauan | Pemeliharaan dan kegagalan dilacak | Kepemilikan dikoordinasikan lintas tim |
| Orang | Ketakutan atau pengabaian | Kesadaran | Keterampilan dijaga hidup dan manfaat dibagikan | Keterampilan dan beban kerja ditinjau | Peran dan keterampilan direncanakan bersama otomatisasi di seluruh organisasi |

## Daftar periksa

- [ ] Kami memilih kandidat memakai data volume, kesalahan, dan usaha.
- [ ] Kami menyederhanakan setiap proses sebelum mengotomatiskannya.
- [ ] Setiap otomatisasi mengikuti prosedur tertulis yang teruji.
- [ ] Kami memperkirakan imbal hasil termasuk pemeliharaan.
- [ ] Setiap otomatisasi memiliki pemilik, kontrol versi, dan entri register.
- [ ] Log, batas, dan rollback terbangun dan teruji.
- [ ] Kami menjaga keterampilan manual tetap hidup untuk tugas penting.
- [ ] Kami memberi tahu tim bagaimana waktu yang dihemat akan dipakai.

## Prompt AI

**Peringkatkan kandidat dari data tiket.**

```text
Here is a summary of ticket categories with counts per month and average handling time: [paste].
Compute hours per month for each category, rank them, and for the top eight list questions to ask about whether the task is stable, rules-based, and safe to automate. Do not recommend automating any.
List what you are unsure of.
```

**Susun draf spesifikasi dari sebuah prosedur.**

```text
Here is the written procedure for a task: [paste].
List the inputs, steps, decision points, outputs, and exceptions, and mark each step as "clear", "needs judgment", or "unclear". List questions to answer before automation. Do not write code.
List what you are unsure of.
```

**Tinjau otomatisasi untuk kontrol.**

```text
Here is a description of an automation: what it does, what it can change, who owns it, how it runs: [paste].
List missing controls from this set: logging, limits, rollback, stop switch, owner, permissions, tests, and failure alerts, quoting the description for each you consider present. Do not assume controls that are not stated.
List what you are unsure of.
```

## Skill AI

- [workflow-analysis](../../../../skills/workflow-analysis/SKILL.md): gunakan untuk menganalisis langkah dan penantian sebelum mengotomatiskan.
- [roi-analysis](../../../../skills/roi-analysis/SKILL.md): gunakan untuk memperkirakan imbal hasil sebuah otomatisasi.
- [runbook](../../../../skills/runbook/SKILL.md): gunakan untuk menulis prosedur yang menjadi spesifikasi.
- [kaizen](../../../../skills/kaizen/SKILL.md): gunakan untuk menyederhanakan sebelum mengotomatiskan.
- [value-stream-map](../../../../skills/value-stream-map/SKILL.md): gunakan untuk menemukan langkah yang layak diotomatiskan.

## Sumber utama

- PeopleCert, halaman sertifikasi ITIL: uraian pemilik tentang panduan ITIL, termasuk optimalkan dan otomatiskan.
- Lisanne Bainbridge, "Ironies of Automation" (*Automatica*, 1983): makalah klasik tentang otomatisasi dan keterampilan manusia.
- Betsy Beyer dan lainnya (ed.), *Site Reliability Engineering* (2016), bab tentang menghilangkan toil, gratis di sre.google.
- Wikipedia, "Automation" dan "Business process automation": ikhtisar gagasan ini.

## Referensi

1. Automation — Wikipedia — https://en.wikipedia.org/wiki/Automation
2. Business process automation — Wikipedia — https://en.wikipedia.org/wiki/Business_process_automation
3. Robotic process automation — Wikipedia — https://en.wikipedia.org/wiki/Robotic_process_automation
4. Ironies of Automation — Wikipedia — https://en.wikipedia.org/wiki/Ironies_of_Automation
5. Process mining — Wikipedia — https://en.wikipedia.org/wiki/Process_mining
6. Return on investment — Wikipedia — https://en.wikipedia.org/wiki/Return_on_investment
7. Cost–benefit analysis — Wikipedia — https://en.wikipedia.org/wiki/Cost%E2%80%93benefit_analysis
8. Technical debt — Wikipedia — https://en.wikipedia.org/wiki/Technical_debt
9. Standard operating procedure — Wikipedia — https://en.wikipedia.org/wiki/Standard_operating_procedure
10. Fail-safe — Wikipedia — https://en.wikipedia.org/wiki/Fail-safe
11. Bus factor — Wikipedia — https://en.wikipedia.org/wiki/Bus_factor
12. Site Reliability Engineering: How Google Runs Production Systems — Google — https://sre.google/sre-book/table-of-contents/
