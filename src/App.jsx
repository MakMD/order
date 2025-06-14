import React from "react";
// Ми видаляємо імпорт BrowserRouter звідси, оскільки він вже є в main.jsx
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactPage from "./pages/ContactPage";
import CaseStudiesPage from "./pages/case-studies/CaseStudiesPage";
import CaseStudyDetailPage from "./pages/case-studies/CaseStudyDetailPage";

function App() {
  // Видаляємо зайву обгортку <BrowserRouter>
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="about" element={<AboutUsPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="case-studies" element={<CaseStudiesPage />} />
        <Route path="case-studies/:slug" element={<CaseStudyDetailPage />} />
      </Route>
    </Routes>
  );
}

export default App;
