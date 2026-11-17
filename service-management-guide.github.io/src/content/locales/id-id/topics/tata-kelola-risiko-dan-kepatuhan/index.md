# Tata Kelola, Risiko, dan Kepatuhan

**Tata kelola menetapkan arah dan akuntabilitas, manajemen risiko memutuskan apa yang dilakukan terhadap ketidakpastian, dan kepatuhan menunjukkan bahwa kewajiban terpenuhi; dalam pengiriman berkelanjutan ketiganya bekerja paling baik sebagai pagar pengaman yang terbangun dalam pekerjaan, dengan pemilik risiko yang memutuskan, pipeline yang menghasilkan bukti, dan audit yang menilai seberapa baik kendali bekerja, bukan seberapa banyak dokumen ada.**

## Mengapa ini penting

Hanya sedikit kata dalam teknologi yang memancing desahan seandal "tata kelola". Ia memunculkan komite, formulir, dan persetujuan yang tiba setelah keputusan dibuat. Di banyak organisasi desahan itu layak. Tata kelola telah menjadi lapisan kertas kerja di atas pekerjaan, dimiliki orang yang tidak mengerjakannya, diukur dengan artefak alih-alih hasil.

Namun kebutuhannya nyata. Organisasi memegang uang, rekam medis, dan kepercayaan orang lain. Regulator, pelanggan, dan dewan meminta bukti bahwa semua itu ditangani secara bertanggung jawab. Layanan gagal dengan cara yang merugikan orang, dan seseorang harus bertanggung jawab. Tanpa tata kelola, keputusan dibuat oleh siapa yang paling keras, risiko diterima oleh orang yang tidak tahu mereka menerimanya, dan kepatuhan ditemukan saat audit.

Cara mendamaikan keduanya adalah mengubah seperti apa tata kelola itu. Alih-alih gerbang di akhir, ia menyediakan pagar pengaman di awal: aturan jelas tentang apa yang diizinkan, terbangun dalam perangkat agar jalan yang aman menjadi jalan yang mudah. Alih-alih kertas kerja yang dibuat sesudahnya, ia memakai bukti yang dihasilkan pekerjaan itu sendiri, seperti catatan pipeline. Alih-alih satu persetujuan untuk semua risiko, ia mencocokkan tingkat tinjauan dengan tingkat risiko dan menaruh keputusan pada mereka yang memahaminya. Wikipedia menjelaskan governance, risk, and compliance (GRC) sebagai pendekatan terpadu atas ketiganya. Topik ini menjelaskan gagasan-gagasannya dan cara menerapkannya dalam manajemen layanan, termasuk lingkungan yang diatur. Ia tidak memberikan nasihat hukum, dan aturan berbeda menurut negara dan sektor. Ia dibangun di atas pemampuan perubahan (Topik 3.4 — Pemampuan Perubahan), pipeline (Topik 6.4 — Pipeline dan perubahan otomatis), keamanan informasi (Topik 3.13 — Manajemen Keamanan Informasi), dan tata kelola AI (Topik 5.6 — Tata kelola, risiko, dan kepatuhan AI).

## Konsep inti

**Tata kelola.** Sistem yang mengarahkan dan mengendalikan organisasi. Wikipedia menjelaskan corporate governance sebagai mekanisme, proses, dan hubungan yang mengendalikan dan menjalankan organisasi. Dalam ITIL 4, tata kelola adalah komponen sistem nilai layanan yang mengarahkan, mengevaluasi, dan memantau; lihat Topik 1.4 — Sistem nilai layanan. Ia ada pada beberapa tingkat, dari dewan hingga tim.

**Risiko.** Pengaruh ketidakpastian terhadap tujuan. Manajemen risiko mengidentifikasi, menilai, menangani, dan memantau risiko. Wikipedia menjelaskan risk management dan panduan internasional seperti ISO 31000. Risiko adalah kemungkinan, bukan kepastian, dan memiliki kemungkinan terjadi serta dampak.

**Register risiko.** Catatan risiko, pemiliknya, penilaian, penanganan, dan statusnya. Wikipedia menjelaskan risk register. Lihat skill risk-register dalam panduan ini. Register adalah alat kerja; jika hanya diperbarui sebelum audit, ia hiasan.

**Selera dan toleransi risiko.** Seberapa banyak risiko yang bersedia diterima organisasi dalam mengejar tujuannya, ditetapkan oleh mereka yang mengatur. Wikipedia menjelaskan risk appetite. Ia memberi tahu tim seberapa jauh mereka dapat melangkah tanpa eskalasi. Tanpanya, setiap keputusan terlalu hati-hati atau pertaruhan yang tak disadari.

