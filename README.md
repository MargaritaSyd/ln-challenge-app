# Next.js App with Context API  

This is a Next.js application that utilizes the React Context API to manage and provide data across components.  

## Features  

- **Context API**: Centralized state management using React's Context API.  
- **Dynamic Routing**: Built-in support for dynamic routes in Next.js.  
- **Server-Side Rendering (SSR)**: Optimized for performance with SSR capabilities.  

## Getting Started  

### Prerequisites  

- Node.js (v18 or higher)  
- npm 

### Installation  

1. **Clone the repository**:  
   ```bash  
   git clone https://github.com/MargaritaSyd/ln-challenge-app.git 
   cd ln-challenge-app  
## Getting Started

First, run the development server:
```bash
npm install 
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure
ln-challenge-app
├── public/              # Static assets
├── src/
├──── app/
├─────── tema
├─────── favicon.ico
├─────── global.css              # CSS global styles
├─────── layout.tsx
├─────── page.tsx              
├──── bff/
├─────── interfaces
├─────── routes
├─────── services
├──── front/
├─────── src
├────────── components            # Reusable components  
├────────── constants             # Context providers and hooks  
├────────── context
├────────── services
├────────── utils
├── .gitignore           # Git ignore file 
├── .prettierignore
├── .pretierrc
├── Dockerfile
├── eslint.config.mjs
├── jest.config.ts
├── next-env.d.ts
├── next.config.ts       # Next.js configuration
├── package.json         # Project dependencies
├── postcss.config.mjs
├── setupTests.ts
├── tsconfig.json 
└── README.md            # This file  