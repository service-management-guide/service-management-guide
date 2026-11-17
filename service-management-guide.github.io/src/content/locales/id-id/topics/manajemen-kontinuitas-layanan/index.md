# Manajemen Kontinuitas Layanan

**Manajemen kontinuitas layanan menyiapkan organisasi untuk menjaga layanan kritis tetap berjalan, atau memulihkannya dalam waktu yang disepakati, setelah gangguan serius; ia berhasil ketika target pemulihan berasal dari dampak bisnis, rencana dilatih, dan cadangan dibuktikan dengan memulihkannya.**

## Mengapa ini penting

Sebagian besar insiden kecil: disk yang gagal, rilis yang buruk, sertifikat yang kedaluwarsa. Segelintir tidak. Pusat data kehilangan listrik selama sehari. Wilayah cloud gagal. Ransomware mengenkripsi sistem utama. Pemasok bangkrut. Pandemi menjauhkan staf dari kantor mereka. Peristiwa semacam ini mengancam organisasi, bukan hanya satu layanan, dan terjadi cukup jarang sehingga orang lupa bersiap menghadapinya.

Persiapan adalah bentuk asuransi dengan ciri khusus: nilainya hanya tampak pada hari Anda membutuhkannya, dan rencana yang belum pernah dicoba kemungkinan besar tidak akan berhasil. Cadangan yang tidak pernah dipulihkan ternyata kosong. Failover yang tidak pernah dilatih memakan sehari alih-alih sejam. Daftar kontak mencantumkan orang yang sudah pergi. Tim yang telah berlatih menemukan masalah dalam latihan, bukan dalam krisis.

Topik ini menjelaskan cara memutuskan apa yang dilindungi, menetapkan target pemulihan, merencanakan dan berlatih, dan menyertakan AI dan otomatisasi dengan bijak. Dalam ITIL 4 praktik ini adalah manajemen kontinuitas layanan. Dalam pemakaian yang lebih luas Anda juga akan bertemu manajemen kontinuitas bisnis, pemulihan bencana, dan ketahanan. Semuanya tumpang tindih, dan topik ini menjelaskan bagaimana mereka berkaitan. Ia terhubung dengan ketersediaan (Topik 3.11 — Ketersediaan, Kapasitas, dan Kinerja), manajemen insiden (Topik 3.2 — Manajemen Insiden), dan keamanan informasi (Topik 3.13 — Manajemen Keamanan Informasi).

## Konsep inti

**Kontinuitas layanan.** Dalam ITIL 4, memastikan bahwa ketersediaan dan kinerja layanan dipertahankan pada tingkat yang memadai jika terjadi bencana. Praktik ini mencakup menilai risiko dan dampak, merencanakan pemulihan, dan berlatih.

**Kontinuitas bisnis dan pemulihan bencana.** Perencanaan kontinuitas bisnis, yang dijelaskan di Wikipedia, mencakup bagaimana organisasi menjaga fungsi kritis tetap berjalan, atau melanjutkannya dengan cepat, selama dan setelah gangguan. Pemulihan bencana adalah bagian TI: memulihkan sistem, data, dan infrastruktur. Kontinuitas bisnis bertanya "bagaimana kita terus melayani pelanggan?"; pemulihan bencana bertanya "bagaimana kita mengembalikan sistemnya?". ISO 22301 adalah standar internasional untuk sistem manajemen kontinuitas bisnis, yang dijelaskan di Wikipedia; hubungannya dengan ISO/IEC 20000 dibahas di Topik 1.8 — Kerangka kerja dan standar manajemen layanan.

**Analisis dampak bisnis (BIA).** Kajian tentang apa yang terjadi pada organisasi jika setiap fungsi atau layanan tidak tersedia selama waktu tertentu. Ia mengidentifikasi layanan mana yang kritis dan seberapa cepat harus dipulihkan. Analisis ini melibatkan bisnis, bukan hanya TI, karena hanya bisnis yang mengetahui dampak sejam atau sehari yang hilang.

