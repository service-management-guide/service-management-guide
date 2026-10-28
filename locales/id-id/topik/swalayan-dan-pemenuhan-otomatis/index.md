# Swalayan dan pemenuhan otomatis

**Swalayan memungkinkan orang mendapatkan apa yang mereka butuhkan tanpa menunggu manusia, dan pemenuhan otomatis menyelesaikan permintaan di balik layar; keduanya berhasil ketika permintaan bersifat standar, identitas diverifikasi, akses mengikuti hak istimewa paling sedikit, dan jalur ke manusia tetap ada untuk segala yang tidak dapat ditangani sistem.**

## Mengapa ini penting

Sebagian besar permintaan yang sampai ke tim layanan bersifat rutin: mengatur ulang kata sandi, menambah seseorang ke grup, memasang perangkat lunak yang disetujui, memesan ruang rapat, mencari tahu cara menyambung ke jaringan nirkabel. Orang yang mengerjakannya dengan tangan memerlukan beberapa menit untuk masing-masing. Pemohon menunggu berjam-jam, karena permintaan berada dalam antrean sampai seseorang senggang, dan orang yang mengerjakannya menghabiskan hari pada pekerjaan yang menambah sedikit nilai.

Swalayan mengubah kedua sisi. Pemohon menemukan hal itu di portal atau obrolan, mengisi apa yang dibutuhkan, dan mendapatkannya, sering seketika. Di balik layar, pemenuhan otomatis menjalankan langkah-langkahnya: membuat akun, menetapkan lisensi, memberi tahu manajer, dan mencatat hasilnya. Wikipedia menjelaskan self-service sebagai sistem di mana orang melayani diri sendiri. Dalam layanan yang dijalankan dengan baik, ia meningkatkan kecepatan, konsistensi, dan biaya, dan membebaskan staf terampil untuk pekerjaan yang lebih sulit.

Pemenuhan yang berjalan tanpa manusia juga berjalan tanpa penilaian manusia. Jika sistem memberi akses atas klaim palsu, memasang hal yang salah, atau gagal diam-diam, dampaknya langsung dan berulang. Pertanyaan desainnya karena itu sama banyak tentang kendali dan tentang kenyamanan: siapa yang meminta, apakah mereka diizinkan, apa yang bisa salah, dan bagaimana kita tahu? Topik ini menjelaskan cara merancang swalayan dan pemenuhan otomatis dengan aman. Ia dibangun di atas manajemen permintaan layanan (Topik 3.6 — Manajemen Permintaan Layanan), katalog (Topik 3.8 — Manajemen Katalog Layanan), dan otomatisasi alur kerja (Topik 6.2 — Otomatisasi alur kerja dan orkestrasi), dan berbagi kepedulian dengan keamanan informasi (Topik 3.13 — Manajemen Keamanan Informasi).

## Konsep inti

**Swalayan.** Mekanisme yang memungkinkan pengguna menyelesaikan tugas sendiri, melalui portal, aplikasi, asisten obrolan, atau kios. Wikipedia menjelaskan self-service dan web portal. Ia mencakup mencari informasi, mengajukan permintaan, melacak status, dan mengambil tindakan seperti mengatur ulang kata sandi.

**Pemenuhan otomatis.** Menjalankan langkah-langkah permintaan oleh perangkat lunak. Bentuk paling sederhana adalah skrip di balik formulir; bentuk yang lebih kaya adalah alur kerja terorkestrasi lintas beberapa sistem. Wikipedia menjelaskan provisioning, penyiapan pengguna, sistem, dan layanan. Zero-touch provisioning, juga dijelaskan di sana, mengonfigurasi perangkat secara otomatis ketika pertama kali tersambung.

**Pemenuhan sepenuhnya otomatis, berbantuan, dan disetujui.** Beberapa permintaan dapat dipenuhi tanpa manusia sama sekali, seperti menambah aplikasi yang disetujui. Lainnya memerlukan persetujuan manusia lebih dulu, lalu berjalan otomatis. Lainnya lagi memerlukan teknisi untuk menjalankan satu langkah, dengan sistem mengerjakan sisanya. Pilih jalur menurut risiko dan biaya. Lihat Topik 6.1 — Strategi otomatisasi.

