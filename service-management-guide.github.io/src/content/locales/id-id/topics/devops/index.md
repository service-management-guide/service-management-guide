# DevOps

**DevOps adalah kumpulan kebiasaan budaya, praktik kerja, dan perangkat yang menyatukan pengembangan dan operasi agar tim dapat mengubah layanan yang hidup dengan cepat dan menjalankannya secara andal; ia melengkapi ITIL dengan memindahkan banyak kontrol ke dalam pekerjaan itu sendiri, dan tidak menggantikan kebutuhan akan kepemilikan yang jelas dan bukti.**

## Mengapa ini penting

Selama bertahun-tahun, membangun perangkat lunak dan menjalankannya adalah pekerjaan terpisah di tim terpisah dengan tujuan yang berbeda. Pengembang diberi penghargaan untuk perubahan, operasi untuk stabilitas, dan kedua kelompok bertemu pada serah terima yang membuat keduanya frustrasi. Rilis dilempar melewati tembok, insiden dilempar kembali, dan pelanggan menunggu.

DevOps muncul pada akhir 2000-an sebagai tanggapan. Gagasan intinya sederhana: orang yang membangun layanan harus berbagi tanggung jawab untuk menjalankannya, dan orang yang menjalankannya harus membantu membentuk cara layanan dibangun. Tanggung jawab bersama itu, didukung otomatisasi dan umpan balik cepat, memungkinkan tim merilis sering dan pulih cepat.

Bagi manajemen layanan, DevOps adalah pengaruh besar dan kadang sumber gesekan. ITIL menguraikan praktik seperti pemampuan perubahan dan manajemen insiden, dan DevOps menguraikan bagaimana tim melaksanakannya dengan pipeline, piket bersama, dan tinjauan tanpa menyalahkan. Organisasi yang memperlakukan keduanya sebagai bertentangan berakhir dengan sistem paralel; yang menghubungkannya mendapat kontrol yang lebih cepat dan lebih terbukti. Topik ini menjelaskan gagasan-gagasannya dan menunjukkan bagaimana cocok dengan bagian lain panduan ini.

## Konsep inti

**Apa itu DevOps.** Kata ini menggabungkan "development" (pengembangan) dan "operations" (operasi). Wikipedia menggambarkannya sebagai kumpulan praktik yang mengintegrasikan pengembangan perangkat lunak dan operasi TI, yang bertujuan memperpendek siklus hidup penyampaian dan menyediakan pengiriman berkelanjutan dengan mutu tinggi. Ia lebih merupakan gerakan daripada kerangka kerja: tidak ada badan pengatur atau sertifikasi tunggal yang mendefinisikannya.

**Budaya lebih dulu.** Perubahan utamanya bersifat budaya: tujuan bersama, tanggung jawab bersama, dan kolaborasi antarperan. Tim yang mengadopsi perangkat tanpa budayanya mempertahankan serah terima lama dengan nama baru. Ringkasan yang umum adalah "you build it, you run it", dikaitkan dengan ucapan Werner Vogels dari Amazon, yang berarti tim yang membangun layanan bertanggung jawab menjalankannya.

**Tiga jalan (three ways).** Dalam novel *The Phoenix Project* dan buku pegangan yang menyusul, Gene Kim dan rekan penulis menguraikan tiga prinsip: alur (mempercepat pekerjaan dari pengembangan ke operasi ke pelanggan), umpan balik (menciptakan umpan balik cepat dari kanan ke kiri di setiap tahap), serta pembelajaran dan eksperimen berkelanjutan. Mereka mengaitkan DevOps dengan pemikiran lean; lihat Topik 2.4 — Lean dan kaizen dan Topik 2.3 — Alur dan kanban.

**CALMS.** Alat bantu ingatan yang umum untuk unsur-unsurnya: culture (budaya), automation (otomatisasi), lean, measurement (pengukuran), dan sharing (berbagi). Berguna sebagai daftar periksa tentang apa yang dilihat pada suatu tim, bukan sebagai skor kematangan.