**Penanganan risiko.** Empat respons dasar: mengurangi risiko melalui kendali, menerimanya dengan sadar, mengalihkannya, misalnya melalui asuransi atau kontrak, atau menghindarinya dengan tidak melakukan aktivitas itu. Catat pilihan dan siapa yang membuatnya. Penerimaan secara bawaan bukan keputusan.

**Kepatuhan.** Memenuhi kewajiban dari undang-undang, peraturan, kontrak, standar, dan kebijakan internal. Wikipedia menjelaskan regulatory compliance. Contohnya undang-undang perlindungan data seperti General Data Protection Regulation, undang-undang pelaporan keuangan seperti Sarbanes–Oxley Act, aturan privasi kesehatan seperti HIPAA di Amerika Serikat, persyaratan industri pembayaran seperti PCI DSS, dan, di Uni Eropa, aturan ketahanan bagi entitas keuangan (Digital Operational Resilience Act) dan bagi layanan esensial (Direktif NIS2), yang semuanya dijelaskan Wikipedia. Kewajiban berbeda menurut tempat dan sektor. Identifikasi milik Anda dengan nasihat ahli.

**Kendali.** Tindakan yang mengurangi risiko atau memastikan kepatuhan: pencegahan (menghentikan masalah), pendeteksian (menemukannya), dan korektif (memperbaikinya). Dapat bersifat teknis, seperti pembatasan akses, prosedural, seperti tinjauan, atau organisasional, seperti pemisahan tugas (separation of duties), yang dijelaskan Wikipedia. Kerangka kendali internal, seperti milik Committee of Sponsoring Organizations (COSO), mengorganisasikannya; Wikipedia menjelaskan internal control. Kendali yang tidak diuji mungkin tidak bekerja.

**Pagar pengaman, bukan gerbang.** Gerbang menghentikan pekerjaan sampai seseorang menyetujui. Pagar pengaman adalah batas yang menjaga pekerjaan tetap aman tanpa menghentikannya, seperti pemeriksaan kebijakan dalam pipeline yang memblokir bucket penyimpanan publik. Pagar pengaman cepat dan konsisten; gerbang lambat dan bervariasi. Pakai gerbang hanya di tempat penilaian manusia tentang risiko dibutuhkan. Lihat Topik 3.4 — Pemampuan Perubahan.

**Kebijakan.** Pernyataan maksud dan aturan. Wikipedia menjelaskan policy secara umum. Kebijakan yang baik singkat, menyatakan apa yang diwajibkan dan mengapa, dan ditulis agar orang dapat mengikutinya. Kebijakan yang ditulis sebagai kode, diperiksa otomatis, mengaitkan aturan dengan penegakan.

**Bukti.** Catatan yang menunjukkan bahwa kendali beroperasi: log, tinjauan, hasil uji, persetujuan. Wikipedia menjelaskan audit trail dan evidence. Bukti yang dihasilkan otomatis oleh pekerjaan, seperti catatan setiap putaran pipeline, lebih murah dan lebih andal daripada bukti yang dirakit untuk audit. Lihat Topik 6.4 — Pipeline dan perubahan otomatis.

**Audit dan jaminan.** Pemeriksaan independen atas apakah kendali dan proses bekerja. Wikipedia menjelaskan audit. Audit internal, audit eksternal, dan audit pelanggan atau regulator berbeda tujuannya. Wikipedia menjelaskan model "tiga lini", di mana manajemen memiliki risiko dan kendali (lini pertama), fungsi risiko dan kepatuhan mengawasi (lini kedua), dan audit internal memberi jaminan independen (lini ketiga). Laporan atestasi, seperti yang disebut laporan System and Organization Controls (SOC) dan dijelaskan Wikipedia, memberi pelanggan jaminan tentang kendali penyedia.

**Beroperasi di industri yang diatur.** Bank, rumah sakit, perusahaan asuransi, dan lembaga publik menghadapi persyaratan dan pengawasan yang terperinci. Pengiriman berkelanjutan dimungkinkan dalam lingkungan ini bila kendali dipetakan ke persyaratan dan bukti dihasilkan secara andal. Libatkan regulator sejak dini dan jelaskan bagaimana pipeline memenuhi maksud setiap kendali.

