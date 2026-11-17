# Service Desk

**Service desk adalah titik kontak tunggal antara penyedia layanan dan penggunanya, dan ia bekerja paling baik ketika menyelesaikan apa yang bisa pada kontak pertama, merutekan apa yang tidak bisa kepada orang yang tepat dengan cepat, dan mengembalikan apa yang didengarnya ke dalam perbaikan; AI dapat melakukan triase dan menyusun draf, tetapi seseorang tetap bertanggung jawab atas hubungan dengan pengguna.**

## Mengapa ini penting

Bagi sebagian besar pengguna, service desk adalah penyedia layanan itu sendiri. Mereka jarang bertemu insinyur, arsitek, atau manajer di balik layanan. Mereka bertemu seseorang dalam obrolan, panggilan telepon, atau formulir, pada saat ada yang salah atau mereka membutuhkan sesuatu dikerjakan. Bagaimana kontak itu berlangsung membentuk cara mereka menilai seluruh layanan.

Service desk juga duduk di atas sumber informasi yang kaya. Ia mendengar apa yang rusak, apa yang membingungkan orang, dan perubahan mana yang menimbulkan masalah, sering kali sebelum pemantauan. Ketika informasi itu hilang di dalam tiket, organisasi mengulangi kesalahannya; ketika dipakai, desk menjadi sistem peringatan dini organisasi.

Desk juga merupakan bagian manajemen layanan yang paling banyak diubah oleh teknologi baru. Obrolan, portal swalayan, agen virtual, dan perangkat AI mengurangi volume kontak sederhana dan mengubah seperti apa kontak yang tersisa. Topik ini menjelaskan untuk apa service desk, model dan kanal utamanya, serta cara memperkenalkan otomatisasi dan AI tanpa kehilangan sisi manusiawinya. Praktik terkaitnya adalah manajemen permintaan layanan (Topik 3.6 — Manajemen Permintaan Layanan), manajemen insiden (Topik 3.2 — Manajemen Insiden), dan manajemen pengetahuan (Topik 3.9 — Manajemen Pengetahuan).

## Konsep inti

**Tujuan.** Dalam istilah ITIL 4, service desk menangkap permintaan akan penyelesaian insiden dan permintaan layanan, dan merupakan pintu masuk serta titik kontak tunggal penyedia layanan dengan semua penggunanya. Artikel Wikipedia tentang help desk dan point of contact menjelaskan gagasannya.

**Titik kontak tunggal.** Pengguna tidak seharusnya perlu mengetahui struktur organisasi untuk mendapat bantuan. Satu tempat, dengan satu cara bertanya dan satu catatan permintaan, membebaskan mereka dari kerepotan mencari siapa yang bertanggung jawab. Titik kontak tidak harus satu nomor telepon; bisa berupa portal, obrolan, alamat email, dan loket kunjungan yang semuanya masuk ke sistem yang sama.

**Bukan hanya TI.** Banyak organisasi memiliki desk di luar TI, seperti sumber daya manusia dan fasilitas. Lihat Topik 1.9 — Manajemen layanan perusahaan.

**Kanal.** Telepon, email, obrolan, portal, aplikasi seluler, kunjungan langsung, perangkat pesan, dan kanal otomatis. Pendekatan omnichannel, yang dijelaskan di Wikipedia, bertujuan menyediakan pengalaman yang konsisten dan catatan yang berkesinambungan ketika pengguna berpindah antarkanal. Tujuannya adalah menemui pengguna di tempat mereka sudah berada, tanpa memaksa setiap kontak masuk ke formulir tiket.

**Tingkat dan perutean.** Banyak desk memakai tingkat: staf lini pertama menerima kontak dan menyelesaikan apa yang bisa, spesialis lini kedua menangani masalah yang lebih teknis, dan tim lini ketiga mencakup pengembang dan pemasok. Tingkat dapat menciptakan serah terima dan keterlambatan. Beberapa organisasi bergerak menuju lebih sedikit serah terima dengan memberi lini pertama perangkat dan pengetahuan yang lebih baik.