**Praktik.** Praktik DevOps yang khas mencakup kontrol versi untuk segalanya, continuous integration dan delivery (lihat Topik 2.2 — Pengiriman berkelanjutan), infrastruktur sebagai kode (lihat Topik 6.3 — Infrastruktur sebagai kode dan GitOps), pengujian otomatis, pemantauan dan observabilitas (lihat Topik 7.4 — Observabilitas dan telemetri), piket bersama, dan tinjauan insiden tanpa menyalahkan.

**Menggeser ke kiri (shifting left).** Memindahkan pemeriksaan seperti pengujian dan keamanan lebih awal dalam siklus hidup, di mana masalah lebih murah diperbaiki. DevSecOps memperluas gagasan itu ke keamanan, dengan membangun pemeriksaan keamanan ke dalam pipeline. Wikipedia menjelaskan keduanya.

**Platform engineering.** Praktik yang lebih baru di mana satu tim membangun dan menjalankan platform internal yang dipakai tim lain untuk membangun, men-deploy, dan mengoperasikan layanan. Tujuannya adalah mengurangi beban tim produk dengan menawarkan rute standar yang sudah dirapikan. Wikipedia menjelaskan platform engineering. Diperlukan kehati-hatian: platform yang wajib dipakai tim tetapi tidak dapat mereka bentuk menjadi serah terima lainnya.

**Hubungan dengan ITIL.** ITIL 4 mengakui DevOps dan menguraikan praktiknya dengan cara yang dapat dipenuhi oleh kontrol pipeline. Keduanya menjawab pertanyaan yang berbeda: DevOps menjelaskan bagaimana tim bekerja dan mengotomatisasi; ITIL menjelaskan praktik yang dibutuhkan organisasi, seperti manajemen insiden, perubahan, dan tingkat layanan. Ringkasan yang berguna adalah bahwa DevOps sering menyediakan "bagaimana" dan ITIL "apa yang dipertimbangkan". Lihat Topik 1.2 — ITIL dan Topik 2.9 — Manajemen Layanan Agile.

**Hubungan dengan SRE.** Site reliability engineering (SRE) adalah disiplin rekayasa untuk keandalan yang tumbuh di Google; ia berbagi tujuan dengan DevOps, memakai service level objective dan error budget, dan sering memperlakukan operasi sebagai masalah perangkat lunak. Lihat Topik 2.6 — Site Reliability Engineering.

**Hubungan dengan agile.** Praktik agile berfokus pada penyampaian perangkat lunak yang berfungsi dalam potongan kecil dengan keterlibatan pemangku kepentingan; DevOps memperluas perhatian itu melewati titik rilis, ke dalam menjalankan dan memperbaiki layanan. Keduanya berbagi nilai seperti kolaborasi, umpan balik cepat, dan perbaikan berkelanjutan.

**Keberatan umum.** Sebagian staf operasi takut DevOps berarti pemangkasan pekerjaan atau penghapusan kontrol; sebagian pengembang takut itu berarti piket permanen. Kedua ketakutan itu punya kasus nyata di belakangnya. Atasi secara langsung dengan kesepakatan yang jelas tentang beban kerja, dukungan, dan kontrol apa yang tetap ada.

**Bagaimana lensa-lensa cocok.** DevOps adalah budaya penyampaian dalam lensa agile. Asisten AI kini menjadi bagian dari banyak rantai perangkat, di bawah tinjauan manusia. Otomatisasi adalah intinya. Analitik, termasuk ukuran penyampaian dan keandalan, menutup lingkar umpan balik.

## Praktik terbaik

