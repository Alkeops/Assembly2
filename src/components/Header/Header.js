import { FaOpencart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Menu from "./Menu";
const Header = () => {
  return (
    <header className="header">
      <Menu />
      <Link to="/" className="header__logo">
        <h3>Computer Assembly</h3>
      </Link>

      <div className="header__iconos">
        <FaOpencart />
        <span>CARRITO</span>
      </div>
    </header>
  );
};

export default Header;