**Recovery time objective (RTO).** Waktu maksimum target untuk memulihkan layanan setelah gangguan. Wikipedia menjelaskannya di bawah IT disaster recovery. Ia berasal dari analisis dampak: jika sejam henti berbiaya sangat besar, RTO-nya pendek dan solusinya mahal.

**Recovery point objective (RPO).** Jumlah kehilangan data maksimum yang dapat diterima, diukur dalam waktu. RPO 15 menit berarti setelah pemulihan, tidak lebih dari 15 menit data yang boleh hilang. Ia menentukan seberapa sering data harus disalin.

**Biaya dan pertukaran.** RTO dan RPO yang lebih pendek berbiaya lebih besar: lebih banyak redundansi, replikasi, pengujian. Tunjukkan biaya setiap opsi kepada pengambil keputusan, dan catat keputusannya. Lihat Topik 4.5 — Manajemen keuangan dan FinOps.

**Cadangan dan replikasi.** Cadangan (backup) adalah salinan data yang disimpan untuk memulihkannya setelah kehilangan atau kerusakan. Replikasi menjaga salinan kedua yang terus diperbarui di tempat lain. Wikipedia menjelaskan keduanya. Replikasi tidak menggantikan cadangan: jika korupsi atau enkripsi oleh ransomware direplikasi, salinannya pun rusak. Simpan setidaknya satu cadangan yang tidak dapat diubah dari lingkungan produksi, dan uji pemulihannya.

**Lokasi dan pola pemulihan.** Opsi berkisar dari lokasi siaga yang selalu berjalan, melalui yang dapat dijalankan dalam hitungan jam, hingga memulihkan dari cadangan ke lingkungan baru. Layanan cloud mempermudah beberapa pola, seperti membuat ulang infrastruktur dari kode. Lihat Topik 6.3 — Infrastruktur sebagai kode dan GitOps. Wikipedia menjelaskan backup site.

**Ketergantungan.** Layanan kritis bergantung pada yang lain: identitas, jaringan, DNS, pemasok, sertifikat, dan orang. Rencana pemulihan harus mengikuti ketergantungan ini dan mengurutkan pemulihan. Banyak pemulihan yang gagal macet pada ketergantungan yang terlupakan, seperti sistem yang menyimpan kata sandi yang dibutuhkan untuk memulihkan yang lain.

**Rencana dan playbook.** Instruksi tertulis yang ringkas tentang siapa melakukan apa, dalam urutan apa, dan siapa yang dihubungi. Harus disimpan di tempat yang dapat dibaca ketika sistem mati, termasuk salinan luring. Peran harus ditunjuk, beserta pengganti.

**Latihan.** Latihan berkisar dari diskusi telusur skenario, simulasi, hingga failover atau pemulihan langsung. Wikipedia menjelaskan chaos engineering, di mana kegagalan diperkenalkan secara sengaja dan terkendali, untuk menemukan kelemahan. Mulailah kecil dan aman, dan tingkatkan realismenya seiring waktu. Catat apa yang terjadi dan perbaiki apa yang Anda pelajari.

**Manajemen krisis dan komunikasi.** Gangguan besar membutuhkan keputusan pimpinan, komunikasi dengan staf, pelanggan, regulator, dan publik, serta koordinasi lintas fungsi. Artikel Wikipedia tentang crisis management menjelaskan bidangnya. Putuskan siapa yang berbicara dan bagaimana di muka. Lihat Topik 3.2 — Manajemen Insiden.

**Peristiwa siber.** Ransomware dan serangan lain kini menjadi penyebab utama gangguan serius. Wikipedia menggambarkan ransomware sebagai perangkat lunak berbahaya yang mengenkripsi data dan menuntut pembayaran. Pemulihan dari serangan semacam itu memerlukan cadangan yang bersih, isolasi sistem yang terdampak, membangun ulang infrastruktur yang tepercaya, dan koordinasi dengan keamanan. Periksa hukum dan saran yang berlaku bagi Anda, termasuk tentang pelaporan; panduan ini tidak memberikan nasihat hukum.

