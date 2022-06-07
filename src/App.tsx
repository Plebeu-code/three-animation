import { Route, Routes } from "react-router-dom"
import Page01 from "./pages/01";
import Page02 from "./pages/02";
import Page03 from "./pages/03";
import Page04 from "./pages/04";
import Page05 from "./pages/05";
import Page06 from "./pages/06";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Page01/>} />
      <Route path="/01" element={<Page01/>} />
      <Route path="/02" element={<Page02/>} />
      <Route path="/03" element={<Page03/>} />
      <Route path="/04" element={<Page04/>} />
      <Route path="/05" element={<Page05/>} />
      <Route path="/06" element={<Page06/>} />
    </Routes>
  );
}


export default App;
