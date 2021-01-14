import { FaOpencart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { cart } from "components/Cart/CartProvider";
import Menu from "./Menu";
const Header = () => {
  const { cantidadTotal, cantidadArticulos } = useContext(cart).stateCart;
  return (
    <header className="header">
      <Menu />
      <Link to="/" className="header__logo">
        <h3>Computer Assembly</h3>
      </Link>
      <div className="vista-previa">
        <Link to="/cart" className="header__iconos">
          {cantidadTotal ? (
            <span className="cantidad">{cantidadArticulos}</span>
          ) : null}
          <FaOpencart />
          <span className="palabra">CARRITO</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
