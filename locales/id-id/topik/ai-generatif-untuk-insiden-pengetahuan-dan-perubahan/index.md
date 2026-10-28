# AI generatif untuk insiden, pengetahuan, dan perubahan

**AI generatif dapat merangkum insiden, menyusun artikel pengetahuan dan postmortem, dan membantu menilai perubahan; ia paling banyak menghemat waktu pada draf pertama dan paling sedikit pada fakta, jadi pakai untuk menulis dan membaca, verifikasi setiap klaim terhadap catatan, dan jaga seseorang yang ditunjuk tetap bertanggung jawab atas apa yang dikirim atau disetujui.**

## Mengapa ini penting

Sebagian besar pekerjaan menjalankan layanan adalah menulis dan membaca. Selama insiden, seseorang menulis pembaruan status sementara yang lain membaca log obrolan. Sesudahnya, seseorang menulis linimasa dan tinjauan. Artikel pengetahuan bermula sebagai catatan penyelesaian tiket yang perlu diubah menjadi sesuatu yang terbaca. Permintaan perubahan membutuhkan deskripsi, penilaian risiko, dan rencana. Tugas-tugas ini memakan waktu, berulang, dan sering dikerjakan terlambat dan buruk karena semua orang sibuk.

AI generatif cocok untuk pekerjaan jenis ini. Model bahasa besar dapat membaca utas panjang dan menghasilkan ringkasan dalam hitungan detik. Mereka dapat mengubah catatan kasar menjadi draf yang rapi dan mengusulkan struktur untuk sebuah tinjauan. Bila dipakai dengan baik, mereka membebaskan orang terampil untuk penilaian dan percakapan. Bila dipakai dengan buruk, mereka menghasilkan teks yang meyakinkan dan lancar namun salah: linimasa dengan waktu karangan, akar masalah yang tidak ditemukan siapa pun, langkah runbook yang tidak ada.

Perbedaannya terletak pada cara pekerjaan diatur. Berikan model catatan yang sebenarnya, minta ia memakai hanya itu, buat ia menunjukkan sumbernya, dan minta seseorang memeriksa sebelum apa pun dibagikan. Topik ini memberi pola praktis untuk tiga area: insiden, pengetahuan, dan perubahan. Ia dibangun di atas gagasan umum dalam Topik 5.1 — AI dalam manajemen layanan dan berkaitan dengan manajemen insiden (Topik 3.2 — Manajemen Insiden), manajemen masalah (Topik 3.3 — Manajemen Masalah), manajemen pengetahuan (Topik 3.9 — Manajemen Pengetahuan), dan pemampuan perubahan (Topik 3.4 — Pemampuan Perubahan). Pertanyaan tata kelola ada di Topik 5.6 — Tata kelola, risiko, dan kepatuhan AI.

## Konsep inti

**AI generatif.** Sistem yang menghasilkan konten baru, seperti teks dan kode, dari prompt. Wikipedia menjelaskan generative AI dan large language model. Untuk pekerjaan layanan, teks adalah keluaran utama: ringkasan, draf, penjelasan, dan catatan terstruktur.

**Halusinasi.** Keluaran yang lancar namun tidak berdasar atau salah. Wikipedia menjelaskan hallucination dalam AI. Ia adalah sifat cara kerja model ini, bukan bug yang jarang. Risiko tertinggi ketika model diminta fakta yang tidak diberikan kepadanya: waktu persis, penyebab, nomor kebijakan, opsi API.

**Landasan (grounding).** Memberi model bahan sumber dan memintanya menjawab hanya dari itu. Retrieval-augmented generation, yang dijelaskan di Wikipedia, menemukan dokumen yang relevan dan menyediakannya. Untuk insiden, sumbernya adalah linimasa, obrolan, dan data pemantauan; untuk pengetahuan, tiket dan artikel yang ada; untuk perubahan, catatan perubahan dan perubahan serupa di masa lalu. Grounding mengurangi kesalahan tetapi tidak menghilangkannya.

**Jendela konteks (context window).** Jumlah teks yang dapat dipertimbangkan model sekaligus. Wikipedia menjelaskan context window. Obrolan insiden yang panjang mungkin melebihinya, jadi masukan panjang dirangkum per bagian. Periksa apakah bahan penting terbuang.

