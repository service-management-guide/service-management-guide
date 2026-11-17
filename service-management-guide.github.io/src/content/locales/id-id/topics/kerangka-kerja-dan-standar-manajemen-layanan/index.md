# Kerangka kerja dan standar manajemen layanan

**ISO/IEC 20000, COBIT, VeriSM, FitSM, dan IT4IT saling tumpang tindih dengan ITIL dan satu sama lain: masing-masing menjawab pertanyaan yang berbeda (apa yang disertifikasi, bagaimana menata kelola, bagaimana mengelola di seluruh organisasi, bagaimana memulai dengan ringan, bagaimana memodelkan TI sebagai bisnis), jadi pilihlah berdasarkan pertanyaan yang Anda miliki, bukan berdasarkan logonya.**

## Mengapa ini penting

Tim yang mengadopsi manajemen layanan bertemu dengan deretan kerangka kerja dan standar. Petugas pengadaan meminta sertifikasi ISO/IEC 20000. Auditor merujuk COBIT. Konsultan menyarankan VeriSM untuk era digital. Tim kecil menemukan FitSM dan bertanya-tanya mengapa ITIL tampak begitu berat. Masing-masing digambarkan pendukungnya sebagai jawabannya, dan uraian itu jarang menyebutkan untuk apa masing-masing.

Risikonya adalah kebingungan yang berbiaya nyata: mensertifikasi terhadap standar yang tidak cocok dengan kontrak Anda, atau mengadopsi kerangka kerja untuk peran yang tidak pernah dirancangkan baginya. Kerangka kerja adalah panduan; standar adalah sekumpulan persyaratan yang terhadapnya auditor dapat mensertifikasi sebuah organisasi. Keduanya berbeda, dan mencampurkannya menyebabkan usaha yang sia-sia.

Topik ini menyajikan perbandingan yang netral. Ia bukan manual kepatuhan dan tidak memberikan nasihat hukum atau audit. Untuk setiap kerangka kerja, ia menyebutkan tujuan, jenis dokumennya, dan pertanyaan yang dibantunya. Rincian berubah, jadi periksa publikasi terkini dari setiap pemilik sebelum mengandalkan pernyataan apa pun di sini, termasuk versi ITIL yang dibahas di Topik 1.3 — ITIL 5.

## Konsep inti

**Kerangka kerja versus standar.** Kerangka kerja menawarkan konsep, praktik, dan saran yang Anda sesuaikan. Standar menetapkan persyaratan, biasanya dirumuskan dengan "harus" (shall), yang terhadapnya organisasi dapat dinilai. ITIL adalah kerangka kerja: orang disertifikasi, organisasi tidak. ISO/IEC 20000 adalah standar: organisasi dapat diaudit dan disertifikasi terhadapnya.

**ITIL.** Panduan untuk manajemen layanan TI, kini dimiliki PeopleCert, dengan praktik, model nilai, dan skema sertifikasi untuk orang. Lihat Topik 1.2 — ITIL.

**ISO/IEC 20000.** Standar internasional untuk sistem manajemen layanan, diterbitkan bersama oleh International Organization for Standardization dan International Electrotechnical Commission. Bagian 1 menetapkan persyaratan untuk membangun, menerapkan, memelihara, dan memperbaiki sistem manajemen layanan (SMS). Organisasi disertifikasi oleh badan terakreditasi. Standar ini sering dipilih ketika pelanggan atau regulator meminta bukti independen tentang disiplin manajemen layanan. Strukturnya kompatibel dengan standar sistem manajemen ISO lainnya.

**COBIT.** Kerangka kerja dari ISACA untuk tata kelola dan manajemen informasi dan teknologi perusahaan. Cakupannya lebih luas daripada manajemen layanan: ia membahas bagaimana dewan dan manajemen mengarahkan dan mengawasi teknologi, dengan tujuan tata kelola, tujuan manajemen, dan pengukuran kinerja. Ia sering dipakai oleh auditor dan tim risiko, dan organisasi lazim memakainya bersama ITIL, dengan COBIT menjelaskan apa yang diharapkan tata kelola dan ITIL menjelaskan bagaimana layanan dijalankan.

