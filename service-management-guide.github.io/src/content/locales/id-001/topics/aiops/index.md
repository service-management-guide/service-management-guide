# AIOps

**AIOps menerapkan pembelajaran mesin pada data operasi untuk mengurangi kebisingan peringatan, menemukan anomali, mengorelasikan peristiwa, dan menyarankan penyebab; ia membuahkan hasil ketika diuji terhadap insiden lampau, dijaga agar dapat dijelaskan kepada orang yang merespons, dan diperlakukan sebagai asisten bagi staf piket, bukan pengganti penilaian.**

## Mengapa ini penting

Tim operasi tenggelam dalam data. Layanan modern memancarkan jutaan baris log, ribuan metrik, dan ratusan peringatan setiap hari. Orang tidak dapat membaca semuanya, jadi mereka menetapkan ambang dan aturan untuk memutuskan apa yang dilihat. Aturan tumbuh, berinteraksi, dan membusuk. Sebagian besar peringatan ternyata derau, dan beberapa masalah nyata bersembunyi di antaranya.

AIOps, istilah yang diciptakan firma analis Gartner pada pertengahan 2010-an dari "algorithmic IT operations" dan kini umumnya dibaca sebagai "AI for IT operations", menjanjikan bantuan. Ia memakai pembelajaran mesin untuk mempelajari apa yang normal, menyadari ketika sesuatu tidak, mengelompokkan peringatan terkait menjadi satu peristiwa, dan menyarankan di mana penyebabnya mungkin berada. Wikipedia menggambarkan AIOps sebagai penerapan kecerdasan buatan untuk meningkatkan operasi TI. Vendor menyajikannya dengan bahasa yang kuat. Praktisi melaporkan keuntungan nyata dalam beberapa pemakaian, seperti pengurangan derau, dan kekecewaan pada yang lain, seperti diagnosis yang sepenuhnya otomatis.

Bagi manajemen layanan pertanyaannya praktis: bagian AIOps mana yang memberi nilai andal, bagaimana Anda memeriksanya, dan bagaimana Anda menjaga orang tetap memegang kendali? Topik ini menjelaskan teknik utamanya, mode kegagalannya yang khas, dan jalur adopsi yang masuk akal. Ia dibangun di atas pemantauan (Topik 3.10 — Pemantauan dan Manajemen Peristiwa) dan observabilitas (Topik 7.4 — Observabilitas dan telemetri), dan tumpang tindih dengan manajemen insiden (Topik 3.2 — Manajemen Insiden) dan otomatisasi runbook (Topik 6.6 — Otomatisasi runbook dan perbaikan otomatis).

## Konsep inti

**AIOps.** Pemakaian teknik AI, terutama pembelajaran mesin dan statistik, pada data operasi untuk mendukung tugas seperti deteksi anomali, korelasi peristiwa, saran akar masalah, dan prediksi. Ia adalah sekumpulan teknik, bukan satu produk, dan kemampuannya sangat bervariasi.

**Deteksi anomali.** Menemukan titik data atau pola yang berbeda dari yang diharapkan. Wikipedia menjelaskan anomaly detection dan metodenya. Dalam operasi, model dapat mempelajari pola harian dan mingguan normal permintaan dan menandai penyimpangan. Normal tidak konstan: musiman (seasonality), yang dijelaskan di Wikipedia, berarti pagi Senin tampak berbeda dari malam Minggu. Pendeteksi yang baik memperhitungkannya.

**Deret waktu (time series).** Data yang dicatat dari waktu ke waktu, seperti waktu respons atau jumlah kesalahan. Wikipedia menjelaskan time series analysis. Sebagian besar metrik operasi adalah deret waktu, dan teknik AIOps dibangun di atas metode untuk memodelkan dan meramalkannya.

**Korelasi peristiwa dan pengurangan derau.** Menggabungkan peringatan yang berasal dari satu penyebab menjadi satu insiden, dan menekan duplikat dan derau yang dikenal. Wikipedia menjelaskan event correlation. Teknik pengelompokan, yang dijelaskan Wikipedia sebagai cluster analysis, mengelompokkan butir menurut kemiripan. Korelasi yang baik mengubah dua ratus peringatan menjadi satu, dengan sumber yang paling mungkin disebutkan.

