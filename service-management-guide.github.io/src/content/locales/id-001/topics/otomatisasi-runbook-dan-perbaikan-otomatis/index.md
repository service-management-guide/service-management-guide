# Otomatisasi runbook dan perbaikan otomatis

**Otomatisasi runbook mengubah prosedur yang terdokumentasi dan teruji menjadi kode yang dapat dipicu orang atau peringatan, dan perbaikan otomatis (auto-remediation) membiarkan sinyal pemantauan memicunya tanpa orang; keduanya hanya aman untuk tindakan yang dipahami dengan baik dan dapat dibalik, dengan batas, log, penghentian manual, dan pemilik yang meninjau seberapa sering ia menyala.**

## Mengapa ini penting

Pekerjaan piket memiliki bentuk. Peringatan menyala. Insinyur yang lelah membuka runbook, mengikuti serangkaian langkah, memulai ulang sesuatu, memeriksa bahwa berhasil, lalu kembali tidur. Seminggu kemudian peringatan yang sama menyala, dan langkah yang sama diikuti. Setelah kali kesepuluh, seseorang berkata: mengapa manusia yang mengerjakan ini?

Mereka benar. Mengulang perbaikan yang dikenal dengan tangan itu lambat, rawan kesalahan, dan menggerogoti orang yang mengerjakannya. Langkah yang sama, ditulis sebagai kode, berjalan dalam hitungan detik, dengan cara yang sama setiap kali, dan meninggalkan catatan. Wikipedia menjelaskan runbook sebagai kompilasi prosedur rutin yang dilakukan operator. Menjadikannya dapat dieksekusi, dan dalam beberapa kasus membuatnya berjalan sendiri, adalah langkah dari dokumentasi ke otomatisasi.

Langkah itu juga bahaya. Runbook yang dibaca manusia melewati penilaian manusia pada setiap langkah. Kode tidak. Restart otomatis yang salah dapat berulang tanpa henti, atau menjatuhkan layanan yang sehat, atau menutupi masalah yang lebih dalam sampai jauh lebih buruk. Banyak gangguan diperpanjang atau disebabkan oleh perbaikan yang bermaksud baik yang melakukan hal yang salah dengan cepat. Wikipedia menjelaskan autonomic computing, tujuan lama tentang sistem yang mengelola diri sendiri, dan pelajaran praktisnya adalah bahwa otonomi membutuhkan batas.

Topik ini menjelaskan cara bergerak dari dokumen ke skrip ke tindakan otomatis dengan hati-hati. Ia dibangun di atas manajemen pengetahuan (Topik 3.9 — Manajemen Pengetahuan), pemantauan (Topik 3.10 — Pemantauan dan Manajemen Peristiwa), manajemen insiden (Topik 3.2 — Manajemen Insiden), dan strategi otomatisasi (Topik 6.1 — Strategi otomatisasi). Ia terhubung dengan operasi AI (Topik 5.2 — AIOps) dan agen yang bertindak (Topik 5.5 — AI agentik dan pengawasan manusia).

## Konsep inti

**Runbook.** Prosedur terdokumentasi untuk tugas atau situasi operasional tertentu yang berulang. Wikipedia menjelaskan runbook. Runbook yang baik memiliki pemicu, langkah bernomor, hasil yang diharapkan, langkah verifikasi, dan jalur eskalasi. Lihat Topik 3.9 — Manajemen Pengetahuan.

**Otomatisasi runbook.** Mengimplementasikan runbook sebagai kode yang mengeksekusi sebagian atau semua langkahnya, biasanya dipicu orang dari konsol atau perintah obrolan, atau oleh peristiwa sistem. Ia mempertahankan logika runbook, dengan manfaat kecepatan, konsistensi, dan catatan.

**Perbaikan otomatis (auto-remediation).** Tindakan korektif otomatis sebagai respons terhadap peringatan atau peristiwa, tanpa orang memulainya. Contohnya memulai ulang proses yang gagal, membersihkan direktori sementara yang penuh, menskalakan keluar kumpulan pekerja, atau failover ke cadangan. Artikel Wikipedia tentang autonomic computing menjelaskan sistem yang mendeteksi dan mengoreksi kesalahannya sendiri sebagai tujuan. Dalam praktik, perbaikan otomatis mencakup sekumpulan sempit kesalahan yang dipahami dengan baik.

