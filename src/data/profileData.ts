export interface ProjectItem {
  id: string;
  title: string;
  category: 'web' | 'design' | 'branding' | 'mobile';
  categoryLabel: string;
  image: string;
  client: string;
  date: string;
  demoUrl: string;
  summary: string;
  details: string;
  tools: string[];
  metrics: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  category: string;
  readTime: string;
  summary: string;
  content: string[];
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  description: string;
}

export interface EducationItem {
  id: string;
  period: string;
  degree: string;
  institution: string;
  description: string;
}

export interface SkillItem {
  name: string;
  percentage: number;
}

export interface ProfileData {
  fullName: string;
  roles: string[];
  bioSummary: string;
  bioLong: string;
  avatarUrl: string;
  bannerUrl: string;
  email: string;
  phone: string;
  location: string;
  freelanceStatus: string;
  age: string;
  residence: string;
  socials: {
    github: string;
    linkedin: string;
    twitter: string;
    dribbble: string;
  };
  experiences: ExperienceItem[];
  educations: EducationItem[];
  codingSkills: SkillItem[];
  designSkills: SkillItem[];
  languages: { language: string; level: string; percent: number }[];
  knowledge: string[];
}

export const initialProfileData: ProfileData = {
  fullName: 'Ryan Davis',
  roles: ['Lead Frontend Engineer', 'UI/UX Product Designer', 'Creative Developer'],
  bioSummary:
    'Passionate engineer and designer with 10+ years crafting digital products that blend architectural rigor with intuitive aesthetics.',
  bioLong:
    'Hello! I am Ryan Davis, a versatile product designer and senior web engineer based in San Francisco. I specialize in building responsive web applications, modern design systems, and delightful digital experiences. Over the past decade, I have collaborated with venture-backed startups and design agencies worldwide to take ideas from whiteboard concepts into high-performing production products.',
  avatarUrl: '/src/assets/images/hero_portrait_ryan_1793838037483.jpg',
  bannerUrl: '/src/assets/images/profile_banner_bg_1793838037802.jpg',
  email: 'ryan.davis@example.com',
  phone: '+1 (415) 890-2415',
  location: 'San Francisco, CA, USA',
  freelanceStatus: 'Available for Q2 Projects',
  age: '29',
  residence: 'United States',
  socials: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    twitter: 'https://x.com',
    dribbble: 'https://dribbble.com',
  },
  experiences: [
    {
      id: 'exp-1',
      period: '2023 - Present',
      role: 'Staff Frontend Architect',
      company: 'TechFlow Systems · San Francisco',
      description:
        'Led the frontend rebuild of an enterprise telemetry platform using React, TypeScript, and micro-frontends, reducing initial page load time by 42% and streamlining design tokens.',
    },
    {
      id: 'exp-2',
      period: '2020 - 2023',
      role: 'Senior UI/UX Engineer',
      company: 'Aura Digital Labs · New York',
      description:
        'Created high-conversion digital experiences, accessible component libraries, and interactive design tools used by over 350,000 active monthly creators.',
    },
    {
      id: 'exp-3',
      period: '2017 - 2020',
      role: 'Full-Stack Developer',
      company: 'Vanguard Media Group · Boston',
      description:
        'Developed bespoke e-commerce and media portals for international brand partners, integrating secure payment gateways, CMS pipelines, and custom WebGL animations.',
    },
  ],
  educations: [
    {
      id: 'edu-1',
      period: '2015 - 2017',
      degree: 'Master of Science in Software Engineering',
      institution: 'Stanford University',
      description:
        'Focused on Human-Computer Interaction (HCI), distributed web systems, and design computation. Graduated with academic distinction.',
    },
    {
      id: 'edu-2',
      period: '2011 - 2015',
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of California, Berkeley',
      description:
        'Dean’s Honors List. President of the University Web Development & Design Society. Double minor in Visual Arts and Cognitive Science.',
    },
    {
      id: 'edu-3',
      period: '2019',
      degree: 'UX Master Certified (NN/g)',
      institution: 'Nielsen Norman Group',
      description:
        'Specialized in Interaction Design, Usability Benchmarking, and Information Architecture.',
    },
  ],
  codingSkills: [
    { name: 'TypeScript & JavaScript (ESNext)', percentage: 95 },
    { name: 'React 19, Next.js & Vite', percentage: 94 },
    { name: 'Tailwind CSS & Design Tokens', percentage: 98 },
    { name: 'Node.js, Express & REST/GraphQL', percentage: 88 },
    { name: 'PostgreSQL & Cloud Infrastructure', percentage: 82 },
  ],
  designSkills: [
    { name: 'Figma & Design Systems', percentage: 96 },
    { name: 'UI/UX & Wireframing', percentage: 92 },
    { name: 'Motion & Micro-Interactions', percentage: 86 },
    { name: 'Rapid Prototyping', percentage: 90 },
  ],
  languages: [
    { language: 'English', level: 'Native / Bilingual', percent: 100 },
    { language: 'German', level: 'Professional Working', percent: 80 },
    { language: 'Spanish', level: 'Conversational', percent: 65 },
  ],
  knowledge: [
    'Design Systems Architecture',
    'Responsive & Fluid Typography',
    'WCAG AA Accessibility',
    'Performance & Core Web Vitals',
    'REST & GraphQL APIs',
    'Test-Driven Development (TDD)',
    'Motion & Transitions',
    'Cross-Browser Optimization',
  ],
};

