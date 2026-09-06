import { createFileRoute } from '@tanstack/react-router'
import { Blocks, Compass, ShieldCheck, WandSparkles } from 'lucide-react'

import { ContentCard, GamingPage, InfoStrip, StepList } from '../components/GamingPage'

export const Route = createFileRoute('/wizzgen')({
  component: WizzGenPage,
})

function WizzGenPage() {
  return (
    <GamingPage
      eyebrow="A different kind of Bedrock Sygen"
      title={<>WizzGen MC <span>Bedrock</span></>}
      summary="A creative Minecraft Bedrock project where experimental generation, fresh challenges, and community-led ideas turn every session into something unexpected."
      badge="World Loading"
      icon={WandSparkles}
      primaryAction={{ label: 'See how to join', href: '#join' }}
      secondaryAction={{ label: 'Review guidelines', href: '#rules' }}
      stats={[
        { value: 'CUSTOM', label: 'World style' },
        { value: 'BEDROCK', label: 'Edition' },
        { value: 'CO-OP', label: 'Experience' },
      ]}
    >
      <section className="section-block intro-grid" aria-labelledby="wizzgen-about">
        <div className="section-heading">
          <p className="section-number">01 / Project File</p>
          <h2 id="wizzgen-about">Explore beyond the usual Skygen.</h2>
        </div>
        <div className="intro-copy">
          <p>
            WizzGen MC Bedrock is a separate FFL Team server project designed for players who want
            a twist on familiar Skygen, as normal adverage ones. Expect evolving ideas, unusual terrain, and experiments
            shaped by the people playing the world.
          </p>
          <InfoStrip icon={Blocks} title="Built to evolve" text="Season concepts, world features, and events can change as the project grows." />
        </div>
      </section>

      <section className="section-block" id="join" aria-labelledby="wizzgen-join">
        <div className="section-heading split-heading">
          <div><p className="section-number">02 / Enter World</p><h2 id="wizzgen-join">How to join</h2></div>
          <Compass aria-hidden="true" />
        </div>
        <div className="content-grid connection-grid">
          <ContentCard label="Connection sequence">
            <StepList steps={[
              'Make sure Minecraft Bedrock is updated to the latest supported version.',
              'Ask an FFL Team admin for the current WizzGen access details.',
              'Open Play, select Realms, and choose Add exis Realm.',
              'Enter the provided code and click join, wait, then play.',
            ]} />
          </ContentCard>
          <ContentCard label="Access details" accent>
            <dl className="server-details">
              <div><dt>Server code</dt><dd>Wait for this infomation</dd></div>
              <div><dt>MCB Realm only</dt><dd>All devices</dd></div>
            </dl>
            <p className="placeholder-note">Server details are placeholders ready for the official address.</p>
          </ContentCard>
        </div>
      </section>

      <section className="section-block" id="rules" aria-labelledby="wizzgen-rules">
        <div className="section-heading split-heading">
          <div><p className="section-number">03 / Player Code</p><h2 id="wizzgen-rules">Rules &amp; guidelines</h2></div>
          <ShieldCheck aria-hidden="true" />
        </div>
        <div className="rules-grid">
          {[
            'Treat experimental areas and builds with care; do not intentionally break world features.',
            'Play without cheats, hacked clients, unauthorized add-ons, or exploit abuse.',
            'Respect player space, items, and builds. Get permission before changing shared work.',
            'Share constructive feedback when testing new ideas or world changes.',
            'Keep chat welcoming, inclusive, and suitable for the whole community.',
            'There are more in the starter kits when you join.',
          ].map((rule, index) => <article className="rule-card" key={rule}><span>{String(index + 1).padStart(2, '0')}</span><p>{rule}</p></article>)}
        </div>
      </section>
    </GamingPage>
  )
}
