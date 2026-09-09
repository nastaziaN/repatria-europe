import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import StructuredData from "./components/seo/StructuredData";
import Menu from "./landing/navigation/menu/Menu";
import Footer from "./landing/navigation/footer/Footer";
import PrivacyPage from "./landing/privacy/PrivacyPage";
import HomePage from "./landing/home/components/HomePage";
import AboutPage from "./landing/about/components/AboutPage";

function App() {
  return (
    <>
      <StructuredData />
      <div className="app">
        <Menu />
        <main className="app-wrapper">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/privacy_policy" element={<PrivacyPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
