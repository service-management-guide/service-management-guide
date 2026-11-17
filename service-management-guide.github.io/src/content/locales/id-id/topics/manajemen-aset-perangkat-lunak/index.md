# Manajemen Aset Perangkat Lunak

**Manajemen aset perangkat lunak memastikan organisasi memiliki perangkat lunak yang dibutuhkannya, memakai apa yang dibayarnya, mematuhi ketentuan lisensi, dan mengetahui apa yang ada di dalam perangkat lunaknya sendiri; kini ia juga mencakup langganan, komponen sumber terbuka, dan ketentuan model serta layanan AI.**

## Mengapa ini penting

Perangkat lunak adalah kumpulan aset terbesar dan paling tidak terlihat di banyak organisasi. Laptop adalah benda fisik yang dapat dihitung. Hak pakai perangkat lunak (entitlement) adalah hak menggunakan, ditentukan oleh kontrak, yang dapat bergantung pada pengguna, perangkat, prosesor, atau konsumsi, dan berubah ketika infrastruktur berubah. Tak seorang pun dapat melihatnya hanya dengan memandang.

Akibatnya dua risiko yang berlawanan. Lisensi yang kurang memaparkan organisasi pada audit, denda, dan kadang tindakan hukum. Lisensi yang berlebih berarti membayar perangkat lunak yang tidak dipakai siapa pun, sering disebut shelfware. Wikipedia menggambarkan shelfware sebagai perangkat lunak yang dibeli namun tidak pernah dipakai. Studi oleh analis industri sering melaporkan porsi besar belanja perangkat lunak sebagai pemborosan, meski angkanya bervariasi dan harus diperlakukan dengan hati-hati. Kedua risiko dikurangi oleh disiplin yang sama: mengetahui apa yang Anda miliki, untuk apa Anda boleh memakainya, dan apa yang benar-benar Anda pakai.

Lanskapnya telah berubah. Banyak perangkat lunak kini berbasis langganan, dibeli tim dengan kartu, dan diperbarui oleh vendor. Komponen sumber terbuka ada di hampir setiap produk, masing-masing dengan ketentuan lisensi yang membawa kewajiban. Dan model serta layanan AI datang dengan ketentuan tentang data, keluaran, dan pemakaian yang diizinkan yang baru bagi banyak pembeli. Topik ini mencakup semuanya. Ia tidak memberikan nasihat hukum; penafsiran lisensi membutuhkan penasihat yang berkualifikasi. Ia dibangun di atas Topik 4.1 — Manajemen aset dan terhubung dengan manajemen pemasok (Topik 3.14 — Manajemen Pemasok) dan keamanan informasi (Topik 3.13 — Manajemen Keamanan Informasi).

## Konsep inti

**Manajemen aset perangkat lunak (SAM).** Praktik mengelola dan mengoptimalkan pembelian, deployment, pemeliharaan, pemakaian, dan pelepasan perangkat lunak dalam suatu organisasi. Wikipedia menjelaskan software asset management dan mengaitkannya dengan ISO/IEC 19770-1. Lihat Topik 1.8 — Kerangka kerja dan standar manajemen layanan.

**Hak pakai (entitlement).** Hak menggunakan perangkat lunak, sebagaimana ditentukan oleh lisensi. Hak pakai organisasi dicatat dari kontrak, catatan pembelian, dan portal vendor. Dibandingkan dengan apa yang di-deploy dan dipakai.

**Model lisensi.** Model yang umum mencakup per pengguna, per perangkat, per prosesor atau inti, per pengguna bersamaan (juga disebut lisensi mengambang), lisensi lokasi atau perusahaan, dan harga berbasis konsumsi. Wikipedia menjelaskan software license dan floating licensing. Aturan berbeda menurut vendor dan produk, berubah dengan virtualisasi dan cloud, dan sering rumit.

**Posisi lisensi efektif.** Perbandingan hak pakai dengan pemakaian: apa yang boleh Anda pakai versus apa yang Anda pakai, diringkas sebagai surplus, kekurangan, atau seimbang. Ia adalah potret pada satu titik waktu, dan pekerjaannya adalah menjaganya tetap mutakhir.

