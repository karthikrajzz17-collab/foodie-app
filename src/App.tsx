import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ToastProvider } from './context/ToastContext';
import { RecipeProvider } from './context/RecipeContext';
import { Navbar } from './components/Navbar';
import { BottomNav } from './components/BottomNav';
import { Footer } from './components/Footer';
import { ToastContainer } from './components/ToastContainer';
import { HomePage } from './pages/HomePage';
import { RecipeDetailsPage } from './pages/RecipeDetailsPage';
import { FavoritesPage } from './pages/FavoritesPage';
import { MyFoodPage } from './pages/MyFoodPage';
import { AddRecipePage } from './pages/AddRecipePage';
import { EditRecipePage } from './pages/EditRecipePage';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
};

export const App: React.FC = () => {
  return (
    <ToastProvider>
      <RecipeProvider>
        <BrowserRouter>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2C221E] antialiased">
            {/* Desktop and Mobile Header */}
            <Navbar />

            {/* Main Application Container */}
            <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-20 md:pb-12">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/recipe/:id" element={<RecipeDetailsPage />} />
                <Route path="/favorites" element={<FavoritesPage />} />
                <Route path="/my-food" element={<MyFoodPage />} />
                <Route path="/add-recipe" element={<AddRecipePage />} />
                <Route path="/edit-recipe/:id" element={<EditRecipePage />} />
                <Route path="*" element={<HomePage />} />
              </Routes>
            </main>

            {/* Modern App Footer */}
            <Footer />

            {/* Mobile Bottom Navigation */}
            <BottomNav />

            {/* Floating Toast Notification Stack */}
            <ToastContainer />
          </div>
        </BrowserRouter>
      </RecipeProvider>
    </ToastProvider>
  );
};

export default App;
