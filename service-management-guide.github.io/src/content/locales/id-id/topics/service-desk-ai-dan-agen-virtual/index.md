# Service desk AI dan agen virtual

**Agen virtual dan triase AI dapat menjawab pertanyaan rutin, merutekan dan menyiapkan tiket, dan menyusun balasan; mereka membantu ketika didasarkan pada pengetahuan yang telah ditinjau, jujur tentang apa yang tidak mereka ketahui, mudah ditinggalkan untuk beralih ke manusia, dan diukur dari apakah pengguna mendapat apa yang mereka butuhkan.**

## Mengapa ini penting

Service desk sudah lama ingin menjawab pertanyaan sederhana lebih cepat dan lebih murah. Chatbot adalah upaya pertama: menu berskrip yang membuat pengguna frustrasi. Asisten yang lebih baru, yang dibangun di atas model bahasa besar, jauh lebih lancar, dan dapat menangani pertanyaan terbuka dalam bahasa sederhana. Itu membuatnya jauh lebih berguna, dan juga jauh lebih mampu merugikan ketika salah, karena jawaban salahnya terdengar benar.

Bagi pengguna, agen virtual dapat menjadi jalan cepat menuju jawaban pada jam berapa pun. Bagi staf desk, triase dan penyusunan oleh AI dapat mengambil alih pemilahan dan penulisan agar mereka menghabiskan waktu pada kasus yang lebih sulit. Bagi organisasi, keduanya dapat memangkas biaya per kontak. Manfaat ini nyata, dan bergantung pada asisten dipakai untuk pertanyaan yang tepat, dijaga akurat, dan tidak menjebak orang yang membutuhkan manusia.

Risikonya memiliki wajah manusia. Pengguna yang terkunci dari sistem sebelum tenggat, perawat yang menghadapi pasien dan butuh perbaikan cepat, atau orang yang tertekan dan mendapat skrip yang ceria: masing-masing dilayani dengan buruk oleh asisten yang tidak dapat mengenali kapan harus menyerahkan. Topik ini menjelaskan di mana agen virtual dan triase AI cocok, bagaimana merancang dan mengujinya, dan bagaimana mengukurnya dengan jujur. Ia dibangun di atas service desk (Topik 3.1 — Service Desk), permintaan layanan (Topik 3.6 — Manajemen Permintaan Layanan), dan pengetahuan (Topik 3.9 — Manajemen Pengetahuan), dan bersandar pada gagasan dalam Topik 5.1 — AI dalam manajemen layanan dan Topik 5.6 — Tata kelola, risiko, dan kepatuhan AI.

## Konsep inti

**Agen virtual.** Perangkat lunak yang bercakap-cakap dengan pengguna lewat teks atau suara untuk menjawab pertanyaan atau menjalankan tugas. Artikel Wikipedia tentang chatbot dan virtual assistant menjelaskannya. Di service desk, agen virtual sering menjadi titik kontak pertama, dengan jalur ke manusia.

**Berbasis aturan versus berbasis AI.** Chatbot awal mengikuti skrip atau mencocokkan kata kunci. Asisten berbasis AI menafsirkan bahasa alami dan dapat menyusun jawaban. Wikipedia menjelaskan conversational user interface dan natural language understanding. Skrip dapat diprediksi dan terbatas; model bahasa fleksibel dan kurang dapat diprediksi. Banyak sistem produksi menggabungkannya: alur berskrip untuk tugas sensitif, model bahasa untuk pertanyaan terbuka.

**Maksud (intent) dan alur.** Intent adalah apa yang ingin dilakukan pengguna, seperti "atur ulang kata sandi saya" atau "pesan laptop". Banyak asisten mengidentifikasi intent lalu menjalankan alur yang terdefinisi dengan pemeriksaan, yang lebih aman untuk tindakan. Untuk pertanyaan terbuka, asisten mengambil artikel yang relevan dan menjawab dari artikel itu.

**Landasan (grounding).** Menjawab dari sumber yang ditentukan dan telah ditinjau, biasanya artikel pengetahuan, dan menampilkannya, alih-alih dari ingatan umum model. Wikipedia menjelaskan retrieval-augmented generation. Grounding mengurangi jawaban karangan tetapi tidak menghilangkannya, dan membuat mutu basis pengetahuan Anda menjadi batas mutu asisten. Lihat Topik 3.9 — Manajemen Pengetahuan.

