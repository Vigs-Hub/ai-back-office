export default function About() {
  return (
    <main>
      <section className="hero" style={{ minHeight: '50vh', paddingBottom: '3rem' }}>
        <div className="hero-badge">◆ Built in Australia, for Australia</div>
        <h1>
          The back-office platform<br />
          <span className="accent">Australian businesses deserve.</span>
        </h1>
        <p className="hero-sub">
          AI Back Office was built to solve a problem we saw across hundreds of Australian SMEs — 
          too much time spent on administration, not enough time running the business.
        </p>
      </section>

      <div className="divider" />

      <section className="section">
        <div className="container">
          <div className="feature-row">
            <div>
              <p className="section-label">Our Story</p>
              <h2>Built by operators, <span className="text-accent">for operators</span>.</h2>
              <p>We built AI Back Office because we lived the problem. Aussie businesses spending more time on admin than on their clients. Paying for five different software tools that do not talk to each other. Drowning in spreadsheets, emails, and manual processes.</p>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)' }}>We set out to build one platform that handles everything a growing business needs — CRM, projects, invoicing, HR, reporting, and AI tools — in one place, at one price, with Australian data storage and ATO compliance built in.</p>
            </div>
            <div>
              <div className="card" style={{ padding: '2.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  {[
                    { num: '500+', label: 'Australian businesses' },
                    { num: '99.9%', label: 'Uptime SLA' },
                    { num: 'AU', label: 'Data stored in Australia' },
                    { num: '24/7', label: 'Support available' },
                  ].map(s => (
                    <div key={s.label} style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--accent)' }}>{s.num}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <p className="section-label">Why AI Back Office</p>
            <h2 className="section-title">What sets us apart</h2>
          </div>
          <div className="card-grid">
            {[
              { title: 'One Platform, Not Five', desc: 'We replace your CRM, project tool, invoicing software, HR platform, and reporting dashboard — with one connected system.' },
              { title: 'Australian-Made', desc: 'Built in Australia for Australian businesses. ATO compliant, STP ready, Australian support, data stored locally.' },
              { title: 'Operator-Focused', desc: 'We build for how businesses actually work, not for how consultants think they should work. Practical, not theoretical.' },
              { title: 'AI That Adds Value', desc: 'AI tools built into every module — not a gimmick, but genuine automation that saves hours of manual work every week.' },
              { title: 'Honest Pricing', desc: 'One price, everything included. No per-user penalties. No surprise fees. No upselling once you are in.' },
              { title: 'Ongoing Partnership', desc: 'We do not just sell software — we work with you to make sure you are getting the most out of the platform.' },
            ].map(c => (
              <div key={c.title} className="card">
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <p className="section-label">Our Values</p>
            <h2 className="section-title">How we operate</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', maxWidth: '900px', margin: '0 auto' }}>
            {[
              { title: 'Operators First', desc: 'Every decision we make starts with: will this help a business operator run their day better?' },
              { title: 'No Gimmicks', desc: 'We do not chase trends. If it does not genuinely help your business, we do not build it.' },
              { title: 'Radical Transparency', desc: 'Honest pricing, honest reporting, honest communication. No hidden agendas.' },
              { title: 'Built to Last', desc: 'We are here for the long haul. We build for stability, not for a quick exit.' },
            ].map(v => (
              <div key={v.title} style={{ padding: '1.5rem', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--accent)' }}>{v.title}</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="cta-section">
        <div className="container">
          <h2>Ready to <span className="text-accent">get started</span>?</h2>
          <p>Book a demo or start your free trial. No pressure, no obligations.</p>
          <div className="cta-buttons">
            <a href="/contact" className="btn btn-primary btn-lg">Book a Demo</a>
            <a href="/pricing" className="btn btn-secondary btn-lg">See Pricing</a>
          </div>
        </div>
      </section>
    </main>
  )
}
