# Contributing to Foodie App

Thank you for your interest in contributing to **Foodie App**! We welcome all contributions, bug fixes, feature suggestions, and documentation improvements.

---

## 🛠️ Development Setup

1. **Fork and Clone**
   ```bash
   git clone https://github.com/<your-username>/foodie-app.git
   cd foodie-app
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start the Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173/](http://localhost:5173/) in your browser.

4. **Verify TypeScript & Production Build**
   ```bash
   npm run build
   ```

---

## 🌿 Branching & Workflow

1. Create a feature branch with a descriptive name:
   ```bash
   git checkout -b feature/recipe-timers
   ```
2. Commit your changes following clear commit messages:
   ```bash
   git commit -m "feat: add interactive cooking timer for instruction steps"
   ```
3. Push to your fork:
   ```bash
   git push origin feature/recipe-timers
   ```
4. Open a **Pull Request** against `main`.

---

## 📋 Code Standards

- **TypeScript**: Ensure strict type checks pass (`npm run build`).
- **Tailwind CSS**: Follow existing color tokens (`primary`, `foodie`, warm brown theme).
- **Responsive Design**: Ensure mobile bottom navigation and desktop navbar work seamlessly across viewport widths.
- **LocalStorage Integrity**: Maintain backward compatibility for `foodie_recipes` and `foodie_favorites`.
