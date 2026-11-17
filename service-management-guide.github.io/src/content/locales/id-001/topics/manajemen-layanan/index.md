# Manajemen layanan

**Manajemen layanan adalah disiplin merancang, menjalankan, dan memperbaiki layanan agar pelanggan dapat memperoleh hasil yang mereka inginkan tanpa menanggung biaya dan risiko untuk menghasilkannya; praktik agile, AI, otomatisasi, dan analitik adalah empat cara untuk mengerjakan hal itu dengan lebih baik, bukan pengganti dari pekerjaan itu sendiri.**

## Mengapa ini penting

Sebagian besar organisasi sekaligus menjadi pelanggan dan penyedia layanan. Sebuah rumah sakit bergantung pada sistem rekam medis elektronik yang dijalankan departemen TI-nya, dan departemen itu bergantung pada penyedia cloud. Setiap mata rantai dalam rangkaian ini menjanjikan sesuatu kepada mata rantai berikutnya. Ketika satu janji gagal, kegagalan itu menjalar sepanjang rantai dan jatuh pada orang yang tidak pernah melihat penyebabnya: seorang perawat yang tidak bisa membuka rekam medis, seorang pelanggan yang tidak bisa membayar.

Manajemen layanan memberi orang-orang yang membuat janji ini cara bersama untuk memikirkan dan membicarakannya. Ia mengajukan pertanyaan sederhana: apa yang perlu dicapai pelanggan, dan apa yang harus kita lakukan, berulang kali dan secara andal, agar mereka bisa mencapainya? Jawabannya diperlakukan sebagai praktik yang berjalan terus, bukan proyek dengan tanggal berakhir.

Bagi tim teknologi, pergeserannya adalah dari "kami menjalankan server dan aplikasi" menjadi "kami menyediakan hasil". Server tetap penting. Tetapi ukuran keberhasilan bergeser dari apakah mesinnya menyala ke apakah orang itu berhasil menyelesaikan pekerjaannya. Pergeseran itu menjelaskan mengapa sebuah tim bisa memenuhi semua target uptime namun tetap dinilai layanannya buruk.

Panduan ini membahas manajemen layanan melalui empat lensa: agile, AI, otomatisasi, dan analitik. Setiap lensa mengubah cara layanan dijalankan. Tak satu pun mengubah pertanyaan di atas. Bacalah topik ini lebih dulu; topik-topik berikutnya bergantung pada kosakatanya.

## Konsep inti

**Layanan.** ITIL 4 mendefinisikan layanan sebagai sarana untuk memungkinkan penciptaan nilai bersama dengan memfasilitasi hasil yang ingin dicapai pelanggan, tanpa pelanggan harus mengelola biaya dan risiko tertentu. Dua bagian definisi itu menentukan. "Penciptaan bersama" berarti nilai tidak berada di dalam penyedia: nilai muncul ketika pelanggan menggunakan layanan. Dan "tanpa harus mengelola biaya dan risiko tertentu" menyatakan apa yang ditanggung penyedia, yang menjadi alasan pelanggan membayar atau mendanai layanan itu sejak awal.

**Nilai, hasil, dan keluaran.** Keluaran (output) adalah apa yang dihasilkan layanan, seperti tiket yang terselesaikan atau rilis yang telah di-deploy. Hasil (outcome) adalah perubahan yang diinginkan pelanggan, seperti pasien yang dilayani tepat waktu. Nilai adalah penilaian pelanggan atas seberapa berharga hasil itu dibandingkan biaya dan risikonya. Sebuah tim bisa menghasilkan banyak keluaran namun tanpa hasil, dan tinjauan layanan yang hanya menghitung keluaran tidak akan melihatnya.

**Penyedia, konsumen, dan peran di dalam "konsumen".** Penyedia merancang dan menjalankan layanan. Konsumen adalah kelompok yang lebih luas: pelanggan menetapkan kebutuhan dan bertanggung jawab atas hasil, pengguna memakai layanan, dan sponsor menyetujui pendanaan. Satu orang dapat memegang beberapa peran, dan layanan gagal ketika penyedia hanya berbicara dengan salah satunya.

