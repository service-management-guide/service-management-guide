# Empat Dimensi Manajemen Layanan

**ITIL 4 menyatakan bahwa setiap layanan harus dilihat melalui empat dimensi — organisasi dan orang, informasi dan teknologi, mitra dan pemasok, serta aliran nilai dan proses — dan bahwa layanan gagal ketika salah satunya diabaikan, sebaik apa pun dimensi lainnya dikerjakan.**

## Mengapa ini penting

Ketika sebuah layanan bermasalah, penjelasan pertama biasanya tentang teknologi: sebuah bug, batas kapasitas, pengaturan yang salah konfigurasi. Kadang itu benar. Sering kali akarnya ada di tempat lain: tim yang tidak tahu bahwa ia memiliki layanan itu, pemasok yang kontraknya tidak mencakup kegagalan tersebut, atau alur persetujuan yang membuat perbaikan memakan waktu seminggu.

Empat dimensi adalah daftar periksa untuk melawan cara berpikir yang sempit. Untuk setiap layanan atau perubahan, Anda mengajukan empat rangkaian pertanyaan. Siapa yang mengerjakan, dan apakah mereka punya keterampilan, struktur, dan budaya untuk itu? Informasi dan teknologi apa yang dipakai layanan, dan apa yang dihasilkannya? Mitra dan pemasok mana yang berkontribusi, dan dengan syarat apa? Bagaimana pekerjaan mengalir, dan apa langkah serta aturannya? Layanan hanya sekuat dimensinya yang terlemah, dan perbaikan pada satu dimensi bisa sia-sia oleh pengabaian pada dimensi lain.

Topik ini menjelaskan empat dimensi sebagaimana diuraikan ITIL 4, menunjukkan cara memakainya dalam desain dan tinjauan, dan menunjukkan di mana agile, AI, otomatisasi, dan analitik menyentuh masing-masing. ITIL (Versi 5), yang diperkenalkan PeopleCert pada 2026, mempertahankan ITIL 4 sebagai fondasi yang terdokumentasi luas. Periksa halaman pemilik untuk melihat bagaimana dimensi disajikan dalam versi terbaru (lihat Topik 1.3 — ITIL 5).

## Konsep inti

**Organisasi dan orang.** Dimensi ini mencakup struktur organisasi, peran dan tanggung jawab, budaya, serta keterampilan dan kompetensi staf. Ia mencakup kepemimpinan, cara keputusan dibuat, dan cara tim berkomunikasi. Hukum Conway, pengamatan bahwa sistem cenderung mencerminkan struktur komunikasi organisasi yang membangunnya, adalah pengingat bahwa struktur membentuk layanan. Topik 8.3 — Perubahan Organisasi dan Adopsi membahas sisi manusia dari perubahan secara rinci.

**Informasi dan teknologi.** Dimensi ini mencakup informasi dan pengetahuan yang dibutuhkan layanan, serta teknologi yang mendukungnya: platform, perangkat, data, dan arsitektur. Ia mencakup informasi yang diciptakan layanan, seperti catatan dan laporan, dan bagaimana informasi itu dikelola dan dilindungi. Dalam praktik saat ini ia mencakup sistem AI, yang menambahkan kualitas data, perilaku model, dan pengawasan ke dalam pertanyaannya. Topik 7.2 — Fondasi dan tata kelola data dan Topik 4.4 — Manajemen Konfigurasi berkaitan dengannya.

**Mitra dan pemasok.** Sedikit layanan yang disampaikan sepenuhnya oleh satu organisasi. Dimensi ini mencakup hubungan dengan organisasi lain yang terlibat dalam desain, pengembangan, penyampaian, dukungan, atau perbaikan: vendor, penyedia cloud, kontraktor, dan mitra. Ia mencakup syarat kontrak, integrasi antarpihak, dan risiko ketergantungan. Lihat Topik 3.14 — Manajemen Pemasok, dan gagasan tentang alih daya dan vendor lock-in.

**Aliran nilai dan proses.** Dimensi ini mencakup aktivitas, alur kerja, kontrol, dan prosedur yang mengubah masukan menjadi keluaran, dan bagaimana organisasi menatanya menjadi aliran nilai. Ia menanyakan bagaimana pekerjaan mengalir, di mana ia menunggu, dan aturan apa yang berlaku. Lihat Topik 1.7 — Rantai Nilai Layanan dan Topik 7.6 — Analitik proses dan aliran nilai.

