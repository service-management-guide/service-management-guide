# Analitik untuk manajemen layanan

**Analitik mengubah data layanan menjadi jawaban atas pertanyaan: apa yang terjadi, mengapa, apa yang akan terjadi, dan apa yang harus dilakukan; ia mendapat kepercayaan ketika setiap analisis dimulai dari pertanyaan bernama, menyatakan data dan batasnya, memisahkan korelasi dari sebab, dan berakhir pada keputusan yang dapat diambil seseorang.**

## Mengapa ini penting

Tim layanan menghasilkan banyak data: tiket, log, metrik, survei, catatan perubahan, laporan biaya. Sebagian besarnya tak terpakai, atau dirangkum dalam dasbor yang tak seorang pun dapat kaitkan dengan keputusan. Laporan menggambarkan aktivitas, seperti tiket yang ditutup, dan sedikit bicara tentang apakah pelanggan menjadi lebih baik.

Analitik adalah disiplin memperoleh jawaban dari data. Wikipedia menggambarkan analytics sebagai penemuan, penafsiran, dan komunikasi pola bermakna dalam data. Dalam manajemen layanan ia dapat menunjukkan dari mana permintaan datang, mengapa insiden berulang, di mana pekerjaan menunggu, perubahan mana yang berisiko, dan apakah suatu perbaikan membantu. Ia juga dapat menyesatkan. Grafik dapat tampak berwibawa sementara bertumpu pada sampel yang bias, kebetulan, atau definisi yang diam-diam berubah.

Topik ini adalah pintu masuk ke Bagian 7. Ia menjelaskan jenis-jenis analitik, langkah analisis yang sehat, dan jebakan yang menangkap bahkan orang yang berhati-hati. Ia menyerahkan definisi metrik kepada buku pendamping *Service Management Metrics*, dan menunjuk ke topik berikutnya untuk fondasi (Topik 7.2 — Fondasi dan tata kelola data), pengukuran (Topik 7.3 — Pengukuran dan pelaporan), observabilitas (Topik 7.4 — Observabilitas dan telemetri), prediksi (Topik 7.5 — Analitik prediktif dan peramalan), aliran (Topik 7.6 — Analitik proses dan aliran nilai), dan pengalaman (Topik 7.7 — Analitik pengalaman dan sentimen). Uraian pemilik tentang versi ITIL terbaru menekankan hasil terukur (lihat Topik 1.3 — ITIL 5), yang bergantung pada analitik yang dilakukan dengan baik.

## Konsep inti

**Empat jenis analitik.** Kerangka umum membedakan:

| Jenis | Pertanyaan | Contoh dalam pekerjaan layanan |
|---|---|---|
| Deskriptif | Apa yang terjadi? | Insiden per bulan menurut layanan |
| Diagnostik | Mengapa itu terjadi? | Apa kesamaan insiden berulang |
| Prediktif | Apa yang kemungkinan terjadi? | Perkiraan volume tiket kuartal depan |
| Preskriptif | Apa yang harus kita lakukan? | Tingkat staf yang memenuhi target dengan biaya paling rendah |

Wikipedia menjelaskan descriptive, predictive, dan prescriptive analytics. Masing-masing dibangun di atas yang sebelumnya. Sebagian besar tim layanan akan mendapat nilai paling banyak dari mengerjakan dua yang pertama dengan baik.

**Mulai dengan pertanyaan.** Analisis dimulai dengan keputusan yang perlu dibuat seseorang, seperti apakah menambah staf pada shift malam, dan mengubahnya menjadi pertanyaan yang dapat dijawab data. Tanpa pertanyaan, analisis menjadi pencarian sesuatu yang menarik, dan artikel Wikipedia tentang data dredging menjelaskan bagaimana itu menemukan pola yang hanya kebetulan.

**Data.** Apa yang Anda miliki, dari mana asalnya, bagaimana dicatat, dan apa yang tidak dimuatnya. Data tiket menunjukkan apa yang dipilih orang untuk dilaporkan dan bagaimana agen mengategorikannya, bukan segala yang terjadi. Lihat Topik 7.2 — Fondasi dan tata kelola data. Wikipedia menjelaskan data quality sebagai kesesuaian untuk dipakai.

