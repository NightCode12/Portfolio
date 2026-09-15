import html from "../assets/icons/html5.svg";
import css from "../assets/icons/css3.svg";
import javascript from "../assets/icons/javascript.svg";
import react from "../assets/icons/react.svg";
import nextjs from "../assets/icons/nextdotjs.svg";
import n8n from "../assets/icons/n8n.svg";
import zapier from "../assets/icons/zapier.svg";
import claude from "../assets/icons/claude.svg";
import chatgpt from "../assets/icons/openai.svg";
import supabase from "../assets/icons/supabase.svg";
import vercel from "../assets/icons/vercel.svg";
import figma from "../assets/icons/figma.svg";
import canva from "../assets/icons/canva.svg";
import vscode from "../assets/icons/vscode.svg";

/**
 * Every logo is vendored locally as an SVG — nothing waits on a CDN.
 * The six brands with no full-colour mark (Next.js, Vercel, ChatGPT,
 * Claude, n8n, Zapier) have their brand hex baked into the file, so
 * every icon here renders the same way: a plain <img>.
 */
export const skillGroups = [
  {
    key: "frontend",
    label: "Front-end",
    blurb: "Building the interface",
    skills: [
      { name: "HTML", level: "Semantic structure", icon: html },
      { name: "CSS", level: "Modern layouts", icon: css },
      { name: "JavaScript", level: "Interactive UI", icon: javascript },
      { name: "React", level: "Component systems", icon: react },
      { name: "Next.js", level: "Routing & rendering", icon: nextjs },
    ],
  },
  {
    key: "automation",
    label: "Automation & AI",
    blurb: "Removing the manual work",
    skills: [
      { name: "n8n", level: "Workflow automation", icon: n8n },
      { name: "Zapier", level: "App integrations", icon: zapier },
      { name: "Claude", level: "AI-assisted builds", icon: claude },
      { name: "ChatGPT", level: "Prompting & drafting", icon: chatgpt },
    ],
  },
  {
    key: "platform",
    label: "Backend & platform",
    blurb: "Where the work ships",
    skills: [
      { name: "Supabase", level: "Database & auth", icon: supabase },
      { name: "Vercel", level: "Deploys & previews", icon: vercel },
    ],
  },
  {
    key: "design",
    label: "Design & tooling",
    blurb: "Shaping it first",
    skills: [
      { name: "Figma", level: "UI design", icon: figma },
      { name: "Canva", level: "Visual content", icon: canva },
      { name: "VS Code", level: "Daily workspace", icon: vscode },
    ],
  },
];