**Risiko pihak ketiga dan rantai pasok.** Kewajiban meluas ke pemasok dan perangkat lunak yang Anda pakai. Lihat Topik 3.14 — Manajemen Pemasok dan Topik 4.2 — Manajemen Aset Perangkat Lunak.

**Budaya risiko.** Bagaimana orang memikirkan dan membicarakan risiko. Budaya di mana orang dapat melaporkan masalah tanpa menyalahkan, dan di mana pemimpin menerima kabar buruk, menemukan risiko lebih awal. Lihat Topik 8.3 — Perubahan Organisasi dan Adopsi.

**Risiko AI dan otomatisasi.** Teknologi baru menambah risiko, seperti otomatisasi bertindak dalam skala besar, dan sistem AI menghasilkan keluaran yang bias atau salah. Mereka membutuhkan pemilik, penilaian, dan kendali dalam register yang sama dengan risiko lain. Lihat Topik 5.6 — Tata kelola, risiko, dan kepatuhan AI dan Topik 6.1 — Strategi otomatisasi.

**Bagaimana lensa-lensa cocok.** GRC adalah lapisan kendali di sekitar lensa lainnya. Praktik agile menyarankan tata kelola yang proporsional, cepat, dan kolaboratif dengan orang risiko dan kepatuhan di dalam tim. Otomatisasi menyediakan pagar pengaman dan bukti. Analitik memantau efektivitas kendali. AI sendiri adalah pokok tata kelola.

## Praktik terbaik

1. **Tetapkan arah dan selera dengan jelas.** Nyatakan apa yang akan dan tidak akan dilakukan organisasi, dan seberapa banyak risiko yang diterimanya di area kunci. Buat pernyataan ini singkat dan tersedia bagi tim.
2. **Taruh keputusan risiko pada pemilik risiko.** Tunjuk pemilik untuk setiap risiko signifikan, yang memahaminya dan berwenang. Eskalasi menurut ambang yang ditetapkan, bukan kebiasaan.
3. **Jaga register risiko tetap hidup.** Catat risiko dengan pemilik, peringkat, penanganan, dan tanggal tinjauan, dan perbarui ketika keadaan berubah. Kaitkan risiko dengan layanan dan kendali.
4. **Cocokkan tinjauan dengan risiko.** Pakai pemeriksaan ringan otomatis untuk perubahan berisiko rendah dan tinjauan manusia lebih dalam untuk yang berisiko tinggi. Publikasikan kriterianya.
5. **Bangun pagar pengaman ke dalam perangkat.** Kodekan aturan sebagai pemeriksaan kebijakan dalam pipeline dan platform, agar jalan yang aman menjadi yang mudah. Pakai gerbang secukupnya.
6. **Hasilkan bukti dari pekerjaan.** Tangkap catatan tinjauan, uji, persetujuan, dan deployment secara otomatis, dan simpan di tempat yang tidak dapat diubah oleh pihak yang bersangkutan.
7. **Petakan kendali ke persyaratan sekali saja.** Jaga satu himpunan kendali yang dipetakan ke standar dan undang-undang yang berlaku, alih-alih dokumen terpisah untuk masing-masing. Lihat Topik 1.8 — Kerangka kerja dan standar manajemen layanan.
8. **Uji bahwa kendali bekerja.** Ambil sampel catatan, jalankan latihan, dan lakukan ulang kendali. Perbaiki yang tidak bekerja, dan buang yang menambah biaya tanpa mengurangi risiko.
9. **Bekerja dengan auditor dan regulator sejak dini.** Jelaskan pendekatan Anda, tanyakan bukti apa yang akan mereka terima, dan undang mereka melihat pipeline. Kejutan dalam audit mahal.
10. **Bangun budaya pelaporan jujur.** Buat aman untuk melaporkan risiko, nyaris celaka, dan kesalahan, dan tanggapi dengan tindakan. Lacak berapa banyak masalah yang ditemukan oleh lini pertama sendiri.

## Pertanyaan untuk dibahas bersama tim Anda

**Langkah tata kelola kita yang mana mengubah keputusan dalam setahun terakhir, dan mana yang hanya menambah penundaan?**
Minta bukti. Harapkan beberapa langkah tanpa efek tercatat. Lanjutkan dengan memilih satu untuk diotomatisasi atau dihapus, dengan persetujuan pemilik risiko.

**Siapa pemilik sepuluh risiko teratas kita, dan kapan terakhir mereka meninjaunya?**
Lihat register. Harapkan celah dan entri usang. Lanjutkan dengan menetapkan pemilik dan tanggal tinjauan.

