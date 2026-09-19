import { services } from "@/data/services";

export default function Services() {
  return (
    <section className="section section-white" id="layanan">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">
            <i className="fa-solid fa-layer-group" aria-hidden="true" />
            Layanan
          </span>

          <h2>Jenis website untuk kebutuhan bisnis yang berbeda.</h2>

          <p>
            Pilih jenis pekerjaan yang paling sesuai dengan kebutuhan bisnis
            Anda, dari promosi sederhana sampai fitur yang lebih khusus.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article
              className={`service-card${
                service.featured ? " featured-service" : ""
              }`}
              key={service.title}
            >
              {service.featured && (
                <span className="service-badge">Populer</span>
              )}

              <span className="service-icon">
                <i className={`fa-solid ${service.icon}`} aria-hidden="true" />
              </span>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <a href="#kontak">
                Konsultasikan{" "}
                <i className="fa-solid fa-arrow-right" aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
