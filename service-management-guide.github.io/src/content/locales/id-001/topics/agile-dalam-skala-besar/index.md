# Agile dalam Skala Besar

**Kerangka kerja penskalaan seperti Scaled Agile Framework (SAFe), Large-Scale Scrum (LeSS), dan Disciplined Agile membantu banyak tim mengerjakan satu produk atau layanan, tetapi menambah struktur dan biaya; kurangi ketergantungan dan jumlah tim lebih dulu, dan adopsi kerangka kerja hanya untuk masalah koordinasi yang tersisa.**

## Mengapa ini penting

Praktik agile pertama kali dijelaskan untuk satu tim kecil yang dapat duduk bersama, merencanakan bersama, dan merilis bersama. Layanan nyata lebih besar. Aplikasi seluler sebuah bank, rekam pasien sebuah rumah sakit, atau platform transportasi sebuah kota membutuhkan puluhan atau ratusan orang, banyak tim, komponen bersama, dan pemasok. Tim-tim itu saling bergantung, dan ketergantungan memperlambat mereka.

Kerangka kerja penskalaan menawarkan cara koordinasi. Mereka mengusulkan peran, acara, dan artefak agar banyak tim dapat merencanakan dan merilis seirama. Sebagian memiliki pengikut besar, program pelatihan, dan skema sertifikasi. Mereka juga menarik kritik: bahwa mereka memperkenalkan kembali perencanaan berat dan hierarki dengan nama agile, bahwa mereka dijual sebagai program untuk organisasi padahal masalah sebenarnya adalah arsitektur atau kepemilikan, dan bahwa mereka menyebarkan kosakata lebih cepat daripada perilaku.

Manajer layanan bertemu kerangka kerja penskalaan dalam praktik, karena tim yang menjalankan layanan adalah yang berkoordinasi dengan tim platform, keamanan, dan pemasok. Topik ini menjelaskan pilihan utama secara netral, menanyakan kapan penskalaan membantu, dan mengatakan apa yang dicoba sebelum Anda mengadopsi kerangka kerja. Ia menjelaskan kerangka kerja menurut uraian pemiliknya sendiri bila memungkinkan; periksa publikasi terkini para pemilik, karena versi berubah.

## Konsep inti

**Masalah penskalaan.** Ketika lebih dari segelintir tim berkontribusi pada satu hasil, tiga hal bertambah: ketergantungan (satu tim menunggu tim lain), usaha koordinasi (perencanaan dan komunikasi), dan risiko keputusan yang tidak konsisten. Hukum Brooks, dari buku Fred Brooks tahun 1975 yang dijelaskan di Wikipedia, mengamati bahwa menambah orang pada proyek yang terlambat cenderung menundanya lebih jauh, karena biaya komunikasi. Penskalaan sebagian besar adalah tentang membatasi biaya itu.

**Hukum Conway.** Pengamatan bahwa desain sistem cenderung mencerminkan struktur komunikasi organisasi yang membangunnya. Jika tim diorganisasi menurut lapisan teknis, sistem akan memiliki batas lapisan, dan setiap fitur akan memerlukan semua tim. Banyak masalah penskalaan adalah masalah struktur; lihat Topik 1.6 — Empat Dimensi Manajemen Layanan.

**SAFe.** Scaled Agile Framework adalah kumpulan pola organisasi dan alur kerja, dari Scaled Agile, Inc., untuk menerapkan agile pada skala perusahaan. Ia mengorganisasi tim ke dalam kelompok yang merencanakan bersama dalam inkremen tetap, dan menawarkan konfigurasi untuk berbagai ukuran, termasuk tingkat portofolio, solusi besar, dan esensial. Ia banyak dipakai di perusahaan besar dan memiliki panduan rinci serta sertifikasi. Para pengkritik menunjuk ukurannya dan siklus perencanaannya.

