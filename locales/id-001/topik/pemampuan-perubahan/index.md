# Pemampuan Perubahan

**Pemampuan perubahan (change enablement) memastikan bahwa perubahan pada layanan dilakukan dengan aman dan cepat; ia menilai risiko, menyerahkan wewenang kepada orang yang paling dekat dengan perubahan, dan memindahkan pemeriksaan rutin ke dalam pipeline, dengan menyisakan tinjauan manusia untuk perubahan yang memerlukan penilaian.**

## Mengapa ini penting

Perubahan menyebabkan insiden. Sunting konfigurasi, rilis kode, pembaruan sertifikat, aturan firewall: semuanya dapat menjatuhkan layanan. Sebagian besar organisasi mempelajarinya dengan cara yang pahit, dan menanggapinya dengan kontrol: formulir, persetujuan, rapat, pembekuan. Kontrol itu mengurangi sebagian risiko dan menambah keterlambatan, dan keterlambatan mendorong orang menggabungkan perubahan menjadi batch yang lebih besar, yang lebih berisiko.

Bentuk tradisional kontrol ini adalah change advisory board (CAB), kelompok yang meninjau perubahan yang diusulkan. Dewan dapat menambah nilai nyata ketika membawa pandangan luas pada perubahan yang berisiko. Dewan juga menjadi hambatan ketika meninjau setiap perubahan, termasuk yang rutin dan telah berhasil seribu kali. Riset tentang penyampaian perangkat lunak yang dilaporkan dalam buku *Accelerate*, oleh Nicole Forsgren, Jez Humble, dan Gene Kim, menemukan bahwa persetujuan eksternal yang berat tidak dikaitkan dengan stabilitas yang lebih baik dan dikaitkan dengan penyampaian yang lebih lambat; tinjauan sejawat dan pemeriksaan otomatis dikaitkan dengan hasil yang lebih baik. Datanya berasal dari survei dan punya batas sendiri, tetapi arahnya konsisten dengan pengalaman banyak tim.

ITIL 4 mengganti nama praktik ini menjadi "change enablement", untuk menandakan bahwa tujuannya adalah memungkinkan perubahan yang bermanfaat dengan memastikan risiko dinilai dengan benar, mengotorisasi perubahan untuk berlanjut, dan mengelola jadwal perubahan. Topik ini menunjukkan cara melakukannya dengan rute berbeda untuk jenis perubahan yang berbeda, dan cara membangun bukti ke dalam pekerjaan. Ia dibangun di atas pengiriman berkelanjutan (Topik 2.2 — Pengiriman berkelanjutan) dan terhubung dengan manajemen rilis (Topik 3.5 — Manajemen Rilis dan Deployment) dan manajemen konfigurasi (Topik 4.4 — Manajemen Konfigurasi).

## Konsep inti

**Perubahan.** Dalam ITIL 4, penambahan, modifikasi, atau penghapusan apa pun yang dapat berdampak langsung atau tidak langsung pada layanan. Cakupannya luas: perangkat lunak, infrastruktur, konfigurasi, dokumen, pemasok, dan proses. Artikel Wikipedia tentang change management dan change control menjelaskan gagasan ini dalam TI dan rekayasa.

**Pemampuan perubahan versus manajemen perubahan.** "Manajemen perubahan" juga dipakai untuk perubahan organisasi, yaitu sisi manusia dari transformasi (lihat Topik 8.3 — Perubahan Organisasi dan Adopsi). "Change enablement" dalam ITIL merujuk pada pengendalian perubahan terhadap layanan dan produk. Panduan ini memakai istilah ITIL 4 untuk praktik yang dijelaskan di sini.

**Jenis perubahan.** ITIL 4 menjelaskan tiga:

| Jenis | Deskripsi | Rute yang khas |
|---|---|---|
| Standar | Berisiko rendah, dipahami dengan baik, disetujui sebelumnya, berulang | Mengikuti prosedur terdokumentasi; tanpa persetujuan individual |
| Normal | Memerlukan penilaian dan otorisasi | Dinilai dan diotorisasi oleh otoritas perubahan yang tepat |
| Darurat | Harus dilakukan segera, misalnya untuk memulihkan layanan atau memperbaiki kerentanan kritis | Otorisasi yang dipercepat dengan tinjauan sesudahnya |

