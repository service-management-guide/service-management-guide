# Fondasi dan tata kelola data

**Analitik yang baik dan AI yang aman bertumpu pada data layanan yang terdefinisi, dimiliki, akurat, dapat ditelusuri, terlindungi, dan disimpan hanya selama dibutuhkan; tata kelola data memberi setiap kumpulan data penting seorang pemilik yang ditunjuk, definisi sederhana, pemeriksaan mutu, dan aturan akses serta retensi.**

## Mengapa ini penting

Alasan paling umum sebuah analisis mengecewakan bukan metodenya. Melainkan datanya. Kategori tiket diubah musim semi lalu dan tak seorang pun mencatat kapan. Dua sistem sama-sama mengklaim memegang departemen pelanggan, dan tidak sepakat. Stempel waktu berada di zona waktu berbeda. Kolom yang tampak lengkap diisi "lainnya" pada separuh catatan. Dasbor menunjukkan penurunan insiden, dan penyebabnya ternyata perubahan pencatatan log, bukan layanan yang lebih baik.

Masalah yang sama merusak AI. Model yang dilatih pada tiket yang salah label mempelajari labelnya. Asisten yang berlandaskan artikel usang mengutipnya. Perkiraan yang dibangun di atas riwayat tidak lengkap membawa celahnya ke depan. Ketika organisasi makin bersandar pada analitik dan AI, mutu, kepemilikan, dan perlindungan data berhenti menjadi urusan teknis latar belakang dan menjadi layanan tersendiri.

Tata kelola data adalah praktik mengelola data sebagai aset: memutuskan siapa yang bertanggung jawab, apa arti setiap istilah, bagaimana mutu diperiksa, bagaimana data bergerak dan dari mana asalnya, siapa yang boleh memakainya, dan kapan dihapus. Wikipedia menggambarkan data governance sebagai pengelolaan menyeluruh atas ketersediaan, kegunaan, integritas, dan keamanan data. Topik ini menjelaskannya untuk data manajemen layanan secara praktis, dan menunjukkan cara memulai dari yang kecil. Ia mendasari analitik (Topik 7.1 — Analitik untuk manajemen layanan), pengukuran (Topik 7.3 — Pengukuran dan pelaporan), observabilitas (Topik 7.4 — Observabilitas dan telemetri), dan AI (Topik 5.6 — Tata kelola, risiko, dan kepatuhan AI), dan terhubung dengan data konfigurasi (Topik 4.4 — Manajemen Konfigurasi). Ia tidak memberikan nasihat hukum.

## Konsep inti

**Aset data.** Kumpulan data yang bernilai bagi organisasi, seperti riwayat tiket, basis data konfigurasi, data pemantauan, hasil survei, atau data biaya. Seperti aset lain, ia memiliki pemilik, biaya, siklus hidup, dan risiko. Lihat Topik 4.1 — Manajemen aset.

**Pemilik dan pengelola data (steward).** Pemilik data bertanggung jawab atas suatu kumpulan data: tujuannya, mutunya, dan siapa yang boleh memakainya. Pengelola data merawatnya sehari-hari, menangani definisi, masalah mutu, dan permintaan akses. Wikipedia menjelaskan data steward. Dalam tim kecil, satu orang dapat memegang keduanya. Tanpa orang yang ditunjuk, tak seorang pun memperbaiki masalah.

**Definisi data dan kamus.** Pernyataan sederhana tentang arti setiap kolom dan istilah, seperti "terselesaikan" atau "insiden besar", beserta cara menghitungnya dan sumbernya. Wikipedia menjelaskan data dictionary. Definisi mencegah dua tim memakai kata yang sama untuk hal berbeda. Catat perubahan definisi dengan tanggal, agar tren dapat ditafsirkan.

**Metadata.** Data tentang data: dari mana asalnya, kapan diperbarui, siapa pemiliknya, bagaimana diklasifikasikan, dan apa artinya. Wikipedia menjelaskan metadata. Katalog data adalah inventaris kumpulan data dan metadatanya yang dapat dicari, yang membantu orang menemukan dan memercayai data.

