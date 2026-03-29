'use client'
import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', business: '', email: '', phone: '', type: '', message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '6rem 2rem' }}>
        <div style={{ textAlign: 'center', maxWidth: '500px' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✓</div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 900, marginBottom: '1rem' }}>Message sent.</h1>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>We will be in touch within one business day. Keep an eye on {form.email} for our response.</p>
          <a href="/" className="btn btn-secondary">Back to Home</a>
        </div>
      </main>
    )
  }

  return (
    <main>
      <section className="hero" style={{ minHeight: '50vh', paddingBottom: '3rem' }}>
        <div className="hero-badge">◆ Let us Talk</div>
        <h1>
          Get in touch with<br />
          <span className="accent">AI Back Office</span>
        </h1>
        <p className="hero-sub">
          Whether you want a demo, have questions, or are ready to start — we respond within one business day.
        </p>
      </section>

      <div className="divider" />

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Form */}
            <div>
              <div className="form-card">
                <h2>Send us a message</h2>
                <p className="sub">We read every message and respond within one business day.</p>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Your Name *</label>
                    <input required type="text" placeholder="Full name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
                  </div>
                  <div className="form-group">
                    <label>Business Name</label>
                    <input type="text" placeholder="Business name" value={form.business} onChange={e => setForm({...form, business: e.target.value})} />
                  </div>
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input required type="email" placeholder="you@business.com.au" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input type="tel" placeholder="04XX XXX XXX" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
                  </div>
                  <div className="form-group">
                    <label>What are you interested in? *</label>
                    <select required value={form.type} onChange={e => setForm({...form, type: e.target.value})}>
                      <option value="">Select an option...</option>
                      <option>Start a free trial</option>
                      <option>Book a demo</option>
                      <option>Get a custom quote</option>
                      <option>General question</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea placeholder="Tell us about your business and what you are looking for..." value={form.message} onChange={e => setForm({...form, message: e.target.value})} />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
                </form>
              </div>
            </div>

            {/* Info */}
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>How we can help</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '0.9rem' }}>Book a demo to see the platform with your own data, or just send us a message and we will point you in the right direction.</p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { icon: '◉', title: 'Book a Demo', desc: 'See all modules on your actual business scenarios. Takes 30 minutes.' },
                  { icon: '◉', title: 'Start Free Trial', desc: '14 days free, full access, no credit card required.' },
                  { icon: '◉', title: 'Custom Pricing', desc: 'For Enterprise or multi-entity businesses with specific requirements.' },
                  { icon: '◉', title: 'Integration Help', desc: 'Already using Xero, MYOB, or Stripe? We help you connect everything.' },
                ].map(item => (
                  <div key={item.title} style={{ display: 'flex', gap: '1rem', padding: '1.25rem', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
                    <span style={{ color: 'var(--accent)', fontSize: '1.25rem', flexShrink: 0 }}>{item.icon}</span>
                    <div>
                      <h4 style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.25rem' }}>{item.title}</h4>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
                <h4 style={{ fontWeight: 700, marginBottom: '0.75rem' }}>Australian Support</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  Our team is based in Australia. We respond within one business day, usually faster.
                </p>
                <div style={{ marginTop: '1rem', display: 'flex', gap: '1.5rem' }}>
                  <div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email</div>
                    <div style={{ fontSize: '0.875rem', color: 'var(--accent)' }}>support@aibackoffice.com.au</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Hours</div>
                    <div style={{ fontSize: '0.875rem' }}>Mon–Fri, 9am–5pm AEST</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