**Faktor eksternal.** ITIL 4 mencatat bahwa keempat dimensi dipengaruhi oleh faktor eksternal, yang sering didaftar sebagai politik, ekonomi, sosial, teknologi, hukum, dan lingkungan (daftar PESTLE). Sebuah regulasi, nilai tukar, atau harga energi dapat mengubah apa yang mampu dilakukan layanan. Perlakukan ini sebagai konteks bagi setiap dimensi, bukan sebagai dimensi kelima.

**Menggunakan dimensi bersama-sama.** Dimensi-dimensi itu saling berinteraksi. Perangkat otomatisasi baru (teknologi) membutuhkan orang yang punya keterampilan menjalankannya (orang), mungkin bergantung pada peta jalan vendor (mitra), dan mengubah alur kerja (proses). Melewatkan satu pertanyaan adalah cara proyek berakhir dengan perangkat yang tidak dilatihkan kepada siapa pun, atau proses yang tidak bisa diikuti siapa pun.

**Pandangan sosioteknis.** Gagasan bahwa organisasi terdiri dari bagian sosial dan teknis yang harus dirancang bersama memiliki sejarah panjang, yang diringkas Wikipedia di bawah sociotechnical systems. Keempat dimensi adalah versi praktis dari gagasan itu untuk layanan.

**Di mana lensa-lensa cocok.** Cara kerja agile sebagian besar menyentuh dimensi orang dan proses, melalui struktur tim dan lingkar umpan balik yang pendek. AI dan otomatisasi terutama berada di informasi dan teknologi, tetapi juga mengubah peran dan alur kerja. Analitik mengambil informasi dari keempatnya dan melaporkan bagaimana kinerja masing-masing.

## Praktik terbaik

1. **Ajukan keempat pertanyaan pada setiap perubahan signifikan.** Sebelum menyetujui perubahan atau layanan baru, tanyakan apa yang dibutuhkannya dari setiap dimensi. Tabel satu halaman dengan empat baris sudah cukup untuk memperlihatkan kesenjangan.
2. **Sebutkan dimensi yang paling lemah.** Untuk layanan yang sudah ada, tanyakan dimensi mana yang paling lemah saat ini, dan biarkan itu menentukan ke mana upaya perbaikan diarahkan. Jangan condong ke dimensi yang menurut tim Anda paling menarik.
3. **Tuliskan peran.** Untuk dimensi orang, nyatakan siapa yang memiliki layanan, siapa yang mendukungnya, dan siapa yang memutuskan. Periksa bahwa orang-orangnya punya keterampilan, atau punya rencana untuk membangunnya.
4. **Perlakukan pengetahuan sebagai bagian dari informasi.** Daftarkan apa yang perlu diketahui orang untuk menjalankan layanan, di mana pengetahuan itu berada, dan siapa yang menjaganya tetap mutakhir. Runbook yang tidak diperbarui siapa pun adalah risiko.
5. **Ketahui kontribusi pemasok Anda.** Untuk setiap pemasok, catat apa yang mereka sediakan, perjanjiannya, siapa yang mengelola hubungan, dan apa yang terjadi jika mereka gagal. Uji pengaturan itu dalam latihan, bukan hanya di atas kertas.
6. **Petakan aliran, bukan hanya langkah.** Untuk dimensi proses, telusuri sepotong pekerjaan nyata dan catat penantiannya. Uraian proses yang mendaftar langkah tetapi tidak antrean melewatkan sebagian besar keterlambatan.
7. **Lihat antarmukanya.** Sebagian besar masalah terjadi di tempat satu dimensi bertemu dimensi lain, seperti serah terima antara pemasok dan tim internal, atau antara perangkat dan alur kerja yang didukungnya. Tinjau antarmuka itu secara khusus.
8. **Sertakan faktor eksternal.** Tambahkan satu baris untuk apa pun di luar kendali Anda yang memengaruhi setiap dimensi: regulasi, perubahan pasar, harga energi. Tinjau daftarnya setidaknya setahun sekali.
9. **Gunakan dimensi dalam tinjauan pascainsiden.** Setelah insiden, tanyakan dimensi mana yang berkontribusi. Jika setiap tinjauan menyalahkan teknologi, tim mungkin tidak melihat yang lain. Lihat Topik 3.3 — Manajemen Masalah.
10. **Tinjau kembali setelah perubahan.** Ketika Anda menambahkan AI, mengganti pemasok, atau mereorganisasi, ajukan kembali keempat pertanyaan, karena keseimbangannya bergeser.

## Pertanyaan untuk dibahas bersama tim Anda

