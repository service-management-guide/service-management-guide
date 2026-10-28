# Manajemen aset

**Manajemen aset TI melacak apa yang dimiliki organisasi, di mana letaknya, siapa yang memakainya, berapa biayanya, dan kapan harus diganti atau dipensiunkan; ia berhasil ketika satu catatan yang andal dijaga mutakhir sepanjang siklus hidup dan dipakai untuk memutuskan, bukan sekadar menghitung.**

## Mengapa ini penting

Tanyakan berapa banyak laptop, server, lisensi perangkat lunak, dan langganan cloud yang dimiliki sebuah organisasi, dan jawabannya biasanya perkiraan. Catatan tersebar di pengadaan, keuangan, TI, dan masing-masing tim. Peralatan dibeli dan tidak pernah dicatat, atau dicatat lalu hilang. Langganan terus berjalan setelah proyek yang membutuhkannya berakhir. Lisensi dihitung pada tanggal yang lama berlalu.

Akibatnya mahal. Uang dibelanjakan untuk peralatan dan lisensi yang tidak dipakai siapa pun. Audit oleh vendor perangkat lunak menemukan kekurangan dan membawa denda. Tim keamanan tidak dapat menambal apa yang tidak mereka ketahui ada. Ketika perangkat hilang, tak seorang pun tahu data apa yang dimuatnya. Ketika auditor meminta bukti kendali, organisasi tidak dapat menyediakannya.

Manajemen aset memberi satu jawaban yang andal atas "apa yang kita miliki?", dan dasar bagi pertanyaan berikutnya: apakah aman, apakah dipakai, apakah layak biayanya, apakah mendekati akhir masa pakainya? Topik ini membahas konsep inti dan pandangan siklus hidup aset TI secara umum. Area khusus memiliki topiknya sendiri: perangkat lunak (Topik 4.2 — Manajemen Aset Perangkat Lunak), perangkat keras (Topik 4.3 — Manajemen Aset Perangkat Keras), dan item konfigurasi (Topik 4.4 — Manajemen Konfigurasi). Biaya terkait dengan Topik 4.5 — Manajemen keuangan dan FinOps.

## Konsep inti

**Aset.** Sesuatu yang bernilai yang dimiliki atau dikendalikan organisasi. Dalam TI, aset mencakup perangkat keras, perangkat lunak, layanan cloud, data, lisensi, kontrak, dan kadang orang dan pengetahuan. Wikipedia menggambarkan asset management sebagai proses sistematis mengembangkan, mengoperasikan, memelihara, dan melepas aset secara hemat biaya. Panduan ini memakai "manajemen aset TI" (ITAM) untuk praktik yang diterapkan pada teknologi.

**Aset versus item konfigurasi.** Aset dilacak untuk nilai dan kepemilikannya, sering dengan rincian keuangan. Item konfigurasi (CI) adalah apa pun yang perlu dikelola untuk menyampaikan layanan, dilacak beserta hubungannya dengan item lain. Keduanya tumpang tindih: server adalah keduanya. Catatannya sering berada di sistem berbeda. Lihat Topik 4.4 — Manajemen Konfigurasi.

**Siklus hidup.** Aset melewati tahap: rencanakan, peroleh, deploy, operasikan dan pelihara, serta pensiunkan atau lepas. Setiap tahap memiliki keputusan dan catatan. Artikel Wikipedia tentang product lifecycle menjelaskan gagasan umumnya. Mengelola siklus hidup berarti mengetahui di mana setiap aset berada di dalamnya dan bertindak pada waktu yang tepat, misalnya mengganti laptop sebelum tingkat kegagalan naik atau memperbarui lisensi sebelum lapse.

**Empat pandangan.** Cara yang berguna untuk memikirkan informasi aset adalah melalui empat pandangan: inventaris (apa dan di mana), keuangan (biaya, penyusutan, kepemilikan), kontraktual (garansi, dukungan, ketentuan lisensi), dan operasional (pemakaian, kondisi, dan kinerja). Setiap pandangan menjawab pertanyaan berbeda, dan catatan perlu memuat cukup dari masing-masing agar berguna.

**Inventaris dan penemuan (discovery).** Daftar aset dengan atribut kunci seperti jenis, model, nomor seri, lokasi, pemilik, dan status. Inventaris dapat dibangun dengan mencatat pembelian, dengan memindai perangkat dan perangkat lunak di jaringan, atau keduanya. Alat penemuan menemukan hal yang tidak pernah dicatat, dan item tercatat yang tidak lagi ada. Tidak ada sumber yang lengkap sendirian, dan merekonsiliasi keduanya adalah pekerjaan sebenarnya. Wikipedia menjelaskan inventory dan asset tracking.

