# Manajemen layanan yang berkelanjutan dan bertanggung jawab

**Manajemen layanan yang bertanggung jawab menghitung biaya lingkungan, sosial, dan etis dari menjalankan layanan, termasuk energi cloud dan AI, limbah elektronik, aksesibilitas, dan perlakuan adil terhadap orang; ia bekerja dengan mengukur apa yang bisa dengan ketidakpastian yang dinyatakan, memilih opsi berdampak lebih rendah bila biayanya kecil, dan tidak menyamakan klaim dengan hasil.**

## Mengapa ini penting

Layanan digital terasa tak berbobot. Sebuah permintaan keluar, jawaban kembali, dan tampaknya tak ada yang dikonsumsi. Di baliknya ada pusat data yang menyedot listrik dan air, perangkat dari bahan tambang, jaringan yang menyala siang malam, dan, makin sering, beban kerja AI besar yang memakai lebih banyak energi daripada tugas yang digantikannya. Jejak sektor ini besar dan tumbuh, dan organisasi ditanya, oleh pelanggan, regulator, staf, dan dewan mereka sendiri, berapa jejak mereka dan apa yang mereka lakukan.

Lingkungan hanyalah satu bagian. Layanan juga memengaruhi orang. Portal yang tidak dapat diakses menutup pengguna dengan disabilitas. Model dukungan yang mengandaikan semua orang punya internet cepat gagal bagi yang tidak. Perangkat AI yang dilatih pada data sempit memperlakukan sebagian kelompok lebih buruk. Model piket yang membuat insinyur kelelahan adalah biaya sosial, ditanggung orang yang menjalankan layanan. Manajemen layanan yang bertanggung jawab menanyakan semua ini, bukan sebagai renungan akhir melainkan sebagai bagian dari cara layanan dirancang, dibeli, dan dijalankan.

Ini bidang di mana klaim melampaui bukti. Wikipedia menjelaskan greenwashing, praktik membuat klaim menyesatkan tentang manfaat lingkungan, dan itu umum dalam pemasaran teknologi. Pengukuran sering berupa perkiraan dengan ketidakpastian lebar. Penghematan di satu tempat dapat memindahkan biaya ke tempat lain, dan peningkatan efisiensi dapat diimbangi pemakaian yang lebih besar, pola yang dijelaskan Wikipedia sebagai efek rebound, atau paradoks Jevons. Topik ini memberi pendekatan praktis: kenali dampak utama Anda, ukur dengan jujur, bertindaklah di mana efeknya terbesar dan biayanya terendah, dan berhati-hatilah dengan apa yang Anda klaim. Ia terhubung dengan perangkat keras (Topik 4.3 — Manajemen Aset Perangkat Keras), keuangan (Topik 4.5 — Manajemen keuangan dan FinOps), tata kelola AI (Topik 5.6 — Tata kelola, risiko, dan kepatuhan AI), dan tata kelola (Topik 8.1 — Tata Kelola, Risiko, dan Kepatuhan). Ia tidak memberikan nasihat hukum; kewajiban pelaporan berbeda menurut tempat.

## Konsep inti

**Keberlanjutan.** Memenuhi kebutuhan masa kini tanpa mengorbankan kemampuan generasi mendatang memenuhi kebutuhan mereka, dalam ungkapan umum. Wikipedia menjelaskan sustainability sebagai memiliki dimensi lingkungan, sosial, dan ekonomi. Dalam manajemen layanan, ia berarti menjalankan layanan dengan cara yang tidak membebankan biaya tak berdasar pada lingkungan, pada orang, atau pada pilihan masa depan.

**Lingkungan, sosial, dan tata kelola (ESG).** Kerangka yang dipakai organisasi dan investor untuk menilai kinerja nonkeuangan. Wikipedia menjelaskan ESG. Persyaratan pelaporan berkembang cepat di banyak yurisdiksi. Organisasi Anda mungkin meminta data dari tim layanan. Periksa apa yang berlaku, dan simpan catatan yang dapat Anda pertanggungjawabkan.