**LeSS.** Large-Scale Scrum, dibuat oleh Craig Larman dan Bas Vodde, memperluas Scrum ke banyak tim dengan satu backlog produk dan satu pemilik produk. Ia menekankan kesederhanaan dan membuang struktur yang tidak diperlukan, dan menyatakan pandangan bahwa penskalaan seharusnya berarti organisasi yang "lebih sedikit" (less). Ia mengasumsikan tim memakai Scrum. Lihat less.works untuk uraiannya sendiri.

**Disciplined Agile.** Perangkat, awalnya dari Scott Ambler dan Mark Lines, dijelaskan di Wikipedia sebagai Disciplined Agile Delivery, yang menawarkan menu opsi untuk setiap aspek penyampaian dan mendorong tim memilih apa yang cocok dengan konteks mereka. Kini dipelihara oleh Project Management Institute. Nama kerangka kerja itu sendiri memuat kata "delivery" dan dikutip di sini sebagai nama diri.

**Scrum of Scrums.** Pola di mana perwakilan dari setiap tim bertemu secara teratur dengan yang lain untuk berkoordinasi lintas tim. Sederhana dan berhasil untuk jumlah tim yang kecil.

**Pendekatan lain.** Beberapa organisasi mengadopsi model yang terinspirasi dari cara perusahaan tertentu digambarkan. Uraian yang diterbitkan tentang squad, tribe, chapter, dan guild di sebuah perusahaan musik banyak disalin, meski orang yang terlibat telah mengatakan bahwa itu hanyalah potret sebuah eksperimen, bukan kerangka kerja untuk diadopsi. Perlakukan uraian semacam itu sebagai sumber gagasan, bukan resep.

**Team topologies dan kepemilikan.** Pendekatan yang menguraikan sejumlah kecil tipe tim (selaras aliran, platform, pemampu, subsistem rumit) dan mode interaksinya, dengan tujuan mengurangi ketergantungan. Ia cara berpikir tentang struktur, dan melengkapi pilihan kerangka kerja atau dapat menggantikannya di sebagian organisasi.

**Business agility.** Gagasan yang lebih luas bahwa seluruh organisasi, termasuk keuangan, HR, dan tata kelola, perlu menanggapi perubahan, bukan hanya tim penyampaian. Wikipedia menjelaskannya di bawah business agility. Menskalakan tim tanpa mengubah penganggaran atau tata kelola sering gagal.

**Tim layanan dalam skala besar.** Tim operasi, dukungan, dan platform melayani banyak tim produk, dan pekerjaan mereka tidak cocok rapi dalam inkremen perencanaan. Mereka memerlukan antarmuka yang jelas, seperti katalog layanan dan tingkat layanan yang disepakati, serta kapasitas untuk menangani interupsi. Lihat Topik 2.8 — Kepemilikan Produk dan Layanan dan Topik 3.8 — Manajemen Katalog Layanan.

**Bagaimana lensa-lensa cocok.** Penskalaan adalah tentang lensa agile pada ukuran organisasi. AI dapat membantu merangkum ketergantungan dan rencana, di bawah tinjauan. Otomatisasi dapat menunjukkan ketergantungan dalam perangkat dan menjaga rencana tetap konsisten. Analitik dapat menunjukkan di mana pekerjaan menunggu tim lain.

## Praktik terbaik

