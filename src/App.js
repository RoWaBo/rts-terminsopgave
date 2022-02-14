import { Route, Routes, useLocation } from "react-router-dom";
import Activities from './pages/Activities'
import Calendar from './pages/Calendar'
import Search from './pages/Search'
import Login from "./pages/Login";
import Navigation from "./components/Navigation";
import MainLayout from "./components/MainLayout";

function App() {
  const { pathname } = useLocation();

  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Activities />}></Route>
        <Route path="/soeg" element={<Search />}></Route>
        <Route path="/kalender" element={<Calendar />}></Route>
      </Routes>
      {pathname !== '/logind' && (
        <Navigation />
      )}
    </MainLayout>
  );
}

export default App;
