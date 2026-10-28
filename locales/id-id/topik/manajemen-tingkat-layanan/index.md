# Manajemen Tingkat Layanan

**Manajemen tingkat layanan menetapkan target yang jelas dan terukur untuk layanan bersama orang yang bergantung padanya, melacak kinerja terhadap target itu, dan memakai kesenjangannya untuk memperbaiki; bentuk modernnya menambahkan perjanjian tingkat pengalaman dan sasaran rekayasa pada perjanjian tingkat layanan tradisional.**

## Mengapa ini penting

Penyedia dan pelanggan membawa gambaran berbeda tentang apa arti "layanan yang baik". Penyedia memikirkan uptime dan penutupan tiket. Pelanggan memikirkan apakah mereka dapat menyelesaikan pekerjaan. Tanpa definisi yang disepakati, keduanya bisa tulus dan keduanya bisa tidak puas: penyedia menunjuk laporan yang menunjukkan setiap target tercapai, dan pelanggan menunjuk seminggu penuh frustrasi.

Manajemen tingkat layanan menutup kesenjangan itu. Ia memulai percakapan dengan pelanggan tentang apa yang mereka butuhkan, mengubah jawabannya menjadi target yang dapat diukur, dan melaporkannya dengan cara yang dapat diperiksa pelanggan. Percakapannya lebih penting daripada dokumennya. Perjanjian tingkat layanan (SLA) yang ditulis sekali dan diarsipkan memberi rasa tenang yang palsu; yang ditinjau secara berkala, dengan data nyata dan diskusi jujur tentang apa yang tidak berfungsi, membangun kepercayaan.

Praktik modern juga menghadapi kritik: target yang ditetapkan pada ukuran teknis bisa semuanya hijau sementara pengguna tidak puas. Sebagai tanggapan, organisasi menambahkan ukuran pengalaman, seperti perjanjian tingkat pengalaman (XLA), dan tim rekayasa menetapkan service level objective (SLO) berdasarkan apa yang disadari pengguna. Topik ini menjelaskan kosakata, cara menetapkan target, dan cara menjaganya tetap berguna. Ia terhubung dengan ketersediaan dan kapasitas (Topik 3.11 — Ketersediaan, Kapasitas, dan Kinerja), manajemen pemasok (Topik 3.14 — Manajemen Pemasok), dan pengukuran (Topik 7.3 — Pengukuran dan pelaporan).

## Konsep inti

**Perjanjian tingkat layanan (SLA).** Dalam ITIL 4, perjanjian terdokumentasi antara penyedia layanan dan pelanggan yang mengidentifikasi baik layanan yang dibutuhkan maupun tingkat layanan yang diharapkan. Artikel Wikipedia tentang service-level agreement menjelaskan bagian-bagian umumnya: deskripsi layanan, target, pengukuran, pelaporan, dan apa yang terjadi jika target terlewat. SLA bisa internal, antara penyedia dan organisasinya sendiri, atau eksternal, dalam kontrak komersial.

**Target tingkat layanan.** Komitmen yang spesifik dan terukur, seperti "99,9 persen permintaan selesai dalam dua detik dalam satu bulan kalender" atau "insiden prioritas satu direspons dalam 15 menit". Setiap target mendefinisikan apa yang diukur, bagaimana, selama periode apa, dan dalam kondisi apa.

**Service level objective (SLO).** Target untuk sebuah service level indicator (SLI), paling sering dipakai oleh tim rekayasa, sebagai bagian dari praktik yang dijelaskan dalam Topik 2.6 — Site Reliability Engineering. SLO biasanya internal dan lebih ketat daripada SLA eksternal, agar tim menyadari masalah sebelum pelanggaran. Wikipedia menjelaskan service-level objective.

**Perjanjian tingkat operasional (OLA).** Perjanjian antartim internal yang mendukung penyampaian layanan kepada pelanggan. Misalnya, tim jaringan dapat menyepakati waktu respons kepada tim layanan yang mendukung SLA eksternal. Wikipedia menjelaskan operational-level agreement.

