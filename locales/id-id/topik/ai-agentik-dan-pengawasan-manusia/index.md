# AI agentik dan pengawasan manusia

**Agen AI yang bertindak pada sistem, bukan hanya menjawab pertanyaan, memerlukan ruang lingkup yang terdefinisi, izin hak istimewa paling sedikit, gerbang persetujuan untuk tindakan yang berkonsekuensi, jejak audit yang lengkap, dan cara yang teruji untuk menghentikannya; otonomi harus diberikan dalam langkah kecil berbasis bukti, dan akuntabilitas tetap pada orang yang ditunjuk.**

## Mengapa ini penting

Sebagian besar pemakaian AI dalam manajemen layanan sejauh ini bersifat penasihat. Model membaca tiket dan menyarankan kategori, atau menyusun balasan yang disunting seseorang. Jika saran itu salah, manusia menyadarinya sebelum ada yang terjadi. Agen AI mengubah itu. Ia diberi alat: ia dapat menanyakan sistem, memperbarui catatan, menjalankan perintah, membuka dan menutup tiket, dan mengirim pesan. Ia merencanakan langkah menuju tujuan dan melaksanakannya, sering dengan sedikit keterlibatan manusia di antara instruksi dan hasil.

Ini menjanjikan nilai nyata. Agen dapat menyelidiki peringatan dengan menarik log, memeriksa perubahan terbaru, dan memposting ringkasan. Ia dapat memproses permintaan rutin dari ujung ke ujung: memverifikasi kelayakan, membuat akun, memberi tahu pengguna. Ia dapat menyusun perbaikan dan membuka pull request. Bila dilakukan dengan baik, ia mengambil pekerjaan rutin dari orang yang sibuk dan bekerja pada jam berapa pun.

Ia juga mengubah sifat risiko. Jawaban salah adalah ketidaknyamanan. Tindakan salah dapat menghapus data, memberi akses kepada orang yang salah, menjatuhkan layanan, atau mengirim pesan kepada sepuluh ribu pelanggan. Kecepatan yang membuat agen berguna membuat kesalahannya menyebar cepat. Dan agen terpapar serangan: instruksi bermusuhan yang tersembunyi dalam tiket atau halaman web dapat mengarahkan agen yang punya kuasa bertindak.

Topik ini memaparkan gagasan utama untuk memakai agen dengan aman dalam manajemen layanan: ruang lingkup, izin, persetujuan, audit, dan penghentian. Ia dibangun di atas Topik 5.1 — AI dalam manajemen layanan dan Topik 5.6 — Tata kelola, risiko, dan kepatuhan AI, dan terhubung dengan otomatisasi (Topik 6.1 — Strategi otomatisasi dan Topik 6.6 — Otomatisasi runbook dan perbaikan otomatis), pemampuan perubahan (Topik 3.4 — Pemampuan Perubahan), dan keamanan informasi (Topik 3.13 — Manajemen Keamanan Informasi).

## Konsep inti

**Agen AI.** Sistem yang mempersepsikan lingkungannya, membuat keputusan, dan mengambil tindakan untuk mencapai tujuan. Wikipedia menjelaskan intelligent agent dan AI agent. Dalam praktik saat ini, agen biasanya menggabungkan model bahasa dengan alat dan sebuah lingkar: model memutuskan apa yang dilakukan selanjutnya, memanggil alat, membaca hasilnya, dan melanjutkan sampai ia memutuskan sudah selesai atau mencapai batas.

**Alat dan izin.** Kumpulan tindakan yang dapat diambil agen, seperti membaca basis pengetahuan, menanyakan pemantauan, membuat tiket, atau memulai ulang layanan. Alat sering diekspos melalui application programming interface (API). Wikipedia menjelaskan API. Protokol terbuka untuk menghubungkan model dengan alat, seperti Model Context Protocol yang dijelaskan di Wikipedia, memudahkan penambahan alat, yang berguna dan juga memperluas apa yang dapat dilakukan agen. Setiap alat membawa risikonya sendiri.

**Tingkat otonomi.** Cara berguna untuk memikirkan kendali adalah sebagai tingkat, dari tidak ada hingga penuh. Di satu ujung, agen hanya menyarankan. Lalu ia menyiapkan tindakan untuk disetujui. Lalu ia bertindak sendiri dalam batas sempit dan melapor. Di ujung jauh ia bertindak luas tanpa tinjauan. Artikel Wikipedia tentang supervisory control menjelaskan gagasan pengawasan manusia atas sistem otomatis. Pilih tingkat per tugas, berdasarkan biaya kesalahan dan kemampuan untuk membatalkannya.

