import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jasa Pembuatan Website Lombok | LombokWeb",
  description:
    "LombokWeb.site melayani jasa pembuatan website di Lombok untuk UMKM, travel, homestay, dan bisnis lokal. Desain profesional, mobile-friendly, dan terhubung ke WhatsApp.",
  alternates: { canonical: "/jasa-pembuatan-website-lombok" },
  openGraph: {
    title: "Jasa Pembuatan Website Lombok | LombokWeb.site",
    description:
      "Jasa pembuatan website di Lombok untuk UMKM, travel, homestay, dan bisnis lokal. Desain modern, cepat, dan terhubung ke WhatsApp.",
    type: "article",
    url: "/jasa-pembuatan-website-lombok",
    images: ["/images/logo.webp"],
  },
};

const whatsapp =
  "https://wa.me/6287892219615?text=Halo%20LombokWeb%2C%20saya%20ingin%20konsultasi%20jasa%20pembuatan%20website%20Lombok.";
const benefits = [
  [
    "fa-shield-check",
    "Meningkatkan Kredibilitas",
    "Website membuat bisnis terlihat lebih serius dan terpercaya di mata pelanggan.",
  ],
  [
    "fa-magnifying-glass",
    "Mudah Ditemukan di Google",
    "Calon pelanggan bisa menemukan bisnis Anda melalui pencarian.",
  ],
  [
    "fa-mobile-screen",
    "Akses 24/7",
    "Informasi bisnis tersedia kapan saja tanpa batas jam operasional.",
  ],
  [
    "fa-whatsapp",
    "Terhubung Langsung",
    "Integrasi WhatsApp untuk komunikasi cepat dengan pelanggan.",
  ],
];
const services: [string, string, string, string[]][] = [
  [
    "border-primary",
    "Website UMKM & Kuliner",
    "Cocok untuk warung makan, coffee shop, toko baju, laundry, barbershop, atau usaha rumahan di Lombok. Website berisi foto produk, harga, dan tombol WhatsApp untuk order langsung.",
    [
      "Katalog produk digital",
      "Tombol order via WhatsApp",
      "Info lokasi dengan Google Maps",
      "Testimoni pelanggan",
    ],
  ],
  [
    "border-green-500",
    "Website Travel & Tour Lombok",
    "Cocok untuk agen travel, open trip, dan rental mobil. Tampilkan paket wisata Lombok, itinerary, harga, dan galeri foto destinasi seperti Gili Trawangan, Mandalika, dan lainnya.",
    [
      "Daftar paket wisata lengkap",
      "Form booking online",
      "Galeri foto destinasi",
      "Informasi harga transparan",
    ],
  ],
  [
    "border-amber-400",
    "Website Homestay / Villa",
    "Untuk penginapan, guest house, atau villa di Lombok. Website menampilkan foto kamar, fasilitas, lokasi strategis, dan sistem booking cepat via WhatsApp.",
    [
      "Galeri foto kamar & fasilitas",
      "Sistem booking WhatsApp",
      "Info harga & promo",
      "Testimoni tamu",
    ],
  ],
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Jasa Pembuatan Website Lombok",
  provider: {
    "@type": "Organization",
    name: "LombokWeb.site",
    url: "https://www.lombokweb.site",
  },
  areaServed: { "@type": "Place", name: "Lombok, Nusa Tenggara Barat" },
  url: "https://www.lombokweb.site/jasa-pembuatan-website-lombok",
  description:
    "Layanan jasa pembuatan website profesional untuk UMKM, travel, homestay, dan bisnis lokal di Lombok.",
};