**Identifikasi.** Setiap aset memerlukan identitas yang bertahan sepanjang masa hidupnya: label aset, barcode, atau nomor seri. Wikipedia menjelaskan barcode dan radio-frequency identification (RFID), yang dipakai untuk melacak benda fisik.

**Kepemilikan dan penguasaan (custody).** Dua pertanyaan untuk setiap aset: siapa yang bertanggung jawab atasnya, dan siapa yang memegang atau memakainya. Keduanya berbeda: tim mungkin bertanggung jawab atas armada perangkat yang dipegang individu. Penguasaan yang jelas menghindari peralatan yang hilang.

**Biaya dan nilai.** Biaya mencakup harga beli, dukungan, lisensi, energi, dan pelepasan. Total cost of ownership, yang dijelaskan di Wikipedia, memperhitungkan seluruh masa hidup, bukan hanya harga. Penyusutan (depreciation), yang dijelaskan di Wikipedia, adalah perlakuan akuntansi; tim keuangan memakainya untuk pelaporan, dan tim ITAM perlu memahaminya.

**Aset cloud dan langganan.** Layanan cloud dan langganan perangkat lunak juga aset, meski tidak berbentuk fisik dan dapat dibuat dalam hitungan menit. Tanpa disiplin, mereka menjalar. Kaitkan dengan pemilik, proyek, dan anggaran saat dibuat. Lihat Topik 4.5 — Manajemen keuangan dan FinOps.

**Shadow IT.** Teknologi yang dibeli dan dipakai tanpa sepengetahuan fungsi TI. Wikipedia menjelaskan shadow IT. Ia muncul karena jalur resmi lambat atau tidak memenuhi kebutuhan. Perlakukan sebagai informasi tentang kebutuhan yang tidak terpenuhi, dan bawa alat yang berguna ke dalam pengelolaan.

**Aset data.** Data juga aset, dengan pemilik, klasifikasi, dan aturan retensi. Wikipedia menjelaskan digital asset management, yang terkait. Lihat Topik 7.2 — Fondasi dan tata kelola data.

**Standar.** ISO/IEC 19770 adalah keluarga standar untuk manajemen aset TI, yang dijelaskan di Wikipedia. Lihat Topik 1.8 — Kerangka kerja dan standar manajemen layanan.

**Keberlanjutan.** Keputusan aset berdampak lingkungan: energi manufaktur, limbah elektronik, dan kemampuan diperbaiki. Wikipedia menjelaskan electronic waste dan circular economy. Lihat Topik 8.2 — Manajemen layanan yang berkelanjutan dan bertanggung jawab.

**Bagaimana lensa-lensa cocok.** Manajemen aset adalah dasar faktual yang dibutuhkan keempat lensa. Praktik agile menjaga proses tetap ringan dan memperbaikinya bersama pengguna. AI dapat membantu merekonsiliasi catatan, menemukan anomali, dan memprediksi kegagalan, di bawah tinjauan. Otomatisasi menemukan dan memperbarui catatan. Analitik memakai data untuk memutuskan penggantian, pemanenan lisensi, dan biaya.

## Praktik terbaik

1. **Definisikan apa yang dihitung sebagai aset.** Putuskan kategori mana yang akan dilacak, dan pada ambang nilai atau risiko apa. Mulailah dengan yang paling mahal atau paling berisiko.
2. **Simpan satu catatan otoritatif.** Pilih satu sumber kebenaran untuk setiap jenis aset, dan tautkan yang lain kepadanya. Daftar ganda saling menyimpang.
3. **Catat saat akuisisi.** Jadikan pembelian, penerimaan, dan pencatatan satu langkah terhubung, agar tidak ada yang di-deploy tanpa tercatat. Beri label item fisik saat tiba.
4. **Gabungkan catatan dengan penemuan.** Pakai penemuan otomatis untuk menemukan item yang tidak tercatat dan yang hilang, dan rekonsiliasi secara berkala. Selidiki setiap perbedaan.
5. **Tunjuk pemilik dan penguasa.** Untuk setiap aset atau kelompok, catat siapa yang bertanggung jawab dan siapa yang memegangnya. Perbarui ketika orang berganti pekerjaan atau pergi.
6. **Lacak seluruh siklus hidup.** Catat deployment, perpindahan, perubahan kepemilikan, perbaikan, dan pensiun. Pakai tanggal siklus hidup untuk merencanakan penggantian dan perpanjangan.
7. **Kaitkan aset dengan layanan dan biaya.** Hubungkan setiap aset dengan layanan yang didukungnya dan anggaran tempatnya berada. Ini memungkinkan analisis dampak dan alokasi biaya.
8. **Buat kehilangan dan pelepasan aman.** Definisikan apa yang terjadi ketika perangkat hilang atau dipensiunkan: penghapusan data, pelepasan yang aman, sertifikat, dan pencatatan. Periksa bahwa itu terjadi.
9. **Audit dengan sampel.** Periksa sampel catatan terhadap kenyataan setiap periode, seperti memverifikasi perangkat secara fisik, dan ukur akurasinya.
10. **Pakai data untuk memutuskan.** Tinjau pemakaian, usia, kegagalan, dan biaya untuk memandu penggantian, perubahan lisensi, dan konsolidasi. Catatan yang tidak dipakai siapa pun akan membusuk.

