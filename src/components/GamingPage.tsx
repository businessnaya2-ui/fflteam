import { Link } from '@tanstack/react-router'
import { ArrowDownRight, Menu, Radio, Swords, X, type LucideIcon } from 'lucide-react'
import { type ReactNode, useEffect, useState } from 'react'

type Action = {
  label: string
  href: string
  external?: boolean
}

type GamingPageProps = {
  eyebrow: string
  title: ReactNode
  summary: string
  badge: string
  icon: LucideIcon
  primaryAction: Action
  secondaryAction?: Action
  stats: Array<{ value: string; label: string }>
  children: ReactNode
}

const navigation = [
  { label: 'FFL MC Bedrock SMP', to: '/' as const },
  { label: 'WizzGen MC Bedrock', to: '/wizzgen' as const },
  { label: 'Twitch', to: '/twitch' as const },
  { label: 'Xbox Club', to: '/xbox-club' as const },
]

export function GamingPage({
  eyebrow,
  title,
  summary,
  badge,
  icon: HeroIcon,
  primaryAction,
  secondaryAction,
  stats,
  children,
}: GamingPageProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <div className="site-shell">
      <div className="noise" aria-hidden="true" />
      <header className="site-header">
        <Link className="brand" to="/" aria-label="FFL Team home">
          <span className="brand-mark"><Swords size={20} /></span>
          <span>FFL <b>TEAM</b></span>
        </Link>

        <nav className={menuOpen ? 'site-nav nav-open' : 'site-nav'} aria-label="Primary navigation">
          <div className="mobile-nav-heading">
            <span>Choose your lobby</span>
            <button type="button" onClick={() => setMenuOpen(false)} aria-label="Close navigation">
              <X />
            </button>
          </div>
          {navigation.map((item, index) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === '/' }}
              activeProps={{ className: 'nav-link active' }}
              inactiveProps={{ className: 'nav-link' }}
              onClick={() => setMenuOpen(false)}
            >
              <span>0{index + 1}</span>{item.label}
            </Link>
          ))}
        </nav>

        <div className="header-status"><i /> Network online</div>
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen(true)} aria-label="Open navigation">
          <Menu />
        </button>
      </header>

      {menuOpen && <button className="nav-backdrop" type="button" onClick={() => setMenuOpen(false)} aria-label="Close navigation" />}

      <main>
        <section className="page-hero">
          <div className="hero-grid-lines" aria-hidden="true" />
          <div className="hero-copy">
            <div className="hero-eyebrow"><Radio size={15} /> {eyebrow}</div>
            <h1>{title}</h1>
            <p className="hero-summary">{summary}</p>
            <div className="hero-actions">
              <a className="button button-primary" href={primaryAction.href} target={primaryAction.external ? '_blank' : undefined} rel={primaryAction.external ? 'noreferrer' : undefined}>
                {primaryAction.label}<ArrowDownRight size={18} />
              </a>
              {secondaryAction && <a className="button button-secondary" href={secondaryAction.href}>{secondaryAction.label}</a>}
            </div>
          </div>

          <div className="hero-emblem" aria-hidden="true">
            <div className="emblem-orbit orbit-one" />
            <div className="emblem-orbit orbit-two" />
            <div className="emblem-core"><HeroIcon /></div>
            <span className="emblem-badge">{badge}</span>
          </div>

          <div className="hero-stats">
            {stats.map((stat) => (
              <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>
            ))}
          </div>
        </section>

        <div className="page-content">{children}</div>
      </main>

      <footer className="site-footer">
        <div className="brand footer-brand"><span className="brand-mark"><Swords size={18} /></span><span>FFL <b>TEAM</b></span></div>
        <p>Four spaces. One community. Play fair and have fun.</p>
        <span>© 2026 FFL Team</span>
      </footer>
    </div>
  )
}

export function ContentCard({ label, accent = false, children }: { label: string; accent?: boolean; children: ReactNode }) {
  return (
    <article className={accent ? 'content-card accent-card' : 'content-card'}>
      <p className="card-label">{label}</p>
      {children}
    </article>
  )
}

export function StepList({ steps }: { steps: string[] }) {
  return (
    <ol className="step-list">
      {steps.map((step, index) => <li key={step}><span>{index + 1}</span><p>{step}</p></li>)}
    </ol>
  )
}

export function InfoStrip({ icon: Icon, title, text }: { icon: LucideIcon; title: string; text: string }) {
  return <div className="info-strip"><Icon /><div><strong>{title}</strong><span>{text}</span></div></div>
}
