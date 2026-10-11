# WeManage Consultancy Services

Professional consultancy and business support website built with Next.js, TypeScript, and Tailwind CSS.

## Overview

WeManage Consultancy Services provides practical business, accounting, tax compliance, ERP solutions, data management, business documentation, and administrative support for enterprises, SMEs, and professionals.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Turbopack)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

## Getting Started

### Prerequisites

- Node.js 18.17+ or later
- npm (or yarn / pnpm)

### Installation

```bash
npm install
```

### Development

Run the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Production Build & Validation

To validate TypeScript compilation and generate the production bundle:

```bash
npx tsc --noEmit
npm run build
```

## Project Structure

```text
src/
├── app/                  # Next.js App Router pages and metadata
│   ├── about/            # About Us page
│   ├── contact/          # Contact & Consultation form page
│   ├── industries/       # Industries served overview
│   ├── services/         # Services overview and 10 detailed sub-routes
│   └── why-wemanage/     # Value proposition and capabilities
├── components/           # Reusable UI, layout, and page-specific components
│   ├── contact/          # Accessible Consultation & Inquiry listbox form
│   ├── home/ & sections/ # Homepage editorial hero and features
│   ├── layout/           # Header, Footer, and sticky navigation
│   └── ui/               # Standard UI elements and buttons
└── data/                 # Canonical consultancy data and service definitions
public/                   # Static assets, branding, and optimized photography
```
