# Manajemen Permintaan Layanan

**Manajemen permintaan layanan menangani hal-hal terencana dan berulang yang diminta pengguna, seperti akses, perangkat, dan informasi, sebagai layanan terstandar dengan formulir, persetujuan, dan langkah pemenuhan yang jelas; tujuannya adalah membuat permintaan rutin cepat dan dapat diprediksi, serta mengotomatiskan apa yang aman untuk diotomatiskan.**

## Mengapa ini penting

Sebagian besar pekerjaan service desk bukan tentang hal-hal yang rusak. Ini tentang orang yang membutuhkan sesuatu: akun baru, akses ke folder, lisensi perangkat lunak, ponsel, pemesanan ruangan, perubahan nama. Permintaan ini dapat diprediksi dan berulang. Menangani masing-masing sebagai percakapan sekali jalan membuang waktu pemohon dan pemenuh.

Ketika permintaan distandarkan, ia menjadi cepat. Pemohon melihat deskripsi tentang apa yang dapat diminta, mengisi formulir singkat yang menangkap apa yang dibutuhkan pemenuh, dan mendapat status yang jelas. Persetujuan hanya terjadi di tempat yang diperlukan. Langkah pemenuhan didokumentasikan, dibagikan di antara tim, dan, bila aman, diotomatiskan. Waktu yang dihabiskan untuk hal rutin turun, dan perhatian bebas untuk pekerjaan yang lebih sulit.

Permintaan yang dikelola dengan buruk menyebabkan kerusakan tersendiri. Formulir yang tidak jelas menghasilkan pertanyaan berulang. Persetujuan yang tidak dibaca siapa pun menambah beberapa hari. Akses yang diberikan tanpa pemeriksaan menjadi risiko keamanan, dan akses yang tidak pernah dicabut menjadi risiko yang lain. Topik ini menjelaskan cara merancang, menjalankan, dan memperbaiki pemenuhan permintaan, dan bagaimana kaitannya dengan katalog layanan (Topik 3.8 — Manajemen Katalog Layanan), service desk (Topik 3.1 — Service Desk), dan otomatisasi (Topik 6.5 — Swalayan dan pemenuhan otomatis).

## Konsep inti

**Permintaan layanan.** Dalam ITIL 4, permintaan dari pengguna atau perwakilan pengguna yang berwenang yang memulai tindakan layanan yang telah disepakati sebagai bagian normal dari penyampaian layanan. Contohnya permintaan informasi, permintaan akses, permintaan barang standar, dan permintaan perubahan standar. Permintaan layanan bukan kegagalan: ia adalah sesuatu yang telah disepakati penyedia untuk dilakukan.

**Permintaan versus insiden.** Insiden adalah gangguan tak terencana atau penurunan mutu; permintaan adalah permintaan standar yang terencana. "Laptop saya tidak menyala" adalah insiden. "Saya butuh laptop" adalah permintaan. Sebagian sistem memperlakukan keduanya dalam satu perangkat dengan alur kerja berbeda. Mencampurnya dalam satu antrean menyembunyikan perbedaan cara masing-masing harus ditangani. Lihat Topik 3.2 — Manajemen Insiden.

**Model permintaan.** Deskripsi yang telah ditentukan tentang bagaimana jenis permintaan tertentu ditangani: informasi yang diperlukan, aturan persetujuan, langkah, siapa mengerjakan masing-masing, waktu target, dan cara memberi tahu pengguna. Artikel Wikipedia tentang workflow dan standardization menjelaskan gagasan umum. Model ditulis sekali, diperbaiki dari waktu ke waktu, dan dipakai ulang.

**Entri katalog.** Setiap jenis permintaan muncul di katalog layanan dengan nama yang ramah pengguna, deskripsi, siapa yang boleh meminta, dan waktu yang diharapkan. Lihat Topik 3.8 — Manajemen Katalog Layanan. Wikipedia menjelaskan katalog layanan sebagai daftar layanan yang ditawarkan.