**Pengawasan manusia.** Seseorang tetap mampu memahami, menyetujui, menghentikan, atau mengoreksi agen. Wikipedia menjelaskan sistem human-in-the-loop. Pengawasan mengambil beberapa bentuk: menyetujui tindakan sebelum terjadi, memantau tindakan saat terjadi, dan meninjau sesudahnya. Bentuk yang tepat bergantung pada kecepatan dan risiko. Tinjauan setelah kejadian tidak berguna untuk tindakan yang tidak dapat dibalik.

**Bias otomatisasi dan stempel karet.** Orang cenderung menyetujui apa yang diusulkan sistem, terutama ketika persetujuan sering dan tampak serupa. Wikipedia menjelaskan automation bias. Kontrol yang disetujui orang tanpa dibaca bukanlah kontrol. Rancang persetujuan agar menunjukkan apa yang akan terjadi, cukup jarang untuk dibaca, dan diperiksa dengan sampel.

**Hak istimewa paling sedikit.** Agen harus memiliki hanya izin yang dibutuhkannya untuk tugasnya, selama ia membutuhkannya. Wikipedia menjelaskan principle of least privilege. Pakai identitas terpisah untuk agen, bukan akun administrator bersama, agar tindakan dapat dilacak dan izin dibatasi.

**Confused deputy.** Masalah keamanan di mana program tepercaya ditipu untuk memakai wewenangnya atas nama seseorang yang tidak memilikinya. Wikipedia menjelaskan confused deputy problem. Agen yang dapat bertindak dengan hak istimewa tinggi dan menerima instruksi dari teks berkepercayaan rendah, seperti pesan pengguna, adalah kasus klasik.

**Prompt injection.** Instruksi bermusuhan yang tersembunyi dalam konten yang dibaca agen, seperti tiket, email, halaman web, atau baris log. Wikipedia menjelaskan prompt injection. Karena model tidak dapat membedakan instruksi dari data dengan andal, sumber konten dapat mencoba mengalihkan agen. Pertahanan sebagian besar bersandar pada membatasi apa yang dapat dilakukan agen, bukan membujuk model untuk mengabaikan teks buruk.

**Sandbox.** Menjalankan agen dalam lingkungan terbatas, dengan akses terbatas ke sistem dan data. Wikipedia menjelaskan sandbox dalam keamanan komputer. Biarkan agen mencoba tindakan di lingkungan uji sebelum bekerja di produksi.

**Keterbalikan (reversibility).** Utamakan tindakan yang dapat dibatalkan: membuat tiket, menambah label, mengusulkan perubahan. Perlakukan tindakan yang tidak dapat dibalik, seperti penghapusan, pembayaran, dan mengirim pesan ke luar, sebagai memerlukan persetujuan atau dilarang. Wikipedia menjelaskan rollback dalam manajemen data.

**Batas dan pemutus sirkuit (circuit breaker).** Pembatasan berapa banyak tindakan yang dapat diambil agen per jam, berapa banyak yang dapat dibelanjakannya, berapa banyak butir yang dapat diubahnya sekaligus, dan berapa lama ia dapat berjalan. Wikipedia menjelaskan rate limiting. Batas mengubah kesalahan yang lepas kendali menjadi kesalahan yang terbatas.

**Kill switch.** Cara cepat dan andal untuk menghentikan agen dan mencabut aksesnya. Wikipedia menjelaskan kill switch. Ujilah. Kill switch yang bergantung pada kerja sama agen itu sendiri, atau pada sistem yang mati, bukanlah kill switch.

**Jejak audit.** Catatan lengkap tentang apa yang diminta dari agen, apa yang diputuskannya, alat apa yang dipanggilnya dengan masukan apa, dan apa yang terjadi. Wikipedia menjelaskan audit trail. Tanpanya, Anda tidak dapat menyelidiki kesalahan, menunjukkan kepatuhan, atau belajar.

**Akuntabilitas.** Agen tidak bertanggung jawab; orang yang bertanggung jawab. Pemilik yang ditunjuk bertanggung jawab atas apa yang dilakukan agen, izinnya, dan meninjau catatannya. Wikipedia menjelaskan accountability. Lihat Topik 2.8 — Kepemilikan Produk dan Layanan.

