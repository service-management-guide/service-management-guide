# Tata kelola, risiko, dan kepatuhan AI

**Tata kelola AI memberi organisasi pemilik yang ditunjuk, aturan yang jelas tentang data dan keputusan, penilaian risiko yang sepadan dengan kerugian, pengujian, dan catatan untuk setiap sistem AI yang dipakainya; kerangka seperti ISO/IEC 42001, NIST AI Risk Management Framework, dan EU AI Act menyediakan kosakata dan struktur, bukan nasihat hukum.**

## Mengapa ini penting

AI tiba di organisasi dari banyak pintu sekaligus. Vendor menambahkan fitur AI ke perangkat yang sudah Anda bayar. Tim membangun asisten. Individu memakai perangkat obrolan publik untuk pekerjaan mereka. Setiap pemakaian membawa pertanyaan yang mungkin belum diajukan organisasi: data apa yang masuk, siapa yang melihatnya, seberapa akurat, siapa yang terdampak oleh keputusannya, dan siapa yang menjawab ketika ia salah.

Tanpa tata kelola, pertanyaan-pertanyaan itu dijawab satu pemakaian pada satu waktu, secara tidak konsisten, atau tidak sama sekali. Akibatnya berkisar dari yang memalukan hingga yang serius: dokumen rahasia ditempel ke perangkat publik, sistem penyaringan yang memperlakukan sebagian kelompok lebih buruk daripada yang lain, asisten yang memberi pelanggan saran yang salah, regulator yang meminta bukti kendali dan tidak menemukan apa pun.

Tata kelola adalah jawabannya, dan tidak harus berat. Intinya ia adalah sekumpulan kecil kebiasaan: ketahui AI apa yang Anda pakai, beri setiap pemakaian pemilik, nilai risiko sepadan dengan apa yang bisa salah, uji dan pantau, tetapkan aturan tentang data dan pengawasan manusia, dan simpan catatan. Hukum dan standar berkembang cepat: Artificial Intelligence Act Uni Eropa, yang dijelaskan di Wikipedia, menetapkan kewajiban menurut kategori risiko, dan banyak yurisdiksi lain memiliki aturan atau usulan. Topik ini menjelaskan struktur dan kosakatanya serta menunjukkan cara memasukkan tata kelola AI ke dalam tata kelola yang sudah Anda miliki. Ia tidak memberikan nasihat hukum; untuk pertanyaan hukum apa pun, tanyakan kepada penasihat yang berkualifikasi.

Uraian pemilik tentang versi ITIL terbaru menempatkan AI di dalam lingkungan yang harus ditangani manajemen layanan (lihat Topik 1.3 — ITIL 5). Topik ini terhubung dengan pandangan umum tentang AI (Topik 5.1 — AI dalam manajemen layanan), agen (Topik 5.5 — AI agentik dan pengawasan manusia), model operasi (Topik 5.8 — Model operasi dan keterampilan AI), dan tata kelola perusahaan (Topik 8.1 — Tata Kelola, Risiko, dan Kepatuhan).

## Konsep inti

**Tata kelola, risiko, dan kepatuhan (GRC).** Tata kelola adalah bagaimana organisasi diarahkan dan dikendalikan; manajemen risiko mengidentifikasi dan menangani ancaman terhadap tujuan; kepatuhan adalah memenuhi kewajiban dari hukum, kontrak, dan kebijakan. Wikipedia menjelaskan GRC sebagai pendekatan terpadu atas ketiganya. Tata kelola AI menerapkan logika yang sama pada AI.

**Inventaris AI.** Daftar semua sistem AI yang dipakai atau dikembangkan: tujuan, pemilik, vendor atau model, data yang dipakai, pengguna dan orang yang terdampak, tingkat risiko, dan status. Anda tidak dapat menata kelola apa yang tidak dapat Anda lihat. Sertakan fitur vendor yang tertanam dan perangkat pribadi yang dipakai untuk bekerja.