**Audit perangkat lunak.** Vendor atau pihak ketiga memeriksa pemakaian organisasi terhadap hak pakainya. Audit bisa rutin atau agresif. Organisasi yang menjaga posisinya sendiri tetap mutakhir dapat menanggapi dengan tenang. Yang tidak mungkin menghadapi biaya tak terduga.

**Langganan dan SaaS.** Software as a service disewa, biasanya per pengguna atau berdasarkan konsumsi, dan disampaikan melalui internet. Wikipedia menjelaskan software as a service dan model bisnis langganan. Langganan dapat dimulai oleh siapa pun dengan kartu; tanpa kontrol, mereka menyebar, tumpang tindih, dan diperbarui otomatis. Lacak dengan pemilik dan tanggal perpanjangan.

**Shelfware dan optimisasi.** Perangkat lunak yang tidak atau kurang dipakai. Memanen (harvesting) berarti mengambil kembali lisensi dari pengguna yang tidak membutuhkannya dan menugaskannya ulang. Menyesuaikan ukuran (right-sizing) berarti mencocokkan jumlah dan jenis lisensi dengan kebutuhan. Penghematan bisa signifikan, dan penghematan datang dari menanyakan apakah pemakaian masih ada.

**Perangkat lunak sumber terbuka.** Perangkat lunak yang kode sumbernya tersedia di bawah lisensi yang mengizinkan pemakaian, modifikasi, dan distribusi dengan syarat tertentu. Wikipedia menjelaskan free and open-source software dan open-source license. Lisensi berbeda: lisensi permisif membebankan sedikit kewajiban, sementara lisensi copyleft, yang dijelaskan di Wikipedia, mewajibkan karya turunan dibagikan dengan ketentuan serupa. Kewajiban bergantung pada cara Anda memakai dan mendistribusikan perangkat lunak, jadi penafsiran memerlukan nasihat hukum.

**Software bill of materials (SBOM).** Daftar komponen dalam sebuah perangkat lunak, dengan versi dan lisensinya. Wikipedia menjelaskan software supply chain dan format SPDX untuk bertukar informasi lisensi dan komponen. SBOM mendukung kepatuhan lisensi dan respons keamanan. Lihat Topik 3.13 — Manajemen Keamanan Informasi.

**Model dan layanan AI.** Model dan layanan AI datang dengan ketentuan yang mencakup apa yang boleh Anda lakukan dengannya, siapa pemilik keluaran, apakah masukan Anda disimpan atau dipakai untuk pelatihan, dan apa yang terjadi jika model berubah atau ditarik. Wikipedia menjelaskan large language model dan open-source artificial intelligence, dan mencatat bahwa "terbuka" dapat berarti hal berbeda untuk model. Baca ketentuannya, dan catat. Lihat Topik 5.6 — Tata kelola, risiko, dan kepatuhan AI.

**Kekayaan intelektual.** Perangkat lunak dilindungi oleh hak cipta dan kadang paten. Wikipedia menjelaskan intellectual property dan copyright. Memakai perangkat lunak di luar ketentuannya dapat melanggar hak pemiliknya. Kode hasil buatan alat AI memunculkan pertanyaan terbuka tentang kepemilikan dan lisensi; minta nasihat.

**Penemuan dan pengukuran perangkat lunak.** Alat penemuan menemukan perangkat lunak terpasang dan aplikasi cloud. Pengukuran (metering) mencatat pemakaian sebenarnya, seperti kapan terakhir aplikasi dijalankan. Bersama hak pakai, keduanya memberi posisi lisensi.

**Tata kelola.** Kebijakan tentang siapa yang boleh memperoleh perangkat lunak, apa yang harus disetujui, bagaimana sumber terbuka ditinjau, dan bagaimana lisensi dilacak. Jaga agar ringan dan jelas, agar orang mengikutinya. Lihat Topik 8.1 — Tata Kelola, Risiko, dan Kepatuhan.