**Pemasok.** Kontinuitas Anda bergantung pada kontinuitas pemasok Anda. Tanyakan tentang rencana mereka, dan sertakan mereka dalam latihan bila mungkin. Lihat Topik 3.14 — Manajemen Pemasok.

**Bagaimana lensa-lensa cocok.** Kontinuitas adalah tempat iterasi agile bertemu kesiapsiagaan: perbaiki rencana setelah setiap latihan. AI dapat membantu menyusun rencana dan skenario, di bawah tinjauan, tetapi tidak dapat diandalkan selama krisis. Otomatisasi membangun ulang lingkungan dan menjalankan failover. Analitik menginformasikan analisis dampak dan melacak hasil latihan.

## Praktik terbaik

1. **Mulai dari dampak bisnis.** Tanyakan kepada bisnis berapa biaya gangguan setiap layanan selama menit, jam, dan hari. Peringkatkan layanan, dan tetapkan RTO dan RPO sesuai itu. Tinjau kembali analisis setelah perubahan besar.
2. **Lindungi segelintir yang kritis lebih dulu.** Pusatkan usaha pada layanan yang kehilangannya akan sangat merugikan organisasi. Sediakan pengaturan yang lebih ringan untuk sisanya.
3. **Petakan ketergantungan.** Untuk setiap layanan kritis, daftarkan apa yang dibutuhkannya untuk berjalan dan dipulihkan, termasuk identitas, jaringan, DNS, dan pemasok. Rencanakan urutan pemulihan.
4. **Simpan cadangan yang tidak dapat diubah dan teruji.** Simpan setidaknya satu salinan yang tidak dapat diubah atau dihapus dari lingkungan produksi, dan pulihkan darinya secara teratur untuk membuktikan ia berfungsi.
5. **Tulis rencana yang singkat dan dapat dipakai.** Taruh peran, langkah pertama, kontak, dan titik keputusan dalam beberapa halaman. Simpan salinan luring dan bersama orang yang membutuhkannya.
6. **Tunjuk peran dan pengganti.** Untuk setiap peran dalam krisis, tunjuk yang utama dan setidaknya satu pengganti. Perbarui daftar ketika orang berganti pekerjaan.
7. **Berlatih secara bertahap.** Mulai dengan diskusi skenario, lanjutkan ke simulasi, lalu ke pengujian langsung terkendali atas pemulihan dan failover. Catat waktu dan masalah.
8. **Perbaiki apa yang ditemukan latihan.** Perlakukan temuan sebagai butir backlog dengan pemilik dan tanggal. Periksa pada latihan berikutnya bahwa semuanya dikerjakan.
9. **Sertakan pemasok dan pelanggan.** Minta pemasok kritis menyampaikan pengaturan kontinuitas mereka dan uji sambungannya. Sepakati dengan pelanggan layanan terdegradasi apa yang dapat mereka terima.
10. **Rencanakan komunikasi.** Siapkan siapa memberi tahu siapa, melalui kanal apa, dengan templat, termasuk kanal yang berfungsi ketika sistem Anda tidak.

## Pertanyaan untuk dibahas bersama tim Anda

**Tiga layanan mana yang paling merugikan kita jika tidak tersedia selama seminggu, dan bagaimana kita tahu?**
Tanyakan kepada bisnis, bukan hanya TI. Harapkan jawaban berbeda, yang merupakan titik awal yang berguna. Lanjutkan dengan mengatur diskusi dampak singkat untuk masing-masing dari ketiganya.

**Kapan terakhir kali kita memulihkan dari cadangan, dan berapa lama waktunya?**
Tanyakan tanggal dan hasilnya. Harapkan "kami belum pernah mencoba" atau "hanya satu berkas uji". Lanjutkan dengan menjadwalkan pemulihan penuh satu sistem penting di lingkungan yang aman.

**Apa yang bergantung pada pemulihan kita yang belum kita uji, seperti sistem identitas, DNS, atau seseorang?**
Gambar rantai untuk satu layanan. Cari ketergantungan melingkar. Lanjutkan dengan memilih satu ketergantungan untuk diuji.

