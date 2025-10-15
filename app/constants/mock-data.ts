export const mockUsersSpark = [12, 13, 12, 13, 13, 14, 14, 15, 14, 15, 16, 15, 16, 17, 16, 17, 18]

export const mockConvSpark = [8, 7, 9, 7, 6, 7, 6, 6, 7, 5, 6, 5, 5, 5, 4, 4, 3]

export const mockEventSpark = [10, 10, 10, 10, 11, 10, 10, 10, 10, 10, 9, 10, 10, 10, 10, 10, 10]

export const mockSessionsA = [
  900, 1800, 1200, 2500, 4200, 3800, 5200, 6100, 7200, 6800, 9100, 9800, 12000, 13500, 15000, 13800, 16000, 17500,
  19000, 20500, 19800, 21500, 22500, 23500, 24500, 25500
]

export const mockSessionsB = mockSessionsA.map((v) => Math.max(0, Math.round(v * 0.6 + (Math.random() - 0.5) * 1200)))

export const mockSessionsC = mockSessionsA.map((v) => Math.max(0, Math.round(v * 0.35 + (Math.random() - 0.5) * 800)))

export const mockPageViews = [10000, 10500, 8200, 11000, 12500, 8400, 7200]

export const mockDownloads = [2500, 3200, 2800, 4100, 5200, 3000, 2600]

export interface Trend {
  value: number
  direction: 'up' | 'down'
}

export interface TreeNode {
  id: string
  label: string
  type: 'parent' | 'leaf'
  dotColor?: 'green' | 'blue'
  children?: TreeNode[]
}

export const mockTreeData: TreeNode[] = [
  {
    id: 'website',
    label: 'Website',
    type: 'parent',
    children: [
      { id: 'home', label: 'Home', type: 'leaf', dotColor: 'green' },
      { id: 'pricing', label: 'Pricing', type: 'leaf', dotColor: 'green' },
      { id: 'about', label: 'About us', type: 'leaf', dotColor: 'green' },
      {
        id: 'blog',
        label: 'Blog',
        type: 'parent',
        children: [
          { id: 'announcements', label: 'Announcements', type: 'leaf', dotColor: 'blue' },
          { id: 'april-lookahead', label: 'April lookahead', type: 'leaf', dotColor: 'blue' },
          { id: 'whats-new', label: "What's new", type: 'leaf', dotColor: 'blue' },
          { id: 'meet-the-team', label: 'Meet the team', type: 'leaf', dotColor: 'blue' }
        ]
      }
    ]
  },
  {
    id: 'store',
    label: 'Store',
    type: 'parent',
    children: [
      { id: 'all-products', label: 'All products', type: 'leaf', dotColor: 'green' },
      {
        id: 'categories',
        label: 'Categories',
        type: 'parent',
        children: [
          { id: 'gadgets', label: 'Gadgets', type: 'leaf', dotColor: 'blue' },
          { id: 'phones', label: 'Phones', type: 'leaf', dotColor: 'blue' },
          { id: 'wearables', label: 'Wearables', type: 'leaf', dotColor: 'blue' }
        ]
      },
      { id: 'bestsellers', label: 'Bestsellers', type: 'leaf', dotColor: 'green' },
      { id: 'sales', label: 'Sales', type: 'leaf', dotColor: 'green' }
    ]
  },
  { id: 'contact', label: 'Contact', type: 'leaf', dotColor: 'blue' },
  { id: 'help', label: 'Help', type: 'leaf', dotColor: 'blue' }
]

export interface CountryData {
  id: string
  country: string
  percentage: number
  color: string
  flag: string
  countryCode?: string // ISO 3166-1 alpha-2 country code
}

export const mockCountryData: CountryData[] = [
  { id: 'india', country: 'India', percentage: 50, color: '#027af2', flag: '🇮🇳', countryCode: 'IN' },
  { id: 'usa', country: 'USA', percentage: 35, color: '#4da6ff', flag: '🇺🇸', countryCode: 'US' },
  { id: 'brazil', country: 'Brazil', percentage: 10, color: '#5eaa22', flag: '🇧🇷', countryCode: 'BR' },
  { id: 'other', country: 'Other', percentage: 5, color: '#94a0b8', flag: '🌍' }
]

export const mockTotalUsers = 98500