**Mutu data.** Kesesuaian untuk dipakai, biasanya dijelaskan dengan dimensi seperti akurasi, kelengkapan, konsistensi, ketepatan waktu, dan keunikan. Wikipedia menjelaskan data quality. Mutu bersifat relatif terhadap pemakaian: kategori tiket yang cukup baik untuk tren bulanan mungkin terlalu kasar untuk perutean. Ukur pada kolom yang penting, dan perbaiki penyebab di sumbernya. Data cleansing, yang dijelaskan di Wikipedia, mengoreksi kesalahan setelah kejadian dan tidak menghentikannya terulang.

**Sumber mutu yang buruk.** Kolom teks bebas yang diisi berbeda oleh orang berbeda, nilai bawaan yang tidak pernah diubah, kategori yang tumbuh tanpa dipangkas, entri manual yang dilewati di bawah tekanan, integrasi yang menjatuhkan atau menduplikasi catatan, dan perubahan sistem yang mengubah makna. Perbaiki dengan formulir yang lebih baik, validasi, pelatihan, dan tinjauan integrasi, bukan dengan menyalahkan orang.

**Silsilah (lineage) dan asal-usul (provenance).** Catatan dari mana data berasal dan apa yang terjadi padanya dalam perjalanan ke laporan atau model. Wikipedia menjelaskan data lineage. Ketika angka dipertanyakan, lineage memungkinkan Anda menelusurinya. Ia juga menunjukkan laporan mana yang terdampak ketika sumber berubah.

**Pipeline dan integrasi data.** Aliran yang memindahkan data antarsistem, sering dijelaskan sebagai extract, transform, load (ETL) dalam artikel Wikipedia, dan penyimpanan seperti data warehouse dan data lake, yang juga dijelaskan Wikipedia. Pipeline membutuhkan pemilik, pemantauan, dan pengujian, seperti sistem produksi mana pun. Lihat Topik 6.2 — Otomatisasi alur kerja dan orkestrasi.

**Waktu dan identitas.** Dua hal kecil menyebabkan kesulitan besar. Stempel waktu membutuhkan zona waktu dan format yang konsisten, seperti disarankan artikel Wikipedia tentang timestamp dan time zone; zona campuran menghasilkan celah dan lonjakan yang misterius. Pengenal untuk orang, layanan, dan aset harus stabil dan dibagikan lintas sistem, agar catatan dapat dikaitkan. Master data management, yang dijelaskan di Wikipedia, adalah disiplin menjaga data inti semacam itu tetap konsisten.

**Klasifikasi.** Melabeli data menurut sensitivitas, seperti publik, internal, rahasia, dan terbatas, dan melekatkan aturan pada setiap tingkat. Wikipedia menjelaskan data classification. Data layanan sering memuat informasi pribadi dan rincian keamanan, yang membutuhkan perlindungan.

**Privasi dan perlindungan.** Data pribadi adalah informasi yang berkaitan dengan orang yang dapat diidentifikasi. Undang-undang seperti General Data Protection Regulation (GDPR) di Uni Eropa menetapkan aturan tentang tujuan, minimisasi, retensi, dan hak individu; Wikipedia menjelaskan personal data dan GDPR. Minimisasi data (data minimization), yang dijelaskan di sana, berarti mengumpulkan dan menyimpan hanya yang Anda butuhkan. Teknik seperti pseudonimisasi dan anonimisasi, yang dijelaskan di Wikipedia, mengurangi risiko, meski sulit dilakukan dengan baik, dan anonimisasi yang lemah dapat dibalik. Ambil nasihat hukum dan privasi.

**Kendali akses.** Siapa yang boleh melihat atau mengubah data mana, dan mengapa. Pakai peran, bukan individu, bila mungkin, dan tinjau akses secara berkala. Lihat Topik 3.13 — Manajemen Keamanan Informasi dan Topik 3.6 — Manajemen Permintaan Layanan.

**Retensi dan penghapusan.** Berapa lama data disimpan dan bagaimana dihancurkan. Simpan apa yang Anda butuhkan untuk operasi, analisis, dan kewajiban hukum, dan hapus sisanya. Wikipedia menjelaskan data retention. Data lama menambah risiko dan biaya, dan sistem AI mungkin belajar darinya. Periksa persyaratan retensi hukum yang berlaku bagi Anda.

