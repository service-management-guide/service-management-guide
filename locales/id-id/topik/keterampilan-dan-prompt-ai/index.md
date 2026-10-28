# Keterampilan dan Prompt AI

**Prompt adalah permintaan yang Anda berikan kepada sistem AI, dan skill adalah sekumpulan instruksi yang dapat dipakai ulang dan diberi versi untuk satu jenis tugas; keduanya bekerja paling baik ketika menyebutkan tugas, menyediakan bahan sumber, menyatakan apa yang dilakukan ketika informasi hilang, dan diuji seperti produk kerja lainnya.**

## Mengapa ini penting

Setiap orang yang memakai asisten AI menulis prompt, sebagian besar dengan coba-coba. Sebagian mendapat hasil sangat baik dan tidak bisa mengatakan mengapa. Yang lain mendapat jawaban samar atau salah dan memutuskan bahwa alatnya buruk. Perbedaannya sering bukan modelnya tetapi permintaannya: seberapa jelas tugas dinyatakan, bahan apa yang dimiliki asisten, dan bagaimana jawabannya diperiksa.

Dalam manajemen layanan perbedaan itu penting karena pekerjaannya memiliki taruhan. Prompt yang merangkum insiden dari ingatan dapat menghasilkan linimasa karangan. Prompt yang meminta "praktik terbaik" menghasilkan teks generik yang terdengar benar dan tidak membantu siapa pun. Prompt yang ditulis tergesa-gesa mungkin menempelkan data rahasia ke perangkat yang salah. Semua ini adalah kebiasaan, dan kebiasaan dapat diperbaiki.

Skill membawa gagasan itu selangkah lebih jauh. Skill mengemas instruksi untuk tugas yang berulang, seperti menulis runbook atau menjalankan postmortem, dalam berkas yang dapat dimuat asisten AI ketika tugas itu muncul. Skill dalam panduan ini ditulis dalam format Claude Code: masing-masing adalah berkas `SKILL.md` dengan deskripsi singkat kapan dipakai dan panduan untuk mengerjakan tugasnya. Tim dapat menyalin, menyesuaikan, dan menulis sendiri. Topik ini menjelaskan cara memakai prompt dan skill dalam panduan ini, pola yang berhasil, cara memverifikasi hasil, dan cara menulis skill tim sendiri. Ia dibangun di atas Topik 5.1 — AI dalam manajemen layanan dan pengaman dalam Topik 5.6 — Tata kelola, risiko, dan kepatuhan AI.

## Konsep inti

**Prompt.** Teks, dan bahan apa pun yang dilampirkan, yang Anda berikan kepada model bahasa besar untuk mendapat respons. Wikipedia menjelaskan prompt engineering sebagai proses menyusun instruksi agar model generatif menghasilkan keluaran yang diinginkan. Model merespons pola dalam prompt; prompt yang lebih jelas biasanya memberi respons yang lebih baik.

**Konteks.** Segala yang dapat dipertimbangkan model ketika menjawab: instruksi Anda, dokumen yang Anda berikan, dan percakapan sejauh ini. Wikipedia menjelaskan context window, yang membatasi seberapa banyak yang dapat dipertimbangkan model sekaligus. Jika sesuatu tidak ada dalam konteks, model dapat mengisi celah dari pengetahuan umum, di situlah kesalahan menyelinap.

**Landasan (grounding).** Menyediakan bahan sumber dan meminta model memakai hanya itu. Wikipedia menjelaskan retrieval-augmented generation, bentuk otomatisnya. Untuk pemakaian manual, tempel teks yang relevan dan katakan "pakai hanya teks di bawah ini". Lihat Topik 3.9 — Manajemen Pengetahuan.

**Anatomi prompt yang baik.** Enam bagian mencakup sebagian besar kebutuhan:

| Bagian | Apa fungsinya | Contoh |
|---|---|---|
| Peran atau konteks | Menetapkan situasi | "Anda membantu kepala service desk menyiapkan tinjauan." |
| Tugas | Menyatakan apa yang dihasilkan | "Ringkas insiden sebagai linimasa." |
| Bahan sumber | Menyediakan fakta | Riwayat tiket yang ditempel |
| Batasan | Menetapkan batas | "Pakai hanya teks. Jangan menebak penyebab." |
| Format | Membentuk keluaran | "Tabel berisi waktu, peristiwa, dan sumber yang dikutip." |
| Aturan ketidakpastian | Menyatakan apa yang dilakukan ketika tidak yakin | "Tulis 'tidak dinyatakan' dan daftarkan apa yang tidak Anda yakini." |

