import Link from "next/link";
import WhatsAppButton from "@/components/WhatsAppButton";

const features = [
  { 
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
      </svg>
    ), 
    title: "Quran Recitation (Tajweed)", 
    desc: "Learn the correct pronunciation and rules of Quranic recitation from certified scholars." 
  },
  { 
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
        <path d="M22 10v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10"></path>
        <path d="M2 10L12 2l10 8"></path>
        <path d="M12 22V12"></path>
      </svg>
    ), 
    title: "Hifz Al-Quran", 
    desc: "Memorize the Holy Quran with our structured and supportive memorization program." 
  },
  { 
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
      </svg>
    ), 
    title: "Islamic Studies", 
    desc: "Comprehensive Islamic education covering Fiqh, Hadith, Aqeedah, and Seerah." 
  },
  { 
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
      </svg>
    ), 
    title: "Arabic Language", 
    desc: "Master Modern Standard Arabic and Classical Arabic for deeper Quranic understanding." 
  },
  { 
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ), 
    title: "Kids Program", 
    desc: "Fun, interactive lessons specifically designed for young learners aged 4–12." 
  },
  { 
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
        <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
      </svg>
    ), 
    title: "Advanced Studies", 
    desc: "In-depth scholarship programs for serious students of Islamic knowledge." 
  },
];

const stats = [
  { value: "5,000+", label: "Students Enrolled" },
  { value: "50+", label: "Expert Scholars" },
  { value: "15+", label: "Years Experience" },
  { value: "30+", label: "Countries Served" },
];