**VeriSM.** Pendekatan manajemen layanan untuk organisasi yang menawarkan layanan digital, dari sebuah kelompok dalam komunitas manajemen layanan. Ia menguraikan "prinsip manajemen layanan" tingkat organisasi dan sebuah management mesh yang terdiri dari sumber daya, lingkungan, praktik manajemen, dan teknologi baru, yang dimaksudkan agar organisasi dapat menggabungkan berbagai praktik. Ia bukan pengganti kerangka kerja praktik; ia adalah cara menata beberapa kerangka kerja. Periksa situs pemiliknya untuk rincian terkini.

**FitSM.** Keluarga standar ringan untuk manajemen layanan TI, lahir dari proyek riset Eropa, dirancang agar sederhana dan gratis dipakai. Ia menguraikan sedikit proses dengan serangkaian persyaratan yang jelas, dan sering dipertimbangkan oleh organisasi kecil dan menengah serta lingkungan TI federasi yang merasa kerangka kerja lebih besar terlalu berat.

**IT4IT.** Arsitektur acuan dari The Open Group untuk mengelola bisnis TI, dimodelkan sebagai aliran nilai (seperti strategy to portfolio, requirement to deployment, request to fulfill, dan detect to correct) yang didukung oleh komponen informasi dan fungsional. Ia berguna ketika Anda ingin merancang bagaimana perangkat dan data saling cocok di seluruh siklus hidup TI, dan melengkapi praktik ITIL.

**Standar terkait.** ISO/IEC 27001 menetapkan persyaratan untuk sistem manajemen keamanan informasi (lihat Topik 3.13 — Manajemen Keamanan Informasi). ISO/IEC 19770 mencakup manajemen aset TI (lihat Topik 4.1 — Manajemen aset). ISO/IEC 42001, diterbitkan pada 2023, menetapkan persyaratan untuk sistem manajemen kecerdasan buatan (lihat Topik 5.6 — Tata kelola, risiko, dan kepatuhan AI). Standar yang berbagi struktur dapat digabung dalam satu sistem manajemen, yang mengurangi usaha ganda.

**DevOps, SRE, dan agile tidak ada dalam daftar ini.** Semuanya adalah gerakan dan pendekatan, bukan kerangka kerja dalam pengertian ini, meski tumpang tindih dengan praktik di sini. Lihat Topik 2.5 — DevOps dan Topik 2.6 — Site Reliability Engineering.

**Model kematangan.** Capability Maturity Model Integration (CMMI) menilai kapabilitas proses dan kadang dipakai untuk pekerjaan layanan. Panduan ini memakai model kematangan lima tingkat miliknya sendiri (Memulai, Mengembangkan, Menstandardisasi, Mengelola, Mengorkestrasi), yang merupakan alat penilaian mandiri, bukan sertifikasi.

**Bagaimana lensa-lensa cocok.** Setiap kerangka kerja telah direvisi, atau sedang direvisi, untuk mencerminkan cara kerja agile, AI, otomatisasi, dan data. Periksa edisi terkini untuk melihat bagaimana masing-masing memperlakukan hal itu, dan anggap ringkasan apa pun, termasuk ini, sebagai penunjuk menuju sumbernya.

## Praktik terbaik

