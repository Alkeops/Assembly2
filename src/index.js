import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./components/Cart/CartProvider";
import { debugContextDevtool } from "react-context-devtool";
import "./sass/style.sass";

const root = document.getElementById("root");

const render = () =>
  ReactDOM.render(
    <CartProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartProvider>,
    root
  );

if (module.hot) module.hot.accept(App, () => setTimeout(render));

render();

debugContextDevtool(root);
