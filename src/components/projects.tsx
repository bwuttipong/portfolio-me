import { projects } from "@/data/portfolio";
import { Lightbox } from "./lightbox";
import { Reveal } from "./motion";

export function Tags({ items }: { items: string[] }) { return <ul className="tags" aria-label="Technologies and expertise">{items.map(item => <li key={item}>{item}</li>)}</ul>; }

function Diagram({ index }: { index: number }) {
  return <div className={`diagram diagram-${index}`} role="img" aria-label={index === 1 ? "Conceptual MES workflow: work order to production to quality to reporting" : index === 2 ? "Conceptual OCR workflow: camera capture, text recognition, quality validation" : "Conceptual warehouse workflow: barcode scan, inventory, pick-to-light"}>
    <div className="diagram-top mono"><span>WORKFLOW STUDY / 0{index + 1}</span><span>SCHEMATIC</span></div>
    {index === 1 ? <div className="flow"><span>WORK<br/>ORDER</span><b>→</b><span>FATP<br/>SMT</span><b>→</b><span>QUALITY<br/>GATE</span><div className="flow-line">MODBUS / COM PORT → SQL → SSRS</div></div>
      : index === 2 ? <div className="ocr"><span className="corner tl"/><span className="corner tr"/><span className="corner bl"/><span className="corner br"/><span className="ocr-text">CAPACITY<br/><strong>TEXT RECOGNITION</strong></span><span className="scan-line"/><span className="ocr-caption mono">CAMERA → OCR → VALIDATION</span></div>
      : <div className="warehouse"><div className="inventory">{Array.from({length: 12}, (_,i) => <span key={i}>{String(i+1).padStart(2,"0")}</span>)}</div><div className="barcode"/><span className="mono">SCAN → LOCATE → PICK</span></div>}
    <span className="diagram-note mono">CONCEPTUAL VISUAL · NOT A PRODUCT SCREENSHOT</span>
  </div>;
}
export function Projects() {
  return <div className="projects-grid">{projects.map((project, index) => <Reveal key={project.title} className={`project ${index % 2 === 1 ? "flip" : ""}`}>
    <article>
      {project.image ? <div className={index === 4 ? "website-frame" : ""}><Lightbox src={`/${project.image}`} alt={index === 0 ? "SPC Data Maintenance interface with testing requirements, performance charts, and business-unit reports" : "Specialty Natural Products corporate Drupal website and product catalogue"} width={index === 0 ? 1200 : 641} height={index === 0 ? 650 : 800} caption="SUPPLIED PROJECT SCREENSHOT" frameBar={index === 0 ? "SPC / DATA MAINTENANCE" : "ARCHIVE / CORPORATE WEBSITE"} /></div> : <Diagram index={index}/>}
      <div className="project-content"><span className="mono project-type">{String(index+1).padStart(2,"0")} / {project.type}</span><h3>{project.title}</h3><p>{project.description}</p><p className="contribution"><span className="mono">CONTRIBUTION</span>{project.role}</p><Tags items={project.tags}/></div>
    </article>
  </Reveal>)}</div>;
}
