# Manajemen keuangan dan FinOps

**Manajemen keuangan untuk layanan membuat biaya dari apa yang Anda jalankan terlihat dan mengaitkannya dengan nilai yang disampaikan; FinOps menerapkan disiplin itu pada pengeluaran cloud dan AI, di mana biaya mengikuti keputusan rekayasa jam demi jam, dengan menempatkan insinyur, keuangan, dan pemilik produk dalam percakapan yang sama.**

## Mengapa ini penting

Biaya teknologi dulu berupa beberapa keputusan besar dan lambat: membeli server, menandatangani lisensi, membangun pusat data. Keuangan dapat merencanakannya setahun sekali. Layanan cloud dan langganan mengubah itu. Insinyur mana pun dapat membuat sumber daya yang memakan biaya setiap jam, dan tagihan tiba sebulan kemudian, diagregasi sehingga tak seorang pun dapat mengatakan apa yang menyebabkannya. Biaya naik perlahan lalu melonjak, dan tanda pertama adalah kejutan pada faktur.

AI membuatnya lebih tajam. Satu prompt berbiaya sepersekian sen, dan fitur yang dipakai sejuta orang berbiaya banyak. Melatih model atau menjalankan beban kerja besar pada perangkat keras khusus dapat berbiaya sebanyak anggaran satu tim sebulan dalam sehari. Berbeda dengan server, yang bisa Anda lihat di rak, biaya berbasis pemakaian tidak terlihat sampai menjadi besar.

Manajemen keuangan dalam manajemen layanan sudah ada sebelum cloud. ITIL menjelaskannya sebagai memahami dan mengelola biaya layanan, termasuk penganggaran, akuntansi, dan penagihan. FinOps adalah praktik yang lebih baru, dinamai oleh komunitas praktisi, yang membawa akuntabilitas keuangan pada pengeluaran cloud melalui kolaborasi antara tim rekayasa, keuangan, dan bisnis. Topik ini menjelaskan keduanya dan bagaimana mereka saling melengkapi. Ia terhubung dengan manajemen aset (Topik 4.1 — Manajemen aset), manajemen tingkat layanan (Topik 3.7 — Manajemen Tingkat Layanan), dan ekonomi otomatisasi dan AI (Topik 6.1 — Strategi otomatisasi dan Topik 5.8 — Model operasi dan keterampilan AI). Ia tidak memberikan nasihat akuntansi atau pajak.

## Konsep inti

**Penghitungan biaya layanan.** Menghitung berapa biaya menyampaikan suatu layanan: orang, infrastruktur, lisensi, pemasok, dan biaya overhead. Wikipedia menjelaskan cost accounting, praktik yang lebih luas untuk mencatat dan menganalisis biaya. Biaya bersifat langsung (milik satu layanan) atau bersama (untuk dialokasikan). Tujuannya adalah perkiraan yang dapat dipakai, bukan yang sempurna.

**Alokasi biaya.** Menetapkan biaya bersama ke layanan, tim, atau produk menurut aturan, seperti jumlah personel, pemakaian, atau kapasitas. Wikipedia menjelaskan cost allocation dan activity-based costing, yang mengalokasikan biaya menurut aktivitas yang menggerakkannya. Aturan harus dapat dipahami dan sulit dibantah; aturan yang sempurna tidak layak diperdebatkan lama.

**Showback dan chargeback.** Showback melaporkan biaya kepada konsumen tanpa menagih mereka; chargeback menagih. Wikipedia menjelaskan IT chargeback dan showback. Showback membangun kesadaran dengan gesekan lebih sedikit. Chargeback menciptakan insentif yang lebih kuat dan lebih banyak administrasi, dan dapat memunculkan perdebatan tentang alokasi. Banyak organisasi mulai dengan showback.

**Penganggaran dan peramalan.** Anggaran adalah rencana pengeluaran yang diharapkan; perkiraan adalah estimasi terbaru tentang di mana pengeluaran akan mendarat. Wikipedia menjelaskan budget dan forecasting. Untuk pengeluaran cloud dan AI yang bervariasi, perkiraan yang sering dan peringatan lebih penting daripada angka tahunan. Lihat Topik 2.10 — Manajemen agile dan pembelajaran tentang mendanai tim yang stabil.

