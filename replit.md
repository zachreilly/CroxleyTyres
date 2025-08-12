# Croxley Tyres - Business Website

## Overview

This is a full-stack web application for Croxley Tyres, a tyre service business located in Rickmansworth. The application serves as a business website featuring information about their services, tyre products, and a contact form for customer inquiries. The site showcases their Rodex mid-range tyres, professional installation services, and competitive pricing for both new and part-worn tyres. The website features a red and yellow color scheme with integrated business photos displayed as dynamic background slideshows throughout the site, plus the business logo prominently displayed in the header, footer, and hero section.

## User Preferences

Preferred communication style: Simple, everyday language.
Design preferences: Red and yellow color scheme, business photos integrated throughout the site.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: Wouter for client-side routing (lightweight React router alternative)
- **UI Framework**: shadcn/ui components built on Radix UI primitives with Tailwind CSS for styling
- **State Management**: TanStack Query for server state management and API calls
- **Form Handling**: React Hook Form with Zod validation for type-safe form validation
- **Styling**: Tailwind CSS with custom red and yellow automotive color scheme, integrated business photography, and responsive design system

The frontend follows a component-based architecture with pages for Home (including gallery section), Services, Tyres showcase, and Contact. The design uses a professional automotive color palette with red and yellow branding, integrated business photography, and mobile-first responsive design.

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API endpoints for contact form submission and message retrieval
- **Development Server**: Vite development server integration for hot module replacement
- **Error Handling**: Centralized error handling middleware with structured error responses

The backend uses a modular architecture with separated concerns for routing, storage, and server setup. The Express server is configured with JSON parsing middleware and request logging.

### Data Storage Solutions
- **Primary Database**: PostgreSQL configured through Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Development Storage**: In-memory storage implementation for development/testing
- **Schema Management**: Drizzle Kit for database migrations and schema management
- **Validation**: Zod schemas for runtime type validation shared between frontend and backend

The storage layer uses an interface-based design allowing for easy switching between in-memory storage (development) and PostgreSQL (production).

### External Dependencies
- **Database**: Neon Database (@neondatabase/serverless) for PostgreSQL hosting
- **ORM**: Drizzle ORM for type-safe database operations
- **UI Components**: Extensive use of Radix UI primitives for accessible component foundation
- **Form Validation**: Zod for schema validation and type safety
- **State Management**: TanStack React Query for API state management
- **Build Tools**: Vite for development and production builds, ESBuild for server bundling
- **Development**: Replit-specific plugins for development environment integration

The application is structured as a monorepo with shared TypeScript types and validation schemas between frontend and backend, ensuring type safety across the full stack.