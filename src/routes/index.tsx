import { createFileRoute } from '@tanstack/react-router'
import { Gamepad2, Network, ShieldCheck, Sparkles } from 'lucide-react'

import { ContentCard, GamingPage, InfoStrip, StepList } from '../components/GamingPage'

export const Route = createFileRoute('/')({
  component: HomePage,
})

const joinSteps = [
  'Open Minecraft Bedrock Edition on your device.',
  'Select Play, then open the Servers tab.',
  'Choose Add Server and enter the details below.',
  'Save the server, connect, and introduce yourself in chat.',
]

const rules = [
  'Respect every player. Harassment, hate speech, and targeted griefing are not welcome.',
  'No cheats, hacked clients, duplication exploits, or unfair advantages.',
  'Ask before entering, building on, or taking from another player’s base.',
  'Keep chat friendly and avoid spam, excessive caps, or disruptive behavior.',
  'Follow moderator instructions and report problems instead of escalating them.',
  'Build with the community in mind and leave shared spaces better than you found them.',
]

function HomePage() {
  return (
    <GamingPage
      eyebrow="The flagship survival world"
      title={<>FFL MC <span>Bedrock SMP</span></>}
      summary="A community-first Minecraft Bedrock survival server built for ambitious bases, shared adventures, and the kind of stories that only happen when the whole squad logs on."
      badge="Season Online"
      icon={Gamepad2}
      primaryAction={{ label: 'Get connection details', href: '#join' }}
      secondaryAction={{ label: 'Read server rules', href: '#rules' }}
      stats={[
        { value: 'BEDROCK', label: 'Edition' },
        { value: 'SURVIVAL', label: 'Game mode' },
        { value: '24/7', label: 'World access' },
      ]}
    >
      <section className="section-block intro-grid" aria-labelledby="about-title">
        <div className="section-heading">
          <p className="section-number">01 / Server Brief</p>
          <h2 id="about-title">A survival world built around the team.</h2>
        </div>
        <div className="intro-copy">
          <p>
            FFL MC Bedrock SMP is the main FFL Team world: a persistent place to explore,
            build, trade, and take on group projects without losing the spirit of classic survival.
          </p>
          <InfoStrip icon={Sparkles} title="Community focus" text="Collaborative builds, events, shops, and laid-back survival sessions." />
        </div>
      </section>

      <section className="section-block" id="join" aria-labelledby="join-title">
        <div className="section-heading split-heading">
          <div>
            <p className="section-number">02 / Connect</p>
            <h2 id="join-title">How to join</h2>
          </div>
          <Network aria-hidden="true" />
        </div>
        <div className="content-grid connection-grid">
          <ContentCard label="Connection sequence">
            <StepList steps={joinSteps} />
          </ContentCard>
          <ContentCard label="Server address" accent>
            <dl className="server-details">
              <div><dt>Server code</dt><dd>wait for this information</dd></div>
              <div><dt>MC Bedrock Only</dt><dd>All MCB Supported devices are allowed</dd></div>
            </dl>
            <p className="placeholder-note">Replace these placeholders with the live FFL server details.</p>
          </ContentCard>
        </div>
      </section>

      <section className="section-block" id="rules" aria-labelledby="rules-title">
        <div className="section-heading split-heading">
          <div>
            <p className="section-number">03 / Play Fair</p>
            <h2 id="rules-title">Rules &amp; guidelines</h2>
          </div>
          <ShieldCheck aria-hidden="true" />
        </div>
        <div className="rules-grid">
          {rules.map((rule, index) => (
            <article className="rule-card" key={rule}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{rule}</p>
            </article>
          ))}
        </div>
      </section>
    </GamingPage>
  )
}