**Apa yang akan diterima auditor kita sebagai bukti untuk suatu kendali, dan dapatkah perangkat kita menghasilkannya otomatis?**
Tanyakan auditor. Harapkan lebih banyak keluwesan daripada yang diasumsikan. Lanjutkan dengan memilih satu kendali dan menghasilkan buktinya dari pipeline.

**Di mana kita menerima risiko secara bawaan, dan siapa yang akan terkejut mendengarnya?**
Pikirkan sistem lama, kerentanan yang diketahui, dan perbaikan yang ditunda. Harapkan contoh yang tidak nyaman. Lanjutkan dengan mencatat keputusan eksplisit untuk tiga teratas.

**Peraturan dan kontrak apa yang berlaku bagi layanan kita, dan bagaimana kendali kita memetakan ke sana?**
Daftarkan bersama penasihat hukum dan kepatuhan. Harapkan peta yang tidak lengkap. Lanjutkan dengan membangun satu pemetaan kendali untuk satu layanan.

**Bagaimana kita mengatur AI dan otomatisasi dengan cara yang sama seperti risiko lain, dan di mana kita tidak konsisten?**
Bandingkan register dan tinjauan. Harapkan AI berada di luar. Lanjutkan dengan menambahkan pemakaian AI ke register utama.

## Dalam praktik: contoh manajemen layanan

Tim platform ritel sebuah bank regional ingin merilis setiap hari. Fungsi risiko bank mewajibkan proses penasihat perubahan untuk semua perubahan produksi, termasuk formulir, tiga persetujuan, dan rapat mingguan. Tim platform menyebutnya sandiwara, dan fungsi risiko menunjuk dua insiden tahun lalu yang disebabkan perubahan tanpa tinjauan.

Kepala risiko operasional dan ketua platform sepakat memetakan kendali perubahan bank ke tujuannya. Kendali itu ada untuk memastikan perubahan ditinjau oleh orang kedua yang kompeten, diuji, diotorisasi oleh pemilik yang akuntabel, dapat dilacak, dan dapat dibalik. Pipeline dapat menyediakan sebagian besar: peninjau kedua yang diwajibkan, uji otomatis, otorisasi yang dicatat pemilik produk untuk perubahan yang membawa risiko, catatan penuh, dan rollback otomatis. Untuk perubahan berisiko tertinggi, seperti perhitungan pembayaran, rapat mingguan tetap ada, dengan kelompok lebih kecil.

Mereka menyepakati pernyataan selera risiko untuk perubahan: perubahan rutin pada kanal digital berisiko rendah dan dicakup kendali pipeline; perubahan pada sistem buku besar inti berisiko tinggi dan membutuhkan persetujuan manusia. Bukti pipeline masuk ke penyimpanan yang tak dapat diubah, dan audit internal mengambil sampel 40 perubahan setiap kuartal. Auditor eksternal dan pengawas regulator diberi tahu tentang pendekatan ini dan diperlihatkan catatan pipeline. Pengawas meminta ringkasan pengecualian bulanan dan setuju meninjau pengaturan itu setelah enam bulan.

Setelah dua kuartal, tingkat kegagalan perubahan lebih rendah daripada sebelumnya, lead time untuk perubahan rutin turun dari sembilan hari menjadi satu, dan audit mendapati bukti lengkap untuk 39 dari 40 perubahan yang disampel; satu lainnya menunjukkan catatan peninjau yang hilang karena salah konfigurasi pipeline, yang diperbaiki. Fungsi risiko juga menambahkan pemakaian AI bank, yang sebelumnya di luar register, dengan pemilik dan penilaian.

Yang berubah: risiko dan rekayasa berbagi satu pandangan tentang kendali, dan rilis harian diizinkan untuk kelas berisiko rendah. Yang masih sulit: sistem buku besar inti sulit menjalankan uji otomatis dan mempertahankan rapat mingguan; aturan peninjau kedua membebani tim kecil; dan persyaratan pengawas tentang format bukti berbeda dari pipeline, sehingga butuh kerja penerjemahan. Kepala risiko menyiapkan tinjauan triwulanan atas pernyataan selera dan meminta sumber daya untuk uji buku besar inti.

## Empat perspektif

### Tim produk dan pengiriman

Ketahui risiko dan kewajiban yang berlaku bagi layanan Anda, bangun pagar pengaman ke dalam pipeline, dan hasilkan bukti saat bekerja. Bicaralah dengan kolega risiko dan kepatuhan sejak dini, dan libatkan mereka dalam desain.

