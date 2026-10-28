# Analitik proses dan aliran nilai

**Analitik proses dan aliran nilai mengukur bagaimana pekerjaan benar-benar mengalir: berapa lama setiap langkah, berapa lama pekerjaan menunggu, di mana ia berputar kembali, dan di mana ia menumpuk; ia berhasil bila dibangun dari data peristiwa berstempel waktu dan jejak nyata, diarahkan pada kendala, dan diperiksa bersama orang yang mengerjakan pekerjaan itu.**

## Mengapa ini penting

Setiap orang punya gambaran tentang bagaimana pekerjaan mengalir, dan biasanya salah. Dokumen proses menunjukkan jalur bersih dari permintaan hingga selesai. Kenyataannya mencakup jalan memutar, lingkaran, serah terima yang tidak ada di diagram mana pun, dan periode panjang di mana pekerjaan tergeletak tak tersentuh. Permintaan yang menurut dokumen memakan tiga langkah dapat melewati sebelas, dan menghabiskan 90 persen hidupnya dengan menunggu.

Analitik untuk proses dan aliran nilai menggantikan gambaran itu dengan bukti. Ia dimulai dari data yang sudah dicatat sistem, seperti status tiket, stempel waktu, dan penugasan, dan dari pengamatan pekerjaan nyata. Ia merekonstruksi rute yang ditempuh pekerjaan, mengukur waktu pada setiap tahap, dan memisahkan waktu bekerja dari waktu menunggu. Wikipedia menjelaskan process mining sebagai teknik menganalisis log peristiwa untuk menemukan, memantau, dan memperbaiki proses nyata.

Hasilnya sering mengejutkan. Hambatan tidak berada di tempat yang dikira orang. Langkah yang dikeluhkan semua orang ternyata cepat, dan penundaannya ada pada serah terima sebelumnya. Sepertiga permintaan berputar kembali karena informasi yang hilang. Temuan ini mengarah pada perbaikan kecil yang spesifik, itulah sebabnya analisis ini salah satu yang paling berguna dalam manajemen layanan. Topik ini menjelaskan teknik utama, data yang dibutuhkan, dan kewaspadaannya. Ia dibangun di atas rantai nilai (Topik 1.7 — Rantai Nilai Layanan), alur dan kanban (Topik 2.3 — Alur dan kanban), pemikiran lean (Topik 2.4 — Lean dan kaizen), dan analitik (Topik 7.1 — Analitik untuk manajemen layanan). Fondasi data (Topik 7.2 — Fondasi dan tata kelola data) sangat penting di sini, karena stempel waktu dan perubahan status adalah bahan bakunya.

## Konsep inti

**Aliran nilai (value stream).** Urutan langkah yang dilakukan organisasi untuk menyampaikan produk atau layanan kepada pelanggan, seperti "menyelesaikan insiden besar" atau "memasukkan karyawan baru". Wikipedia menjelaskan value stream. Aliran nilai melewati aktivitas rantai nilai dalam urutannya sendiri. Lihat Topik 1.7 — Rantai Nilai Layanan.

**Pemetaan aliran nilai.** Teknik lean yang menggambar setiap langkah aliran nilai dengan waktu pemrosesan dan penantian antarlangkah, sehingga waktu yang dihabiskan menambah nilai dapat dibandingkan dengan total waktu berlalu. Wikipedia menjelaskannya. Peta sering digambar dengan menelusuri proses bersama orang yang terlibat dan mencatat waktu nyata.

**Process mining.** Memakai data peristiwa untuk menemukan bagaimana proses benar-benar berjalan. Setiap peristiwa memiliki pengenal kasus (seperti nomor tiket), aktivitas (seperti "ditugaskan" atau "terselesaikan"), dan stempel waktu. Dari ini, teknik merekonstruksi jalur setiap kasus, menunjukkan rute paling umum, menemukan varian, dan mengukur waktu. Wikipedia menjelaskan process mining dan process discovery. Ia melengkapi pemetaan: mining menunjukkan apa yang terjadi pada ribuan kasus, pemetaan menunjukkan mengapa pada beberapa.