export const sampleProjects: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Finlytic Pro — Enterprise Wealth Intelligence',
    category: 'web',
    categoryLabel: 'Web Application',
    image: '/src/assets/images/project_fintech_dashboard_1793838038556.jpg',
    client: 'Finlytic Global Asset Corp',
    date: 'February 2026',
    demoUrl: 'https://example.com/finlytic',
    summary:
      'High-performance real-time investment dashboard engineered for institutional hedge funds and capital managers.',
    details:
      'Engineered a sub-second financial portfolio workspace featuring live telemetry, interactive asset breakdown charts, multi-currency balance simulations, and dark/light adaptive theming. Reduced client query latency by 55% using edge caching and optimized virtual lists.',
    tools: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js', 'WebSockets'],
    metrics: '$8.4M+ Daily Volume Managed',
  },
  {
    id: 'proj-2',
    title: 'Aurøra — Nordic E-Commerce Mobile App',
    category: 'mobile',
    categoryLabel: 'Mobile App',
    image: '/src/assets/images/project_ecommerce_app_1793838038776.jpg',
    client: 'Aurøra Apparel Stockholm',
    date: 'January 2026',
    demoUrl: 'https://example.com/aurora',
    summary:
      'Minimalist, gesture-driven retail application for luxury sustainable Scandinavian fashion.',
    details:
      'Crafted an iOS/Android shopping experience with 60fps micro-interactions, single-tap checkout, interactive fabric texture zoom, and offline catalogue synchronization. Improved cart conversion rate by 28% in the first quarter.',
    tools: ['React Native', 'Tailwind', 'Stripe API', 'Framer Motion'],
    metrics: '+28% Checkout Conversion',
  },
  {
    id: 'proj-3',
    title: 'Aura Essence — Editorial Brand Identity',
    category: 'branding',
    categoryLabel: 'Branding & Identity',
    image: '/src/assets/images/project_creative_branding_1793838039780.jpg',
    client: 'Aura Essence Studio',
    date: 'November 2025',
    demoUrl: 'https://example.com/aura-essence',
    summary:
      'Complete monograph brand system, typography guidelines, and packaging for an atelier creative consultancy.',
    details:
      'Formulated a timeless visual language combining classical high-contrast typography with organic travertine textures, wax seal monograms, tactile stationery guidelines, and comprehensive digital brand tokens.',
    tools: ['Figma', 'Illustrator', 'Typography', 'Print Production'],
    metrics: 'Featured on BrandNew & TypeWolf',
  },
  {
    id: 'proj-4',
    title: 'Verve Health — Clinical Vitals Monitoring',
    category: 'web',
    categoryLabel: 'Healthcare Web App',
    image: '/src/assets/images/project_fintech_dashboard_1793838038556.jpg',
    client: 'Verve Health Labs',
    date: 'August 2025',
    demoUrl: 'https://example.com/verve',
    summary:
      'HIPAA-compliant patient vitals tracking platform with automated anomaly alerts for medical practitioners.',
    details:
      'Architected a patient dashboard prioritizing clear contrast and zero visual fatigue. Includes real-time electrocardiogram graphs, automated alert escalation, and medical records export.',
    tools: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    metrics: '99.99% Uptime in 14 Clinics',
  },
  {
    id: 'proj-5',
    title: 'Kroma Design System — Component Foundry',
    category: 'design',
    categoryLabel: 'UI/UX System',
    image: '/src/assets/images/project_creative_branding_1793838039780.jpg',
    client: 'Open Source Community',
    date: 'June 2025',
    demoUrl: 'https://example.com/kroma',
    summary:
      'An accessible, production-ready React and Figma component library with automatic dark mode and high-contrast support.',
    details:
      'Constructed 64 fully typed UI components adhering to WCAG 2.1 AA specifications. Downloaded over 120,000 times with active contributions from designers and developers across 40+ countries.',
    tools: ['Figma', 'React', 'Storybook', 'Tailwind CSS'],
    metrics: '120k+ NPM Downloads',
  },
  {
    id: 'proj-6',
    title: 'Chronos — Minimalist Time & Focus Studio',
    category: 'mobile',
    categoryLabel: 'Mobile & Desktop',
    image: '/src/assets/images/project_ecommerce_app_1793838038776.jpg',
    client: 'Self-Initiated Product',
    date: 'March 2025',
    demoUrl: 'https://example.com/chronos',
    summary:
      'Distraction-free productivity companion designed for deep-work focus sessions and project budgeting.',
    details:
      'Engineered an ambient timer and task tracker with binaural soundscapes, pomodoro pacing, keyboard shortcuts, and local-first data storage.',
    tools: ['React', 'PWA', 'Web Audio API', 'IndexedDB'],
    metrics: '4.9 ★ Rating on ProductHunt',
  },
];