**Hubungan layanan.** Penyedia dan konsumen terikat oleh hubungan yang terdiri dari kesepakatan, ekspektasi, dan lingkar umpan balik. Perjanjian tingkat layanan (SLA), yang dibahas dalam Topik 3.7 — Manajemen Tingkat Layanan, hanyalah satu bagian. Percakapan yang menjaga SLA tetap jujur adalah bagian yang lebih besar.

**Praktik, bukan proses semata.** Uraian lama tentang manajemen layanan TI (ITSM) menekankan proses: urutan langkah yang tetap, seperti proses insiden. Panduan terkini, termasuk ITIL 4, berbicara tentang praktik: kumpulan sumber daya organisasi yang dirancang untuk melakukan pekerjaan demi mencapai suatu tujuan. Sebuah praktik mencakup orang, informasi, perangkat, dan mitra selain langkah-langkahnya. Topik 1.2 — ITIL menelusuri bagaimana kerangka kerja ini sampai pada rumusan tersebut, dan Topik 1.4 — Sistem nilai layanan menunjukkan bagaimana praktik-praktik itu saling terkait.

**Dari berpusat pada teknologi ke berpusat pada layanan.** Tim yang berpusat pada teknologi diorganisasi di sekitar komponen: tim jaringan, tim basis data, tim aplikasi. Tim yang berpusat pada layanan diorganisasi di sekitar apa yang dialami pelanggan, yang melintasi komponen-komponen itu. Kebanyakan organisasi berada di antara keduanya, dan tinjauan insiden mereka menunjukkan posisinya: jika setiap tinjauan berakhir dengan "itu komponen tim lain", organisasi itu masih berpusat pada teknologi.

**Manajemen layanan di luar TI.** Gagasan yang sama berlaku untuk sumber daya manusia, fasilitas, hukum, dan keuangan, itulah sebabnya banyak organisasi memperluas service desk dan katalog layanan ke fungsi-fungsi tersebut. Lihat Topik 1.9 — Manajemen layanan perusahaan.

**Empat lensa.** *Agile* berarti keterlibatan pemangku kepentingan yang berkelanjutan, perbaikan berkelanjutan, dan pengiriman perubahan yang berfungsi secara berkelanjutan. *AI* berarti sistem yang mempelajari pola serta menghasilkan atau merekomendasikan sesuatu, yang memerlukan pemilik dan pengawasan manusia. *Otomatisasi* berarti pekerjaan yang dilakukan perangkat lunak tanpa orang menyentuh setiap langkah. *Analitik* berarti memakai data untuk menjawab pertanyaan tentang layanan. Bagian 2 membahas agile, Bagian 5 AI, Bagian 6 otomatisasi, dan Bagian 7 analitik.

## Praktik terbaik

1. **Mulailah dari hasil yang diinginkan pelanggan.** Untuk setiap layanan, tulis satu kalimat yang diawali "Pelanggan dapat…". Jika tim tidak bisa menuliskannya, berarti tim belum tahu apa yang disediakannya. Periksa kalimat itu dengan pelanggan sungguhan, bukan dengan rekan yang berbagi asumsi yang sama dengan Anda.
2. **Tunjuk pemilik untuk setiap layanan.** Satu orang bertanggung jawab atas layanan sebagaimana dialami pelanggan, meskipun banyak tim berkontribusi. Tanpa pemilik, tidak ada yang menimbang perbaikan di satu tim terhadap biayanya bagi tim lain.
3. **Deskripsikan layanan dengan kata-kata pelanggan.** Ganti "klaster Exchange" dengan "email dan kalender". Tampilan teknis berguna di dalam penyedia; deskripsi yang menghadap pelanggan adalah yang seharusnya muncul di katalog, laporan, dan halaman status.
4. **Tentukan batas layanan.** Katakan apa yang termasuk, apa yang tidak, dan apa yang harus dilakukan pelanggan sendiri. Batas yang tidak jelas menimbulkan perselisihan pada saat terburuk, yaitu ketika insiden.
5. **Perlakukan perbaikan sebagai bagian dari layanan.** Sisihkan porsi kapasitas yang terlihat untuk pekerjaan perbaikan, dan tinjau backlog kecil berisi perubahan bersama pemangku kepentingan secara berkala. Jika tim Anda memilih memakai sprint, Anda dapat menyisipkan tinjauan di setiap sprint; kebiasaannya lebih penting daripada iramanya.
6. **Gunakan lensa untuk mengajukan pertanyaan, bukan untuk membeli perangkat.** Untuk setiap perubahan, tanyakan praktik agile apa yang akan memperpendek umpan balik, di mana AI dapat membantu dan siapa yang mengawasinya, otomatisasi apa yang akan menghilangkan pekerjaan manual berulang, dan data apa yang akan menunjukkan apakah perubahan itu berhasil.
7. **Pertahankan manusia sebagai pihak yang bertanggung jawab atas keputusan.** Perangkat lunak dapat merekomendasikan dan bertindak dalam batas tertentu, tetapi orang yang ditunjuk menentukan batasnya dan meninjau apa yang terjadi. Ini berlaku sama untuk skrip maupun sistem AI.
8. **Ukur hasil dan jaga agar ukuran tetap jujur.** Pasangkan setiap ukuran keluaran, seperti jumlah tiket yang ditutup, dengan ukuran hasil atau pengalaman, dan katakan bagaimana masing-masing bisa dimanipulasi. Buku pendamping *Service Management Metrics* memberikan definisinya.
9. **Tuliskan apa yang Anda janjikan.** Perjanjian tidak harus panjang. Satu halaman singkat yang menyatakan ruang lingkup, jam layanan, target, dan kontak mencegah lebih banyak pertengkaran daripada kontrak panjang yang tidak dibaca siapa pun.
10. **Tinjau hubungan layanan, bukan hanya layanannya.** Temui pelanggan secara terjadwal, dengarkan kesulitan mereka, dan beri tahu mereka apa yang Anda ubah karenanya. Hubungan tanpa umpan balik akan memburuk.