**Data peristiwa.** Analisis proses bergantung pada data peristiwa yang baik: pengenal kasus yang stabil, nama aktivitas yang jelas, dan stempel waktu yang akurat. Sistem tiket dan alur kerja biasanya menyimpan perubahan status dengan waktu. Periksa bahwa data mencerminkan apa yang terjadi. Tiket yang ditandai "menunggu" mungkin tidak berarti menunggu pelanggan; status dapat ditetapkan secara massal di akhir. Lihat Topik 7.2 — Fondasi dan tata kelola data.

**Lead time, cycle time, dan waktu tunggu.** Lead time adalah waktu berlalu dari permintaan hingga selesai, seperti yang dialami pelanggan. Cycle time adalah waktu sejak pekerjaan dimulai. Wikipedia menjelaskan keduanya. Waktu tunggu, waktu yang dihabiskan dalam antrean atau menganggur antarlangkah, biasanya bagian terbesar. Definisikan setiap titik awal dan akhir dengan tepat. Hubungan antara pekerjaan dalam proses, throughput, dan lead time diberikan oleh hukum Little, yang dijelaskan di Wikipedia. Lihat Topik 2.3 — Alur dan kanban.

**Efisiensi aliran.** Persentase lead time di mana pekerjaan sedang aktif dikerjakan. Dalam banyak proses pengetahuan dan layanan, efisiensi aliran di bawah 20 persen, artinya sebagian besar waktu adalah menunggu. Ukuran ini mengarahkan perhatian pada penundaan, bukan upaya. Periksa angkanya dengan mengambil sampel kasus nyata, karena bergantung pada bagaimana waktu aktif dicatat.

**Hambatan dan kendala.** Hambatan (bottleneck) adalah langkah yang membatasi throughput seluruh proses. Teori kendala (theory of constraints), yang dijelaskan Wikipedia, berpendapat bahwa memperbaiki apa pun selain kendala tidak memperbaiki aliran keseluruhan, dan bahwa kendala harus diidentifikasi, dimanfaatkan, lalu dilonggarkan. Wikipedia menjelaskan bottleneck in production. Dalam analitik, cari langkah di mana pekerjaan mengantre, di mana waktu tunggu terpanjang, atau di mana utilisasi mendekati penuh.

**Varian dan pengerjaan ulang.** Proses yang sama berjalan dalam banyak varian: jalur bahagia, jalur dengan persetujuan, jalur dengan lingkaran. Wikipedia menjelaskan rework, pengulangan pekerjaan karena kesalahan atau informasi yang hilang. Menghitung seberapa sering kasus berputar kembali, dan mengapa, menemukan pemborosan. Lingkaran ke pelanggan karena informasi hilang pada 30 persen permintaan menunjuk pada masalah formulir.

**Serah terima.** Setiap serah terima antartim menambah penantian dan peluang hilangnya informasi. Hitung serah terima per kasus dan waktu yang dihabiskan setelah masing-masing. Tampilan swimlane, yang dijelaskan di Wikipedia, menunjukkan siapa menangani apa. Jalur dengan banyak serah terima adalah kandidat desain ulang. Lihat Topik 3.1 — Service Desk.

**Variasi.** Rata-rata menyembunyikan sebaran. Kasus yang memakan waktu sepuluh kali lebih lama dari kasus tipikal menyebabkan rasa sakit, dan mereka punya sebab yang layak dicari. Wikipedia menjelaskan statistical dispersion dan statistical process control, yang memisahkan variasi biasa dari sinyal. Laporkan distribusi dan persentil, bukan hanya rata-rata. Lihat Topik 7.3 — Pengukuran dan pelaporan.

**Prinsip Pareto.** Sejumlah kecil sebab sering menghasilkan sebagian besar efek, pola yang dijelaskan Wikipedia sebagai prinsip Pareto. Diterapkan pada penundaan, beberapa varian atau beberapa langkah sering menyumbang sebagian besar waktu yang hilang. Mulailah di sana.

**Antrean.** Ketika utilisasi mendekati kapasitas, penantian tumbuh tajam, seperti ditunjukkan teori antrean. Wikipedia menjelaskannya. Tim yang "100 persen sibuk" akan punya antrean panjang. Sisakan kelonggaran, terutama untuk pekerjaan yang tiba secara acak. Lihat Topik 3.11 — Ketersediaan, Kapasitas, dan Kinerja.