1. **Kurangi ketergantungan sebelum mengoordinasikannya.** Cari cara membuat tim mandiri: kepemilikan yang lebih jelas, antarmuka yang lebih baik, komponen bersama dengan timnya sendiri, atau menggabungkan tim yang selalu bekerja bersama.
2. **Selaraskan tim dengan aliran nilai.** Organisasikan tim di sekitar layanan atau perjalanan pelanggan, agar sebuah tim dapat menyampaikan perubahan dari gagasan ke produksi. Hindari tim yang hanya memiliki satu lapisan teknis.
3. **Mulai dengan koordinasi terkecil yang berhasil.** Untuk beberapa tim, percakapan teratur dan papan bersama mungkin cukup. Tambahkan struktur hanya ketika masalah menunjukkan bahwa Anda memerlukannya.
4. **Pilih kerangka kerja untuk masalah yang disebutkan.** Tuliskan masalah koordinasi, seperti "lima tim berbagi satu rilis dan hambatan sering terjadi", dan tanyakan kerangka kerja atau praktik mana yang menjawabnya. Jangan mengadopsi kerangka kerja karena populer.
5. **Pertahankan satu backlog dan prioritas yang terlihat untuk hasil bersama.** Banyak tim yang bekerja menurut daftar prioritas berbeda menghasilkan konflik. Sepakati siapa yang memutuskan prioritas lintas tim.
6. **Buat ketergantungan terlihat.** Tunjukkan di papan atau peta tim mana menunggu tim mana. Tinjau yang terbesar dan putuskan apakah akan menghilangkan atau mengelola masing-masing.
7. **Sediakan platform sebagai layanan.** Jika tim platform melayani tim lain, perlakukan tim lain sebagai pelanggan, publikasikan antarmuka, dan ukur apakah mereka terbantu. Lihat Topik 2.5 — DevOps.
8. **Libatkan operasi dan pemasok dalam perencanaan.** Sertakan tim layanan dan pemasok dalam perencanaan lintas tim, agar kebutuhan menjalankan dan mendukung tidak ditemukan saat peluncuran.
9. **Sesuaikan penganggaran dan tata kelola.** Mendanai tim yang stabil dan hasil, serta menjaga tata kelola tetap ringan dan berbasis bukti, mendukung penyampaian berskala lebih baik daripada pendanaan proyek demi proyek.
10. **Tinjau kerangka kerjanya sendiri.** Setelah setahun, tanyakan apakah ia mengurangi penantian dan memperbaiki hasil. Buang atau ubah apa yang tidak membantu.

## Pertanyaan untuk dibahas bersama tim Anda

**Tim mana yang paling sering kita tunggu, dan mengapa?**
Pertanyaan ini menemukan ketergantungan. Orang biasanya menyebut beberapa tim berulang kali. Minta contoh nyata dengan tanggal. Lanjutkan dengan menanyakan apa yang akan membuat ketergantungan itu hilang, seperti memindahkan keterampilan, antarmuka, atau keputusan.

**Masalah apa yang akan diselesaikan kerangka kerja penskalaan bagi kita yang tidak dapat kita selesaikan dengan perubahan yang lebih sederhana?**
Pertanyaan ini menguji apakah kerangka kerja diperlukan. Tim sering menyebut keselarasan secara umum. Desak untuk hal yang spesifik. Lanjutkan dengan memilih perubahan terkecil untuk dicoba lebih dulu.

**Bagaimana tim kita diorganisasi, menurut lapisan, komponen, atau perjalanan, dan apa biayanya bagi kita?**
Struktur membentuk ketergantungan. Tanyakan berapa banyak tim yang menyentuh perubahan yang khas. Harapkan jawaban tiga sampai enam. Lanjutkan dengan membuat sketsa struktur alternatif untuk satu perjalanan.

**Siapa yang memutuskan prioritas ketika pekerjaan dua tim bertentangan?**
Hak keputusan yang tidak jelas membuang waktu. Anda mungkin mendengar bahwa itu tergantung, atau bahwa pemimpin memutuskan terlambat. Minta contoh terakhir. Lanjutkan dengan menyepakati pengambil keputusan dan tenggat untuk setiap jenis konflik.

**Bagaimana model pendanaan kita mendukung atau menghambat tim yang tetap bersama dan memiliki layanan?**
Pendanaan berbasis proyek membubarkan tim dan menghilangkan pengetahuan. Tanyakan berapa lama tim bertahan bersama dan siapa yang mendanai perbaikan. Lanjutkan dengan mendaftar satu layanan yang akan diuntungkan oleh pendanaan yang stabil.