## Pertanyaan untuk dibahas bersama tim Anda

**Berapa banyak perangkat, lisensi, dan langganan yang kita miliki, dan seberapa yakin kita pada masing-masing angka?**
Tanyakan kepada orang yang berbeda. Harapkan jawaban berbeda. Tanyakan bagaimana angka itu dihasilkan. Lanjutkan dengan memilih satu kategori dan merekonsiliasinya dengan benar.

**Di mana aset masuk ke organisasi kita tanpa dicatat?**
Cari pembelian dengan kartu, hadiah, uji coba yang menjadi permanen, dan akun cloud yang dibuat oleh tim. Harapkan beberapa celah. Lanjutkan dengan menutup yang terbesar.

**Siapa yang bertanggung jawab atas setiap kategori aset kita?**
Kepemilikan sering tidak jelas untuk peralatan dan langganan bersama. Minta nama. Lanjutkan dengan menetapkan pemilik dan tanggal tinjauan.

**Apa yang terjadi ketika seseorang kehilangan laptop atau meninggalkan organisasi?**
Telusuri proses langkah demi langkah. Harapkan celah dalam mengambil kembali peralatan dan mencabut akses. Lanjutkan dengan menyepakati satu daftar periksa dan pemilik.

**Aset mana yang kita bayar tetapi tidak lagi dipakai?**
Lihat lisensi, langganan, dan peralatan yang menganggur. Harapkan menemukan sesuatu. Lanjutkan dengan memilih tiga biaya teratas dan memutuskan untuk mempensiunkan, menugaskan ulang, atau memperbarui.

**Bagaimana AI dapat membantu menjaga data aset kita akurat, dan apa yang akan kita periksa secara manual?**
AI dapat mencocokkan catatan, menandai entri aneh, dan menyarankan kategori. Ia juga dapat menggabungkan catatan secara keliru. Tanyakan siapa pemilik pemakaian dan bagaimana kesalahan ditemukan. Lanjutkan dengan mengujinya pada sampel terhadap daftar yang direkonsiliasi secara manual.

## Dalam praktik: contoh manajemen layanan

Departemen TI sebuah universitas diminta direktur keuangan menyebutkan jumlah laptop yang dipakai. Tiga sumber memberi tiga jawaban: pengadaan mengatakan 4.200, sistem identitas menunjukkan 3.600 pengguna yang terdaftar laptop, dan perangkat manajemen endpoint melihat 3.900 perangkat. Departemen juga memiliki temuan audit terbaru bahwa laptop mantan karyawan tidak selalu dikembalikan.

Pemimpin ITAM memulai dengan memutuskan ruang lingkup: laptop, desktop, tablet, dan ponsel di atas nilai kecil, ditambah perangkat lunak dan langganan cloud. Ia menetapkan sistem manajemen endpoint sebagai sumber kebenaran untuk apa yang sedang dipakai, catatan pengadaan sebagai sumber untuk apa yang dibeli, dan meminta manajer aset merekonsiliasi setiap bulan. Rekonsiliasi pertama menemukan sekitar 300 perangkat dibeli namun tidak terlihat di jaringan, 200 terlihat di jaringan namun tidak dibeli melalui pengadaan, dan 90 perangkat ditugaskan kepada staf yang sudah pergi.

Ia menyiapkan tiga perubahan: label dan catatan saat penerimaan untuk setiap perangkat; daftar periksa karyawan keluar yang mengaitkan peristiwa keluar dari HR dengan tugas mengambil kembali peralatan, dengan tenggat; dan sampel triwulanan di mana seorang teknisi memverifikasi 100 perangkat secara fisik. Setelah dua kuartal, perbedaan rekonsiliasi turun dua pertiga dan akurasi sampel 94 persen.

