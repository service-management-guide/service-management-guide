# Manajemen Aset Perangkat Keras

**Manajemen aset perangkat keras mengikuti teknologi fisik dari pengadaan hingga pelepasan: ia mengetahui apa setiap perangkat, siapa yang memegangnya, bagaimana dikonfigurasi dan dilindungi, kapan harus diganti, dan bagaimana ia keluar dengan aman; keberlanjutan dan perlindungan data sama pentingnya dengan biaya.**

## Mengapa ini penting

Perangkat keras adalah bagian TI yang bisa dijatuhkan. Ia hilang di kereta, tertinggal di taksi, dicuri dari mobil, terlupakan di lemari, dan dibawa pulang oleh karyawan yang keluar. Ia juga menua. Armada yang dibeli dalam satu tahun aus bersama-sama, dan biaya mempertahankan perangkat yang gagal tumbuh sampai gelombang penggantian jatuh dalam satu anggaran. Perangkat keras menyimpan data, dan perangkat yang meninggalkan organisasi tanpa dihapus dapat membocorkannya.

Lingkungan menambah dimensi lain. Perangkat elektronik dibuat dengan energi dan bahan yang signifikan, dan menjadi limbah elektronik ketika dibuang. Wikipedia menggambarkan e-waste sebagai masalah lingkungan yang tumbuh, dengan bahaya dari penanganan yang tidak benar. Memperpanjang masa pakai perangkat, memperbaiki, memakai ulang, dan mendaur ulang secara bertanggung jawab mengurangi biaya dan kerugian.

Manajemen aset perangkat keras (HAM) adalah bagian manajemen aset TI yang menangani perangkat fisik: laptop, desktop, ponsel, server, peralatan jaringan, periferal, dan perangkat khusus industri tertentu. Ia menjawab pertanyaan praktis: apa yang kita miliki, di mana, siapa yang memegangnya, apakah aman, apakah layak dipertahankan, dan bagaimana ia keluar? Topik ini dibangun di atas Topik 4.1 — Manajemen aset dan terhubung dengan manajemen konfigurasi (Topik 4.4 — Manajemen Konfigurasi), keamanan informasi (Topik 3.13 — Manajemen Keamanan Informasi), dan keberlanjutan (Topik 8.2 — Manajemen layanan yang berkelanjutan dan bertanggung jawab).

## Konsep inti

**Siklus hidup perangkat keras.** Tahapnya mencakup rencanakan, adakan, terima dan beri label, konfigurasi dan deploy, operasikan dan dukung, perbarui atau pensiunkan, dan lepas. Setiap tahap melibatkan tim berbeda, sehingga serah terima penting. Artikel Wikipedia tentang asset tracking dan warranty menjelaskan sebagian darinya.

**Build standar dan konfigurasi.** Konfigurasi perangkat standar, dengan perangkat lunak yang disetujui dan pengaturan keamanan, membuat deployment lebih cepat dan dukungan lebih mudah. Zero-touch provisioning, yang dijelaskan di Wikipedia, memungkinkan perangkat dikonfigurasi otomatis ketika pertama kali tersambung. Lihat Topik 6.5 — Swalayan dan pemenuhan otomatis.

**Manajemen endpoint.** Alat yang mendaftarkan, mengonfigurasi, memperbarui, dan melindungi laptop, ponsel, dan tablet dari konsol pusat. Wikipedia menjelaskan mobile device management dan unified endpoint management. Alat ini juga menyediakan data tentang apa yang dipakai dan kesehatannya.

**Bring your own device (BYOD).** Kebijakan yang mengizinkan staf memakai perangkat pribadi untuk bekerja. Wikipedia menjelaskan BYOD. Ia mengurangi biaya perangkat keras dan memunculkan pertanyaan keamanan, dukungan, dan privasi. Putuskan apa yang diizinkan, apa yang dikelola, dan apa yang terjadi ketika seseorang pergi.