**Bagaimana AI dapat membantu kita melihat dan mengelola ketergantungan, dan apa yang bisa salah?**
AI dapat membaca rencana dan tiket serta menyarankan keterkaitan. Ia juga dapat mengarang ketergantungan atau melewatkan yang nyata. Tanyakan siapa yang memeriksa dan seberapa sering. Lanjutkan dengan membandingkan peta buatan AI dengan peta yang digambar oleh dua tim.

## Dalam praktik: contoh manajemen layanan

Divisi digital sebuah perusahaan kereta api nasional memiliki sebelas tim yang mengerjakan layanan perencana perjalanan: web, seluler, data jadwal, umpan waktu nyata, pembayaran, aksesibilitas, dan lainnya. Rilis mengharuskan kesebelas tim siap, dan keterlambatan di salah satunya menahan sisanya. Direktur divisi telah disarankan mengadopsi kerangka kerja penskalaan besar dengan program pelatihan dan peran baru.

Pemilik layanan meminta dua minggu untuk memetakan ketergantungan lebih dulu. Ia menggambar papan dengan setiap tim dan butir yang mereka tunggu pada kuartal terakhir. Empat tim menyumbang sebagian besar penantian: tim data jadwal menjadi hambatan bagi tiga tim lain; pembayaran bergantung pada siklus rilis pemasok; tinjauan aksesibilitas dilakukan terlambat oleh tim terpisah; dan sistem desain bersama tidak memiliki pemilik. Ia mengusulkan empat perubahan: memindahkan dua insinyur data ke tim yang paling banyak menunggu, menerbitkan data jadwal melalui antarmuka terdokumentasi yang dapat dibaca tim tanpa bertanya, menempatkan spesialis aksesibilitas di tim seluler dan web, dan menyerahkan sistem desain kepada tim yang ditunjuk yang memperlakukan yang lain sebagai pelanggan.

Direktur setuju mencoba ini selama satu kuartal dan mengadakan sesi perencanaan singkat setiap enam minggu lintas tim, dengan satu daftar prioritas yang terlihat untuk hasil bersama. Kerangka kerja ditunda.

Yang berubah: jumlah butir yang menunggu tim lain turun, dan rilis tidak lagi memerlukan kesebelas tim siap. Yang masih sulit: pembayaran masih bergantung pada jadwal pemasok; daftar prioritas bersama diperdebatkan di setiap sesi; dan proses anggaran divisi mendanai proyek, sehingga dua tim akan dibubarkan di akhir tahun. Pemilik layanan memberi tahu direktur bahwa tanpa mengubah pendanaan, perbaikan mungkin tidak bertahan.

## Empat perspektif

### Tim produk dan pengiriman

Cari cara menghilangkan ketergantungan pada tim lain, dan buat yang tersisa terlihat. Ikuti perencanaan lintas tim, dan jaga layanan yang hidup tetap berada di dalam rencana Anda.

### Tim layanan dan operasi

Tawarkan antarmuka yang jelas seperti katalog layanan dan tingkat yang disepakati. Bergabunglah dalam perencanaan agar kebutuhan menjalankan dan mendukung diketahui sejak dini, dan bawa data tentang interupsi dan penantian ke dalam percakapan.

### Kepemimpinan dan tata kelola

Tanyakan masalah koordinasi apa yang akan diselesaikan kerangka kerja dan bagaimana Anda akan tahu ia berhasil. Ubah pendanaan dan tata kelola agar sesuai dengan tim yang stabil dan berorientasi hasil. Tentukan siapa yang memutuskan prioritas lintas tim.

### Pelanggan dan pengguna

Anda seharusnya mengalami layanan yang berubah secara koheren, bukan serangkaian rilis yang terputus. Beri tahu penyedia di mana fitur atau pengalaman terasa tidak konsisten, karena itu sering mengungkap masalah koordinasi.

