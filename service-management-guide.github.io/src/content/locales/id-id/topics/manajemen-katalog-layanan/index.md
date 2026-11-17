# Manajemen Katalog Layanan

**Katalog layanan (service catalog; dalam ITIL disebut "service catalogue") adalah backlog produk yang dibalik: deskripsi yang dipelihara dan menghadap pengguna tentang apa yang ditawarkan penyedia, dengan pandangan teknis di baliknya yang menunjukkan bagaimana setiap layanan dibangun; ia hanya layak ada jika orang memakainya untuk menemukan, meminta, dan memahami layanan.**

## Mengapa ini penting

Tanyakan kepada pengguna biasa apa yang ditawarkan departemen TI atau HR mereka dan Anda sering mendapat angkat bahu. Layanan ada, tetapi tak seorang pun mendeskripsikannya dengan cara yang dapat ditemukan atau dipahami pengguna. Pengguna bertanya kepada rekan, memakai kanal yang salah, atau membangun solusi sendiri. Penyedia, sebaliknya, tidak dapat mengatakan apa yang mereka tawarkan, siapa pemiliknya, atau berapa biayanya, dan terkejut oleh permintaan akan hal-hal yang tidak mereka ketahui didukung.

Katalog layanan memperbaikinya dengan mendaftar layanan dalam bahasa pengguna, dengan informasi yang dibutuhkan pengguna untuk memutuskan dan meminta: apa yang dilakukan layanan, siapa yang boleh memakai, cara memintanya, berapa lama, dan berapa biayanya. Di belakang pandangan itu ada pandangan teknis, yang menghubungkan setiap layanan dengan komponen, tim, dan pemasok yang menyampaikannya, dan dengan perjanjian yang mengaturnya. Bersama-sama keduanya menghubungkan apa yang dilihat pengguna dengan apa yang dijalankan penyedia.

Katalog bisa gagal dengan dua cara yang berlawanan. Katalog yang kosong dan jarang diperbarui diabaikan. Yang gemuk dengan ratusan butir berbahasa teknis tidak dapat dipakai. Topik ini menjelaskan kedua pandangan, cara membangun katalog yang dipakai orang, dan cara menjaganya tetap hidup. Ia berkaitan erat dengan manajemen permintaan layanan (Topik 3.6 — Manajemen Permintaan Layanan), manajemen tingkat layanan (Topik 3.7 — Manajemen Tingkat Layanan), dan manajemen konfigurasi (Topik 4.4 — Manajemen Konfigurasi).

## Konsep inti

**Service catalogue atau service catalog.** ITIL memakai ejaan Inggris Britania "service catalogue". Panduan ini memakai "katalog layanan" setelah penyebutan pertama ini. Wikipedia menggambarkan service catalog sebagai daftar layanan yang disediakan organisasi, sering kepada karyawan atau pelanggannya.

**Pandangan yang menghadap pelanggan.** Deskripsi layanan sebagaimana dipahami pengguna, seperti "Email dan kalender", "Laptop untuk karyawan baru", atau "Pertanyaan gaji". Ia menyatakan apa layanan itu, siapa yang boleh memakai, cara meminta, waktu yang diharapkan, biaya bila relevan, dan di mana mendapat bantuan. Ini bagian yang ditemui pengguna.

**Pandangan teknis.** Deskripsi bagaimana layanan dibangun dan didukung: komponen, infrastruktur, aplikasi, tim, pemasok, dan perjanjian di balik masing-masing. Ia membantu penyedia memahami ketergantungan dan dampak, misalnya layanan mana yang terdampak jika basis data gagal. Ia terkait dengan basis data manajemen konfigurasi; lihat Topik 4.4 — Manajemen Konfigurasi.

**Portofolio layanan.** Seluruh layanan yang dikelola, termasuk yang sedang dikembangkan, yang hidup di katalog, dan yang sedang dipensiunkan. Katalog adalah bagian hidup dari portofolio. Artikel Wikipedia tentang application portfolio management adalah gagasan terkait untuk perangkat lunak. Lihat Topik 2.8 — Kepemilikan Produk dan Layanan.

**Penawaran layanan (service offering).** Deskripsi formal satu layanan atau lebih, mungkin dengan opsi berbeda, seperti dukungan standar atau premium. Penawaran membantu pengguna memilih yang cocok dan membantu penyedia memahami permintaan dan biaya.