**Sistem multi-agen.** Beberapa agen yang bekerja bersama dapat menambah kompleksitas, kesalahan yang berantai, dan tanggung jawab yang tidak jelas. Wikipedia menjelaskan multi-agent system. Perlakukan ruang lingkup dan izin setiap agen secara terpisah, dan berhati-hatilah terhadap agen yang menginstruksikan agen.

**Pemisahan tugas.** Gagasan bahwa tidak ada satu pihak pun yang boleh dapat menyelesaikan tindakan berisiko sendirian berlaku pada agen. Agen yang mengusulkan perubahan tidak boleh yang menyetujuinya. Wikipedia menjelaskan separation of duties.

**Bagaimana lensa-lensa cocok.** Agen berada di tempat AI bertemu otomatisasi. Praktik agile menyarankan memulai kecil dan memperluas otonomi dalam langkah dengan bukti. Analitik mengukur apa yang dilakukan agen dan apa yang salah. Tata kelola (lihat Topik 5.6 — Tata kelola, risiko, dan kepatuhan AI) menetapkan aturan.

## Praktik terbaik

1. **Definisikan ruang lingkup secara tertulis.** Nyatakan untuk apa agen, apa yang boleh dilakukannya, apa yang tidak boleh dilakukannya, dan data apa yang boleh disentuhnya. Jaga tetap sempit pada awalnya.
2. **Beri setiap agen identitasnya sendiri.** Pakai akun terpisah dengan izin minimum, dibatasi pada tugasnya, dan putar atau kedaluwarsakan kredensial. Jangan memakai ulang akun administrator manusia.
3. **Pilih tingkat otonomi menurut risiko.** Biarkan agen menyarankan lebih dulu, lalu bertindak pada tugas berisiko rendah yang dapat dibalik, dan wajibkan persetujuan untuk apa pun yang berkonsekuensi atau tidak dapat dibalik. Tuliskan tingkatnya untuk setiap tugas.
4. **Rancang persetujuan yang dibaca orang.** Tunjukkan tindakan yang diusulkan, alasan, bukti, dan dampaknya. Jaga persetujuan cukup jarang untuk dibaca, dan ambil sampel butir yang disetujui untuk mutu.
5. **Uji di sandbox lebih dulu.** Jalankan agen terhadap salinan yang aman dengan kasus realistis, termasuk yang adversarial, sebelum ia menyentuh produksi.
6. **Perlakukan masukan sebagai tidak tepercaya.** Jangan biarkan konten dari tiket, email, atau web memberi wewenang. Batasi alat yang tersedia ketika agen memproses konten yang tidak tepercaya.
7. **Batasi radius ledakan.** Tetapkan batas jumlah tindakan, besar perubahan, belanja, dan waktu. Jadikan tindakan massal sebagai langkah terpisah yang disetujui.
8. **Catat segalanya dan tinjau.** Simpan jejak lengkap, simpan di tempat agen tidak dapat mengubahnya, dan tinjau sampel secara berkala. Beri peringatan atas pola yang tidak biasa.
9. **Bangun dan uji kill switch.** Buat cepat, independen dari agen, dan dikenal oleh petugas piket. Latih.
10. **Perluas otonomi perlahan.** Berikan lebih banyak hanya setelah periode hasil yang baik, dengan persetujuan pemilik yang ditunjuk dan tingkat kesalahan yang terukur. Kurangi ketika masalah muncul.

## Pertanyaan untuk dibahas bersama tim Anda

**Apa hal terburuk yang dapat dilakukan agen ini dengan izin yang kita rencanakan untuk diberikan?**
Telusuri izin, alat demi alat. Harapkan rasa tidak nyaman. Lanjutkan dengan menghapus atau membatasi izin mana pun yang skenario terburuknya tidak akan kita terima.

**Tindakannya yang mana yang dapat kita batalkan, dan mana yang tidak?**
Daftarkan. Harapkan beberapa yang tidak dapat dibalik yang diasumsikan aman. Lanjutkan dengan mewajibkan persetujuan untuk setiap tindakan yang tidak dapat dibalik.

**Bagaimana pemberi persetujuan tahu apa yang mereka setujui, dan seberapa sering mereka melihat permintaan?**
Bayangkan pemberi persetujuan pada hari yang sibuk. Harapkan permintaan yang panjang dan tampak serupa. Lanjutkan dengan merancang ringkasan dan batas volume persetujuan.

