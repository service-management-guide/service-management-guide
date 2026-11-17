# Pengukuran dan pelaporan

**Pengukuran yang baik dimulai dari tujuan, memakai sedikit ukuran yang didefinisikan secara tepat, memasangkan setiap ukuran dengan pagar pengaman terhadap manipulasi, menunjukkan distribusi dan tren, dan melapor kepada orang yang dapat bertindak; definisinya ada di buku pendamping Service Management Metrics, dan topik ini adalah cara memakainya dengan baik.**

## Mengapa ini penting

Semua orang di bidang manajemen layanan pernah melihat laporan yang akurat dan tak berguna. Halaman penuh angka, ringkasan lampu lalu lintas, dan catatan bahwa semua target tercapai. Lalu keluhan pelanggan tentang seminggu layanan buruk, dan seorang manajer bertanya bagaimana itu mungkin. Laporan mengukur apa yang mudah dihitung, dan target akhirnya mewakili hasil.

Kegagalan sebaliknya sama nyatanya. Tim tidak memercayai angka, karena angka dipakai menilai orang secara tidak adil, dan menolak mengukur sama sekali. Maka perbaikan bergantung pada pendapat, dan suara paling keras yang memutuskan.

Jalan keluarnya adalah memperlakukan pengukuran sebagai keahlian dengan tujuan: mengetahui apakah layanan menghasilkan hasil dan di mana memperbaiki. Ukuran dipilih dari tujuan, didefinisikan agar dua orang menghitungnya sama, dibaca sebagai distribusi dan tren, dan diperiksa terhadap cara-cara ia dapat menyesatkan. Topik ini menjelaskan keahlian itu secara umum. Ia tidak mendefinisikan metrik individual: buku pendamping *Service Management Metrics* memberikan, untuk masing-masing, definisi, vektor manipulasi, dan pagar pengaman, dan di sanalah tempat mencari angkanya. Topik ini terhubung dengan analitik (Topik 7.1 — Analitik untuk manajemen layanan), fondasi data (Topik 7.2 — Fondasi dan tata kelola data), tingkat layanan (Topik 3.7 — Manajemen Tingkat Layanan), dan peningkatan berkelanjutan (Topik 3.15 — Peningkatan Berkelanjutan).

## Konsep inti

**Ukuran, metrik, indikator.** Ukuran (measure) adalah kuantitas yang dapat Anda amati, seperti jumlah insiden. Metrik adalah ukuran yang didefinisikan untuk suatu tujuan, dengan perhitungan, sumber, dan periode. Indikator memberi sinyal keadaan sesuatu yang sulit diamati langsung. Wikipedia menjelaskan performance indicator secara umum, sering disingkat KPI untuk key performance indicator. Istilah dipakai longgar; definisikan apa yang Anda maksud.

**Tujuan lebih dulu.** Ukuran hanya berguna dalam kaitan dengan tujuan. Tuliskan tujuan dalam kata-kata sederhana ("pelanggan bisa mendapat bantuan dengan cepat ketika ada yang rusak"), lalu tanyakan bukti apa yang akan menunjukkan apakah tujuan tercapai. Wikipedia menjelaskan pendekatan seperti balanced scorecard, yang mengaitkan ukuran dengan tujuan dari beberapa perspektif, dan objectives and key results (OKR), yang memasangkan tujuan dengan hasil terukur. Mana pun yang Anda pakai, perlakukan sebagai alat bantu percakapan.

**Hasil, keluaran, dan aktivitas.** Hasil (outcome) adalah perubahan bagi pelanggan dan organisasi; keluaran (output) adalah apa yang dihasilkan layanan; aktivitas adalah upaya. Mengukur hanya aktivitas, seperti tiket yang ditutup, sedikit bicara tentang apakah ada yang menjadi lebih baik. Sertakan ukuran hasil dan pengalaman. Lihat Topik 1.1 — Manajemen layanan.

**Indikator utama dan indikator tertinggal.** Indikator tertinggal melaporkan hasil setelah kejadian, seperti kepuasan pelanggan. Indikator utama memberi sinyal apa yang kemungkinan datang, seperti usia backlog yang tumbuh. Wikipedia menjelaskan keduanya di bawah economic indicator. Himpunan yang seimbang mencakup keduanya.

