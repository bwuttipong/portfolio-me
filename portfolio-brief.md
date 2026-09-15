# Wuttipong “Best” Thongmon — Portfolio Website Brief

## Purpose

Build a modern, recruiter-focused software engineer portfolio for Wuttipong “Best” Thongmon.

The website should communicate practical experience in manufacturing software, automation, system integration, data workflows, web applications, and production support.

**Primary audience:** Recruiters and interviewers  
**Language:** English  
**Recommended stack:** Next.js, TypeScript, Tailwind CSS, Framer Motion  
**Style:** Monochromatic, neutral, editorial minimalism with subtle technical/industrial details

---

## Personal Information

**Name:** Wuttipong “Best” Thongmon  
**Role:** Software Engineer  
**Location:** Chon Buri, Thailand  

**Primary positioning:**

> Software Engineer for Manufacturing Systems & Automation

**Hero statement:**

> I build reliable software for production, inventory, quality, and operational workflows—turning real factory requirements into systems people can depend on.

**Short introduction:**

> I am a software developer with over 13 years of experience in software development, system integration, automation, and production support—primarily in manufacturing environments. My work spans front-end and back-end development, desktop applications, web systems, database reporting, hardware integration, and workflow automation.

---

## Links

**GitHub:** https://github.com/bwuttipong  
**LinkedIn:** https://www.linkedin.com/in/best-wuttipong/  
**Email:** Keep private for now. Use a contact form or placeholder such as `hello@yourdomain.com`.

---

## Design Direction

### Visual Style

- Warm off-white background: `#F4F2EE`
- Near-black text and surfaces: `#171717`
- Warm gray: `#B6B0A8`
- Soft border color: `#D8D4CE`
- Avoid bright accent colors.
- Use large editorial typography, compact technical metadata, thin lines, grids, and restrained motion.
- The site should look modern and polished—not like a generic developer portfolio.
- The interface should feel like a combination of an editorial portfolio and a production-system dashboard.

### Typography

Suggested Google Fonts:
- **Headings:** Space Grotesk, Archivo, or Inter Tight
- **Body / metadata:** Inter, IBM Plex Sans, or Geist Mono

### Motion

Use subtle Framer Motion animations:
- Initial dark loading screen with system labels assembling into a grid.
- Hero title and portrait fade/slide in after the loading sequence.
- Scroll-triggered section reveals.
- Project cards with hover movement and metadata reveal.
- Fine animated grid lines or data nodes in the hero background.
- Respect `prefers-reduced-motion`.

Do not use excessive floating icons, spinning 3D objects, code-rain effects, or neon visuals.

---

## Assets

Place assets in:

```text
public/
  images/
    best-portrait.jpg
    early-tech-foundation.jpg
    university-group.jpg
    projects/
      spc-data-maintenance.png
      specialty-natural-products.png
```

### Image Usage

| Asset | Placement | Notes |
|---|---|---|
| `best-portrait.jpg` | Hero | Primary image. Position on the right side. Preserve open space on the left for text. |
| `early-tech-foundation.jpg` | About / Origin Story | Small archival-style image showing early hands-on technical interest. |
| `university-group.jpg` | Education section | Use only if permission exists to publish it publicly. Keep the existing watermark intact. |
| `spc-data-maintenance.png` | Selected Systems | Main featured case-study image. Present in a dark application frame. |
| `specialty-natural-products.png` | Selected Systems | Previous Drupal / corporate web work. Present in a dark browser frame. |

### Image Treatments

- Portrait: retain its natural warm-neutral color treatment.
- Legacy images: apply a subtle grayscale or desaturated overlay, but do not make them unreadable.
- Application screenshots: keep readable; use modern dark frames and metadata labels around them.
- Do not use stock images or generic “developer coding at laptop” visuals.

---

## Navigation

```text
Home
About
Experience
Selected Systems
Toolkit
Contact
```

Desktop navigation should be minimal and sticky.  
On mobile, use a simple menu drawer or expandable navigation.

---

## Page Structure and Content

# 1. Hero

**Eyebrow label:**

```text
CHON BURI, THAILAND / AVAILABLE FOR SOFTWARE ENGINEERING OPPORTUNITIES
```

**Main heading:**

```text
WUTTIPONG
“BEST” THONGMON
```

**Role line:**

```text
SOFTWARE ENGINEER
Manufacturing Systems / Automation / Web Applications
```

**Hero statement:**