**Identifikasi dan penguasaan.** Setiap perangkat memiliki identitas, seperti label aset dan nomor seri, dan penguasa. Catatan perpindahan dan serah terima mencegah kehilangan. Lihat Topik 4.1 — Manajemen aset.

**Garansi dan dukungan.** Perangkat keras datang dengan garansi dan kontrak dukungan yang berakhir pada tanggal yang diketahui. Melacaknya memungkinkan perbaikan saat masih tercakup dan menginformasikan keputusan pembaruan. Wikipedia menjelaskan warranty.

**Kondisi dan kesehatan.** Perangkat melaporkan sebagian kondisinya sendiri: kesehatan baterai, status disk, dan indikator kegagalan. Wikipedia menjelaskan SMART, teknologi pemantauan disk. Memakai data ini memungkinkan penggantian sebelum gagal dan mengurangi henti tak terencana.

**Siklus pembaruan (refresh).** Penggantian perangkat keras yang direncanakan pada usia atau kondisi tertentu. Siklus yang umum adalah tiga sampai lima tahun untuk laptop, dan sering lebih lama untuk peralatan jaringan, tetapi interval yang tepat bergantung pada pemakaian, biaya kegagalan, dan laju kebutuhan perangkat lunak. Mengganti terlalu dini membuang uang dan sumber daya; terlalu lambat menaikkan kegagalan dan risiko keamanan. Dasarkan interval pada data.

**Suku cadang dan perbaikan.** Menyimpan unit dan suku cadang memperpendek pemulihan. Perbaikan menjaga perangkat tetap berguna lebih lama. Wikipedia menjelaskan gerakan right to repair, yang berargumen bahwa pemilik dan bengkel independen harus dapat memperbaiki perangkat. Pertimbangkan kemampuan diperbaiki saat membeli.

**Perlindungan data.** Perangkat harus memakai enkripsi disk, agar perangkat yang hilang tidak mengekspos data, dan dihapus sebelum dipakai ulang atau dilepas. Wikipedia menjelaskan disk encryption dan data erasure. Pakai metode yang sesuai dengan sensitivitas data dan, bila diwajibkan, dapatkan sertifikat penghapusan. Lihat Topik 3.13 — Manajemen Keamanan Informasi.

**Pelepasan dan pemakaian ulang.** Opsinya mencakup pemakaian ulang internal, donasi, penjualan kembali, pembaruan (refurbishment), daur ulang, dan penghancuran. Pilih mitra yang mengikuti aturan tentang limbah dan data. Di Uni Eropa, WEEE Directive, yang dijelaskan di Wikipedia, menetapkan aturan untuk limbah peralatan listrik dan elektronik; Konvensi Basel, juga dijelaskan di sana, mengatur perpindahan limbah berbahaya antarnegara. Periksa aturan setempat.

**Jejak lingkungan.** Sebagian besar emisi seumur hidup perangkat berasal dari pembuatan, bukan pemakaian. Wikipedia menjelaskan embodied energy. Memakai perangkat lebih lama, memperbaikinya, dan membeli barang bekas yang diperbarui bila sesuai sering mengurangi jejak lebih dari keuntungan efisiensi saat pemakaian. Pendekatan ekonomi sirkular, yang dijelaskan di Wikipedia, bertujuan menjaga bahan tetap terpakai.

**Pusat data dan infrastruktur.** Server dan peralatan jaringan memiliki siklus hidup, daya, dan pertimbangan pendinginan sendiri. Banyak organisasi kini menyewa alih-alih memiliki, yang mengubah gambaran aset tetapi bukan kebutuhan mengelola apa yang tersisa. Lihat Topik 4.5 — Manajemen keuangan dan FinOps.

**Bagaimana lensa-lensa cocok.** Manajemen aset perangkat keras diuntungkan oleh iterasi agile pada proses armada dan oleh build standar. AI dapat memprediksi kegagalan dan membantu mencocokkan catatan, di bawah tinjauan. Otomatisasi menyediakan, menambal, dan menghapus perangkat. Analitik menunjukkan usia, kegagalan, pemakaian, dan biaya.