**Belanja modal dan operasional.** Akuntansi membedakan belanja modal (capital expenditure), yang membeli aset yang diharapkan bertahan, dari beban operasional (operating expense), yaitu biaya sehari-hari. Wikipedia menjelaskan keduanya. Cloud menggeser pengeluaran dari modal ke operasional, yang memengaruhi anggaran dan pelaporan; tanyakan kepada keuangan bagaimana organisasi Anda memperlakukannya.

**Total cost of ownership.** Biaya sepanjang seluruh masa hidup aset atau layanan, termasuk pembelian, operasi, dukungan, dan pelepasan. Wikipedia menjelaskan total cost of ownership. Ia mencegah memilih pembelian termurah dan masa hidup termahal.

**Imbal hasil dan nilai.** Biaya penting dalam kaitannya dengan nilai. Return on investment (ROI), net present value, dan ukuran serupa membandingkan manfaat dengan biaya dari waktu ke waktu. Wikipedia menjelaskan return on investment dan net present value. Berhati-hatilah dengan manfaat yang sulit diukur; nyatakan asumsi dan rentang.

**Biaya peluang dan biaya hangus.** Biaya peluang (opportunity cost) adalah nilai alternatif terbaik yang dilepaskan. Biaya hangus (sunk cost) adalah pengeluaran yang tidak dapat dipulihkan; ia tidak boleh menggerakkan keputusan di masa depan, meski sering melakukannya. Wikipedia menjelaskan keduanya.

**FinOps.** Praktik, dan komunitas, yang bertujuan membawa akuntabilitas keuangan pada pengeluaran cloud yang bervariasi. Wikipedia tidak memiliki artikel terpisah dengan nama itu pada saat penulisan; FinOps Foundation (finops.org), bagian dari Linux Foundation, menerbitkan kerangka kerja dan definisi. Gagasan intinya adalah bahwa tim memiliki pemakaian dan biayanya, bahwa keputusan digerakkan oleh nilai bisnis teknologi, bahwa data tepat waktu dan dapat diakses, dan bahwa kelompok pusat memampukan alih-alih mengawasi.

**Siklus FinOps.** Uraian yang umum memiliki tiga fase berulang: informasikan (buat biaya terlihat dan teralokasi), optimalkan (temukan dan tindaklanjuti penghematan), dan operasikan (tanamkan praktik dalam cara tim bekerja). Periksa kerangka kerja terkini Foundation untuk rinciannya.

**Tagging dan alokasi di cloud.** Data biaya hanya berguna jika sumber daya diberi label pemilik, layanan, dan lingkungan. Tanpa tag, tagihan tidak dapat dialokasikan. Tegakkan tagging saat pembuatan. Lihat Topik 4.4 — Manajemen Konfigurasi.

**Pengungkit optimisasi.** Yang umum mencakup menyesuaikan ukuran sumber daya (right-sizing), mematikan yang menganggur, memakai diskon komitmen untuk beban kerja yang stabil, memilih tingkat penyimpanan yang lebih murah, dan perubahan arsitektur. Penghematan bergantung pada pertukaran dengan keandalan dan usaha. Timbang masing-masing terhadap tingkat layanan yang didukungnya. Lihat Topik 3.11 — Ketersediaan, Kapasitas, dan Kinerja.

**Biaya satuan.** Biaya per transaksi, per pengguna, atau per permintaan mengaitkan pengeluaran dengan nilai. Jika total biaya naik tetapi biaya per transaksi turun, pertumbuhan mungkin menjelaskannya. Jika biaya per transaksi naik, ada yang salah. Ukuran satuan membantu dalam diskusi dengan keuangan dan pemilik produk.

**Biaya AI.** Beban kerja AI menambah biaya untuk pelatihan, hosting, dan pemakaian, sering dihargai per token (satuan teks yang diproses), per waktu komputasi pada perangkat keras khusus seperti graphics processing unit, atau per panggilan. Wikipedia menjelaskan graphics processing unit dan machine learning. Pemakaian energi juga biaya dan kekhawatiran keberlanjutan. Lacak biaya per kasus penggunaan dan per hasil. Lihat Topik 5.8 — Model operasi dan keterampilan AI.