**Otoritas perubahan.** Orang atau kelompok yang mengotorisasi perubahan. ITIL 4 menekankan bahwa wewenang harus diberikan pada tingkat yang sesuai dengan risiko, yang untuk perubahan berisiko rendah sering berupa rekan sejawat atau tim itu sendiri. Perubahan berisiko lebih tinggi naik lebih tinggi. Artikel Wikipedia tentang change advisory board menjelaskan model tradisional.

**Penilaian risiko.** Memperkirakan kemungkinan dan dampak kegagalan perubahan. Faktornya mencakup ukuran perubahan, tingkat kritis layanan, jumlah pengguna, pengujian yang dilakukan, kemampuan untuk rollback, dan rekam jejak perubahan serupa. Artikel Wikipedia tentang risk assessment dan risk management menjelaskan metode umum. Daftar periksa yang sederhana dan konsisten bekerja lebih baik daripada skor rumit yang tidak dipercaya siapa pun.

**Jadwal perubahan.** Kalender yang menunjukkan perubahan terencana, agar konflik dan benturan dengan periode bisnis kritis dapat terlihat. Bagi tim yang merilis berkali-kali sehari, jadwal menyusut menjadi pengecualian, seperti periode pembekuan, dan perubahan besar yang memerlukan koordinasi.

**Tinjauan sejawat.** Orang lain yang kompeten meninjau perubahan sebelum dibuat, seperti tinjauan kode. Wikipedia menjelaskan peer review dan code review. Murah, cepat, dan membawa pengetahuan yang relevan, serta mendukung pemisahan tugas bila diperlukan.

**Kontrol otomatis dalam pipeline.** Pengujian, analisis statis, pemindaian keamanan, dan pemeriksaan kebijakan berjalan pada setiap perubahan, dan pipeline mencatat apa yang berjalan beserta hasilnya. Ini menghasilkan bukti yang lebih baik daripada rapat, karena konsisten dan terikat pada perubahan yang sebenarnya. Artikel Wikipedia tentang test automation dan static program analysis menjelaskan beberapa tekniknya. Lihat Topik 6.4 — Pipeline dan perubahan otomatis.

**Pemisahan tugas.** Kontrol di mana tidak ada satu orang pun yang dapat menyelesaikan tindakan berisiko sendirian, misalnya dengan mensyaratkan bahwa orang yang menulis perubahan bukan satu-satunya yang menyetujuinya. Regulasi atau audit mungkin mensyaratkannya. Wikipedia menjelaskan separation of duties. Pipeline dapat menegakkannya dengan mensyaratkan peninjau kedua dan mencatat keduanya.

**Rollback dan pemulihan.** Kemampuan untuk membalik perubahan atau roll forward dengan cepat mengurangi risiko. Perubahan data lebih sulit dibalik daripada perubahan kode. Lihat artikel Wikipedia tentang rollback dalam manajemen data.

**Perubahan darurat.** Keadaan darurat yang sungguh-sungguh membutuhkan kecepatan. Rute yang terdefinisi, dengan otoritas yang ditunjuk, dokumen minimal, dan tinjauan sesudahnya, mencegah "darurat" menjadi cara bawaan untuk menghindari proses.

**Bukti dan audit.** Regulasi seperti Sarbanes–Oxley Act di Amerika Serikat, dan aturan serupa di yurisdiksi lain, telah mendorong persyaratan kendali atas perubahan pada sistem keuangan. Persyaratan berbeda menurut yurisdiksi dan industri; periksa apa yang berlaku bagi Anda dan tanyakan kepada auditor Anda bukti apa yang memenuhinya. Panduan ini tidak memberikan nasihat hukum.

**Bagaimana lensa-lensa cocok.** Pemampuan perubahan adalah tempat kecepatan agile bertemu kendali. Praktik agile menyarankan perubahan kecil yang sering dan keterlibatan awal pemangku kepentingan. AI dapat membantu menilai risiko dan menyusun deskripsi perubahan, di bawah tinjauan. Otomatisasi menyediakan kontrol pipeline. Analitik menunjukkan kegagalan perubahan dan lead time.