### Tim layanan dan operasi

Operasikan kendali: tinjauan, akses, pemantauan, dan penanganan insiden. Catat apa yang Anda lakukan, laporkan nyaris celaka, dan tandai kendali yang tidak bekerja atau lebih mahal daripada manfaatnya.

### Kepemimpinan dan tata kelola

Tetapkan arah dan selera, tunjuk pemilik risiko, dan danai kendali yang bekerja. Minta bukti dan hasil uji, bukan tumpukan dokumen. Buat aman untuk melaporkan kabar buruk.

### Pelanggan dan pengguna

Anda mengandalkan penyedia untuk mengelola risiko yang memengaruhi Anda. Tanyakan jaminan apa yang dapat mereka berikan, seperti laporan audit, dan beri tahu mereka tentang persyaratan yang berlaku bagi Anda.

## Agile, AI, otomatisasi, dan analitik

### Agile

Sematkan orang risiko dan kepatuhan dalam tim, tinjau kendali dalam siklus pendek, dan perbaiki dengan umpan balik. Perhatian: jangan mengira kurangnya kertas kerja sebagai kurangnya kendali; tunjukkan bagaimana setiap kendali dipenuhi.

### AI

AI dapat membantu menyusun kebijakan, memetakan kendali ke persyaratan, merangkum temuan audit, dan mencari bukti, dengan tinjauan hukum dan manusia. Pemakaian AI sendiri termasuk dalam register risiko. Perhatian: ringkasan AI atas suatu peraturan mungkin salah; jangan pernah mengandalkannya untuk kepatuhan. Lihat Topik 5.6 — Tata kelola, risiko, dan kepatuhan AI.

### Otomatisasi

Otomatiskan pemeriksaan kebijakan, penangkapan bukti, tinjauan akses, dan pemantauan kendali, dengan pengecualian disalurkan kepada pemilik. Perhatian: kendali otomatis hanya memeriksa apa yang dibangun untuk diperiksa; uji dan ambil sampel hasil dengan tangan. Lihat Topik 6.4 — Pipeline dan perubahan otomatis.

### Analitik

Lacak hasil uji kendali, pengecualian, peringkat risiko dari waktu ke waktu, temuan audit dan waktu penutupan, dan insiden yang terkait kegagalan kendali. Perhatian: hitungan kendali atau penilaian yang selesai menghargai kertas kerja; ukur efektivitas dan hasil. Lihat buku *Service Management Metrics* dan Topik 7.3 — Pengukuran dan pelaporan.

## Mode kegagalan umum

- **Tata kelola sebagai gerbang dan kertas.** Penundaan tanpa keselamatan. Bangun pagar pengaman dalam perangkat dan hasilkan bukti otomatis.
- **Penerimaan risiko secara bawaan.** Tak seorang pun memutuskan. Catat keputusan eksplisit dengan pemilik.
- **Satu tinjauan untuk semua risiko.** Risiko rendah menunggu; risiko tinggi tergesa-gesa. Skalakan tinjauan menurut risiko.
- **Bukti dirakit untuk audit.** Biaya dan kesalahan naik. Tangkap saat pekerjaan terjadi.
- **Dokumen terpisah per standar.** Duplikasi dan penyimpangan. Petakan satu himpunan kendali ke banyak persyaratan.
- **Kendali yang tidak diuji.** Gagal diam-diam. Uji dan ambil sampel.
- **Takut melapor.** Risiko tetap tersembunyi. Tanggapi kabar buruk dengan tindakan.

## Model kematangan

| Dimensi | Memulai | Mengembangkan | Menstandardisasi | Mengelola | Mengorkestrasi |
|---|---|---|---|---|---|
| Arah dan selera | Tidak dinyatakan | Informal | Selera dan hak keputusan tertulis | Selera ditinjau terhadap hasil | Selera dikoordinasikan lintas perusahaan dan mitra |
| Manajemen risiko | Reaktif | Register ada | Register yang dimiliki dan terkini, tertaut ke layanan dan kendali | Risiko ditinjau terhadap insiden dan uji | Risiko dikelola dengan data lintas pemasok dan AI |
| Kendali dan bukti | Manual dan lewat rapat | Sebagian otomatisasi | Pagar pengaman dalam perangkat, bukti dihasilkan oleh pekerjaan | Efektivitas kendali diuji dan disampel | Pemantauan kendali berkelanjutan dengan pengawasan manusia |
| Jaminan dan budaya | Kejutan dalam audit | Siap untuk audit | Keterlibatan awal dengan auditor dan regulator | Temuan dilacak hingga tertutup | Jaminan terintegrasi dengan pengiriman dan pembelajaran |