> I build reliable software for production, inventory, quality, and operational workflows—turning real factory requirements into systems people can depend on.

**CTA buttons:**

```text
View Selected Work
LinkedIn ↗
```

**Technical labels for animated grid:**

```text
MES
SFC
WMS
OCR
MODBUS
BARCODE
SQL
WEB SYSTEMS
AUTOMATION
INTEGRATION
```

**Hero layout:**

```text
Left:
- Technical location/status label
- Large name
- Role
- Introductory statement
- Buttons

Right:
- Professional portrait
- Light system grid / data-node overlays
- Small metadata labels
```

---

# 2. About / Profile

**Section label:**

```text
01 / PROFILE
```

**Heading:**

```text
Built for the systems that keep operations moving.
```

**Body copy:**

> Hi, I’m Wuttipong, though you can call me Best. I am a software engineer with over 13 years of experience building, maintaining, and improving practical systems for manufacturing environments.
>
> My background combines software development, system integration, automation, reporting, and production support. I have worked across front-end and back-end development, desktop applications, web systems, databases, barcode workflows, hardware communication, and factory-floor operations.
>
> I enjoy translating real user requirements into dependable tools that work in practice—not only on paper. My long-term goal is to continue growing as a full-stack developer while creating meaningful systems across every layer of web and operational software.

**Facts / stats:**

```text
13+ YEARS
Software Development & Support

MANUFACTURING
MES / SFC / WMS / Inventory / Quality

FULL APPLICATION OWNERSHIP
Requirements → Development → Deployment → Support

CHON BURI, THAILAND
On-site Manufacturing Experience
```

**Image:** `early-tech-foundation.jpg`

**Caption:**

```text
2008 / EARLY TECHNICAL FOUNDATIONS
Hands-on experience with networks and computer systems.
```

---

# 3. Experience

**Section label:**

```text
02 / EXPERIENCE
```

**Heading:**

```text
A career built close to real operations.
```

Use an interactive vertical timeline or event-log layout. Each role should include title, company, date, location, summary, selected contributions, and technology tags.

## TPN FlexPak Co., Ltd.

**Role:** Programmer  
**Period:** Nov 2025 – Aug 2026  
**Location:** Chon Buri, Thailand / On-site  

**Summary:**

> Maintained internal production, inventory, and warehouse systems across TPN and TPK sites, progressing toward full application ownership across requirements, development, deployment, and production support.

**Selected contributions:**
- Built and maintained VB.NET, C#, and ASP.NET Core applications for barcode scanning, inventory tracking, and finished-goods management.
- Improved the Circulating Box system with notifications so teams could act quickly when goods were ready.
- Standardized deployment workflows through repeatable scripts and verification steps.
- Supported migration of applications and databases from TPN to TPK, including server configuration, network paths, and database connectivity.
- Provided production support and coordinated issue resolution with users and IT teams.
- Assisted with Infor MRP implementation, workstation setup, test databases, Excel imports, and testing issue tracking.

**Tags:**

```text
VB.NET / C# / ASP.NET Core / Barcode / Inventory / Deployment / SQL / Production Support
```

## Techman Electronics (Thailand) Co., Ltd. — MES Department

**Role:** Engineer  
**Period:** Jun 2021 – Oct 2025  
**Location:** Ban Bueng, Chon Buri, Thailand / On-site  

**Summary:**

> Maintained software for FATP and SMT production lines, supporting work-order tracking, quality control, low-yield monitoring, data validation, and hardware integration.

**Selected contributions:**
- Maintained MES modules for FATP and SMT manufacturing processes.
- Provided on-site support for production systems and coordinated with hardware vendors when required.
- Integrated Modbus and COM-port communication for PLCs, Keyence scanners, MicroHAWK MV-40 devices, Omron FA2 equipment, and Hardness RS-250A testers.
- Built a validation dashboard that cross-references live system data with user records.
- Used SSRS reports for daily production-data validation and troubleshooting.

**Tags:**

```text
MES / ASP.NET Core / Modbus / COM Port / PLC / SSRS / SQL / Manufacturing Systems
```

## World Electric (Thailand) Ltd.

**Role:** Programmer  
**Period:** Sep 2016 – May 2021  
**Location:** Chon Buri, Thailand / On-site  

**Summary:**

> Built and maintained Shop Floor Control systems and automation tools for continuous manufacturing operations.