**Penampung (placeholder).** Prompt dalam panduan ini memakai `[tanda kurung siku]` untuk menandai apa yang harus diganti dengan bahan Anda sendiri. Prompt dengan penampung yang belum diisi adalah penyebab umum hasil yang buruk; baca setiap penampung sebelum Anda mengirim.

**Contoh dan struktur.** Memberi satu atau dua contoh keluaran yang Anda inginkan, dikenal sebagai few-shot prompting dan dijelaskan di Wikipedia, sering memperbaiki hasil lebih daripada penjelasan tambahan. Meminta struktur, seperti tabel, mempermudah pemeriksaan.

**Meminta penalaran.** Teknik yang meminta model bekerja melalui langkah-langkah, dijelaskan Wikipedia sebagai chain-of-thought prompting, dapat memperbaiki jawaban untuk beberapa masalah. Penalaran yang terlihat tidak selalu merupakan penjelasan yang setia tentang bagaimana jawaban dihasilkan, dan juga dapat memuat kesalahan. Pakai untuk membantu Anda memeriksa, bukan sebagai bukti.

**Verifikasi.** Perlakukan setiap keluaran sebagai draf. Periksa fakta terhadap sumber, periksa perhitungan, dan periksa bahwa kutipan benar-benar ada. Wikipedia menjelaskan hallucination dan automation bias; keduanya alasan untuk memverifikasi. Prompt yang meminta model mengutip sumbernya membuat ini cepat.

**Iterasi.** Hasil pertama sering bukan yang terbaik. Minta perubahan, tunjuk kesalahan, dan perbaiki prompt. Simpan versi yang berhasil.

**Skill.** Dalam panduan ini, skill adalah berkas `SKILL.md` yang memberi tahu asisten AI bagaimana mengerjakan suatu jenis tugas. Ia dimulai dengan header singkat yang memberi nama skill dan deskripsi kapan dipakai, diikuti panduan: komponen kunci, langkah, dan pemeriksaan. Asisten yang mendukung skill memuat berkas yang relevan ketika permintaan Anda cocok dengan deskripsi. Skill adalah teks biasa, sehingga dapat dibaca, ditinjau, diberi versi, dan dibagikan seperti dokumen lain. Artikel Wikipedia tentang Markdown menjelaskan format yang dipakainya.

**Skill versus prompt.** Prompt untuk satu permintaan; skill menangkap metode untuk jenis tugas yang berulang, agar Anda tidak menulis ulang setiap kali. Skill mungkin memuat beberapa prompt, daftar periksa, dan kriteria hasil yang baik. Topik dalam panduan ini menautkan ke skill di tempat metode berguna.

**Apa yang harus dimuat skill.** Skill yang baik menyatakan kapan dipakai dan kapan tidak, mendefinisikan bagian kunci keluaran, memberi proses singkat, mendaftar kesalahan umum, dan mengatakan cara memeriksa hasilnya. Mereka spesifik dan singkat. Skill yang mencoba mencakup segalanya jarang dipakai.

**Menguji skill dan prompt.** Perlakukan sebagai produk kerja. Susun beberapa kasus uji realistis dengan hasil baik yang diketahui, jalankan, dan catat kegagalan. Jalankan lagi ketika model, perangkat, atau skill berubah. Wikipedia menjelaskan regression testing, praktik menjalankan ulang pengujian setelah perubahan untuk menangkap kerusakan.

**Kontrol versi dan kepemilikan.** Simpan skill dalam repositori, dengan pemilik, changelog, dan tinjauan untuk perubahan. Wikipedia menjelaskan version control. Skill yang diam-diam berubah tanpa tinjauan dapat mengubah hasil tim tanpa ada yang menyadari.