**Kontrak penopang (underpinning contract).** Perjanjian dengan pemasok eksternal yang mendukung penyampaian layanan. Harus konsisten dengan SLA yang didukungnya. Jika SLA Anda menjanjikan empat jam dan kontrak pemasok Anda mengizinkan delapan, kesenjangannya menjadi tanggungan Anda.

**Perjanjian tingkat pengalaman (XLA).** Gagasan yang lebih baru: perjanjian yang berfokus pada bagaimana pengguna mengalami layanan, seperti seberapa baik layanan membantu mereka mencapai tujuan, alih-alih semata-mata ukuran teknis. XLA sering memakai survei, ukuran sentimen, dan pengamatan di samping data sistem. Tidak ada definisi standar tunggal, jadi tuliskan apa yang Anda maksud. Lihat Topik 7.7 — Analitik pengalaman dan sentimen.

**Apa yang membuat target baik.** Bermakna bagi pelanggan, terukur, berdasarkan bukti tentang apa yang dapat dicapai, dan disepakati dengan orang yang bergantung padanya. Ia menyatakan metode pengukuran dan pengecualian, seperti pemeliharaan terencana. Ia tidak menjanjikan apa yang tidak dapat dikendalikan penyedia.

**Rata-rata dan persentil.** Rata-rata menyembunyikan kasus terburuk. Target "waktu respons rata-rata di bawah satu detik" dapat dipenuhi meski satu dari sepuluh permintaan memakan sepuluh detik. Persentil, yang dijelaskan di Wikipedia, memberi gambaran yang lebih baik: "95 persen permintaan di bawah dua detik". Pilih persentil untuk pengalaman yang Anda pedulikan.

**Ketersediaan dan uptime.** Target yang umum, dinyatakan sebagai persentase waktu layanan dapat dipakai. Artikel Wikipedia tentang availability menjelaskan perhitungannya. Ia bergantung pada apa yang dihitung "dapat dipakai": layanan bisa menyala namun tidak dapat dipakai. Definisikan dari sudut pandang pengguna.

**Penalti dan kredit.** Banyak SLA eksternal mencantumkan pemulihan, seperti kredit layanan, jika penyedia melewatkan target. Itu sinyal kesungguhan tetapi pengganti layanan yang buruk: kredit kecil tidak membantu pelanggan yang bisnisnya terdampak. Artikel Wikipedia tentang liquidated damages menjelaskan gagasan kontrak terkait. Periksa cara kerja pemulihan dalam kontrak Anda dan konsultasikan nasihat hukum bila perlu; panduan ini tidak memberikannya.

**Pelaporan.** Laporan berkala menunjukkan hasil terhadap target, dengan penjelasan atas yang terlewat dan tindakan. Laporan adalah untuk percakapan, bukan sekadar catatan. Sertakan contoh dan komentar pengguna di samping angka.

**Tinjauan.** Tinjau SLA dan target bersama pelanggan pada interval yang disepakati, menyesuaikannya ketika kebutuhan atau teknologi berubah. Pensiunkan target yang tidak dipakai siapa pun.

**Hukum Goodhart.** "Ketika suatu ukuran menjadi target, ia berhenti menjadi ukuran yang baik." Wikipedia menjelaskan pengamatan ini, yang dikaitkan dengan ekonom Charles Goodhart. Orang menyesuaikan perilaku untuk memenuhi angka, bukan tujuan. Tingkat layanan mengundang hal ini: tiket ditutup terlalu dini, insiden diklasifikasikan ulang, jam dihentikan. Jaga dengan sampel, ukuran berpasangan, dan umpan balik pelanggan. Lihat buku *Service Management Metrics*.