Yang berubah: direktur keuangan mendapat angka yang dapat dipertahankan departemen, dan proses karyawan keluar memulihkan puluhan perangkat. Yang masih sulit: perangkat yang dibeli kelompok riset dari hibah masih melewati pengadaan; pemeriksaan fisik di kampus terpencil bergantung pada staf yang sibuk; dan data langganan cloud berada di perangkat berbeda milik tim lain. Pemimpin membawa pengadaan hibah dan data langganan kepada direktur keuangan sebagai bagian berikutnya.

## Empat perspektif

### Tim produk dan pengiriman

Catat aset yang dipakai produk Anda: lisensi, layanan cloud, dan perangkat. Beri label sumber daya cloud dengan pemilik dan proyek saat dibuat, dan pensiunkan apa yang tidak lagi Anda butuhkan.

### Tim layanan dan operasi

Jaga catatan tetap akurat saat Anda men-deploy, memindahkan, dan mempensiunkan peralatan. Laporkan ketidaksesuaian, dan pakai data penemuan dalam insiden dan perubahan.

### Kepemimpinan dan tata kelola

Minta inventaris yang dapat dipertahankan dan biaya apa yang dipegang. Danai proses dan perangkat. Pakai data untuk keputusan penggantian dan biaya, dan minta pertanggungjawaban pemilik.

### Pelanggan dan pengguna

Anda memegang aset atas nama organisasi. Jaga agar aman, laporkan kehilangan dengan cepat, dan kembalikan peralatan ketika Anda pindah. Beri tahu penyedia tentang alat yang Anda butuhkan yang tidak disediakan.

## Agile, AI, otomatisasi, dan analitik

### Agile

Mulailah dengan kategori bernilai tertinggi dan perbaiki proses dalam langkah kecil bersama pengguna. Tinjau akurasi dan titik sakit secara berkala. Perhatian: proyek inventaris big-bang cepat usang; bangun kebiasaan mencatat sambil jalan.

### AI

AI dapat merekonsiliasi catatan dari beberapa sumber, menandai anomali seperti perangkat yang tidak terlihat berbulan-bulan, dan memprediksi kegagalan dari usia dan riwayat, dengan seseorang meninjau penggabungan dan pensiun yang diusulkan. Tunjuk pemilik. Perhatian: AI dapat menggabungkan dua aset berbeda atau melewatkan ketidakcocokan; ambil sampel keluarannya. Lihat Topik 5.1 — AI dalam manajemen layanan.

### Otomatisasi

Otomatiskan penemuan, pembuatan catatan saat pembelian dan pendaftaran, pemicu karyawan keluar, dan pengingat perpanjangan, dengan log. Perhatian: catatan otomatis dapat melipatgandakan duplikat; tetapkan aturan pencocokan dan tinjau pengecualian. Lihat Topik 6.1 — Strategi otomatisasi.

### Analitik

Lihat akurasi inventaris, aset tanpa pemilik, profil usia, pemakaian, biaya per jenis aset, dan lisensi yang tidak dipakai. Perhatian: angka akurasi tinggi dari sampel kecil dapat menyesatkan; ambil sampel lintas lokasi dan jenis. Lihat Topik 7.3 — Pengukuran dan pelaporan dan buku *Service Management Metrics*.

## Mode kegagalan umum

- **Beberapa daftar yang tidak direkonsiliasi.** Tak seorang pun tahu kebenarannya. Pilih sumber kebenaran dan rekonsiliasi.
- **Mencatat setelah deployment.** Item terlewat. Catat saat akuisisi.
- **Tidak ada pemilik atau penguasa.** Peralatan hilang. Tunjuk keduanya.
- **Membayar yang tidak dipakai.** Lisensi dan langganan terus berjalan. Tinjau pemakaian dan pensiunkan.
- **Tidak ada kendali pelepasan.** Data keluar bersama peralatan yang dipensiunkan. Hapus dan catat.
- **Catatan yang tidak dipakai siapa pun.** Data membusuk. Pakai untuk keputusan.
- **Mengabaikan cloud dan langganan.** Biaya tumbuh tanpa terlihat. Lacak sebagai aset.

## Model kematangan