**Keamanan.** Prompt dan skill dapat diserang atau disalahgunakan. Konten yang Anda tempel mungkin memuat instruksi, risiko yang dijelaskan Wikipedia sebagai prompt injection. Skill yang diunduh dari sumber yang tidak dikenal mungkin menyuruh asisten melakukan sesuatu yang berbahaya. Baca skill sebelum memakainya, dan beri asisten hanya akses yang dibutuhkannya. Lihat Topik 5.5 — AI agentik dan pengawasan manusia.

**Kerahasiaan.** Putuskan apa yang boleh ditempel ke perangkat mana. Lihat Topik 5.6 — Tata kelola, risiko, dan kepatuhan AI.

**Bagaimana lensa-lensa cocok.** Skill dan prompt adalah cara tim menerapkan AI secara konsisten. Praktik agile menyarankan menyimpan pustaka bersama yang membaik melalui pemakaian dan umpan balik. Otomatisasi dapat menjalankan prompt yang disetujui dalam alur kerja. Analitik menunjukkan prompt dan skill mana yang dipakai dan apakah membantu.

## Praktik terbaik

1. **Nyatakan tugasnya, bukan topiknya.** "Susun draf pembaruan status untuk pelanggan dari fakta-fakta ini" bekerja lebih baik daripada "bantu dengan insiden". Katakan apa yang Anda ingin dihasilkan dan untuk siapa.
2. **Sediakan sumber dan batasi padanya.** Tempel bahan yang relevan dan katakan untuk memakai hanya itu. Minta asisten menulis "tidak dinyatakan" di tempat bahan diam.
3. **Katakan format yang Anda butuhkan.** Minta tabel, daftar bernomor, atau batas kata. Ini membuat hasil lebih mudah diperiksa dan dipakai.
4. **Minta sumber dan ketidakpastian.** Minta kutipan atau rujukan, dan daftar apa yang tidak diyakini asisten. Baca daftar itu; ia menunjukkan di mana harus memeriksa lebih dulu.
5. **Jangan pernah menempelkan rahasia atau data terlindungi ke perangkat yang tidak disetujui.** Hapus nama, kredensial, dan data pribadi bila bisa. Pakai perangkat yang disetujui organisasi Anda untuk bahan sensitif.
6. **Periksa sebelum memakai.** Bandingkan fakta, angka, waktu, dan nama dengan sumber. Jalankan kode atau perintah apa pun di lingkungan aman lebih dulu.
7. **Iterasikan dan simpan yang berhasil.** Perbaiki prompt dalam beberapa putaran, lalu simpan versi akhir dengan catatan untuk apa ia dan kapan gagal.
8. **Bagikan dan tinjau pustaka tim.** Simpan prompt dan skill yang teruji di tempat bersama dengan pemilik. Tinjau perubahan, dan pensiunkan yang tidak lagi berfungsi.
9. **Tulis skill untuk pekerjaan berulang.** Ketika Anda mendapati diri mengulang prompt, ubah menjadi skill dengan deskripsi, langkah, dan pemeriksaan yang jelas. Jaga tetap singkat.
10. **Uji skill pada kasus nyata.** Susun beberapa kasus uji, jalankan setelah setiap perubahan pada skill atau perangkat, dan catat hasilnya.

## Pertanyaan untuk dibahas bersama tim Anda

**Apa yang kita minta dikerjakan perangkat AI hari ini, dan permintaan mana yang dapat kita tuliskan sebagai prompt atau skill yang dapat dipakai ulang?**
Kumpulkan contoh. Harapkan tugas berulang seperti ringkasan, draf, dan daftar periksa. Lanjutkan dengan memilih satu tugas dan menulis versi yang teruji bersama-sama.

**Bagaimana kita memeriksa jawaban AI sebelum memakainya, dan apakah semua orang melakukannya dengan cara yang sama?**
Tanyakan kapan terakhir kali seseorang menemukan kesalahan. Harapkan kebiasaan yang berbeda. Lanjutkan dengan menyepakati rutinitas verifikasi singkat untuk setiap jenis tugas.

**Apa yang pernah kita tempelkan ke perangkat AI yang seharusnya tidak, dan bagaimana kita membuat hal yang benar menjadi mudah?**
Tanyakan dalam suasana yang aman. Harapkan kesalahan. Lanjutkan dengan menyepakati apa yang boleh ke mana, dan dengan menyediakan perangkat yang disetujui dan panduan singkat.