**Saran akar masalah.** Memakai topologi, catatan perubahan, log, dan insiden lampau untuk mengusulkan di mana kesalahan kemungkinan berada. Saran adalah hipotesis. Paling berguna ketika menunjuk pada perubahan terbaru atau ketergantungan, dan paling tidak andal ketika penyebabnya baru.

**Operasi prediktif.** Meramalkan masalah sebelum terjadi, seperti disk yang akan penuh dalam tiga hari atau komponen yang kemungkinan gagal. Wikipedia menjelaskan predictive maintenance dan predictive analytics. Prediksi adalah probabilitas, dan masing-masing memiliki biaya untuk alarm palsu dan untuk yang terlewat. Lihat Topik 7.5 — Analitik prediktif dan peramalan.

**Analisis log.** Memakai teknik dari pemrosesan bahasa alami dan statistik untuk menemukan pola dalam log, seperti jenis pesan baru atau perubahan frekuensi. Wikipedia menjelaskan log analysis.

**AI generatif dalam operasi.** Model bahasa besar dapat merangkum linimasa insiden, menerjemahkan peringatan ke bahasa sederhana, menyusun langkah runbook, dan menjawab pertanyaan tentang lingkungan. Mereka menambah fleksibilitas dan risiko konten karangan. Lihat Topik 5.4 — AI generatif untuk insiden, pengetahuan, dan perubahan.

**Presisi, recall, dan biaya kesalahan.** Pendeteksi bisa salah dengan dua cara: menaikkan alarm palsu (false positive) atau melewatkan masalah nyata (false negative). Wikipedia menjelaskan kedua jenis kesalahan dan ukuran precision dan recall. Menyetel untuk mengurangi satu menaikkan yang lain. Keseimbangan yang tepat bergantung pada biaya masing-masing, dan layanan berbeda layak mendapat pengaturan berbeda.

**Concept drift.** Model belajar dari data masa lalu, dan dunia berubah: rilis baru, pola lalu lintas baru, infrastruktur baru. Wikipedia menjelaskan concept drift, di mana sifat statistik dari apa yang diprediksi berubah seiring waktu. Model yang akurat pada Januari mungkin menyesatkan pada Juni kecuali dipantau dan dilatih ulang.

**Keterjelasan (explainability).** Penanggap akan lebih memercayai saran, dan mengoreksinya dengan lebih berguna, jika mereka dapat melihat mengapa saran itu dibuat: metrik mana yang bergerak, peristiwa mana yang dikelompokkan, perubahan mana yang mendahului pergeseran. Wikipedia menjelaskan explainable artificial intelligence dan masalah kotak hitam. Untuk operasi, pilih pendekatan yang menunjukkan buktinya.

**Mutu dan cakupan data.** AIOps membutuhkan data yang baik: lengkap, konsisten, berstempel waktu benar, dan diberi label layanan dan pemilik. Data yang hilang atau tidak konsisten menghasilkan sinyal yang terlewat dan tautan palsu. Lihat Topik 4.4 — Manajemen Konfigurasi dan Topik 7.2 — Fondasi dan tata kelola data.

**Gagasan otonomik dan penyembuhan diri.** Tujuan lama tentang sistem yang mendeteksi dan memperbaiki kesalahannya sendiri, yang dijelaskan di Wikipedia sebagai autonomic computing. Sebagian praktis hari ini, seperti memulai ulang proses yang gagal. Penyembuhan diri yang luas jauh lebih sulit. Lihat Topik 6.6 — Otomatisasi runbook dan perbaikan otomatis.

**Pengawasan manusia.** Penanggap tetap bertanggung jawab. Keluaran AIOps adalah masukan untuk keputusan manusia, kecuali tindakan yang didefinisikan secara sempit telah diuji dan disetujui untuk berjalan otomatis. Lihat Topik 5.5 — AI agentik dan pengawasan manusia.

