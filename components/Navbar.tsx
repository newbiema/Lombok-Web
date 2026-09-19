"use client";

import { useEffect, useState } from "react";

const links = [
  ["#layanan", "Layanan"],
  ["#portfolio", "Portfolio"],
  ["#proses", "Proses"],
  ["#harga", "Harga"],
  ["#kontak", "Kontak"],
] as const;

const whatsappUrl =
  "https://wa.me/6288975555215?text=Halo%20LombokWeb%2C%20saya%20ingin%20konsultasi%20pembuatan%20website.";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 24);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, []);

  const closeMenu = () => setOpen(false);
  const headerClass = `site-header${scrolled ? " is-scrolled" : ""}${open ? " is-menu-open" : ""}`;

  return (
    <header className={headerClass} id="siteHeader">
      <div className="nav-shell">
        <a className="brand" href="#hero" aria-label="LombokWeb beranda">
          <span className="brand-mark">
            <img
              src="/images/logo.webp"
              alt="Logo LombokWeb"
              width="40"
              height="40"
            />
          </span>
          <span className="brand-copy">
            <span className="brand-name">LombokWeb</span>
            <span className="brand-tagline">Website Bisnis Lombok</span>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Navigasi utama">
          {links.map(([href, label]) => (
            <a href={href} key={href}>
              {label}
            </a>
          ))}
        </nav>
        <a
          className="nav-cta"
          href={whatsappUrl}
          target="_blank"
          rel="noopener"
        >
          <i className="fa-brands fa-whatsapp" aria-hidden="true" />
          <span>Konsultasi</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Tutup menu navigasi" : "Buka menu navigasi"}
          aria-expanded={open}
          aria-controls="mobileMenu"
          onClick={() => setOpen((value) => !value)}
        >
          <i
            className={`fa-solid ${open ? "fa-xmark" : "fa-bars"}`}
            aria-hidden="true"
          />
        </button>
      </div>
      <nav
        className={`mobile-nav${open ? " is-open" : ""}`}
        id="mobileMenu"
        aria-label="Navigasi mobile"
      >
        {links.map(([href, label]) => (
          <a href={href} key={href} onClick={closeMenu}>
            {label}
          </a>
        ))}
        <a
          className="mobile-nav-cta"
          href={whatsappUrl}
          target="_blank"
          rel="noopener"
          onClick={closeMenu}
        >
          <i className="fa-brands fa-whatsapp" aria-hidden="true" />
          Konsultasi Gratis
        </a>
      </nav>
    </header>
  );
}
