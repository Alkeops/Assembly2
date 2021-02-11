import { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="menu">
      <div
        className={!active ? "menu__boton" : "menu__boton menu__boton-active"}
        onClick={() => setActive(!active)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      {active && <p className="cerrar">CERRAR</p>}
      <nav
        className={
          !active
            ? "menu__navegacion"
            : "menu__navegacion menu__navegacion-active"
        }
      >
        <Link
          to={`/gabinetes`}
          onClick={() => setActive(false)}
          className="menu__navegacion-link"
        >
          <p>Gabinetes</p>
        </Link>
        <Link
          to={`/tarjetas madre`}
          onClick={() => setActive(false)}
          className="menu__navegacion-link"
        >
          <p>Tarjetas Madre</p>
        </Link>
        <Link
          to={`/procesadores`}
          onClick={() => setActive(false)}
          className="menu__navegacion-link"
        >
          <p>Procesadores</p>
        </Link>
        <Link
          to={`/discos duro`}
          onClick={() => setActive(false)}
          className="menu__navegacion-link"
        >
          <p>Discos duro</p>
        </Link>
      </nav>
    </div>
  );
};

export default Menu;