## Praktik terbaik

1. **Klasifikasikan perubahan menurut jenis dan risiko.** Definisikan perubahan standar, normal, dan darurat, dengan contoh untuk masing-masing. Tinjau klasifikasi secara berkala, dan pindahkan perubahan ke "standar" ketika bukti mendukung.
2. **Setujui sebelumnya perubahan standar.** Untuk perubahan berulang berisiko rendah, sepakati prosedurnya sekali, bersama pemilik risiko, dan biarkan tim melaksanakannya tanpa persetujuan individual. Tinjau tingkat keberhasilannya.
3. **Taruh wewenang dekat dengan pekerjaan.** Biarkan tinjauan sejawat mengotorisasi perubahan berisiko rendah. Eskalasikan perubahan berisiko lebih tinggi kepada orang yang memahami layanan dan ketergantungannya.
4. **Gunakan dewan untuk perubahan yang membutuhkannya.** Pertahankan fungsi penasihat perubahan untuk perubahan berisiko tinggi atau lintas fungsi. Siapkan materi sebelumnya dan putuskan dengan cepat.
5. **Bangun kontrol ke dalam pipeline.** Wajibkan pengujian, pemindaian, dan peninjau kedua dalam perangkat, dan catat bukti secara otomatis. Tunjukkan pipeline kepada auditor, bukan lembar kerja.
6. **Buat perubahan kecil.** Pecah perubahan besar menjadi langkah lebih kecil yang dapat dirilis dan diperiksa secara terpisah. Perubahan yang lebih kecil membawa risiko lebih sedikit dan lebih mudah dibalik.
7. **Rencanakan jalan kembali.** Wajibkan rencana rollback atau roll-forward untuk setiap perubahan normal, dan latih untuk yang penting.
8. **Pelihara jadwal yang terlihat.** Tunjukkan perubahan terencana dan periode pembekuan di tempat yang dapat dilihat tim, dan sorot benturan dengan acara besar. Untuk perubahan kecil yang sering, tunjukkan hanya yang memerlukan koordinasi.
9. **Definisikan dan awasi keadaan darurat.** Tuliskan kriteria dan rutenya. Tinjau setiap perubahan darurat sesudahnya, dan tanyakan mengapa perlu dan apakah rute normal dapat diperbaiki.
10. **Belajar dari perubahan yang gagal.** Tinjau perubahan yang menyebabkan insiden, dan sesuaikan aturan risiko, pengujian, atau daftar periksa. Lacak tingkat kegagalan perubahan dan lihat penyebabnya.

## Pertanyaan untuk dibahas bersama tim Anda

**Persetujuan kita yang mana yang tidak pernah menolak atau mengubah perubahan, dan berapa biayanya dalam waktu?**
Pertanyaan ini menguji apakah kontrol menambah nilai. Minta data enam bulan terakhir. Anda mungkin menemukan langkah persetujuan tanpa efek yang tercatat. Lanjutkan dengan menanyakan risiko apa yang ditangani masing-masing dan apakah kontrol lain dapat menanganinya.

**Perubahan apa yang paling sering kita buat, dan mana yang dapat disetujui sebelumnya sebagai perubahan standar?**
Daftarkan sepuluh teratas menurut volume. Harapkan banyak yang berisiko rendah dan berulang. Libatkan pemilik risiko. Lanjutkan dengan memilih dua untuk uji coba dan menyepakati kriteria keberhasilan.

**Bagaimana kita memutuskan perubahan mana yang memerlukan tinjauan manusia, dan siapa yang melakukannya?**
Kriteria sering implisit. Tanyakan apa yang membuat perubahan "berisiko" dalam konteks kita. Lanjutkan dengan menyusun daftar periksa singkat dan mencobanya pada perubahan terbaru.

**Apa yang akan diterima auditor kita sebagai bukti bahwa perubahan telah diuji, ditinjau, dan disetujui?**
Tanyakan langsung kepada auditor alih-alih menebak. Harapkan bahwa catatan dari pipeline mungkin dapat diterima jika menunjukkan siapa, apa, dan kapan. Lanjutkan dengan menyepakati sampel catatan pipeline dan meminta auditor meninjaunya.