## Pertanyaan untuk dibahas bersama tim Anda

**Jika seorang pelanggan menggambarkan layanan kita dalam satu kalimat, apa yang akan mereka katakan, dan apakah kita setuju?**
Pertanyaan ini menguji apakah penyedia dan konsumen berbagi gambaran yang sama tentang layanan. Harapkan jawaban yang menggambarkan komponen atau usaha penyedia, bukan hasil bagi pelanggan. Kumpulkan kalimat-kalimat asli dari pelanggan jika bisa. Lanjutkan dengan menanyakan kata-kata apa dalam kalimat mereka yang tidak pernah kita pakai sendiri.

**Di mana laporan kita menunjukkan hijau padahal pelanggan tidak puas?**
Pertanyaan ini mencari kesenjangan antara keluaran dan hasil. Tim sering menyebut target ketersediaan atau penutupan tiket yang tercapai pada minggu yang buruk. Dengarkan apa yang tidak dimuat laporan. Lanjutkan dengan menanyakan satu ukuran apa yang akan berubah merah.

**Layanan kita yang mana yang tidak memiliki satu pemilik yang bertanggung jawab?**
Kesenjangan kepemilikan umum terjadi di batas antartim, seperti platform bersama atau proses onboarding. Diskusi mungkin memunculkan layanan yang semua orang kira dimiliki orang lain. Targetkan satu orang yang ditunjuk, bukan sebuah komite. Lanjutkan dengan menanyakan siapa yang memutuskan ketika dua tim menginginkan hal yang berlawanan.

**Apa yang harus dilakukan pelanggan sendiri yang belum pernah kita tuliskan?**
Batas biasanya kabur di sisi pelanggan: menyiapkan data, menyetujui permintaan, menjaga data kontak tetap mutakhir. Anda mungkin mendengar bahwa "semua orang tahu". Tanyakan kepada anggota tim yang lebih baru atau kepada pelanggan. Lanjutkan dengan menanyakan kewajiban tak tertulis mana yang menyebabkan perselisihan terakhir kita.

**Dari keempat lensa (agile, AI, otomatisasi, analitik), mana yang paling membantu layanan kita tahun ini, dan berapa biayanya bagi kita?**
Pertanyaan ini memaksa pilihan dan menyebutkan biaya seperti pengawasan, pemeliharaan, atau pekerjaan kualitas data. Tim sering tertarik pada lensa yang paling baru. Mintalah bukti bahwa masalahnya memang ada. Lanjutkan dengan menanyakan apa yang akan kita hentikan untuk memberi ruang.

