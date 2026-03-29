export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <div className="hero-badge">◆ All-In-One Business Platform — Australia</div>
        <h1>
          One platform.<br />
          <span className="accent">Everything your business needs.</span>
        </h1>
        <p className="hero-sub">
          AI Back Office brings CRM, projects, invoicing, HR, reports, and AI tools 
          into one connected platform — so your business runs smoother, faster, and smarter.
        </p>
        <div className="hero-cta">
          <a href="/contact" className="btn btn-primary btn-lg">Start Free Trial</a>
          <a href="/contact" className="btn btn-secondary btn-lg">Book a Demo</a>
        </div>
        <div className="hero-stats">
          <div className="hero-stat">
            <div className="number">500+</div>
            <div className="label">Australian Businesses</div>
          </div>
          <div className="hero-stat">
            <div className="number">99.9%</div>
            <div className="label">Uptime</div>
          </div>
          <div className="hero-stat">
            <div className="number">AU-Based</div>
            <div className="label">Support Team</div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Value Prop */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <p className="section-label">Why AI Back Office</p>
            <h2 className="section-title">
              Stop paying for <span className="text-accent">five different tools</span>.
            </h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>
              Most businesses pay for a CRM here, project software there, accounting tools on top. 
              AI Back Office replaces all of them — one platform, one subscription, one login.
            </p>
          </div>
          <div className="card-grid">
            {[
              { icon: '◈', title: 'One Login, Everything Done', desc: 'CRM, projects, invoicing, HR, and reports — all in one connected platform. No more switching between tools.' },
              { icon: '◈', title: 'AI-Powered Insights', desc: 'Built-in AI tools that analyse your data, automate routine tasks, and surface opportunities you would otherwise miss.' },
              { icon: '◈', title: 'Australian Made for Australian Businesses', desc: 'Built specifically for Australian SMEs — ATO compliant, Australian support,本地 data storage.' },
              { icon: '◈', title: 'One Subscription, Not Five', desc: 'Replace your CRM, project tool, invoicing software, HR platform, and reporting dashboard — with one cost.' },
            ].map(c => (
              <div key={c.title} className="card">
                <div className="card-icon">{c.icon}</div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Modules */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <p className="section-label">All Modules Included</p>
            <h2 className="section-title">Everything you need. <span className="text-accent">Nothing you don't.</span></h2>
          </div>
          <div className="module-grid">
            {[
              { icon: '◉', title: 'CRM', desc: 'Manage leads, deals, and customer relationships' },
              { icon: '◉', title: 'Projects', desc: 'Track jobs, tasks, and project timelines' },
              { icon: '◉', title: 'Invoicing', desc: 'Create and send invoices, track payments' },
              { icon: '◉', title: 'HR Management', desc: 'Employee records, onboarding, leave tracking' },
              { icon: '◉', title: 'Reporting & Analytics', desc: 'Live dashboards and business intelligence' },
              { icon: '◉', title: 'AI Tools', desc: 'Automations, predictions, and smart suggestions' },
              { icon: '◉', title: 'Document Management', desc: 'Store, share, and manage business documents' },
              { icon: '◉', title: 'Integrations', desc: 'Connect with Xero, MYOB, Stripe, and more' },
            ].map(m => (
              <div key={m.title} className="module-card">
                <span className="icon">{m.icon}</span>
                <div>
                  <h4>{m.title}</h4>
                  <p>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Feature Row 1 */}
      <section className="section">
        <div className="container">
          <div className="feature-row">
            <div>
              <p className="section-label">CRM Built for Results</p>
              <h2>Turn leads into <span className="text-accent">customers faster</span>.</h2>
              <p>Track every lead from first contact to closed deal. Automated follow-ups, pipeline visibility, and AI-powered insights that tell you exactly what to do next.</p>
              <a href="/features" className="btn btn-secondary">See CRM Features</a>
            </div>
            <div className="card" style={{ minHeight: '300px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { name: 'Acme Corp', stage: 'Negotiation', value: '$24,000' },
                  { name: 'Smith Industries', stage: 'Proposal', value: '$12,500' },
                  { name: 'Local Services Co', stage: 'Follow Up', value: '$8,000' },
                ].map(deal => (
                  <div key={deal.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.875rem', background: 'var(--bg-card-hover)', borderRadius: '8px', border: '1px solid var(--border)' }}>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '0.875rem' }}>{deal.name}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--accent)' }}>{deal.stage}</div>
                    </div>
                    <div style={{ fontWeight: 700, color: 'var(--success)' }}>{deal.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="feature-row reverse">
            <div>
              <p className="section-label">Project Management</p>
              <h2>Keep every job <span className="text-accent">on track and on budget</span>.</h2>
              <p>Assign tasks, track time, manage resources, and monitor budgets across all your projects in one place. Automated alerts keep things moving without constant follow-up.</p>
              <a href="/features" className="btn btn-secondary">See Project Features</a>
            </div>
            <div className="card" style={{ minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ textAlign: 'center', color: 'var(--text-muted)' }}>
                <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>◉</div>
                <div>Project dashboard preview</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <p className="section-label">What Businesses Say</p>
            <h2 className="section-title">Trusted by <span className="text-accent">Australian SMEs</span>.</h2>
          </div>
          <div className="testimonial-grid">
            {[
              { quote: 'We replaced four different tools with AI Back Office. The time savings alone have paid for it ten times over. Our team actually uses one system now instead of avoiding four.', name: 'Sarah Mitchell', role: 'Operations Manager, Trade Business' },
              { quote: 'The AI insights are genuinely useful — it flagged a client payment issue before it became a problem. That kind of proactive intelligence has saved us thousands.', name: 'James Chen', role: 'Director, Professional Services Firm' },
              { quote: 'Finally an Australian-built platform that understands ATO compliance. No more spreadsheet workarounds. Everything just works.', name: 'Michelle Torres', role: 'Finance Lead, Retail Business' },
            ].map(t => (
              <div key={t.name} className="testimonial-card">
                <div className="stars">★★★★★</div>
                <blockquote>"{t.quote}"</blockquote>
                <div className="author">
                  <div className="author-avatar">{t.name.charAt(0)}</div>
                  <div>
                    <div className="author-name">{t.name}</div>
                    <div className="author-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to run your business <span className="text-accent">from one platform</span>?</h2>
          <p>Start your free trial today. No credit card required. Setup takes less than 10 minutes.</p>
          <div className="cta-buttons">
            <a href="/contact" className="btn btn-primary btn-lg">Start Free Trial</a>
            <a href="/contact" className="btn btn-secondary btn-lg">Book a Demo</a>
          </div>
        </div>
      </section>
    </main>
  )
}
