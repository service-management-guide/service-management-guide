# Pemantauan dan Manajemen Peristiwa

**Pemantauan dan manajemen peristiwa mengawasi layanan agar orang yang tepat mendengar masalah nyata lebih awal dan tak seorang pun dibangunkan oleh kebisingan; keduanya berhasil ketika peringatan menggambarkan apa yang dirasakan pengguna, setiap peringatan memiliki tindakan, dan volume peristiwa dijaga cukup rendah agar orang mempercayainya.**

## Mengapa ini penting

Tanda pertama masalah seharusnya datang dari sistem Anda sendiri, bukan dari pengguna. Itulah janji pemantauan: kesehatan layanan diamati secara terus-menerus dan penyimpangan diketahui sebelum sebagian besar pengguna menyadarinya. Dalam praktik, banyak tim mendapati bahwa pengguna masih melaporkan masalah lebih dulu, sementara tim terkubur dalam peringatan yang tidak ditindaklanjuti siapa pun.

Perbedaan antara kedua pengalaman itu adalah desain. Pengaturan pemantauan yang menaikkan peringatan untuk setiap ambang yang terlampaui mengajari penerimanya untuk mengabaikan peringatan. Wikipedia menggambarkan ini sebagai alarm fatigue, fenomena yang pertama dipelajari di rumah sakit, di mana staf yang terpapar terlalu banyak alarm menjadi tidak peka dan melewatkan yang penting. Pengaturan yang mengukur apa yang dialami pengguna, memberi peringatan hanya ketika tindakan diperlukan, dan memberi penanggap konteks mengubah pemantauan menjadi sistem peringatan dini.

Pemantauan juga memiliki peran yang lebih besar daripada menangkap kegagalan. Ia menyediakan data untuk perencanaan kapasitas, untuk pekerjaan kinerja, untuk memeriksa bahwa rilis sehat, dan untuk memutuskan apa yang diperbaiki. Topik ini menjelaskan kosakata dan praktik yang membedakan pemantauan yang berguna dari kebisingan. Ia terkait erat dengan manajemen insiden (Topik 3.2 — Manajemen Insiden), ketersediaan dan kapasitas (Topik 3.11 — Ketersediaan, Kapasitas, dan Kinerja), dan observabilitas (Topik 7.4 — Observabilitas dan telemetri).

## Konsep inti

**Pemantauan.** Mengumpulkan, memproses, dan memakai data tentang keadaan layanan dan komponennya. Wikipedia menggambarkan system monitoring dan network monitoring sebagai praktik mengawasi sistem untuk mencari kesalahan dan kinerja. Pemantauan menjawab pertanyaan yang sudah diketahui: apakah menyala, apakah cepat, apakah penuh?

**Peristiwa (event).** Dalam ITIL 4, setiap perubahan keadaan yang signifikan bagi manajemen layanan atau item konfigurasi lain. Peristiwa bisa informasional, peringatan, atau pengecualian. Banyak peristiwa normal dan tidak memerlukan tindakan; praktiknya adalah memutuskan mana yang memerlukan.

**Peringatan (alert).** Notifikasi bahwa suatu peristiwa memerlukan perhatian. Tidak setiap peristiwa harus menjadi peringatan. Peringatan yang baik memberi tahu seseorang bahwa sesuatu memerlukan tindakan sekarang, apa yang salah, dan di mana harus melihat.

**Alarm fatigue.** Hilangnya kepekaan terhadap peringatan ketika terlalu banyak atau terlalu banyak yang palsu. Lihat artikel Wikipedia tentang alarm fatigue. Tandanya mencakup peringatan yang diakui tanpa dibaca, kanal yang dibisukan, dan insiden yang ditemukan terlambat. Ini masalah desain, bukan masalah disiplin.

**Metrik, log, dan jejak (trace).** Tiga jenis telemetri yang umum. Metrik adalah pengukuran numerik dari waktu ke waktu, seperti laju permintaan atau pemakaian memori. Log adalah catatan peristiwa berstempel waktu. Trace mengikuti sebuah permintaan melalui bagian-bagian sistem terdistribusi. Artikel Wikipedia tentang telemetry dan log management menjelaskan gagasan umum. Bersama-sama mereka mendukung pemantauan dan penyelidikan yang lebih dalam yang dibahas di bawah observabilitas.