**Persetujuan.** Sebagian permintaan memerlukan otorisasi, misalnya dari manajer atau pemegang anggaran. Desain yang baik membatasi persetujuan pada tempat ia menambah nilai: di mana uang dibelanjakan, atau di mana akses ke informasi sensitif diberikan. Rantai persetujuan yang ada karena tradisi, bukan risiko, menambah keterlambatan.

**Pemenuhan.** Pekerjaan menyampaikan apa yang diminta. Bisa manual, sebagian otomatis, atau sepenuhnya otomatis. Perkembangan yang umum adalah mendokumentasikan langkah, lalu membuat skrip untuk yang berulang, lalu menghubungkan formulir langsung ke skrip.

**Swalayan (self-service).** Pengguna mengajukan permintaan dan melacaknya melalui portal atau obrolan tanpa melibatkan service desk. Wikipedia menjelaskan self-service sebagai sistem di mana orang melayani diri sendiri. Swalayan yang baik bergantung pada formulir yang dipahami pengguna dan informasi status yang dapat mereka percaya. Lihat Topik 6.5 — Swalayan dan pemenuhan otomatis.

**Identitas dan akses.** Sebagian besar permintaan menyangkut akses. Artikel Wikipedia tentang identity and access management dan principle of least privilege menjelaskan gagasan utamanya: berikan hanya akses yang dibutuhkan, verifikasi siapa yang meminta, catat siapa yang menyetujui, dan cabut akses ketika tidak lagi dibutuhkan. Lihat Topik 3.13 — Manajemen Keamanan Informasi.

**Karyawan masuk, pindah, keluar (joiners, movers, leavers).** Peristiwa kehidupan orang dalam organisasi, seperti karyawan baru, seseorang yang berganti peran, atau yang keluar, memicu sekumpulan permintaan. Memperlakukannya sebagai satu perjalanan dengan pemilik dan daftar periksa menghindari langkah yang terlewat. Lihat Topik 1.9 — Manajemen layanan perusahaan.

**Perubahan standar.** Banyak permintaan adalah perubahan standar, yang disetujui sebelumnya dan berisiko rendah. Menghubungkan kedua praktik menghindari persetujuan ganda. Lihat Topik 3.4 — Pemampuan Perubahan.

**Target dan ekspektasi.** Setiap jenis permintaan memiliki waktu penyampaian yang diharapkan, dan pengguna melihatnya. Target harus realistis, berdasarkan kinerja sebenarnya, dan jujur di mana pemenuhan bergantung pada pihak ketiga.

**Biaya dan penagihan.** Sebagian permintaan memiliki biaya, seperti lisensi atau perangkat. Menunjukkan biaya dan siapa yang membayar membantu pengguna mengambil keputusan dan membantu pemilik melihat permintaan. Lihat Topik 4.5 — Manajemen keuangan dan FinOps.

**Pengalaman.** Pengalaman permintaan yang baik berarti pengguna dapat menemukan apa yang mereka inginkan, memahami formulir, tahu apa yang terjadi selanjutnya, dan menerimanya ketika dijanjikan. Artikel Wikipedia tentang customer experience memberi latar belakang umum.

**Bagaimana lensa-lensa cocok.** Manajemen permintaan adalah rumah bagi perbaikan berkelanjutan melalui perubahan kecil: menyederhanakan formulir, menghapus persetujuan, mengotomatiskan langkah. AI dapat membantu pengguna menemukan permintaan yang tepat dan mengisi formulir, serta membantu pemenuh bersiap. Otomatisasi mengerjakan pekerjaan berulang. Analitik menunjukkan permintaan dan keterlambatan.

## Praktik terbaik

