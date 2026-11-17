# ITIL

**ITIL adalah kumpulan panduan yang paling banyak dipakai untuk manajemen layanan TI, ditulis oleh pemerintah Inggris pada 1980-an dan kini dimiliki PeopleCert; perlakukan ia sebagai pustaka gagasan yang disesuaikan berdasarkan bukti, bukan standar yang bisa lulus atau gagal.**

## Mengapa ini penting

ITIL muncul dalam lowongan kerja, kontrak pemasok, dan katalog pelatihan di seluruh dunia. Banyak orang memakai kata itu untuk menyebut proses tertentu, seperti change advisory board, atau perangkat tertentu. Kedua pemakaian itu terlalu sempit, dan keduanya menimbulkan perdebatan yang sebenarnya tentang hal lain.

Mengetahui asal-usul ITIL menjelaskan mengapa ia terbaca seperti sekarang. Ia bermula sebagai saran praktis untuk menjalankan pusat komputer pemerintah yang besar, berkembang menjadi serangkaian buku proses, lalu menjadi kumpulan praktik dan model nilai yang lebih luas. Setiap tahap meninggalkan kosakata. Tim yang memahami sejarahnya dapat membedakan bagian mana yang menjawab masalah nyata saat ini dan mana yang hanya kebiasaan warisan.

ITIL juga berada di dalam bidang yang lebih besar. Ia hanya salah satu kerangka kerja di antara beberapa lainnya (lihat Topik 1.8 — Kerangka kerja dan standar manajemen layanan), dan versi terbarunya punya topik tersendiri (lihat Topik 1.3 — ITIL 5). Topik ini memberikan latar belakang dan peta isi ITIL, agar bagian lain panduan ini dapat memakai istilahnya dengan hati-hati.

## Konsep inti

**Asal-usul.** ITIL adalah singkatan dari Information Technology Infrastructure Library. Menurut Wikipedia, ITIL dikembangkan pada 1980-an oleh Central Computer and Telecommunications Agency (CCTA), lembaga pemerintah Inggris, untuk meningkatkan kualitas dan efisiensi TI pemerintah. Bentuk pertamanya adalah serangkaian besar buku. Kemudian tanggung jawabnya berpindah ke Office of Government Commerce (OGC) lalu ke badan lain; periksa sumber di bawah untuk detailnya, karena kepemilikan telah berpindah tangan lebih dari sekali.

**Versi.** Dalam ringkasan yang lazim dipakai: versi 1 adalah buku-buku aslinya; versi 2 (sekitar 2001) mengelompokkannya kembali menjadi rangkaian seperti dukungan layanan dan penyampaian layanan; versi 3 (2007), diperbarui pada 2011, menata panduan di sekitar siklus hidup layanan yang terdiri dari strategi, desain, transisi, operasi, dan perbaikan berkelanjutan; ITIL 4 (2019) menggantikan siklus hidup dengan sistem nilai layanan dan sekumpulan praktik; ITIL (Versi 5) diperkenalkan oleh PeopleCert pada 2026. Tanggal dalam daftar ini berasal dari rujukan umum dan bisa berbeda satu tahun antarsumber, jadi konfirmasikan tanggal yang Anda andalkan kepada pemiliknya.

**Kepemilikan.** Pemilik ITIL saat ini adalah PeopleCert, perusahaan sertifikasi. Pemilik menerbitkan panduan, menjalankan skema sertifikasi, dan melisensikan penyedia pelatihan. Konsekuensi praktisnya adalah bahwa teks lengkapnya merupakan publikasi berlisensi, bahwa terminologi resmi berasal dari pemilik, dan bahwa apa pun yang disebut "ITIL" oleh pihak ketiga perlu diperiksa terhadap rumusan terkini dari pemilik.

