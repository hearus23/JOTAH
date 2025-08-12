# Overview

This is a premium rolling papers brand website for "JOTAH" built as a full-stack web application. The project showcases a luxury smoking accessories brand with a focus on high-quality, natural rolling papers. The application features a modern, responsive design with sections for product showcase, brand story, customer testimonials, and contact functionality.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern component development
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management and caching
- **UI Components**: Radix UI primitives with shadcn/ui component system for consistent, accessible design
- **Styling**: Tailwind CSS with custom design tokens and CSS variables for theming
- **Form Handling**: React Hook Form with Zod validation for type-safe form processing
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Runtime**: Node.js with Express.js framework for RESTful API endpoints
- **Language**: TypeScript for full-stack type safety
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Schema Validation**: Zod for runtime type checking and API validation
- **Session Management**: Session-based storage for user interactions
- **Development**: Hot module replacement and middleware-based request logging

## Component Structure
- **Single Page Application**: All sections rendered on a single page with smooth scrolling navigation
- **Modular Components**: Each section (Hero, Products, About, Testimonials, Contact) is a separate reusable component
- **Responsive Design**: Mobile-first approach with breakpoint-specific layouts
- **Interactive Elements**: Contact form with real-time validation and toast notifications

## Data Storage
- **Database**: PostgreSQL with Drizzle ORM for schema management and migrations
- **Tables**: Users table for authentication, contacts table for form submissions
- **Connection**: Neon Database serverless PostgreSQL instance
- **Schema**: Shared TypeScript schema definitions between client and server

# External Dependencies

## Database & Infrastructure
- **Neon Database**: Serverless PostgreSQL hosting for production database
- **Drizzle Kit**: Database migration and schema management tools

## UI & Design
- **Radix UI**: Headless, accessible UI component primitives
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **Lucide React**: Icon library for consistent iconography
- **Google Fonts**: Inter and Playfair Display fonts for typography

## Development Tools
- **Vite**: Build tool with React plugin and development server
- **TypeScript**: Static type checking across the entire application
- **ESBuild**: Fast JavaScript bundler for production builds

## Third-party Services
- **Unsplash**: External image service for product and brand imagery
- **Replit**: Development environment with specific Vite plugins for the platform