export default function Footer() {
  const year = 2026;
  return (
    <>
      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <a className="footer-brand" href="#hero">
              <img
                src="/images/logo.webp"
                alt="Logo LombokWeb"
                width="42"
                height="42"
                loading="lazy"
              />
              <span>LombokWeb</span>
            </a>
            <p>
              Website profesional untuk bisnis lokal di Lombok dan sekitarnya.
            </p>
          </div>
          <div>
            <h3>Navigasi</h3>
            <a href="#layanan">Layanan</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#proses">Proses</a>
            <a href="#harga">Harga</a>
          </div>
          <div>
            <h3>Hubungi</h3>
            <a
              href="https://wa.me/6288975555215"
              target="_blank"
              rel="noopener"
            >
              WhatsApp
            </a>
            <a href="mailto:lombokweb19@gmail.com">Email</a>
            <a href="mailto:lombokweb19@gmail.com">instagram</a>
            <span className="footer-location">Lombok, NTB</span>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>© {year} LombokWeb. All rights reserved.</p>
        </div>
      </footer>
      <a
        className="floating-whatsapp"
        href="https://wa.me/6288975555215?text=Halo%20LombokWeb%2C%20saya%20ingin%20konsultasi%20pembuatan%20website."
        target="_blank"
        rel="noopener"
        aria-label="Chat WhatsApp LombokWeb"
      >
        <i className="fa-brands fa-whatsapp" aria-hidden="true" />
      </a>
    </>
  );
}
