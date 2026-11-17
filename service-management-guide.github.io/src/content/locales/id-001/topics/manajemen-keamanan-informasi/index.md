# Manajemen Keamanan Informasi

**Manajemen keamanan informasi melindungi kerahasiaan, integritas, dan ketersediaan informasi dan layanan; bagi tim layanan ia bekerja paling baik ketika pemeriksaan keamanan dibangun ke dalam pipeline pengiriman dan operasi harian, ketika insiden keamanan ditangani seperti insiden lain dengan kehati-hatian tambahan, dan ketika keputusan risiko dimiliki dan dicatat.**

## Mengapa ini penting

Setiap layanan menyimpan informasi yang diinginkan seseorang: catatan pelanggan, kredensial, kekayaan intelektual, data keuangan. Setiap layanan juga bergantung pada informasi yang benar dan tersedia ketika dibutuhkan. Kegagalan keamanan menghantam semuanya. Kebocoran data mengekspos pelanggan, catatan yang dirusak menyesatkan keputusan, dan serangan ransomware menghentikan pekerjaan.

Keamanan dapat terasa seperti dunia terpisah berisi spesialis, aturan, dan audit, yang tiba di akhir proyek untuk berkata tidak. Model itu gagal dalam pengiriman berkelanjutan, di mana perubahan sering dan pemeriksaan yang terlambat terlalu lambat. Alternatifnya, sering disebut DevSecOps, membangun keamanan ke dalam desain, kode, pipeline, dan operasi sehingga ia menjadi bagian dari setiap perubahan dan setiap shift. Spesialis keamanan menjadi mitra yang menetapkan pagar pengaman dan membantu tim memenuhinya, bukan penjaga gerbang yang memeriksa belakangan.

Manajemen layanan memiliki kepentingannya sendiri. Insiden keamanan tiba melalui service desk. Permintaan akses dan perubahan adalah keputusan keamanan. Pemasok adalah bagian dari permukaan serangan. Pengetahuan dan pemantauan mendukung deteksi. Topik ini menjelaskan gagasan utama dan cara bekerja dengan fungsi keamanan, tanpa berusaha menjadi buku teks keamanan. Ia berkaitan dengan manajemen permintaan layanan (Topik 3.6 — Manajemen Permintaan Layanan), manajemen pemasok (Topik 3.14 — Manajemen Pemasok), dan tata kelola (Topik 8.1 — Tata Kelola, Risiko, dan Kepatuhan). Ia tidak memberikan nasihat hukum atau kepatuhan; periksa aturan yang berlaku bagi Anda.

## Konsep inti

**Segitiga CIA.** Keamanan informasi bertujuan melindungi tiga sifat: kerahasiaan (confidentiality; hanya orang yang berwenang dapat melihat informasi), integritas (integrity; informasi akurat dan tidak dirusak), dan ketersediaan (availability; informasi dan layanan dapat dipakai ketika dibutuhkan). Artikel Wikipedia tentang information security menjelaskan segitiga itu. Beberapa kerangka kerja menambahkan yang lain, seperti keaslian dan akuntabilitas.

**Pendekatan berbasis risiko.** Usaha keamanan terbatas, jadi harus diarahkan ke tempat risiko paling tinggi. Risiko menggabungkan kemungkinan peristiwa merugikan dengan dampaknya. Wikipedia menjelaskan risk management secara umum. Register risiko mencatat risiko, pemilik, dan keputusan: kurangi, terima, alihkan, atau hindari.

**Sistem manajemen keamanan informasi (ISMS).** Sekumpulan kebijakan, proses, dan kontrol untuk mengelola risiko keamanan informasi, dengan tinjauan berkala. ISO/IEC 27001 menetapkan persyaratan untuk ISMS dan merupakan dasar sertifikasi. Wikipedia menjelaskannya. Lihat Topik 1.8 — Kerangka kerja dan standar manajemen layanan. NIST Cybersecurity Framework, dari lembaga Amerika Serikat dan banyak dipakai di tempat lain, menata aktivitas ke dalam fungsi seperti identifikasi, lindungi, deteksi, respons, dan pulihkan.

**Kontrol.** Tindakan yang mengurangi risiko: teknis (enkripsi, kontrol akses, penambalan), organisasi (kebijakan, pelatihan, pemisahan tugas), dan fisik (kunci, buku tamu). Kontrol harus sepadan dengan risiko dan diuji.