**Jika sistem komunikasi biasa kita mati, bagaimana kita menjangkau satu sama lain dan pelanggan kita?**
Banyak rencana mengasumsikan email dan obrolan. Tanyakan tentang daftar telepon dan kanal di luar jalur. Lanjutkan dengan menguji pohon telepon.

**Apa yang akan kita lakukan pada jam pertama serangan ransomware, dan siapa yang memutuskan?**
Jalankan diskusi skenario singkat. Harapkan ketidaksepakatan tentang mengisolasi sistem dan tentang kontak dengan pihak berwenang. Lanjutkan dengan menulis panduan jam pertama satu halaman bersama keamanan.

**Di mana AI dapat membantu kita bersiap atau merespons, dan di mana kita harus mengandalkan rencana manusia yang telah disiapkan?**
AI dapat menyusun skenario, memeriksa rencana untuk mencari celah, dan merangkum log. Selama gangguan, layanan AI itu sendiri mungkin tidak tersedia. Tanyakan apa yang diasumsikan rencana. Lanjutkan dengan memeriksa bahwa langkah kritis tidak bergantung pada layanan AI.

## Dalam praktik: contoh manajemen layanan

Sistem ruang kendali sebuah distributor listrik regional, yang menunjukkan keadaan jaringan kepada operator, harus dipulihkan dalam dua jam setelah kegagalan. Rencana pemulihan bencana distributor menyatakan demikian. Rencana itu ditulis empat tahun lalu dan terakhir diuji sebagai latihan di atas kertas.

Manajer kontinuitas layanan yang baru meminta pengujian langsung. Tim setuju memulihkan aplikasi ruang kendali di lingkungan terpisah dari cadangan malam sebelumnya, dengan manajer operasi mengamati. Pemulihan memakan sebelas jam, bukan dua. Tiga masalah muncul: cadangan mencakup berkas aplikasi tetapi bukan basis data konfigurasinya, yang dipegang tim lain; kata sandi yang diperlukan untuk pemulihan disimpan di brankas yang merupakan bagian dari pusat data yang sama; dan orang yang mengetahui pengaturan jaringan untuk lokasi pemulihan sedang cuti panjang dan tidak punya pengganti.

Tim memperbaikinya selama tiga bulan. Mereka menambahkan basis data konfigurasi ke jadwal cadangan, membuat penyimpanan kredensial break-glass yang dipegang luring dalam amplop tersegel dan di akun cloud terpisah, dan melatih dua insinyur tambahan di lokasi pemulihan. Pengujian kedua memulihkan aplikasi dalam 2 jam 40 menit. Yang ketiga, dengan awal yang sengaja tidak diumumkan, memakan 1 jam 50 menit.

Yang berubah: target tercapai dalam praktik, dan rencana menjadi dokumen yang telah dipakai orang. Yang masih sulit: pengujian memakai salinan data produksi dan tidak mencakup sambungan ke peralatan lapangan, yang hanya dapat diuji bersama operator jaringan listrik; organisasi belum melatih kehilangan seluruh pusat data, hanya satu aplikasi; dan biaya memelihara lokasi pemulihan dipertanyakan setiap tahun. Manajer mempertahankan kalender latihan dan menyajikan biaya terhadap analisis dampak.

## Empat perspektif

### Tim produk dan pengiriman

Jadikan pemulihan bagian dari desain: bangun ulang dari kode, cadangkan data dan konfigurasi, hindari ketergantungan tersembunyi. Ikut dalam latihan dan perbaiki apa yang ditemukannya.

### Tim layanan dan operasi

Kenali peran dan pengganti Anda, jaga runbook tetap mutakhir, dan latih pemulihan dan failover. Catat berapa lama hal-hal sebenarnya berlangsung dan beri tahu para pemilik.

### Kepemimpinan dan tata kelola

Putuskan target pemulihan bersama bisnis dan danai apa yang dibutuhkannya. Ikut dalam latihan, termasuk keputusan dan komunikasi. Minta melihat hasil pengujian, bukan hanya rencana.

### Pelanggan dan pengguna