1. **Mulai dari pertanyaan.** Tuliskan apa yang Anda butuhkan: bukti independen untuk pelanggan, struktur tata kelola untuk dewan, cara yang lebih ringan untuk memulai, cara menata beberapa praktik. Pilih kerangka kerja atau standar yang menjawabnya.
2. **Periksa apa yang sebenarnya dipersyaratkan pelanggan atau regulator.** Jika kontrak berbunyi "tersertifikasi ISO/IEC 20000", tidak ada kerangka kerja lain yang memenuhinya. Jika berbunyi "praktik yang baik", Anda punya pilihan. Bacalah klausulnya.
3. **Jangan bersertifikasi demi sertifikasi itu sendiri.** Sertifikasi memerlukan usaha dan audit berkelanjutan. Lakukan ketika seseorang yang penting membutuhkan buktinya, dan bangun praktik dasarnya lebih dulu.
4. **Baca teks dari pemilik.** Untuk setiap persyaratan atau definisi yang akan Anda kutip, gunakan standar atau kerangka kerja itu sendiri, dan catat edisi serta tanggalnya. Ringkasan, termasuk pos blog, cenderung bergeser.
5. **Gabungkan di tingkat praktik.** Banyak organisasi memakai ITIL untuk praktik, ISO/IEC 20000 untuk sertifikasi, COBIT untuk tata kelola, dan IT4IT untuk arsitektur. Petakan setiap praktik ke persyaratan yang didukungnya satu kali, alih-alih menulis prosedur terpisah untuk masing-masing.
6. **Berbagi sistem manajemen.** Di mana standar berbagi struktur, jalankan satu set dokumen, audit, dan rapat tinjauan. Satu tinjauan manajemen yang mencakup layanan, keamanan, dan AI lebih murah dan lebih jelas daripada tiga.
7. **Mulailah kecil jika Anda kecil.** Kerangka kerja yang dirancang untuk perusahaan besar dapat membebani tim berisi sepuluh orang. Pertimbangkan opsi yang lebih ringan seperti FitSM atau beberapa praktik terpilih.
8. **Jadikan bukti sebagai produk sampingan.** Rancang pipeline dan perangkat agar catatan yang diinginkan auditor dihasilkan oleh pekerjaan normal, bukan disusun belakangan.
9. **Perlakukan kerangka kerja sebagai sumber pertanyaan.** Gunakan masing-masing untuk bertanya apa yang mungkin Anda lewatkan, dan periksa jawabannya terhadap bukti Anda sendiri.
10. **Tinjau kembali pilihannya.** Kebutuhan berubah. Tinjau setiap tahun apakah Anda masih membutuhkan setiap sertifikasi atau kerangka kerja, dan berapa biayanya.

## Pertanyaan untuk dibahas bersama tim Anda

**Masalah apa yang hendak kita pecahkan dengan kerangka kerja atau standar, dan siapa yang memintanya?**
Ini dimulai dari kebutuhan. Anda mungkin mendengar bahwa "semua orang memakainya" atau bahwa seorang auditor menyebutkannya. Minta dokumen atau klausul kontraknya. Lanjutkan dengan menuliskan kebutuhan dalam satu kalimat dan menguji setiap opsi terhadapnya.

**Pelanggan atau regulator kita yang mana yang mensyaratkan sertifikasi, dan terhadap apa?**
Persyaratan sering diasumsikan. Periksa kontrak, tender, dan panduan regulator. Harapkan kejutan ke kedua arah: persyaratan yang tidak diperhatikan siapa pun, atau tidak ada di tempat orang mengira ada. Lanjutkan dengan mendaftar bukti yang dibutuhkan masing-masing.

**Di mana kita memelihara dokumen terpisah untuk praktik yang sama karena kerangka kerja berbeda memintanya?**
Pertanyaan ini menemukan duplikasi. Contoh umum mencakup prosedur insiden terpisah untuk layanan dan keamanan. Tanyakan siapa yang menjaganya tetap selaras. Lanjutkan dengan memilih satu praktik untuk dideskripsikan sekali dan dipetakan ke setiap persyaratan.

**Seperti apa versi paling ringan dari manajemen layanan bagi kita?**
Pertanyaan ini menguji apakah kita membangun berlebihan. Harapkan tekanan untuk mengadopsi setiap praktik. Tanyakan dua atau tiga praktik mana yang akan menghilangkan paling banyak kesulitan. Lanjutkan dengan memilih praktik-praktik itu dan menunda sisanya.

