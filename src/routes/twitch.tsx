import { createFileRoute } from '@tanstack/react-router'
import { CalendarClock, Radio, Twitch, Users } from 'lucide-react'

import { ContentCard, GamingPage, InfoStrip, StepList } from '../components/GamingPage'

export const Route = createFileRoute('/twitch')({
  component: TwitchPage,
})

function TwitchPage() {
  return (
    <GamingPage
      eyebrow="Live gameplay and community sessions"
      title={<>My Twitch <span>Channel</span></>}
      summary="Catch live Minecraft adventures, community games, new projects, and relaxed squad sessions — then jump in and become part of the stream."
      badge="Go Live"
      icon={Twitch}
      primaryAction={{ label: 'Watch the stream', href: '#stream-link' }}
      stats={[
        { value: 'LIVE', label: 'Community chat' },
        { value: 'CO-OP', label: 'Viewer games' },
        { value: 'FFL', label: 'Team streams' },
      ]}
    >
      <section className="section-block stream-banner" id="stream-link" aria-labelledby="twitch-link-title">
        <div>
          <p className="section-number">01 / Broadcast</p>
          <h2 id="twitch-link-title">The next session starts here.</h2>
          <p>Add the official Twitch username below, then use this button as the direct link to the channel.</p>
        </div>
        <div className="stream-cta-wrap">
          <span><i /> Channel status</span>
          <a className="stream-button" href="#stream-link" aria-label="Open the FFL Team Twitch channel">
            <Twitch /> twitch.tv/YOUR_CHANNEL
          </a>
        </div>
      </section>

      <section className="section-block" aria-labelledby="schedule-title">
        <div className="section-heading split-heading">
          <div><p className="section-number">02 / Queue Up</p><h2 id="schedule-title">Stream schedule &amp; play together</h2></div>
          <CalendarClock aria-hidden="true" />
        </div>
        <div className="content-grid schedule-grid">
          <ContentCard label="When I stream" accent>
            <div className="schedule-card-copy">
              <Radio />
              <h3>Schedule coming soon</h3>
              <p>Use this space for stream days, start times, time zone, and any special event streams.</p>
            </div>
            <div className="schedule-row"><span>Regular streams</span><strong>Days / Time</strong></div>
            <div className="schedule-row"><span>Community nights</span><strong>To be announced</strong></div>
          </ContentCard>
          <ContentCard label="Join the game">
            <StepList steps={[
              'Follow the channel and turn on notifications so you know when the stream starts.',
              'Join the live chat and look for the play-together announcement.',
              'Send your gamertag only through the method shared by the streamer.',
              'Wait for an invite, follow the lobby rules, and keep the stream friendly.',
            ]} />
          </ContentCard>
        </div>
        <InfoStrip icon={Users} title="Viewer lobby etiquette" text="Places may be limited. Rotate fairly, listen to the host, and make room for new players." />
      </section>
    </GamingPage>
  )
}