**Pendekatan berbasis risiko.** Tingkat kontrol harus sepadan dengan tingkat potensi kerugian. Merangkum catatan rapat membawa risiko berbeda dari meranking pelamar kerja. EU AI Act mengambil pendekatan serupa, dengan kategori dari risiko minimal hingga tidak dapat diterima; Wikipedia menjelaskan kategorinya. Periksa teks terkini dan situasi Anda sendiri dengan penasihat hukum.

**Penilaian risiko untuk AI.** Untuk setiap pemakaian, tanyakan: siapa yang dapat dirugikan, dan bagaimana; seberapa mungkin dan seberapa parah; apa batas sistem; apa yang terjadi ketika ia salah; dan apa alternatifnya. Wikipedia menjelaskan risk management secara umum. Catat penilaian dan keputusan pemilik. Penilaian dampak privasi (privacy impact assessment), yang dijelaskan di Wikipedia, adalah alat terkait untuk data pribadi.

**Standar dan kerangka kerja.** ISO/IEC 42001, diterbitkan pada 2023, menetapkan persyaratan untuk sistem manajemen kecerdasan buatan, setara dalam struktur dengan standar sistem manajemen ISO lainnya. National Institute of Standards and Technology (NIST) di Amerika Serikat menerbitkan AI Risk Management Framework, yang diorganisasi di sekitar empat fungsi: govern, map, measure, dan manage. Keduanya adalah alat sukarela untuk struktur dan kosakata bersama. Baca teks terkini dari penerbitnya. Lihat Topik 1.8 — Kerangka kerja dan standar manajemen layanan.

**Hukum dan regulasi.** AI tunduk pada hukum yang ada, seperti hukum pelindungan data, pelindungan konsumen, diskriminasi, ketenagakerjaan, dan kekayaan intelektual, serta aturan baru khusus AI. Wikipedia menjelaskan regulation of artificial intelligence di berbagai yurisdiksi, yang berubah cepat. Kewajiban bergantung pada di mana Anda beroperasi dan apa yang Anda lakukan. Panduan ini tidak dapat memberi tahu apa yang berlaku bagi Anda.

**Pelindungan data dan privasi.** Sistem AI sering memproses data pribadi. Undang-undang seperti General Data Protection Regulation (GDPR) di Uni Eropa menetapkan aturan tentang dasar hukum, tujuan, minimisasi, hak individu, dan dalam beberapa kasus batas pada keputusan otomatis. Wikipedia menjelaskan GDPR dan privasi. Libatkan petugas privasi atau penasihat hukum Anda, dan catat ke mana data pergi, berapa lama disimpan, dan apakah ia melatih model mana pun.

**Bias dan keadilan.** AI yang dilatih pada data masa lalu dapat mereproduksi pola yang tidak adil, sehingga sebagian orang mendapat hasil yang lebih buruk. Wikipedia menjelaskan algorithmic bias dan fairness in machine learning. Uji perbedaan hasil lintas kelompok yang relevan dengan pemakaian, dan tinjau siapa yang terdampak, bukan hanya kinerja rata-rata. Putuskan apa yang dapat diterima sebelum peluncuran.

**Transparansi dan keterjelasan.** Orang yang terdampak oleh sistem AI harus tahu bahwa ia dipakai, dan untuk keputusan penting harus dapat memperoleh penjelasan dan jalur untuk menantang. Wikipedia menjelaskan algorithmic transparency dan explainable AI. Tingkat yang tepat bergantung pada taruhannya.

**Pengawasan manusia.** Seseorang yang dapat memahami, mempertanyakan, dan menimpa sistem, dengan waktu dan informasi untuk melakukannya. Lihat Topik 5.5 — AI agentik dan pengawasan manusia. Pengawasan yang hanya ada di atas kertas adalah temuan yang umum.