**Perangkuman.** Mengurangi teks panjang menjadi butir utamanya. Wikipedia menjelaskan automatic summarization. Ringkasan kehilangan rincian secara desain, dan dapat memutarbalikkannya. Paling baik dipakai sebagai penuntun menuju aslinya, dengan sarana untuk memeriksanya.

**Draf, bukan keputusan.** Pemakaian paling aman adalah menghasilkan draf pertama untuk disunting dan dimiliki seseorang. Nama orang itu tercantum pada hasilnya, dan ia bertanggung jawab. Ini menjaga penilaian pada manusia dan memakai model untuk bagian mekanis.

**Prompt dan instruksi.** Teks yang diberikan kepada model. Instruksi yang jelas, dengan peran, tugas, sumber, format, dan apa yang dilakukan ketika informasi hilang, memperbaiki hasil. Lihat Topik 5.7 — Keterampilan dan Prompt AI.

**Kerahasiaan.** Obrolan insiden dan tiket sering memuat rahasia, data pribadi, dan rincian keamanan. Ke mana teks pergi itu penting: model yang dihosting organisasi Anda, layanan vendor di bawah kontrak, atau perangkat publik dengan ketentuan yang tidak diketahui. Putuskan apa yang boleh ke mana. Lihat Topik 5.6 — Tata kelola, risiko, dan kepatuhan AI.

**Prompt injection.** Teks dalam bahan yang Anda berikan kepada model, seperti isi tiket atau baris log, dapat memuat instruksi yang mencoba mengubah perilakunya. Wikipedia menjelaskan prompt injection. Perlakukan semua masukan sebagai tidak tepercaya, dan jangan biarkan model yang punya kuasa bertindak membaca konten dari sumber yang tidak dikenal.

**Bias otomatisasi (automation bias).** Kecenderungan memercayai saran otomatis, terutama ketika lelah atau sibuk. Wikipedia menjelaskan automation bias. Selama insiden, saran yang lancar dapat mengirim penanggap ke jalan yang salah. Perlakukan keluaran AI sebagai hipotesis.

**Insiden.** Tugas yang berguna mencakup merangkum utas untuk penanggap baru, menyusun pembaruan status untuk ditinjau, mengekstrak linimasa peristiwa dengan stempel waktu dari catatan, menemukan insiden lampau yang serupa, dan mengusulkan pertanyaan untuk tinjauan. Tugas berisiko mencakup menyatakan akar masalah sebagai fakta dan mengirim pembaruan kepada pelanggan tanpa tinjauan.

**Pengetahuan.** Tugas yang berguna mencakup mengubah tiket yang terselesaikan menjadi draf artikel, menulis ulang artikel dalam bahasa sederhana, menyarankan judul dan tag, dan menemukan duplikat. Tugas berisiko mencakup menerbitkan draf tanpa pemeriksaan teknis, dan mengandalkan model untuk mengetahui perbaikan yang benar.

**Perubahan.** Tugas yang berguna mencakup memeriksa deskripsi perubahan untuk informasi yang hilang, merangkum pull request yang besar, menyarankan kasus uji, dan mendaftar faktor risiko dari perubahan serupa di masa lalu. Tugas berisiko mencakup menyetujui perubahan atau menilai risikonya "rendah" hanya atas perkataan model.

**Kode dan skrip.** Model dapat menyusun skrip, kueri, dan konfigurasi. Wikipedia menjelaskan code generation dalam pengertian yang lebih luas. Kode hasil buatan dapat memuat kesalahan, cacat keamanan, atau pertanyaan lisensi. Perlakukan sebagai kode tidak tepercaya: tinjau, uji, dan jalankan melalui pipeline. Lihat Topik 3.4 — Pemampuan Perubahan dan Topik 4.2 — Manajemen Aset Perangkat Lunak.

**Catatan dan audit.** Simpan catatan tentang bagaimana AI dipakai: prompt, sumber yang diberikan, keluaran, siapa yang meninjau, dan apa yang berubah. Wikipedia menjelaskan audit trail. Ini mendukung pembelajaran dan akuntabilitas.