1. **Mulai dengan tujuan bersama.** Beri pengembangan dan operasi hasil yang sama untuk dipedulikan, seperti keandalan yang terlihat pelanggan dan kecepatan perubahan yang aman. Target terpisah untuk masing-masing kelompok membangun kembali tembok.
2. **Jadikan tim bertanggung jawab atas apa yang dibangunnya.** Biarkan tim yang membangun layanan ikut menjalankannya, dengan dukungan, pelatihan, dan batas beban piket yang membuatnya berkelanjutan.
3. **Otomatiskan jalan menuju produksi.** Gunakan pipeline yang membangun, menguji, memindai, dan men-deploy dengan cara yang sama setiap kali, dengan catatan. Lihat Topik 6.4 — Pipeline dan perubahan otomatis.
4. **Taruh segalanya dalam kontrol versi.** Kode, konfigurasi, definisi infrastruktur, dan runbook. Perubahan kemudian dapat ditinjau, dilacak, dan dibalik.
5. **Geser pemeriksaan ke kiri.** Tambahkan pengujian unit, pemindaian keamanan, dan pemeriksaan kebijakan lebih awal dalam pipeline, dan perbaiki penyebab kegagalan yang berulang.
6. **Amati produksi dan bagikan apa yang Anda lihat.** Beri pengembang akses ke pemantauan yang sama yang dipakai operasi, dan tinjau bersama. Lihat Topik 3.10 — Pemantauan dan Manajemen Peristiwa.
7. **Tinjau insiden tanpa menyalahkan.** Adakan tinjauan setelah insiden signifikan, fokus pada sistem, dan lacak tindakannya. Lihat Topik 3.3 — Manajemen Masalah.
8. **Tawarkan platform, bukan mandat.** Jika Anda membangun platform internal, perlakukan tim pemakainya sebagai pelanggan: tanyakan kebutuhan mereka, publikasikan peta jalannya, dan ukur apakah platform itu membantu.
9. **Pertahankan kontrol, ubah cara kerjanya.** Di mana kontrol mengelola risiko nyata, seperti pemisahan tugas, pertahankan dan penuhi dengan otomatisasi dan catatan alih-alih dengan rapat.
10. **Ukur penyampaian dan keandalan bersama-sama.** Lihat seberapa cepat dan sering Anda berubah serta seberapa sering perubahan menimbulkan masalah dan seberapa cepat Anda pulih. Gunakan angkanya untuk belajar, bukan meranking orang.

## Pertanyaan untuk dibahas bersama tim Anda

**Di mana serah terima antara membangun dan menjalankan, dan apa yang hilang di sana?**
Sebagian besar organisasi memilikinya satu atau lebih. Tanyakan kedua sisi: apa yang tidak diketahui pengembang tentang menjalankan layanan, dan apa yang tidak diketahui operasi tentang desainnya? Harapkan daftar panjang. Lanjutkan dengan memilih satu serah terima untuk dihilangkan atau dikecilkan.

**Siapa yang dihubungi ketika layanan kita gagal pada malam hari, dan apakah mereka tahu cara memperbaikinya?**
Pertanyaan ini menelaah "you build it, you run it" dalam praktik. Jawabannya berkisar dari pengembang yang berjaga hingga tim terpisah dengan pengetahuan terbatas. Tanyakan tentang beban kerja dan pelatihan yang diberikan. Lanjutkan dengan menyepakati satu perubahan untuk memperbaiki pengetahuan atau bebannya.

**Kontrol mana yang kita miliki karena insiden masa lalu, dan dapatkah pipeline menyediakannya?**
Banyak kontrol bersifat warisan. Tanyakan risiko apa yang ditangani masing-masing dan bukti apa yang memuaskan pemiliknya. Lanjutkan dengan mencoba satu pengganti pipeline dengan partisipasi pemiliknya.

**Apa yang perlu dilakukan platform internal kita agar kita memilihnya dengan bebas?**
Pertanyaan ini menguji pemikiran platform. Jika tim hanya memakainya karena disuruh, ia tidak melayani mereka. Tanyakan apa yang mereka pakai sekarang dan mengapa. Lanjutkan dengan menyepakati sejumlah kecil wawancara pelanggan.

**Bagaimana kita meninjau insiden, dan apa yang berubah setelah yang terakhir?**
Tinjauan hanya penting jika ada tindakan yang menyusul. Minta tindakan dari tinjauan terakhir dan statusnya. Harapkan sebagian masih terbuka. Lanjutkan dengan menetapkan pemilik dan tanggal tinjauan untuk yang masih tertunda.