**Observabilitas.** Kemampuan memahami keadaan internal sistem dari keluarannya. Wikipedia menggambarkan observabilitas dalam perangkat lunak sebagai perluasan pemantauan ke pertanyaan yang tidak Anda duga. Keduanya tumpang tindih: pemantauan mengawasi kegagalan yang diketahui; observabilitas membantu Anda menyelidiki yang tidak diketahui. Lihat Topik 7.4 — Observabilitas dan telemetri.

**Gejala dan penyebab.** Gejala adalah apa yang dialami pengguna atau layanan, seperti respons lambat; penyebab adalah apa yang ada di baliknya, seperti disk penuh. Memberi peringatan atas gejala memberi tahu Anda bahwa pengguna terdampak. Memberi peringatan atas setiap kemungkinan penyebab menciptakan kebisingan. Banyak tim memberi peringatan atas gejala dan memakai metrik tingkat penyebab untuk menyelidiki.

**Ambang dan garis dasar.** Ambang tetap, seperti "CPU di atas 90 persen", sederhana dan sering keliru, karena tingkat normal bervariasi menurut waktu dan beban. Garis dasar mempelajari apa yang normal untuk waktu tertentu dalam sehari dan menaikkan peringatan atas penyimpangan. Artikel Wikipedia tentang anomaly detection menjelaskan gagasan dan kehati-hatiannya.

**Korelasi peristiwa.** Menggabungkan peristiwa terkait untuk menemukan masalah dasarnya, sehingga seratus peringatan dari satu komponen yang gagal menjadi satu. Wikipedia menjelaskan event correlation. Bisa berbasis aturan atau memakai pembelajaran mesin. Lihat Topik 5.2 — AIOps.

**Pemantauan sintetis dan pengguna nyata.** Pemantauan sintetis menjalankan pengujian berskrip yang meniru pengguna dan memeriksa secara berkala apakah suatu perjalanan berfungsi. Pemantauan pengguna nyata mencatat pengalaman pengguna sebenarnya. Wikipedia menjelaskan keduanya. Pemeriksaan sintetis menangkap gangguan pada saat sepi; data pengguna nyata menunjukkan apa yang sebenarnya dialami orang.

**Application performance management.** Alat dan praktik untuk memantau kinerja dan ketersediaan aplikasi, termasuk waktu respons dan tingkat kesalahan. Wikipedia menjelaskan bidangnya.

**Dapat ditindaklanjuti (actionability).** Setiap peringatan harus memiliki tindakan yang terdefinisi, bahkan jika tindakannya adalah "periksa runbook". Jika seseorang tidak dapat mengatakan apa yang harus dilakukan, peringatan harus dihapus atau diubah menjadi laporan. Lihat Topik 3.9 — Manajemen Pengetahuan.

**Perutean dan eskalasi.** Peringatan menuju orang yang dapat bertindak, memakai jadwal piket, dengan eskalasi jika tidak ada pengakuan. Lihat Topik 3.2 — Manajemen Insiden.

**Manajemen peristiwa dan ITIL.** ITIL 4 menggambarkan "pemantauan dan manajemen peristiwa" sebagai praktik yang secara sistematis mengamati layanan dan komponen layanan, serta mencatat dan melaporkan perubahan keadaan tertentu. Penekanannya adalah pada memutuskan peristiwa mana yang penting dan apa yang dilakukan atas masing-masing.

**Bagaimana lensa-lensa cocok.** Pemantauan adalah sisi umpan balik dari pengiriman berkelanjutan: ia menunjukkan apakah perubahan sehat. Praktik agile memperlakukan mutu peringatan sebagai butir backlog. AI dapat mengurangi kebisingan, mengorelasikan peristiwa, dan merangkum, di bawah tinjauan. Otomatisasi dapat bertindak atas peristiwa yang dipahami dengan baik. Analitik menunjukkan tren dan biaya kebisingan.