**Kedaulatan data.** Data mungkin tunduk pada hukum negara tempat data disimpan atau diproses. Wikipedia menjelaskan data sovereignty. Layanan cloud dan AI dapat memindahkan data lintas batas; ketahui ke mana data Anda pergi.

**Data dalam AI.** Data yang dipakai untuk pelatihan, pengambilan, atau prompt membutuhkan tata kelola yang sama, dengan kehati-hatian ekstra: izin untuk pemakaian, pelabelan sumber, pemeriksaan bias dan drift, dan kendali atas apa yang dikirim ke layanan eksternal. Lihat Topik 5.1 — AI dalam manajemen layanan.

**Forum tata kelola dan kebijakan.** Kelompok kecil dengan wewenang menetapkan standar, menyelesaikan konflik, dan memprioritaskan pekerjaan data, dan kebijakan singkat yang mencakup kepemilikan, mutu, klasifikasi, akses, retensi, dan pemakaian data dalam AI. Jaga agar ringan dan praktis.

**Bagaimana lensa-lensa cocok.** Tata kelola data adalah dasar lensa analitik dan AI, dan otomatisasi juga bergantung padanya. Praktik agile menyarankan memperbaiki mutu data dalam langkah kecil, digerakkan oleh pertanyaan yang benar-benar dibutuhkan orang, dengan umpan balik dari pengguna data.

## Praktik terbaik

1. **Mulai dengan kumpulan data yang paling penting.** Daftarkan data di balik keputusan kunci Anda, seperti tiket, konfigurasi, pemantauan, survei, dan biaya. Tata kelola itu lebih dulu.
2. **Tunjuk pemilik dan pengelola untuk masing-masing.** Catat dalam katalog, dengan cara menghubungi mereka. Buat mereka bertanggung jawab atas mutu dan akses.
3. **Tuliskan definisi.** Definisikan istilah dan kolom utama dalam bahasa sederhana, dengan perhitungan dan sumbernya. Catat ketika definisi berubah.
4. **Ukur mutu di tempat yang penting.** Pilih beberapa kolom yang menggerakkan keputusan, definisikan pemeriksaan, dan laporkan hasil kepada pemilik. Lacak dari waktu ke waktu.
5. **Perbaiki masalah di sumbernya.** Perbaiki formulir, tambahkan validasi, sederhanakan kategori, dan perbaiki integrasi. Pembersihan setelah kejadian hanyalah tambalan.
6. **Standarkan waktu dan pengenal.** Pakai satu standar dan format waktu, dan pengenal yang stabil dan dibagikan untuk orang, layanan, dan aset.
7. **Simpan silsilah.** Dokumentasikan dari mana laporan dan model kunci mendapat datanya dan transformasi apa yang berlaku. Perbarui ketika sumber berubah.
8. **Klasifikasikan dan lindungi.** Beri label data menurut sensitivitas, terapkan aturan akses dan perlindungan, dan tinjau siapa yang memiliki akses. Hapus data pribadi di tempat yang tidak diperlukan.
9. **Tetapkan retensi dan hapus.** Putuskan berapa lama setiap kumpulan data disimpan, dan hapus atau anonimkan sesudahnya. Periksa aturan yang berlaku bagi Anda.
10. **Tata kelola data yang dipakai AI.** Catat sumber, izin, dan mutu data yang dipakai untuk pelatihan dan pengambilan, dan kendalikan apa yang pergi ke layanan eksternal.

## Pertanyaan untuk dibahas bersama tim Anda

**Kumpulan data mana yang menggerakkan keputusan terpenting kita, dan siapa pemilik masing-masing?**
Daftarkan. Harapkan celah kepemilikan. Lanjutkan dengan menunjuk pemilik dan pengelola untuk tiga teratas.

**Istilah mana yang kita pakai secara berbeda di tim berbeda?**
Pilih "terselesaikan", "insiden", atau "pelanggan". Harapkan ketidaksepakatan. Lanjutkan dengan menulis satu definisi dan siapa yang memutuskan.

**Kapan definisi atau perubahan sistem merusak tren, dan apakah kita menyadarinya saat itu?**
Minta contoh. Harapkan "belakangan". Lanjutkan dengan menyepakati changelog untuk definisi dan sumber.

