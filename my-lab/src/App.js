import React, { useState, useEffect } from 'react';
import Header from '../src/components/Header/header'; 
import Footer from '../src/components/Footer/footer';
import Welcome from '../src/components/Welcome/welcome';
import Information from '../src/components/InformationUs/informationus';
import SectionFurniture from '../src/components/SectionFurniture/SectionFurniture.jsx';
import NotFound from './components/NotFound/Notfound';
import image from '../src/images/IMAGE.png';

import { Route, Routes, useLocation } from "react-router-dom";
import Loading from '../src/components/Spin/Spin.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function App() {
    const location = useLocation();
    const [loading, setLoading] = useState(false); 

    useEffect(() => {
        setLoading(true); 
        const timer = setTimeout(() => {
            setLoading(false); 
        }, 1000); 

        return () => clearTimeout(timer); 
    }, [location]);

    return (
      <>
        <Header logo={image} />
        <main>
          {loading ? (
            <Loading /> 
          ) : (
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/welcome" element={<Welcome />} />
              <Route path="/informationus" element={<Information />} />
              <Route path="/cards" element={<SectionFurniture />} />
              <Route path="*" element={<NotFound />} /> {/* Обработка ошибочного маршрута */}
            </Routes>
          )}
        </main>
        <Footer />
      </>
    );
}
