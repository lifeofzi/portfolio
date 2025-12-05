# Zaman Ishtiyaq - Portfolio Website

A modern, clean portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. The project follows Atomic Design principles for maintainable and scalable component architecture.

## Features

- 🏠 **Home Page** - Showcase your work with a chronological timeline (most recent first)
- 📧 **Get in Touch Page** - Contact form for easy communication
- 🎨 **Modern Design** - Clean, minimalistic UI with dark mode support
- 📱 **Responsive** - Works seamlessly on all devices
- ⚡ **Fast** - Optimized for performance with Next.js 15
- 🏗️ **Atomic Design** - Well-organized component structure

## Project Structure

```
zaman_ishtiyaq/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Home page
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/
│   ├── atoms/             # Smallest UI units
│   │   ├── Button.tsx
│   │   └── Link.tsx
│   ├── molecules/         # Combinations of atoms
│   │   ├── Navigation.tsx
│   │   └── TimelineItem.tsx
│   └── organisms/      # Complex components
│       ├── Timeline.tsx
│       └── ContactForm.tsx
└── public/                # Static assets
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Update your timeline data in `app/page.tsx`:
   - Replace the sample `timelineData` array with your actual work experience and education
   - Update the hero section with your information

3. Update contact information in `app/contact/page.tsx`:
   - Replace email and LinkedIn links with your actual contact details

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment to Vercel

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy!

Or use the Vercel CLI:
```bash
npm i -g vercel
vercel
```

## Customization

### Timeline Data Structure

Update the `timelineData` array in `app/page.tsx`:

```typescript
{
  id: 'unique-id',
  title: 'Job Title or Degree',
  organization: 'Company or University',
  location: 'City, State',
  startDate: 'YYYY-MM',  // Format: YYYY-MM
  endDate: 'YYYY-MM',    // Optional, omit for current
  type: 'work' | 'education' | 'project',
  description: [
    'Bullet point 1',
    'Bullet point 2',
  ],
}
```

### Styling

The project uses Tailwind CSS. Customize colors and styles in:
- `tailwind.config.ts` - Theme configuration
- `app/globals.css` - Global styles and CSS variables

### Dark Mode

Dark mode is automatically enabled based on user's system preferences. You can customize the dark mode styles in the component files.

## Technologies Used

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Atomic Design** - Component architecture methodology

## License

MIT

