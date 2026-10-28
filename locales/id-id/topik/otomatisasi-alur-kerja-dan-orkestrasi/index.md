# Otomatisasi alur kerja dan orkestrasi

**Otomatisasi alur kerja memindahkan pekerjaan antara orang dan sistem menurut aturan; orkestrasi mengoordinasikan banyak langkah semacam itu lintas perangkat, dengan persetujuan, percobaan ulang, dan catatan keadaan; keduanya berhasil ketika alur kerja sederhana, idempoten, dapat diamati, dan dirancang untuk manusia yang harus turun tangan.**

## Mengapa ini penting

Sebagian besar pekerjaan layanan adalah estafet. Permintaan dimulai di portal, pergi ke manajer untuk persetujuan, membuat akun di satu sistem, kotak surat di sistem lain, lisensi di sistem ketiga, tiket untuk fasilitas, dan pesan kepada pemohon. Setiap serah tongkat adalah kesempatan untuk menunggu, kehilangan informasi, atau terlupakan. Ketika orang melakukan serah terima lewat email dan ingatan, keterlambatan dan kesalahan sudah terbangun di dalamnya.

Otomatisasi alur kerja menggantikan serah terima dengan alur yang terdefinisi. Sistem mengetahui langkah-langkahnya, siapa atau apa yang mengerjakan masing-masing, apa yang dilakukan ketika langkah gagal, dan apa yang sudah terjadi. Orkestrasi adalah gagasan yang sama pada skala lebih besar: koordinator yang memanggil banyak sistem dalam urutan yang tepat, menunggu hasil, dan menangani kasus yang canggung. Wikipedia menjelaskan workflow, workflow management system, dan orchestration dalam komputasi sebagai cara mendefinisikan dan menjalankan alur semacam itu.

Janjinya adalah pekerjaan yang lebih cepat dan konsisten dengan catatan yang terlihat. Risikonya akrab dari otomatisasi lain: proses yang cacat dikeraskan menjadi kode, kegagalan di tengah jalan meninggalkan hal-hal tidak konsisten, dan perubahan di satu sistem yang terhubung merusak alur secara diam-diam. Desain yang baik mengantisipasi hal-hal ini. Topik ini menjelaskan blok bangunan utama, pola yang menjaga alur kerja tetap andal, dan tempat manusia di dalamnya. Ia dibangun di atas Topik 6.1 — Strategi otomatisasi, berkaitan dengan permintaan layanan (Topik 3.6 — Manajemen Permintaan Layanan), dan mengarah ke swalayan (Topik 6.5 — Swalayan dan pemenuhan otomatis) dan pipeline (Topik 6.4 — Pipeline dan perubahan otomatis).

## Konsep inti

**Alur kerja (workflow).** Urutan langkah, dengan aturan tentang siapa atau apa yang mengerjakan masing-masing, dalam urutan apa, dan dalam kondisi apa. Wikipedia menjelaskan workflow sebagai pola aktivitas yang terorkestrasi dan dapat diulang. Alur kerja bisa sesederhana "ketika tiket ditandai selesai, beri tahu pemohon" atau sekompleks perjalanan karyawan baru dari ujung ke ujung.

**Mesin alur kerja (workflow engine).** Perangkat lunak yang menjalankan alur kerja: ia melacak keadaan setiap instans, mengeksekusi langkah, menunggu peristiwa, dan mencatat apa yang terjadi. Wikipedia menjelaskan workflow engine dan workflow management system. Banyak platform tiket memilikinya, dan platform mandiri ada untuk alur lintas sistem.

**Orkestrasi.** Mengoordinasikan beberapa tugas dan layanan otomatis menjadi satu proses, biasanya dari pengendali pusat yang memanggil masing-masing bergiliran. Wikipedia menjelaskan orchestration dalam komputasi. Ia berbeda dengan koreografi, di mana layanan bereaksi terhadap peristiwa tanpa pengendali pusat. Orkestrasi lebih mudah dilihat dan di-debug; koreografi bisa lebih tangguh dan terskala. Banyak organisasi memakai keduanya.

**Pemodelan.** Alur dapat digambar dengan notasi seperti Business Process Model and Notation (BPMN), yang dijelaskan di Wikipedia, lalu dieksekusi. Diagram membantu orang bisnis dan teknis menyepakati alur. Jaga agar terbaca, dan jaga model dan alur kerja yang berjalan tetap selaras.

