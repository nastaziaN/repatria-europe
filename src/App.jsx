import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import StructuredData from "./components/seo/StructuredData";
import Menu from "./landing/navigation/menu/Menu";
import Footer from "./landing/navigation/footer/Footer";
import PrivacyPage from "./landing/privacy/PrivacyPage";

const HomePage = lazy(() => import("./landing/home/components/HomePage"));
const AboutPage = lazy(() => import("./landing/about/components/AboutPage"));

function App() {
  return (
    <>
      <StructuredData />
      <div className="app">
        <Menu />
        <main className="app-wrapper">
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/privacy_policy" element={<PrivacyPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
