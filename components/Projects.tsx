"use client";

import { useEffect, useRef } from "react";

const projects = [
  {
    id: "SYS — 001",
    icon: "fa-solid fa-droplet",
    title: "Flood Alert System",
    sub: "for Zamboanga City — Android / API",
    desc: "Localized disaster response app integrating Open-Meteo API and Alerto Zamboanga for real-time flood monitoring and community alerts.",
    tags: ["Android", "Open-Meteo API", "Java", "REST API", "Disaster Response"],
  },
  {
    id: "SYS — 002",
    icon: "fa-solid fa-traffic-light",
    title: "Traffic C2 Simulator",
    sub: "Command & Control — C++",
    desc: "Modular traffic management system using linked lists and finite state machines for real-time vehicle flow simulation and intersection control.",
    tags: ["C++", "Linked Lists", "State Machines", "DSA", "Systems Design"],
  },
  {
    id: "SYS — 003",
    icon: "fa-solid fa-eye",
    title: "Lightweight Image Preprocessing",
    sub: "Facial Recognition Research",
    desc: "Research optimizing facial recognition accuracy on constrained hardware through efficient image preprocessing pipelines.",
    tags: ["Computer Vision", "OpenCV", "Edge ML", "Research"],
  },
  {
    id: "SYS — 004",
    icon: "fa-solid fa-seedling",
    title: "Automated Climate Irrigation",
    sub: "IoT Arduino System",
    desc: "Arduino automation system for soil moisture and temperature regulation using DHT11 and soil moisture sensors, enabling real-time environmental monitoring and control.",
    tags: ["Arduino", "Sensors", "C/C++", "AgriTech"],
  },
];

export default function Projects() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardsRef.current) return;
    const cards = cardsRef.current.querySelectorAll(".svc-card");
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
    <section id="projects" className="py-20">
      <div className="max-w-5xl mx-auto px-5">
        <div className="text-center mb-12">
          <h2
            className="font-syne font-bold tracking-tight"
            style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)" }}
          >
            Projects
          </h2>
          <p className="text-sm mt-2" style={{ color: "var(--muted)" }}>
            Mission-critical systems built for the field
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5" ref={cardsRef}>
          {projects.map((p) => (
            <div className="svc-card" key={p.id}>
              <p
                className="text-xs tracking-widest uppercase mb-4 font-syne font-bold"
                style={{ color: "rgba(255,255,255,0.2)" }}
              >
                {p.id}
              </p>
              <div className="flex items-start gap-3 mb-3">
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "8px",
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <i
                    className={`${p.icon} text-xs`}
                    style={{ color: "rgba(255,255,255,0.65)" }}
                  />
                </div>
                <div>
                  <h3
                    className="font-syne font-bold text-sm mb-1"
                    style={{ color: "var(--white)" }}
                  >
                    {p.title}
                  </h3>
                  <p className="text-xs" style={{ color: "var(--muted)" }}>
                    {p.sub}
                  </p>
                </div>
              </div>
              <p
                className="text-sm leading-7 mb-4"
                style={{ color: "var(--muted)" }}
              >
                {p.desc}
              </p>
              <div>
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      display: "inline-block",
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.09)",
                      borderRadius: "6px",
                      fontSize: "0.7rem",
                      padding: "5px 10px",
                      color: "rgba(255,255,255,0.55)",
                      margin: "2px 2px 0",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
