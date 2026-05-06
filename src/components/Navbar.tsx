"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Admission", path: "/admission" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header style={{ backgroundColor: "var(--white)", boxShadow: "0 2px 10px rgba(0,0,0,0.05)", position: "sticky", top: 0, zIndex: 100 }}>
      <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "15px 20px" }}>
        
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <img 
              src="/logo.png" 
              alt="Suffah Digital Logo" 
              style={{ width: "45px", height: "45px", borderRadius: "8px", objectFit: "cover" }} 
            />
            <h2 style={{ margin: 0, color: "var(--primary)", fontSize: "1.5rem", letterSpacing: "0.5px" }}>Suffah Digital</h2>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", gap: "30px" }} className="desktop-nav">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link 
                key={link.name} 
                href={link.path}
                style={{ 
                  fontWeight: 500, 
                  color: isActive ? "var(--primary)" : "var(--text-muted)",
                  borderBottom: isActive ? "2px solid var(--accent)" : "2px solid transparent",
                  paddingBottom: "4px"
                }}
              >
                {link.name}
              </Link>
            )
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="desktop-nav">
          <Link href="/admission" className="btn btn-accent">Apply Now</Link>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} style={{ background: "none", fontSize: "1.5rem", color: "var(--primary)" }}>
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div style={{ padding: "20px", backgroundColor: "var(--white)", borderTop: "1px solid var(--border)", display: "flex", flexDirection: "column", gap: "15px" }}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.path}
              onClick={() => setIsOpen(false)}
              style={{ 
                fontWeight: 500, 
                color: pathname === link.path ? "var(--primary)" : "var(--text-muted)",
                fontSize: "1.1rem"
              }}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/admission" className="btn btn-accent" style={{ marginTop: "10px", width: "100%" }} onClick={() => setIsOpen(false)}>
            Apply Now
          </Link>
        </div>
      )}
    </header>
  );
}
