import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import { Loader } from "@react-three/drei";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Suspense fallback={<Loader />}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Suspense>,
  rootElement
);
