# Manajemen Insiden

**Manajemen insiden ada untuk memulihkan layanan normal secepat mungkin dan membatasi kerugian bagi pengguna; ia berhasil ketika tingkat keparahan disepakati di muka, peran jelas, komunikasi stabil, dan tinjauan sesudahnya melihat sistem dan bukan individu.**

## Mengapa ini penting

Insiden adalah gangguan tak terencana pada suatu layanan, atau penurunan mutunya. Ketika terjadi, orang-orang yang terlibat berada di bawah tekanan, informasinya tidak lengkap, dan waktu terus berjalan. Keputusan yang dibuat dalam sepuluh menit pertama sering menentukan apakah insiden berlangsung satu jam atau enam jam.

Organisasi yang menangani insiden dengan baik tidak mengandalkan pahlawan. Mereka telah menyepakati cara menentukan seberapa serius sesuatu, siapa yang memimpin, siapa yang berbicara dengan pengguna, bagaimana mengeskalasi, dan kapan berhenti menyelidiki lalu menerapkan solusi sementara. Mereka telah berlatih. Organisasi yang menangani insiden dengan buruk berimprovisasi setiap kali, memperdebatkan prioritas selama kejadian, dan mendapati bahwa satu-satunya orang yang mengenal sistem sedang berlibur.

Topik ini menjelaskan manajemen insiden sebagai sebuah praktik: definisi, peran, tingkat keparahan, komunikasi, dan tinjauan. Ia memperlakukan insiden besar dengan struktur tambahan, dan membahas bagaimana AI dan otomatisasi dapat membantu dan di mana dapat merugikan. Ia berdampingan dengan manajemen masalah (Topik 3.3 — Manajemen Masalah), yang mencari penyebab dasarnya, dan pemantauan (Topik 3.10 — Pemantauan dan Manajemen Peristiwa), yang sering mendeteksi insiden.

## Konsep inti

**Insiden.** Dalam ITIL 4, gangguan tak terencana pada layanan atau penurunan mutu layanan. Artikel Wikipedia tentang incident management menjelaskan praktik ini dalam manajemen layanan TI. Insiden dapat sudah ada sebelum pengguna mana pun menyadari, misalnya ketika pemantauan menunjukkan disk yang gagal.

**Pulihkan layanan lebih dulu.** Tujuannya adalah memulihkan layanan ke keadaan normal, bukan menemukan akar masalah. Solusi sementara yang memulihkan layanan adalah hasil yang baik; akar masalah adalah urusan manajemen masalah. Tim yang menggali penyebab saat layanan mati memperpanjang gangguan.

**Solusi sementara (workaround).** Solusi yang mengurangi atau menghilangkan dampak insiden tanpa menyelesaikan penyebabnya, misalnya mengalihkan lalu lintas, memulai ulang komponen, atau beralih ke proses manual. Lihat Topik 3.3 — Manajemen Masalah tentang bagaimana kesalahan yang dikenal dan solusi sementara dilacak.

**Tingkat keparahan dan prioritas.** Tingkat keparahan menggambarkan dampak pada pengguna dan bisnis, seperti berapa banyak yang terdampak dan seberapa parah. Prioritas menambahkan urgensi, seperti tenggat. Banyak organisasi memakai skala kecil, misalnya empat tingkat, dengan definisi dan respons yang diharapkan untuk masing-masing. Definisi hendaknya memakai fakta yang dapat diamati ("lebih dari 100 pengguna tidak dapat melakukan pembayaran") dan bukan perasaan.

**Insiden besar (major incident).** Insiden besar berdampak signifikan dan membutuhkan respons yang lebih cepat dan lebih terkoordinasi daripada proses standar. Organisasi menetapkan ambangnya sendiri. Insiden besar biasanya memiliki pemimpin insiden yang ditunjuk, pemimpin komunikasi, dan irama pembaruan yang teratur.

