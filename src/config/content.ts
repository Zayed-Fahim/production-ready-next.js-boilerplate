import {
  LayoutIcon,
  TypeIcon,
  TailwindIcon,
  ShieldIcon,
  GaugeIcon,
  MoonIcon
} from '@/constants/icons';

export const features = [
  {
    title: 'App Router',
    description:
      'Leverage the latest Next.js 15 App Router for better performance and developer experience.',
    icon: LayoutIcon
  },
  {
    title: 'TypeScript',
    description: 'Fully typed codebase with strict TypeScript configuration.',
    icon: TypeIcon
  },
  {
    title: 'Tailwind CSS',
    description: 'Utility-first CSS framework for rapid UI development.',
    icon: TailwindIcon
  },
  {
    title: 'Authentication',
    description: 'Pre-configured auth with NextAuth.js or Clerk.',
    icon: ShieldIcon
  },
  {
    title: 'Performance',
    description: 'Optimized for 90+ Lighthouse scores out of the box.',
    icon: GaugeIcon
  },
  {
    title: 'Dark Mode',
    description: 'First-class dark mode support with CSS variables.',
    icon: MoonIcon
  }
];

export const codeExamples = [
  {
    name: 'page.tsx',
    code: `import { Button } from '@/components/ui/button';\n\nexport default function Home() {\n  return (\n    <div className="container">\n      <h1 className="text-4xl font-bold">Welcome</h1>\n      <Button>Click me</Button>\n    </div>\n  );\n}`
  },
  {
    name: 'layout.tsx',
    code: `import { Inter } from 'next/font/google';\nimport './globals.css';\n\nconst inter = Inter({ subsets: ['latin'] });\n\nexport default function RootLayout({\n  children,\n}: {\n  children: React.ReactNode;\n}) {\n  return (\n    <html lang="en">\n      <body className={inter.className}>{children}</body>\n    </html>\n  );\n}`
  }
];
