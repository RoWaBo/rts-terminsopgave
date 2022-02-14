import { Route, Routes, useLocation } from "react-router-dom";
import Activities from './pages/Activities'
import Calendar from './pages/Calendar'
import Search from './pages/Search'
import Login from "./pages/Login";
import Navigation from "./components/Navigation";

function App() {
  const { pathname } = useLocation();

  return (
    <>
      <Routes>
        <Route path="/" element={<Activities />}></Route>
        <Route path="/soeg" element={<Search />}></Route>
        <Route path="/kalender" element={<Calendar />}></Route>
      </Routes>
      {pathname !== '/logind' && (
        <Navigation />
      )}
    </>
  );
}

export default App;