**Peran.** Pemimpin insiden berkoordinasi dan mengambil keputusan; penanggap teknis mendiagnosis dan memperbaiki; pemimpin komunikasi menjaga pemangku kepentingan dan pengguna tetap terinformasi; pencatat merekam apa yang dilakukan dan kapan. Satu orang dapat memegang beberapa peran dalam insiden kecil. Incident Command System, yang dipakai dalam manajemen darurat dan dijelaskan di Wikipedia, memengaruhi struktur yang dipakai banyak organisasi teknis.

**Eskalasi.** Membawa lebih banyak keterampilan atau wewenang. Eskalasi fungsional memindahkan insiden ke orang dengan keahlian yang tepat. Eskalasi hierarkis membawa manajer yang dapat memutuskan atau menyediakan sumber daya. Kriteria yang jelas, seperti "tidak ada kemajuan setelah 30 menit pada tingkat keparahan satu", menjadikan eskalasi rutin dan bukan tanda kegagalan.

**Piket (on-call).** Pengaturan agar orang dapat dijangkau di luar jam normal. Praktik piket yang baik mencakup batas beban, jadwal yang jelas, runbook, dan kompensasi. Lihat Topik 2.6 — Site Reliability Engineering. Kelelahan alarm (alarm fatigue), fenomena yang dijelaskan di Wikipedia, membuat orang mengabaikan peringatan yang terlalu sering atau tidak dapat ditindaklanjuti.

**Komunikasi.** Pengguna dan pemangku kepentingan perlu tahu apa yang terdampak, apa yang Anda lakukan, dan kapan mereka akan mendengar lagi. Pembaruan yang sering dan sederhana mengurangi kontak berulang dan kecemasan. Artikel Wikipedia tentang crisis communication memberi prinsip umum. Halaman status, kanal internal, dan pesan langsung kepada pelanggan kunci melayani audiens yang berbeda.

**Catatan insiden.** Tiket atau catatan dengan waktu mulai, gejala, tindakan, keputusan, dan waktu selesai. Catatan itu mendukung tinjauan dan memberi data untuk perbaikan. Linimasa yang dicatat selama insiden lebih akurat daripada yang direkonstruksi sesudahnya.

**Tinjauan.** Setelah insiden yang signifikan, adakan tinjauan tanpa menyalahkan yang melihat apa yang terjadi, apa yang membantu, apa yang memperlambat respons, dan apa yang diubah. Temuan masuk ke manajemen masalah dan backlog perbaikan. Lihat Topik 3.3 — Manajemen Masalah.

**Ukuran.** Waktu untuk mendeteksi, waktu untuk merespons, dan waktu untuk memulihkan, sering diringkas sebagai mean time to recovery (MTTR) dalam uraian Wikipedia, adalah yang umum. Rata-rata menyembunyikan perbedaan besar antarinsiden, dan dapat dimanipulasi oleh cara waktu mulai dan akhir ditetapkan. Gunakan distribusi dan lihat insiden satu per satu. Lihat buku *Service Management Metrics*.

**Bagaimana lensa-lensa cocok.** Praktik agile memperlakukan setiap tinjauan sebagai umpan balik dan menjaga perbaikan tetap kecil dan berkelanjutan. AI dapat merangkum linimasa, menyarankan insiden lampau yang serupa, dan menyusun pembaruan, dengan orang yang bertanggung jawab. Otomatisasi menjalankan langkah yang aman dan dipahami dengan baik seperti memulai ulang dan failover. Analitik menunjukkan pola pengulangan.

## Praktik terbaik

