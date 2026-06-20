import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";

const projects = [
  {
    title: "Ray Solar Solutions",
    description: "A full-stack e-commerce platform for solar lighting products across Africa.",
    tech: ["Full-stack", "E-commerce"],
    github: "https://github.com/marvinsotuff"
  },
  {
    title: "Nana's Place",
    description: "A full-stack food delivery app with React frontend and Python FastAPI backend.",
    tech: ["React", "Python", "FastAPI"],
    github: "https://github.com/marvinsotuff"
  }
];

export default function Projects() {
  return (
    <div style={{ padding: "8rem 2rem 4rem", maxWidth: 1100, margin: "0 auto" }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(3rem,8vw,5rem)",
          fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "0.5rem" }}>
          PROJECTS<span style={{ color: "hsl(16,100%,50%)" }}>.</span>
        </h1>
        <div style={{ height: 4, width: 96, background: "hsl(16,100%,50%)", marginBottom: "4rem" }} />
      </motion.div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px,1fr))",
        gap: "2rem", marginBottom: "4rem" }}>
        {projects.map((p, i) => (
          <motion.div key={p.title}
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            style={{ background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: 16, padding: "2rem", position: "relative" }}>

            <a href={p.github} target="_blank" rel="noopener noreferrer"
              style={{ position: "absolute", top: "1.5rem", right: "1.5rem",
                color: "hsl(16,100%,50%)" }}>
              <ExternalLink size={20} />
            </a>

            <h3 style={{ fontFamily: "Syne, sans-serif", fontSize: "1.5rem",
              fontWeight: 700, marginBottom: "1rem" }}>{p.title}</h3>
            <p style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.7,
              marginBottom: "1.5rem" }}>{p.description}</p>

            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {p.tech.map((t) => (
                <span key={t} style={{ fontSize: "0.75rem", padding: "0.25rem 0.75rem",
                  borderRadius: 999, background: "rgba(255,80,0,0.1)",
                  color: "rgba(255,80,0,0.8)", fontFamily: "monospace",
                  textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div style={{ textAlign: "center" }}>
        <a href="https://github.com/marvinsotuff" target="_blank" rel="noopener noreferrer"
          style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem",
            padding: "1rem 2rem", border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 999, textDecoration: "none", color: "white",
            fontWeight: 500, fontSize: "1.1rem" }}>
          <SiGithub size={20} /> See more on GitHub
        </a>
      </div>
    </div>
  );
}