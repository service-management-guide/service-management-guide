# Infrastruktur sebagai kode dan GitOps

**Infrastruktur sebagai kode mendefinisikan server, jaringan, dan sumber daya cloud dalam berkas teks yang ditinjau dan diterapkan oleh perangkat; GitOps menambahkan aturan bahwa repositori adalah satu-satunya cara mengubah sistem hidup dan bahwa pengendali menjaga kenyataan tetap cocok dengannya, sehingga kontrol versi menjadi catatan perubahan sekaligus sarana pemulihan.**

## Mengapa ini penting

Untuk waktu yang lama, infrastruktur dibangun dengan tangan. Insinyur masuk ke server, memasang paket, menyunting konfigurasi, dan melanjutkan. Server menjadi benda unik, dengan riwayat yang hidup dalam ingatan insinyur dan beberapa catatan. Ketika gagal, ia dibangun ulang dari ingatan. Ketika server kedua dibutuhkan, ia adalah salinan yang berbeda dalam hal-hal kecil yang tidak dapat didaftar siapa pun. Pemecahan masalah berarti mencari tahu bagaimana dua sistem yang "identik" bisa berperilaku berbeda.

Infrastruktur sebagai kode (IaC) menggantikannya dengan teks. Keadaan infrastruktur yang diinginkan ditulis dalam berkas, disimpan dalam kontrol versi, ditinjau seperti perangkat lunak, dan diterapkan oleh perangkat. Membangun ulang lingkungan menjadi satu perintah. Salinan kedua adalah berkas yang sama dengan nilai berbeda. Perubahan adalah pull request, dengan peninjau, pengujian, dan catatan. Wikipedia menjelaskan infrastructure as code sebagai pengelolaan dan penyediaan infrastruktur melalui berkas definisi yang dapat dibaca mesin, bukan konfigurasi interaktif.

GitOps membawa gagasan itu selangkah lebih jauh. Repositori dinyatakan sebagai satu-satunya sumber kebenaran untuk keadaan yang diinginkan, dan perangkat lunak mengawasi keduanya, repositori dan sistem hidup, dan menyelaraskan sistem. Tak seorang pun mengubah produksi dengan tangan; mereka mengubah repositori. Ini memberi manajemen layanan banyak hal: jejak audit untuk setiap perubahan, pemulihan cepat, konsistensi antarlingkungan, dan rumah alami untuk persetujuan perubahan. Ia juga memperkenalkan risiko baru, seperti rahasia dalam repositori dan kesalahan yang berlaku di mana-mana sekaligus. Topik ini menjelaskan gagasannya dan cara mengadopsinya dengan hati-hati. Ia dibangun di atas manajemen konfigurasi (Topik 4.4 — Manajemen Konfigurasi), pengiriman berkelanjutan (Topik 2.2 — Pengiriman berkelanjutan), dan pemampuan perubahan (Topik 3.4 — Pemampuan Perubahan), dan mengarah ke pipeline (Topik 6.4 — Pipeline dan perubahan otomatis).

## Konsep inti

**Infrastruktur sebagai kode (IaC).** Mendefinisikan infrastruktur dalam kode atau berkas konfigurasi yang dibaca dan diterapkan oleh perangkat. Ia mencakup server, jaringan, penyimpanan, basis data, aturan akses, dan pengaturan platform. Wikipedia menjelaskan pendekatan dan sejarahnya. Berkas adalah dokumentasi sekaligus mekanismenya.

**Deklaratif dan imperatif.** Definisi deklaratif menyatakan apa keadaan akhir yang seharusnya ("ada tiga server jenis ini di belakang penyeimbang beban ini"); perangkat mencari tahu cara mencapainya. Definisi imperatif menyatakan langkah yang diambil. Wikipedia menjelaskan declarative dan imperative programming. Perangkat deklaratif cenderung lebih mudah dinalar dan diulang dengan aman, dan skrip imperatif menawarkan lebih banyak kendali untuk tugas yang tidak biasa. Banyak tim memakai keduanya.

**Perangkat.** Contohnya Terraform, yang menyediakan sumber daya cloud, Ansible, yang mengonfigurasi sistem, dan Kubernetes, yang menjalankan kontainer menurut manifes yang dideklarasikan. Wikipedia menjelaskan masing-masing. Lanskap perangkat berubah cepat; pilih menurut kecocokan, dukungan, dan keterampilan yang Anda miliki, dan jaga definisi sebisa mungkin portabel.

