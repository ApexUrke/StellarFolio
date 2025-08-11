# Stellar Folio - Futuristic Developer Portfolio

Welcome to Stellar Folio, a customizable, futuristic developer profile website template designed for easy forking and personalization. This template is built with Next.js and Tailwind CSS to provide a stunning and interactive portfolio experience. This project was created by ApexLabs.


## Features

- **Futuristic UI/UX**: A sleek, dark theme with holographic and neon accents.
- **Interactive Background**: An animated particle background that subtly reacts to mouse movement.
- **Sleek Animations**: Smooth, animated navigation and subtle transitions throughout the site.
- **Mobile-Friendly**: Fully responsive with a mobile navigation menu.
- **Dynamic Content**: Easily configurable sections for your personal data, projects, and skills.
- **Easy to Fork & Customize**: Built as a template, so you can fork it and make it your own in minutes.

## Getting Started

Follow these steps to set up your own Stellar Folio portfolio.

### 1. Fork the Repository

Click the "Fork" button at the top right of this page to copy this repository to your own GitHub account.

### 2. Clone Your Fork

Clone the repository from your account to your local machine:

```bash
git clone https://github.com/YOUR_USERNAME/stellar-folio.git
cd stellar-folio
```

### 3. Install Dependencies

This project uses `npm` for package management. Install the dependencies:

```bash
npm install
```

### 4. Run the Development Server

Start the Next.js development server:

```bash
npm run dev
```

Your portfolio will be available at `http://localhost:9002`.

## Customization

Personalizing your portfolio is easy. All the main content is located in a single configuration file.

### Edit `src/lib/config.ts`

Open `src/lib/config.ts` and modify the content to match your personal information.

```typescript
import { Github, Linkedin, Mail } from 'lucide-react';

export const config = {
  name: "Your Name",
  title: "Creative Developer & AI Enthusiast",
  email: "your.email@example.com",
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/your-username",
      icon: Github,
    },
    // Add more social links
  ],
  bio: "Your detailed bio goes here. Talk about your passion, experience, and what drives you.",
  skills: [
    // Add your skills
    {
      name: "React",
      // ...
    },
  ],
  projects: [
    // Add your projects
    {
      title: "Project One",
      // ...
    },
  ],
};
```

- **`name`**: Your full name.
- **`title`**: Your professional title or a catchy tagline.
- **`email`**: Your contact email.
- **`socials`**: An array of your social media profiles. The icon is from the `lucide-react` library.
- **`bio`**: A paragraph about yourself.
- **`skills`**: A list of your skills. You can add icons from `lucide-react`.
- **`projects`**: An array of projects you want to showcase. Use a service like [placehold.co](https://placehold.co) for placeholder images while you find the perfect screenshots.

### Changing the Theme

Colors and fonts can be changed easily:

- **Colors**: Edit the HSL color variables in `src/app/globals.css`.
- **Fonts**: The template uses 'Space Grotesk' for headlines and 'Inter' for body text from Google Fonts. You can change these in `tailwind.config.ts` and `src/app/layout.tsx`.

## Project Structure

```
/
├── public/                 # Static assets
├── src/
│   ├── app/                # Next.js App Router pages and layouts
│   │   ├── globals.css     # Global styles and theme
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Main page component
│   ├── components/         # React components
│   │   ├── sections/       # Page section components (Hero, About, etc.)
│   │   ├── ui/             # Pre-built UI components (from shadcn/ui)
│   │   └── *.tsx           # Other components (Header, Footer, etc.)
│   ├── lib/
│   │   └── config.ts       # Your personal data configuration
└── README.md
```

## Deployment

Deploy your personalized portfolio to any platform that supports Next.js, such as Vercel, Netlify, or Firebase App Hosting.

## License

This project is open-source and available under the [MIT License](LICENSE).
