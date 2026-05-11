"use client";

import { useEffect, useRef } from "react";

const certs = [
  {
    icon: "fa-solid fa-jet-fighter",
    iconColor: "rgba(255,255,255,0.65)",
    category: "Certification",
    title: "PAF SCT-2024",
    badge: { icon: "fa-solid fa-trophy", text: "TOP 5 GRADUATE" },
    desc: (
      <>
        Completed the Philippine Air Force Cadre Training as one of the{" "}
        <strong className="text-white">Top 5 graduates</strong> and was awarded{" "}
        <strong className="text-white">Best Field in Field Stripping</strong> of
        Batch <em>Sinag Animo</em>. Demonstrated excellence in military
        discipline and operational readiness.
      </>
    ),
    footer: [
      { label: "BRANCH", value: "Philippine Air Force" },
      { label: "STATUS", value: "CERTIFIED ✓" },
    ],
  },
  {
    icon: "fa-solid fa-shield-halved",
    iconColor: "rgba(255,255,255,0.65)",
    category: "Rank & Command",
    title: "Cadet Lieutenant Colonel",
    badge: { icon: "fa-solid fa-star", text: "UNIT LEADERSHIP" },
    desc: (
      <>
        Currently serving as{" "}
        <strong className="text-white">
          Cadet Lieutenant Colonel (2nd Class)
        </strong>{" "}
        at the Ateneo de Zamboanga University ROTC Corps as of 2026, previously
        holding the position of Operations Officer and presently serving as the
        CIES Officer.
      </>
    ),
    footer: [
      { label: "UNIT", value: "ADZU ROTC" },
      { label: "CLASS", value: "2ND CLASS ✓" },
    ],
  },
  {
    icon: "fa-solid fa-angles-down",
    iconColor: "rgba(255,255,255,0.65)",
    category: "Certificate",
    title: "PAF SCT-2025",
    badge: { icon: "fa-solid fa-star", text: "VOLUNTEER RESERVIST INSTRUCTOR" },
    desc: (
      <>
        Served as Volunteer Reservist Instructor for the PAF SCT-2025 program.
        Collaborated with Military Instructors to mentor and train the latest SCT
        trainees.
      </>
    ),
    footer: [{ label: "ROLE", value: "Volunteer Reservist Instructor" }],
  },
  {
    icon: "fa-solid fa-cube",
    iconColor: "#9fef00",
    category: "Certificate",
    title: "HackTheBox University CTF 2025",
    badge: { icon: "fa-solid fa-star", text: "PARTICIPANT" },
    desc: (
      <>
        Participated in the Hack The Box University CTF: Tinsel Trouble, a
        global cybersecurity competition. Representing Ateneo de Zamboanga
        University with my team, AdZUSPLOIT, we secured 306th place out of
        1,014 international university teams.
      </>
    ),
    footer: [
      { label: "UNIT", value: "ADZUSPLOIT" },
      { label: "ROLE", value: "Member" },
    ],
  },
  {
    icon: "fa-solid fa-camera",
    iconColor: "rgba(255,255,255,0.65)",
    category: "Certificate",
    title: "Ateneo Fiesta 2025",
    badge: { icon: "fa-solid fa-star", text: "VIDEOGRAPHER & VIDEOEDITOR" },
    desc: (
      <>
        Served as a Videographer and Video Editor for the Marketing and Promotion
        Committee, specifically spearheading the production of high-impact visual
        content to document and promote the key events of Day 3 during the
        Ateneo Fiesta 2025.
      </>
    ),
    footer: [
      { label: "UNIT", value: "Marketing and Promotion Committee" },
      { label: "ROLE", value: "Videographer & Video Editor" },
    ],
  },
];

const qualities = [
  { icon: "fa-solid fa-crosshairs", label: "Mission Focus" },
  { icon: "fa-solid fa-people-group", label: "Team Command" },
  { icon: "fa-solid fa-bolt", label: "Under Pressure" },
  { icon: "fa-solid fa-lock", label: "Tactical Precision" },
];

export default function Leadership() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const cards = ref.current.querySelectorAll(".mil-card");
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
    cards.forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="leadership" className="py-20">
      <div className="max-w-5xl mx-auto px-5">
        <div className="text-center mb-12">
          <h2
            className="font-syne font-bold tracking-tight"
            style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)" }}
          >
            Leadership &amp; Certifications
          </h2>
          <p className="text-sm mt-2" style={{ color: "var(--muted)" }}>
            Certifications and military achievements
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mb-5" ref={ref}>
          {certs.map((c) => (
            <div className="mil-card" key={c.title}>
              <div className="flex items-center gap-3 mb-5">
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <i className={c.icon} style={{ color: c.iconColor }} />
                </div>
                <div>
                  <p
                    className="text-xs tracking-widest uppercase font-syne font-semibold"
                    style={{ color: "var(--muted)" }}
                  >
                    {c.category}
                  </p>
                  <h3 className="font-syne font-bold text-base">{c.title}</h3>
                </div>
              </div>

              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg mb-5"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <i
                  className={`${c.badge.icon} text-xs`}
                  style={{ color: "rgba(255,255,255,0.6)" }}
                />
                <span className="font-syne font-bold text-sm tracking-wider">
                  {c.badge.text}
                </span>
              </div>

              <p
                className="text-sm leading-7 mb-5"
                style={{ color: "var(--muted)" }}
              >
                {c.desc}
              </p>

              <div
                className="flex gap-6 pt-4"
                style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
              >
                {c.footer.map((f) => (
                  <div key={f.label}>
                    <div
                      className="text-xs mb-1"
                      style={{ color: "var(--muted)" }}
                    >
                      {f.label}
                    </div>
                    <div className="font-syne font-semibold text-sm">
                      {f.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Qualities */}
        <div className="glass rounded-2xl p-5 grid grid-cols-2 md:grid-cols-4 gap-4">
          {qualities.map((q) => (
            <div className="flex items-center gap-3" key={q.label}>
              <i
                className={`${q.icon} text-sm`}
                style={{ color: "rgba(255,255,255,0.35)" }}
              />
              <span className="font-syne font-semibold text-sm">{q.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
