# Manajemen Pengetahuan

**Manajemen pengetahuan membuat apa yang dipelajari orang saat menjalankan layanan tersedia bagi orang berikutnya yang membutuhkannya; pendekatan yang berhasil menangkap pengetahuan sebagai produk sampingan dari penyelesaian masalah, menjaganya dekat dengan pekerjaan, meninjaunya ketika dipakai, dan memperlakukan pencarian dan penyusunan oleh AI sebagai pembantu di atas basis yang dipelihara manusia.**

## Mengapa ini penting

Setiap tim layanan membawa pengetahuan yang tidak tertulis di mana pun: mengapa suatu pengaturan dipilih, bagaimana memulai ulang komponen yang rapuh, apa yang dibutuhkan pelanggan tertentu. Ketika seseorang pergi, berlibur, atau sekadar lupa, pengetahuan itu ikut pergi, dan tim menemukan ketergantungannya pada saat terburuk: selama insiden di malam hari.

Sebagian besar organisasi telah mencoba memperbaikinya dengan kampanye dokumentasi. Staf diperintahkan menuliskan segalanya. Basis pengetahuan dipenuhi artikel yang tidak dibaca atau dipercaya siapa pun, karena usang, panjang, atau sulit ditemukan. Setelah beberapa bulan usaha itu surut, dan orang kembali bertanya kepada rekan.

Pendekatan yang lebih baik memperlakukan pengetahuan sebagai bagian dari pekerjaan, bukan tugas terpisah. Penangkapan terjadi saat menyelesaikan masalah, dalam beberapa baris, oleh orang yang menyelesaikannya. Artikel yang membantu dipakai dan diperbaiki; artikel yang gagal diperbaiki atau dihapus. Basis pengetahuan berada di perangkat yang sudah dipakai orang: service desk, kanal insiden, repositori kode. Topik ini menjelaskan gagasan-gagasan itu, termasuk metode Knowledge-Centered Service (KCS), dan peran AI sekarang dalam pencarian dan penyusunan. Ia berkaitan dengan service desk (Topik 3.1 — Service Desk), manajemen masalah (Topik 3.3 — Manajemen Masalah), dan skill AI (Topik 5.7 — Keterampilan dan Prompt AI).

## Konsep inti

**Data, informasi, pengetahuan.** Data adalah fakta; informasi adalah data dalam konteks; pengetahuan adalah informasi yang dapat dipakai seseorang untuk bertindak. Kode kesalahan adalah data, artikel yang menjelaskan artinya adalah informasi, dan mengetahui mana dari tiga kemungkinan penyebab yang mungkin pada pukul 3 pagi adalah pengetahuan. Basis pengetahuan dapat memuat informasi dan penunjuk; ia tidak dapat memuat semua pengetahuan. Artikel Wikipedia tentang knowledge management menjelaskan bidang ini.

**Pengetahuan eksplisit dan tasit.** Pengetahuan eksplisit dapat dituliskan: prosedur, daftar periksa, diagram. Pengetahuan tasit (tacit) hidup dalam praktik dan penilaian dan sulit diartikulasikan. Wikipedia menjelaskan tacit knowledge, istilah yang dikaitkan dengan Michael Polanyi. Keduanya penting. Menulis membantu yang eksplisit; percakapan, berpasangan, dan membuntuti membantu yang tasit.

**Basis pengetahuan.** Kumpulan artikel, panduan, dan jawaban, yang dapat dicari oleh pengguna dan staf. Wikipedia menjelaskan knowledge base dan wiki. Bisa internal, untuk staf, atau eksternal, untuk pelanggan. Mutunya lebih bergantung pada pemeliharaan daripada pada perangkat.

**Runbook.** Instruksi langkah demi langkah untuk menangani situasi yang dikenal, seperti memulai ulang layanan atau menanggapi peringatan umum. Artikel Wikipedia tentang runbook menggambarkannya sebagai kompilasi prosedur untuk operasi sistem. Runbook yang baik singkat, teruji, dan terhubung dengan peringatan yang memicunya. Lihat Topik 6.6 — Otomatisasi runbook dan perbaikan otomatis.