## Praktik terbaik

1. **Beri peringatan atas apa yang dirasakan pengguna.** Mulailah dengan gejala, seperti permintaan yang gagal, halaman lambat, dan pekerjaan yang gagal. Pakai metrik penyebab untuk diagnosis, bukan untuk memanggil, kecuali penyebab adalah peringatan dini yang andal.
2. **Jadikan setiap peringatan dapat ditindaklanjuti.** Untuk setiap peringatan, tulis artinya, siapa yang bertindak, dan apa yang mereka lakukan pertama. Tautkan ke runbook. Hapus peringatan yang tidak memiliki tindakan.
3. **Jaga volume tetap rendah.** Hitung peringatan yang diterima setiap petugas piket per shift, dan tetapkan batas. Tinjau peringatan paling bising setiap minggu dan perbaiki atau hapus.
4. **Panggil untuk urgensi, tiket untuk sisanya.** Gunakan panggilan atau pager hanya ketika seseorang harus bertindak sekarang. Kirim sinyal lain ke antrean atau laporan. Definisikan perbedaannya dengan jelas.
5. **Pakai garis dasar dengan hati-hati.** Di mana normal berubah menurut waktu dan beban, pakai ambang yang sadar waktu atau deteksi anomali, dan tinjau. Jangan percaya model yang tidak dapat Anda jelaskan kepada orang yang merespons.
6. **Kelompokkan peringatan terkait.** Korelasikan peristiwa dari penyebab yang sama, dan tekan peringatan hilir ketika ketergantungan gagal. Kirim satu pesan dengan konteks.
7. **Periksa dari sudut pandang pengguna.** Tambahkan pemeriksaan sintetis untuk perjalanan kunci, dan pakai data pengguna nyata untuk pengalaman. Server bisa "menyala" sementara pengguna tidak bisa masuk.
8. **Pantau pemantauannya.** Uji bahwa peringatan sampai kepada orang, bahwa sistem pemanggilan berfungsi, dan bahwa kegagalan diam-diam pemantauan itu sendiri terdeteksi. Jalankan pengujian ujung ke ujung sesekali.
9. **Tinjau setelah insiden.** Tanyakan peringatan mana yang menyala, mana yang seharusnya, dan mana yang kebisingan. Sesuaikan dalam tinjauan insiden. Lihat Topik 3.3 — Manajemen Masalah.
10. **Bagikan dasbor dan konteks.** Beri pengembang, operasi, dan dukungan akses ke data yang sama, dan tunjukkan dampak perubahan terbaru. Hindari dasbor yang tidak dipakai siapa pun.

## Pertanyaan untuk dibahas bersama tim Anda

**Insiden terakhir apa yang diberitahukan pengguna kepada kita sebelum pemantauan kita, dan mengapa?**
Pertanyaan ini menemukan titik buta. Lihat apa yang dilihat pengguna. Harapkan celah di tepi perjalanan. Lanjutkan dengan memilih satu pemeriksaan yang menghadap pengguna untuk ditambahkan.

**Berapa banyak peringatan yang diterima petugas piket kita bulan lalu, dan berapa yang memerlukan tindakan?**
Hitung bersama. Jika tak seorang pun tahu, itu sebuah temuan. Harapkan persentase rendah peringatan yang dapat ditindaklanjuti. Lanjutkan dengan memilih lima peringatan paling bising dan memutuskan nasib masing-masing.

**Peringatan mana yang kita abaikan, dan apa yang akan terjadi jika kita menghapusnya?**
Mengabaikan peringatan adalah tanda kelelahan. Tanyakan kapan terakhir kali masing-masing penting. Lanjutkan dengan menghapus atau menurunkan satu, dengan tanggal tinjauan.

**Siapa yang dibangunkan untuk apa, dan apakah semua orang setuju itu layak membangunkan mereka?**
Sepakati kriteria untuk memanggil. Harapkan ketidaksepakatan, yang berguna. Lanjutkan dengan menulis aturan satu paragraf dan mencobanya selama sebulan.