**Bagaimana lensa-lensa cocok.** AI generatif adalah salah satu bentuk lensa AI yang paling terlihat. Praktik agile menyarankan uji coba singkat dengan umpan balik dari orang yang mengerjakan. Otomatisasi dapat menjalankan draf ke dalam perangkat, dengan gerbang tinjauan. Analitik menunjukkan pemakaian mana yang menghemat waktu dan mana yang menyebabkan pengerjaan ulang.

## Praktik terbaik

1. **Berikan catatan dan katakan untuk memakai hanya itu.** Tempel atau ambil linimasa, tiket, atau perubahan yang sebenarnya, dan instruksikan model memakai hanya teks yang diberikan. Suruh ia menulis "tidak dinyatakan" ketika informasi hilang.
2. **Minta kutipan dan rujukan.** Suruh model mengutip baris atau artikel yang dipakainya, agar seseorang dapat memeriksa setiap klaim dengan cepat.
3. **Pisahkan fakta dari inferensi.** Minta fakta yang diambil dari catatan lebih dulu, dan hipotesis yang diberi label jelas kemudian. Jangan biarkan hipotesis tampil sebagai temuan.
4. **Pertahankan pemilik manusia.** Orang yang mengirim pembaruan, menerbitkan artikel, atau menyetujui perubahan memiliki isinya, apa pun yang disusun model. Buat itu eksplisit dalam proses.
5. **Jangan kirim keluaran yang belum ditinjau ke luar.** Pembaruan status kepada pelanggan, regulator, atau publik memerlukan tinjauan dan persetujuan manusia. Draf internal berisiko lebih rendah namun tetap perlu diperiksa.
6. **Lindungi data.** Pakai perangkat yang disetujui untuk sensitivitas konten. Hapus rahasia dan data pribadi bila bisa, dan jangan pernah menempelkan kredensial.
7. **Periksa angka, nama, dan waktu.** Di sinilah pemalsuan paling sering muncul. Bandingkan setiap angka dalam draf dengan sumber.
8. **Uji dengan kasus nyata.** Jalankan pendekatan pada insiden dan tiket lampau di mana Anda tahu kebenarannya, dan catat di mana ia gagal. Bagikan temuan dan perbarui instruksi Anda.
9. **Catat pemakaian.** Catat bahwa AI membantu, dengan sumber dan peninjau. Lacak koreksi untuk mempelajari tugas mana yang cocok.
10. **Tinjau dan pensiunkan.** Tinjau pemakaian mana yang menghemat waktu dan mana yang menyebabkan pengerjaan ulang. Hentikan yang tidak membantu.

## Pertanyaan untuk dibahas bersama tim Anda

**Tugas menulis dan membaca mana dalam pekerjaan insiden dan perubahan kita yang paling memakan waktu, dan mana yang berisiko rendah?**
Buat daftar. Harapkan linimasa, pembaruan status, draf tinjauan, dan deskripsi perubahan. Pilah menurut risiko. Lanjutkan dengan memilih satu tugas berisiko rendah untuk dicoba dengan AI.

**Apa yang perlu kita periksa dalam ringkasan insiden yang ditulis AI sebelum kita memercayainya?**
Pikirkan waktu, penyebab, dan dampak. Harapkan kesepakatan bahwa waktu dan penyebab perlu diperiksa. Lanjutkan dengan menulis daftar periksa singkat.

**Informasi apa yang tidak boleh masuk ke perangkat AI, dan bagaimana kita membuatnya mudah diikuti?**
Daftarkan rahasia, data pribadi, dan rincian keamanan. Harapkan kebingungan tentang apa yang dihitung. Lanjutkan dengan menyepakati aturan sederhana dan perangkat aman untuk sisanya.

**Bagaimana kita tahu jika ringkasan atau draf AI membuat basis pengetahuan kita lebih buruk?**
Pikirkan langkah yang salah dan kesalahan berulang. Harapkan "kita tidak akan tahu". Lanjutkan dengan mengambil sampel artikel berbantuan AI untuk akurasi setiap bulan.

**Kapan kita akan membiarkan AI menyarankan risiko suatu perubahan, dan siapa yang memutuskan?**
Diskusikan. Harapkan kehati-hatian soal persetujuan dan kenyamanan dengan prompt untuk informasi yang hilang. Lanjutkan dengan menyepakati bahwa AI boleh menyarankan pertanyaan dan perubahan serupa di masa lalu, dan bahwa seseorang menilai risikonya.