**Prompt mana yang berhasil baik bagi individu tetapi tidak pernah dibagikan?**
Minta orang mendemonstrasikan. Harapkan yang bagus. Lanjutkan dengan mengumpulkan tiga ke dalam pustaka bersama, dengan pemilik dan tanggal tinjauan.

**Jika skill yang kita pakai berubah besok, bagaimana kita menyadarinya?**
Harapkan "kita tidak akan tahu". Lanjutkan dengan menyepakati bahwa skill berada dalam kontrol versi, ditinjau, dan memiliki beberapa kasus uji.

**Tugas mana yang tidak boleh kita serahkan kepada asisten AI, bahkan dengan pemeriksaan?**
Diskusikan keputusan yang memengaruhi orang, kesimpulan hukum, dan persetujuan. Harapkan perbedaan pendapat. Lanjutkan dengan menulis daftar singkat dan siapa yang boleh mengubahnya.

## Dalam praktik: contoh manajemen layanan

Tim layanan TI sebuah rumah sakit regional beranggotakan 25 orang mulai memakai asisten AI. Staf individu memakainya dengan cara berbeda. Seorang analis menyusun artikel pengetahuan dari catatan tiket, yang lain merangkum utas email yang panjang, dan yang ketiga memintanya menjelaskan pesan kesalahan yang tidak dikenal. Ketua tim khawatir: ia pernah melihat artikel yang memuat perintah yang meyakinkan namun salah.

Ia meminta tim membawa tiga prompt paling berguna mereka ke sesi satu jam. Mereka mendapati empat orang memakai prompt yang hampir sama untuk mengubah tiket yang terselesaikan menjadi artikel. Versi yang paling baik menyatakan bahwa asisten harus memakai hanya teks tiket, harus menulis "[hilang]" untuk apa pun yang tidak ada di dalamnya, harus menulis langkah sebagai baris bernomor, dan harus menutup dengan daftar singkat hal yang tidak diyakininya. Tanpa aturan "[hilang]", asisten mengisi celah.

Tim mengubahnya menjadi berkas skill: kapan dipakai (mengubah tiket yang terselesaikan menjadi draf artikel), bagian kunci artikel yang baik, prosesnya, dan pemeriksaan yang harus dilakukan seseorang sebelum menerbitkan, termasuk menjalankan setiap perintah di lingkungan uji. Mereka mengujinya pada sepuluh tiket lama yang solusinya diketahui dan mendapati bahwa pada tiga di antaranya asisten menebak nomor versi. Mereka menambahkan aturan tentang nomor versi dan menjalankan ulang pengujian. Mereka menyimpan skill di repositori tim, menunjuk wakil ketua sebagai pemilik, dan menyepakati bahwa perubahan ditinjau seperti kode.

Mereka juga menulis satu halaman tentang apa yang tidak boleh masuk ke perangkat AI: data pasien, kredensial, dan laporan keamanan yang belum dirilis; dan mengarahkan semua orang ke perangkat yang disetujui, yang kontraknya melarang pelatihan dengan data mereka.

Yang berubah: draf artikel memakan beberapa menit, dan jumlah artikel dengan langkah salah yang ditemukan dalam tinjauan menurun. Yang masih sulit: sebagian staf masih memakai akun pribadi ketika perangkat yang disetujui lambat; pustaka skill telah tumbuh menjadi 14 berkas dan tak seorang pun meninjau separuhnya; dan perilaku asisten bergeser sedikit setelah pembaruan vendor, yang hanya tertangkap pengujian karena seseorang menjalankannya ulang. Ketua menambahkan pengujian bulanan dan sesi pemangkasan triwulanan.

## Empat perspektif

### Tim produk dan pengiriman

Pakai prompt dan skill untuk menyusun kode, pengujian, dan dokumentasi, dengan tinjauan dan pemeriksaan pipeline Anda yang biasa. Simpan skill untuk alur kerja Anda sendiri di repositori di samping kode.

### Tim layanan dan operasi

Bangun pustaka kecil untuk tugas berulang seperti pembaruan, artikel, dan tinjauan. Bagikan apa yang berhasil, periksa setiap keluaran, dan beri tahu pemilik ketika skill gagal.

### Kepemimpinan dan tata kelola

