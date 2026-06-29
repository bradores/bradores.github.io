# My CV — Personal Resume Website

> Built with **Vite + React + TypeScript + Tailwind CSS + Framer Motion**

A modern, responsive personal CV/resume website with a clean green theme, smooth page animations, interactive portfolio cards, and a contact modal.

---

## Features

- **Responsive Design** — Optimized for desktop, tablet, and mobile using Tailwind CSS
- **Smooth Animations** — Page load entrance, scroll reveal, hover interactions, and spring physics powered by [Framer Motion](https://www.framer.com/motion/)
- **Skills Visualization** — Dot-based skill level indicators grouped by category with staggered popup animations
- **Portfolio Cards** — Interactive project cards with hover lift effects, inline in the My Story section
- **Contact Modal** — Overlay with contact details (email, phone) using `AnimatePresence` for smooth enter/exit transitions
- **Green Theme** — Custom green color palette with gradient accents and modern typography (Inter & Outfit fonts)
- **Scroll Animations** — Sections and elements animate into view as you scroll using `whileInView`
- **Micro-interactions** — Hover and tap feedback on cards, buttons, icons, and avatar

---

## Tech Stack

| Layer          | Technology                     |
| -------------- | ------------------------------ |
| Framework      | React 18                       |
| Language       | TypeScript 5.6                 |
| Build Tool     | Vite 6                         |
| Styling        | Tailwind CSS 3.4               |
| Animation      | Framer Motion 12               |
| Icons          | react-icons (Feather icons)    |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) >= 18
- npm (comes with Node.js)

### Install

```bash
git clone <repository-url>
cd my-cv
npm install
```

### Development

Start the dev server with hot module replacement:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

Create a production build:

```bash
npm run build
```

The output will be in the `dist/` directory.

### Preview

Preview the production build locally:

```bash
npm run preview
```

---

## Project Structure

```
my-cv/
├── index.html              # Entry HTML
├── vite.config.ts          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration (includes custom animations)
├── tsconfig.json           # TypeScript configuration
├── postcss.config.js       # PostCSS configuration
├── package.json
├── public/
│   └── images/             # Static images (avatar, icons, etc.)
├── src/
│   ├── main.tsx            # React entry point
│   ├── App.tsx             # Root component with staggered entrance animation
│   ├── index.css           # Global styles, Tailwind imports & custom animation classes
│   ├── data.ts             # All resume data (skills, timeline, portfolio)
│   ├── types/
│   │   └── index.ts        # TypeScript interfaces
│   └── components/
│       ├── Header.tsx          # Avatar (spring animation), name, title, location
│       ├── MyStory.tsx         # About me & interactive portfolio cards
│       ├── Timeline.tsx        # Career/education timeline (commented out)
│       ├── Skills.tsx          # Skill categories with dot ratings & staggered animations
│       └── ContactModal.tsx    # Contact info overlay with AnimatePresence
```

---

## Animations

The site uses [Framer Motion](https://www.framer.com/motion/) for a cohesive animation experience:

- **Page Load**: Container uses `staggerChildren` for sequential section entrance on page load
- **Scroll Reveal**: All major sections use `whileInView` with `viewport={{ once: true }}` to animate in as you scroll
- **Hover Effects**: Cards, buttons, and icons use `whileHover` for lift, scale, and rotation micro-interactions
- **Spring Physics**: Avatar entrance uses spring animation for a natural bounce feel
- **Staggered Lists**: Portfolio cards, skill rows, and dots animate in sequentially based on their index
- **Modal Transitions**: Contact modal uses `AnimatePresence` with clip-path circle reveal animation
- **Custom CSS Keyframes**: `tailwind.config.js` includes additional keyframes (fade-in-up, float, glow, spin-slow, etc.)

---

## Customization

1. **Personal Info** — Edit `src/data.ts` to update your bio, skills, timeline, and portfolio items
2. **Avatar** — Add your photo and update the avatar section in `src/components/Header.tsx`
3. **Contact** — Update email and phone info in `src/components/ContactModal.tsx`
4. **Theme** — Adjust colors in `tailwind.config.js` under the `green` and `gray` color keys
5. **Animations** — Tweak animation variants and durations in each component or `App.tsx`

---

## License

This project is open source. Feel free to use it as a template for your own resume.
