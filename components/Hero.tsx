const whatsappUrl =
  "https://wa.me/6288975555215?text=Halo%20LombokWeb%2C%20saya%20ingin%20konsultasi%20pembuatan%20website.";

export default function Hero() {
  return (
    <>
      <section className="hero-section" id="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow eyebrow-light">
              <i className="fa-solid fa-circle-check" aria-hidden="true" />
              Jasa pembuatan website profesional di Lombok
            </span>
            <h1 aria-label="Website Profesional untuk Bisnis Anda">
              <span className="title-desktop">
                Website Profesional untuk Bisnis Anda
              </span>
              <span className="title-mobile" aria-hidden="true">
                Website
                <br />
                Profesional
                <br />
                untuk
                <br />
                Bisnis Anda
              </span>
            </h1>
            <p className="hero-lede">
              LombokWeb membuat website modern untuk UMKM, travel, villa, rental
              mobil, dan perusahaan yang ingin terlihat kredibel dan lebih mudah
              mendapatkan pelanggan.
            </p>
            <div className="hero-actions">
              <a
                className="btn btn-primary btn-large"
                href={whatsappUrl}
                target="_blank"
                rel="noopener"
              >
                <i className="fa-brands fa-whatsapp" aria-hidden="true" />
                Konsultasi Gratis
              </a>
              <a
                className="btn btn-secondary-light btn-large"
                href="#portfolio"
              >
                <i className="fa-solid fa-display" aria-hidden="true" />
                Lihat Portfolio
              </a>
            </div>
            <div
              className="hero-contact-pills"
              aria-label="Informasi kontak LombokWeb"
            >
              <a
                href="https://wa.me/6288975555215"
                target="_blank"
                rel="noopener"
              >
                <i className="fa-brands fa-whatsapp" aria-hidden="true" />
                WhatsApp
              </a>
              <a href="mailto:lombokweb19@gmail.com">
                <i className="fa-solid fa-envelope" aria-hidden="true" />
                Email LombokWeb
              </a>
              <span>
                <i className="fa-solid fa-location-dot" aria-hidden="true" />
                Lombok, NTB
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="trust-strip" aria-label="Trust elements">
        <div className="container trust-strip-grid">
          <span>
            <i
              className="fa-solid fa-mobile-screen-button"
              aria-hidden="true"
            />{" "}
            Responsive Design
          </span>
          <span>
            <i className="fa-solid fa-gauge-high" aria-hidden="true" /> Fast
            Loading
          </span>
          <span>
            <i className="fa-solid fa-lock" aria-hidden="true" /> Secure Hosting
          </span>
          <span>
            <i className="fa-solid fa-pen-ruler" aria-hidden="true" /> Custom
            Design
          </span>
          <span>
            <i className="fa-solid fa-comments" aria-hidden="true" /> Free
            Consultation
          </span>
        </div>
      </section>
    </>
  );
}