const testimonials = [
  { name: "Ahmed Khan", location: "UK", text: "This academy transformed my relationship with the Quran. The teachers are incredibly patient and knowledgeable." },
  { name: "Fatima Al-Rashid", location: "UAE", text: "My children look forward to every class. The interactive teaching method makes learning fun and effective." },
  { name: "Yusuf Rahman", location: "USA", text: "I completed my Hifz journey here after years of struggle elsewhere. Highly recommended for every Muslim." },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section style={{
        background: "linear-gradient(135deg, var(--primary) 0%, #065f46 50%, #047857 100%)",
        color: "var(--white)",
        padding: "100px 0",
        position: "relative",
        overflow: "hidden"
      }}>
        {/* Decorative Background Elements */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          opacity: 1
        }} />
        
        <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
          <span style={{ 
            backgroundColor: "rgba(212, 175, 55, 0.2)", 
            color: "var(--accent)", 
            padding: "8px 20px", 
            borderRadius: "50px", 
            fontSize: "0.9rem", 
            fontWeight: 600, 
            letterSpacing: "2px",
            display: "inline-block",
            marginBottom: "20px",
            border: "1px solid rgba(212,175,55,0.3)"
          }}>
            بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
          </span>
          
          <h1 style={{ 
            fontSize: "clamp(2.5rem, 5vw, 4rem)", 
            color: "var(--white)", 
            marginBottom: "20px", 
            lineHeight: 1.2,
            fontFamily: "var(--font-heading)"
          }}>
            Begin Your Journey with the<br />
            <span style={{ color: "var(--accent)" }}>Holy Quran</span>
          </h1>
          
          <p style={{ 
            fontSize: "1.2rem", 
            color: "rgba(255,255,255,0.85)", 
            maxWidth: "600px", 
            margin: "0 auto 40px",
            lineHeight: 1.8
          }}>
            Learn Quran with Tajweed, Islamic Studies, and Arabic from certified scholars — online, from anywhere in the world.
          </p>
          
          <div style={{ display: "flex", gap: "15px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/admission" className="btn btn-accent" style={{ fontSize: "1.1rem", padding: "15px 35px" }}>
              Enroll Now 📝
            </Link>
            <Link href="/courses" className="btn" style={{ 
              fontSize: "1.1rem", 
              padding: "15px 35px", 
              backgroundColor: "rgba(255,255,255,0.1)", 
              color: "var(--white)",
              border: "1px solid rgba(255,255,255,0.3)"
            }}>
              View Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ backgroundColor: "var(--accent)", padding: "30px 0" }}>
        <div className="container grid-2-sm" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px", textAlign: "center" }}>
          {stats.map((s) => (
            <div key={s.label} className="stat-item">
              <div style={{ fontSize: "2.2rem", fontWeight: 700, color: "var(--primary)", fontFamily: "var(--font-heading)" }}>{s.value}</div>
              <div style={{ fontSize: "0.9rem", fontWeight: 500, color: "var(--primary)", opacity: 0.8 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Courses Preview */}
      <section className="section" style={{ backgroundColor: "var(--bg-color)" }}>
        <div className="container">
          <h2 className="section-title">Our Programs</h2>
          <p className="section-subtitle">Structured learning paths for every level — from beginners to advanced students</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "25px" }}>
            {features.map((f) => (
              <div key={f.title} className="card" style={{ textAlign: "center" }}>
                <div style={{ marginBottom: "20px", display: "flex", justifyContent: "center" }}>{f.icon}</div>
                <h3 style={{ fontSize: "1.3rem", marginBottom: "10px" }}>{f.title}</h3>
                <p style={{ color: "var(--text-muted)", lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Link href="/courses" className="btn btn-primary">View All Courses</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section" style={{ background: "linear-gradient(135deg, var(--primary) 0%, #065f46 100%)", color: "var(--white)" }}>
        <div className="container grid-1-md" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
          <div>
            <span style={{ color: "var(--accent)", fontWeight: 600, letterSpacing: "2px", fontSize: "0.9rem" }}>WHY CHOOSE US</span>
            <h2 style={{ color: "var(--white)", fontSize: "2.5rem", margin: "15px 0 25px", lineHeight: 1.3 }}>The Best Place to Learn Quran Online</h2>
            <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: "30px", lineHeight: 1.8 }}>
              We combine traditional Islamic scholarship with modern teaching techniques to deliver the most effective online Quranic education available.
            </p>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "15px" }}>
              {["One-on-one & group classes available","Flexible scheduling for all time zones","Female teachers available for sisters","Free trial class for new students","Progress tracking & certificates"].map((item) => (
                <li key={item} style={{ display: "flex", gap: "12px", alignItems: "center", color: "rgba(255,255,255,0.85)" }}>
                  <span style={{ color: "var(--accent)", fontSize: "1.2rem" }}>✓</span> {item}
                </li>
              ))}
            </ul>
            <Link href="/about" className="btn btn-accent" style={{ marginTop: "30px", display: "inline-flex" }}>Learn More About Us</Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
            {[
              { 
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                ), 
                title: "Flexible Hours", 
                desc: "Learn at your own pace, any time of the day" 
              },
              { 
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                ), 
                title: "Online Classes", 
                desc: "Join from anywhere in the world" 
              },
              { 
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                  </svg>
                ), 
                title: "Certificates", 
                desc: "Earn recognized completion certificates" 
              },
              { 
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                ), 
                title: "24/7 Support", 
                desc: "Always here to help you on your journey" 
              }
            ].map((item) => (
              <div key={item.title} style={{ backgroundColor: "rgba(255,255,255,0.08)", borderRadius: "12px", padding: "25px", border: "1px solid rgba(255,255,255,0.1)", textAlign: "center" }}>
                <div style={{ color: "var(--accent)", marginBottom: "15px", display: "flex", justifyContent: "center" }}>{item.icon}</div>
                <h4 style={{ color: "var(--accent)", marginBottom: "8px" }}>{item.title}</h4>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">What Our Students Say</h2>
          <p className="section-subtitle">Thousands of students around the world trust us with their Quranic education</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "25px" }}>
            {testimonials.map((t) => (
              <div key={t.name} className="card">
                <div style={{ color: "var(--accent)", fontSize: "2rem", marginBottom: "15px" }}>❝</div>
                <p style={{ color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "20px", fontStyle: "italic" }}>{t.text}</p>
                <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                  <div style={{ width: "45px", height: "45px", borderRadius: "50%", backgroundColor: "var(--primary)", color: "var(--white)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: "var(--primary)" }}>{t.name}</div>
                    <div style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>{t.location}</div>
                  </div>
                  <div style={{ marginLeft: "auto", color: "var(--accent)" }}>★★★★★</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ 
        background: "linear-gradient(135deg, var(--accent) 0%, #F59E0B 100%)", 
        padding: "70px 0", 
        textAlign: "center" 
      }}>
        <div className="container">
          <h2 style={{ color: "var(--primary)", fontSize: "2.5rem", marginBottom: "15px" }}>Start Your Free Trial Today</h2>
          <p style={{ color: "rgba(6,78,59,0.85)", fontSize: "1.1rem", marginBottom: "30px" }}>
            Book a free trial class and experience the difference of quality Islamic education
          </p>
          <Link href="/admission" className="btn btn-primary" style={{ fontSize: "1.1rem", padding: "15px 40px" }}>
            Register Now — It&apos;s Free
          </Link>
        </div>
      </section>

      <WhatsAppButton />
    </>
  );
}
