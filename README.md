# Oriva Foundation Platform

A modern, production-ready platform for Oriva Foundation - a non-profit tech community focused on teaching technology, hosting events, and building impactful digital solutions.

## 🚀 Features

- **Full-Stack Architecture**: Next.js frontend with API routes backend
- **Multi-Language Support**: English and Arabic with RTL support
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: Firebase Auth ready
- **Admin Dashboard**: Complete CMS for managing content
- **Modern UI**: Tailwind CSS with Framer Motion animations
- **Responsive Design**: Mobile-first approach
- **SEO Optimized**: Built with Next.js for performance

## 🛠️ Tech Stack

### Frontend
- **Next.js 16** - React framework
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

### Backend
- **Next.js API Routes** - Serverless functions
- **MongoDB** - Database
- **Mongoose** - ODM
- **Zod** - Validation
- **bcryptjs** - Password hashing
- **jsonwebtoken** - JWT tokens

### DevOps
- **ESLint** - Code linting
- **Prettier** - Code formatting (recommended)

## 📋 Prerequisites

- Node.js 18+
- MongoDB (local or cloud)
- npm or yarn

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd oriva
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```

   Edit `.env.local` with your configuration:
   ```env
   MONGODB_URI=mongodb://localhost:27017/oriva
   NEXTAUTH_SECRET=your-secret-key
   NEXTAUTH_URL=http://localhost:3000
   ```

4. **Start MongoDB**
   ```bash
   # Using local MongoDB
   mongod

   # Or using Docker
   docker run -d -p 27017:27017 --name mongodb mongo:latest
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
oriva/
├── app/                    # Next.js app directory
│   ├── admin/             # Admin dashboard pages
│   ├── api/               # API routes
│   ├── events/            # Events pages
│   ├── courses/           # Courses pages
│   ├── projects/          # Projects pages
│   ├── volunteer/         # Volunteer pages
│   └── ...                # Other pages
├── components/            # Reusable components
├── lib/                   # Utilities and configurations
│   ├── database/         # Database connection
│   ├── models/           # Mongoose models
│   └── translations.ts   # i18n translations
├── context/               # React contexts
├── public/               # Static assets
└── ...
```

## 🗄️ Database Models

- **Application**: Volunteer and job applications
- **Event**: Events, workshops, hackathons
- **EventRegistration**: Event registrations
- **Course**: Educational courses
- **Project**: Community projects

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌍 Multi-Language Support

The platform supports English and Arabic with full RTL support. Language switching is available in the navigation bar.

## 👨‍💼 Admin Dashboard

Access the admin dashboard at `/admin` to manage:
- Applications (volunteer/job)
- Events
- Courses
- Projects

## 📱 API Endpoints

### Applications
- `GET /api/applications` - List applications
- `POST /api/applications` - Submit application

### Events
- `GET /api/events` - List events
- `POST /api/events` - Create event
- `POST /api/events/[id]/register` - Register for event

### Courses
- `GET /api/courses` - List courses

### Projects
- `GET /api/projects` - List projects

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy

### Other Platforms
The app can be deployed to any platform supporting Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- Self-hosted with Docker

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Oriva Foundation team
- Open source community
- Next.js and React teams

## 📞 Support

For support, email contact@oriva.org or join our Discord community.
npm start
```

## 📁 Project Structure

```
oriva/
├── app/
│   ├── page.tsx                    # Home page
│   ├── about/page.tsx              # About page
│   ├── projects/page.tsx           # Projects showcase
│   ├── impact/page.tsx             # Impact metrics & stories
│   ├── team/page.tsx               # Team members
│   ├── support/page.tsx            # Sponsorship & support
│   ├── join/page.tsx               # Join us recruitment
│   ├── contact/page.tsx            # Contact form
│   ├── privacy/page.tsx            # Privacy policy
│   ├── terms/page.tsx              # Terms of service
│   ├── layout.tsx                  # Root layout
│   └── globals.css                 # Global styles
├── components/
│   ├── Button.tsx                  # Reusable button
│   ├── Navbar.tsx                  # Navigation bar
│   ├── Footer.tsx                  # Footer
│   ├── HeroSection.tsx             # Hero banner
│   ├── ProjectCard.tsx             # Project display
│   ├── TeamCard.tsx                # Team member card
│   ├── SectionWrapper.tsx          # Section container
│   └── SponsorCard.tsx             # Sponsor CTA
├── public/
│   ├── imgs/
│   │   └── oriva.png               # Logo
│   └── favicon.ico
├── package.json                    # Dependencies
├── tsconfig.json                   # TypeScript config
├── tailwind.config.ts              # Tailwind config
├── README.md                       # This file
├── CONTRIBUTING.md                 # Contribution guidelines
├── CODE_OF_CONDUCT.md              # Community guidelines
└── LICENSE                         # MIT License
```

## Design System

### Color Palette
- **Primary**: Red (#C62828)
- **Secondary**: White (#FFFFFF)
- **Text**: Dark Gray (#171717)
- **Background**: White (#FFFFFF)
- **Borders**: Light Gray (#E0E0E0)

### Typography
- **Font Family**: System fonts (Geist Sans, Segoe UI, etc.)
- **Heading Size**: 2xl to 7xl
- **Body Size**: Base to lg

## 📄 Pages

| Page | URL | Description |
|------|-----|-------------|
| Home | `/` | Landing page with featured projects and impact stats |
| About | `/about` | Our mission, vision, and values |
| Projects | `/projects` | Showcase and filtering of all projects |
| Impact | `/impact` | Impact metrics and success stories |
| Team | `/team` | Meet our team members |
| Support | `/support` | Sponsorship tiers and support options |
| Join Us | `/join` | Information about joining Oriva |
| Contact | `/contact` | Contact form and methods |
| Privacy | `/privacy` | Privacy policy |
| Terms | `/terms` | Terms of service |

## Technologies Used

| Technology | Version | Purpose |
|-----------|---------|---------|
| Next.js | 16.2.3 | React framework with App Router |
| React | 19.2.4 | UI library |
| TypeScript | ^5 | Type safety |
| Tailwind CSS | ^4 | Utility-first CSS |
| Framer Motion | ^11.0.0 | Animations |

## Features

- ✅ **Fully Responsive**: Mobile, tablet, and desktop support
- ✅ **Light Mode**: Clean, bright aesthetic
- ✅ **Smooth Animations**: Framer Motion throughout
- ✅ **SEO Optimized**: Meta tags, Open Graph support
- ✅ **TypeScript**: Full type safety
- ✅ **Performance**: Optimized builds, code splitting
- ✅ **Accessible**: Semantic HTML, ARIA labels
- ✅ **Open Source**: GitHub integration

## 📝 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

## 💬 Code of Conduct

We are committed to providing a welcoming and inclusive environment. Please see [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md).

## 📞 Contact

- **Email**: orivafoundation@gmail.com
- **GitHub**: [@Oriva-Foundation](https://github.com/Oriva-Foundation)
- **Sponsor**: [GitHub Sponsors](https://github.com/sponsors/soghayarmahmoud)

## 🙏 Acknowledgments

Special thanks to all contributors and community members who support our mission.

## 📜 License

This project is licensed under the MIT License - see [LICENSE](./LICENSE) file for details.

## 🌟 Support

Your support helps us build better digital solutions for communities:
- ⭐ Star this repository
- 💰 [Sponsor us on GitHub](https://github.com/sponsors/soghayarmahmoud)
- 👥 Contribute code or ideas
- 📣 Share our work

---

**Made with ❤️ for community impact**

Built by the Oriva Foundation Team