1. **Definisikan tingkat keparahan dengan fakta yang dapat diamati.** Tuliskan apa arti setiap tingkat, siapa yang diberi tahu, dan seberapa cepat. Tinjau definisinya setelah insiden yang sulit diklasifikasikan.
2. **Tunjuk peran dan latih.** Sepakati siapa yang memimpin, siapa yang berkomunikasi, dan siapa yang mencatat. Berlatihlah dengan latihan, agar pertama kali bukan krisis yang sebenarnya. Lihat Topik 3.12 — Manajemen Kontinuitas Layanan.
3. **Pulihkan dulu, selidiki kemudian.** Tetapkan aturan bahwa solusi sementara diterapkan bila ada dan aman. Catat insiden untuk manajemen masalah dan lanjutkan.
4. **Simpan linimasa langsung.** Catat tindakan dan keputusan beserta waktunya saat terjadi, di tempat bersama. Ini mencegah pertengkaran dan mempercepat tinjauan.
5. **Eskalasi lebih awal dan tanpa menyalahkan.** Definisikan pemicu eskalasi dan perlakukan pemakaiannya sebagai praktik yang baik. Orang yang mengeskalasi terlambat takut dikritik, jadi hilangkan kritik itu.
6. **Berkomunikasilah dalam irama.** Sepakati interval pembaruan untuk setiap tingkat keparahan, dan kirim pembaruan meski tidak ada yang baru, dengan mengatakannya. Gunakan bahasa sederhana.
7. **Beri penanggap apa yang mereka butuhkan.** Pelihara runbook, akses, dasbor, dan daftar kontak. Uji akses sebelum malam ketika dibutuhkan.
8. **Lindungi orang.** Batasi beban piket, serahterimakan insiden panjang, dan pastikan penanggap beristirahat. Orang yang lelah membuat keputusan yang lebih buruk.
9. **Tinjau tanpa menyalahkan dan tuntaskan.** Tulis laporan singkat dengan linimasa, faktor penyumbang, dan tindakan dengan pemilik dan tanggal. Lacak tindakan hingga selesai. Lihat Topik 3.3 — Manajemen Masalah.
10. **Umpankan kembali pelajarannya.** Perbarui runbook, pemantauan, dan desain. Bagikan pembelajaran dengan tim lain, dan periksa bahwa insiden berulang menurun.

## Pertanyaan untuk dibahas bersama tim Anda

**Bagaimana kita memutuskan seberapa serius suatu insiden, dan apakah itu pernah diperdebatkan selama insiden?**
Ketidaksepakatan tentang tingkat keparahan membuang waktu. Minta contoh terbaru. Anda mungkin mendengar bahwa jawabannya bergantung pada siapa yang bertanya. Lanjutkan dengan menulis ulang definisi satu tingkat dengan fakta yang dapat diamati.

**Siapa yang memimpin insiden pukul 3 pagi, dan bagaimana mereka tahu bahwa mereka pemimpinnya?**
Kepemimpinan yang tidak jelas adalah penyebab umum kebingungan. Tanyakan siapa yang mengambil keputusan dalam insiden besar terakhir. Harapkan jawaban yang berbeda. Lanjutkan dengan menyepakati bagaimana pemimpin dipilih dan diumumkan.

**Apa yang didengar pengguna dari kita selama insiden, dan seberapa sering?**
Bandingkan apa yang didengar pengguna pada insiden terakhir dengan apa yang mereka inginkan. Harapkan keheningan panjang. Lanjutkan dengan memilih interval pembaruan dan kanal, lalu menyusun templat.

**Apa yang pernah kita eskalasi terlambat, dan mengapa?**
Pertanyaan ini menelusuri ketakutan dan kebiasaan. Orang mungkin menunda karena takut tampak tidak kompeten atau takut membangunkan seseorang. Tanyakan apa yang akan mempermudah eskalasi. Lanjutkan dengan menulis aturan seperti "eskalasi jika tidak ada kemajuan dalam 30 menit".

**Apa yang dikatakan tinjauan insiden terakhir kita bahwa harus diubah, dan apa yang benar-benar berubah?**
Pertanyaan ini menguji tindak lanjut. Minta tindakan dan statusnya. Harapkan sebagian terbuka selama berbulan-bulan. Lanjutkan dengan menetapkan pemilik dan tanggal serta meninjaunya dalam sebulan.

