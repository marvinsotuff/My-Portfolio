import { motion } from "framer-motion";

const skills = ["UI Design", "Poster Creation", "Social Media Marketing", "HTML", "CSS", "JavaScript", "React"];
const hobbies = ["Gaming", "Creating Posters", "Video Editing"];

function Tag({ label, delay }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay }}
      style={{
        padding: "0.5rem 1rem", borderRadius: 999,
        border: "1px solid rgba(255,255,255,0.1)",
        fontSize: "0.875rem", fontWeight: 500,
        display: "inline-block"
      }}>
      {label}
    </motion.span>
  );
}

export default function About() {
  return (
    <div style={{ padding: "8rem 2rem 4rem", maxWidth: 1100, margin: "0 auto" }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(3rem,8vw,5rem)",
          fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "0.5rem" }}>
          ABOUT ME<span style={{ color: "hsl(16,100%,50%)" }}>.</span>
        </h1>
        <div style={{ height: 4, width: 96, background: "hsl(16,100%,50%)", marginBottom: "4rem" }} />
      </motion.div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem" }}>

        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.8,
            fontSize: "1.05rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <p>
            I graduated from high school with a passion for tech. This prompted me to join
            Moringa School, where I did a foundation course in Software Engineering. This course
            equipped me with the basic skills to build web applications using HTML, CSS, and
            JavaScript. These skills were sharpened through various projects. After the foundation
            course, I enrolled in the Software Engineering boot camp at Moringa School which I
            went on to complete.
          </p>
          <p>
            I went to pursue a Bachelor's Degree in Computer Science at the Catholic University.
            Whilst on breaks from campus I also intern for Houswitch Haven real estate company.
            This has allowed me to expand my knowledge and networks. I aspire to learn more and
            do more as I carve out my own path.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>

          <div>
            <h3 style={{ fontFamily: "Syne, sans-serif", fontSize: "1.2rem",
              marginBottom: "1.25rem", fontWeight: 700 }}>Skills</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              {skills.map((s, i) => <Tag key={s} label={s} delay={0.5 + i * 0.05} />)}
            </div>
          </div>

          <div>
            <h3 style={{ fontFamily: "Syne, sans-serif", fontSize: "1.2rem",
              marginBottom: "1.25rem", fontWeight: 700 }}>Hobbies</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              {hobbies.map((h, i) => <Tag key={h} label={h} delay={0.7 + i * 0.05} />)}
            </div>
          </div>

        </motion.div>
      </div>
    </div>
  );
}