**Kapan terakhir kali perubahan salah, dan apa dalam proses kita yang memungkinkannya?**
Pertanyaan ini mengaitkan praktik dengan kegagalan nyata. Cari pengujian yang hilang, rollback yang hilang, atau informasi yang buruk. Hindari menyalahkan orangnya. Lanjutkan dengan menyepakati satu kontrol untuk ditambahkan atau diperbaiki.

**Di mana AI dapat membantu menilai risiko perubahan, dan apa yang ingin kita periksa secara manual?**
AI dapat membaca deskripsi perubahan dan kegagalan serupa di masa lalu untuk menyarankan faktor risiko. Ia juga dapat melewatkan atau mengarang. Tanyakan siapa pemilik alat dan bagaimana sarannya diverifikasi. Lanjutkan dengan membandingkan penilaian risiko AI dengan hasil perubahan di masa lalu.

## Dalam praktik: contoh manajemen layanan

Departemen TI sebuah otoritas kesehatan regional menjalankan change advisory board mingguan, dihadiri sekitar 20 orang, yang meninjau setiap perubahan. Insinyur mengatakan mereka menunggu hingga delapan hari untuk persetujuan; dewan mengatakan ia menangkap masalah. Sistem rekam pasien otoritas mengalami dua insiden tahun lalu akibat perubahan konfigurasi yang tidak ditinjau yang dibuat sebagai "darurat" untuk menghindari dewan.

Manajer perubahan menganalisis catatan enam bulan: 640 perubahan ditinjau, 590 disetujui sebagaimana diajukan, 38 dikembalikan karena informasi kurang, dan 12 diubah atau ditolak karena alasan substantif. Dari 590 itu, 41 menyebabkan insiden, hampir semuanya di antara perubahan yang juga dibuat secara mendesak. Manajer mengusulkan tiga rute. Perubahan standar, seperti menambahkan pengguna ke grup atau memperbarui sertifikat, mengikuti prosedur terdokumentasi dan tidak memerlukan persetujuan. Perubahan normal pada sistem yang diklasifikasikan berisiko lebih rendah ditinjau oleh rekan dari tim lain dan diperiksa pipeline. Perubahan berisiko lebih tinggi pada sistem rekam pasien masuk ke dewan yang lebih kecil yang bertemu dua kali seminggu dan hanya melihat ini.

Petugas keselamatan klinis meminta bukti bahwa tinjauan sejawat terjadi. Manajer menunjukkan laporan pipeline yang mendaftar setiap perubahan dengan nama peninjau, pengujian yang dijalankan, dan hasilnya. Petugas setuju dengan uji coba enam bulan dengan tinjauan bulanan atas perubahan yang gagal.

Yang berubah: waktu persetujuan median turun dari lima hari menjadi kurang dari satu untuk sebagian besar perubahan, dan pemakaian "darurat" menurun tajam. Yang masih sulit: sebagian sistem lama tidak dapat menjalankan pengujian otomatis, sehingga perubahannya masih memerlukan pemeriksaan manual; tinjauan sejawat bergantung pada insinyur yang punya waktu, dan tim yang tertekan meninjau secara dangkal; dan tinjauan bulanan menemukan dua perubahan di mana peninjau tidak memiliki pengetahuan yang relevan. Manajer menambahkan aturan bahwa peninjau harus orang yang pernah mengerjakan sistem tersebut.

## Empat perspektif

### Tim produk dan pengiriman

Buat perubahan kecil, tambahkan pengujian, dan rencanakan rollback. Bekerjalah dengan praktik perubahan untuk mendefinisikan perubahan standar dan bukti pipeline. Perlakukan tinjauan sejawat sebagai tinjauan sungguhan, bukan tanda tangan.

### Tim layanan dan operasi

Bantu menilai risiko operasional, pelihara jadwal, dan bagikan apa yang Anda ketahui tentang ketergantungan. Tinjau perubahan yang gagal bersama tim, dan jaga agar perubahan darurat jarang dan diperiksa.

### Kepemimpinan dan tata kelola

Delegasikan wewenang menurut risiko, minta bukti dari pipeline, dan jangan mewajibkan rapat untuk perubahan rutin. Lindungi waktu untuk tinjauan sejawat. Tinjau jumlah perubahan darurat.