1. **Deskripsikan permintaan dengan kata-kata pengguna.** Beri nama setiap permintaan sesuai yang diinginkan pengguna, seperti "Akses ke folder bersama", bukan objek teknisnya. Uji namanya bersama pengguna.
2. **Jaga formulir tetap singkat.** Tanyakan hanya yang dibutuhkan pemenuh, dan isi di muka apa yang sudah Anda ketahui. Uji formulir dengan pengguna baru dan amati di mana mereka ragu.
3. **Tulis model permintaan untuk setiap jenis.** Catat masukan, persetujuan, langkah, pemilik, waktu target, dan pesan untuk pengguna. Tinjau model secara berkala terhadap data nyata.
4. **Setujui hanya di tempat yang menambah nilai.** Untuk setiap persetujuan, sebutkan risiko yang ditanganinya dan orang yang memahaminya. Hapus persetujuan yang tidak pernah menolak atau mengubah permintaan, setelah memeriksa dengan pemilik risiko.
5. **Tunjukkan status dan waktu yang diharapkan.** Biarkan pengguna melihat di mana permintaan mereka berada dan kapan mengharapkannya. Kirim pesan ketika ada yang berubah atau tertunda.
6. **Otomatiskan secara bertahap.** Mulai dengan prosedur manual yang jelas, lalu buat skrip untuk langkah berulang, dan akhirnya hubungkan formulir ke skrip. Simpan log dan cadangan manual.
7. **Perlakukan akses dengan hati-hati.** Verifikasi identitas, berikan hak istimewa paling sedikit, catat persetujuan, tinjau akses secara berkala, dan buat pencabutan sama rutinnya dengan pemberian. Lihat Topik 3.13 — Manajemen Keamanan Informasi.
8. **Tangani peristiwa kehidupan sebagai perjalanan.** Untuk karyawan masuk, pindah, dan keluar, buat satu perjalanan dengan pemilik, daftar periksa, dan status bersama lintas tim.
9. **Tinjau permintaan.** Lihat permintaan mana yang paling umum, yang paling lama, dan yang ditinggalkan atau dikembalikan. Pakai temuan untuk memperbaiki formulir dan model.
10. **Pensiunkan dan gabungkan jenis permintaan.** Buang jenis yang tidak dipakai siapa pun, dan gabungkan yang hampir kembar. Katalog yang lebih pendek lebih mudah dipakai.

## Pertanyaan untuk dibahas bersama tim Anda

**Apa sepuluh permintaan yang paling sering kita terima, dan berapa lama masing-masing?**
Gunakan data nyata. Harapkan kejutan: sedikit jenis biasanya menyusun sebagian besar volume. Tanyakan mana yang lambat dan mengapa. Lanjutkan dengan memilih satu untuk disederhanakan lebih dulu.

**Persetujuan mana yang kita syaratkan, dan risiko apa yang ditangani masing-masing?**
Telusuri langkah persetujuan. Harapkan beberapa yang tidak bisa dijelaskan siapa pun. Tanyakan siapa yang menolak atau mengubah permintaan dalam setahun terakhir. Lanjutkan dengan mencoba menghapus satu persetujuan, dengan persetujuan pemilik risiko.

**Apa yang harus diketahui pengguna untuk membuat permintaan, dan apa yang mereka anggap membingungkan?**
Tanyakan kepada pengguna dan staf baru. Harapkan kebingungan tentang nama, formulir, dan siapa yang ditanya. Lanjutkan dengan menulis ulang satu formulir dan mengujinya dengan lima pengguna.

**Langkah permintaan kita yang mana yang manual dan berulang, dan dapat dibuatkan skrip?**
Daftarkan langkah dan waktu masing-masing. Harapkan penyiapan akun dan akses rutin. Tanyakan apa yang bisa salah jika dibuatkan skrip. Lanjutkan dengan memilih satu langkah dan menyepakati pengaman, pencatatan, dan cadangan manual.

**Bagaimana kita mencabut akses ketika orang pindah atau keluar?**
Pertanyaan ini menguji separuh lainnya dari manajemen akses. Harapkan celah. Tanyakan temuan audit terakhir. Lanjutkan dengan menyepakati pemilik dan pemicu pencabutan.

