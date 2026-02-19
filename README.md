# whoami

```bash
$ whoami
unorthod0xd

$ cat /proc/self/status
Name: unorthod0xd
State: Running
PID: 1337
Mission: Document the daemon
Status: Active since 2018
```

## What This Is

This isn't a portfolio. It's a runtime log.

A Next.js site documenting the journey from script kiddie to security researcher. Origin story.

**Live:** [unorthod0xd.xyz](https://unorthod0xd.xyz)

---

## Tech Stack

```yaml
framework: Next.js 16 (App Router)
styling: Tailwind CSS
animations: Framer Motion
fonts: JetBrains Mono + Inter
icons: Lucide React
deployment: Vercel
daemon_level: Over 9000
```

**Why these choices:**
- **Next.js**: App Router for better performance, built-in optimization
- **Tailwind**: Rapid iteration without context switching
- **Framer Motion**: Smooth animations without bloat
- **Vercel**: Deploy on push, edge functions, zero config

---

## Quick Start

```bash
# Clone the daemon
$ git clone https://github.com/UNORTHOD0xd/whoami.git
$ cd whoami

# Install dependencies
$ npm install

# Run development server
$ npm run dev

# Build for production
$ npm run build

# Start production server
$ npm start
```

Open [http://localhost:3000](http://localhost:3000) and watch the daemon boot.

---

## Project Structure

```
whoami/
├── src/
│   ├── app/
│   │   ├── page.tsx                  # Main layout
│   │   ├── layout.tsx                # Root layout with fonts, metadata
│   │   ├── globals.css               # Tailwind + custom properties
│   │   ├── sitemap.ts                # Auto-generated sitemap
│   │   ├── blog/
│   │   │   ├── page.tsx              # Blog index
│   │   │   ├── layout.tsx            # Blog layout
│   │   │   └── [slug]/page.tsx       # Individual post
│   │   └── feed.xml/route.ts         # RSS feed
│   ├── components/
│   │   ├── Background/
│   │   │   └── ParticleNetwork.tsx   # Reactive particle background
│   │   ├── Layout/
│   │   │   ├── Sidebar.tsx           # Sticky left column (avatar, nav, socials)
│   │   │   └── MobileNav.tsx         # Responsive hamburger navigation
│   │   ├── Sections/
│   │   │   ├── About.tsx             # Origin story
│   │   │   ├── Now.tsx               # Current learning focus
│   │   │   ├── Projects.tsx          # Project showcase
│   │   │   ├── Skills.tsx            # Skills + tools
│   │   │   ├── Timeline.tsx          # Career timeline
│   │   │   └── Contact.tsx           # Links + CTA
│   │   └── UI/
│   │       ├── BlogCard.tsx          # Blog post preview card
│   │       ├── CopyEmail.tsx         # Click-to-copy email
│   │       ├── KonamiCode.tsx        # Easter egg
│   │       ├── LoadingScreen.tsx     # Boot sequence animation
│   │       ├── ProjectCard.tsx       # Individual project display
│   │       ├── ScrollToTop.tsx       # Scroll to top button
│   │       ├── SectionHeader.tsx     # Consistent section titles
│   │       ├── SkipToContent.tsx     # Accessibility skip link
│   │       ├── SocialLinks.tsx       # GitHub, Twitter, Email
│   │       ├── TechTag.tsx           # Tech stack tags
│   │       └── TypeWriter.tsx        # Typewriter text effect
│   ├── lib/
│   │   └── blog.ts                   # Blog post parsing + metadata
│   └── __tests__/
│       └── blog.test.ts              # Blog utility tests
├── content/
│   └── blog/                         # MDX blog posts
├── public/
│   ├── avatar.jpg                    # Profile image
│   ├── favicon.svg
│   ├── og-image.svg                  # Open Graph image
│   └── robots.txt
└── README.md
```

---

## License

MIT - Do whatever you want. Attribution appreciated but not required.

---

## Status

```bash
$ systemctl status whoami
● whoami.service - Portfolio Daemon
   Loaded: loaded
   Active: active (running)
   Status: "Building in public, learning in private"

$ echo $NEXT_MOVE
"Document everything. Ship constantly. Stay curious."
```

---

The daemon is always running.

```bash
$ exit
# See you in the logs.
```