**Selected contributions:**
- Built and maintained Shop Floor Control systems and production-tracking modules.
- Resolved critical issues affecting production-line operation.
- Developed a real-time OCR module using Tesseract.js, tracking.js, and MarvinJ for webcam-based capacity and quality checks.
- Automated test workflows and shipping validation to reduce manual QA activity.
- Created PL/SQL queries and reports for quality analysis and customer validation.

**Tags:**

```text
PHP / JavaScript / Tesseract.js / tracking.js / MarvinJ / PL/SQL / OCR / SFC
```

## Kasco IT Co., Ltd.

**Role:** VB.NET Programmer  
**Period:** Feb 2015 – Sep 2016  
**Location:** Bangkok, Thailand / Hybrid  

**Summary:**

> Developed and supported warehouse-management software and ASP.NET web services for clients across multiple industries.

**Selected contributions:**
- Built and maintained WMS modules based on business analyst requirements.
- Supported ASP.NET web services remotely and on-site.
- Fixed issues, configured Microsoft SQL Server databases, and updated technical documentation.
- Integrated and supported a Raspberry Pi-based Pick-to-Light warehouse-picking system.

**Tags:**

```text
VB.NET / ASP.NET / WMS / MSSQL / Raspberry Pi / Pick-to-Light / Web Services
```

## Specialty Innovation Co., Ltd.

**Role:** IT Staff / Web Developer  
**Period:** Jan 2014 – Feb 2015  
**Location:** Chon Buri, Thailand / On-site  

**Summary:**

> Managed the company Drupal website and provided general IT operations support.

**Selected contributions:**
- Maintained the corporate Drupal website, including front-end updates, content management, and product information.
- Provided IT support, LAN setup, and office-equipment maintenance.

**Tags:**

```text
Drupal / HTML5 / CSS / JavaScript / jQuery / LAN / IT Support
```

---

# 4. Selected Systems

**Section label:**

```text
03 / SELECTED SYSTEMS
```

**Heading:**

```text
Software made for real production environments.
```

Show projects as large responsive cards. Each card includes image or a technical visual, project type, short description, technology tags, and contribution.

## Project 1 — SPC Data Maintenance

**Type:**

```text
MANUFACTURING QUALITY DATA / DESKTOP APPLICATION / REPORTING WORKFLOW
```

**Description:**

> A data-maintenance and visualization interface supporting production testing requirements, performance rates, business-unit reporting, and quality-related operational data.

**Role:**

> Software engineering and manufacturing-system support.

**Image:** `spc-data-maintenance.png`

**Tags:**

```text
Manufacturing Data / Quality / Reporting / Desktop Application / SQL
```

## Project 2 — MES & Production Systems

**Type:**

```text
FATP + SMT / MANUFACTURING EXECUTION SYSTEMS
```

**Description:**

> Maintained MES workflows supporting work-order tracking, quality gates, low-yield monitoring, and production-line operations in FATP and SMT environments.

**Role:**

> Application maintenance, production support, hardware integration, troubleshooting, and data validation.

**Tags:**

```text
MES / FATP / SMT / Modbus / COM Port / SSRS / SQL
```

**Visual:**

Use a custom abstract data-flow diagram rather than a fake product screenshot.

## Project 3 — Real-Time OCR Inspection

**Type:**

```text
QUALITY INSPECTION / COMPUTER VISION / BROWSER-BASED TOOL
```

**Description:**

> A webcam-based OCR workflow that enabled operators to perform capacity and quality checks directly on the production line.

**Role:**

> Designed and developed the real-time OCR module and related workflow automation.

**Tags:**

```text
PHP / JavaScript / Tesseract.js / tracking.js / MarvinJ / OCR
```

**Visual:**

Use an abstract camera frame, scanning lines, and OCR text-box interface treatment.

## Project 4 — Warehouse & Inventory Integration

**Type:**

```text
WMS / BARCODE / PICK-TO-LIGHT / OPERATIONAL AUTOMATION
```

**Description:**

> Warehouse and inventory-related systems covering barcode processes, finished-goods workflows, WMS modules, and Pick-to-Light integration.

**Role:**

> Development, support, system configuration, database work, and integration.

**Tags:**

```text
VB.NET / WMS / Barcode / MSSQL / Raspberry Pi / Pick-to-Light
```

**Visual:**

Use an abstract inventory-grid or barcode visualization.

## Project 5 — Corporate Product Website

**Type:**

```text
CORPORATE WEBSITE / DRUPAL / FRONT-END MAINTENANCE
```