**Bagaimana asisten AI untuk pengodean atau operasi dipakai pada rantai perangkat kita, dan siapa yang meninjau keluarannya?**
Asisten AI dapat menulis kode, pengujian, konfigurasi, dan runbook, serta merangkum insiden. Tanyakan siapa pemilik setiap pemakaian, apa yang ditinjau seseorang, dan apa yang akan menangkap kesalahan. Lanjutkan dengan memilih satu pemakaian untuk diaudit bulan ini.

## Dalam praktik: contoh manajemen layanan

Tim digital ritel sebuah bank regional membangun aplikasi seluler, dan kelompok operasi terpisah menjalankan produksi. Rilis terjadi setiap enam minggu, dengan pembekuan tiga hari. Pengembang mengatakan operasi menghambat perubahan; operasi mengatakan pengembang mengirim kode yang belum teruji dan membiarkan mereka menanggung akibatnya. Tinjauan insiden berakhir dengan ketidaksepakatan tentang siapa yang bersalah.

Manajer rekayasa baru mengusulkan eksperimen dengan satu layanan, fitur kontrol kartu. Seorang pengembang dan seorang insinyur operasi bergabung dalam tim yang sama. Mereka menyepakati tujuan bersama: pelanggan dapat membekukan dan membuka kartu dalam waktu kurang dari lima detik, dan perubahan dapat dirilis dengan aman kapan saja. Mereka menaruh konfigurasi ke dalam kontrol versi, menambahkan pengujian otomatis dan pemindaian keamanan ke pipeline, dan menyepakati bahwa seluruh tim mengambil jadwal piket, dengan insinyur operasi melatih pengembang dan batas satu minggu dalam enam per orang. Tim risiko bank berkeras mempertahankan pemisahan tugas; tim memenuhinya dengan mewajibkan tinjauan sejawat untuk setiap perubahan dan mencatat bukti pipeline.

Setelah enam bulan, kontrol kartu dirilis setiap minggu dengan sedikit insiden, dan tim risiko menerima catatan pipeline sebagai pengganti rapat dewan perubahan untuk layanan ini. Tinjauan insiden dilakukan tanpa menyalahkan, dan dua penyebab berulang diperbaiki. Layanan lainnya tetap pada model lama.

Yang berubah: tim ini tidak lagi menunggu siklus enam minggu dan memiliki pandangan bersama tentang produksi. Yang masih sulit: organisasi lainnya skeptis, karena tim memiliki lebih banyak insinyur per layanan daripada yang lain; beban piket membuat dua pengembang mempertimbangkan keluar; dan pipeline bersama bergantung pada tim platform pusat yang memiliki backlog panjang. Manajer membawa pertanyaan staf dan platform ke kelompok pimpinan alih-alih menyajikan hasilnya sebagai templat.

## Empat perspektif

### Tim produk dan pengiriman

Miliki layanan dari ujung ke ujung: desain, bangun, rilis, dan jalankan. Pelajari cara kerja operasi, bagi piket secara adil, dan jadikan observabilitas dan runbook bagian dari definisi selesai Anda.

### Tim layanan dan operasi

Bagikan apa yang Anda ketahui tentang kegagalan dan pemulihan, bantu membangun pipeline dan pemantauan, dan bergerak menuju merekayasa pekerjaan Anda sendiri. Pertahankan kontrol yang penting, dan tunjukkan bagaimana otomatisasi memenuhinya.

### Kepemimpinan dan tata kelola

Tetapkan tujuan bersama untuk pengembangan dan operasi, danai platform dan pelatihan, dan awasi beban kerja serta batas piket. Jangan meranking tim berdasarkan angka penyampaian. Minta bukti bahwa kontrol berfungsi.

### Pelanggan dan pengguna

Anda seharusnya melihat perbaikan yang lebih cepat dan perubahan yang lebih kecil dan lebih aman. Beri tahu tim apa yang paling penting, dan berikan umpan balik tentang perubahan yang mengganggu Anda.

## Agile, AI, otomatisasi, dan analitik

