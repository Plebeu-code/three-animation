import React from "react";
import { Route, Routes } from "react-router-dom"
import Page01 from "./pages/01";
import Page02 from "./pages/02";
import Page03 from "./pages/03";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Page01/>} />
      <Route path="/01" element={<Page01/>} />
      <Route path="/02" element={<Page02/>} />
      <Route path="/03" element={<Page03/>} />
    </Routes>
  );
}


export default App;
