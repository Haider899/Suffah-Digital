import WhatsAppButton from "@/components/WhatsAppButton";

const team = [
  { name: "Sheikh Abdullah Al-Azhari", role: "Head Scholar & Founder", bio: "Hafiz with Sanad through 10 Qira'at, 20+ years of teaching experience." },
  { name: "Ustadha Maryam Siddiqui", role: "Lead Female Instructor", bio: "Specialized in teaching children and sisters with a passion for Tajweed." },
  { name: "Sheikh Ibrahim Khalil", role: "Arabic Language Director", bio: "PhD in Arabic Linguistics, expert in Classical and Modern Standard Arabic." },
  { name: "Ustadh Hasan Al-Tunisi", role: "Hifz Program Director", bio: "Memorized the Quran at age 12, certified to grant Ijazah to students." },
];

const values = [
  { icon: "🕌", title: "Authentic Scholarship", desc: "Our teachers hold verified Ijazahs with unbroken chains of transmission." },
  { icon: "❤️", title: "Compassionate Teaching", desc: "We believe in patience, encouragement, and building love for the Quran." },
  { icon: "🌍", title: "Global Accessibility", desc: "Breaking geographical barriers to bring quality education to every Muslim." },
  { icon: "🛡️", title: "Safe Environment", desc: "A secure, respectful, and Islamic-values-centered environment for all." },
];

export default function AboutPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg, var(--primary) 0%, #065f46 100%)", padding: "80px 0", textAlign: "center", color: "var(--white)" }}>
        <div className="container">
          <h1 style={{ fontSize: "3rem", color: "var(--white)", marginBottom: "15px" }}>About Us</h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
            Learn about our mission, our scholars, and why thousands trust us with their Islamic education.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-1-md" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
            <div>
              <span style={{ color: "var(--primary)", fontWeight: 600, letterSpacing: "2px", fontSize: "0.9rem" }}>OUR STORY</span>
              <h2 style={{ fontSize: "2.2rem", margin: "15px 0 20px" }}>Dedicated to Spreading Quranic Knowledge</h2>
              <p style={{ color: "var(--text-muted)", lineHeight: 1.9, marginBottom: "20px" }}>
                Founded over 15 years ago by a group of passionate Islamic scholars, Suffah Digital was established with a single mission: to make authentic Quranic education accessible to every Muslim, regardless of location.
              </p>
              <p style={{ color: "var(--text-muted)", lineHeight: 1.9 }}>
                What began as a small local institution has grown into a global online academy serving students in over 30 countries. We combine traditional scholarship with modern technology.
              </p>
            </div>
            <div style={{ background: "linear-gradient(135deg, var(--primary) 0%, #065f46 100%)", borderRadius: "20px", padding: "50px", textAlign: "center", color: "var(--white)" }}>
              <div style={{ fontSize: "4rem", marginBottom: "20px" }}>🕌</div>
              <blockquote style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", color: "var(--accent)", lineHeight: 1.6, fontStyle: "italic" }}>
                &ldquo;The best among you are those who learn the Quran and teach it.&rdquo;
              </blockquote>
              <cite style={{ color: "rgba(255,255,255,0.7)", marginTop: "15px", display: "block" }}>— Prophet Muhammad ﷺ (Bukhari)</cite>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: "#f0fdf4" }}>
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <p className="section-subtitle">The principles that guide everything we do</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "25px" }}>
            {values.map((v) => (
              <div key={v.title} className="card" style={{ textAlign: "center" }}>
                <div style={{ fontSize: "3rem", marginBottom: "15px" }}>{v.icon}</div>
                <h3 style={{ marginBottom: "12px" }}>{v.title}</h3>
                <p style={{ color: "var(--text-muted)" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Meet Our Scholars</h2>
          <p className="section-subtitle">Learn from qualified, certified Islamic scholars worldwide</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "25px" }}>
            {team.map((t) => (
              <div key={t.name} className="card" style={{ textAlign: "center" }}>
                <div style={{ width: "80px", height: "80px", borderRadius: "50%", background: "linear-gradient(135deg, var(--primary), var(--primary-light))", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--white)", fontSize: "2rem", fontWeight: 700, margin: "0 auto 20px" }}>
                  {t.name[0]}
                </div>
                <h3 style={{ marginBottom: "6px", fontSize: "1.1rem" }}>{t.name}</h3>
                <span style={{ color: "var(--accent)", fontWeight: 600, fontSize: "0.9rem" }}>{t.role}</span>
                <p style={{ color: "var(--text-muted)", marginTop: "12px", fontSize: "0.95rem" }}>{t.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <WhatsAppButton />
    </>
  );
}
