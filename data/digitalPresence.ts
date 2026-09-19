export type DigitalPresenceService = {
  slug: string;
  icon: string;
  title: string;
  description: string;
  cta: string;
  href: string;
};

export const digitalPresenceServices = [
  {
    slug: "google-business-profile",
    icon: "fa-location-dot",
    title: "Google Business Profile",
    description:
      "Bantu setup dan optimasi profil bisnis agar informasi lokasi, jam operasional, foto, kontak, dan website tampil lebih rapi di Google Search dan Maps.",
    cta: "Konsultasikan",
    href: "#kontak",
  },
  {
    slug: "tripadvisor-setup",
    icon: "fa-compass",
    title: "Tripadvisor Setup",
    description:
      "Bantu menyiapkan atau merapikan profil bisnis travel, tour, villa, homestay, dan aktivitas wisata agar lebih siap ditemukan calon wisatawan.",
    cta: "Konsultasikan",
    href: "#kontak",
  },
  {
    slug: "business-profile-setup",
    icon: "fa-address-card",
    title: "Business Profile Setup",
    description:
      "Bantu merapikan kanal bisnis seperti WhatsApp Business, Instagram Business, dan profil online lainnya agar identitas bisnis lebih konsisten.",
    cta: "Konsultasikan",
    href: "#kontak",
  },
] as const satisfies readonly DigitalPresenceService[];
