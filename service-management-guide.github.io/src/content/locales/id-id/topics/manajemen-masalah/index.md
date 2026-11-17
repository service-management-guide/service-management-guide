# Manajemen Masalah

**Manajemen masalah menemukan dan menghilangkan penyebab insiden, mencatat kesalahan yang dikenal beserta solusi sementaranya, dan menjalankan tinjauan tanpa menyalahkan yang tindakannya masuk ke backlog perbaikan; inilah cara tim layanan berhenti memperbaiki kegagalan yang sama berulang kali.**

## Mengapa ini penting

Tim yang menangani insiden dengan baik pun masih bisa terjebak dalam lingkaran. Jenis kegagalan yang sama kembali setiap bulan, penanggap menerapkan solusi sementara yang sama, dan biayanya menumpuk: waktu pengguna yang hilang, staf piket yang lelah, dan rasa bahwa tidak ada yang pernah membaik. Manajemen insiden memulihkan layanan; ia tidak menghentikan pengulangan.

Manajemen masalah adalah praktik yang melakukannya. Ia menanyakan mengapa insiden terjadi dan apa yang akan mencegahnya, dan menyerahkan jawabannya kepada seseorang yang dapat bertindak. Ia juga menyimpan catatan tentang apa yang diketahui mengenai kegagalan yang belum diperbaiki, sehingga penanggap berikutnya tidak mulai dari nol.

Bagi tim agile, praktik ini cocok secara alami dengan perbaikan berkelanjutan: temuan menjadi butir backlog, bersaing dengan fitur dalam satu daftar. Titik lemahnya biasanya bukan metode tetapi prioritas. Memperbaiki penyebab sering kalah dari pekerjaan baru kecuali seseorang membuat biaya pengulangan terlihat. Topik ini menjelaskan praktiknya, metode utama untuk menemukan penyebab, dan cara menjaga agar temuan tidak mati dalam laporan. Ia mitra dekat manajemen insiden (Topik 3.2 — Manajemen Insiden), manajemen pengetahuan (Topik 3.9 — Manajemen Pengetahuan), dan perbaikan berkelanjutan (Topik 3.15 — Peningkatan Berkelanjutan).

## Konsep inti

**Masalah (problem).** Dalam ITIL 4, penyebab, atau calon penyebab, dari satu insiden atau lebih. Masalah ada sebelum perbaikannya ada; ia bisa diketahui menyebabkan insiden atau hanya dicurigai. Tidak setiap insiden mengarah pada catatan masalah.

**Kesalahan yang dikenal (known error).** Masalah yang telah dianalisis tetapi belum diselesaikan, sering dengan solusi sementara yang terdokumentasi. Wikipedia menjelaskan istilah ini dalam penggunaan ITIL. Catatan kesalahan yang dikenal memungkinkan service desk dan penanggap menemukan solusi sementara dengan cepat dan melihat status perbaikan permanen.

**Solusi sementara (workaround).** Cara untuk mengurangi atau menghindari dampak tanpa memperbaiki penyebab. Solusi sementara membuat hidup tertahankan dan bisa menjadi permanen karena pembiaran. Catatan yang baik menyatakan solusi sementara, siapa yang boleh menerapkannya, dan tanggal yang diharapkan untuk perbaikan sebenarnya, agar yang sementara tidak diam-diam menjadi permanen.

**Aktivitasnya.** Identifikasi masalah, yang menemukan masalah dari tren insiden, pemantauan, dan tinjauan; pengendalian masalah, yang menganalisis penyebab dan mendokumentasikan kesalahan yang dikenal; dan pengendalian kesalahan, yang mengelola kesalahan yang dikenal hingga diselesaikan atau diterima. ITIL menggambarkannya sebagai bagian dari satu praktik dan bukan proses terpisah.

**Proaktif dan reaktif.** Manajemen masalah reaktif menanggapi insiden yang telah terjadi. Manajemen masalah proaktif mencari kelemahan sebelum menyebabkan insiden, misalnya dengan mempelajari nyaris celaka, tren peringatan, dan tinjauan perubahan.