**Pertahanan berlapis (defense in depth).** Memakai beberapa lapis kontrol agar kegagalan satu lapis tidak berarti kegagalan semuanya. Wikipedia menjelaskan defense in depth dalam komputasi. Penyerang yang melewati satu rintangan bertemu yang lain.

**Hak istimewa paling sedikit dan akses.** Orang dan sistem harus memiliki hanya akses yang mereka butuhkan, selama mereka membutuhkannya. Wikipedia menjelaskan principle of least privilege. Autentikasi yang kuat, termasuk autentikasi multifaktor, mengurangi kemungkinan kata sandi yang dicuri memberi akses. Lihat Topik 3.6 — Manajemen Permintaan Layanan.

**Zero trust.** Pendekatan di mana tidak ada pengguna atau perangkat yang dipercaya secara bawaan karena lokasi jaringannya; setiap permintaan diverifikasi. Wikipedia menjelaskan zero trust architecture. Ia menggeser perhatian dari tepi jaringan ke identitas, keadaan perangkat, dan data.

**Manajemen kerentanan dan patch.** Menemukan kelemahan pada perangkat lunak dan sistem dan memperbaikinya tepat waktu. Artikel Wikipedia tentang vulnerability management dan Common Vulnerabilities and Exposures (CVE) menjelaskan bagaimana kelemahan diidentifikasi dan dilacak. Prioritaskan menurut keterpaparan dan dampak, bukan hanya skor keparahan. Lihat Topik 4.2 — Manajemen Aset Perangkat Lunak.

**Rantai pasok perangkat lunak.** Perangkat lunak modern memuat banyak komponen dari pihak lain: pustaka, kontainer, perangkat build. Kelemahan pada satu memengaruhi semua yang memakainya. Wikipedia menjelaskan software supply chain. Mengetahui apa yang ada dalam perangkat lunak Anda, melalui software bill of materials, membantu Anda merespons ketika kelemahan diumumkan.

**Pemodelan ancaman (threat modeling).** Cara terstruktur untuk memikirkan bagaimana sistem dapat diserang, sejak awal desain, agar mitigasi dapat direncanakan. Wikipedia menjelaskan threat model. Murah pada saat desain dan mahal belakangan.

**DevSecOps dan pipeline.** Membangun pemeriksaan keamanan ke dalam pipeline pengiriman: analisis statis kode, pemindaian dependensi, pemeriksaan rahasia dalam kode, pemindaian kontainer, dan pemeriksaan kebijakan. Wikipedia menjelaskan static application security testing. Pemeriksaan berjalan pada setiap perubahan dan menghasilkan bukti. Lihat Topik 6.4 — Pipeline dan perubahan otomatis.

**Deteksi dan pemantauan.** Pemantauan keamanan mencari tanda serangan, seperti login tidak biasa atau perpindahan data. Sistem security information and event management (SIEM) mengumpulkan dan menganalisis log dari banyak sumber. Wikipedia menjelaskan SIEM. Mereka hanya berfungsi jika log lengkap dan peringatan disetel. Lihat Topik 3.10 — Pemantauan dan Manajemen Peristiwa.

**Insiden keamanan.** Peristiwa yang membahayakan, atau mengancam membahayakan, informasi atau sistem. Wikipedia menjelaskan computer security incident management. Insiden keamanan membutuhkan peran insiden dari Topik 3.2 — Manajemen Insiden, ditambah hal ekstra: mempertahankan bukti, menahan serangan, dan memutuskan tentang pemberitahuan kepada pelanggan dan regulator, yang mungkin diwajibkan hukum di beberapa yurisdiksi. Libatkan penasihat hukum dan keamanan sejak dini.

**Orang.** Banyak serangan dimulai dari manusia: email phishing, rekayasa sosial, kebiasaan lemah. Wikipedia menjelaskan phishing dan security awareness. Pelatihan paling membantu ketika singkat, sering, dan terkait contoh nyata, dan ketika melaporkan kesalahan itu aman dan mudah.

**Privasi.** Perlindungan informasi pribadi terkait dengan, tetapi tidak sama dengan, keamanan. Undang-undang seperti General Data Protection Regulation di Uni Eropa menetapkan kewajiban untuk data pribadi. Wikipedia menjelaskan privacy by design, gagasan membangun privasi ke dalam sistem sejak awal. Carilah nasihat spesialis.