**Statistik deskriptif.** Ringkasan seperti hitungan, median, persentil, dan sebaran. Wikipedia menjelaskan descriptive statistics. Untuk data layanan, median dan persentil biasanya lebih berguna daripada rata-rata, yang menyembunyikan ekor panjang, dan pencilan (outlier), yang dijelaskan di Wikipedia, layak dilihat dan bukan dibuang otomatis.

**Analisis eksploratif.** Melihat data untuk memahami bentuk, mutu, dan kejutannya sebelum menguji gagasan. Wikipedia menjelaskan exploratory data analysis. Ia mencegah kesalahan konyol, seperti memperlakukan nilai yang hilang sebagai nol.

**Pengambilan sampel dan bias.** Sebagian besar analisis memakai sampel, dan sampel dapat menyesatkan. Wikipedia menjelaskan sampling dan selection bias. Respons survei datang dari mereka yang menjawab, dan tiket dukungan datang dari mereka yang menghubungi Anda. Survivorship bias, juga dijelaskan di sana, muncul ketika Anda hanya mempelajari apa yang tersisa, seperti pelanggan yang bertahan.

**Korelasi dan sebab.** Dua hal yang bergerak bersama tidak berarti yang satu menyebabkan yang lain. Wikipedia menjelaskan masalahnya di bawah "correlation does not imply causation", dan confounding, di mana faktor ketiga menggerakkan keduanya. Volume tiket dan jumlah server mungkin naik bersama karena bisnis tumbuh. Klaim sebab membutuhkan lebih dari grafik: perbandingan terkendali, atau penalaran hati-hati tentang alternatif. Wikipedia menjelaskan causal inference dan A/B testing sebagai cara mempelajari sebab.

**Paradoks dan jebakan.** Paradoks Simpson, yang dijelaskan di Wikipedia, adalah kasus di mana tren yang tampak di beberapa kelompok berbalik ketika kelompok digabung. Kekeliruan tingkat dasar (base rate fallacy), juga dijelaskan di sana, adalah kesalahan mengabaikan seberapa umum sesuatu, sehingga pendeteksi yang baik untuk peristiwa langka menghasilkan sebagian besar alarm palsu. Menyadari jebakan semacam itu adalah pertahanan.

**Signifikansi statistik dan ketidakpastian.** Hasil "signifikan" ketika kecil kemungkinannya disebabkan kebetulan semata di bawah asumsi yang dinyatakan. Wikipedia menjelaskan hypothesis test dan confidence interval. Signifikansi bukan kepentingan: efek kecil bisa signifikan dalam kumpulan data besar, dan efek besar bisa tidak pasti dalam kumpulan kecil. Tunjukkan rentang, bukan hanya angka tunggal.

**Visualisasi.** Grafik membantu orang melihat pola, dan grafik buruk menyesatkan. Wikipedia menjelaskan data dan information visualization. Pilih bentuk yang cocok dengan pertanyaan, beri label sumbu dan satuan, mulai skala dengan jujur, dan tunjukkan ketidakpastian. Dasbor, yang dijelaskan Wikipedia sebagai tampilan visual informasi kunci, harus melayani keputusan dan jumlahnya sedikit.

**Deret waktu.** Banyak data layanan dicatat dari waktu ke waktu, dengan tren, pola musiman, dan pergeseran mendadak. Wikipedia menjelaskan time series analysis. Bandingkan yang sepadan: Senin ini dengan Senin lainnya. Lihat Topik 7.5 — Analitik prediktif dan peramalan.

**Model dan pembelajaran mesin.** Model statistik dan pembelajaran mesin dapat memprediksi, mengklasifikasikan, dan mengelompokkan. Mereka membutuhkan data pelatihan dan uji, validasi, dan pemantauan drift. Lihat Topik 5.1 — AI dalam manajemen layanan. Model bukan sumber kebenaran; ia alat dengan asumsi.

**Hukum Goodhart.** Ketika suatu ukuran menjadi target, ia berhenti menjadi ukuran yang baik. Wikipedia menjelaskan hukum ini. Analitik yang dipakai untuk menilai orang atau tim mengundang perubahan perilaku yang memperbaiki angka dan bukan hasil. Pakai ukuran untuk belajar, pasangkan dengan yang lain, dan katakan bagaimana masing-masing bisa dimanipulasi. Lihat buku *Service Management Metrics*.

