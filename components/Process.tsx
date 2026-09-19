const steps = [
  [
    "01",
    "Konsultasi kebutuhan",
    "Bahas jenis bisnis, target pelanggan, konten, referensi desain, dan tujuan website.",
  ],
  [
    "02",
    "Desain dan konten",
    "Struktur halaman dibuat fokus pada kepercayaan, layanan, portfolio, dan CTA.",
  ],
  [
    "03",
    "Development responsive",
    "Website dibangun agar cepat, mobile-friendly, dan nyaman dibuka dari berbagai perangkat.",
  ],
  [
    "04",
    "Launch dan support",
    "Website online dengan panduan singkat, integrasi WhatsApp, dan dukungan setelah rilis.",
  ],
] as const;

export default function Process() {
  return (
    <section className="section section-white" id="proses">
      <div className="container process-layout">
        <div className="section-heading align-left">
          <span className="eyebrow">
            <i className="fa-solid fa-diagram-project" aria-hidden="true" />
            Proses
          </span>
          <h2>Alur kerja jelas dari konsultasi sampai website online.</h2>
          <p>
            Anda tetap mendapat arahan yang rapi, tanpa perlu mengurus detail
            teknis seperti layout, hosting, domain, atau optimasi tampilan
            mobile.
          </p>
          <a className="btn btn-primary" href="#kontak">
            Mulai Konsultasi{" "}
            <i className="fa-solid fa-arrow-right" aria-hidden="true" />
          </a>
        </div>
        <div className="process-list">
          {steps.map(([number, title, description]) => (
            <article className="process-item" key={number}>
              <span>{number}</span>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