**Butir katalog dan permintaan.** Butir katalog adalah apa yang dapat dipesan atau dipakai pengguna. Di mana butir dapat diminta, ia terhubung ke model permintaan (lihat Topik 3.6 — Manajemen Permintaan Layanan). Sebagian butir bersifat informasional, seperti "Cara menyambung ke jaringan nirkabel".

**Taksonomi dan kemudahan ditemukan.** Pengguna menemukan sesuatu dengan menelusuri kategori atau mencari. Artikel Wikipedia tentang taxonomy dan information architecture menjelaskan cara menata informasi. Kategori harus mencerminkan cara pengguna berpikir, bukan cara organisasi distrukturkan. Ujian yang baik adalah menanyakan kepada pengguna di mana mereka akan mencari butir tertentu.

**Bahasa sederhana.** Deskripsi harus singkat dan jelas, menghindari jargon dan akronim. Artikel Wikipedia tentang plain language menjelaskan prinsipnya. Uji deskripsi dengan orang yang baru mengenal layanan.

**Kepemilikan.** Setiap layanan memiliki pemilik yang ditunjuk yang memelihara entrinya dan bertanggung jawab atas mutunya. Tanpa pemilik, entri membusuk. Lihat Topik 2.8 — Kepemilikan Produk dan Layanan.

**Katalog sebagai backlog.** Perlakukan katalog sebagai produk yang hidup. Entri ditambah, diperbaiki, digabung, dan dipensiunkan berdasarkan permintaan dan umpan balik. Backlog perbaikan katalog, yang ditinjau secara berkala, menjaganya tetap mutakhir. Ini mencerminkan gagasan backlog produk; lihat artikel Wikipedia tentang product backlog.

**Biaya dan penagihan.** Di mana layanan dikenai biaya, katalog menunjukkan harga atau alokasi biayanya. Bahkan di mana tidak ada biaya, menunjukkan biaya meningkatkan kesadaran. Lihat Topik 4.5 — Manajemen keuangan dan FinOps.

**Di luar TI.** Banyak organisasi memperluas katalog ke HR, fasilitas, dan fungsi lain. Lihat Topik 1.9 — Manajemen layanan perusahaan.

**Pencarian dan AI.** Pengguna makin sering mencari atau bertanya kepada asisten obrolan alih-alih menelusuri. Isi katalog harus jelas dan terstruktur agar pencarian dan asisten dapat menemukannya. AI dapat membantu mencocokkan deskripsi pengguna dengan butir katalog.

**Bagaimana lensa-lensa cocok.** Katalog adalah produk perbaikan berkelanjutan: perbarui entri dari pertanyaan nyata. AI dapat menyusun entri, menyarankan kategori, dan membantu pengguna menemukan layanan, di bawah tinjauan. Otomatisasi menghubungkan katalog dengan pemenuhan dan data konfigurasi. Analitik menunjukkan apa yang dipakai, dicari, dan ditinggalkan.

## Praktik terbaik

1. **Mulai dari permintaan dan pertanyaan teratas.** Daftarkan dua puluh hal yang paling sering diminta pengguna. Deskripsikan itu lebih dulu. Katalog kecil yang berguna lebih baik daripada yang besar dan kosong.
2. **Deskripsikan setiap layanan dengan istilah pengguna.** Tulis ringkasan singkat, untuk siapa, cara meminta, waktu yang diharapkan, biaya, dan di mana mendapat bantuan. Hindari nama internal dan akronim.
3. **Tunjuk pemilik dan tanggal tinjauan.** Tunjukkan siapa pemilik entri. Tinjau setiap entri setidaknya setahun sekali, dan ketika layanan berubah.
4. **Organisasikan menurut cara pengguna berpikir.** Uji kategori bersama pengguna, seperti card sort atau log pencarian. Ubah ketika bukti menyatakan demikian.
5. **Hubungkan ke pemenuhan.** Di mana layanan dapat diminta, hubungkan entri ke formulir permintaan dan pelacakan status. Katalog yang tidak mengarah pada tindakan hanyalah brosur.
6. **Simpan pandangan teknis untuk penyedia.** Catat, untuk setiap layanan, komponen, tim, pemasok, dan perjanjian di baliknya. Pakai untuk analisis dampak dan perencanaan.
7. **Tunjukkan biaya dan opsi.** Nyatakan berapa biaya layanan atau apa yang dikonsumsinya, dan deskripsikan opsi, agar pengguna dapat memilih dengan informasi.
8. **Amati apa yang dicari pengguna.** Tinjau istilah pencarian yang tidak mengembalikan apa-apa atau yang salah, dan tambahkan atau ganti nama entri agar cocok.
9. **Pensiunkan dan gabungkan.** Hapus layanan yang tidak lagi ditawarkan. Gabungkan yang hampir kembar. Tandai layanan yang sedang berubah.
10. **Perlakukan katalog sebagai produk.** Beri ia pemilik, backlog, dan umpan balik teratur dari pengguna. Ukur pemakaian, dan perbaiki yang tidak dipakai.