**Bagaimana kita tahu jika pemantauan kita sendiri berhenti bekerja?**
Pertanyaan ini menguji pemantauan atas pemantauan (meta-monitoring). Harapkan keheningan atau jawaban yang samar. Lanjutkan dengan menambahkan pemeriksaan heartbeat atau peringatan uji harian dan menyepakati siapa yang mengawasinya.

**Apa yang kita inginkan dilakukan AI dengan peringatan kita, dan apa yang harus tetap keputusan manusia?**
AI dapat mengelompokkan peringatan, menyarankan penyebab, dan merangkum konteks. Ia juga dapat menekan peringatan yang nyata. Tanyakan tindakan mana yang memerlukan persetujuan. Lanjutkan dengan memilih uji coba yang terbatas pada pengelompokan dan ringkasan, dengan tinjauan atas apa yang disembunyikannya.

## Dalam praktik: contoh manajemen layanan

Tim teknologi operasi sebuah bandara regional memantau penanganan bagasi, sistem check-in, dan layar informasi penerbangan. Tim beranggotakan enam orang menerima sekitar 400 peringatan sehari. Staf piket mengatakan mereka hanya melirik notifikasi dan sebagian besar membisukannya. Bulan lalu sakelar jaringan yang gagal di sebuah terminal tidak diketahui selama 40 menit, sampai penumpang mengeluh bahwa layar kosong.

Ketua tim meluangkan seminggu untuk melihat datanya. Dari 400 peringatan harian, sekitar 350 berasal dari 12 aturan, seperti peringatan disk pada perangkat yang membersihkan diri sendiri, dan antarmuka yang naik-turun pada port yang tidak dipakai. Hanya sekitar 15 setiap hari yang memerlukan tindakan manusia. Ketua dan tim menyepakati tiga perubahan. Mereka menghapus atau menurunkan 12 aturan bising menjadi laporan harian. Mereka menambahkan dua pemeriksaan sintetis yang memuat halaman layar dan layar check-in dari setiap terminal setiap menit dan memanggil jika salah satunya gagal dua kali berturut-turut. Dan mereka menyiapkan korelasi agar sakelar yang gagal menghasilkan satu peringatan yang menyebut layar yang terdampak, bukan seratus.

Pada bulan berikutnya, peringatan piket turun menjadi sekitar 20 sehari, dan kegagalan sakelar berikutnya terdeteksi dalam tiga menit, dengan satu panggilan yang mendaftar terminal yang terdampak. Dalam tinjauan mingguan tim menemukan satu peringatan yang ditekan oleh korelasi padahal tidak seharusnya, dan memperbaiki aturannya.

Yang berubah: orang mempercayai panggilan dan merespons. Yang masih sulit: peralatan penanganan bagasi milik vendor mengirim peringatannya sendiri dalam format yang tidak dapat difilter tim, sehingga sebagian kebisingan tetap ada; beberapa staf shift malam khawatir laporan harian tidak akan dibaca; dan belum ada yang menguji apa yang terjadi jika sistem pemantauan itu sendiri gagal. Ketua menjadwalkan latihan dan menambahkan peringatan uji harian.

## Empat perspektif

### Tim produk dan pengiriman

Bangun sinyalnya: metrik, log, dan trace yang bermakna, serta pemeriksaan kesehatan yang mencerminkan perjalanan pengguna. Tulis runbook bersama peringatan. Amati dampak setiap rilis.

### Tim layanan dan operasi

Miliki mutu peringatan. Tinjau peringatan paling bising setiap minggu, lindungi orang dari kelebihan beban, dan periksa bahwa setiap panggilan memiliki tindakan. Uji jalur yang dilalui peringatan.

### Kepemimpinan dan tata kelola

Minta jumlah peringatan yang dapat ditindaklanjuti, bukan jumlah monitor. Danai waktu untuk memperbaiki peringatan bising. Perlakukan panggilan berulang di luar jam kerja sebagai biaya bagi staf dan mutu.

### Pelanggan dan pengguna