**Keadaan yang diinginkan, keadaan aktual, dan drift.** Keadaan yang diinginkan adalah apa yang dikatakan kode; keadaan aktual adalah apa yang berjalan. Drift adalah perbedaannya, biasanya dari perubahan manual atau kegagalan. Mendeteksi dan mengoreksi drift adalah manfaat inti IaC. Lihat Topik 4.4 — Manajemen Konfigurasi.

**Idempotensi.** Menerapkan definisi yang sama berulang kali memberi hasil yang sama. Wikipedia menjelaskan idempotence. Inilah yang membuat aman menjalankan ulang penerapan untuk mengoreksi drift.

**Berkas state.** Beberapa perangkat menyimpan catatan sumber daya yang dikelolanya, yang dibandingkan dengan definisi. Perlakukan dengan hati-hati: ia dapat memuat data sensitif, tidak boleh disunting dengan tangan, dan membutuhkan penguncian agar dua orang tidak menerapkan sekaligus.

**Infrastruktur yang tidak dapat diubah (immutable).** Alih-alih mengubah server yang berjalan, Anda membangun yang baru dari citra yang dikenal dan mengganti yang lama. Ini menghindari drift dan membuat rollback sederhana: kembali beralih. Ia bekerja paling baik dengan mesin virtual dan kontainer, yang dijelaskan di Wikipedia, dan citra yang dibangun dengan baik.

**Kontrol versi dan tinjauan.** Definisi berada dalam kontrol versi, seperti Git, yang dijelaskan Wikipedia sebagai sistem kontrol versi terdistribusi. Perubahan melewati cabang dan tinjauan, yang dijelaskan sebagai pull request dan code review. Riwayat menunjukkan siapa mengubah apa, kapan, dan mengapa, yang mendukung audit dan pembelajaran. Lihat Topik 3.4 — Pemampuan Perubahan.

**GitOps.** Pendekatan operasi di mana repositori Git memuat keadaan yang diinginkan, dan agen otomatis menjaga sistem hidup selaras dengannya. Perubahan dibuat hanya dengan mengubah repositori; agen menarik dan menerapkannya, serta membalik perubahan manual. Wikipedia menyebut GitOps di bawah DevOps. Desain berbasis tarik berarti sistem produksi menarik konfigurasinya sendiri, sehingga kredensial untuk produksi tidak perlu berada di sistem build. Periksa dokumentasi proyek sendiri untuk rincian pendekatannya.

**Lingkar rekonsiliasi.** Pengendali yang berulang kali membandingkan keadaan yang diinginkan dan aktual dan bertindak menutup selisihnya. Gagasan ini berasal dari teori kendali, yang dijelaskan di Wikipedia, dan mendasari cara kerja Kubernetes dan perangkat GitOps. Lingkar bersifat tangguh, dan juga dapat mengulangi perubahan buruk dengan cepat.

**Lingkungan dan promosi.** Definisi yang sama, dengan nilai berbeda, menciptakan lingkungan pengembangan, uji, dan produksi. Perubahan dipromosikan melaluinya. Menjaga lingkungan konsisten membuat pengujian lebih bermakna. Lihat Topik 3.5 — Manajemen Rilis dan Deployment.

**Policy as code.** Aturan tentang apa yang diizinkan, seperti "tidak ada penyimpanan publik" atau "semua sumber daya harus diberi tag", ditulis sebagai kode dan diperiksa otomatis sebelum perubahan diterapkan. Ini menaruh kontrol di tempat perubahan dibuat dan menghasilkan bukti. Lihat Topik 6.4 — Pipeline dan perubahan otomatis.

**Rahasia.** Kata sandi, kunci, dan token tidak boleh disimpan sebagai teks polos dalam repositori. Pakai pengelola rahasia atau enkripsi, dan beri otomatisasi akses minimal dan berumur pendek. Lihat Topik 3.13 — Manajemen Keamanan Informasi.

**Modul dan pemakaian ulang.** Modul bersama yang teruji untuk pola umum, seperti jaringan standar atau basis data, mempercepat pekerjaan dan menegakkan standar. Mereka membutuhkan pemilik, versi, dan catatan rilis.