## Pertanyaan untuk dibahas bersama tim Anda

**Jika karyawan baru bertanya apa yang kita tawarkan, dapatkah kita menjawab tanpa mencarinya?**
Pertanyaan ini menguji apakah layanan dikenal dan dideskripsikan. Harapkan jawaban sebagian. Minta daftar dari tiga orang dan bandingkan. Lanjutkan dengan memilih sepuluh teratas dan menuliskannya.

**Butir katalog mana yang tidak pernah dibuka pengguna, dan mana yang dibuka lalu mereka menelepon kita?**
Gunakan data. Butir yang dibuka lalu ditinggalkan menunjukkan deskripsi yang tidak jelas. Butir yang tidak pernah dibuka mungkin berlebihan. Lanjutkan dengan memilih tiga entri untuk ditulis ulang atau dipensiunkan.

**Apa yang diketik pengguna ke pencarian yang tidak mengembalikan hasil berguna?**
Log pencarian mengungkap perbedaan kosakata. Harapkan kata sehari-hari yang tidak cocok dengan nama internal. Lanjutkan dengan menambahkan alias atau entri baru untuk lima pencarian gagal teratas.

**Siapa yang memiliki setiap entri layanan, dan kapan terakhir diperiksa?**
Kesenjangan kepemilikan dan entri usang itu umum. Minta tanggal. Lanjutkan dengan menetapkan pemilik dan siklus tinjauan.

**Bagaimana pandangan teknis kita terhubung dengan apa yang dilihat pengguna, dan dapatkah kita mengatakan layanan mana yang terdampak oleh kegagalan tertentu?**
Pertanyaan ini menguji hubungan antarpandangan. Cobalah untuk insiden terbaru. Harapkan pekerjaan manual. Lanjutkan dengan memilih satu layanan kritis dan memetakan ketergantungannya.

**Bagaimana AI dapat membantu pengguna menemukan layanan dan membantu kita menjaga entri tetap mutakhir, dan apa yang harus diperiksa seseorang?**
AI dapat mencocokkan deskripsi pengguna dengan entri dan menyusun pembaruan dari tiket. Ia juga dapat mengarahkan pengguna ke layanan yang salah. Tanyakan siapa pemiliknya dan bagaimana ketidakcocokan ditemukan. Lanjutkan dengan menguji pencocok pada sampel pertanyaan nyata.

## Dalam praktik: contoh manajemen layanan

Departemen TI internal sebuah otoritas pajak nasional memiliki katalog layanan dengan 340 butir, sebagian besar ditulis oleh insinyur yang membangun layanannya. Staf memakai telepon service desk, dan desk menghabiskan banyak waktunya mengarahkan penelepon ke layanan yang sudah ada.

Manajer layanan meminta kelompok lima belas staf dari berbagai departemen menemukan lima hal di katalog: cara memesan ruang rapat video, cara mendapat monitor kedua, cara bergabung ke milis proyek, cara mendapat akses ke sistem perkara, dan cara melaporkan ponsel hilang. Hanya dua yang berhasil. Katalog memakai istilah seperti "penyediaan titik akhir konferensi audio-visual" dan "peralatan periferal".

Tim meninjau enam bulan kontak desk dan meranking 30 topik permintaan teratas. Mereka menulis ulang entri-entri itu dalam bahasa sederhana, dengan deskripsi singkat, siapa yang boleh meminta, berapa lama, dan tautan ke formulir. Mereka menggabungkan 90 entri menjadi 40, mempensiunkan 60 yang tidak lagi ditawarkan, dan menambahkan alias pencarian seperti "layar kedua" untuk monitor. Setiap entri menunjukkan pemilik dan tanggal tinjauan. Asisten obrolan diuji coba untuk mengarahkan pengguna ke entri, dengan tautan ke manusia ketika tidak bisa.