**Etika dan privasi.** Analitik tentang orang, seperti produktivitas agen atau perilaku pengguna, memunculkan pertanyaan persetujuan, keadilan, dan proporsi. Wikipedia menjelaskan privacy dan algorithmic bias di tempat lain. Kumpulkan hanya yang Anda butuhkan, agregasikan bila bisa, dan terbukalah tentang apa yang Anda analisis dan mengapa. Lihat Topik 5.6 — Tata kelola, risiko, dan kepatuhan AI.

**Komunikasi.** Analisis yang tidak dipahami siapa pun tidak mengubah apa-apa. Nyatakan pertanyaan, jawaban, keyakinan, batas, dan keputusan yang disarankan dalam kata-kata sederhana, dengan grafik di tempat yang membantu.

**Bagaimana lensa-lensa cocok.** Analitik adalah lensa keempat, dan ia melayani tiga lainnya. Praktik agile memakainya untuk memeriksa apakah perubahan membantu. AI memakai data sebagai bahan bakar dan dapat mempercepat analisis, di bawah tinjauan. Otomatisasi menghasilkan data dan bertindak atasnya. Analitik juga membutuhkan tiga lensa pertama untuk mengubah wawasan menjadi perubahan.

## Praktik terbaik

1. **Mulai dari keputusan.** Tuliskan siapa yang akan memutuskan apa, kapan, dan bukti apa yang akan mengubah pikiran mereka. Bentuk analisis menurut itu.
2. **Ubah keputusan menjadi pertanyaan yang tepat.** Definisikan istilah, seperti "terselesaikan" atau "insiden berulang", populasi, dan periode sebelum Anda menyentuh data.
3. **Kenali data Anda.** Dokumentasikan sumber, cara catatan dibuat, celah yang diketahui, dan perubahan definisi dari waktu ke waktu. Periksa sampel terhadap kenyataan.
4. **Lihat sebelum menguji.** Jelajahi distribusi, nilai yang hilang, dan pencilan lebih dulu. Perbaiki kesalahan dan catat apa yang Anda ubah.
5. **Pakai ringkasan yang kokoh.** Laporkan median dan persentil dengan hitungan, dan tunjukkan sebarannya. Bandingkan yang sepadan, seperti hari yang sama dalam seminggu atau musim yang sama.
6. **Waspadai bias.** Tanyakan siapa yang tidak ada dalam data dan mengapa. Nyatakan batas sampel saat menyajikan hasil.
7. **Jangan mengklaim sebab tanpa dasar.** Katakan "terkait dengan" kecuali Anda punya perbandingan atau argumen kuat. Daftarkan penjelasan alternatif dan katakan bagaimana Anda memeriksanya.
8. **Tunjukkan ketidakpastian.** Beri rentang dan catat ukuran sampel. Hindari presisi palsu.
9. **Rancang visual untuk pembaca.** Jaga grafik sederhana, jujur, dan berlabel. Pilih sedikit dasbor yang bermakna daripada banyak yang tidak terpakai.
10. **Tutup lingkarnya.** Catat keputusan yang diambil dan hasilnya, dan periksa kemudian apakah analisis membantu. Pensiunkan laporan yang tidak dipakai siapa pun.

## Pertanyaan untuk dibahas bersama tim Anda

**Apa keputusan terakhir yang kita buat dengan data, dan apa yang sebenarnya dikatakan data kepada kita?**
Minta contoh. Harapkan bahwa data mendukung keputusan yang sudah diambil. Lanjutkan dengan memilih keputusan yang akan datang dan menuliskan pertanyaannya lebih dulu.

**Laporan kita yang mana yang tidak dibaca atau ditindaklanjuti siapa pun?**
Periksa pemakaian. Harapkan beberapa. Lanjutkan dengan mempensiunkan satu dan menanyakan apakah ada yang merindukannya.

**Di mana data kita mungkin bias atau tidak lengkap, dan siapa yang tidak ada?**
Pikirkan tiket, survei, dan log. Harapkan bahwa banyak pengguna tidak pernah menghubungi kita. Lanjutkan dengan memilih satu sumber dan menambahkan pemeriksaan dari sumber lain.

