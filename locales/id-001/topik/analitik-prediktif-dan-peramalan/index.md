# Analitik prediktif dan peramalan

**Peramalan dan prediksi permintaan, kapasitas, insiden, dan risiko perubahan membantu tim bersiap, tetapi pada dasarnya tidak pasti; pakailah baseline sederhana lebih dulu, tunjukkan rentang alih-alih angka tunggal, validasi terhadap data yang disisihkan, pantau drift, dan jadikan aturan keputusan eksplisit sebelum ramalan dibuat.**

## Mengapa ini penting

Tim layanan selalu bersiap menghadapi sesuatu. Berapa banyak kontak akan tiba pada minggu pertama semester baru? Kapan penyimpanan akan penuh? Perubahan mana yang kemungkinan menyebabkan insiden? Berapa orang yang harus berjaga selama obral? Keputusan tentang staf, kapasitas, dan risiko semuanya bertumpu pada keyakinan tentang masa depan, entah ada yang menyatakannya atau tidak.

Prediksi membuat keyakinan itu eksplisit dan dapat diuji. Ramalan volume tiket bulan depan, dengan rentang, dapat dibandingkan dengan yang terjadi dan diperbaiki. Model yang menilai risiko suatu perubahan dapat diperiksa terhadap perubahan yang gagal. Jika dilakukan dengan baik, ini menggantikan firasat dengan bukti. Jika dilakukan dengan buruk, ia menggantikan firasat dengan keyakinan palsu: satu angka hingga dua desimal, dihasilkan model yang tidak dapat dijelaskan siapa pun, dipercaya karena tampak ilmiah.

Prediksi salah karena alasan biasa. Masa lalu tidak memuat pola yang penting. Model mencocokkan derau. Peluncuran, perubahan kebijakan, atau gangguan memutus hubungan yang dipelajari model. Peristiwa langka diramalkan dengan alat yang dibuat untuk yang umum. Topik ini menjelaskan jenis utama peramalan dan prediksi dalam manajemen layanan, metodenya dalam kata-kata sederhana, dan kebiasaan yang menjaganya jujur. Ia dibangun di atas analitik (Topik 7.1 — Analitik untuk manajemen layanan) dan perencanaan kapasitas (Topik 3.11 — Ketersediaan, Kapasitas, dan Kinerja), dan berkaitan dengan AIOps (Topik 5.2 — AIOps) dan ekonomi cloud (Topik 4.5 — Manajemen keuangan dan FinOps).

## Konsep inti

**Peramalan dan prediksi.** Peramalan memperkirakan nilai masa depan suatu kuantitas dari waktu ke waktu, seperti permintaan bulan depan. Prediksi secara lebih luas memperkirakan sesuatu yang tidak diketahui, seperti apakah suatu perubahan akan gagal. Wikipedia menjelaskan forecasting dan predictive analytics. Keduanya memakai pola dalam data masa lalu, dan keduanya tidak pasti.

**Deret waktu.** Data yang dicatat pada interval teratur. Wikipedia menjelaskan time series analysis. Banyak kuantitas layanan, seperti jumlah tiket harian, adalah deret waktu dengan tren (kenaikan atau penurunan jangka panjang), musiman (siklus teratur, seperti mingguan atau tahunan), dan derau. Wikipedia menjelaskan seasonality. Ramalan perlu memperhitungkan ketiganya.

**Baseline.** Ramalan paling sederhana yang mungkin berfungsi: "minggu depan akan seperti minggu ini", atau "bulan ini akan seperti bulan yang sama tahun lalu, disesuaikan untuk pertumbuhan". Baseline mengejutkan sulit dikalahkan. Selalu bandingkan metode canggih dengan baseline; jika tidak jelas lebih baik, pakai baseline.

**Metode klasik.** Teknik seperti exponential smoothing dan model autoregressive integrated moving average (ARIMA), yang dijelaskan Wikipedia, menangani tren dan musiman untuk banyak deret dan sering sulit dikalahkan perangkat yang lebih kompleks. Keduanya juga lebih mudah dijelaskan.

**Metode pembelajaran mesin.** Metode yang mempelajari pola dari banyak variabel, seperti pohon regresi atau jaringan saraf, dapat memakai informasi tambahan, seperti peristiwa terencana. Wikipedia menjelaskan regression analysis dan machine learning secara umum. Mereka dapat berhasil baik bila ada banyak data relevan dan dapat overfit bila tidak. Lihat Topik 5.1 — AI dalam manajemen layanan.