Yang berubah: kelompok uji yang sama kini menemukan empat dari lima butir, dan kontak desk "di mana saya menemukan" menurun. Yang masih sulit: pandangan teknis belum lengkap, sehingga analisis dampak masih bergantung pada pengetahuan lisan; 240 entri sisanya belum ditinjau; dan pemilik beberapa layanan mengatakan mereka tidak punya waktu menjaga entri tetap mutakhir. Manajer menetapkan aturan bahwa entri yang tidak ditinjau dalam setahun ditandai "belum diverifikasi" dan diturunkan prioritasnya dalam pencarian.

## Empat perspektif

### Tim produk dan pengiriman

Deskripsikan layanan yang Anda bangun untuk pengguna, dan jaga entri tetap mutakhir ketika Anda mengubahnya. Sediakan informasi teknis yang menghubungkan komponen Anda dengan layanan yang didukungnya.

### Tim layanan dan operasi

Pelihara pandangan teknis dan pakai dalam insiden dan perubahan. Amati apa yang dicari dan ditanyakan pengguna, dan umpankan kesenjangan kepada pemilik. Bantu menjaga tautan pemenuhan tetap berfungsi.

### Kepemimpinan dan tata kelola

Minta katalog yang berguna bagi pengguna, dengan pemilik dan tanggal tinjauan. Danai pemeliharaannya. Pakai untuk melihat apa yang ditawarkan, berapa biayanya, dan apa yang dipensiunkan.

### Pelanggan dan pengguna

Anda seharusnya dapat menemukan apa yang tersedia, memahaminya, dan memintanya tanpa mengetahui bagan organisasi. Beri tahu penyedia apa yang tidak dapat Anda temukan atau pahami.

## Agile, AI, otomatisasi, dan analitik

### Agile

Perlakukan katalog sebagai backlog: perbaiki entri yang paling banyak dipakai lebih dulu, dalam langkah kecil, dengan umpan balik pengguna. Tinjau secara berkala bersama pemangku kepentingan. Perhatian: jangan membangun seluruh katalog sebelum peluncuran; awal yang kecil dan berguna akan mengajari Anda lebih banyak.

### AI

AI dapat menyusun entri dari dokumen yang ada, menyarankan kategori dan alias, dan membantu pengguna menemukan layanan dalam obrolan. Setiap pemakaian memerlukan pemilik, dan seseorang harus menyetujui teks yang diterbitkan. Perhatian: asisten yang menebak entri yang tidak ada menyesatkan pengguna; wajibkan ia mengutip entri katalog. Lihat Topik 5.3 — Service desk AI dan agen virtual.

### Otomatisasi

Hubungkan katalog ke formulir permintaan, persetujuan, dan pemenuhan, dan hasilkan sebagian pandangan teknis dari data konfigurasi. Perhatian: impor otomatis data teknis dapat memenuhi katalog dengan nama mesin; pertahankan langkah penyuntingan oleh manusia untuk teks yang menghadap pengguna. Lihat Topik 6.5 — Swalayan dan pemenuhan otomatis.

### Analitik

Lacak tayangan, pencarian, pencarian tanpa hasil, permintaan yang dibuat, dan permintaan yang ditinggalkan. Perhatian: popularitas bukan nilai; butir yang jarang dipakai bisa kritis bagi segelintir orang. Gabungkan hitungan dengan umpan balik. Lihat Topik 7.7 — Analitik pengalaman dan sentimen dan buku *Service Management Metrics*.

## Mode kegagalan umum

- **Katalog yang ditulis oleh insinyur.** Pengguna tidak dapat memahaminya. Tulis ulang dalam bahasa sederhana dan uji.
- **Terlalu banyak entri.** Tak seorang pun dapat menemukan apa-apa. Mulai kecil, lalu gabungkan dan pensiunkan.
- **Tidak ada pemilik.** Entri membusuk. Tunjuk pemilik dan tanggal tinjauan.
- **Hanya brosur.** Katalog tidak mengarah pada tindakan. Hubungkan entri ke formulir dan status.
- **Kategori menurut bagan organisasi.** Pengguna tidak dapat menebak di mana harus mencari. Organisasikan menurut maksud pengguna.
- **Tidak ada pandangan teknis.** Analisis dampak hanya tebakan. Petakan ketergantungan untuk layanan kritis.
- **Tidak pernah mempensiunkan.** Entri mati menyesatkan. Tinjau dan hapus.

## Model kematangan

