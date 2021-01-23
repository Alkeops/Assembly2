import { Link } from "react-router-dom";

const Banner = ({ titulo, descuento, boton, className, categoria }) => {
  return (
    <div className={`banner banner-descuentos ${className}`}>
      <h1>{titulo}</h1>
      <div className="descuentos__porcentaje descuentos__porcentaje-blanco">
        <span>Hasta</span>
        <span>{descuento}</span>
        <span>Descuento</span>
      </div>
      <Link to={`/${categoria}`} className="btn btn-white">
        {boton}
      </Link>
    </div>
  );
};

export default Banner;