**Bagaimana lensa-lensa cocok.** SAM mendukung tim agile dengan membuat perangkat lunak yang disetujui mudah diperoleh dan dengan menyingkirkan kepatuhan dari jalan mereka. AI dapat membantu membaca ketentuan lisensi dan merekonsiliasi data, di bawah tinjauan hukum. Otomatisasi menyediakan dan mengambil kembali lisensi. Analitik menunjukkan pemakaian, pemborosan, dan risiko.

## Praktik terbaik

1. **Kenali hak pakai Anda.** Kumpulkan kontrak, catatan pembelian, dan data portal vendor di satu tempat. Catat ketentuan yang penting: metrik, jumlah, masa berlaku, pembatasan, dan tanggal perpanjangan.
2. **Temukan apa yang di-deploy dan dipakai.** Pakai data penemuan dan pemakaian untuk perangkat lunak on-premises, cloud, dan endpoint, dan rekonsiliasi dengan hak pakai secara berkala.
3. **Hitung posisi lisensi Anda.** Untuk vendor besar, bandingkan hak pakai dengan pemakaian, dan catat posisi dan tanggalnya. Selesaikan kekurangan dan surplus secara sengaja.
4. **Miliki setiap hubungan vendor utama.** Tunjuk orang yang memahami aturan lisensi untuk setiap vendor besar dan mengikuti perubahannya. Aturan berbeda dan berubah.
5. **Buat perangkat lunak yang disetujui mudah diperoleh.** Tawarkan katalog aplikasi yang disetujui dengan jalur cepat, agar orang tidak membeli sendiri. Lihat Topik 3.8 — Manajemen Katalog Layanan.
6. **Kendalikan langganan.** Wajibkan pemilik, anggaran, dan tanggal perpanjangan saat pembelian. Tinjau perpanjangan otomatis lebih awal, dan batalkan yang tidak dipakai.
7. **Panen dan sesuaikan ukuran.** Ambil kembali lisensi dari pengguna yang tidak aktif dan pindah ke tingkat yang lebih murah di mana cocok. Tanyakan kepada pengguna sebelum mencabut akses untuk menghindari gangguan.
8. **Tinjau pemakaian sumber terbuka.** Pindai kode untuk komponen dan lisensinya, tetapkan kebijakan lisensi mana yang dapat diterima, dan catat pengecualian. Libatkan nasihat hukum untuk kewajiban.
9. **Catat ketentuan AI.** Untuk setiap model dan layanan AI, catat data apa yang Anda kirim, apakah disimpan atau dipakai untuk pelatihan, siapa pemilik keluaran, dan apa yang terjadi jika layanan berubah.
10. **Bersiap untuk audit.** Jaga catatan tetap mutakhir, dan ketahui siapa yang menangani permintaan audit vendor. Tanggapi dengan segera dan faktual, dengan dukungan hukum bila perlu.

## Pertanyaan untuk dibahas bersama tim Anda

**Untuk tiga vendor perangkat lunak terbesar kita, apakah kita mengetahui hak pakai dan pemakaian kita?**
Minta angka dan sumbernya. Harapkan ketidakpastian. Lanjutkan dengan memilih satu vendor dan menghitung posisinya dengan benar.

**Langganan apa yang telah kita beli di luar proses pusat, dan siapa yang membayar?**
Periksa laporan kartu dan klaim pengeluaran. Harapkan kejutan. Lanjutkan dengan mencatat pemilik dan tanggal perpanjangan untuk sepuluh teratas menurut biaya.

**Lisensi mana yang kita bayar yang tidak dipakai siapa pun selama enam bulan?**
Pakai data pengukuran. Harapkan shelfware. Lanjutkan dengan memilih tiga untuk diambil kembali, dengan pesan kepada pengguna lebih dulu.

**Bagaimana kita tahu komponen sumber terbuka apa yang ada dalam produk kita dan lisensi apa yang dibawanya?**
Minta pemindaian terbaru. Harapkan celah. Lanjutkan dengan memilih satu produk dan menghasilkan daftar komponen.

**Jika vendor mengaudit kita besok, siapa yang akan merespons dan dengan apa?**
Telusuri langkah-langkahnya. Harapkan kebingungan tentang siapa yang berbicara dengan vendor. Lanjutkan dengan menunjuk pemimpin dan menyusun paket catatan terkini.