**Definisi yang tepat.** Dua orang harus bisa menghitung ukuran dan mendapat jawaban yang sama. Definisikan populasi, peristiwa awal dan akhir, apa yang dikecualikan, periode, dan sumber data. "Waktu penyelesaian" membutuhkan definisi kapan jam mulai, berhenti, dan dijeda. Catat perubahan definisi dengan tanggal. Lihat Topik 7.2 — Fondasi dan tata kelola data.

**Rata-rata, median, dan persentil.** Rata-rata mudah terdistorsi oleh beberapa nilai ekstrem. Median dan persentil, yang dijelaskan di Wikipedia, menunjukkan kasus tipikal dan ekor yang dialami pengguna yang kurang beruntung. Untuk waktu respons dan penyelesaian, laporkan persentil, seperti median dan persentil ke-90.

**Distribusi dan tren.** Satu angka untuk sebulan menyembunyikan variasi. Tunjukkan distribusi, tren selama beberapa periode, dan rentang variasi biasa. Wikipedia menjelaskan control chart dan statistical process control, yang memisahkan variasi normal dari sinyal bahwa sesuatu berubah. Jangan bereaksi pada setiap goyangan.

**Target dan ambang.** Target adalah tingkat yang dituju; ambang adalah tingkat yang memicu tindakan. Target harus berasal dari kebutuhan dan bukti tentang apa yang dapat dicapai. Target tanpa bukti mengundang manipulasi atau keputusasaan.

**Hukum Goodhart dan manipulasi.** Ketika suatu ukuran menjadi target, ia berhenti menjadi ukuran yang baik. Wikipedia menjelaskan hukum Goodhart, dan pengamatan terkait oleh ilmuwan sosial Donald Campbell. Orang menyesuaikan diri dengan insentif. Tiket ditutup lebih awal, jam dijeda, kategori diubah, kasus sulit dihindari. Artikel Wikipedia tentang perverse incentive memberi contoh efek tak terduga, kadang disebut efek kobra. Setiap metrik punya vektor manipulasi, dan buku *Service Management Metrics* menamainya beserta pagar pengaman.

**Pagar pengaman.** Ukuran kedua atau pemeriksaan yang menjaga dari manipulasi ukuran pertama. Misalnya, pasangkan kecepatan dengan mutu (waktu penyelesaian dengan tingkat pembukaan kembali), volume dengan hasil (tiket ditutup dengan kepuasan pengguna), dan ukuran otomatis dengan tinjauan sampel kasus nyata. Tanpa pagar pengaman, ukuran akan menyimpang.

**Mengukur orang.** Ukuran kinerja individu, seperti tiket per agen, sangat rawan manipulasi dan ketidakadilan, karena pekerjaan berbeda antarorang dan sistem membentuk apa yang dapat dicapai siapa pun. Panduan ini dan buku pendampingnya menyarankan agar tidak meranking individu. Pakai ukuran tingkat tim untuk memahami sistem.

**Benchmarking.** Membandingkan dengan pihak lain, seperti dijelaskan Wikipedia, dapat membantu menetapkan ekspektasi. Perbandingan sah hanya bila definisi, campuran pekerjaan, dan konteks cocok. Bersikaplah skeptis terhadap perbandingan yang mengabaikan perbedaan.

**Pelaporan.** Laporan ada untuk menginformasikan keputusan. Kenali audiens dan keputusannya. Laporan yang baik menyatakan tujuan, ukuran, tren, penjelasan, dan tindakan. Pakai desain visual yang memperjelas pesan. Wikipedia menjelaskan data and information visualization dan dashboard. Lebih sedikit tampilan yang lebih jelas melayani lebih baik daripada banyak.

**Ukuran pengiriman.** Program riset tentang pengiriman perangkat lunak, seperti program DORA, memakai empat ukuran yang sering disebut empat metrik kunci: frekuensi deployment, lead time untuk perubahan, tingkat kegagalan perubahan, dan waktu pemulihan layanan. Keempatnya pertanyaan berguna tentang sistem pengiriman. Bukan skor untuk meranking tim. Lihat Topik 2.2 — Pengiriman berkelanjutan.