**Konformitas dan kepatuhan.** Process mining dapat memeriksa apakah kasus nyata mengikuti proses yang dimaksud, seperti apakah persetujuan yang diwajibkan terjadi. Ia membantu audit dan kendali, dengan peringatan bahwa data menunjukkan apa yang dicatat, belum tentu apa yang dilakukan. Lihat Topik 3.4 — Pemampuan Perubahan.

**Menelusuri proses.** Data menemukan di mana; orang menjelaskan mengapa. Amati pekerjaan, bicaralah dengan orang yang mengerjakannya, dan lihat sampel kasus nyata. Praktik lean menyebut ini pergi ke tempat pekerjaan terjadi, gemba. Lihat Topik 2.4 — Lean dan kaizen.

**Privasi dan keadilan.** Data proses dapat menunjukkan pola kerja individu. Pakai untuk memahami sistem, agregasikan menurut tim atau langkah, dan jangan dipakai untuk memantau atau meranking individu. Lihat Topik 5.6 — Tata kelola, risiko, dan kepatuhan AI.

**Bagaimana lensa-lensa cocok.** Analitik proses adalah sisi data dari perbaikan agile dan pemikiran lean: temukan kendala, coba perubahan kecil, ukur lagi. AI dapat membantu menemukan pola dan menyusun peta, di bawah tinjauan. Otomatisasi bertindak atas temuan, seperti menghapus serah terima. Analitik menyediakan buktinya.

## Praktik terbaik

1. **Pilih aliran nilai yang penting.** Pilih yang dipedulikan pelanggan dan yang lambat atau tidak konsisten, seperti permintaan akses atau penanganan insiden besar. Definisikan awal dan akhirnya dari sudut pandang pelanggan.
2. **Periksa data peristiwa lebih dulu.** Pastikan Anda memiliki pengenal kasus, nama aktivitas, dan stempel waktu yang tepercaya. Ambil sampel kasus terhadap kenyataan, dan catat status yang tidak berarti seperti yang dikatakannya.
3. **Petakan aliran saat ini dari data dan dari orang.** Rekonstruksi rute dengan process mining bila bisa, dan telusuri beberapa kasus nyata bersama mereka yang menanganinya. Bandingkan kedua pandangan.
4. **Pisahkan bekerja dari menunggu.** Untuk setiap langkah, ukur waktu aktif dan waktu tunggu. Hitung efisiensi aliran, dan catat penantian terpanjang.
5. **Lihat varian dan lingkaran.** Hitung varian utama, persentase kasus yang berputar kembali, dan alasannya. Tinjau kasus terpanjang satu per satu.
6. **Temukan kendala.** Identifikasi langkah yang membatasi throughput, dan fokuskan perbaikan di sana. Jangan mengoptimalkan langkah lain lebih dulu.
7. **Hitung serah terima dan informasi yang hilang.** Ukur serah terima per kasus dan penundaan setelah masing-masing, dan wawancarai sisi penerima tentang apa yang mereka kurang.
8. **Pakai distribusi dan ambil sampel kasus nyata.** Laporkan median dan persentil, dan baca sampel dari ekor. Periksa temuan otomatis dengan tangan.
9. **Ubah satu hal dan ukur lagi.** Buat perubahan kecil pada kendala, catat baseline, dan bandingkan setelah periode tertentu, mencatat perubahan lain pada periode yang sama.
10. **Pakai data untuk memahami sistem.** Agregasikan menurut tim dan langkah, jangan meranking individu, dan bagikan temuan kepada mereka yang mengerjakan pekerjaan.

## Pertanyaan untuk dibahas bersama tim Anda

**Di mana permintaan tipikal menunggu paling lama, dan siapa yang ditunggunya?**
Pakai data atau kasus yang ditelusuri. Harapkan persetujuan, antrean, dan menunggu pelanggan. Lanjutkan dengan memilih satu penantian dan menanyakan siapa yang dapat memperpendeknya.

**Berapa banyak rute berbeda yang ditempuh permintaan melalui proses kita, dan apakah semuanya perlu?**
Tunjukkan varian. Harapkan lebih banyak dari yang dikira siapa pun. Lanjutkan dengan memilih yang paling tidak berguna dan menanyakan apakah dapat dihapus.