**Bukti apa yang diminta audit kita, dan dapatkah perangkat kita menghasilkannya secara otomatis?**
Audit adalah biaya menjalankan bisnis. Tim sering menyusun bukti secara manual setiap tahun. Tanyakan apa yang sebenarnya diperiksa auditor. Lanjutkan dengan memilih satu catatan untuk dihasilkan dari pipeline atau perangkat tiket.

**Bagaimana kita tahu bahwa sertifikasi memperbaiki layanan kita, dan bukan hanya dokumen kita?**
Pertanyaan ini mengaitkan sertifikasi dengan hasil. Harapkan jawaban jujur bahwa sulit untuk mengatakannya. Tanyakan apa yang akan kita ukur sebelum dan sesudah, seperti waktu pemulihan layanan. Lanjutkan dengan menyepakati ukuran dan tanggal tinjauan.

## Dalam praktik: contoh manajemen layanan

Perusahaan layanan terkelola regional menyediakan dukungan TI untuk sekitar 60 klinik kecil. Pelanggan baru, sebuah grup rumah sakit, menanyakan dalam tender apakah perusahaan "tersertifikasi standar manajemen layanan yang diakui". Kepala penjualan mengira itu berarti sertifikat ITIL dan mendaftar kualifikasi para teknisi.

Manajer layanan membaca tender itu. Tender tersebut menyebut ISO/IEC 20000-1 secara eksplisit. Ia menjelaskan bahwa sertifikat ITIL individu tidak memenuhi persyaratan, karena sebuah organisasi harus diaudit. Ia membandingkan persyaratan standar dengan apa yang dilakukan perusahaan. Penanganan insiden dan perubahan sudah baik dan terdokumentasi, tetapi tidak ada tinjauan manajemen formal, tidak ada pelaporan tingkat layanan yang terdokumentasi, dan perjanjian pemasok diarsipkan secara tidak merata.

Perusahaan memutuskan mengajukan penawaran bersyarat, dengan rencana mencapai sertifikasi dalam setahun. Perusahaan menulis dokumen sistem manajemen layanan yang sederhana, menjadwalkan tinjauan manajemen triwulanan yang juga mencakup keamanan informasi, dan mengatur perangkat tiket untuk menghasilkan laporan yang akan diinginkan auditor. Perusahaan memilih rute yang lebih ringan untuk klinik terkecilnya, berdasarkan beberapa praktik inti, agar usahanya tidak membebani mereka.

Yang berubah: perusahaan dapat menjawab tender dengan jujur dan memiliki rencana. Yang masih sulit: jadwal audit bergantung pada ketersediaan badan terakreditasi, laporan belum mencerminkan prioritas nyata klinik, dan tim tidak yakin seberapa banyak dokumentasi yang cukup. Mereka sepakat meminta panduan dari badan sertifikasi sejak dini dan menjaga dokumen tetap singkat.

## Empat perspektif

### Tim produk dan pengiriman

Harapkan pertanyaan tentang catatan dan kontrol dari auditor, dan rancang pipeline Anda untuk menghasilkannya. Pelajari praktik Anda yang mana melayani persyaratan suatu standar, agar Anda dapat menjelaskan mengapa suatu kontrol ada.

### Tim layanan dan operasi

Jaga agar prosedur akurat dan simpan catatan saat Anda bekerja, agar bukti ada tanpa usaha tambahan. Berkontribusilah pada tinjauan manajemen dengan data nyata, dan beri tahu pemilik ketika suatu persyaratan canggung dipenuhi.

### Kepemimpinan dan tata kelola

Putuskan sertifikasi mana yang sepadan dengan biayanya, dan minta klausul kontrak atau kebutuhan pelanggan yang membenarkan masing-masing. Danai satu sistem manajemen alih-alih beberapa. Minta bukti bahwa praktik berfungsi, bukan hanya bahwa dokumen ada.

### Pelanggan dan pengguna

Jika Anda mensyaratkan sertifikasi, sebutkan standar mana dan cakupan apa. Tanyakan kepada penyedia apa yang dicakup sertifikat, layanan, lokasi, dan tanggal apa. Sertifikat adalah bukti suatu sistem, bukan jaminan atas satu hasil mana pun.