**Apa yang akan meyakinkan kita bahwa perbaikan terbaru benar-benar berhasil?**
Diskusikan bukti. Harapkan ketergantungan pada grafik sebelum-sesudah. Lanjutkan dengan mendaftar hal lain yang berubah pada saat yang sama.

**Angka kita yang mana yang bisa dimanipulasi, dan bagaimana kita akan menyadarinya?**
Pilih ukuran yang penting bagi penilaian seseorang. Harapkan jawaban kreatif. Lanjutkan dengan menyepakati pemeriksaan sampel atau ukuran berpasangan.

**Bagaimana AI dapat membantu kita menganalisis data, dan bagaimana kita memeriksa kerjanya?**
AI dapat merangkum data, menyusun grafik, dan menyarankan pola. Ia juga dapat menyatakan temuan karangan. Tanyakan siapa yang memeriksa dan bagaimana. Lanjutkan dengan mengulang analisis AI dengan tangan pada kumpulan data kecil.

## Dalam praktik: contoh manajemen layanan

Service desk TI sebuah otoritas pajak nasional menangani 25.000 kontak sebulan. Seorang manajer senior memiliki dasbor yang menunjukkan bahwa rata-rata waktu penyelesaian naik 20 persen dalam setahun, dan meminta ketua desk "menurunkannya kembali". Ketua memutuskan menganalisis sebelum bereaksi.

Ia memulai dengan pertanyaan: apakah waktu untuk menyelesaikan kontak yang khas naik, dan jika ya, untuk jenis kontak apa? Ia memeriksa datanya lebih dulu. Pada musim semi perangkat tiket mengubah cara "terselesaikan" dicatat, sehingga tiket terselesaikan ketika agen menandainya, bukan ketika pengguna mengonfirmasi. Ia juga mendapati bahwa kategori baru permintaan kompleks "akses ke sistem perkara", diluncurkan pada musim gugur, menyusun 12 persen kontak dan memakan waktu lima kali lebih lama dari yang lain.

Ia menghitung ulang memakai median dan persentil ke-90, dipisah menurut kategori. Untuk kategori lama, waktu penyelesaian median tidak berubah; persentil ke-90 naik sedikit. Rata-rata keseluruhan naik terutama karena kategori baru dan perubahan definisi. Ia mencatat bahwa data tidak dapat menunjukkan mengapa sebagian permintaan akses memakan waktu lama, hanya bahwa memang begitu.

Ia menyajikan ringkasan satu halaman: rata-rata naik karena jenis pekerjaan baru dan perubahan definisi; sebagian besar kontak secepat sebelumnya; ekor panjang sedikit tumbuh, dan permintaan kompleks perlu ditelaah. Ia menghindari mengatakan bahwa kategori baru "menyebabkan" kenaikan pada ekor, karena perubahan staf juga terjadi. Ia mengusulkan dua tindakan: kajian permintaan akses dengan sampel 40 tiket, dan laporan bulanan menurut kategori dengan persentil.

Yang berubah: manajer berhenti meminta penurunan menyeluruh dan meminta kajian permintaan akses. Yang masih sulit: perubahan definisi tidak dapat sepenuhnya dibatalkan, sehingga perbandingan melewati patahan itu tetap perkiraan; sampel 40 tiket dibaca satu orang dan terbuka terhadap bias; dan manajer masih lebih suka satu angka. Ketua mempertahankan kedua pandangan dan menjelaskan batas masing-masing setiap kali.

## Empat perspektif

### Tim produk dan pengiriman

Pakai data untuk menguji apakah perubahan membantu, dan instrumentasikan produk Anda agar ada data berguna. Bagikan definisi dan batas kepada mereka yang memakai data Anda, dan hindari klaim berlebihan dari satu grafik.

### Tim layanan dan operasi

Ketahui dari mana data Anda berasal dan apa yang dilewatkannya. Laporkan median dan persentil dengan hitungan, dan periksa ekor panjang. Beri tahu analis ketika perangkat atau kategori berubah.

### Kepemimpinan dan tata kelola