**Berapa persen kasus kita yang berputar kembali karena informasi hilang, dan apa yang hilang?**
Hitung. Harapkan angka tinggi pada jenis permintaan tertentu. Lanjutkan dengan mengubah formulir atau respons pertama untuk memintanya lebih awal.

**Di mana serah terima kehilangan informasi, dan apa yang ingin dimiliki tim penerima?**
Tanyakan tim penerima. Harapkan beberapa butir yang sama. Lanjutkan dengan menambahkannya ke serah terima.

**Langkah mana kendalanya, dan apa yang akan terjadi pada aliran keseluruhan jika kita menggandakan kecepatannya?**
Pikirkan bersama data. Harapkan orang menyebut langkah yang paling nyaring. Lanjutkan dengan menguji jawabannya terhadap waktu antrean dan tunggu.

**Bagaimana AI dapat membantu kita menemukan pola dalam data proses kita, dan bagaimana kita memeriksa bahwa ia benar?**
AI dapat merangkum varian dan menyarankan sebab. Ia juga dapat menafsirkan derau secara berlebihan. Tanyakan siapa yang meninjau. Lanjutkan dengan membandingkan ringkasan AI dengan analisis manual atas sampel.

## Dalam praktik: contoh manajemen layanan

Departemen TI sebuah otoritas kesehatan regional rata-rata memakan 19 hari kerja untuk memberi klinisi akses ke aplikasi klinis baru. Klinisi mengeluh; laporan departemen menunjukkan setiap tugas selesai dalam targetnya. Manajer layanan memutuskan menelusuri alirannya.

Ia mengekstrak data peristiwa untuk 600 permintaan akses terbaru: perubahan status dan stempel waktu dari sistem tiket. Alat process mining merekonstruksi jalurnya. Ia menemukan sembilan varian, tiga di antaranya mencakup 80 persen kasus. Waktu bekerja rata-rata sekitar 2,5 hari. Sisanya menunggu: persetujuan manajer (rata-rata 4 hari), tanda tangan pemimpin klinis (rata-rata 5 hari), tim aplikasi mengambil tugas (3 hari), dan pemohon melengkapi sertifikat pelatihan yang hilang (4 hari, pada 35 persen kasus). Efisiensi aliran sekitar 13 persen.

Ia menelusuri lima kasus bersama orang yang terlibat. Ia mendapati bahwa persetujuan pemimpin klinis untuk sebagian besar peran hanyalah formalitas: dari 200 terakhir, tak satu pun ditolak. Ia juga mendapati bahwa lingkaran sertifikat muncul karena formulir tidak memintanya di muka, dan bahwa tim aplikasi mengumpulkan permintaan pada hari Kamis.

Tim membuat tiga perubahan. Ia menghapus persetujuan pemimpin klinis untuk peran dengan akses standar, menambahkan sertifikat ke formulir, dan mengalihkan tim aplikasi ke antrean yang dikerjakan setiap hari. Manajer mencatat baseline dan melacak 100 kasus setelah perubahan. Rata-rata lead time turun menjadi 8 hari, dengan persentil ke-90 turun dari 31 menjadi 15 hari. Ia membaca sepuluh kasus terpanjang dan mendapati sebagian besar melibatkan peran yang tidak biasa.

Yang berubah: klinisi mendapat akses lebih cepat, dan laporan kini menunjukkan lead time seperti yang dialami pelanggan. Yang masih sulit: penghapusan persetujuan membutuhkan persetujuan petugas keselamatan klinis dan masih uji coba; data tidak dapat memisahkan menunggu pelanggan dari penantian yang ditimbulkan tim, karena status "tertunda" dipakai untuk keduanya; dan manajer diminta menghasilkan analisis kecepatan teknisi individual, yang ia tolak. Ia meminta pemilik perangkat menambahkan status tersendiri untuk menunggu pelanggan.

## Empat perspektif

### Tim produk dan pengiriman

Jadikan pipeline pengiriman Anda aliran nilai dan telusuri perubahan dari gagasan hingga produksi. Sediakan peristiwa dan stempel waktu yang memungkinkan analisis, dan pakai temuan untuk menghapus penantian yang Anda timbulkan.

