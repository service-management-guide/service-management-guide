# Lean dan kaizen

**Lean adalah cara berpikir tentang pekerjaan yang membuang pemborosan dan berfokus pada nilai yang diterima pelanggan, dan kaizen adalah kebiasaannya berupa perbaikan kecil yang berkelanjutan oleh orang-orang yang mengerjakan pekerjaan itu; bersama-sama keduanya menyediakan banyak pemikiran praktis di balik manajemen layanan agile.**

## Mengapa ini penting

Tim layanan memikul banyak pekerjaan yang tidak membantu pelanggan: persetujuan ganda, laporan yang tidak dibaca siapa pun, serah terima yang menghilangkan informasi, tiket yang dibuka kembali karena jawaban pertama meleset dari sasaran. Setiap bagian tampak masuk akal bila berdiri sendiri. Bersama-sama mereka menghabiskan lebih banyak waktu daripada pekerjaan yang berguna, dan membuat setiap layanan lebih lambat dan lebih mahal daripada seharusnya.

Pemikiran lean memberi kosakata untuk melihatnya. Ia menanyakan apa yang dihargai pelanggan, menelusuri langkah yang menghasilkannya, dan melabeli sisanya sebagai pemborosan yang perlu dikurangi. Kaizen, kata Jepang yang berarti "perubahan menuju yang lebih baik", memberi metode untuk menguranginya: banyak perbaikan kecil, dilakukan sepanjang waktu, oleh orang yang paling dekat dengan pekerjaan. Tidak diperlukan perancangan ulang besar-besaran.

Kedua gagasan berasal dari manufaktur, terutama Toyota Production System, dan keduanya telah disesuaikan untuk perangkat lunak dan layanan. Keduanya mendasari prinsip panduan ITIL 4 "fokus pada nilai", "jaga agar sederhana dan praktis", dan "maju secara iteratif dengan umpan balik" (lihat Topik 1.5 — Prinsip Panduan ITIL). Topik ini menjelaskan gagasan kuncinya, menunjukkan cara menerapkannya pada pekerjaan layanan, dan menunjukkan di mana ia dapat disalahgunakan.

## Konsep inti

**Manufaktur lean dan Toyota Production System.** Lean adalah label untuk metode produksi yang diturunkan dari Toyota Production System, yang dikembangkan setelah Perang Dunia II. Tujuannya adalah menyampaikan nilai kepada pelanggan, mengurangi pemborosan, dan memperbaiki alur. Artikel Wikipedia tentang lean manufacturing dan Toyota Production System memberi latar belakangnya. Kata "lean" meluas setelah riset tentang produksi mobil pada akhir abad ke-20.

**Nilai dan pemborosan.** Dalam istilah lean, nilai adalah apa yang bersedia dibayar pelanggan atau akan disadari jika hilang. Pemborosan, yang dalam bahasa Jepang disebut "muda", adalah aktivitas apa pun yang menghabiskan sumber daya dan tidak menambah nilai. Lean juga menamai "muri" (beban berlebih pada orang atau peralatan) dan "mura" (ketidakmerataan dalam pekerjaan). Ketiganya sering disebut tiga M.

**Tujuh pemborosan, diterjemahkan ke pekerjaan layanan.** Daftar klasik tujuh pemborosan dalam manufaktur memiliki padanan dalam layanan:

| Pemborosan klasik | Dalam pekerjaan layanan, misalnya |
|---|---|
| Transportasi | Menyerahkan tiket antara banyak antrean |
| Persediaan | Backlog permintaan yang tidak akan pernah dikerjakan |
| Gerakan | Mencari informasi di banyak sistem |
| Menunggu | Permintaan menganggur menunggu persetujuan |
| Produksi berlebih | Laporan dan fitur yang tidak diminta siapa pun |
| Pemrosesan berlebih | Langkah persetujuan yang tidak menambah keamanan |
| Cacat | Perbaikan yang salah yang menyebabkan tiket berulang |

