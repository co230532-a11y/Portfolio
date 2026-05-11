"use client";

import { useEffect, useRef } from "react";

const stats = [
  { value: "4+", label: "Projects Deployed" },
  { value: "TOP 5", label: "PAF Cadre Batch Sinag", small: true },
  { value: "6+", label: "Tech Stacks Mastered" },
  { value: "LTC", label: "Cadet Rank, 2nd Class" },
];

const approaches = [
  { num: "01", text: "Understand mission & user goals" },
  { num: "02", text: "Build clean, modular systems" },
  { num: "03", text: "Execute with precision & discipline" },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const els = ref.current.querySelectorAll(".apill, .glass");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = "0";
            (entry.target as HTMLElement).style.transform = "translateY(16px)";
            (entry.target as HTMLElement).style.transition = `opacity .5s ease ${i * 0.07}s, transform .5s ease ${i * 0.07}s`;
            requestAnimationFrame(() =>
              setTimeout(() => {
                (entry.target as HTMLElement).style.opacity = "1";
                (entry.target as HTMLElement).style.transform = "translateY(0)";
              }, 30)
            );
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20">
      <div className="max-w-5xl mx-auto px-5" ref={ref}>
        <div className="text-center mb-12">
          <h2
            className="font-syne font-bold tracking-tight"
            style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)" }}
          >
            About Me
          </h2>
          <p
            className="text-sm mt-3 max-w-xl mx-auto leading-7"
            style={{ color: "var(--muted)" }}
          >
            A Computer Science student from Ateneo de Zamboanga University. The
            current C/LTC of ADZU Reserved Officer Training Corps as of 2026.
            Aspiring Software and Embedded Systems Engineer with experience in
            IoT, backend systems, API integration, and applied AI research. I
            enjoy creating real-time, problem-solving applications that combine
            hardware and software to deliver practical and impactful solutions.
          </p>
        </div>

        {/* Education + Military */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Education */}
          <div>
            <p
              className="text-xs tracking-widest uppercase font-semibold mb-6 font-syne"
              style={{ color: "var(--muted)" }}
            >
              Education
            </p>
            <div
              className="apill"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.12)",
                padding: "16px",
                borderRadius: "12px",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <div className="flex items-start gap-3 w-full mb-3">
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <i
                    className="fa-solid fa-book text-xs"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  />
                </div>
                <div>
                  <h4 className="font-syne font-bold text-sm text-white">
                    Bachelor of Science
                  </h4>
                  <p
                    className="text-xs"
                    style={{ color: "var(--muted)", marginTop: "2px" }}
                  >
                    Computer Science
                  </p>
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  paddingTop: "10px",
                  borderTop: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <p className="text-xs mb-1" style={{ color: "var(--muted)" }}>
                  <strong>Institution:</strong>
                </p>
                <p className="text-sm text-white mb-2">
                  Ateneo de Zamboanga University
                </p>
                <p className="text-xs mb-1" style={{ color: "var(--muted)" }}>
                  <strong>Duration:</strong>
                </p>
                <p className="text-sm text-white">2023 – Present</p>
              </div>
            </div>
          </div>

          {/* Military */}
          <div>
            <p
              className="text-xs tracking-widest uppercase font-semibold mb-6 font-syne"
              style={{ color: "var(--muted)" }}
            >
              Military Service
            </p>
            <div
              className="apill"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.12)",
                padding: "16px",
                borderRadius: "12px",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <div className="flex items-start gap-3 w-full mb-3">
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <i
                    className="fa-solid fa-shield-halved text-xs"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  />
                </div>
                <div>
                  <h4 className="font-syne font-bold text-sm text-white">
                    ADZU ROTC
                  </h4>
                  <p
                    className="text-xs"
                    style={{ color: "var(--muted)", marginTop: "2px" }}
                  >
                    Philippine Armed Forces
                  </p>
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  paddingTop: "10px",
                  borderTop: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <p className="text-xs mb-1" style={{ color: "var(--muted)" }}>
                  <strong>Rank:</strong>
                </p>
                <p className="text-sm text-white mb-2">
                  Cadet Lieutenant Colonel (2nd Class)
                </p>
                <p className="text-xs mb-1" style={{ color: "var(--muted)" }}>
                  <strong>Duration:</strong>
                </p>
                <p className="text-sm text-white">2024 – Present</p>
              </div>
            </div>
          </div>
        </div>

        {/* Approach */}
        <p
          className="text-xs tracking-widest uppercase font-semibold text-center mb-5 font-syne"
          style={{ color: "var(--muted)" }}
        >
          My Approach
        </p>
        <div className="grid md:grid-cols-3 gap-3 mb-8">
          {approaches.map((a) => (
            <div className="apill" key={a.num}>
              <span
                className="font-syne font-bold"
                style={{
                  fontSize: "0.65rem",
                  color: "rgba(255,255,255,0.25)",
                  minWidth: "20px",
                }}
              >
                {a.num}
              </span>
              <span>{a.text}</span>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="glass rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div className="text-center" key={s.label}>
              <div
                className="font-syne font-extrabold"
                style={{
                  fontSize: s.small ? "1.5rem" : "2rem",
                  color: "var(--white)",
                  lineHeight: 1,
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontSize: "0.7rem",
                  color: "var(--muted)",
                  marginTop: "4px",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
