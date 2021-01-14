import Header from "components/Header/Header";
import Home from "components/Home";
import { Redirect, Route, Switch } from "react-router-dom";
import Producto from "components/Producto/Producto";
import Cart from "components/Cart/Cart";

function App() {
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/:categoria/:id" exact component={Producto} />
          <Route path="/cart" exact component={Cart} />
          <Redirect to="/" />
        </Switch>
      </main>
    </>
  );
}

export default App;
