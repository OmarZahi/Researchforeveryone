# Research Launchpad Program Blueprint

## Vision
Create a flagship experience that prepares secondary and early university students to conduct safe, supervised research in real labs. The page should feel like a mission control dashboard—clean, data-rich, and kinetic—while staying aligned with the Research for Everyone palette.

## Audience Lenses
1. **Students** seeking credibility, guided practice, and portfolio outcomes.
2. **Educators** looking for turnkey enrichment with rigorous safety guardrails.
3. **Lab partners** who need assurance that visitors arrive trained and accompanied.

## Narrative Spine
1. **Hero (Ignite Curiosity)**: Constellation gradient background, animated badges and orbiting cards. CTA split for "Apply as Student" and "Host a Session".
2. **Program Stack**: Visual stack cards for Passport, Lab Sessions, Mentorship. Hover reveals logistics.
3. **Journey Timeline**: Horizontal timeline with four phases (Onboarding → Sprint Labs → Guided Research → Showcase). Each includes hours, artifacts, and supervision ratio chips.
4. **Learning Tracks Grid**: Cards for Biofoundry, Microfab, Data Lab, Community Fieldwork with icons and prerequisites.
5. **Studio Outcomes**: Radar or progress bars summarizing competencies (Safety, Documentation, Instrumentation, Collaboration, Storytelling).
6. **Cohort Stats**: Counters and pill tags (Weeks, Seats, % Scholarship, Countries) to echo makerdiploma metrics.
7. **Project Gallery**: Masonry of three sample projects using blueprint frames with captions on hover.
8. **Safety & Ethics Charter**: Accordion or highlight cards reinforcing scope limits and consent steps.
9. **Application Funnel**: Stepper showing Apply → Interview → Passport → Placement plus a form CTA.

## Visual Motifs
- Gradient from deep navy (#050924) to electric blue (#0B5FFF) with teal highlights.
- Subtle dotted grid overlay (SVG) to imply precision.
- Animated orbit lines around hero illustration (CSS keyframes).
- Chips and capsules for metadata (duration, ratio, scope), echoing research labels.
- Use MotionWrapper stagger animations for immersive entrance.

## Content Building Blocks
- **Hero copy**: "Research Launchpad" tagline, supportive subtitle.
- **Stat data**: labs=18, hours=120+, scholarships=40%.
- **Timeline data** with hours + deliverables.
- **Tracks array** for grid.
- **Outcomes** with percent completions.
- **Project gallery** items with title, theme, lab partner.
- **Safety list** same constraints but reworded for program page.
- **Application steps** with icon + description.

## Interaction Ideas
- Hover states lift cards with gradient border.
- Timeline uses CSS scroll snap on mobile.
- Project cards show blueprint blueprint background shapes.
- Use `data-label` attribute to render pill badges via ::before pseudoelements.

## Success Criteria
- Instantly communicates prestige + safety.
- Showcases depth (curriculum, mentorship, outcomes) without overwhelming.
- Keeps consistent typography and spacing with existing components.
- Provides obvious CTAs for both students and labs.
