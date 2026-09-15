import { projects } from "./projects";

export const profile = {
  name: "Falcatan",
  brand: "Falcat",
  role: "Front-End Developer & Automation Builder",
  email: "kmfalcatan2@gmail.com",
  phone: "0999 918 8228",
  location: "Zamboanga City, PH",
  available: true,
};

export const navLinks = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

/* The project count comes straight from the projects list, so adding
   one there updates the hero without touching this file. */
export const heroStats = [
  { value: "4+", label: "Years experience" },
  { value: String(projects.length), label: "Projects delivered" },
];

export const highlights = [
  "Design systems & component libraries",
  "Responsive landing pages & dashboards",
  "Workflow automations & API integrations",
];

export const aboutTags = ["React", "UI Design", "n8n", "Zapier", "API Integrations"];
