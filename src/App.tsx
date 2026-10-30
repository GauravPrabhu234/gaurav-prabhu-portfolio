import { useEffect, useRef, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  Sparkles,
  Cpu,
  Braces,
  Database,
  Layers3,
  Workflow,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ParticleField from "./components/ParticleField";
gsap.registerPlugin(ScrollTrigger);
const projects = [
  {
    n: "01",
    type: "MACHINE LEARNING / DATA",
    title: "[Your actual project name]",
    desc: "[Describe the problem, your approach, and the result you achieved.]",
    tags: ["Python", "Pandas", "Scikit-learn"],
    kind: "data",
  },
  {
    n: "02",
    type: "AI APPLICATION / SYSTEMS",
    title: "[Your actual project name]",
    desc: "[Explain what the application does, who it helps, and what you built.]",
    tags: ["Python", "AI", "API"],
    kind: "neural",
  },
  {
    n: "03",
    type: "ENGINEERING / AUTOMATION",
    title: "[Your actual project name]",
    desc: "[Describe the engineering challenge and how you validated the result.]",
    tags: ["Python", "Automation", "Git"],
    kind: "terminal",
  },
];
const skills = [
  {
    I: Braces,
    n: "01",
    label: "PROGRAMMING",
    title: "Python · SQL",
    desc: "Programming, problem solving, and data manipulation.",
  },
  {
    I: Database,
    n: "02",
    label: "DATA & ANALYSIS",
    title: "NumPy · Pandas",
    desc: "Preparing, exploring, and understanding datasets.",
  },
  {
    I: Cpu,
    n: "03",
    label: "MACHINE LEARNING",
    title: "Scikit-learn · XGBoost",
    desc: "Model development, evaluation, and iteration.",
  },
  {
    I: Layers3,
    n: "04",
    label: "DEEP LEARNING",
    title: "Neural networks · PyTorch",
    desc: "Foundations behind modern AI systems.",
  },
  {
    I: Sparkles,
    n: "05",
    label: "GENERATIVE AI",
    title: "LLMs · AI applications",
    desc: "Exploring language-model-powered applications.",
  },
  {
    I: Workflow,
    n: "06",
    label: "BACKEND & DELIVERY",
    title: "FastAPI · Git · Docker",
    desc: "Turning prototypes into usable software.",
  },
];

export default function App() {
  const [menu, setMenu] = useState(false),
    [active, setActive] = useState("home");
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-kicker,.hero-title,.hero-description,.hero-actions,.hero-metrics",
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.12,
          ease: "power3.out",
          delay: 0.1,
        },
      );
      gsap.utils
        .toArray<HTMLElement>(".reveal-up")
        .forEach((el) =>
          gsap.fromTo(
            el,
            { y: 28, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: { trigger: el, start: "top 88%", once: true },
            },
          ),
        );
      gsap.utils
        .toArray<HTMLElement>(".project-card")
        .forEach((el, i) =>
          gsap.fromTo(
            el,
            { y: 25, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.7,
              delay: i * 0.12,
              scrollTrigger: { trigger: el, start: "top 90%", once: true },
            },
          ),
        );
    }, root);
    const sections = [
      ...document.querySelectorAll<HTMLElement>("main section[id]"),
    ];
    const observer = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        }),
      { rootMargin: "-35% 0px -55% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    const progress = () => {
      const el = document.querySelector<HTMLElement>(".scroll-progress");
      if (el) {
        const max = document.documentElement.scrollHeight - innerHeight;
        el.style.width = `${max > 0 ? (scrollY / max) * 100 : 0}%`;
      }
    };
    addEventListener("scroll", progress, { passive: true });
    return () => {
      ctx.revert();
      observer.disconnect();
      removeEventListener("scroll", progress);
    };
  }, []);
  const close = () => setMenu(false);
  return (
    <div className="app-shell" ref={root}>
      <div className="scroll-progress" />
      <header className="site-header">
        <a className="brand" href="#home">
          GP<span>.</span>
        </a>
        <button
          className="menu-toggle"
          onClick={() => setMenu(!menu)}
          aria-label={menu ? "Close menu" : "Open menu"}
          aria-expanded={menu}
        >
          {menu ? <X /> : <Menu />}
        </button>
        <nav className={`site-nav ${menu ? "site-nav--open" : ""}`}>
          {[
            ["home", "Home"],
            ["about", "About"],
            ["projects", "Projects"],
            ["skills", "Stack"],
            ["experience", "Journey"],
            ["contact", "Contact"],
          ].map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={close}
              className={
                active === id ? "nav-link nav-link--active" : "nav-link"
              }
            >
              {label}
            </a>
          ))}
          <a
            className="nav-resume"
            href="https://drive.google.com/file/d/1mkheOufguBuHILkKbGYGjTubO673mCrQ/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Resume <ArrowUpRight size={14} />
          </a>
        </nav>
      </header>
      <main>
        <section className="hero section-wrap" id="home">
          <ParticleField />
          <div className="hero-content">
            <div className="hero-kicker">
              <span className="status-indicator" /> AI/ML ENGINEER IN THE MAKING{" "}
              <span className="kicker-divider">/</span> OPEN TO OPPORTUNITIES
            </div>
            <h1 className="hero-title">
              I build at the intersection of{" "}
              <span className="gradient-text">data, intelligence</span> &amp;
              software.
            </h1>
            <p className="hero-description">
              I’m Gaurav Prabhu — an aspiring AI/ML Engineer focused on turning
              data and ideas into practical, well-engineered solutions. I enjoy
              understanding the problem, experimenting with approaches, and
              building things that are genuinely useful.
            </p>
            <div className="hero-actions">
              <a className="button button--primary" href="#projects">
                Explore my work <ArrowDownRight size={17} />
              </a>
              <a
                className="button button--ghost"
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={16} /> GitHub <ArrowUpRight size={14} />
              </a>
            </div>
            <div className="hero-metrics">
              <div>
                <span className="metric-label">FOCUS</span>
                <strong>AI / ML Engineering</strong>
              </div>
              <div>
                <span className="metric-label">FOUNDATION</span>
                <strong>AI · ML · Data Science</strong>
              </div>
              <div>
                <span className="metric-label">LOCATION</span>
                <strong>
                  India <span className="location-dot">↗</span>
                </strong>
              </div>
            </div>
          </div>
          <div className="hero-art">
            <div className="hero-orb hero-orb--outer" />
            <div className="hero-orb hero-orb--inner" />
            <div className="hero-core">
              <div className="core-glyph">✳</div>
              <span>
                INTELLIGENCE
                <br />
                IN MOTION
              </span>
            </div>
            <div className="float-label float-label--top">
              <span className="float-dot" /> MODEL / SYSTEMS <span>01</span>
            </div>
            <div className="float-label float-label--bottom">
              <span className="float-wave">∿</span> LEARN <b>→</b> BUILD{" "}
              <b>→</b> ITERATE
            </div>
            <div className="coordinate coordinate--one">
              19°04' N<br />
              72°52' E
            </div>
            <div className="coordinate coordinate--two">FIG. 001 / GP</div>
          </div>
          <div className="hero-bottom">
            <span>
              SCROLL TO EXPLORE <span className="arrow-down">↓</span>
            </span>
            <span>01 — INTRODUCTION</span>
          </div>
        </section>
        <section className="signal-strip section-wrap reveal-up">
          <div className="signal-label">
            <span className="signal-mark">✳</span>
            <span>
              HOW I THINK
              <br />
              <b>THE BUILD LOOP</b>
            </span>
          </div>
          <div className="signal-flow">
            <span>Problem</span>
            <i>→</i>
            <span>Data</span>
            <i>→</i>
            <span>Model</span>
            <i>→</i>
            <span>Evaluation</span>
            <i>→</i>
            <span className="signal-final">Iteration</span>
          </div>
          <span className="signal-index">PROCESS_001</span>
        </section>
        <section className="section-wrap section-block" id="projects">
          <div className="section-heading reveal-up">
            <div>
              <span className="section-kicker">
                SELECTED WORK <span>02 / PROJECTS</span>
              </span>
              <h2>
                Ideas are easy.
                <br />
                <span className="gradient-text">Building is the fun part.</span>
              </h2>
            </div>
            <a
              className="text-link"
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              Explore GitHub <ArrowUpRight size={15} />
            </a>
          </div>
          <div className="project-grid">
            {projects.map((p) => (
              <article className="project-card" key={p.n}>
                <div className={`project-visual project-visual--${p.kind}`}>
                  <span className="project-number">{p.n}</span>
                  {p.kind === "data" && (
                    <div className="data-dashboard">
                      <div className="dashboard-top">
                        <span>MODEL / PERFORMANCE</span>
                        <span className="dashboard-status">LIVE VIEW</span>
                      </div>
                      <div className="chart-grid">
                        {[34, 54, 45, 76, 62, 88, 69, 95].map((h, i) => (
                          <i key={i} style={{ height: `${h}%` }} />
                        ))}
                      </div>
                      <div className="chart-legend">
                        <span>TRAINING</span>
                        <span>VALIDATION</span>
                      </div>
                    </div>
                  )}
                  {p.kind === "neural" && (
                    <div className="neural-network">
                      <span className="network-ring ring-a" />
                      <span className="network-ring ring-b" />
                      <span className="network-ring ring-c" />
                      <span className="network-core">AI</span>
                      {["a", "b", "c", "d"].map((n) => (
                        <span key={n} className={`network-node node-${n}`} />
                      ))}
                    </div>
                  )}
                  {p.kind === "terminal" && (
                    <div className="terminal-window">
                      <div className="terminal-title">
                        <i />
                        <i />
                        <i />
                        <span>pipeline.run</span>
                      </div>
                      <p>
                        <b>›</b> loading dataset...
                      </p>
                      <p>
                        <b>›</b> preparing features
                      </p>
                      <p>
                        <b>›</b> evaluating model
                      </p>
                      <div className="terminal-bar">
                        <span />
                      </div>
                      <p className="terminal-ok">✓ ready to iterate</p>
                    </div>
                  )}
                  <span className="project-type">{p.type}</span>
                  <span className="project-scan" />
                </div>
                <div className="project-copy">
                  <div className="project-meta">
                    <span>PROJECT / {p.n}</span>
                    <span className="project-state">
                      <i /> CASE STUDY
                    </span>
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <div className="tag-row">
                    {p.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  <a
                    className="project-link"
                    href="https://github.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Explore project <ArrowUpRight size={15} />
                  </a>
                </div>
              </article>
            ))}
          </div>
          <p className="fine-print">
            <span>NOTE</span> Project titles and descriptions are placeholders
            because the published portfolio does not provide complete project
            details. Replace these with your real work before publishing.
          </p>
        </section>
        <section className="stack-section" id="skills">
          <div className="section-wrap section-block">
            <div className="section-heading reveal-up">
              <div>
                <span className="section-kicker">
                  MY TOOLKIT <span>03 / STACK</span>
                </span>
                <h2>
                  The tools are a means.
                  <br />
                  <span className="gradient-text">
                    The solution is the point.
                  </span>
                </h2>
              </div>
              <p className="heading-note">
                A growing set of tools for building reliable, useful AI/ML
                systems.
              </p>
            </div>
            <div className="stack-grid">
              {skills.map(({ I, n, label, title, desc }) => (
                <article className="stack-card reveal-up" key={n}>
                  <div className="stack-card-top">
                    <span>
                      {n} / {label}
                    </span>
                    <I size={18} />
                  </div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                  <span className="stack-card-arrow">
                    <ArrowUpRight size={15} />
                  </span>
                </article>
              ))}
            </div>
            <p className="fine-print">
              <span>VERIFY</span> Confirm each skill reflects your current
              hands-on experience before publishing.
            </p>
          </div>
        </section>
        <section className="section-wrap section-block" id="about">
          <div className="about-grid">
            <div className="about-graphic reveal-up">
              <div className="about-grid-lines" />
              <div className="about-monogram">
                G<span>P</span>
                <i>.</i>
              </div>
              <div className="about-graphic-label">
                <span>CURIOUS BY DEFAULT</span>
                <span>ENGINEER BY PRACTICE</span>
              </div>
              <div className="about-side-code">0x01 / LEARN</div>
            </div>
            <div className="about-copy reveal-up">
              <span className="section-kicker">
                A LITTLE ABOUT ME <span>04 / THE PERSON</span>
              </span>
              <h2>
                Curiosity is the input.
                <br />
                <span className="gradient-text">Building is the output.</span>
              </h2>
              <p>
                My journey into AI/ML is driven by an interest in solving
                practical problems with technology. I’m working on strengthening
                my foundations, building projects, and learning how to take
                ideas beyond notebooks into useful software.
              </p>
              <p>
                I value understanding the fundamentals, learning from
                experiments, and improving through feedback. The goal is not
                just to make a model work — it’s to build something that works
                for a reason.
              </p>
              <a className="text-link" href="#contact">
                Start a conversation <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </section>
        <section className="journey-section" id="experience">
          <div className="section-wrap section-block">
            <div className="section-heading reveal-up">
              <div>
                <span className="section-kicker">
                  THE JOURNEY <span>05 / BACKGROUND</span>
                </span>
                <h2>
                  Every next step starts
                  <br />
                  <span className="gradient-text">with the last one.</span>
                </h2>
              </div>
            </div>
            <div className="timeline">
              <article className="timeline-item reveal-up">
                <span className="timeline-date">2026</span>
                <span className="timeline-node" />
                <div>
                  <span className="metric-label">EDUCATION</span>
                  <h3>B.Tech — Computer Science &amp; Engineering (Data Science)</h3>
                  <p>
                    Building a foundation in intelligent systems, data, and
                    software.
                  </p>
                </div>
                <span className="timeline-badge">GRADUATION</span>
              </article>
              <article className="timeline-item reveal-up">
                <span className="timeline-date">JAN – OCT 2026</span>
                <span className="timeline-node" />
                <div>
                  <span className="metric-label">PROFESSIONAL EXPERIENCE</span>
                  <h3>Business Analyst Intern — Enjay IT Solutions Ltd.</h3>
                  <p>
                    Supported CRM implementation, workflow configuration, and
                    client data migration. Gathered business requirements,
                    used Excel and SQL for data cleaning and reporting, and
                    collaborated with clients and internal teams to resolve issues.
                  </p>
                </div>
                <span className="timeline-badge">Full-Time</span>
              </article>
              <article className="timeline-item reveal-up">
                <span className="timeline-date">NOW</span>
                <span className="timeline-node timeline-node--active" />
                <div>
                  <span className="metric-label">CURRENT FOCUS</span>
                  <h3>Preparing to build as an AI/ML Engineer</h3>
                  <p>
                    Practising data analysis, strengthening ML foundations, and
                    developing practical projects.
                  </p>
                </div>
                <span className="timeline-badge timeline-badge--active">
                  IN PROGRESS
                </span>
              </article>
            </div>
          </div>
        </section>
        <section className="contact-section" id="contact">
          <div className="contact-noise" />
          <div className="section-wrap contact-inner reveal-up">
            <span className="section-kicker">
              HAVE SOMETHING IN MIND? <span>06 / CONTACT</span>
            </span>
            <div className="contact-layout">
              <div>
                <h2>
                  Let’s build
                  <br />
                  something <span className="gradient-text">meaningful.</span>
                </h2>
                <p>
                  I’m open to AI/ML internships, entry-level opportunities, and
                  collaborations where I can learn, contribute, and solve
                  practical problems.
                </p>
                <a
                  className="button button--primary"
                  href="mailto:prabhugaurav54@gmail.com"
                >
                  Get in touch <ArrowUpRight size={17} />
                </a>
              </div>
              <div className="contact-orbit">
                <span className="contact-orbit-inner">
                  GP<span>✳</span>
                </span>
                <span className="contact-orbit-caption">
                  OPEN TO WHAT'S NEXT
                </span>
              </div>
            </div>
            <div className="contact-links">
              <a href="mailto:prabhugaurav54@gmail.com">
                <Mail size={16} /> prabhugaurav54@gmail.com{" "}
                <ArrowUpRight size={14} />
              </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                <Github size={16} /> GitHub <ArrowUpRight size={14} />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={16} /> LinkedIn <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer section-wrap">
        <a className="brand" href="#home">
          GP<span>.</span>
        </a>
        <span>
          © {new Date().getFullYear()} GAURAV PRABHU <i>—</i> BUILT WITH
          INTENTION
        </span>
        <a href="#home" className="back-top">
          BACK TO TOP ↑
        </a>
      </footer>
      <div className="corner-index">GP / 2026</div>
    </div>
  );
}