**Identitas dan autentikasi.** Sistem harus tahu siapa yang meminta. Wikipedia menjelaskan identity and access management, single sign-on, dan multi-factor authentication. Autentikasi kuat pada saat tindakan sensitif, seperti reset kata sandi, mencegah penyerang mengeksploitasi jalur swalayan.

**Hak dan otorisasi.** Siapa yang diizinkan meminta apa. Aturan dapat bergantung pada peran, departemen, lokasi, atau persetujuan manajer. Wikipedia menjelaskan role-based access control, di mana izin mengikuti peran. Kodekan aturan dalam katalog dan alur kerja, agar sistem, bukan pemenuh, yang memutuskan kelayakan. Lihat Topik 3.6 — Manajemen Permintaan Layanan.

**Hak istimewa paling sedikit dan batas waktu.** Berikan hanya akses yang dibutuhkan, dan bila mungkin hanya selama dibutuhkan. Wikipedia menjelaskan principle of least privilege. Akses berbatas waktu, yang kedaluwarsa kecuali diperbarui, mengurangi penumpukan izin lama. Akses istimewa, seperti hak administrator, layak mendapat kendali ekstra. Wikipedia menjelaskan privileged access management.

**Karyawan masuk, pindah, keluar.** Peristiwa dalam masa seseorang di organisasi memicu banyak permintaan. Mengotomatiskannya dari sumber tepercaya, biasanya catatan HR, menyediakan akun dan akses saat mulai, perubahan saat pindah, dan pencabutan saat keluar. Wikipedia menjelaskan onboarding. Lihat Topik 1.9 — Manajemen layanan perusahaan.

**Antarmuka standar.** Sistem dapat dihubungkan melalui application programming interface (API) dan standar untuk penyediaan identitas, seperti SCIM, yang dijelaskan di Wikipedia. Antarmuka standar mengurangi kode khusus dan membuat pemenuhan lebih kokoh. Di mana sistem tidak memiliki antarmuka, dibutuhkan orang atau otomatisasi yang rapuh.

**Verifikasi dan konfirmasi.** Setelah satu langkah, periksa bahwa ia berhasil, dan beri tahu pemohon. Pemenuhan yang melaporkan keberhasilan tanpa memeriksa adalah sumber kegagalan diam-diam. Sediakan status yang dapat dilihat pengguna.

**Pengecualian dan serah terima.** Permintaan yang tidak cocok, atau gagal, pergi ke manusia dengan konteks lengkap, dan pengguna diberi tahu. Permudah menjangkau manusia dari titik mana pun. Lihat Topik 5.3 — Service desk AI dan agen virtual.

**Penyalahgunaan dan penipuan.** Swalayan adalah sasaran rekayasa sosial, di mana penyerang membujuk atau menipu sistem atau orang agar memberi akses. Wikipedia menjelaskan social engineering. Pertahanannya mencakup pemeriksaan identitas yang kuat, batas pada seberapa banyak yang dapat dilakukan sekaligus, pemantauan pola yang tidak biasa, dan pemeriksaan ekstra untuk permintaan berisiko tinggi.

**Pengalaman dan aksesibilitas.** Swalayan terbaik mudah ditemukan dan dipakai oleh semua orang. Wikipedia menjelaskan user experience, accessibility, dan Web Content Accessibility Guidelines. Tidak semua orang dapat atau ingin memakai portal, dan kesenjangan digital, yang dijelaskan di sana, nyata. Jaga jalur lain tetap terbuka.

**Dapat diaudit.** Untuk setiap permintaan, catat siapa yang meminta, siapa yang menyetujui, apa yang dilakukan, dan kapan. Wikipedia menjelaskan audit trail. Ini mendukung penyelidikan, tinjauan akses, dan kepatuhan.

**Rollback dan kompensasi.** Jika satu langkah gagal, batalkan langkah sebelumnya atau tandai untuk dibersihkan. Jika permintaan dipenuhi secara keliru, Anda memerlukan cara untuk membaliknya. Lihat Topik 6.2 — Otomatisasi alur kerja dan orkestrasi.

**Kapasitas sistem hilir.** Otomatisasi dapat mengirim permintaan lebih cepat daripada yang dapat ditangani sistem sasaran. Pakai antrean dan batas, dan lindungi sistem kecil dari banjir.