Banyak penulis lean menambahkan yang kedelapan, yaitu bakat orang yang tidak dimanfaatkan. Dalam perangkat lunak, Mary dan Tom Poppendieck menyesuaikan daftar itu dalam karya mereka tentang lean software development, yang dijelaskan Wikipedia.

**Alur dan tarikan (pull).** Lean mengatur pekerjaan agar mengalir lancar, dan agar pekerjaan baru dimulai ketika ada kapasitas alih-alih didorong masuk. Lihat Topik 2.3 — Alur dan kanban untuk alat-alatnya.

**Menghormati orang.** Lean di Toyota bertumpu pada dua pilar, perbaikan berkelanjutan dan penghormatan terhadap orang. Dalam praktik, itu berarti meminta orang yang mengerjakan pekerjaan untuk menemukan masalah dan mengusulkan perbaikan, alih-alih memaksakan perubahan dari luar. Program lean yang memangkas staf dan menyebutnya perbaikan menyalahgunakan gagasan ini.

**Kaizen.** Perbaikan berkelanjutan melalui perubahan kecil. Wikipedia menjelaskan kaizen sebagai pendekatan yang dipakai oleh semua orang dalam organisasi, dengan perubahan cukup kecil untuk dicoba dengan cepat. Siklus kaizen yang khas memakai lingkar plan–do–check–act (PDCA): rencanakan perubahan, cobalah, periksa hasilnya, dan adopsi atau sesuaikan. Lihat Topik 3.15 — Peningkatan Berkelanjutan.

**Pergi dan lihat (gemba).** "Gemba" adalah tempat pekerjaan terjadi. Praktik lean meminta manajer dan pelaku perbaikan pergi ke sana, mengamati, dan mengajukan pertanyaan, alih-alih mengandalkan laporan. Bagi tim layanan, gemba bisa berupa service desk, antrean tiket, atau panggilan dengan pelanggan.

**Alat akar masalah.** Lean memakai metode sederhana seperti "lima mengapa" (tanyakan mengapa berulang kali sampai Anda mencapai penyebab yang bisa ditindaklanjuti) dan penyelesaian masalah A3 (ringkasan satu halaman yang terstruktur). Keduanya mendukung manajemen masalah (lihat Topik 3.3 — Manajemen Masalah). Perlu hati-hati: bertanya "mengapa" lima kali dapat mengarah pada orang yang disalahkan alih-alih penyebab dalam sistem.

**Pencegahan kesalahan.** Poka-yoke adalah praktik merancang langkah agar kesalahan sulit dibuat atau langsung tertangkap. Dalam pekerjaan layanan, ia bisa berupa kolom wajib, templat, pemeriksaan di pipeline, atau konfirmasi sebelum tindakan berisiko. Autonomasi, kadang disebut jidoka, merujuk pada menghentikan proses ketika cacat terdeteksi, yang memiliki padanan modern pada pipeline yang berhenti ketika pengujian gagal.

**Hentikan lini (stop-the-line).** Tali andon di pabrik Toyota memungkinkan pekerja mana pun menghentikan lini ketika melihat masalah. Diterjemahkan ke layanan, siapa pun dapat mengangkat masalah yang dapat merugikan pelanggan, dan tim memperlakukan sinyal itu sebagai hal yang berguna, bukan mengganggu.

**Lean dan agile.** Pemikiran lean memengaruhi pengembangan perangkat lunak agile, dan keduanya tumpang tindih: batch kecil, umpan balik, perbaikan berkelanjutan, penghormatan terhadap orang. Panduan ini menekankan keterlibatan pemangku kepentingan yang berkelanjutan, perbaikan berkelanjutan, dan pengiriman perubahan yang berfungsi secara berkelanjutan, yang didukung lean.

**Bagaimana lensa-lensa cocok.** Lean dan kaizen adalah mesin perbaikan bagi lensa agile. AI dapat menemukan pola dalam tiket yang mengisyaratkan pemborosan, di bawah tinjauan. Otomatisasi menghilangkan langkah manual yang berulang, setelah Anda menyederhanakannya. Analitik menunjukkan di mana pekerjaan menunggu dan di mana cacat muncul.

## Praktik terbaik