**Pengalihan dan penyelesaian.** Pengalihan (deflection) berarti pengguna mendapat jawaban dari asisten dan tidak menghubungi manusia. Penyelesaian (resolution) berarti masalah pengguna benar-benar terselesaikan. Keduanya berbeda: pengguna yang menyerah dan pergi ke tempat lain dialihkan, bukan diselesaikan. Ukur penyelesaian melalui tindak lanjut, kontak berulang, dan umpan balik.

**Serah terima (handover).** Menyerahkan percakapan kepada manusia, dengan konteks, ketika asisten tidak dapat membantu atau pengguna meminta. Wikipedia menjelaskan handover secara umum. Serah terima yang baik membawa riwayat, agar pengguna tidak mengulang diri. Yang buruk menjatuhkan mereka ke antrean. Buat "bicara dengan manusia" selalu terlihat.

**Triase dan perutean.** AI mengklasifikasikan tiket masuk menurut jenis, urgensi, dan tim, dan merutekannya. Wikipedia menjelaskan triage. Ia juga dapat mendeteksi kemungkinan insiden besar dari ledakan kontak serupa. Kesalahan mengirim pekerjaan ke antrean yang salah; tingkat perutean ulang adalah ukuran yang baik.

**Menyusun dan merangkum untuk agen.** AI dapat merangkum utas tiket yang panjang, menyarankan artikel, dan menyusun balasan untuk disunting agen. Ini menjaga manusia tetap mengendalikan sambil menghemat waktu. Lihat Topik 5.4 — AI generatif untuk insiden, pengetahuan, dan perubahan.

**Deteksi sentimen dan urgensi.** Teknik yang menyimpulkan suasana hati atau urgensi pengguna dari teks. Wikipedia menjelaskan sentiment analysis. Ia dapat memprioritaskan pengguna yang kesal atau pesan yang menyebut tenggat. Ia tidak sempurna, terutama lintas bahasa dan budaya, jadi pakai sebagai petunjuk.

**Dukungan suara dan multibahasa.** Pengenalan ucapan dan sintesis ucapan memungkinkan interaksi suara; terjemahan mesin memungkinkan dukungan dalam lebih banyak bahasa. Wikipedia menjelaskan teknologi ini. Mutu bervariasi menurut bahasa dan aksen, dan pengguna bahasa yang kurang umum mungkin dilayani lebih buruk. Uji dengan penutur nyata.

**Aksesibilitas dan inklusi.** Asisten harus berfungsi bagi penyandang disabilitas dan bagi mereka yang tidak percaya diri dengan teknologi. Wikipedia menjelaskan accessibility dan Web Content Accessibility Guidelines (WCAG). Jendela obrolan yang tidak dapat dipakai pembaca layar mengecualikan pengguna. Kesenjangan digital (digital divide), juga dijelaskan di Wikipedia, mengingatkan kita bahwa tidak semua orang lebih suka atau dapat memakai obrolan.

**Identitas dan wewenang.** Asisten yang dapat melakukan tindakan, seperti mengatur ulang kata sandi, harus memverifikasi siapa yang meminta. Jangan pernah biarkan asisten memberi akses hanya berdasarkan klaim. Lihat Topik 3.6 — Manajemen Permintaan Layanan dan Topik 3.13 — Manajemen Keamanan Informasi.

**Jujur tentang menjadi mesin.** Pengguna harus tahu bahwa mereka berbicara dengan AI, dan asisten tidak boleh berpura-pura menjadi manusia atau memiliki perasaan yang tidak dimilikinya. Beberapa hukum mewajibkan pengungkapan; periksa aturan yang berlaku bagi Anda. Artikel Wikipedia tentang dark pattern menjelaskan praktik desain yang menipu pengguna, seperti menyembunyikan jalur ke manusia; hindari.

**Keamanan asisten.** Asisten menghadapi serangan seperti prompt injection, di mana teks dalam pesan atau dokumen mencoba menimpa instruksi asisten. Wikipedia menjelaskan prompt injection. Jangan beri asisten kuasa yang dapat disalahgunakan pesan yang bermusuhan, dan perlakukan masukan pengguna dan dokumen yang diambil sebagai tidak tepercaya.

