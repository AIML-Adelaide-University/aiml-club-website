import { useState } from "react";

// ── Edit your links here ──────────────────────────────────────────
const LINKS = [
  {
    id: 1,
    emoji: "🤝",
    label: "JOIN US",
    description: "Become a member of the club",
    url: "https://aimlclub.org/join",
    highlight: true,
  },
  {
    id: 2,
    emoji: "⚡",
    label: "CatWiz Hackathon",
    description: "Outwit the AI Cat. Win $100.",
    url: "https://events.humanitix.com/catwiz-hackathon",
    highlight: false,
  },
  {
    id: 3,
    emoji: "📸",
    label: "INSTAGRAM",
    description: "Follow us for updates",
    url: "https://instagram.com/aiml_au",
    highlight: false,
  },
  {
    id: 4,
    emoji: "💼",
    label: "LINKEDIN",
    description: "Connect with our community",
    url: "https://www.linkedin.com/company/aimlclub/",
    highlight: false,
  },
  // {
  //   id: 5,
  //   emoji: "💻",
  //   label: "GITHUB",
  //   description: "Explore our open-source work",
  //   url: "https://github.com/aimlclub",
  //   highlight: false,
  // },
  {
    id: 6,
    emoji: "💬",
    label: "DISCORD",
    description: "Chat with members & mentors",
    url: "https://discord.gg/EVtjvYcCP5",
    highlight: false,
  },
  {
    id: 7,
    emoji: "✉️",
    label: "CONTACT US",
    description: "Get in touch with the team",
    url: "https://aimlclub.org/contact",
    highlight: false,
  },
];
// ─────────────────────────────────────────────────────────────────

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Courier+Prime:wght@400;700&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .lp-root {
    min-height: 100vh;
    background: #D9D9D9;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px 20px 60px;
    font-family: 'Courier Prime', 'Courier New', monospace;
    color: #2a2a2a;
  }

  .lp-header {
    text-align: center;
    margin-bottom: 52px;
    width: 100%;
    max-width: 520px;
  }


  .lp-title {
    font-family: 'val', monospace;
    font-size: clamp(100px, 5vw, 32px);
    color: #2a2a2a;
    line-height: 1.5;
    margin-bottom: 16px;
    letter-spacing: 2px;
  }

  .lp-subtitle {
    font-size: 13px;
    color: #555;
    line-height: 1.8;
  }

  .lp-divider {
    width: 1px;
    height: 50px;
    background: #888;
    margin: 0 auto 44px;
  }

  /* ── Floating separate cards ── */
  .lp-list {
    width: 100%;
    max-width: 520px;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .lp-card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px 24px;
    background: #e2e2e2;
    border: 2px solid #2a2a2a;
    cursor: pointer;
    text-decoration: none;
    color: #2a2a2a;
    transition: background 0.15s ease, transform 0.15s ease, box-shadow 0.15s ease;
    box-shadow: 4px 4px 0px #2a2a2a;
  }

  .lp-card:hover {
    background: #2a2a2a;
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0px #888;
  }

  .lp-card:hover .lp-card-label,
  .lp-card:hover .lp-card-desc,
  .lp-card:hover .lp-card-arrow {
    color: #e2e2e2;
  }

  .lp-card.highlight {
    background: #2a2a2a;
    box-shadow: 4px 4px 0px #555;
  }

  .lp-card.highlight .lp-card-label,
  .lp-card.highlight .lp-card-desc,
  .lp-card.highlight .lp-card-arrow {
    color: #e2e2e2;
  }

  .lp-card.highlight:hover {
    background: #444;
    box-shadow: 6px 6px 0px #888;
  }

  .lp-card-emoji {
    font-size: 22px;
    margin-right: 16px;
    flex-shrink: 0;
    transition: transform 0.15s ease;
  }

  .lp-card:hover .lp-card-emoji {
    transform: scale(1.2);
  }

  .lp-card-text { flex: 1; }

  .lp-card-label {
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 1.5px;
    color: #2a2a2a;
  }

  .lp-card-desc {
    font-size: 11px;
    color: #666;
    margin-top: 4px;
    letter-spacing: 0.3px;
  }

  .lp-card-arrow {
    font-size: 18px;
    color: #2a2a2a;
    margin-left: 16px;
    transition: transform 0.15s ease;
    flex-shrink: 0;
  }

  .lp-card:hover .lp-card-arrow {
    transform: translateX(4px);
  }
`;

export default function Links() {
  return (
    <>
      <style>{css}</style>
      <div className="lp-root">

        {/* Links */}
        <div className="lp-list">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={link.url}
              className={`lp-card${link.highlight ? " highlight" : ""}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="lp-card-emoji">{link.emoji}</span>
              <div className="lp-card-text">
                <div className="lp-card-label">{link.label}</div>
                <div className="lp-card-desc">{link.description}</div>
              </div>
              <span className="lp-card-arrow">→</span>
            </a>
          ))}
        </div>

      </div>
    </>
  );
}