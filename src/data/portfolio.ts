export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  contributions: string[];
  tags: string[];
}

export interface Project {
  title: string;
  type: string;
  description: string;
  role: string;
  tags: string[];
  image?: string;
  visual?: "image" | "diagram";
}

export const hero = {
  location: "CHON BURI, THAILAND",
  status: "AVAILABLE FOR SOFTWARE ENGINEERING OPPORTUNITIES",
  name: 'WUTTIPONG "BEST" THONGMON',
  role: "SOFTWARE ENGINEER",
  roleSub: "Manufacturing Systems / Automation / Web Applications",
  statement:
    "I build reliable software for the workflows a factory runs on (production, inventory, quality, operations), turning real factory requirements into systems people can depend on.",
  ctaView: "View Selected Work",
  ctaLinkedIn: "LinkedIn",
  gridLabels: [
    "MES", "SFC", "WMS", "OCR", "MODBUS",
    "BARCODE", "SQL", "WEB SYSTEMS", "AUTOMATION", "INTEGRATION",
  ],
};

export const about = {
  label: "01 / PROFILE",
  heading: "Built for the systems that keep operations moving.",
  paragraphs: [
    `Hi, I'm Wuttipong, though you can call me Best. I am a software engineer with over 13 years of experience building practical systems for manufacturing environments — and keeping them running.`,
    `My background combines development, integration, automation, reporting, production support. I have worked across front-end and back-end development, desktop applications, web systems, databases, barcode workflows, hardware communication, and factory-floor operations.`,
    `I enjoy translating real user requirements into dependable tools that work in practice—not only on paper. My long-term goal is to continue growing as a full-stack developer while creating meaningful systems across every layer of web and operational software.`,
  ],
  facts: [
    { value: "13+ YEARS", label: "Software Development & Support" },
    { value: "MANUFACTURING", label: "MES / SFC / WMS / Inventory / Quality" },
    { value: "FULL APPLICATION OWNERSHIP", label: "Requirements → Development → Deployment → Support" },
    { value: "CHON BURI, THAILAND", label: "On-site Manufacturing Experience" },
  ],
  image: {
    src: "images/early-tech-foundation.png",
    alt: "Early technical foundations",
    caption: "2008 / EARLY TECHNICAL FOUNDATIONS — Hands-on experience with networks and computer systems.",
  },
};