**Knowledge-Centered Service (KCS).** Metode yang diterbitkan Consortium for Service Innovation. Gagasan utamanya: tangkap pengetahuan saat menyelesaikan masalah, dalam alur kerja; pakai ulang dan perbaiki artikel saat memakainya; buat aman dan normal bagi semua orang untuk berkontribusi; dan kembangkan basis pengetahuan menurut permintaan, bukan rencana di muka. Uraiannya mencakup praktik seperti "solve loop" dan "evolve loop". Periksa panduan terkini Consortium untuk rinciannya.

**Menangkap dalam alur kerja.** Waktu terbaik untuk menulis artikel adalah ketika Anda baru saja menyelesaikan masalah. Catatan singkat, dengan gejala, penyebab, dan perbaikan, di perangkat yang sama dengan tiket, memakan beberapa menit. Menulisnya belakangan, dari ingatan, memakan lebih banyak waktu dan sering dilewatkan.

**Pemakaian ulang sebagai sinyal.** Ketika artikel dipakai untuk menyelesaikan masalah, tautkan ke tiket. Menghitung tautan menunjukkan artikel mana yang membantu, dan mana yang tidak pernah dipakai. Jika seseorang memakai artikel dan ia gagal, mereka harus memperbaiki atau menandainya saat itu juga.

**Mutu artikel.** Artikel yang baik memiliki judul yang jelas dalam kata-kata yang dipakai pengguna, pernyataan singkat tentang gejala atau pertanyaan, penyebab bila diketahui, langkah, cara memeriksa bahwa ia berhasil, dan siapa yang ditanya jika tidak. Ia singkat dan dijaga seirama dengan sistem.

**Dokumentasi sebagai bagian dari repositori.** Bagi tim rekayasa, menyimpan dokumentasi di samping kode, dalam teks biasa seperti Markdown, dan meninjau perubahan bersama kode menjaganya tetap selaras. Artikel Wikipedia tentang Markdown menjelaskan formatnya. Pull request yang mengubah perilaku juga mengubah dokumen.

**Catatan keputusan.** Catatan singkat yang merekam mengapa keputusan signifikan dibuat, alternatif apa yang dipertimbangkan, dan apa yang diketahui pada saat itu. Mereka membantu anggota tim baru dan tinjauan di masa depan memahami penalarannya.

**Bus factor.** Jumlah orang yang harus hilang sebelum proyek terhenti karena kekurangan pengetahuan. Wikipedia menjelaskan bus factor, juga disebut lottery factor. Bus factor satu adalah risiko. Menyebarkan pengetahuan melalui berpasangan, rotasi, dan berbagi menaikkannya.

**Transfer pengetahuan.** Memindahkan pengetahuan dari satu orang ke orang lain, melalui serah terima, berpasangan, pelatihan, dan membuntuti. Wikipedia menjelaskan knowledge transfer. Sediakan waktu untuknya, terutama ketika seseorang akan pergi.

**Kemudahan ditemukan.** Bahkan konten yang baik tidak berguna jika orang tidak dapat menemukannya. Judul, tag, penyetelan pencarian, dan tautan dari peringatan dan tiket penting. Artikel Wikipedia tentang search engine dan information overload menjelaskan masalah terkait.

**AI dan retrieval.** Asisten AI dapat mencari basis pengetahuan, merangkum artikel, dan menyusun yang baru. Pola yang umum, retrieval-augmented generation, mengambil bagian yang relevan dan meminta model menjawab dengan hanya memakai bagian itu. Wikipedia menjelaskan gagasannya. Jawaban asisten hanya sebaik basis yang dibacanya, dan ia tetap bisa keliru. Lihat Topik 5.4 — AI generatif untuk insiden, pengetahuan, dan perubahan.

**Tata kelola.** Putuskan siapa yang memiliki basis pengetahuan, bagaimana artikel ditinjau, bagaimana konten sensitif dikendalikan, dan kapan konten lama diarsipkan. Jaga aturan tetap ringan.

