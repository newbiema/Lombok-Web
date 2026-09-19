import { digitalPresenceServices } from "@/data/digitalPresence";

const whatsappNumber = "6287892219615";

export default function DigitalPresence() {
  return (
    <section className="section section-white" id="digital-presence">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">
            <i className="fa-solid fa-globe" aria-hidden="true" />
            Digital Presence
          </span>

          <h2>Lebih dari sekadar website.</h2>

          <p>
            LombokWeb juga membantu bisnis Anda tampil lebih lengkap di platform
            yang sering digunakan calon pelanggan untuk mencari informasi,
            lokasi, dan layanan.
          </p>
        </div>

        <div className="service-grid">
          {digitalPresenceServices.map((service) => {
            const message = encodeURIComponent(
              `Halo LombokWeb, saya tertarik dengan layanan ${service.title}. Bisa konsultasi lebih lanjut?`,
            );

            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

            return (
              <article className="service-card" key={service.slug}>
                <span className="service-icon">
                  <i
                    className={`fa-solid ${service.icon}`}
                    aria-hidden="true"
                  />
                </span>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  {service.cta}{" "}
                  <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