**Praktik terbaik, atau praktik umum.** ITIL sering disebut "praktik terbaik". Pembacaan yang lebih bersahaja dan lebih akurat adalah bahwa ITIL mencatat praktik yang dianggap berguna oleh banyak organisasi. Ia tidak membuktikan bahwa suatu praktik berhasil dalam konteks Anda. Panduan ini meminta Anda menguji setiap praktik terhadap bukti Anda sendiri.

**Isi ITIL 4.** Sistem nilai layanan (SVS) menjelaskan bagaimana peluang dan permintaan menjadi nilai, melalui tata kelola, rantai nilai layanan, praktik, prinsip panduan, dan perbaikan berkelanjutan (lihat Topik 1.4 — Sistem nilai layanan). Empat dimensi membingkai apa yang dibutuhkan setiap layanan: organisasi dan orang, informasi dan teknologi, mitra dan pemasok, serta aliran nilai dan proses (lihat Topik 1.6 — Empat Dimensi Manajemen Layanan). Tujuh prinsip panduan ada di Topik 1.5 — Prinsip Panduan ITIL, dan enam aktivitas rantai nilai ada di Topik 1.7 — Rantai Nilai Layanan. ITIL 4 menguraikan 34 praktik dalam tiga kelompok: manajemen umum, manajemen layanan, dan manajemen teknis. Bagian 3 panduan ini membahas yang utama.

**Sertifikasi.** Sertifikasi ITIL berlaku untuk orang, secara bertahap dari tingkat foundation hingga tingkat yang lebih tinggi. Ia tidak mensertifikasi organisasi. Organisasi yang menginginkan standar yang diaudit secara eksternal biasanya melirik ISO/IEC 20000. Sertifikat menunjukkan bahwa seseorang telah mempelajari materinya; ia tidak menunjukkan bahwa orang itu mampu menjalankan suatu praktik.

**Hubungan dengan agile dan DevOps.** Versi-versi awal ITIL terbaca sekuensial, terkontrol, dan sarat dokumen. Pembacaan itu sering benar pada zamannya dan untuk teknologinya, dan membuat banyak tim agile menganggap ITIL sebagai musuh. ITIL 4 secara eksplisit terhubung dengan gagasan agile, lean, dan DevOps. Topik 2.5 — DevOps membahas hubungan keduanya, dan Topik 2.9 — Manajemen Layanan Agile membahas penerapan nilai-nilai agile pada praktik itu sendiri.

## Praktik terbaik

1. **Baca teks dari pemilik untuk istilah yang penting.** Untuk definisi yang akan Anda kutip, seperti layanan, insiden, atau perubahan, bacalah rumusan yang diterbitkan pemilik dan kutip. Ringkasan pihak ketiga cenderung bergeser.
2. **Sesuaikan, jangan adopsi secara menyeluruh.** Pilih praktik yang menjawab masalah yang Anda miliki. Mulailah dari posisi Anda sekarang, dan tambahkan struktur hanya bila itu menyelesaikan sesuatu yang bisa dirasakan pelanggan atau staf.
3. **Ingat sejarahnya saat membaca materi lama.** Proses yang dirancang untuk rilis jarang ke server fisik perlu dipikirkan ulang untuk continuous delivery. Tanyakan masalah apa yang dulu diselesaikan panduan itu, lalu tanyakan apakah Anda masih memiliki masalah itu.
4. **Gunakan praktik, bukan departemen.** Sebuah praktik melintasi banyak tim. Jangan membuat "departemen insiden" hanya karena ITIL punya praktik insiden; pastikan pekerjaannya terlaksana dengan baik di mana pun letaknya.
5. **Beri label klaim ITIL menurut versi.** Tulis "dalam ITIL 4" atau "dalam ITIL 5" agar pembaca tahu mana yang sedang dibaca, dan simpan catatan bertanggal tentang apa yang Anda verifikasi dari pemilik.
6. **Pisahkan sertifikasi dari kapabilitas.** Danai pelatihan bagi orang yang membutuhkannya, dan nilai kesiapan dari kinerja yang teramati: dapatkah tim menjalankan insiden besar, atau memperkirakan risiko suatu perubahan?
7. **Padukan ITIL dengan sudut pandang rekayasa.** Gabungkan praktiknya dengan praktik pengiriman seperti pengujian otomatis, infrastruktur sebagai kode, dan pengembangan berbasis trunk, agar kontrol terbangun di dalam pekerjaan.
8. **Buat pemilik setiap praktik menjadi eksplisit.** Tunjuk satu orang yang bertanggung jawab atas cara praktik berjalan, yang dapat mengubahnya dan memperbaikinya bersama tim yang mengerjakannya.
9. **Tinjau praktik berdasarkan bukti.** Lihat apa yang dihasilkan praktik itu, seperti waktu pemulihan layanan atau persentase perubahan yang menyebabkan insiden, dan ubah praktiknya bila bukti menyatakan demikian.
10. **Jaga terminologi tetap konsisten namun ringan.** Pakai kosakata bersama di tempat ia membantu orang dari tim berbeda saling memahami, dan buang istilah yang hanya menciptakan seremoni.

