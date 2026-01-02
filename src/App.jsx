import React from "react";
import LandingPage from "./stores/pages/LandingPage";
import { Routes, Route } from "react-router-dom";
import MobilePage from "./stores/pages/MobilePage";
import LaptopPage from "./stores/pages/LaptopPage";
import MensFashionPage from "./stores/pages/MensFashionPage";
import WatchPage from "./stores/pages/WatchPage";
import WomanPage from "./stores/pages/WomanPage";
import TvPage from "./stores/pages/TvPage";
import KitchenPage from "./stores/pages/KitchenPage";
import RefrigeratorPage from "./stores/pages/RefrigeratorPage";
import AcPage from "./stores/pages/AcPage";
import BooksPage from "./stores/pages/BooksPage";
import FurniturePage from "./stores/pages/FurniturePage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/mobiles" element={<MobilePage />} />
        <Route path="/laptops" element={<LaptopPage />} />
        <Route path="/Mens Fashion" element={<MensFashionPage />} />
        <Route path="/watches" element={<WatchPage />} />
        <Route path="/Womans Fashion" element={<WomanPage />} />
        <Route path="/tv" element={<TvPage />} />
        <Route path="/kitchen" element={<KitchenPage />} />
        <Route path="/Refrigerators" element={<RefrigeratorPage />} />
        <Route path="/Ac" element={<AcPage />} />
        <Route path="/Books" element={<BooksPage />} />
        <Route path="/Furniture" element={<FurniturePage />} />
      </Routes>
    </>
  );
};

export default App;