**Sebuah tangga.** Tim lazimnya bergerak melalui tahap: runbook tertulis; runbook dengan skrip yang dijalankan orang; runbook yang dipicu orang dengan satu perintah, dengan skrip mengumpulkan pemeriksaan lebih dulu; peringatan yang mengusulkan tindakan dan meminta persetujuan; dan peringatan yang menjalankan tindakan sendiri dalam batas. Setiap tahap membutuhkan bukti dari tahap sebelumnya. Jangan melompati tahap untuk tindakan yang berkonsekuensi nyata.

**Apa yang layak untuk tindakan otomatis.** Kesalahan yang umum, yang penyebab dan perbaikannya dipahami dengan baik, yang perbaikannya aman dan dapat dibalik, dan yang gejalanya mengidentifikasinya secara andal. Contohnya pekerja tanpa keadaan yang menggantung atau direktori log yang penuh. Kandidat yang buruk mencakup apa pun yang menghapus data, mengubah akses, atau bergantung pada penilaian dampak bisnis.

**Kondisi keselamatan.** Sebelum bertindak, periksa bahwa situasinya benar-benar cocok: peringatan masih terkini, layanan dalam keadaan yang diharapkan, tidak ada deployment atau pemeliharaan sedang berlangsung, dan tindakan belum baru saja berjalan. Setelah bertindak, verifikasi hasilnya. Wikipedia menjelaskan dry run, latihan yang menunjukkan apa yang akan terjadi tanpa melakukannya; ia mode yang berguna untuk otomatisasi baru.

**Batas.** Batasi berapa kali tindakan dapat berjalan dalam suatu periode, berapa banyak instans yang dapat disentuhnya sekaligus, dan berapa lama ia dapat berjalan. Wikipedia menjelaskan rate limiting. Batas mengubah kesalahan yang lepas kendali menjadi peristiwa yang terbatas, dan melampaui batas harus memanggil orang.

**Pemutus sirkuit dan backoff.** Jika tindakan otomatis berulang kali gagal atau berulang kali menyala, berhenti dan eskalasi alih-alih mencoba ulang selamanya. Wikipedia menjelaskan pola circuit breaker, di mana kegagalan berulang memicu sakelar yang menghentikan percobaan lebih lanjut untuk sementara. Tambahkan jeda antarpercobaan dan histeresis, yang dijelaskan di Wikipedia, untuk mencegah goyangan antarkeadaan.

**Idempotensi.** Tindakan yang aman diulang. Wikipedia menjelaskan idempotence. Memulai ulang layanan ketika ia sudah memulai ulang tidak boleh menyebabkan badai restart kedua. Rancang tindakan yang memeriksa keadaan lebih dulu.

**Watchdog dan pemulihan bawaan.** Platform menyediakan mekanisme pemulihan sendiri: pengawas proses yang memulai ulang layanan yang crash, platform kontainer yang mengganti instans yang gagal, dan watchdog timer, yang dijelaskan di Wikipedia, yang mengatur ulang sistem yang menggantung. Utamakan mekanisme bawaan daripada skrip khusus bila cocok, dan pahami apa yang dilakukannya.

**Failover dan penskalaan.** Failover otomatis ke cadangan dan penskalaan otomatis kapasitas adalah bentuk perbaikan otomatis yang sering disediakan platform. Wikipedia menjelaskan failover dan autoscaling. Keduanya juga membutuhkan pengujian dan batas, karena dapat memperburuk keadaan: failover yang dipicu oleh gangguan singkat dapat mengganggu layanan yang sehat.

**Menutupi masalah.** Otomatisasi yang diam-diam memperbaiki kesalahan dapat menyembunyikan penyebab yang memburuk. Jika layanan dimulai ulang setiap jam, restart itu adalah gejala masalah yang perlu diperbaiki. Lacak seberapa sering setiap otomatisasi menyala dan perlakukan laju yang naik sebagai masalah untuk diselidiki. Lihat Topik 3.3 — Manajemen Masalah.

**Log, audit, dan notifikasi.** Setiap tindakan otomatis harus mencatat apa yang memicunya, apa yang diperiksanya, apa yang dilakukannya, dan hasilnya, serta memberi tahu tim pemiliknya. Otomatisasi yang diam mengikis pemahaman tentang sistem. Wikipedia menjelaskan audit trail secara umum.