**Keselamatan dan keamanan.** Sistem AI dapat diserang (misalnya dengan prompt injection), dapat membocorkan data, dan dapat berperilaku tak terduga. Red-teaming, yang dijelaskan di Wikipedia, adalah praktik menguji sistem dengan mensimulasikan lawan. Lihat Topik 3.13 — Manajemen Keamanan Informasi.

**Kekayaan intelektual.** Pertanyaan muncul tentang bahan yang dipakai untuk melatih model, kepemilikan keluaran, dan lisensi model itu sendiri. Wikipedia menjelaskan intellectual property dan copyright. Lihat Topik 4.2 — Manajemen Aset Perangkat Lunak. Ambil nasihat tentang bagaimana ini memengaruhi Anda.

**Akuntabilitas dan peran.** Tata kelola membutuhkan peran yang jelas: sponsor eksekutif, badan yang menetapkan kebijakan dan meninjau pemakaian berisiko lebih tinggi, pemilik untuk setiap sistem, dan spesialis dalam urusan keamanan, privasi, dan hukum. Wikipedia menjelaskan accountability. Hindari komite yang menyetujui segalanya dan menghambat pekerjaan; sisihkan tinjauan untuk pemakaian berisiko lebih tinggi.

**Kontrol siklus hidup.** Kontrol berlaku sepanjang masa hidup sistem: desain (tujuan, data, risiko), bangun atau beli (uji tuntas, kontrak, pengujian), deploy (persetujuan, pemantauan), operasikan (kinerja, drift, insiden), dan pensiunkan. Lihat Topik 3.14 — Manajemen Pemasok.

**Catatan.** Simpan bukti: inventaris, penilaian risiko, hasil uji, persetujuan, catatan insiden, dan log pemakaian. Catatan mendukung audit, pembelajaran, dan tantangan dari orang yang terdampak.

**Bagaimana lensa-lensa cocok.** Tata kelola adalah lapisan kendali di sekitar lensa AI. Praktik agile menyarankan tinjauan yang sepadan dan cepat, dengan pagar pengaman yang dapat dipakai tim tanpa menunggu. Otomatisasi dapat menegakkan aturan, seperti memblokir data sensitif agar tidak mengalir ke perangkat yang tidak disetujui. Analitik menyediakan bukti pemantauan.

## Praktik terbaik

1. **Bangun inventaris lebih dulu.** Tanyakan kepada tim, periksa pengaturan vendor, dan tinjau data jaringan dan pengeluaran. Catat setiap sistem AI dengan pemilik dan tujuan.
2. **Klasifikasikan menurut risiko.** Definisikan beberapa tingkat risiko dengan contoh, seperti rendah (menyusun teks internal), sedang (jawaban yang menghadap pelanggan), dan tinggi (keputusan yang memengaruhi hak atau keselamatan orang). Kaitkan tingkat tinjauan dengan tingkat risiko.
3. **Tunjuk pemilik untuk setiap pemakaian.** Satu orang yang bertanggung jawab per sistem, yang menandatangani penilaian risiko dan menjawab atas kinerja dan insiden.
4. **Buat kebijakan yang singkat dan jelas.** Nyatakan data apa yang boleh ke perangkat mana, pemakaian mana yang memerlukan persetujuan, apa yang tidak boleh dilakukan, dan siapa yang ditanya. Jaga dalam beberapa halaman, dan terbitkan contoh.
5. **Sediakan perangkat dan jalur yang disetujui.** Jika staf tidak punya cara yang disetujui untuk memakai AI, mereka akan memakai yang tidak disetujui. Tawarkan perangkat dengan ketentuan yang tepat dan jalur cepat menuju persetujuan.
6. **Nilai sebelum dan uji sesudah.** Lakukan penilaian risiko yang sepadan sebelum pemakaian tayang, dan uji dengan kasus realistis, termasuk pemeriksaan bias dan penyalahgunaan. Ulangi setelah perubahan signifikan.
7. **Periksa vendor dan ketentuannya.** Tanyakan kepada vendor bagaimana mereka memakai data Anda, bagaimana mereka menguji, bagaimana mereka memberi tahu Anda tentang perubahan model, dan apa yang terjadi pada data di akhir. Catat jawabannya. Lihat Topik 3.14 — Manajemen Pemasok.
8. **Definisikan pengawasan manusia dalam praktik.** Untuk setiap pemakaian, katakan siapa meninjau apa, dengan informasi apa, dan seberapa sering, dan ambil sampel tinjauannya.
9. **Pantau dan tangani insiden.** Lacak kesalahan, keluhan, drift, dan peristiwa keamanan. Perlakukan insiden AI seperti insiden lain, dan belajar darinya. Lihat Topik 3.2 — Manajemen Insiden.
10. **Tinjau secara berkala dan simpan catatan.** Tinjau kembali inventaris dan tingkat risiko setidaknya setahun sekali dan ketika hukum atau sistem berubah. Simpan bukti di satu tempat.