**Keadaan (state).** Apa yang telah dikerjakan sejauh ini dalam satu instans alur kerja. Mengetahui keadaan memungkinkan sistem melanjutkan setelah kegagalan, menunjukkan kemajuan, dan melaporkan. Wikipedia menjelaskan finite-state machine, cara berguna untuk memikirkan permintaan yang "diajukan", "disetujui", "dipenuhi", dan "ditutup".

**Pemicu dan peristiwa.** Alur kerja dimulai dari pemicu: formulir, pesan, jadwal, perubahan dalam sistem. Pendekatan berbasis peristiwa, yang dijelaskan Wikipedia sebagai event-driven architecture, memungkinkan sistem mengumumkan apa yang terjadi agar yang lain dapat bereaksi. Webhook, juga dijelaskan di sana, adalah cara umum satu sistem memberi tahu yang lain.

**Integrasi.** Alur kerja memanggil sistem lain melalui application programming interface (API), konektor, atau platform integrasi. Wikipedia menjelaskan API dan enterprise application integration. Integrasi adalah tempat sebagian besar alur kerja rusak, karena sistem mengubah antarmuka, batas laju, dan kredensialnya.

**Idempotensi dan percobaan ulang.** Operasi bersifat idempoten jika melakukannya dua kali berefek sama dengan sekali. Wikipedia menjelaskan idempotence. Ketika langkah gagal atau kehabisan waktu, respons yang aman sering mencoba ulang, yang aman hanya jika langkah itu idempoten. Percobaan ulang harus menunggu lebih lama setiap kali, teknik yang dijelaskan Wikipedia sebagai exponential backoff, dan berhenti setelah batas.

**Penanganan kegagalan.** Apa yang terjadi ketika langkah keempat dari tujuh gagal? Opsinya mencakup mencoba ulang, melewati, mengompensasi langkah sebelumnya dengan membatalkannya, atau berhenti dan bertanya kepada seseorang. Alur kerja panjang yang melintasi sistem tidak dapat bersandar pada satu transaksi; Wikipedia menjelaskan pendekatan saga, di mana setiap langkah memiliki tindakan kompensasi. Kegagalan yang tidak dapat ditangani secara otomatis harus masuk ke antrean dengan pemilik yang jelas, bukan lenyap. Wikipedia menjelaskan dead letter queue untuk pesan yang tidak dapat diproses.

**Tugas manusia dan persetujuan.** Banyak alur kerja membutuhkan orang: untuk menyetujui, memutuskan, atau mengerjakan sesuatu yang tidak dapat diotomatiskan. Wikipedia menjelaskan sistem human-in-the-loop. Rancang tugas-tugas ini dengan hati-hati: siapa yang ditanya, bagaimana mereka diingatkan, apa yang terjadi jika mereka tidak merespons, dan informasi apa yang mereka lihat. Persetujuan yang menunggu tanpa batas menghentikan alur.

**Observabilitas dan audit.** Setiap instans harus dapat dilacak: apa yang memicunya, apa yang dilakukan setiap langkah, apa hasilnya, dan siapa yang menyetujui. Wikipedia menjelaskan audit trail. Ini mendukung pertanyaan dukungan ("di mana permintaan saya?"), pemecahan masalah, dan kepatuhan. Lihat Topik 7.4 — Observabilitas dan telemetri.

**Low-code dan robotic process automation.** Platform low-code dan robotic process automation (RPA) memungkinkan orang yang bukan pemrogram membangun alur kerja, atau mengotomatiskan tindakan di antarmuka pengguna. Wikipedia menjelaskan keduanya. Keduanya mempercepat kasus sederhana dan dapat menghasilkan otomatisasi rapuh tanpa pemilik pada skala besar. Terapkan kepemilikan, pengujian, dan tinjauan yang sama seperti untuk kode.

**Pemberian versi dan perubahan.** Definisi alur kerja berubah seiring waktu sementara instans masih berjalan. Putuskan cara menangani instans yang sedang berjalan ketika Anda mengubah definisi. Simpan definisi dalam kontrol versi, dan uji perubahan sebelum men-deploy. Lihat Topik 3.4 — Pemampuan Perubahan.

