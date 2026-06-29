export interface PortfolioItem {
  title: string
  tech: string
  description: string
}

export interface TimelineItem {
  id: string
  title: string
  subtitle: string
  period: string
}

export interface SkillGroup {
  category?: string
  name: string
  level: number // 0-10, number of filled dots
}