**Jejak karbon dan emisi.** Emisi gas rumah kaca yang disebabkan suatu aktivitas, biasanya dinyatakan sebagai setara karbon dioksida. Wikipedia menjelaskan carbon footprint dan greenhouse gas. Akuntansi karbon lazimnya membedakan emisi dari operasi Anda sendiri, dari energi yang dibeli, dan dari rantai nilai yang lebih luas, termasuk pembuatan perangkat dan pemakaian layanan pemasok, yang sering menjadi bagian terbesar dan paling sulit diukur. Wikipedia menjelaskan carbon accounting dan kategori-kategori ini.

**Dampak tertanam dan operasional.** Dampak tertanam (embodied) adalah apa yang dipakai untuk membuat dan mengangkut perangkat atau membangun fasilitas; dampak operasional adalah apa yang dipakai saat menjalankannya. Untuk perangkat pengguna akhir, dampak tertanam sering menjadi bagian lebih besar dari emisi seumur hidup. Wikipedia menjelaskan embodied energy. Untuk pusat data, operasi, terutama listrik, biasanya mendominasi. Memahami mana yang berlaku memandu tindakan. Lihat Topik 4.3 — Manajemen Aset Perangkat Keras.

**Energi dan pusat data.** Pusat data memakai listrik untuk komputasi dan pendinginan. Wikipedia menjelaskan data center dan power usage effectiveness (PUE), rasio energi total fasilitas terhadap energi yang dipakai peralatan komputasi. PUE rendah tidak berarti emisi rendah; intensitas karbon listriknya juga penting, begitu pula seberapa penuh peralatan dipakai. Server menganggur tetap menyedot daya.

**Cloud dan infrastruktur bersama.** Penyedia cloud besar sering beroperasi lebih efisien daripada ruang on-premises kecil dan dapat membeli energi terbarukan dalam skala besar. Mereka juga memudahkan konsumsi lebih banyak. Wikipedia menjelaskan cloud computing secara umum. Minta data emisi menurut wilayah dan layanan dari penyedia, dan perlakukan angkanya sebagai perkiraan dengan metode yang dinyatakan. Pindah ke cloud tidak dengan sendirinya membuat layanan lebih hijau.

**AI dan energi.** Melatih dan menjalankan model besar dapat mengonsumsi energi signifikan dan, dalam beberapa kasus, air untuk pendinginan. Dampaknya bergantung pada ukuran model, seberapa sering dipakai, dan di mana ia berjalan. Pemakaian sering model besar untuk tugas yang bisa dikerjakan metode sederhana memboroskan sumber daya. Lihat Topik 5.8 — Model operasi dan keterampilan AI. Perlakukan angka yang diterbitkan dengan hati-hati, karena metode dan cakupan beragam.

**Perangkat lunak dan operasi yang efisien.** Kode efisien, sumber daya berukuran tepat, mematikan lingkungan menganggur, menjadwalkan pekerjaan fleksibel saat listrik lebih bersih, dan mengurangi penyimpanan serta transfer data yang tidak perlu semuanya menurunkan dampak, dan biasanya juga biaya. Wikipedia menjelaskan green computing dan praktik merancang untuk dampak lingkungan lebih rendah. Lihat Topik 4.5 — Manajemen keuangan dan FinOps, di mana penghematan biaya dan penghematan emisi sering bertepatan.

**Limbah elektronik dan ekonomi sirkular.** Elektronik yang dibuang mengandung bahan berharga dan bahaya. Wikipedia menjelaskan electronic waste dan pendekatan circular economy, yang menjaga bahan tetap terpakai melalui penggunaan ulang, perbaikan, dan daur ulang. Umur perangkat lebih panjang, perbaikan, pembaruan, dan daur ulang bertanggung jawab memangkas limbah. Lihat Topik 4.3 — Manajemen Aset Perangkat Keras. Gerakan hak untuk memperbaiki (right to repair), yang dijelaskan Wikipedia, menganjurkan perangkat yang dapat diperbaiki.

