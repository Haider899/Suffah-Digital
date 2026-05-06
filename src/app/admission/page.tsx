"use client";
import { useState } from "react";
import WhatsAppButton from "@/components/WhatsAppButton";

const courses = [
  "Quran Recitation (Tajweed)",
  "Hifz Al-Quran (Memorization)",
  "Islamic Studies",
  "Arabic Language",
  "Kids Quran Program",
  "Advanced Islamic Studies",
];

export default function AdmissionPage() {
  const [formData, setFormData] = useState({
    fullName: "", email: "", phone: "", country: "",
    age: "", gender: "", course: "", level: "",
    schedule: "", message: "", agreed: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement;
    setFormData(prev => ({
      ...prev,
      [target.name]: target.type === "checkbox" ? target.checked : target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch("/api/admission", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Error submitting form. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", padding: "40px 20px", textAlign: "center" }}>
        <div style={{ fontSize: "5rem", marginBottom: "20px" }}>✅</div>
        <h2 style={{ color: "var(--primary)", fontSize: "2rem", marginBottom: "15px" }}>Application Submitted!</h2>
        <p style={{ color: "var(--text-muted)", maxWidth: "500px", lineHeight: 1.8 }}>
          JazakAllah Khair! Your application has been received. Our team will contact you within 24–48 hours to confirm your enrollment and schedule your first class.
        </p>
        <div style={{ marginTop: "30px", padding: "20px", backgroundColor: "#d1fae5", borderRadius: "12px", maxWidth: "400px" }}>
          <p style={{ color: "var(--primary)", fontWeight: 600 }}>📞 For urgent inquiries, WhatsApp us directly:</p>
          <p style={{ color: "var(--primary)", marginTop: "8px" }}>+92 312 3456789</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <section style={{ background: "linear-gradient(135deg, var(--primary) 0%, #065f46 100%)", padding: "80px 0", textAlign: "center", color: "var(--white)" }}>
        <div className="container">
          <h1 style={{ fontSize: "3rem", color: "var(--white)", marginBottom: "15px" }}>Online Admission</h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
            Fill in the form below to register. Your first trial class is completely free!
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: "800px" }}>
          <div className="card" style={{ padding: "40px" }}>
            <h2 style={{ marginBottom: "30px", textAlign: "center" }}>Registration Form</h2>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              
              <div className="grid-1-sm" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                <div>
                  <label htmlFor="fullName" style={{ display: "block", fontWeight: 600, marginBottom: "8px", color: "var(--text-main)" }}>Full Name *</label>
                  <input id="fullName" name="fullName" type="text" required value={formData.fullName} onChange={handleChange}
                    placeholder="Enter your full name"
                    style={{ width: "100%", padding: "12px 16px", border: "1px solid var(--border)", borderRadius: "8px", fontSize: "1rem", outline: "none", transition: "border 0.3s" }} />
                </div>
                <div>
                  <label htmlFor="email" style={{ display: "block", fontWeight: 600, marginBottom: "8px", color: "var(--text-main)" }}>Email Address *</label>
                  <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange}
                    placeholder="your@email.com"
                    style={{ width: "100%", padding: "12px 16px", border: "1px solid var(--border)", borderRadius: "8px", fontSize: "1rem", outline: "none" }} />
                </div>
              </div>

              <div className="grid-1-sm" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                <div>
                  <label htmlFor="phone" style={{ display: "block", fontWeight: 600, marginBottom: "8px" }}>Phone / WhatsApp *</label>
                  <input id="phone" name="phone" type="tel" required value={formData.phone} onChange={handleChange}
                    placeholder="+92 312 3456789"
                    style={{ width: "100%", padding: "12px 16px", border: "1px solid var(--border)", borderRadius: "8px", fontSize: "1rem", outline: "none" }} />
                </div>
                <div>
                  <label htmlFor="country" style={{ display: "block", fontWeight: 600, marginBottom: "8px" }}>Country *</label>
                  <input id="country" name="country" type="text" required value={formData.country} onChange={handleChange}
                    placeholder="Your country"
                    style={{ width: "100%", padding: "12px 16px", border: "1px solid var(--border)", borderRadius: "8px", fontSize: "1rem", outline: "none" }} />
                </div>
              </div>

              <div className="grid-1-sm" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "20px" }}>
                <div>
                  <label htmlFor="age" style={{ display: "block", fontWeight: 600, marginBottom: "8px" }}>Age *</label>
                  <input id="age" name="age" type="number" required value={formData.age} onChange={handleChange} min="4" max="80"
                    placeholder="Age"
                    style={{ width: "100%", padding: "12px 16px", border: "1px solid var(--border)", borderRadius: "8px", fontSize: "1rem", outline: "none" }} />
                </div>
                <div>
                  <label htmlFor="gender" style={{ display: "block", fontWeight: 600, marginBottom: "8px" }}>Gender *</label>
                  <select id="gender" name="gender" required value={formData.gender} onChange={handleChange}
                    style={{ width: "100%", padding: "12px 16px", border: "1px solid var(--border)", borderRadius: "8px", fontSize: "1rem", outline: "none", backgroundColor: "var(--white)" }}>
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="level" style={{ display: "block", fontWeight: 600, marginBottom: "8px" }}>Current Level</label>
                  <select id="level" name="level" value={formData.level} onChange={handleChange}
                    style={{ width: "100%", padding: "12px 16px", border: "1px solid var(--border)", borderRadius: "8px", fontSize: "1rem", outline: "none", backgroundColor: "var(--white)" }}>
                    <option value="">Select</option>
                    <option value="complete-beginner">Complete Beginner</option>
                    <option value="can-read-arabic">Can Read Arabic</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="course" style={{ display: "block", fontWeight: 600, marginBottom: "8px" }}>Course Interested In *</label>
                <select id="course" name="course" required value={formData.course} onChange={handleChange}
                  style={{ width: "100%", padding: "12px 16px", border: "1px solid var(--border)", borderRadius: "8px", fontSize: "1rem", outline: "none", backgroundColor: "var(--white)" }}>
                  <option value="">Select a course</option>
                  {courses.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>

              <div>
                <label htmlFor="schedule" style={{ display: "block", fontWeight: 600, marginBottom: "8px" }}>Preferred Schedule</label>
                <select id="schedule" name="schedule" value={formData.schedule} onChange={handleChange}
                  style={{ width: "100%", padding: "12px 16px", border: "1px solid var(--border)", borderRadius: "8px", fontSize: "1rem", outline: "none", backgroundColor: "var(--white)" }}>
                  <option value="">Select time preference</option>
                  <option value="morning">Morning (6am – 12pm GMT)</option>
                  <option value="afternoon">Afternoon (12pm – 6pm GMT)</option>
                  <option value="evening">Evening (6pm – 12am GMT)</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" style={{ display: "block", fontWeight: 600, marginBottom: "8px" }}>Additional Notes</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange}
                  rows={4} placeholder="Any special requirements, questions or notes..."
                  style={{ width: "100%", padding: "12px 16px", border: "1px solid var(--border)", borderRadius: "8px", fontSize: "1rem", outline: "none", resize: "vertical", fontFamily: "var(--font-body)" }} />
              </div>

              <div style={{ display: "flex", gap: "12px", alignItems: "start" }}>
                <input id="agreed" name="agreed" type="checkbox" required checked={formData.agreed} onChange={handleChange} style={{ marginTop: "3px", width: "18px", height: "18px", accentColor: "var(--primary)" }} />
                <label htmlFor="agreed" style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.6 }}>
                  I agree to the terms and conditions of Suffah Digital and consent to being contacted regarding my enrollment.
                </label>
              </div>

              <button type="submit" disabled={loading} className="btn btn-primary" style={{ width: "100%", padding: "16px", fontSize: "1.1rem", justifyContent: "center" }}>
                {loading ? "Submitting..." : "Submit Application — Free Trial 🎓"}
              </button>
            </form>
          </div>
        </div>
      </section>
      <WhatsAppButton />
    </>
  );
}