**Utang teknis sebagai gagasan keuangan.** Pemeliharaan yang ditunda adalah kewajiban dengan bunga yang dibayar dalam pekerjaan yang lebih lambat dan lebih banyak insiden. Wikipedia menjelaskan technical debt. Menunjukkan biayanya dalam uang dan waktu membantunya bersaing mendapatkan dana.

**Bagaimana lensa-lensa cocok.** Manajemen keuangan mendukung pendanaan agile atas tim yang stabil. AI dapat membantu menganalisis tagihan dan meramalkan, di bawah tinjauan, dan itu sendiri merupakan biaya untuk dikelola. Otomatisasi mematikan sumber daya yang menganggur dan menegakkan tag. Analitik menyediakan data biaya dan nilai.

## Praktik terbaik

1. **Buat biaya terlihat oleh orang yang memutuskan.** Tunjukkan kepada setiap tim biaya dari apa yang dijalankannya, hampir waktu nyata, dengan alokasi yang mereka percayai. Visibilitas mengubah perilaku lebih daripada kebijakan.
2. **Beri tag saat pembuatan dan tegakkan.** Wajibkan tag pemilik, layanan, dan lingkungan dalam pipeline. Laporkan pengeluaran tanpa tag dan kejar.
3. **Mulai dengan showback.** Bagikan biaya dan biarkan tim bereaksi sebelum memperkenalkan tagihan. Beralih ke chargeback hanya jika manfaatnya membenarkan usaha dan perdebatannya.
4. **Alokasikan dengan aturan sederhana yang disepakati.** Pilih aturan yang dipahami orang, dokumentasikan, dan tinjau setiap tahun. Jangan menghabiskan berbulan-bulan untuk kesempurnaan.
5. **Perkirakan sering dan beri peringatan atas perubahan.** Untuk pengeluaran variabel, perbarui perkiraan setiap bulan atau minggu, dan tetapkan peringatan anggaran. Selidiki kejutan dengan cepat.
6. **Tindaklanjuti penghematan yang jelas.** Buang sumber daya yang menganggur, sesuaikan ukuran, dan pindah ke tingkat yang lebih murah di mana tingkat layanan mengizinkan. Catat setiap penghematan dan pertukarannya.
7. **Berkomitmen di mana beban kerja stabil.** Untuk pemakaian yang stabil, pertimbangkan diskon komitmen setelah analisis, dan tinjau. Hindari berkomitmen untuk beban kerja yang tidak pasti.
8. **Pakai biaya satuan.** Laporkan biaya per transaksi, pengguna, atau hasil di samping total. Bahas perubahannya dengan pemilik produk.
9. **Sertakan pemakaian AI.** Ukur biaya per kasus penggunaan AI, termasuk pemakaian, hosting, dan dukungan. Tetapkan batas dan peringatan, dan tinjau apakah setiap pemakaian layak biayanya.
10. **Timbang biaya terhadap nilai dan risiko.** Jangan memotong apa yang melindungi keandalan, keamanan, atau pengalaman pengguna tanpa pilihan yang disadari. Tunjukkan pertukarannya kepada pemilik.

## Pertanyaan untuk dibahas bersama tim Anda

**Berapa biaya menjalankan layanan terpenting kita, dan seberapa yakin kita?**
Minta angka dan metodenya. Harapkan angka kasar dan bagian yang hilang. Lanjutkan dengan memilih satu layanan dan menyusun estimasi yang lebih baik.

**Biaya cloud kita yang mana yang tidak dapat kita atribusikan ke tim atau layanan?**
Lihat pengeluaran tanpa tag. Harapkan porsi yang signifikan. Lanjutkan dengan menetapkan butir terbesar dan menegakkan tag untuk yang baru.

**Apa yang terakhir kali kita belanjakan yang tidak akan kita pilih lagi, dan mengapa kita tidak menyadarinya?**
Pertanyaan ini menemukan celah visibilitas. Harapkan sumber daya menganggur dan langganan terlupakan. Lanjutkan dengan menyepakati peringatan dan tinjauan bulanan.

