import zahga1 from "../assets/image/zahga/Screenshot 2026-04-15 143434.png";
import zahga2 from "../assets/image/zahga/Screenshot 2026-04-15 143526.png";
import zahga3 from "../assets/image/zahga/Screenshot 2026-04-15 143543.png";
import zahga4 from "../assets/image/zahga/Screenshot 2026-04-15 143558.png";
import zahga5 from "../assets/image/zahga/Screenshot 2026-04-15 143619.png";

import harness1 from "../assets/image/harnessTogo/Screenshot 2026-04-15 143653.png";
import harness2 from "../assets/image/harnessTogo/Screenshot 2026-04-15 143724.png";
import harness3 from "../assets/image/harnessTogo/Screenshot 2026-04-15 143803.png";
import harness4 from "../assets/image/harnessTogo/Screenshot 2026-04-15 143817.png";
import harness5 from "../assets/image/harnessTogo/Screenshot 2026-04-15 143829.png";

import quikskope1 from "../assets/image/quikskope/Screenshot 2026-04-15 145222.png";
import quikskopeFile from "../assets/file/QuikSkope_Automation_Overview.pdf";

import wms1 from "../assets/image/WMS/image.png";
import wms2 from "../assets/image/WMS/image copy.png";
import wms3 from "../assets/image/WMS/image copy 2.png";
import wms4 from "../assets/image/WMS/image copy 3.png";

import selene1 from "../assets/image/seleneBrain/image.png";
import selene2 from "../assets/image/seleneBrain/image copy.png";
import selene3 from "../assets/image/seleneBrain/image copy 2.png";

import qsv21 from "../assets/image/quikskopeVersion2/Screenshot 2026-09-14 161208.png";
import qsv22 from "../assets/image/quikskopeVersion2/Screenshot 2026-09-14 161222.png";
import qsv23 from "../assets/image/quikskopeVersion2/Screenshot 2026-09-14 161248.png";
import qsv24 from "../assets/image/quikskopeVersion2/Screenshot 2026-09-14 161306.png";

import nfl1 from "../assets/image/nflPicks/Screenshot 2026-09-14 163358.png";
import nfl2 from "../assets/image/nflPicks/Screenshot 2026-09-14 163535.png";
import nfl3 from "../assets/image/nflPicks/Screenshot 2026-09-14 163548.png";
import nfl4 from "../assets/image/nflPicks/Screenshot 2026-09-14 163559.png";
import nfl5 from "../assets/image/nflPicks/Screenshot 2026-09-14 163915.png";

export const projects = [
  {
    id: "quikskope",
    title: "Quikskope Automation",
    date: "October 2025",
    desc: "Workflow automation system built with Zapier and AI to streamline business operations and reduce manual tasks.",
    stack: ["Zapier", "AI", "Automation"],
    link: "",
    download: quikskopeFile,
    downloadName: "QuikSkope_Automation_Overview.pdf",
    images: [quikskope1],
  },
  {
    id: "selene-brain",
    title: "Selene Brain",
    date: "January 2026",
    desc: "Inventory tracker for medical equipment with quick search flows, backed by an n8n automation layer that keeps records in sync.",
    stack: ["n8n", "AI", "Automation"],
    link: "",
    images: [selene1, selene2, selene3],
  },
  {
    id: "wms",
    title: "Warehouse Management System",
    date: "March 2026",
    desc: "Centralized warehouse platform connecting 7 retail stores, enabling real-time order management, inventory tracking, and streamlined fulfillment across all locations.",
    stack: ["React", "Dashboard", "Inventory"],
    link: "",
    images: [wms1, wms2, wms3, wms4],
  },
  {
    id: "zahga",
    title: "ZAHGA",
    date: "April 2026",
    desc: "Corporate website for an IT company, showcasing services, solutions, and expertise with a modern, professional design.",
    stack: ["React", "CSS", "JS"],
    link: "https://zahga.vercel.app/",
    images: [zahga1, zahga2, zahga3, zahga4, zahga5],
  },
  {
    id: "harness-togo",
    title: "HarnessTogo",
    date: "April 2026",
    desc: "Logistics platform delivering streamlined shipment tracking and operations management with a clean, focused interface.",
    stack: ["React", "CSS", "JS"],
    link: "https://harness-togo.vercel.app/",
    images: [harness1, harness2, harness3, harness4, harness5],
  },
  {
    id: "quikskopeV2",
    title: "Quikskope Version 2",
    date: "MAY 2026",
    desc: "QuikSkope is a driver-facing freight verification platform that secures the full load lifecycle — from GPS-confirmed pickups and AI-powered photo verification (selfie, VIN, truck) to real-time tracking and delivery completion — reducing fraud and manual checks in logistics.",
    stack: ["react.js", "next.js", "mapbox", "twillio", "react native", "vercel", "supabase"],
    link: "https://www.quikskope.io/",
    images: [qsv21, qsv22, qsv23, qsv24],
  },{
    id: "clientPortal",
    title: "client portal platform",
    date: "July 2026",
    desc: "",
    stack: ["react.js", "next.js", "vercel", "supabase", "automation"],
    link: "",
    images: [],
  },{
    id: "nflPicks",
    title: "nfl picks",
    date: "september 2026",
    desc: "",
    stack: ["react.js", "next.js", "vercel", "supabase"],
    link: "",
    images: [nfl5, nfl2, nfl3, nfl4, nfl1],
  },
];