**Shift-left.** Memindahkan penyelesaian ke arah pengguna atau titik paling awal: swalayan, artikel pengetahuan, otomatisasi, dan kemampuan lini pertama yang lebih baik. Perbaikan yang terjadi pada kontak pertama atau tanpa kontak sama sekali lebih murah dan lebih cepat daripada yang melewati beberapa tingkat.

**Swarming.** Alih-alih meneruskan masalah sepanjang rantai, sekelompok orang dengan keterampilan relevan berkolaborasi mengatasinya, lalu kembali ke pekerjaan lain. Consortium for Service Innovation, yang juga menerbitkan Knowledge-Centered Service (KCS), telah menjelaskan pendekatan yang disebutnya intelligent swarming. Swarming dapat mengurangi serah terima tetapi membutuhkan koordinasi yang jelas dan budaya yang mendukungnya.

**Penyelesaian pada kontak pertama.** Persentase kontak yang diselesaikan tanpa kontak lanjutan. Ini ukuran yang umum dan berisiko: mendorongnya naik dapat membuat agen menutup tiket terlalu dini atau menghindari yang rumit. Lihat buku *Service Management Metrics* untuk definisi dan pagar pengamannya.

**Empati dan komunikasi.** Pengguna yang bermasalah sering tertekan. Bahasa sederhana, pernyataan yang jelas tentang apa yang akan terjadi selanjutnya, dan kejujuran tentang ketidakpastian sama pentingnya dengan keterampilan teknis. Artikel Wikipedia tentang empati memberi latar belakang umum.

**Pengetahuan.** Agen desk mengandalkan artikel pengetahuan dan catatan bersama. Knowledge-Centered Service mengusulkan penangkapan dan perbaikan pengetahuan sebagai produk sampingan dari penyelesaian masalah. Lihat Topik 3.9 — Manajemen Pengetahuan.

**Agen virtual dan chatbot.** Perangkat lunak yang berbicara dengan pengguna, menjawab pertanyaan umum, dan mengumpulkan rincian. Wikipedia menjelaskan chatbot dan asisten virtual. Yang berguna mengalihkan kontak sederhana dan menyiapkan yang rumit, dan menyerahkan kepada manusia ketika tidak dapat membantu. Lihat Topik 5.3 — Service desk AI dan agen virtual.

**Pengalaman.** Survei kepuasan, net promoter score, dan ukuran serupa menanyakan kepada pengguna pendapat mereka. Semuanya adalah satu sumber informasi dan masing-masing punya batas: respons survei berasal dari kelompok yang memilih sendiri, dan skor dapat dipengaruhi oleh cara pertanyaan diajukan. Lihat Topik 7.7 — Analitik pengalaman dan sentimen.

**Bagaimana lensa-lensa cocok.** Praktik agile menyarankan perbaikan kecil yang sering pada desk dengan pengguna terlibat. AI melakukan triase, merangkum, dan menyusun draf balasan. Otomatisasi menangani permintaan rutin dan perutean. Analitik mengungkap permintaan, penyebab kontak, dan pengalaman.

## Praktik terbaik

