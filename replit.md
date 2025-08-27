# Overview

CleanHomes is a professional home cleaning service website built as a full-stack React application. The platform offers four main cleaning services: Standard Cleaning, Deep Cleaning, Move-In/Move-Out Cleaning, and Recurring Cleaning. The application provides service information, pricing calculation, online booking functionality, and contact capabilities for customers looking to schedule home cleaning services.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: Wouter for client-side routing with pages for Home, Services, Pricing, About, Contact, Policies, and Booking
- **UI Framework**: Shadcn/ui components built on Radix UI primitives with Tailwind CSS for styling
- **State Management**: TanStack React Query for server state management and caching
- **Form Handling**: React Hook Form with Zod validation for type-safe form validation
- **Component Structure**: Modular component architecture with reusable UI components and page-specific components

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API endpoints for bookings and contact messages
- **Request Handling**: Express middleware for JSON parsing, URL encoding, and request logging
- **Error Handling**: Centralized error handling middleware with structured error responses
- **Development**: Hot module replacement via Vite integration in development mode

## Data Storage Solutions
- **Database**: PostgreSQL configured via Drizzle ORM
- **ORM**: Drizzle with schema-first approach and TypeScript integration
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Development Storage**: In-memory storage implementation for development/testing
- **Database Schema**: Three main entities - Users, Bookings, and Contact Messages with proper relationships and constraints

## Authentication and Authorization
- **Current State**: Basic user schema defined but authentication not fully implemented
- **Session Management**: Connect-pg-simple configured for PostgreSQL session storage
- **Security**: Prepared for session-based authentication with secure cookie handling

## External Dependencies
- **Database Provider**: Neon Database (@neondatabase/serverless) for serverless PostgreSQL
- **UI Components**: Comprehensive Radix UI component library for accessible, unstyled components
- **Styling**: Tailwind CSS with CSS variables for theming and responsive design
- **Development Tools**: Replit-specific plugins for development environment integration
- **Fonts**: Google Fonts integration (Inter, DM Sans, Fira Code, Geist Mono, Architects Daughter)
- **Icons**: Lucide React for consistent iconography throughout the application
- **Date Handling**: date-fns for date manipulation and formatting
- **Validation**: Zod for runtime type checking and validation schemas