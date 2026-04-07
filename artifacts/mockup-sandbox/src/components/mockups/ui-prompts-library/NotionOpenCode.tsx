import React, { useState } from "react";
import { Search, Plus, Settings, BookOpen, Code, PenTool, Lightbulb, Microscope, Copy, Check, ChevronDown } from "lucide-react";

interface Prompt {
  id: string;
  num: string;
  title: string;
  elements: string[];
  category: string;
  style: string;
  attrs: { label: string; value: number; dotColor: string }[];
  tags: string[];
}

const PROMPTS: Prompt[] = [
  {
    id: "1", num: "001",
    title: "React Component Generator",
    elements: ["Functional component", "TypeScript types", "Tailwind CSS styling", "Custom hook integration", "Performance optimization", "Accessibility attributes"],
    category: "Coding", style: "TECHNICAL",
    attrs: [
      { label: "Complexity", value: 65, dotColor: "#c0392b" },
      { label: "Creativity", value: 30, dotColor: "#c0392b" },
      { label: "Length",     value: 70, dotColor: "#8b6f47" },
      { label: "Specificity",value: 80, dotColor: "#c0392b" },
    ],
    tags: ["react", "typescript"],
  },
  {
    id: "2", num: "002",
    title: "Executive Summary Extractor",
    elements: ["Long-form document input", "Key bullet extraction", "Action item synthesis", "Stakeholder framing", "Neutral tone calibration"],
    category: "Analysis", style: "ANALYTICAL",
    attrs: [
      { label: "Complexity", value: 40, dotColor: "#c0392b" },
      { label: "Creativity", value: 20, dotColor: "#8b6f47" },
      { label: "Length",     value: 35, dotColor: "#c0392b" },
      { label: "Specificity",value: 55, dotColor: "#c0392b" },
    ],
    tags: ["summarization", "business"],
  },
  {
    id: "3", num: "003",
    title: "Brand Voice Harmonizer",
    elements: ["Voice guideline injection", "Tone calibration", "Audience targeting", "Copy rewriting", "Brand consistency check"],
    category: "Writing", style: "CREATIVE",
    attrs: [
      { label: "Complexity", value: 50, dotColor: "#8b6f47" },
      { label: "Creativity", value: 75, dotColor: "#c0392b" },
      { label: "Length",     value: 45, dotColor: "#8b6f47" },
      { label: "Specificity",value: 60, dotColor: "#c0392b" },
    ],
    tags: ["copywriting", "marketing"],
  },
  {
    id: "4", num: "004",
    title: "Database Schema Architect",
    elements: ["PostgreSQL dialect", "Entity-relation design", "Index optimization", "Normalization rules", "Foreign key constraints", "Migration scripts"],
    category: "Coding", style: "STRUCTURED",
    attrs: [
      { label: "Complexity", value: 85, dotColor: "#c0392b" },
      { label: "Creativity", value: 15, dotColor: "#8b6f47" },
      { label: "Length",     value: 80, dotColor: "#c0392b" },
      { label: "Specificity",value: 90, dotColor: "#c0392b" },
    ],
    tags: ["sql", "backend"],
  },
  {
    id: "5", num: "005",
    title: "Literature Review Synthesizer",
    elements: ["Abstract parsing", "Conflicting argument map", "Citation cross-reference", "Research gap detection", "Neutral academic voice"],
    category: "Research", style: "ACADEMIC",
    attrs: [
      { label: "Complexity", value: 70, dotColor: "#c0392b" },
      { label: "Creativity", value: 25, dotColor: "#8b6f47" },
      { label: "Length",     value: 60, dotColor: "#c0392b" },
      { label: "Specificity",value: 75, dotColor: "#c0392b" },
    ],
    tags: ["academic", "synthesis"],
  },
  {
    id: "6", num: "006",
    title: "Worldbuilding Idea Generator",
    elements: ["Thematic anchoring", "Economy & society", "Faction design", "Magic system logic", "Hidden lore layer", "World map narrative"],
    category: "Creative", style: "IMAGINATIVE",
    attrs: [
      { label: "Complexity", value: 55, dotColor: "#8b6f47" },
      { label: "Creativity", value: 90, dotColor: "#c0392b" },
      { label: "Length",     value: 65, dotColor: "#c0392b" },
      { label: "Specificity",value: 45, dotColor: "#8b6f47" },
    ],
    tags: ["fiction", "ideation"],
  },
];