**Bagaimana lensa-lensa cocok.** Swalayan adalah sisi lensa otomatisasi yang menghadap pengguna. Praktik agile menyarankan memulai dengan permintaan teratas dan memperbaiki dengan umpan balik. AI dapat membantu pengguna menemukan permintaan yang tepat dan mengisi formulir, di bawah batas ketat tentang apa yang boleh diberikannya. Analitik menunjukkan permintaan, kegagalan, dan peninggalan.

## Praktik terbaik

1. **Mulai dengan sepuluh permintaan teratas.** Pilih yang paling sering, standar, dan berisiko rendah, dan buat sangat baik sebelum menambah yang lain. Lihat Topik 3.8 — Manajemen Katalog Layanan.
2. **Tulis aturan kelayakan dan persetujuan ke dalam sistem.** Buat katalog mengetahui siapa yang dapat meminta apa dan siapa yang harus menyetujui. Buang persetujuan yang tidak mengelola risiko nyata.
3. **Verifikasi identitas sepadan dengan risiko.** Pakai autentikasi kuat untuk tindakan sensitif, dan pemeriksaan tambahan untuk yang berisiko tinggi. Jangan biarkan klaim di obrolan menggantikan verifikasi.
4. **Berikan hak istimewa paling sedikit, dengan kedaluwarsa.** Beri akses minimum untuk suatu waktu, dan perbarui atas permintaan. Tinjau akses secara berkala.
5. **Penuhi dalam langkah kecil yang idempoten dengan pemeriksaan.** Verifikasi setiap langkah, konfirmasi kepada pengguna, dan rancang agar pengulangan tidak berbahaya. Catat setiap tindakan.
6. **Sediakan status dan jalan keluar.** Tunjukkan kemajuan, kirim pemberitahuan pada titik yang bermakna, dan permudah menjangkau manusia.
7. **Rancang untuk kegagalan.** Putuskan apa yang terjadi ketika langkah gagal: coba ulang, kompensasi, atau serahkan kepada orang. Kirim kegagalan ke antrean terlihat dengan pemilik.
8. **Awasi penyalahgunaan.** Pantau pola yang tidak biasa, seperti banyak reset dari satu sumber atau permintaan akses yang tidak lazim, dan tambahkan batas. Perlakukan portal sebagai bagian dari perimeter keamanan Anda.
9. **Uji dengan pengguna nyata.** Amati orang memakai portal. Perbaiki kata-kata dan alur yang membingungkan, dan uji aksesibilitas. Jaga jalur lain bagi yang membutuhkan.
10. **Tinjau dan pensiunkan.** Periksa permintaan otomatis mana yang gagal, mana yang ditinggalkan, dan mana yang lebih mahal dipelihara daripada menghemat. Perbaiki atau buang.

## Pertanyaan untuk dibahas bersama tim Anda

**Permintaan mana yang dapat kita penuhi tanpa manusia hari ini jika kita memercayai identitas dan aturannya?**
Daftarkan kandidat. Harapkan reset kata sandi dan perangkat lunak standar. Tanyakan apa yang menghalangi kita memercayainya. Lanjutkan dengan memilih satu dan memperbaiki penghalangnya.

**Bagaimana kita tahu orang yang meminta adalah orang yang mereka katakan, untuk setiap jenis permintaan?**
Telusuri pemeriksaannya. Harapkan pemeriksaan yang lebih lemah dari yang diasumsikan orang. Lanjutkan dengan memperkuat satu permintaan berisiko tinggi.

**Apa hal terburuk yang dapat terjadi jika permintaan otomatis berjalan salah atau untuk orang yang salah?**
Bayangkan akses ke sistem sensitif atau penghapusan data. Harapkan beberapa kasus yang tidak nyaman. Lanjutkan dengan menambahkan persetujuan atau batas untuk kasus-kasus itu.

**Berapa lama pemberian akses berlangsung, dan siapa yang meninjaunya?**
Minta datanya. Harapkan pemberian permanen. Lanjutkan dengan memilih satu jenis akses untuk diberi tanggal kedaluwarsa.

