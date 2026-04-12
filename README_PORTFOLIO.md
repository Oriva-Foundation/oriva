# Oriva Foundation Portfolio Website

A modern, minimal, and professional portfolio website for Oriva Foundation - a non-profit organization focused on building Islamic applications and community-driven projects.

## 🚀 Quick Start

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Then open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
npm start
```

## 📁 Project Structure

```
oriva/
├── app/
│   ├── page.tsx              # Home page
│   ├── about/page.tsx        # About page
│   ├── projects/page.tsx     # Projects page
│   ├── impact/page.tsx       # Impact page
│   ├── support/page.tsx      # Support/Sponsorship page
│   ├── contact/page.tsx      # Contact page
│   ├── layout.tsx            # Root layout with Navbar & Footer
│   └── globals.css           # Global styles
├── components/
│   ├── Button.tsx            # Reusable button component
│   ├── Navbar.tsx            # Navigation bar
│   ├── Footer.tsx            # Footer component
│   ├── HeroSection.tsx       # Hero section with animations
│   ├── ProjectCard.tsx       # Project card component
│   ├── SectionWrapper.tsx    # Section wrapper component
│   └── SponsorCard.tsx       # Sponsor/support card
├── package.json
├── tsconfig.json
└── tailwind.config.ts
```

## 🎨 Design System

### Colors
- **Primary Red**: #c62828 (from logo)
- **White**: #ffffff
- **Light Gray**: #f5f5f5, #e0e0e0
- **Dark Mode**: Fully supported with complementary dark colors

### Typography
- Font: System fonts (Geist Sans, Segoe UI, etc.)
- Clean, minimal design inspired by Vercel, Google, Meta

### Components
- **Button**: Multiple variants (primary, secondary, outline) and sizes (sm, md, lg)
- **Navbar**: Sticky, responsive with mobile menu
- **Footer**: Clean, organized with links and social media
- **ProjectCard**: Filterable project showcase with tags
- **SectionWrapper**: Reusable section container
- **HeroSection**: Full-width hero with animated background
- **SponsorCard**: Call-to-action for sponsorship

## 📄 Pages

### 1. Home Page (`/`)
- Hero section with animated background
- Featured projects showcase
- Impact statistics with counters
- About preview
- Why choose Oriva section
- Sponsor CTA
- General CTA

### 2. About Page (`/about`)
- About hero
- Mission & Vision cards
- Core values section
- Team focus areas
- Call to action to get involved

### 3. Projects Page (`/projects`)
- Hero section
- Filterable project grid
- Category filters (All, Islamic, Community, Tech, etc.)
- Open source testimonial
- Contribution call to action

### 4. Impact Page (`/impact`)
- Impact metrics and statistics
- Impact stories with real numbers
- How we create impact (4-step process)
- Call to action

### 5. Support Page (`/support`)
- Main sponsor card
- Ways to support (4 options)
- Sponsorship tiers with pricing
- Impact of support section
- FAQ and transparency
- Final CTA

### 6. Contact Page (`/contact`)
- Contact methods (Email, GitHub, LinkedIn, Twitter)
- Contact form with success message
- Get involved information
- Global community message

## 🎭 Animations

All components use **Framer Motion** for smooth animations:
- Fade-in on scroll
- Hover effects on cards
- Scale and translate animations
- Staggered item animations
- Button interactions

## ✨ Features

- ✅ **Fully Responsive**: Mobile, tablet, and desktop layouts
- ✅ **Dark Mode**: Complete dark mode support
- ✅ **Smooth Animations**: Framer Motion animations throughout
- ✅ **SEO Optimized**: Metadata, Open Graph tags
- ✅ **Performance**: Optimized images, code splitting
- ✅ **Accessibility**: Semantic HTML, ARIA labels
- ✅ **TypeScript**: Full type safety
- ✅ **Open Source**: All projects link to GitHub

## 🔧 Technologies Used

- **Framework**: Next.js 16.2.3 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion 11
- **Font**: Geist (default) with fallbacks

## 📝 Customization

### Colors
Edit color values in `app/globals.css`:
```css
:root {
  --red-primary: #c62828;
  --red-dark: #b71c1c;
  --gray-light: #f5f5f5;
  --gray-border: #e0e0e0;
}
```

### Content
- Update project data in `app/projects/page.tsx`
- Modify social links in `components/Footer.tsx`
- Customize sponsor tiers in `app/support/page.tsx`

### Animations
Adjust timing and effects in component files using Framer Motion's `motion` components and animation props.

## 📞 Contact & Links

- **GitHub**: [soghayarmahmoud](https://github.com/soghayarmahmoud)
- **GitHub Sponsors**: [Sponsor](https://github.com/sponsors/soghayarmahmoud)
- **Email**: hello@oriva.org

## 📜 License

Oriva Foundation © 2024. All rights reserved.

## 🤝 Contributing

Contributions are welcome! Please check the projects page for open issues and contribution guidelines.

---

Built with ❤️ for community impact.