**Bagaimana lensa-lensa cocok.** Keamanan adalah area di mana kecepatan agile dan kendali bertemu paling tajam. Praktik agile memperlakukan pekerjaan keamanan sebagai bagian backlog dan melibatkan orang keamanan dalam tim. AI membantu pembela dan penyerang; ia membutuhkan tata kelolanya sendiri (lihat Topik 5.6 — Tata kelola, risiko, dan kepatuhan AI). Otomatisasi menegakkan kontrol secara konsisten. Analitik menunjukkan keterpaparan dan waktu respons.

## Praktik terbaik

1. **Mulai dengan pandangan berbasis risiko.** Daftarkan informasi dan layanan yang paling penting, ancaman yang dihadapinya, dan kontrol yang ada. Fokuskan usaha pada kesenjangan terbesar.
2. **Bekerjalah dengan keamanan sebagai mitra.** Libatkan orang keamanan dalam desain dan perencanaan. Tanyakan pagar pengaman apa yang harus diikuti tim, dan jaga agar sedikit dan jelas.
3. **Bangun pemeriksaan ke dalam pipeline.** Jalankan pemindaian kode, dependensi, kontainer, dan rahasia pada setiap perubahan. Perbaiki penyebab temuan berulang, dan biarkan pemeriksaan yang gagal menghentikan rilis di mana risikonya serius.
4. **Terapkan hak istimewa paling sedikit dan autentikasi yang kuat.** Berikan akses minimum, wajibkan autentikasi multifaktor, tinjau akses secara berkala, dan cabut ketika tidak lagi dibutuhkan.
5. **Simpan inventaris dan tambal segera.** Ketahui perangkat lunak dan sistem apa yang Anda jalankan, lacak kerentanan, dan prioritaskan menurut keterpaparan dan dampak. Tetapkan target waktu penambalan dan lacak.
6. **Kenali rantai pasok Anda.** Catat komponen dalam perangkat lunak Anda dan pemasok di balik layanan Anda. Awasi kelemahan yang diumumkan dan miliki cara menemukan sistem terdampak dengan cepat.
7. **Modelkan ancaman sejak dini.** Untuk layanan baru dan perubahan besar, luangkan satu jam berpikir seperti penyerang, dan catat mitigasi yang Anda pilih.
8. **Bersiap merespons.** Tulis rencana insiden keamanan dengan peran, kontak, penanganan bukti, dan titik keputusan. Latih, termasuk keputusan tentang pemberitahuan. Libatkan nasihat hukum.
9. **Buat pelaporan aman.** Dorong orang melaporkan pesan mencurigakan dan kesalahan dengan cepat, dan tanggapi dengan baik. Takut disalahkan menyembunyikan insiden.
10. **Catat keputusan risiko.** Ketika risiko diterima, catat siapa yang menerimanya, mengapa, dan kapan akan ditinjau. Buat register terlihat oleh pemilik layanan.

## Pertanyaan untuk dibahas bersama tim Anda

**Informasi apa yang paling berharga dan paling sensitif yang kita pegang, dan siapa yang dapat menjangkaunya?**
Buat daftar singkat. Harapkan kejutan tentang siapa yang punya akses dan di mana salinan berada. Lanjutkan dengan memilih satu kumpulan data dan memeriksa daftar aksesnya.

**Pemeriksaan keamanan mana yang berjalan pada setiap perubahan, dan mana yang hanya di akhir?**
Bandingkan pipeline dengan daftar periksa rilis. Harapkan tinjauan manual yang terlambat. Lanjutkan dengan memilih satu pemeriksaan terlambat untuk dipindahkan ke pipeline.

**Seberapa cepat kita menambal kerentanan serius, dan bagaimana kita tahu sistem mana yang terdampak?**
Tanyakan yang terakhir. Harapkan "kami kelabakan". Lanjutkan dengan menyepakati waktu target dan cara mendaftar sistem terdampak, seperti dari inventaris.

**Apa yang akan kita lakukan pada jam pertama dugaan pelanggaran, dan siapa yang memutuskan tentang memberi tahu pelanggan atau regulator?**
Jalankan diskusi skenario singkat. Harapkan celah tentang hak keputusan. Lanjutkan dengan menulis satu halaman berisi peran dan kontak, dan melibatkan penasihat hukum.

