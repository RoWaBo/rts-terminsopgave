import { Route, Routes, useLocation } from "react-router-dom";
import Activities from './pages/Activities'
import Calendar from './pages/Calendar'
import Search from './pages/Search'
import Login from "./pages/Login";
import Navigation from "./components/Navigation";
import MainLayout from "./components/MainLayout";
import { useState } from "react";
import SplashScreen from "./components/SplashScreen";
import { AnimatePresence } from 'framer-motion'

function App() {
  const { pathname } = useLocation();
  const [hideSplashScreen, setHideSplashScreen] = useState(sessionStorage.getItem('hideSplashScreen'));

  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Activities />}></Route>
        <Route path="/logind" element={<Login />}></Route>
        <Route path="/soeg" element={<Search />}></Route>
        <Route path="/kalender" element={<Calendar />}></Route>
      </Routes>
      {(pathname !== '/logind' && hideSplashScreen) && (
        <Navigation />
      )}
      <AnimatePresence>
        {!hideSplashScreen && (
          <SplashScreen setHideSplashScreen={setHideSplashScreen} />
        )}
      </AnimatePresence>
    </MainLayout>
  );
}

export default App;