**Pengujian.** Uji otomatisasi terhadap kesalahan realistis di lingkungan aman, termasuk kasus di mana pemeriksaan harus menghentikan tindakan. Wikipedia menjelaskan chaos engineering, praktik menyuntikkan kegagalan secara sengaja, yang juga dapat menguji apakah perbaikan berperilaku benar. Lihat Topik 3.12 — Manajemen Kontinuitas Layanan.

**Kepemilikan dan tinjauan.** Setiap otomatisasi memiliki pemilik, berada dalam kontrol versi dengan tinjauan, dan tercantum dalam register. Tinjau secara berkala seberapa sering ia menyala, apakah berhasil, dan apakah penyebab di baliknya harus diperbaiki.

**Akses dan keamanan.** Perangkat perbaikan memiliki kuasa atas produksi. Beri identitas sendiri dengan izin sempit yang dibutuhkan setiap tindakan, dan lindungi kode dan pemicunya dari pengubahan. Lihat Topik 3.13 — Manajemen Keamanan Informasi.

**Keterampilan manusia.** Jika otomatisasi menangani kesalahan rutin, orang mungkin kehilangan perasaan terhadap sistem. Jaga runbook tetap terbaca, latih pengoperasian manual, dan sertakan otomatisasi dalam game day. Lihat Topik 6.1 — Strategi otomatisasi.

**Bagaimana lensa-lensa cocok.** Topik ini adalah lensa otomatisasi pada titik operasi. Praktik agile menyarankan naik tangga dalam langkah kecil dengan tinjauan setelah setiap insiden. AI dapat menyarankan tindakan dan memilih runbook, di bawah batas yang dijelaskan di sini. Analitik mengukur laju menyala, keberhasilan, dan masalah yang tertutupi.

## Praktik terbaik

1. **Mulai dengan runbook yang baik.** Tulis, uji, dan pakai prosedur dengan tangan lebih dulu. Otomatisasi prosedur yang tidak berfungsi hanya merusak lebih cepat.
2. **Pilih kandidat dengan hati-hati.** Cari perbaikan yang sering, dipahami dengan baik, aman, dan dapat dibalik dengan sinyal yang andal. Peringkatkan menurut waktu piket yang dihemat dan menurut risiko.
3. **Naiki tangga.** Bergerak dari skrip ke pemicu satu perintah, ke tindakan yang diusulkan dengan persetujuan, ke tindakan otomatis hanya seiring bukti menumpuk. Catat keputusan pada setiap langkah.
4. **Periksa sebelum dan sesudah.** Verifikasi bahwa situasi cocok, bahwa tidak ada aktivitas yang berbenturan sedang berlangsung, dan bahwa tindakan berhasil. Berhenti dan eskalasi jika pemeriksaan apa pun gagal.
5. **Tetapkan batas dan pemutus.** Batasi frekuensi, cakupan, dan durasi. Jika tindakan menyala terlalu sering atau gagal dua kali, berhenti dan panggil orang.
6. **Buat tindakan idempoten dan dapat dibalik.** Periksa keadaan lebih dulu, dan tuliskan jalan kembali. Uji keduanya.
7. **Catat, beri tahu, dan buat terlihat.** Catat setiap tindakan otomatis, beri tahu tim pemilik, dan tunjukkan laju menyala di dasbor.
8. **Perbaiki penyebabnya.** Hitung seberapa sering setiap otomatisasi menyala, dan angkat masalah ketika lajunya tinggi atau naik. Perlakukan otomatisasi sebagai jembatan menuju perbaikan, bukan penggantinya.
9. **Uji dalam kondisi aman.** Latih dengan kesalahan realistis dan kasus tepi, termasuk yang seharusnya ditolak. Sertakan otomatisasi dalam game day.
10. **Miliki dan tinjau.** Tunjuk pemilik, simpan kode dalam kontrol versi dengan tinjauan, daftarkan setiap otomatisasi, dan tinjau setiap triwulan mana yang dipertahankan, diubah, atau dipensiunkan.

## Pertanyaan untuk dibahas bersama tim Anda

**Peringatan mana yang kita perbaiki dengan cara yang sama setiap kali, dan berapa lama masing-masing?**
Pakai data insiden dan peringatan. Harapkan segelintir yang menyumbang sebagian besar panggilan. Lanjutkan dengan memilih satu dan memeriksa bahwa runbook-nya akurat.

**Apa yang bisa salah jika perbaikan ini berjalan ketika seharusnya tidak?**
Bayangkan pemicu yang salah atau sasaran yang salah. Harapkan beberapa kasus yang tidak menyenangkan. Lanjutkan dengan menambahkan pemeriksaan atau batas untuk masing-masing.

