import { Route, Routes, useLocation } from "react-router-dom";
import Activities from './pages/Activities'
import Calendar from './pages/Calendar'
import Search from './pages/Search'
import Login from "./pages/Login";
import ActivityDetails from "./pages/ActivityDetails";
import Navigation from "./components/Navigation";
import { useState } from "react";
import SplashScreen from "./components/SplashScreen";
import { AnimatePresence } from 'framer-motion'
import TeamOverview from "./pages/TeamOverview";

function App() {
  const { pathname } = useLocation();
  const [hideSplashScreen, setHideSplashScreen] = useState(sessionStorage.getItem('hideSplashScreen'));

  return (
    <>
      <Routes>
        <Route path="/" element={<Activities />}></Route>
        <Route path="/aktivitetsdetaljer/:id" element={<ActivityDetails />}></Route>
        <Route path="/logind" element={<Login />}></Route>
        <Route path="/soeg" element={<Search />}></Route>
        <Route path="/kalender" element={<Calendar />}></Route>
        <Route path="/holdoversigt/:id" element={<TeamOverview />}></Route>
      </Routes>
      {(pathname !== '/logind' && hideSplashScreen) && (
        <Navigation />
      )}
      <AnimatePresence>
        {!hideSplashScreen && (
          <SplashScreen setHideSplashScreen={setHideSplashScreen} />
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
