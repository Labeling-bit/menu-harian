// =============================
// DATA MENU HARIAN
// =============================
// Tambahkan tanggal baru dengan format:
// "YYYY-MM-DD": {
//   menu: ["Makanan 1", "Makanan 2"],
//   portions: [...],
//   nutrition: [...],
//   batas_konsumsi: "tanggal / waktu"
// }
//
// Jangan menghapus tanda koma dan kurung.

const siteInfo = {
  instansi: "SPPG Lamongan Sugio Gergam 2"
};

const menuData = {
  "2026-08-28": {
    menu: [
      "Garlic Butter Rice",
      "Ayam Goreng Daun Jeruk",
      "Tempe Goreng",
      "Tumis Kacang Panjang & Wortel",
      "Pisang"
    ],

    portions: [
      {
        nama: "PORSI BESAR",
        harga: "Rp 9.650",
        items: [
          "Garlic Butter Rice — Rp 2.000",
          "Ayam Goreng Daun Jeruk — Rp 4.200",
          "Tempe Goreng — Rp 750",
          "Tumis Kacang Panjang, Wortel — Rp 1.200",
          "Pisang — Rp 1.500"
        ]
      },
      {
        nama: "PORSI KECIL",
        harga: "Rp 7.750",
        items: [
          "Garlic Butter Rice — Rp 1.500",
          "Ayam Goreng Daun Jeruk — Rp 3.200",
          "Tempe Goreng — Rp 750",
          "Tumis Kacang Panjang, Wortel — Rp 800",
          "Pisang — Rp 1.500"
        ]
      }
    ],

    nutrition: [
      {
        nama: "PORSI KECIL",
        total_porsi: "793 g",
        energi: "452 kkal",
        protein: "17 g",
        lemak: "18 g",
        karbohidrat: "51 g",
        serat: "2 g"
      },
      {
        nama: "PORSI BESAR",
        total_porsi: "1098 g",
        energi: "646 kkal",
        protein: "24 g",
        lemak: "21 g",
        karbohidrat: "87 g",
        serat: "3 g"
      }
    ],

    batas_konsumsi: "28 Agustus 2026"
  }

  // Contoh penambahan menu berikutnya:
  //
  // ,"2026-08-29": {
  //   menu: ["Nasi", "Ayam", "Sayur", "Buah"],
  //   portions: [
  //     { nama: "PORSI BESAR", harga: "Rp ...", items: ["..."] },
  //     { nama: "PORSI KECIL", harga: "Rp ...", items: ["..."] }
  //   ],
  //   nutrition: [
  //     {
  //       nama: "PORSI KECIL", total_porsi: "...",
  //       energi: "...", protein: "...", lemak: "...",
  //       karbohidrat: "...", serat: "..."
  //     },
  //     {
  //       nama: "PORSI BESAR", total_porsi: "...",
  //       energi: "...", protein: "...", lemak: "...",
  //       karbohidrat: "...", serat: "..."
  //     }
  //   ],
  //   batas_konsumsi: "29 Agustus 2026"
  // }
};
