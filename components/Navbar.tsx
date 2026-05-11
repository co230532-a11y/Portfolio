"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#leadership", label: "Leadership" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleMobileClick = () => setMobileOpen(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "rgba(8,8,8,0.8)",
        backdropFilter: "blur(22px)",
        WebkitBackdropFilter: "blur(22px)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <div className="max-w-5xl mx-auto px-5 h-[62px] flex items-center justify-between gap-4">
        {/* Logo / Name */}
        <span
          className="font-syne font-bold text-sm tracking-wide"
          style={{ color: "var(--white)" }}
        >
          KHAN FERNANDEZ
        </span>

        {/* Desktop nav pill */}
        <div className="nav-pill hidden md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-a"
              style={{
                fontSize: "0.78rem",
                fontWeight: 500,
                color:
                  activeSection === link.href.slice(1)
                    ? "#080808"
                    : "var(--muted)",
                padding: "6px 15px",
                borderRadius: "999px",
                transition: "color 0.2s, background 0.2s",
                textDecoration: "none",
                whiteSpace: "nowrap",
                background:
                  activeSection === link.href.slice(1)
                    ? "var(--white)"
                    : "transparent",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=co230532@adzu.edu.ph&su=Inquiry+from+Portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block"
          style={{
            background: "var(--white)",
            color: "#080808",
            fontSize: "0.8rem",
            fontWeight: 500,
            padding: "8px 20px",
            borderRadius: "999px",
            textDecoration: "none",
            transition: "opacity 0.2s, transform 0.2s",
          }}
        >
          Let&apos;s Talk
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden p-2 text-xl"
          style={{ color: "rgba(255,255,255,0.7)" }}
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Menu"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="flex flex-col md:hidden"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            background: "rgba(8,8,8,0.95)",
            backdropFilter: "blur(20px)",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleMobileClick}
              className="block px-6 py-3 text-sm hover:text-white transition-colors"
              style={{
                color: "rgba(255,255,255,0.5)",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