**Bagaimana lensa-lensa cocok.** Manajemen pengetahuan adalah perbaikan berkelanjutan pada tingkat artikel individual. AI membantu pengguna menemukan, merangkum, dan menyusun, di bawah tinjauan. Otomatisasi menghubungkan peringatan dengan runbook dan tiket dengan artikel. Analitik menunjukkan artikel mana yang dipakai, yang gagal, dan kesenjangan mana yang dicari.

## Praktik terbaik

1. **Tangkap saat menyelesaikan.** Tulis artikel singkat atau perbarui satu sebagai bagian dari menutup tiket. Jadikan langkah normal, bukan pekerjaan tambahan.
2. **Tulis untuk pembaca pukul 3 pagi.** Pakai kata-kata yang dicari orang, langkah singkat, dan pemeriksaan bahwa perbaikan berhasil. Taruh bagian yang paling berguna lebih dulu.
3. **Tautkan artikel ke tiket dan peringatan.** Ketika peringatan menyala, tautkan ke runbook. Ketika artikel menyelesaikan tiket, tautkan keduanya. Tautan menunjukkan apa yang berguna.
4. **Perbaiki atau tandai saat dipakai.** Jika artikel salah atau tidak jelas saat Anda memakainya, perbaiki atau tandai untuk ditinjau segera. Permudah untuk dilakukan.
5. **Buat berkontribusi itu aman.** Izinkan semua orang menyunting, dengan tinjauan ringan untuk konten sensitif atau berdampak tinggi. Ucapkan terima kasih kepada kontributor dan jangan menghukum kesalahan.
6. **Pangkas secara berkala.** Tinjau artikel yang lama tidak dipakai, dan arsipkan. Basis yang lebih kecil dan tepercaya lebih baik daripada yang besar dan diragukan.
7. **Simpan dokumentasi rekayasa bersama kode.** Tinjau bersama perubahan, dan hasilkan apa yang bisa, seperti rujukan API, dari sumbernya.
8. **Catat keputusan penting.** Tulis catatan keputusan singkat dengan konteks, opsi, dan alasan. Tautkan ke kode atau desain yang menjadi pokoknya.
9. **Sebarkan pengetahuan secara sengaja.** Pakai berpasangan, rotasi, ceramah singkat, dan membuntuti untuk memindahkan pengetahuan tasit. Periksa bus factor untuk setiap layanan kritis.
10. **Perlakukan jawaban AI sebagai draf.** Biarkan AI mencari dan menyarankan, dengan sumber ditampilkan, dan minta seseorang mengonfirmasi artikel sebelum menjadi resmi. Lacak jawaban buruk dan perbaiki sumbernya.

## Pertanyaan untuk dibahas bersama tim Anda

**Apa yang terakhir kali harus kita tanyakan kepada seseorang untuk dijelaskan padahal seharusnya sudah tertulis?**
Mulailah dengan kasus nyata. Harapkan "bagaimana kita memulai ulang X" atau "mengapa Y diatur begini". Tanyakan apa yang menghalangi penulisannya. Lanjutkan dengan menuliskannya sekarang, bersama-sama.

**Artikel mana yang kita percayai, dan mana yang kita hindari?**
Kepercayaan bervariasi menurut tim dan topik. Tanyakan mengapa. Harapkan "usang" dan "terlalu panjang". Lanjutkan dengan memilih tiga artikel yang tidak dipercaya untuk diperbaiki atau dihapus.

**Berapa banyak dari kita yang tahu cara memulihkan layanan kita yang paling kritis, dan apa yang terjadi jika mereka tidak ada?**
Pertanyaan ini menguji bus factor. Hitung dengan jujur. Harapkan satu atau dua nama. Lanjutkan dengan merencanakan sesi berpasangan atau latihan yang menyebarkan pengetahuan.

