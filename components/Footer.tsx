const footerLinks = [
  { href: "#hero", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#leadership", label: "Leadership" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "rgba(0,0,0,0.45)",
        borderTop: "1px solid rgba(255,255,255,0.07)",
      }}
      className="py-10"
    >
      <div className="max-w-5xl mx-auto px-5">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-syne)",
                  fontWeight: 700,
                  fontSize: "0.75rem",
                  color: "var(--white)",
                }}
              >
                KF
              </div>
              <span className="font-syne font-bold text-base">
                Khan Ong Fernandez
              </span>
            </div>
            <p
              className="text-xs leading-6"
              style={{ color: "var(--muted)", maxWidth: "200px" }}
            >
              CS Student · Cadet LTC · Software Developer
            </p>
          </div>

          {/* Nav */}
          <div>
            <p
              className="text-xs tracking-widest uppercase font-semibold mb-4 font-syne"
              style={{ color: "var(--muted)" }}
            >
              Navigation
            </p>
            <div className="space-y-2">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm hover:text-white transition-colors"
                  style={{ color: "var(--muted)" }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p
              className="text-xs tracking-widest uppercase font-semibold mb-4 font-syne"
              style={{ color: "var(--muted)" }}
            >
              Contact
            </p>
            <a
              href="mailto:co230532@adzu.edu.ph"
              className="flex items-center gap-2 text-sm mb-2 hover:text-white transition-colors"
              style={{ color: "var(--muted)" }}
            >
              <i className="fa-regular fa-envelope text-xs" />
              co230532@adzu.edu.ph
            </a>
            <p
              className="flex items-center gap-2 text-sm mb-5"
              style={{ color: "var(--muted)" }}
            >
              <i className="fa-solid fa-location-dot text-xs" />
              Zamboanga City, PH
            </p>
            <div className="flex gap-2">
              <a
                href="https://github.com/co230532-a11y"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                style={{
                  width: "34px",
                  height: "34px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "8px",
                  color: "var(--muted)",
                  textDecoration: "none",
                  transition: "color 0.2s, border-color 0.2s, background 0.2s",
                }}
              >
                <i className="fa-brands fa-github" />
              </a>
              <a
                href="https://www.facebook.com/khn.fernandez"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                style={{
                  width: "34px",
                  height: "34px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "8px",
                  color: "var(--muted)",
                  textDecoration: "none",
                  transition: "color 0.2s, border-color 0.2s, background 0.2s",
                }}
              >
                <i className="fa-brands fa-facebook-f" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            background: "rgba(255,255,255,0.07)",
            marginBottom: "20px",
          }}
        />

        <div className="flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-xs" style={{ color: "var(--muted)" }}>
            © 2025 Khan Ong Fernandez. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.18)" }}>
            Built with precision. Deployed with discipline.
          </p>
        </div>
      </div>
    </footer>
  );
}