### Agile

DevOps memperluas perhatian agile pada perangkat lunak yang berfungsi melewati rilis ke dalam menjalankan dan memperbaiki layanan, dengan pemangku kepentingan terlibat dan umpan balik berkelanjutan. Perhatian: jangan memperlakukannya sebagai pembelian perangkat atau nama tim baru; budayanya yang merupakan perubahan.

### AI

Asisten AI dapat membantu menulis kode, pengujian, dan definisi infrastruktur, merangkum log dan insiden, dan menyusun runbook, dengan pemilik dan tinjauan manusia atas apa pun yang sampai ke produksi. Perhatian: asisten dapat memasukkan kesalahan halus atau pola yang tidak aman; terapkan pemeriksaan pipeline yang sama seperti untuk perubahan manusia, dan lacak perubahan berbantuan AI yang gagal. Lihat Topik 5.4 — AI generatif untuk insiden, pengetahuan, dan perubahan.

### Otomatisasi

Otomatiskan jalan menuju produksi, pembuatan lingkungan, pengujian, dan operasi rutin, dengan log dan rollback. Perhatian: otomatisasi memusatkan kekuasaan di pipeline, jadi kendalikan aksesnya dan tinjau perubahan pada pipeline dengan teliti seperti perubahan pada layanan.

### Analitik

Lihat frekuensi deployment, lead time perubahan, tingkat kegagalan perubahan, dan waktu pemulihan, bersama ukuran keandalan dan pelanggan. Perhatian: ukuran penyampaian mudah dimanipulasi, dan membandingkan tim mengabaikan konteks; pakai untuk menemukan di mana harus memperbaiki. Lihat Topik 7.3 — Pengukuran dan pelaporan dan buku *Service Management Metrics*.

## Mode kegagalan umum

- **Tim DevOps yang menjadi silo baru.** Sebuah kelompok mengambil namanya dan serah terima tetap ada. Sebarkan keterampilan dan tanggung jawab lintas tim.
- **Perangkat tanpa budaya.** Pipeline dibangun dan penyalahan berlanjut. Kerjakan tujuan bersama dan praktik tinjauan.
- **Aksi heroik piket permanen.** Pengembang kelelahan. Tetapkan batas, bagi beban, dan perbaiki penyebab panggilan.
- **Platform yang diwajibkan dan tidak diinginkan siapa pun.** Tim menghindarinya. Perlakukan tim sebagai pelanggan dan ukur pemakaian atas pilihan sendiri.
- **Membuang kontrol tanpa menggantinya.** Risiko naik dan auditor keberatan. Penuhi tujuan kontrol dengan otomatisasi dan catatan.
- **Angka penyampaian sebagai target.** Tim memanipulasinya. Pakai ukuran untuk belajar.
- **Mengabaikan keamanan sampai akhir.** Temuan datang terlambat dan menghambat rilis. Geser pemeriksaan ke kiri.

## Model kematangan

| Dimensi | Memulai | Mengembangkan | Menstandardisasi | Mengelola | Mengorkestrasi |
|---|---|---|---|---|---|
| Budaya | Tujuan terpisah untuk pengembangan dan operasi | Tujuan bersama dalam satu tim | Tujuan dan tanggung jawab bersama diadopsi secara luas | Praktik budaya ditinjau dengan bukti | Dibagikan lintas tim, pemasok, dan mitra |
| Pipeline | Rilis manual | Build dan pengujian otomatis | Jalan otomatis menuju produksi untuk sebagian besar layanan | Pipeline dimiliki dan diperbaiki sebagai produk | Pipeline ditata kelola dan dibagikan di seluruh organisasi |
| Operasi | Piket terpisah | Piket bersama dalam satu tim | Piket bersama dengan batas dan dukungan | Beban piket dan penyebabnya diukur | Operasi direkayasa dan diotomatiskan lintas layanan |
| Pembelajaran | Menyalahkan | Tinjauan sesekali | Tinjauan tanpa menyalahkan dengan tindakan yang dilacak | Pembelajaran diukur dan dibagikan | Pembelajaran dibagikan lintas tim dan dengan pemasok |