**Overfitting dan validasi.** Model yang mencocokkan masa lalu terlalu rapat, termasuk derau, berkinerja buruk pada data baru. Wikipedia menjelaskan overfitting. Pertahanannya adalah menyisihkan data yang tidak dilihat model, dalam himpunan pelatihan, validasi, dan uji yang terpisah, seperti dijelaskan Wikipedia, dan menguji pada periode yang lebih akhir daripada yang dipakai membangun model. Untuk deret waktu ini disebut backtesting; Wikipedia menjelaskannya.

**Kebocoran (leakage).** Memakai informasi dalam model yang tidak tersedia pada saat prediksi, seperti kolom yang diisi setelah insiden terselesaikan. Wikipedia menjelaskan leakage in machine learning. Ia menghasilkan hasil uji mengesankan dan ramalan tak berguna.

**Ketidakpastian dan interval.** Ramalan adalah distribusi kemungkinan, bukan angka. Interval prediksi (prediction interval), yang dijelaskan di Wikipedia, memberi rentang yang diharapkan memuat hasil dengan probabilitas tertentu. Laporkan rentang, seperti "antara 8.000 dan 9.500 kontak, paling mungkin 8.700". Metode Monte Carlo, yang dijelaskan di Wikipedia, mensimulasikan banyak masa depan yang mungkin untuk menunjukkan rentang.

**Skenario.** Untuk hal yang bergantung pada keputusan atau peristiwa, seperti peluncuran, perencanaan skenario (scenario planning), yang dijelaskan di Wikipedia, mengembangkan beberapa cerita yang masuk akal dan merencanakan masing-masing, alih-alih satu ramalan. Pakai skenario ketika masa depan dapat berbeda jenisnya dari masa lalu.

**Ukuran akurasi.** Ukuran umum membandingkan ramalan dengan hasil, seperti mean absolute percentage error, yang dijelaskan Wikipedia, dan persentase hasil yang jatuh dalam rentang yang dinyatakan. Masing-masing punya kelemahan: kesalahan persentase tidak stabil ketika nilai mendekati nol. Pilih ukuran yang cocok dengan bagaimana kesalahan merugikan Anda.

**Klasifikasi dan skor risiko.** Memprediksi apakah sesuatu akan terjadi, seperti perubahan gagal atau tiket melanggar targetnya, menghasilkan skor. Wikipedia menjelaskan precision dan recall, dua cara prediksi semacam itu bisa salah: alarm palsu dan luputan. Peristiwa langka membuatnya sulit: Wikipedia menjelaskan base rate fallacy, di mana pendeteksi yang tampak baik menghasilkan sebagian besar alarm palsu ketika peristiwanya langka. Putuskan biaya setiap jenis kesalahan sebelum memilih ambang.

**Kalibrasi.** Skor risiko terkalibrasi jika, di antara butir yang dinilai 20 persen, sekitar 20 persen benar-benar terjadi. Wikipedia menjelaskan calibration in statistics. Skor yang meranking dengan baik tetapi tidak terkalibrasi dapat menyesatkan orang yang membacanya sebagai probabilitas.

**Drift.** Hubungan berubah seiring layanan, pengguna, dan perangkat berubah. Wikipedia menjelaskan concept drift. Model yang berfungsi tahun lalu dapat gagal setelah peluncuran produk baru. Pantau akurasi dari waktu ke waktu, dan latih ulang atau bangun ulang ketika turun.

**Peristiwa langka dan ekstrem.** Model yang dilatih pada riwayat biasa berkinerja buruk pada peristiwa yang sangat tak biasa. Wikipedia menjelaskan black swan theory, gagasan bahwa peristiwa langka berdampak besar tidak dapat diprediksi dari data biasa. Jangan mengandalkan ramalan untuk risiko ekor; pakai skenario, uji stres, dan latihan. Lihat Topik 3.12 — Manajemen Kontinuitas Layanan.

