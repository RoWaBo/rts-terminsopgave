import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Activities from './pages/Activities'
import Calendar from './pages/Calendar'
import Search from './pages/Search'
import Login from "./pages/Login";
import Navigation from "./components/Navigation";
import MainLayout from "./components/MainLayout";
import { useContext, useEffect, useState } from "react";
import SplashScreen from "./components/SplashScreen";
import { AnimatePresence } from 'framer-motion'
import { UserContext } from "./contexts/UserContext";

function App() {
  const { user } = useContext(UserContext);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [hideSplashScreen, setHideSplashScreen] = useState(sessionStorage.getItem('hideSplashScreen'));

  useEffect(() => {
    console.log(user);
    !user && navigate('/logind')
  }, [navigate, user]);

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