**Bagaimana kita tahu otomatisasi menutupi masalah yang tumbuh?**
Tanyakan apa yang akan kita lihat. Harapkan "tidak ada". Lanjutkan dengan menyepakati menghitung kemunculan dan menetapkan ambang untuk mengangkat masalah.

**Apa kerusakan maksimum yang dapat dilakukan satu putaran, dan bagaimana kita menghentikannya?**
Sebutkan cakupannya. Harapkan ketidakpastian. Lanjutkan dengan menetapkan batas dan melatih penghentian.

**Kapan terakhir kali kita mengerjakan tugas ini dengan tangan, dan dapatkah semua orang yang berjaga masih melakukannya?**
Tanyakan kapan terakhir kali. Harapkan sudah lama. Lanjutkan dengan menjadwalkan latihan.

**Di mana AI dapat mengusulkan atau memilih perbaikan, dan apa yang tetap harus disetujui seseorang?**
AI dapat mencocokkan gejala dengan runbook dan menyarankan tindakan. Tanyakan tindakan mana yang memerlukan persetujuan dan siapa yang memutuskan. Lanjutkan dengan memilih uji coba di mana AI mengusulkan dan seseorang menyetujui, dengan ukuran seberapa sering saran itu benar.

## Dalam praktik: contoh manajemen layanan

Tim informasi penumpang sebuah perusahaan kereta api nasional menjalankan layar di 400 stasiun, diumpan layanan data. Sekitar dua kali seminggu, pemroses umpan menggantung dan layar membeku pada waktu lama. Insinyur piket dipanggil, masuk, memeriksa bahwa proses menggantung, memulai ulang, dan mengonfirmasi pembaruan. Ini memakan sekitar 20 menit, sebagian besar pada malam hari.

Tim menuliskan runbook, memperbaikinya setelah mencoba pada dua insiden: konfirmasi peringatan, periksa bahwa tidak ada deployment berlangsung, periksa bahwa proses belum menulis ke lognya selama lima menit, mulai ulang, tunggu dua menit, periksa bahwa stempel waktu keluaran terkini, dan catat insiden. Mereka mengubahnya menjadi skrip dengan mode dry-run, dan seorang insinyur memicunya dengan satu perintah obrolan selama sebulan. Ia berhasil setiap kali.

Lalu mereka menghubungkannya ke peringatan dalam mode usulan: peringatan memposting temuan skrip dan tombol yang meminta insinyur piket menyetujui. Setelah sebulan, setiap persetujuan benar, memakan waktu kurang dari dua menit. Tim sepakat membiarkannya berjalan otomatis dalam kondisi ketat: hanya ketika pemeriksaan lolos, paling banyak dua kali dalam sejam, tidak pernah selama deployment, dan dengan panggilan kepada orang jika restart kedua tidak memperbaikinya. Ia mencatat setiap putaran dan memposting ke kanal tim.

Otomatisasi menyala 19 kali dalam dua bulan pertama. Tinjauan menunjukkan bahwa penggantungan lebih sering terjadi setelah pembaruan larut malam dari pemasok data tertentu, yang tidak disadari tim ketika menangani setiap panggilan sendirian. Mereka mengangkat masalah kepada pemasok. Dalam satu putaran, pemutus bekerja setelah dua restart gagal dan memanggil insinyur, yang mendapati bahwa disk penuh, penyebab yang tidak dicakup runbook.

Yang berubah: insinyur tidur melewati sebagian besar kejadian ini, dan layar pulih dalam kurang dari tiga menit. Yang masih sulit: pemasok belum memperbaiki format data; tim menyadari bahwa insinyur baru belum pernah mengerjakan prosedur manual dan mengkhawatirkan keterampilan mereka; dan langkah tambahan memeriksa disk baru ditambahkan setelah kejutan itu. Ketua menjadwalkan latihan manual triwulanan dan menambahkan pemeriksaan disk ke skrip.

## Empat perspektif

### Tim produk dan pengiriman

Bangun layanan yang mudah diperbaiki: endpoint kesehatan, restart aman, operasi idempoten, dan log yang jelas. Tulis runbook bersama kode, dan perbaiki penyebab yang diungkap otomatisasi.

### Tim layanan dan operasi

Miliki runbook dan otomatisasi: tulis, uji, batasi, catat, dan tinjau. Jaga keterampilan manual tetap hidup, dan perlakukan penyalaan yang sering sebagai masalah untuk diperbaiki.

