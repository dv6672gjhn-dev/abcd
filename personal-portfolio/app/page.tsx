const projects = [
  { name: 'Sway', type: 'Product design · 2024', className: 'project-tall', art: 'art-cobalt' },
  { name: 'Field Notes', type: 'Brand identity · 2023', className: 'project-offset', art: 'art-sand' },
  { name: 'Northstar', type: 'Strategy · UX/UI · 2022', className: 'project-wide', art: 'art-ink' },
]

function ProjectArt({ art, name }: { art: string; name: string }) {
  if (name === 'Sway') return <div className={`project-art ${art}`}><span className="art-label">Sway</span><div className="phone"><div className="phone-top" /><b>Good<br />habits,<br /><i>made easy.</i></b><div className="phone-line" /></div></div>
  if (name === 'Field Notes') return <div className={`project-art ${art}`}><span className="art-label">Field Notes</span><div className="note-card"><small>FIELD NOTES / 024</small><strong>Make space<br />for better<br /><i>thinking.</i></strong><div className="note-dot" /></div></div>
  return <div className={`project-art ${art}`}><span className="art-label">Northstar</span><div className="dashboard"><div className="dash-head">northstar <span>●</span></div><div className="dash-chart"><i /><i /><i /><i /><i /></div><div className="dash-footer"><b>82%</b><span>weekly focus</span></div></div></div>
}

export default function Page() {
  return <>
    <header className="site-header"><a className="brand" href="#top" aria-label="Alex Morgan home">AM<span>.</span></a><nav aria-label="Primary navigation"><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a></nav><a className="availability" href="#contact"><i /> Available for work</a></header>
    <main id="top">
      <section className="hero section-wrap" aria-labelledby="hero-title"><div className="eyebrow">Independent product designer <span>·</span> New York / Remote</div><h1 id="hero-title">Designing digital<br /><em>things with feeling.</em></h1><div className="hero-bottom"><p>I help ambitious teams turn complex ideas into clear, useful, and memorable products.</p><a className="circle-link" href="#work" aria-label="Scroll to selected work">↓</a></div><div className="hero-rule" /></section>
      <section id="work" className="section-wrap work-section" aria-labelledby="work-title"><div className="section-heading"><p className="eyebrow">Selected work</p><h2 id="work-title">A few things I&apos;ve<br />helped bring to life.</h2></div><div className="project-grid">{projects.map((project) => <a className={`project ${project.className}`} href="#contact" key={project.name}><ProjectArt art={project.art} name={project.name} /><div className="project-meta"><div><h3>{project.name}</h3><p>{project.type}</p></div><span>↗</span></div></a>)}</div></section>
      <section id="about" className="about section-wrap" aria-labelledby="about-title"><div className="section-heading"><p className="eyebrow">A little about me</p><h2 id="about-title">Curious by nature,<br />intentional by design.</h2></div><div className="about-copy"><p className="large-copy">I&apos;m Alex — a designer who believes the best work lives at the intersection of <strong>clarity, curiosity, and care.</strong></p><p>For the past 8 years, I&apos;ve partnered with founders and teams to shape brands, products, and experiences that make a meaningful dent in people&apos;s days.</p><div className="skills"><span>Product design</span><span>Brand identity</span><span>Design systems</span><span>Creative direction</span></div></div></section>
      <section id="contact" className="contact section-wrap" aria-labelledby="contact-title"><p className="eyebrow">Have a good one in mind?</p><h2 id="contact-title">Let&apos;s make<br /><em>something good.</em></h2><a className="email-link" href="mailto:hello@alexmorgan.design">hello@alexmorgan.design <span>↗</span></a></section>
    </main><footer className="site-footer"><span>© 2025 Alex Morgan</span><span>Built with intention.</span><div><a href="#top">Back to top ↑</a></div></footer>
  </>
}