Tanyakan pengaturan kontinuitas apa yang melindungi layanan yang Anda andalkan, dan sepakati layanan terdegradasi apa yang dapat Anda terima. Simpan rencana kontingensi Anda sendiri untuk kebutuhan kritis.

## Agile, AI, otomatisasi, dan analitik

### Agile

Perbaiki kontinuitas dalam langkah kecil: satu ketergantungan, satu uji pemulihan, satu perbaikan pada satu waktu, ditinjau bersama pemangku kepentingan. Perhatian: jangan menunda seluruh pekerjaan kontinuitas ke satu proyek besar; berlatihlah lebih awal dan sering.

### AI

AI dapat membantu menyusun skenario, memeriksa rencana untuk mencari celah, dan merangkum log setelah latihan, dengan seseorang meninjau. Tunjuk pemilik. Perhatian: asisten AI mungkin tidak tersedia dalam krisis atau memberi instruksi yang tidak andal; simpan prosedur esensial dalam dokumen sederhana yang teruji. Lihat Topik 5.1 — AI dalam manajemen layanan.

### Otomatisasi

Otomatiskan pembangunan ulang lingkungan, verifikasi cadangan, dan failover, dengan log dan pengaman, dan uji secara teratur. Perhatian: otomatisasi dapat menyebarkan kerusakan dengan cepat, seperti menghapus cadangan bersama data produksi; lindungi sistem cadangan dengan kredensial dan kendali terpisah. Lihat Topik 6.3 — Infrastruktur sebagai kode dan GitOps.

### Analitik

Lacak keberhasilan cadangan, waktu uji pemulihan terhadap RTO, RPO yang dicapai, temuan latihan yang ditutup, dan cakupan ketergantungan. Perhatian: tingkat keberhasilan cadangan yang tinggi tidak mengatakan apa pun tentang apakah data dapat dipulihkan; hitung pemulihannya. Lihat buku *Service Management Metrics* dan Topik 7.3 — Pengukuran dan pelaporan.

## Mode kegagalan umum

- **Rencana tidak pernah diuji.** Gagal ketika dibutuhkan. Latih dan pulihkan secara berkala.
- **Cadangan tidak pernah dipulihkan.** Kosong atau tidak lengkap. Uji pemulihan dan verifikasi isinya.
- **Ketergantungan tersembunyi.** Pemulihan macet pada identitas atau DNS. Petakan dan uji ketergantungan.
- **Cadangan yang dapat diubah penyerang.** Ransomware mengenkripsinya. Simpan salinan yang tidak dapat diubah.
- **Perencanaan hanya TI.** Bisnis tidak dilibatkan. Jalankan analisis dampak bersama pemilik bisnis.
- **Rencana hanya ada di sistem yang gagal.** Tak seorang pun dapat membacanya. Simpan salinan luring.
- **Tidak ada pengganti.** Satu orang memegang pengetahuan. Tunjuk pengganti dan latih.

## Model kematangan

| Dimensi | Memulai | Mengembangkan | Menstandardisasi | Mengelola | Mengorkestrasi |
|---|---|---|---|---|---|
| Dampak dan target | Tidak didefinisikan | Layanan kritis didaftar | RTO dan RPO ditetapkan dari dampak bisnis | Target ditinjau bersama biaya dan hasil | Target dikoordinasikan di seluruh perusahaan dan pemasok |
| Cadangan dan pemulihan | Cadangan tidak diverifikasi | Cadangan berjalan | Pemulihan diuji dan diukur waktunya | Kinerja pemulihan dilacak dan diperbaiki | Pemulihan diotomatiskan dan diuji terus-menerus |
| Rencana | Tidak ada atau usang | Ditulis untuk layanan utama | Rencana ringkas dengan peran dan pengganti yang ditunjuk | Rencana diperbarui setelah setiap latihan | Rencana terintegrasi lintas fungsi, pemasok, dan pelanggan |
| Latihan | Tidak ada | Telusur di atas kertas | Simulasi dan pemulihan langsung secara teratur | Temuan dilacak hingga selesai | Latihan melibatkan mitra dan skenario realistis |