## Pertanyaan untuk dibahas bersama tim Anda

**Di mana kita memakai AI hari ini, siapa pemilik setiap pemakaian, dan apa yang bisa salah?**
Susun inventaris pertama. Harapkan celah, terutama fitur vendor dan perangkat pribadi. Lanjutkan dengan memilih tiga yang paling berisiko dan menetapkan pemilik.

**Pemakaian kita yang mana yang memengaruhi akses, uang, kesehatan, atau pekerjaan orang, dan tinjauan apa yang mereka terima?**
Cari pemakaian berisiko lebih tinggi. Harapkan ketidakpastian tentang apa yang dihitung. Lanjutkan dengan melibatkan penasihat hukum dan privasi dalam klasifikasi.

**Data apa yang dimasukkan staf ke perangkat AI, dan apakah mereka tahu aturannya?**
Tanyakan secara anonim bila perlu. Harapkan kejutan. Lanjutkan dengan menyepakati aturan yang jelas dengan contoh dan dengan menyediakan alternatif yang disetujui.

**Apa yang akan kita tunjukkan kepada regulator atau pelanggan yang menanyakan bagaimana kita mengendalikan AI kita?**
Kumpulkan apa yang ada. Harapkan berkas yang tipis. Lanjutkan dengan memilih tiga dokumen untuk dihasilkan: inventaris, kebijakan, dan satu penilaian risiko.

**Bagaimana kita menguji hasil yang tidak adil, dan kelompok mana yang harus kita lihat?**
Pikirkan orang yang terdampak oleh setiap pemakaian. Harapkan bahwa belum ada yang menguji. Lanjutkan dengan memilih satu pemakaian dan merancang perbandingan sederhana lintas kelompok, dengan saran.

**Siapa yang dapat berkata tidak pada pemakaian AI, dan apa yang terjadi ketika mereka melakukannya?**
Tata kelola tanpa kuasa untuk menghentikan hanyalah hiasan. Harapkan jawaban yang tidak jelas. Lanjutkan dengan menunjuk pengambil keputusan untuk pemakaian berisiko lebih tinggi dan tingkat layanan untuk tinjauan.

## Dalam praktik: contoh manajemen layanan

Badan jaminan sosial nasional memakai AI di beberapa tempat: agen virtual vendor di situs web publiknya, perangkat yang merangkum catatan kasus untuk petugas kasus, asisten pengembang yang dipakai staf TI-nya, dan uji coba yang menandai kemungkinan kesalahan dalam klaim tunjangan untuk ditinjau. Tidak ada catatan pusat, dan kantor menteri telah menanyakan kepada badan itu bagaimana ia mengendalikan AI.