**Radius ledakan.** Kesalahan dalam definisi bersama dapat memengaruhi banyak sistem sekaligus. Batasi dengan memecah state menjadi unit lebih kecil, memakai peluncuran bertahap, dan mewajibkan tinjauan untuk modul bersama.

**Menguji kode infrastruktur.** Metodenya mencakup pemeriksaan sintaks dan kebijakan, rencana atau pratinjau perubahan sebelum menerapkan, pengujian di lingkungan sekali pakai, dan pemeriksaan sesudah penerapan. Wikipedia menjelaskan gagasan terkait di bawah test automation. Lihat Topik 2.2 — Pengiriman berkelanjutan.

**Bagaimana lensa-lensa cocok.** IaC dan GitOps adalah dasar rekayasa untuk operasi agile: perubahan kecil, ditinjau, dan dapat dibalik. AI dapat menyusun definisi dan menjelaskan rencana, di bawah tinjauan. Otomatisasi menerapkannya. Analitik membaca riwayat untuk frekuensi dan kegagalan perubahan.

## Praktik terbaik

1. **Taruh setiap perubahan dalam kode.** Jadikan repositori jalur perubahan untuk sistem penting, dan larang perubahan manual kecuali dalam keadaan darurat yang terdefinisi. Catat perubahan darurat dan masukkan kembali ke kode.
2. **Pakai tinjauan dan perubahan kecil.** Wajibkan orang kedua meninjau setiap perubahan, dan jaga perubahan cukup kecil untuk dipahami. Tunjukkan pratinjau apa yang akan berubah.
3. **Utamakan definisi deklaratif dan langkah idempoten.** Keduanya lebih mudah diulang dan diperiksa drift-nya. Pakai skrip imperatif untuk tugas yang membutuhkannya, dengan hati-hati.
4. **Deteksi dan koreksi drift.** Bandingkan keadaan aktual dengan yang diinginkan menurut jadwal atau terus-menerus. Putuskan untuk setiap jenis drift apakah dibalik otomatis atau diberi peringatan.
5. **Jauhkan rahasia dari kode.** Pakai pengelola rahasia, enkripsi bila perlu, beri otomatisasi kredensial berumur pendek, dan pindai repositori untuk rahasia yang bocor.
6. **Lindungi state dan repositori.** Batasi siapa yang dapat mengubah definisi dan state produksi, tegakkan perlindungan cabang, dan cadangkan repositori dan state.
7. **Uji sebelum menerapkan.** Jalankan pemeriksaan kebijakan, pratinjau, dan pengujian di lingkungan sekali pakai. Tinjau rencana untuk penghapusan yang tak terduga.
8. **Batasi radius ledakan.** Pecah definisi menjadi unit yang dapat gagal secara independen, luncurkan secara bertahap, dan lindungi sumber daya kritis dari penghapusan tidak sengaja.
9. **Pakai ulang modul teruji dengan pemilik.** Terbitkan modul berversi untuk pola standar, dengan dokumentasi dan catatan rilis, dan pensiunkan versi lama.
10. **Rencanakan pemulihan.** Latih membangun ulang lingkungan dari kode, termasuk pemulihan data, dan ukur waktunya. Sertakan repositori dan perangkat dalam rencana kontinuitas Anda. Lihat Topik 3.12 — Manajemen Kontinuitas Layanan.

## Pertanyaan untuk dibahas bersama tim Anda

**Sistem kita yang mana yang dapat kita bangun ulang dari kode hari ini, dan mana yang hanya dari ingatan?**
Buat daftar. Harapkan banyak yang bergantung pada satu orang. Lanjutkan dengan memilih satu sistem dan mendefinisikannya dalam kode.

**Kapan terakhir kali seseorang mengubah produksi dengan tangan, dan bagaimana kita mengetahuinya?**
Minta cerita. Harapkan bahwa tak seorang pun melacaknya. Lanjutkan dengan menambahkan deteksi drift ke satu lingkungan dan menyepakati apa yang terjadi saat ada perbedaan.

**Di mana rahasia bisa tersimpan dalam repositori atau berkas state?**
Cari bersama-sama. Harapkan kejutan. Lanjutkan dengan memindai repositori dan memindahkan temuan ke pengelola rahasia.

