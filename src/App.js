import Header from "components/Header/Header";
import Home from "components/Home";
import { Redirect, Route, Switch } from "react-router-dom";
import Producto from "components/Producto/Producto";
import Cart from "components/Cart/Cart";
import Categoria from "components/Categoria/Categoria";

function App() {
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/:categoria/:id" exact component={Producto} />
          <Route path="/:categoria" exact component={Categoria} />

          <Redirect to="/" />
        </Switch>
      </main>
    </>
  );
}

export default App;
