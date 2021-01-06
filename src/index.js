import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./sass/style.sass";

const root = document.getElementById("root");

const render = () =>
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    root
  );

if (module.hot) module.hot.accept(App, () => setTimeout(render));

render();