**Apa perubahan terbesar yang dapat dibuat satu penerapan, dan bagaimana kita membatasinya?**
Pikirkan modul bersama dan state monolitik. Harapkan jawaban yang tidak nyaman. Lanjutkan dengan memecah satu state besar menjadi yang lebih kecil.

**Bagaimana kita meninjau perubahan infrastruktur, dan apa yang sebenarnya dilihat peninjau?**
Minta tinjauan terbaru. Harapkan persetujuan cepat. Lanjutkan dengan menyepakati apa yang wajib diperiksa peninjau, seperti keluaran rencana dan dampak keamanan.

**Di mana AI dapat membantu kita menulis atau meninjau kode infrastruktur, dan bagaimana kita memeriksanya?**
AI dapat menyusun definisi dan menjelaskan rencana. Ia juga dapat menghasilkan nilai bawaan yang tidak aman atau pengaturan sumber daya yang salah. Tanyakan siapa yang meninjau dan pemeriksaan apa yang berjalan. Lanjutkan dengan menjalankan kode hasil buatan AI melalui pemeriksaan kebijakan yang sama seperti yang lain.

## Dalam praktik: contoh manajemen layanan

Tim digital sebuah perpustakaan nasional menjalankan layanan pencarian katalog di cloud publik. Lingkungannya dibangun dengan tangan selama beberapa tahun. Lingkungan uji berbeda dari produksi dalam hal yang tidak dapat didaftar siapa pun, dan gangguan baru-baru ini ditelusuri ke perubahan grup keamanan yang dibuat secara manual selama insiden sebelumnya dan tidak pernah dicatat.

Pemimpin platform memilih mendefinisikan satu lingkungan dalam kode sebagai uji coba. Memakai perangkat deklaratif, tim menjelaskan jaringan, komputasi, basis data, dan aturan akses untuk lingkungan uji, mengimpor sumber daya yang ada, dan menaruh kode dalam repositori dengan perlindungan cabang dan tinjauan wajib. Pipeline menjalankan pemeriksaan kebijakan, seperti tidak ada penyimpanan publik dan tag wajib, dan menunjukkan rencana pada setiap pull request. Rahasia pindah ke pengelola rahasia penyedia cloud.

Lalu mereka menambahkan deteksi drift: pekerjaan malam membandingkan kode dengan keadaan aktual cloud dan memposting perbedaan ke kanal tim. Pada minggu pertama ia menemukan sebelas perubahan manual. Delapan tidak berbahaya, dua adalah sumber daya uji yang usang, dan satu adalah aturan firewall terbuka pada port basis data. Mereka memperbaiki aturan itu dan menghapus sumber daya.

Setelah tiga bulan, produksi juga ada dalam kode, dan pengendali bergaya GitOps di platform kontainer menerapkan perubahan yang disetujui dari repositori. Membangun ulang lingkungan uji dari nol memakan 40 menit. Tim melatih membangun ulang produksi di akun terpisah, dengan pemulihan data, dalam setengah hari.

Yang berubah: riwayat perubahan ada di repositori, tinjauan nyata, dan kedua lingkungan cocok. Yang masih sulit: server basis data yang lebih tua tidak didukung baik oleh perangkat dan tetap sebagian manual; berkas state pernah memuat kata sandi teks polos dari impor sebelumnya, yang harus diputar tim; dan seorang insinyur menerapkan perubahan dari laptop dengan versi perangkat berbeda, yang menghasilkan perbedaan tak terduga. Ketua menambahkan versi perangkat yang dipatok di pipeline, aturan bahwa penerapan hanya berasal dari pipeline, dan pemindaian state untuk rahasia.

## Empat perspektif

### Tim produk dan pengiriman

Definisikan infrastruktur layanan Anda dalam kode di samping aplikasi, tinjau, dan uji di lingkungan sekali pakai. Hindari perubahan manual. Sertakan tag, kepemilikan, dan pengaturan keamanan dalam definisi.

### Tim layanan dan operasi

Pakai repositori sebagai catatan perubahan, dan deteksi drift. Tinjau rencana dengan teliti, lindungi state dan rahasia, dan latih pembangunan ulang. Jaga perubahan darurat tetap jarang dan masukkan kembali ke kode.

### Kepemimpinan dan tata kelola