**Apa ketentuan layanan AI yang dipakai tim kita, dan apakah ada yang telah membacanya?**
Tanyakan siapa yang memakai layanan apa. Harapkan akun pribadi dengan ketentuan yang tidak diketahui. Lanjutkan dengan mendaftar lima layanan teratas dan mencatat ketentuan data dan kepemilikannya.

## Dalam praktik: contoh manajemen layanan

Grup rumah sakit regional memiliki sekitar 9.000 staf dan melisensikan aplikasi klinis besar, rangkaian aplikasi perkantoran, platform basis data, dan puluhan perangkat yang lebih kecil. Direktur keuangan telah meminta pemotongan belanja perangkat lunak sebesar 10 persen. Pemimpin SAM, tim berisi dua orang, memulai dengan vendor terbesar, yang kontraknya menyumbang 30 persen belanja.

Ia mengumpulkan kontrak dan catatan pembelian dan mendapati bahwa lisensi dihitung per pengguna bernama. Ia membandingkannya dengan daftar pengguna aplikasi itu sendiri dan tanggal login terakhirnya. Dari 4.200 pengguna berlisensi, sekitar 700 tidak login selama enam bulan; banyak yang mantan tenaga pengganti, atau orang yang pindah ke posisi lain. Ia juga menemukan 250 pengguna aktif yang tidak berlisensi, sebagian besar karyawan baru yang akunnya dibuat dari templat. Posisi bersih menunjukkan surplus di atas kertas, tetapi kekurangan nyata pada satu modul.

Ia menerapkan tiga langkah. Pekerjaan bulanan mendaftar pengguna tidak aktif dan mengirim pesan kepada manajer mereka sebelum lisensi diambil kembali. Proses karyawan baru memeriksa posisi lisensi sebelum menetapkan akses. Dan kekurangan pada modul itu dilaporkan kepada vendor secara proaktif, untuk diselesaikan pada perpanjangan berikutnya, dengan bantuan tim hukum grup. Penghematan dari lisensi yang diambil kembali mencapai 6 persen dari belanja vendor pada tahun pertama.

Ia juga meninjau langganan, dan menemukan 14 perangkat SaaS yang dibeli departemen, empat di antaranya saling menduplikasi dan dua memproses data pasien. Ia merujuk dua yang terakhir kepada tim keamanan dan privasi, dan mencatat ketentuan AI dari perangkat transkripsi yang diuji coba sebuah klinik: vendor menyimpan audio selama 30 hari dan boleh memakainya untuk meningkatkan modelnya, yang menurut tim privasi tidak dapat diterima. Klinik berhenti memakainya.

Yang berubah: lisensi diambil kembali dan ditugaskan ulang, dan kejutan saat perpanjangan lebih jarang. Yang masih sulit: aturan lisensi untuk basis data tervirtualisasi rumit dan tim tidak dapat menafsirkannya dengan yakin; klinisi tidak suka kehilangan akses ke perangkat dan sebagian lisensi yang diambil kembali dipulihkan setelah keluhan; dan departemen masih membeli langganan dengan kartu. Pemimpin meminta keuangan menandai pembelian perangkat lunak dengan kartu untuk ditinjau.

## Empat perspektif

### Tim produk dan pengiriman

Daftarkan komponen, lisensi sumber terbuka, dan layanan AI dalam produk Anda. Pilih lisensi dan layanan yang Anda pahami, dan catat ketentuannya. Hindari menempelkan kode atau data ke perangkat yang ketentuannya belum Anda periksa.

### Tim layanan dan operasi

Jaga data deployment dan pemakaian tetap akurat, ambil kembali lisensi yang tidak dipakai, dan beri tahu pemimpin SAM tentang perangkat baru. Tangani permintaan audit melalui jalur yang disepakati.

### Kepemimpinan dan tata kelola

Minta posisi lisensi vendor utama, biaya perangkat lunak yang tidak dipakai, dan rencana untuk audit. Dukung jalur persetujuan sederhana yang akan dipakai orang. Perlakukan ketentuan AI sebagai pertanyaan risiko.