### Kepemimpinan dan tata kelola

Dukung naik tangga dengan bukti, dan minta laju menyala serta pemeriksaan masalah yang tertutupi. Danai waktu untuk memperbaiki penyebab. Waspadai klaim sistem yang menyembuhkan diri sendiri.

### Pelanggan dan pengguna

Anda seharusnya melihat pemulihan lebih cepat dan lebih sedikit gangguan yang terlihat. Jika perbaikan otomatis tidak berhasil atau menimbulkan masalah, beri tahu penyedia agar aturannya dapat dikoreksi.

## Agile, AI, otomatisasi, dan analitik

### Agile

Perbaiki remediasi setelah setiap insiden: haluskan runbook, tambahkan pemeriksaan, atau ambil satu langkah naik tangga. Jaga perubahan kecil dan ditinjau. Perhatian: jangan mengotomatiskan secara massal setelah malam yang buruk; ambil satu perbaikan pada satu waktu dengan pengujian.

### AI

AI dapat mencocokkan peringatan dengan runbook, menyarankan langkah, dan menyusun runbook baru dari catatan insiden, dengan persetujuan untuk apa pun yang bertindak. Tunjuk pemilik dan ukur akurasi saran. Perhatian: AI yang memilih tindakan dari peringatan yang tidak biasa dapat memilih salah; batasi pada daftar tindakan yang disetujui. Lihat Topik 5.5 — AI agentik dan pengawasan manusia.

### Otomatisasi

Topik ini adalah lensa otomatisasi dalam operasi: kondisi keselamatan, batas, pemutus, idempotensi, log, dan tinjauan. Perhatian: perbaikan otomatis dapat menutupi masalah dan memperburuknya; hitung kemunculan, batasi putaran, dan eskalasi saat gagal. Lihat Topik 6.1 — Strategi otomatisasi.

### Analitik

Lacak laju menyala per otomatisasi, tingkat keberhasilan, waktu pemulihan, jumlah panggilan yang dihindari, pemicuan pemutus, dan masalah yang diangkat dari pola. Perhatian: panggilan yang dihindari mudah digelembungkan dan dapat menyembunyikan laju menyala yang naik; lacak keduanya bersama. Lihat Topik 7.4 — Observabilitas dan telemetri dan buku *Service Management Metrics*.

## Mode kegagalan umum

- **Mengotomatiskan runbook yang belum teruji.** Perbaikannya salah dengan kecepatan tinggi. Uji dengan tangan lebih dulu.
- **Tidak ada batas.** Lingkar atau salah tembak berulang. Batasi putaran dan pakai pemutus.
- **Masalah tersembunyi.** Restart menutupi penyebab. Hitung kemunculan dan perbaiki penyebab.
- **Tidak ada pemeriksaan sebelum bertindak.** Tindakan menimpa sistem yang sehat atau sibuk. Verifikasi kondisi.
- **Otomatisasi yang diam.** Tak seorang pun tahu apa yang dilakukannya. Catat dan beri tahu.
- **Keterampilan memudar.** Tak seorang pun dapat melakukannya dengan tangan. Berlatih.
- **Perangkat berhak istimewa berlebih.** Satu kompromi menjangkau segalanya. Pakai identitas sempit.

## Model kematangan

| Dimensi | Memulai | Mengembangkan | Menstandardisasi | Mengelola | Mengorkestrasi |
|---|---|---|---|---|---|
| Runbook | Di kepala atau email | Ditulis untuk peringatan utama | Runbook teruji tertaut ke peringatan | Mutu runbook ditinjau setelah insiden | Runbook dipelihara sebagai kode lintas layanan |
| Otomatisasi | Tidak ada | Skrip dipicu orang | Tindakan teruji yang disetujui dengan usulan | Tindakan terpilih berjalan otomatis dengan batas | Tindakan aman dipilih menurut risiko dengan kendali manusia |
| Keselamatan | Tidak ada | Pencatatan dasar | Pemeriksaan, batas, pemutus, dan rollback | Keselamatan diuji dan diaudit | Keselamatan terbangun dalam platform bersama |
| Pembelajaran | Memadamkan api | Tinjauan sesekali | Laju menyala dilacak dan penyebab diangkat sebagai masalah | Pengulangan diukur dan dikurangi | Pembelajaran dibagikan lintas tim dan pemasok |