**Bagaimana AI dapat membantu pengguna menemukan dan menyelesaikan permintaan, dan apa yang harus tetap bersama manusia?**
AI dapat merekomendasikan permintaan yang tepat dan mengisi rincian di muka. Ia juga dapat memilih keliru atau memberi terlalu banyak lewat saran. Tanyakan di mana seseorang harus menyetujui. Lanjutkan dengan memilih uji coba yang terbatas pada permintaan berisiko rendah dengan tinjauan.

## Dalam praktik: contoh manajemen layanan

Departemen TI kantor pusat sebuah pengecer besar menangani sekitar 2.500 permintaan sebulan. Staf mengeluh bahwa permintaan "masuk ke lubang hitam". Manajer layanan meninjau data enam bulan dan mendapati bahwa lima jenis permintaan menyusun 60 persen volume: penyiapan karyawan baru, akses ke folder bersama, instalasi perangkat lunak, pemesanan ponsel, dan reset kata sandi. Waktu rata-rata untuk memenuhi permintaan folder bersama adalah empat hari, tiga di antaranya dihabiskan menunggu persetujuan dari pemilik folder yang sering tidak merespons.

Manajer bekerja dengan para pemilik untuk membuat tiga perubahan. Untuk folder bersama, formulir kini menampilkan nama pemilik, dan pemilik menyetujui dari tautan email dengan pengingat setelah satu hari; untuk folder yang diklasifikasikan sensitivitas rendah, persetujuan hanya oleh manajer pemohon. Untuk karyawan baru, satu perjalanan menggantikan empat permintaan terpisah, dimiliki HR, dengan tugas TI, fasilitas, dan penggajian. Untuk instalasi perangkat lunak, katalog aplikasi yang disetujui sebelumnya diterbitkan, dengan instalasi otomatis untuk itu, dan persetujuan hanya untuk yang lain.

Setelah dua bulan, permintaan folder bersama rata-rata memakan satu hari, dan perjalanan karyawan baru memangkas laporan perangkat yang hilang pada hari pertama. Manajer layanan mengambil sampel 50 instalasi otomatis dan menemukan tiga yang memasang versi lebih lama karena paketnya sudah usang.

Yang berubah: staf menerima apa yang mereka minta lebih cepat, dan desk menangani lebih sedikit kontak "di mana permintaan saya". Yang masih sulit: pemilik folder sensitif masih butuh beberapa hari untuk merespons dan organisasi belum menyepakati siapa yang memiliki sekitar sepertiga folder; audit akses menemukan pengguna yang mempertahankan akses dari peran sebelumnya; dan perjalanan karyawan baru bergantung pada HR memasukkan tanggal mulai tepat waktu. Manajer membawa soal kepemilikan folder dan tinjauan akses kepada tim keamanan.

## Empat perspektif

### Tim produk dan pengiriman

Sediakan informasi yang dibutuhkan untuk memenuhi permintaan terhadap layanan Anda, seperti model akses dan konfigurasi standar. Jaga antarmuka swalayan dan otomatisasi tetap rapi, dan tawarkan untuk memenuhi permintaan rutin Anda sendiri bila aman.

### Tim layanan dan operasi

Miliki model permintaan dan jaga agar singkat dan mutakhir. Otomatiskan langkah berulang dengan pengaman, dan amati keterlambatan serta permintaan yang dikembalikan. Bawa data permintaan kepada pemilik layanan.

### Kepemimpinan dan tata kelola

Minta bukti tentang berapa lama permintaan berlangsung dan di mana mereka menunggu. Dukung penghapusan persetujuan yang tidak menambah keamanan. Beri pemilik wewenang mengubah model, dan danai otomatisasi dengan kontrol yang layak.

### Pelanggan dan pengguna