## Daftar periksa

- [ ] Kami memiliki selera risiko dan hak keputusan tertulis.
- [ ] Setiap risiko signifikan memiliki pemilik dan tanggal tinjauan.
- [ ] Upaya tinjauan sepadan dengan risiko, dan kriterianya dipublikasikan.
- [ ] Kendali dipetakan sekali ke standar dan undang-undang yang berlaku.
- [ ] Pagar pengaman terbangun dalam pipeline dan platform.
- [ ] Bukti dihasilkan otomatis dan disimpan dengan aman.
- [ ] Kami menguji kendali dan mengambil sampel catatan.
- [ ] Risiko AI dan otomatisasi berada dalam register yang sama.

## Prompt AI

**Petakan kendali ke tujuan dan buktinya.**

```text
Here is a control as written: [paste]. Here is what our pipeline or tools record: [paste].
State the risk the control appears to address, based only on the text, list what evidence the tools would produce, and what the control requires that the evidence does not show. Do not judge whether it meets any regulation.
List what you are unsure of.
```

**Tinjau mutu register risiko.**

```text
Here is an extract from our risk register: [paste, sensitive details removed].
List entries without an owner, without a review date, with vague descriptions, or where treatment is "accept" without a stated decision-maker. Quote each. Do not rate the risks.
List what you are unsure of.
```

**Bersiap untuk pertanyaan auditor.**

```text
The audit covers [area]. Here are our relevant controls and evidence: [paste].
List twelve questions an auditor might ask, grouped by control, and for each what evidence we would need to show. Mark questions where our material gives no basis for an answer. Do not state what the auditor will require.
List what you are unsure of.
```

## Skill AI

- [risk-register](../../../../skills/risk-register/SKILL.md): gunakan untuk mencatat risiko, pemilik, dan penanganan.
- [key-risk-indicators](../../../../skills/key-risk-indicators/SKILL.md): gunakan untuk memilih indikator peringatan dini.
- [compliance-testing](../../../../skills/compliance-testing/SKILL.md): gunakan untuk menguji kendali dan bukti.
- [legal-compliance-audit](../../../../skills/legal-compliance-audit/SKILL.md): gunakan untuk menyiapkan pertanyaan dan bukti bagi tinjauan hukum dan audit.
- [raci-matrix](../../../../skills/raci-matrix/SKILL.md): gunakan untuk memperjelas hak keputusan dan akuntabilitas.

## Sumber utama

- ISO 31000, pedoman manajemen risiko: panduan internasional tentang manajemen risiko; baca edisi terkini dari penerbitnya.
- COSO, *Internal Control — Integrated Framework*: kerangka kendali internal yang banyak dipakai.
- Gene Kim dan lainnya, *The DevOps Handbook*: bab tentang mengintegrasikan keamanan, kepatuhan, dan kendali perubahan ke dalam pipeline.
- Wikipedia, "Governance, risk, and compliance" dan "Risk management": ikhtisar gagasan ini.

## Referensi

1. Governance, risk, and compliance — Wikipedia — https://en.wikipedia.org/wiki/Governance,_risk,_and_compliance
2. Corporate governance — Wikipedia — https://en.wikipedia.org/wiki/Corporate_governance
3. Risk management — Wikipedia — https://en.wikipedia.org/wiki/Risk_management
4. Risk register — Wikipedia — https://en.wikipedia.org/wiki/Risk_register
5. Risk appetite — Wikipedia — https://en.wikipedia.org/wiki/Risk_appetite
6. Regulatory compliance — Wikipedia — https://en.wikipedia.org/wiki/Regulatory_compliance
7. Internal control — Wikipedia — https://en.wikipedia.org/wiki/Internal_control
8. Separation of duties — Wikipedia — https://en.wikipedia.org/wiki/Separation_of_duties
9. Audit — Wikipedia — https://en.wikipedia.org/wiki/Audit
10. Audit trail — Wikipedia — https://en.wikipedia.org/wiki/Audit_trail
11. Sarbanes–Oxley Act — Wikipedia — https://en.wikipedia.org/wiki/Sarbanes%E2%80%93Oxley_Act
12. General Data Protection Regulation — Wikipedia — https://en.wikipedia.org/wiki/General_Data_Protection_Regulation