Kepala informasi meminta kantor manajemen layanan menyusun inventaris dalam enam minggu. Kantor itu menemukan sebelas pemakaian, termasuk dua yang tidak diketahui siapa pun di departemen TI: fitur perangkuman teks yang dinyalakan vendor dalam sistem manajemen kasus, dan perangkat transkripsi yang dipakai satu kantor regional pada akun pribadi. Tim mengklasifikasikan pemakaian menurut risiko bersama petugas privasi dan departemen hukum. Uji coba penanda klaim digolongkan berisiko tinggi, karena keluarannya dapat mengarah pada tindakan terhadap seseorang; ringkasan catatan kasus berisiko sedang; asisten pengembang rendah, meski membawa pertanyaan lisensi.

Untuk setiap pemakaian, pemilik ditunjuk. Untuk uji coba klaim, pemilik menugaskan penilaian risiko, termasuk perbandingan tingkat penandaan lintas kelompok dan aturan bahwa tak seorang pun pernah ditolak tunjangannya hanya berdasarkan keluaran perangkat itu. Perangkat transkripsi dihentikan sampai alternatif yang disetujui ditemukan; kantor regional ditawari perangkat yang disetujui vendor di bawah kontrak dengan ketentuan pelindungan data. Kebijakan empat halaman menetapkan aturan tentang data dan persetujuan, dan jalur tinjauan singkat dijanjikan dalam sepuluh hari kerja untuk pemakaian berisiko sedang.

Yang berubah: badan dapat menjawab kementerian dengan inventaris, kebijakan, dan penilaian risiko untuk pemakaian berisiko tertingginya. Yang masih sulit: fitur vendor yang dinyalakan secara bawaan terus bermunculan, dan badan tidak punya cara otomatis untuk menemukannya; perbandingan lintas kelompok dibatasi oleh data yang mungkin tidak boleh dipegang badan secara sah; dan janji sepuluh hari pada jalur tinjauan membebani tim kecil. Kantor berencana melakukan tinjauan fitur vendor setiap triwulan dan meminta panduan hukum tentang pengujian.

## Empat perspektif

### Tim produk dan pengiriman

Daftarkan pemakaian AI Anda, nilai risiko sejak dini, uji dengan kasus realistis dan adversarial, dan catat apa yang boleh dilakukan sistem. Bangun jalur bagi orang untuk menantang hasil dan bagi Anda untuk mematikannya.

### Tim layanan dan operasi

Pantau sistem AI di produksi, tangani insiden, dan laporkan kesalahan dan keluhan. Ikuti aturan data, dan beri tahu pemilik tentang fitur AI baru yang muncul di perangkat Anda.

### Kepemimpinan dan tata kelola

Sponsori program, tetapkan hak keputusan, dan danai pekerjaannya. Minta inventaris, tingkat risiko, dan bukti pengujian. Jangan mengalihdayakan akuntabilitas kepada vendor atau komite.

### Pelanggan dan pengguna

Anda seharusnya diberi tahu ketika AI dipakai dengan cara yang penting bagi Anda, dan dapat menjangkau manusia serta menantang keputusan. Tanyakan bagaimana data Anda dipakai, dan laporkan hasil yang tampak salah atau tidak adil.

## Agile, AI, otomatisasi, dan analitik

### Agile

Sediakan tinjauan yang cepat dan sepadan dengan pagar pengaman yang dapat diikuti tim, seperti perangkat yang disetujui dan daftar periksa singkat untuk pemakaian berisiko rendah. Iterasikan kebijakan bersama tim. Perhatian: tinjauan yang lambat dan berat mendorong tim menghindarinya; jaga jalur berisiko rendah tetap cepat.

### AI

AI dapat membantu menyusun kebijakan, membaca ketentuan vendor, dan menyiapkan penilaian risiko, dengan tinjauan hukum dan manusia. Tunjuk pemilik untuk pemakaian itu juga. Perhatian: ringkasan hukum atau kontrak oleh AI bisa salah; jangan pernah dipakai sebagai dasar keputusan kepatuhan. Lihat Topik 5.1 — AI dalam manajemen layanan.

### Otomatisasi

