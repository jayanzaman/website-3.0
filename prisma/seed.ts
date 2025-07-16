import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Delete existing data
  await prisma.article.deleteMany();

  // Create articles
  await prisma.article.createMany({
    data: [
      {
        slug: 'quantum-computing-in-risk-management',
        title: 'Quantum Computing in Risk Management',
        category: 'Technology',
        content: 'Exploring the potential of quantum computing in revolutionizing risk assessment and management.',
        imageUrl: '/images/quantum-article.png',
        author: 'Jayan Zaman',
        date: new Date('2025-05-01'),
        readTime: '5 min',
        published: true,
      },
      {
        slug: 'future-of-risk-engineering-iot',
        title: 'The Future of Risk Engineering with IoT',
        category: 'Engineering',
        content: 'How Internet of Things is transforming the landscape of risk engineering.',
        imageUrl: '/images/Risk-Engineering-and-IoT.png',
        author: 'Jayan Zaman',
        date: new Date('2025-04-15'),
        readTime: '4 min',
        published: true,
      },
      {
        slug: 'innovation-in-insurance-industry',
        title: 'Innovation in Insurance Industry',
        category: 'Insurance',
        content: 'Digital transformation and the future of insurance technology.',
        imageUrl: '/images/insurance-article.jpg',
        author: 'Jayan Zaman',
        date: new Date('2025-04-01'),
        readTime: '6 min',
        published: true,
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