**Apa yang akan kita lakukan secara berbeda jika orang-orang yang kita layani dapat melihat semua yang kita kerjakan?**
Pertanyaan ini memunculkan pekerjaan tersembunyi, seperti solusi sementara manual, dan menguji apakah tim bangga dengan cara kerjanya. Jawabannya berkisar dari "tidak ada" hingga daftar panjang hal yang memalukan. Perlakukan daftar itu sebagai kandidat perbaikan, bukan bahan menyalahkan. Lanjutkan dengan memilih satu hal untuk dibuat terlihat bulan ini.

## Dalam praktik: contoh manajemen layanan

Sebuah jaringan perpustakaan umum regional menjalankan departemen TI kecil yang mendukung 40 cabang. Staf menggambarkan pekerjaan mereka sebagai "menjaga sistem perpustakaan tetap menyala". Keluhan datang bergelombang, kebanyakan dari kepala cabang, dan laporan bulanan departemen berupa satu halaman angka ketersediaan yang selalu di atas target.

Manajer layanan menjalankan latihan singkat. Ia meminta tiga kepala cabang melengkapi kalimat "Layanan TI membantu saya…". Jawabannya tentang membuka cabang tepat waktu, membantu pengunjung menemukan dan meminjam bahan pustaka, dan menjalankan jam baca anak. Tak satu pun menyebut uptime. Ia mendapati bahwa pada hari cabang buka, staf masuk ke empat sistem, dan login yang lambat pukul 08.55 lebih merugikan daripada gangguan singkat tengah malam.

Tim mengganti nama layanannya dengan kata-kata pelanggan, seperti "Membuka dan menutup cabang" dan "Peminjaman dan pengembalian". Tim menunjuk satu pemilik untuk masing-masing, melaporkan waktu yang dibutuhkan cabang untuk mulai meminjamkan setelah buka, dan menyimpan angka ketersediaan untuk keperluan sendiri. Tim juga menambahkan backlog perbaikan kecil yang ditinjau bersama dua kepala cabang setiap bulan. Dua butir pertamanya adalah perubahan login dan panduan cetak untuk masalah yang berulang.

Yang berubah: percakapan dengan cabang bergeser dari keluhan tentang gangguan menjadi permintaan yang spesifik. Yang masih sulit: angka waktu pembukaan yang baru bergantung pada staf yang mencatatnya, dan sebagian cabang mencatatnya tidak konsisten. Departemen itu juga belum memiliki pemilik yang disepakati untuk sistem pemesanan buku, yang sebagian dimiliki pemasok dan sebagian tim pengadaan. Kesenjangan itu menjadi topik diskusi berikutnya.

## Empat perspektif

### Tim produk dan pengiriman

Anggaplah layanan yang Anda bangun sebagai sesuatu yang akan dipakai orang selama bertahun-tahun. Tanyakan siapa yang akan menjalankannya, bagaimana Anda akan tahu layanan itu berfungsi bagi pelanggan, dan apa yang akan Anda serahkan selain kode. Letakkan hasil yang diinginkan pelanggan di samping backlog agar pertukaran (tradeoff) terlihat.

### Tim layanan dan operasi

Pekerjaan harian Anda adalah layanan sebagaimana dialami pelanggan. Jaga kalimat pelanggan tetap terlihat saat menentukan prioritas, catat apa yang Anda pelajari dari insiden dan permintaan, dan sampaikan apa yang Anda lihat kepada orang-orang yang membangun dan mendanai layanan.

### Kepemimpinan dan tata kelola

Danai layanan, bukan hanya proyek, dan minta pemilik serta hasil untuk masing-masing. Waspadai laporan yang hanya disusun dari keluaran. Sediakan waktu untuk bertemu pelanggan secara langsung setidaknya beberapa kali setahun.

### Pelanggan dan pengguna

Anda adalah bagian dari layanan, bukan hanya penerimanya. Sampaikan hasil yang Anda butuhkan, beri tahu penyedia apa yang tidak berfungsi, dan harapkan mendengar apa yang berubah karenanya. Minta batas layanan secara tertulis jika Anda tidak yakin apa yang tercakup.

## Agile, AI, otomatisasi, dan analitik

### Agile