**Bagaimana lensa-lensa cocok.** Manajemen tingkat layanan adalah tempat perbaikan agile bertemu perjanjian: tinjau target sering dan sesuaikan. AI dapat membantu menganalisis data kinerja dan menyusun laporan, di bawah tinjauan. Otomatisasi mengukur dan melaporkan secara konsisten. Analitik menunjukkan hubungan antara target teknis dan pengalaman pengguna.

## Praktik terbaik

1. **Mulai dari apa yang dibutuhkan pelanggan.** Tanyakan apa yang tidak boleh gagal bagi mereka, dan kelambatan apa yang mereka toleransi. Dasarkan target pada jawaban itu, bukan pada apa yang mudah diukur.
2. **Jaga jumlah target tetap kecil.** Segelintir target bermakna per layanan lebih mudah dipahami dan dikelola daripada puluhan. Buang yang tidak dipakai siapa pun.
3. **Tulis setiap target dengan tepat.** Nyatakan apa yang diukur, dari mana, selama periode apa, apa yang dikecualikan, dan bagaimana hasil dihitung. Uji definisi dengan data sebulan terakhir.
4. **Gunakan persentil untuk respons dan kinerja.** Laporkan persentase kasus yang memenuhi target, dan tunjukkan kasus terburuk, bukan hanya rata-rata.
5. **Tetapkan sasaran internal lebih ketat daripada perjanjian.** Beri tim Anda ruang untuk bertindak sebelum pelanggaran. Buat target internal dan eksternal konsisten satu sama lain dan dengan kontrak pemasok.
6. **Tambahkan ukuran pengalaman.** Di samping target teknis, tanyakan pengguna bagaimana layanan membantu mereka, memakai survei singkat dan pengamatan. Ambil sampel kasus nyata untuk melihat apa yang terlewat oleh angka.
7. **Laporkan dengan konteks.** Sajikan hasil dalam rapat rutin dengan pelanggan, jelaskan yang terlewat dengan jujur, dan sepakati tindakan. Sertakan beberapa komentar pengguna.
8. **Jaga dari manipulasi.** Tinjau sampel tiket dan insiden di balik angka, lihat tingkat pembukaan kembali, dan pasangkan ukuran kecepatan dengan ukuran mutu.
9. **Tinjau perjanjian secara berkala.** Bertemulah setidaknya setahun sekali, dan ketika ada perubahan besar, untuk memeriksa bahwa target masih sesuai kebutuhan dan biaya. Ubah target secara terbuka.
10. **Selaraskan pemasok.** Periksa bahwa perjanjian setiap pemasok mendukung target yang Anda janjikan, dan sepakati bagaimana kinerja mereka dilaporkan kepada Anda. Lihat Topik 3.14 — Manajemen Pemasok.

## Pertanyaan untuk dibahas bersama tim Anda

**Jika kita memenuhi setiap target bulan lalu, apakah pelanggan kita akan mengatakan layanannya baik?**
Pertanyaan ini menguji apakah target mencerminkan pengalaman. Harapkan ketidakcocokan di suatu tempat. Tanyakan keluhan terbaru yang tidak ditangkap target mana pun. Lanjutkan dengan memilih satu ukuran pengalaman baru.

**Target kita yang mana yang tidak dibaca siapa pun, dan mana yang diperdebatkan semua orang?**
Pertanyaan ini menemukan ukuran yang tidak berguna dan yang diperselisihkan. Tanyakan siapa yang memakai masing-masing dalam keputusan. Lanjutkan dengan mempensiunkan satu dan memperjelas satu.

**Apa yang kita janjikan kepada pelanggan yang bergantung pada pemasok atau tim lain, dan apa yang mereka janjikan kepada kita?**
Pertanyaan ini menguji konsistensi antarperjanjian. Periksa angkanya berdampingan. Harapkan kesenjangan. Lanjutkan dengan memilih satu kesenjangan untuk ditutup, dengan menegosiasi ulang atau mengubah janji kita.