**Di mana kita menuliskan sesuatu hari ini, dan dapatkah kita menemukannya?**
Daftarkan tempatnya: obrolan, wiki, tiket, repositori, catatan pribadi. Cobalah menemukan jawaban tertentu bersama-sama. Lanjutkan dengan menyepakati rumah bagi setiap jenis pengetahuan.

**Seberapa mudah bagi siapa pun di tim untuk memperbaiki artikel yang mereka anggap salah?**
Hambatannya mencakup izin, keterlambatan tinjauan, dan takut dikritik. Tanyakan apa yang akan menjadikannya tugas tiga puluh detik. Lanjutkan dengan menyingkirkan satu hambatan.

**Bagaimana kita memakai AI untuk menemukan atau menulis pengetahuan, dan bagaimana kita memeriksa apa yang dikatakannya?**
Tanyakan siapa yang memakai perangkat AI untuk pekerjaan pengetahuan dan apa yang mereka percayai. Harapkan pemakaian tanpa kritik di beberapa tempat. Lanjutkan dengan menyepakati bahwa jawaban mengutip artikel, dan dengan mengambil sampel jawaban terhadapnya.

## Dalam praktik: contoh manajemen layanan

Tim infrastruktur beranggotakan delapan orang di sebuah dinas meteorologi nasional menjalankan pipeline data prakiraan. Dua insinyur senior memegang sebagian besar pengetahuan tentang pipeline tertua, yang memproses data satelit. Ketika salah satunya mengambil cuti tiga minggu, kegagalan pada pipeline memakan dua hari untuk diselesaikan karena junior yang berjaga tidak dapat menemukan prosedur restart, yang berada di utas email enam tahun lalu.

Ketua tim memutuskan memakai versi ringan KCS. Siapa pun yang menyelesaikan masalah menulis beberapa baris di kolom solusi tiket: gejala, penyebab, perbaikan, pemeriksaan. Sesi mingguan sepuluh menit meninjau catatan baru dan mempromosikan yang berguna menjadi runbook di repositori tim. Setiap peringatan terhubung ke runbook-nya. Kedua insinyur senior setuju berpasangan dengan junior secara bergilir dan merekam dua video singkat yang menelusuri pipeline.

Setelah tiga bulan, ada 40 runbook, dan tim dapat melihat di perangkat tiket mana yang terhubung dengan insiden yang terselesaikan. Pada kegagalan berikutnya, junior yang berjaga menemukan runbook melalui peringatan, mengikutinya, dan memulihkan pipeline dalam 25 menit. Asisten pencarian yang diuji coba pada repositori menjawab satu pertanyaan dengan salah, mengutip bagian runbook yang telah digantikan oleh suntingan kemudian. Ketua menambahkan aturan bahwa bagian yang digantikan dihapus, bukan dicoret.

Yang berubah: pipeline tidak lagi bergantung pada dua orang, dan junior merasa lebih percaya diri. Yang masih sulit: insinyur senior masih merasa menulis memakan waktu yang tidak mereka miliki; beberapa runbook hanya diuji dengan dibaca; dan pipeline tertua memiliki komponen yang tidak sepenuhnya dipahami siapa pun, yang tidak akan diperbaiki oleh dokumen mana pun. Ketua merencanakan latihan untuk pipeline tertua dan menjadwalkan tinjauan desain atas komponen yang tidak dipahami siapa pun.

## Empat perspektif

### Tim produk dan pengiriman

Simpan dokumentasi bersama kode dan tinjau bersama perubahan. Tulis catatan keputusan dan runbook sebagai bagian dari pekerjaan, dan bagikan apa yang Anda pelajari dengan operasi.

### Tim layanan dan operasi

Tangkap solusi saat Anda bekerja, perbaiki artikel saat memakainya, dan tautkan peringatan ke runbook. Bagikan pengetahuan tasit melalui berpasangan. Beri tahu pemilik tentang kesenjangan yang Anda temukan.

### Kepemimpinan dan tata kelola

Jadikan menulis dan membaca pengetahuan sebagai bagian normal dari pekerjaan, bukan tugas sampingan. Danai waktu untuk berpasangan dan latihan. Minta bus factor layanan kritis. Jangan memberi penghargaan atas jumlah artikel.

