# Analitik pengalaman dan sentimen

**Analitik pengalaman menanyakan kepada pengguna bagaimana layanan membantu mereka dan mengamati bagaimana mereka benar-benar memakainya; survei, teks umpan balik, analisis sentimen, dan perjanjian tingkat pengalaman berguna bila pertanyaan adil, bias respons diakui, perangkat sentimen diperiksa terhadap kata-kata orang sendiri, dan tak seorang pun diranking atau diawasi.**

## Mengapa ini penting

Layanan dapat memenuhi setiap target teknis dan tetap membuat orang frustrasi. Sistem hidup, tiket ditutup tepat waktu, dan seorang karyawan telah menghabiskan dua jam pagi itu mencoba mendapat akses ke perangkat yang ia butuhkan. Dasbor yang dibangun dari data sistem tidak dapat melihatnya. Mereka menghitung apa yang dicatat mesin, bukan bagaimana nasib orangnya.

Analitik pengalaman mengisi celah itu. Ia bertanya langsung kepada orang, lewat survei singkat pada saat pemakaian dan survei berkala yang lebih panjang. Ia membaca apa yang mereka tulis: komentar tiket, jawaban survei, pesan obrolan. Ia mengamati bagaimana mereka memakai layanan, di mana mereka meninggalkan formulir, berapa kali mereka mencoba sebelum berhasil. Ia menggabungkannya menjadi gambaran pengalaman yang dilewatkan ukuran teknis. Gagasan di balik perjanjian tingkat pengalaman (XLA), yang diperkenalkan dalam Topik 3.7 — Manajemen Tingkat Layanan, adalah menetapkan target untuk pengalaman di samping target untuk kinerja teknis.

Metode ini membawa risikonya sendiri. Survei hanya menjangkau orang yang menjawab. Perangkat analisis sentimen menebak perasaan dari kata-kata, dan sering menebak salah, terutama lintas bahasa dan budaya. Skor menjadi target, dan target mengundang tekanan pada responden. Data karyawan memunculkan pertanyaan privasi dan kepercayaan. Topik ini menjelaskan cara mengumpulkan dan memakai data pengalaman dengan baik, dengan keadilan dan kerendahan hati tentang apa yang dapat ditunjukkannya. Ia terhubung dengan service desk (Topik 3.1 — Service Desk), tingkat layanan (Topik 3.7 — Manajemen Tingkat Layanan), pengukuran (Topik 7.3 — Pengukuran dan pelaporan), dan pemakaian AI untuk membaca teks (Topik 5.1 — AI dalam manajemen layanan).

## Konsep inti

**Pengalaman.** Apa yang dipikirkan, dirasakan, dan dilakukan seseorang saat memakai layanan, dari kontak pertama hingga hasil. Wikipedia menjelaskan customer experience dan user experience. Untuk layanan internal, "pelanggan" adalah rekan kerja, dan istilah digital employee experience kadang dipakai untuk bagaimana orang mengalami teknologi mereka. Ia mencakup kemudahan, kecepatan, kepercayaan, dan apakah mereka mencapai tujuan.

**Kepuasan dan ukuran terkait.** Kepuasan pelanggan (customer satisfaction), yang dijelaskan di Wikipedia, biasanya ditanyakan sebagai "seberapa puas Anda?" pada suatu skala. Net promoter score, yang juga dijelaskan di sana, menanyakan seberapa mungkin seseorang merekomendasikan layanan dan dihitung dari persentase promotor dikurangi detraktor. Ukuran lain menanyakan upaya, seperti seberapa mudah menyelesaikan sesuatu. Masing-masing punya kegunaan dan kritik: cepat dan dapat dibandingkan, tetapi tumpul serta terbuka terhadap manipulasi dan salah baca.

**Survei transaksional dan hubungan.** Survei transaksional menanyakan satu interaksi, seperti tiket yang terselesaikan, segera sesudahnya. Survei hubungan menanyakan layanan secara keseluruhan, pada interval tertentu. Survei transaksional menunjukkan masalah spesifik; survei hubungan menunjukkan pandangan yang lebih luas. Pakai keduanya, dan jaga tetap singkat.

**Desain survei.** Kata-kata memengaruhi jawaban. Wikipedia menjelaskan survey methodology dan masalah umum: pertanyaan menggiring, yang mengisyaratkan jawaban; bias persetujuan (acquiescence bias), kecenderungan untuk setuju; dan bias keinginan sosial (social-desirability bias), memberi jawaban yang tampak dapat diterima. Pakai kata netral, skala jelas, satu gagasan per pertanyaan, dan kotak komentar terbuka. Wikipedia menjelaskan Likert scale dan questionnaire. Uji survei pada beberapa orang. Lihat skill survey-design dalam panduan ini.