**Bagaimana target kita bisa dipenuhi tanpa membantu pengguna?**
Bayangkan manipulasi: menutup tiket terlalu dini, menghentikan jam, mempersempit definisi. Tanyakan apakah ada yang terjadi. Lanjutkan dengan memilih pemeriksaan sampel untuk satu target.

**Siapa yang menghadiri rapat tinjauan layanan kita, dan apa yang berubah setelahnya?**
Rapat tanpa tindakan adalah ritual. Minta daftar tindakan terakhir. Lanjutkan dengan menyepakati bahwa setiap tinjauan berakhir dengan paling banyak tiga tindakan dengan pemilik.

**Di mana AI dapat membantu menganalisis data tingkat layanan atau menyusun laporan, dan apa yang harus diperiksa seseorang?**
AI dapat merangkum tren dan menyusun penjelasan. Ia juga dapat menyatakan penyebab tanpa bukti. Tanyakan siapa yang meninjau draf terhadap data. Lanjutkan dengan menguji ringkasan hasil susunan AI untuk pemakaian internal, dengan seseorang menyetujui.

## Dalam praktik: contoh manajemen layanan

Departemen TI sebuah perusahaan air regional mendukung 800 staf kantor dan 300 kru lapangan. SLA untuk sistem perintah kerja menjanjikan ketersediaan 99,5 persen dan respons empat jam untuk insiden prioritas satu. Laporan menunjukkan setiap target tercapai selama dua tahun. Namun kru lapangan menyebut sistem itu "tidak andal", dan kepala operasi menuntut SLA yang lebih baik.

Manajer layanan bertemu para pemimpin kru dan menanyakan apa arti "tidak andal". Mereka mengatakan sistem menyala tetapi sangat lambat di pagi buta, ketika kru mulai bekerja, dan gagal sinkron ketika mereka memiliki cakupan seluler yang buruk. Keduanya tidak tertangkap: ketersediaan diukur dengan pemeriksaan dari pusat data pada interval lima menit, dan target respons hanya berlaku untuk tiket yang diajukan kru, yang jarang mereka lakukan karena mengira tidak akan ada yang mengerjakan.

Manajer mengusulkan perubahan. Tim menambahkan SLI berdasarkan transaksi pengguna nyata: 95 persen penyimpanan perintah kerja selesai dalam tiga detik, diukur terpisah untuk periode pukul 6 sampai 8 pagi. Tim menambahkan survei denyut bulanan singkat untuk kru, dengan dua pertanyaan tentang apakah sistem membantu mereka menyelesaikan pekerjaan dan apa yang menghalangi. Dan tim menetapkan SLO internal yang lebih ketat daripada SLA, agar tim melihat kelambatan pagi buta sebelum kru. Kepala operasi setuju meninjau target bersama perwakilan kru setiap kuartal.

Yang berubah: data bulan pertama menunjukkan kelambatan pagi buta dengan jelas, dan perubahan penyetelan basis data memperbaiki sebagian besarnya. Yang masih sulit: kegagalan sinkron bergantung pada cakupan seluler yang tidak dikendalikan perusahaan; survei memiliki tingkat respons sekitar sepertiga; dan SLI baru tidak ada dalam kontrak, sehingga laporan kepada tim eksekutif kini membawa dua set angka. Manajer mempertahankan keduanya dan mengusulkan memasukkan ukuran baru ke dalam SLA pada perpanjangan berikutnya.

## Empat perspektif

### Tim produk dan pengiriman

Definisikan indikator dan sasaran bersama orang yang menjalankan dan memakai layanan, dan bangun pengukurannya ke dalam produk. Perlakukan target yang terlewat sebagai pemicu untuk melihat desain, bukan hanya operasi.

### Tim layanan dan operasi

Ketahui targetnya dan bagaimana diukur. Waspadai manipulasi, laporkan dengan jujur, dan bawa contoh tentang apa yang terlewat oleh angka ke rapat tinjauan. Gunakan sasaran internal untuk bertindak lebih awal.

### Kepemimpinan dan tata kelola