**Keamanan.** Alur kerja memegang kredensial dan memanggil sistem yang berkuasa. Beri masing-masing identitas sendiri dengan izin minimum, simpan rahasia dengan aman, dan tinjau siapa yang dapat mengubah alur kerja. Lihat Topik 3.13 — Manajemen Keamanan Informasi.

**Bagaimana lensa-lensa cocok.** Perangkat alur kerja adalah pipa dari lensa otomatisasi. Praktik agile menyarankan membangun alur kerja dalam langkah kecil bersama pengguna. AI dapat mengklasifikasikan permintaan, menyusun konten, dan membuat saran di dalam alur, dengan tinjauan manusia. Analitik memakai data keadaan dan waktu untuk menemukan keterlambatan.

## Praktik terbaik

1. **Petakan dan sederhanakan sebelum membangun.** Gambar proses sebagaimana adanya, buang langkah yang tidak menambah nilai, dan sepakati alur masa depan bersama orang yang terlibat. Lihat Topik 6.1 — Strategi otomatisasi.
2. **Jaga alur kerja kecil dan jelas.** Pilih beberapa alur kerja pendek dengan serah terima terdefinisi daripada satu yang raksasa. Beri nama langkah dalam bahasa sederhana agar staf dukungan dapat mengikutinya.
3. **Rancang setiap langkah agar aman diulang.** Buat langkah idempoten bila bisa, agar percobaan ulang tidak berbahaya. Di mana tidak bisa, tambahkan pemeriksaan yang mendeteksi bahwa langkah sudah terjadi.
4. **Rencanakan kegagalan.** Untuk setiap langkah, putuskan apa yang terjadi pada kegagalan: coba ulang dengan backoff dan batas, kompensasi, atau serahkan kepada orang. Kirim kegagalan yang belum terselesaikan ke antrean terlihat dengan pemilik.
5. **Perlakukan tugas manusia sebagai kelas satu.** Tentukan siapa, apa yang mereka lihat, berapa lama mereka punya waktu, pengingat, dan apa yang terjadi saat waktu habis atau ketidakhadiran. Sediakan pengganti.
6. **Tunjukkan status kepada pengguna.** Biarkan pemohon melihat di mana permintaan mereka berada dan apa yang diharapkan selanjutnya. Kirim notifikasi pada titik yang bermakna, bukan pada setiap langkah.
7. **Catat dan lacak setiap instans.** Catat pemicu, masukan, keluaran, keputusan, dan pemberi persetujuan. Permudah mencari satu instans menurut referensinya.
8. **Kendalikan perubahan pada alur kerja.** Simpan definisi dalam kontrol versi, tinjau perubahan, uji di lingkungan aman, dan putuskan cara memperlakukan instans yang sedang berjalan.
9. **Kelola sambungan.** Simpan register integrasi dengan pemilik, kredensial, dan titik kontak untuk setiap sistem. Pantau kegagalan dan awasi perubahan antarmuka yang diumumkan.
10. **Tinjau kinerja.** Lihat waktu per langkah, penantian, kegagalan, dan pengecualian. Pakai data untuk menghilangkan hambatan dan mempensiunkan alur kerja yang tidak dipakai siapa pun.

## Pertanyaan untuk dibahas bersama tim Anda

**Proses kita yang mana yang paling banyak memindahkan pekerjaan antara orang dan sistem, dan di mana pekerjaan hilang?**
Telusuri satu contoh nyata. Harapkan serah terima lewat email atau obrolan di suatu titik. Lanjutkan dengan memilih satu serah terima untuk diotomatiskan.

**Apa yang terjadi hari ini ketika langkah gagal di tengah proses, dan siapa yang tahu?**
Pikirkan pembuatan akun yang berhasil di satu sistem dan gagal di sistem lain. Harapkan ketidakkonsistenan. Lanjutkan dengan merancang rute kegagalan untuk satu alur kerja.

**Persetujuan kita yang mana yang macet, dan apa yang seharusnya terjadi jika pemberi persetujuan tidak merespons?**
Lihat butir yang menunggu paling lama. Harapkan keterlambatan panjang. Lanjutkan dengan menyepakati pengingat, pengganti, dan aturan batas waktu.