Anda seharusnya dapat menemukan apa yang Anda butuhkan dengan mudah, melihat status, dan menerimanya ketika dijanjikan. Beri tahu penyedia ketika formulir membingungkan atau persetujuan tampak sia-sia. Kembalikan apa yang tidak lagi Anda butuhkan, termasuk akses.

## Agile, AI, otomatisasi, dan analitik

### Agile

Perlakukan setiap model permintaan sebagai produk kecil dan perbaiki bersama pengguna: sederhanakan formulir, uji, sesuaikan. Tinjau permintaan secara berkala bersama pemangku kepentingan. Perhatian: penyesuaian formulir yang terus-menerus membingungkan pengguna; umumkan perubahan dan jaga daftar tetap singkat.

### AI

AI dapat membantu pengguna menemukan permintaan yang tepat, mengisi formulir di muka dari deskripsi, merangkum permintaan untuk pemberi persetujuan, dan menyusun catatan pemenuhan, dengan seseorang menyetujui apa pun yang memberi akses atau membelanjakan uang. Tunjuk pemilik. Perhatian: asisten yang menyarankan akses luas "agar aman" melanggar hak istimewa paling sedikit; batasi pilihannya. Lihat Topik 5.3 — Service desk AI dan agen virtual.

### Otomatisasi

Otomatiskan pemenuhan rutin, seperti pembuatan akun, instalasi perangkat lunak, dan keanggotaan grup, dengan pemeriksaan, log, dan cadangan manual. Perhatian: pemberian akses otomatis tanpa verifikasi adalah celah keamanan; sertakan pemeriksaan identitas dan tinjau sampel. Lihat Topik 6.5 — Swalayan dan pemenuhan otomatis.

### Analitik

Lihat permintaan menurut jenis, waktu pemenuhan, waktu menunggu persetujuan, permintaan yang dikembalikan atau ditinggalkan, dan umpan balik pengguna. Perhatian: waktu rata-rata menyembunyikan keterlambatan panjang dan dapat dimanipulasi dengan menutup dan membuka kembali; lihat distribusi dan sampel. Lihat Topik 7.7 — Analitik pengalaman dan sentimen dan buku *Service Management Metrics*.

## Mode kegagalan umum

- **Nama permintaan yang tidak jelas.** Pengguna memilih yang salah. Ubah nama dengan kata-kata pengguna dan uji.
- **Formulir panjang.** Pengguna meninggalkan atau menebak. Tanyakan hanya yang dibutuhkan.
- **Persetujuan karena kebiasaan.** Keterlambatan tanpa keamanan. Pertahankan yang punya risiko yang disebutkan.
- **Otomatisasi tanpa pemeriksaan.** Akses atau barang yang salah. Tambahkan verifikasi, log, dan tinjauan.
- **Akses tidak pernah dicabut.** Akun lama tetap ada. Jadikan pencabutan pemicu rutin.
- **Tidak ada status bagi pengguna.** Kontak berulang naik. Tunjukkan status dan kirim pembaruan.
- **Katalog tumbuh tanpa dipangkas.** Pengguna tidak dapat menemukan apa pun. Pensiunkan dan gabungkan.

## Model kematangan

| Dimensi | Memulai | Mengembangkan | Menstandardisasi | Mengelola | Mengorkestrasi |
|---|---|---|---|---|---|
| Desain permintaan | Ad hoc lewat email | Beberapa formulir | Model permintaan untuk jenis umum | Model ditinjau terhadap data | Model diperbaiki terus-menerus lintas fungsi |
| Persetujuan | Banyak dan manual | Ditinjau sekali | Persetujuan terkait risiko yang disebutkan | Nilai persetujuan diukur | Persetujuan berbasis risiko disesuaikan otomatis |
| Pemenuhan | Manual | Beberapa skrip | Permintaan umum diotomatiskan dengan log | Mutu otomatisasi disampel dan ditinjau | Otomatisasi ujung ke ujung lintas sistem |
| Siklus hidup akses | Diberikan ad hoc | Tinjauan berkala | Pemicu masuk, pindah, keluar | Akses ditinjau berdasarkan bukti | Akses disesuaikan terus-menerus lintas sistem |