**Siapa di tim kita yang pandai memeriksa keluaran AI, dan bagaimana kita menyebarkan keterampilan itu?**
Memeriksa adalah keterampilan. Harapkan beberapa orang yang percaya diri. Lanjutkan dengan menjalankan latihan singkat di mana tim memeriksa draf yang cacat bersama-sama.

## Dalam praktik: contoh manajemen layanan

Tim teknologi operasi sebuah perusahaan kereta api nasional menjalankan sistem dukungan persinyalan. Setelah setiap insiden besar, seorang insinyur menghabiskan setengah hari menulis tinjauan dari log obrolan, grafik pemantauan, dan catatan tiket. Tinjauan terlambat, dan yang terbaru tipis.

Ketua tim menguji coba asisten AI generatif, dihosting di bawah kontrak perusahaan kereta api dengan vendor yang tidak menyimpan atau melatih dengan masukan, untuk draf pertama tinjauan. Untuk setiap insiden, insinyur mengekspor log obrolan dan riwayat tiket, menghapus nama staf, dan memberi asisten instruksi ini: pakai hanya teks yang diberikan; buat linimasa dengan setiap entri mengutip baris sumber; daftarkan dampak, sebagaimana dinyatakan; daftarkan apa yang membantu dan apa yang memperlambat respons; tandai apa pun yang tidak ada dalam teks sebagai "tidak dinyatakan"; dan taruh hipotesis di bagian terpisah yang diberi label demikian.

Pada pengujian pertama, pada insiden lampau, linimasa draf akurat kecuali memberi waktu restart 02:15, padahal obrolan berkata "sekitar seperempat lewat, kurasa" dan tiket berkata 02:22; insinyur mengoreksinya. Draf juga mencantumkan sebagai penyebab "sakelar jaringan yang rusak", yang muncul dalam obrolan sebagai dugaan yang kemudian terbantahkan; tinjauan memindahkannya ke hipotesis, sesuai instruksi, tetapi tidak mencatat bantahannya. Insinyur memperbaiki keduanya dan mengirim draf ke tim dalam dua jam alih-alih empat.

Setelah sepuluh insiden, tim memperkirakan draf pertama memakan waktu sekitar sepertiga. Mereka menambahkan aturan bahwa insinyur memeriksa setiap waktu dan penyebab terhadap sumber, dan bahwa tinjauan mencatat bahwa AI menyusun versi pertama. Mereka juga memutuskan belum memakai AI untuk menilai risiko dalam catatan perubahan.

Yang berubah: tinjauan tiba dalam sehari dan memiliki lebih banyak rincian tentang apa yang membantu. Yang masih sulit: insinyur kadang menerima rumusan model tentang penyebab yang hanya didukung bukti secara lemah; rincian rahasia sesekali tertinggal dalam obrolan yang diekspor; dan seorang insinyur khawatir keterampilan menyusun akan memudar. Ketua menjadwalkan sesi triwulanan di mana insinyur menulis satu tinjauan tanpa AI, dan membandingkan.

## Empat perspektif

### Tim produk dan pengiriman

Pakai AI untuk menyusun deskripsi perubahan, gagasan pengujian, dan catatan rilis dari catatan Anda sendiri, dan tinjau. Perlakukan kode hasil buatan sebagai tidak tepercaya: uji dan pindai seperti perubahan lainnya.

### Tim layanan dan operasi

Pakai AI untuk merangkum utas dan menyusun pembaruan, tinjauan, dan artikel, dengan sumber terlampir. Periksa setiap waktu, nama, dan penyebab, dan miliki apa yang Anda terbitkan.

### Kepemimpinan dan tata kelola

Tetapkan aturan tentang data dan persetujuan, dan danai perangkat yang memenuhinya. Minta bukti waktu yang dihemat dan kesalahan yang tertangkap. Jangan menerima keluaran AI sebagai catatan fakta.

### Pelanggan dan pengguna

