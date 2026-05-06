import Link from "next/link";
import WhatsAppButton from "@/components/WhatsAppButton";

const courses = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--primary)" }}>
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
      </svg>
    ),
    title: "Quran Recitation (Tajweed)",
    level: "Beginner to Advanced",
    duration: "3–12 months",
    price: "Rs. 3,000/month",
    desc: "Master the rules of Tajweed for beautiful, accurate Quran recitation. Covers Makharij, Sifaat, and all Tajweed rules.",
    highlights: ["One-on-one sessions","Certified Tajweed instructors","Progress tracking","Certificate upon completion"],
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--primary)" }}>
        <path d="M22 10v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10"></path>
        <path d="M2 10L12 2l10 8"></path>
        <path d="M12 22V12"></path>
      </svg>
    ),
    title: "Hifz Al-Quran (Memorization)",
    level: "Intermediate",
    duration: "2–5 years",
    price: "Rs. 5,000/month",
    desc: "A structured Quran memorization program with daily revision sessions and accountability partners.",
    highlights: ["Daily revision schedule","Dedicated Hifz teacher","Parent progress reports","Ijazah upon completion"],
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--primary)" }}>
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
      </svg>
    ),
    title: "Islamic Studies",
    level: "All Levels",
    duration: "Ongoing",
    price: "Rs. 2,500/month",
    desc: "Comprehensive curriculum covering Aqeedah, Fiqh, Hadith, Seerah, and Islamic ethics for holistic Islamic knowledge.",
    highlights: ["Structured curriculum","Weekly classes","Interactive Q&A sessions","Study materials included"],
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--primary)" }}>
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
      </svg>
    ),
    title: "Arabic Language",
    level: "Beginner to Advanced",
    duration: "6–18 months",
    price: "Rs. 3,500/month",
    desc: "Learn Modern Standard Arabic and Classical Arabic (Fusha) to read, understand, and converse in Arabic.",
    highlights: ["Grammar & vocabulary","Conversational Arabic","Quranic Arabic focus","Native Arabic teachers"],
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--primary)" }}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
    title: "Kids Quran Program",
    level: "Ages 4–12",
    duration: "Ongoing",
    price: "Rs. 2,000/month",
    desc: "Fun, engaging, and age-appropriate Quran education for young learners through games, stories, and interactive activities.",
    highlights: ["Gamified learning","Patience-focused teachers","Short sessions (25 min)","Monthly parent reports"],
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--primary)" }}>
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
        <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
      </svg>
    ),
    title: "Advanced Islamic Studies",
    level: "Advanced",
    duration: "2–4 years",
    price: "Rs. 7,000/month",
    desc: "In-depth scholarship for serious students covering Tafseer, Usool al-Fiqh, Mustalah al-Hadith, and more.",
    highlights: ["Advanced curriculum","Direct scholar access","Research projects","Ijazah chain transmission"],
  },
];

export default function CoursesPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg, var(--primary) 0%, #065f46 100%)", padding: "80px 0", textAlign: "center", color: "var(--white)" }}>
        <div className="container">
          <h1 style={{ fontSize: "3rem", color: "var(--white)", marginBottom: "15px" }}>Our Courses</h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
            Explore our comprehensive range of Islamic education programs taught by certified scholars.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "30px" }}>
            {courses.map((c) => (
              <div key={c.title} className="card" style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "20px" }}>
                  <div>{c.icon}</div>
                  <div>
                    <h3 style={{ fontSize: "1.2rem", marginBottom: "4px" }}>{c.title}</h3>
                    <span style={{ backgroundColor: "#d1fae5", color: "var(--primary)", padding: "3px 10px", borderRadius: "50px", fontSize: "0.8rem", fontWeight: 600 }}>{c.level}</span>
                  </div>
                </div>
                <p style={{ color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "20px" }}>{c.desc}</p>
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "8px", marginBottom: "25px" }}>
                  {c.highlights.map((h) => (
                    <li key={h} style={{ display: "flex", gap: "8px", alignItems: "center", color: "var(--text-muted)", fontSize: "0.9rem" }}>
                      <span style={{ color: "var(--primary-light)" }}>✓</span> {h}
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: "auto", display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid var(--border)", paddingTop: "20px" }}>
                  <div>
                    <div style={{ color: "var(--primary)", fontWeight: 700, fontSize: "1.3rem" }}>{c.price}</div>
                    <div style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>Duration: {c.duration}</div>
                  </div>
                  <Link href="/admission" className="btn btn-primary" style={{ padding: "10px 20px", fontSize: "0.9rem" }}>Enroll Now</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#f0fdf4", padding: "60px 0", textAlign: "center" }}>
        <div className="container">
          <h2 style={{ color: "var(--primary)", marginBottom: "15px", fontSize: "2rem" }}>Not Sure Which Course Is Right for You?</h2>
          <p style={{ color: "var(--text-muted)", marginBottom: "30px" }}>Book a free consultation with our academic advisors and we will guide you to the best program.</p>
          <Link href="/contact" className="btn btn-primary">Get Free Consultation</Link>
        </div>
      </section>
      <WhatsAppButton />
    </>
  );
}