## Praktik terbaik

1. **Beri label dan catat saat tiba.** Setiap perangkat mendapat identitas dan catatan saat diterima, sebelum ada yang memakainya. Kaitkan data pembelian, garansi, dan pemilik.
2. **Pakai build standar.** Definisikan dan pelihara beberapa konfigurasi perangkat, dengan pengaturan keamanan dan perangkat lunak yang disetujui. Otomatiskan pendaftaran bila mungkin.
3. **Ketahui penguasaan.** Catat siapa yang memegang setiap perangkat, dan perbarui catatan ketika berpindah. Wajibkan pengakuan saat perangkat diterbitkan.
4. **Enkripsi dan kelola.** Wajibkan enkripsi disk dan pendaftaran dalam manajemen endpoint untuk setiap perangkat. Mampu mengunci atau menghapus perangkat yang hilang dari jarak jauh, dan uji bahwa itu berfungsi.
5. **Rencanakan pembaruan dari data.** Pakai usia, tingkat kegagalan, dan data kondisi untuk menetapkan waktu penggantian. Ratakan pembelian lintas tahun untuk menghindari satu gelombang besar.
6. **Simpan suku cadang dan jalur perbaikan.** Simpan kumpulan kecil perangkat cadangan untuk penggantian mendesak, dan putuskan apa yang diperbaiki atau dikirim untuk servis. Periksa ketentuan garansi.
7. **Ambil kembali perangkat dari karyawan keluar dan pindah.** Kaitkan peristiwa HR dengan tugas memulihkan atau menugaskan ulang peralatan, dengan tenggat dan tindak lanjut.
8. **Hapus sebelum dipakai ulang atau dilepas.** Pakai metode yang disetujui, catat, dan dapatkan bukti dari mitra eksternal mana pun. Jangan pernah mengandalkan penghapusan berkas.
9. **Lepas secara bertanggung jawab.** Pilih pemakaian ulang dan pembaruan sebelum daur ulang, dan pakai mitra yang mengikuti aturan limbah dan data. Simpan sertifikat.
10. **Ukur jejak dan biaya.** Lacak total biaya dan, bila bisa, dampak lingkungan per perangkat dan per pengguna, dan pakai dalam keputusan pembelian.

## Pertanyaan untuk dibahas bersama tim Anda

**Berapa usia armada kita, dan berapa banyak perangkat yang melewati masa pakai yang dimaksudkan?**
Gunakan data. Harapkan ekor yang panjang. Tanyakan berapa biaya kegagalan dan dukungan untuk perangkat tua. Lanjutkan dengan merencanakan pembaruan bertahap.

**Apa yang terjadi pada laptop dari hari seseorang pergi sampai siap untuk pengguna berikutnya?**
Telusuri setiap langkah dan tanyakan di mana ia bisa macet. Harapkan keterlambatan dalam pengambilan dan penghapusan. Lanjutkan dengan memilih satu langkah untuk dipercepat.

**Jika perangkat dengan data sensitif hilang hari ini, apa yang akan melindungi datanya, dan bagaimana kita tahu?**
Periksa status enkripsi dan penghapusan jarak jauh. Harapkan celah pada perangkat yang lebih tua atau pribadi. Lanjutkan dengan mengambil sampel perangkat untuk kepatuhan.

**Perangkat mana yang kita ganti menurut jadwal, dan dapatkah kita mempertahankan lebih banyak lebih lama dengan perbaikan?**
Tanyakan apa yang menggerakkan siklus pembaruan: garansi, kebutuhan perangkat lunak, atau kebiasaan. Lihat tingkat kegagalan. Lanjutkan dengan menguji siklus yang lebih panjang untuk satu kelompok.

**Bagaimana kita melepas perangkat keras, dan siapa yang mengonfirmasi bahwa data telah dihapus?**
Minta dokumennya. Harapkan ketidakpastian tentang mitra. Lanjutkan dengan meninjau satu rantai pelepasan dari ujung ke ujung.