## Agile, AI, otomatisasi, dan analitik

### Agile

Bangun praktik dalam peningkatan kecil dan tangkap bukti sambil berjalan, dengan pemangku kepentingan meninjau sistem secara berkala. Perhatian: standar memerlukan praktik yang terdokumentasi dan dapat diulang; jangan memakai "kami agile" untuk menghindari penjelasan tentang bagaimana pekerjaan dikendalikan.

### AI

AI dapat membantu membandingkan persyaratan antarstandar, menyusun draf pemetaan, dan merangkum temuan audit, dengan seseorang memverifikasi masing-masing terhadap teks sumber. Standar sistem manajemen AI kini ada (ISO/IEC 42001), begitu pula NIST AI Risk Management Framework; lihat Topik 5.6 — Tata kelola, risiko, dan kepatuhan AI. Perhatian: AI dapat mengarang nomor klausul atau persyaratan, jadi berikan teksnya dan minta ia mengutip.

### Otomatisasi

Hasilkan bukti dari pipeline dan perangkat, seperti catatan perubahan yang terhubung ke build, tinjauan akses yang diekspor secara terjadwal, dan laporan tingkat layanan yang dibuat otomatis. Perhatian: bukti otomatis membuktikan bahwa otomatisasi berjalan, bukan bahwa kontrolnya efektif; tinjau sampel secara manual.

### Analitik

Gunakan data untuk menunjukkan bahwa praktik berfungsi, seperti waktu pemulihan layanan dan perubahan yang menyebabkan insiden, dan untuk mempersiapkan audit dengan mendaftar kesenjangan. Perhatian: indikator yang terkait sertifikasi, seperti jumlah temuan audit yang ditutup, bisa dimanipulasi; lihat buku *Service Management Metrics* dan Topik 7.3 — Pengukuran dan pelaporan.

## Mode kegagalan umum

- **Menyamakan sertifikat pribadi dengan sertifikasi organisasi.** Penawaran gagal karena soal teknis. Baca persyaratannya dan ketahui jenis sertifikasi mana yang disebutkan.
- **Bersertifikasi sebelum membangun praktik.** Organisasi lulus audit dan tidak ada yang membaik. Bangun dan ukur praktik lebih dulu.
- **Memelihara sistem paralel.** Setiap kerangka kerja mendapat dokumen dan pemilik sendiri. Petakan sekali dan bagikan.
- **Memakai kerangka kerja berat untuk tim kecil.** Staf tenggelam dalam dokumentasi. Pilih opsi yang lebih ringan atau beberapa praktik.
- **Mengutip ringkasan sebagai standar.** Suatu persyaratan dilaporkan keliru. Baca teks pemilik dan catat edisinya.
- **Memperlakukan kerangka kerja sebagai tujuan.** Kepatuhan menggantikan hasil. Ukur apa yang dialami pelanggan.

## Model kematangan

| Dimensi | Memulai | Mengembangkan | Menstandardisasi | Mengelola | Mengorkestrasi |
|---|---|---|---|---|---|
| Pilihan kerangka kerja | Dipilih karena kebiasaan atau tren | Kebutuhan didaftar | Pilihan terkait dengan kebutuhan dan persyaratan tertulis | Pilihan ditinjau dengan biaya dan manfaat | Pilihan dikoordinasikan di seluruh perusahaan |
| Sistem manajemen | Dokumen terpisah per kerangka kerja | Sebagian berbagi | Satu sistem dipetakan ke beberapa persyaratan | Sistem ditinjau dan diperbaiki berdasarkan bukti | Sistem terintegrasi lintas layanan, keamanan, dan AI |
| Bukti | Disusun sebelum audit | Sebagian catatan disimpan | Catatan dihasilkan oleh pekerjaan normal | Kualitas bukti disampel dan ditinjau | Bukti berkelanjutan dan otomatis dengan tinjauan manusia |
| Disiplin sumber | Ringkasan dipakai | Teks pemilik dibaca oleh sedikit orang | Edisi dicatat dan dikutip | Pembaruan dilacak dan ditindaklanjuti | Pengetahuan persyaratan yang dibagikan dan bertanggal |