Anda seharusnya menerima pembaruan yang telah diperiksa seseorang. Jika Anda melihat kesalahan dalam apa yang Anda terima, beri tahu penyedia. Tanyakan bagaimana AI dipakai dalam apa yang disampaikan kepada Anda.

## Agile, AI, otomatisasi, dan analitik

### Agile

Uji coba satu tugas menulis pada satu waktu bersama orang yang mengerjakannya, kumpulkan umpan balik, dan perbaiki instruksi. Jaga tinjauan singkat dan sering. Perhatian: jangan biarkan draf yang lebih cepat memperpendek refleksi; nilai tinjauan terletak pada pembelajaran.

### AI

Dasarkan setiap pemakaian pada catatan, tampilkan sumber, dan jaga seseorang tetap bertanggung jawab. Uji pada kasus lampau dan catat pemakaian AI. Perhatian: teks yang lancar menyembunyikan bukti yang lemah; minta model melabeli keyakinan dan sumber, dan periksa. Lihat Topik 5.7 — Keterampilan dan Prompt AI.

### Otomatisasi

Otomatiskan salurannya: ekspor catatan, hapus rahasia, panggil model, lampirkan draf ke tiket, dan beri tahu peninjau. Pertahankan gerbang tinjauan sebelum menerbitkan. Perhatian: pipeline yang menerbitkan draf secara otomatis menyebarkan kesalahan; wajibkan persetujuan. Lihat Topik 6.2 — Otomatisasi alur kerja dan orkestrasi.

### Analitik

Lacak waktu untuk menghasilkan tinjauan, suntingan yang dibuat pada draf, kesalahan yang ditemukan, dan pemakaian menurut jenis tugas. Perhatian: menghitung draf yang dihasilkan menghargai volume, dan waktu yang dihemat sering hanya perkiraan; ambil sampel mutu dokumen akhir. Lihat buku *Service Management Metrics* dan Topik 7.3 — Pengukuran dan pelaporan.

## Mode kegagalan umum

- **Fakta dari ingatan.** Model mengarang waktu dan penyebab. Sediakan catatan dan wajibkan kutipan.
- **Pembaruan eksternal yang belum ditinjau.** Informasi salah sampai ke pelanggan. Wajibkan persetujuan manusia.
- **Rahasia dalam prompt.** Data sensitif bocor. Pakai perangkat yang disetujui dan hapus rahasia.
- **Stempel karet.** Peninjau menerima draf tanpa memeriksa. Sediakan daftar periksa dan ambil sampel tinjauan.
- **Masukan yang memanipulasi model.** Teks yang bermusuhan mengubah perilaku. Perlakukan masukan sebagai tidak tepercaya.
- **Memakai AI untuk menilai risiko.** "Rendah" yang lancar dipercaya. Pakai AI untuk mengajukan pertanyaan, dan biarkan orang menilai risiko.
- **Erosi keterampilan.** Orang berhenti menulis dan memeriksa. Pertahankan latihan dan mutu tinjauan.

## Model kematangan

| Dimensi | Memulai | Mengembangkan | Menstandardisasi | Mengelola | Mengorkestrasi |
|---|---|---|---|---|---|
| Pemakaian | Eksperimen individu | Tips bersama | Pola yang disetujui untuk insiden, pengetahuan, dan perubahan | Pola ditinjau menurut hasil | Pola terintegrasi ke dalam perangkat dengan tata kelola |
| Landasan dan pemeriksaan | Ingatan model | Sebagian sumber ditampilkan | Sumber dikutip dan fakta diperiksa terhadap catatan | Kesalahan dilacak dan diumpankan kembali | Verifikasi sebagian diotomatiskan, dengan persetujuan manusia |
| Perlindungan data | Tidak jelas | Kesadaran | Perangkat dan aturan yang disetujui | Kepatuhan dipantau | Kontrol terbangun dalam perangkat dan pipeline |
| Akuntabilitas | Tidak jelas | Informal | Pemilik yang ditunjuk untuk setiap keluaran | Pemilik dan tinjauan diaudit | Akuntabilitas terintegrasi lintas layanan |

## Daftar periksa