Tanyakan apakah target mencerminkan apa yang dibutuhkan pelanggan, dan apakah konsisten dengan kontrak pemasok. Lihat distribusi dan sampel, bukan hanya persentase utama. Hindari memberi penghargaan atau menghukum tim berdasarkan angka tunggal.

### Pelanggan dan pengguna

Katakan apa yang paling penting bagi Anda dan apa yang dapat Anda toleransi. Ikut dalam tinjauan. Jika setiap laporan hijau dan Anda tidak puas, beri tahu penyedia dan berikan contoh.

## Agile, AI, otomatisasi, dan analitik

### Agile

Tinjau dan sesuaikan target secara berkala bersama pelanggan, dalam langkah kecil, dan pakai target yang terlewat sebagai umpan balik untuk perbaikan. Perhatian: target yang berubah setiap bulan membingungkan semua orang; pertahankan inti yang stabil dan ubah dengan sengaja.

### AI

AI dapat menganalisis data kinerja, menyusun laporan, dan menyarankan penyebab target yang terlewat, dengan seseorang bertanggung jawab atas kesimpulan. Tunjuk pemilik untuk setiap pemakaian. Perhatian: penjelasan AI tentang target yang terlewat bisa terdengar berwibawa tanpa bukti; minta ia mengutip data yang dipakainya. Lihat Topik 5.1 — AI dalam manajemen layanan.

### Otomatisasi

Otomatiskan pengukuran dari transaksi nyata, pelaporan, dan peringatan atas risiko pelanggaran, dengan perhitungan yang transparan. Perhatian: pengukuran otomatis dapat menyembunyikan kesalahan definisi; ambil sampel data mentah dan perhitungannya secara berkala. Lihat Topik 6.2 — Otomatisasi alur kerja dan orkestrasi.

### Analitik

Gabungkan ukuran teknis, seperti persentil waktu respons, dengan data pengalaman, seperti hasil survei dan keluhan. Perhatian: survei berasal dari mereka yang merespons, dan setiap ukuran dapat dimanipulasi begitu menjadi target; pakai beberapa sumber dan ambil sampel kasus. Lihat Topik 7.7 — Analitik pengalaman dan sentimen dan buku *Service Management Metrics*.

## Mode kegagalan umum

- **Semua hijau, pelanggan tidak puas.** Ukuran melewatkan pengalaman. Tambahkan indikator berbasis pengguna dan sampel.
- **Terlalu banyak target.** Tak seorang pun membacanya. Simpan beberapa yang penting.
- **Hanya rata-rata.** Kasus terburuk tersembunyi. Pakai persentil dan tunjukkan pencilan.
- **Manipulasi.** Jam dihentikan, tiket ditutup terlalu dini. Ambil sampel dan pasangkan ukuran.
- **Perjanjian yang tidak konsisten.** Janji melebihi apa yang disampaikan pemasok. Selaraskan target internal dan eksternal.
- **SLA sebagai senjata.** Rapat memperdebatkan kredit. Fokus pada perbaikan dan pemahaman bersama.
- **Tidak pernah ditinjau.** Target menua. Tinjau pada interval yang disepakati.

## Model kematangan

| Dimensi | Memulai | Mengembangkan | Menstandardisasi | Mengelola | Mengorkestrasi |
|---|---|---|---|---|---|
| Target | Teknis, tidak ditinjau | Sebagian target berbasis pelanggan | Target ditetapkan bersama pelanggan dan didefinisikan dengan tepat | Target ditinjau terhadap data dan pengalaman | Target dikoordinasikan lintas layanan dan mitra |
| Pengukuran | Manual | Sebagian otomatis | Diukur dari transaksi pengguna bila memungkinkan | Pengukuran divalidasi dan disampel | Pengukuran otomatis dan transparan di seluruh rantai |
| Pengalaman | Tidak diukur | Survei ad hoc | Ukuran pengalaman di samping yang teknis | Pengalaman dikaitkan dengan perbaikan | Pengalaman menggerakkan perjanjian lintas layanan |
| Tinjauan | Jarang | Tahunan | Tinjauan teratur dengan tindakan | Tinjauan dilacak hasilnya | Tinjauan terintegrasi dengan perencanaan dan pemasok |