**Seberapa baik data kita pada kolom yang paling kita andalkan, dan bagaimana kita tahu?**
Ambil satu kolom, seperti kategori, dan ambil sampel 50 catatan. Harapkan masalah. Lanjutkan dengan memilih satu penyebab untuk diperbaiki.

**Data pribadi atau sensitif apa yang kita pegang dalam sistem layanan, dan berapa lama kita menyimpannya?**
Telusuri sistem utama. Harapkan kejutan tentang lampiran dan log obrolan. Lanjutkan dengan melibatkan petugas privasi dan menyepakati aturan retensi untuk satu sistem.

**Data apa yang kita umpankan ke perangkat AI, dan siapa yang menyetujuinya?**
Daftarkan pemakaian. Harapkan sebagian informal. Lanjutkan dengan menyepakati aturan tentang apa yang boleh dipakai dan register pemakaian data AI.

## Dalam praktik: contoh manajemen layanan

Tim layanan digital sebuah perpustakaan nasional ingin meramalkan permintaan dan melatih model untuk merutekan tiket. Seorang analis data memulai dan menemukan bahwa riwayat tiket sulit dipakai. Kategori diganti nama dua kali, dan kategori "Lainnya" memuat 35 persen tiket. Stempel waktu dari perangkat lama berada dalam waktu lokal dan dari yang baru dalam waktu universal. Kolom departemen, yang diambil dari sistem HR, berbeda dari yang ada di sistem identitas untuk sekitar 8 persen pengguna. Laporan bulanan menunjukkan insiden turun seperempat, tetapi analis mendapati bahwa perubahan cara insiden duplikat digabung menjelaskan sebagian besar penurunan.

Kepala layanan memutuskan memperlakukan data tiket sebagai aset yang ditata kelola. Ia menunjuk dirinya sebagai pemilik data dan seorang analis service desk berpengalaman sebagai pengelola. Kamus satu halaman mendefinisikan 12 kolom yang penting, termasuk definisi "terselesaikan" dan tanggal ia berubah. Tim memetakan kategori lama ke yang baru, melabeli patahan dalam riwayat, dan menambahkan aturan validasi yang mencegah "Lainnya" tanpa catatan teks bebas. Pekerjaan mingguan memeriksa tiga ukuran mutu: persentase tiket dalam "Lainnya", persentase dengan departemen hilang, dan persentase dengan stempel waktu di luar rentang yang diharapkan. Hasilnya diposting untuk desk.

Petugas privasi meninjau kumpulan data dan mendapati bahwa kolom teks bebas dan lampiran memuat rincian pribadi anggota publik. Tim sepakat menghapus lampiran dari salinan analisis, menutupi nama dan alamat email dalam teks sebelum dipakai untuk pemodelan, dan menghapus tiket setelah tujuh tahun, sesuai kebijakan arsip perpustakaan. Register mendaftar setiap pemakaian AI atas data tiket dan persetujuannya.

Yang berubah: analis dapat membangun perkiraan dengan patahan yang diketahui dan deret yang bersih, dan model perutean dilatih pada label yang ditinjau. Yang masih sulit: penutupan teks bebas tidak sempurna, dan beberapa rincian pribadi tersisa; sistem HR dan identitas masih tidak sepakat, dan pemilik sistem-sistem itu belum sepakat merekonsiliasi; dan pemeriksaan mutu bergantung pada segelintir staf. Kepala layanan mengangkat ketidaksepakatan data kepada kepala informasi dan berencana memperluas pemeriksaan ke data konfigurasi.

## Empat perspektif

### Tim produk dan pengiriman

Rancang log, peristiwa, dan API produk Anda dengan kolom, stempel waktu, dan pengenal yang konsisten, dan dokumentasikan. Beri tahu pengguna data tentang perubahan lebih awal.

### Tim layanan dan operasi

Masukkan data dengan hati-hati dan konsisten, dan beri tahu pengelola tentang masalah formulir atau kategori. Bantu memeriksa mutu, dan simpan catatan perubahan definisi.

### Kepemimpinan dan tata kelola