**Bagaimana kita memutuskan apakah penghematan sepadan dengan risiko bagi layanan?**
Minta contoh terakhir. Harapkan bahwa tak seorang pun menimbangnya secara eksplisit. Lanjutkan dengan menyepakati siapa yang memutuskan, dan informasi apa yang mereka butuhkan.

**Berapa biaya pemakaian AI kita per kasus penggunaan, dan siapa pemilik angkanya?**
Minta rincian tagihan. Harapkan angka yang diagregasi atau tidak diketahui. Lanjutkan dengan menetapkan pemilik biaya untuk setiap pemakaian AI utama dan menetapkan batas.

**Bagaimana keuangan, rekayasa, dan pemilik produk berbicara tentang biaya hari ini, dan apa yang dapat memperbaikinya?**
Gambarkan rapat-rapatnya. Harapkan bahwa mereka terjadi secara terpisah. Lanjutkan dengan mengatur tinjauan bersama bulanan singkat atas biaya teratas.

## Dalam praktik: contoh manajemen layanan

Platform streaming sebuah lembaga penyiaran nasional berjalan di cloud publik dan berbiaya beberapa kali lipat dari yang direncanakan. Tim keuangan menerima satu faktur bulanan dan meminta rekayasa "menguranginya 15 persen". Insinyur mengatakan lalu lintas tumbuh dan bahwa memotong pengeluaran akan membahayakan layanan selama acara langsung.

Pemimpin platform meminta waktu sebulan untuk membangun visibilitas. Ia menegakkan tag melalui aturan pipeline, dan untuk sumber daya yang ada menetapkan pemilik dengan bantuan setiap tim. Pengeluaran tanpa tag turun dari 38 persen menjadi 7 persen. Dengan alokasi di tempat, ia membuat laporan showback menurut tim dan layanan, ditambah biaya per jam yang di-streaming. Laporan menunjukkan bahwa total biaya naik 30 persen dalam setahun, sementara biaya per jam streaming turun sedikit: pertumbuhan, bukan pemborosan, menjelaskan sebagian besarnya. Laporan juga menunjukkan bahwa lingkungan pengembangan dan uji, yang berjalan sepanjang malam dan akhir pekan, menyumbang 18 persen pengeluaran.

Tim menjadwalkan lingkungan non-produksi untuk mati di luar jam kerja, menghemat sekitar dua pertiga biayanya, dan menyesuaikan ukuran sekumpulan basis data yang terlalu besar. Tim menghindari menyentuh kapasitas acara langsung. Untuk beban kerja dasar yang stabil, tim membeli diskon komitmen setelah analisis pemakaian tiga bulan. Fitur subtitel berbantuan AI yang baru dilacak secara terpisah: biayanya per jam video lebih tinggi dari yang diharapkan, dan pemilik produk memutuskan menerapkannya lebih dulu hanya pada berita langsung.

Yang berubah: keuangan dan rekayasa membahas biaya per jam streaming, dan targetnya menjadi biaya satuan, bukan pemotongan rata. Yang masih sulit: data biaya tiba dengan keterlambatan, sehingga deployment yang buruk bisa berjalan berhari-hari sebelum terlihat; alokasi biaya platform bersama diperdebatkan dua tim; dan komitmen mengurangi fleksibilitas jika arsitektur berubah. Pemimpin menjadwalkan tinjauan triwulanan atas komitmen dan catatan singkat tentang cara biaya bersama dialokasikan.

## Empat perspektif

### Tim produk dan pengiriman

Ketahui berapa biaya produk Anda, beri tag pada apa yang Anda buat, dan sertakan biaya dalam pilihan desain. Amati biaya per transaksi, dan beri tahu pemilik ketika fitur mengubahnya.

### Tim layanan dan operasi

Buang sumber daya menganggur, sesuaikan ukuran dengan memperhatikan keandalan, dan beri peringatan atas lonjakan biaya. Bawa data operasional ke percakapan dengan keuangan.