- [ ] Kami memilih beberapa tugas menulis berisiko rendah untuk AI generatif.
- [ ] Kami memberi model catatan dan memintanya memakai hanya itu.
- [ ] Keluaran mengutip sumbernya dan memisahkan fakta dari hipotesis.
- [ ] Orang yang ditunjuk memiliki dan meninjau setiap keluaran sebelum dibagikan.
- [ ] Kami memakai perangkat yang disetujui untuk konten sensitif dan menghapus rahasia.
- [ ] Kami memeriksa waktu, nama, angka, dan penyebab terhadap sumber.
- [ ] Kami mencatat ketika AI membantu dan siapa yang meninjau.
- [ ] Kami tidak membiarkan AI menyetujui perubahan atau menyatakan akar masalah sendirian.

## Prompt AI

**Susun linimasa insiden yang bersumber.**

```text
Below is the chat log and ticket history of an incident, with names removed: [paste].
Produce a timeline table with columns: time (exactly as written; write "not stated" if no time), event, and the quoted source line. Then list impact as stated in the text, and a separate section "Hypotheses mentioned" with who raised each and whether the text shows it was confirmed or ruled out. Do not add anything not in the text.
List what you are unsure of.
```

**Susun draf artikel pengetahuan dari tiket yang terselesaikan.**

```text
Here is a resolved ticket with notes, personal data removed: [paste]. Here are existing articles on related topics: [paste titles and summaries].
Draft a new article with a title in plain words, symptom, steps, and how to check it worked. Use only the ticket. Mark missing information with [missing], and list existing articles that might duplicate this one.
List what you are unsure of.
```

**Periksa deskripsi perubahan.**

```text
Here is a change description: [paste]. Our required items: [list].
List which required items are missing or unclear, list questions a reviewer should ask, and list any statements in the description that look inconsistent with each other. Do not rate the risk or recommend approval.
List what you are unsure of.
```

## Skill AI

- [postmortem](../../../../skills/postmortem/SKILL.md): gunakan untuk menyusun tinjauan insiden yang didrafkan AI dan dimiliki manusia.
- [prompt-engineering](../../../../skills/prompt-engineering/SKILL.md): gunakan untuk menulis instruksi yang jelas dan berdasar.
- [runbook](../../../../skills/runbook/SKILL.md): gunakan untuk mengubah prosedur menjadi runbook yang diperiksa dan diuji.
- [release-notes](../../../../skills/release-notes/SKILL.md): gunakan untuk menyusun catatan rilis untuk ditinjau.
- [change-request](../../../../skills/change-request/SKILL.md): gunakan untuk mendefinisikan apa yang dimuat deskripsi perubahan yang baik.

## Sumber utama

- NIST, AI Risk Management Framework: struktur untuk mengidentifikasi dan mengelola risiko pemakaian AI.
- OWASP, panduan tentang risiko untuk aplikasi yang dibangun di atas model bahasa besar (owasp.org): saran komunitas tentang prompt injection dan risiko terkait.
- Wikipedia, "Generative AI" dan "Hallucination (artificial intelligence)": ikhtisar teknologi dan mode kegagalan utamanya.
- Wikipedia, "Automation bias": mengapa orang terlalu memercayai saran otomatis.

## Referensi

1. Generative AI — Wikipedia — https://en.wikipedia.org/wiki/Generative_AI
2. Large language model — Wikipedia — https://en.wikipedia.org/wiki/Large_language_model
3. Hallucination (artificial intelligence) — Wikipedia — https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence)
4. Retrieval-augmented generation — Wikipedia — https://en.wikipedia.org/wiki/Retrieval-augmented_generation
5. Automatic summarization — Wikipedia — https://en.wikipedia.org/wiki/Automatic_summarization
6. Prompt injection — Wikipedia — https://en.wikipedia.org/wiki/Prompt_injection
7. Automation bias — Wikipedia — https://en.wikipedia.org/wiki/Automation_bias
8. Context window — Wikipedia — https://en.wikipedia.org/wiki/Context_window
9. Postmortem documentation — Wikipedia — https://en.wikipedia.org/wiki/Postmortem_documentation
10. Audit trail — Wikipedia — https://en.wikipedia.org/wiki/Audit_trail
11. AI Risk Management Framework — NIST — https://www.nist.gov/itl/ai-risk-management-framework
12. OWASP — OWASP Foundation — https://owasp.org