| Dimensi | Memulai | Mengembangkan | Menstandardisasi | Mengelola | Mengorkestrasi |
|---|---|---|---|---|---|
| Pandangan yang menghadap pengguna | Tidak ada atau teknis | Layanan teratas dideskripsikan | Layanan dideskripsikan dalam bahasa sederhana dengan pemilik | Entri diuji dan ditinjau bersama pengguna | Entri konsisten lintas fungsi dan kanal |
| Pandangan teknis | Tidak dicatat | Layanan utama dipetakan | Ketergantungan dicatat untuk layanan penting | Dipakai dalam insiden dan perubahan | Dihasilkan dan dijaga mutakhir dari data konfigurasi |
| Kemudahan ditemukan | Hanya menelusuri | Sebagian pencarian | Pencarian dan kategori diuji bersama pengguna | Log pencarian menggerakkan perubahan | Pencarian dan asisten terintegrasi lintas kanal |
| Pemeliharaan | Tidak ada | Sesekali | Pemilik dan tanggal tinjauan | Pemakaian dan mutu diukur | Perbaikan berkelanjutan dari umpan balik |

## Daftar periksa

- [ ] Dua puluh permintaan dan pertanyaan teratas ada di katalog.
- [ ] Setiap entri dalam bahasa sederhana, dengan siapa, bagaimana, berapa lama, dan biaya.
- [ ] Setiap entri memiliki pemilik dan tanggal tinjauan.
- [ ] Kategori diuji bersama pengguna.
- [ ] Entri yang dapat diminta terhubung ke formulir dan status.
- [ ] Pandangan teknis mencakup layanan kritis kami.
- [ ] Kami meninjau pencarian gagal dan entri yang ditinggalkan.
- [ ] Kami mempensiunkan atau menggabungkan entri secara berkala.

## Prompt AI

**Susun draf entri katalog dari catatan.**

```text
Here are notes on the service [name]: [paste, including what it does, who can use it, how to ask, how long, cost].
Draft a catalog entry of under 120 words in plain language with a one-line summary, who it is for, how to ask, and expected time. Mark every gap in the notes with [missing] and do not fill it.
List what you are unsure of.
```

**Temukan kesenjangan kosakata.**

```text
Here are search terms users typed with no useful result: [paste list]. Here are our current catalog entry titles: [paste list].
For each search term, list the entry titles that might match, or write "no match", and suggest a possible alias or new entry. Do not invent entries that I did not list as possible.
List what you are unsure of.
```

**Uji kategori.**

```text
Here is a list of catalog items: [paste]. Here is our proposed category structure: [paste].
For each item, say which category a typical user would most likely look in and why, and list items that could reasonably sit in two places. Use only what is provided.
List what you are unsure of.
```

## Skill AI

- [service-catalog](../../../../skills/service-catalog/SKILL.md): gunakan untuk membangun dan memelihara katalog yang menghadap pengguna.
- [workflow-analysis](../../../../skills/workflow-analysis/SKILL.md): gunakan untuk menghubungkan entri dengan langkah pemenuhan.
- [stakeholder-analysis](../../../../skills/stakeholder-analysis/SKILL.md): gunakan untuk mengidentifikasi siapa yang memakai dan memiliki setiap layanan.
- [portfolio-management](../../../../skills/portfolio-management/SKILL.md): gunakan untuk meninjau seluruh layanan.

## Sumber utama

- PeopleCert, halaman sertifikasi ITIL: uraian pemilik tentang manajemen katalog layanan.
- Wikipedia, "Service catalog": ikhtisar singkat konsep ini.
- Wikipedia, "Information architecture": disiplin menata informasi untuk pengguna.
- Wikipedia, "Plain language": prinsip penulisan yang jelas.

## Referensi

1. Service catalog — Wikipedia — https://en.wikipedia.org/wiki/Service_catalog
2. Application portfolio management — Wikipedia — https://en.wikipedia.org/wiki/Application_portfolio_management
3. Taxonomy — Wikipedia — https://en.wikipedia.org/wiki/Taxonomy
4. Information architecture — Wikipedia — https://en.wikipedia.org/wiki/Information_architecture
5. Plain language — Wikipedia — https://en.wikipedia.org/wiki/Plain_language
6. Configuration management database — Wikipedia — https://en.wikipedia.org/wiki/Configuration_management_database
7. Product backlog — Wikipedia — https://en.wikipedia.org/wiki/Product_backlog
8. Self-service — Wikipedia — https://en.wikipedia.org/wiki/Self-service
9. Search engine — Wikipedia — https://en.wikipedia.org/wiki/Search_engine
10. Product management — Wikipedia — https://en.wikipedia.org/wiki/Product_management