### Kepemimpinan dan tata kelola

Minta biaya satuan dan nilai, bukan hanya total. Putuskan seberapa banyak yang dipusatkan. Danai pekerjaan visibilitas dan tagging, dan dukung pertukaran terhadap keandalan secara eksplisit.

### Pelanggan dan pengguna

Jika Anda ditagih, Anda seharusnya melihat apa yang menggerakkan biaya dan pilihan apa yang Anda miliki. Minta dasar alokasi apa pun, dan katakan tingkat layanan mana yang Anda hargai.

## Agile, AI, otomatisasi, dan analitik

### Agile

Danai tim yang stabil, tinjau biaya bersama pemilik produk secara berkala, dan perlakukan biaya sebagai satu masukan untuk prioritisasi. Perhatian: jangan menjadikan pemotongan biaya sebagai satu-satunya target; tim akan memotong yang mudah, seperti pengujian dan ketahanan.

### AI

AI dapat menganalisis tagihan, menemukan anomali dan sumber daya menganggur, dan meramalkan pengeluaran, di bawah tinjauan. Beban kerja AI membutuhkan pelacakan biaya, pemilik, dan batas sendiri. Perhatian: asisten AI yang merekomendasikan penghematan mungkin mengabaikan keandalan atau kendala kontraktual; periksa setiap rekomendasi. Lihat Topik 5.8 — Model operasi dan keterampilan AI.

### Otomatisasi

Otomatiskan penegakan tag, pematian sumber daya menganggur, peringatan anggaran, dan laporan, dengan pengecualian dan log. Perhatian: pematian otomatis dapat menghapus atau menghentikan sesuatu yang dibutuhkan; pakai jadwal dan konfirmasi pemilik untuk sumber daya penting. Lihat Topik 6.1 — Strategi otomatisasi.

### Analitik

Pakai biaya teralokasi, biaya satuan, akurasi perkiraan, persentase tanpa tag, dan pemakaian komitmen. Perhatian: angka showback bergantung pada aturan alokasi, dan penghematan optimisasi sering dilebih-lebihkan; bandingkan dengan faktur aktual. Lihat Topik 7.3 — Pengukuran dan pelaporan dan buku *Service Management Metrics*.

## Mode kegagalan umum

- **Satu faktur gumpalan.** Tak seorang pun memiliki biaya. Beri tag, alokasikan, dan laporkan menurut tim.
- **Pemotongan biaya sebagai target.** Keandalan menderita. Pasangkan biaya dengan tingkat layanan dan nilai.
- **Perebutan alokasi.** Tim memperdebatkan aturan. Pilih aturan sederhana dan tinjau setiap tahun.
- **Perkiraan setahun sekali.** Pengeluaran variabel mengejutkan. Perkirakan sering dan beri peringatan.
- **Berkomitmen terlalu dini.** Diskon mengunci kapasitas yang salah. Analisis pemakaian lebih dulu.
- **Mengabaikan biaya AI.** Pemakaian tumbuh tanpa terlihat. Lacak per kasus penggunaan dan tetapkan batas.
- **Tidak ada kaitan dengan nilai.** Pengeluaran dipotong atau ditambah tanpa alasan. Pakai biaya satuan dan hasil.

## Model kematangan

| Dimensi | Memulai | Mengembangkan | Menstandardisasi | Mengelola | Mengorkestrasi |
|---|---|---|---|---|---|
| Visibilitas | Faktur total | Biaya menurut akun | Biaya teralokasi menurut tim dan layanan dengan tag | Biaya hampir waktu nyata dengan peringatan anomali | Biaya dan nilai terlihat lintas penyedia dan pemasok |
| Alokasi | Tidak ada | Kasar | Aturan sederhana yang terdokumentasi | Aturan ditinjau bersama pemilik | Alokasi terintegrasi dengan perencanaan dan pendanaan |
| Optimisasi | Ad hoc | Sebagian penghematan ditemukan | Siklus optimisasi teratur | Penghematan dilacak terhadap biaya aktual | Optimisasi diotomatiskan dengan pengawasan |
| Kaitan dengan nilai | Tidak terkait | Total dibahas | Biaya satuan dilaporkan | Biaya satuan dan hasil ditinjau bersama pemilik | Biaya, risiko, dan nilai dioptimalkan bersama |

