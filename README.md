# AiiForsa Landing Page

A modern, responsive landing page for AiiForsa - an AI-powered career intelligence platform.

## Features

- 🎨 Modern, responsive design with Tailwind CSS
- 🌙 Dark mode support
- 📱 Mobile-first approach with hamburger menu
- ⚡ Built with Next.js 16 and React 19
- 🎯 Separate sections for job seekers and businesses
- 💰 Comprehensive pricing plans
- 💬 Testimonials section
- 📧 Newsletter subscription
- 🔗 Social media integration

## Sections Included

1. **Hero Section** - Eye-catching introduction with CTA buttons and key statistics
2. **Features Section** - Showcase of main platform features with icons
3. **User Access Section** - Dedicated section for job seekers highlighting user benefits
4. **Business Access Section** - Dedicated section for businesses showcasing hiring solutions
5. **Pricing Section** - Tiered pricing for both users and businesses
6. **Testimonials Section** - Social proof with user reviews and company logos
7. **CTA Section** - Final call-to-action before footer
8. **Footer** - Comprehensive navigation, newsletter signup, and social links

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

## Project Structure

```
aiiforsa-landing/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx             # Main landing page
│   │   └── globals.css          # Global styles
│   └── components/
│       ├── Header.tsx           # Navigation header
│       ├── Hero.tsx             # Hero section
│       ├── Features.tsx         # Features showcase
│       ├── UserAccess.tsx       # Job seeker section
│       ├── BusinessAccess.tsx   # Business section
│       ├── Pricing.tsx          # Pricing plans
│       ├── Testimonials.tsx     # User testimonials
│       ├── CTA.tsx              # Call to action
│       └── Footer.tsx           # Footer with links
├── public/                      # Static assets
├── package.json
└── README.md
```

## Technologies Used

- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first CSS framework
- **Lucide React** - Modern icon library

## Customization

### Colors

The landing page uses a blue and purple gradient theme. To customize colors, update the Tailwind classes in the components:

- Primary: `blue-600`
- Secondary: `purple-600`
- Accent: `cyan-500`

### Content

Edit the content in each component file:

- Hero stats: `Hero.tsx`
- Features list: `Features.tsx`
- Pricing plans: `Pricing.tsx`
- Testimonials: `Testimonials.tsx`

### Links

Update navigation links in:
- `Header.tsx` - Navigation menu
- `Footer.tsx` - Footer links

## Deployment

### Vercel (Recommended)

```bash
# Deploy to Vercel
vercel

# Or connect your Git repository to Vercel for automatic deployments
```

### Other Platforms

Build the project and deploy the `.next` folder:

```bash
npm run build
```

## License

Proprietary - AiiForsa © 2025

## Support

For support, contact: support@aiiforsa.com
