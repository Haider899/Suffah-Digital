"use client";
import { useState } from "react";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1200));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <>
      <section style={{ background: "linear-gradient(135deg, var(--primary) 0%, #065f46 100%)", padding: "80px 0", textAlign: "center", color: "var(--white)" }}>
        <div className="container">
          <h1 style={{ fontSize: "3rem", color: "var(--white)", marginBottom: "15px" }}>Contact Us</h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
            Have a question? We would love to hear from you. Send us a message and we will respond within 24 hours.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-1-md" style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "50px", alignItems: "start" }}>
            {/* Info Side */}
            <div>
              <h2 style={{ marginBottom: "30px" }}>Get in Touch</h2>
              {[
                { icon: "📍", label: "Address", value: "123 Islamic Center Road, City, Country" },
                { icon: "📞", label: "Phone", value: "+92 312 3456789" },
                { icon: "✉️", label: "Email", value: "info@quranacademy.com" },
                { icon: "🕐", label: "Office Hours", value: "Mon–Sat: 9am – 9pm GMT" },
              ].map(item => (
                <div key={item.label} style={{ display: "flex", gap: "16px", marginBottom: "25px", alignItems: "start" }}>
                  <div style={{ width: "45px", height: "45px", borderRadius: "10px", backgroundColor: "#d1fae5", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3rem", flexShrink: 0 }}>{item.icon}</div>
                  <div>
                    <div style={{ fontWeight: 600, color: "var(--primary)", marginBottom: "4px" }}>{item.label}</div>
                    <div style={{ color: "var(--text-muted)" }}>{item.value}</div>
                  </div>
                </div>
              ))}

              <div style={{ marginTop: "30px" }}>
                <h4 style={{ marginBottom: "15px" }}>Follow Us</h4>
                <div style={{ display: "flex", gap: "12px" }}>
                  {[
                    { name: "Facebook", icon: "f", color: "#1877F2", href: "#" },
                    { name: "Instagram", icon: "📷", color: "#E1306C", href: "#" },
                    { name: "YouTube", icon: "▶", color: "#FF0000", href: "#" },
                    { name: "Twitter", icon: "𝕏", color: "#1DA1F2", href: "#" },
                  ].map(s => (
                    <a key={s.name} href={s.href} title={s.name} style={{ width: "42px", height: "42px", borderRadius: "50%", backgroundColor: s.color, color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, textDecoration: "none", transition: "transform 0.3s", fontSize: "1rem" }}>
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card" style={{ padding: "40px" }}>
              {submitted ? (
                <div style={{ textAlign: "center", padding: "30px 0" }}>
                  <div style={{ fontSize: "4rem", marginBottom: "20px" }}>✅</div>
                  <h3 style={{ color: "var(--primary)", marginBottom: "10px" }}>Message Sent!</h3>
                  <p style={{ color: "var(--text-muted)" }}>JazakAllah Khair! We will get back to you within 24 hours, In sha&apos; Allah.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  <h3 style={{ marginBottom: "10px" }}>Send Us a Message</h3>
                  {[
                    { id: "name", label: "Your Name *", type: "text", placeholder: "Full name" },
                    { id: "email", label: "Email Address *", type: "email", placeholder: "your@email.com" },
                  ].map(field => (
                    <div key={field.id}>
                      <label htmlFor={field.id} style={{ display: "block", fontWeight: 600, marginBottom: "8px" }}>{field.label}</label>
                      <input id={field.id} name={field.id} type={field.type} required
                        value={formData[field.id as keyof typeof formData]} onChange={handleChange}
                        placeholder={field.placeholder}
                        style={{ width: "100%", padding: "12px 16px", border: "1px solid var(--border)", borderRadius: "8px", fontSize: "1rem", outline: "none" }} />
                    </div>
                  ))}
                  <div>
                    <label htmlFor="subject" style={{ display: "block", fontWeight: 600, marginBottom: "8px" }}>Subject *</label>
                    <select id="subject" name="subject" required value={formData.subject} onChange={handleChange}
                      style={{ width: "100%", padding: "12px 16px", border: "1px solid var(--border)", borderRadius: "8px", fontSize: "1rem", outline: "none", backgroundColor: "var(--white)" }}>
                      <option value="">Select a topic</option>
                      <option value="enrollment">Course Enrollment</option>
                      <option value="pricing">Pricing & Fees</option>
                      <option value="schedule">Class Schedule</option>
                      <option value="technical">Technical Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" style={{ display: "block", fontWeight: 600, marginBottom: "8px" }}>Message *</label>
                    <textarea id="message" name="message" required rows={5}
                      value={formData.message} onChange={handleChange}
                      placeholder="Write your message here..."
                      style={{ width: "100%", padding: "12px 16px", border: "1px solid var(--border)", borderRadius: "8px", fontSize: "1rem", outline: "none", resize: "vertical", fontFamily: "var(--font-body)" }} />
                  </div>
                  <button type="submit" disabled={loading} className="btn btn-primary" style={{ width: "100%", padding: "15px", fontSize: "1rem", justifyContent: "center" }}>
                    {loading ? "Sending..." : "Send Message ✉️"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
      <WhatsAppButton />
    </>
  );
}