Otomatiskan umpan inventaris, aturan pencegahan kebocoran data, persetujuan untuk pemakaian berisiko rendah, dan pencatatan, dengan pengecualian yang ditinjau. Perhatian: pemblokiran otomatis dapat mendorong pekerjaan ke perangkat pribadi; padukan dengan alternatif yang disetujui. Lihat Topik 6.1 — Strategi otomatisasi.

### Analitik

Lacak persentase pemakaian AI yang memiliki pemilik dan penilaian, insiden, keluhan, hasil uji, dan waktu tinjauan. Perhatian: jumlah penilaian yang selesai dapat menghargai kertas kerja; periksa sampel untuk mutu dan apakah kontrol berfungsi. Lihat buku *Service Management Metrics* dan Topik 7.3 — Pengukuran dan pelaporan.

## Mode kegagalan umum

- **Tidak ada inventaris.** Pemakaian berlipat ganda tanpa terlihat. Bangun dan segarkan inventaris.
- **Tinjauan satu ukuran untuk semua.** Semuanya diblokir atau tidak ada yang ditinjau. Sesuaikan tinjauan dengan risiko.
- **Kebijakan yang tidak dapat diikuti siapa pun.** Staf mengabaikannya. Tulis aturan singkat dengan contoh dan sediakan perangkat yang disetujui.
- **Tata kelola sebagai kertas kerja.** Dokumen ada dan kontrol tidak. Uji bahwa kontrol berfungsi.
- **Memercayai klaim vendor.** Ketentuan dan perilaku tidak diperiksa. Tanyakan, uji, dan catat.
- **Mengabaikan orang yang terdampak.** Bias dan kerugian tidak terlihat. Uji hasil lintas kelompok dan tawarkan cara untuk menantang.
- **Menganggap AI dapat menyediakan nasihat hukum.** Ringkasan yang salah mendorong keputusan. Pakai penasihat yang berkualifikasi.

## Model kematangan

| Dimensi | Memulai | Mengembangkan | Menstandardisasi | Mengelola | Mengorkestrasi |
|---|---|---|---|---|---|
| Inventaris dan kepemilikan | Pemakaian tidak diketahui | Pemakaian utama didaftar | Inventaris dengan pemilik dan tingkat risiko | Inventaris ditinjau dan diverifikasi melalui penemuan | Inventaris terintegrasi dengan katalog, pengadaan, dan kontrol |
| Risiko dan pengujian | Ad hoc | Beberapa penilaian | Penilaian dan pengujian yang sepadan sebelum peluncuran | Hasil dipantau dan ditindaklanjuti | Jaminan berkelanjutan lintas sistem dan pemasok |
| Kebijakan dan data | Tidak ada | Panduan draf | Kebijakan jelas, perangkat yang disetujui, dan aturan data | Kepatuhan dipantau dan diaudit | Aturan ditegakkan oleh perangkat dan disesuaikan dengan perubahan |
| Pengawasan dan akuntabilitas | Tidak jelas | Sponsor yang ditunjuk | Peran, jalur tinjauan, dan pengawasan manusia terdefinisi | Mutu pengawasan disampel | Tata kelola dikoordinasikan di seluruh perusahaan dan mitra |

## Daftar periksa

- [ ] Kami menyimpan inventaris AI dengan pemilik dan tujuan.
- [ ] Setiap pemakaian memiliki tingkat risiko, dengan tinjauan sepadan dengannya.
- [ ] Kebijakan singkat mencakup data, persetujuan, dan pemakaian terlarang.
- [ ] Perangkat yang disetujui dan jalur tinjauan cepat tersedia.
- [ ] Pemakaian berisiko lebih tinggi memiliki penilaian risiko tercatat dan pengujian, termasuk untuk bias.
- [ ] Ketentuan vendor tentang data, pengujian, dan perubahan model dicatat.
- [ ] Pengawasan manusia didefinisikan dan disampel.
- [ ] Kami telah bertanya kepada penasihat hukum dan privasi tentang kewajiban kami.

## Prompt AI