## Daftar periksa

- [ ] Kami menuliskan mengapa kami membutuhkan setiap kerangka kerja atau standar.
- [ ] Kami tahu pelanggan atau regulator mana yang mensyaratkan sertifikasi, dan terhadap apa.
- [ ] Kami membaca teks pemilik untuk apa pun yang kami kutip, dan mencatat edisinya.
- [ ] Kami memetakan praktik ke persyaratan sekali saja, bukan per kerangka kerja.
- [ ] Tinjauan manajemen kami mencakup setiap standar yang kami pakai.
- [ ] Bukti dihasilkan oleh pekerjaan normal bila memungkinkan.
- [ ] Kami meninjau setiap tahun apakah setiap sertifikasi masih sepadan dengan biayanya.
- [ ] Tim terkecil kami memiliki rute yang lebih ringan.

## Prompt AI

**Bandingkan dua set persyaratan.**

```text
Below is text from requirement set A: [paste clauses]. Below is text from requirement set B: [paste clauses].
Produce a table of overlaps and differences, quoting the exact words of each. Use only the text provided and do not use outside knowledge. Mark any match you are unsure about.
List what you are unsure of.
```

**Susun draf analisis kesenjangan dari deskripsi praktik kita.**

```text
Here is a description of how we run [practice, such as incident management]: [paste description]. Here is the requirement text: [paste clauses].
For each clause, say whether the description appears to meet, partly meet, or not address it, quote the words you relied on, and list a question to confirm. Do not give a verdict on certification.
List what you are unsure of.
```

**Siapkan pertanyaan untuk badan sertifikasi.**

```text
We are considering certification to [standard] for [scope]. Our size and context: [describe].
Write twelve questions to ask a certification body about scope, timeline, evidence, cost, and surveillance audits. Avoid assuming answers.
List what you are unsure of.
```

## Skill AI

- [maturity-models](../../../../skills/maturity-models/SKILL.md): gunakan untuk penilaian mandiri terhadap kerangka kerja terpilih tanpa menyiratkan sertifikasi.
- [compliance-testing](../../../../skills/compliance-testing/SKILL.md): gunakan untuk memeriksa bukti terhadap persyaratan.
- [service-level-agreement](../../../../skills/service-level-agreement/SKILL.md): gunakan ketika standar meminta tingkat layanan yang terdokumentasi.

## Sumber utama

- ISO, ISO/IEC 20000-1 (standar itu sendiri): persyaratan untuk sistem manajemen layanan; baca edisi terkini dari penerbitnya.
- ISACA, publikasi COBIT: deskripsi pemilik tentang tujuan tata kelola dan manajemen.
- The Open Group, standar IT4IT: arsitektur acuan dari pemiliknya.
- Wikipedia, "ISO/IEC 20000" dan "COBIT": ringkasan netral yang menunjuk ke para pemiliknya.

## Referensi

1. ISO/IEC 20000 — Wikipedia — https://en.wikipedia.org/wiki/ISO/IEC_20000
2. COBIT — Wikipedia — https://en.wikipedia.org/wiki/COBIT
3. ISACA — Wikipedia — https://en.wikipedia.org/wiki/ISACA
4. FitSM — Wikipedia — https://en.wikipedia.org/wiki/FitSM
5. The Open Group — Wikipedia — https://en.wikipedia.org/wiki/The_Open_Group
6. ISO/IEC 27001 — Wikipedia — https://en.wikipedia.org/wiki/ISO/IEC_27001
7. ISO/IEC 19770 — Wikipedia — https://en.wikipedia.org/wiki/ISO/IEC_19770
8. Capability Maturity Model Integration — Wikipedia — https://en.wikipedia.org/wiki/Capability_Maturity_Model_Integration
9. ITIL — Wikipedia — https://en.wikipedia.org/wiki/ITIL
10. IT service management — Wikipedia — https://en.wikipedia.org/wiki/IT_service_management