**Pemikiran siklus hidup.** Mempertimbangkan semua tahap produk atau layanan, dari bahan hingga pembuangan. Wikipedia menjelaskan life-cycle assessment. Ia menjaga dari memindahkan dampak dari satu tahap ke tahap lain, seperti menghemat energi saat dipakai dengan perangkat yang membutuhkan lebih banyak sumber daya untuk dibuat.

**Efek rebound.** Efisiensi dapat mengarah pada pemakaian lebih banyak, yang membatalkan keuntungan. Wikipedia menjelaskan ini di bawah rebound effect dan paradoks Jevons. Jika komputasi lebih murah mengarah pada komputasi jauh lebih banyak, dampak total bisa naik. Tetapkan tujuan absolut di samping tujuan efisiensi.

**Aksesibilitas dan inklusi.** Layanan harus dapat dipakai orang dengan kemampuan, perangkat, bahasa, dan konektivitas berbeda. Wikipedia menjelaskan accessibility, inclusive design, dan digital divide. Standar seperti Web Content Accessibility Guidelines menetapkan garis dasar untuk konten web. Hukum di banyak tempat mewajibkan aksesibilitas. Libatkan pengguna dengan disabilitas dalam desain dan pengujian, dan pertahankan jalur nondigital.

**Keadilan dan etika.** Layanan dan sistem AI harus memperlakukan orang secara adil dan terbuka tentang cara kerjanya. Wikipedia menjelaskan algorithmic bias dan ethics of artificial intelligence. Lihat Topik 5.6 — Tata kelola, risiko, dan kepatuhan AI.

**Orang dan beban kerja.** Orang yang menjalankan layanan adalah pemangku kepentingan. Piket yang berkelanjutan, jam kerja wajar, kondisi kerja aman, dan perlakuan adil terhadap staf pemasok adalah bagian dari praktik bertanggung jawab. Lihat Topik 2.10 — Manajemen agile dan pembelajaran.

**Pengadaan bertanggung jawab.** Memilih pemasok berdasarkan praktik lingkungan dan sosial mereka selain harga. Wikipedia menjelaskan sustainable procurement. Minta bukti, seperti data emisi yang diterbitkan dan kebijakan perbaikan, dan periksa klaim. Lihat Topik 3.14 — Manajemen Pemasok.

**Kejujuran pengukuran.** Banyak angka di bidang ini adalah perkiraan. Nyatakan metode, cakupan, dan ketidakpastian. Waspadai perbandingan yang memakai batas berbeda. Hindari klaim seperti "netral karbon" tanpa dasar yang jelas dan dapat diverifikasi, karena uraian Wikipedia tentang greenwashing menunjukkan bagaimana klaim semacam itu menyesatkan.

**Tanggung jawab korporasi.** Organisasi makin sering menerbitkan komitmen. Wikipedia menjelaskan corporate social responsibility. Tim layanan menyumbang data dan membuat pilihan yang menentukan apakah komitmen terpenuhi.

**Bagaimana lensa-lensa cocok.** Keberlanjutan berlaku pada keempatnya. Praktik agile menyarankan eksperimen kecil yang terukur untuk memangkas pemborosan. AI adalah sumber dampak sekaligus alat untuk menemukan penghematan. Otomatisasi dapat mematikan sumber daya menganggur dan menjadwalkan pekerjaan. Analitik mengukur dampak dengan ketidakpastian yang dinyatakan.

## Praktik terbaik

