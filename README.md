# Personal Website

A modern personal website built with Next.js, Prisma, and Supabase, featuring a blog, portfolio, and contact form.

## Features

- 🚀 Built with Next.js 14
- 💾 PostgreSQL database with Prisma ORM
- 🔒 Authentication with NextAuth.js
- 📝 Markdown blog posts
- 📱 Responsive design with Tailwind CSS
- 📬 Contact form with database integration

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd website-3.0
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file with the following:
```
DATABASE_URL="your_supabase_database_url"
GITHUB_ID="your_github_oauth_client_id"
GITHUB_SECRET="your_github_oauth_client_secret"
NEXTAUTH_SECRET="your_random_secret_string"
NEXTAUTH_URL="http://localhost:3000"
```

4. Initialize the database:
```bash
npx prisma generate
npx prisma db push
```

5. Run the development server:
```bash
npm run dev
```

## Deployment

This project is configured for deployment on Netlify:

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set up the environment variables in Netlify's dashboard
4. Deploy!

## Tech Stack

- **Framework**: Next.js 14
- **Database**: PostgreSQL (Supabase)
- **ORM**: Prisma
- **Authentication**: NextAuth.js
- **Styling**: Tailwind CSS
- **Deployment**: Netlify
- **Content**: Markdown with `marked`

## License

MIT