Terapkan perbaikan berkelanjutan pada layanan itu sendiri: backlog kecil berisi perubahan, ditinjau bersama pelanggan, dan dikirim dalam potongan kecil. Perhatian: jangan memakai kosakata agile untuk melabeli ulang layanan sebagai proyek dengan tenggat; layanan berlanjut, dan perbaikannya tidak pernah selesai.

### AI

Gunakan AI di tempat ia menghemat waktu orang terampil pada pekerjaan membaca dan menulis rutin, seperti meringkas utas tiket yang panjang, dengan pemilik yang ditunjuk dan orang yang meninjau hasilnya. Perhatian: AI membuat kesalahan yang tampak meyakinkan, jadi putuskan sebelumnya bagaimana jawaban yang salah akan diketahui dan diperbaiki. Topik 5.1 — AI dalam manajemen layanan memetakan wilayahnya.

### Otomatisasi

Otomatiskan langkah yang berulang dan sudah dipahami dengan baik, seperti membuat akun atau memulai ulang layanan yang diketahui sering gagal, dan simpan log tentang apa yang dilakukan otomatisasi serta cara membatalkannya. Perhatian: mengotomatiskan proses yang membingungkan membuat kebingungan itu berjalan lebih cepat, jadi sederhanakan dulu. Lihat Topik 6.1 — Strategi otomatisasi.

### Analitik

Kumpulkan data yang menjawab pertanyaan yang dinyatakan, seperti permintaan mana yang paling lama diselesaikan dan mengapa. Perhatian: data dari tiket mencerminkan apa yang dipilih orang untuk dicatat, bukan semua yang terjadi, dan setiap ukuran yang menjadi target mengundang manipulasi. Definisi dan pagar pengaman ada di buku pendamping *Service Management Metrics*, dan Topik 7.1 — Analitik untuk manajemen layanan membahas metodenya.

## Mode kegagalan umum

- **Menghitung usaha, bukan hasil.** Laporan mencantumkan tiket dan jam kerja tetapi bukan apa yang dicapai pelanggan. Tambahkan satu ukuran hasil atau pengalaman untuk setiap layanan.
- **Layanan tanpa pemilik.** Semua orang berkontribusi dan tak seorang pun memutuskan. Tunjuk satu orang yang bertanggung jawab untuk setiap layanan dan umumkan namanya.
- **Nama teknis dalam percakapan dengan pelanggan.** Pelanggan tidak bisa tahu apa yang tercakup. Deskripsikan layanan dengan kata-kata pelanggan dan pisahkan peta teknisnya.
- **Menjadikan kerangka kerja sebagai tujuan.** Tim mengadopsi setiap istilah ITIL tetapi tidak mengubah apa pun yang dirasakan pelanggan. Pilih satu praktik, perbaiki dengan bukti, dan berhenti ketika bukti berhenti.
- **Perangkat lebih dulu.** Sebuah platform dibeli sebelum ada yang mendeskripsikan layanannya. Tulis deskripsi layanan dan tujuan perbaikan lebih dulu, baru pilih perangkat.
- **Menyerahkan penilaian kepada perangkat lunak tanpa pengawasan.** Sistem otomatisasi atau AI bertindak tanpa pemilik yang ditunjuk. Tetapkan pemilik, tetapkan batas, dan tinjau apa yang dilakukannya.

## Model kematangan

| Dimensi | Memulai | Mengembangkan | Menstandardisasi | Mengelola | Mengorkestrasi |
|---|---|---|---|---|---|
| Definisi layanan | Layanan dideskripsikan berdasarkan teknologi | Layanan utama dideskripsikan berdasarkan hasil | Semua layanan memiliki deskripsi dan batas berbasis hasil | Deskripsi ditinjau bersama pelanggan secara berkala | Deskripsi dan batas dibagikan di antara penyedia dan mitra |
| Kepemilikan | Kepemilikan tidak jelas | Pemilik untuk layanan utama | Setiap layanan memiliki pemilik yang ditunjuk | Pemilik meninjau hasil dan biaya secara teratur | Pemilik berkoordinasi lintas pemasok dan tim internal |
| Perbaikan | Perbaikan terjadi karena krisis | Daftar gagasan tersedia | Backlog perbaikan yang ditinjau dengan kapasitas yang disisihkan | Perbaikan diperiksa terhadap bukti | Perbaikan belajar dari pelanggan dan data lintas layanan |
| Penggunaan empat lensa | Digunakan secara ad hoc | Dicoba di satu tim | Dipilih dengan sengaja dengan pemilik dan pengawasan | Dampak diukur dan ditinjau | Digunakan bersama di bawah tata kelola yang sama |