export const sampleBlogPosts: BlogPost[] = [
  {
    id: 'post-1',
    title: 'Architecting Resilient Web Interfaces with Tailwind CSS v4',
    date: 'February 18, 2026',
    category: 'Engineering',
    readTime: '6 min read',
    summary:
      'Deep dive into the zero-config engine, native CSS cascade layers, and custom variants that make Tailwind v4 lightning fast.',
    content: [
      'Tailwind CSS v4 introduces a completely modernized engine built from the ground up on modern CSS features. By discarding legacy configuration files in favor of native CSS syntax (@import "tailwindcss" and @theme blocks), builds complete in milliseconds.',
      'One of the greatest benefits is the native handling of modern CSS features like container queries, @property custom property registrations, and direct color-mix functions.',
      'When building large component libraries, structuring CSS custom properties cleanly prevents theme split-brain failures and ensures consistent contrast ratios across light and dark interfaces.',
    ],
  },
  {
    id: 'post-2',
    title: 'Why Top Frontend Engineers Must Think Like Product Designers',
    date: 'January 24, 2026',
    category: 'Design Philosophy',
    readTime: '5 min read',
    summary:
      'Bridging the chasm between static Figma artboards and living, fluid browser software.',
    content: [
      'A design in Figma is inherently static: it represents a single viewport width, a single language, and idealized placeholder data. In contrast, production software is fluid, dynamic, and unpredictable.',
      'Engineers who understand typographic hierarchy, spatial math (like outer padding >= inner child padding), and touch target accessibility produce software that feels cohesive rather than mechanically stitched together.',
      'By treating code as the ultimate design medium, you eliminate back-and-forth ambiguity and build products with genuine soul.',
    ],
  },
  {
    id: 'post-3',
    title: 'Micro-Interactions that Delight Without Degrading Performance',
    date: 'November 12, 2025',
    category: 'User Experience',
    readTime: '7 min read',
    summary:
      'Practical techniques for compositor-only animations, tactile hover states, and smooth 60fps settling curves.',
    content: [
      'Animation should clarify spatial relationships, not merely decorate. Overuse of heavy physics libraries or animating layout properties like height or margin triggers expensive browser reflows.',
      'By confining transitions strictly to compositor-friendly properties (transform and opacity) and keeping routine response times under 200 milliseconds, interfaces feel instantaneous and tactile.',
      'Always remember WCAG 2.2 accessibility: respect prefers-reduced-motion so users prone to vestibular discomfort can navigate comfortably.',
    ],
  },
];

export const sampleTestimonials = [
  {
    quote:
      'Ryan is an exceptional hybrid engineer. He rebuilt our core dashboard ahead of schedule with flawless aesthetic taste and clean, scalable code. Our users immediately commented on how smooth the new version feels.',
    name: 'Elena Rostova',
    role: 'VP of Product at Horizon Capital',
    avatar: 'ER',
  },
  {
    quote:
      'Working with Ryan was transformative for our brand. He has that rare ability to translate high-level product strategy into pixel-perfect, accessible web software that converts.',
    name: 'Marcus Vance',
    role: 'Founder & CEO at Verve Labs',
    avatar: 'MV',
  },
  {
    quote:
      'The attention to detail Ryan brings to every interaction—from subtle keyboard navigation to crisp typography—sets him apart as a world-class creator.',
    name: 'Sophia Chen',
    role: 'Head of Design at Finlytic Global',
    avatar: 'SC',
  },
];

export const colorThemes = [
  { id: 'emerald', name: 'Emerald Green', primary: '#10b981', ring: 'ring-emerald-500', bg: 'bg-emerald-500', text: 'text-emerald-500', border: 'border-emerald-500', hoverBg: 'hover:bg-emerald-600' },
  { id: 'amber', name: 'Warm Amber', primary: '#f59e0b', ring: 'ring-amber-500', bg: 'bg-amber-500', text: 'text-amber-500', border: 'border-amber-500', hoverBg: 'hover:bg-amber-600' },
  { id: 'sky', name: 'Electric Sky', primary: '#0284c7', ring: 'ring-sky-500', bg: 'bg-sky-500', text: 'text-sky-500', border: 'border-sky-500', hoverBg: 'hover:bg-sky-600' },
  { id: 'violet', name: 'Royal Violet', primary: '#8b5cf6', ring: 'ring-violet-500', bg: 'bg-violet-500', text: 'text-violet-500', border: 'border-violet-500', hoverBg: 'hover:bg-violet-600' },
  { id: 'rose', name: 'Cinnabar Rose', primary: '#f43f5e', ring: 'ring-rose-500', bg: 'bg-rose-500', text: 'text-rose-500', border: 'border-rose-500', hoverBg: 'hover:bg-rose-600' },
  { id: 'orange', name: 'Sunset Orange', primary: '#f97316', ring: 'ring-orange-500', bg: 'bg-orange-500', text: 'text-orange-500', border: 'border-orange-500', hoverBg: 'hover:bg-orange-600' },
];