## Daftar periksa

- [ ] Kami memberi tag pada sumber daya dengan pemilik, layanan, dan lingkungan saat pembuatan.
- [ ] Tim melihat biaya dari apa yang mereka jalankan.
- [ ] Aturan alokasi dituliskan dan disepakati.
- [ ] Perkiraan diperbarui setidaknya setiap bulan, dengan peringatan anggaran.
- [ ] Kami meninjau sumber daya menganggur dan terlalu besar secara berkala.
- [ ] Kami melaporkan biaya satuan di samping total.
- [ ] Pemakaian dan biaya AI dilacak per kasus penggunaan, dengan batas.
- [ ] Penghematan ditimbang terhadap keandalan dan dicatat.

## Prompt AI

**Temukan anomali dalam laporan biaya.**

```text
Here is a monthly cost report by service and team for the last six months: [paste data].
List changes of more than [percentage] between months, the services involved, and one question per change to ask the owner. Do not explain causes that are not in the data.
List what you are unsure of.
```

**Susun draf ringkasan showback untuk sebuah tim.**

```text
Team: [name]. Here are their costs and usage for the month: [paste]. Prior month: [paste].
Write a one-page summary in plain language: total, change, top three cost drivers, unit cost if given, and two questions for the team. Do not recommend cuts.
List what you are unsure of.
```

**Perkirakan biaya kasus penggunaan AI.**

```text
The use case: [describe]. Expected usage: [number of requests per day, average size]. Pricing we have been given: [paste].
Calculate a monthly cost range with low, expected, and high usage, showing each step and assumption. State what costs the figures leave out. Do not invent prices.
List what you are unsure of.
```

## Skill AI

- [budget-forecasting](../../../../skills/budget-forecasting/SKILL.md): gunakan untuk menyusun dan memperbarui perkiraan dengan asumsi yang dinyatakan.
- [roi-analysis](../../../../skills/roi-analysis/SKILL.md): gunakan untuk membandingkan biaya dan manfaat.
- [portfolio-management](../../../../skills/portfolio-management/SKILL.md): gunakan untuk meninjau pengeluaran lintas produk dan layanan.
- [vendor-management](../../../../skills/vendor-management/SKILL.md): gunakan untuk mengelola komitmen dan perpanjangan.

## Sumber utama

- FinOps Foundation (finops.org): kerangka kerja, definisi, dan materi kasus komunitas untuk manajemen keuangan cloud.
- J.R. Storment dan Mike Fuller, *Cloud FinOps* (edisi ke-2, 2023): panduan praktisi untuk praktik ini.
- PeopleCert, halaman sertifikasi ITIL: uraian pemilik tentang praktik manajemen keuangan.
- Wikipedia, "Cost accounting" dan "IT chargeback and showback": ikhtisar gagasan akuntansi.

## Referensi

1. Cost accounting — Wikipedia — https://en.wikipedia.org/wiki/Cost_accounting
2. IT chargeback and showback — Wikipedia — https://en.wikipedia.org/wiki/IT_chargeback_and_showback
3. Cost allocation — Wikipedia — https://en.wikipedia.org/wiki/Cost_allocation
4. Activity-based costing — Wikipedia — https://en.wikipedia.org/wiki/Activity-based_costing
5. Total cost of ownership — Wikipedia — https://en.wikipedia.org/wiki/Total_cost_of_ownership
6. Return on investment — Wikipedia — https://en.wikipedia.org/wiki/Return_on_investment
7. Net present value — Wikipedia — https://en.wikipedia.org/wiki/Net_present_value
8. Capital expenditure — Wikipedia — https://en.wikipedia.org/wiki/Capital_expenditure
9. Operating expense — Wikipedia — https://en.wikipedia.org/wiki/Operating_expense
10. Technical debt — Wikipedia — https://en.wikipedia.org/wiki/Technical_debt
11. FinOps Foundation — Linux Foundation — https://www.finops.org