## Daftar periksa

- [ ] Setiap layanan memiliki satu kalimat hasil bagi pelanggan.
- [ ] Setiap layanan memiliki pemilik yang ditunjuk.
- [ ] Deskripsi yang menghadap pelanggan memakai kata-kata pelanggan.
- [ ] Batas layanan, termasuk kewajiban pelanggan, sudah dituliskan.
- [ ] Backlog perbaikan yang ditinjau tersedia, dengan waktu yang disisihkan.
- [ ] Setiap ukuran keluaran dipasangkan dengan ukuran hasil atau pengalaman.
- [ ] Setiap sistem otomatisasi dan AI memiliki pemilik dan cara untuk meninjau apa yang dilakukannya.
- [ ] Kami bertemu pelanggan secara terjadwal dan memberi tahu mereka apa yang berubah.

## Prompt AI

**Ubah nama layanan teknis menjadi hasil bagi pelanggan.**

```text
Here is a list of our technical services: [paste list with one-line descriptions].
For each, propose one sentence beginning "The customer can…" in plain language, and name the kind of customer you are assuming. Do not invent facts about our business; where you cannot tell, write "unknown" and ask a question.
List what you are unsure of at the end.
```

**Temukan kesenjangan kepemilikan dari daftar layanan.**

```text
Below is our service list with any owners we have recorded: [paste list].
Produce a table: service, owner (only if given; otherwise "none recorded"), and one question to ask to find the real owner. Do not guess owners.
Ask clarifying questions first, mark assumptions, and list what you are unsure of.
```

**Siapkan percakapan dengan pelanggan.**

```text
I will meet customers of the service [service name] next week. Customer roles present: [list roles].
Draft eight open questions about what outcome they need, what blocks them, and what they do for themselves. Avoid leading questions and technical jargon. Do not suggest answers.
Finish with three things I should listen for and what you are unsure of.
```

## Skill AI

- [service-catalog](../../../../skills/service-catalog/SKILL.md): gunakan untuk mengubah deskripsi layanan menjadi katalog yang menghadap pelanggan.
- [stakeholder-analysis](../../../../skills/stakeholder-analysis/SKILL.md): gunakan untuk mengidentifikasi pelanggan, pengguna, dan sponsor serta apa yang dibutuhkan masing-masing.
- [maturity-models](../../../../skills/maturity-models/SKILL.md): gunakan untuk menjalankan tabel kematangan sebagai penilaian mandiri tim.

## Sumber utama

- Wikipedia, "Service management": ikhtisar singkat tentang disiplin ini di berbagai industri.
- Wikipedia, "IT service management": bagaimana gagasan ini berlaku untuk TI, beserta kerangka kerja yang menjelaskannya.
- Wikipedia, "Service-dominant logic": teori pemasaran di balik penciptaan nilai bersama, berguna saat menjelaskan mengapa nilai berada pada pelanggan.
- Wikipedia, "ITIL": kerangka kerja yang paling dikenal, termasuk definisi layanan yang dikutip di atas (periksa rumusannya terhadap publikasi terkini pemiliknya; lihat Topik 1.3 — ITIL 5).

## Referensi

1. Service management — Wikipedia — https://en.wikipedia.org/wiki/Service_management
2. IT service management — Wikipedia — https://en.wikipedia.org/wiki/IT_service_management
3. Service (economics) — Wikipedia — https://en.wikipedia.org/wiki/Service_(economics)
4. Service-dominant logic — Wikipedia — https://en.wikipedia.org/wiki/Service-dominant_logic
5. Value creation — Wikipedia — https://en.wikipedia.org/wiki/Value_creation
6. ITIL — Wikipedia — https://en.wikipedia.org/wiki/ITIL
7. Service design — Wikipedia — https://en.wikipedia.org/wiki/Service_design
8. Customer experience — Wikipedia — https://en.wikipedia.org/wiki/Customer_experience
9. Artificial intelligence — Wikipedia — https://en.wikipedia.org/wiki/Artificial_intelligence