Anda seharusnya mendengar tentang masalah dari penyedia sebelum Anda menyadarinya, dan diberi tahu apa yang terdampak. Laporkan apa yang Anda lihat, dengan waktu, dan beri tahu penyedia di mana pemantauan melewatkannya.

## Agile, AI, otomatisasi, dan analitik

### Agile

Perlakukan peringatan dan dasbor sebagai bagian dari produk: perbaiki dalam langkah kecil setelah setiap insiden dan rilis. Tinjau bersama orang yang merespons. Perhatian: menambah monitor untuk setiap fitur baru tanpa membuang yang lama menambah kebisingan.

### AI

AI dapat mempelajari pola normal, mengelompokkan peringatan terkait, menyarankan kemungkinan penyebab, dan merangkum badai peringatan, dengan pemilik dan keputusan manusia. Uji terhadap insiden lampau. Perhatian: model yang menekan peringatan dapat menyembunyikan kegagalan yang jarang namun nyata; ukur apa yang ditekannya dan apa yang terlewat. Lihat Topik 5.2 — AIOps.

### Otomatisasi

Otomatiskan respons atas peristiwa yang dipahami dengan baik, seperti memulai ulang proses yang gagal, serta perutean dan pengayaan peringatan, dengan batas dan log. Perhatian: perbaikan otomatis yang mencoba ulang tanpa henti dapat menyembunyikan sistem yang gagal atau memperburuknya; tambahkan pembatas laju dan eskalasi. Lihat Topik 6.6 — Otomatisasi runbook dan perbaikan otomatis.

### Analitik

Lacak volume peringatan, persentase yang dapat ditindaklanjuti, waktu untuk mengakui, dan insiden yang terdeteksi pemantauan versus pengguna. Perhatian: jumlah peringatan saja dapat dimanipulasi dengan menaikkan ambang sampai tidak ada yang menyala; periksa terhadap insiden. Lihat Topik 7.4 — Observabilitas dan telemetri dan buku *Service Management Metrics*.

## Mode kegagalan umum

- **Memberi peringatan atas segalanya.** Orang membisukan kanal. Beri peringatan atas gejala dan buang sisanya.
- **Peringatan tanpa tindakan.** Penanggap tidak tahu apa yang harus dilakukan. Tautkan ke runbook atau hapus peringatan.
- **Hanya ambang tetap.** Alarm palsu pada saat sibuk. Pakai metode sadar waktu atau garis dasar dengan hati-hati.
- **Pengguna tahu lebih dulu.** Celah dalam pemeriksaan yang menghadap pengguna. Tambahkan pemantauan sintetis dan pengguna nyata.
- **Tidak ada meta-monitoring.** Pemantauan gagal diam-diam. Tambahkan heartbeat dan latihan.
- **Dasbor menjamur.** Tak seorang pun melihatnya. Simpan beberapa yang mendukung keputusan.
- **Memercayai model yang buram.** Penanggap tidak dapat menjelaskan apa yang dilakukannya. Jaga aturan dan logikanya dapat ditinjau.

## Model kematangan

| Dimensi | Memulai | Mengembangkan | Menstandardisasi | Mengelola | Mengorkestrasi |
|---|---|---|---|---|---|
| Desain peringatan | Setiap ambang memberi peringatan | Beberapa peringatan kunci | Peringatan berbasis gejala yang dapat ditindaklanjuti dengan runbook | Mutu peringatan diukur dan ditinjau setiap minggu | Peringatan disesuaikan dan dikorelasikan lintas layanan |
| Cakupan | Hanya server | Beberapa aplikasi | Perjalanan pengguna diperiksa secara sintetis dan dengan data pengguna nyata | Cakupan ditinjau setelah insiden | Cakupan konsisten di seluruh aset dan pemasok |
| Kebisingan | Membanjiri | Disadari | Volume dibatasi dan ditinjau | Kebisingan diukur dan menurun | Kebisingan dikelola dengan korelasi dan otomatisasi dengan pengawasan |
| Respons | Manual | Panggilan ke tim | Dirutekan dengan eskalasi | Waktu respons dilacak | Tindakan aman diotomatiskan dengan kendali manusia |