**Privasi.** Percakapan mungkin memuat data pribadi. Putuskan apa yang disimpan, berapa lama, siapa yang dapat membacanya, dan apakah ia melatih model mana pun. Wikipedia menjelaskan personal data dan General Data Protection Regulation sebagai satu kerangka hukum. Ambil nasihat hukum.

**Bagaimana lensa-lensa cocok.** Agen virtual adalah wajah AI, otomatisasi, dan analitik yang terlihat di desk. Praktik agile menyarankan memulai dengan beberapa topik dan memperluas. Otomatisasi menyelesaikan tugas di balik percakapan. Analitik memberi tahu Anda apa yang ditanyakan pengguna dan di mana asisten gagal.

## Praktik terbaik

1. **Pilih topik di mana asisten dapat berhasil.** Mulailah dengan pertanyaan yang sering, sederhana, dan berisiko rendah yang memiliki jawaban jelas, seperti cara menyambung ke jaringan nirkabel. Hindari topik sensitif atau berisiko tinggi pada awalnya.
2. **Dasarkan jawaban pada artikel yang telah ditinjau.** Pakai pengambilan dari basis pengetahuan dan tampilkan sumbernya. Jika tidak ada sumber yang mendukung jawaban, asisten harus mengatakannya dan menawarkan manusia.
3. **Buat jalur ke manusia terlihat jelas.** Tampilkan opsi "bicara dengan manusia" yang jelas setiap saat, dan serahkan dengan percakapan terlampir. Jangan pernah memblokirnya.
4. **Verifikasi identitas untuk tindakan.** Untuk apa pun yang mengubah akses atau data, pakai pemeriksaan kuat di luar obrolan, dan batasi apa yang dapat dilakukan asisten. Catat setiap tindakan.
5. **Beri tahu pengguna bahwa ia AI.** Nyatakan di awal, katakan apa yang dapat dan tidak dapat dibantunya, dan hindari berpura-pura menjadi manusia.
6. **Susun kumpulan uji dan jalankan.** Buat pertanyaan realistis dari tiket nyata, termasuk yang harus ditolak asisten dan yang mencoba memanipulasinya. Jalankan kumpulan itu sebelum peluncuran dan setelah setiap perubahan.
7. **Baca percakapan nyata.** Tinjau sampel percakapan setiap minggu, terutama yang pengguna pergi atau meminta manusia. Pakai untuk memperbaiki artikel, alur, dan instruksi.
8. **Ukur penyelesaian, bukan hanya pengalihan.** Lacak kontak tindak lanjut, peringkat pengguna, serah terima, dan keluhan. Bandingkan dengan garis dasar.
9. **Sertakan semua orang.** Uji dengan pembaca layar dan dengan bahasa dan aksen yang berbeda. Pertahankan kanal lain tetap tersedia, seperti telepon dan email.
10. **Miliki sebagai layanan.** Tunjuk pemilik, anggaran, jadwal perbaikan, dan rencana tentang apa yang dilakukan ketika model dasar atau vendor berubah.

## Pertanyaan untuk dibahas bersama tim Anda

**Pertanyaan apa yang paling sering ditanyakan pengguna, dan mana yang dapat dijawab asisten dengan andal dari artikel kita yang ada?**
Pakai data tiket. Harapkan daftar singkat pertanyaan berulang. Periksa artikel untuk akurasi dan kelengkapan. Lanjutkan dengan memilih lima pertanyaan untuk uji coba pertama.

**Apa yang tidak boleh dilakukan atau dikatakan asisten, dan bagaimana kita akan mengujinya?**
Daftarkan batas: tidak ada perubahan akses tanpa verifikasi, tidak ada saran hukum atau medis, tidak ada janji tentang waktu. Harapkan perbedaan pendapat tentang tepinya. Lanjutkan dengan mengubah setiap batas menjadi pengujian.

**Ketika pengguna frustrasi atau meminta manusia, apa yang terjadi, dan berapa lama?**
Cobalah sendiri. Harapkan celah pada konteks dan keterlambatan. Lanjutkan dengan menyepakati waktu maksimum dan format serah terima standar.

