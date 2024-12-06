export const sidebar_data = {
  top_sidebar: [
    {
      title: "Home",
      url: "/dashboard"
    },
    {
      title: "Profile",
      url: "/profile"
    },
    {
      title: "Logout",
      url: "/"
    }
  ],
  navMain: [
    {
      title: "Menu Favorite",
      url: "#",
      items: [],
    },
    {
      title: "Dashboard Keuangan",
      url: "#",
      items: [
        {
          title: "Pasien",
          url: "#",
          isActive: true,
        },
        {
          title: "Pegawai",
          url: "#",
        },
      ],
    },
    {
      title: "Buku Kas",
      url: "#",
      items: [
        {
          title: "Pasien",
          url: "#",
        },
        {
          title: "Pegawai",
          url: "#",
        },
      ],
    },
    {
      title: "Penerimaan",
      url: "#",
      items: [
        {
          title: "Pasien",
          url: "#",
        },
        {
          title: "Pegawai",
          url: "#",
        },
      ],
    },
    {
      title: "Pengeluaran",
      url: "#",
      items: [
        {
          title: "Obat",
          url: "#",
        },
      ],
    },
    {
      title: "Laporan Keuangan",
      url: "#",
      items: [
        {
          title: "Obat",
          url: "#",
        },
      ],
    },
    {
      title: "Daftar Akun",
      url: "#",
      items: [
        {
          title: "Pasien",
          url: "#",
        },
      ],
    },
  ],
};

export const sidebar_about_data = {
  navMain: [
    {
      title: "About RS",
      url: "#",
      items: [
        {
          title: "Investor",
          url: "#",
          isActive: true,
        },
        {
          title: "Pegawai",
          url: "#",
        },
      ],
    },
  ],
}

export const sidebar_contact_data = {
  navMain: [
    {
      title: "Contact Us",
      url: "#",
      items: [
        {
          title: "Dokter",
          url: "#",
          isActive: true,
        },
        {
          title: "Pegawai",
          url: "#",
        },
      ],
    },
  ],
}