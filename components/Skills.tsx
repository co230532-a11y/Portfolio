"use client";

import { useEffect, useRef } from "react";

const skillGroups = [
  {
    title: "Core Development",
    sub: "Systems-level & application programming",
    tags: ["C / C++", "Java", "Python", "Android SDK", "Data Structures"],
  },
  {
    title: "Frontend Tech",
    sub: "Responsive and clean web interfaces",
    tags: ["HTML", "CSS", "JavaScript", "React", "Tailwind"],
  },
  {
    title: "Design Tools",
    sub: "Visual design and media production",
    tags: ["Figma", "UI/UX"],
  },
  {
    title: "Tools & Systems",
    sub: "Dev tooling and embedded systems",
    tags: ["Arduino IDE", "SQL", "Git", "REST APIs"],
  },
];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const cards = ref.current.querySelectorAll(".svc-card");
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
    <section id="skills" className="py-20">
      <div className="max-w-5xl mx-auto px-5">
        <div className="text-center mb-12">
          <h2
            className="font-syne font-bold tracking-tight"
            style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)" }}
          >
            Skills
          </h2>
          <p className="text-sm mt-2" style={{ color: "var(--muted)" }}>
            Crafting efficient systems and clean interfaces
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5" ref={ref}>
          {skillGroups.map((g) => (
            <div className="svc-card" key={g.title}>
              <h3
                className="font-syne font-bold text-sm mb-2"
                style={{ color: "var(--white)" }}
              >
                {g.title}
              </h3>
              <p
                className="text-xs leading-6 mb-4"
                style={{ color: "var(--muted)" }}
              >
                {g.sub}
              </p>
              <div>
                {g.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      display: "inline-block",
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "999px",
                      fontSize: "0.68rem",
                      padding: "4px 11px",
                      color: "rgba(255,255,255,0.6)",
                      margin: "2px",
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