1. **Definisikan nilai dari sudut pandang pelanggan.** Untuk setiap layanan, tuliskan apa yang dihargai pelanggan. Tandai setiap langkah dalam proses sebagai menambah nilai, perlu tetapi tidak menambah nilai, atau pemborosan.
2. **Pergi dan lihat.** Luangkan waktu di tempat pekerjaan terjadi, amati permintaan nyata, dan berbicaralah dengan orang yang mengerjakannya. Laporan bukan pengganti.
3. **Buang pemborosan sebelum mengotomatiskan.** Sederhanakan prosesnya lebih dulu. Mengotomatiskan langkah yang boros membuat pemborosan lebih murah diproduksi, bukan lebih kecil.
4. **Biarkan orang yang paling dekat dengan pekerjaan memperbaikinya.** Beri tim waktu, kewenangan, dan cara sederhana untuk mencoba perubahan. Tinjau gagasan mereka dengan cepat dan beri tahu mereka apa yang terjadi.
5. **Buat perbaikan kecil dan cepat.** Bidik perubahan yang dapat dicoba dalam hitungan hari. Jalankan sebagai eksperimen dengan ekspektasi yang dinyatakan dan tanggal pemeriksaan.
6. **Perbaiki penyebab, bukan orangnya.** Ketika ada yang salah, tanyakan apa dalam sistem yang memungkinkannya. Gunakan metode akar masalah untuk menemukan penyebab, dan hindari berhenti di "kesalahan manusia".
7. **Cegah kesalahan pada langkah yang berulang.** Tambahkan kolom wajib, templat, pemeriksaan, dan konfirmasi di tempat kesalahan telah terjadi lebih dari sekali.
8. **Biarkan siapa pun menghentikan lini.** Ciptakan cara yang aman untuk menyampaikan kekhawatiran tentang perubahan atau respons insiden. Ucapkan terima kasih kepada orang yang menyampaikannya.
9. **Pelihara papan perbaikan.** Tunjukkan gagasan perbaikan, statusnya, dan hasilnya di tempat tim dan pemangku kepentingan dapat melihat.
10. **Jangan memakai lean sebagai kedok pemangkasan.** Jika perbaikan menyebabkan PHK, orang berhenti mengusulkan perbaikan. Nyatakan bagaimana penghematan waktu akan dipakai.

## Pertanyaan untuk dibahas bersama tim Anda

**Apa yang dihargai pelanggan kita dari layanan ini, dan apa yang kita lakukan yang tidak akan mereka sadari jika dihentikan?**
Pertanyaan ini memisahkan nilai dari aktivitas. Tim sering menemukan laporan, persetujuan, atau pemeriksaan yang tidak dipakai siapa pun. Tanyakan pandangan pelanggan jika mungkin. Lanjutkan dengan memilih satu aktivitas untuk dihentikan selama sebulan, dengan pemilik yang mengawasi kerugian.

**Dari pemborosan klasik, mana yang paling sering kita lihat, dan apa contoh terbaru dari masing-masing?**
Gunakan tabel tujuh pemborosan. Orang biasanya menyebut menunggu dan pengerjaan ulang lebih dulu. Minta tiket atau insiden nyata. Lanjutkan dengan memilih pemborosan yang paling banyak memakan waktu.

**Kapan terakhir kali seseorang mengusulkan perbaikan, dan apa yang terjadi pada gagasan itu?**
Pertanyaan ini menguji sistem perbaikan. Anda mungkin mendengar bahwa gagasan menguap atau bahwa mengusulkan berarti diberi pekerjaannya. Tanyakan berapa lama responsnya. Lanjutkan dengan menyepakati waktu respons dan daftar yang terlihat.

**Kesalahan berulang mana yang dapat kita buat mustahil, atau setidaknya jelas terlihat?**
Cari kesalahan yang terjadi berulang kali: kategori yang salah, kolom yang hilang, perintah yang dijalankan di sistem yang salah. Tanyakan seperti apa pengaman sederhananya. Lanjutkan dengan memilih satu kesalahan dan pengaman untuk dicoba.