export default function ServicePage() {
  const year = new Date().getFullYear();
  return (
    <>
      <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 group">
            <img
              src="/images/logo.webp"
              alt="LombokWeb"
              className="w-10 h-10 rounded-xl object-contain"
            />
            <div className="leading-tight">
              <p className="font-semibold text-primary">LombokWeb</p>
              <p className="text-xs text-slate-500">Jasa Website Lombok</p>
            </div>
          </a>
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors shadow-sm"
          >
            <i className="fa-brands fa-whatsapp text-sm" />
            <span className="hidden sm:inline">Konsultasi Gratis</span>
            <span className="sm:hidden">Chat</span>
          </a>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-4 pt-8 pb-16">
        <nav
          className="text-sm text-slate-500 mb-8 flex items-center gap-2"
          aria-label="Breadcrumb"
        >
          <a
            href="/"
            className="hover:text-primary transition-colors flex items-center gap-1"
          >
            <i className="fa-solid fa-house text-xs" />
            Beranda
          </a>
          <i className="fa-solid fa-chevron-right text-xs" />
          <span className="text-slate-700 font-medium">
            Jasa Pembuatan Website Lombok
          </span>
        </nav>
        <header className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
            <i className="fa-solid fa-pen-nib" />
            Panduan Bisnis Lokal Lombok
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 leading-tight">
            Jasa Pembuatan Website di Lombok <br className="hidden sm:block" />
            <span className="text-primary">untuk UMKM &amp; Bisnis Lokal</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Panduan memilih jasa pembuatan website yang tepat untuk bisnis Anda
            di Lombok, dari UMKM sampai travel dan villa.
          </p>
        </header>
        <section className="mb-12">
          <div className="rounded-2xl bg-gradient-to-r from-primary to-blue-600 p-8 text-center text-white">
            <h2 className="text-xl font-bold mb-2">
              Siap Membuat Website untuk Bisnis Anda?
            </h2>
            <p className="text-blue-100 mb-6 max-w-md mx-auto">
              Konsultasikan kebutuhan website Anda gratis. Kami bantu
              rekomendasikan paket yang pas.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-primary font-semibold hover:bg-blue-50 transition-colors"
              >
                <i className="fa-brands fa-whatsapp text-lg" />
                Chat via WhatsApp
              </a>
              <a
                href="tel:+6287892219615"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary/20 text-white font-semibold hover:bg-primary/30 transition-colors border border-white/20"
              >
                <i className="fa-solid fa-phone" />
                Telepon Sekarang
              </a>
            </div>
          </div>
        </section>
        <article className="article-content bg-white rounded-2xl shadow-sm border border-slate-100 p-6 sm:p-8">
          <section className="mb-8">
            <h2>Mengapa Bisnis di Lombok Perlu Website?</h2>
            <p>
              Di era digital seperti sekarang, memiliki website bukan lagi
              sekadar gaya-gayaan, tapi kebutuhan. Banyak pelaku usaha di Lombok
              yang masih mengandalkan media sosial seperti Instagram dan
              WhatsApp saja. Meskipun efektif, website memberikan nilai tambah
              yang besar untuk kesan profesional dan kemudahan informasi.
            </p>
            <div className="grid md:grid-cols-2 gap-4 my-6">
              {benefits.map(([icon, title, description]) => (
                <div
                  className="flex items-start gap-3 p-4 rounded-lg bg-slate-50"
                  key={title}
                >
                  <i
                    className={`fa-${icon === "fa-whatsapp" ? "brands" : "solid"} ${icon} text-primary mt-1`}
                  />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">
                      {title}
                    </h4>
                    <p className="text-sm text-slate-600">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section className="mb-8">
            <h2>Layanan Jasa Pembuatan Website Lombok</h2>
            <p>
              Setiap bisnis punya kebutuhan berbeda. Kami menyediakan beberapa
              tipe website yang bisa disesuaikan dengan usaha Anda di Lombok.
            </p>
            <div className="space-y-6 my-6">
              {services.map(([border, title, description, features]) => (
                <div className={`border-l-4 ${border} pl-4 py-2`} key={title}>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <ul className="text-sm text-slate-600 mt-2">
                    {features.map((feature) => (
                      <li key={feature}>• {feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
          <section className="mb-8">
            <h2>Harga Jasa Pembuatan Website di Lombok</h2>
            <p>
              Kami menawarkan paket harga yang transparan dan masih terjangkau
              untuk pelaku usaha lokal. Angka di bawah ini mengikuti promo yang
              juga tampil di halaman utama.
            </p>
            <div className="grid md:grid-cols-3 gap-6 my-6">
              <PriceCard
                title="Paket Starter"
                oldPrice="Rp1.000.000"
                price="Rp800.000"
                promo="Promo untuk profil usaha kecil"
                features={[
                  "1 Halaman utama",
                  "Desain responsif",
                  "Tombol WhatsApp",
                  "Google Maps",
                  "Support 1 bulan",
                ]}
                description="Cocok untuk profil bisnis sederhana yang ingin tampil rapi dan jelas."
              />
              <PriceCard
                featured
                title="Paket Bisnis"
                oldPrice="Rp2.500.000"
                price="Rp2.000.000"
                promo="Rekomendasi untuk travel & homestay"
                features={[
                  "Hingga 5 halaman",
                  "Form booking",
                  "Galeri foto",
                  "SEO dasar",
                  "Support 3 bulan",
                  "2x revisi gratis",
                ]}
                description="Ideal untuk usaha yang ingin tampil lebih lengkap dan maksimal."
              />
              <PriceCard
                title="Paket Custom"
                oldPrice="Mulai dari"
                price="Consult"
                features={[
                  "Desain khusus",
                  "Fitur tambahan",
                  "Multi bahasa",
                  "Integrasi khusus",
                  "Support 6 bulan",
                ]}
                description="Untuk kebutuhan yang lebih spesifik atau sistem yang butuh integrasi."
              />
            </div>
          </section>
          <section className="mb-8">
            <h2>Cara Memulai Membuat Website</h2>
            <p>
              Proses pembuatan website bersama kami dibuat sesederhana mungkin.
              Anda tidak perlu mengerti hal teknis, cukup siapkan informasi
              bisnis.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
              {[
                [
                  "1",
                  "Konsultasi",
                  "Ceritakan kebutuhan bisnis Anda via WhatsApp.",
                ],
                [
                  "2",
                  "Pilih Paket",
                  "Tentukan paket yang sesuai dengan budget.",
                ],
                ["3", "Kirim Materi", "Logo, foto, dan informasi bisnis."],
                ["4", "Website Live", "Website siap online dalam 7–14 hari."],
              ].map(([number, title, description]) => (
                <div className="text-center p-4" key={number}>
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-3">
                    <span className="font-bold">{number}</span>
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">{title}</h4>
                  <p className="text-sm text-slate-600">{description}</p>
                </div>
              ))}
            </div>
          </section>
          <section className="text-center py-8 border-t border-slate-100 mt-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Siap Membuat Website untuk Bisnis Anda?
            </h2>
            <p className="text-slate-600 mb-6 max-w-md mx-auto">
              Mulai dari paket kecil dulu pun tidak masalah. Yang penting bisnis
              Anda mulai punya alamat resmi di internet.
            </p>
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition-colors shadow-lg"
            >
              <i className="fa-brands fa-whatsapp text-lg" />
              Konsultasi Gratis via WhatsApp
            </a>
            <p className="text-sm text-slate-500 mt-4">
              WhatsApp: <strong>+6287892219615</strong> • Email:{" "}
              <strong>lombokweb@gmail.com</strong>
            </p>
          </section>
        </article>
        <div className="mt-12 text-center">
          <a
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-300 text-slate-700 hover:border-primary hover:text-primary transition-colors"
          >
            <i className="fa-solid fa-arrow-left" />
            Kembali ke Beranda LombokWeb.site
          </a>
        </div>
      </main>
      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img
              src="/images/logo.webp"
              alt="LombokWeb"
              className="w-8 h-8 rounded-lg"
            />
            <span className="font-semibold text-primary">LombokWeb</span>
          </div>
          <p className="text-sm text-slate-600 mb-4">
            Jasa Pembuatan Website Profesional untuk Bisnis Lokal di Lombok
          </p>
          <p className="text-xs text-slate-500">
            © {year} LombokWeb.site •{" "}
            <a
              href="https://wa.me/6287892219615"
              className="hover:text-primary"
            >
              +6287892219615
            </a>{" "}
            • All rights reserved
          </p>
        </div>
      </footer>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}

function PriceCard({
  title,
  oldPrice,
  price,
  promo,
  features,
  description,
  featured = false,
}: {
  title: string;
  oldPrice: string;
  price: string;
  promo?: string;
  features: string[];
  description: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`${featured ? "border-2 border-primary relative bg-primary/5" : "border border-slate-200"} rounded-xl p-6 text-center`}
    >
      {featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs px-3 py-1 rounded-full">
          Paling Diminati
        </span>
      )}
      <h4 className="font-bold text-slate-900 mb-2">{title}</h4>
      <p className="text-xs text-slate-400 line-through mb-1">{oldPrice}</p>
      <p className="text-2xl font-bold text-primary mb-1">{price}</p>
      {promo && <p className="text-xs text-amber-600 mb-4">{promo}</p>}
      <ul className="text-sm text-slate-600 space-y-2 mb-6">
        {features.map((feature) => (
          <li key={feature}>✓ {feature}</li>
        ))}
      </ul>
      <p className="text-xs text-slate-500">{description}</p>
    </div>
  );
}