**Bagaimana lensa-lensa cocok.** AIOps menggabungkan AI dan analitik untuk bagian operasi dalam manajemen layanan. Praktik agile menyarankan uji coba kecil pada satu layanan, dengan umpan balik dari staf piket. Otomatisasi mengonsumsi keluaran AIOps, misalnya untuk membuka tiket atau menjalankan pemeriksaan yang aman.

## Praktik terbaik

1. **Mulai dengan kesulitan yang jelas.** Pilih satu masalah, seperti terlalu banyak peringatan pada satu layanan, dan satu ukuran, seperti jumlah panggilan per shift. Uji coba AIOps di sana.
2. **Rapikan data lebih dulu.** Periksa bahwa log dan metrik lengkap, stempel waktu konsisten, dan layanan serta pemilik diberi label. Perbaiki celah sebelum menyalahkan model.
3. **Uji terhadap insiden lampau.** Putar ulang data historis melalui alat, dan tanyakan apa yang akan ditandai, dikelompokkan, atau disarankannya. Hitung alarm palsu dan yang terlewat.
4. **Bandingkan dengan metode sederhana.** Bandingkan dengan ambang tetap dan aturan dasar. Jika metode sederhana sama baiknya, pakai itu. Jangan membayar kompleksitas yang tidak menambah apa-apa.
5. **Pilih keluaran yang dapat dijelaskan.** Pilih alat yang menunjukkan bukti di balik peringatan atau penyebab yang disarankan. Wajibkan penanggap dapat melihat dan menantangnya.
6. **Mulai dalam mode penasihat.** Biarkan alat menyarankan, dan biarkan orang memutuskan. Tinjau saran terhadap apa yang sebenarnya terjadi selama beberapa minggu sebelum memberinya tindakan otomatis apa pun.
7. **Batasi tindakan otomatis.** Izinkan hanya tindakan yang sempit, dipahami dengan baik, dan dapat dibalik, dengan pembatas laju, log, dan penghentian manual. Tinjau setiap kelas tindakan sebelum mengaktifkannya.
8. **Pantau modelnya.** Lacak alarm palsu, yang terlewat, dan persentase saran yang berguna. Awasi drift setelah rilis besar dan latih ulang atau konfigurasi ulang bila perlu.
9. **Libatkan terus staf piket.** Minta mereka menilai saran di dalam alat, dan tinjau umpan balik mereka setiap minggu. Mereka adalah hakim terbaik atas kegunaan.
10. **Catat apa yang ditekan.** Simpan log peringatan yang disembunyikan atau digabung sistem, dan tinjau sampel secara berkala. Penekanan adalah tempat kegagalan terburuk terjadi.

## Pertanyaan untuk dibahas bersama tim Anda

**Peringatan mana yang paling banyak membuang waktu piket kita, dan apakah aturan yang lebih baik akan memperbaikinya sebelum AI apa pun?**
Mulailah dengan data. Banyak masalah derau menyerah pada perbaikan sederhana. Harapkan beberapa aturan menyumbang sebagian besar derau. Lanjutkan dengan memperbaiki itu lalu menilai ulang apa yang dapat ditambahkan AI.

**Jika alat itu berjalan selama tiga insiden terakhir kita, apa yang akan dikatakannya kepada kita, dan apakah itu akan membantu?**
Putar ulang atau simulasikan. Harapkan hasil campuran. Tanyakan apa yang akan terlewat. Lanjutkan dengan memilih jenis insiden di mana alat tampak paling menjanjikan.

**Bagaimana kita tahu alat menekan peringatan yang nyata?**
Pertanyaan ini menguji pengawasan. Harapkan "kita tidak tahu". Lanjutkan dengan menyepakati log peristiwa yang ditekan, sampel berkala, dan aturan tentang apa yang tidak pernah ditekan.

**Siapa yang bertanggung jawab ketika tindakan otomatis salah, dan apa batasnya?**
Tunjuk pemilik dan daftarkan tindakan yang diizinkan. Harapkan jawaban samar. Lanjutkan dengan menulis daftar singkat tindakan yang diizinkan tanpa persetujuan, masing-masing dengan rollback.