## Daftar periksa

- [ ] Pengembang dan operasi berbagi tujuan untuk keandalan dan perubahan yang aman.
- [ ] Tim yang membangun layanan ikut menjalankannya, dalam batas piket yang wajar.
- [ ] Segala yang mengubah layanan berada dalam kontrol versi dan melalui pipeline.
- [ ] Pemeriksaan keamanan dan kebijakan berjalan lebih awal dalam pipeline.
- [ ] Pengembang dapat melihat pemantauan produksi.
- [ ] Kami mengadakan tinjauan tanpa menyalahkan dan melacak tindakannya.
- [ ] Kontrol yang penting dipertahankan dan dipenuhi melalui otomatisasi dan catatan.
- [ ] Bantuan AI pada rantai perangkat memiliki pemilik dan tinjauan manusia.

## Prompt AI

**Temukan serah terima yang perlu dihilangkan.**

```text
Here is a description of how a change goes from "code complete" to "running in production" in our organization: [paste steps and who does each].
List each handover, what information passes across it, and what might be lost. For each, give two questions to ask the people on either side. Do not propose solutions.
List what you are unsure of.
```

**Ringkas insiden untuk tinjauan tanpa menyalahkan.**

```text
Below is the timeline and notes from an incident: [paste timeline with names removed].
Draft a neutral summary under these headings: what happened, how it was detected, what was done, what helped, what slowed us down, and questions for the review. Do not assign blame or state causes not in the notes.
List what you are unsure of.
```

**Susun draf wawancara pelanggan platform.**

```text
We run an internal platform for [purpose]. Our users are [teams and roles].
Write ten open interview questions to learn what helps and hinders them, avoiding questions that suggest an answer. Add three things to listen for.
List what you are unsure of.
```

## Skill AI

- [postmortem](../../../../skills/postmortem/SKILL.md): gunakan untuk menjalankan tinjauan tanpa menyalahkan dengan tindakan yang dilacak.
- [shift-left-testing](../../../../skills/shift-left-testing/SKILL.md): gunakan untuk memindahkan pemeriksaan lebih awal dalam pipeline.
- [on-call-rotation](../../../../skills/on-call-rotation/SKILL.md): gunakan untuk merancang pengaturan piket yang berkelanjutan.
- [runbook](../../../../skills/runbook/SKILL.md): gunakan untuk mengubah pengetahuan operasional menjadi runbook yang singkat dan mutakhir.

## Sumber utama

- Gene Kim, Jez Humble, Patrick Debois, dan John Willis, *The DevOps Handbook*: prinsip dan praktik, dengan studi kasus.
- Gene Kim, Kevin Behr, dan George Spafford, *The Phoenix Project*: novel yang memperkenalkan gagasan ini kepada banyak pembaca.
- DORA (dora.dev): riset tentang kinerja penyampaian dan keandalan.
- Wikipedia, "DevOps": ikhtisar sejarah dan praktik.

## Referensi

1. DevOps — Wikipedia — https://en.wikipedia.org/wiki/DevOps
2. Phoenix Project — Wikipedia — https://en.wikipedia.org/wiki/Phoenix_Project
3. Site reliability engineering — Wikipedia — https://en.wikipedia.org/wiki/Site_reliability_engineering
4. Infrastructure as code — Wikipedia — https://en.wikipedia.org/wiki/Infrastructure_as_code
5. Shift-left testing — Wikipedia — https://en.wikipedia.org/wiki/Shift-left_testing
6. Platform engineering — Wikipedia — https://en.wikipedia.org/wiki/Platform_engineering
7. Werner Vogels — Wikipedia — https://en.wikipedia.org/wiki/Werner_Vogels
8. Conway's law — Wikipedia — https://en.wikipedia.org/wiki/Conway%27s_law
9. Postmortem documentation — Wikipedia — https://en.wikipedia.org/wiki/Postmortem_documentation
10. DORA — DevOps Research and Assessment — https://dora.dev