### Pelanggan dan pengguna

Artikel yang baik memungkinkan Anda menyelesaikan masalah sendiri dan mendapat jawaban lebih cepat. Beri tahu penyedia ketika artikel membingungkan atau salah, dan apa yang sedang Anda coba lakukan.

## Agile, AI, otomatisasi, dan analitik

### Agile

Kembangkan basis pengetahuan dalam langkah kecil, digerakkan oleh pemakaian, dengan pengguna dan staf memberi umpan balik. Tinjau kesenjangan dalam sesi singkat yang teratur. Perhatian: hindari proyek dokumentasi besar; hasilnya adalah konten yang sudah usang saat peluncuran.

### AI

AI dapat mencari basis, merangkum artikel, menjawab pertanyaan dengan kutipan, dan menyusun artikel dari tiket dan obrolan, dengan seseorang menyetujui apa pun yang menjadi resmi. Tunjuk pemilik. Perhatian: asisten dapat menjawab dengan yakin dari konten yang usang atau salah; tampilkan sumber, dan lacak koreksi. Lihat Topik 5.4 — AI generatif untuk insiden, pengetahuan, dan perubahan.

### Otomatisasi

Hubungkan peringatan ke runbook, sarankan artikel pada tiket baru, tandai konten usang, dan buat draf artikel dari tiket yang ditutup, dengan penyuntingan oleh manusia. Perhatian: saran otomatis dapat memenuhi basis dengan draf bermutu rendah; batasi apa yang diterbitkan tanpa tinjauan. Lihat Topik 6.6 — Otomatisasi runbook dan perbaikan otomatis.

### Analitik

Lacak pemakaian artikel, tautan ke tiket yang terselesaikan, pencarian tanpa hasil, dan waktu sejak tinjauan terakhir. Perhatian: jumlah artikel yang dibuat menghargai volume, dan jumlah pemakaian menghargai topik populer di atas yang kritis namun jarang; gabungkan dengan umpan balik dan pengambilan sampel. Lihat buku *Service Management Metrics* dan Topik 7.3 — Pengukuran dan pelaporan.

## Mode kegagalan umum

- **Kampanye dokumentasi.** Ledakan penulisan diikuti pembusukan. Tangkap pengetahuan sebagai bagian dari pekerjaan.
- **Artikel panjang.** Tak seorang pun membacanya. Tulis yang singkat dan berfokus pada tugas.
- **Konten usang.** Kepercayaan terkikis. Perbaiki atau tandai saat dipakai, dan pangkas.
- **Pengetahuan hanya di obrolan.** Tidak dapat ditemukan. Pindahkan jawaban yang berguna ke basis.
- **Bus factor satu.** Ketidakhadiran satu orang menghentikan pekerjaan. Sebarkan pengetahuan secara sengaja.
- **Jawaban AI tidak diperiksa.** Saran yang salah menyebar. Tampilkan sumber dan ambil sampel jawaban.
- **Menulis sebagai hukuman.** Orang menghindarinya. Jadikan normal dan beri pengakuan.

## Model kematangan

| Dimensi | Memulai | Mengembangkan | Menstandardisasi | Mengelola | Mengorkestrasi |
|---|---|---|---|---|---|
| Penangkapan | Di kepala dan obrolan | Beberapa artikel setelah insiden | Penangkapan adalah langkah normal dalam alur kerja | Mutu penangkapan disampel dan diperbaiki | Penangkapan diotomatiskan dengan tinjauan manusia |
| Kemudahan ditemukan | Tanya rekan | Basis yang dapat dicari | Peringatan dan tiket terhubung ke artikel | Kesenjangan pencarian menggerakkan konten | Retrieval dan asisten terintegrasi lintas perangkat |
| Mutu | Tidak ditinjau | Pembersihan sesekali | Perbaiki-atau-tandai saat dipakai, pemangkasan teratur | Mutu diukur dari pemakaian dan hasil | Mutu diperbaiki terus-menerus di seluruh organisasi |
| Penyebaran | Satu ahli | Sebagian berpasangan | Bus factor diperiksa untuk layanan kritis | Latihan dan rotasi direncanakan | Pengetahuan dibagikan lintas tim dan mitra |