1. **Permudah untuk bertanya.** Tawarkan kanal yang disukai pengguna, dan pastikan masing-masing mengarah ke catatan yang sama. Uji setiap kanal seperti pengguna.
2. **Ketahui mengapa orang menghubungi Anda.** Kategorikan kontak menurut alasan, tinjau yang teratas secara berkala, dan tanyakan apa yang akan membuat masing-masing tidak perlu. Jaga kategori tetap sedikit dan berguna.
3. **Selesaikan pada kontak pertama bila aman.** Beri staf lini pertama akses, perangkat, dan pengetahuan untuk memperbaiki masalah umum, serta aturan yang jelas tentang apa yang boleh mereka lakukan.
4. **Berikan langkah selanjutnya yang jelas setiap kali.** Beri tahu pengguna apa yang akan terjadi, siapa yang akan mengerjakan, dan kapan mereka akan mendengar lagi. Keheningan menghasilkan kontak berulang.
5. **Lakukan shift-left dengan sengaja.** Untuk kontak yang paling umum, tawarkan swalayan, artikel, atau otomatisasi. Periksa bahwa jalur swalayan berfungsi dan pengguna mengetahuinya.
6. **Kurangi serah terima.** Lihat tiket yang melewati beberapa tim, dan tanyakan apakah swarming, perutean yang lebih baik, atau keterampilan lini pertama yang lebih baik akan membantu.
7. **Tulis pengetahuan sambil bekerja.** Tangkap solusi dalam artikel pada saat itu, dan perbaiki ketika gagal. Pensiunkan artikel yang usang.
8. **Dengarkan pola dan teruskan.** Beri tahu manajemen masalah, tim produk, dan pemilik apa yang dilihat desk. Sertakan contoh dari pengguna.
9. **Gunakan otomatisasi dan AI dengan seseorang yang bertanggung jawab.** Biarkan keduanya menangani langkah rutin, dengan serah terima yang jelas kepada manusia dan cara yang terlihat untuk menjangkau seseorang. Tinjau apa yang mereka lakukan.
10. **Pedulikan orang-orang di desk.** Sediakan pelatihan, beban kerja yang berkelanjutan, dan jalur untuk berkembang. Desk dengan pergantian tinggi kehilangan pengetahuan dan niat baik.

## Pertanyaan untuk dibahas bersama tim Anda

**Mengapa orang menghubungi kita, dan kontak mana yang bisa dihindari?**
Gunakan daftar alasan teratas yang sebenarnya. Harapkan reset kata sandi, permintaan akses, dan pertanyaan "bagaimana saya". Tanyakan apa yang akan menghentikan masing-masing. Lanjutkan dengan memilih satu alasan dan memperkirakan usaha untuk menghilangkannya.

**Apa yang dialami pengguna dari saat kontak hingga saat penyelesaian, langkah demi langkah?**
Telusuri satu tiket nyata, termasuk penantian. Orang sering menemukan keheningan panjang dan pertanyaan yang diulang. Lanjutkan dengan memilih satu langkah untuk diperbaiki bulan ini.

**Tiket mana yang melewati serah terima terbanyak, dan apa penyebabnya?**
Serah terima memakan waktu dan konteks. Cari pola, seperti tim tertentu atau jenis masalah. Tanyakan apakah swarming bisa berhasil. Lanjutkan dengan mencoba rute berbeda untuk satu jenis tiket.

**Apa yang tidak bisa dilakukan staf lini pertama hari ini yang akan memungkinkan mereka menyelesaikan lebih banyak pada kontak pertama?**
Pertanyaan ini menemukan kesenjangan akses, pengetahuan, dan wewenang. Harapkan alasan tentang keamanan dan proses. Tanyakan siapa yang memutuskan dan kapan. Lanjutkan dengan memilih satu izin untuk diperluas, dengan pengamanan.

**Di mana pengguna lebih suka bertanya, dan apakah kita ada di sana?**
Pengguna mungkin sudah memakai perangkat obrolan atau bertanya kepada rekan. Tanyakan kepada mereka. Harapkan perbedaan antarkelompok. Lanjutkan dengan memilih satu kanal untuk diperbaiki atau ditambah dan satu untuk dipensiunkan.

**Apa yang ingin kita agar agen virtual atau asisten AI lakukan, dan apa yang harus tetap bersama manusia?**
Tarik batas yang jelas: AI untuk pertanyaan rutin dan menyiapkan rincian, manusia untuk kesusahan, ambiguitas, dan keputusan yang berkonsekuensi. Tanyakan siapa pemilik asisten dan bagaimana kesalahan ditemukan. Lanjutkan dengan memilih uji coba kecil dengan seseorang yang meninjau.

