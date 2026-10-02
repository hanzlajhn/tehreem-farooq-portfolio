/**
 * All visible portfolio copy lives in this file.
 * Edit the strings here, then refresh the site.
 */

export const site = {
  name: "Tehreem Farooq",
  initials: "TF",
  role: "B2B Lead Generation & Digital Marketing Specialist",
  location: "Pakistan",
  email: "tehreemfarooq1325@gmail.com",
  phone: "+92 328 7534845",
  phoneHref: "tel:+923287534845",
  whatsapp: "https://wa.me/923287534845",
  linkedin: "https://www.linkedin.com/in/tehreem-farooq-bb611841a/",
  linkedinLabel: "linkedin.com/in/tehreem-farooq-bb611841a",
  url: "https://tehreem-farooq.vercel.app",
  cvPath: "/Tehreem_Farooq_CV.pdf",
  copyrightYear: 2026,
  valueStatement:
    "B2B lead research, data management, and outreach, with digital marketing support for online growth and customer engagement.",
  summary:
    "Over two years of experience in B2B lead generation, digital marketing and CRM management. Skilled in lead research, data management and outreach. Also experienced in digital marketing for a clothing brand, supporting online growth and customer engagement. Reliable, detail-oriented and comfortable working with international clients.",
  metaDescription:
    "Tehreem Farooq is a B2B lead generation and digital marketing specialist in Pakistan. Lead research, CRM management, outreach, and digital marketing support.",
} as const;

export const nav = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
] as const;

export const services = [
  {
    title: "Lead generation",
    description:
      "Research and identify qualified B2B prospects using Apollo, ZoomInfo, ContactOut, and other platforms. Deliver lead lists and reports to client requirements and deadlines.",
  },
  {
    title: "Data research and list building",
    description:
      "Build and maintain accurate prospect databases, verify contact details, and segment leads by industry and role.",
  },
  {
    title: "CRM management",
    description:
      "Manage lead and customer records in CRM systems.",
  },
  {
    title: "Email and LinkedIn outreach",
    description:
      "Handle outreach and follow-ups to move leads through the sales pipeline, including cold email and LinkedIn outreach.",
  },
  {
    title: "Digital marketing support",
    description:
      "Plan and deliver digital marketing activity to strengthen online presence through content, social media, and campaigns, and engage with customers to support interaction, loyalty, and brand awareness.",
  },
] as const;

export const experience = [
  {
    role: "B2B Lead Generation Specialist",
    company: "Highapp Solutions",
    dates: "March 2025 – Present",
    current: true,
    points: [
      "Researched and identified qualified B2B prospects using Apollo, ZoomInfo, ContactOut and other platforms",
      "Built and maintained accurate prospect databases, verified contact details, segmented leads by industry and role",
      "Managed lead and customer records in CRM systems",
      "Handled outreach and follow-ups to move leads through the sales pipeline",
      "Delivered lead lists and reports to client requirements and deadlines",
    ],
  },
  {
    role: "Digital Marketer",
    company: "Engine (clothing brand)",
    dates: "April 2024 – February 2025",
    current: false,
    points: [
      "Planned and delivered digital marketing activity to strengthen online presence",
      "Supported online growth through content, social media and campaigns",
      "Engaged with customers online to improve interaction, loyalty and brand awareness",
    ],
  },
] as const;

export const education = {
  degree: "BS Information Technology",
  school: "Bahauddin Zakariya University (BZU), Multan",
  dates: "March 2022 – April 2024",
} as const;

export const skillGroups = [
  {
    title: "Lead Generation",
    items: [
      "B2B Prospecting",
      "Lead Research",
      "List Building",
      "Lead Qualification",
    ],
  },
  {
    title: "Outreach",
    items: ["Cold Email", "LinkedIn Outreach", "Follow-ups"],
  },
  {
    title: "CRM & Data",
    items: [
      "CRM Management",
      "Data Cleansing",
      "Database Management",
      "Reporting",
    ],
  },
  {
    title: "Digital Marketing",
    items: [
      "Social Media Marketing",
      "Content Support",
      "Customer Engagement",
    ],
  },
  {
    title: "Tools",
    items: [
      "Apollo",
      "ZoomInfo",
      "ContactOut",
      "Bravo",
      "LinkedIn Sales Navigator",
      "HubSpot CRM",
      "Lusha",
      "Google Workspace",
      "Microsoft Office",
      "Canva",
    ],
  },
] as const;
