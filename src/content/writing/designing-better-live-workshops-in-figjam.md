---
title: "Designing Better Live Workshops in FigJam"
date: 2026-10-30
description: "How Guided Activity could help participants stay on track and facilitators focus on collaboration."
tags: ["FigJam"]
readingTime: "6 min read"
---

[Read the original PDF](/documents/designing-better-live-workshops-figjam.pdf)

## The Problem

FigJam's flexible editing experience helps teams brainstorm, share ideas, and collaborate in real time. However, during structured workshops FigJam can be difficult to manage, especially when participants are unfamiliar with the product. Participants can lose track of the current activity or unintentionally modify prepared content, leading a facilitator to have to troubleshoot rather than guide the discussion.

## Where the Experience Could Improve

> "I just had a session with 15+ people and it was so chaotic. Absolutely necessary to have much more control on what other people can do, especially during Open Sessions." - Fernando

- **Participants lose context:** If a participant joins late or becomes distracted, nothing on their screen indicates the current activity, where to work, or how long is left.
- **Unfamiliar tools may lead to mistakes:** A person told to add stickies can also choose between shapes, text, templates, and sections that can move or be deleted.
- **Facilitators have to intervene to fix mistakes:** A shape instead of a sticky, a note in the wrong section, or a copy of the template means the facilitator will likely fix it.
- **The facilitator may not know the group's progress:** They see a full board, not who has finished or who is stuck, so they can't tell when to extend the timer or move on.

## Why It Matters

- **Facilitators:** One participant's mistake can interrupt the entire group, reducing the time available for a productive discussion and slowing down each participant.
- **Participants:** Confusing UX can create hesitation and lower confidence in contributions.
- **Figma:** New FigJam users are important to growth and a key opportunity for repeat usage, while also central to FigJam's value for cross-functional collaboration.

**Opportunity:** Help FigJam participants understand the context of the session and effectively use the correct tools to contribute to the activity without disrupting the shared workspace.

## The Solution: Guided Activity

A facilitator selects a section, writes a one-line prompt, optionally sets a timer, and clicks Start. For the length of the activity, participants see a pinned activity card, can only edit inside that section, and get a simplified toolbar. The host also sees how many people have marked Done.

### Core Capabilities

- **Shared Activity Context:** A prompt banner card displays instructions to all participants and a "Take me there" shortcut button on the participant's screen.
- **Contribution Board Space:** The active section is highlighted, relevant tools are emphasized visually, and prepared content is unavailable for participants to accidentally edit.
- **Facilitator Readiness Check:** Participants can optionally mark "I'm done." The facilitator sees an aggregate ready count and can extend or end the activity.

### Participant UX Changes

- **Top activity card:** Displays the current prompt, section, and remaining time as participants navigate the board. A "Take me there" button brings users to the active section.
- **Focused toolbar:** Prioritizes relevant tools, including stickies, stamps, cursor chat, and comments, with "Show all tools" available for flexibility.
- **Protected content:** Prevents accidental edits to prepared workshop content, with subtle feedback explaining restricted actions without interrupting the participant.
- **Readiness check-in:** Participants mark "I'm done" when finished, privately updating the facilitator's progress view.

### Facilitator UX Changes

- **Quick activity setup:** Select a section, add an optional prompt and timer, and start the activity in one click.
- **Live activity controls:** A compact host bar displays the timer and participant readiness count, with options to extend time or end the activity.
- **Full editing control:** Facilitators can edit and organize content throughout the activity without participant restrictions.
- **Transition across activities:** Ending an activity removes temporary restrictions and restores normal editing while preserving all contributions.

## End-to-End Experience

Maya, a PM, runs a 40-minute retro for 14 people, four of them first-time guests. Sam is a guest.

1. **Start:** Maya selects the "What went well" section and clicks Start activity in the section toolbar. She types a prompt, optionally turns on the timer, and clicks Start. Everything on the board is now protected for participants.
2. **Orient:** Sam sees a card at the top of his canvas with the prompt, time left, and Take me there. The section is highlighted. Late joiners see the card on arrival.
3. **Contribute:** The toolbar emphasizes stickies, stamps, cursor chat, and comments, and Show all tools is one click away. Sam adds a sticky in the highlighted section.
4. **Recover:** Sam drags the Instructions section by mistake. It doesn't move, and a small note says, "This is part of the board setup. Add your idea in the highlighted section." Maya is never interrupted.
5. **Facilitate:** When Sam finishes, he clicks I'm done. Maya sees "9 of 14 done" and extends time by two minutes. She can still edit anything.
6. **Move on:** Maya clicks End. Normal editing returns and every sticky stays. The group clusters and votes with existing tools, and she starts the next activity in one click.

## Key Decisions and Tradeoffs

- **Protect existing content, not entire sections:** Participants can add and edit new contributions without accidentally changing prepared materials. More flexible than making everything outside the active section read-only.
- **Guide without restriction:** Highlight relevant tools while keeping the full editor accessible. Preserve the flexibility of tools while nudging the user toward selecting a simpler tool.
- **Keep Done optional:** Gives facilitators a sense of group readiness without forcing participants to report progress. Simple progress tracking without intrusiveness.
- **Temporary by design:** End the activity to return to normal editing, including clustering and voting.

## MVP Feasibility and Metrics

**Scope:** One designer and one engineer over two months, built in this order if time falls short:

1. Protected prepared content and the prompt card.
2. Section highlight and Take me there.
3. Focused toolbar.
4. Done count.

- **Biggest risk:** Enforcing temporary content protection reliably across multiplayer editing, shortcuts, and duplication. Validate this in early engineering meetings.
- **Fallback:** Ship the card, highlight, and toolbar, and block participants from unlocking or duplicating locked objects during an activity, with the facilitator locking content beforehand. It's weaker than full protection and I wouldn't pursue otherwise.
- **North Star metric:** Facilitator interventions caused by participant confusion or editing mistakes per workshop.
- **Supporting metrics:** Time to first sticky, unintended edits, participant confidence, and facilitator satisfaction.
- **Guardrail:** Hosts ending activities early or unprotecting, and experienced participants saying it got in the way.
- **Validation:** Run short workshops with first-time users, one on standard FigJam with locks and one with Guided Activity. Compare mistakes, interventions, and time to first sticky or other contribution.