const CATEGORIES = ["All", "Writing", "Coding", "Analysis", "Creative", "Research"];
const NAV_ITEMS = [
  { label: "All Prompts", icon: BookOpen, cat: "All" },
  { label: "Coding",      icon: Code,     cat: "Coding" },
  { label: "Writing",     icon: PenTool,  cat: "Writing" },
  { label: "Creative",    icon: Lightbulb,cat: "Creative" },
  { label: "Research",    icon: Microscope,cat: "Research" },
];

function AttrBar({ label, value, dotColor }: { label: string; value: number; dotColor: string }) {
  const pct = Math.max(4, Math.min(96, value));
  return (
    <div className="flex items-center gap-2" style={{ marginBottom: "5px" }}>
      <span style={{ width: "72px", fontSize: "10px", color: "#6b6055", fontFamily: "inherit", flexShrink: 0 }}>
        {label}
      </span>
      <div style={{ flex: 1, position: "relative", height: "10px", display: "flex", alignItems: "center" }}>
        <div style={{
          position: "absolute", left: 0, right: 0,
          borderBottom: "1px dotted rgba(80,60,40,0.35)",
          top: "50%",
        }} />
        <div style={{
          position: "absolute",
          left: `${pct}%`,
          transform: "translateX(-50%)",
          width: "6px", height: "6px",
          borderRadius: "50%",
          background: dotColor,
          boxShadow: `0 0 0 1.5px rgba(255,255,255,0.9), 0 0 0 2.5px ${dotColor}40`,
          zIndex: 1,
        }} />
      </div>
    </div>
  );
}

function PromptCard({ prompt, onCopy, copied }: { prompt: Prompt; onCopy: (id: string) => void; copied: boolean }) {
  return (
    <div style={{
      border: "1px solid rgba(40,30,20,0.28)",
      background: "rgba(255,253,248,0.88)",
      padding: "20px 22px 16px",
      position: "relative",
      fontFamily: "'Georgia', serif",
    }}>
      {/* Title */}
      <h3 style={{
        fontSize: "15px",
        fontWeight: 700,
        color: "#1a1208",
        marginBottom: "12px",
        lineHeight: 1.2,
        fontFamily: "'Georgia', serif",
        letterSpacing: "-0.01em",
      }}>
        {prompt.title}
      </h3>

      {/* Divider */}
      <div style={{ borderTop: "1px solid rgba(40,30,20,0.12)", marginBottom: "10px" }} />

      {/* Elements / "ingredients" */}
      <ul style={{ margin: "0 0 14px", padding: 0, listStyle: "none" }}>
        {prompt.elements.map((el) => (
          <li key={el} style={{
            fontSize: "11px",
            color: "#3d2e1e",
            marginBottom: "3px",
            fontFamily: "'Georgia', serif",
            fontWeight: 400,
            letterSpacing: "0.01em",
          }}>
            {el}
          </li>
        ))}
      </ul>

      {/* Divider */}
      <div style={{ borderTop: "1px solid rgba(40,30,20,0.12)", marginBottom: "10px" }} />

      {/* Attribute bars */}
      <div style={{ marginBottom: "14px" }}>
        {prompt.attrs.map((a) => (
          <AttrBar key={a.label} label={a.label} value={a.value} dotColor={a.dotColor} />
        ))}
      </div>

      {/* Divider */}
      <div style={{ borderTop: "1px solid rgba(40,30,20,0.12)", marginBottom: "10px" }} />

      {/* Footer row */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{
          fontSize: "9px",
          letterSpacing: "0.14em",
          color: "#6b6055",
          fontFamily: "'Arial', sans-serif",
          fontWeight: 600,
          textTransform: "uppercase",
        }}>
          {prompt.style}
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{
            fontSize: "12px",
            fontWeight: 700,
            color: "#1a1208",
            fontFamily: "'Georgia', serif",
            letterSpacing: "-0.01em",
          }}>
            #{prompt.num}
          </span>
          <button
            onClick={() => onCopy(prompt.id)}
            style={{
              width: "22px", height: "22px",
              border: "1px solid rgba(40,30,20,0.25)",
              background: "transparent",
              cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "background 0.15s",
            }}
            title="Copy prompt"
          >
            {copied
              ? <Check size={11} style={{ color: "#2d7a4f" }} />
              : <Copy size={11} style={{ color: "#6b6055" }} />
            }
          </button>
        </div>
      </div>
    </div>
  );
}