## Dalam praktik: contoh manajemen layanan

Service desk TI sebuah distributor listrik regional menerima sekitar 600 kontak seminggu dari 3.000 staf, termasuk operator ruang kendali dan insinyur lapangan. Pengguna mengatakan sulit menjangkau seseorang, dan angka desk sendiri menunjukkan jumlah kontak berulang yang meningkat. Staf desk mengatakan mereka menghabiskan separuh hari untuk masalah kata sandi dan akun.

Kepala desk meninjau sampel 300 kontak dan mendapati bahwa 35 persen adalah masalah kata sandi dan akses, 20 persen adalah pertanyaan "bagaimana saya" tentang tiga aplikasi, dan 10 persen adalah kontak berulang tentang masalah sebelumnya. Ia memperkenalkan tiga perubahan. Reset kata sandi swalayan ditambahkan ke portal, dengan panduan singkat yang dipasang di halaman login. Agen virtual diuji coba pada pertanyaan "bagaimana saya" untuk ketiga aplikasi, dengan tombol "bicara dengan orang" yang terlihat. Dan sebuah kebijakan memberi staf lini pertama wewenang untuk memberi akses standar tanpa persetujuan kedua.

Setelah dua bulan, kontak kata sandi turun sekitar separuh, dan agen virtual menyelesaikan sekitar sepertiga percakapannya tanpa serah terima. Kepala membaca sampel mingguan percakapan agen dan mendapati ia memberi jawaban salah tentang login baru satu aplikasi. Ia memperbaiki artikel dan menambahkan pemeriksaan untuk rilis baru.

Yang berubah: staf menangani lebih sedikit kontak rutin dan menghabiskan lebih banyak waktu pada masalah yang kompleks. Yang masih sulit: insinyur lapangan di daerah terpencil dengan konektivitas buruk tidak bisa memakai portal secara andal dan tetap menelepon; wewenang akses baru desk mengkhawatirkan tim keamanan, yang meminta tinjauan bulanan; dan sebagian staf desk khawatir agen virtual akan memangkas pekerjaan mereka. Kepala mengatakan secara terbuka bahwa tujuannya adalah membebaskan waktu untuk pekerjaan yang lebih sulit, dan menyepakati dengan manajernya bahwa jumlah personel tidak akan dikurangi atas dasar ini selama setahun.

## Empat perspektif

### Tim produk dan pengiriman

Desk adalah sinyal dini Anda. Beri ia catatan rilis, masalah yang diketahui, dan informasi dukungan yang jelas sebelum Anda meluncurkan, dan baca apa yang dilaporkannya. Perbaiki penyebab kontak berulang.

### Tim layanan dan operasi

Bekerjalah dengan desk pada pengetahuan bersama, eskalasi yang jelas, dan jalur cepat ke spesialis. Bergabunglah dalam swarming di tempat yang membantu, dan beri tahu desk apa yang Anda pelajari agar lini pertama dapat menyelesaikan lebih banyak.

### Kepemimpinan dan tata kelola

Perlakukan desk sebagai wajah layanan Anda dan sistem peringatan dini. Danai perangkat, pekerjaan pengetahuan, dan pelatihan. Berhati-hatilah terhadap target yang mendorong staf menutup tiket dengan cepat. Minta bukti tentang apa yang dialami pengguna.

### Pelanggan dan pengguna

Anda seharusnya dapat bertanya dengan cara yang cocok bagi Anda, mendengar apa yang akan terjadi selanjutnya, dan menjangkau seseorang bila perlu. Jelaskan masalah Anda dan apa yang sedang Anda lakukan; itu membantu desk. Beri tahu mereka ketika saran tidak berhasil.

## Agile, AI, otomatisasi, dan analitik

### Agile