Minta pertanyaan, data, batas, dan keputusan, bukan hanya grafik. Jangan memakai ukuran tunggal untuk menilai orang. Danai mutu data dan keterampilan analitis.

### Pelanggan dan pengguna

Anda ada di dalam data, dan sering tidak ada di dalamnya. Anda seharusnya ditanya apa yang penting bagi Anda, dan penyedia harus mengatakan bagaimana informasi Anda dipakai. Beri tahu penyedia ketika angka tidak cocok dengan pengalaman Anda.

## Agile, AI, otomatisasi, dan analitik

### Agile

Pakai analitik sebagai alat umpan balik: tetapkan ekspektasi, buat perubahan kecil, periksa data, dan putuskan. Bagikan hasil kepada pemangku kepentingan. Perhatian: jangan menunggu data sempurna sebelum bertindak pada eksperimen kecil; juga jangan memperlakukan grafik sebelum-sesudah yang singkat sebagai bukti.

### AI

AI dapat membersihkan data, menyusun kueri dan grafik, merangkum hasil, dan menyarankan pola, dengan pemilik dan pemeriksaan. Perhatian: analisis buatan AI dapat menyatakan temuan yang tidak didukung data, atau memakai metode yang salah; wajibkan ia menunjukkan perhitungannya, dan ulangi sampel dengan tangan. Lihat Topik 5.1 — AI dalam manajemen layanan.

### Otomatisasi

Otomatiskan pengumpulan data, pembersihan, dan laporan rutin, dengan dokumentasi setiap langkah. Perhatian: laporan otomatis dapat terus berjalan setelah maknanya berubah; tinjau definisi dan sumber secara berkala. Lihat Topik 6.1 — Strategi otomatisasi.

### Analitik

Topik ini adalah lensa itu sendiri: pertanyaan, data, metode, ketidakpastian, dan keputusan. Perhatian: jangan biarkan volume data menggantikan wawasan; ukur apakah analisis mengubah keputusan. Lihat buku *Service Management Metrics* untuk definisi metrik dan pagar pengamannya.

## Mode kegagalan umum

- **Laporan tanpa keputusan.** Dasbor yang tidak dipakai siapa pun. Mulai dari keputusan dan pensiunkan laporan yang tidak dipakai.
- **Rata-rata yang menyembunyikan.** Ekor pengalaman buruk tidak terlihat. Pakai median, persentil, dan pemisahan.
- **Definisi tidak diketahui.** Perubahan makna kolom merusak tren. Dokumentasikan dan pantau definisi.
- **Sampel bias.** Hanya yang menghubungi Anda yang dihitung. Nyatakan siapa yang tidak ada.
- **Sebab dari korelasi.** Grafik dianggap bukti. Daftarkan penjelasan alternatif dan uji.
- **Presisi palsu.** Angka ditunjukkan tanpa ketidakpastian. Tunjukkan rentang dan ukuran sampel.
- **Target yang mendistorsi.** Orang mengoptimalkan angkanya. Pasangkan ukuran dan ambil sampel kasus nyata.

## Model kematangan

| Dimensi | Memulai | Mengembangkan | Menstandardisasi | Mengelola | Mengorkestrasi |
|---|---|---|---|---|---|
| Pertanyaan dan keputusan | Laporan karena kebiasaan | Beberapa pertanyaan terdefinisi | Analisis dimulai dari keputusan bernama | Dampak keputusan dilacak | Analitik terintegrasi dengan perencanaan lintas layanan |
| Pemahaman data | Tidak diketahui | Sumber utama diketahui | Sumber, definisi, dan celah didokumentasikan | Mutu data diukur dan diperbaiki | Data ditata kelola dan dibagikan lintas tim dan mitra |
| Metode | Rata-rata dan grafik | Median dan pemisahan dasar | Metode standar, ketidakpastian, dan pemeriksaan bias | Metode ditinjau dan diperiksa sejawat | Metode lanjutan dengan pengawasan dan validasi |
| Komunikasi | Dasbor | Ringkasan | Temuan dalam bahasa sederhana dengan batas | Temuan diuji bersama pengguna | Wawasan tertanam dalam keputusan sehari-hari |

## Daftar periksa