**Seberapa aman bagi staf untuk melaporkan kesalahan, seperti mengeklik tautan yang buruk?**
Pertanyaan ini menguji budaya. Tanyakan apa yang terjadi pada orang terakhir yang melakukannya. Lanjutkan dengan menyepakati bagaimana laporan diakui dan apa yang dikatakan secara terbuka.

**Bagaimana AI dapat membantu pekerjaan keamanan kita, dan risiko baru apa yang ditambahkannya?**
AI dapat merangkum peringatan dan meninjau kode. Ia juga dapat membocorkan data yang ditempelkan ke dalamnya, menghasilkan kode yang tidak aman, dan menjadi sasaran penyerang. Tanyakan siapa pemilik setiap pemakaian dan data apa yang boleh dibagikan. Lanjutkan dengan menyepakati aturan tentang apa yang tidak boleh ditempelkan ke perangkat eksternal.

## Dalam praktik: contoh manajemen layanan

Tim digital ritel sebuah bank regional mengikuti tinjauan keamanan sebelum setiap rilis, yang diadakan tim pusat sebulan sekali. Rilis mengantre untuknya. Pengembang melihatnya sebagai penghalang jalan; staf keamanan melihat temuan berulang dan sedikit waktu. Kuartal lalu, sebuah pustaka dengan kelemahan yang diketahui berada di produksi selama enam minggu sebelum tinjauan menemukannya.

Kepala keamanan dan kepala rekayasa sepakat mencoba model lain untuk satu produk. Seorang insinyur keamanan bergabung dengan tim separuh setiap minggu. Pipeline mendapat pemindaian dependensi, analisis statis, dan pemeriksaan rahasia dalam kode, dan menggagalkan build untuk temuan kritis. Tim menyimpan inventaris perangkat lunak sederhana yang dihasilkan dari pipeline. Setiap fitur besar mendapat sesi pemodelan ancaman satu jam pada saat desain. Tinjauan bulanan digantikan untuk produk ini oleh audit sampel yang ringan.

Dalam satu kuartal, pipeline menangkap dua pustaka rentan dan satu kredensial yang di-commit sebelum rilis. Ketika kelemahan pustaka yang banyak dilaporkan diumumkan, inventaris mengidentifikasi tiga layanan terdampak dalam sejam; dua ditambal pada hari yang sama dan yang ketiga dijadwalkan dengan kontrol kompensasi. Tim mendapati bahwa rencana insiden keamanannya mengasumsikan kontak yang sudah pergi, dan memperbaruinya.

Yang berubah: temuan tiba ketika murah diperbaiki, dan antrean bulanan hilang untuk produk ini. Yang masih sulit: pemeriksaan pipeline menghasilkan banyak temuan berkeparahan rendah, dan pengembang mulai mengabaikannya; inventaris tidak mencakup layanan pihak ketiga yang dipanggil produk; dan regulator bank masih meminta bukti dalam bentuk berbeda, yang memerlukan usaha untuk menghasilkannya. Kedua tim sepakat menyetel ambang dan menanyakan kepada regulator catatan pipeline mana yang akan diterimanya.

## Empat perspektif

### Tim produk dan pengiriman

Miliki keamanan sebagai bagian dari mutu: modelkan ancaman, pakai pemeriksaan pipeline, perbaiki temuan segera, dan tangani rahasia dengan hati-hati. Minta pagar pengaman kepada keamanan, dan beri tahu mereka apa yang memperlambat Anda.

### Tim layanan dan operasi

Terapkan hak istimewa paling sedikit, tambal tepat waktu, dan awasi aktivitas tidak biasa. Perlakukan insiden keamanan dengan disiplin insiden besar, dan pertahankan bukti. Laporkan apa yang Anda lihat kepada tim keamanan.

### Kepemimpinan dan tata kelola

Putuskan selera risiko, dan danai pencegahan maupun respons. Minta bukti bahwa kontrol berfungsi. Ciptakan budaya di mana melaporkan kesalahan itu aman. Ketahui siapa yang memutuskan tentang memberi tahu pelanggan dan regulator.

### Pelanggan dan pengguna