## Daftar periksa

- [ ] Orang menangkap solusi sebagai bagian dari menutup tiket.
- [ ] Peringatan terhubung ke runbook.
- [ ] Artikel singkat dan ditulis dengan kata-kata yang dicari pengguna.
- [ ] Siapa pun dapat memperbaiki artikel yang mereka anggap salah, dengan tinjauan ringan.
- [ ] Kami memangkas artikel yang tidak dipakai atau usang secara berkala.
- [ ] Dokumentasi rekayasa berada bersama kode dan ditinjau bersama perubahan.
- [ ] Kami tahu bus factor setiap layanan kritis.
- [ ] Jawaban AI mengutip sumber dan disampel untuk kebenarannya.

## Prompt AI

**Susun draf artikel dari tiket yang terselesaikan.**

```text
Here is a resolved ticket with notes, personal data removed: [paste].
Draft a short knowledge article with: a title in the words a user would search, the symptom, the cause (only if stated), the steps, how to check it worked, and who to ask if it did not. Mark any gap with [missing] and do not fill it.
List what you are unsure of.
```

**Tinjau artikel untuk pembaca di malam hari.**

```text
Here is a runbook: [paste].
List steps that are ambiguous, steps that assume knowledge not stated, and anything that could cause harm if followed literally. Do not rewrite the runbook.
List what you are unsure of.
```

**Temukan kesenjangan dari pencarian.**

```text
Here are search terms that returned no result or were followed by a ticket: [paste list]. Here are our article titles: [paste list].
Group the search terms into themes, and for each theme say whether an existing article title looks related or whether a new article is needed. Do not draft articles.
List what you are unsure of.
```

## Skill AI

- [runbook](../../../../skills/runbook/SKILL.md): gunakan untuk menulis dan menguji runbook.
- [decision-records](../../../../skills/decision-records/SKILL.md): gunakan untuk mencatat mengapa keputusan dibuat.
- [architecture-decision-record](../../../../skills/architecture-decision-record/SKILL.md): gunakan untuk keputusan desain yang perlu dipahami orang lain.
- [prompt-engineering](../../../../skills/prompt-engineering/SKILL.md): gunakan untuk merancang prompt yang membaca dari basis pengetahuan dan mengutip sumber.

## Sumber utama

- Consortium for Service Innovation, Knowledge-Centered Service (KCS): metode praktis utama untuk menangkap pengetahuan dalam pekerjaan dukungan.
- Ikujiro Nonaka dan Hirotaka Takeuchi, *The Knowledge-Creating Company* (1995): tentang pengetahuan tasit dan eksplisit.
- Wikipedia, "Knowledge management" dan "Tacit knowledge": ikhtisar netral.
- Wikipedia, "Runbook": latar belakang prosedur operasional.

## Referensi

1. Knowledge management — Wikipedia — https://en.wikipedia.org/wiki/Knowledge_management
2. Knowledge base — Wikipedia — https://en.wikipedia.org/wiki/Knowledge_base
3. Tacit knowledge — Wikipedia — https://en.wikipedia.org/wiki/Tacit_knowledge
4. Wiki — Wikipedia — https://en.wikipedia.org/wiki/Wiki
5. Runbook — Wikipedia — https://en.wikipedia.org/wiki/Runbook
6. Retrieval-augmented generation — Wikipedia — https://en.wikipedia.org/wiki/Retrieval-augmented_generation
7. Markdown — Wikipedia — https://en.wikipedia.org/wiki/Markdown
8. Bus factor — Wikipedia — https://en.wikipedia.org/wiki/Bus_factor
9. Knowledge transfer — Wikipedia — https://en.wikipedia.org/wiki/Knowledge_transfer
10. Consortium for Service Innovation — KCS library — https://library.serviceinnovation.org
