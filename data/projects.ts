export type Project = {
  slug: string;
  image: string;
  alt: string;
  category: string;
  title: string;
  description: string;
  url: string;
};

export const projects = [
  {
    slug: "afwa-transport",
    image: "/images/portofolio/1.webp",
    alt: "Screenshot website Afwa Transport",
    category: "Travel dan Transport",
    title: "Afwa Transport",
    description:
      "Website travel dengan hero destinasi, layanan sewa mobil, dan CTA chat admin untuk mempercepat booking.",
    url: "https://www.afwatransportlombok.com/",
  },

  {
    slug: "bamboo-craft-homestay",
    image: "/images/portofolio/2.webp",
    alt: "Screenshot website Bamboo Craft Homestay",
    category: "Homestay & Travel",
    title: "Bamboo Craft Homestay",
    description:
      "Website homestay dan private tour di Lombok dengan informasi kamar, paket wisata, fasilitas, galeri, FAQ, serta booking langsung melalui WhatsApp.",
    url: "https://bamboocrafthomestay.vercel.app/",
  },
] as const satisfies readonly Project[];