Perbaiki desk dalam langkah kecil bersama pengguna: coba kanal baru dengan satu kelompok, sesuaikan, dan perluas. Libatkan orang-orang di desk dalam memilih apa yang diubah. Perhatian: perubahan terus-menerus pada perangkat dan skrip melelahkan staf; atur lajunya dan jelaskan.

### AI

AI dapat mengklasifikasikan dan merutekan kontak, merangkum utas yang panjang, menyarankan artikel, dan menyusun draf balasan untuk ditinjau agen. Agen virtual dapat menjawab pertanyaan rutin. Tunjuk pemilik, pertahankan jalur yang terlihat ke manusia, dan tinjau sampel percakapan AI. Perhatian: jawaban salah yang disampaikan dengan lancar mengikis kepercayaan, jadi lacak koreksi dan keluhan. Lihat Topik 5.3 — Service desk AI dan agen virtual.

### Otomatisasi

Otomatiskan permintaan rutin, seperti reset kata sandi dan akses standar, dengan pemeriksaan dan log, dan otomatiskan pembaruan tiket dan notifikasi. Perhatian: otomatisasi dapat mengunci pengguna atau memberi akses secara keliru; sertakan pemeriksaan identitas, pembatas laju, dan tinjauan. Lihat Topik 6.5 — Swalayan dan pemenuhan otomatis.

### Analitik

Lihat alasan kontak, volume menurut kanal, waktu penyelesaian, kontak berulang, dan umpan balik pengguna. Perhatian: penyelesaian pada kontak pertama dan waktu penanganan dapat dimanipulasi, dan skor kepuasan mencerminkan siapa yang menjawab survei; gabungkan dengan sampel kontak nyata. Lihat Topik 7.7 — Analitik pengalaman dan sentimen dan buku *Service Management Metrics*.

## Mode kegagalan umum

- **Sulit menjangkau manusia.** Pengguna berputar-putar di menu dan bot. Selalu tawarkan rute yang jelas ke manusia.
- **Keheningan setelah kontak pertama.** Pengguna mengejar. Berikan langkah selanjutnya dan waktunya.
- **Tiket ditutup untuk mencapai target.** Kontak berulang naik. Ukur penyelesaian dan pembukaan kembali, dan periksa sampel.
- **Pengetahuan ditulis sekali lalu dibiarkan.** Artikel menjadi usang. Tinjau pemakaian dan pensiunkan yang gagal.
- **Serah terima di mana-mana.** Tiket memantul antarantrean. Perbaiki keterampilan lini pertama, perutean, atau swarming.
- **Jawaban bot yang tidak diperiksa siapa pun.** Saran yang salah menyebar. Tinjau sampel dan perbaiki sumbernya.
- **Desk terputus dari organisasi.** Pola tidak diteruskan. Bagikan apa yang Anda dengar kepada para pemilik.

## Model kematangan

| Dimensi | Memulai | Mengembangkan | Menstandardisasi | Mengelola | Mengorkestrasi |
|---|---|---|---|---|---|
| Kanal | Telepon dan email | Portal ditambahkan | Catatan yang konsisten lintas kanal | Kanal dipilih berdasarkan bukti pemakaian | Pengalaman konsisten lintas kanal dan fungsi |
| Penyelesaian | Sebagian besar dieskalasi | Sebagian perbaikan lini pertama | Wewenang dan pengetahuan lini pertama didefinisikan | Penyelesaian dan pembukaan kembali diukur | Penyelesaian didukung otomatisasi dan swarming |
| Pengetahuan | Catatan pribadi | Artikel bersama | Artikel ditulis sebagai bagian dari pekerjaan | Pemakaian dan mutu artikel diukur | Pengetahuan diperbaiki terus-menerus dari kontak |
| Wawasan | Hitungan volume | Alasan teratas didaftar | Alasan ditinjau dan diteruskan ke pemilik | Kontak dikurangi melalui akar masalah | Permintaan dibentuk bersama tim produk dan layanan |