**Apa yang harus dimasukkan seseorang ke dalam tiket atau email agar agen melakukan sesuatu yang tidak kita inginkan?**
Cobalah sebagai penyerang. Harapkan kejutan. Lanjutkan dengan memilih mitigasi seperti membatasi alat ketika membaca konten yang tidak tepercaya.

**Jika kita perlu menghentikannya sekarang juga, siapa yang melakukannya, bagaimana, dan berapa lama?**
Minta langkah-langkahnya dan latih. Harapkan ketidakpastian. Lanjutkan dengan menulis prosedur penghentian satu halaman dan mengujinya.

**Siapa yang memiliki agen ini, dan apa yang mereka tinjau setiap minggu?**
Sebutkan orang dan tinjauannya. Harapkan celah. Lanjutkan dengan menetapkan kepemilikan dan tinjauan sampel mingguan dengan pertanyaan yang terdefinisi.

## Dalam praktik: contoh manajemen layanan

Tim infrastruktur sebuah badan pajak nasional menginginkan agen untuk menyelidiki peringatan produksi semalaman. Saat ini insinyur piket dibangunkan untuk sebagian besar peringatan, menghabiskan 15 sampai 30 menit mengumpulkan konteks, dan sering mendapati penyebabnya adalah masalah yang dikenal dengan perbaikan terdokumentasi.

Tim merancang agen dalam tiga tahap. Pada tahap satu, agen memiliki akses hanya-baca: ia dapat menanyakan metrik, log, catatan perubahan terbaru, dan basis pengetahuan, serta memposting ringkasan ke kanal insiden dengan bukti yang dipakainya. Pada tahap dua, ia juga boleh melakukan daftar kecil tindakan yang dapat dibalik, seperti memulai ulang layanan tanpa keadaan atau menskalakan kumpulan pekerja naik dua instans, hanya ketika peringatan cocok dengan runbook terdokumentasi, dengan batas tiga tindakan per jam dan postingan ke kanal setelah masing-masing. Pada tahap tiga, yang belum disetujui, ia akan diizinkan mengusulkan perubahan konfigurasi untuk persetujuan manusia.

Agen memiliki akun layanannya sendiri dengan akses hanya-baca ke produksi, ditambah dua tindakan bernama. Ia membaca teks tiket dan log, yang dapat memuat konten bermusuhan, jadi ketika membaca teks bebas ia tidak dapat memanggil alat tindakan apa pun pada langkah yang sama. Catatan lengkap agen tentang permintaan, panggilan alat, dan hasil masuk ke penyimpanan log terpisah. Seorang insinyur senior memiliki agen, meninjau sepuluh sesi setiap minggu, dan dapat menonaktifkan kredensialnya dengan satu perintah, yang dilatih tim setiap bulan.

Setelah dua bulan pada tahap satu, insinyur piket mendapati ringkasan benar pada 85 persen kasus. Pada 10 persen mereka melewatkan perubahan yang relevan karena catatan perubahan tidak lengkap, dan pada 5 persen mereka menunjuk komponen yang salah. Tahap dua dimulai dengan satu runbook. Pada bulan pertama, agen memulai ulang layanan tiga kali, dengan benar. Dalam satu pengujian dengan tiket buatan yang memuat instruksi tersembunyi untuk menskalakan kumpulan ke angka yang sangat tinggi, batas laju dan aturan tindakan menghentikannya.

Yang berubah: insinyur lebih jarang dibangunkan dan tiba dengan ringkasan dan bukti. Yang masih sulit: ketergantungan agen pada catatan perubahan yang akurat mengungkap celah mutu data; insinyur kadang memercayai ringkasan di atas pemeriksaan mereka sendiri; dan tim keamanan meminta agar retensi log audit diperpanjang dan ditinjau. Pemilik mencatat ini dan menahan tahap tiga sampai tingkat kesalahan di tahap dua diukur selama satu kuartal.

## Empat perspektif

### Tim produk dan pengiriman

Ekspos alat yang aman dan sempit dengan izin yang jelas, batas laju, dan log. Jangan beri agen akses menyeluruh ke pipeline atau data Anda. Sertakan agen dalam model ancaman Anda.

### Tim layanan dan operasi

Miliki ruang lingkup agen, tinjau catatannya, dan latih menghentikannya. Jaga runbook tetap akurat, karena agen bersandar padanya. Laporkan kesalahan dan nyaris celaka.

### Kepemimpinan dan tata kelola

