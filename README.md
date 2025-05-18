
# Shopy - E-commerce Platform for Small Businesses

## Overview

Shopy is a modern e-commerce platform designed specifically for small businesses. This repository contains the codebase for the Shopy marketing website.

## Features

- **Landing page** - Showcasing Shopy's main features and value proposition
- **About Us** - Company mission, team, and values
- **News Room** - Press releases and media resources
- **Blog** - Articles and resources for small business owners
- **Careers** - Open positions and company culture

## Technology Stack

- **Frontend Framework:** React with TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Routing:** React Router
- **Data Fetching:** TanStack Query (React Query)
- **Icons:** Lucide React

## Getting Started

### Prerequisites

- Node.js (v16 or later recommended)
- npm (v7 or later recommended)

### Installation

1. Clone the repository
   ```bash
   git clone <YOUR_GIT_URL>
   cd shopy-website
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:8080`

## Project Structure

```
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── ui/          # shadcn/ui components
│   │   └── ...          # Custom components
│   ├── pages/           # Page components
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions and shared logic
│   ├── App.tsx          # Main app component with routes
│   └── main.tsx         # Entry point
├── tailwind.config.ts   # Tailwind CSS configuration
└── vite.config.ts       # Vite configuration
```

## Design System

- **Colors:** Primarily using the Shopy purple color palette defined in `tailwind.config.ts`
- **Typography:** Modern, clean sans-serif fonts
- **Components:** Shadcn UI components customized to match Shopy branding

## Development Guidelines

- Follow the existing component structure when adding new features
- Use Tailwind CSS for styling
- Ensure responsive design for all screen sizes
- Keep accessibility in mind (proper contrast, semantic HTML, etc.)
- Document new components and functions with comments

## Deployment

This project is set up for deployment through Lovable. To deploy:

1. Visit your Lovable project dashboard
2. Click on "Publish" in the top-right corner
3. Follow the deployment steps

## License

Copyright © 2023-present Shopy, Inc. All rights reserved.