**Siapa yang memiliki setiap integrasi yang diandalkan alur kerja kita, dan bagaimana kita tahu jika rusak?**
Daftarkan integrasinya. Harapkan yatim. Lanjutkan dengan menunjuk pemilik dan menambahkan peringatan kegagalan.

**Alur kerja mana yang dibangun satu orang dengan perangkat low-code dan mungkin tidak dipahami siapa pun lainnya?**
Tanyakan berkeliling. Harapkan beberapa. Lanjutkan dengan mendokumentasikan tiga teratas dan menaruhnya dalam kontrol versi atau register bersama.

**Di mana AI dapat membantu di dalam alur kerja, dan di mana seseorang harus memutuskan?**
AI dapat mengklasifikasikan, menyusun, dan menyarankan. Seseorang harus memutuskan soal akses dan uang. Lanjutkan dengan memilih satu langkah untuk diuji coba dengan tinjauan, dan ukuran perutean yang benar.

## Dalam praktik: contoh manajemen layanan

Tim HR dan TI sebuah bank regional mengelola peristiwa "masuk, pindah, keluar" lewat email. Karyawan baru membutuhkan akun, laptop, akses gedung, catatan penggajian, dan pendaftaran pelatihan, yang ditangani lima tim. Setiap tim menerima email dari HR, mengerjakan bagiannya, dan kadang membalas. Sekitar satu dari lima karyawan baru kekurangan sesuatu pada hari pertama.

Manajer layanan mengusulkan satu alur kerja pada platform tiket bank, yang memiliki mesin alur kerja dan konektor. Ia memulai dengan memetakan proses bersama kelima tim dan mendapati bahwa tiga persetujuan tidak pernah ditolak. Desain baru membuang dua dan mempertahankan satu, dari manajer karyawan baru. Catatan HR tentang karyawan baru memicu alur kerja. Ia membuat satu kasus induk dengan lima tugas anak, masing-masing ditugaskan ke antrean tim yang tepat, berjalan paralel bila mungkin. Pembuatan akun diotomatiskan dengan konektor sistem identitas; tugas laptop pergi ke teknisi; akses gedung pergi ke fasilitas dengan tanggal mulai.

Tim merancang untuk kegagalan. Pembuatan akun idempoten: konektor memeriksa apakah akun sudah ada sebelum membuatnya. Jika konektor gagal dua kali dengan backoff, tugas pergi ke antrean teknisi dengan kesalahan terlampir, dan peringatan pergi ke pemilik alur kerja. Tugas manusia memiliki pengingat setelah satu hari dan dieskalasi ke ketua tim setelah tiga. Setiap kasus menunjukkan statusnya kepada HR dan manajer karyawan baru.

Setelah tiga bulan, persentase karyawan baru yang kekurangan sesuatu pada hari pertama turun menjadi sekitar 4 persen. Jejak audit memungkinkan service desk menjawab "di mana itu?" dalam semenit. Yang masih sulit: konektor penggajian bergantung pada antarmuka vendor yang berubah sekali tanpa pemberitahuan, menyebabkan putaran gagal yang tidak terlihat siapa pun selama dua hari sampai peringatan ditambahkan; tim fasilitas masih bekerja dari lembar kerja dan menyalin data kasus dengan tangan; dan peristiwa pindah dan keluar memiliki lebih banyak pengecualian dan belum disertakan. Manajer merencanakan peristiwa pindah berikutnya dan meminta vendor memberi pemberitahuan perubahan.

## Empat perspektif

### Tim produk dan pengiriman

Ekspos API dan peristiwa yang stabil dan terdokumentasi yang dapat dipakai alur kerja, dengan pesan kesalahan yang jelas. Beri tahu pemilik alur kerja tentang perubahan lebih awal. Pakai gagasan yang sama untuk alur kerja rilis Anda sendiri.

### Tim layanan dan operasi

Miliki alur kerja dan integrasi yang Anda jalankan: log, peringatan, antrean kegagalan, dan dokumentasi. Tangani pengecualian dengan segera, dan bawa pola kepada pemilik alur kerja.

### Kepemimpinan dan tata kelola

