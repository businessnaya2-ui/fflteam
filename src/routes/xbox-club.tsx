import { createFileRoute } from '@tanstack/react-router'
import { BadgeCheck, Search, ShieldCheck, UsersRound } from 'lucide-react'

import { ContentCard, GamingPage, InfoStrip, StepList } from '../components/GamingPage'

export const Route = createFileRoute('/xbox-club')({
  component: XboxClubPage,
})

function XboxClubPage() {
  return (
    <GamingPage
      eyebrow="Find teammates beyond the server"
      title={<>The Xbox <span>Group Chat</span></>}
      summary="The FFL Team gathering place on Xbox for finding players, sharing clips, planning sessions, and keeping up with everything happening across the community."
      badge="Group Chat is currently open"
      icon={UsersRound}
      primaryAction={{ label: 'Find the Group Chat', href: '#join' }}
      secondaryAction={{ label: 'View the rules', href: '#rules' }}
      stats={[
        { value: 'XBOX', label: 'Platform' },
        { value: 'SOCIAL', label: 'Club type' },
        { value: 'MESSAGE TROLLINGWIZZBA', label: 'Requests' },
      ]}
    >
      <section className="section-block intro-grid" aria-labelledby="club-about">
        <div className="section-heading">
          <p className="section-number">01 / Group Chat</p>
          <h2 id="club-about">Your shortcut to the FFL community.</h2>
        </div>
        <div className="intro-copy">
          <p>
            The Xbox Group Chat keeps the team connected between sessions. Members can find people to play
            with, share their best moments, receive event updates, and organize parties around the games they enjoy.
          </p>
          <InfoStrip icon={BadgeCheck} title="One shared space" text="Looking-for-group posts, screenshots, clips, updates, and community events." />
        </div>
      </section>

      <section className="section-block" id="join" aria-labelledby="club-join">
        <div className="section-heading split-heading">
          <div><p className="section-number">02 / Membership</p><h2 id="club-join">How to join</h2></div>
          <Search aria-hidden="true" />
        </div>
        <div className="content-grid connection-grid">
          <ContentCard label="Find the club">
            <StepList steps={[
              'Open the People tab from your Xbox console guide.',
              'Choose Find Someone, then type "TrollingWizzba".',
              'Message the account saying"invite me to the FFL Group Chat, please."',
              'Wait untill you get a reply, saying "ok".',
              'If you require a invite to join, keep an eye out in your chats.',
            ]} />
          </ContentCard>
          <ContentCard label="Official club name" accent>
            <div className="club-name">FFL TEAM XBOX GROUP CHAT</div>
            <p className="placeholder-note">TrollingWizzba</p>
          </ContentCard>
        </div>
      </section>

      <section className="section-block" id="rules" aria-labelledby="club-rules">
        <div className="section-heading split-heading">
          <div><p className="section-number">03 / Club Code</p><h2 id="club-rules">Club info &amp; rules</h2></div>
          <ShieldCheck aria-hidden="true" />
        </div>
        <div className="rules-grid club-rules">
          {[
            ['Looking for group', 'Create clear, honest posts and include the game, time, and player requirements.'],
            ['Clips & screenshots', 'Share your own moments and keep all posted media appropriate for the community.'],
            ['Respect everyone', 'No harassment, hate speech, bullying, or arguments carried over from game sessions.'],
            ['No spam', 'Avoid repeated posts, unsolicited promotions, misleading links, or disruptive notifications.'],
            ['Party etiquette', 'Communicate clearly, avoid excessive noise, and respect the host’s lobby decisions.'],
            ['Moderator support', 'Report concerns privately and follow moderator decisions to keep the club welcoming.'],
          ].map(([title, text], index) => (
            <article className="rule-card" key={title}><span>{String(index + 1).padStart(2, '0')}</span><div><h3>{title}</h3><p>{text}</p></div></article>
          ))}
        </div>
      </section>
    </GamingPage>
  )
}