**Di mana kita menyalahkan orang padahal sistem yang memungkinkan kesalahan itu?**
Pertanyaan ini menyelidiki budaya. Tinjauan sering berakhir dengan "lebih berhati-hatilah". Tanyakan apa yang membuat kesalahan itu mungkin dan apa yang akan mempersulitnya. Lanjutkan dengan menulis ulang kesimpulan satu tinjauan lampau dalam bentuk sistem.

**Bagaimana AI akan membantu kita menemukan pemborosan, dan bagaimana kita memeriksa bahwa ia benar?**
AI dapat mengelompokkan tiket, menemukan pertanyaan berulang, dan menyarankan kandidat untuk otomatisasi. Ia juga dapat mengarang pola. Tanyakan siapa yang akan memeriksa sampel dari temuannya. Lanjutkan dengan memilih sampel tiket untuk menguji pengelompokannya secara manual lebih dulu.

## Dalam praktik: contoh manajemen layanan

Sebuah badan tunjangan pemerintah menjalankan pusat kontak yang menjawab pertanyaan tentang permohonan. Staf mengatakan mereka menghabiskan hari-hari dengan "mengejar informasi". Pemimpin tim, yang pernah mengikuti kursus lean singkat, memutuskan turun ke lantai kerja. Ia duduk bersama agen selama tiga hari dan mencatat, untuk 120 panggilan, alasan setiap penelepon menelepon dan apa yang dilakukan agen.

Ia menemukan bahwa 40 dari 120 panggilan adalah panggilan berulang tentang permohonan yang sama, karena agen pertama tidak dapat melihat status yang tersimpan di sistem lain. 25 lainnya tentang surat yang memakai istilah yang tidak dipahami penelepon. Agen menghabiskan sebagian besar waktu setiap panggilan berpindah antara empat layar.

Tim mencoba tiga perubahan kecil selama enam minggu: menulis ulang surat yang membingungkan dengan beberapa kalimat sederhana dan mengujinya pada sampel pemohon, menambahkan satu layar yang menampilkan status permohonan dari sistem lain, dan membuat panduan satu halaman untuk lima pertanyaan paling umum. Agen mengusulkan perubahan keempat, templat catatan panggilan yang mengurangi penjelasan ulang antarshift. Masing-masing dicoba selama dua minggu dan ditinjau dalam rapat mingguan singkat.

Yang berubah: panggilan berulang menurun dalam sampel yang dilacak tim, dan agen melaporkan lebih sedikit perpindahan layar. Yang masih sulit: layar status bergantung pada integrasi milik departemen lain yang belum setuju memeliharanya; tim tidak punya cara yang baik untuk mengukur apakah penelepon memahami surat selain menanyakan kepada mereka; dan seorang manajer menanyakan berapa jam agen yang dihemat perubahan itu, yang menggoda orang untuk menghitung angka. Pemimpin menjaga fokus pada pengalaman penelepon dan menyepakati dengan manajernya bahwa penghematan akan dipakai untuk mengurangi backlog, bukan memangkas staf.

## Empat perspektif

### Tim produk dan pengiriman

Definisikan nilai dari sudut pandang pengguna dan buang fitur serta langkah yang tidak melayaninya. Gunakan eksperimen kecil, cegah kesalahan pada langkah berulang, dan perlakukan masalah operasional sebagai sinyal untuk perubahan desain.

### Tim layanan dan operasi

Anda melihat pemborosan setiap hari. Catat, bawa contoh ke papan perbaikan, dan cobalah perbaikan kecil. Gunakan stop-the-line ketika perubahan atau respons dapat merugikan pelanggan.

### Kepemimpinan dan tata kelola

Pergi dan lihat. Tanyakan kepada tim apa yang akan mereka ubah dan beri waktu untuk melakukannya. Lindungi orang yang mengangkat masalah. Nyatakan secara eksplisit bahwa lean bukan program pemangkasan biaya.

### Pelanggan dan pengguna