## Agile, AI, otomatisasi, dan analitik

### Agile

Jaga pemangku kepentingan tetap terlibat lintas tim, sampaikan dalam potongan kecil, dan perbaiki cara tim berkoordinasi. Perhatian: acara perencanaan berskala dapat menjadi batch besar yang menyamar; jaga agar singkat dan rilis tetap kecil.

### AI

AI dapat merangkum backlog lintas tim, mengusulkan keterkaitan ketergantungan, dan menyusun catatan perencanaan, di bawah tinjauan manusia. Tunjuk pemilik untuk setiap pemakaian. Perhatian: ringkasan rencana oleh AI dapat meratakan ketidaksepakatan; biarkan manusia yang membuat pertukaran. Lihat Topik 5.1 — AI dalam manajemen layanan.

### Otomatisasi

Otomatiskan pelacakan ketergantungan dalam perangkat Anda, pipeline bersama, dan lingkungan yang konsisten, agar koordinasi tidak terlalu bergantung pada rapat. Perhatian: perangkat yang menegakkan rencana kaku dapat membatalkan fleksibilitas; jadikan ia penunjang percakapan. Lihat Topik 6.4 — Pipeline dan perubahan otomatis.

### Analitik

Ukur waktu penantian antartim, jumlah ketergantungan lintas tim per butir, dan waktu dari gagasan ke rilis untuk hasil bersama. Perhatian: membandingkan tim pada ukuran ini mengabaikan konteks dan mengundang manipulasi; pakai untuk menemukan masalah struktural. Lihat Topik 7.6 — Analitik proses dan aliran nilai dan buku *Service Management Metrics*.

## Mode kegagalan umum

- **Kerangka kerja lebih dulu.** Program besar dimulai sebelum masalahnya disebutkan. Petakan ketergantungan dan cobalah perubahan sederhana.
- **Tim diorganisasi menurut lapisan.** Setiap perubahan membutuhkan setiap tim. Organisasikan di sekitar perjalanan.
- **Rapat koordinasi berlipat ganda.** Orang menghabiskan minggunya dalam perencanaan. Kurangi ketergantungan dan jumlah acara.
- **Prioritas lintas tim tidak jelas.** Tim tertarik ke arah berbeda. Tunjuk pengambil keputusan.
- **Pendanaan tidak berubah.** Pendanaan proyek memecah tim. Danai tim yang stabil dan hasil.
- **Menyalin model perusahaan lain.** Konteksnya berbeda. Perlakukan sebagai gagasan, bukan resep.
- **Platform sebagai mandat.** Tim menghindarinya. Perlakukan tim lain sebagai pelanggan.

## Model kematangan

| Dimensi | Memulai | Mengembangkan | Menstandardisasi | Mengelola | Mengorkestrasi |
|---|---|---|---|---|---|
| Ketergantungan | Tidak diketahui | Ketergantungan utama diketahui | Ketergantungan terlihat dan dimiliki | Ketergantungan dikurangi berdasarkan bukti | Tim sebagian besar mandiri dengan antarmuka yang jelas |
| Struktur | Tim menurut lapisan | Beberapa tim selaras perjalanan | Tim selaras dengan aliran nilai | Struktur ditinjau terhadap hasil | Struktur beradaptasi lintas layanan dan mitra |
| Koordinasi | Ad hoc | Percakapan teratur | Perencanaan lintas tim yang ringan dan teratur | Biaya koordinasi diukur | Koordinasi didukung perangkat dan antarmuka bersama |
| Pendanaan dan tata kelola | Pendanaan proyek | Beberapa tim stabil | Tim stabil dan tata kelola berorientasi hasil | Pendanaan ditinjau terhadap hasil | Pendanaan dan tata kelola beradaptasi di seluruh portofolio |

