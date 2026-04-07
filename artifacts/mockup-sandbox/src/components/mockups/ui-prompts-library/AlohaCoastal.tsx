import React, { useState } from "react";
import { Search, Copy, Check, Plus, Heart, ChevronLeft, Bell, Play, Share2, ArrowUpRight } from "lucide-react";

const PROMPTS = [
  {
    id: 1,
    title: "Tone Adapter",
    category: "Writing",
    description: "Rewrite the following text to match a specific tone, from corporate professional to casual gen-z.",
    date: "28 Dec 2025",
    hue: "linear-gradient(135deg, #e8a8c8 0%, #c878a8 100%)",
    textColor: "rgba(255,255,255,0.92)",
  },
  {
    id: 2,
    title: "React Refactor Expert",
    category: "Coding",
    description: "Analyze a React component and refactor for performance, readability, and modern hooks.",
    date: "1 Jan 2026",
    hue: "linear-gradient(135deg, #a8c8e8 0%, #78a8d8 100%)",
    textColor: "rgba(255,255,255,0.92)",
  },
  {
    id: 3,
    title: "Data Insight Generator",
    category: "Analysis",
    description: "Extract actionable insights from a raw dataset and present in concise, bulleted format.",
    date: "28 Dec 2025",
    hue: "linear-gradient(135deg, #f5d0e0 0%, #e8b8cc 100%)",
    textColor: "rgba(80,40,60,0.88)",
  },
  {
    id: 4,
    title: "World Builder",
    category: "Creative",
    description: "Generate a detailed backstory for a sci-fi city: economy, factions, and hidden secrets.",
    date: "28 Dec 2025",
    hue: "linear-gradient(135deg, #d8c8f0 0%, #b8a0e0 100%)",
    textColor: "rgba(255,255,255,0.92)",
  },
];

const WAVEFORM_BARS = Array.from({ length: 36 }, (_, i) => {
  const heights = [2,3,5,8,12,16,10,14,18,12,8,14,20,16,10,6,14,18,12,16,10,8,14,18,12,10,6,8,4,10,14,8,6,4,3,2];
  return heights[i] || 4;
});