Anda tahu apa yang Anda hargai. Beri tahu penyedia langkah mana yang tidak berguna bagi Anda dan mana yang membantu. Jika Anda memberi umpan balik, harapkan mendengar apa yang berubah.

## Agile, AI, otomatisasi, dan analitik

### Agile

Lean dan kaizen menyediakan kebiasaan perbaikan: perubahan kecil, umpan balik yang sering, pemangku kepentingan terlibat, dan orang dipercaya memperbaiki pekerjaannya sendiri. Perhatian: papan perbaikan bisa menjadi backlog lain yang tidak ditinjau siapa pun; jaga daftarnya tetap pendek dan ditinjau.

### AI

AI dapat mengelompokkan tiket, menemukan pertanyaan berulang, dan menyarankan di mana pemborosan berada. Setiap pemakaian memerlukan pemilik dan seseorang yang memeriksa sampel. Perhatian: ringkasan AI dapat menemukan pola yang hanya artefak dari cara tiket dikategorikan; verifikasi terhadap pekerjaan. Lihat Topik 5.1 — AI dalam manajemen layanan.

### Otomatisasi

Otomatiskan langkah yang tersisa setelah pemborosan dibuang dan proses stabil, seperti merutekan permintaan atau memperbarui status, dan simpan log serta cara membatalkan. Perhatian: otomatisasi dapat mengunci proses yang buruk dan mempersulit perubahan; tinjau setelah setiap otomatisasi yang signifikan. Lihat Topik 6.1 — Strategi otomatisasi.

### Analitik

Ukur di mana pekerjaan menunggu, seberapa sering diulang, dan berapa lama kontak berulang berlangsung. Perhatian: menghitung "jam yang dihemat" mengundang klaim yang digelembungkan dan dapat merusak kepercayaan; lacak juga pengalaman pelanggan dan tim. Lihat Topik 7.6 — Analitik proses dan aliran nilai dan buku *Service Management Metrics*.

## Mode kegagalan umum

- **Lean sebagai pemangkasan biaya.** Orang berhenti mengusulkan perbaikan. Nyatakan bagaimana hasil akan dipakai dan tepati janji itu.
- **Perbaikan dari kejauhan.** Konsultan merancang ulang apa yang belum mereka amati. Pergi dan lihat, dan libatkan orang yang mengerjakan.
- **Mengotomatiskan pemborosan.** Proses yang buruk dibuatkan skripnya. Sederhanakan lebih dulu.
- **Menyalahkan orang.** Tinjauan berakhir dengan "kesalahan manusia". Cari apa dalam sistem yang memungkinkannya.
- **Gagasan perbaikan menghilang.** Orang berhenti menyarankan. Tanggapi dengan cepat dan tunjukkan daftarnya.
- **Program perbaikan besar.** Perubahan memakan waktu setahun dan hasilnya sedikit. Pilih eksperimen kecil dengan pemeriksaan.
- **Menghitung penghematan sebagai tujuan.** Angka digelembungkan. Ukur hasil dan pengalaman pelanggan.

## Model kematangan

| Dimensi | Memulai | Mengembangkan | Menstandardisasi | Mengelola | Mengorkestrasi |
|---|---|---|---|---|---|
| Nilai dan pemborosan | Nilai diasumsikan | Sebagian pemborosan diidentifikasi | Nilai dan pemborosan didefinisikan per layanan | Pemborosan dilacak dan dikurangi | Pengurangan pemborosan dikoordinasikan lintas layanan dan pemasok |
| Kebiasaan perbaikan | Perbaikan karena krisis | Beberapa pelopor | Eksperimen kecil teratur dengan tinjauan | Hasil diukur dan dibagikan | Perbaikan tertanam dalam tim dan lintas mitra |
| Pemecahan masalah | Menyalahkan | Sebagian analisis akar masalah | Metode akar masalah standar dipakai | Penyebab dilacak hingga pencegahan | Pembelajaran dibagikan di seluruh organisasi |
| Pencegahan kesalahan | Jarang | Pengaman ad hoc | Pengaman untuk kesalahan berulang yang diketahui | Dampak pengaman diukur | Pengaman terbangun dalam perangkat dan pipeline di mana-mana |