1. **Temukan dampak terbesar Anda.** Perkirakan di mana efek lingkungan dan sosial terbesar dari layanan Anda berada: perangkat, pemakaian cloud dan pusat data, beban kerja AI, perjalanan, dan orang yang menjalankan layanan. Mulai di mana potensinya terbesar.
2. **Ukur dengan metode yang dinyatakan.** Pakai data pemasok dan faktor konversi standar, catat cakupan dan asumsi, dan tunjukkan ketidakpastian. Perbaiki data dari waktu ke waktu.
3. **Pangkas pemborosan yang juga memangkas biaya.** Matikan lingkungan menganggur, ukur ulang sumber daya, hapus data yang tidak perlu, dan konsolidasikan sistem yang kurang terpakai. Ini sering membayar dirinya sendiri.
4. **Perpanjang umur perangkat.** Perbaiki, tingkatkan, dan pakai ulang sebelum mengganti, dan pilih peralatan yang dapat diperbaiki dan awet. Buang melalui saluran bertanggung jawab dengan penghapusan data.
5. **Pilih di mana dan kapan Anda menjalankan.** Bila Anda punya pilihan, pakai wilayah dan waktu dengan listrik lebih bersih, dan minta data dari pemasok. Hindari pemindahan yang menambah dampak di tempat lain.
6. **Pakai AI secara proporsional.** Cocokkan ukuran model dan frekuensi pemakaian dengan nilainya. Pakai metode sederhana di tempat ia sama baiknya. Lacak biaya dan, bila tersedia, energi beban kerja AI.
7. **Rancang dan uji untuk aksesibilitas.** Ikuti standar aksesibilitas, uji dengan pengguna berkebutuhan berbeda, dan pertahankan jalur alternatif. Masukkan aksesibilitas ke definisi selesai.
8. **Periksa keadilan dan etika.** Tinjau layanan dan pemakaian AI untuk efek tidak adil, uji lintas kelompok, dan beri orang cara menggugat keputusan.
9. **Pedulikan orang yang menjalankan layanan.** Jaga beban kerja dan piket tetap berkelanjutan, dan perlakukan staf pemasok secara adil. Hitung kelelahan sebagai biaya.
10. **Jujurlah dalam klaim.** Katakan apa yang Anda ukur, bagaimana, dan apa yang tidak Anda ketahui. Hindari pernyataan kabur atau tak dapat diverifikasi, dan minta klaim ditinjau sebelum terbit.

## Pertanyaan untuk dibahas bersama tim Anda

**Di mana dampak lingkungan terbesar layanan kita, dan bagaimana kita tahu?**
Lihat perangkat, cloud, AI, dan fasilitas. Harapkan kurangnya data dan asumsi kuat. Lanjutkan dengan memilih satu area untuk diperkirakan dengan metode yang dinyatakan.

**Sistem atau lingkungan kita yang mana yang berjalan sepanjang waktu dan dapat dimatikan atau diperkecil?**
Periksa pengembangan dan uji. Harapkan yang menganggur. Lanjutkan dengan menjadwalkan pematian untuk satu lingkungan dan mencatat penghematannya.

**Berapa lama kita menyimpan perangkat, dan apa yang menghalangi kita menyimpannya lebih lama atau memperbaikinya?**
Tanyakan tentang kebijakan dan kebiasaan. Harapkan penggantian menurut kalender. Lanjutkan dengan menguji umur lebih panjang untuk satu kelompok.

**Siapa yang tidak dapat memakai layanan kita seperti yang dirancang, dan bagaimana kita tahu?**
Pikirkan disabilitas, bahasa, konektivitas, dan rasa percaya diri. Harapkan bahwa sebagian kelompok belum diuji. Lanjutkan dengan mengamati beberapa pengguna dari kelompok itu.

**Pemakaian AI apa yang telah kita adopsi di mana metode lebih sederhana cukup, dan berapa sumber daya yang dimakannya?**
Tinjau daftarnya. Harapkan sebagian hanya mengikuti tren. Lanjutkan dengan membandingkan satu pemakaian AI dengan alternatif sederhana dalam mutu dan biaya.

**Klaim apa yang telah kita buat, atau diminta untuk dibuat, tentang keberlanjutan, dan dapatkah kita mendukung masing-masing?**
Kumpulkan. Harapkan sebagian tidak dapat diverifikasi. Lanjutkan dengan meninjau masing-masing bersama orang yang memegang datanya.

## Dalam praktik: contoh manajemen layanan