export function AlohaCoastal() {
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [search, setSearch] = useState("");

  const handleCopy = (id: number) => {
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filtered = PROMPTS.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase()) ||
    p.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      className="w-full min-h-screen font-sans overflow-hidden relative"
      style={{ background: "linear-gradient(160deg, #f8d8e8 0%, #f0c8d8 40%, #e0b8d0 70%, #d8c8e8 100%)" }}
    >
      <style>{`
        @keyframes float1 { 0%,100%{transform:translateY(0) scale(1)} 50%{transform:translateY(-12px) scale(1.03)} }
        @keyframes float2 { 0%,100%{transform:translateY(0) scale(1)} 50%{transform:translateY(-8px) scale(1.02)} }
        @keyframes fadein { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
        .petal-blob-1 { animation: float1 8s ease-in-out infinite; }
        .petal-blob-2 { animation: float2 10s ease-in-out infinite; }
        .glass-white {
          background: rgba(255,255,255,0.72);
          backdrop-filter: blur(24px) saturate(1.6);
          -webkit-backdrop-filter: blur(24px) saturate(1.6);
          border: 1px solid rgba(255,255,255,0.9);
          box-shadow: 0 4px 24px rgba(180,100,140,0.12), 0 1px 0 rgba(255,255,255,0.95) inset;
        }
        .glass-light {
          background: rgba(255,255,255,0.45);
          backdrop-filter: blur(18px) saturate(1.4);
          -webkit-backdrop-filter: blur(18px) saturate(1.4);
          border: 1px solid rgba(255,255,255,0.7);
          box-shadow: 0 2px 16px rgba(180,100,140,0.08);
        }
        .glass-search {
          background: rgba(255,255,255,0.55);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255,255,255,0.8);
          box-shadow: 0 2px 12px rgba(180,100,140,0.1);
        }
        .glass-search:focus { outline:none; background: rgba(255,255,255,0.72); }
        .card-fade { animation: fadein 0.35s ease both; }
        .prompt-card {
          transition: transform 0.25s, box-shadow 0.25s;
        }
        .prompt-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 32px rgba(180,80,140,0.2) !important;
        }
      `}</style>

      {/* Bokeh petal blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="petal-blob-1" style={{ position:"absolute", top:"-15%", left:"-10%", width:"65%", height:"65%", borderRadius:"40% 60% 55% 45%", background:"rgba(240,160,195,0.45)", filter:"blur(60px)" }} />
        <div className="petal-blob-2" style={{ position:"absolute", top:"-5%", right:"-15%", width:"60%", height:"60%", borderRadius:"55% 45% 40% 60%", background:"rgba(210,140,200,0.38)", filter:"blur(70px)" }} />
        <div className="petal-blob-1" style={{ position:"absolute", bottom:"-15%", left:"20%", width:"55%", height:"55%", borderRadius:"45% 55% 60% 40%", background:"rgba(220,170,215,0.35)", filter:"blur(65px)", animationDelay:"3s" }} />
        <div className="petal-blob-2" style={{ position:"absolute", bottom:"5%", right:"-5%", width:"45%", height:"50%", borderRadius:"60% 40% 45% 55%", background:"rgba(180,150,220,0.3)", filter:"blur(55px)", animationDelay:"5s" }} />
        <div style={{ position:"absolute", top:"35%", left:"30%", width:"40%", height:"45%", borderRadius:"50%", background:"rgba(250,200,225,0.25)", filter:"blur(50px)" }} />
      </div>

      {/* Top bar */}
      <div className="relative z-10 flex items-center justify-between px-8 pt-7 pb-2">
        <div className="flex items-center gap-3">
          <button className="glass-light w-8 h-8 rounded-full flex items-center justify-center">
            <ChevronLeft size={14} style={{ color: "rgba(120,60,90,0.7)" }} />
          </button>
          <div className="glass-light flex items-center gap-2 px-4 py-1.5 rounded-full">
            <div className="w-2 h-2 rounded-full" style={{ background: "#c87898" }} />
            <span className="text-xs font-medium" style={{ color: "rgba(100,50,75,0.8)" }}>Pinned</span>
            <ChevronLeft size={11} style={{ color: "rgba(120,60,90,0.5)", transform: "rotate(-90deg)" }} />
          </div>
        </div>
        <button className="glass-light w-8 h-8 rounded-full flex items-center justify-center">
          <Bell size={13} style={{ color: "rgba(120,60,90,0.7)" }} />
        </button>
      </div>

      {/* Hero section */}
      <div className="relative z-10 px-8 pt-4 pb-3">
        <p className="text-sm font-medium mb-2" style={{ color: "rgba(100,50,75,0.6)" }}>Sunday Morning</p>

        {/* Voice note / audio player */}
        <div className="glass-white rounded-2xl px-4 py-3 flex items-center gap-3 mb-2">
          <button
            className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
            style={{ background: "rgba(200,120,152,0.15)", border: "1px solid rgba(200,120,152,0.3)" }}
          >
            <Play size={14} style={{ color: "#c87898" }} fill="#c87898" />
          </button>
          <div className="flex-1 flex items-center gap-0.5">
            {WAVEFORM_BARS.map((h, i) => (
              <div
                key={i}
                style={{
                  width: "2px", height: `${h}px`,
                  background: i < 14 ? "#c87898" : "rgba(180,100,130,0.25)",
                  borderRadius: "1px",
                  flexShrink: 0,
                }}
              />
            ))}
          </div>
          <span className="text-[11px] font-medium shrink-0" style={{ color: "rgba(120,60,90,0.6)" }}>10:04</span>
        </div>
        <p className="text-xs mb-4" style={{ color: "rgba(120,60,90,0.5)" }}>Voice note: The sounds of the sea</p>
      </div>

      {/* Bento grid */}
      <div className="relative z-10 px-8 pb-4">
        <div className="grid grid-cols-2 gap-3">
          {filtered.slice(0, 4).map((prompt, i) => (
            <div
              key={prompt.id}
              className="prompt-card card-fade rounded-2xl overflow-hidden"
              style={{
                background: prompt.hue,
                minHeight: i % 3 === 0 ? "155px" : "135px",
                animationDelay: `${i * 60}ms`,
                boxShadow: "0 4px 20px rgba(180,80,130,0.15)",
              }}
            >
              <div className="p-4 flex flex-col h-full">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider mb-0.5" style={{ color: "rgba(255,255,255,0.65)" }}>
                      {prompt.category}
                    </p>
                    <h3 className="text-sm font-semibold leading-tight" style={{ color: prompt.textColor }}>
                      {prompt.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => handleCopy(prompt.id)}
                    className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: "rgba(255,255,255,0.25)", border: "1px solid rgba(255,255,255,0.4)" }}
                  >
                    {copiedId === prompt.id
                      ? <Check size={10} style={{ color: "#fff" }} />
                      : <Share2 size={9} style={{ color: "rgba(255,255,255,0.8)" }} />
                    }
                  </button>
                </div>
                <p className="text-[11px] leading-relaxed flex-1" style={{ color: i % 2 === 0 ? "rgba(255,255,255,0.75)" : "rgba(80,40,60,0.65)" }}>
                  {prompt.description}
                </p>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-[10px]" style={{ color: i % 2 === 0 ? "rgba(255,255,255,0.5)" : "rgba(100,60,80,0.5)" }}>
                    {prompt.date}
                  </p>
                  <button
                    onClick={() => handleCopy(prompt.id)}
                    className="flex items-center gap-1 text-[10px] font-medium"
                    style={{ color: i % 2 === 0 ? "rgba(255,255,255,0.7)" : "rgba(100,60,80,0.65)" }}
                  >
                    {copiedId === prompt.id ? (
                      <><Check size={10} />Copied</>
                    ) : (
                      <><Copy size={10} />Copy</>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats row */}
      <div className="relative z-10 px-8 pb-3 flex items-center gap-5">
        <div className="flex items-center gap-1.5">
          <Heart size={13} style={{ color: "#c87898" }} fill="#c87898" />
          <span className="text-xs font-medium" style={{ color: "rgba(120,60,90,0.65)" }}>5342</span>
        </div>
        <span className="text-xs" style={{ color: "rgba(120,60,90,0.4)" }}>·</span>
        <span className="text-xs" style={{ color: "rgba(120,60,90,0.5)" }}>22 saved</span>
        <span className="text-xs" style={{ color: "rgba(120,60,90,0.4)" }}>·</span>
        <span className="text-xs" style={{ color: "rgba(120,60,90,0.5)" }}>14 shared</span>
        <div className="ml-auto">
          <button
            className="glass-light flex items-center gap-1.5 px-3 py-1.5 rounded-full"
          >
            <ArrowUpRight size={12} style={{ color: "rgba(180,80,130,0.7)" }} />
            <span className="text-[11px] font-medium" style={{ color: "rgba(120,60,90,0.7)" }}>Expand</span>
          </button>
        </div>
      </div>

      {/* Search bar */}
      <div className="relative z-10 px-8 pb-8">
        <div className="flex items-center gap-2">
          <div className="flex-1 relative">
            <Search size={14} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: "rgba(160,90,120,0.5)" }} />
            <input
              type="text"
              placeholder="Find a memory..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="glass-search w-full pl-11 pr-4 py-3 rounded-2xl text-sm"
              style={{ color: "rgba(100,50,75,0.85)" }}
            />
          </div>
          <button
            className="glass-white w-11 h-11 rounded-full flex items-center justify-center shrink-0"
            style={{ border: "1px solid rgba(255,255,255,0.9)" }}
          >
            <Plus size={18} style={{ color: "rgba(180,80,130,0.8)" }} />
          </button>
        </div>
      </div>
    </div>
  );
}
