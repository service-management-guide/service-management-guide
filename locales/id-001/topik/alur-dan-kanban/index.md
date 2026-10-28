# Alur dan kanban

**Alur (flow) adalah seberapa lancar pekerjaan bergerak dari permintaan hingga selesai, dan memvisualisasikan pekerjaan, membatasi pekerjaan yang sedang berjalan, serta mengukur berapa lama pekerjaan berlangsung adalah praktik yang memperbaikinya; semuanya cocok untuk tim layanan yang digerakkan interupsi, dan Kanban adalah satu cara bernama untuk menerapkannya.**

## Mengapa ini penting

Tim layanan selalu sibuk. Permintaan, insiden, perubahan, dan perbaikan datang tanpa peringatan, dan orang berpindah di antaranya sepanjang hari. Tim merasa produktif, tetapi pelanggan menunggu lama sampai ada yang selesai, dan tak seorang pun bisa mengatakan mengapa.

Pemikiran alur menjelaskan kesenjangan itu. Pekerjaan yang dimulai tetapi belum selesai berada dalam antrean, dan di sebagian besar tim waktu yang dihabiskan menunggu jauh lebih lama daripada waktu bekerja. Menambah orang atau memulai lebih banyak butir tidak membantu, dan sering memperburuk, karena lebih banyak pekerjaan yang sedang berjalan berarti antrean lebih panjang. Obatnya adalah melihat pekerjaan, membatasi seberapa banyak yang berjalan sekaligus, dan mengukur berapa lama butir-butir itu dari permintaan hingga selesai.

Gagasan-gagasan itu berasal dari manufaktur lean, dan alat yang paling dikenal adalah papan kanban. Banyak tim agile memakai Kanban atau papan yang terinspirasi olehnya. Panduan ini memperlakukan Kanban sebagai satu pilihan di antara beberapa. Jika tim Anda memilih memakai Kanban, gagasan di sini akan membantu; jika tidak, prinsip visibilitas, batas, dan pengukuran alur tetap berlaku.

## Konsep inti

**Alur (flow).** Pergerakan pekerjaan melalui sebuah sistem. Sistem dengan alur yang baik menyampaikan butir-butir secara stabil dan dapat diprediksi, dengan penantian pendek. Alur yang buruk tampak sebagai waktu penyampaian yang panjang dan bervariasi, penumpukan sebelum langkah tertentu, dan seringnya percepatan paksa.

**Pekerjaan yang sedang berjalan (WIP).** Jumlah butir yang sudah dimulai tetapi belum selesai. Artikel Wikipedia tentang work in process menjelaskan gagasan ini dalam manufaktur. Dalam pekerjaan pengetahuan dan layanan, WIP sering tidak terlihat, karena butir-butir berada di kotak masuk, utas obrolan, dan kepala orang. Membuatnya terlihat adalah langkah pertama.

**Hukum Little.** Untuk sistem yang stabil, waktu rata-rata sebuah butir berada dalam sistem sama dengan jumlah rata-rata butir dalam sistem dibagi laju rata-rata keluarnya butir. Jika tim Anda menyelesaikan lima butir seminggu dan memiliki 25 yang sedang berjalan, butir rata-rata memerlukan sekitar lima minggu. Untuk mempersingkat waktu tanpa bekerja lebih cepat, kurangi jumlah yang sedang berjalan.

**Lead time dan cycle time.** Lead time adalah berapa lama pelanggan menunggu dari permintaan hingga penyampaian. Cycle time adalah berapa lama sebuah butir diproses setelah pekerjaan dimulai. Definisi bervariasi antartim, jadi tuliskan definisi Anda. Throughput adalah jumlah butir yang selesai dalam suatu periode.

**Metode kanban.** Kanban berarti "papan tanda" atau "kartu" dalam bahasa Jepang. Toyota Production System, yang dikembangkan bersama Taiichi Ohno, memakai kartu untuk memberi sinyal kapan lebih banyak komponen dibutuhkan, sehingga produksi ditarik oleh permintaan. David J. Anderson menyesuaikan gagasan ini untuk pekerjaan pengetahuan pada 2000-an sebagai metode Kanban, yang dijelaskan Wikipedia. Praktik intinya mencakup memvisualisasikan pekerjaan, membatasi WIP, mengelola alur, membuat kebijakan eksplisit, menerapkan lingkar umpan balik, dan memperbaiki secara kolaboratif.