## Daftar periksa

- [ ] Runbook ditulis, diuji, dan dipakai dengan tangan sebelum otomatisasi.
- [ ] Setiap otomatisasi memiliki pemicu, prasyarat, verifikasi, dan eskalasi.
- [ ] Tindakan idempoten dan dapat dibalik.
- [ ] Batas dan pemutus sirkuit membatasi frekuensi dan cakupan.
- [ ] Setiap putaran dicatat dan tim pemilik diberi tahu.
- [ ] Kami melacak seberapa sering setiap otomatisasi menyala dan mengangkat masalah dari pola.
- [ ] Otomatisasi berada dalam kontrol versi, ditinjau, dan didaftarkan dengan pemilik.
- [ ] Kami melatih pengoperasian manual dan menguji otomatisasi dengan kesalahan realistis.

## Prompt AI

**Ubah catatan insiden menjadi draf runbook.**

```text
Here are notes from three incidents that had the same fix: [paste, personal data removed].
Draft a runbook with: trigger, preconditions to check, numbered steps with expected results, verification, rollback, and escalation. Use only what the notes say; write [missing] for anything not stated.
List what you are unsure of.
```

**Temukan celah keselamatan dalam sebuah otomatisasi.**

```text
Here is a description of an auto-remediation: trigger, checks, action, and limits: [paste].
List which of these are missing or unclear: precondition checks, post-action verification, rate limit, circuit breaker, idempotence, rollback, logging, notification, owner. Quote the text for each you consider present. Do not assume any.
List what you are unsure of.
```

**Tinjau data penyalaan.**

```text
Here is a log of when each automation fired in the last month, with result: [paste].
Count firings per automation, list those that are rising or clustered at the same time of day, and list questions to find causes. Do not guess causes.
List what you are unsure of.
```

## Skill AI

- [runbook](../../../../skills/runbook/SKILL.md): gunakan untuk menulis dan menguji prosedur sebelum mengotomatiskan.
- [chaos-testing](../../../../skills/chaos-testing/SKILL.md): gunakan untuk menguji perbaikan terhadap kesalahan realistis.
- [root-cause-analysis](../../../../skills/root-cause-analysis/SKILL.md): gunakan untuk menemukan penyebab yang disembunyikan otomatisasi.
- [on-call-rotation](../../../../skills/on-call-rotation/SKILL.md): gunakan untuk merancang pengaturan piket yang berkelanjutan.
- [incident-response-plan](../../../../skills/incident-response-plan/SKILL.md): gunakan untuk mendefinisikan peran dan eskalasi di sekitar otomatisasi.

## Sumber utama

- Betsy Beyer dan lainnya (ed.), *Site Reliability Engineering* (2016), bab tentang menghilangkan toil dan tentang otomatisasi, gratis di sre.google.
- Lisanne Bainbridge, "Ironies of Automation" (*Automatica*, 1983): mengapa otomatisasi mengubah peran manusia dengan cara yang mengejutkan.
- Wikipedia, "Runbook" dan "Autonomic computing": ikhtisar dokumen dan aspirasinya.
- Wikipedia, "Circuit breaker design pattern": pola untuk menghentikan kegagalan berulang.

## Referensi

1. Runbook — Wikipedia — https://en.wikipedia.org/wiki/Runbook
2. Autonomic computing — Wikipedia — https://en.wikipedia.org/wiki/Autonomic_computing
3. Circuit breaker design pattern — Wikipedia — https://en.wikipedia.org/wiki/Circuit_breaker_design_pattern
4. Watchdog timer — Wikipedia — https://en.wikipedia.org/wiki/Watchdog_timer
5. Idempotence — Wikipedia — https://en.wikipedia.org/wiki/Idempotence
6. Rate limiting — Wikipedia — https://en.wikipedia.org/wiki/Rate_limiting
7. Failover — Wikipedia — https://en.wikipedia.org/wiki/Failover
8. Autoscaling — Wikipedia — https://en.wikipedia.org/wiki/Autoscaling
9. Chaos engineering — Wikipedia — https://en.wikipedia.org/wiki/Chaos_engineering
10. Hysteresis — Wikipedia — https://en.wikipedia.org/wiki/Hysteresis
11. Dry run (testing) — Wikipedia — https://en.wikipedia.org/wiki/Dry_run_(testing)
12. Site Reliability Engineering: How Google Runs Production Systems — Google — https://sre.google/sre-book/table-of-contents/