**Apa yang dilihat pengguna ketika permintaan gagal di tengah jalan, dan siapa yang mengetahuinya?**
Cobalah kegagalan. Harapkan keheningan. Lanjutkan dengan merancang pesan, antrean, dan pemilik.

**Siapa yang mungkin tidak dapat memakai portal kita, dan bagaimana mereka mendapat bantuan?**
Pikirkan kebutuhan aksesibilitas, bahasa, dan konektivitas. Harapkan bahwa beberapa kelompok belum dipertimbangkan. Lanjutkan dengan menguji bersama beberapa pengguna nyata dari kelompok-kelompok itu.

## Dalam praktik: contoh manajemen layanan

Departemen TI sebuah dewan regional menangani sekitar 1.800 permintaan sebulan untuk 4.000 staf. Pembukaan kunci akun dan reset kata sandi menyusun 600, penyiapan karyawan baru 120, dan instalasi perangkat lunak 300. Kotak masuk bersama dan antrean telepon menampung sebagian besar. Staf di perpustakaan, depo, dan panti perawatan sering menelepon karena tidak dapat menjangkau teknisi di lokasi mereka.

Manajer layanan membangun swalayan untuk tiga jenis permintaan teratas. Untuk reset kata sandi, alur swalayan sistem identitas sendiri meminta autentikasi multifaktor, dengan cadangan panggilan video bersama teknisi bagi staf yang tidak memiliki perangkat terdaftar. Untuk perangkat lunak, katalog 40 aplikasi yang disetujui sebelumnya terpasang otomatis setelah manajer pengguna menyetujui lewat tautan email, dengan persetujuan otomatis untuk sepuluh perangkat berisiko rendah yang paling umum. Untuk karyawan baru, catatan sistem HR membuat kasus induk dan memicu pembuatan akun, kotak surat, dan keanggotaan grup oleh mesin alur kerja, dengan tugas teknisi untuk laptop.

Tim merancang untuk kendali. Kelayakan dikodekan: staf depo tidak dapat meminta perangkat lunak desain. Akses ke sistem keuangan tidak pernah otomatis; ia pergi ke tim keuangan untuk persetujuan, dengan kedaluwarsa satu tahun. Setiap langkah pemenuhan memeriksa hasilnya: setelah membuat akun, alur kerja memverifikasi bahwa login dimungkinkan dan mengirim pesan kepada pengguna. Kegagalan pergi ke antrean teknisi dengan kesalahan terlampir.

Setelah empat bulan, panggilan turun sekitar 40 persen, dan karyawan baru memiliki akun pada hari pertama. Pemantau mendeteksi ledakan upaya reset kata sandi dari satu alamat, dan tim identitas memblokirnya. Yang masih sulit: beberapa panti perawatan tidak memiliki internet yang andal, sehingga staf masih menelepon; instalasi otomatis gagal pada perangkat yang lebih tua, yang ditemukan tim hanya melalui antrean kegagalan; dan manajer menyetujui tautan email tanpa membaca, yang disampel manajer layanan dan direncanakan diatasi dengan persetujuan yang lebih sedikit dan lebih jelas. Manajer menambahkan opsi lewat telepon bagi yang tidak dapat memakai portal dan tinjauan kegagalan bulanan.

## Empat perspektif

### Tim produk dan pengiriman

Ekspos API yang bersih dan antarmuka identitas standar yang dapat dipakai pemenuhan. Sediakan konfigurasi dan paket untuk produk Anda, dan beri tahu tim tentang perubahan yang merusak otomatisasi.

### Tim layanan dan operasi

Miliki model permintaan, otomatisasi, dan antrean kegagalan. Uji jalurnya, awasi penyalahgunaan, dan simpan jalur manual untuk pengecualian. Pakai data untuk memperbaiki formulir dan aturan.

### Kepemimpinan dan tata kelola

Minta bukti bahwa pemeriksaan identitas dan aturan akses berfungsi, dan data tentang kegagalan dan peninggalan. Danai aksesibilitas dan alternatif. Jangan menghitung permintaan otomatis sebagai keberhasilan tanpa memeriksa mutunya.

### Pelanggan dan pengguna

