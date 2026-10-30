<div align="center">

# ☕ Foodie App
### A Modern, Responsive Recipe Discovery & Culinary Management Web Application

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6.2-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.8-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.13-06B6D4?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

*An artisanal culinary companion designed for home chefs, foodies, and culinary creators. Built with a rich roasted coffee & warm caramel theme palette.*

</div>

---

## 📖 Table of Contents
- [✨ Key Features](#-key-features)
- [🎨 Design & Theme](#-design--theme)
- [📋 12 Evaluation Requirements Checklist](#-12-evaluation-requirements-checklist)
- [🍽️ 26 Curated Seed Recipes](#️-26-curated-seed-recipes)
- [🏗️ Project Architecture & Structure](#️-project-architecture--structure)
- [💾 Data Model & LocalStorage Schema](#-data-model--localstorage-schema)
- [🚀 Quick Start Guide](#-quick-start-guide)
- [🐙 Pushing to GitHub](#-pushing-to-github)
- [📄 License](#-license)

---

## ✨ Key Features

- **26 Masterclass Seed Recipes**: Pre-populated with high-resolution food photography, ingredient measurements, step-by-step instructions, prep times, cook times, servings, calories, and difficulty ratings.
- **Horizontal Category Carousel**: At least 10 categories (12 included: *All, Breakfast, Lunch, Dinner, Desserts, Snacks, Vegetarian, Non-Vegetarian, Healthy, Drinks, Italian, Indian*) with smooth horizontal scrolling, touch drag, and desktop arrow buttons.
- **Instant Search Engine**: Real-time multi-field search filtering by recipe name, ingredient name (e.g. `paneer`, `tacos`, `espresso`), category, or description.
- **Interactive Recipe Details View**:
  - Full-width hero image with category, difficulty, and energy chips.
  - Interactive Pantry Checklist: check off ingredients as you prep.
  - Step-by-Step Cooking Timeline with completion checkboxes.
  - Share button with clipboard copy feedback.
  - Functional Back button and animated heart favorite toggle.
- **Persistent Favorites System**:
  - Heart icon button with bouncy micro-animation.
  - Dedicated `/favorites` page with instantaneous cross-page synchronization.
  - Persisted in browser `localStorage` (`foodie_favorites` and `foodie_recipes`).
- **My Food & Recipe Publishing**:
  - Full-featured recipe publisher (`/add-recipe`) with form validation.
  - Image upload with automated **Base64 encoding** and live preview, plus direct URL inputs and preset image selectors.
  - Dynamic rows for adding/removing multiple ingredients and instruction steps.
  - Recipe editor (`/edit-recipe/:id`) with pre-filled inputs.
  - Protected system recipes with custom delete confirmation modal dialog.
- **Responsive Dual Navigation**:
  - **Desktop**: Sleek top navbar with badge counters and sample data reset tool.
  - **Mobile**: Fixed bottom navigation bar with a prominent quick-create button and active indicators.
  - **Toast Notifications**: Clean feedback toasts for saving, updating, deleting, and favoriting.

---

## 🎨 Design & Theme

Foodie App uses an **artisanal roasted brown & cafe cream palette** designed specifically for food applications:

| Token | Hex Code | Purpose |
|---|---|---|
| `primary-500` | `#8B4513` | Saddle Brown / Roast Espresso — Primary CTAs & Active states |
| `primary-600` | `#783A0E` | Rich Chestnut — Hover & Focus states |
| `secondary` | `#F4EBE1` | Warm Biscuit Cream — Category pills & Badges |
| `foodie-bg` | `#FAF7F2` | Warm Cafe Parchment — Page background |
| `foodie-text` | `#2C221E` | Roasted Coffee Bean — High-contrast typography |
| `footer-bg` | `#241B17` | Deep Espresso — Elegant dark footer |

**Typography**: Google Font **Poppins** (weights 300 to 800).

---

## 📋 12 Evaluation Requirements Checklist

| # | Evaluation Requirement | Status | Implementation Details |
|---|---|:---:|---|
| **1** | **Horizontal Categories** | ✅ | **12 categories** (*All, Breakfast, Lunch, Dinner, Desserts, Snacks, Vegetarian, Non-Vegetarian, Healthy, Drinks, Italian, Indian*) with smooth horizontal scroll and desktop arrow buttons. |
| **2** | **Recipe Details** | ✅ | Route `/recipe/:id` displays name, image, ingredients with quantities, step-by-step instructions, prep time, cook time, servings, calories, difficulty level, category, working heart button, and back button. |
| **3** | **Category Filtering** | ✅ | Clicking any category button filters recipes immediately without page reload. |
| **4** | **Search Functionality** | ✅ | Instant search by recipe name, ingredient name, category, or description with a one-click clear button. |
| **5** | **Favorite Toggle** | ✅ | Heart button with pop animation, synced immediately across all views and saved in LocalStorage. |
| **6** | **Favorites Page** | ✅ | Route `/favorites` shows saved dishes, allows immediate unfavoriting, and displays a friendly empty state when empty. |
| **7** | **My Food Section** | ✅ | Route `/my-food` displays user-created recipes, "Add New Recipe" button, quick edit/delete buttons, and an empty state. |
| **8** | **Recipe Creation** | ✅ | Route `/add-recipe` features name, file upload with **Base64 conversion** & live preview, URL input, dynamic ingredient rows, dynamic instruction steps, cooking times, servings, calories, difficulty selector, comprehensive form validation, and toast feedback. |
| **9** | **Data Persistence** | ✅ | Preserves all user recipes and favorites in browser `localStorage` (`foodie_recipes`, `foodie_favorites`) across page refreshes. |
| **10** | **Edit Functionality** | ✅ | Route `/edit-recipe/:id` pre-loads recipe information, updates all fields, saves changes to storage, and safely restricts editing to user-created recipes. |
| **11** | **Delete Functionality** | ✅ | Confirmation dialog modal with "Cancel" and "Delete Recipe" buttons, removing the recipe from storage and favorites immediately. |
| **12** | **Responsive Design & Navigation** | ✅ | Responsive layout: desktop top navigation with badge counters, mobile fixed bottom navigation bar, and back buttons on detail and form views. |

---

## 🍽️ 26 Curated Seed Recipes

The application comes pre-loaded with **26 diverse culinary recipes**:

1. **Masala Dosa** (*Breakfast*)
2. **Paneer Butter Masala** (*Indian*)
3. **Veg Biryani** (*Lunch*)
4. **Chicken Biryani** (*Non-Vegetarian*)
5. **Margherita Pizza** (*Italian*)
6. **Chocolate Cake** (*Desserts*)
7. **Pasta Alfredo** (*Italian*)
8. **Idli Sambar** (*Breakfast*)
9. **Fruit Salad** (*Healthy*)
10. **Mango Smoothie** (*Drinks*)
11. **French Fries** (*Snacks*)
12. **Vegetable Sandwich** (*Breakfast*)
13. **Grilled Chicken** (*Dinner*)
14. **Gulab Jamun** (*Desserts*)
15. **Fresh Lemon Juice** (*Drinks*)
16. **Butter Chicken (Murgh Makhani)** (*Non-Vegetarian / Indian*)
17. **Classic Italian Tiramisu** (*Desserts / Italian*)
18. **Mexican Street Tacos** (*Dinner / Non-Vegetarian*)
19. **Fluffy Buttermilk Pancakes** (*Breakfast*)
20. **Authentic Dal Makhani** (*Indian / Vegetarian*)
21. **Guacamole & Crispy Chips** (*Snacks / Healthy*)
22. **Artisan Vegetable Lasagna** (*Italian / Vegetarian*)
23. **Avocado Green Goddess Toast** (*Healthy / Breakfast*)
24. **Iced Caramel Macchiato** (*Drinks*)
25. **Crispy Vegetable Samosas** (*Snacks / Indian*)
26. **Spicy Thai Tom Yum Soup** (*Dinner / Healthy*)

---

## 🏗️ Project Architecture & Structure

```
foodie-app/
├── .github/
│   └── workflows/
│       └── ci.yml                   # Automated GitHub Actions CI workflow
├── .gitignore                       # Git ignore definitions
├── LICENSE                          # MIT Open Source License
├── CONTRIBUTING.md                  # Contribution guidelines
├── README.md                        # Project documentation & guide
├── index.html                       # HTML template with Google Fonts (Poppins)
├── package.json                     # Dependencies and scripts
├── tsconfig.json                    # Strict TypeScript configuration
├── vite.config.ts                   # Vite bundler configuration
├── tailwind.config.js               # Tailwind custom theme & color tokens
├── postcss.config.js                # PostCSS plugins
└── src/
    ├── types/
    │   └── index.ts                 # TypeScript types (Recipe, Ingredient, DifficultyLevel, etc.)
    ├── data/
    │   ├── categories.ts            # 12 categories with icons & descriptions
    │   └── sampleRecipes.ts         # 26 seeded recipes with ingredients, steps, and photos
    ├── context/
    │   ├── RecipeContext.tsx        # LocalStorage state management (foodie_recipes, foodie_favorites)
    │   └── ToastContext.tsx         # Toast notification provider
    ├── components/
    │   ├── Navbar.tsx               # Desktop & mobile header with search & badges
    │   ├── BottomNav.tsx            # Mobile fixed glassmorphism bottom navigation bar
    │   ├── CategoryBar.tsx          # Horizontally scrollable category pills with arrow controls
    │   ├── SearchBar.tsx            # Live instant search by title, ingredients & category
    │   ├── RecipeCard.tsx           # Recipe card with badges, hover animation & details link
    │   ├── RecipeGrid.tsx           # Responsive recipe grid with integrated empty states
    │   ├── RecipeDetails.tsx        # Full details view: hero image, metrics, pantry checklist, steps
    │   ├── IngredientList.tsx       # Interactive pantry checklist / dynamic form rows
    │   ├── InstructionSteps.tsx     # Step-by-step progress checklist / dynamic form rows
    │   ├── FavoriteButton.tsx       # Animated heart toggle with LocalStorage persistence
    │   ├── AddRecipeForm.tsx        # Recipe creator with image upload, preview & validation
    │   ├── EditRecipeForm.tsx       # Recipe editor with pre-filled inputs & validation
    │   ├── DeleteConfirmation.tsx   # Accessible delete confirmation modal dialog
    │   ├── EmptyState.tsx           # Reusable empty states with action triggers
    │   ├── Footer.tsx               # Modern application footer
    │   └── ToastContainer.tsx       # Toast notification UI stack
    ├── pages/
    │   ├── HomePage.tsx             # Route `/`: Hero banner, categories, featured & all recipes
    │   ├── RecipeDetailsPage.tsx    # Route `/recipe/:id`: Full recipe details & actions
    │   ├── FavoritesPage.tsx        # Route `/favorites`: Favorited recipes collection
    │   ├── MyFoodPage.tsx           # Route `/my-food`: User-created recipes & management
    │   ├── AddRecipePage.tsx        # Route `/add-recipe`: Publish new recipe
    │   └── EditRecipePage.tsx       # Route `/edit-recipe/:id`: Edit user recipe
    ├── App.tsx                      # Routes setup & layout shell
    ├── main.tsx                     # React root mount
    └── index.css                    # Tailwind CSS directives & global scrollbar styles
```

---

## 💾 Data Model & LocalStorage Schema

### Recipe Schema Interface
```typescript
export interface Ingredient {
  name: string;
  quantity: string;
}

export type DifficultyLevel = 'Easy' | 'Medium' | 'Hard';

export interface Recipe {
  id: string;                      // Unique ID (e.g. recipe-user-1730000000)
  name: string;                    // Recipe title
  image: string;                   // URL or Base64 Data URI
  category: string;                // Category name
  ingredients: Ingredient[];       // Array of ingredients with quantities
  instructions: string[];          // Ordered step-by-step instructions
  prepTime: number;                // Preparation time in minutes
  cookTime: number;                // Cooking time in minutes
  servings: number;                // Number of servings (> 0)
  calories: number;                // Calories in kcal (>= 0)
  difficulty: DifficultyLevel;     // 'Easy' | 'Medium' | 'Hard'
  isFavorite?: boolean;            // Favorite status flag
  isUserCreated: boolean;          // Whether the user created the recipe
  createdAt?: string;              // ISO timestamp
  description?: string;            // Summary/overview
}
```

### LocalStorage Keys
- `foodie_recipes`: Stores the array of all recipes (`Recipe[]`).
- `foodie_favorites`: Stores an array of favorited recipe IDs (`string[]`).

---

## 🚀 Quick Start Guide

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.0.0 or higher)
- [npm](https://www.npmjs.com/) (v9.0.0 or higher)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/foodie-app.git
   cd foodie-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173/](http://localhost:5173/) in your web browser.

4. Build for production:
   ```bash
   npm run build
   ```

5. Preview the production build:
   ```bash
   npm run preview
   ```

---

## 🐙 Pushing to GitHub

To push this repository to your GitHub account:

```bash
# 1. Initialize git
git init -b main

# 2. Add all project files
git add .

# 3. Create initial commit
git commit -m "feat: initial commit of Foodie App"

# 4. Link your remote GitHub repository
git remote add origin https://github.com/<your-username>/<your-repo-name>.git

# 5. Push to GitHub
git push -u origin main
```

---

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
