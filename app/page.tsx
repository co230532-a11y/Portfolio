import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Leadership from "@/components/Leadership";
import Footer from "@/components/Footer";

const Divider = () => (
  <div
    className="max-w-5xl mx-auto px-5"
    style={{ height: "1px", background: "rgba(255,255,255,0.07)" }}
  />
);

export default function Home() {
  return (
    <>
      {/* Ambient glows */}
      <div
        style={{
          position: "fixed",
          top: "-200px",
          left: "-150px",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.022) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "fixed",
          bottom: "-200px",
          right: "-150px",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.015) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <Navbar />

      <main style={{ position: "relative", zIndex: 1 }}>
        <Hero />
        <Divider />
        <Projects />
        <Divider />
        <About />
        <Divider />
        <Skills />
        <Divider />
        <Leadership />
        <Divider />
      </main>

      <Footer />
    </>
  );
}
