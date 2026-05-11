import Image from "next/image";

const socials = [
  {
    href: "https://github.com/co230532-a11y",
    icon: "fa-brands fa-github",
    label: "GitHub",
  },
  {
    href: "https://www.facebook.com/khn.fernandez",
    icon: "fa-brands fa-facebook-f",
    label: "Facebook",
  },
];

const orgs = [
  { href: "https://adzu.edu.ph/", src: "/adzu.png", alt: "ADZU" },
  { href: "https://www.paf.mil.ph/", src: "/paf.png", alt: "PAF" },
  {
    href: "https://www.facebook.com/AdZUROTC",
    src: "/adrtc.png",
    alt: "ROTC",
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-[62px]"
    >
      <div className="max-w-5xl mx-auto px-5 w-full py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Photo */}
          <div className="fi d2 flex justify-center md:justify-start">
            <div
              style={{
                width: "100%",
                maxWidth: "320px",
                aspectRatio: "3/4",
                borderRadius: "16px",
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
                border: "1px solid rgba(255,255,255,0.12)",
                overflow: "hidden",
                backdropFilter: "blur(8px)",
                position: "relative",
              }}
            >
              {/* Replace with your actual photo at /public/ROTC.jpg */}
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundImage: "url('/ROTC.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
              {/* Fallback placeholder (shown when image fails) */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  padding: "20px",
                  background: "rgba(8,8,8,0.6)",
                  opacity: 0,
                }}
              >
                <i
                  className="fa-solid fa-user-tie text-5xl mb-4"
                  style={{ color: "rgba(255,255,255,0.3)" }}
                />
                <p
                  className="text-sm font-syne font-semibold"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  Khan Ong Fernandez
                </p>
                <p
                  className="text-xs"
                  style={{ color: "rgba(255,255,255,0.25)", marginTop: "4px" }}
                >
                  ROTC Cadet LTC
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="mb-2 text-sm fi d2" style={{ color: "var(--muted)" }}>
              Hi, I am
            </p>

            <h1
              className="fi d2 font-syne font-extrabold leading-[1.12] tracking-tight"
              style={{ fontSize: "clamp(1.9rem, 3.8vw, 3rem)" }}
            >
              Khan Ong Fernandez
            </h1>

            <p
              className="mt-5 text-sm leading-7 max-w-sm fi d3"
              style={{ color: "var(--muted)" }}
            >
              A Computer Science student from Ateneo de Zamboanga University.
              The current C/LTC of ADZU Reserved Officer Training Corps as of
              2026.
            </p>

            <div className="flex flex-wrap gap-3 mt-7 fi d4">
              <a
                href="#projects"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.14)",
                  color: "var(--white)",
                  fontSize: "0.82rem",
                  fontWeight: 500,
                  padding: "10px 20px",
                  borderRadius: "8px",
                  textDecoration: "none",
                  transition: "background 0.2s, border-color 0.2s",
                }}
              >
                <i className="fa-solid fa-arrow-down text-xs" />
                View My Work
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=co230532@adzu.edu.ph&su=Inquiry+from+Portfolio"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.14)",
                  color: "var(--white)",
                  fontSize: "0.82rem",
                  fontWeight: 500,
                  padding: "10px 20px",
                  borderRadius: "8px",
                  textDecoration: "none",
                  transition: "background 0.2s, border-color 0.2s",
                }}
              >
                <i className="fa-regular fa-envelope text-xs" />
                Get In Touch
              </a>
              <a
                href="/Resume.pdf"
                download
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.14)",
                  color: "var(--white)",
                  fontSize: "0.82rem",
                  fontWeight: 500,
                  padding: "10px 20px",
                  borderRadius: "8px",
                  textDecoration: "none",
                  transition: "background 0.2s, border-color 0.2s",
                }}
              >
                <i className="fa-solid fa-download text-xs" />
                Download CV
              </a>
            </div>

            {/* Socials */}
            <div className="flex gap-3 mt-6 fi d5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
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
                    fontSize: "0.82rem",
                    textDecoration: "none",
                    transition: "color 0.2s, border-color 0.2s, background 0.2s",
                  }}
                >
                  <i className={s.icon} />
                </a>
              ))}
            </div>

            {/* Org Logos */}
            <div className="flex gap-4 mt-8">
              {orgs.map((org) => (
                <a
                  key={org.alt}
                  href={org.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={org.alt}
                  style={{
                    width: "55px",
                    height: "55px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    transition: "all 0.3s ease",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={org.src}
                    alt={org.alt}
                    style={{ width: "100%", height: "100%", objectFit: "contain" }}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
