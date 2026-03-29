import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Back Office — All-In-One Business Management Platform',
  description: 'AI Back Office gives Australian SMEs one platform for CRM, projects, invoicing, HR, reports, and AI tools. One subscription. Everything your business needs.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav className="nav">
          <div className="nav-inner">
            <a href="/" className="nav-logo">
              <span className="icon">◈</span>
              AI Back Office
            </a>
            <ul className="nav-links">
              <li><a href="/">Home</a></li>
              <li><a href="/features">Features</a></li>
              <li><a href="/pricing">Pricing</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
            <div className="nav-cta">
              <a href="/contact" className="btn btn-secondary btn-sm">Book a Demo</a>
              <a href="/contact" className="btn btn-primary btn-sm">Start Free Trial</a>
            </div>
          </div>
        </nav>
        {children}
        <footer className="footer">
          <div className="footer-inner container">
            <p>© 2026 AI Back Office. All rights reserved.</p>
            <div className="footer-links">
              <a href="/features">Features</a>
              <a href="/pricing">Pricing</a>
              <a href="/about">About</a>
              <a href="/contact">Contact</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
