import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center",
      padding: "0 2rem", position: "relative", overflow: "hidden" }}>

      <div style={{ position: "absolute", top: "50%", left: "25%",
        width: 400, height: 400, borderRadius: "50%",
        background: "rgba(255,80,0,0.15)", filter: "blur(120px)",
        transform: "translate(-50%, -50%)", pointerEvents: "none" }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 900 }}>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{ color: "hsl(16,100%,50%)", fontFamily: "monospace",
            fontSize: "0.85rem", letterSpacing: "0.2em",
            textTransform: "uppercase", marginBottom: "1rem" }}>
          Developer / Designer / Creative
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ fontFamily: "Syne, sans-serif", fontWeight: 800,
            fontSize: "clamp(4rem, 12vw, 9rem)", lineHeight: 0.9,
            letterSpacing: "-0.03em", marginBottom: "2rem" }}>
          I AM<br />MARVIN<span style={{ color: "hsl(16,100%,50%)" }}>.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          style={{ color: "rgba(255,255,255,0.55)", fontSize: "1.15rem",
            maxWidth: 600, lineHeight: 1.7, marginBottom: "3rem",
            borderLeft: "2px solid rgba(255,80,0,0.4)", paddingLeft: "1.5rem" }}>
          I am a young individual with a curious mind dabbling in multiple
          fields of work, from design to development as well as real estate.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{ display: "flex", gap: "2rem", alignItems: "center" }}>

          <Link href="/projects" style={{
            display: "inline-flex", alignItems: "center", gap: "0.75rem",
            background: "hsl(16,100%,50%)", color: "#000",
            padding: "1rem 2rem", borderRadius: 999,
            fontWeight: 600, textDecoration: "none"
          }}>
            View My Work <ArrowRight size={18} />
          </Link>

          <Link href="/about" style={{
            color: "rgba(255,255,255,0.55)", textDecoration: "none", fontWeight: 500
          }}>
            More about me
          </Link>
        </motion.div>

      </div>
    </div>
  );
}