**Papan.** Papan kanban menunjukkan butir pekerjaan sebagai kartu dalam kolom yang mewakili langkah, seperti "akan dikerjakan", "sedang dikerjakan", "tinjauan", dan "selesai". Papan bisa fisik atau digital. Papan tidak mendefinisikan proses; ia menunjukkan proses yang Anda miliki.

**Batas WIP.** Batas atas jumlah butir yang diizinkan dalam satu langkah atau di papan. Ketika batas tercapai, tim tidak memulai pekerjaan baru; ia membantu menyelesaikan sesuatu. Ini terasa lambat pada awalnya dan membuat penyampaian lebih cepat dan lebih stabil.

**Kelas layanan.** Tidak semua butir harus menunggu dalam antrean yang sama. Tim dapat memperlakukan butir mendesak seperti insiden besar sebagai kelas "expedite" dengan batas ketat, butir bertanggal tetap sebagai kelas lain, dan butir biasa sebagai standar. Kelas membuat pertukaran menjadi eksplisit dan mencegah setiap butir dinyatakan mendesak.

**Hambatan (bottleneck).** Langkah yang membatasi throughput sistem. Teori kendala (theory of constraints), yang dikembangkan Eliyahu Goldratt, menyarankan menemukan hambatan, memastikan ia tidak pernah menganggur, dan memperbaikinya, karena mempercepat yang lain tidak membantu. Batas WIP sering mengungkap hambatan sebagai kolom tempat pekerjaan menumpuk.

**Diagram alur kumulatif.** Bagan yang menunjukkan jumlah butir di setiap keadaan seiring waktu. Pita yang melebar mengungkap antrean yang menumpuk. Ini cara cepat untuk melihat apakah alur stabil.

**Cocok untuk pekerjaan layanan.** Tim layanan menangani aliran pekerjaan yang beragam dengan kedatangan yang tak terduga, yang lebih cocok dengan metode alur daripada siklus perencanaan tetap. Jika tim Anda memilih memakai sprint, ukuran alur tetap membantu melihat apa yang terjadi di dalamnya.

**Bagaimana lensa-lensa cocok.** Praktik agile meminta pengiriman dan perbaikan berkelanjutan; ukuran alur menunjukkan apakah itu terjadi. AI dapat merangkum papan atau menyarankan kategori triase, di bawah tinjauan. Otomatisasi dapat memperbarui kartu dan menegakkan batas. Analitik menyediakan ukurannya, dengan risiko biasa bahwa ukuran itu menjadi target.

## Praktik terbaik

1. **Visualisasikan semua pekerjaan.** Taruh setiap jenis pekerjaan di papan: insiden, permintaan, perubahan, perbaikan, dan interupsi tak terencana. Papan yang hanya menunjukkan pekerjaan "proyek" menyembunyikan bebannya.
2. **Definisikan kolom dari proses yang sebenarnya.** Buat kolom yang sesuai dengan bagaimana pekerjaan benar-benar bergerak, termasuk keadaan menunggu seperti "menunggu pelanggan". Keadaan menunggu adalah tempat keterlambatan bersembunyi.
3. **Tetapkan batas WIP dan hormati.** Mulai dengan batas sedikit di bawah jumlah saat ini, dan sesuaikan setelah mengamati. Ketika kolom penuh, bantu menggerakkan butir maju sebelum memulai sesuatu yang baru.
4. **Buat kebijakan eksplisit.** Tuliskan di papan atau di sampingnya apa arti "siap" dan "selesai", bagaimana butir diprioritaskan, dan siapa yang boleh mempercepat. Aturan tak tertulis menimbulkan perdebatan.
5. **Gunakan kelas layanan secara sengaja.** Definisikan sedikit kelas, dengan batas dan waktu yang diharapkan masing-masing. Tinjau kelas expedite secara berkala: jika selalu penuh, sistem kelebihan beban atau prioritas tidak jelas.
6. **Ukur lead time, cycle time, dan throughput.** Laporkan sebagai distribusi, seperti "85 persen butir selesai dalam 9 hari", bukan hanya rata-rata. Distribusi menunjukkan risiko yang sebenarnya dihadapi pelanggan.
7. **Lihat butir yang tertua.** Tinjau butir yang paling lama berjalan dalam rapat rutin. Butir lama biasanya menandakan ketergantungan yang terblokir atau pemilik yang tidak jelas.
8. **Temukan dan perbaiki hambatan.** Ketika pekerjaan menumpuk di satu tempat, tanyakan apa yang membatasinya, dan perlakukan itu sebagai perbaikan prioritas.
9. **Tinjau papan bersama.** Percakapan singkat dan teratur di papan, berdiri atau tidak, memberi tim pandangan bersama. Fokus pada butir yang terblokir dan menua, bukan pada pelaporan.
10. **Kembangkan papan.** Ubah kolom, batas, dan kebijakan seiring Anda belajar. Jika tim Anda memilih memakai Kanban, perlakukan sebagai titik awal yang Anda sesuaikan.