**Analisis akar masalah.** Keluarga metode untuk menemukan penyebab dasar suatu masalah. Wikipedia menjelaskan root-cause analysis dan mendaftar teknik yang umum. Yang akrab mencakup:

- *Lima mengapa (five whys)*: tanyakan "mengapa" berulang kali sampai Anda mencapai penyebab yang bisa ditindaklanjuti.
- *Diagram sebab-akibat (Ishikawa atau fishbone)*: menata kemungkinan penyebab menurut kategori untuk memandu diskusi.
- *Analisis pohon kesalahan (fault tree)*: bekerja mundur dari suatu kegagalan melalui kombinasi peristiwa yang dapat menyebabkannya.
- *Analisis Pareto*: memakai hitungan untuk menemukan beberapa penyebab di balik sebagian besar insiden.
- *Failure mode and effects analysis (FMEA)*: menelaah setiap bagian sistem tentang bagaimana ia bisa gagal dan apa yang menyusul.

**Kehati-hatian tentang penyebab.** Sistem yang kompleks jarang memiliki satu akar masalah. Model keju Swiss (Swiss cheese model), yang dijelaskan di Wikipedia, menggambarkan kegagalan sebagai penjajaran kelemahan di beberapa lapisan pertahanan. Pencarian "satu" akar masalah cenderung berhenti pada penjelasan pertama yang nyaman. Biasanya lebih berguna menyebutkan faktor penyumbang dan memutuskan mana yang paling murah dan paling berharga untuk diubah.

**Budaya tanpa menyalahkan dan budaya adil (just culture).** Menyalahkan menghentikan pembelajaran: orang menyembunyikan kesalahan dan tinjauan menjadi defensif. Tinjauan tanpa menyalahkan melihat apa dalam sistem yang membuat tindakan itu masuk akal pada saat itu. Budaya adil, yang dijelaskan di Wikipedia, membedakan kesalahan jujur dari perilaku ceroboh dan menangani masing-masing secara berbeda. Artikel Wikipedia tentang human error dan hindsight bias menjelaskan mengapa "seseorang seharusnya tahu" jarang menjadi temuan yang berguna.

**Postmortem.** Tinjauan tertulis setelah insiden yang signifikan, mencakup apa yang terjadi, dampak, linimasa, faktor penyumbang, apa yang berjalan baik, dan tindakan. Lihat artikel Wikipedia tentang postmortem documentation. Postmortem yang baik dibaca dan ditindaklanjuti; yang buruk diarsipkan.

**Memprioritaskan masalah.** Selalu ada lebih banyak masalah daripada kapasitas. Peringkatkan menurut dampak, seperti jam pengguna yang hilang atau biaya, frekuensi, dan seberapa murah perbaikannya. Tunjukkan biaya pengulangan. Utang teknis (technical debt), istilah yang dijelaskan di Wikipedia, mencakup masalah yang diketahui yang ditunda; melacaknya membuat pilihan itu terlihat.

**Mengaitkan dengan perubahan.** Memperbaiki masalah biasanya memerlukan perubahan. Ajukan melalui praktik perubahan yang normal, dan pastikan catatan masalah ditutup ketika perbaikan dikonfirmasi. Lihat Topik 3.4 — Pemampuan Perubahan.

**Mengaitkan dengan pengetahuan.** Kesalahan yang dikenal dan solusi sementaranya harus muncul dalam artikel pengetahuan yang dapat ditemukan service desk dan staf piket. Lihat Topik 3.9 — Manajemen Pengetahuan.

**Bagaimana lensa-lensa cocok.** Manajemen masalah adalah tempat perbaikan agile bertemu operasi: temuan masuk ke backlog dan bersaing secara terbuka. AI dapat mengelompokkan insiden, menyarankan calon masalah, dan menyusun postmortem, di bawah tinjauan. Otomatisasi dapat mendeteksi pengulangan dan menerapkan solusi sementara yang teruji. Analitik menunjukkan pengulangan dan biaya.

## Praktik terbaik