Putuskan otonomi apa yang dapat diterima untuk setiap tugas, dan wajibkan pemilik yang ditunjuk dan jejak audit. Minta bukti dari uji coba tahap demi tahap, dan bersedialah mengurangi otonomi. Jangan mengandalkan jaminan vendor saja.

### Pelanggan dan pengguna

Anda seharusnya tahu ketika agen otomatis bertindak atas permintaan Anda, dan memiliki jalur ke manusia yang dapat memperbaiki kesalahan. Beri tahu penyedia jika tindakan otomatis salah.

## Agile, AI, otomatisasi, dan analitik

### Agile

Perluas otonomi dalam langkah kecil dengan bukti, tinjau setiap langkah bersama pemangku kepentingan, dan jaga setiap rilis tetap kecil. Perhatian: iterasi cepat dapat mendahului tinjauan keselamatan; pertahankan gerbang untuk setiap peningkatan otonomi.

### AI

Agen adalah sistem AI dengan pemilik, kasus uji, dan pemantauan, dan ia membutuhkan kehati-hatian khusus karena ia bertindak. Jaga dari prompt injection dan kepercayaan berlebih. Perhatian: jangan mengandalkan instruksi yang menyuruh model berhati-hati sebagai kontrol utama; andalkan izin, batas, dan persetujuan. Lihat Topik 5.6 — Tata kelola, risiko, dan kepatuhan AI.

### Otomatisasi

Agen terhubung ke otomatisasi: mereka memilih dan memicu tindakan. Jaga tindakan itu sendiri deterministik dan teruji, dengan validasinya sendiri, agar pilihan agen terbatas pada opsi yang disetujui. Perhatian: otomatisasi yang menerima perintah bebas dari agen sama berisikonya dengan agen; ekspos tindakan yang sempit dan bernama. Lihat Topik 6.6 — Otomatisasi runbook dan perbaikan otomatis.

### Analitik

Ukur tindakan yang diambil, tingkat persetujuan, penimpaan, kesalahan yang ditemukan dalam tinjauan, waktu yang dihemat, dan nyaris celaka. Perhatian: tingkat persetujuan yang tinggi dapat berarti usulan yang baik atau stempel karet; ambil sampel butir yang disetujui. Lihat buku *Service Management Metrics* dan Topik 7.3 — Pengukuran dan pelaporan.

## Mode kegagalan umum

- **Izin luas.** Akun admin bersama diberikan kepada agen. Pakai identitas hak istimewa paling sedikit yang terpisah.
- **Persetujuan yang tidak dibaca siapa pun.** Permintaan yang sering dan samar distempel karet. Buat jarang, jelas, dan disampel.
- **Teks bermusuhan mengarahkan agen.** Konten dalam tiket atau halaman web mengeluarkan perintah. Batasi alat di sekitar masukan yang tidak tepercaya.
- **Tidak ada batas.** Lingkar atau kesalahan berjalan dengan kecepatan mesin. Batasi tindakan, belanja, dan ruang lingkup.
- **Tidak ada tombol berhenti.** Tak seorang pun dapat menghentikannya. Bangun dan latih kill switch.
- **Tidak ada catatan.** Insiden tidak dapat diselidiki. Simpan jejak audit lengkap yang dilindungi.
- **Otonomi dinaikkan karena antusiasme.** Agen mendapat lebih banyak kuasa tanpa bukti. Perluas dalam langkah dengan ukuran.

## Model kematangan

| Dimensi | Memulai | Mengembangkan | Menstandardisasi | Mengelola | Mengorkestrasi |
|---|---|---|---|---|---|
| Ruang lingkup dan izin | Luas atau tidak jelas | Uji coba sempit | Ruang lingkup tertulis, identitas sendiri, hak istimewa paling sedikit | Ruang lingkup dan izin ditinjau secara teratur | Izin menyesuaikan menurut risiko dengan persetujuan |
| Pengawasan | Tidak ada | Tinjauan informal | Tingkat otonomi dan gerbang persetujuan terdefinisi | Mutu persetujuan disampel dan diukur | Pengawasan disetel berdasarkan bukti lintas agen |
| Kontrol keselamatan | Tidak ada | Pencatatan dasar | Sandbox, batas, kill switch teruji | Kontrol diaudit dan dilatih | Kontrol terbangun dalam platform untuk semua agen |
| Akuntabilitas | Tidak jelas | Pembangun memilikinya | Pemilik yang ditunjuk dengan tinjauan mingguan | Pemilik meninjau ukuran dan insiden | Kepemilikan dikoordinasikan lintas agen dan tim |

