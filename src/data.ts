import { PortfolioItem, TimelineItem, SkillGroup } from './types'

export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Gigipos Back Office',
    tech: 'Nextjs, Hono',
    description: 'Back office application for Gigipos, a POS system. It is a web application that allows users to manage their POS system, view reports, and manage their inventory.',
  },
  {
    title: 'Gigipos Mobile App',
    tech: 'React Native, Hono',
    description: 'Mobile application for Gigipos, a POS system. It allows users to manage their POS system on the go.',
  },
  {
    title: 'Gsign Digital Signage',
    tech: 'Nextjs, React Native, Hono',
    description: 'Web and mobile application for Gsign, a digital signage system. It allows users to manage their digital signage content and schedule.',
  },
  {
    title: 'Aicquire',
    tech: 'Vuejs, Express, MongoDB',
    description: 'Aicquire is a web application that allows employers to manage hiring and recruitment processes. It is a platform that allows employers to post job openings, manage applications, and communicate with candidates.',
  },
]

export const timelineItems: TimelineItem[] = [
  {
    id: 's2',
    title: 'Digital Transformation',
    subtitle: 'Mid-Level Frontend Developer',
    period: '2025.2 - Present',
  },
  {
    id: 's1',
    title: 'Digital Transformation',
    subtitle: 'Junior Frontend Developer',
    period: '2023.11 - 2025.2',
  },
]

export const skillGroups: SkillGroup[] = [
  { category: 'Web Frontend', name: '', level: 0 },
  { name: 'TypeScript', level: 10 },
  { name: 'Reactjs', level: 10 },
  { name: 'Vuejs', level: 8 },
  { name: 'Nextjs', level: 8 },
  { name: 'Tailwind', level: 10 },
  
  { category: 'Web Backend', name: '', level: 0 },
  { name: 'Expressjs', level: 8 },
  { name: 'Honojs', level: 10 },
  { name: 'Nestjs', level: 2 },
  { name: 'Prisma ORM', level: 8 },
  { name: 'Drizzle ORM', level: 4 },
  { name: 'PHP Core', level: 10 },

  { category: 'Mobile Development', name: '', level: 0 },
  { name: 'React Native', level: 8 },
  { name: 'Jetpack Compose Kotlin', level: 1 },

  { category: 'Database', name: '', level: 0 },
  { name: 'MySQL', level: 10 },
  { name: 'MariaDB', level: 6 },
]