Tetapkan aturan tentang apa yang boleh ditempel ke mana, sediakan perangkat yang disetujui, dan danai waktu untuk membangun dan menguji pustaka. Minta bukti bahwa keluaran diperiksa. Jangan memperlakukan prompt sebagai pengganti proses.

### Pelanggan dan pengguna

Anda mungkin menemui konten yang didrafkan AI. Tanyakan apakah telah diperiksa seseorang, dan beri tahu penyedia ketika salah. Berhati-hatilah dengan data pribadi yang Anda berikan kepada perangkat AI mana pun.

## Agile, AI, otomatisasi, dan analitik

### Agile

Kembangkan pustaka dari pemakaian nyata: tambahkan skill ketika tugas berulang, perbaiki dari umpan balik, dan pensiunkan ketika tidak lagi membantu. Jaga skill singkat dan ditinjau. Perhatian: pustaka besar yang tidak ditinjau adalah beban; jaga agar kecil dan dimiliki.

### AI

Skill dan prompt adalah instruksi yang kita berikan kepada AI, jadi layak mendapat kehati-hatian yang kita berikan pada kontrol lain: kepemilikan, tinjauan, pengujian, dan catatan pemakaian. Perhatian: instruksi untuk "bersikap akurat" tidak membuat model akurat; andalkan sumber yang disediakan, pemeriksaan, dan tinjauan manusia. Lihat Topik 5.1 — AI dalam manajemen layanan.

### Otomatisasi

Prompt yang disetujui dapat disematkan dalam alur kerja, seperti menyusun ringkasan ketika tiket ditutup, dengan langkah tinjauan sebelum dipakai. Perhatian: prompt otomatis berjalan tanpa kehati-hatian orang yang membaca setiap kali; uji pada masukan yang bervariasi dan pertahankan gerbang manusia. Lihat Topik 6.2 — Otomatisasi alur kerja dan orkestrasi.

### Analitik

Lacak prompt dan skill mana yang dipakai, seberapa sering draf disunting, kesalahan yang ditemukan dalam tinjauan, dan waktu yang dihemat menurut tugas. Perhatian: hitungan pemakaian menghargai volume, dan penghematan waktu yang diperkirakan mudah digelembungkan; ambil sampel keluaran akhir untuk mutu. Lihat buku *Service Management Metrics* dan Topik 7.3 — Pengukuran dan pelaporan.

## Mode kegagalan umum

- **Permintaan yang samar.** Jawabannya generik. Nyatakan tugas, audiens, dan format.
- **Tidak ada bahan sumber.** Model mengisi celah dari ingatan. Sediakan dan batasi pada sumber.
- **Penampung yang belum diisi.** Prompt terkirim dengan "[tempel di sini]" di dalamnya. Periksa sebelum mengirim.
- **Memercayai jawaban pertama.** Kesalahan tidak terdeteksi. Verifikasi terhadap sumber.
- **Menempelkan rahasia.** Data bocor. Pakai perangkat yang disetujui dan hapus rincian sensitif.
- **Pustaka skill yang tidak dimiliki siapa pun.** Berkas membusuk atau berubah tanpa disadari. Simpan dalam kontrol versi dengan pemilik dan pengujian.
- **Mengunduh skill tanpa membaca.** Instruksi berbahaya berjalan. Baca dan tinjau sebelum dipakai.

## Model kematangan

| Dimensi | Memulai | Mengembangkan | Menstandardisasi | Mengelola | Mengorkestrasi |
|---|---|---|---|---|---|
| Praktik prompting | Coba-coba | Tips dibagikan secara informal | Pola standar dengan sumber dan pemeriksaan | Pola diperbaiki dari data kesalahan | Pola tertanam dalam perangkat dan alur kerja |
| Pustaka skill | Tidak ada | Berkas pribadi | Skill bersama, dimiliki, dan dalam kontrol versi | Skill diuji dan ditinjau secara teratur | Skill dikelola lintas tim dengan tata kelola |
| Verifikasi | Tidak ada | Kebiasaan individu | Rutinitas standar menurut tugas | Kesalahan dilacak dan diumpankan kembali | Verifikasi didukung perangkat dengan persetujuan manusia |
| Aturan data | Tidak jelas | Kesadaran | Aturan jelas dan perangkat yang disetujui | Kepatuhan diperiksa | Kontrol terbangun dalam perangkat |