### Tim layanan dan operasi

Ketahui di mana pekerjaan menunggu dan mengapa. Pakai status yang konsisten, catat alasan menunggu, dan ikut menelusuri kasus nyata. Angkat masalah serah terima kepada pemilik aliran.

### Kepemimpinan dan tata kelola

Minta lead time seperti yang dilihat pelanggan, efisiensi aliran, dan kendala, bukan hanya waktu tugas. Dukung perubahan pada kendala. Jangan memakai data proses untuk meranking individu.

### Pelanggan dan pengguna

Anda mengalami seluruh aliran, termasuk menunggu. Katakan berapa lama Anda menunggu dan untuk apa, dan tanggapi dengan cepat ketika penyedia meminta informasi.

## Agile, AI, otomatisasi, dan analitik

### Agile

Pakai analisis untuk memilih perbaikan kecil berikutnya pada kendala, lakukan, dan ukur lagi, dengan pemangku kepentingan terlibat. Perhatian: jangan menjalankan program pemetaan panjang sebelum mengubah apa pun; telusuri satu aliran, ubah satu hal, dan belajar.

### AI

AI dapat menemukan varian proses, merangkum jejak, dan menyarankan kandidat sebab, dengan pemilik dan pemeriksaan. Perhatian: ringkasan AI atas data proses dapat menyajikan derau sebagai pola; periksa terhadap sampel kasus dan orang yang terlibat. Lihat Topik 5.1 — AI dalam manajemen layanan.

### Otomatisasi

Otomatiskan langkah yang menurut analisis stabil dan berulang, dan hapus serah terima yang tidak menambah nilai, dengan log dan cadangan. Perhatian: mengotomatiskan langkah yang bukan kendala tidak memperpendek lead time; periksa di mana penantiannya. Lihat Topik 6.2 — Otomatisasi alur kerja dan orkestrasi.

### Analitik

Topik ini adalah analitik untuk aliran: data peristiwa, lead time dan waktu tunggu, varian, lingkaran, dan kendala. Perhatian: stempel waktu mencerminkan bagaimana status dipakai, dan ukuran kecepatan langkah dapat dimanipulasi dengan memindahkan tiket antarstatus; verifikasi dengan kasus nyata. Lihat Topik 7.3 — Pengukuran dan pelaporan dan buku *Service Management Metrics*.

## Mode kegagalan umum

- **Memercayai proses yang terdokumentasi.** Ia berbeda dari kenyataan. Pakai data peristiwa dan kasus nyata.
- **Data peristiwa kotor.** Status dan waktu menyesatkan. Periksa dan perbaiki data lebih dulu.
- **Mengoptimalkan langkah yang salah.** Upaya pergi ke tempat yang nyaring. Temukan kendala.
- **Hanya rata-rata.** Kasus panjang tersembunyi. Pakai persentil dan baca ekornya.
- **Mengabaikan menunggu.** Upaya diukur, penundaan tidak. Pisahkan waktu bekerja dan menunggu.
- **Data tanpa orang.** Temuan kekurangan sebab. Telusuri kasus nyata bersama mereka yang mengerjakan.
- **Pemantauan individu.** Kepercayaan runtuh. Analisis sistem.

## Model kematangan

| Dimensi | Memulai | Mengembangkan | Menstandardisasi | Mengelola | Mengorkestrasi |
|---|---|---|---|---|---|
| Data | Hitungan tugas | Beberapa stempel waktu | Status dan stempel waktu konsisten untuk aliran kunci | Mutu data peristiwa dipantau | Data peristiwa terintegrasi lintas perangkat dan pemasok |
| Analisis | Proses terdokumentasi | Satu aliran ditelusuri | Analisis rutin aliran kunci: lead time, penantian, varian | Kendala diidentifikasi dan dilacak | Analisis otomatis dan berkelanjutan dengan tinjauan manusia |
| Perbaikan | Ad hoc | Perbaikan sesekali | Perubahan pada kendala, diukur | Perbaikan terkait hasil aliran | Perbaikan dikoordinasikan lintas aliran dan mitra |
| Etika | Tidak jelas | Kesadaran | Analisis tingkat tim, tanpa peringkat individu | Pemakaian ditinjau bersama staf | Privasi terbangun dalam analitik |