## Pertanyaan untuk dibahas bersama tim Anda

**Apa yang kita maksud ketika mengatakan "ITIL"? Sebuah proses, perangkat, sertifikat, kerangka kerja, atau kebiasaan?**
Orang memakai kata itu untuk hal yang berbeda, dan perdebatan tentang ITIL sering kali perdebatan tentang makna. Minta contoh dari setiap orang. Anda mungkin akan mendengar campuran antara rapat tertentu, perangkat tiket, dan kursus pelatihan. Lanjutkan dengan menuliskan satu kalimat yang disepakati tentang arti ITIL bagi kita.

**Praktik kita yang mana yang ada karena ITIL, dan masalah apa yang dipecahkan masing-masing saat ini?**
Pertanyaan ini memisahkan praktik yang berfungsi dari yang diwariskan. Dengarkan jawaban yang menyebut kegagalan nyata, seperti gangguan setelah perubahan yang tidak ditinjau, dan jawaban yang hanya menyebut "kerangka kerjanya bilang begitu". Lanjutkan dengan memilih satu praktik tanpa masalah yang jelas dan menyepakati cara menguji apakah ia diperlukan.

**Di mana pemakaian ITIL kita mengasumsikan rilis lambat dan jarang?**
Banyak kontrol berasal dari era rilis besar yang jarang. Tim yang kini merilis setiap hari sering menemukan langkah persetujuan yang tidak bisa mengimbangi. Kumpulkan contoh konkret. Lanjutkan dengan menanyakan risiko apa yang hendak dikendalikan tiap langkah dan apakah pemeriksaan di pipeline dapat mengendalikannya dengan lebih baik.

**Siapa yang bertanggung jawab atas setiap praktik kita, dan bagaimana mereka mendengar apa yang tidak berjalan?**
Praktik tanpa pemilik tidak bisa membaik. Harapkan ketidakpastian tentang siapa pemilik manajemen pengetahuan atau manajemen masalah. Lanjutkan dengan menanyakan bagaimana pemilik belajar dari orang-orang yang mengerjakannya.

**Apa yang kita pelajari dari sertifikasi terakhir yang kita bayar, dan apa yang kita ubah karenanya?**
Pertanyaan ini mengaitkan pelatihan dengan hasil. Anda mungkin mendengar bahwa orang menyukai kursusnya tetapi tidak ada yang berubah di tempat kerja. Itu informasi yang berguna, bukan tuduhan. Lanjutkan dengan menyepakati satu perubahan yang akan dicoba oleh peserta kursus bulan depan.

**Apa yang kita ketahui tentang panduan terbaru dari pemilik, dan bagaimana kita tahu?**
Pertanyaan ini memperkenalkan disiplin sumber (lihat Topik 1.3 — ITIL 5). Tim biasanya hanya tahu berita utama dari blog dan ceramah konferensi. Pilah apa yang dikatakan tim ke dalam terverifikasi dari pemilik, masuk akal, dan tidak diketahui. Lanjutkan dengan menugaskan seseorang membaca halaman pemilik dan mencatat tanggalnya.

