import Header from '../src/components/Header/header'; 
import Footer from '../src/components/Footer/footer';
import Welcome from '../src/components/Welcome/welcome';
import Information from '../src/components/InformationUs/informationus';
import SectionFurniture from '../src/components/SectionFurniture/SectionFurniture.jsx'
import NotFound from './components/NotFound/Notfound';
import image from '../src/images/IMAGE.png';
import { Route, Routes, useLocation } from "react-router-dom"
export default function App() {
    const location = useLocation(); // Получаем текущий маршрут

    const isHomePage = location.pathname === "/"; // Проверяем, на главной ли мы странице

    return (
      <>
        <Header logo={image} />
        <main>
          {isHomePage && (
            <>
              <Welcome />
              <Information />
            </>
          )}
          {/* Маршруты */}
          <Routes>
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/informationus" element={<Information />} />
            <Route path="/cards" element={<SectionFurniture/>} />
            <Route path="*" element={<NotFound />} /> {/* Обработка ошибочного маршрута */}
          </Routes>
        </main>
        <Footer />
      </>
    );
}
