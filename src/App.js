import { Route, Routes } from "react-router-dom";
import Activities from './pages/Activities'
import Calender from './pages/Calender'
import Search from './pages/Search'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Activities />}></Route>
      <Route path="/soeg" element={<Search />}></Route>
      <Route path="/kalender" element={<Calender />}></Route>
    </Routes>
  );
}

export default App;