**Ukuran pengalaman.** Survei, skor kepuasan, dan net promoter score, yang dijelaskan di Wikipedia, menanyakan pengguna apa yang mereka pikirkan. Ukuran ini punya batasnya sendiri, seperti siapa yang menjawab dan bagaimana pertanyaan dirumuskan. Lihat Topik 7.7 — Analitik pengalaman dan sentimen.

**Transparansi dan kepercayaan.** Orang memercayai ukuran yang mereka pahami, ikut definisikan, dan lihat dipakai secara adil. Bagikan definisi, data, dan bagaimana hasil dipakai. Katakan dengan jelas bahwa ukuran untuk belajar.

**Bagaimana lensa-lensa cocok.** Pengukuran adalah tempat analitik bertemu tata kelola dan perbaikan. Praktik agile memakai beberapa ukuran untuk memeriksa apakah perubahan membantu. AI dapat membantu perhitungan dan penyusunan, di bawah tinjauan, dan sendiri membutuhkan ukuran mutu. Otomatisasi menghasilkan pengukuran dari perangkat.

## Praktik terbaik

1. **Mulai dari tujuan.** Tuliskan untuk apa layanan ada dan seperti apa keberhasilan, lalu pilih ukuran yang menunjukkan apakah Anda menuju ke sana. Buang ukuran yang tidak melayani tujuan.
2. **Jaga himpunan tetap kecil.** Pilih segelintir ukuran per layanan, mencakup hasil, aliran, mutu, dan pengalaman. Tinjau himpunan setidaknya setahun sekali.
3. **Definisikan setiap metrik dengan tepat.** Tuliskan definisi, sumber, perhitungan, periode, pengecualian, pemilik, dan batas yang diketahui. Pakai definisi dalam buku *Service Management Metrics* sebagai titik awal.
4. **Namai vektor manipulasi dan tambahkan pagar pengaman.** Untuk masing-masing, tanyakan bagaimana ia bisa diperbaiki tanpa memperbaiki layanan, dan pasangkan dengan pemeriksaan. Ambil sampel kasus nyata secara berkala.
5. **Tunjukkan distribusi dan tren.** Laporkan median dan persentil, rentang variasi normal, dan beberapa periode. Jelaskan perubahan, dan bedakan sinyal dari derau.
6. **Tetapkan target dari bukti.** Dasarkan pada riwayat, kebutuhan, dan kapasitas, dan sepakati dengan mereka yang harus memenuhinya. Tinjau ketika keadaan berubah.
7. **Ukur sistem, bukan individu.** Pakai ukuran tingkat tim dan layanan untuk memahami sistem. Jangan meranking orang dengannya.
8. **Lapor untuk memutuskan.** Untuk setiap laporan, namai audiens dan keputusannya. Nyatakan temuan, keyakinan, dan tindakan yang diusulkan. Pensiunkan laporan yang tidak dipakai siapa pun.
9. **Terbukalah.** Publikasikan definisi dan hasil kepada yang diukur, dan undang tantangan. Beri tahu orang bagaimana data akan dan tidak akan dipakai.
10. **Tinjau dan pensiunkan.** Periksa apakah setiap ukuran mengubah keputusan. Hapus yang tidak, dan perbaiki yang dimanipulasi.

## Pertanyaan untuk dibahas bersama tim Anda

**Ukuran kita yang mana yang bisa dipenuhi tanpa membuat pelanggan mana pun menjadi lebih baik?**
Ini menemukan vektor manipulasi. Harapkan beberapa contoh mudah. Lanjutkan dengan memilih satu dan menyepakati pagar pengaman.

**Tujuan apa yang dilayani setiap ukuran rutin kita, dan siapa yang memutuskan sesuatu karenanya?**
Telusuri laporan. Harapkan beberapa ukuran tanpa tujuan dan tanpa keputusan. Lanjutkan dengan membuang satu.

**Bagaimana kita mendefinisikan "terselesaikan" dan "waktu respons", dan apakah ada yang mengubah definisinya?**
Minta definisi tertulis. Harapkan ketidaksepakatan. Lanjutkan dengan menulis satu definisi dan mencatat riwayatnya.