**Untuk layanan kita yang paling penting, dari keempat dimensi mana yang paling lemah saat ini?**
Pertanyaan ini menerapkan modelnya. Tim sering menyebut teknologi lebih dulu. Desak untuk bukti: insiden baru-baru ini, keterlambatan, keluhan. Bandingkan jawaban lintas peran, karena orang yang berbeda melihat kelemahan yang berbeda. Lanjutkan dengan memilih satu tindakan untuk dimensi yang terlemah.

**Apa yang diasumsikan perubahan besar terakhir kita tentang orang, pemasok, dan proses yang tidak pernah kita periksa?**
Asumsi adalah tempat rencana gagal. Harapkan "tim akan mempelajarinya" dan "vendor akan mendukungnya". Tanyakan siapa yang mengonfirmasi masing-masing. Lanjutkan dengan memilih satu asumsi untuk diuji minggu ini.

**Pemasok mana yang dapat merugikan kita paling besar jika gagal, dan bagaimana kita tahu kita bisa mengatasinya?**
Pertanyaan ini menguji dimensi mitra melampaui kontrak. Anda mungkin mendengar bahwa pemasoknya besar dan karena itu aman. Tanyakan kapan pengaturan itu terakhir diuji. Lanjutkan dengan merencanakan latihan kecil, seperti latihan failover atau tinjauan rencana keluar.

**Di mana pekerjaan menunggu paling lama dalam aliran nilai utama kita, dan dimensi mana yang menyebabkan penantian itu?**
Penantian bisa berasal dari orang (tak ada yang tersedia), teknologi (perangkat lambat), pemasok (antrean eksternal), atau proses (persetujuan). Gunakan contoh nyata dengan tanggal. Lanjutkan dengan menanyakan siapa yang dapat menghilangkan penantian itu dan berapa biayanya.

**Tinjauan insiden mana dalam setahun terakhir yang menunjuk pada sesuatu selain teknologi?**
Pertanyaan ini memeriksa apakah tinjauan melihat secara luas. Harapkan pola penyebab teknologi dan jumlah yang lebih kecil dari penyebab orang dan proses. Tanyakan penyebab mana yang tidak kita tindaklanjuti. Lanjutkan dengan menambahkan pertanyaan tetap tentang empat dimensi ke templat tinjauan.

**Bagaimana AI mengubah setiap dimensi untuk layanan kita?**
AI memengaruhi keterampilan (orang), data dan model (informasi dan teknologi), vendor layanan AI (mitra), serta langkah persetujuan dan tinjauan (proses). Minta satu perubahan konkret di masing-masing. Lanjutkan dengan memilih dimensi dengan kesenjangan pengawasan terbesar.

## Dalam praktik: contoh manajemen layanan

Otoritas transportasi kota berencana mengganti sisi belakang (back end) aplikasi perencana perjalanannya. Rencana proyek mencakup teknologinya dengan sangat rinci: migrasi cloud, penyimpanan data baru, dan tumpukan pemantauan. Seorang pemilik layanan meminta tinjauan empat dimensi satu halaman sebelum rencana disetujui.

Untuk orang, tinjauan menemukan bahwa hanya dua insinyur yang tahu bagaimana sistem saat ini berperilaku di bawah beban, dan keduanya mendekati pensiun; tidak ada rencana mentransfer pengetahuan mereka, dan tim dukungan belum diberi tahu bahwa aplikasi akan berubah. Untuk informasi dan teknologi, rencananya kuat, meski tidak menyebutkan bagaimana umpan lokasi bus waktu nyata akan divalidasi. Untuk mitra, umpan itu berasal dari operator regional yang kontraknya diperbarui delapan bulan lagi, dan desain baru bergantung pada fitur yang belum disetujui operator untuk disediakan. Untuk proses, alur rilis masih membutuhkan persetujuan tiga minggu yang bertentangan dengan rilis mingguan yang direncanakan.

Otoritas menyesuaikan rencana: memasangkan kedua insinyur dengan rekan yang lebih muda, menambahkan tim dukungan ke tinjauan desain, membuka percakapan dengan operator tentang umpan, dan meninjau aturan persetujuan bersama pemilik perubahan. Yang masih sulit: operator mungkin tidak menyetujui fitur itu, dan otoritas tidak punya sumber alternatif. Pemilik layanan mencatatnya sebagai risiko dan meminta kelompok pimpinan memutuskan berapa lama menunggu.

## Empat perspektif

### Tim produk dan pengiriman

Gunakan empat dimensi sebagai tinjauan desain. Tanyakan siapa yang akan menjalankan apa yang Anda bangun, data dan perangkat apa yang menjadi ketergantungannya, mitra mana yang ada dalam rantai, dan bagaimana pekerjaan akan mengalir setelah peluncuran. Sertakan jawaban-jawaban itu dalam definisi selesai (definition of done) Anda.