export const experience: Experience[] = [
  {
    company: "TPN FlexPak Co., Ltd.",
    role: "Programmer",
    period: "Nov 2025 – Aug 2026",
    location: "Chon Buri, Thailand / On-site",
    summary:
      "Maintained internal production and warehouse systems across TPN and TPK sites, progressing toward full application ownership across requirements through deployment and production support.",
    contributions: [
      "Built and maintained VB.NET, C#, and ASP.NET Core applications for barcode scanning, inventory tracking, and finished-goods management.",
      "Improved the Circulating Box system with notifications so teams could act quickly when goods were ready.",
      "Standardized deployment workflows through repeatable scripts and verification steps.",
      "Supported migration of applications and databases from TPN to TPK, including server configuration, network paths, and database connectivity.",
      "Provided production support and coordinated issue resolution with users and IT teams.",
      "Assisted with Infor MRP implementation, workstation setup, test databases, Excel imports, and testing issue tracking.",
    ],
    tags: [
      "VB.NET", "C#", "ASP.NET Core", "Barcode", "Inventory",
      "Deployment", "SQL", "Production Support",
    ],
  },
  {
    company: "Techman Electronics (Thailand) Co., Ltd. — MES Department",
    role: "Engineer",
    period: "Jun 2021 – Oct 2025",
    location: "Ban Bueng, Chon Buri, Thailand / On-site",
    summary:
      "Maintained software for FATP and SMT production lines, supporting work-order tracking, quality control, low-yield monitoring, data validation, and hardware integration.",
    contributions: [
      "Maintained MES modules for FATP and SMT manufacturing processes.",
      "Provided on-site support for production systems and coordinated with hardware vendors when required.",
      "Integrated Modbus and COM-port communication for PLCs, Keyence scanners, MicroHAWK MV-40 devices, Omron FA2 equipment, and Hardness RS-250A testers.",
      "Built a validation dashboard that cross-references live system data with user records.",
      "Used SSRS reports for daily production-data validation and troubleshooting.",
    ],
    tags: [
      "MES", "ASP.NET Core", "Modbus", "COM Port", "PLC",
      "SSRS", "SQL", "Manufacturing Systems",
    ],
  },
  {
    company: "World Electric (Thailand) Ltd.",
    role: "Programmer",
    period: "Sep 2016 – May 2021",
    location: "Chon Buri, Thailand / On-site",
    summary:
      "Built and maintained Shop Floor Control systems and automation tools for continuous manufacturing operations.",
    contributions: [
      "Built and maintained Shop Floor Control systems and production-tracking modules.",
      "Resolved critical issues affecting production-line operation.",
      "Developed a real-time OCR module using Tesseract.js, tracking.js, and MarvinJ for webcam-based capacity and quality checks.",
      "Automated test workflows and shipping validation to reduce manual QA activity.",
      "Created PL/SQL queries and reports for quality analysis and customer validation.",
    ],
    tags: [
      "PHP", "JavaScript", "Tesseract.js", "tracking.js", "MarvinJ",
      "PL/SQL", "OCR", "SFC",
    ],
  },
  {
    company: "Kasco IT Co., Ltd.",
    role: "VB.NET Programmer",
    period: "Feb 2015 – Sep 2016",
    location: "Bangkok, Thailand / Hybrid",
    summary:
      "Developed and supported warehouse-management software and ASP.NET web services for clients across multiple industries.",
    contributions: [
      "Built and maintained WMS modules based on business analyst requirements.",
      "Supported ASP.NET web services remotely and on-site.",
      "Fixed issues, configured Microsoft SQL Server databases, and updated technical documentation.",
      "Integrated and supported a Raspberry Pi-based Pick-to-Light warehouse-picking system.",
    ],
    tags: [
      "VB.NET", "ASP.NET", "WMS", "MSSQL",
      "Raspberry Pi", "Pick-to-Light", "Web Services",
    ],
  },
  {
    company: "Specialty Innovation Co., Ltd.",
    role: "IT Staff / Web Developer",
    period: "Jan 2014 – Feb 2015",
    location: "Chon Buri, Thailand / On-site",
    summary:
      "Managed the company Drupal website and provided general IT operations support.",
    contributions: [
      "Maintained the corporate Drupal website, including front-end updates, content management, and product information.",
      "Provided IT support, LAN setup, and office-equipment maintenance.",
    ],
    tags: [
      "Drupal", "HTML5", "CSS", "JavaScript", "jQuery", "LAN", "IT Support",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "SPC Data Maintenance",
    type: "MANUFACTURING QUALITY DATA / DESKTOP APPLICATION / REPORTING WORKFLOW",
    description:
      "A data-maintenance and visualization interface supporting production testing requirements, performance rates, business-unit reporting, and quality-related operational data.",
    role: "Software engineering and manufacturing-system support.",
    image: "images/projects/spc-data-maintenance.jpeg",
    tags: ["Manufacturing Data", "Quality", "Reporting", "Desktop Application", "SQL"],
  },
  {
    title: "MES & Production Systems",
    type: "FATP + SMT / MANUFACTURING EXECUTION SYSTEMS",
    description:
      "Maintained MES workflows supporting work-order tracking, quality gates, low-yield monitoring, and production-line operations in FATP and SMT environments.",
    role: "Application maintenance, production support, hardware integration, troubleshooting, data validation.",
    visual: "diagram",
    tags: ["MES", "FATP", "SMT", "Modbus", "COM Port", "SSRS", "SQL"],
  },
  {
    title: "Real-Time OCR Inspection",
    type: "QUALITY INSPECTION / COMPUTER VISION / BROWSER-BASED TOOL",
    description:
      "A webcam-based OCR workflow that enabled operators to perform capacity and quality checks directly on the production line.",
    role: "Designed and developed the real-time OCR module and related workflow automation.",
    visual: "diagram",
    tags: ["PHP", "JavaScript", "Tesseract.js", "tracking.js", "MarvinJ", "OCR"],
  },
  {
    title: "Warehouse & Inventory Integration",
    type: "WMS / BARCODE / PICK-TO-LIGHT / OPERATIONAL AUTOMATION",
    description:
      "Warehouse and inventory-related systems covering barcode processes, finished-goods workflows, WMS modules, and Pick-to-Light integration.",
    role: "Development, support, system configuration, database work, and integration.",
    visual: "diagram",
    tags: ["VB.NET", "WMS", "Barcode", "MSSQL", "Raspberry Pi", "Pick-to-Light"],
  },
  {
    title: "Corporate Product Website",
    type: "CORPORATE WEBSITE / DRUPAL / FRONT-END MAINTENANCE",
    description:
      "Maintained and updated a corporate website for a natural-products manufacturer, including content, product information, and front-end changes.",
    role: "Website administration, front-end updates, content management, and IT support.",
    image: "images/projects/specialty-natural-products.jpeg",
    tags: ["Drupal", "HTML", "CSS", "JavaScript", "jQuery", "Content Management"],
  },
];

export const toolkit = {
  label: "04 / TOOLKIT",
  heading: "A practical stack across web, data, and operations.",
  categories: [
    {
      title: "Web & Application Development",
      skills: [
        "Next.js", "JavaScript", "TypeScript", "HTML", "CSS",
        "Tailwind CSS", "Bootstrap", "PHP", "ASP.NET Core", "Drupal",
      ],
    },
    {
      title: "Languages & Frameworks",
      skills: [
        "C#", "VB.NET", "Java", "PHP", "JavaScript", "PL/SQL",
      ],
    },
    {
      title: "Data & Reporting",
      skills: [
        "Microsoft SQL Server", "MySQL", "PL/SQL", "SSRS",
        "Database Migration", "Data Validation",
      ],
    },
    {
      title: "Manufacturing & Integration",
      skills: [
        "MES", "SFC", "WMS", "Modbus", "COM Port Communication",
        "PLC Integration", "Barcode Systems", "OCR", "Pick-to-Light",
        "Raspberry Pi",
      ],
    },
    {
      title: "Professional Strengths",
      skills: [
        "Production Support", "Requirements Analysis", "System Integration",
        "Workflow Automation", "Deployment", "Troubleshooting",
        "Technical Documentation", "Cross-functional Collaboration",
      ],
    },
  ],
};

export const foundation = {
  label: "05 / FOUNDATION",
  heading: "Education & Recognition",
  education: [
    {
      school: "Mahasarakham University",
      degree: "Bachelor of Science in Computer Science",
      period: "May 2009 – Nov 2013",
      caption: "2009—2013 / COMPUTER SCIENCE / MAHASARAKHAM UNIVERSITY",
      image: {
        src: "images/university-group.jpg",
        alt: "University group photo",
        useWithPermission: true,
      },
    },
    {
      school: "Rajaprajanugroh 29 Sisaket School",
      degree: "Senior High School — Science and Mathematics",
      period: "2008",
    },
  ],
  recognition: {
    award: 'Best CIP Reset Project Award',
    company: "Techman Electronics (Thailand) Co., Ltd.",
    date: "September 2025",
  },
  certifications: [
    "Computer Technical Officer · Faculty of Public Health, Mahasarakham University",
    "Training: Mobile App with HTML5, AngularJS, Ionic Framework · Next Flow",
    "Creating a Website and Basic Multimedia · Ministry of Information and Communication Technology",
  ],
};

export const contact = {
  label: "06 / CONTACT",
  heading: "Let's build dependable systems.",
  body: `I am interested in software engineering opportunities where practical problem-solving, operational reliability, and continuous improvement matter.`,
  links: [
    { label: "GitHub", url: "https://github.com/bwuttipong", external: true },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/best-wuttipong/", external: true },
  ],
  footer: `© 2026 Wuttipong "Best" Thongmon. Built with Next.js and Tailwind CSS.`,
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Selected Systems", href: "#systems" },
  { label: "Toolkit", href: "#toolkit" },
  { label: "Foundation", href: "#foundation" },
  { label: "Contact", href: "#contact" },
];

export const siteMetadata = {
  title: 'Wuttipong "Best" Thongmon — Software Engineer',
  description:
    "Software Engineer with 13+ years of experience in manufacturing systems, automation, MES, and web applications. Based in Chon Buri, Thailand.",
};