### Pelanggan dan pengguna

Anda mungkin ditanya apakah masih memakai suatu aplikasi. Jawab dengan jujur dan katakan jika Anda membutuhkannya. Pakai perangkat yang disetujui, dan minta apa yang Anda butuhkan melalui jalur yang tepat.

## Agile, AI, otomatisasi, dan analitik

### Agile

Buat kepatuhan cepat bagi tim: katalog perangkat yang disetujui, kebijakan sumber terbuka yang sederhana, dan jalur pengecualian yang singkat. Tinjau proses bersama pengembang. Perhatian: gerbang ketat yang dihindari tim menciptakan shadow IT; jaga agar jalurnya cepat.

### AI

AI dapat membaca kontrak dan ketentuan lisensi, merangkumnya, dan menandai klausul untuk diperiksa, serta merekonsiliasi data deployment, di bawah tinjauan hukum dan manusia. Tunjuk pemilik. Perhatian: ringkasan ketentuan lisensi oleh AI dapat keliru dengan cara yang penting; jangan pernah mengandalkannya untuk keputusan kepatuhan. Lihat Topik 5.6 — Tata kelola, risiko, dan kepatuhan AI.

### Otomatisasi

Otomatiskan penemuan, pengukuran pemakaian, penetapan lisensi, pemberitahuan pengambilan kembali, dan pengingat perpanjangan, dengan pemilik dan log. Perhatian: pengambilan kembali otomatis dapat mencabut akses yang dibutuhkan seseorang; beri tahu pengguna lebih dulu dan permudah pemulihan. Lihat Topik 6.1 — Strategi otomatisasi.

### Analitik

Lacak posisi lisensi, lisensi yang tidak dipakai beserta biayanya, jumlah dan belanja langganan, perpanjangan yang jatuh tempo, dan temuan lisensi sumber terbuka. Perhatian: angka penghematan mudah dilebih-lebihkan, dan jumlah lisensi yang diambil kembali dapat dimanipulasi; lacak belanja aktual dan keluhan pengguna. Lihat Topik 4.5 — Manajemen keuangan dan FinOps dan buku *Service Management Metrics*.

## Mode kegagalan umum

- **Menghitung sekali.** Posisi menjadi usang. Jaga penemuan dan pengukuran tetap berjalan.
- **Membeli di luar proses.** Langganan menyebar. Buat jalur yang disetujui cepat dan tinjau belanja kartu.
- **Shelfware.** Lisensi dibayar dan tidak dipakai. Ukur pemakaian dan ambil kembali.
- **Pemakaian sumber terbuka tidak diketahui.** Kewajiban terlewat. Pindai dan tetapkan kebijakan.
- **Mengabaikan ketentuan AI.** Data disimpan atau dipakai untuk pelatihan. Baca, catat, dan putuskan.
- **Tidak siap audit.** Audit vendor menjadi kelabakan. Simpan catatan dan pemimpin yang ditunjuk.
- **Mengasumsikan aturan sederhana.** Virtualisasi dan cloud mengubah lisensi. Minta nasihat ahli untuk produk kompleks.

## Model kematangan

| Dimensi | Memulai | Mengembangkan | Menstandardisasi | Mengelola | Mengorkestrasi |
|---|---|---|---|---|---|
| Hak pakai | Tersebar | Kontrak utama dikumpulkan | Hak pakai dicatat di satu tempat dengan ketentuan kunci | Hak pakai direkonsiliasi secara berkala | Hak pakai terintegrasi dengan pengadaan dan vendor |
| Penemuan dan pemakaian | Tidak ada | Hitungan manual | Penemuan dan pengukuran untuk perangkat lunak utama | Posisi dihitung dan ditinjau | Posisi berkelanjutan lintas on-premises, cloud, dan SaaS |
| Optimisasi | Tidak ada | Pembersihan sesekali | Pemanenan dan penyesuaian ukuran rutin | Penghematan dilacak dan diverifikasi | Optimisasi diotomatiskan dengan pemberitahuan pengguna |
| Sumber terbuka dan AI | Tidak diketahui | Kesadaran | Kebijakan, pemindaian, dan ketentuan yang dicatat | Temuan dilacak hingga selesai | Terintegrasi ke dalam pipeline dan pengadaan |