## Daftar periksa

- [ ] Pengguna dapat menjangkau kami lewat kanal yang mereka sukai, dengan satu catatan.
- [ ] Kami tahu alasan teratas kontak dan meninjaunya secara berkala.
- [ ] Staf lini pertama memiliki wewenang dan pengetahuan untuk menyelesaikan masalah umum.
- [ ] Setiap kontak berakhir dengan langkah selanjutnya dan waktu yang jelas.
- [ ] Jalur swalayan berfungsi dan pengguna mengetahuinya.
- [ ] Pengetahuan ditulis dan diperbarui sebagai bagian dari pekerjaan.
- [ ] Kami melaporkan pola kepada pemilik produk dan layanan.
- [ ] Otomatisasi dan AI memiliki pemilik, rute yang terlihat ke manusia, dan tinjauan sampel.

## Prompt AI

**Kelompokkan alasan kontak.**

```text
Below are ticket titles and short descriptions from our service desk, with personal data removed: [paste sample].
Group them into up to ten reasons, count each, and quote two short examples exactly for each reason. For the top three, list one question to ask about whether the contact could be avoided. Do not guess causes.
List what you are unsure of.
```

**Susun draf balasan untuk ditinjau agen.**

```text
User message: [paste message, with personal data removed]. Relevant article text: [paste article].
Draft a reply of under 120 words in plain language that uses only the article, states the next step, and says clearly if the article does not answer the question. Do not promise outcomes or timings that are not in the article.
List what you are unsure of.
```

**Uji batas agen virtual.**

```text
Our virtual agent will handle: [list topics]. It must hand over to a person for: [list topics].
Write 25 test messages, some inside the scope, some at the edge, and some that must be handed over, and for each state the correct behavior. Do not include real personal data.
List what you are unsure of.
```

## Skill AI

- [service-catalog](../../../../skills/service-catalog/SKILL.md): gunakan untuk mendeskripsikan apa yang dapat diminta pengguna dan caranya.
- [workflow-analysis](../../../../skills/workflow-analysis/SKILL.md): gunakan untuk menemukan serah terima dan penantian dalam alur tiket.
- [survey-design](../../../../skills/survey-design/SKILL.md): gunakan untuk merancang umpan balik pengguna yang adil dan berguna.
- [getting-feedback](../../../../skills/getting-feedback/SKILL.md): gunakan untuk mengumpulkan umpan balik dari pengguna dan agen.

## Sumber utama

- Consortium for Service Innovation, Knowledge-Centered Service (KCS) dan intelligent swarming: panduan praktis tentang pengetahuan dan kolaborasi dalam dukungan.
- PeopleCert, halaman sertifikasi ITIL: uraian pemilik tentang panduan ITIL, termasuk praktik service desk.
- Wikipedia, "Help desk": ikhtisar fungsi ini.
- Wikipedia, "Omnichannel": latar belakang kontak multikanal yang konsisten.

## Referensi

1. Help desk — Wikipedia — https://en.wikipedia.org/wiki/Help_desk
2. Customer support — Wikipedia — https://en.wikipedia.org/wiki/Customer_support
3. Point of contact — Wikipedia — https://en.wikipedia.org/wiki/Point_of_contact
4. Omnichannel — Wikipedia — https://en.wikipedia.org/wiki/Omnichannel
5. Chatbot — Wikipedia — https://en.wikipedia.org/wiki/Chatbot
6. Virtual assistant — Wikipedia — https://en.wikipedia.org/wiki/Virtual_assistant
7. Triage — Wikipedia — https://en.wikipedia.org/wiki/Triage
8. Self-service — Wikipedia — https://en.wikipedia.org/wiki/Self-service
9. Support ticket — Wikipedia — https://en.wikipedia.org/wiki/Support_ticket
10. Consortium for Service Innovation — KCS library — https://library.serviceinnovation.org
