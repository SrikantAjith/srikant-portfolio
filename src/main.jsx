
import React from 'react';
import { createRoot } from 'react-dom/client';
import {
 ArrowDownRight,
 ArrowRight,
 ArrowUpRight,
 Github,
 Linkedin,
 Mail,
 MapPin,
 Menu,
 X,
 Code2,
 Layers3,
 Network,
 Server,
 Workflow,
 ExternalLink
} from 'lucide-react';
import './styles.css';

const email = 'srikantajith16@gmail.com';
const github = 'https://github.com/SrikantAjith';
const linkedin = 'https://www.linkedin.com/'; // Replace with your actual LinkedIn profile URL.

const skills = [
 ['Languages', ['Java', 'SQL']],
 ['Frameworks', ['Spring Boot', 'Spring Cloud', 'Spring Data JPA', 'Hibernate']],
 ['Architecture', ['Microservices', 'REST APIs', 'API Gateway', 'Event-Driven Systems', 'Resilience4j']],
 ['Messaging & Data', ['Kafka', 'RabbitMQ', 'Redis', 'MySQL', 'PostgreSQL', 'MongoDB']],
 ['Cloud & Delivery', ['AWS', 'Jenkins', 'GitHub Actions', 'Linux', 'Maven', 'Gradle', 'Git']],
 ['Engineering Tools', ['JMeter', 'Postman', 'Prometheus', 'Grafana', 'curl', 'tcpdump', 'Wireshark', 'OpenSSL']]
];

const experience = [
 [
  '01',
  'Bank integrations',
  '≈ 4 months',
  'Delivered wallet-to-bank and bank-to-wallet integrations for 3 major banks, owning REST APIs, transaction flows, and database changes across Mobile, Web, and USSD channels.',
  '3 major banks'
 ],
 [
  '02',
  'Merchant payment integrations',
  '6 months',
  'Implemented third-party e-commerce payment APIs and merchant callback integrations for approximately 10 merchants, integrating EIG and notification components for transaction-status updates.',
  '≈ 10 merchants'
 ],
 [
  '03',
  'Cross-border remittance & ERS',
  'Production service',
  'Built an international outgoing remittance service with multiple biller integrations and a real-time exchange-rate microservice. Developed REST APIs to create, update, and retrieve rates and enabled the ERS microservice for Web and App modules.',
  '1,274,219 transactions*'
 ],
 [
  '04',
  'Production reliability',
  '1 year',
  'Resolved L3 production incidents and client enhancement requests using log analysis, targeted SQL, and network-level diagnostics to troubleshoot transaction and integration failures.',
  '54 L3 incidents'
 ],
 [
  '05',
  'Deployment & performance',
  'NFR / CI/CD',
  'Contributed to modularizing backend logic into Spring Boot microservices and streamlining CI/CD, helping reduce average deployment time by approximately 30%. Contributed to an 8-hour endurance test across 8 payment API flows.',
  '4.99 TPS / 5 TPS target'
 ]
];

const projects = [
 {
  n: '01',
  name: 'Distributed API Rate Limiter',
  type: 'JAVA · SPRING BOOT · REDIS (IN PROGRESS)',
  desc: 'A configurable sliding-window rate limiter enforcing request limits per API key, returning HTTP 429 when a limit is exceeded and exposing quota state through response headers.',
  tags: ['Sliding Window', 'API Keys', 'HTTP 429', 'Rate-Limit Headers'],
  url: github + '/distributed-rate-limiter',
  icon: <Workflow />,
  status: 'Redis-backed shared state in progress'
 },
 {
  n: '02',
  name: 'E-Commerce Order Management',
  type: 'SPRING CLOUD · KAFKA · RESILIENCE4J',
  desc: 'A microservices system with Product, Order, Inventory, Payment, and Notification services, centralized configuration, API Gateway routing, and event-driven communication.',
  tags: ['Microservices', 'Kafka', 'API Gateway', 'Circuit Breaker'],
  url: github + '/ecommerce-microservices',
  icon: <Layers3 />,
  status: 'Project repository'
 }
];

function Heading({ eyebrow, title, copy }) {
 return (
     <div className="section-heading reveal">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {copy && <p className="section-copy">{copy}</p>}
     </div>
 );
}

