import React from "react";
import { Route, Routes } from "react-router-dom"
import Page01 from "./pages/01";
import Page02 from "./pages/02";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Page01/>} />
      <Route path="/02" element={<Page02/>} />
    </Routes>
  );
}


export default App;
