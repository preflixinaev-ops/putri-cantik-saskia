/* =====================================================
   config.js  -  SEMUA yang perlu diganti ada di file ini.
   Tidak perlu menyentuh index.html.
   ===================================================== */
window.CONFIG = {

  /* --- nama --- */
  names: {
    to:   "Yayaaa",   /* nama panggilan penerima (judul, kue, hero) */
    full: "saskiaa",  /* dipakai di surat */
    from: "lanaa"     /* tanda tangan di kartu alasan */
  },
  pageTitle: "Untuk Yayaaa",

  /* --- tanggal jadian: [tahun, bulan(0-11), tanggal]. Agustus = 7 --- */
  jadian: [2026, 7, 3],
  jadianLabel: "sejak 3 Agustus",

  /* --- PIN ---
     PIN TIDAK ditulis polos. Yang disimpan hanya hash SHA-256.
     Buat hash baru:  python3 tools/make_pin.py 1234
     lalu tempel hasilnya di daftar di bawah. Salt harus sama. */
  pinSalt: "yaya-salt-v1",
  pinHashes: [
    "6307830fcdc8ec64eb79f8fe6a4641f7ff7b369de2dfe290ff36462ca2b87dfa",  /* 0704 */
    "4cf60be2c407cd3b33f877f0e1d622148b5b0fa47c53ccb225e48e8328b6a258",   /* 0407 */
    
 "0bbf2b4478a8201a69ad43a79b3025a7d198e711abfc9c52060b7b7ceedf92aa"  /* 0108 */
  ],

  /* --- kirim harapan ke WhatsApp (format 62..., tanpa + atau 0) --- */
  waNumber: "6285893143129",
  wishPrefix: "Harapan dari Yaya: ",

  /* --- file foto & musik (taruh sejajar index.html, atau ubah path-nya) --- */
  assets: {
    music: "musik.mp3",
    voice: "",   /* pesan suara kejutan, mis. "pesan.mp3" (kosong = tidak ada) */
    letter: ["fotor1.jpg", "fotor2.jpg", "fotor3.jpg"],  /* [cover, kecil di tengah, penutup] */
    gallery: [
      { src: "foto1.jpg", cap: "you" },
      { src: "foto2.jpg", cap: "are" },
      { src: "foto3.jpg", cap: "so" },
      { src: "foto4.jpg", cap: "beautiful" }
    ]
  },

  /* --- kartu kejutan terakhir (boleh pakai <em> dan <br>) --- */
  surprise: {
    label: "untuk kamu",
    text: "aku sayang kamu, <em>saskia</em>.<br>hari ini, dan hari hari setelahnya."
  },

  /* --- surat. smallPhotoAt = foto kecil muncul sebelum paragraf ke-N (mulai 0) --- */
  letter: {
    title: "Surat Kecil",
    salut: "dariku untukmu, saskiaa.",
    smallPhotoAt: 5,
    paragraphs: [
    "happy birthday to the woman who softly changed my world.. 🤍",
    "selamat tanggal 26 untuk perempuan kesayanganku ʕꈍᴥꈍʔ sesosok manusia indah yang selalu punya cara paling lembut untuk menenangkan riuhnya jiwaku.. dari sekian banyak hal ajaib dan mempesona yang pernah ada di bawah langit ini, dipertemukan dan diberi kesempatan untuk berjalan bersamamu adalah takdir paling manis yang pernah aku terima.. 🌿",
    "to be loved by you is a blessing, but simply knowing that you exist in this world is my greatest comfort ʕ⁠　⁠˵⁠·⁠ᴥ⁠·⁠ʔ mengetahui bahwa kamu ada, bernapas, dan menyunggingkan senyum di bumi yang sama denganku saja sudah lebih dari cukup untuk memberikan rasa tenang yang tida akan pernah bisa dijelaskan oleh kata-kata.. kehadiran yaya itu ibarat rumah, pelukan paling hangat, dan tempat pulang yang selalu membawa kedamaian paling utuh.. 🙁🤍",
    "di hari kelahiranmu ini, aku ingin melangitkan doa-doa paling tulus dan indah yang pernah dirangkai manusia buat yayaa.. 🕊️",
    "semoga di usia kamu yang baru ini, semesta selalu membalas setiap kebaikan hatimu dengan kebahagiaan yang melimpah tanpa batas ʕ⁠ ⁠ꈍ⁠ᴥ⁠ꈍ⁠ʔ semoga langkah-langkahmu ke depan selalu dipeluk kedamaian, dipermudah dari segala rintangan, dan selalu dikelilingi oleh hal-hal ajaib yang membuat mata indahmu berbinar bahagia.. semoga hatimu yang lembut itu tida pernah merasa sepi, dan jiwa kamu selalu merasa aman.. may your day and your year ahead be as gentle, bright, and lovely as your sweet soul.. 🌷",
    "tetaplah melangkah dengan senyuman manis kamu itu ya, sayang?.. ʕ⁠•⁠ᴥ⁠•⁠ʔ di setiap helai napasmu, di setiap proses bertumbuhnya kamu, dan di mekar indahnya setiap impian yang sedang kamu perjuangkan, ingatlah kalau kamu tida akan pernah sendirian.. aku akan selalu ada di sini—menjadi pendukung terbesarmu, mengagumi setiap kebaikanmu, dan siap menggenggam jemarimu erat-erat kapan pun kamu butuh tempat bersandar.. kamu adalah sesosok perempuan yang luar biasa hebat, tangguh, dan aku begitu bangga memiliki kamu di hidupku.. 🤍",
    "i want you to know how deeply i admire you.. ʕ⁠⁠˵⁠·⁠ᴥ⁠·⁠˵⁠⁠ʔ aku selalu dibuat jatuh cinta berulang kali oleh caramu berpikir, kelembutan hatimu yang tiada tara, dan bagaimana caramu memperlakukan dunia di sekitarmu dengan penuh kasih sayang..",
    "dan di atas segalanya, aku mencintai yaya sepenuhnya, apa adanya, dengan segala tawa, luka, kelebihan, maupun kekurangan yang kamu punya ʕꈍᴥꈍʔ kamu tida perlu menjadi siapa-siapa atau membuktikan apa pun hanya untuk layak dicintai.. sebab bagiku, menjadi dirimu sendiri adalah versi paling sempurna yang pernah ada.. i love you unconditionally, just the way you are.. 🤍🌸",
    "terima kasih ya, sayang?.. ʕ⁠ ⁠•⁠ᴥ⁠•⁠ʔ terima kasih sudah mau lahir ke dunia ini.. terima kasih sudah bertahan dan bertumbuh menjadi perempuan yang begitu indah hatinya.. dan terima kasih telah sudi menjadi bagian paling berharga, paling terang, dan paling aku syukuri dalam hidup lana..",
    "happy birthday, my love, my safe place, and my greatest blessing ʕ⁠っ⁠˴⁠ʔ⁠っ semoga bahagia selalu memelukmu erat, hari ini, besok, dan selamanya.. 🤍"
]
  },

  /* --- toples alasan --- */
  reasons: [
    "karna senyum kamu itu adalah fajar kecil yang selalu berhasil menyembuhkan hari-hari aku yang paling remuk redam.",
    "karna dari senyummu itu, caramu tertawa dengan melibatkan seluruh wajah adalah keindahan yang paling ingin aku jaga selamanya.",
    "karna ketelitian hatimu pada hal hal kecil yang sering diabaikan dunia luar selalu berhasil ngebuat aku jatuh cinta pada cara kerjamu memandang hidup.",
    "karna, bahkan di saat kamu lagi ngambek, kamu tetap terlihat begitu mempesona sampai aku selalu gagal serius saat ingin meminta maaf.",
    "karna di dekat kamu, aku akhirnya menemukan tempat teraman untuk menanggalkan seluruh topeng lelahku dan menjadi diriku yang paling jujur.",
    "karna, kehadiranmu selalu menjelma menjadi kepompong hangat yang melindungi aku, bahkan ketika jarak dan kesunyian mencoba memisahkan langkah kita.",
    "karna, di kejauhan itu, suaramu mengalir seperti kidung penenang, menjadi dermaga terakhir bagi jiwaku yang lelah berlayar.",
    "karna, aku tau aku bukan manusia yang mudah untuk dimengerti, tapi kesabaranmu seluas samudra selalu menampung segala kurangku dengan lembut..",
    "maka tida heran jika hal sesederhana duduk dan tersenyum bersama kamu pun berubah menjadi ritual suci yang paling aku nanti.",
    "karna ketulusan hatimu dalam merawat kasih sayang membuat aku merasa menjadi manusia paling beruntung karna kebagian separuh dari hangatnya.",
    "karna kamu adalah perpaduan yang ajaib antara jiwa yang tangguh di luar dan kelembutan seorang perempuan yang membuatku bertekuk lutut.",
    "karna, kepekaanmu bagai kompas penunjuk arah, selalu tau persis kapan aku butuh disemangati bahkan sebelum aku sempat mengeluh.",
    "karna binar di kedua matamu saat bahagia bagai konstelasi bintang kecil yang menerangi labirin paling gelap di dalam kepalaku.",
    "karna keberadaanmu secara tak kasat mata menuntun langkahku untuk perlahan lahan tumbuh menjadi versi lelaki yang lebih baik dari kemarin.",
    "karna kamu menyimpan setiap remahan cerita kecilku dalam ingatanmu, membuatku merasa benar-benar hidup dan bernilai di matamu.",
    "dan pada akhirnya, pelukanmu adalah muara dari segala lelah—sebuah rumah yang bernyawa, hangat, dan abadi.. titik.",
    "karna kamu lucu tanpa perlu merencanakan lelucon, dan setiap kali tingkah konyolmu lolos, saat itu pula aku jatuh cinta lagi dari titik nol.",
    "karna keberanianmu untuk memeluk dan jujur pada setiap rasa di dadamu adalah mahakarya ketulusan yang paling aku kagumi.",
    "karna bersama kamu, keheningan bukanlah sebuah kecanggungan, melainkan sebuah percakapan sunyi yang teramat mesra di antara kita.",
    "karna hadirnyalah yang menyadarkan aku bahwa keajaiban dan ketulusan murni di bumi ini ternyata benar benar ada wujudnya.",
    "karna di setiap celah penatnya hari hari yang kulalui, kamu selalu menyusupkan tawa manis yang menyegarkan kembali jiwaku.",
    "karna kamu tida pernah harus menjadi sempurna di hadapanku, sebab di mataku, kurang dan lebihmu sudah memenuhi seluruh takaran rasa.",
    "karna cukup dengan melihat namamu berpijar di layar ponselku saja, suhu di dalam dadaku langsung menghangat seketika.",
    "karna masa depan yang dulunya kutakuti kini berubah menjadi kanvas lukisan indah yang paling ingin aku jemput bersamamu.",
    "karna hari hari biasa yang hambar berubah menjadi lembaran puisi yang bermakna sejak kamu memutuskan untuk singgah di dalamnya.",
    "karna dari miliaran kemungkinan nafas yang berhembus di bumi ini, jika aku diberi kesempatan terlahir kembali, aku akan tetap memilihmu.",
    "karna bahkan di saat kamu merasa paling rapuh dan patah, mataku hanya mampu melihat pendar keindahan yang tak pernah pudar dari dirimu.",
    "maka di sepertiga malamku, namamu selalu kusematkan paling khusyuk dalam setiap bait doa yang kupanjatkan pada semesta.",
    "karna bersamamu aku belajar arti cinta yang sesungguhnya, dicintai secara menggebu namun tetap dilembutkan dengan penuh kesadaran.",
    "dan alasan terakhirku. karna kamu adalah yaya, semesta kecilku yang utuh, dan kenyataan itu sudah lebih dari cukup untuk membuatku mencintaimu selamanya. 🤍"
]
};
