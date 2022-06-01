import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Suspense fallback={null}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Suspense>,
  rootElement
);