**Bagaimana kita akan mendeteksi bahwa model telah mengalami drift setelah rilis besar atau perubahan lalu lintas?**
Minta rencananya. Harapkan tidak ada. Lanjutkan dengan memilih indikator, seperti tingkat alarm palsu, dan tanggal tinjauan setelah setiap rilis besar.

**Apa yang diinginkan staf piket dari alat ini, dan apa yang akan membuat mereka berhenti memercayainya?**
Tanyakan langsung kepada mereka. Harapkan jawaban praktis tentang konteks dan alarm palsu. Lanjutkan dengan mengubah jawaban menjadi kriteria penerimaan untuk uji coba.

## Dalam praktik: contoh manajemen layanan

Tim operasi dinas cuaca nasional menjalankan pipeline prakiraan dan API publik pada aset campuran sistem on-premises dan cloud. Staf piket menerima sekitar 300 peringatan sehari, sebagian besar dari beberapa sumber yang bising. Seorang vendor mengusulkan platform AIOps dengan korelasi otomatis dan saran akar masalah.

Kepala operasi setuju dengan uji coba bersyarat. Pertama, tim membersihkan 12 aturan paling bising, yang menghilangkan sekitar separuh volume. Kedua, tim memutar ulang enam bulan data, termasuk 14 insiden, melalui platform dalam mode penasihat. Dalam pemutaran ulang, platform mengelompokkan peringatan dengan baik: insiden rata-rata yang menghasilkan 80 peringatan muncul sebagai tiga kelompok. Ia dengan benar menandai tanda pertama pada sembilan dari 14 insiden, melewatkan tiga di mana gejala pertama berada dalam log, dan menaikkan alarm palsu pada pemrosesan ulang malam yang rutin, yang memiliki pola yang belum dipelajarinya.

Tim men-deploy-nya dalam mode penasihat pada satu pipeline selama dua bulan, dengan staf piket menilai setiap saran sebagai berguna, netral, atau salah. Sekitar 55 persen dinilai berguna, dan 15 persen salah, biasanya di mana perubahan terbaru yang tidak dicatat adalah penyebabnya. Platform kemudian diizinkan membuka tiket otomatis untuk insiden yang dikelompokkan, dan tidak ada yang lain. Tim mempertahankan tinjauan mingguan atas peringatan yang ditekan dan, setelah rilis besar, menemukan bahwa garis dasar lalu lintas model kini salah dan harus dilatih ulang.

Yang berubah: staf piket menerima jauh lebih sedikit peringatan yang lebih baik dikelompokkan. Yang masih sulit: saran platform bergantung pada catatan perubahan yang akurat, yang tidak lengkap; ia kurang membantu untuk kegagalan baru; dan harga vendor tumbuh bersama volume data, sehingga tim membatasi apa yang dimasukkannya. Pemimpin berencana memperluas uji coba ke pipeline lain hanya setelah tinjauan lebih lanjut atas yang terlewat.

## Empat perspektif

### Tim produk dan pengiriman

Pancarkan telemetri yang baik: log yang konsisten, metrik dengan label layanan, dan catatan deployment dan perubahan. Bagikan pengetahuan desain dengan tim operasi, dan bantu memeriksa saran alat tentang layanan Anda.

### Tim layanan dan operasi

Pakai alat sebagai asisten: nilai saran, tinjau butir yang ditekan, dan laporkan yang terlewat. Pertahankan aturan sederhana di tempat yang berfungsi, dan pertahankan kepemilikan atas keputusan dan tindakan.

### Kepemimpinan dan tata kelola

Minta hasil dari pengujian pemutaran ulang dan uji coba, bukan dari demonstrasi. Tetapkan batas pada tindakan otomatis. Danai mutu data dan pelatihan. Waspadai klaim operasi yang sepenuhnya otonom.

### Pelanggan dan pengguna

Anda seharusnya menyadari gangguan yang lebih sedikit dan lebih singkat, bukan perubahan dalam cara masalah dikomunikasikan kepada Anda. Beri tahu penyedia jika insiden terlewat sebelum Anda menyadarinya.