## Pertanyaan untuk dibahas bersama tim Anda

**Berapa banyak pekerjaan yang sedang kita jalankan saat ini, dan bagaimana kita tahu?**
Tim sering terkejut dengan angkanya setelah menghitung. Minta setiap orang mendaftar apa yang dikerjakannya, termasuk interupsi. Harapkan daftar panjang dan beberapa butir yang tidak diingat siapa pun. Lanjutkan dengan menyepakati batas pertama, meski kasar.

**Di mana pekerjaan menunggu paling lama, dan siapa yang ditunggu?**
Penantian adalah sumber utama keterlambatan. Jawaban khasnya adalah persetujuan, spesialis, pelanggan, atau pemasok. Gunakan contoh nyata dengan tanggal. Lanjutkan dengan memilih satu penantian dan menanyakan siapa yang dapat mempersingkatnya.

**Jenis pekerjaan apa yang tidak boleh menunggu dalam antrean biasa?**
Pertanyaan ini memperkenalkan kelas layanan. Insiden besar dan tenggat hukum adalah jawaban umum, dan orang mungkin menambahkan favorit mereka sendiri. Desak untuk kriteria. Lanjutkan dengan menyepakati daftar pendek dan batas untuk pekerjaan yang dipercepat.

**Apa yang terjadi ketika papan penuh dan permintaan baru tiba?**
Pertanyaan ini menguji disiplin. Tim sering memulai butir baru juga. Tanyakan apa kebijakannya dan siapa yang memutuskan. Lanjutkan dengan menyepakati aturan untuk setiap jenis permintaan.

**Ukuran mana yang akan memberi tahu kita bahwa alur membaik, dan bagaimana ia bisa disalahbaca?**
Pilih satu ukuran, seperti waktu di mana 85 persen butir selesai, dan bahas bagaimana ia bisa dimanipulasi, misalnya dengan memecah butir atau menutup dan membuka kembali. Lanjutkan dengan menyepakati cara memeriksa ukuran itu terhadap kenyataan.

**Di mana otomatisasi atau AI dapat membantu alur tanpa menyembunyikan masalah?**
Pembaruan kartu otomatis dan kategori yang disarankan bisa menghemat waktu. Keduanya juga bisa menyamarkan butir yang macet sebagai "sedang dikerjakan". Tanyakan siapa pemilik setiap aturan otomatis dan bagaimana kesalahan ditemukan. Lanjutkan dengan memilih satu pemakaian berisiko rendah dan tanggal tinjauan.

## Dalam praktik: contoh manajemen layanan

Tim dukungan sistem klinis sebuah rumah sakit menangani sekitar 100 permintaan seminggu: perubahan akun, permintaan laporan, perbaikan kecil, dan gangguan mendesak. Tim beranggotakan tujuh orang memakai kotak masuk email dan perangkat tiket, dan para klinisi mengeluh bahwa permintaan "menghilang".

Ketua tim membangun papan fisik di ruang tim dengan satu kartu untuk setiap butir terbuka, sekitar 70 semuanya. Penghitungan mengungkap bahwa setiap orang rata-rata memiliki sepuluh butir yang sedang berjalan. Ketua menambahkan kolom untuk "menunggu klinisi" dan "menunggu pemasok", yang memuat 25 dari 70 butir. Tim menetapkan batas empat butir berjalan per orang dan dua butir yang dipercepat sekaligus. Mereka menyepakati kebijakan: gangguan mendesak yang memengaruhi perawatan pasien masuk ke jalur expedite dan dikerjakan lebih dulu; semua yang lain masuk lebih dulu, keluar lebih dulu.

Setelah dua bulan, waktu median untuk menyelesaikan permintaan turun dari 12 menjadi 7 hari kerja, dan butir terbuka tertua berumur 20 hari alih-alih 70. Kolom "menunggu klinisi" bertambah, dan tim menyadari bahwa banyak permintaan kekurangan informasi. Tim menambahkan formulir singkat yang menanyakan pertanyaan yang sering terlewat.