Departemen TI sebuah perpustakaan nasional diminta kementerian induknya melaporkan dampak lingkungan layanan digitalnya dan mengusulkan pengurangan. Departemen memiliki 400 staf, 6.000 perangkat di 300 cabang, katalog yang di-host di cloud, dan asisten pencarian AI yang baru.

Manajer layanan memulai dengan memperkirakan sumber utama. Untuk perangkat, catatan pengadaan dan aset menunjukkan 4.800 laptop dan desktop, dengan usia rata-rata 4,1 tahun. Memakai angka siklus hidup yang diterbitkan pabrikan, yang ia catat sebagai perkiraan, ia menilai bahwa dampak tertanam perangkat yang dibeli dalam setahun adalah butir tunggal terbesar. Untuk cloud, dasbor emisi penyedia memberi perkiraan bulanan menurut wilayah, yang ia catat bersama metode yang dinyatakan penyedia. Pemakaian asisten AI kecil dibandingkan butir lain, tetapi tumbuh, dan vendor tidak memberi data energi.

Ia mengusulkan empat tindakan. Memperpanjang siklus penggantian laptop dari empat menjadi lima tahun di mana data kondisi memungkinkan, dengan perbaikan baterai dan penyimpanan. Mematikan lingkungan pengembangan dan uji pada malam hari dan akhir pekan, yang juga menghemat sekitar seperlima biaya cloud. Memindahkan satu beban kerja batch ke wilayah dengan jaringan listrik lebih rendah karbon, setelah memeriksa bahwa latensinya dapat diterima. Dan meminta vendor AI data energi dan air serta menetapkan aturan bahwa asisten dipakai hanya untuk pertanyaan terbuka, dengan pencarian sederhana untuk butir yang diketahui.

Di sisi sosial, departemen menugaskan uji aksesibilitas portal dengan lima staf dan pengunjung yang memakai pembaca layar dan satu yang memakai kendali suara. Ditemukan bahwa formulir pemesanan tidak dapat diselesaikan hanya dengan papan ketik, dan tim memperbaikinya. Departemen juga meninjau jadwal piket, yang kadang hanya dua insinyur menutup 24 jam; ia menambah yang ketiga.

Yang berubah: kementerian menerima laporan pertama dengan metode dan rentang, dan departemen memiliki empat tindakan yang dilacak. Yang masih sulit: angka tertanam berdasar rata-rata pabrikan dan tidak dapat diverifikasi; vendor belum memberi data energi; klaim lingkungan dalam draf siaran pers ("layanan digital netral karbon") ditarik karena departemen tidak dapat mendukungnya; dan siklus penggantian yang lebih panjang menambah upaya dukungan untuk perangkat lebih tua. Manajer melaporkan ketidakpastiannya dan berencana meninjau biaya dukungan.

## Empat perspektif

### Tim produk dan pengiriman

Rancang untuk efisiensi dan aksesibilitas: halaman ramping, kueri efisien, sumber daya berukuran tepat, dan dukungan papan ketik serta pembaca layar. Pilih metode AI sepadan dengan kebutuhan, dan uji dengan pengguna beragam.

### Tim layanan dan operasi

Matikan apa yang menganggur, perbaiki dan pakai ulang perangkat, catat data energi dan limbah, dan jaga piket tetap berkelanjutan. Beri tahu pemilik di mana dampak tertinggi.

### Kepemimpinan dan tata kelola

Tetapkan tujuan dengan target absolut dan pengukuran jujur, dan danai pekerjaannya. Tinjau klaim sebelum terbit. Sertakan orang, bukan hanya karbon, dalam apa yang Anda hitung.

### Pelanggan dan pengguna

Anda seharusnya dapat memakai layanan terlepas dari kemampuan atau koneksi, dan mengharapkan informasi jujur tentang dampaknya. Beri tahu penyedia apa yang tidak berfungsi bagi Anda dan apa yang ingin Anda lihat.

## Agile, AI, otomatisasi, dan analitik

### Agile

