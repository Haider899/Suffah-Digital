import Link from "next/link";
import WhatsAppButton from "@/components/WhatsAppButton";

const posts = [
  {
    slug: "benefits-of-learning-tajweed",
    category: "Tajweed",
    date: "May 1, 2025",
    readTime: "5 min read",
    title: "10 Profound Benefits of Learning Tajweed",
    excerpt: "Tajweed is not just about pronunciation — it is about connecting with the Divine. Discover the spiritual and practical benefits of mastering the art of Quranic recitation.",
  },
  {
    slug: "tips-for-quran-memorization",
    category: "Hifz",
    date: "April 22, 2025",
    readTime: "7 min read",
    title: "Proven Tips to Accelerate Your Quran Memorization",
    excerpt: "Struggling to retain what you memorize? Our Hifz teachers share the most effective techniques used by successful huffaz around the world.",
  },
  {
    slug: "teaching-kids-quran-at-home",
    category: "Parenting",
    date: "April 15, 2025",
    readTime: "6 min read",
    title: "How to Teach Your Kids to Love the Quran at Home",
    excerpt: "Creating a Quran-loving environment at home is easier than you think. Here are practical, tested strategies every Muslim parent can implement today.",
  },
  {
    slug: "arabic-for-quran-understanding",
    category: "Arabic",
    date: "April 5, 2025",
    readTime: "8 min read",
    title: "Why Learning Arabic Will Transform Your Quran Experience",
    excerpt: "Translations can never fully capture the beauty of Allah's words. Learn how understanding Classical Arabic deepens your connection with the Quran.",
  },
  {
    slug: "online-quran-learning-guide",
    category: "Tips",
    date: "March 28, 2025",
    readTime: "5 min read",
    title: "The Ultimate Guide to Online Quran Learning in 2025",
    excerpt: "Online Quran education has evolved dramatically. This comprehensive guide walks you through everything you need to know to get started effectively.",
  },
  {
    slug: "importance-of-seerah",
    category: "Islamic Studies",
    date: "March 20, 2025",
    readTime: "6 min read",
    title: "Why Studying the Seerah Is Essential for Every Muslim",
    excerpt: "The life of the Prophet ﷺ is the most complete and practical guide to living as a Muslim. Discover why Seerah study is an obligation, not an option.",
  },
];

const categories = ["All", "Tajweed", "Hifz", "Arabic", "Parenting", "Tips", "Islamic Studies"];
const categoryColors: Record<string, string> = {
  Tajweed: "#d1fae5", Hifz: "#fef3c7", Arabic: "#dbeafe",
  Parenting: "#fce7f3", Tips: "#ede9fe", "Islamic Studies": "#ffedd5",
};

export default function BlogPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg, var(--primary) 0%, #065f46 100%)", padding: "80px 0", textAlign: "center", color: "var(--white)" }}>
        <div className="container">
          <h1 style={{ fontSize: "3rem", color: "var(--white)", marginBottom: "15px" }}>Blog & Updates</h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
            Islamic insights, Quran tips, and academy news — to guide and inspire your learning journey.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Category Filter */}
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center", marginBottom: "50px" }}>
            {categories.map(cat => (
              <span key={cat} style={{
                padding: "8px 20px", borderRadius: "50px", cursor: "pointer", fontWeight: 500, fontSize: "0.9rem",
                backgroundColor: cat === "All" ? "var(--primary)" : "var(--white)",
                color: cat === "All" ? "var(--white)" : "var(--text-muted)",
                border: "1px solid var(--border)",
                transition: "all 0.3s"
              }}>
                {cat}
              </span>
            ))}
          </div>

          {/* Blog Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "30px" }}>
            {posts.map(post => (
              <article key={post.slug} className="card" style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ marginBottom: "15px" }}>
                  <span style={{
                    backgroundColor: categoryColors[post.category] || "#f3f4f6",
                    color: "var(--primary)", padding: "4px 12px", borderRadius: "50px",
                    fontSize: "0.8rem", fontWeight: 600
                  }}>{post.category}</span>
                </div>
                <h2 style={{ fontSize: "1.2rem", marginBottom: "12px", lineHeight: 1.5 }}>
                  <Link href={`/blog/${post.slug}`} style={{ color: "var(--primary)", textDecoration: "none" }}>
                    {post.title}
                  </Link>
                </h2>
                <p style={{ color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "20px", flex: 1 }}>{post.excerpt}</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid var(--border)", paddingTop: "15px", marginTop: "auto" }}>
                  <span style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>{post.date}</span>
                  <span style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>{post.readTime}</span>
                </div>
              </article>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "50px" }}>
            <button className="btn btn-primary">Load More Articles</button>
          </div>
        </div>
      </section>
      <WhatsAppButton />
    </>
  );
}