**Respons dan bias.** Hanya sebagian orang menjawab, dan mereka tidak tipikal. Wikipedia menjelaskan response rate dan participation bias: orang dengan perasaan kuat, atau dengan waktu, lebih banyak merespons. Skor dari respons 10 persen mungkin sedikit bicara tentang 90 persen lainnya. Laporkan tingkat respons, bandingkan responden dengan populasi bila bisa, dan jangan memperlakukan skor sebagai pasti.

**Kelelahan survei.** Orang yang ditanya terlalu sering berhenti menjawab atau menjawab sembarangan. Batasi seberapa sering Anda bertanya, tanyakan hanya apa yang akan Anda pakai, dan tunjukkan apa yang berubah karena jawaban. Survei yang lenyap ke kehampaan mengajarkan orang untuk tidak peduli.

**Umpan balik teks bebas.** Komentar memberi tahu Anda mengapa. Membaca sampel itu penting, dan perangkat dapat membantu untuk volume. Wikipedia menjelaskan thematic analysis, praktik mengidentifikasi tema dalam data kualitatif, dan qualitative research secara lebih luas. Menghitung tema, dan mengutip contoh, membuat komentar dapat dipakai.

**Analisis sentimen.** Perangkat lunak yang mengklasifikasikan teks sebagai positif, negatif, atau netral, atau menurut emosi. Wikipedia menjelaskan sentiment analysis dan metodenya. Ia berguna untuk triase kasar atas volume teks besar. Ia kesulitan dengan sarkasme, perasaan campuran, istilah domain ("kritis" mungkin prioritas, bukan emosi), dan perbedaan bahasa serta dialek. Periksa labelnya terhadap sampel yang dibaca orang, dan jangan memperlakukan hasilnya sebagai perasaan individu mana pun. Wikipedia juga menjelaskan emotion recognition, yang menimbulkan masalah keandalan dan etika serius, terutama bila diterapkan pada wajah atau suara; berhati-hatilah dan minta nasihat sebelum memakai metode semacam itu.

**Penemuan topik.** Teknik pemrosesan bahasa alami, termasuk topic model yang dijelaskan Wikipedia, dapat mengelompokkan komentar menurut pokok bahasan. Mereka membantu menemukan tema dalam ribuan komentar, dengan tinjauan manusia untuk menamai dan memeriksa kelompoknya.

**Sinyal perilaku dan pemakaian.** Apa yang dilakukan orang sering berbeda dari apa yang mereka katakan. Formulir yang ditinggalkan, pencarian berulang, percobaan ulang, dan kontak setelah percobaan swalayan menunjukkan gesekan. Wikipedia menjelaskan usability testing, di mana orang mencoba tugas realistis sementara pengamat mencatat kesulitan. Segelintir sesi teramati sering menemukan masalah yang tidak diungkap survei mana pun.

**Metode kualitatif.** Wawancara dan focus group, yang dijelaskan di Wikipedia, memberi kedalaman. Sejumlah kecil percakapan dengan pengguna nyata dapat mengubah prioritas lebih daripada survei besar. Pilih orang yang berbeda dalam peran, keterampilan, dan lokasi.

**Perjanjian tingkat pengalaman.** Perjanjian yang menetapkan target untuk ukuran pengalaman, seperti "sedikitnya 80 persen pengguna mengatakan layanan membantu mereka menyelesaikan pekerjaan". Paling baik dipakai sebagai tujuan bersama dan percakapan, dengan beberapa ukuran, bukan angka tunggal yang diikat pada penalti, karena skor pengalaman mudah terdistorsi. Lihat Topik 3.7 — Manajemen Tingkat Layanan.

**Suara pelanggan (voice of the customer).** Praktik menangkap dan bertindak atas apa yang dikatakan pelanggan. Wikipedia menjelaskannya. Ia menyatukan survei, komentar, kontak dukungan, ulasan, dan percakapan, dan menyalurkan wawasan kepada mereka yang dapat bertindak.

**Kesejahteraan dan beban kerja karyawan.** Analitik juga dapat menyentuh pengalaman staf yang menyampaikan layanan: beban kerja, beban piket, dan semangat. Wikipedia menjelaskan employee engagement dan occupational burnout. Ukur pada tingkat tim, dengan persetujuan dan kehati-hatian, dan bertindaklah atas temuan.

