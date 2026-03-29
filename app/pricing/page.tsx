export default function Pricing() {
  return (
    <main>
      <section className="hero" style={{ minHeight: '50vh', paddingBottom: '3rem' }}>
        <div className="hero-badge">◆ Simple, Honest Pricing</div>
        <h1>
          One price.<br />
          <span className="accent">Everything included.</span>
        </h1>
        <p className="hero-sub">
          No per-module fees. No per-user penalties. No hidden costs. 
          One subscription covers every module, every user, every update.
        </p>
      </section>

      <div className="divider" />

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>
            
            {/* Starter */}
            <div className="pricing-card">
              <h3>Starter</h3>
              <div className="price">$149<span>/month</span></div>
              <p className="desc">Perfect for small businesses getting started with structured operations.</p>
              <ul className="pricing-features">
                {[
                  'Up to 5 users',
                  'CRM & contact management',
                  'Project tracking (5 active)',
                  'Quotes & invoicing',
                  'Basic HR management',
                  'Standard reporting',
                  'Email support',
                ].map(f => (
                  <li key={f}><span className="check">✓</span> {f}</li>
                ))}
              </ul>
              <a href="/contact" className="btn btn-secondary" style={{ width: '100%' }}>Get Started</a>
            </div>

            {/* Business — Featured */}
            <div className="pricing-card featured" style={{ marginBottom: '1rem' }}>
              <div className="pricing-badge">Most Popular</div>
              <h3>Business</h3>
              <div className="price">$299<span>/month</span></div>
              <p className="desc">For growing businesses that need the full platform across all teams.</p>
              <ul className="pricing-features">
                {[
                  'Unlimited users',
                  'All modules included',
                  'Unlimited projects',
                  'Advanced AI tools',
                  'Full HR & payroll',
                  'Custom reporting',
                  'Priority support',
                  'API access',
                  'Custom integrations',
                ].map(f => (
                  <li key={f}><span className="check">✓</span> {f}</li>
                ))}
              </ul>
              <a href="/contact" className="btn btn-primary" style={{ width: '100%' }}>Start Free Trial</a>
            </div>

            {/* Enterprise */}
            <div className="pricing-card">
              <h3>Enterprise</h3>
              <div className="price">Custom</div>
              <p className="desc">For multi-entity operators that need dedicated infrastructure and support.</p>
              <ul className="pricing-features">
                {[
                  'Everything in Business',
                  'Multi-entity management',
                  'Dedicated account manager',
                  'Custom AI model training',
                  'On-site onboarding',
                  'SLA guarantees',
                  'White-label options',
                ].map(f => (
                  <li key={f}><span className="check">✓</span> {f}</li>
                ))}
              </ul>
              <a href="/contact" className="btn btn-secondary" style={{ width: '100%' }}>Contact Sales</a>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* FAQ */}
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="section-header text-center">
            <p className="section-label">Pricing Questions</p>
            <h2 className="section-title">Common questions</h2>
          </div>
          {[
            { q: 'Is there a free trial?', a: 'Yes — 14 days, no credit card required. Full access to all modules.' },
            { q: 'Can I change plans anytime?', a: 'Yes. Upgrade or downgrade at any time. Changes take effect on your next billing cycle.' },
            { q: 'How many users can I have?', a: 'Starter supports up to 5 users. Business and Enterprise have unlimited users.' },
            { q: 'Are there setup fees?', a: 'No setup fees. You are up and running in under 10 minutes.' },
            { q: 'Do you offer discounts for annual billing?', a: 'Yes — save 2 months when you pay annually. That is 2 months free.' },
            { q: 'What payment methods do you accept?', a: 'Credit card (Visa, Mastercard, Amex) and direct bank transfer.' },
            { q: 'Is my data stored in Australia?', a: 'Yes. All data is stored on Australian servers. We are fully ATO and AUSTRAC compliant.' },
          ].map(item => (
            <div key={item.q} className="faq-item">
              <div className="faq-question">{item.q}</div>
              <div className="faq-answer">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>Start your <span className="text-accent">free trial</span> today.</h2>
          <p>14 days free. No credit card. Cancel anytime.</p>
          <div className="cta-buttons">
            <a href="/contact" className="btn btn-primary btn-lg">Start Free Trial</a>
            <a href="/contact" className="btn btn-secondary btn-lg">Book a Demo</a>
          </div>
        </div>
      </section>
    </main>
  )
}
