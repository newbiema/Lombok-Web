"use client";

import type { FormEvent } from "react";

export default function Contact() {
  function submitConsultation(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const nama = String(data.get("nama") ?? "").trim();
    const usaha = String(data.get("usaha") ?? "").trim();
    const jenis = String(data.get("jenis") ?? "");
    const message = `Halo LombokWeb, saya ingin konsultasi pembuatan website.\n\nData Diri:\n- Nama: ${nama}\n- Usaha: ${usaha}\n- Jenis Website: ${jenis}\n\nBisa dibantu buatkan website untuk bisnis saya di Lombok?`;
    window.open(
      `https://wa.me/6288975555215?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
    event.currentTarget.reset();
  }

  return (
    <section className="section contact-section" id="kontak">
      <div className="container contact-grid">
        <div className="contact-copy">
          <span className="eyebrow eyebrow-light">
            <i className="fa-brands fa-whatsapp" aria-hidden="true" />
            Kontak
          </span>
          <h2>Siap punya website yang lebih profesional?</h2>
          <p>
            Ceritakan jenis bisnis dan kebutuhan website Anda. Tim LombokWeb
            akan bantu arahkan paket, struktur halaman, dan estimasi pengerjaan.
          </p>
          <div className="contact-list">
            <a
              href="https://wa.me/6288975555215"
              target="_blank"
              rel="noopener"
            >
              <i className="fa-brands fa-whatsapp" aria-hidden="true" />
              +6288975555215
            </a>
            <a href="mailto:lombokweb19@gmail.com">
              <i className="fa-solid fa-envelope" aria-hidden="true" />
              lombokweb19@gmail.com
            </a>
            <span>
              <i className="fa-solid fa-location-dot" aria-hidden="true" />
              Lombok, Nusa Tenggara Barat
            </span>
          </div>
        </div>
        <form className="consultation-form" onSubmit={submitConsultation}>
          <div className="form-row">
            <label htmlFor="nama">Nama</label>
            <input
              id="nama"
              name="nama"
              type="text"
              placeholder="Nama Anda"
              autoComplete="name"
              required
            />
          </div>
          <div className="form-row">
            <label htmlFor="usaha">Nama bisnis</label>
            <input
              id="usaha"
              name="usaha"
              type="text"
              placeholder="Contoh: Villa, travel, toko, UMKM"
              autoComplete="organization"
              required
            />
          </div>
          <div className="form-row">
            <label htmlFor="jenis">Jenis website</label>
            <select id="jenis" name="jenis" required defaultValue="">
              <option value="">Pilih kebutuhan</option>
              <option value="Company Profile">Company Profile</option>
              <option value="Website Travel">Website Travel</option>
              <option value="Website Villa">Website Villa</option>
              <option value="Website Rental Mobil">Website Rental Mobil</option>
              <option value="Website UMKM">Website UMKM</option>
              <option value="Custom Website">Custom Website</option>
            </select>
          </div>
          <button className="btn btn-primary btn-form" type="submit">
            <i className="fa-brands fa-whatsapp" aria-hidden="true" />
            Kirim ke WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