## Daftar periksa

- [ ] Peringatan didasarkan pada gejala yang dirasakan pengguna.
- [ ] Setiap peringatan memiliki tindakan yang terdefinisi dan runbook yang tertaut.
- [ ] Volume peringatan piket per shift diukur dan dibatasi.
- [ ] Kami meninjau peringatan paling bising setiap minggu.
- [ ] Perjalanan pengguna kunci memiliki pemeriksaan sintetis.
- [ ] Peringatan terkait dikorelasikan.
- [ ] Kami menguji bahwa peringatan sampai kepada orang dan bahwa kegagalan pemantauan terdeteksi.
- [ ] AI atau otomatisasi yang bertindak atas peringatan memiliki pemilik, batas, dan tinjauan.

## Prompt AI

**Peringkatkan peringatan bising.**

```text
Here is a list of alert rules with the number of times each fired last month and how many led to action: [paste].
Rank them by number of non-actionable firings, list the top ten, and give one question per rule to ask about whether to remove, change, or keep it. Do not recommend deleting any.
List what you are unsure of.
```

**Susun draf teks peringatan.**

```text
The situation to alert on: [describe]. Who acts: [role]. The first checks they should make: [list].
Draft an alert title (under 80 characters) and a body (under 80 words) that says what is wrong, what users may be experiencing, and the first step, with a link placeholder for the runbook. Do not speculate about causes.
List what you are unsure of.
```

**Uji aturan korelasi.**

```text
Here is a correlation rule: [describe]. Here is a list of recent events with timestamps and sources: [paste].
List which events the rule would group, which it would suppress, and any case where a real separate problem could be hidden. Do not propose a new rule.
List what you are unsure of.
```

## Skill AI

- [runbook](../../../../skills/runbook/SKILL.md): gunakan untuk menulis tindakan yang menyertai setiap peringatan.
- [anomaly-analysis](../../../../skills/anomaly-analysis/SKILL.md): gunakan untuk menelaah pola tidak biasa dalam metrik.
- [key-risk-indicators](../../../../skills/key-risk-indicators/SKILL.md): gunakan untuk memilih indikator peringatan dini.
- [on-call-rotation](../../../../skills/on-call-rotation/SKILL.md): gunakan untuk merancang pengaturan piket yang berkelanjutan.

## Sumber utama

- Betsy Beyer dan lainnya (ed.), *Site Reliability Engineering* (2016), bab tentang memantau sistem terdistribusi, gratis di sre.google.
- Rob Ewaschuk, "My Philosophy on Alerting" (2013): esai pendek yang terkenal tentang peringatan berbasis gejala.
- Wikipedia, "Alarm fatigue" dan "Observability (software)": ikhtisar gagasan kunci.
- PeopleCert, halaman sertifikasi ITIL: uraian pemilik tentang praktik pemantauan dan manajemen peristiwa.

## Referensi

1. Alarm fatigue — Wikipedia — https://en.wikipedia.org/wiki/Alarm_fatigue
2. Observability (software) — Wikipedia — https://en.wikipedia.org/wiki/Observability_(software)
3. Application performance management — Wikipedia — https://en.wikipedia.org/wiki/Application_performance_management
4. Event correlation — Wikipedia — https://en.wikipedia.org/wiki/Event_correlation
5. Log management — Wikipedia — https://en.wikipedia.org/wiki/Log_management
6. Synthetic monitoring — Wikipedia — https://en.wikipedia.org/wiki/Synthetic_monitoring
7. Real user monitoring — Wikipedia — https://en.wikipedia.org/wiki/Real_user_monitoring
8. Network monitoring — Wikipedia — https://en.wikipedia.org/wiki/Network_monitoring
9. Anomaly detection — Wikipedia — https://en.wikipedia.org/wiki/Anomaly_detection
10. Telemetry — Wikipedia — https://en.wikipedia.org/wiki/Telemetry
11. Site Reliability Engineering: How Google Runs Production Systems — Google — https://sre.google/sre-book/table-of-contents/