### Pelanggan dan pengguna

Anda seharusnya mendengar tentang perubahan yang memengaruhi Anda, dengan pemberitahuan yang cukup dan deskripsi yang jelas. Beri tahu penyedia tentang periode ketika perubahan berisiko bagi Anda. Laporkan masalah setelah perubahan dengan segera.

## Agile, AI, otomatisasi, dan analitik

### Agile

Perubahan kecil yang sering dengan pemangku kepentingan yang terinformasi lebih aman daripada yang besar dan jarang. Libatkan operasi dan pemilik risiko dalam merancang rute perubahan, dan perbaiki dengan umpan balik. Perhatian: jangan membuang kontrol atas nama kelincahan; gantilah dengan yang lebih baik.

### AI

AI dapat membantu menyusun deskripsi perubahan, menyarankan faktor risiko dari perubahan serupa di masa lalu, dan memeriksa deskripsi untuk informasi yang kurang, dengan seseorang bertanggung jawab atas keputusan. Perhatian: skor risiko AI dapat diperlakukan sebagai otoritas; tampilkan sebagai saran dan lacak seberapa sering ia benar. Lihat Topik 5.4 — AI generatif untuk insiden, pengetahuan, dan perubahan.

### Otomatisasi

Otomatiskan pemeriksaan pipeline, penangkapan bukti, deteksi konflik jadwal, dan pelaksanaan perubahan standar, dengan log dan rollback. Perhatian: persetujuan otomatis atas perubahan hanya sebaik aturannya; tinjau aturan dan ambil sampel perubahan yang disetujui. Lihat Topik 6.4 — Pipeline dan perubahan otomatis.

### Analitik

Lacak volume perubahan menurut jenis, lead time, tingkat kegagalan perubahan, dan perubahan darurat, dan lihat penyebab kegagalan. Perhatian: tingkat kegagalan yang rendah bisa berasal dari tidak mencatat kegagalan, dan jumlah persetujuan dapat dimanipulasi dengan memecah atau menggabung perubahan; periksa terhadap data insiden. Lihat buku *Service Management Metrics* dan Topik 7.3 — Pengukuran dan pelaporan.

## Mode kegagalan umum

- **Meninjau setiap perubahan dengan cara yang sama.** Perubahan rutin menunggu. Klasifikasikan menurut risiko dan setujui sebelumnya perubahan standar.
- **Dewan tanpa bukti.** Anggota menyetujui apa yang tidak dapat mereka nilai. Siapkan informasi, dan kirim hanya perubahan yang memerlukan penilaian.
- **Darurat sebagai jalan pintas.** Urgensi dinyatakan untuk menghindari tinjauan. Definisikan, dan tinjau setiap pemakaian.
- **Tinjauan sejawat yang dangkal.** Tanda tangan tanpa membaca. Wajibkan peninjau yang berkualifikasi dan ambil sampel tinjauan.
- **Membuang kontrol tanpa pengganti.** Kegagalan naik dan auditor keberatan. Penuhi tujuan setiap kontrol dalam pipeline.
- **Tidak ada rencana rollback.** Perubahan yang gagal memperpanjang insiden. Wajibkan dan latih pemulihan.
- **Menghitung perubahan yang disetujui sebagai keberhasilan.** Volume naik dan mutu tidak. Lacak kegagalan dan insiden yang disebabkan.

## Model kematangan

| Dimensi | Memulai | Mengembangkan | Menstandardisasi | Mengelola | Mengorkestrasi |
|---|---|---|---|---|---|
| Jenis perubahan dan wewenang | Satu rute untuk semuanya | Rute darurat ada | Standar, normal, dan darurat didefinisikan dengan wewenang menurut risiko | Rute ditinjau dengan data | Rute menyesuaikan otomatis menurut risiko lintas layanan |
| Bukti | Formulir dan rapat | Sebagian catatan dari perangkat | Catatan pipeline untuk sebagian besar perubahan | Bukti disampel dan diaudit | Bukti berkelanjutan lintas perangkat dan pemasok |
| Penilaian risiko | Intuisi | Daftar periksa informal | Daftar periksa dan kriteria yang konsisten | Kriteria disetel dari data kegagalan | Risiko dinilai dengan data dan otomatisasi, dengan tinjauan manusia |
| Pembelajaran | Menyalahkan | Tinjauan sesekali | Perubahan yang gagal ditinjau dengan tindakan | Penyebab kegagalan dilacak dan dikurangi | Pembelajaran dibagikan lintas tim |