Yang berubah: klinisi dapat melihat di mana permintaan berada, dan tim menghabiskan lebih sedikit waktu menjawab email "di mana permintaan saya?". Yang masih sulit: butir yang menunggu pemasok masih memakan waktu berminggu-minggu dan tim tidak dapat mengendalikannya; jalur expedite kadang dipakai untuk permintaan yang sekadar penting bagi orang senior; dan perangkat tiket digital serta papan fisik menyimpang ketika orang lupa memperbarui salah satunya. Tim meninjau kebijakan setiap bulan dan berencana memindahkan papan ke dalam perangkat.

## Empat perspektif

### Tim produk dan pengiriman

Gunakan papan untuk melihat semua pekerjaan, termasuk interupsi operasional, dan batasi pekerjaan yang sedang berjalan agar fitur dan perbaikan selesai. Bagikan ukuran alur dengan operasi untuk menemukan di mana perubahan menunggu.

### Tim layanan dan operasi

Anda adalah pengguna alami metode alur. Buat seluruh aliran terlihat, sepakati kelas layanan, dan gunakan batas agar interupsi tidak menenggelamkan pekerjaan terencana. Bawa bukti keterlambatan kepada orang yang dapat menghilangkannya.

### Kepemimpinan dan tata kelola

Minta ukuran alur sebagai distribusi dan lihat butir yang tertua. Hindari mendorong lebih banyak pekerjaan ke sistem yang penuh. Dukung tim dalam mengubah kebijakan alih-alih menuntut lebih banyak keluaran.

### Pelanggan dan pengguna

Anda seharusnya dapat melihat di mana permintaan Anda berada, berapa lama permintaan semacam itu biasanya, dan apa yang ditunggu tim. Beri tahu tim ketika sesuatu mendesak dan mengapa, karena alasan yang jelas membantu mereka memutuskan.

## Agile, AI, otomatisasi, dan analitik

### Agile

Alur mendukung pengiriman dan perbaikan berkelanjutan dengan mengungkap keterlambatan dan mendorong butir kecil yang selesai. Perhatian: papan bukan sistem perbaikan dengan sendirinya; gunakan untuk memicu tinjauan teratur bersama pemangku kepentingan.

### AI

AI dapat merangkum papan, menyarankan kategori untuk butir baru, dan menandai butir yang menua atau terblokir, dengan seseorang meninjau dan pemilik untuk setiap aturan. Perhatian: pengklasifikasi AI yang menebak salah mengirim pekerjaan ke antrean yang salah; lacak tingkat koreksinya. Lihat Topik 5.1 — AI dalam manajemen layanan.

### Otomatisasi

Otomatiskan pembuatan kartu dari perangkat tiket, perbarui keadaan dari peristiwa, dan beri peringatan ketika batas WIP terlampaui. Simpan log. Perhatian: perubahan keadaan otomatis dapat membuat alur tampak lebih baik daripada kenyataan; ambil sampel butir nyata untuk memeriksa. Lihat Topik 6.2 — Otomatisasi alur kerja dan orkestrasi.

### Analitik

Gunakan distribusi lead time, throughput, penuaan pekerjaan yang sedang berjalan, dan diagram alur kumulatif. Perhatian: semuanya bisa dimanipulasi dengan memecah, menggabung, atau melabeli ulang butir, dan membandingkan tim mengabaikan perbedaan pekerjaan; pakai untuk memahami sistem Anda sendiri. Lihat Topik 7.6 — Analitik proses dan aliran nilai dan buku *Service Management Metrics*.

## Mode kegagalan umum

- **Papan tanpa batas.** Kartu menumpuk dan tidak ada yang berubah. Tetapkan batas dan hormati.
- **Hanya pekerjaan terencana di papan.** Interupsi tidak terlihat, dan beban dinilai terlalu rendah. Tampilkan semua jenis pekerjaan.
- **Semuanya dipercepat.** Jalur cepat tersumbat. Batasi dan tinjau setiap pemakaiannya.
- **Hanya rata-rata.** Rata-rata menyembunyikan keterlambatan panjang. Laporkan distribusi dan butir tertua.
- **Memanipulasi ukuran.** Butir dipecah atau ditutup lebih awal. Periksa ukuran terhadap butir nyata.
- **Memperlakukan Kanban sebagai tujuan.** Tim menyalin papan dan mengabaikan alur. Lihat waktu penyampaian dan penantian.
- **Mengoptimalkan yang bukan hambatan.** Usaha jatuh pada langkah yang salah. Temukan di mana pekerjaan menumpuk.

## Model kematangan