## Daftar periksa

- [ ] Prompt kami menyatakan tugas, sumber, format, dan aturan ketidakpastian.
- [ ] Kami memeriksa keluaran terhadap sumber sebelum dipakai.
- [ ] Kami memiliki aturan tentang apa yang boleh ditempel ke perangkat mana, dan perangkat yang disetujui.
- [ ] Kami menyimpan prompt dan skill yang teruji di tempat bersama yang dimiliki.
- [ ] Skill memiliki deskripsi yang jelas kapan dipakai.
- [ ] Kami menguji skill pada kasus nyata setelah setiap perubahan pada skill atau perangkat.
- [ ] Kami meninjau skill dari sumber luar sebelum memakainya.
- [ ] Kami mendaftar tugas yang tidak boleh diserahkan kepada AI.

## Prompt AI

**Perbaiki sebuah prompt.**

```text
Here is a prompt I use: [paste]. Here is an example of an output that disappointed me: [paste].
Identify what the prompt does not say that would help (task, source material, constraints, format, uncertainty rule), propose a rewritten prompt with [placeholders] for my material, and explain each change in one line. Do not add facts about my situation.
List what you are unsure of.
```

**Ubah prompt menjadi skill.**

```text
Here is a prompt that works well for my team: [paste]. Here are two examples of good outputs: [paste].
Draft a SKILL.md with a header (name and a one-sentence description of when to use it and when not), key components of a good output, a short process, common mistakes, and a checklist for verifying the result. Keep it under 400 words and do not add steps not implied by my examples.
List what you are unsure of.
```

**Rancang pengujian untuk sebuah skill.**

```text
Here is a skill: [paste].
Write eight test cases: five typical, two awkward, and one that tries to make the assistant ignore the skill. For each, describe the input and the correct behavior. Do not use real personal data.
List what you are unsure of.
```

## Skill AI

- [prompt-engineering](../../../../skills/prompt-engineering/SKILL.md): gunakan untuk merancang, menguji, dan memperbaiki prompt.
- [service-management-guide-skill](../../../../skills/service-management-guide-skill/SKILL.md): gunakan untuk menemukan dan menerapkan topik, pertanyaan, dan prompt panduan ini.
- [service-management-guide-maintainer-skill](../../../../skills/service-management-guide-maintainer-skill/SKILL.md): gunakan untuk memelihara topik dan skill panduan ini.
- [runbook](../../../../skills/runbook/SKILL.md): gunakan sebagai contoh skill yang terstruktur baik untuk pekerjaan operasional.

## Sumber utama

- Anthropic, dokumentasi tentang prompting dan tentang Agent Skills (docs.anthropic.com): panduan vendor tentang menulis instruksi dan skill untuk model Claude.
- OWASP, panduan tentang risiko untuk aplikasi yang dibangun di atas model bahasa besar (owasp.org): termasuk prompt injection.
- Wikipedia, "Prompt engineering": ikhtisar teknik dan istilah.
- Direktori `skills/` panduan ini: contoh skill yang dikerjakan untuk tugas manajemen layanan.

## Referensi

1. Prompt engineering — Wikipedia — https://en.wikipedia.org/wiki/Prompt_engineering
2. Large language model — Wikipedia — https://en.wikipedia.org/wiki/Large_language_model
3. Context window — Wikipedia — https://en.wikipedia.org/wiki/Context_window
4. Retrieval-augmented generation — Wikipedia — https://en.wikipedia.org/wiki/Retrieval-augmented_generation
5. Few-shot learning — Wikipedia — https://en.wikipedia.org/wiki/Few-shot_learning
6. Chain of thought — Wikipedia — https://en.wikipedia.org/wiki/Chain_of_thought
7. Hallucination (artificial intelligence) — Wikipedia — https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence)
8. Prompt injection — Wikipedia — https://en.wikipedia.org/wiki/Prompt_injection
9. Regression testing — Wikipedia — https://en.wikipedia.org/wiki/Regression_testing
10. Markdown — Wikipedia — https://en.wikipedia.org/wiki/Markdown
11. Version control — Wikipedia — https://en.wikipedia.org/wiki/Version_control
12. OWASP — OWASP Foundation — https://owasp.org