**Bagaimana AI dapat membantu memprediksi kegagalan atau merekonsiliasi catatan kita, dan apa yang akan kita periksa secara manual?**
AI dapat menemukan perangkat yang kemungkinan gagal dari data kesehatan. Ia juga dapat menandai yang sehat. Tanyakan siapa pemiliknya dan bagaimana prediksinya diperiksa. Lanjutkan dengan mengujinya pada kegagalan tahun lalu.

## Dalam praktik: contoh manajemen layanan

Departemen TI sebuah dewan regional mengelola 3.000 laptop, 800 ponsel, dan beberapa ratus server dan perangkat jaringan. Setiap tiga tahun ia mengganti sebagian besar laptop dalam satu pembelian, yang membebani anggaran, dan ia telah menemukan sekitar 200 laptop lama di lemari. Audit terbaru menemukan bahwa sekelompok perangkat yang dikirim untuk didaur ulang tidak memiliki catatan penghapusan data.

Manajer aset perangkat keras mengusulkan pembaruan berdasarkan kondisi. Memakai data kesehatan baterai dan disk dari perangkat manajemen endpoint, ditambah usia dan riwayat kegagalan, ia memperkirakan bahwa sekitar 35 persen laptop pada usia tiga tahun masih dalam kondisi baik. Ia menetapkan aturan: ganti pada empat tahun atau ketika kesehatan turun di bawah ambang, dengan pembelian yang diratakan setiap kuartal. Untuk lemari, ia meminta setiap tim mengembalikan perangkat yang tidak terpakai ke gudang pusat, di mana perangkat dihapus, diuji, dan diterbitkan ulang atau dijual melalui pembaru yang memberikan sertifikat penghapusan.

Ia juga menambahkan pemicu karyawan keluar yang membuat tugas pengambilan dengan tenggat dua minggu, dan mewajibkan perangkat endpoint mengonfirmasi bahwa setiap perangkat yang dipulihkan telah dihapus sebelum ditandai tersedia.

Setelah setahun, belanja laptop dewan turun sekitar seperlima, hampir 150 perangkat diterbitkan ulang, dan setiap perangkat yang didaur ulang memiliki catatan penghapusan. Tingkat kegagalan di antara laptop berumur panjang sedikit lebih tinggi, dan help desk melaporkan lebih banyak penggantian baterai. Yang masih sulit: sebagian staf kesal mempertahankan perangkat lama sementara yang lain mendapat yang baru; pembaru tidak selalu dapat mensertifikasi penghapusan untuk drive terenkripsi yang lebih tua; dan dewan belum mengukur dampak lingkungan, meski mengharapkannya positif. Manajer menambahkan tinjauan tahunan siklus yang diperpanjang terhadap biaya dukungan, dan meminta pembaru memberikan standar penghapusan yang lebih jelas.

## Empat perspektif

### Tim produk dan pengiriman

Pakai perangkat standar bila bisa, kembalikan apa yang tidak lagi Anda butuhkan, dan jaga perangkat keras pengembangan tetap tercatat dan terenkripsi. Pertimbangkan kemampuan diperbaiki dan masa pakai saat Anda menentukan spesifikasi peralatan.

### Tim layanan dan operasi

Jaga inventaris tetap akurat, daftarkan dan enkripsi setiap perangkat, uji penghapusan jarak jauh, dan kelola suku cadang serta perbaikan. Tangani pelepasan dengan rantai penguasaan yang tercatat.

### Kepemimpinan dan tata kelola

Putuskan kebijakan pembaruan dan pelepasan dengan memperhatikan biaya, risiko, dan dampak lingkungan. Danai proses dan rencana penggantian yang diratakan. Minta bukti penghapusan data.

### Pelanggan dan pengguna

Jaga perangkat Anda, laporkan kehilangan segera, dan kembalikan peralatan ketika Anda pergi atau tidak lagi membutuhkannya. Beri tahu tim dukungan tentang masalah sejak dini agar perbaikan murah.