Anda seharusnya dapat memperoleh hal rutin dengan cepat, melihat status, dan menjangkau manusia ketika tidak cocok. Jaga kredensial Anda, dan beri tahu penyedia tentang apa pun yang tidak berhasil atau tidak dapat Anda pakai.

## Agile, AI, otomatisasi, dan analitik

### Agile

Luncurkan satu jenis permintaan pada satu waktu, amati pemakaian nyata, dan perbaiki sebelum menambah lebih banyak. Libatkan pengguna dalam formulir dan kata-kata. Perhatian: portal dengan banyak permintaan yang setengah berfungsi mengikis kepercayaan; lebih sedikit tetapi lebih baik lebih diutamakan.

### AI

AI dapat membantu pengguna menemukan permintaan yang tepat, mengisi formulir di muka, dan merangkum permintaan untuk pemberi persetujuan. Ia tidak boleh memutuskan kelayakan atau memberi akses atas klaimnya sendiri; aturan dan pemeriksaan identitas yang memutuskan. Perhatian: pesan yang persuasif dapat mengarahkan asisten, jadi jaga kuasanya tetap sempit dan verifikasi di luar obrolan. Lihat Topik 5.3 — Service desk AI dan agen virtual.

### Otomatisasi

Otomatisasi pemenuhan membutuhkan langkah idempoten, pemeriksaan, log, batas, dan rollback. Perlakukan setiap alur kerja pemenuhan sebagai produk dengan pemilik. Perhatian: pemberian akses otomatis tanpa verifikasi adalah celah keamanan; sertakan pemeriksaan identitas dan tinjauan sampel. Lihat Topik 6.2 — Otomatisasi alur kerja dan orkestrasi.

### Analitik

Lacak permintaan menurut jenis, waktu pemenuhan, persentase yang sepenuhnya otomatis, kegagalan, peninggalan, pembukaan kembali, dan sinyal penyalahgunaan. Perhatian: tingkat otomatisasi dapat dinaikkan dengan memindahkan kasus bermasalah ke tempat lain, dan waktu pemenuhan yang singkat dapat menyembunyikan hasil yang salah; ambil sampel hasil. Lihat Topik 7.7 — Analitik pengalaman dan sentimen dan buku *Service Management Metrics*.

## Mode kegagalan umum

- **Pemeriksaan identitas yang lemah.** Penyerang memakai swalayan untuk mengambil alih akun. Perkuat autentikasi sepadan dengan risiko.
- **Pemberian otomatis tanpa aturan.** Orang yang salah mendapat akses. Kodekan kelayakan dan persetujuan.
- **Akses permanen.** Izin lama menumpuk. Pakai kedaluwarsa dan tinjauan.
- **Kegagalan diam.** Permintaan gagal dan tak seorang pun tahu. Verifikasi, beri tahu, dan antrekan kegagalan.
- **Tidak ada jalan ke manusia.** Pengguna terjebak. Tawarkan alternatif yang jelas.
- **Portal tidak dapat diakses.** Sebagian staf terkecualikan. Uji aksesibilitas dan simpan jalur lain.
- **Banjir pada sistem kecil.** Layanan hilir gagal. Pakai antrean dan batas.

## Model kematangan

| Dimensi | Memulai | Mengembangkan | Menstandardisasi | Mengelola | Mengorkestrasi |
|---|---|---|---|---|---|
| Swalayan | Telepon dan email | Portal untuk beberapa permintaan | Portal dan obrolan untuk permintaan teratas dengan status | Pemakaian dan peninggalan ditinjau | Pengalaman konsisten lintas fungsi dan kanal |
| Pemenuhan | Manual | Beberapa skrip | Alur kerja terorkestrasi dengan pemeriksaan dan log | Kegagalan dan mutu diukur | Otomatisasi ujung ke ujung dengan pengawasan menurut risiko |
| Identitas dan akses | Ad hoc | Pemeriksaan dasar | Autentikasi kuat, aturan peran, dan kedaluwarsa | Penyalahgunaan dipantau dan akses ditinjau | Akses disesuaikan terus-menerus lintas sistem |
| Inklusi | Tidak dipertimbangkan | Kesadaran | Aksesibilitas diuji, alternatif dipertahankan | Hasil diukur menurut kelompok | Pengalaman dirancang untuk semua pengguna |

## Daftar periksa