## Daftar periksa

- [ ] Kami memilih aliran nilai yang relevan bagi pelanggan dengan awal dan akhir yang jelas.
- [ ] Kami memeriksa data peristiwa untuk pengenal kasus, nama aktivitas, dan stempel waktu.
- [ ] Kami memetakan aliran saat ini dari data dan dari menelusuri kasus nyata.
- [ ] Kami mengukur waktu bekerja dan waktu menunggu, serta efisiensi aliran.
- [ ] Kami menghitung varian, lingkaran, dan serah terima.
- [ ] Kami mengidentifikasi kendala dan memfokuskan perubahan di sana.
- [ ] Kami melaporkan persentil dan membaca sampel dari ekor.
- [ ] Kami menganalisis pada tingkat tim dan langkah, bukan tingkat individu.

## Prompt AI

**Rangkum varian dari jalur kasus.**

```text
Here is a list of case paths (sequence of activities) with counts, and median time for each path, identifiers removed: [paste].
Describe the main variants, the share of cases each covers, where loops occur, and what the longest paths have in common. Do not infer causes.
List what you are unsure of.
```

**Temukan penantian dalam sebuah jejak.**

```text
Here are the events of five cases with timestamps and the person or team handling each: [paste, names removed].
For each case, compute time between events, identify the three longest waits, and say whether the data suggest waiting on a team, on a customer, or unclear. Do not guess where the data are silent.
List what you are unsure of.
```

**Siapkan pertanyaan untuk penelusuran proses.**

```text
We are about to walk through a value stream with the people who do the work. Here is what the data show: [paste summary].
Write ten open questions to ask on the walk, aimed at why waits and loops occur. Avoid blame and do not suggest answers.
List what you are unsure of.
```

## Skill AI

- [value-stream-map](../../../../skills/value-stream-map/SKILL.md): gunakan untuk memetakan dan mengukur aliran nilai.
- [workflow-analysis](../../../../skills/workflow-analysis/SKILL.md): gunakan untuk menganalisis langkah, serah terima, dan penantian.
- [statistical-analysis](../../../../skills/statistical-analysis/SKILL.md): gunakan untuk menelaah variasi dan ketidakpastian.
- [kaizen](../../../../skills/kaizen/SKILL.md): gunakan untuk mengubah temuan menjadi perbaikan kecil.
- [mermaid-diagram](../../../../skills/mermaid-diagram/SKILL.md): gunakan untuk menggambar aliran saat ini dan yang dituju dalam teks.

## Sumber utama

- Wil van der Aalst, *Process Mining: Data Science in Action* (edisi ke-2, 2016): rujukan utama tentang process mining.
- Mike Rother dan John Shook, *Learning to See* (1999): panduan klasik pemetaan aliran nilai.
- Eliyahu Goldratt, *The Goal* (1984): novel yang memperkenalkan teori kendala.
- Wikipedia, "Process mining" dan "Value-stream mapping": ikhtisar teknik ini.

## Referensi

1. Process mining — Wikipedia — https://en.wikipedia.org/wiki/Process_mining
2. Value-stream mapping — Wikipedia — https://en.wikipedia.org/wiki/Value-stream_mapping
3. Value stream — Wikipedia — https://en.wikipedia.org/wiki/Value_stream
4. Theory of constraints — Wikipedia — https://en.wikipedia.org/wiki/Theory_of_constraints
5. Bottleneck (production) — Wikipedia — https://en.wikipedia.org/wiki/Bottleneck_(production)
6. Cycle time — Wikipedia — https://en.wikipedia.org/wiki/Cycle_time
7. Lead time — Wikipedia — https://en.wikipedia.org/wiki/Lead_time
8. Little's law — Wikipedia — https://en.wikipedia.org/wiki/Little%27s_law
9. Rework — Wikipedia — https://en.wikipedia.org/wiki/Rework
10. Pareto principle — Wikipedia — https://en.wikipedia.org/wiki/Pareto_principle
11. Statistical process control — Wikipedia — https://en.wikipedia.org/wiki/Statistical_process_control
12. Swimlane — Wikipedia — https://en.wikipedia.org/wiki/Swimlane