1. **Cari pola, bukan hanya insiden tunggal.** Tinjau insiden secara teratur untuk melihat pengulangan menurut layanan, komponen, perubahan, dan waktu. Buka masalah ketika pola muncul.
2. **Pelihara daftar masalah yang terlihat.** Catat setiap masalah dengan pemilik, insiden yang terkait, dampak, solusi sementara, dan rencana. Buat daftar mudah dibaca penanggap.
3. **Dokumentasikan kesalahan yang dikenal beserta solusi sementara.** Tulis agar orang piket yang lelah dapat mengikutinya, dan tautkan ke basis pengetahuan service desk.
4. **Pilih metode yang sesuai dengan masalah.** Gunakan lima mengapa untuk kasus sederhana, fishbone untuk diskusi kelompok, pohon kesalahan untuk kegagalan kompleks, dan diagram Pareto untuk menemukan di mana harus fokus. Jangan menerapkan metode berat pada isu kecil.
5. **Sebutkan faktor penyumbang, bukan satu pelaku.** Daftarkan semua kondisi yang memungkinkan kegagalan dan nilai mana yang praktis untuk diubah. Hindari temuan yang berakhir dengan "kesalahan manusia".
6. **Adakan tinjauan tanpa menyalahkan.** Undang orang yang terlibat, nyatakan aturannya, dan fokus pada sistem. Bagikan tinjauan tertulis secara luas.
7. **Buat tindakan spesifik dan dimiliki.** Setiap tindakan memiliki orang yang ditunjuk, tanggal, dan cara memeriksa bahwa ia selesai. Taruh di backlog yang benar-benar dikerjakan tim.
8. **Tunjukkan biaya tidak memperbaiki.** Hitung jam insiden, dampak pada pengguna, dan beban piket untuk setiap masalah, dan pakai totalnya dalam prioritisasi. Sampaikan kepada orang yang menetapkan prioritas.
9. **Tutup lingkarnya.** Ketika perbaikan dirilis, pastikan insiden berhenti, perbarui artikel pengetahuan, dan tutup catatan. Jika masalah tetap ada, buka kembali.
10. **Tinjau praktiknya.** Periksa berapa banyak masalah yang terbuka, berapa lama, dan apakah insiden berulang menurun. Pensiunkan masalah yang tidak layak diperbaiki, dengan keputusan yang dicatat.

## Pertanyaan untuk dibahas bersama tim Anda

**Insiden mana yang telah terjadi tiga kali atau lebih dalam enam bulan terakhir, dan mengapa masih terjadi?**
Mulailah dengan contoh nyata. Harapkan campuran "kami tidak pernah sempat" dan "kami tidak tahu penyebabnya". Tanyakan berapa biaya setiap pengulangan. Lanjutkan dengan memilih satu untuk diperbaiki dan satu untuk diterima secara resmi.

**Bagaimana kita memutuskan masalah mana yang diperbaiki lebih dulu, dan siapa yang memutuskan?**
Prioritisasi sering implisit. Anda mungkin mendengar bahwa yang paling lantang menang. Tanyakan data apa yang kita pakai. Lanjutkan dengan menyepakati kriteria dan menunjukkan biaya untuk lima masalah teratas.

**Ketika terakhir kali kita menulis "kesalahan manusia" dalam tinjauan, apa yang diizinkan oleh sistem?**
Pertanyaan ini menguji praktik tanpa menyalahkan. Ambil satu tinjauan lampau dan tanyakan apa yang membuat tindakan itu mudah diambil. Cari pengaman yang hilang, informasi yang tidak jelas, atau tekanan waktu. Lanjutkan dengan menulis ulang temuan itu dalam bentuk sistem.

**Di mana kesalahan yang dikenal dan solusi sementara berada, dan dapatkah orang yang lelah menemukannya pukul 3 pagi?**
Pengetahuan yang tersebar di utas obrolan sulit ditemukan. Cobalah menemukan satu bersama-sama. Harapkan keterlambatan. Lanjutkan dengan menyepakati satu tempat dan kebiasaan penamaan.

**Tindakan apa dari tiga tinjauan terakhir kita yang masih terbuka, dan mengapa?**
Pertanyaan ini menguji tindak lanjut. Harapkan persaingan dengan pekerjaan fitur. Tanyakan siapa yang memutuskan prioritas di antara keduanya. Lanjutkan dengan menyepakati porsi kapasitas untuk tindakan masalah.

