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

import MobileSingle from "./SinglePages/MobileSingle";
import LaptopSingle from "./SinglePages/LaptopSingle";
import AcSingle from "./SinglePages/AcSingle"
import BookSingle from "./SinglePages/BookSingle"
import FurnitureSingle from "./SinglePages/FurnitureSingle"
import KitchenSingle from "./SinglePages/KitchenSingle"
import MenSingle from "./SinglePages/MenSingle"
import RefrigeratorSingle from "./SinglePages/RefrigeratorSingle"
import TvSingle from "./SinglePages/TvSingle"
import WatchSingle from "./SinglePages/WatchSingle"
import WomenSingle from "./SinglePages/WomenSingle"


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
        <Route path="/books" element={<BooksPage />} />
        <Route path="/Furniture" element={<FurniturePage />} />
      
        <Route path='/mobiles/:id' element={<MobileSingle/>}/>
        <Route path='/laptops/:id' element={<LaptopSingle/>}/>
        <Route path='/ac/:id' element={<AcSingle/>}/>
        <Route path='/books/:id' element={<BookSingle/>}/>
        <Route path='/furniture/:id' element={<FurnitureSingle/>}/>
        <Route path='/kitchen/:id' element={<KitchenSingle/>}/>
        <Route path='/mensfashion/:id' element={<MenSingle/>}/>
        <Route path='/refrigerator/:id' element={<RefrigeratorSingle/>}/>
        <Route path='/tv/:id' element={<TvSingle/>}/>
        <Route path='/watch/:id' element={<WatchSingle/>}/>
        <Route path='/womenfashion/:id' element={<WomenSingle/>}/>
         
      </Routes>
    </>
  );
};

export default App;