**Apa yang dikatakan persentil kita yang disembunyikan rata-rata kita?**
Hitung keduanya untuk satu ukuran. Harapkan ekor panjang. Lanjutkan dengan menyepakati pelaporan persentil untuknya.

**Bagaimana ukuran dipakai untuk menilai individu atau tim di sini, dan apa dampaknya pada perilaku?**
Diskusikan secara terbuka. Harapkan kisah manipulasi dan ketakutan. Lanjutkan dengan menyepakati bahwa ukuran tertentu akan dipakai untuk belajar, dan menyatakannya secara tertulis.

**Bagaimana AI dapat membantu kita menghitung atau menjelaskan ukuran, dan bagaimana kita memeriksanya?**
AI dapat menghitung dan menyusun komentar. Ia juga dapat menjelaskan tren dengan sebab karangan. Tanyakan siapa yang memeriksa. Lanjutkan dengan mengulang perhitungan dengan tangan dan membandingkan.

## Dalam praktik: contoh manajemen layanan

Departemen TI sebuah layanan ambulans regional melapor bulanan kepada dewannya tentang 24 ukuran. Dewan bertanya mengapa laporan hijau sementara dispatcher mengeluh bahwa sistem dispatch berbantuan komputer lambat saat awal shift. Kepala TI memutuskan membangun ulang himpunan ukuran bersama orang yang memakainya.

Ia mulai dengan tujuan, disepakati dengan pemimpin dispatch: dispatcher dapat membuka dan memperbarui panggilan tanpa penundaan; kerusakan diperbaiki dengan cepat; dan perubahan tidak mengganggu operasi. Ia memilih delapan ukuran, masing-masing didefinisikan dalam entri satu halaman berdasarkan buku pendamping *Service Management Metrics*. Untuk "waktu transaksi dispatcher", definisi menyatakan apa yang diukur waktunya, dari mana, dan bahwa persentil ke-95 dilaporkan menurut jam dalam sehari. Ukuran ketersediaan lama, diukur dengan ping dari pusat data pada interval lima menit, dipertahankan tetapi tidak ditampilkan sendirian kepada dewan.

Untuk setiap ukuran tim menulis vektor manipulasi dan pagar pengaman. "Insiden terselesaikan dalam target" dipasangkan dengan tingkat pembukaan kembali dan sampel bulanan 30 insiden yang dibaca analis senior; tim menyadari bahwa menutup insiden dengan cepat lalu membukanya kembali kemudian akan memperindah ukuran pertama. Laporan dewan menunjukkan median dan persentil ke-95 selama 12 bulan dengan rentang variasi normal, dan catatan singkat tentang apa yang berubah dan apa yang akan dilakukan tim.

Laporan pertama menunjukkan bahwa persentil ke-95 waktu transaksi berlipat dua antara 06.30 dan 07.30, dan dewan mendanai kajian kapasitas. Pertanyaan kepuasan, diajukan bulanan kepada 40 dispatcher, menambah pandangan pengalaman. Kepala TI juga menyatakan secara tertulis bahwa tidak ada ukuran yang akan dipakai untuk meranking analis individu.

Yang berubah: dewan membahas masalah nyata, dan tim berhenti berdebat tentang definisi. Yang masih sulit: ukuran transaksi baru bergantung pada kolom log yang dicatat berbeda oleh dua vendor, sehingga datanya perkiraan; tingkat respons survei rendah pada shift malam; dan seorang manajer senior masih menginginkan satu skor untuk dewan. Kepala TI mempertahankan delapan ukuran dan menunjukkan kepada manajer bagaimana satu skor akan menyembunyikan masalah pagi hari.

## Empat perspektif

### Tim produk dan pengiriman

Bangun pengukuran ke dalam produk: peristiwa, pewaktuan, dan indikator yang terlihat pengguna. Pakai ukuran pengiriman untuk menemukan kendala, bukan membandingkan tim. Bagikan definisi dengan operasi.

### Tim layanan dan operasi

Ketahui apa yang diukur dan bagaimana, dan periksa terhadap rasa Anda sendiri tentang layanan. Laporkan manipulasi dan definisi buruk dengan jujur. Pakai ukuran untuk melihat di mana memperbaiki.

### Kepemimpinan dan tata kelola

