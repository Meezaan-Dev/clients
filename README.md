# Ecommerce Template

A reusable ecommerce website template built with Astro, TypeScript, and Tailwind CSS.

Designed to act as a base for multiple similar sites (for example different countries or brands) while keeping the same structure and UI.

## Features

- Static-first Astro setup
- Tailwind CSS styling
- Typed with TypeScript
- JSON-driven content
- Global header with search
- Landing page sections
- Product, category, and product detail pages
- Easy to extend for multi-site use

## Folder Structure

```
src/
├── components/     # Reusable UI components
├── data/           # JSON data (site, products, categories)
├── layouts/        # Base layout
├── pages/          # Site pages and routes
├── styles/         # Global CSS (Tailwind)
├── types/          # TypeScript types
└── utils/          # Helpers (search, etc.)
```

## Content Management

All site content is stored in JSON files under `src/data`. This makes it easy to update content or swap data for different sites without changing components.

## Styling

- **Tailwind CSS** - Utility-first CSS framework
- Global styles imported once in `BaseLayout.astro`
- Minimal and easy to theme

## Purpose

This project is intended to be used as a:

- Base ecommerce template
- Multi-country or multi-brand site foundation
- Fast, SEO-friendly product catalogue