## Daftar periksa

- [ ] Sepuluh jenis permintaan teratas kami dideskripsikan dengan kata-kata pengguna.
- [ ] Masing-masing memiliki model permintaan dengan masukan, persetujuan, langkah, pemilik, dan waktu target.
- [ ] Setiap persetujuan memiliki risiko yang disebutkan dan pemilik yang memahaminya.
- [ ] Pengguna dapat melihat status dan waktu yang diharapkan.
- [ ] Pemenuhan otomatis memiliki pemeriksaan, log, dan cadangan manual.
- [ ] Akses diberikan dengan hak istimewa paling sedikit dan dicabut bila tidak lagi dibutuhkan.
- [ ] Perjalanan karyawan masuk, pindah, dan keluar memiliki pemilik.
- [ ] Kami meninjau permintaan dan memangkas jenis permintaan secara berkala.

## Prompt AI

**Kelompokkan permintaan menurut jenis.**

```text
Below are request titles and descriptions from the last month, with personal data removed: [paste sample].
Group them into up to twelve request types, count each, and list the three most common questions the requester or fulfiller had to ask. Do not suggest changes.
List what you are unsure of.
```

**Susun draf formulir permintaan singkat.**

```text
Request type: [name]. What the fulfiller needs to do the work: [list]. What we already know about the requester: [list].
Draft a form with only the questions we cannot already answer, in plain language, with a one-line help text for each. Do not add questions that are not needed.
List what you are unsure of.
```

**Tinjau rantai persetujuan.**

```text
Request type: [name]. Current approvals: [list with who and typical wait]. Data on past outcomes: [paste, such as number approved and refused].
For each approval, state the risk it appears to address based only on what I provided, how often it changed the outcome, and a question to ask the owner. Do not recommend removal.
List what you are unsure of.
```

## Skill AI

- [service-catalog](../../../../skills/service-catalog/SKILL.md): gunakan untuk mendeskripsikan jenis permintaan bagi pengguna.
- [workflow-analysis](../../../../skills/workflow-analysis/SKILL.md): gunakan untuk menelaah langkah, penantian, dan persetujuan.
- [raci-matrix](../../../../skills/raci-matrix/SKILL.md): gunakan untuk memperjelas siapa yang menyetujui dan siapa yang memenuhi.
- [survey-design](../../../../skills/survey-design/SKILL.md): gunakan untuk merancang umpan balik tentang pengalaman permintaan.

## Sumber utama

- PeopleCert, halaman sertifikasi ITIL: uraian pemilik tentang praktik manajemen permintaan layanan.
- Wikipedia, "Service catalog" dan "Self-service": latar belakang tentang bagaimana permintaan dideskripsikan dan diajukan.
- Wikipedia, "Principle of least privilege": dasar pemenuhan akses yang aman.
- Wikipedia, "Identity and access management": disiplin di balik banyak permintaan.

## Referensi

1. Service catalog — Wikipedia — https://en.wikipedia.org/wiki/Service_catalog
2. Self-service — Wikipedia — https://en.wikipedia.org/wiki/Self-service
3. Workflow — Wikipedia — https://en.wikipedia.org/wiki/Workflow
4. Standardization — Wikipedia — https://en.wikipedia.org/wiki/Standardization
5. Identity and access management — Wikipedia — https://en.wikipedia.org/wiki/Identity_and_access_management
6. Principle of least privilege — Wikipedia — https://en.wikipedia.org/wiki/Principle_of_least_privilege
7. Onboarding — Wikipedia — https://en.wikipedia.org/wiki/Onboarding
8. Provisioning — Wikipedia — https://en.wikipedia.org/wiki/Provisioning
9. Customer experience — Wikipedia — https://en.wikipedia.org/wiki/Customer_experience
10. Automation — Wikipedia — https://en.wikipedia.org/wiki/Automation