Minta pandangan perjalanan, dengan pemilik untuk setiap alur kerja lintas tim. Danai pemeliharaan integrasi. Cari bukti alur yang lebih cepat dan lebih andal, bukan jumlah alur kerja.

### Pelanggan dan pengguna

Anda seharusnya melihat status permintaan Anda dan mendapat apa yang Anda minta tanpa mengejar. Ketika langkah membutuhkan masukan Anda, harus jelas apa yang dibutuhkan dan kapan.

## Agile, AI, otomatisasi, dan analitik

### Agile

Bangun alur kerja satu perjalanan pada satu waktu bersama orang yang memakainya, rilis perbaikan kecil, dan tinjau hasilnya. Perhatian: peluncuran platform yang memigrasikan setiap proses sekaligus melipatgandakan risiko; mulailah dengan satu perjalanan.

### AI

AI dapat mengklasifikasikan permintaan masuk, mengekstrak rincian dari teks bebas, menyusun pesan, dan menyarankan perutean, dengan orang atau aturan memeriksa sebelum tindakan. Tunjuk pemilik dan lacak koreksi. Perhatian: langkah AI dalam alur kerja dapat mengirim pekerjaan ke tempat yang salah pada skala besar; ambil sampel hasil dan simpan antrean cadangan. Lihat Topik 5.1 — AI dalam manajemen layanan.

### Otomatisasi

Alur kerja adalah inti lensa ini. Bangun dengan langkah idempoten, batas, dan log, dan jaga setiap integrasi dimiliki dan dipantau. Perhatian: alur kerja yang menyentuh banyak sistem dapat menyebarkan kesalahan secara luas; tambahkan pembatas laju dan sakelar berhenti. Lihat Topik 6.1 — Strategi otomatisasi.

### Analitik

Pakai data alur kerja untuk waktu per langkah, penantian persetujuan, tingkat kegagalan, pengecualian, dan volume menurut jenis. Perhatian: data waktu mencerminkan cara langkah didefinisikan dan dapat dimanipulasi dengan memecah atau mengklasifikasi ulang tugas; periksa dengan kasus sampel. Lihat Topik 7.6 — Analitik proses dan aliran nilai dan buku *Service Management Metrics*.

## Mode kegagalan umum

- **Mengotomatiskan proses yang buruk.** Pemborosan terlestarikan. Sederhanakan dan sepakati alur lebih dulu.
- **Tidak ada desain kegagalan.** Langkah gagal dan instans macet. Definisikan percobaan ulang, kompensasi, dan antrean.
- **Percobaan ulang yang tidak idempoten.** Duplikat tercipta. Buat langkah aman diulang, atau periksa lebih dulu.
- **Persetujuan yang macet.** Pekerjaan menunggu orang yang tidak ada. Tambahkan pengingat, pengganti, dan batas waktu.
- **Kegagalan integrasi yang diam.** Konektor rusak dan tak seorang pun tahu. Pantau dan beri peringatan.
- **Alur low-code tanpa pemilik.** Tak seorang pun memahaminya. Daftarkan, dokumentasikan, dan tinjau.
- **Mengubah definisi dengan sembrono.** Instans yang berjalan rusak. Beri versi dan uji perubahan.

## Model kematangan

| Dimensi | Memulai | Mengembangkan | Menstandardisasi | Mengelola | Mengorkestrasi |
|---|---|---|---|---|---|
| Desain | Serah terima lewat email | Beberapa alur kerja sederhana | Perjalanan yang dipetakan dan disederhanakan dengan pemilik | Alur kerja diperbaiki dari data | Perjalanan diorkestrasi lintas sistem dan mitra |
| Keandalan | Rusak tanpa disadari | Peringatan dasar | Percobaan ulang, antrean kegagalan, dan langkah idempoten terdefinisi | Kegagalan diukur dan dikurangi | Alur yang memeriksa diri sendiri dengan eskalasi manusia |
| Tugas manusia | Ad hoc | Persetujuan lewat email | Tugas, pengingat, dan pengganti terdefinisi | Keterlambatan tugas diukur | Tugas manusia diseimbangkan dan diotomatiskan menurut risiko |
| Kontrol | Tidak ada catatan | Sebagian log | Kontrol versi, jejak audit, dan register | Perubahan ditinjau dan diaudit | Tata kelola terintegrasi dengan platform |