## Agile, AI, otomatisasi, dan analitik

### Agile

Uji coba pada satu layanan, dengan staf piket memberi umpan balik yang sering, lalu perluas bertahap. Tinjau yang terlewat setelah setiap insiden dan sesuaikan. Perhatian: menyetel model terus-menerus tanpa mencatat perubahan membuat perilaku tidak dapat diprediksi; simpan changelog.

### AI

Alat itu sendiri adalah sistem AI dengan pemilik, data uji, dan tinjauan. Perlakukan seperti yang lain: catat apa yang boleh dilakukannya, pantau, dan uji setelah pembaruan. Perhatian: vendor dapat mengubah model tanpa pemberitahuan; tanyakan bagaimana mereka mengumumkan perubahan dan uji secara teratur. Lihat Topik 5.6 — Tata kelola, risiko, dan kepatuhan AI.

### Otomatisasi

Hubungkan keluaran AIOps ke tindakan otomatis yang sempit dan teruji, seperti pembuatan tiket, pengumpulan diagnostik, dan memulai ulang proses gagal yang dikenal, dengan batas dan log. Perhatian: tindakan otomatis yang dipilih dari prediksi yang tidak pasti dapat memperburuk insiden; wajibkan keyakinan tinggi dan rollback. Lihat Topik 6.6 — Otomatisasi runbook dan perbaikan otomatis.

### Analitik

Ukur volume peringatan, persentase yang berguna, alarm palsu, yang terlewat yang ditemukan dalam tinjauan insiden, waktu deteksi, dan waktu diagnosis. Perhatian: volume peringatan dapat diturunkan dengan menyembunyikan peringatan nyata; selalu bandingkan dengan insiden dan yang terlewat. Lihat Topik 7.4 — Observabilitas dan telemetri dan buku *Service Management Metrics*.

## Mode kegagalan umum

- **Membeli janji.** Demonstrasi vendor dianggap bukti. Uji pada data Anda sendiri dengan pemutaran ulang dan uji coba.
- **Data buruk.** Model belajar dari log dan label yang tidak konsisten. Perbaiki data lebih dulu.
- **Penekanan tanpa tinjauan.** Peringatan nyata disembunyikan. Catat dan ambil sampel apa yang ditekan.
- **Saran yang buram.** Penanggap tidak dapat menilainya. Pilih alat yang menunjukkan bukti.
- **Otomatisasi prematur.** Tindakan salah terjadi dengan cepat. Mulai dalam mode penasihat dan batasi tindakan.
- **Drift model diabaikan.** Akurasi menurun diam-diam. Pantau dan latih ulang setelah perubahan.
- **Kompleksitas tanpa keuntungan.** Aturan sederhana sudah cukup. Bandingkan dengan metode sederhana.

## Model kematangan

| Dimensi | Memulai | Mengembangkan | Menstandardisasi | Mengelola | Mengorkestrasi |
|---|---|---|---|---|---|
| Fondasi data | Tidak konsisten | Sumber utama dikumpulkan | Telemetri yang konsisten, berlabel, dan dimiliki | Mutu data diukur dan diperbaiki | Data dibagikan lintas tim dan pemasok dengan tata kelola |
| Pemakaian AI | Klaim vendor | Uji coba pada satu layanan | Pemakaian penasihat dengan pemutaran ulang dan umpan balik | Hasil diukur dan ditindaklanjuti | AI terintegrasi di seluruh operasi dengan pengawasan |
| Otomatisasi | Tidak ada | Pembuatan tiket | Tindakan sempit yang disetujui dengan batas | Tindakan ditinjau dan diperbaiki | Otomatisasi lebih luas menurut risiko dengan kendali manusia |
| Perawatan model | Tidak ada | Penyetelan ad hoc | Pemantauan drift dan kesalahan | Pelatihan ulang terkait perubahan | Evaluasi berkelanjutan lintas alat |

## Daftar periksa