## Dalam praktik: contoh manajemen layanan

Departemen TI sebuah perusahaan asuransi menengah telah memakai kosakata ITIL selama lima belas tahun. Kepala rekayasa platform yang baru berkata kerangka kerja itu birokratis dan ingin meninggalkannya. Manajer layanan keberatan, dengan merujuk temuan audit yang berhasil ditutup berkat kerangka kerja itu.

Mereka sepakat menguji klaim itu alih-alih berdebat. Tim mendaftar sepuluh praktik yang benar-benar dijalankan dan, untuk masing-masing, menuliskan masalah yang hendak diatasinya serta satu bukti terbaru. Empat praktik memiliki bukti yang jelas: manajemen insiden, pemampuan perubahan, manajemen permintaan layanan, dan katalog layanan, semuanya menghasilkan hasil terukur yang dirasakan bisnis. Tiga memiliki bukti tetapi beban kerja berat, terutama change advisory board mingguan yang meninjau setiap perubahan, termasuk perubahan standar dengan rekam jejak panjang. Tiga lainnya tidak memiliki bukti maupun pemilik.

Departemen mempertahankan empat yang pertama, mengganti tinjauan dewan atas perubahan rutin dengan pemeriksaan pipeline dan tinjauan sejawat, dan menghentikan salah satu praktik tanpa pemilik setelah memastikan tidak ada audit yang bergantung padanya. Departemen juga mengirim dua insinyur ke kursus singkat agar mereka dapat membaca panduan terkini dari pemilik secara langsung.

Yang berubah: debat bergeser dari "ITIL baik atau buruk" menjadi praktik mana melayani risiko yang mana. Yang masih sulit: auditor tetap meminta bukti dalam format tertentu, dan menghasilkannya dari pipeline membutuhkan waktu rekayasa yang belum didanai tim. Dua praktik tanpa pemilik yang tersisa masuk dalam backlog perbaikan.

## Empat perspektif

### Tim produk dan pengiriman

Pelajari kosakata praktik yang menyentuh pekerjaan Anda, seperti pemampuan perubahan dan manajemen rilis, agar Anda dapat menunjukkan bagaimana pipeline Anda memenuhi maksudnya. Tanyakan kepada operasi apa yang mereka butuhkan dari Anda untuk menjalankan produk, dan sediakan.

### Tim layanan dan operasi

Anda memikul sebagian besar praktik ITIL setiap hari. Jaga agar tetap terikat pada bukti, dan bawa contoh di mana praktik membantu dan di mana ia memperlambat orang. Usulkan perubahan pada praktik alih-alih menyiasatinya.

### Kepemimpinan dan tata kelola

Tanyakan masalah apa yang dipecahkan setiap praktik, siapa pemiliknya, dan bukti apa yang menunjukkan ia berhasil. Berhati-hatilah membelanjakan dana untuk sertifikasi sebagai pengganti kapabilitas. Periksa pernyataan tentang versi baru terhadap publikasi pemilik sebelum mengikat dana.

### Pelanggan dan pengguna

Anda jarang melihat ITIL itu sendiri. Anda melihat seberapa cepat insiden diselesaikan, seberapa jelas permintaan, dan bagaimana perubahan dikomunikasikan. Jika suatu praktik memengaruhi Anda, seperti langkah persetujuan, tanyakan kepada penyedia untuk apa langkah itu.

## Agile, AI, otomatisasi, dan analitik

### Agile

Perlakukan praktik sebagai backlog hal yang diperbaiki bersama orang yang menjalankannya, dikirim dalam langkah kecil dan ditinjau bersama pemangku kepentingan. Perhatian: jangan memakai bahasa agile sebagai kedok untuk membuang kontrol yang mengelola risiko nyata; gantilah kontrol itu dengan yang lebih baik.

### AI