## Daftar periksa

- [ ] Agen memiliki ruang lingkup tertulis dan pemilik yang ditunjuk.
- [ ] Ia memakai identitasnya sendiri dengan izin hak istimewa paling sedikit.
- [ ] Tingkat otonomi didefinisikan per tugas, dengan persetujuan untuk tindakan yang berkonsekuensi atau tidak dapat dibalik.
- [ ] Persetujuan menunjukkan apa yang akan terjadi dan disampel untuk mutu.
- [ ] Kami mengujinya di sandbox, termasuk masukan adversarial.
- [ ] Batas membatasi tindakan, belanja, dan ruang lingkup.
- [ ] Catatan lengkapnya dilog di tempat ia tidak dapat mengubahnya, dan ditinjau.
- [ ] Kami memiliki kill switch dan telah melatih memakainya.

## Prompt AI

**Uji ruang lingkup agen.**

```text
Our agent's written scope is: [paste]. Its tools and permissions: [list].
List twenty scenarios, some inside the scope, some at the edge, and some that try to get the agent to act outside it or to use a tool in a harmful way, and for each state what the correct behavior is. Do not include real systems or data.
List what you are unsure of.
```

**Tinjau log tindakan.**

```text
Here is a sample of an agent's action log, with identifiers removed: [paste].
List actions that look unusual in size, timing, or target, actions that did not match a documented runbook, and anything that looks like the agent following instructions from untrusted text. Quote each. Do not say whether the agent was right.
List what you are unsure of.
```

**Susun draf pesan persetujuan.**

```text
The agent proposes this action: [describe]. The evidence it used: [list]. What would change if it were done: [describe]. How to undo it: [describe or write "not known"].
Write a clear approval request of under 100 words for a busy approver, stating what will happen, why, the risk, and how to undo it. Do not recommend approval.
List what you are unsure of.
```

## Skill AI

- [risk-register](../../../../skills/risk-register/SKILL.md): gunakan untuk mencatat risiko agen, pemilik, dan keputusan.
- [runbook](../../../../skills/runbook/SKILL.md): gunakan untuk mendefinisikan tindakan yang boleh diambil agen dan kapan.
- [security-testing](../../../../skills/security-testing/SKILL.md): gunakan untuk menguji agen terhadap masukan bermusuhan.
- [incident-response-plan](../../../../skills/incident-response-plan/SKILL.md): gunakan untuk merencanakan respons ketika agen berperilaku salah.
- [mlops](../../../../skills/mlops/SKILL.md): gunakan untuk memantau dan memberi versi model di balik agen.

## Sumber utama

- NIST, AI Risk Management Framework: struktur untuk menata kelola risiko AI, termasuk sistem otonom.
- OWASP, panduan tentang risiko untuk aplikasi yang dibangun di atas model bahasa besar (owasp.org): termasuk prompt injection dan excessive agency.
- Wikipedia, "AI agent" dan "Prompt injection": ikhtisar gagasan dan risiko keamanan utama.
- Wikipedia, "Principle of least privilege": kontrol dasar untuk membatasi kerusakan.

## Referensi

1. Intelligent agent — Wikipedia — https://en.wikipedia.org/wiki/Intelligent_agent
2. AI agent — Wikipedia — https://en.wikipedia.org/wiki/AI_agent
3. Human-in-the-loop — Wikipedia — https://en.wikipedia.org/wiki/Human-in-the-loop
4. Principle of least privilege — Wikipedia — https://en.wikipedia.org/wiki/Principle_of_least_privilege
5. Confused deputy problem — Wikipedia — https://en.wikipedia.org/wiki/Confused_deputy_problem
6. Prompt injection — Wikipedia — https://en.wikipedia.org/wiki/Prompt_injection
7. Sandbox (computer security) — Wikipedia — https://en.wikipedia.org/wiki/Sandbox_(computer_security)
8. Kill switch — Wikipedia — https://en.wikipedia.org/wiki/Kill_switch
9. Audit trail — Wikipedia — https://en.wikipedia.org/wiki/Audit_trail
10. Automation bias — Wikipedia — https://en.wikipedia.org/wiki/Automation_bias
11. Rate limiting — Wikipedia — https://en.wikipedia.org/wiki/Rate_limiting
12. OWASP — OWASP Foundation — https://owasp.org