**Etika, privasi, dan persetujuan.** Mengumpulkan dan menganalisis umpan balik melibatkan data pribadi dan kadang pendapat sensitif. Wikipedia menjelaskan privacy, anonymity, dan informed consent. Katakan apa yang Anda kumpulkan dan mengapa, izinkan anonimitas di tempat yang penting, agregasikan sebelum melapor, dan jangan mengidentifikasi individu dari komentar mereka tanpa alasan kuat. Memantau perilaku atau sentimen karyawan di tempat kerja, yang dijelaskan Wikipedia di bawah employee monitoring, dapat merusak kepercayaan dan mungkin dibatasi hukum; ambil nasihat hukum. Lihat Topik 5.6 — Tata kelola, risiko, dan kepatuhan AI.

**Menutup lingkaran.** Beri tahu orang apa yang Anda dengar dan apa yang Anda ubah. Tindak lanjuti mereka yang mengangkat masalah serius. Tanpa tanggapan yang terlihat, partisipasi turun.

**Bagaimana lensa-lensa cocok.** Analitik pengalaman memberi hasil manusiawi yang ingin diperbaiki tiga lensa lainnya. Praktik agile menjalankan eksperimen kecil dan bertanya kepada pengguna apakah membantu. AI membantu membaca dan mengelompokkan teks, di bawah tinjauan. Otomatisasi memicu survei dan menyalurkan umpan balik.

## Praktik terbaik

1. **Tanyakan tentang hasil, bukan hanya kepuasan.** Sertakan pertanyaan seperti "apakah Anda mendapat apa yang Anda butuhkan?" dan satu tentang upaya. Pasangkan skor dengan teks bebas "apa yang menghalangi?".
2. **Jaga survei singkat dan tepat waktu.** Ajukan satu sampai tiga pertanyaan segera setelah interaksi, dan jalankan survei hubungan singkat beberapa kali setahun. Jangan berulang kali bertanya hal yang sama.
3. **Tulis pertanyaan netral dan uji.** Hindari kata menggiring, pertanyaan ganda, dan jargon. Coba survei pada beberapa orang dari kelompok berbeda sebelum peluncuran.
4. **Laporkan tingkat respons dan siapa yang menjawab.** Tunjukkan berapa banyak yang merespons, bandingkan dengan populasi bila mungkin, dan jelaskan batasannya. Hindari presisi palsu.
5. **Baca komentarnya.** Ambil sampel tiap minggu, kutip dalam laporan, dan kelompokkan menjadi tema. Pakai perangkat untuk skala, dengan tinjauan manusia.
6. **Periksa perangkat sentimen terhadap manusia.** Minta orang melabeli sampel, bandingkan dengan perangkat, dan catat di mana ia gagal. Pakai perangkat untuk triase, bukan untuk kesimpulan tentang individu.
7. **Amati perilaku sekaligus kata-kata.** Lihat peninggalan, percobaan ulang, dan kontak berulang, dan jalankan beberapa sesi kegunaan dengan tugas nyata. Bandingkan apa yang dilakukan orang dengan apa yang mereka katakan.
8. **Pakai XLA sebagai tujuan bersama.** Sepakati sehimpunan kecil ukuran pengalaman dengan pelanggan, tinjau bersama, dan hindari mengikatnya pada penalti atau kinerja individu.
9. **Lindungi orang.** Jelaskan apa yang Anda kumpulkan, agregasikan hasil, hindari mengidentifikasi individu, dan ambil nasihat sebelum memantau sentimen karyawan. Jangan pernah memakai data pengalaman untuk meranking individu.
10. **Tutup lingkaran secara terlihat.** Terbitkan ringkasan "Anda berkata, kami melakukan", dan tindak lanjuti masalah serius. Pensiunkan pertanyaan yang tidak mengarah pada tindakan.

## Pertanyaan untuk dibahas bersama tim Anda

**Apa yang kita ketahui tentang bagaimana orang mengalami layanan kita yang tidak ditunjukkan ukuran teknis kita?**
Daftarkan keluhan atau komentar terbaru. Harapkan ketidakcocokan dengan dasbor. Lanjutkan dengan memilih satu aspek, seperti waktu mendapat akses, dan menambahkan pertanyaan pengalaman tentangnya.