Minta tujuan, definisi, distribusi, dan pagar pengaman, bukan ringkasan hijau. Jangan memakai ukuran untuk meranking orang. Danai pekerjaan data dan siap mendengar kabar buruk.

### Pelanggan dan pengguna

Anda seharusnya ditanya apa yang penting, melihat ukuran yang mencerminkan pengalaman Anda, dan mendengar apa yang berubah karenanya. Beri tahu penyedia ketika angka tidak cocok dengan apa yang Anda lihat.

## Agile, AI, otomatisasi, dan analitik

### Agile

Pakai beberapa ukuran untuk memeriksa setiap perubahan, dengan ekspektasi dan tanggal, dan tinjau bersama pemangku kepentingan. Pensiunkan ukuran yang tidak lagi menginformasikan. Perhatian: jangan biarkan ukuran menjadi target bagi tim; mereka akan mengoptimalkan angkanya.

### AI

AI dapat membantu menghitung, membuat grafik, dan menyusun komentar, dan sistem AI sendiri membutuhkan ukuran akurasi, kesalahan, dan biaya. Perhatian: penjelasan AI mengapa angka berubah mungkin karangan; wajibkan ia menunjuk ke data dan periksa. Lihat Topik 5.1 — AI dalam manajemen layanan.

### Otomatisasi

Otomatiskan pengumpulan dan perhitungan, dengan definisi terdokumentasi dan changelog. Perhatian: laporan otomatis bisa berjalan bertahun-tahun setelah definisinya diam-diam rusak; validasi terhadap data mentah secara berkala. Lihat Topik 6.1 — Strategi otomatisasi.

### Analitik

Pakai distribusi, metode tren dan variasi, dan pengambilan sampel kasus nyata untuk memeriksa metrik. Perhatian: ukuran apa pun dapat dimanipulasi begitu ia penting; pasangkan ukuran dan teruslah membaca kasus. Lihat buku *Service Management Metrics* dan Topik 7.1 — Analitik untuk manajemen layanan.

## Mode kegagalan umum

- **Laporan hijau, pelanggan tidak puas.** Ukuran melewatkan hasil. Tambahkan ukuran hasil dan pengalaman serta pengambilan sampel.
- **Terlalu banyak ukuran.** Tak seorang pun dapat memakainya. Jaga sedikit dan terkait tujuan.
- **Definisi kabur.** Angka tidak dapat dibandingkan. Definisikan dengan tepat dan catat perubahan.
- **Rata-rata.** Ekor tersembunyi. Laporkan persentil dan distribusi.
- **Target tanpa bukti.** Manipulasi atau keputusasaan menyusul. Dasarkan target pada data dan sepakati.
- **Meranking individu.** Kepercayaan runtuh dan angka dimanipulasi. Ukur sistem dan tim.
- **Tanpa pagar pengaman.** Ukuran menyimpang. Pasangkan masing-masing dengan pemeriksaan dan ambil sampel kasus.

## Model kematangan

| Dimensi | Memulai | Mengembangkan | Menstandardisasi | Mengelola | Mengorkestrasi |
|---|---|---|---|---|---|
| Tujuan dan pemilihan | Apa pun yang mudah dihitung | Beberapa ukuran terkait tujuan | Himpunan kecil terkait tujuan untuk setiap layanan | Himpunan ditinjau terhadap keputusan | Ukuran diselaraskan lintas layanan dan mitra |
| Definisi dan mutu | Informal | Beberapa definisi | Definisi tepat dengan pemilik dan riwayat perubahan | Definisi divalidasi terhadap data mentah | Definisi dibagikan dan diotomatisasi lintas tim |
| Pertahanan terhadap manipulasi | Tidak ada | Kesadaran | Vektor manipulasi dan pagar pengaman untuk setiap metrik | Sampel kasus nyata ditinjau | Pertahanan terbangun dalam pelaporan dan budaya |
| Pelaporan dan pemakaian | Laporan statis | Dasbor | Laporan untuk keputusan bernama dengan tren dan distribusi | Pemakaian dan dampak dilacak | Pelaporan terintegrasi dengan perencanaan dan perbaikan |

## Daftar periksa