### Tim layanan dan operasi

Anda sering melihat dimensi yang terabaikan lebih dulu: keterampilan yang hilang, serah terima pemasok, dan keterlambatan proses. Sampaikan dengan contoh spesifik, dan minta dilibatkan lebih awal dalam perencanaan agar keempat pertanyaan diajukan sebelum peluncuran.

### Kepemimpinan dan tata kelola

Minta pandangan empat dimensi dalam usulan yang signifikan. Danai dimensi non-teknologi: keterampilan, manajemen pemasok, dan perbaikan proses. Perhatikan ketika rencana menguraikan teknologi dengan rinci dan sisanya dalam satu kalimat.

### Pelanggan dan pengguna

Anda mengalami dimensi-dimensi itu bersamaan: orang yang membantu Anda, perangkat yang Anda pakai, pemasok di baliknya, dan langkah yang harus Anda ikuti. Beri tahu penyedia di mana Anda terhambat dan bagian layanan mana yang tampaknya menjadi penyebabnya.

## Agile, AI, otomatisasi, dan analitik

### Agile

Sertakan orang dari setiap dimensi dalam siklus tinjauan pendek bersama pemangku kepentingan, seperti manajer akun pemasok atau kepala dukungan, dan perlakukan kesenjangan sebagai butir backlog. Perhatian: tim agile bisa terpusat pada teknologi yang mereka bangun dan mengabaikan pemasok dan proses; tambahkan keempat pertanyaan ke tinjauan Anda.

### AI

Tanyakan pada setiap sistem AI: siapa pemiliknya (orang), data apa yang dipakainya dan bagaimana diperiksa (informasi), vendor mana yang menyediakan model dan dengan syarat apa (mitra), serta di mana manusia meninjau keluarannya (proses). Perhatian: fitur AI vendor yang diaktifkan secara bawaan dapat melewati keempatnya, jadi simpan inventaris. Lihat Topik 5.6 — Tata kelola, risiko, dan kepatuhan AI.

### Otomatisasi

Otomatiskan pengumpulan informasi untuk dimensi-dimensi di mana Anda bisa, seperti mendaftar pemasok dari data kontrak dan layanan tanpa pemilik dari katalog. Perhatian: otomatisasi mengubah peran dan alur kerja, jadi ajukan kembali keempat pertanyaan bersama orang yang terdampak.

### Analitik

Pilih satu atau dua indikator per dimensi, misalnya persentase layanan dengan pemilik yang ditunjuk, insiden pemasok, kesalahan kualitas data, dan waktu yang dihabiskan menunggu dalam aliran nilai. Perhatian: indikator tunggal mana pun bisa dimanipulasi, dan dimensi yang tidak punya ukuran mudah, seperti budaya, bisa terlewat; bahaslah tetap. Lihat Topik 7.3 — Pengukuran dan pelaporan dan buku *Service Management Metrics*.

## Mode kegagalan umum

- **Berpikir hanya teknologi.** Setiap masalah mendapat perbaikan teknis. Ajukan keempat pertanyaan dan lihat dimensi lainnya.
- **Perangkat tanpa orang.** Platform baru tiba dan tak seorang pun dilatih menjalankannya. Rencanakan keterampilan dan peran bersama teknologinya.
- **Risiko pemasok diabaikan.** Kontrak ada, tetapi tak seorang pun menguji kasus kegagalan. Jalankan latihan dan catat hasilnya.
- **Proses digambarkan tetapi tidak diamati.** Alur yang terdokumentasi berbeda dari yang nyata. Telusuri pekerjaan sebenarnya dan bandingkan.
- **Dimensi diperlakukan sebagai proyek terpisah.** Perubahan keterampilan, perangkat, pemasok, dan proses dikelola oleh kelompok berbeda yang tidak pernah bertemu. Tunjuk satu pemilik untuk seluruh perubahan.
- **Faktor eksternal terlupakan.** Perubahan regulasi atau harga mengejutkan tim. Simpan daftar singkat dan tinjau.

## Model kematangan