## Daftar periksa

- [ ] Kami memetakan dan menyederhanakan setiap proses sebelum mengotomatiskannya.
- [ ] Alur kerja kecil, bernama dalam bahasa sederhana, dan dimiliki.
- [ ] Langkah idempoten atau dilindungi dari duplikasi.
- [ ] Rute kegagalan dan antrean terdefinisi, dengan peringatan.
- [ ] Tugas manusia memiliki pengingat, pengganti, dan batas waktu.
- [ ] Setiap instans dicatat dan dapat dilacak.
- [ ] Definisi berada dalam kontrol versi dan perubahan diuji.
- [ ] Integrasi memiliki pemilik dan pemantauan.

## Prompt AI

**Ubah prosedur menjadi garis besar alur kerja.**

```text
Here is a description of how we handle [type of request] today: [paste steps and who does each].
Draft a workflow outline with: trigger, steps (marking each as automated, human, or approval), data passed between steps, and for each step what should happen on failure or no response. Mark every assumption. Do not invent systems or rules.
List what you are unsure of.
```

**Temukan titik kegagalan dalam sebuah alur.**

```text
Here is our workflow definition in plain text: [paste].
List each step that calls another system, what could go wrong, whether it appears to be safe to retry, and what information a support person would need to fix it. Do not rewrite the workflow.
List what you are unsure of.
```

**Analisis keterlambatan dari data alur kerja.**

```text
Here is an export of workflow instances with step names, start and end times, and outcome, with identifiers removed: [paste].
Compute median and 90th percentile time for each step, list the three longest waits, count failures by step, and list questions to investigate. Do not infer causes.
List what you are unsure of.
```

## Skill AI

- [workflow-analysis](../../../../skills/workflow-analysis/SKILL.md): gunakan untuk menganalisis langkah, penantian, dan serah terima.
- [value-stream-map](../../../../skills/value-stream-map/SKILL.md): gunakan untuk melihat seluruh perjalanan lintas tim.
- [mermaid-diagram](../../../../skills/mermaid-diagram/SKILL.md): gunakan untuk menggambar alur kerja dalam teks untuk ditinjau.
- [raci-matrix](../../../../skills/raci-matrix/SKILL.md): gunakan untuk menetapkan siapa yang mengerjakan dan siapa yang menyetujui setiap langkah.
- [change-request](../../../../skills/change-request/SKILL.md): gunakan untuk mendeskripsikan perubahan pada definisi alur kerja.

## Sumber utama

- OMG, spesifikasi Business Process Model and Notation (BPMN): notasi standar untuk diagram proses.
- Gregor Hohpe dan Bobby Woolf, *Enterprise Integration Patterns* (2003): katalog pola untuk menghubungkan sistem.
- Wikipedia, "Workflow" dan "Orchestration (computing)": ikhtisar gagasan ini.
- Wikipedia, "Idempotence": sifat yang membuat percobaan ulang aman.

## Referensi

1. Workflow — Wikipedia — https://en.wikipedia.org/wiki/Workflow
2. Workflow engine — Wikipedia — https://en.wikipedia.org/wiki/Workflow_engine
3. Workflow management system — Wikipedia — https://en.wikipedia.org/wiki/Workflow_management_system
4. Orchestration (computing) — Wikipedia — https://en.wikipedia.org/wiki/Orchestration_(computing)
5. Business Process Model and Notation — Wikipedia — https://en.wikipedia.org/wiki/Business_Process_Model_and_Notation
6. Finite-state machine — Wikipedia — https://en.wikipedia.org/wiki/Finite-state_machine
7. Event-driven architecture — Wikipedia — https://en.wikipedia.org/wiki/Event-driven_architecture
8. Idempotence — Wikipedia — https://en.wikipedia.org/wiki/Idempotence
9. Exponential backoff — Wikipedia — https://en.wikipedia.org/wiki/Exponential_backoff
10. Dead letter queue — Wikipedia — https://en.wikipedia.org/wiki/Dead_letter_queue
11. Human-in-the-loop — Wikipedia — https://en.wikipedia.org/wiki/Human-in-the-loop
12. Audit trail — Wikipedia — https://en.wikipedia.org/wiki/Audit_trail