- [ ] Setiap ukuran melayani tujuan tertulis.
- [ ] Setiap metrik memiliki definisi tepat, pemilik, sumber, dan riwayat perubahan.
- [ ] Kami melaporkan median dan persentil dengan tren.
- [ ] Setiap metrik memiliki vektor manipulasi bernama dan pagar pengaman.
- [ ] Kami menyertakan ukuran hasil dan pengalaman.
- [ ] Kami tidak meranking individu berdasarkan ukuran.
- [ ] Setiap laporan menyebut audiensnya dan keputusan yang didukungnya.
- [ ] Kami meninjau dan mempensiunkan ukuran yang tidak lagi mengubah keputusan.

## Prompt AI

**Tulis definisi metrik untuk ditinjau.**

```text
Metric name: [name]. What we want to know: [goal in plain words]. Data we have: [fields and source].
Draft a definition with: purpose, population, start and end events, exclusions, calculation, period, source, owner (leave blank), and known limits. Then list two ways the metric could be gamed and one guardrail for each. Mark any assumption.
List what you are unsure of.
```

**Periksa laporan terhadap masalah umum.**

```text
Here is a monthly report with its measures and a short commentary: [paste].
List measures without a stated goal, uses of averages where percentiles would help, claims of cause not supported by the data, comparisons that may not be like for like, and anything that could be gamed. Quote the text for each. Do not rewrite the report.
List what you are unsure of.
```

**Jelaskan perubahan pada suatu ukuran.**

```text
The measure [name] changed from [value] to [value]. Here are other facts from the same period: [paste, such as changes in tools, staffing, volumes, definitions].
List possible explanations as hypotheses, what data would test each, and which are not supported by the facts given. Do not state a cause as fact.
List what you are unsure of.
```

## Skill AI

- [software-engineering-metrics](../../../../skills/software-engineering-metrics/SKILL.md): gunakan untuk mendefinisikan ukuran pengiriman beserta risikonya.
- [key-risk-indicators](../../../../skills/key-risk-indicators/SKILL.md): gunakan untuk memilih indikator peringatan dini.
- [statistical-analysis](../../../../skills/statistical-analysis/SKILL.md): gunakan untuk menganalisis variasi dan ketidakpastian.
- [survey-design](../../../../skills/survey-design/SKILL.md): gunakan untuk merancang ukuran pengalaman yang menghindari bias.
- [trend-analysis](../../../../skills/trend-analysis/SKILL.md): gunakan untuk menelaah perubahan dari waktu ke waktu.

## Sumber utama

- Buku pendamping *Service Management Metrics*: definisi metrik, vektor manipulasi, dan pagar pengaman, yang dirujuk topik ini di sepanjang uraian.
- Nicole Forsgren, Jez Humble, dan Gene Kim, *Accelerate* (2018), dan DORA (dora.dev): riset tentang ukuran pengiriman.
- Donald J. Wheeler, *Understanding Variation* (1993): uraian jelas tentang sinyal dan derau dalam ukuran.
- Wikipedia, "Goodhart's law" dan "Performance indicator": ikhtisar gagasan utama.

## Referensi

1. Performance indicator — Wikipedia — https://en.wikipedia.org/wiki/Performance_indicator
2. Balanced scorecard — Wikipedia — https://en.wikipedia.org/wiki/Balanced_scorecard
3. Objectives and key results — Wikipedia — https://en.wikipedia.org/wiki/Objectives_and_key_results
4. Goodhart's law — Wikipedia — https://en.wikipedia.org/wiki/Goodhart%27s_law
5. Campbell's law — Wikipedia — https://en.wikipedia.org/wiki/Campbell%27s_law
6. Perverse incentive — Wikipedia — https://en.wikipedia.org/wiki/Perverse_incentive
7. Economic indicator — Wikipedia — https://en.wikipedia.org/wiki/Economic_indicator
8. Control chart — Wikipedia — https://en.wikipedia.org/wiki/Control_chart
9. Percentile — Wikipedia — https://en.wikipedia.org/wiki/Percentile
10. Benchmarking — Wikipedia — https://en.wikipedia.org/wiki/Benchmarking
11. Data and information visualization — Wikipedia — https://en.wikipedia.org/wiki/Data_and_information_visualization
12. Net promoter score — Wikipedia — https://en.wikipedia.org/wiki/Net_promoter_score
