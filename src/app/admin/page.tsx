"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function AdminDashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState("");
  const [admissions, setAdmissions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isLoggedIn) {
      fetch("/api/admissions")
        .then(res => res.json())
        .then(data => {
          setAdmissions(data);
          setLoading(false);
        })
        .catch(err => {
          console.error(err);
          setLoading(false);
        });
    }
  }, [isLoggedIn]);

  const stats = [
    { label: "Total Students", value: "1,240" },
    { label: "New Admissions", value: admissions.length.toString() },
    { label: "Course Inquiries", value: "12" },
    { label: "Active Teachers", value: "24" },
  ];

  if (!isLoggedIn) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#f3f4f6" }}>
        <div className="card" style={{ width: "100%", maxWidth: "400px", padding: "40px", textAlign: "center" }}>
          <h2 style={{ marginBottom: "20px" }}>Admin Login</h2>
          <p style={{ color: "var(--text-muted)", marginBottom: "30px" }}>Secure access to Suffah Digital portal</p>
          <input 
            type="password" 
            placeholder="Enter Admin Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid var(--border)", marginBottom: "20px", outline: "none" }}
          />
          <button 
            className="btn btn-primary" 
            style={{ width: "100%" }}
            onClick={() => {
              if (password === "admin123") setIsLoggedIn(true);
              else alert("Invalid password!");
            }}
          >
            Login to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#f9fafb" }}>
      {/* Sidebar */}
      <aside style={{ width: "260px", backgroundColor: "var(--primary)", color: "white", padding: "30px 20px" }}>
        <h2 style={{ color: "var(--accent)", marginBottom: "40px" }}>SD Admin</h2>
        <nav style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {["Dashboard", "Students", "Admissions", "Courses", "Blog Posts", "Settings"].map(item => (
            <div key={item} style={{ padding: "12px 15px", borderRadius: "8px", cursor: "pointer", backgroundColor: item === "Dashboard" ? "rgba(255,255,255,0.1)" : "transparent", transition: "all 0.3s" }}>
              {item}
            </div>
          ))}
          <div 
            onClick={() => setIsLoggedIn(false)}
            style={{ marginTop: "auto", padding: "12px 15px", color: "#fca5a5", cursor: "pointer" }}
          >
            Logout
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: "40px" }}>
        <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "40px" }}>
          <h1>Dashboard Overview</h1>
          <div style={{ display: "flex", gap: "15px" }}>
            <span style={{ color: "var(--text-muted)" }}>Welcome, Admin</span>
            <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", color: "var(--primary)" }}>A</div>
          </div>
        </header>

        {/* Stats Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px", marginBottom: "40px" }}>
          {stats.map(s => (
            <div key={s.label} className="card" style={{ padding: "20px" }}>
              <div style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: "5px" }}>{s.label}</div>
              <div style={{ fontSize: "1.8rem", fontWeight: 700, color: "var(--primary)" }}>{s.value}</div>
            </div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="card">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
            <h3 style={{ margin: 0 }}>Recent Admissions</h3>
            <button style={{ color: "var(--primary)", background: "none", fontWeight: 600 }}>View All</button>
          </div>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ textAlign: "left", borderBottom: "1px solid var(--border)" }}>
                <th style={{ padding: "15px 10px", color: "var(--text-muted)" }}>Student Name</th>
                <th style={{ padding: "15px 10px", color: "var(--text-muted)" }}>Course</th>
                <th style={{ padding: "15px 10px", color: "var(--text-muted)" }}>Date</th>
                <th style={{ padding: "15px 10px", color: "var(--text-muted)" }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr><td colSpan={4} style={{ padding: "20px", textAlign: "center" }}>Loading admissions...</td></tr>
              ) : admissions.length === 0 ? (
                <tr><td colSpan={4} style={{ padding: "20px", textAlign: "center" }}>No new admissions found.</td></tr>
              ) : (
                admissions.map((adm, i) => (
                  <tr key={adm.id} style={{ borderBottom: i === admissions.length - 1 ? "none" : "1px solid var(--border)" }}>
                    <td style={{ padding: "15px 10px", fontWeight: 500 }}>{adm.fullName}</td>
                    <td style={{ padding: "15px 10px" }}>{adm.course}</td>
                    <td style={{ padding: "15px 10px", color: "var(--text-muted)" }}>{new Date(adm.submittedAt).toLocaleDateString()}</td>
                    <td style={{ padding: "15px 10px" }}>
                      <span style={{ 
                        padding: "4px 12px", 
                        borderRadius: "50px", 
                        fontSize: "0.8rem", 
                        fontWeight: 600,
                        backgroundColor: adm.status === "Enrolled" ? "#d1fae5" : adm.status === "Pending" ? "#fee2e2" : "#fef3c7",
                        color: adm.status === "Enrolled" ? "#065f46" : adm.status === "Pending" ? "#991b1b" : "#92400e"
                      }}>
                        {adm.status}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