**Siapa yang menjawab survei kita, dan siapa yang tidak pernah?**
Bandingkan responden dengan populasi. Harapkan bahwa kelompok seperti staf malam atau lokasi jarak jauh tidak ada. Lanjutkan dengan menjangkau satu kelompok yang hilang dengan cara lain, seperti wawancara singkat.

**Apa yang kita ubah pada kuartal lalu karena apa yang dikatakan pengguna, dan apakah mereka tahu?**
Minta contoh. Harapkan sedikit. Lanjutkan dengan menyepakati pesan rutin "Anda berkata, kami melakukan".

**Seberapa akurat perangkat sentimen kita ketika seseorang membaca sampel komentar yang sama?**
Ujilah. Harapkan kesalahan pada sarkasme dan istilah domain. Lanjutkan dengan menyepakati di mana perangkat boleh dipakai dan di mana tidak.

**Ukuran pengalaman kita yang mana yang bisa didorong naik tanpa memperbaiki pengalaman?**
Pikirkan tekanan pada responden, survei selektif, atau menutup tiket sebelum bertanya. Lanjutkan dengan menyepakati aturan terhadap memengaruhi jawaban dan pemeriksaan bagaimana survei dikirim.

**Apa yang akan kita kumpulkan tentang pengalaman staf, dan bagaimana kita memastikan itu dipakai untuk membantu dan bukan untuk memantau?**
Diskusikan persetujuan, agregasi, dan tujuan. Harapkan pandangan kuat. Lanjutkan dengan menyepakati pernyataan pemakaian, dan melibatkan perwakilan staf serta nasihat hukum.

## Dalam praktik: contoh manajemen layanan

Tim TI sebuah jaringan perpustakaan nasional mendukung 6.000 staf di 300 cabang. Ukuran teknis menunjukkan kinerja baik: ketersediaan di atas 99,5 persen dan 92 persen tiket terselesaikan dalam target. Namun survei staf tahunan mengatakan "dukungan TI" adalah layanan dengan peringkat terendah, dan manajer cabang mengatakan TI tidak memahami pekerjaan mereka.

Manajer layanan memulai dengan survei transaksional singkat, dikirim otomatis saat tiket terselesaikan: dua pertanyaan ("Apakah kami menyelesaikan masalah Anda?" dan "Seberapa mudah mendapat bantuan?") dan komentar opsional. Tingkat responsnya 18 persen. Membandingkan responden dengan populasi staf, ia mendapati bahwa cabang besar terlalu terwakili dan cabang kecil terpencil nyaris tidak muncul. Ia menambahkan panggilan telepon bulanan ke lima cabang kecil yang dipilih acak, dan menjalankan tiga sesi kegunaan di mana staf mencoba meminta login baru dan memesan layar ruang rapat.

Angka menunjukkan 84 persen mengatakan masalah mereka terselesaikan, tetapi hanya 55 persen mengatakan mudah mendapat bantuan. Komentar, dikelompokkan menurut tema oleh dua analis, menunjukkan keluhan paling umum adalah harus menjelaskan lagi masalah kepada setiap orang: 31 persen komentar. Perangkat sentimen, diuji terhadap 200 komentar berlabel tangan, salah melabeli sekitar seperempat, termasuk banyak yang memakai "mendesak" atau "kritis" sebagai kata deskriptif, sehingga tim memakainya hanya untuk menyortir komentar yang akan dibaca. Sesi kegunaan menemukan bahwa formulir permintaan meminta tag aset yang tidak diketahui sebagian besar staf.

Tim mengubah formulir, membuat riwayat terlihat yang mengikuti tiket antaragen, dan menerbitkan catatan bulanan tentang apa yang berubah. Mereka menyepakati target tingkat pengalaman dengan manajer cabang: 75 persen staf mengatakan mendapat bantuan itu mudah, ditinjau triwulanan, dengan komentar dan tingkat responsnya. Manajer memberi tahu tim bahwa skor tidak akan dipakai untuk penilaian individu.

Yang berubah: skor kemudahan naik menjadi 68 persen dalam dua kuartal, dan "menjelaskan lagi" turun menjadi 15 persen komentar. Yang masih sulit: tingkat respons tetap rendah di cabang terkecil; beberapa agen khawatir skor akan dipakai melawan mereka meski ada pernyataan; dan vendor menawarkan perangkat deteksi emosi untuk panggilan telepon, yang ditolak manajer sampai hukum dan perwakilan staf meninjaunya. Ia berencana memperluas sampling telepon.

## Empat perspektif

### Tim produk dan pengiriman