**Susun draf entri inventaris dari catatan.**

```text
Here are notes on an AI use: [paste].
Draft an inventory entry with: purpose, owner (only if stated), vendor or model (only if stated), data used, people affected, decisions it influences, and proposed risk level with the reasons. Mark each item not in the notes as [missing]. Do not state legal obligations.
List what you are unsure of.
```

**Siapkan pertanyaan untuk vendor.**

```text
We are considering an AI product from a vendor for [use]. What we know of it: [paste].
Write 20 questions for the vendor about data use and retention, training on our data, testing for accuracy and bias, security, model changes, incident notification, and exit. Do not assume answers.
List what you are unsure of.
```

**Susun penilaian risiko untuk ditinjau.**

```text
AI use: [describe]. People affected: [list]. Decisions influenced: [list]. Current controls: [list].
Draft a risk assessment table with: harm, who is affected, likelihood and severity (marked as my estimate to be confirmed), existing controls, further controls to consider, and questions for the owner. Do not give legal conclusions.
List what you are unsure of.
```

## Skill AI

- [risk-register](../../../../skills/risk-register/SKILL.md): gunakan untuk mencatat risiko AI, pemilik, dan keputusan.
- [machine-learning-model-card](../../../../skills/machine-learning-model-card/SKILL.md): gunakan untuk mendokumentasikan tujuan, data, kinerja, dan batas sebuah model.
- [legal-data-privacy-compliance](../../../../skills/legal-data-privacy-compliance/SKILL.md): gunakan untuk membingkai pertanyaan privasi bagi penasihat hukum Anda.
- [legal-compliance-audit](../../../../skills/legal-compliance-audit/SKILL.md): gunakan untuk menyiapkan bukti dan pertanyaan untuk audit.
- [data-governance](../../../../skills/data-governance/SKILL.md): gunakan untuk menetapkan kepemilikan dan aturan untuk data yang dipakai AI.

## Sumber utama

- NIST, AI Risk Management Framework: kerangka kerja sukarela yang banyak dipakai untuk mengelola risiko AI.
- ISO/IEC 42001 (standar itu sendiri): persyaratan untuk sistem manajemen AI; baca edisi terkini dari penerbitnya.
- Teks Artificial Intelligence Act Uni Eropa dan panduan dari regulator Anda sendiri: sumber otoritatif tentang kewajiban hukum.
- Wikipedia, "Regulation of artificial intelligence" dan "Ethics of artificial intelligence": ikhtisar lanskapnya.

## Referensi

1. Regulation of artificial intelligence — Wikipedia — https://en.wikipedia.org/wiki/Regulation_of_artificial_intelligence
2. Artificial Intelligence Act — Wikipedia — https://en.wikipedia.org/wiki/Artificial_Intelligence_Act
3. Ethics of artificial intelligence — Wikipedia — https://en.wikipedia.org/wiki/Ethics_of_artificial_intelligence
4. Algorithmic bias — Wikipedia — https://en.wikipedia.org/wiki/Algorithmic_bias
5. Fairness (machine learning) — Wikipedia — https://en.wikipedia.org/wiki/Fairness_(machine_learning)
6. General Data Protection Regulation — Wikipedia — https://en.wikipedia.org/wiki/General_Data_Protection_Regulation
7. Privacy impact assessment — Wikipedia — https://en.wikipedia.org/wiki/Privacy_impact_assessment
8. Governance, risk, and compliance — Wikipedia — https://en.wikipedia.org/wiki/Governance,_risk,_and_compliance
9. Risk management — Wikipedia — https://en.wikipedia.org/wiki/Risk_management
10. Red team — Wikipedia — https://en.wikipedia.org/wiki/Red_team
11. Explainable artificial intelligence — Wikipedia — https://en.wikipedia.org/wiki/Explainable_artificial_intelligence
12. AI Risk Management Framework — NIST — https://www.nist.gov/itl/ai-risk-management-framework