export default function NotionOpenCode() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"gallery" | "list">("gallery");

  const filteredPrompts = PROMPTS.filter((p) => {
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.elements.some((e) => e.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleCopy = (id: string) => {
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div style={{
      display: "flex", height: "100vh", width: "100%",
      background: "#ece8df",
      fontFamily: "'Arial', sans-serif",
      overflow: "hidden",
    }}>

      {/* Sidebar */}
      <aside style={{
        width: "220px", flexShrink: 0,
        borderRight: "1px solid rgba(40,30,20,0.18)",
        background: "#e5e0d5",
        display: "flex", flexDirection: "column",
      }}>
        {/* Logo area */}
        <div style={{
          padding: "18px 16px 14px",
          borderBottom: "1px solid rgba(40,30,20,0.12)",
        }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{
                width: "22px", height: "22px",
                background: "#1a1208",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <span style={{ color: "#ece8df", fontSize: "11px", fontWeight: 700, fontFamily: "Georgia, serif" }}>P</span>
              </div>
              <span style={{ fontSize: "13px", fontWeight: 600, color: "#1a1208", letterSpacing: "0.01em" }}>Prompts Library</span>
            </div>
            <button style={{ background: "none", border: "none", cursor: "pointer", color: "#6b6055", padding: "2px" }}>
              <Plus size={14} />
            </button>
          </div>
        </div>

        {/* Nav */}
        <nav style={{ flex: 1, padding: "10px 8px", display: "flex", flexDirection: "column", gap: "2px" }}>
          <div style={{ fontSize: "9px", letterSpacing: "0.12em", color: "#9a8f80", fontWeight: 600, textTransform: "uppercase", padding: "8px 8px 4px" }}>
            Collections
          </div>
          {NAV_ITEMS.map(({ label, icon: Icon, cat }) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  display: "flex", alignItems: "center", gap: "8px",
                  padding: "6px 8px",
                  background: isActive ? "rgba(26,18,8,0.1)" : "transparent",
                  border: "none", cursor: "pointer",
                  color: isActive ? "#1a1208" : "#5a4e3e",
                  fontSize: "13px", textAlign: "left", width: "100%",
                  transition: "background 0.15s",
                }}
              >
                <Icon size={14} style={{ color: isActive ? "#1a1208" : "#8a7a68" }} />
                {label}
              </button>
            );
          })}
        </nav>

        {/* Settings */}
        <div style={{ padding: "12px 16px", borderTop: "1px solid rgba(40,30,20,0.12)" }}>
          <button style={{
            display: "flex", alignItems: "center", gap: "6px",
            background: "none", border: "none", cursor: "pointer",
            color: "#8a7a68", fontSize: "12px",
          }}>
            <Settings size={13} />
            Settings
          </button>
        </div>
      </aside>

      {/* Main */}
      <main style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>

        {/* Top bar */}
        <div style={{
          padding: "16px 28px 12px",
          borderBottom: "1px solid rgba(40,30,20,0.14)",
          display: "flex", flexDirection: "column", gap: "10px",
          background: "#ece8df",
        }}>
          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", color: "#9a8f80" }}>
            <BookOpen size={12} />
            <span>/</span>
            <span style={{ color: "#3d2e1e" }}>Prompts Database</span>
          </div>

          {/* Title + controls row */}
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "16px" }}>
            <h1 style={{
              fontSize: "26px", fontWeight: 700, color: "#1a1208",
              fontFamily: "Georgia, serif", letterSpacing: "-0.03em", margin: 0,
            }}>
              Prompts Database
            </h1>

            {/* Search */}
            <div style={{ position: "relative", flex: "0 0 240px" }}>
              <Search size={13} style={{
                position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)",
                color: "#9a8f80",
              }} />
              <input
                type="text"
                placeholder="Filter by name or element..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: "100%", paddingLeft: "30px", paddingRight: "12px", paddingTop: "7px", paddingBottom: "7px",
                  border: "1px solid rgba(40,30,20,0.22)",
                  background: "rgba(255,253,248,0.6)",
                  fontSize: "12px", color: "#1a1208",
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />
            </div>
          </div>

          {/* Category filter row */}
          <div style={{ display: "flex", alignItems: "center", gap: "0", borderTop: "1px solid rgba(40,30,20,0.12)", paddingTop: "10px" }}>
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: "4px 14px",
                    border: "none", background: "none", cursor: "pointer",
                    fontSize: "12px",
                    color: isActive ? "#1a1208" : "#8a7a68",
                    fontWeight: isActive ? 600 : 400,
                    borderBottom: isActive ? "2px solid #1a1208" : "2px solid transparent",
                    marginBottom: "-1px",
                    letterSpacing: "0.01em",
                    transition: "all 0.15s",
                  }}
                >
                  {cat}
                </button>
              );
            })}
            <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{ fontSize: "11px", color: "#9a8f80" }}>{filteredPrompts.length} prompts</span>
              <div style={{ display: "flex", border: "1px solid rgba(40,30,20,0.2)" }}>
                {["gallery", "list"].map((m) => (
                  <button
                    key={m}
                    onClick={() => setViewMode(m as "gallery" | "list")}
                    style={{
                      padding: "4px 10px", border: "none", cursor: "pointer", fontSize: "10px",
                      background: viewMode === m ? "#1a1208" : "transparent",
                      color: viewMode === m ? "#ece8df" : "#8a7a68",
                      textTransform: "capitalize", letterSpacing: "0.05em", fontWeight: 600,
                      transition: "all 0.15s",
                    }}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Content area */}
        <div style={{ flex: 1, overflowY: "auto", padding: "24px 28px 32px" }}>
          {viewMode === "gallery" ? (
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "16px",
            }}>
              {filteredPrompts.map((prompt) => (
                <PromptCard
                  key={prompt.id}
                  prompt={prompt}
                  onCopy={handleCopy}
                  copied={copiedId === prompt.id}
                />
              ))}
            </div>
          ) : (
            /* List view — looks like Notion table */
            <div style={{ border: "1px solid rgba(40,30,20,0.2)", background: "rgba(255,253,248,0.7)" }}>
              {/* Header */}
              <div style={{
                display: "grid",
                gridTemplateColumns: "2fr 1fr 1fr 80px",
                padding: "8px 16px",
                borderBottom: "1px solid rgba(40,30,20,0.15)",
                fontSize: "10px", letterSpacing: "0.1em", fontWeight: 600,
                color: "#9a8f80", textTransform: "uppercase",
              }}>
                <div>Title</div>
                <div>Category</div>
                <div>Style</div>
                <div style={{ textAlign: "right" }}>ID</div>
              </div>
              {filteredPrompts.map((prompt, i) => (
                <div
                  key={prompt.id}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "2fr 1fr 1fr 80px",
                    padding: "11px 16px",
                    borderBottom: i < filteredPrompts.length - 1 ? "1px solid rgba(40,30,20,0.1)" : "none",
                    alignItems: "center",
                    fontSize: "13px", color: "#1a1208",
                    fontFamily: "Georgia, serif",
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 700, marginBottom: "2px" }}>{prompt.title}</div>
                    <div style={{ fontSize: "11px", color: "#8a7a68", fontFamily: "Arial, sans-serif", fontWeight: 400 }}>
                      {prompt.elements.slice(0, 2).join(", ")}
                    </div>
                  </div>
                  <div>
                    <span style={{
                      fontSize: "9px", letterSpacing: "0.1em", fontWeight: 600,
                      color: "#6b6055", fontFamily: "Arial, sans-serif", textTransform: "uppercase",
                    }}>
                      {prompt.category}
                    </span>
                  </div>
                  <div style={{ fontSize: "9px", letterSpacing: "0.1em", color: "#9a8f80", fontFamily: "Arial, sans-serif", textTransform: "uppercase" }}>
                    {prompt.style}
                  </div>
                  <div style={{ textAlign: "right", display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "8px" }}>
                    <button
                      onClick={() => handleCopy(prompt.id)}
                      style={{
                        background: "none", border: "1px solid rgba(40,30,20,0.2)",
                        padding: "3px 6px", cursor: "pointer",
                        display: "flex", alignItems: "center",
                      }}
                    >
                      {copiedId === prompt.id
                        ? <Check size={11} style={{ color: "#2d7a4f" }} />
                        : <Copy size={11} style={{ color: "#6b6055" }} />
                      }
                    </button>
                    <span style={{ fontSize: "11px", fontFamily: "Georgia, serif", fontWeight: 700 }}>#{prompt.num}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {filteredPrompts.length === 0 && (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "60px 0", textAlign: "center" }}>
              <Search size={28} style={{ color: "rgba(40,30,20,0.2)", marginBottom: "12px" }} />
              <p style={{ fontSize: "14px", color: "#8a7a68", fontFamily: "Georgia, serif" }}>No prompts found</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