Tanyakan kepada pengguna tentang hasil fitur Anda, amati beberapa sesi nyata, dan instrumentasikan titik gesekan seperti peninggalan. Bagikan apa yang Anda pelajari dengan tim layanan.

### Tim layanan dan operasi

Baca komentarnya, beri tahu pelanggan apa yang berubah, dan pakai data pengalaman untuk melihat di mana proses membuat orang frustrasi. Jangan memanipulasi skor, dan jangan meminta orang menilai Anda dengan baik.

### Kepemimpinan dan tata kelola

Minta ukuran pengalaman dengan tingkat respons dan komentar. Danai kerja kualitatif dan tindak lanjut. Jangan memakai skor pengalaman untuk meranking atau memberi imbalan individu. Minta nasihat tentang privasi dan pemantauan karyawan.

### Pelanggan dan pengguna

Anda seharusnya ditanya tentang apa yang penting, dapat berbicara secara anonim bila pantas, dan mendengar apa yang berubah. Beri tahu penyedia di mana survei melewatkan pengalaman Anda, dan beri contoh dalam komentar Anda.

## Agile, AI, otomatisasi, dan analitik

### Agile

Jalankan eksperimen kecil pada pengalaman, seperti mengubah formulir, dan tanyakan beberapa pengguna apakah membantu. Libatkan pengguna dalam desain. Perhatian: mengubah survei terus-menerus merusak perbandingan; pertahankan inti yang stabil dan tambahkan pertanyaan seperlunya.

### AI

AI dapat mengelompokkan komentar, merangkum tema, dan menyusun catatan "Anda berkata, kami melakukan", dengan seseorang memeriksa terhadap aslinya. Tunjuk pemilik. Perhatian: sentimen AI dan deteksi emosi dapat salah dan tidak adil lintas kelompok dan bahasa; uji pada sampel berlabel dan hindari memakainya pada individu. Lihat Topik 5.6 — Tata kelola, risiko, dan kepatuhan AI.

### Otomatisasi

Otomatiskan pemicu survei, penyaluran komentar serius kepada seseorang, dan pengingat untuk menindaklanjuti. Perhatian: survei otomatis yang dikirim hanya setelah hasil baik menggelembungkan skor; picu secara konsisten. Lihat Topik 6.2 — Otomatisasi alur kerja dan orkestrasi.

### Analitik

Gabungkan skor, tingkat respons, tema, sinyal perilaku, dan data teknis. Perhatian: skor berderau, dipengaruhi siapa yang menjawab dan bagaimana pertanyaan diajukan; pakai tren, laporkan ketidakpastian, dan baca komentarnya. Lihat Topik 7.3 — Pengukuran dan pelaporan dan buku *Service Management Metrics*.

## Mode kegagalan umum

- **Hanya ukuran teknis.** Dasbor hijau, pengguna tidak puas. Tambahkan ukuran pengalaman dan komentar.
- **Bias survei diabaikan.** Yang paling nyaring menjawab. Laporkan tingkat respons dan jangkau kelompok yang hilang.
- **Pertanyaan menggiring.** Jawaban miring. Pakai kata netral dan uji.
- **Memercayai skor sentimen.** Perangkat salah melabeli. Periksa terhadap bacaan manusia dan pakai untuk triase.
- **Skor sebagai target.** Orang menekan responden. Pakai XLA sebagai tujuan bersama, dengan beberapa ukuran.
- **Kelelahan survei.** Respons turun. Tanyakan lebih sedikit, dan tunjukkan apa yang berubah.
- **Memantau orang.** Kepercayaan dan legalitas menderita. Agregasikan, minta persetujuan, dan ambil nasihat.

## Model kematangan

| Dimensi | Memulai | Mengembangkan | Menstandardisasi | Mengelola | Mengorkestrasi |
|---|---|---|---|---|---|
| Pengumpulan | Survei tahunan | Survei transaksional | Survei transaksional dan hubungan singkat dengan komentar | Respons dan bias diperiksa, kelompok yang hilang dijangkau | Umpan balik dari beberapa kanal terintegrasi |
| Analisis | Hanya skor | Tema dibaca dengan tangan | Tema dengan sampel, perangkat diperiksa terhadap manusia | Pengalaman dikaitkan dengan perilaku dan data teknis | Wawasan pengalaman menggerakkan perencanaan lintas layanan |
| Pemakaian | Dilaporkan | Beberapa tindakan | Tindakan dilacak dan "Anda berkata, kami melakukan" diterbitkan | Target pengalaman ditinjau bersama pelanggan | Perjanjian pengalaman dibagikan lintas mitra |
| Etika | Tidak jelas | Kesadaran | Aturan tujuan, anonimitas, dan agregasi | Praktik ditinjau bersama staf dan penasihat | Privasi terbangun dalam pengumpulan dan analitik |