- [ ] Kami memilih masalah spesifik dan ukuran untuk uji coba.
- [ ] Kami memperbaiki derau peringatan terburuk dengan aturan sederhana lebih dulu.
- [ ] Kami menguji alat pada insiden historis dan menghitung yang terlewat serta alarm palsu.
- [ ] Kami membandingkannya dengan metode sederhana.
- [ ] Keluaran dapat dijelaskan kepada penanggap.
- [ ] Kami berjalan dalam mode penasihat sebelum mengizinkan tindakan apa pun.
- [ ] Tindakan otomatis sempit, tercatat, dibatasi lajunya, dan dapat dibalik.
- [ ] Kami memantau drift dan meninjau peringatan yang ditekan.

## Prompt AI

**Periksa hasil pemutaran ulang.**

```text
Here are the results of replaying [number] past incidents through our AIOps tool: for each, the first real symptom, what the tool flagged and when, and what it suggested: [paste].
Compute for each incident whether the tool flagged the problem before the first page, and list false alarms and misses. Summarize counts and note incidents where the data is unclear. Do not rate the tool overall.
List what you are unsure of.
```

**Tinjau peringatan yang ditekan.**

```text
Here is a sample of alerts that the system suppressed or merged last week, with details: [paste sample].
For each, say whether the details suggest it was noise, a duplicate of another alert, or possibly a real problem, and give your reason. Mark those you cannot judge.
List what you are unsure of.
```

**Susun draf kriteria penerimaan untuk uji coba.**

```text
Our service: [describe]. Our current pain: [describe, with numbers if known]. Our constraints: [list].
Draft acceptance criteria for a two-month pilot of an AIOps tool: measures, thresholds we should agree beforehand, what would make us stop, and what automatic actions are not allowed. Do not state vendor claims as facts.
List what you are unsure of.
```

## Skill AI

- [anomaly-analysis](../../../../skills/anomaly-analysis/SKILL.md): gunakan untuk menelaah pola tidak biasa dalam data operasi.
- [trend-analysis](../../../../skills/trend-analysis/SKILL.md): gunakan untuk melihat bagaimana metrik berubah dari waktu ke waktu.
- [data-quality](../../../../skills/data-quality/SKILL.md): gunakan untuk memeriksa masukan yang menjadi sandaran AIOps.
- [mlops](../../../../skills/mlops/SKILL.md): gunakan untuk memantau dan memelihara model yang dipakai.
- [root-cause-analysis](../../../../skills/root-cause-analysis/SKILL.md): gunakan untuk menguji penyebab yang disarankan terhadap bukti.

## Sumber utama

- Betsy Beyer dan lainnya (ed.), *Site Reliability Engineering* (2016), bab tentang memantau sistem terdistribusi, gratis di sre.google: fondasi yang menjadi dasar AIOps.
- PeopleCert, halaman sertifikasi ITIL: uraian pemilik tentang praktik pemantauan dan manajemen peristiwa.
- Wikipedia, "AIOps" dan "Anomaly detection": ikhtisar istilah dan teknik.
- Wikipedia, "Concept drift": alasan utama model menurun seiring waktu.

## Referensi

1. AIOps — Wikipedia — https://en.wikipedia.org/wiki/AIOps
2. Anomaly detection — Wikipedia — https://en.wikipedia.org/wiki/Anomaly_detection
3. Event correlation — Wikipedia — https://en.wikipedia.org/wiki/Event_correlation
4. Time series — Wikipedia — https://en.wikipedia.org/wiki/Time_series
5. Seasonality — Wikipedia — https://en.wikipedia.org/wiki/Seasonality
6. Cluster analysis — Wikipedia — https://en.wikipedia.org/wiki/Cluster_analysis
7. Precision and recall — Wikipedia — https://en.wikipedia.org/wiki/Precision_and_recall
8. Type I and type II errors — Wikipedia — https://en.wikipedia.org/wiki/Type_I_and_type_II_errors
9. Concept drift — Wikipedia — https://en.wikipedia.org/wiki/Concept_drift
10. Explainable artificial intelligence — Wikipedia — https://en.wikipedia.org/wiki/Explainable_artificial_intelligence
11. Predictive maintenance — Wikipedia — https://en.wikipedia.org/wiki/Predictive_maintenance