## Daftar periksa

- [ ] Target didasarkan pada kebutuhan pelanggan dan disepakati bersama mereka.
- [ ] Setiap target didefinisikan dengan tepat dan diuji dengan data nyata.
- [ ] Kami memakai persentil untuk target respons dan kinerja.
- [ ] Sasaran internal lebih ketat daripada perjanjian eksternal.
- [ ] Kontrak pemasok mendukung target yang kami janjikan.
- [ ] Kami mengukur pengalaman serta kinerja teknis.
- [ ] Kami mengambil sampel kasus di balik angka untuk memeriksa manipulasi.
- [ ] Kami meninjau perjanjian setidaknya setahun sekali dan setelah perubahan besar.

## Prompt AI

**Periksa definisi target.**

```text
Here is a service level target as written: [paste]. Here is a month of raw data: [paste summary].
List what is unclear in the wording, compute the result in two different reasonable ways showing your steps, and note where the answers differ. Do not recommend a new target.
List what you are unsure of.
```

**Temukan apa yang terlewat oleh angka.**

```text
Our targets: [list]. Here are user complaints from the last quarter: [paste, personal data removed].
List complaints that no target would have detected, quote each briefly, and suggest one possible measure for each. Do not claim the measures would work.
List what you are unsure of.
```

**Siapkan tinjauan layanan.**

```text
Here are this month's results against targets: [paste]. Here are notable incidents and user comments: [paste].
Draft an agenda and five questions to discuss with the customer, including one about what the numbers do not show. Do not explain causes that are not in the material.
List what you are unsure of.
```

## Skill AI

- [service-level-agreement](../../../../skills/service-level-agreement/SKILL.md): gunakan untuk menyusun dan meninjau perjanjian dan target.
- [key-risk-indicators](../../../../skills/key-risk-indicators/SKILL.md): gunakan untuk memilih indikator yang memberi peringatan dini.
- [survey-design](../../../../skills/survey-design/SKILL.md): gunakan untuk merancang ukuran pengalaman.
- [vendor-management](../../../../skills/vendor-management/SKILL.md): gunakan untuk menyelaraskan perjanjian pemasok dengan target Anda.

## Sumber utama

- PeopleCert, halaman sertifikasi ITIL: uraian pemilik tentang praktik manajemen tingkat layanan.
- Betsy Beyer dan lainnya (ed.), *Site Reliability Engineering* (2016), bab tentang service level objective, gratis di sre.google.
- Wikipedia, "Service-level agreement" dan "Service-level objective": ikhtisar istilah-istilah ini.
- Wikipedia, "Goodhart's law": peringatan tentang memakai ukuran sebagai target.

## Referensi

1. Service-level agreement — Wikipedia — https://en.wikipedia.org/wiki/Service-level_agreement
2. Service-level objective — Wikipedia — https://en.wikipedia.org/wiki/Service-level_objective
3. Operational-level agreement — Wikipedia — https://en.wikipedia.org/wiki/Operational-level_agreement
4. Percentile — Wikipedia — https://en.wikipedia.org/wiki/Percentile
5. Availability — Wikipedia — https://en.wikipedia.org/wiki/Availability
6. Goodhart's law — Wikipedia — https://en.wikipedia.org/wiki/Goodhart%27s_law
7. Liquidated damages — Wikipedia — https://en.wikipedia.org/wiki/Liquidated_damages
8. Customer satisfaction — Wikipedia — https://en.wikipedia.org/wiki/Customer_satisfaction
9. Net promoter score — Wikipedia — https://en.wikipedia.org/wiki/Net_promoter_score
10. Site Reliability Engineering: How Google Runs Production Systems — Google — https://sre.google/sre-book/table-of-contents/