## Agile, AI, otomatisasi, dan analitik

### Agile

Perbaiki proses armada dalam langkah kecil bersama pengguna: coba build baru dengan satu kelompok, sesuaikan, dan perluas. Tinjau aturan pembaruan dengan data setiap tahun. Perhatian: perubahan terus-menerus pada build standar menimbulkan usaha dukungan; jaga agar stabil dan jelaskan perubahannya.

### AI

AI dapat memprediksi kegagalan perangkat dari data kesehatan, membantu mencocokkan catatan, dan menyarankan perangkat mana yang diperbarui, di bawah tinjauan. Tunjuk pemilik. Perhatian: prediksi berdasarkan sedikit kegagalan bisa tidak andal; bandingkan dengan aturan sederhana dan lacak alarm palsu. Lihat Topik 5.1 — AI dalam manajemen layanan.

### Otomatisasi

Otomatiskan pendaftaran, konfigurasi, penambalan, penguncian dan penghapusan jarak jauh, serta tugas karyawan keluar, dengan log dan pemeriksaan. Perhatian: penghapusan otomatis pada perangkat yang salah menghancurkan data; konfirmasi identitas dan simpan cadangan. Lihat Topik 6.5 — Swalayan dan pemenuhan otomatis.

### Analitik

Lihat usia armada, tingkat kegagalan, biaya perbaikan, status garansi, pemakaian, waktu pengambilan dari karyawan keluar, dan, bila tersedia, perkiraan energi dan emisi. Perhatian: angka emisi biasanya perkiraan dengan ketidakpastian lebar; nyatakan metodenya. Lihat Topik 7.3 — Pengukuran dan pelaporan dan buku *Service Management Metrics*.

## Mode kegagalan umum

- **Perangkat tidak dicatat saat tiba.** Catatan tidak pernah menyusul. Beri label dan catat saat penerimaan.
- **Tidak ada pelacakan penguasaan.** Peralatan menghilang. Catat siapa memegang apa.
- **Perangkat tidak terenkripsi.** Kehilangan menjadi pelanggaran. Wajibkan enkripsi dan uji penghapusan jarak jauh.
- **Pembaruan big-bang.** Kejutan anggaran dan pemborosan. Ratakan pembelian dan pakai data kondisi.
- **Pelepasan tanpa bukti penghapusan.** Data keluar bersama perangkat. Pakai metode yang disetujui dan simpan sertifikat.
- **Menimbun perangkat lama.** Lemari dipenuhi stok. Kembalikan, hapus, dan pakai ulang atau daur ulang.
- **Mengabaikan dampak lingkungan.** Limbah tumbuh. Utamakan pemakaian ulang, perbaikan, dan daur ulang yang bertanggung jawab.

## Model kematangan

| Dimensi | Memulai | Mengembangkan | Menstandardisasi | Mengelola | Mengorkestrasi |
|---|---|---|---|---|---|
| Catatan dan penguasaan | Daftar pembelian | Perangkat utama dicatat | Setiap perangkat diberi label, dicatat, dan ditugaskan | Catatan direkonsiliasi dengan penemuan dan diaudit | Catatan akurat waktu nyata lintas lokasi dan pemasok |
| Perlindungan | Tidak konsisten | Enkripsi pada perangkat baru | Enkripsi, pendaftaran, dan penghapusan jarak jauh menjadi standar | Kepatuhan dipantau dan diuji | Perlindungan menyesuaikan otomatis dengan risiko |
| Pembaruan | Hanya menurut usia | Siklus terencana | Pembaruan yang diratakan berdasarkan kondisi | Pembaruan disetel dari data biaya dan kegagalan | Pembaruan terintegrasi dengan perbaikan, pemakaian ulang, dan tujuan keberlanjutan |
| Pelepasan | Informal | Vendor yang disetujui | Proses penghapusan, sertifikat, dan daur ulang | Rantai penguasaan diaudit | Pendekatan sirkular di seluruh armada dan mitra |

## Daftar periksa

