import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X,
  Network, PanelsTopLeft, ScanEye, Server, Terminal, Wrench, Code2,
  ExternalLink, MapPin, GraduationCap, BriefcaseBusiness
} from 'lucide-react';
import './style.css';

const skills = [
  { name: 'Frontend', items: 'React.js · JavaScript · Tailwind CSS' },
  { name: 'Backend', items: 'Python · Flask · REST API' },
  { name: 'Database', items: 'SQLite · Relational data' },
  { name: 'Networking', items: 'Subnetting · MikroTik · Routing · Troubleshooting' },
  { name: 'Infrastructure', items: 'Linux · Proxmox · Nginx · Docker basics · Cloudflare Tunnel' },
  { name: 'Computer Vision', items: 'Python · OpenCV · VGG16 · OCR' },
];

const projects = [
  {
    number: '01',
    type: 'WEB APPLICATION · INTERNSHIP PROJECT',
    title: 'Dashboard Manajemen Sales',
    description: 'Dashboard terpusat untuk memantau progres penjualan Indibiz. Mengolah data pelanggan dan aktivitas sales agar perkembangan funnel lebih mudah dipantau.',
    stack: ['React.js', 'Flask', 'SQLite', 'JWT'],
    icon: PanelsTopLeft,
    outcome: 'Fokus pada alur data, visualisasi progres, dan pemisahan akses admin serta employee.'
  },
  {
    number: '02',
    type: 'COMPUTER VISION · RESEARCH',
    title: 'Network Activity Filtering',
    description: 'Riset penyaringan aktivitas jaringan untuk membantu mencegah akses ke situs judi. Pendekatan menggabungkan analisis visual halaman dan teks hasil OCR.',
    stack: ['Python', 'VGG16', 'OCR', 'Flask', 'Squid Proxy'],
    icon: ScanEye,
    outcome: 'Pipeline penelitian: capture halaman, preprocessing, klasifikasi, lalu keputusan allow atau block.'
  },
  {
    number: '03',
    type: 'HOMELAB · INFRASTRUCTURE',
    title: 'Self-hosted Services',
    description: 'Eksplorasi pengelolaan layanan mandiri di lingkungan homelab, mulai dari virtualisasi hingga publikasi layanan melalui reverse proxy dan tunnel.',
    stack: ['Proxmox', 'Ubuntu', 'Nginx', 'Cloudflare Tunnel'],
    icon: Server,
    outcome: 'Praktik langsung memahami deployment, konfigurasi jaringan, dan troubleshooting layanan.'
  }
];

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">N.</span><span>NAFIS<span className="brand-muted"> / PORTFOLIO</span></span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X/> : <Menu/>}</button>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          {['About', 'Skills', 'Projects', 'Experience'].map(x => <a key={x} href={`#${x.toLowerCase()}`} onClick={closeMenu}>{x}</a>)}
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Let’s talk <ArrowUpRight size={15}/></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot"/> OPEN TO OPPORTUNITIES <span className="eyebrow-line"/></div>
            <h1>Building things.<br/><em>Understanding</em><br/>how they work.</h1>
            <img className="hero-image" src="/src/assets/foto.png" alt="Nafis working on a laptop" style={{ borderRadius: '50%' }} width={300} height={300}/>
            <p className="hero-lead">Saya Nafis, mahasiswa Informatika yang tertarik pada pengembangan aplikasi, jaringan komputer, dan bagaimana sistem bekerja di balik layar.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore projects <ArrowUpRight size={17}/></a>
              <a className="text-link" href="#about">More about me <ArrowDownRight size={16}/></a>
            </div>
          </div>
          <div className="hero-aside">
            <div className="terminal-card">
              <div className="terminal-head"><div className="window-dots"><i/><i/><i/></div><span>naf is@portfolio:~</span><span className="terminal-live">● ONLINE</span></div>
              <div className="terminal-body">
                <p><span className="prompt">$</span> whoami</p>
                <h2>Informatics Student<span className="cursor">_</span></h2>
                <p className="terminal-dim">Interested in systems, networks<br/>and practical problem solving.</p>
                <div className="terminal-rule"/>
                <div className="terminal-stats"><div><b>03</b><small>SELECTED PROJECTS</small></div><div><b>06</b><small>TECH AREAS</small></div></div>
              </div>
            </div>
            <div className="hero-note"><span className="note-index">01 / 03</span><span>Curious by nature.<br/>Practical by approach.</span></div>
          </div>
          <div className="hero-bottom"><span>BASED IN INDONESIA</span><span>SCROLL TO EXPLORE ↓</span><span>UPDATED — 2026</span></div>
        </section>

        <section className="about section-wrap section-block" id="about">
          <div className="section-label"><span>01</span> / ABOUT</div>
          <div className="about-content">
            <h2>Not just making it work.<br/><em>Learning why it works.</em></h2>
            <div className="about-grid">
              <p className="about-intro">Saya menikmati proses mencari penyebab masalah, menguji kemungkinan, lalu memperbaikinya. Ketertarikan saya berada di persimpangan software, infrastruktur, dan jaringan.</p>
              <div className="about-detail">
                <p>Saya pernah terlibat dalam kegiatan administrasi dan aktivitas lapangan di Telkom Witel Kudus. Di luar itu, saya mengembangkan proyek aplikasi web, bereksperimen dengan homelab, serta mengerjakan riset computer vision.</p>
                <p>Saat ini saya terus memperkuat fondasi teknis melalui praktik langsung dan dokumentasi proses kerja.</p>
                <div className="meta-line"><GraduationCap size={16}/><span>Informatika · Universitas Muhammadiyah Semarang</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="skills section-wrap section-block" id="skills">
          <div className="section-label"><span>02</span> / TOOLKIT</div>
          <div className="section-heading"><h2>Tools I work with.</h2><p>Teknologi yang pernah digunakan dalam proyek dan eksplorasi mandiri. Tingkat penguasaan dapat berbeda pada tiap area.</p></div>
          <div className="skill-list">
            {skills.map((s, i) => <div className="skill-row" key={s.name}><span className="skill-num">0{i+1}</span><h3>{s.name}</h3><p>{s.items}</p><ArrowUpRight className="skill-arrow" size={17}/></div>)}
          </div>
        </section>

        <section className="projects section-wrap section-block" id="projects">
          <div className="section-label"><span>03</span> / SELECTED WORK</div>
          <div className="section-heading project-heading"><h2>Things I’ve<br/><em>worked on.</em></h2><p>Beberapa pekerjaan yang mewakili ketertarikan saya pada software, computer vision, dan infrastruktur.</p></div>
          <div className="project-list">
            {projects.map(p => {
              const Icon = p.icon;
              return <article className="project-card" key={p.number}>
                <div className="project-top"><span>{p.number} — {p.type}</span><Icon size={23}/></div>
                <div className="project-main"><h3>{p.title}</h3><p>{p.description}</p><div className="tag-list">{p.stack.map(t => <span key={t}>{t}</span>)}</div></div>
                <div className="project-foot"><span>{p.outcome}</span><span className="project-arrow"><ArrowUpRight size={19}/></span></div>
              </article>
            })}
          </div>
          <p className="project-disclaimer">Catatan: deskripsi proyek merangkum ruang lingkup pekerjaan dan pengembangan, bukan klaim metrik atau hasil produksi.</p>
        </section>

        <section className="experience section-wrap section-block" id="experience">
          <div className="section-label"><span>04</span> / EXPERIENCE</div>
          <div className="experience-row">
            <div className="experience-icon"><BriefcaseBusiness size={20}/></div>
            <div className="experience-main"><span className="eyebrow-small">SEPTEMBER — DESEMBER 2024</span><h3>Telkom Witel Kudus</h3><p className="role">Praktik Kerja / Admin Support</p><p>Terlibat dalam kegiatan administrasi serta mengenal proses profiling pelanggan secara door-to-door untuk memperkenalkan layanan Indibiz. Pengalaman ini melatih komunikasi, interaksi dengan masyarakat, dan pemahaman proses bisnis layanan digital.</p></div>
            <span className="experience-type">INTERNSHIP</span>
          </div>
        </section>

        <section className="contact section-wrap section-block" id="contact">
          <div className="section-label"><span>05</span> / CONTACT</div>
          <div className="contact-content"><p className="eyebrow-small">HAVE A PROJECT OR OPPORTUNITY?</p><h2>Let’s make<br/><em>something useful.</em></h2><p className="contact-copy">Terbuka untuk kesempatan IT Support, Technical Support, pengembangan aplikasi, maupun kolaborasi proyek teknologi.</p>
            <a className="button button-primary" href="mailto:EMAIL_KAMU@example.com">Get in touch <ArrowUpRight size={17}/></a>
          </div>
          <div className="contact-bottom"><div><span className="footer-label">FIND ME</span><p><a href="https://github.com/USERNAME" target="_blank" rel="noreferrer"><Github size={16}/> GitHub <ExternalLink size={12}/></a><a href="https://www.linkedin.com/in/USERNAME" target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn <ExternalLink size={12}/></a></p></div><div className="footer-location"><MapPin size={15}/> Indonesia</div></div>
        </section>
      </main>
      <footer className="footer section-wrap"><span>© 2026 NAFIS</span><span>DESIGNED & BUILT WITH INTENTION.</span><a href="#home">BACK TO TOP ↑</a></footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App/>);