Minta bukti dari repositori dan pipeline alih-alih rapat. Danai perangkat, pelatihan, dan latihan. Tegaskan bahwa perubahan produksi manual adalah pengecualian yang harus dicatat.

### Pelanggan dan pengguna

Anda diuntungkan oleh lingkungan yang berperilaku sama dan pemulihan yang lebih cepat. Anda seharusnya melihat lebih sedikit kejutan setelah perubahan, dan pemberitahuan yang jelas untuk yang signifikan.

## Agile, AI, otomatisasi, dan analitik

### Agile

Perubahan infrastruktur yang kecil, ditinjau, dan dapat dibalik dengan umpan balik cepat adalah bentuk operasional dari pengiriman berkelanjutan. Bangun definisi secara bertahap, mulai dari lingkungan yang paling menyakitkan. Perhatian: migrasi massal setiap sistem ke kode sekaligus berisiko; pindahkan satu per satu.

### AI

AI dapat menyusun definisi, menjelaskan rencana, dan menyarankan aturan kebijakan, dengan seseorang meninjau setiap perubahan. Tunjuk pemilik untuk setiap pemakaian. Perhatian: kode infrastruktur hasil buatan dapat tidak aman secara bawaan atau dapat menghapus sumber daya; terapkan pemeriksaan kebijakan yang sama dan baca rencananya. Lihat Topik 5.4 — AI generatif untuk insiden, pengetahuan, dan perubahan.

### Otomatisasi

IaC dan GitOps adalah otomatisasi infrastruktur itu sendiri. Jaga pengendali dan pipeline berhak istimewa minimal, tercatat, dan terlindungi, karena mereka dapat mengubah segalanya. Perhatian: rekonsiliator otomatis dapat menerapkan ulang kesalahan di mana-mana; luncurkan bertahap dan simpan cara untuk menjedanya. Lihat Topik 6.4 — Pipeline dan perubahan otomatis.

### Analitik

Lihat frekuensi perubahan, tingkat kegagalan, waktu membangun ulang, jumlah drift, waktu untuk mendeteksi perubahan manual, dan pelanggaran kebijakan. Perhatian: menghitung commit menghargai aktivitas, dan jumlah drift yang rendah bisa mencerminkan pendeteksi yang lemah; uji deteksi dengan perubahan yang diketahui. Lihat buku *Service Management Metrics* dan Topik 7.3 — Pengukuran dan pelaporan.

## Mode kegagalan umum

- **Kenyataan hibrida.** Sebagian perubahan dalam kode dan sebagian dengan tangan. Drift tumbuh. Jadikan kode satu-satunya jalur dan deteksi drift.
- **Rahasia dalam repositori.** Kredensial bocor. Pakai pengelola rahasia dan pindai.
- **State bersama yang raksasa.** Satu perubahan memengaruhi segalanya. Pecah menjadi unit yang lebih kecil.
- **Perubahan yang tidak ditinjau.** Kesalahan sampai ke produksi. Wajibkan tinjauan dan tunjukkan rencana.
- **Perangkat dan modul tidak dipatok.** Perilaku berubah tak terduga. Patok versi.
- **Tidak pernah dibangun ulang.** Pemulihan gagal ketika dibutuhkan. Latih pembangunan ulang.
- **Pipeline sebagai superuser.** Pipeline yang terkompromi menguasai produksi. Batasi hak istimewa dan lindungi.

## Model kematangan

| Dimensi | Memulai | Mengembangkan | Menstandardisasi | Mengelola | Mengorkestrasi |
|---|---|---|---|---|---|
| Cakupan | Manual | Sebagian sumber daya dalam kode | Sebagian besar sistem penting didefinisikan dalam kode | Cakupan dan pengecualian dilacak | Seluruh aset didefinisikan dan ditata kelola sebagai kode |
| Kontrol | Tanpa tinjauan | Tinjauan sejawat | Tinjauan, pratinjau rencana, dan pemeriksaan kebijakan pada setiap perubahan | Drift dideteksi dan ditindaklanjuti | Rekonsiliasi dengan pengawasan manusia lintas lingkungan |
| Keamanan | Rahasia dalam kode | Kesadaran | Rahasia dikelola dan dipindai, otomatisasi berhak istimewa minimal | Temuan dilacak hingga selesai | Keamanan dan kebijakan tertanam dalam modul bersama |
| Pemulihan | Membangun ulang dari ingatan | Terdokumentasi | Pembangunan ulang dilatih dan diukur waktunya | Waktu pemulihan diukur dan diperbaiki | Pemulihan diotomatiskan lintas lingkungan dan wilayah |