Coba perubahan kecil, seperti pematian terjadwal atau halaman lebih ringan, ukur efeknya, dan pertahankan yang berhasil. Libatkan pengguna berkebutuhan berbeda dalam tinjauan. Perhatian: jangan menjalankan "program hijau" besar tanpa ukuran; pilih tindakan dengan bukti.

### AI

AI dapat membantu menemukan sumber daya menganggur, menganalisis data pemakaian dan energi, dan memeriksa desain untuk masalah aksesibilitas, di bawah tinjauan. AI sendiri memiliki jejak lingkungan, dan risiko bias. Perhatian: jangan mengklaim AI menghemat energi tanpa membandingkan dengan energi yang dipakainya; ukur keduanya. Lihat Topik 5.8 — Model operasi dan keterampilan AI.

### Otomatisasi

Otomatiskan pematian lingkungan menganggur, penjadwalan beban kerja fleksibel, dan pembersihan data tak terpakai, dengan pemilik dan pengaman. Perhatian: penghapusan otomatis dapat membuang data yang dibutuhkan; pakai aturan retensi dan tinjauan. Lihat Topik 6.1 — Strategi otomatisasi.

### Analitik

Kumpulkan energi, perkiraan emisi, usia dan data kegagalan perangkat, pemakaian cloud, dan hasil uji aksesibilitas, dengan metode dan ketidakpastian dinyatakan. Perhatian: angka emisi sangat beragam menurut metode, dan perbaikan sekali waktu dapat terhapus oleh pertumbuhan; lacak total absolut dan tren. Lihat Topik 7.3 — Pengukuran dan pelaporan dan buku *Service Management Metrics*.

## Mode kegagalan umum

- **Klaim tanpa bukti.** Pernyataan seperti "netral karbon" tidak dapat didukung. Nyatakan metode dan batas, dan tinjau klaim.
- **Memindahkan masalah.** Dampak bergeser ke tahap atau pemasok lain. Berpikirlah dalam siklus hidup.
- **Efisiensi tanpa batas.** Penghematan diimbangi pemakaian lebih banyak. Tetapkan tujuan absolut.
- **Aksesibilitas sebagai renungan akhir.** Sebagian pengguna tertutup. Bangun dan uji sejak awal.
- **AI berukuran berlebih.** Model besar mengerjakan tugas sederhana. Cocokkan metode dengan kebutuhan.
- **Mengabaikan orang yang menjalankan layanan.** Kelelahan dan pergantian naik. Perlakukan beban kerja sebagai bagian keberlanjutan.
- **Tanpa data.** Keputusan bertumpu pada tebakan. Kumpulkan yang bisa, dengan ketidakpastian.

## Model kematangan

| Dimensi | Memulai | Mengembangkan | Menstandardisasi | Mengelola | Mengorkestrasi |
|---|---|---|---|---|---|
| Pengukuran | Tidak ada | Perkiraan kasar | Dampak utama diperkirakan dengan metode yang dinyatakan | Data diperbaiki dan dilacak terhadap tujuan | Data dampak terintegrasi dengan biaya, perencanaan, dan pemasok |
| Tindakan | Ad hoc | Beberapa penghematan | Praktik standar: pematian, ukuran tepat, umur perangkat | Tindakan dilacak dan ditinjau | Dampak terbangun dalam desain, pengadaan, dan operasi |
| Inklusi dan etika | Tidak dipertimbangkan | Kesadaran | Tinjauan aksesibilitas dan keadilan standar | Hasil diukur lintas kelompok | Desain inklusif dan keadilan terintegrasi lintas layanan |
| Kejujuran | Klaim tidak diperiksa | Kesadaran | Klaim ditinjau terhadap bukti | Klaim diaudit | Pelaporan transparan dengan jaminan independen |

## Daftar periksa

