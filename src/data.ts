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
    id: 's5',
    title: 'Lanex Corporation',
    subtitle: 'Software Engineer',
    period: '2018.6 - Present',
  },
  {
    id: 's4',
    title: '1722 IT Services',
    subtitle: 'Junior Full Stack Web Developer',
    period: '2017.10 - 2018.6',
  },
  {
    id: 's3',
    title: 'Graduated from College',
    subtitle: 'Bachelors Degree in Computer Engineering',
    period: '2012.6 - 2018.3',
  },
]

export const skillGroups: SkillGroup[] = [
  { category: 'Web Frontend', name: '', level: 0 },
  { name: 'Reactjs', level: 10 },
  { name: 'Vuejs', level: 8 },
  { name: 'Nextjs', level: 8 },
  { name: 'Tailwind CSS', level: 7 },
  
  { category: 'Web Backend', name: '', level: 0 },
  { name: 'Expressjs', level: 8 },
  { name: 'Honojs', level: 10 },
  { name: 'Nestjs', level: 4 },
  { name: 'Prisma ORM', level: 8 },
  { name: 'Drizzle ORM', level: 4 },

  { category: 'Mobile Development', name: '', level: 0 },
  { name: 'React Native', level: 8 },
  { name: 'Jetpack Compose Kotlin', level: 2 },

  { category: 'Database', name: '', level: 0 },
  { name: 'MySQL', level: 6 },
  { name: 'MariaDB', level: 6 },
]