- [ ] Setiap perangkat diberi label dan dicatat saat tiba.
- [ ] Kami tahu siapa yang memegang setiap perangkat.
- [ ] Perangkat terenkripsi dan terdaftar dalam manajemen, dan penghapusan jarak jauh diuji.
- [ ] Waktu pembaruan memakai data kondisi dan kegagalan.
- [ ] Suku cadang dan jalur perbaikan tersedia.
- [ ] Perangkat karyawan keluar diambil kembali dalam waktu yang ditentukan.
- [ ] Perangkat dihapus sebelum dipakai ulang atau dilepas, dengan catatan.
- [ ] Kami memilih pemakaian ulang dan daur ulang yang bertanggung jawab dan melacak hasilnya.

## Prompt AI

**Temukan kandidat pembaruan dari data kesehatan.**

```text
Here is a list of devices with age, battery health, disk health, repair history, and warranty end date, with identifiers removed: [paste].
Group devices into low, medium, and high concern based on the data and the rules I state: [state rules]. List devices that fall in different groups depending on the rule. Do not recommend replacement.
List what you are unsure of.
```

**Susun draf daftar periksa peralatan karyawan keluar.**

```text
Our context: [type of organization, device types, management tools]. Our leaver process: [describe].
Draft a checklist for retrieving, wiping, and reissuing a device, with an owner role and deadline for each step, and list the points where equipment is most often lost. Do not invent policy.
List what you are unsure of.
```

**Tinjau proses pelepasan.**

```text
Here is how we dispose of hardware: [describe steps and partners]. Here is what our policy requires: [paste].
List each policy requirement and say whether the described process addresses it, or "not described". Do not assess legal compliance.
List what you are unsure of.
```

## Skill AI

- [configuration-management](../../../../skills/configuration-management/SKILL.md): gunakan untuk mengaitkan perangkat dengan layanan dan pemilik.
- [capacity-planning](../../../../skills/capacity-planning/SKILL.md): gunakan untuk merencanakan server dan infrastruktur.
- [roi-analysis](../../../../skills/roi-analysis/SKILL.md): gunakan untuk menimbang pilihan pembaruan, perbaikan, dan pemakaian ulang.
- [raci-matrix](../../../../skills/raci-matrix/SKILL.md): gunakan untuk menetapkan tanggung jawab lintas pengadaan, TI, HR, dan fasilitas.

## Sumber utama

- ISO/IEC 19770 (standar itu sendiri): persyaratan dan panduan untuk manajemen aset TI; baca edisi terkini dari penerbitnya.
- PeopleCert, halaman sertifikasi ITIL: uraian pemilik tentang praktik manajemen aset TI.
- Wikipedia, "Electronic waste" dan "Circular economy": ikhtisar aspek lingkungan.
- Wikipedia, "Right to repair": latar belakang kemampuan diperbaiki.

## Referensi

1. Electronic waste — Wikipedia — https://en.wikipedia.org/wiki/Electronic_waste
2. Circular economy — Wikipedia — https://en.wikipedia.org/wiki/Circular_economy
3. Right to repair — Wikipedia — https://en.wikipedia.org/wiki/Right_to_repair
4. Data erasure — Wikipedia — https://en.wikipedia.org/wiki/Data_erasure
5. Disk encryption — Wikipedia — https://en.wikipedia.org/wiki/Disk_encryption
6. Mobile device management — Wikipedia — https://en.wikipedia.org/wiki/Mobile_device_management
7. Bring your own device — Wikipedia — https://en.wikipedia.org/wiki/Bring_your_own_device
8. Asset tracking — Wikipedia — https://en.wikipedia.org/wiki/Asset_tracking
9. Warranty — Wikipedia — https://en.wikipedia.org/wiki/Warranty
10. Waste Electrical and Electronic Equipment Directive — Wikipedia — https://en.wikipedia.org/wiki/Waste_Electrical_and_Electronic_Equipment_Directive
11. Embodied energy — Wikipedia — https://en.wikipedia.org/wiki/Embodied_energy