## Daftar periksa

- [ ] Kami memiliki hak pakai untuk vendor utama yang dicatat dengan ketentuan kunci.
- [ ] Data penemuan dan pemakaian direkonsiliasi dengan hak pakai.
- [ ] Kami mengetahui posisi lisensi untuk vendor terbesar kami.
- [ ] Seseorang memiliki lisensi setiap vendor utama.
- [ ] Langganan memiliki pemilik, anggaran, dan tanggal perpanjangan.
- [ ] Lisensi tidak aktif diambil kembali dengan pemberitahuan.
- [ ] Komponen dan lisensi sumber terbuka dipindai dan ditata kelola.
- [ ] Ketentuan model dan layanan AI dicatat.

## Prompt AI

**Ekstrak ketentuan kunci dari kontrak untuk diperiksa.**

```text
Here is the text of a software license section: [paste]. 
List the license metric, quantity, term, restrictions, renewal terms, and audit rights, quoting the exact words for each, and write "not found" for any item the text does not state. Do not interpret ambiguous wording or give legal advice.
List what you are unsure of.
```

**Temukan tumpang tindih langganan.**

```text
Here is a list of our subscriptions with owner, purpose, cost, and users: [paste].
Group those that serve similar purposes, list the total cost of each group, and give one question per group about whether to consolidate. Do not recommend cancellation.
List what you are unsure of.
```

**Siapkan ketentuan AI untuk ditinjau.**

```text
Here are the terms of an AI service we use: [paste relevant sections].
List what the terms say about data retention, use of inputs for training, ownership of outputs, permitted uses, and changes to the service, quoting each. For anything the text does not cover, write "not stated". Do not give legal advice.
List what you are unsure of.
```

## Skill AI

- [vendor-management](../../../../skills/vendor-management/SKILL.md): gunakan untuk mengelola hubungan dan perpanjangan vendor.
- [legal-compliance-audit](../../../../skills/legal-compliance-audit/SKILL.md): gunakan untuk membingkai pertanyaan kepatuhan lisensi untuk tinjauan hukum.
- [roi-analysis](../../../../skills/roi-analysis/SKILL.md): gunakan untuk menimbang biaya dan manfaat pilihan perangkat lunak.
- [machine-learning-model-card](../../../../skills/machine-learning-model-card/SKILL.md): gunakan untuk mencatat ketentuan dan sifat sebuah model AI.

## Sumber utama

- ISO/IEC 19770-1 (standar itu sendiri): proses dan tingkat untuk manajemen aset TI; baca edisi terkini dari penerbitnya.
- PeopleCert, halaman sertifikasi ITIL: uraian pemilik tentang manajemen aset perangkat lunak sebagai bagian dari manajemen aset.
- Wikipedia, "Software asset management" dan "Open-source license": ikhtisar gagasan ini.
- Open Source Initiative (opensource.org): definisi sumber terbuka dan daftar lisensi yang disetujui.

## Referensi

1. Software asset management — Wikipedia — https://en.wikipedia.org/wiki/Software_asset_management
2. Software license — Wikipedia — https://en.wikipedia.org/wiki/Software_license
3. Open-source license — Wikipedia — https://en.wikipedia.org/wiki/Open-source_license
4. Free and open-source software — Wikipedia — https://en.wikipedia.org/wiki/Free_and_open-source_software
5. Copyleft — Wikipedia — https://en.wikipedia.org/wiki/Copyleft
6. Floating licensing — Wikipedia — https://en.wikipedia.org/wiki/Floating_licensing
7. Shelfware — Wikipedia — https://en.wikipedia.org/wiki/Shelfware
8. Software supply chain — Wikipedia — https://en.wikipedia.org/wiki/Software_supply_chain
9. Software as a service — Wikipedia — https://en.wikipedia.org/wiki/Software_as_a_service
10. Large language model — Wikipedia — https://en.wikipedia.org/wiki/Large_language_model
11. Open Source Initiative — OSI — https://opensource.org