Gunakan autentikasi yang kuat, laporkan pesan mencurigakan, dan jaga kredensial Anda sendiri. Tanyakan kepada penyedia bagaimana mereka melindungi informasi Anda dan apa yang akan mereka beri tahukan dalam kasus pelanggaran.

## Agile, AI, otomatisasi, dan analitik

### Agile

Taruh pekerjaan keamanan di backlog yang sama dengan fitur, libatkan orang keamanan dalam tim, dan perbaiki dalam langkah kecil setelah setiap temuan dan insiden. Perhatian: keamanan lewat "sprint 0" atau tinjauan menit terakhir melewatkan intinya; bangun ke dalam alur kerja.

### AI

AI dapat membantu merangkum peringatan, meninjau kode untuk mencari kelemahan, dan menyusun catatan insiden, dengan seseorang bertanggung jawab atas keputusan. Ia juga membawa risiko: data bocor ke perangkat eksternal, kode hasil buatan yang tidak aman, dan manipulasi model. Tetapkan aturan tentang data dan tinjau perubahan hasil buatan AI seperti yang lain. Lihat Topik 5.6 — Tata kelola, risiko, dan kepatuhan AI.

### Otomatisasi

Otomatiskan pemindaian, penambalan sistem rutin, tinjauan akses, dan penangkapan bukti, dengan log dan kontrol atas otomatisasi itu sendiri. Perhatian: perbaikan otomatis dengan hak istimewa luas adalah sasaran; batasi dan pantau. Lihat Topik 6.4 — Pipeline dan perubahan otomatis.

### Analitik

Lacak waktu menambal, keterpaparan menurut keparahan, penyelesaian tinjauan akses, temuan keamanan per perubahan, dan waktu deteksi dan respons. Perhatian: menghitung kerentanan yang ditutup dapat menghargai perbaikan yang mudah, dan jumlah insiden bisa turun karena deteksi yang buruk; gabungkan ukuran dan uji deteksi. Lihat buku *Service Management Metrics* dan Topik 7.3 — Pengukuran dan pelaporan.

## Mode kegagalan umum

- **Keamanan di akhir.** Tinjauan menghambat rilis dan menemukan masalah terlambat. Bangun pemeriksaan ke dalam pipeline dan desain.
- **Banjir peringatan dan temuan.** Tim mengabaikan pemindai. Setel ambang dan perbaiki penyebab berulang.
- **Akses berlebih.** Akun mempertahankan hak istimewa yang tidak lagi dibutuhkan. Tinjau dan cabut secara berkala.
- **Tidak ada inventaris.** Anda tidak dapat mengatakan apa yang terdampak oleh kelemahan baru. Hasilkan dan simpan inventaris.
- **Rencana insiden tidak teruji.** Kontak sudah usang. Latih dan perbarui.
- **Menyalahkan karena melaporkan kesalahan.** Insiden disembunyikan. Tanggapi dengan baik dan cepat.
- **Penerimaan risiko tanpa pemilik.** Risiko diterima secara bawaan. Catat siapa yang menerima dan kapan ditinjau.

## Model kematangan

| Dimensi | Memulai | Mengembangkan | Menstandardisasi | Mengelola | Mengorkestrasi |
|---|---|---|---|---|---|
| Manajemen risiko | Informal | Risiko utama didaftar | Register risiko dengan pemilik dan keputusan | Risiko ditinjau terhadap insiden dan pengujian | Risiko dikelola di seluruh organisasi dan pemasok |
| Keamanan pipeline | Tinjauan manual di akhir | Beberapa pemindaian | Pemeriksaan standar pada setiap perubahan | Temuan dan perbaikan diukur | Kebijakan dan pemeriksaan disesuaikan dan diotomatiskan dengan pengawasan |
| Akses | Ad hoc | Tinjauan dasar | Hak istimewa paling sedikit dan autentikasi multifaktor menjadi standar | Akses ditinjau berdasarkan bukti | Akses disesuaikan terus-menerus lintas sistem |
| Deteksi dan respons | Reaktif | Pencatatan log dasar | Pemantauan keamanan dan rencana insiden yang dilatih | Waktu deteksi dan respons diukur | Respons terkoordinasi lintas tim dan pemasok |

## Daftar periksa