**Description:**

> Maintained and updated a corporate website for a natural-products manufacturer, including content, product information, and front-end changes.

**Role:**

> Website administration, front-end updates, content management, and IT support.

**Image:** `specialty-natural-products.png`

**Tags:**

```text
Drupal / HTML / CSS / JavaScript / jQuery / Content Management
```

---

# 5. Technical Toolkit

**Section label:**

```text
04 / TOOLKIT
```

**Heading:**

```text
A practical stack across web, data, and operations.
```

Avoid skill percentages and circular charts. Use categorized tags or a clean technical map.

## Web & Application Development

```text
Next.js
JavaScript
TypeScript
HTML
CSS
Tailwind CSS
Bootstrap
PHP
ASP.NET Core
Drupal
```

## Languages & Frameworks

```text
C#
VB.NET
Java
PHP
JavaScript
PL/SQL
```

## Data & Reporting

```text
Microsoft SQL Server
MySQL
PL/SQL
SSRS
Database Migration
Data Validation
```

## Manufacturing & Integration

```text
MES
SFC
WMS
Modbus
COM Port Communication
PLC Integration
Barcode Systems
OCR
Pick-to-Light
Raspberry Pi
```

## Professional Strengths

```text
Production Support
Requirements Analysis
System Integration
Workflow Automation
Deployment
Troubleshooting
Technical Documentation
Cross-functional Collaboration
```

---

# 6. Education & Recognition

**Section label:**

```text
05 / FOUNDATION
```

## Education

**Mahasarakham University**  
Bachelor of Science in Computer Science  
May 2009 – Nov 2013  

**Education caption:**

```text
2009—2013 / COMPUTER SCIENCE / MAHASARAKHAM UNIVERSITY
```

Use `university-group.jpg` only with confirmed publishing permission.

**Rajaprajanugroh 29 Sisaket School**  
Senior High School — Science and Mathematics  
2008

## Recognition

**Best CIP Reset Project Award**  
Techman Electronics (Thailand) Co., Ltd.  
September 2025

## Certifications

Keep certifications concise and secondary:
- Computer Technical Officer — Faculty of Public Health, Mahasarakham University
- Training: Mobile App with HTML5, AngularJS, and Ionic Framework — Next Flow
- Creating a Website and Basic Multimedia — Ministry of Information and Communication Technology

---

# 7. Contact

**Section label:**

```text
06 / CONTACT
```

**Heading:**

```text
Let’s build dependable systems.
```

**Body copy:**

> I am interested in software engineering opportunities where practical problem-solving, operational reliability, and continuous improvement matter.

**Links:**

```text
GitHub ↗
LinkedIn ↗
Email / Contact Form
```

**Footer line:**

```text
© 2026 Wuttipong “Best” Thongmon. Built with Next.js and Tailwind CSS.
```

---

## Functional Requirements

- Fully responsive: mobile, tablet, desktop.
- Accessible semantic HTML and keyboard navigation.
- High contrast and readable typography.
- Optimized images with Next.js `Image`.
- Use `next/font` for performance.
- Respect reduced-motion preferences.
- Add page metadata, Open Graph image, favicon, and SEO description.
- Use smooth anchor scrolling.
- Keep page load fast and avoid heavy libraries except Framer Motion.
- Add a downloadable résumé button later when a PDF is available.
- Use a contact form provider later, such as Resend, Formspree, or a server action with email delivery.

---

## Suggested Project Structure

```text
app/
  layout.tsx
  page.tsx
  globals.css
components/
  navigation.tsx
  hero.tsx
  about.tsx
  experience.tsx
  projects.tsx
  toolkit.tsx
  education.tsx
  contact.tsx
  section-heading.tsx
  reveal.tsx
  system-grid.tsx
data/
  portfolio.ts
public/
  images/
    best-portrait.jpg
    early-tech-foundation.jpg
    university-group.jpg
    projects/
      spc-data-maintenance.png
      specialty-natural-products.png
```

---

## Final Creative Notes

- The hero portrait is the only large personal image.
- The portfolio should use one portrait plus three to five project/history visuals total.
- Let typography, spacing, animation, and real project evidence carry the design.
- Present older systems proudly: the goal is to show practical business impact, maintenance skill, and technical depth—not to pretend every project used the newest visual style.
- Do not claim metrics, tools, project ownership, or outcomes that cannot be supported by the supplied experience details.