**Di mana AI dapat membantu selama insiden, dan di mana seseorang harus memutuskan?**
AI dapat merangkum linimasa, mencari insiden lampau, dan menyusun pembaruan. Ia tidak dapat bertanggung jawab. Tanyakan tindakan apa yang boleh dilakukan AI tanpa persetujuan, jika ada. Lanjutkan dengan memilih satu pemakaian berisiko rendah dan menyepakati bagaimana keluarannya diperiksa.

## Dalam praktik: contoh manajemen layanan

Tim digital sebuah jaringan apotek nasional menjalankan aplikasi yang memungkinkan pelanggan memesan ulang resep. Pada suatu Jumat malam, pesanan mulai gagal untuk sekitar 30 persen pengguna. Insinyur piket melihat kesalahan dari basis data dan menghubungi pemimpin insiden sesuai jadwal. Pemimpin menyatakan insiden tingkat dua karena pengguna tidak dapat menyelesaikan tugas inti, menugaskan pemimpin komunikasi, dan memulai linimasa.

Dalam 15 menit tim mencurigai perubahan basis data yang di-deploy sore itu. Pemimpin menanyakan apakah rollback aman; insinyur yang membuat perubahan memastikan bahwa itu aman. Tim melakukan rollback, dan pesanan pulih dalam lima menit. Total waktu dari peringatan pertama hingga pemulihan adalah 47 menit. Pemimpin komunikasi telah memposting di halaman status pada menit ke-20, lagi pada menit ke-35, dan pembaruan akhir saat pemulihan, serta memberi tahu tim layanan pelanggan apa yang harus dikatakan.

Minggu berikutnya tim mengadakan tinjauan tanpa menyalahkan. Linimasa menunjukkan bahwa deteksi bergantung pada keluhan pengguna, karena tidak ada peringatan yang mencakup pesanan yang gagal; perubahan telah ditinjau tetapi lingkungan uji tidak memiliki data yang realistis; dan pembaruan pertama lebih lambat dari interval yang disepakati karena pemimpin komunikasi tidak yakin apa yang boleh dikatakan halaman status. Tim menambahkan peringatan atas tingkat kegagalan pesanan, memperbaiki data uji, dan menulis templat halaman status.

Yang berubah: insiden serupa berikutnya terdeteksi oleh peringatan dalam tiga menit. Yang masih sulit: data uji tidak memuat informasi pasien nyata, karena alasan yang baik, yang membatasi seberapa realistis ia bisa; jadwal masih memiliki sedikit insinyur yang dapat melakukan rollback basis data dengan aman; dan daftar tindakan tinjauan berisi dua belas butir sementara tim punya waktu untuk lima. Mereka memilih berdasarkan risiko dan menaruh sisanya di backlog dengan tanggal.

## Empat perspektif

### Tim produk dan pengiriman

Bangun untuk pemulihan: buat perubahan dapat dibalik, tambahkan peringatan dan log yang menunjukkan dampak pada pengguna, dan tulis runbook sambil jalan. Ikut dalam tinjauan dan perbaiki penyebab dalam desain.

### Tim layanan dan operasi

Ketahui peran Anda, berlatihlah, dan simpan linimasa. Eskalasi lebih awal, berkomunikasilah secara stabil, dan saling menjaga. Bawa apa yang Anda pelajari ke tinjauan dan gunakan untuk memperbaiki runbook dan pemantauan.

### Kepemimpinan dan tata kelola

Sepakati definisi tingkat keparahan dan ekspektasi di muka, dan tahan diri dari menyalahkan. Selama insiden besar, dukung pemimpin dan minta pembaruan hanya melalui kanal yang disepakati. Danai tindakan tindak lanjut.

### Pelanggan dan pengguna

Anda seharusnya segera diberi tahu apa yang terdampak, apa yang sedang dilakukan, dan kapan Anda akan mendengar lagi. Laporkan apa yang Anda lihat, dengan rincian. Setelah insiden besar, harapkan penjelasan yang jelas tentang apa yang berubah.

## Agile, AI, otomatisasi, dan analitik

### Agile

