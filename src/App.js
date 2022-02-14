import { Route, Routes } from "react-router-dom";
import Activities from './pages/Activities'
import Calendar from './pages/Calendar'
import Search from './pages/Search'
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Activities />}></Route>
        <Route path="/soeg" element={<Search />}></Route>
        <Route path="/kalender" element={<Calendar />}></Route>
      </Routes>
      <Navigation />
    </>
  );
}

export default App;