Tunjuk pemilik, danai pekerjaan data, dan minta bukti mutu untuk data di balik keputusan. Tetapkan aturan untuk privasi dan pemakaian AI. Jangan menerima laporan dengan istilah yang tidak didefinisikan.

### Pelanggan dan pengguna

Anda seharusnya tahu data apa yang dipegang tentang Anda dan mengapa, dan dapat menanyakannya. Berikan informasi yang akurat, dan beri tahu penyedia jika catatan tampak salah.

## Agile, AI, otomatisasi, dan analitik

### Agile

Perbaiki data dalam langkah kecil yang digerakkan pertanyaan nyata: perbaiki kolom yang menghalangi analisis berikutnya. Tinjau mutu data bersama penggunanya secara berkala. Perhatian: program data multitahun tanpa hasil yang terlihat kehilangan dukungan; sampaikan keuntungan kecil yang berguna.

### AI

AI dapat membantu menemukan masalah mutu, mengklasifikasikan data, menyarankan definisi, dan menutupi data pribadi, di bawah tinjauan. Data yang dipakai AI membutuhkan tata kelolanya sendiri: pemeriksaan sumber, izin, mutu, dan drift. Perhatian: penutupan berbasis AI dapat melewatkan data pribadi; uji dan pertahankan tinjauan manusia untuk kumpulan yang sensitif. Lihat Topik 5.6 — Tata kelola, risiko, dan kepatuhan AI.

### Otomatisasi

Otomatiskan pemeriksaan mutu, penangkapan lineage, label klasifikasi, aturan retensi, dan tinjauan akses, dengan pemilik untuk pengecualian. Perhatian: pembersihan otomatis dapat mengubah data secara diam-diam; catat perubahan dan simpan aslinya bila diwajibkan. Lihat Topik 6.2 — Otomatisasi alur kerja dan orkestrasi.

### Analitik

Ukur mutu kolom kunci, kelengkapan, ketepatan waktu, persentase kumpulan data dengan pemilik dan definisi, dan insiden yang disebabkan masalah data. Perhatian: satu skor mutu dapat menyembunyikan cacat serius pada satu kolom; laporkan menurut kolom dan pemakaian. Lihat Topik 7.3 — Pengukuran dan pelaporan dan buku *Service Management Metrics*.

## Mode kegagalan umum

- **Tidak ada pemilik.** Masalah bertahan. Tunjuk pemilik dan pengelola.
- **Istilah tidak didefinisikan.** Tim memperdebatkan angka. Tulis definisi dan catat perubahan.
- **Mutu diperiksa sekali.** Data membusuk. Pantau kolom kunci terus-menerus.
- **Pembersihan sebagai perbaikan.** Kesalahan berulang. Perbaiki sumbernya.
- **Zona waktu dan pengenal campuran.** Catatan tidak dapat digabung atau diurutkan. Standarkan.
- **Menyimpan segalanya.** Risiko dan biaya tumbuh. Tetapkan retensi dan hapus.
- **Pemakaian data AI yang tidak ditata kelola.** Data sensitif atau buruk sampai ke model. Daftarkan dan tinjau pemakaian.

## Model kematangan

| Dimensi | Memulai | Mengembangkan | Menstandardisasi | Mengelola | Mengorkestrasi |
|---|---|---|---|---|---|
| Kepemilikan dan definisi | Tidak diketahui | Pemilik untuk kumpulan data utama | Pemilik, pengelola, kamus, dan katalog | Definisi dan perubahan dikelola | Tata kelola dikoordinasikan lintas tim dan mitra |
| Mutu | Tidak diketahui | Pemeriksaan acak | Kolom kunci diukur secara teratur | Perbaikan mutu dilacak ke sumber | Mutu dipastikan terus-menerus dengan otomatisasi |
| Perlindungan | Ad hoc | Aturan akses dasar | Aturan klasifikasi, akses, dan retensi | Kepatuhan dipantau dan diaudit | Perlindungan terbangun dalam pipeline dan perangkat |
| Pemakaian dalam AI | Tidak dicatat | Kesadaran | Register dan aturan untuk pemakaian data AI | Pemakaian ditinjau dan diuji untuk bias dan drift | Data AI ditata kelola lintas sistem dan pemasok |