| Dimensi | Memulai | Mengembangkan | Menstandardisasi | Mengelola | Mengorkestrasi |
|---|---|---|---|---|---|
| Visibilitas | Pekerjaan di kotak masuk dan kepala | Papan untuk pekerjaan terencana | Semua pekerjaan terlihat dengan kebijakan eksplisit | Papan dan perangkat konsisten dan tepercaya | Alur terlihat lintas tim dan pemasok |
| Kendali WIP | Tidak ada batas | Batas informal | Batas yang disepakati dan aturan untuk pengecualian | Batas disetel dari data | Batas dikoordinasikan lintas tim yang saling bergantung |
| Ukuran alur | Tidak ada | Hitungan butir | Lead time dan throughput sebagai distribusi | Ukuran dipakai untuk menemukan hambatan | Ukuran dibagikan dan ditindaklanjuti di seluruh sistem |
| Kelas layanan | Satu antrean | Mendesak versus tidak | Kelas terdefinisi dengan batas | Kelas ditinjau dengan bukti | Kelas diselaraskan lintas tim dan perjanjian |

## Daftar periksa

- [ ] Semua jenis pekerjaan, termasuk interupsi, ada di papan.
- [ ] Kolom mencakup keadaan menunggu.
- [ ] Kami memiliki batas WIP dan aturan tentang apa yang dilakukan saat penuh.
- [ ] Kebijakan untuk siap, selesai, prioritas, dan expedite sudah dituliskan.
- [ ] Kami mengukur lead time, cycle time, dan throughput sebagai distribusi.
- [ ] Kami meninjau butir tertua secara teratur.
- [ ] Kami tahu hambatan kami saat ini dan memiliki perbaikan untuknya.
- [ ] Kami memeriksa ukuran terhadap butir nyata untuk melihat manipulasi.

## Prompt AI

**Temukan pola dalam data papan.**

```text
Here is an export of our items with created, started, and finished dates and state changes: [paste data with names removed].
Calculate the median and 85th percentile lead time, list the five oldest open items, and note where items spend the most time. Do not infer causes. Mark any data problems you notice.
List what you are unsure of.
```

**Sarankan kelas layanan.**

```text
Our team handles these kinds of work: [list with typical urgency and volume].
Propose up to four classes of service, a limit for each, and a rule for entry to the fastest class. Explain the trade-offs of each choice and flag assumptions.
List what you are unsure of.
```

**Siapkan tinjauan papan.**

```text
Below is the current state of our board: [paste columns, items, ages, and blockers].
List the five items I should discuss first and why, and three questions to ask about each. Do not assign blame or propose solutions.
List what you are unsure of.
```

## Skill AI

- [kanban](../../../../skills/kanban/SKILL.md): gunakan untuk menyiapkan dan menjalankan papan dengan batas dan kebijakan.
- [workflow-analysis](../../../../skills/workflow-analysis/SKILL.md): gunakan untuk menganalisis penantian dan serah terima.
- [value-stream-map](../../../../skills/value-stream-map/SKILL.md): gunakan untuk menelusuri alur lintas tim.
- [software-engineering-metrics](../../../../skills/software-engineering-metrics/SKILL.md): gunakan untuk mendefinisikan ukuran alur beserta risikonya.

## Sumber utama

- David J. Anderson, *Kanban: Successful Evolutionary Change for Your Technology Business* (2010): sumber metode untuk pekerjaan pengetahuan.
- Taiichi Ohno, *Toyota Production System: Beyond Large-Scale Production* (1988): asal kartu kanban.
- Wikipedia, "Kanban (development)": ikhtisar tentang metodenya.
- Wikipedia, "Little's law": rumus di balik batas WIP.

## Referensi

1. Kanban — Wikipedia — https://en.wikipedia.org/wiki/Kanban
2. Kanban (development) — Wikipedia — https://en.wikipedia.org/wiki/Kanban_(development)
3. Work in process — Wikipedia — https://en.wikipedia.org/wiki/Work_in_process
4. Little's law — Wikipedia — https://en.wikipedia.org/wiki/Little%27s_law
5. Toyota Production System — Wikipedia — https://en.wikipedia.org/wiki/Toyota_Production_System
6. Cumulative flow diagram — Wikipedia — https://en.wikipedia.org/wiki/Cumulative_flow_diagram
7. Theory of constraints — Wikipedia — https://en.wikipedia.org/wiki/Theory_of_constraints
8. Lead time — Wikipedia — https://en.wikipedia.org/wiki/Lead_time
9. Bottleneck (production) — Wikipedia — https://en.wikipedia.org/wiki/Bottleneck_(production)
10. Taiichi Ohno — Wikipedia — https://en.wikipedia.org/wiki/Taiichi_Ohno