ITIL 5, sebagaimana digambarkan pemiliknya, membahas lingkungan berbasis AI (lihat Topik 1.3 — ITIL 5). Gunakan AI untuk membantu orang menemukan dan membaca panduan lebih cepat, dengan seseorang memeriksa sumbernya, dan beri setiap sistem AI yang dipakai dalam pekerjaan layanan seorang pemilik. Perhatian: asisten AI dapat menyatakan detail ITIL dengan penuh keyakinan yang ternyata salah atau usang; mintalah ia mengutip teks yang Anda sediakan alih-alih menjawab dari ingatan.

### Otomatisasi

Bangun kontrol ke dalam pipeline dan perangkat agar mengikuti praktik menjadi jalur yang mudah, misalnya pemeriksaan otomatis bahwa setiap catatan perubahan terhubung ke build yang telah diuji. Perhatian: otomatisasi dapat menyembunyikan praktik yang buruk di balik centang hijau, jadi tinjau apa yang sebenarnya diuji oleh tiap kontrol otomatis.

### Analitik

Gunakan beberapa ukuran untuk melihat apakah praktik berhasil, seperti waktu pemulihan layanan, proporsi perubahan yang menyebabkan insiden, dan permintaan yang dipenuhi dalam waktu yang disepakati. Perhatian: ukuran kepatuhan praktik, seperti "persentase tiket yang memiliki kategori", bisa dimanipulasi dan hanya sedikit bicara tentang hasil. Lihat buku *Service Management Metrics* untuk definisi dan pagar pengamannya.

## Mode kegagalan umum

- **Menyamakan ITIL dengan satu proses.** Orang berdebat tentang change advisory board dan melewatkan sisanya. Deskripsikan praktik yang benar-benar Anda jalankan, dan nilai masing-masing berdasarkan buktinya sendiri.
- **Mengutip blog sebagai standar.** Detail bergeser di antara ringkasan pihak ketiga. Kutip publikasi pemilik dan beri tanggal pada bacaan Anda.
- **Sertifikat sebagai bukti kapabilitas.** Tim yang terlatih mungkin tetap menjalankan praktik dengan buruk. Amati pekerjaannya, dan lihat hasilnya.
- **Menyalin kerangka kerja, bukan memecahkan masalah.** Tim memasang setiap praktik dan pelanggan tidak merasakan apa pun. Mulailah dari masalah, dan tambahkan praktik yang menjawabnya.
- **Memperlakukan panduan lama sebagai usang atau sebagai keramat.** Keduanya melewatkan bukti. Bandingkan panduan dengan perilaku layanan Anda yang sebenarnya.
- **Kontrol yang ditambahkan secara manual padahal bisa disediakan otomatisasi.** Staf menjadi kontrolnya. Pindahkan pemeriksaan rutin ke pipeline dan sisakan tinjauan manusia untuk keputusan yang membutuhkan penilaian.

## Model kematangan

| Dimensi | Memulai | Mengembangkan | Menstandardisasi | Mengelola | Mengorkestrasi |
|---|---|---|---|---|---|
| Penggunaan ITIL | Istilah dipakai secara longgar | Beberapa praktik diadopsi atas nama | Praktik terpilih didefinisikan dan dimiliki | Praktik ditinjau terhadap bukti | Praktik berkembang bersama pengiriman dan data lintas tim |
| Disiplin sumber | Ringkasan blog | Teks pemilik dibaca oleh sedikit orang | Klaim diberi label versi dan diverifikasi | Diverifikasi ulang sebelum keputusan | Log verifikasi bersama yang bertanggal |
| Kapabilitas | Hanya sertifikat | Tinjauan praktik dimulai | Kapabilitas diamati dalam latihan dan tinjauan | Hasil diukur dan ditindaklanjuti | Pembelajaran dibagikan ke seluruh organisasi dan mitra |

## Daftar periksa

