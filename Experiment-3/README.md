# Experiment 3: Routing in Single Page Applications

## Learning Outcomes

1. **Understanding Single Page Application (SPA) Architecture**
   - Learn how SPAs dynamically load content without full page reloads, improving user experience and application responsiveness through client-side rendering.

2. **Advanced Client-Side Routing with React Router**
   - Master the implementation of client-side routing using React Router DOM to create seamless navigation between different views without server requests, enabling smooth user transitions.

3. **Component-Based Architecture**
   - Develop skills in building reusable, modular React components (Home, About, Contact, Spa) with proper separation of concerns and component composition for maintainable applications.

4. **Route Configuration and Navigation**
   - Implement declarative routing patterns, configure route parameters, handle nested routes, and manage navigation flows within a SPA ecosystem.

5. **Performance Optimization in SPAs**
   - Understand lazy loading, code splitting, and performance monitoring to deliver faster navigation and optimal user experience with minimal network overhead.

6. **Building Resilient Navigation Patterns**
   - Learn best practices for creating intuitive navigation patterns, handling edge cases, and implementing error boundaries in client-side routing scenarios.

## Project Overview

This project demonstrates the implementation of a Single Page Application using React, Vite, and React Router DOM. It focuses on routing mechanisms, navigation patterns, and how to structure a multi-view application within a single HTML page while maintaining clean code organization and optimal performance.

## Project Structure

```
Experiment-3/
├── src/
│   ├── components/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── Spa.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── App.css
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── eslint.config.js
```

## Key Technologies

- **React**: JavaScript library for building user interfaces with component-based architecture
- **Vite**: Modern frontend build tool providing fast development server and optimized production builds
- **React Router DOM**: Declarative routing library for building SPAs with dynamic navigation

## Getting Started

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

## Features

- ✨ Fast, responsive navigation without page reloads
- 🎯 Clean URL-based routing system
- ♻️ Reusable component structure
- ⚡ Optimized bundle size with Vite
- 🎨 Responsive UI with custom styling

## Routing Structure

The application implements the following routes:
- `/` - Home page
- `/about` - About page
- `/contact` - Contact page
- `/spa` - SPA explanation page