**Antrean dan kapasitas.** Ramalan permintaan menyuplai keputusan kapasitas. Teori antrean dan hukum Little, yang dijelaskan Wikipedia, mengaitkan permintaan, kapasitas, dan menunggu. Lihat Topik 3.11 — Ketersediaan, Kapasitas, dan Kinerja dan Topik 2.3 — Alur dan kanban.

**Keputusan lebih dulu.** Ramalan berguna hanya jika mengubah keputusan. Sebelum membangunnya, tuliskan keputusan yang diinformasikannya, ambang tindakan, dan apa yang akan Anda lakukan pada masing-masing. Jika tidak ada yang akan berubah, jangan meramalkan.

**Penilaian manusia.** Orang tahu tentang peluncuran, perubahan kebijakan, dan peristiwa yang belum dilihat model mana pun. Gabungkan keluaran model dengan penilaian, catat penyesuaian, dan periksa kemudian apakah membantu.

**Bagaimana lensa-lensa cocok.** Prediksi adalah sisi analitik yang menatap ke depan. Praktik agile memperlakukan ramalan sebagai hipotesis, disegarkan sering. Teknik AI memperluas apa yang dapat diprediksi, di bawah tinjauan dan dengan perhatian di atas. Otomatisasi dapat bertindak atas prediksi, seperti menskalakan mendahului permintaan, dengan batas.

## Praktik terbaik

1. **Nyatakan keputusan dan ambang lebih dulu.** Tuliskan tindakan apa yang dipicu setiap rentang ramalan, dan siapa yang memutuskan. Lewati ramalan yang tidak mengubah apa-apa.
2. **Mulai dengan baseline.** Bangun ramalan sederhana, seperti pola tahun lalu disesuaikan pertumbuhan, dan ukur kesalahannya. Pakai sebagai patokan yang harus dikalahkan.
3. **Utamakan metode yang dapat Anda jelaskan.** Pakai metode klasik atau model sederhana kecuali yang kompleks jelas lebih baik pada data yang disisihkan. Mampu mengatakan, dalam kata-kata sederhana, apa yang menggerakkan ramalan.
4. **Validasi dengan jujur.** Sisihkan periode terkini, lakukan backtest pada beberapa periode, dan periksa kebocoran. Laporkan kesalahan pada data yang tidak dilihat model.
5. **Tunjukkan rentang dan skenario.** Beri nilai paling mungkin dan rentang yang masuk akal. Pakai skenario di mana peristiwa dapat mengubah pola. Jangan menyajikan presisi palsu.
6. **Sertakan peristiwa yang diketahui.** Tambahkan peluncuran, tenggat, hari libur, dan kampanye dari orang yang mengetahuinya. Catat penyesuaian yang dibuat berdasarkan penilaian.
7. **Cocokkan ambang dengan biaya kesalahan.** Untuk skor risiko, putuskan biaya alarm palsu dan luputan, tetapkan ambang sesuai, dan periksa kalibrasi.
8. **Pantau akurasi dan drift.** Bandingkan setiap ramalan dengan hasil, lacak kesalahan dari waktu ke waktu, dan latih ulang atau bangun ulang ketika akurasi turun. Simpan log ramalan agar dapat diaudit.
9. **Jangan terlalu memercayai prediksi peristiwa langka.** Pakai skenario, uji stres, dan latihan untuk peristiwa parah tetapi tak mungkin.
10. **Tutup lingkar dengan keputusan.** Catat keputusan yang diambil dan hasilnya, dan pakai untuk memperbaiki ramalan dan aturan keputusan.

## Pertanyaan untuk dibahas bersama tim Anda

**Keputusan apa yang kita buat hari ini berdasarkan tebakan tentang masa depan, dan apa yang akan kita lakukan berbeda dengan yang lebih baik?**
Daftarkan: staf, kapasitas, waktu rilis. Harapkan beberapa. Lanjutkan dengan memilih satu dan menulis aturan keputusannya.

**Seberapa akurat tiga ramalan terakhir kita, dan bagaimana kita mengetahuinya?**
Minta angkanya. Harapkan bahwa tak seorang pun memeriksa. Lanjutkan dengan membandingkan ramalan lalu dengan kenyataan dan menyepakati menyimpan log.

**Apa ramalan paling sederhana yang mungkin berfungsi untuk ini, dan seberapa lebih baik model kompleks harus agar pantas dipakai?**
Bangun baseline. Harapkan ia berkinerja layak. Lanjutkan dengan menetapkan perbaikan minimum untuk mengadopsi yang lebih kompleks.

