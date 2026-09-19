export type Package = {
  slug: string;
  label: string;
  title: string;
  price: string;
  description: string;
  features: readonly string[];
  cta: string;
  href: string;
  featured: boolean;
  dark: boolean;
};

export const packages = [
  {
    slug: "starter",
    label: "Starter",
    title: "Starter",
    price: "Mulai Rp 800 ribu",
    description: "Untuk kebutuhan website sederhana dan cepat online.",
    features: [
      "1 halaman website",
      "Desain responsive",
      "CTA WhatsApp",
      "Basic SEO",
      "Setup domain & hosting",
    ],
    cta: "Pilih Paket",
    href: "https://wa.me/6288975555215?text=Halo%20LombokWeb%2C%20saya%20tertarik%20dengan%20paket%20Starter.%20Saya%20ingin%20konsultasi%20pembuatan%20website.",
    featured: false,
    dark: false,
  },

  {
    slug: "business",
    label: "Business",
    title: "Business",
    price: "Mulai Rp 2,5 juta",
    description:
      "Untuk bisnis yang membutuhkan website lebih lengkap dan dapat dikelola.",
    features: [
      "Website multi halaman",
      "Dashboard pengelolaan konten",
      "Tambah & edit konten sendiri",
      "Integrasi WhatsApp",
      "Basic SEO",
      "Setup domain & hosting",
    ],
    cta: "Pilih Paket",
    href: "https://wa.me/6288975555215?text=Halo%20LombokWeb%2C%20saya%20tertarik%20dengan%20paket%20Business.%20Saya%20ingin%20konsultasi%20pembuatan%20website.",
    featured: true,
    dark: false,
  },

  {
    slug: "custom",
    label: "Custom",
    title: "Custom",
    price: "Diskusikan",
    description: "Untuk fitur, workflow, atau kebutuhan khusus.",
    features: [
      "Struktur sesuai kebutuhan",
      "Fitur custom",
      "Integrasi sistem",
      "Optimasi performance",
      "Support setelah launch",
    ],
    cta: "Konsultasikan",
    href: "https://wa.me/6288975555215?text=Halo%20LombokWeb%2C%20saya%20ingin%20konsultasi%20kebutuhan%20website%20Custom.",
    featured: false,
    dark: true,
  },
] as const satisfies readonly Package[];
