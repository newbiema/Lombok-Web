import { packages } from "@/data/packages";

export default function Pricing() {
  return (
    <section className="section section-white" id="harga">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">
            <i className="fa-solid fa-tags" aria-hidden="true" />
            Harga
          </span>
          <h2>Paket fleksibel untuk tahap bisnis yang berbeda.</h2>
          <p>
            Harga final menyesuaikan jumlah halaman, konten, fitur, dan
            kebutuhan integrasi. Konsultasi awal gratis.
          </p>
        </div>
        <div className="pricing-grid">
          {packages.map(
            (item) => (
              <article
                className={`pricing-card${item.featured ? " pricing-card-featured" : ""}${item.dark ? " pricing-card-dark" : ""}`}
                key={item.slug}
              >
                {item.featured && (
                  <span className="pricing-badge">Rekomendasi</span>
                )}
                <span className="pricing-label">{item.label}</span>
                <h3>{item.title}</h3>
                <p className="price">{item.price}</p>
                <p>{item.description}</p>
                <ul>
                  {item.features.map((feature) => (
                    <li key={feature}>
                      <i className="fa-solid fa-check" aria-hidden="true" />{" "}
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  className={`btn ${item.featured ? "btn-primary" : "btn-secondary"}`}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.cta}
                </a>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