**Bagaimana kita tahu bahwa pengguna mendapat jawaban yang mereka butuhkan, bukan sekadar berhenti mengobrol?**
Minta ukurannya. Harapkan "tingkat pengalihan". Lanjutkan dengan menyepakati pertanyaan tindak lanjut, pemeriksaan kontak berulang, dan tinjauan sampel.

**Siapa yang dapat memakai asisten ini, dan siapa yang mungkin gagal dilayaninya?**
Pikirkan penyandang disabilitas, perbedaan bahasa, atau kepercayaan diri rendah. Harapkan bahwa beberapa kelompok belum dipertimbangkan. Lanjutkan dengan menguji bersama beberapa pengguna nyata dari kelompok-kelompok itu.

**Data apa yang dimuat percakapan, ke mana perginya, dan siapa yang dapat membacanya?**
Telusuri alur datanya. Harapkan kejutan tentang vendor dan retensi. Lanjutkan dengan menuliskan alurnya dan meminta petugas privasi meninjau.

## Dalam praktik: contoh manajemen layanan

Desk TI sebuah layanan kesehatan regional mendukung sekitar 12.000 staf klinis dan administratif. Panggilan memuncak pada pergantian shift, ketika klinisi membutuhkan login dan pencetakan, dan rata-rata waktu tunggu sembilan menit. Manajer layanan mengusulkan agen virtual di portal staf dan di kanal pesan.

Tim memulai secara sempit. Mereka mengambil 15 pertanyaan "bagaimana saya" paling umum dari enam bulan tiket, meninjau artikel yang cocok bersama pengguna klinis, dan menulis ulang delapan yang tidak jelas. Asisten menjawab hanya dari artikel-artikel itu. Untuk pengaturan ulang kata sandi ia tidak bertindak sendiri; ia menautkan ke alur pengaturan ulang sistem identitas, yang memakai verifikasinya sendiri. Spanduk menyatakan bahwa ia asisten AI, dan tombol "bicara dengan manusia" menyerahkan percakapan, dengan ringkasan, kepada agen desk.

Sebelum peluncuran, tim menyusun 80 pertanyaan uji, termasuk tentang topik di luar 15 itu, seperti saran klinis, yang harus ditolak asisten, dan upaya membuatnya mengungkap instruksinya. Versi pertama gagal pada sembilan pengujian, sebagian besar dengan menjawab di luar ruang lingkupnya. Tim memperketat instruksi dan menambahkan aturan bahwa apa pun yang tidak cocok diserahkan kepada manusia. Pada bulan pertama, asisten menangani sekitar 1.400 percakapan; sekitar 40 persen berakhir tanpa tiket, dan 12 persen diserahkan kepada agen. Manajer membaca 100 percakapan setiap minggu. Ia menemukan bahwa pengguna sering menanyakan layar login yang baru berubah yang belum dijelaskan artikel, dan tim memperbaruinya.

Yang berubah: waktu tunggu pada puncak turun, dan agen menghabiskan lebih sedikit waktu pada pertanyaan berulang. Yang masih sulit: staf shift malam di beberapa bangsal memiliki konektivitas buruk dan terus menelepon; asisten kesulitan dengan pertanyaan dalam dua bahasa yang dipakai banyak staf, dan tim belum menemukan metode uji yang memadai; dan harga vendor tumbuh bersama volume percakapan. Manajer menambahkan artikel terjemahan dan tinjauan biaya triwulanan.

## Empat perspektif

### Tim produk dan pengiriman

Sediakan artikel dan catatan rilis yang jelas untuk perubahan Anda, karena asisten hanya dapat menjawab apa yang tertulis. Bangun alur yang dapat dipanggil asisten dengan aman, dengan pemeriksaan identitasnya sendiri.

### Tim layanan dan operasi

Miliki mutu asisten: baca percakapan, perbaiki artikel, dan tingkatkan alur. Tangani serah terima dengan baik, dan laporkan pola kepada pemilik produk dan layanan.

### Kepemimpinan dan tata kelola

Tetapkan batas, danai pekerjaan pengetahuan dan pengujian, dan minta ukuran penyelesaian, bukan hanya pengalihan. Pastikan selalu ada jalur ke manusia. Periksa pertanyaan data dan hukum.