## Daftar periksa

- [ ] Kami memetakan ketergantungan antartim dengan contoh nyata.
- [ ] Kami mencoba mengurangi ketergantungan sebelum mengadopsi kerangka kerja.
- [ ] Tim diselaraskan dengan perjalanan atau layanan bila memungkinkan.
- [ ] Ada satu pengambil keputusan yang ditunjuk untuk prioritas lintas tim.
- [ ] Tim platform dan layanan menerbitkan antarmuka dan memperlakukan tim lain sebagai pelanggan.
- [ ] Perencanaan lintas tim singkat dan mencakup operasi dan pemasok.
- [ ] Pendanaan mendukung tim yang stabil.
- [ ] Kami meninjau kerangka kerja terpilih terhadap hasil setiap tahun.

## Prompt AI

**Susun draf peta ketergantungan dari catatan.**

```text
Here are notes on what each team waited for in the last quarter: [paste notes].
List each dependency as "team A waits for team B for X", count how often each appears, and list the five most frequent. Do not infer reasons.
List what you are unsure of.
```

**Bandingkan opsi struktur.**

```text
Our service involves these teams and what each owns: [paste]. A typical change needs: [describe].
Describe two alternative ways to organize the teams around the journey, with the trade-offs of each. Mark assumptions. Do not recommend a framework.
List what you are unsure of.
```

**Siapkan agenda perencanaan lintas tim.**

```text
We have [number] teams planning together for [period]. The shared outcome is: [describe]. The top dependencies are: [list].
Draft a 90-minute agenda that focuses on dependencies and priorities, with time for each, and questions to ask. Keep it short and avoid framework jargon.
List what you are unsure of.
```

## Skill AI

- [scaled-agile-framework](../../../../skills/scaled-agile-framework/SKILL.md): gunakan untuk memahami peran dan acara SAFe sebelum memutuskan apakah cocok.
- [large-scale-scrum](../../../../skills/large-scale-scrum/SKILL.md): gunakan untuk memahami LeSS dan asumsinya.
- [disciplined-agile](../../../../skills/disciplined-agile/SKILL.md): gunakan untuk melihat opsi yang ditawarkan Disciplined Agile untuk suatu konteks.
- [scrum-of-scrums](../../../../skills/scrum-of-scrums/SKILL.md): gunakan untuk pola koordinasi lintas tim yang ringan.

## Sumber utama

- Craig Larman dan Bas Vodde, LeSS (less.works): uraian pemilik tentang Large-Scale Scrum.
- Scaled Agile, Inc., SAFe (scaledagileframework.com): situs milik kerangka kerja itu sendiri.
- Matthew Skelton dan Manuel Pais, *Team Topologies* (2019): cara berpikir tentang struktur dan interaksi tim.
- Wikipedia, "Scaled agile framework" dan "Conway's law": latar belakang netral.

## Referensi

1. Scaled agile framework — Wikipedia — https://en.wikipedia.org/wiki/Scaled_agile_framework
2. Disciplined agile delivery — Wikipedia — https://en.wikipedia.org/wiki/Disciplined_agile_delivery
3. Scrum (project management) — Wikipedia — https://en.wikipedia.org/wiki/Scrum_(project_management)
4. Conway's law — Wikipedia — https://en.wikipedia.org/wiki/Conway%27s_law
5. Brooks's law — Wikipedia — https://en.wikipedia.org/wiki/Brooks%27s_law
6. Business agility — Wikipedia — https://en.wikipedia.org/wiki/Business_agility
7. Matrix management — Wikipedia — https://en.wikipedia.org/wiki/Matrix_management
8. Portfolio management — Wikipedia — https://en.wikipedia.org/wiki/Portfolio_management
9. Large-Scale Scrum (LeSS) — Larman and Vodde — https://less.works
10. Scaled Agile Framework — Scaled Agile, Inc. — https://scaledagileframework.com
