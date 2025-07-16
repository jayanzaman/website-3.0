export interface Article {
  id: number;
  slug: string;
  title: string;
  category: string;
  content: string;
  imageUrl: string;
  author: string;
  date: string;
  readTime: string;
}

export const articles: Article[] = [
  {
    id: 1,
    slug: 'quantum-computing-in-risk-management',
    title: 'Quantum Computing in Risk Management',
    category: 'Technology',
    content: 'Exploring the potential of quantum computing in revolutionizing risk assessment and management.',
    imageUrl: '/images/quantum-article.png',
    author: 'Jayan Zaman',
    date: '2025-05-01',
    readTime: '5 min',
  },
  {
    id: 2,
    slug: 'future-of-risk-engineering-iot',
    title: 'The Future of Risk Engineering with IoT',
    category: 'Engineering',
    content: 'How Internet of Things is transforming the landscape of risk engineering.',
    imageUrl: '/images/Risk-Engineering-and-IoT.png',
    author: 'Jayan Zaman',
    date: '2025-04-15',
    readTime: '4 min',
  },
  {
    id: 3,
    slug: 'innovation-in-insurance-industry',
    title: 'Innovation in Insurance Industry',
    category: 'Insurance',
    content: 'Digital transformation and the future of insurance technology.',
    imageUrl: '/images/insurance-article.jpg',
    author: 'Jayan Zaman',
    date: '2025-04-01',
    readTime: '6 min',
  },
];