**Peristiwa apa yang kita ketahui yang tidak diketahui model yang dilatih pada riwayat?**
Daftarkan peluncuran, tenggat, dan perubahan kebijakan. Harapkan banyak. Lanjutkan dengan memutuskan cara menyertakannya, sebagai masukan atau penyesuaian.

**Bagaimana skor risiko untuk perubahan akan dipakai, dan berapa biaya alarm palsu dibanding luputan?**
Diskusikan secara konkret. Harapkan pandangan berbeda. Lanjutkan dengan menyepakati ambang dan tinjauan hasil bulan pertama.

**Di mana AI dapat membantu kita meramalkan atau memprediksi, dan bagaimana kita tahu ia salah?**
AI dapat mencocokkan pola kompleks dan juga mengarangnya. Minta perbandingan dengan baseline dan rencana memantau drift. Lanjutkan dengan menjalankan ramalan AI berdampingan dengan metode saat ini selama satu kuartal.

## Dalam praktik: contoh manajemen layanan

Sebuah lembaga pinjaman mahasiswa nasional menjalankan meja dukungan yang sepi sepanjang sebagian besar tahun dan kewalahan pada dua minggu sebelum tenggat permohonan tahunan. Sampai sekarang, kepala desk mengisi staf puncak dengan mengingat pengalaman tahun lalu dan menambah margin. Dua tahun lalu desk kekurangan staf, dan tahun lalu ia melampaui anggaran untuk agen sementara.

Analis layanan, diminta memperbaiki ramalan, mulai dengan keputusan: berapa agen yang dipesan enam minggu sebelumnya, dalam kelipatan lima, dengan penyesuaian akhir dua minggu sebelumnya. Ia membangun baseline: untuk setiap hari dalam empat tahun terakhir, jumlah kontak relatif terhadap jumlah hari menuju tenggat, diskalakan dengan jumlah pemohon sejauh ini. Pada data yang disisihkan dari tahun sebelumnya, kesalahan baseline pada minggu puncak adalah 18 persen. Ia mencoba model yang lebih kompleks yang menambahkan cuaca, sebutan di media sosial, dan hari dalam seminggu. Pada tahun yang disisihkan yang sama, ia memperbaiki kesalahan menjadi 15 persen, tetapi pada tahun sebelumnya ia lebih buruk daripada baseline, dan tak seorang pun dapat menjelaskan mengapa. Ia memilih baseline dengan penyesuaian sederhana untuk jumlah pemohon baru, dan menunjukkan kepada kepala sebuah rentang: 11.000 hingga 14.500 kontak pada minggu puncak, paling mungkin 12.500.

Ia bertanya kepada bisnis tentang peristiwa yang diketahui. Formulir daring baru akan diluncurkan dua minggu sebelum tenggat, yang dapat menaikkan atau menurunkan kontak. Ia membangun dua skenario: satu di mana formulir mengurangi kontak 15 persen, dan satu di mana ia menambah 10 persen karena kebingungan. Kepala memesan untuk tengah rentang, dengan kolam agen siaga untuk skenario atas. Analis mencatat ramalan, skenario, dan keputusan.

Yang berubah: kontak aktual pada minggu puncak adalah 13.800, dalam rentang, dan desk memenuhi targetnya tanpa melampaui anggaran. Yang masih sulit: peluncuran formulir memang menambah kebingungan, yang hanya diantisipasi skenario atas; ramalan bergantung pada data pemohon yang tiba terlambat; dan manajer senior meminta satu angka, yang diberikan analis bersama rentang. Ia mencatat kesalahannya, 10 persen terhadap nilai paling mungkin, dan berencana membandingkannya dengan baseline dan dengan tahun depan.

## Empat perspektif

### Tim produk dan pengiriman

Beri tahu analis tentang peluncuran, perubahan, dan kampanye lebih awal, karena mereka menggeser permintaan dan risiko. Sediakan data yang dibutuhkan prediksi, dan pakai skor risiko sebagai pemicu pertanyaan, bukan vonis.

### Tim layanan dan operasi

Pakai ramalan untuk merencanakan staf dan kapasitas, dengan margin untuk skenario atas. Laporkan di mana ramalan salah dan mengapa, agar metode membaik.

