# Portfolio Website

A modern portfolio website built with Next.js, featuring an admin panel for project management.

## Features

- **Modern Design**: Clean, responsive design using Tailwind CSS
- **Admin Panel**: Secure admin interface for managing projects
- **Authentication**: NextAuth.js for admin login
- **Database**: SQLite with Prisma ORM
- **Project Management**: Full CRUD operations for projects
- **SEO Optimized**: Server-side rendering with Next.js

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up the database:
```bash
npx prisma db push
npx prisma generate
```

3. Seed the database with initial data:
```bash
npx ts-node scripts/seed.ts
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Admin Panel

Access the admin panel at [http://localhost:3000/admin](http://localhost:3000/admin)

**Default Admin Credentials:**
- Email: `admin@example.com`
- Password: `admin123`

**Important:** Change these credentials after first login for security.

## Project Structure

- `/src/app` - Next.js app directory with pages and API routes
- `/src/components` - React components
- `/src/lib` - Utility libraries (Prisma, Auth)
- `/prisma` - Database schema and migrations
- `/scripts` - Database seeding scripts

## Key Pages

- **Home** (`/`) - Main portfolio landing page
- **About** (`/about`) - Professional background and education
- **Projects** (`/projects`) - Showcase of projects
- **Contact** (`/contact`) - Contact information and form
- **Admin** (`/admin`) - Project management dashboard

## Environment Variables

Create a `.env` file with:

```
DATABASE_URL="file:./dev.db"
NEXTAUTH_SECRET="your-nextauth-secret-here"
NEXTAUTH_URL="http://localhost:3000"
```

## Deployment

1. Build the application:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## Customization

### Personal Information
Update your personal information in:
- `src/app/page.tsx` - Home page content
- `src/app/about/page.tsx` - About page content
- `src/app/contact/page.tsx` - Contact information

### Styling
- Modify `tailwind.config.ts` for theme customization
- Update colors, fonts, and spacing in component files

### Adding Features
- API routes are in `src/app/api/`
- Components are in `src/components/`
- Database schema is in `prisma/schema.prisma`

## Technology Stack

- **Frontend**: Next.js 15, React, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: SQLite with Prisma ORM
- **Authentication**: NextAuth.js
- **Icons**: Lucide React
- **Styling**: Tailwind CSS

## License

This project is open source and available under the MIT License.