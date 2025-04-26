import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');

    if (slug) {
      const article = await prisma.article.findUnique({
        where: { slug },
      });
      if (!article) {
        return NextResponse.json({ error: 'Article not found' }, { status: 404 });
      }
      return NextResponse.json(article);
    }

    const articles = await prisma.article.findMany({
      where: { published: true },
      orderBy: { date: 'desc' },
    });
    return NextResponse.json(articles);
  } catch (error) {
    console.error('Error fetching articles:', error);
    return NextResponse.json({ error: 'Error fetching articles' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const article = await prisma.article.create({
      data: {
        slug: body.slug,
        title: body.title,
        category: body.category,
        content: body.content,
        imageUrl: body.imageUrl,
        author: body.author,
        date: new Date(body.date),
        readTime: body.readTime,
        published: body.published ?? false,
      },
    });
    return NextResponse.json(article, { status: 201 });
  } catch (error) {
    console.error('Error creating article:', error);
    return NextResponse.json({ error: 'Error creating article' }, { status: 500 });
  }
}