- [ ] Kami dapat menyatakan dalam satu kalimat apa arti "ITIL" di organisasi kami.
- [ ] Kami mendaftar praktik yang kami jalankan dan masalah yang dipecahkan masing-masing.
- [ ] Setiap praktik memiliki pemilik yang ditunjuk.
- [ ] Kami memberi label pernyataan ITIL menurut versi dan mengutip pemilik untuk definisi.
- [ ] Kami menilai praktik berdasarkan bukti, seperti waktu pemulihan dan kegagalan perubahan.
- [ ] Kami memisahkan sertifikasi dari kapabilitas dalam perencanaan kami.
- [ ] Kontrol rutin dibangun ke dalam pipeline sejauh memungkinkan.
- [ ] Kami memeriksa ulang publikasi pemilik sebelum keputusan besar.

## Prompt AI

**Bandingkan praktik kita dengan masalah yang dipecahkannya.**

```text
Here is a list of the practices our team runs: [list practices].
For each, ask me what problem it solved when it was introduced and what recent evidence shows it works. Then produce a table: practice, problem, evidence, owner (only what I tell you), and a question to test whether we still need it.
Do not invent facts about ITIL. List what you are unsure of.
```

**Periksa klaim ITIL terhadap teks pemilik.**

```text
Below are statements we have heard about ITIL: [paste statements].
Below is text copied from the owner's published pages: [paste owner text].
For each statement, say whether the owner's text supports it, contradicts it, or is silent, and quote the words exactly. Use no outside knowledge.
List what you are unsure of.
```

**Susun penjelasan bahasa sederhana untuk staf baru.**

```text
Write a one-page explanation for new starters of how our organization uses ITIL, using only this description of our practice: [paste description].
Keep it under 400 words, avoid jargon, and flag every statement that comes from our description versus general knowledge. Do not add claims about ITIL versions.
End with what you are unsure of.
```

## Skill AI

- [itil-5](../../../../skills/itil-5/SKILL.md): gunakan untuk memetakan praktik terhadap panduan terbaru dari pemilik, dengan klaim ditandai belum terkonfirmasi.
- [maturity-models](../../../../skills/maturity-models/SKILL.md): gunakan untuk menilai seberapa jauh setiap praktik telah matang.
- [service-catalog](../../../../skills/service-catalog/SKILL.md): gunakan ketika pekerjaan mengarah pada pendeskripsian layanan untuk pelanggan.

## Sumber utama

- PeopleCert, halaman sertifikasi ITIL: deskripsi resmi dari pemilik tentang kerangka kerja dan skema sertifikasi.
- Wikipedia, "ITIL": sejarah, versi, dan perubahan kepemilikan dalam bentuk ringkasan.
- Wikipedia, "IT service management": bidang tempat ITIL berada.
- Wikipedia, "ISO/IEC 20000": standar tersertifikasi untuk sistem manajemen layanan, yang sering dibandingkan dengan ITIL.

## Referensi

1. ITIL — Wikipedia — https://en.wikipedia.org/wiki/ITIL
2. IT service management — Wikipedia — https://en.wikipedia.org/wiki/IT_service_management
3. Central Computer and Telecommunications Agency — Wikipedia — https://en.wikipedia.org/wiki/Central_Computer_and_Telecommunications_Agency
4. Office of Government Commerce — Wikipedia — https://en.wikipedia.org/wiki/Office_of_Government_Commerce
5. AXELOS — Wikipedia — https://en.wikipedia.org/wiki/AXELOS
6. ISO/IEC 20000 — Wikipedia — https://en.wikipedia.org/wiki/ISO/IEC_20000
7. DevOps — Wikipedia — https://en.wikipedia.org/wiki/DevOps
8. Continual improvement process — Wikipedia — https://en.wikipedia.org/wiki/Continual_improvement_process
9. Artificial intelligence — Wikipedia — https://en.wikipedia.org/wiki/Artificial_intelligence
10. ITIL Foundation Bridge (Version 5) — PeopleCert — https://www.peoplecert.org/browse-certifications/it-governance-and-service-management/ITIL-1/itil-foundation-bridge-version-5-4158