### Kepemimpinan dan tata kelola

Minta keputusan, baseline, rentang, dan rekam jejak akurasi. Terima ketidakpastian. Danai data dan waktu untuk memeriksa ramalan. Jangan menuntut angka tunggal.

### Pelanggan dan pengguna

Anda diuntungkan ketika penyedia bersiap untuk puncak dan risiko. Beri tahu penyedia tentang rencana Anda sendiri yang dapat memengaruhi permintaan, seperti kampanye, dan laporkan masalah yang menunjukkan ramalan meleset.

## Agile, AI, otomatisasi, dan analitik

### Agile

Perlakukan ramalan sebagai hipotesis, segarkan sering, dan periksa setelah setiap periode. Libatkan pemangku kepentingan dalam asumsi. Perhatian: meramal ulang terus-menerus tanpa mencatat ramalan sebelumnya menyembunyikan seberapa salahnya.

### AI

Metode AI dapat memodelkan banyak variabel dan sinyal tak terstruktur, dan dapat menyusun ringkasan ramalan, di bawah tinjauan. Tunjuk pemilik, bandingkan dengan baseline, dan pantau drift. Perhatian: ramalan AI tanpa rentang atau uji pada data yang disisihkan adalah tebakan dengan permukaan mengilap. Lihat Topik 5.1 — AI dalam manajemen layanan.

### Otomatisasi

Otomatiskan pengumpulan data, putaran ramalan, dan peringatan terjadwal, dan, bila aman, tindakan seperti menskalakan mendahului beban yang diharapkan, dengan batas. Perhatian: tindakan otomatis atas ramalan yang salah dapat membuang uang atau menimbulkan kerugian; tetapkan batas dan tinjau. Lihat Topik 6.1 — Strategi otomatisasi.

### Analitik

Ukur kesalahan ramalan, cakupan interval, kalibrasi skor risiko, dan nilai keputusan yang diambil. Perhatian: model dengan kesalahan rata-rata rendah dapat gagal pada puncak yang paling penting; evaluasi di tempat kesalahan paling merugikan. Lihat buku *Service Management Metrics* dan Topik 7.1 — Analitik untuk manajemen layanan.

## Mode kegagalan umum

- **Ramalan yang tidak mengubah apa-apa.** Tidak ada keputusan yang bergantung padanya. Mulai dari keputusan.
- **Model kompleks, tanpa baseline.** Tidak lebih baik dari yang sederhana. Selalu bandingkan.
- **Overfitting dan kebocoran.** Hasil uji bagus, kenyataan buruk. Sisihkan data lebih akhir dan periksa masukan.
- **Angka tunggal.** Presisi palsu. Tunjukkan rentang dan skenario.
- **Mengabaikan peristiwa yang diketahui.** Model melewatkan peluncuran. Tambahkan apa yang diketahui orang.
- **Tanpa pemantauan.** Drift tak terdeteksi. Lacak akurasi dari waktu ke waktu.
- **Memercayai prediksi peristiwa langka.** Risiko ekor salah dihargai. Pakai skenario dan latihan.

## Model kematangan

| Dimensi | Memulai | Mengembangkan | Menstandardisasi | Mengelola | Mengorkestrasi |
|---|---|---|---|---|---|
| Keputusan dan baseline | Tebakan | Beberapa ramalan | Ramalan terkait keputusan bernama, dengan baseline | Nilai ramalan ditinjau | Ramalan terintegrasi dalam perencanaan lintas layanan |
| Metode dan validasi | Tidak diperiksa | Metode dasar | Metode yang dapat dijelaskan, backtesting, dan pemeriksaan kebocoran | Metode dibandingkan dan diperbaiki | Metode dipilih dan dipantau lintas portofolio |
| Ketidakpastian | Angka tunggal | Beberapa rentang | Rentang dan skenario standar | Cakupan interval dan kalibrasi diukur | Ketidakpastian dipakai dalam keputusan otomatis dengan batas |
| Pemantauan | Tidak ada | Tinjauan sesekali | Akurasi dan drift dilacak | Pelatihan ulang dan pembangunan ulang dipicu bukti | Evaluasi berkelanjutan lintas model |

## Daftar periksa