- [ ] Kami mengetahui informasi kami yang paling sensitif dan siapa yang dapat menjangkaunya.
- [ ] Pemeriksaan keamanan berjalan dalam pipeline pada setiap perubahan.
- [ ] Akses mengikuti hak istimewa paling sedikit, dengan autentikasi multifaktor dan tinjauan berkala.
- [ ] Kami menyimpan inventaris perangkat lunak dan melacak kerentanan.
- [ ] Kami memiliki rencana insiden keamanan, dengan peran, kontak, dan nasihat hukum, dan telah melatihnya.
- [ ] Staf dapat melaporkan kesalahan dengan aman.
- [ ] Penerimaan risiko dicatat dengan pemilik dan tanggal tinjauan.
- [ ] Ada aturan tentang data apa yang boleh dibagikan dengan perangkat AI.

## Prompt AI

**Siapkan sesi pemodelan ancaman.**

```text
Our system: [describe components, data, and users]. Trust boundaries we know: [list].
List questions to ask in a one-hour threat modeling session, grouped by component and data flow, and note what we have not told you. Do not list specific attacks as facts about our system.
List what you are unsure of.
```

**Ringkas temuan kerentanan untuk prioritisasi.**

```text
Here is a list of vulnerability findings with severity, affected system, and whether the system is exposed to the internet: [paste, with sensitive details removed].
Group them, list those that combine high severity with exposure, and give one question per group about business impact. Do not claim any is exploitable.
List what you are unsure of.
```

**Susun draf panduan jam pertama.**

```text
Our context: [type of organization, key systems]. Roles available: [list].
Draft a one-page first-hour checklist for a suspected data breach with steps for containment, evidence preservation, communication, and decisions that need legal or leadership input. Do not state legal obligations; list questions for our legal adviser instead.
List what you are unsure of.
```

## Skill AI

- [security-testing](../../../../skills/security-testing/SKILL.md): gunakan untuk merencanakan pemeriksaan dan pengujian keamanan.
- [legal-data-privacy-compliance](../../../../skills/legal-data-privacy-compliance/SKILL.md): gunakan untuk membingkai pertanyaan privasi bagi penasihat hukum Anda.
- [risk-register](../../../../skills/risk-register/SKILL.md): gunakan untuk mencatat risiko, pemilik, dan keputusan.
- [incident-response-plan](../../../../skills/incident-response-plan/SKILL.md): gunakan untuk merencanakan respons, termasuk peristiwa keamanan.
- [key-risk-indicators](../../../../skills/key-risk-indicators/SKILL.md): gunakan untuk memilih indikator peringatan dini.

## Sumber utama

- ISO/IEC 27001 (standar itu sendiri): persyaratan untuk sistem manajemen keamanan informasi; baca edisi terkini dari penerbitnya.
- NIST, Cybersecurity Framework (nist.gov/cyberframework): kerangka kerja yang banyak dipakai dari lembaga Amerika Serikat.
- OWASP (owasp.org): panduan komunitas tentang keamanan aplikasi.
- Wikipedia, "Information security" dan "ISO/IEC 27001": ikhtisar bidang dan standarnya.

## Referensi

1. Information security — Wikipedia — https://en.wikipedia.org/wiki/Information_security
2. ISO/IEC 27001 — Wikipedia — https://en.wikipedia.org/wiki/ISO/IEC_27001
3. NIST Cybersecurity Framework — Wikipedia — https://en.wikipedia.org/wiki/NIST_Cybersecurity_Framework
4. Risk management — Wikipedia — https://en.wikipedia.org/wiki/Risk_management
5. Principle of least privilege — Wikipedia — https://en.wikipedia.org/wiki/Principle_of_least_privilege
6. Zero trust architecture — Wikipedia — https://en.wikipedia.org/wiki/Zero_trust_architecture
7. Vulnerability management — Wikipedia — https://en.wikipedia.org/wiki/Vulnerability_management
8. Software supply chain — Wikipedia — https://en.wikipedia.org/wiki/Software_supply_chain
9. Threat model — Wikipedia — https://en.wikipedia.org/wiki/Threat_model
10. Computer security incident management — Wikipedia — https://en.wikipedia.org/wiki/Computer_security_incident_management
11. NIST Cybersecurity Framework — NIST — https://www.nist.gov/cyberframework
12. OWASP — OWASP Foundation — https://owasp.org