## Daftar periksa

- [ ] Kami menuliskan apa yang dihargai pelanggan setiap layanan.
- [ ] Kami pergi ke tempat pekerjaan terjadi dan mengamati pekerjaan nyata.
- [ ] Kami mengklasifikasikan langkah sebagai menambah nilai, perlu, atau pemborosan.
- [ ] Gagasan perbaikan terlihat, dijawab dengan cepat, dan dilacak.
- [ ] Kami mencoba perubahan sebagai eksperimen kecil dengan tanggal pemeriksaan.
- [ ] Tinjauan mencari penyebab dalam sistem, bukan menyalahkan.
- [ ] Kami menambahkan pengaman untuk kesalahan berulang.
- [ ] Kami menyatakan bagaimana hasil perbaikan akan dipakai.

## Prompt AI

**Klasifikasikan langkah sebagai nilai atau pemborosan untuk ditinjau.**

```text
Here are the steps in our process for [service], with who does each and roughly how long it takes: [paste steps].
Propose for each step whether it adds value to the customer, is necessary but not value-adding, or looks like waste, with a one-line reason and a question to confirm with the people who do it. Do not recommend removing anything.
List what you are unsure of.
```

**Temukan pertanyaan berulang dalam tiket.**

```text
Below are ticket titles and first messages, with personal data removed: [paste sample].
Group them into up to eight themes, count each, and quote two short examples per theme exactly. Do not guess causes.
List what you are unsure of.
```

**Ubah catatan akar masalah menjadi pertanyaan tentang sistem.**

```text
Here is a summary of a recent failure: [paste summary].
Rewrite it as a list of questions about what in our system allowed the failure, avoiding blame, and suggest one guard to consider for each. Do not state causes that are not in the summary.
List what you are unsure of.
```

## Skill AI

- [kaizen](../../../../skills/kaizen/SKILL.md): gunakan untuk merencanakan dan menjalankan eksperimen perbaikan kecil.
- [root-cause-analysis](../../../../skills/root-cause-analysis/SKILL.md): gunakan untuk menemukan penyebab dalam sistem.
- [value-stream-map](../../../../skills/value-stream-map/SKILL.md): gunakan untuk melihat pemborosan dan penantian dalam alur.
- [fishbone-diagram](../../../../skills/fishbone-diagram/SKILL.md): gunakan untuk menata kemungkinan penyebab untuk didiskusikan.

## Sumber utama

- Taiichi Ohno, *Toyota Production System: Beyond Large-Scale Production* (1988): kisah seorang pendiri tentang gagasan-gagasan ini.
- Mary dan Tom Poppendieck, *Lean Software Development: An Agile Toolkit* (2003): menyesuaikan pemikiran lean untuk perangkat lunak.
- Wikipedia, "Lean manufacturing" dan "Kaizen": ringkasan netral dengan bacaan lanjutan.
- Wikipedia, "Lean software development": adaptasi untuk pekerjaan perangkat lunak.

## Referensi

1. Lean manufacturing — Wikipedia — https://en.wikipedia.org/wiki/Lean_manufacturing
2. Kaizen — Wikipedia — https://en.wikipedia.org/wiki/Kaizen
3. Toyota Production System — Wikipedia — https://en.wikipedia.org/wiki/Toyota_Production_System
4. Muda (Japanese term) — Wikipedia — https://en.wikipedia.org/wiki/Muda_(Japanese_term)
5. Lean software development — Wikipedia — https://en.wikipedia.org/wiki/Lean_software_development
6. Gemba — Wikipedia — https://en.wikipedia.org/wiki/Gemba
7. Poka-yoke — Wikipedia — https://en.wikipedia.org/wiki/Poka-yoke
8. Andon (manufacturing) — Wikipedia — https://en.wikipedia.org/wiki/Andon_(manufacturing)
9. Five whys — Wikipedia — https://en.wikipedia.org/wiki/Five_whys
10. Value-stream mapping — Wikipedia — https://en.wikipedia.org/wiki/Value-stream_mapping