## Daftar periksa

- [ ] Sistem penting didefinisikan dalam kode di kontrol versi.
- [ ] Setiap perubahan ditinjau dan menunjukkan pratinjau rencana.
- [ ] Perubahan produksi manual dilarang kecuali keadaan darurat yang dicatat.
- [ ] Drift dideteksi menurut jadwal dan ditangani oleh aturan.
- [ ] Rahasia berada di pengelola, dan repositori serta state dipindai.
- [ ] Perangkat dan modul dipatok dan memiliki pemilik.
- [ ] Definisi dipecah untuk membatasi radius ledakan.
- [ ] Kami melatih pembangunan ulang lingkungan dan mencatat waktunya.

## Prompt AI

**Tinjau keluaran rencana.**

```text
Here is the plan output from an infrastructure change: [paste].
List resources to be created, changed, and destroyed, highlight any deletion or replacement of a data store or network component, and list questions a reviewer should ask. Do not approve or reject.
List what you are unsure of.
```

**Susun draf aturan kebijakan dari persyaratan.**

```text
Our requirements: [list, such as no public storage, tags required, encryption at rest]. Our tool: [name, or "undecided"].
Write each requirement as a plain-language rule with one example of a violation, and describe how to test the rule. Do not write code unless I name the tool.
List what you are unsure of.
```

**Ringkas temuan drift.**

```text
Here is a drift report listing differences between code and the running environment: [paste].
Group the differences by type (extra resource, changed setting, missing resource), flag any that touch access, network, or encryption, and write one question per group for the team. Do not recommend fixes.
List what you are unsure of.
```

## Skill AI

- [configuration-management](../../../../skills/configuration-management/SKILL.md): gunakan untuk mengaitkan definisi kode dengan layanan yang didukungnya.
- [change-request](../../../../skills/change-request/SKILL.md): gunakan untuk mendeskripsikan perubahan infrastruktur dengan jelas untuk ditinjau.
- [security-testing](../../../../skills/security-testing/SKILL.md): gunakan untuk merencanakan pemeriksaan kode infrastruktur dan rahasia.
- [disaster-recovery-testing](../../../../skills/disaster-recovery-testing/SKILL.md): gunakan untuk melatih pembangunan ulang dari kode.
- [runbook](../../../../skills/runbook/SKILL.md): gunakan untuk mendokumentasikan prosedur manual darurat yang tersisa.

## Sumber utama

- Kief Morris, *Infrastructure as Code* (edisi ke-2, 2020): panduan praktis untuk mendefinisikan dan mengelola infrastruktur.
- Jez Humble dan David Farley, *Continuous Delivery* (2010): fondasi untuk lingkungan dan pipeline yang dapat diulang.
- Dokumentasi perangkat yang Anda pakai, seperti Terraform, Ansible, dan Kubernetes: sumber otoritatif tentang perilakunya.
- Wikipedia, "Infrastructure as code": ikhtisar pendekatannya.

## Referensi

1. Infrastructure as code — Wikipedia — https://en.wikipedia.org/wiki/Infrastructure_as_code
2. DevOps — Wikipedia — https://en.wikipedia.org/wiki/DevOps
3. Declarative programming — Wikipedia — https://en.wikipedia.org/wiki/Declarative_programming
4. Imperative programming — Wikipedia — https://en.wikipedia.org/wiki/Imperative_programming
5. Idempotence — Wikipedia — https://en.wikipedia.org/wiki/Idempotence
6. Git — Wikipedia — https://en.wikipedia.org/wiki/Git
7. Version control — Wikipedia — https://en.wikipedia.org/wiki/Version_control
8. Code review — Wikipedia — https://en.wikipedia.org/wiki/Code_review
9. Containerization (computing) — Wikipedia — https://en.wikipedia.org/wiki/Containerization_(computing)
10. Control theory — Wikipedia — https://en.wikipedia.org/wiki/Control_theory
11. Kubernetes — Wikipedia — https://en.wikipedia.org/wiki/Kubernetes
12. Terraform (software) — Wikipedia — https://en.wikipedia.org/wiki/Terraform_(software)