- [ ] Setiap ramalan menyebut keputusan dan ambang yang diinformasikannya.
- [ ] Kami membandingkan setiap model dengan baseline sederhana.
- [ ] Kami memvalidasi pada data lebih akhir yang disisihkan dan memeriksa kebocoran.
- [ ] Kami melaporkan rentang dan memakai skenario di mana peristiwa dapat mengubah pola.
- [ ] Peristiwa yang diketahui dari bisnis disertakan atau dicatat sebagai penyesuaian.
- [ ] Skor risiko memiliki ambang yang ditetapkan oleh biaya alarm palsu dan luputan, dan kami memeriksa kalibrasi.
- [ ] Kami mencatat ramalan, membandingkannya dengan hasil, dan memantau drift.
- [ ] Kami memakai skenario dan latihan untuk peristiwa langka yang parah.

## Prompt AI

**Bangun baseline dari data.**

```text
Here is a monthly count of [quantity] for the last [number] years: [paste].
Describe the trend and seasonal pattern, produce a simple baseline forecast for the next [period] (state the method and show the calculation), and give an approximate range based on the spread in past years. Do not use any method that needs data I have not provided.
List what you are unsure of.
```

**Periksa laporan ramalan.**

```text
Here is a forecast report and how it was built: [paste].
List problems: no baseline comparison, no validation on held-back data, possible leakage, single numbers without ranges, missing known events, and claims that are stronger than the evidence. Quote the text for each. Do not redo the forecast.
List what you are unsure of.
```

**Susun skenario.**

```text
The decision: [describe]. The uncertain event: [describe]. What we know: [list].
Draft three scenarios (low, middle, high) with the assumption behind each, what we would see early if it were happening, and how our plan would differ. Do not assign probabilities.
List what you are unsure of.
```

## Skill AI

- [demand-forecasting](../../../../skills/demand-forecasting/SKILL.md): gunakan untuk memperkirakan permintaan masa depan dengan ketidakpastian yang dinyatakan.
- [capacity-planning](../../../../skills/capacity-planning/SKILL.md): gunakan untuk mengubah ramalan menjadi keputusan kapasitas.
- [trend-analysis](../../../../skills/trend-analysis/SKILL.md): gunakan untuk menganalisis tren dan musiman.
- [statistical-analysis](../../../../skills/statistical-analysis/SKILL.md): gunakan untuk memilih dan memeriksa metode.
- [budget-forecasting](../../../../skills/budget-forecasting/SKILL.md): gunakan untuk meramalkan biaya dengan asumsi.

## Sumber utama

- Rob J. Hyndman dan George Athanasopoulos, *Forecasting: Principles and Practice* (gratis daring di otexts.com/fpp3): teks yang jelas dan praktis tentang metode peramalan.
- Nate Silver, *The Signal and the Noise* (2012): uraian mudah dibaca tentang prediksi dan jebakannya.
- Wikipedia, "Forecasting" dan "Overfitting": ikhtisar bidang ini dan jebakan utamanya.
- Wikipedia, "Prediction interval": cara menyatakan ketidakpastian.

## Referensi

1. Forecasting — Wikipedia — https://en.wikipedia.org/wiki/Forecasting
2. Predictive analytics — Wikipedia — https://en.wikipedia.org/wiki/Predictive_analytics
3. Time series — Wikipedia — https://en.wikipedia.org/wiki/Time_series
4. Seasonality — Wikipedia — https://en.wikipedia.org/wiki/Seasonality
5. Exponential smoothing — Wikipedia — https://en.wikipedia.org/wiki/Exponential_smoothing
6. Autoregressive integrated moving average — Wikipedia — https://en.wikipedia.org/wiki/Autoregressive_integrated_moving_average
7. Overfitting — Wikipedia — https://en.wikipedia.org/wiki/Overfitting
8. Backtesting — Wikipedia — https://en.wikipedia.org/wiki/Backtesting
9. Prediction interval — Wikipedia — https://en.wikipedia.org/wiki/Prediction_interval
10. Scenario planning — Wikipedia — https://en.wikipedia.org/wiki/Scenario_planning
11. Concept drift — Wikipedia — https://en.wikipedia.org/wiki/Concept_drift
12. Base rate fallacy — Wikipedia — https://en.wikipedia.org/wiki/Base_rate_fallacy
