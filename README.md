# Landing Page

A **modern, responsive, and animated landing page** template built with **HTML5, SCSS, and Vanilla JavaScript**. This project demonstrates **clean UI design**, smooth **animations**, and **fully responsive layout** optimized for **mobile, tablet, and desktop**.

---

## Features

✔ **Responsive Design** – Optimized for mobile, tablet, and desktop (Flexbox & Grid layout).
✔ **Glassmorphism UI** – Blurred background sections for a modern look.
✔ **Dark/Light Theme Switcher** – Persistent via `localStorage`.
✔ **Dynamic Components**:
✔ Hero Section with parallax effect
✔ About Section with animated counters
✔ Portfolio Grid with hover effects
✔ Testimonials Slider (with navigation & dots)
✔ Innovation Section with glass cards
✔ **Progress Bar on Scroll** – Tracks reading progress.
✔ **Burger menu & mobile navigation**  
✔ **Dark/Light theme switcher**  
✔ **Smooth hover animations**  
✔ **Portfolio grid** with hover overlay  
✔ Optimized **SCSS architecture (7-1 pattern)**
✔ **Mobile Navigation** – Smooth burger menu with scroll lock.  
✔ Custom **utility mixins** for responsive design & layout  
✔ **Clean, maintainable, modular code**

---

## Tech Stack

- **HTML5**
- **SCSS (7-1 architecture)**
- **Vanilla JavaScript (ES6)**
- **CSS Variables** for theming
- **Flexbox & CSS Grid**
- No frameworks → lightweight & fast

---

## Project Structure

```
nexus-landing/
│
├── index.html
├── /css
│   └── style.css        # Compiled SCSS
├── /js
│   ├── main.js          # Core JS logic
│   ├── slider.js        # Testimonials slider
│   └── theme.js         # Dark/Light toggle
└── /images
│
├── /scss
│   ├── main.scss            # Main SCSS entry
│   ├── /core
│   │   ├── _variables.scss
│   │   ├── _mixins.scss
│   │   └── _base.scss
│   ├── /components
│   │   ├── _header.scss
│   │   ├── _footer.scss
│   │   └── _buttons.scss
│   ├── /sections
│   │   ├── _hero.scss
│   │   ├── _about.scss
│   │   ├── _portfolio.scss
│   │   ├── _innovation.scss
│   │   └── _testimonials.scss
│
└── README.md
```

---

## Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/landing-glassmorphism.git
cd landing-glassmorphism
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run in development

```bash
npm run dev
```

_(or use Live Server in VS Code)_

### 4. Build for production

```bash
npm run build
```

---

## Customization

- Change **colors & gradients** in `scss/core/_variables.scss`
- Add new sections in `index.html` and corresponding SCSS files
- All responsive breakpoints managed via `@include respond()` mixin in `_mixins.scss`

---

## Responsive Design

- **Mobile:** ≤480px
- **Tablet:** 481px – 1024px
- **Desktop:** ≥1025px

---

## 📜 License

MIT License – free for personal use.

---

## Author

Created by **Maryna Kurylko**