**Bagaimana AI dapat membantu kita menemukan pola dalam insiden, dan bagaimana kita memeriksa bahwa ia benar?**
AI dapat mengelompokkan insiden dan menyarankan penyebab. Ia juga dapat menemukan pola palsu. Tanyakan siapa yang meninjau dan bagaimana. Lanjutkan dengan membandingkan pengelompokan AI dengan yang manual pada sampel.

## Dalam praktik: contoh manajemen layanan

Tim platform pembelajaran sebuah universitas mengalami insiden berulang setiap beberapa minggu: mahasiswa tidak dapat mengumpulkan tugas mendekati tenggat. Service desk menerapkan solusi sementara yang sama, yaitu memulai ulang layanan antrean, yang memulihkan pengumpulan dalam 15 menit. Setiap kali insiden ditutup dan dilupakan.

Pemilik layanan mengusulkan memperlakukannya sebagai masalah. Ia mengumpulkan sembilan insiden terakhir dan mencatat waktu masing-masing, beban saat itu, dan perubahan yang dibuat pada minggu sebelumnya. Analisis Pareto tidak membantu, karena hanya ada satu kategori penyebab, tetapi linimasa menunjukkan bahwa setiap insiden terjadi dalam satu jam dari tenggat, ketika pengumpulan melonjak. Diskusi fishbone dengan pengembang dan operasi mendaftar faktor penyumbang: layanan antrean memiliki batas memori tetap; tidak ada peringatan sebelum penuh; perubahan baru-baru ini memperbesar ukuran setiap pengumpulan; dan rencana kapasitas tidak mencakup puncak tenggat.

Tim menyebutkan tiga tindakan: menaikkan batas memori dan menguji puncak baru, menambahkan peringatan pada 70 persen kapasitas, dan menulis artikel kesalahan yang dikenal agar service desk dapat melihat solusi sementara dan status perbaikannya. Mereka juga menambahkan kalender tenggat ke tinjauan kapasitas. Pemilik layanan menunjukkan kepada pimpinan bahwa masalah itu telah memakan sekitar 15 jam gangguan mahasiswa dan sembilan interupsi piket dalam tiga bulan, dan pekerjaan itu dijadwalkan sebelum sebuah fitur kecil.

Yang berubah: tenggat berikutnya berlalu tanpa insiden, dan peringatan menyala sekali pada 72 persen, memberi waktu untuk bertindak. Yang masih sulit: perubahan batas hanyalah tambalan, karena layanan antrean perlu dirancang ulang untuk berkas yang lebih besar, yang bersaing dengan peta jalan semester berikutnya; angka biaya adalah perkiraan dari waktu tiket; dan tinjauan tidak melihat apakah perubahan ukuran sebelumnya telah diuji dengan benar. Pemilik mencatat perancangan ulang sebagai masalah yang masih terbuka, dengan tanggal tinjauan.

## Empat perspektif

### Tim produk dan pengiriman

Perlakukan tindakan masalah sebagai bagian dari backlog Anda. Perbaiki penyebab dalam desain, tambahkan pengujian dan peringatan yang menangkap kegagalan yang dikenal, dan berkontribusilah pada tinjauan. Jangan menyerahkan masalah kepada operasi saja.

### Tim layanan dan operasi

Catat pola dan kesalahan yang dikenal, dan bawa data biaya dan pengulangan ke perencanaan. Jaga solusi sementara terdokumentasi dan dapat ditemukan. Jalankan tinjauan yang membuat orang merasa aman menghadirinya.

### Kepemimpinan dan tata kelola

Minta untuk melihat insiden berulang dan biayanya, dan lindungi kapasitas untuk memperbaikinya. Perhatikan ketakutan akan penyalahan dalam cara tinjauan dibahas. Lacak usia masalah yang terbuka.

### Pelanggan dan pengguna

Anda seharusnya mendengar ketika masalah yang berulang memiliki penyebab dan perbaikan. Jika Anda melaporkan masalah yang sama dua kali, katakan. Tanyakan apa yang telah dilakukan.

## Agile, AI, otomatisasi, dan analitik

### Agile