## Daftar periksa

- [ ] Kami memiliki jenis perubahan standar, normal, dan darurat dengan contoh.
- [ ] Perubahan standar disetujui sebelumnya dengan prosedur terdokumentasi.
- [ ] Wewenang untuk setiap jenis sesuai dengan risiko.
- [ ] Tinjauan sejawat dilakukan oleh seseorang dengan pengetahuan yang relevan.
- [ ] Kontrol pipeline mencatat pengujian, peninjau, dan hasil.
- [ ] Setiap perubahan normal memiliki rencana rollback atau roll-forward.
- [ ] Perubahan darurat ditinjau sesudahnya.
- [ ] Kami melacak tingkat kegagalan perubahan dan belajar dari perubahan yang gagal.

## Prompt AI

**Periksa deskripsi perubahan untuk mencari kekurangan.**

```text
Here is a draft change description: [paste]. Our required fields are: [list].
List which required fields are missing or unclear, and list five questions a reviewer would ask. Do not rewrite the change or rate its risk.
List what you are unsure of.
```

**Cari pola pada perubahan yang gagal.**

```text
Below is a list of changes that caused incidents, with dates, type, size, whether tested, and whether rolled back: [paste list, names removed].
List common features across them and questions to investigate. Do not infer causes beyond the data.
List what you are unsure of.
```

**Usulkan kandidat perubahan standar.**

```text
Here are our most frequent changes in the last six months, with counts and failure counts: [paste data].
List which look like candidates for pre-authorization, with the data you used and the questions we should ask the risk owner. Do not claim any is safe.
List what you are unsure of.
```

## Skill AI

- [change-request](../../../../skills/change-request/SKILL.md): gunakan untuk merancang catatan perubahan yang jelas dan ringan.
- [enterprise-change-management](../../../../skills/enterprise-change-management/SKILL.md): gunakan untuk sisi organisasi dari perubahan.
- [risk-register](../../../../skills/risk-register/SKILL.md): gunakan untuk mencatat dan meninjau risiko dari perubahan.
- [compliance-testing](../../../../skills/compliance-testing/SKILL.md): gunakan untuk memeriksa bukti terhadap persyaratan kontrol.
- [security-testing](../../../../skills/security-testing/SKILL.md): gunakan untuk merencanakan pemeriksaan keamanan untuk pipeline.

## Sumber utama

- Nicole Forsgren, Jez Humble, dan Gene Kim, *Accelerate* (2018): riset tentang praktik penyampaian, termasuk persetujuan perubahan.
- DORA (dora.dev): riset dan laporan berkelanjutan tentang kinerja penyampaian perangkat lunak.
- PeopleCert, halaman sertifikasi ITIL: uraian pemilik tentang praktik pemampuan perubahan.
- Wikipedia, "Change management" dan "Change control": ikhtisar gagasan ini.

## Referensi

1. Change management — Wikipedia — https://en.wikipedia.org/wiki/Change_management
2. Change control — Wikipedia — https://en.wikipedia.org/wiki/Change_control
3. Change-advisory board — Wikipedia — https://en.wikipedia.org/wiki/Change-advisory_board
4. Risk assessment — Wikipedia — https://en.wikipedia.org/wiki/Risk_assessment
5. Peer review — Wikipedia — https://en.wikipedia.org/wiki/Peer_review
6. Code review — Wikipedia — https://en.wikipedia.org/wiki/Code_review
7. Separation of duties — Wikipedia — https://en.wikipedia.org/wiki/Separation_of_duties
8. Test automation — Wikipedia — https://en.wikipedia.org/wiki/Test_automation
9. Static program analysis — Wikipedia — https://en.wikipedia.org/wiki/Static_program_analysis
10. Continuous delivery — Wikipedia — https://en.wikipedia.org/wiki/Continuous_delivery
11. DORA research — DevOps Research and Assessment — https://dora.dev/research/
