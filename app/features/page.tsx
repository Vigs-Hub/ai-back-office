export default function Features() {
  return (
    <main>
      <section className="hero" style={{ minHeight: '60vh', paddingBottom: '3rem' }}>
        <div className="hero-badge">◆ All Modules Included</div>
        <h1>
          One platform.<br />
          <span className="accent">Every business function.</span>
        </h1>
        <p className="hero-sub">
          Every module you need to run your business — CRM, projects, invoicing, HR, reporting, and AI tools — 
          all in one connected platform. No integrations needed. No separate subscriptions.
        </p>
      </section>

      <div className="divider" />

      {/* CRM */}
      <section className="section">
        <div className="container">
          <div className="feature-row">
            <div>
              <p className="section-label">Module 01 — CRM</p>
              <h2>Close more deals with <span className="text-accent">intelligent pipeline management</span>.</h2>
              <p>Track every lead from first touch to closed deal. AI-powered insights surface the best next action on every deal. Never miss a follow-up again.</p>
              <ul style={{ listStyle: 'none', marginTop: '1.5rem' }}>
                {['Lead & contact management', 'Deal pipeline tracking', 'Automated follow-up sequences', 'AI deal intelligence', 'Email & call logging', 'Quote generation'].map(f => (
                  <li key={f} style={{ display: 'flex', gap: '0.75rem', padding: '0.5rem 0', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    <span style={{ color: 'var(--success)' }}>✓</span> {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card" style={{ minHeight: '300px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  { name: 'Bluekey Construction', stage: 'Negotiation', value: '$34,000', prob: '85%' },
                  { name: 'Summit Trade Co', stage: 'Proposal', value: '$18,500', prob: '60%' },
                  { name: 'Aussie Logistics', stage: 'Qualification', value: '$52,000', prob: '40%' },
                ].map(deal => (
                  <div key={deal.name} style={{ padding: '0.875rem', background: 'var(--bg-card-hover)', borderRadius: '8px', border: '1px solid var(--border)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                      <span style={{ fontWeight: 600, fontSize: '0.875rem' }}>{deal.name}</span>
                      <span style={{ color: 'var(--accent)', fontSize: '0.75rem' }}>{deal.prob}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{deal.stage}</span>
                      <span style={{ fontWeight: 700, color: 'var(--success)', fontSize: '0.875rem' }}>{deal.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Projects */}
      <section className="section">
        <div className="container">
          <div className="feature-row reverse">
            <div>
              <p className="section-label">Module 02 — Projects</p>
              <h2>Keep every job <span className="text-accent">on time and on budget</span>.</h2>
              <p>Manage projects end-to-end with task tracking, time logging, resource allocation, and budget monitoring. Automated alerts catch delays before they become problems.</p>
              <ul style={{ listStyle: 'none', marginTop: '1.5rem' }}>
                {['Task & milestone tracking', 'Time logging & billing', 'Budget vs actual monitoring', 'Resource allocation', 'Client portal access', 'Automated progress reports'].map(f => (
                  <li key={f} style={{ display: 'flex', gap: '0.75rem', padding: '0.5rem 0', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    <span style={{ color: 'var(--success)' }}>✓</span> {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card" style={{ minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ textAlign: 'center', color: 'var(--text-muted)' }}>
                <div style={{ fontSize: '3rem', marginBottom: '0.5rem', color: 'var(--accent)' }}>◉</div>
                <div style={{ fontSize: '0.875rem' }}>Project dashboard</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Invoicing */}
      <section className="section">
        <div className="container">
          <div className="feature-row">
            <div>
              <p className="section-label">Module 03 — Invoicing</p>
              <h2>Get paid faster with <span className="text-accent">automated invoice workflows</span>.</h2>
              <p>Create professional invoices, track payments, manage billable time, and run aged debtor reports. ATO-compliant and integrated with your project and HR data.</p>
              <ul style={{ listStyle: 'none', marginTop: '1.5rem' }}>
                {['ATO-compliant invoice design', 'Direct bank transfer & Stripe', 'Automatic payment reminders', 'Billable time tracking', 'Recurring invoice schedules', 'Aged debtor reporting'].map(f => (
                  <li key={f} style={{ display: 'flex', gap: '0.75rem', padding: '0.5rem 0', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    <span style={{ color: 'var(--success)' }}>✓</span> {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card" style={{ minHeight: '300px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {[
                  { num: 'INV-1842', client: 'Bluekey Construction', amount: '$4,850', status: 'Paid', date: '28 Mar' },
                  { num: 'INV-1841', client: 'Summit Trade Co', amount: '$2,200', status: 'Overdue', date: '21 Mar' },
                  { num: 'INV-1840', client: 'Mitchell & Co', amount: '$7,400', status: 'Sent', date: '26 Mar' },
                ].map(inv => (
                  <div key={inv.num} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem', background: 'var(--bg-card-hover)', borderRadius: '8px', border: '1px solid var(--border)' }}>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '0.8rem' }}>{inv.num}</div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{inv.client}</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontWeight: 700, fontSize: '0.875rem' }}>{inv.amount}</div>
                      <div style={{ fontSize: '0.7rem', color: inv.status === 'Paid' ? 'var(--success)' : inv.status === 'Overdue' ? 'var(--danger)' : 'var(--warning)' }}>{inv.status}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* HR */}
      <section className="section">
        <div className="container">
          <div className="feature-row reverse">
            <div>
              <p className="section-label">Module 04 — HR Management</p>
              <h2>Built for Australian businesses — <span className="text-accent">PAYG, super, leave</span> all in one.</h2>
              <p>Manage your team from onboarding to payroll. Track leave, store employee documents, manage superannuation obligations, and run payroll — without the payroll software price tag.</p>
              <ul style={{ listStyle: 'none', marginTop: '1.5rem' }}>
                {['Employee records & documents', 'Leave tracking & approval', 'Superannuation management', 'PAYG &STP filing', 'Employee onboarding', 'Role & permissions management'].map(f => (
                  <li key={f} style={{ display: 'flex', gap: '0.75rem', padding: '0.5rem 0', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    <span style={{ color: 'var(--success)' }}>✓</span> {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card" style={{ minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ textAlign: 'center', color: 'var(--text-muted)' }}>
                <div style={{ fontSize: '3rem', marginBottom: '0.5rem', color: 'var(--accent)' }}>◉</div>
                <div style={{ fontSize: '0.875rem' }}>HR dashboard</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* All Modules Grid */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <p className="section-label">All Modules</p>
            <h2 className="section-title">Everything included. <span className="text-accent">Always.</span></h2>
          </div>
          <div className="module-grid">
            {[
              { icon: '◉', title: 'CRM', desc: 'Leads, contacts, deals, quotes' },
              { icon: '◉', title: 'Projects', desc: 'Tasks, time, budgets, milestones' },
              { icon: '◉', title: 'Invoicing', desc: 'Quotes, invoices, payments, BAS' },
              { icon: '◉', title: 'HR Management', desc: 'Employees, leave, payroll, super' },
              { icon: '◉', title: 'Reporting', desc: 'Live dashboards, business intelligence' },
              { icon: '◉', title: 'AI Tools', desc: 'Automations, predictions, suggestions' },
              { icon: '◉', title: 'Documents', desc: 'Storage, e-signatures, templates' },
              { icon: '◉', title: 'Integrations', desc: 'Xero, MYOB, Stripe, Zapier' },
            ].map(m => (
              <div key={m.title} className="module-card">
                <span className="icon" style={{ color: 'var(--accent)', fontSize: '1.5rem' }}>{m.icon}</span>
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

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to see <span className="text-accent">all modules</span> in action?</h2>
          <p>Book a demo and we'll walk you through every module on your actual business data.</p>
          <div className="cta-buttons">
            <a href="/contact" className="btn btn-primary btn-lg">Book a Demo</a>
            <a href="/pricing" className="btn btn-secondary btn-lg">See Pricing</a>
          </div>
        </div>
      </section>
    </main>
  )
}
