import { projects } from "@/data/projects";

export default function Portfolio() {
  return (
    <section className="section section-muted" id="portfolio">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">
            <i className="fa-solid fa-briefcase" aria-hidden="true" />
            Portfolio
          </span>

          <h2>
            Project dengan tampilan bersih, cepat dipahami, dan siap menerima
            inquiry.
          </h2>

          <p>
            Beberapa contoh website yang dibuat untuk bisnis lokal dengan
            kebutuhan praktis: terlihat profesional dan mudah dikontak.
          </p>
        </div>

        <div className="portfolio-grid">
          {projects.map((project) => (
            <article className="portfolio-card" key={project.slug}>
              <a
                href={project.url}
                className="portfolio-media"
                aria-label={`Lihat website ${project.title}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={project.image}
                  alt={project.alt}
                  width="1200"
                  height="433"
                  loading="lazy"
                />

                <span className="portfolio-reveal">
                  Lihat website{" "}
                  <i
                    className="fa-solid fa-arrow-up-right-from-square"
                    aria-hidden="true"
                  />
                </span>
              </a>

              <div className="portfolio-body">
                <div>
                  <span>{project.category}</span>
                  <h3>{project.title}</h3>
                </div>

                <p>{project.description}</p>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio-link"
                  aria-label={`Buka website ${project.title}`}
                >
                  Lihat website{" "}
                  <i
                    className="fa-solid fa-arrow-up-right-from-square"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
