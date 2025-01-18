# StarWars Search Application

This is a StarWars search application that allows users to search through various entities of the StarWars universe
using the [SWAPI API](https://swapi.py4e.com/). It provides autocomplete functionality, category-specific pages, and the
ability to edit or add new data locally.

🚀 **Live Demo**: [StarWars Search App](https://starwars-search-app.duckdns.org/)

## Features

- **Search Page:**
    - Autocomplete search across all StarWars API entities (e.g., films, people, planets).
    - Displays up to 3 top matches per category with an option to "View All".
- **Category Page:**
    - A detailed "People" page with a table of results.
    - Ability to edit or delete entries locally.
    - Create new characters directly from the interface.

## Tech Stack

- **Frontend Framework:** React
- **Language:** TypeScript
- **Build Tool:** Vite
- **UI/UX:** Tailwind css

---

## Installation and Setup

Follow these steps to run the application locally:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/summivar/starwars-search-app.git
   cd starwars-search-app
   ```

2. **Install Dependencies**  
   Make sure you have [Node.js](https://nodejs.org/) installed. Use one of the following package managers:

    - **With npm**:
      ```bash
      npm install
      ```

    - **With Yarn**:
      ```bash
      yarn install
      ```

3. **Run the Development Server**  
   Start the application locally:

    - **With npm**:
      ```bash
      npm run dev
      ```

    - **With Yarn**:
      ```bash
      yarn dev
      ```

4. **Open in Browser**  
   Vite will provide a local server URL (e.g., `http://localhost:5173`). Open it in your browser.

---
## Project Structure

```plaintext
src/  
├── assets/             # Static assets like fonts and images  
│   └── fonts/          # Fonts used in the project  
├── features/           # Reusable components and UI elements  
│   ├── search/         # Search bar and related components (e.g., autocomplete, skeleton loader)  
│   ├── ui/             # General UI components like Layout and Footer  
├── pages/              # Pages for the application  
│   ├── home/           # Home page containing the main search functionality  
│   ├── category/       # Category pages for specific entities (e.g., people, planets)  
│   └── not-found/      # 404 page with random quotes  
├── services/           # API calls and utilities for interacting with the SWAPI  
│   └── swapi/          # SWAPI-specific service functions and types  
├── main.tsx            # Application entry point  
├── index.css           # Global styles  
└── vite-env.d.ts       # TypeScript environment definition for Vite  
```

---

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the project for production.
- `npm run preview`: Previews the production build.