- [ ] Kami memperkirakan dampak lingkungan utama kami dengan metode yang dinyatakan.
- [ ] Kami mematikan atau memperkecil lingkungan yang menganggur.
- [ ] Kami memperbaiki, memakai ulang, dan memperpanjang umur perangkat, dan membuang secara bertanggung jawab.
- [ ] Kami meminta data emisi dan energi dari pemasok dan mencatat metode mereka.
- [ ] Pemakaian AI proporsional, dengan biaya dan, bila mungkin, energi dicatat.
- [ ] Layanan diuji aksesibilitasnya dengan pengguna nyata.
- [ ] Piket dan beban kerja berkelanjutan.
- [ ] Klaim keberlanjutan ditinjau terhadap bukti sebelum terbit.

## Prompt AI

**Susun perkiraan dampak.**

```text
Here are our facts: number and age of devices [paste], cloud usage by region [paste], AI usage [paste], and any supplier emissions data [paste].
Draft a table of impact sources, the data we have for each, the missing data, the method we could use, and the main uncertainty. Do not invent emission factors or figures.
List what you are unsure of.
```

**Tinjau klaim keberlanjutan.**

```text
Here is a draft statement about our service's environmental impact: [paste]. Here is the evidence we have: [paste].
For each claim, say whether the evidence supports it, partly supports it, or does not, quoting the text, and list what is missing. Do not rewrite the claim.
List what you are unsure of.
```

**Rencanakan uji aksesibilitas.**

```text
Our service: [describe]. Our users: [groups]. Known issues: [list].
Draft a test plan with tasks real users would attempt, the assistive technologies and devices to include, what to record, and how to report results. Do not claim any standard is met.
List what you are unsure of.
```

## Skill AI

- [roi-analysis](../../../../skills/roi-analysis/SKILL.md): gunakan untuk menimbang biaya dan manfaat opsi pengurang dampak.
- [stakeholder-analysis](../../../../skills/stakeholder-analysis/SKILL.md): gunakan untuk mengidentifikasi siapa yang terdampak dan siapa yang hilang.
- [risk-register](../../../../skills/risk-register/SKILL.md): gunakan untuk mencatat risiko lingkungan dan sosial dengan pemilik.
- [capacity-planning](../../../../skills/capacity-planning/SKILL.md): gunakan untuk mengukur ulang sumber daya agar tepat ukuran.
- [vendor-management](../../../../skills/vendor-management/SKILL.md): gunakan untuk meminta data dan komitmen dari pemasok.

## Sumber utama

- Green Software Foundation (greensoftware.foundation): panduan dan standar komunitas tentang perangkat lunak dan karbon.
- W3C, Web Content Accessibility Guidelines (WCAG): standar internasional untuk konten web yang dapat diakses.
- Wikipedia, "Sustainability" dan "Greenwashing": ikhtisar bidang ini dan bahaya utama dalam klaim.
- Wikipedia, "Electronic waste" dan "Circular economy": latar belakang tentang perangkat dan bahan.

## Referensi

1. Sustainability — Wikipedia — https://en.wikipedia.org/wiki/Sustainability
2. Environmental, social, and governance — Wikipedia — https://en.wikipedia.org/wiki/Environmental,_social,_and_governance
3. Carbon footprint — Wikipedia — https://en.wikipedia.org/wiki/Carbon_footprint
4. Carbon accounting — Wikipedia — https://en.wikipedia.org/wiki/Carbon_accounting
5. Green computing — Wikipedia — https://en.wikipedia.org/wiki/Green_computing
6. Data center — Wikipedia — https://en.wikipedia.org/wiki/Data_center
7. Power usage effectiveness — Wikipedia — https://en.wikipedia.org/wiki/Power_usage_effectiveness
8. Electronic waste — Wikipedia — https://en.wikipedia.org/wiki/Electronic_waste
9. Circular economy — Wikipedia — https://en.wikipedia.org/wiki/Circular_economy
10. Greenwashing — Wikipedia — https://en.wikipedia.org/wiki/Greenwashing
11. Rebound effect (conservation) — Wikipedia — https://en.wikipedia.org/wiki/Rebound_effect_(conservation)
12. Accessibility — Wikipedia — https://en.wikipedia.org/wiki/Accessibility