- [ ] Kami memilih permintaan teratas untuk swalayan dan mendeskripsikannya dengan kata-kata pengguna.
- [ ] Aturan kelayakan dan persetujuan dikodekan dalam sistem.
- [ ] Pemeriksaan identitas sepadan dengan risiko setiap permintaan.
- [ ] Akses berhak istimewa paling sedikit dengan kedaluwarsa bila mungkin.
- [ ] Setiap langkah pemenuhan diverifikasi, dicatat, dan aman diulang.
- [ ] Kegagalan masuk ke antrean dengan pemilik, dan pengguna diberi tahu.
- [ ] Kami memantau penyalahgunaan.
- [ ] Aksesibilitas diuji dan jalur alternatif tersedia.

## Prompt AI

**Nilai risiko menurut jenis permintaan.**

```text
Here is a list of our request types with what each grants or changes: [paste].
For each, describe the worst plausible outcome if fulfilled in error or for the wrong person, and suggest a question about the level of identity check and approval needed. Do not rank by importance or decide.
List what you are unsure of.
```

**Uji alur swalayan.**

```text
Here is a description of how a self-service request works, step by step: [paste].
Write 20 test cases: normal, edge, failure at each step, an impostor attempt, and a request outside eligibility. For each, state the expected result. Do not use real personal data.
List what you are unsure of.
```

**Analisis kegagalan.**

```text
Here is a list of failed automated requests with type, step that failed, error text, and date, identifiers removed: [paste].
Group failures by type and step, count each, and list questions to investigate. Do not infer causes beyond the data.
List what you are unsure of.
```

## Skill AI

- [service-catalog](../../../../skills/service-catalog/SKILL.md): gunakan untuk mendeskripsikan permintaan dan kelayakan untuk portal.
- [workflow-analysis](../../../../skills/workflow-analysis/SKILL.md): gunakan untuk menganalisis langkah pemenuhan dan titik kegagalan.
- [security-testing](../../../../skills/security-testing/SKILL.md): gunakan untuk menguji jalur swalayan terhadap penyalahgunaan.
- [raci-matrix](../../../../skills/raci-matrix/SKILL.md): gunakan untuk memperjelas siapa yang menyetujui dan siapa yang memiliki setiap pemenuhan.
- [user-story](../../../../skills/user-story/SKILL.md): gunakan untuk menyatakan kebutuhan pengguna saat merancang permintaan.

## Sumber utama

- PeopleCert, halaman sertifikasi ITIL: uraian pemilik tentang praktik manajemen permintaan layanan.
- NIST, Digital Identity Guidelines (SP 800-63): panduan tentang pembuktian identitas dan autentikasi.
- W3C, Web Content Accessibility Guidelines (WCAG): standar internasional untuk konten web yang dapat diakses.
- Wikipedia, "Self-service" dan "Identity and access management": ikhtisar gagasan ini.

## Referensi

1. Self-service — Wikipedia — https://en.wikipedia.org/wiki/Self-service
2. Provisioning — Wikipedia — https://en.wikipedia.org/wiki/Provisioning
3. Zero-touch provisioning — Wikipedia — https://en.wikipedia.org/wiki/Zero-touch_provisioning
4. Identity and access management — Wikipedia — https://en.wikipedia.org/wiki/Identity_and_access_management
5. Multi-factor authentication — Wikipedia — https://en.wikipedia.org/wiki/Multi-factor_authentication
6. Role-based access control — Wikipedia — https://en.wikipedia.org/wiki/Role-based_access_control
7. Principle of least privilege — Wikipedia — https://en.wikipedia.org/wiki/Principle_of_least_privilege
8. Privileged access management — Wikipedia — https://en.wikipedia.org/wiki/Privileged_access_management
9. Social engineering (security) — Wikipedia — https://en.wikipedia.org/wiki/Social_engineering_(security)
10. Web Content Accessibility Guidelines — Wikipedia — https://en.wikipedia.org/wiki/Web_Content_Accessibility_Guidelines
11. System for Cross-domain Identity Management — Wikipedia — https://en.wikipedia.org/wiki/System_for_Cross-domain_Identity_Management
12. Audit trail — Wikipedia — https://en.wikipedia.org/wiki/Audit_trail