Taruh tindakan masalah di backlog yang sama dengan fitur dan tinjau bersama pemangku kepentingan, menyampaikan perbaikan kecil secara berkelanjutan. Perhatian: jika pekerjaan masalah selalu didorong ke belakang fitur, backlog tumbuh dan insiden berlanjut; sepakati porsi kapasitas yang dilindungi.

### AI

AI dapat mengelompokkan insiden, mengaitkannya dengan perubahan, menyarankan calon penyebab, dan menyusun postmortem dari linimasa, dengan seseorang memeriksa. Tunjuk pemilik untuk setiap pemakaian. Perhatian: AI dapat mengarang penyebab atau melebih-lebihkan pola; perlakukan sarannya sebagai hipotesis dan uji terhadap data. Lihat Topik 5.2 — AIOps dan Topik 5.4 — AI generatif untuk insiden, pengetahuan, dan perubahan.

### Otomatisasi

Otomatiskan deteksi pengulangan, pembuatan catatan masalah dari pola, dan solusi sementara yang teruji, dengan log dan batas. Perhatian: solusi sementara otomatis dapat menyembunyikan masalah yang memburuk; lacak seberapa sering ia menyala dan tetapkan ambang untuk eskalasi. Lihat Topik 6.6 — Otomatisasi runbook dan perbaikan otomatis.

### Analitik

Lihat tingkat pengulangan, usia dan biaya masalah yang terbuka, dan persentase insiden yang terkait dengan masalah yang dikenal. Perhatian: hitungan masalah yang ditutup dapat dimanipulasi dengan menutupnya terlalu dini atau memecahnya; periksa bahwa insiden benar-benar menurun. Lihat buku *Service Management Metrics* dan Topik 7.3 — Pengukuran dan pelaporan.

## Mode kegagalan umum

- **Memperbaiki insiden, tidak pernah penyebabnya.** Solusi sementara menjadi permanen. Buka masalah ketika pola muncul.
- **Perburuan satu akar masalah.** Tim berhenti pada jawaban yang nyaman. Daftarkan faktor penyumbang dan pilih mana yang diubah.
- **Menyalahkan.** Orang menyembunyikan kesalahan. Adakan tinjauan tanpa menyalahkan dan lacak perubahan sistem.
- **Laporan tanpa pemilik.** Tindakan didaftar dan tidak dikerjakan. Tetapkan pemilik, tanggal, dan tinjauan.
- **Biaya tidak ditunjukkan.** Masalah kalah dari fitur. Hitung biaya pengulangan.
- **Kesalahan yang dikenal sulit ditemukan.** Penanggap mulai dari awal. Simpan satu tempat yang dapat dicari.
- **Menutup tanpa memeriksa.** Perbaikan tidak berhasil. Pastikan insiden berhenti sebelum menutup.

## Model kematangan

| Dimensi | Memulai | Mengembangkan | Menstandardisasi | Mengelola | Mengorkestrasi |
|---|---|---|---|---|---|
| Identifikasi | Hanya setelah insiden besar | Sebagian insiden berulang ditinjau | Tinjauan pola teratur membuka masalah | Tren dan nyaris celaka dipakai secara proaktif | Masalah ditemukan otomatis dan lintas layanan |
| Analisis | Tebakan | Metode informal | Metode standar menurut jenis masalah | Mutu metode ditinjau | Analisis bersama lintas tim dan mitra |
| Kesalahan yang dikenal | Di kepala | Sebagian terdokumentasi | Dicatat dengan solusi sementara di tempat yang dapat ditemukan | Pemakaian dan akurasi ditinjau | Terkait dengan otomatisasi dan pengetahuan lintas layanan |
| Tindakan dan pembelajaran | Menyalahkan dan tindakan hilang | Tindak lanjut sesekali | Tindakan yang dimiliki di backlog, tinjauan tanpa menyalahkan | Pengulangan dan penyelesaian tindakan diukur | Pembelajaran dibagikan dan diterapkan di seluruh organisasi |

## Daftar periksa