function App() {
 const [open, setOpen] = React.useState(false);

 const nav = [
  ['About', '#about'],
  ['Experience', '#experience'],
  ['Projects', '#projects'],
  ['Skills', '#skills'],
  ['Contact', '#contact']
 ];

 return (
     <div className="shell">
      <header className="topbar">
       <a className="brand" href="#home" onClick={() => setOpen(false)}>
        <b>S<span>.</span></b>
        <span>SRIKANT AJITH</span>
       </a>

       <button
           className="menu"
           onClick={() => setOpen(!open)}
           aria-label="Toggle navigation"
       >
        {open ? <X /> : <Menu />}
       </button>

       <nav className={open ? 'nav nav-open' : 'nav'}>
        {nav.map(([n, h]) => (
            <a key={n} href={h} onClick={() => setOpen(false)}>
             {n}
            </a>
        ))}
        <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>
         Let's talk <ArrowUpRight size={14} />
        </a>
       </nav>
      </header>

      <main>
       <section className="hero wrap" id="home">
        <div className="hero-main">
         <div className="availability">
          <i /> OPEN TO BACKEND OPPORTUNITIES
         </div>

         <p className="eyebrow">HELLO, I'M</p>

         <h1>
          Srikant
          <br />
          <span>Ajith.</span>
         </h1>

         <h2>
          Java Backend Developer <em>·</em> Microservices &amp; Distributed Systems
         </h2>

         <p className="hero-copy">
          I build backend systems for payments, wallets, and digital products — with a focus on reliable APIs, event-driven architecture, and production problem-solving.
         </p>

         <div className="actions">
          <a className="btn primary" href="#projects">
           Explore my work <ArrowDownRight size={16} />
          </a>

          <a className="btn ghost" href="#contact">
           Get in touch <ArrowUpRight size={16} />
          </a>

          <a
              className="btn ghost"
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
          >
           Download Resume <ArrowDownRight size={16} />
          </a>
         </div>

         <div className="hero-meta">
          <span><MapPin /> Bangalore, India</span>
          <span><Code2 /> 4+ years of experience</span>
         </div>
        </div>

        <aside className="hero-side">
         <div className="terminal">
          <div className="terminal-bar">
           <i /><i /><i />
           <label>backend.dev</label>
          </div>

          <div className="terminal-code">
           <p className="dim">// What I work with</p>
           <p><b>const</b> engineer = {'{'}</p>
           <p className="indent"><span>focus</span>: <strong>'backend systems'</strong>,</p>
           <p className="indent"><span>stack</span>: [<strong>'Java'</strong>, <strong>'Spring'</strong>],</p>
           <p className="indent"><span>patterns</span>: [</p>
           <p className="indent2"><strong>'microservices'</strong>,</p>
           <p className="indent2"><strong>'event-driven'</strong>,</p>
           <p className="indent2"><strong>'resilience'</strong></p>
           <p className="indent">],</p>
           <p className="indent"><span>mindset</span>: <strong>'keep it reliable'</strong></p>
           <p>{'}'};</p>
           <div className="terminal-bottom">
            ● &nbsp; building dependable systems<span>_</span>
           </div>
          </div>
         </div>

         <div className="side-note">
          <i />
          <p>
           From transaction flows to distributed architecture,
           <br />
           I enjoy solving backend problems that matter.
          </p>
         </div>

         <div className="hero-index">
          <span>PORTFOLIO / 2026</span>
          <span>01 — 05</span>
         </div>
        </aside>

        <a className="scroll" href="#about">
         │ &nbsp; SCROLL TO EXPLORE
        </a>
       </section>

       <section className="metrics">
        <div><b>4<span>+</span></b><p>Years in backend engineering</p></div>
        <div><b>3</b><p>Major bank integrations</p></div>
        <div><b>54</b><p>L3 incidents resolved</p></div>
        <div><b>30<span>%</span></b><p>Deployment time reduction</p></div>
       </section>

       <section className="wrap block" id="about">
        <Heading
            eyebrow="01 / ABOUT"
            title={<>Engineering with<br /><span className="accent">purpose.</span></>}
            copy="I work at the intersection of backend engineering, payments, and distributed systems."
        />

        <div className="about-grid">
         <div className="about-copy reveal">
          <p>
           I'm a Java Backend Developer at <strong>Comviva Technologies</strong>, working on Mobiquity Pay — a digital wallet and payments platform. My experience spans bank integrations, merchant payments, cross-border remittance, microservices, and production support across Mobile, Web, and USSD channels.
          </p>
          <p>
           I enjoy understanding how systems behave in production, investigating integration failures, and designing backend services that are easier to maintain and operate.
          </p>
          <p>
           Alongside my professional work, I build projects that help me explore rate limiting, service resilience, event-driven communication, and distributed application design.
          </p>
          <a className="text-link" href="#experience">
           More about my experience <ArrowRight size={15} />
          </a>
         </div>

         <div className="principles">
          {[
           [<Network />, 'Distributed systems', 'Designing service boundaries, integration flows, and resilient communication.'],
           [<Server />, 'Reliable APIs', 'Building clear REST contracts and dependable transaction workflows.'],
           [<Workflow />, 'Event-driven design', 'Using messaging and resilience patterns to decouple backend services.']
          ].map((x, i) => (
              <article className="principle reveal" key={x[1]}>
               <div>{x[0]}</div>
               <section>
                <h3>{x[1]}</h3>
                <p>{x[2]}</p>
               </section>
               <small>0{i + 1}</small>
              </article>
          ))}
         </div>
        </div>
       </section>

       <section className="wrap block" id="experience">
        <Heading
            eyebrow="02 / EXPERIENCE"
            title={<>Work built around<br /><span className="accent">real-world systems.</span></>}
            copy="Professional experience across payments, integrations, reliability, and service modernization."
        />

        <div className="job-head reveal">
         <div>
          <p className="eyebrow">AUG 2022 — PRESENT</p>
          <h3>Java Backend Developer</h3>
          <p>Comviva Technologies · Mobiquity Pay</p>
         </div>
         <small>PROFESSIONAL EXPERIENCE</small>
        </div>

        <div className="experience-list">
         {experience.map(e => (
             <article className="experience-item reveal" key={e[0]}>
              <span className="num">{e[0]}</span>
              <div>
               <div className="exp-title">
                <h3>{e[1]}</h3>
                <span>{e[2]}</span>
               </div>
               <p>{e[3]}</p>
              </div>
              <b className="metric">{e[4]}</b>
             </article>
         ))}
        </div>

        <p className="footnote">
         *Transaction figure supplied by the portfolio owner. Verify the reporting period, transaction scope, and statuses counted before publishing publicly.
        </p>
       </section>

       <section className="wrap block" id="projects">
        <Heading
            eyebrow="03 / SELECTED WORK"
            title={<>Projects that show<br /><span className="accent">how I think.</span></>}
            copy="Hands-on projects exploring API governance, service boundaries, asynchronous communication, and resilience."
        />

        <div className="project-grid">
         {projects.map(p => (
             <article className="project reveal" key={p.n}>
              <div className="project-top">
               <div>{p.icon}</div>
               <span>PROJECT / {p.n}</span>
               <a href={p.url} target="_blank" rel="noreferrer" aria-label={`Open ${p.name} repository`}>
                <ArrowUpRight />
               </a>
              </div>

              <p className="project-type">{p.type}</p>
              <h3>{p.name}</h3>
              <p className="project-desc">{p.desc}</p>

              <div className="tags">
               {p.tags.map(t => <span key={t}>{t}</span>)}
              </div>

              <div className="project-foot">
               <span>{p.status}</span>
               <a href={p.url} target="_blank" rel="noreferrer">
                View repository <ArrowRight size={14} />
               </a>
              </div>
             </article>
         ))}
        </div>
       </section>

       <section className="wrap block" id="skills">
        <Heading
            eyebrow="04 / TOOLKIT"
            title={<>The tools behind<br /><span className="accent">the systems.</span></>}
            copy="A practical toolkit for building, integrating, testing, and supporting backend applications."
        />

        <div className="skills-grid">
         {skills.map((s, i) => (
             <article className="skill reveal" key={s[0]}>
              <div>
               <span>0{i + 1}</span>
               <h3>{s[0]}</h3>
              </div>
              <div className="tags">
               {s[1].map(t => <span key={t}>{t}</span>)}
              </div>
             </article>
         ))}
        </div>
       </section>

       <section className="wrap contact" id="contact">
        <div className="contact-panel reveal">
         <p className="eyebrow">05 / CONTACT</p>
         <h2>
          Have a backend<br />
          challenge in mind<span className="accent">?</span>
         </h2>
         <p>
          I'm interested in Java backend engineering opportunities where reliability, thoughtful design, and solving real problems matter.
         </p>

         <a className="btn primary" href={`mailto:${email}?subject=Backend%20Engineering%20Opportunity`}>
          Start a conversation <ArrowUpRight size={16} />
         </a>

         <div className="contact-links">
          <a href={`mailto:${email}`}><Mail /> {email}</a>
          <a href={github} target="_blank" rel="noreferrer"><Github /> GitHub <ExternalLink /></a>
          <a href={linkedin} target="_blank" rel="noreferrer"><Linkedin /> LinkedIn <ExternalLink /></a>
         </div>
        </div>
       </section>
      </main>

      <footer className="footer">
       <a className="brand" href="#home">
        <b>S<span>.</span></b>
        <span>SRIKANT AJITH</span>
       </a>
       <p>Designed with intent. Built with React.</p>
       <a className="back-top" href="#home">
        BACK TO TOP <ArrowUpRight size={13} />
       </a>
       <small>© {new Date().getFullYear()} Srikant Ajith</small>
      </footer>
     </div>
 );
}

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
     <App />
    </React.StrictMode>
);