### Pelanggan dan pengguna

Anda seharusnya tahu bahwa Anda berbicara dengan AI, dapat beralih ke manusia kapan saja, dan tidak diminta mengulang diri. Beri tahu penyedia ketika jawaban salah atau tidak membantu.

## Agile, AI, otomatisasi, dan analitik

### Agile

Mulailah dengan beberapa topik, rilis sering, belajar dari percakapan nyata, dan perluas bertahap. Libatkan pengguna dan agen dalam meninjau apa yang ditambahkan. Perhatian: menambah banyak topik dengan cepat tanpa pengujian melipatgandakan jawaban salah; tambahkan dalam kelompok kecil yang teruji.

### AI

Asisten membutuhkan pemilik, kumpulan uji, jawaban yang berdasar, dan tinjauan sampel. Putuskan apa yang boleh dikatakan dan dilakukan AI, dan di mana seseorang harus memutuskan. Perhatian: menyetel instruksi agar lulus pengujian dapat membuat asisten rapuh; segarkan kumpulan uji dengan pertanyaan nyata yang baru. Lihat Topik 5.1 — AI dalam manajemen layanan.

### Otomatisasi

Hubungkan asisten ke alur terdefinisi untuk permintaan rutin, dengan verifikasi, log, dan batas, agar ia memicu tindakan tanpa mengimprovisasinya. Perhatian: asisten yang dapat bertindak atas pesan yang persuasif adalah sasaran; jaga kuasanya tetap sempit dan verifikasi identitas di luar jalur. Lihat Topik 6.5 — Swalayan dan pemenuhan otomatis.

### Analitik

Lihat pertanyaan yang diajukan, dijawab, ditolak, diserahkan, dan ditinggalkan, peringkat pengguna, kontak berulang, dan biaya per kontak yang terselesaikan. Perhatian: pengalihan tinggi dapat berarti pengguna menyerah, dan peringkat berasal dari kelompok kecil yang memilih sendiri; gabungkan dengan sampel percakapan. Lihat Topik 7.7 — Analitik pengalaman dan sentimen dan buku *Service Management Metrics*.

## Mode kegagalan umum

- **Tidak ada jalan keluar.** Pengguna berputar-putar dengan bot. Selalu tawarkan manusia, dengan konteks.
- **Jawaban dari ingatan.** Model mengarang langkah. Dasarkan pada artikel yang ditinjau dan menolak ketika tidak yakin.
- **Pengalihan sebagai keberhasilan.** Pengguna pergi tanpa terbantu. Ukur penyelesaian dan kontak berulang.
- **Tindakan tanpa verifikasi.** Akses diberikan berdasarkan klaim. Verifikasi di luar jalur dan catat.
- **Bot tersembunyi.** Pengguna mengira berbicara dengan orang. Katakan bahwa ia AI.
- **Pengguna yang dikecualikan.** Pembaca layar atau bahasa gagal. Uji dengan pengguna nyata dan pertahankan kanal lain.
- **Pengetahuan usang.** Asisten mengutip artikel lama. Kaitkan pembaruan dengan perubahan dan tinjau sampel.

## Model kematangan

| Dimensi | Memulai | Mengembangkan | Menstandardisasi | Mengelola | Mengorkestrasi |
|---|---|---|---|---|---|
| Ruang lingkup dan desain | Apa pun yang ditawarkan vendor | Beberapa topik | Topik, batas, dan alur terdefinisi | Ruang lingkup disetel dari data percakapan | Ruang lingkup dikoordinasikan lintas fungsi dan kanal |
| Landasan dan pengetahuan | Ingatan model | Beberapa artikel | Artikel yang ditinjau dengan sumber ditampilkan | Pengetahuan diperbarui dari percakapan | Pengetahuan dan asisten diperbaiki bersama secara berkelanjutan |
| Serah terima dan inklusi | Tersembunyi atau buruk | Serah terima ada | Serah terima terlihat dengan konteks, aksesibilitas diuji | Serah terima dan inklusi diukur | Pengalaman konsisten lintas kanal, bahasa, dan kemampuan |
| Pengukuran | Hanya volume | Pengalihan | Penyelesaian, kontak berulang, dan peringkat | Sampel dan tren ditinjau secara teratur | Hasil dikaitkan dengan biaya dan pengalaman lintas layanan |