| Dimensi | Memulai | Mengembangkan | Menstandardisasi | Mengelola | Mengorkestrasi |
|---|---|---|---|---|---|
| Organisasi dan orang | Peran tidak jelas | Pemilik untuk layanan utama | Peran, keterampilan, dan hak keputusan didefinisikan | Keterampilan dan struktur ditinjau terhadap hasil | Tim dan keterampilan diorganisasi di sekitar aliran nilai |
| Informasi dan teknologi | Perangkat dipilih ad hoc | Sistem utama didaftar | Informasi dan teknologi dipetakan dengan pemilik | Kualitas data dan pemakaian perangkat ditinjau | Teknologi dan data dibagikan dan ditata kelola lintas layanan |
| Mitra dan pemasok | Hanya kontrak | Pemasok kunci diketahui | Peran pemasok, perjanjian, dan rencana keluar dicatat | Kinerja pemasok ditinjau dan diuji | Pemasok terintegrasi dalam aliran dan perbaikan bersama |
| Aliran nilai dan proses | Langkah tidak terdokumentasi | Proses utama dideskripsikan | Aliran dipetakan dengan penantian | Aliran diukur dan hambatan ditangani | Aliran dikoordinasikan dari ujung ke ujung dengan mitra |

## Daftar periksa

- [ ] Setiap perubahan signifikan memiliki tinjauan empat dimensi.
- [ ] Setiap layanan penting memiliki pemilik yang ditunjuk dan daftar keterampilan yang dibutuhkan.
- [ ] Kontribusi, perjanjian, dan rencana kegagalan setiap pemasok dicatat.
- [ ] Kami tahu di mana informasi dan pengetahuan untuk setiap layanan berada.
- [ ] Kami telah menelusuri setidaknya satu aliran nilai nyata beserta penantiannya.
- [ ] Tinjauan pascainsiden menanyakan dimensi mana yang berkontribusi.
- [ ] Kami menyimpan daftar singkat faktor eksternal dan meninjaunya.
- [ ] Sistem AI tercakup dalam keempat dimensi.

## Prompt AI

**Susun draf tinjauan empat dimensi dari deskripsi perubahan.**

```text
Our change: [paste description]. Our service: [name].
Produce a table with four rows (organizations and people, information and technology, partners and suppliers, value streams and processes) and columns: what the description says, what it does not say, and two questions to ask. Do not invent facts.
List what you are unsure of.
```

**Temukan risiko pemasok untuk ditanyakan.**

```text
Here is a list of our suppliers and what each provides: [paste list].
For each, list three questions we should ask about failure, exit, and integration. Do not state facts about the suppliers that I did not provide.
Mark assumptions and list what you are unsure of.
```

**Ubah tinjauan insiden menjadi pertanyaan empat dimensi.**

```text
Below is the summary of an incident review: [paste summary].
For each of the four dimensions, list what the review says about it and one question we have not yet asked. Do not assign blame or invent causes.
List what you are unsure of.
```

## Skill AI

- [root-cause-analysis](../../../../skills/root-cause-analysis/SKILL.md): gunakan untuk menelusuri penyebab di keempat dimensi.
- [vendor-management](../../../../skills/vendor-management/SKILL.md): gunakan untuk meninjau dimensi mitra dan pemasok.
- [workflow-analysis](../../../../skills/workflow-analysis/SKILL.md): gunakan untuk menelaah dimensi aliran nilai dan proses.

## Sumber utama

- PeopleCert, halaman sertifikasi ITIL: deskripsi pemilik tentang panduan ITIL, termasuk bagaimana versi terbaru membingkai dimensi.
- Wikipedia, "Sociotechnical system": gagasan latar belakang tentang merancang bagian sosial dan teknis bersama-sama.
- Wikipedia, "Conway's law": uraian singkat yang berguna tentang bagaimana struktur membentuk sistem.
- Wikipedia, "PEST analysis": keluarga daftar faktor eksternal yang mencakup PESTLE.

## Referensi

1. ITIL — Wikipedia — https://en.wikipedia.org/wiki/ITIL
2. IT service management — Wikipedia — https://en.wikipedia.org/wiki/IT_service_management
3. Sociotechnical system — Wikipedia — https://en.wikipedia.org/wiki/Sociotechnical_system
4. Conway's law — Wikipedia — https://en.wikipedia.org/wiki/Conway%27s_law
5. Organizational structure — Wikipedia — https://en.wikipedia.org/wiki/Organizational_structure
6. Outsourcing — Wikipedia — https://en.wikipedia.org/wiki/Outsourcing
7. Vendor lock-in — Wikipedia — https://en.wikipedia.org/wiki/Vendor_lock-in
8. Business process — Wikipedia — https://en.wikipedia.org/wiki/Business_process
9. PEST analysis — Wikipedia — https://en.wikipedia.org/wiki/PEST_analysis
10. ITIL Foundation Bridge (Version 5) — PeopleCert — https://www.peoplecert.org/browse-certifications/it-governance-and-service-management/ITIL-1/itil-foundation-bridge-version-5-4158
