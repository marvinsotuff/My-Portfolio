import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { SiGithub } from "react-icons/si";

export default function Contacts() {
  return (
    <div style={{ padding: "8rem 2rem", minHeight: "100vh",
      display: "flex", flexDirection: "column", justifyContent: "center",
      maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(3rem,10vw,7rem)",
          fontWeight: 800, letterSpacing: "-0.03em",
          textTransform: "uppercase", marginBottom: "1.5rem" }}>
          Where to<br />find me<span style={{ color: "hsl(16,100%,50%)" }}>.</span>
        </h1>
        <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "1.1rem",
          maxWidth: 560, margin: "0 auto 4rem" }}>
          Whether you have a project in mind or just want to say hi — my inbox is always open.
        </p>
      </motion.div>

      <div style={{ display: "flex", gap: "2rem", justifyContent: "center", flexWrap: "wrap" }}>

        <motion.a href="mailto:kiokomarvin7@gmail.com"
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          style={{ display: "flex", alignItems: "center", gap: "1.5rem",
            padding: "2rem", borderRadius: 16, textDecoration: "none", color: "white",
            border: "1px solid rgba(255,255,255,0.08)",
            background: "rgba(255,255,255,0.04)", position: "relative", minWidth: 300 }}>
          <div style={{ width: 56, height: 56, borderRadius: "50%",
            background: "rgba(255,80,0,0.12)", display: "flex",
            alignItems: "center", justifyContent: "center", color: "hsl(16,100%,50%)" }}>
            <Mail size={24} />
          </div>
          <div style={{ textAlign: "left" }}>
            <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)",
              letterSpacing: "0.15em", textTransform: "uppercase",
              marginBottom: "0.25rem", fontFamily: "monospace" }}>Email</div>
            <div style={{ fontSize: "1.15rem", fontWeight: 500 }}>kiokomarvin7@gmail.com</div>
          </div>
          <ArrowUpRight style={{ position: "absolute", top: "1.5rem", right: "1.5rem",
            color: "hsl(16,100%,50%)" }} />
        </motion.a>

        <motion.a href="https://github.com/marvinsotuff" target="_blank" rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          style={{ display: "flex", alignItems: "center", gap: "1.5rem",
            padding: "2rem", borderRadius: 16, textDecoration: "none", color: "white",
            border: "1px solid rgba(255,255,255,0.08)",
            background: "rgba(255,255,255,0.04)", position: "relative", minWidth: 300 }}>
          <div style={{ width: 56, height: 56, borderRadius: "50%",
            background: "rgba(255,80,0,0.12)", display: "flex",
            alignItems: "center", justifyContent: "center", color: "hsl(16,100%,50%)" }}>
            <SiGithub size={24} />
          </div>
          <div style={{ textAlign: "left" }}>
            <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)",
              letterSpacing: "0.15em", textTransform: "uppercase",
              marginBottom: "0.25rem", fontFamily: "monospace" }}>GitHub</div>
            <div style={{ fontSize: "1.15rem", fontWeight: 500 }}>@marvinsotuff</div>
          </div>
          <ArrowUpRight style={{ position: "absolute", top: "1.5rem", right: "1.5rem",
            color: "hsl(16,100%,50%)" }} />
        </motion.a>

      </div>
    </div>
  );
}