- [ ] Setiap analisis dimulai dari keputusan bernama dan pertanyaan yang tepat.
- [ ] Kami mendokumentasikan sumber data, definisi, dan celah yang diketahui.
- [ ] Kami melaporkan median dan persentil dengan hitungan.
- [ ] Kami menyatakan siapa yang tidak ada dalam data dan batas sampel.
- [ ] Kami memisahkan korelasi dari sebab dan mendaftar penjelasan alternatif.
- [ ] Kami menunjukkan ketidakpastian dan menghindari presisi palsu.
- [ ] Kami memasangkan ukuran yang dapat dimanipulasi dan mengambil sampel kasus nyata.
- [ ] Kami melacak keputusan yang diambil dan meninjau apakah analisis membantu.

## Prompt AI

**Ubah keputusan menjadi pertanyaan.**

```text
The decision we need to make: [describe]. Who decides: [role]. Data we have: [list sources and fields].
Write three precise analytical questions that would inform the decision, with definitions of key terms, the population, and the period. List what data we lack for each. Do not propose answers.
List what you are unsure of.
```

**Periksa ringkasan hasil terhadap jebakan.**

```text
Here is a summary of an analysis with the data used: [paste].
List possible problems: sample bias, missing groups, changes in definitions, outliers, confounding factors, and claims of cause not supported by the data. Quote the text for each. Do not redo the analysis.
List what you are unsure of.
```

**Deskripsikan kumpulan data sebelum analisis.**

```text
Here is a sample of rows from our dataset with field names, identifiers removed: [paste].
List each field, its apparent type, missing values, odd values, and questions to ask about how it is recorded. Do not draw conclusions about the business.
List what you are unsure of.
```

## Skill AI

- [statistical-analysis](../../../../skills/statistical-analysis/SKILL.md): gunakan untuk memilih dan menerapkan metode statistik yang sehat.
- [trend-analysis](../../../../skills/trend-analysis/SKILL.md): gunakan untuk menelaah perubahan dari waktu ke waktu.
- [data-quality](../../../../skills/data-quality/SKILL.md): gunakan untuk memeriksa dan memperbaiki data di balik analisis.
- [software-engineering-metrics](../../../../skills/software-engineering-metrics/SKILL.md): gunakan untuk mendefinisikan ukuran pengiriman beserta risikonya.
- [survey-design](../../../../skills/survey-design/SKILL.md): gunakan untuk merancang survei yang menghindari bias umum.

## Sumber utama

- Edward Tufte, *The Visual Display of Quantitative Information* (1983): buku klasik tentang grafik yang jujur.
- Darrell Huff, *How to Lie with Statistics* (1954): uraian singkat dan mudah dibaca tentang trik statistik yang umum.
- Buku pendamping *Service Management Metrics*: definisi metrik, vektor manipulasi, dan pagar pengaman.
- Wikipedia, "Analytics" dan "Data analysis": ikhtisar bidang ini.

## Referensi

1. Analytics — Wikipedia — https://en.wikipedia.org/wiki/Analytics
2. Data analysis — Wikipedia — https://en.wikipedia.org/wiki/Data_analysis
3. Descriptive statistics — Wikipedia — https://en.wikipedia.org/wiki/Descriptive_statistics
4. Predictive analytics — Wikipedia — https://en.wikipedia.org/wiki/Predictive_analytics
5. Prescriptive analytics — Wikipedia — https://en.wikipedia.org/wiki/Prescriptive_analytics
6. Correlation does not imply causation — Wikipedia — https://en.wikipedia.org/wiki/Correlation_does_not_imply_causation
7. Simpson's paradox — Wikipedia — https://en.wikipedia.org/wiki/Simpson%27s_paradox
8. Selection bias — Wikipedia — https://en.wikipedia.org/wiki/Selection_bias
9. Data dredging — Wikipedia — https://en.wikipedia.org/wiki/Data_dredging
10. Goodhart's law — Wikipedia — https://en.wikipedia.org/wiki/Goodhart%27s_law
11. Data quality — Wikipedia — https://en.wikipedia.org/wiki/Data_quality
12. Exploratory data analysis — Wikipedia — https://en.wikipedia.org/wiki/Exploratory_data_analysis
