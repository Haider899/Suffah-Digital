import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--primary)", color: "var(--white)", paddingTop: "60px", paddingBottom: "20px" }}>
      <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "40px", marginBottom: "40px" }}>
        
        {/* Brand */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <img 
              src="/logo.png" 
              alt="Suffah Digital Logo" 
              style={{ width: "50px", height: "50px", borderRadius: "8px", objectFit: "cover", border: "1px solid rgba(255,255,255,0.2)" }} 
            />
            <h3 style={{ color: "var(--accent)", margin: 0, fontSize: "1.8rem" }}>Suffah Digital</h3>
          </div>
          <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: "20px" }}>
            Dedicated to providing the best online Quranic education with qualified scholars and interactive learning methods.
          </p>
          <div style={{ display: "flex", gap: "15px" }}>
            {/* Social Icons Placeholders */}
            <a href="#" style={{ width: "36px", height: "36px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.3s" }} className="social-icon">fb</a>
            <a href="#" style={{ width: "36px", height: "36px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.3s" }} className="social-icon">tw</a>
            <a href="#" style={{ width: "36px", height: "36px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.3s" }} className="social-icon">ig</a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ color: "var(--white)", marginBottom: "20px", fontSize: "1.2rem" }}>Quick Links</h4>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", padding: 0 }}>
            <li><Link href="/about" style={{ color: "rgba(255,255,255,0.8)" }}>About Us</Link></li>
            <li><Link href="/courses" style={{ color: "rgba(255,255,255,0.8)" }}>Our Courses</Link></li>
            <li><Link href="/admission" style={{ color: "rgba(255,255,255,0.8)" }}>Online Admission</Link></li>
            <li><Link href="/blog" style={{ color: "rgba(255,255,255,0.8)" }}>Blog & Updates</Link></li>
            <li><Link href="/contact" style={{ color: "rgba(255,255,255,0.8)" }}>Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 style={{ color: "var(--white)", marginBottom: "20px", fontSize: "1.2rem" }}>Contact Us</h4>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "15px", padding: 0, color: "rgba(255,255,255,0.8)" }}>
            <li style={{ display: "flex", gap: "10px", alignItems: "start" }}>
              <span style={{ color: "var(--accent)" }}>📍</span>
              <span>123 Islamic Center Road, City, Country</span>
            </li>
            <li style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <span style={{ color: "var(--accent)" }}>📞</span>
              <span>+92 349 6000899</span>
            </li>
            <li style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <span style={{ color: "var(--accent)" }}>✉️</span>
              <span>info@suffahdigital.com</span>
            </li>
          </ul>
        </div>
        
      </div>
      
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "20px", textAlign: "center", color: "rgba(255,255,255,0.6)", fontSize: "0.9rem" }}>
        <p>&copy; {new Date().getFullYear()} Suffah Digital. All rights reserved.</p>
      </div>
    </footer>
  );
}