| Dimensi | Memulai | Mengembangkan | Menstandardisasi | Mengelola | Mengorkestrasi |
|---|---|---|---|---|---|
| Inventaris | Lembar kerja | Register utama | Satu catatan yang direkonsiliasi dengan penemuan | Akurasi diukur dan diperbaiki | Inventaris waktu nyata lintas on-premises, cloud, dan pemasok |
| Siklus hidup | Tidak dilacak | Pembelian dan pelepasan dicatat | Tahap dan tanggal siklus hidup dicatat | Siklus hidup dipakai untuk merencanakan penggantian dan perpanjangan | Siklus hidup dikelola lintas aset dan pemasok dengan otomatisasi |
| Kepemilikan | Tidak jelas | Pemilik untuk item besar | Pemilik dan penguasa untuk setiap aset | Kepemilikan ditinjau secara teratur | Kepemilikan dikaitkan dengan layanan dan anggaran |
| Pemakaian data | Menghitung | Laporan dasar | Biaya dan pemakaian dipakai dalam keputusan | Penghematan dan risiko dilacak | Data menggerakkan perencanaan di seluruh portofolio |

## Daftar periksa

- [ ] Kami mendefinisikan aset mana yang kami lacak dan ambangnya.
- [ ] Ada satu sumber kebenaran untuk setiap jenis aset.
- [ ] Aset dicatat saat akuisisi, dengan identifikasi.
- [ ] Penemuan dan catatan direkonsiliasi secara berkala.
- [ ] Setiap aset memiliki pemilik dan penguasa.
- [ ] Kehilangan, keluar, dan pelepasan memiliki proses yang terdefinisi dan diperiksa.
- [ ] Kami mengaudit sampel catatan terhadap kenyataan.
- [ ] Kami memakai data untuk memandu keputusan penggantian dan biaya.

## Prompt AI

**Rekonsiliasi dua daftar.**

```text
Here are two lists of devices from different systems, with identifiers removed where sensitive: [paste list A] and [paste list B].
List items that appear in both, items only in A, items only in B, and items that might be the same asset under different names. Show your matching reasoning and do not merge anything.
List what you are unsure of.
```

**Temukan kandidat untuk dipensiunkan.**

```text
Here is a list of subscriptions and licenses with cost, number of seats, and last-used dates: [paste].
List those with low or no recent use, the cost of each, and a question to ask the owner. Do not recommend cancellation.
List what you are unsure of.
```

**Susun draf daftar periksa karyawan keluar.**

```text
Our context: [type of organization, equipment, systems]. Our leaver triggers: [describe].
Draft a checklist for retrieving equipment and removing access, with owners and deadlines for each step, and note what could be missed. Do not add legal requirements.
List what you are unsure of.
```

## Skill AI

- [configuration-management](../../../../skills/configuration-management/SKILL.md): gunakan untuk mengaitkan aset dengan layanan yang didukungnya.
- [data-governance](../../../../skills/data-governance/SKILL.md): gunakan untuk kepemilikan dan klasifikasi aset data.
- [roi-analysis](../../../../skills/roi-analysis/SKILL.md): gunakan untuk menimbang keputusan penggantian atau pensiun.
- [raci-matrix](../../../../skills/raci-matrix/SKILL.md): gunakan untuk memperjelas siapa yang bertanggung jawab atas setiap kategori aset.

## Sumber utama

- ISO/IEC 19770 (standar itu sendiri): persyaratan dan panduan untuk manajemen aset TI; baca edisi terkini dari penerbitnya.
- PeopleCert, halaman sertifikasi ITIL: uraian pemilik tentang praktik manajemen aset TI.
- Wikipedia, "Asset management" dan "Total cost of ownership": ikhtisar gagasan ini.
- Wikipedia, "Shadow IT": latar belakang teknologi yang tidak dikelola.

## Referensi

1. Asset management — Wikipedia — https://en.wikipedia.org/wiki/Asset_management
2. ISO/IEC 19770 — Wikipedia — https://en.wikipedia.org/wiki/ISO/IEC_19770
3. Asset tracking — Wikipedia — https://en.wikipedia.org/wiki/Asset_tracking
4. Inventory — Wikipedia — https://en.wikipedia.org/wiki/Inventory
5. Product lifecycle — Wikipedia — https://en.wikipedia.org/wiki/Product_lifecycle
6. Total cost of ownership — Wikipedia — https://en.wikipedia.org/wiki/Total_cost_of_ownership
7. Depreciation — Wikipedia — https://en.wikipedia.org/wiki/Depreciation
8. Shadow IT — Wikipedia — https://en.wikipedia.org/wiki/Shadow_IT
9. Electronic waste — Wikipedia — https://en.wikipedia.org/wiki/Electronic_waste
10. Digital asset management — Wikipedia — https://en.wikipedia.org/wiki/Digital_asset_management
11. Radio-frequency identification — Wikipedia — https://en.wikipedia.org/wiki/Radio-frequency_identification