## Daftar periksa

- [ ] Kami memilih sekumpulan kecil topik yang cocok untuk asisten.
- [ ] Jawaban didasarkan pada artikel yang ditinjau dan menampilkan sumber.
- [ ] Opsi "bicara dengan manusia" yang terlihat menyerahkan dengan konteks.
- [ ] Identitas diverifikasi di luar obrolan untuk tindakan apa pun.
- [ ] Pengguna diberi tahu bahwa ia AI.
- [ ] Kami memiliki kumpulan uji dan menjalankannya sebelum dan sesudah setiap perubahan.
- [ ] Kami membaca sampel percakapan setiap minggu.
- [ ] Kami menguji aksesibilitas dan bahasa yang dipakai pengguna kami.

## Prompt AI

**Susun draf pertanyaan uji dari tiket.**

```text
Here are anonymized ticket titles and summaries from the past month: [paste]. Our assistant is allowed to answer these topics: [list].
Write 40 test questions based on the tickets: 25 inside the topics, 10 outside them that the assistant should decline, and 5 that try to make it ignore its rules. State the correct behavior for each. Do not include real personal data.
List what you are unsure of.
```

**Tinjau percakapan untuk pola kegagalan.**

```text
Here are transcripts of conversations where the user asked for a person or left unhelped, with personal data removed: [paste].
Group them into up to six patterns, count each, quote a short example, and list a possible fix to investigate. Do not blame the user.
List what you are unsure of.
```

**Tulis instruksi asisten untuk ditinjau.**

```text
Our assistant helps staff of [type of organization] with [topics]. It must never: [list]. It must always: [list, such as offer a person and cite sources].
Draft instructions of under 250 words for the assistant, in plain language, including what to say when it does not know. Do not invent capabilities or sources.
List what you are unsure of.
```

## Skill AI

- [prompt-engineering](../../../../skills/prompt-engineering/SKILL.md): gunakan untuk merancang dan menguji instruksi asisten.
- [service-catalog](../../../../skills/service-catalog/SKILL.md): gunakan untuk mendefinisikan apa yang dapat dibantu asisten untuk diminta pengguna.
- [survey-design](../../../../skills/survey-design/SKILL.md): gunakan untuk merancang umpan balik pengguna yang mengukur penyelesaian.
- [getting-feedback](../../../../skills/getting-feedback/SKILL.md): gunakan untuk mengumpulkan umpan balik dari pengguna dan agen.

## Sumber utama

- W3C, Web Content Accessibility Guidelines (WCAG): standar internasional untuk konten web yang dapat diakses, relevan untuk antarmuka obrolan.
- NIST, AI Risk Management Framework: struktur untuk mengidentifikasi dan mengelola risiko AI.
- Wikipedia, "Chatbot" dan "Virtual assistant": ikhtisar teknologinya.
- Wikipedia, "Prompt injection": latar belakang risiko keamanan utama.

## Referensi

1. Chatbot — Wikipedia — https://en.wikipedia.org/wiki/Chatbot
2. Virtual assistant — Wikipedia — https://en.wikipedia.org/wiki/Virtual_assistant
3. Conversational user interface — Wikipedia — https://en.wikipedia.org/wiki/Conversational_user_interface
4. Retrieval-augmented generation — Wikipedia — https://en.wikipedia.org/wiki/Retrieval-augmented_generation
5. Triage — Wikipedia — https://en.wikipedia.org/wiki/Triage
6. Sentiment analysis — Wikipedia — https://en.wikipedia.org/wiki/Sentiment_analysis
7. Accessibility — Wikipedia — https://en.wikipedia.org/wiki/Accessibility
8. Web Content Accessibility Guidelines — Wikipedia — https://en.wikipedia.org/wiki/Web_Content_Accessibility_Guidelines
9. Dark pattern — Wikipedia — https://en.wikipedia.org/wiki/Dark_pattern
10. Prompt injection — Wikipedia — https://en.wikipedia.org/wiki/Prompt_injection
11. Web Content Accessibility Guidelines (WCAG) overview — W3C — https://www.w3.org/WAI/standards-guidelines/wcag/
