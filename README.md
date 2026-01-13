# Poppy Chargha House Website

A modern, professional website for Poppy Chargha House - Lahore's beloved desi restaurant since 1979.

## Features

- 🍗 Modern, responsive design
- 📱 Mobile-first approach
- 🎨 Desi food aesthetic with red, blue, and white branding
- 📋 Interactive menu with categories and search
- 📸 Gallery section with lightbox
- ⭐ Reviews and ratings showcase
- 📍 Branch locations with contact info
- 💬 WhatsApp integration (floating button)
- 🔍 SEO optimized
- ⚡ Fast and performant

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
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build for Production

```bash
# Build the project
npm run build

# Start production server
npm start
```

## Project Structure

```
poppy-chargha-house/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Sticky navigation bar
│   ├── Footer.tsx          # Footer component
│   ├── WhatsAppButton.tsx  # Floating WhatsApp button
│   └── sections/
│       ├── Hero.tsx        # Hero section
│       ├── Menu.tsx        # Menu section
│       ├── Gallery.tsx     # Gallery section
│       ├── Reviews.tsx     # Reviews section
│       ├── About.tsx       # About section
│       ├── Branches.tsx    # Branches section
│       └── Contact.tsx     # Contact section
└── public/                 # Static assets
```

## Customization

### Adding Menu Images

1. Place menu images in the `public/menu/` directory
2. Update the menu items in `components/sections/Menu.tsx` to include image paths

### Adding Gallery Images

1. Place images in the `public/gallery/` directory
2. Update the `galleryImages` array in `components/sections/Gallery.tsx`

### Updating Contact Information

Edit the branch information in `components/sections/Branches.tsx` and contact details in `components/sections/Contact.tsx`

### Changing Colors

Modify the color scheme in `tailwind.config.ts` under the `theme.extend.colors` section.

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Icons** - Icon library

## SEO Features

- Optimized meta tags
- Open Graph tags for social sharing
- Twitter Card support
- Semantic HTML structure
- Mobile-responsive design

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2024 Poppy Chargha House. All rights reserved. hehe
