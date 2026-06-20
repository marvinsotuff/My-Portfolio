import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contacts", label: "Contacts" },
];

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header style={{
      position: "fixed", top: 0, width: "100%", zIndex: 50,
      background: scrolled ? "rgba(10,10,10,0.85)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      padding: "1.25rem 2rem",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "none",
      transition: "all 0.3s ease"
    }}>
      <Link href="/" style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "1.5rem", textDecoration: "none", color: "white" }}>
        MARVIN<span style={{ color: "hsl(16,100%,50%)" }}>.</span>
      </Link>

      <nav style={{ display: "flex", gap: "2rem" }}>
        {links.map((link) => (
          <Link key={link.href} href={link.href} style={{
            color: location === link.href ? "hsl(16,100%,50%)" : "rgba(255,255,255,0.55)",
            textTransform: "uppercase", fontSize: "0.85rem",
            fontWeight: 500, letterSpacing: "0.1em",
            textDecoration: "none", transition: "color 0.2s"
          }}>
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}