## Daftar periksa

- [ ] Kumpulan data terpenting kami memiliki pemilik dan pengelola yang ditunjuk.
- [ ] Istilah dan kolom kunci didefinisikan secara tertulis, dengan tanggal perubahan.
- [ ] Kami mengukur mutu pada kolom yang menggerakkan keputusan.
- [ ] Kami memperbaiki masalah mutu di sumbernya.
- [ ] Zona waktu, format, dan pengenal distandarkan.
- [ ] Kami tahu dari mana laporan kunci mendapat datanya (lineage).
- [ ] Data diklasifikasikan, akses dikendalikan, dan aturan retensi ada.
- [ ] Register mencatat data apa yang dipakai AI dan siapa yang menyetujui.

## Prompt AI

**Profilkan kumpulan data.**

```text
Here is a sample of a dataset with field names, identifiers removed: [paste, 50–100 rows].
For each field, give the apparent meaning, type, share of missing or placeholder values, odd values, and a question for the data owner. Do not draw business conclusions.
List what you are unsure of.
```

**Susun draf entri kamus data.**

```text
Field: [name]. What I know about it: [source, how it is filled, how it is used].
Draft a dictionary entry with: plain-language definition, allowed values, how it is calculated or entered, source system, owner (only if stated), known issues, and date of last change (only if stated). Mark each item not given as [missing].
List what you are unsure of.
```

**Temukan data pribadi dalam teks bebas untuk ditinjau.**

```text
Here is a sample of ticket free text, already partially masked: [paste].
List items that look like personal data (names, emails, phone numbers, addresses, identifiers) that remain, quoting the exact text, and suggest categories of rules to catch them. Do not guess whether any is real.
List what you are unsure of.
```

## Skill AI

- [data-governance](../../../../skills/data-governance/SKILL.md): gunakan untuk menetapkan kepemilikan, definisi, dan aturan untuk data.
- [data-quality](../../../../skills/data-quality/SKILL.md): gunakan untuk mendefinisikan dan memeriksa mutu pada kolom kunci.
- [data-pipeline](../../../../skills/data-pipeline/SKILL.md): gunakan untuk merancang dan mendokumentasikan aliran data.
- [legal-data-privacy-compliance](../../../../skills/legal-data-privacy-compliance/SKILL.md): gunakan untuk membingkai pertanyaan privasi bagi penasihat hukum Anda.
- [raci-matrix](../../../../skills/raci-matrix/SKILL.md): gunakan untuk menetapkan kepemilikan dan pengelolaan.

## Sumber utama

- DAMA International, *DAMA-DMBOK: Data Management Body of Knowledge*: rujukan luas tentang manajemen dan tata kelola data.
- ISO/IEC 25012, model mutu data: sekumpulan karakteristik mutu data standar; baca edisi terkini dari penerbitnya.
- Wikipedia, "Data governance" dan "Data quality": ikhtisar praktik dan dimensinya.
- Wikipedia, "General Data Protection Regulation": latar belakang satu kerangka hukum penting (bukan nasihat hukum).

## Referensi

1. Data governance — Wikipedia — https://en.wikipedia.org/wiki/Data_governance
2. Data quality — Wikipedia — https://en.wikipedia.org/wiki/Data_quality
3. Data steward — Wikipedia — https://en.wikipedia.org/wiki/Data_steward
4. Data dictionary — Wikipedia — https://en.wikipedia.org/wiki/Data_dictionary
5. Metadata — Wikipedia — https://en.wikipedia.org/wiki/Metadata
6. Data lineage — Wikipedia — https://en.wikipedia.org/wiki/Data_lineage
7. Data cleansing — Wikipedia — https://en.wikipedia.org/wiki/Data_cleansing
8. Master data management — Wikipedia — https://en.wikipedia.org/wiki/Master_data_management
9. Data classification — Wikipedia — https://en.wikipedia.org/wiki/Data_classification
10. Personal data — Wikipedia — https://en.wikipedia.org/wiki/Personal_data
11. General Data Protection Regulation — Wikipedia — https://en.wikipedia.org/wiki/General_Data_Protection_Regulation
12. Data retention — Wikipedia — https://en.wikipedia.org/wiki/Data_retention
