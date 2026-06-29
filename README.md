# My CV — Personal Resume Website

> Built with **Vite + React + TypeScript + Tailwind CSS**

A modern, responsive personal CV/resume website with a clean green theme, interactive portfolio carousel, voice command navigation, and print support.

---

## Features

- **Responsive Design** — Optimized for desktop, tablet, and mobile using Tailwind CSS
- **Interactive Timeline** — Career and education history with animated timeline dots
- **Skills Visualization** — Dot-based skill level indicators grouped by category
- **Portfolio Carousel** — Full-screen project slideshow with images, descriptions, and navigation (keyboard, voice, or click)
- **Voice Commands** — Navigate the site hands-free using [annyang](https://www.talater.com/annyang/) speech recognition
- **Print Support** — One-click print-friendly output of the entire resume
- **Contact Modal** — Overlay with contact details and WeChat QR code
- **Keyboard Navigation** — Arrow keys to browse portfolio projects
- **Loading Progress Bar** — Smooth top-of-page loading indicator via Pace
- **Green Theme** — Custom green color palette with gradient accents and modern typography (Inter & Outfit fonts)

---

## Tech Stack

| Layer          | Technology                     |
| -------------- | ------------------------------ |
| Framework      | React 18                       |
| Language       | TypeScript 5.6                 |
| Build Tool     | Vite 6                         |
| Styling        | Tailwind CSS 3.4               |
| Icons          | ElegantIcons (icon font)       |
| Voice          | annyang (speech recognition)   |
| Loading Bar    | Pace                           |

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
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── postcss.config.js       # PostCSS configuration
├── package.json
├── public/
│   └── images/             # Static images
├── src/
│   ├── main.tsx            # React entry point
│   ├── App.tsx             # Root component
│   ├── index.css           # Global styles & Tailwind imports
│   ├── data.ts             # All resume data (skills, timeline, portfolio)
│   ├── types/
│   │   └── index.ts        # TypeScript interfaces
│   ├── components/
│   │   ├── Header.tsx          # Avatar, name, title, location
│   │   ├── MyStory.tsx         # About me & portfolio list
│   │   ├── Timeline.tsx        # Career/education timeline
│   │   ├── Skills.tsx          # Skill categories with dot ratings
│   │   ├── PortfolioCarousel.tsx  # Full-screen project slideshow
│   │   ├── ContactModal.tsx    # Contact info overlay
│   │   ├── Bye.tsx             # Exit/goodbye overlay
│   │   └── Icon.tsx            # ElegantIcons wrapper component
│   └── fonts/              # ElegantIcons font files
├── css/                    # Legacy CSS (not actively used)
├── js/                     # Legacy JS — annyang & pace only
└── fonts/                  # Legacy font files
```

---

## Voice Commands

Once you grant microphone access, say:

| Command               | Action                          |
| --------------------- | ------------------------------- |
| "Hello"               | Show voice help panel           |
| "Over" / "Close"      | Close panels and overlays       |
| "Contact (you)"       | Open contact modal              |
| "Print (now)"         | Print the resume                |
| "(Your) works"        | Open portfolio carousel         |
| "(Number) one" - "five" | Open a specific project slot  |
| "(Number) more"       | Open the "More" project slot    |
| "Next" / "Down"       | Next portfolio slide            |
| "Previous" / "Up"     | Previous portfolio slide        |
| "Goodbye"             | Show goodbye overlay            |

---

## Customization

1. **Personal Info** — Edit `src/data.ts` to update your name, bio, skills, timeline, and portfolio items
2. **Avatar** — Replace `public/images/pp.jpg` with your own photo
3. **Contact** — Update email, phone, and WeChat info in `src/components/ContactModal.tsx`
4. **Theme** — Adjust colors in `tailwind.config.js` under the `green` and `gray` color keys

---

## License

This project is open source. Feel free to use it as a template for your own resume.