## Daftar periksa

- [ ] Kami mengukur hasil dan upaya, bukan hanya kepuasan.
- [ ] Survei singkat, netral, dan teruji.
- [ ] Kami melaporkan tingkat respons dan siapa yang hilang.
- [ ] Kami membaca komentar setiap minggu dan mengelompokkannya menjadi tema.
- [ ] Perangkat sentimen diperiksa terhadap label manusia dan dipakai hanya untuk triase.
- [ ] Kami mengamati pemakaian nyata, tidak hanya bertanya.
- [ ] Kami memakai target pengalaman sebagai tujuan bersama, bukan ukuran individu.
- [ ] Kami menerbitkan apa yang berubah karena umpan balik.

## Prompt AI

**Kelompokkan komentar menjadi tema untuk ditinjau.**

```text
Here are free-text comments from users with personal details removed: [paste].
Group them into up to eight themes, give a count for each, and quote two short comments exactly for each theme. List comments that do not fit. Do not rate sentiment or guess who wrote anything.
List what you are unsure of.
```

**Tinjau pertanyaan survei.**

```text
Here is a draft survey: [paste].
List questions that are leading, double-barreled, unclear, or likely to produce biased answers, quoting each, and suggest a neutral rewording. Do not add questions.
List what you are unsure of.
```

**Uji perangkat sentimen.**

```text
Here are 40 comments, each with a human label and the tool's label: [paste].
Compute the number and share of agreements and disagreements, list the comments with disagreements, and say what they have in common. Do not conclude anything about the tool beyond this sample.
List what you are unsure of.
```

## Skill AI

- [survey-design](../../../../skills/survey-design/SKILL.md): gunakan untuk merancang survei yang adil dan berguna.
- [getting-feedback](../../../../skills/getting-feedback/SKILL.md): gunakan untuk mengumpulkan dan memakai umpan balik dari pengguna dan rekan kerja.
- [stakeholder-analysis](../../../../skills/stakeholder-analysis/SKILL.md): gunakan untuk mengidentifikasi siapa yang ditanya dan siapa yang hilang.
- [statistical-analysis](../../../../skills/statistical-analysis/SKILL.md): gunakan untuk menganalisis data respons dengan ketidakpastian.
- [service-level-agreement](../../../../skills/service-level-agreement/SKILL.md): gunakan untuk membingkai target pengalaman di samping target teknis.

## Sumber utama

- Don Dillman, Jolene Smyth, dan Leah Christian, *Internet, Phone, Mail, and Mixed-Mode Surveys* (edisi ke-4, 2014): panduan standar desain survei.
- Jakob Nielsen, riset kegunaan (nngroup.com): bukti praktis tentang uji kegunaan dengan sampel kecil.
- Buku pendamping *Service Management Metrics*: definisi dan pagar pengaman untuk ukuran pengalaman.
- Wikipedia, "Customer satisfaction" dan "Sentiment analysis": ikhtisar gagasan utama.

## Referensi

1. Customer satisfaction — Wikipedia — https://en.wikipedia.org/wiki/Customer_satisfaction
2. Net promoter score — Wikipedia — https://en.wikipedia.org/wiki/Net_promoter_score
3. Customer experience — Wikipedia — https://en.wikipedia.org/wiki/Customer_experience
4. User experience — Wikipedia — https://en.wikipedia.org/wiki/User_experience
5. Survey methodology — Wikipedia — https://en.wikipedia.org/wiki/Survey_methodology
6. Participation bias — Wikipedia — https://en.wikipedia.org/wiki/Participation_bias
7. Sentiment analysis — Wikipedia — https://en.wikipedia.org/wiki/Sentiment_analysis
8. Thematic analysis — Wikipedia — https://en.wikipedia.org/wiki/Thematic_analysis
9. Usability testing — Wikipedia — https://en.wikipedia.org/wiki/Usability_testing
10. Voice of the customer — Wikipedia — https://en.wikipedia.org/wiki/Voice_of_the_customer
11. Employee monitoring — Wikipedia — https://en.wikipedia.org/wiki/Employee_monitoring
12. Privacy — Wikipedia — https://en.wikipedia.org/wiki/Privacy