Perlakukan tinjauan insiden sebagai lingkar umpan balik pendek yang menggerakkan perbaikan: perubahan kecil pada runbook, peringatan, dan desain, dilakukan dengan cepat dengan pemangku kepentingan terinformasi. Perhatian: daftar tindakan panjang yang tidak diselesaikan siapa pun lebih buruk daripada yang pendek namun dikerjakan.

### AI

AI dapat menyusun pembaruan, merangkum linimasa dan obrolan, dan menemukan insiden terdahulu yang serupa. Pemimpin insiden tetap bertanggung jawab, dan keluaran AI adalah saran. Perhatian: AI dapat mengarang penyebab atau waktu, dan pembaruan yang disusun otomatis dan dikirim tanpa tinjauan dapat menyesatkan pelanggan; selalu periksa sebelum mengirim. Lihat Topik 5.4 — AI generatif untuk insiden, pengetahuan, dan perubahan.

### Otomatisasi

Otomatiskan langkah respons yang aman dan dapat diulang, seperti mengumpulkan data diagnostik, memanggil orang yang tepat, dan menjalankan restart yang sudah ditinjau, dengan log dan batas. Perhatian: otomatisasi yang bertindak selama insiden dapat memperburuknya; pertahankan penghentian manual, dan uji di lingkungan yang aman. Lihat Topik 6.6 — Otomatisasi runbook dan perbaikan otomatis.

### Analitik

Lihat waktu untuk mendeteksi, merespons, dan memulihkan, distribusi masing-masing, dan insiden berulang. Perhatian: rata-rata menyembunyikan insiden terburuk, definisi awal dan akhir bervariasi, dan ukuran yang dipakai untuk menilai tim mengundang manipulasi stempel waktu; pelajari juga insiden satu per satu. Lihat buku *Service Management Metrics* dan Topik 7.3 — Pengukuran dan pelaporan.

## Mode kegagalan umum

- **Tingkat keparahan diperdebatkan selama insiden.** Waktu terbuang. Tulis definisi dengan fakta yang dapat diamati.
- **Tidak ada pemimpin yang jelas.** Semua bertindak dan tak seorang pun memutuskan. Tunjuk pemimpin dan umumkan.
- **Menyelidiki saat layanan mati.** Pemulihan tertunda. Terapkan solusi sementara yang aman lebih dulu.
- **Hening kepada pengguna.** Kecemasan dan kontak berulang naik. Perbarui dalam irama.
- **Menyalahkan dalam tinjauan.** Orang menyembunyikan kesalahan. Adakan tinjauan tanpa menyalahkan dan lacak tindakan.
- **Ketergantungan pada pahlawan.** Satu orang memperbaiki segalanya. Bagikan pengetahuan dan tulis runbook.
- **Tindakan otomatis tanpa batas.** Otomatisasi memperburuk insiden. Tambahkan batas, log, dan penghentian manual.

## Model kematangan

| Dimensi | Memulai | Mengembangkan | Menstandardisasi | Mengelola | Mengorkestrasi |
|---|---|---|---|---|---|
| Tingkat keparahan dan proses | Ad hoc | Tingkat informal | Tingkat terdefinisi dengan respons yang diharapkan | Tingkat ditinjau dengan data | Proses disesuaikan lintas layanan dan mitra |
| Peran dan latihan | Berimprovisasi | Beberapa peran disebutkan | Peran didefinisikan dan dilatih | Latihan diukur dan diperbaiki | Latihan dibagikan dengan pemasok dan pelanggan |
| Komunikasi | Tidak teratur | Pembaruan saat teringat | Irama dan kanal pembaruan per tingkat keparahan | Mutu komunikasi ditinjau | Konsisten lintas tim, pelanggan, dan mitra |
| Pembelajaran | Menyalahkan | Tinjauan sesekali | Tinjauan tanpa menyalahkan dengan tindakan yang dilacak | Pengulangan diukur dan dikurangi | Pembelajaran dibagikan di seluruh organisasi |

## Daftar periksa