- [ ] Kami meninjau insiden secara teratur untuk melihat pengulangan.
- [ ] Kami menyimpan daftar masalah yang terlihat dengan pemilik dan biaya.
- [ ] Kesalahan yang dikenal dan solusi sementara didokumentasikan di tempat yang dapat ditemukan.
- [ ] Tinjauan bebas menyalahkan dan menyebutkan faktor penyumbang.
- [ ] Setiap tindakan memiliki pemilik, tanggal, dan cara memeriksa penyelesaian.
- [ ] Pekerjaan masalah memiliki kapasitas yang dilindungi di backlog.
- [ ] Kami mengonfirmasi perbaikan sebelum menutup masalah.
- [ ] AI yang dipakai untuk analisis memiliki pemilik dan tinjauan sampel.

## Prompt AI

**Temukan insiden berulang.**

```text
Below is a list of incidents with dates, services, short descriptions, and resolutions, with names removed: [paste list].
Group those that look like repeats, state what they have in common, and list for each group two questions to investigate. Do not name causes. Mark groups you are unsure of.
List what you are unsure of.
```

**Ubah tinjauan menjadi daftar faktor penyumbang.**

```text
Here is a postmortem draft: [paste, names removed].
List contributing factors in categories (technical, process, information, people and workload, suppliers), quoting the text for each, and list what the draft does not say about each. Do not assign blame or add causes.
List what you are unsure of.
```

**Perkirakan biaya pengulangan.**

```text
For problem [name] we have these records: incident count, duration of each, users affected, on-call interruptions: [paste data].
Calculate total hours, hours per incident, and per month, showing every step. State what data is missing for a fair cost estimate. Do not guess missing numbers.
List what you are unsure of.
```

## Skill AI

- [root-cause-analysis](../../../../skills/root-cause-analysis/SKILL.md): gunakan untuk menganalisis penyebab dengan metode yang sesuai.
- [fishbone-diagram](../../../../skills/fishbone-diagram/SKILL.md): gunakan untuk menata kemungkinan penyebab dalam diskusi kelompok.
- [postmortem](../../../../skills/postmortem/SKILL.md): gunakan untuk menulis dan menindaklanjuti tinjauan tanpa menyalahkan.
- [cause-and-effect-diagram](../../../../skills/cause-and-effect-diagram/SKILL.md): gunakan untuk memetakan sebab dan akibat.
- [risks-actions-issues-decisions](../../../../skills/risks-actions-issues-decisions/SKILL.md): gunakan untuk melacak tindakan hingga selesai.

## Sumber utama

- Sidney Dekker, *The Field Guide to Understanding "Human Error"*: tentang mengapa menyalahkan individu gagal dan apa yang harus dilihat sebagai gantinya.
- Betsy Beyer dan lainnya (ed.), *Site Reliability Engineering* (2016), bab tentang budaya postmortem, gratis di sre.google.
- PeopleCert, halaman sertifikasi ITIL: uraian pemilik tentang praktik manajemen masalah.
- Wikipedia, "Root-cause analysis" dan "Postmortem documentation": ikhtisar metode dan dokumen.

## Referensi

1. Root-cause analysis — Wikipedia — https://en.wikipedia.org/wiki/Root-cause_analysis
2. Known error — Wikipedia — https://en.wikipedia.org/wiki/Known_error
3. Five whys — Wikipedia — https://en.wikipedia.org/wiki/Five_whys
4. Ishikawa diagram — Wikipedia — https://en.wikipedia.org/wiki/Ishikawa_diagram
5. Fault tree analysis — Wikipedia — https://en.wikipedia.org/wiki/Fault_tree_analysis
6. Failure mode and effects analysis — Wikipedia — https://en.wikipedia.org/wiki/Failure_mode_and_effects_analysis
7. Pareto principle — Wikipedia — https://en.wikipedia.org/wiki/Pareto_principle
8. Swiss cheese model — Wikipedia — https://en.wikipedia.org/wiki/Swiss_cheese_model
9. Just culture — Wikipedia — https://en.wikipedia.org/wiki/Just_culture
10. Postmortem documentation — Wikipedia — https://en.wikipedia.org/wiki/Postmortem_documentation
11. Technical debt — Wikipedia — https://en.wikipedia.org/wiki/Technical_debt