## Daftar periksa

- [ ] Kami menyelesaikan analisis dampak bisnis untuk layanan kritis kami.
- [ ] Setiap layanan kritis memiliki RTO dan RPO yang disepakati dengan pemiliknya.
- [ ] Ketergantungan, termasuk identitas dan DNS, dipetakan.
- [ ] Setidaknya satu cadangan tidak dapat diubah dan pemulihan telah diuji.
- [ ] Rencana singkat, mutakhir, dan juga disimpan luring.
- [ ] Peran dan pengganti ditunjuk.
- [ ] Kami menjalankan latihan secara teratur dan melacak temuan hingga selesai.
- [ ] Pengaturan kontinuitas pemasok diketahui dan diuji bila memungkinkan.

## Prompt AI

**Periksa rencana untuk mencari celah.**

```text
Here is our continuity plan for [service]: [paste]. Here is the list of its dependencies: [paste].
List dependencies that the plan does not mention, steps that rely on a person without a named deputy, and steps that assume a system that may be down. Do not rewrite the plan.
List what you are unsure of.
```

**Rancang latihan skenario.**

```text
Our context: [type of organization, key services]. Scenario theme: [for example, ransomware, data center loss].
Draft a 90-minute discussion exercise with a timeline of events, six decision points, questions for each role, and what to record. Do not use real names or systems unless I give them.
List what you are unsure of.
```

**Ringkas hasil uji pemulihan.**

```text
Here are the notes from a restore test: [paste with times and problems].
List what took longest, what failed, the dependencies discovered, and the actions to consider, with the owner role for each. Do not invent causes.
List what you are unsure of.
```

## Skill AI

- [business-continuity-plan](../../../../skills/business-continuity-plan/SKILL.md): gunakan untuk merencanakan bagaimana fungsi kritis terus berjalan.
- [disaster-recovery-plan](../../../../skills/disaster-recovery-plan/SKILL.md): gunakan untuk merencanakan pemulihan sistem dan data.
- [disaster-recovery-testing](../../../../skills/disaster-recovery-testing/SKILL.md): gunakan untuk merancang dan menjalankan pengujian pemulihan.
- [crisis-communication-plan](../../../../skills/crisis-communication-plan/SKILL.md): gunakan untuk merencanakan komunikasi selama gangguan.
- [chaos-testing](../../../../skills/chaos-testing/SKILL.md): gunakan untuk menguji perilaku kegagalan dengan aman.

## Sumber utama

- ISO 22301, Security and resilience — Business continuity management systems: standar internasional; baca edisi terkini dari penerbitnya.
- PeopleCert, halaman sertifikasi ITIL: uraian pemilik tentang praktik manajemen kontinuitas layanan.
- Wikipedia, "Business continuity planning" dan "IT disaster recovery": ikhtisar gagasan dan istilah.
- Wikipedia, "Chaos engineering": praktik menguji kegagalan secara sengaja.

## Referensi

1. Business continuity planning — Wikipedia — https://en.wikipedia.org/wiki/Business_continuity_planning
2. IT disaster recovery — Wikipedia — https://en.wikipedia.org/wiki/IT_disaster_recovery
3. Disaster recovery — Wikipedia — https://en.wikipedia.org/wiki/Disaster_recovery
4. ISO 22301 — Wikipedia — https://en.wikipedia.org/wiki/ISO_22301
5. Backup — Wikipedia — https://en.wikipedia.org/wiki/Backup
6. Backup site — Wikipedia — https://en.wikipedia.org/wiki/Backup_site
7. Chaos engineering — Wikipedia — https://en.wikipedia.org/wiki/Chaos_engineering
8. Crisis management — Wikipedia — https://en.wikipedia.org/wiki/Crisis_management
9. Ransomware — Wikipedia — https://en.wikipedia.org/wiki/Ransomware
10. Replication (computing) — Wikipedia — https://en.wikipedia.org/wiki/Replication_(computing)
11. Risk management — Wikipedia — https://en.wikipedia.org/wiki/Risk_management