- [ ] Tingkat keparahan didefinisikan dengan fakta yang dapat diamati dan respons yang diharapkan.
- [ ] Peran insiden ditunjuk dan dilatih.
- [ ] Pemicu eskalasi dituliskan.
- [ ] Linimasa langsung disimpan untuk insiden yang signifikan.
- [ ] Interval pembaruan dan kanal ditetapkan untuk setiap tingkat keparahan.
- [ ] Beban piket dibatasi dan dipantau.
- [ ] Tinjauan bebas menyalahkan dan tindakan dilacak hingga selesai.
- [ ] AI dan otomatisasi yang dipakai dalam insiden memiliki pemilik, batas, dan tinjauan.

## Prompt AI

**Ringkas linimasa insiden untuk tinjauan.**

```text
Here are the chat messages and notes from an incident, with times and names removed: [paste text].
Produce a timeline of key events, a list of decisions and who made them (by role only), what helped, what slowed us down, and questions for the review. Use only the text and mark anything uncertain.
List what you are unsure of.
```

**Susun draf pembaruan status untuk ditinjau.**

```text
Facts we know: [paste confirmed facts]. Facts we do not know: [list]. Next update in: [time].
Draft a status update of under 80 words in plain language that states what is affected, what we are doing, and when the next update is due. Do not speculate about causes or give an estimate for recovery that is not in the facts.
List what you are unsure of.
```

**Periksa definisi tingkat keparahan.**

```text
Our severity definitions: [paste]. Here are three past incidents with their impact: [paste].
For each incident, say which level the definitions suggest, quote the words you used, and note where the definitions were ambiguous. Do not change the definitions.
List what you are unsure of.
```

## Skill AI

- [incident-response-plan](../../../../skills/incident-response-plan/SKILL.md): gunakan untuk mendefinisikan peran, tingkat keparahan, dan langkah merespons insiden.
- [postmortem](../../../../skills/postmortem/SKILL.md): gunakan untuk menjalankan tinjauan tanpa menyalahkan dengan tindakan yang dilacak.
- [runbook](../../../../skills/runbook/SKILL.md): gunakan untuk menangkap langkah respons untuk kegagalan yang dikenal.
- [crisis-communication-plan](../../../../skills/crisis-communication-plan/SKILL.md): gunakan untuk merencanakan pembaruan kepada pengguna dan pemangku kepentingan.
- [on-call-rotation](../../../../skills/on-call-rotation/SKILL.md): gunakan untuk merancang pengaturan piket yang berkelanjutan.

## Sumber utama

- Betsy Beyer dan lainnya (ed.), *Site Reliability Engineering* (2016), bab tentang respons insiden dan postmortem, gratis di sre.google: panduan praktis dari operator besar.
- PeopleCert, halaman sertifikasi ITIL: uraian pemilik tentang praktik manajemen insiden.
- Wikipedia, "Incident management": ikhtisar praktik ini.
- Wikipedia, "Incident Command System": model manajemen darurat yang memengaruhi peran insiden teknis.

## Referensi

1. Incident management — Wikipedia — https://en.wikipedia.org/wiki/Incident_management
2. Incident Command System — Wikipedia — https://en.wikipedia.org/wiki/Incident_Command_System
3. Mean time to recovery — Wikipedia — https://en.wikipedia.org/wiki/Mean_time_to_recovery
4. Escalation — Wikipedia — https://en.wikipedia.org/wiki/Escalation
5. Crisis communication — Wikipedia — https://en.wikipedia.org/wiki/Crisis_communication
6. Alarm fatigue — Wikipedia — https://en.wikipedia.org/wiki/Alarm_fatigue
7. Workaround — Wikipedia — https://en.wikipedia.org/wiki/Workaround
8. Runbook — Wikipedia — https://en.wikipedia.org/wiki/Runbook
9. Triage — Wikipedia — https://en.wikipedia.org/wiki/Triage
10. Site Reliability Engineering: How Google Runs Production Systems — Google — https://sre.google/sre-book/table-of-contents/
