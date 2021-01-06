import Boton from "../common/Boton";

const Banner = ({ titulo, descuento, boton, className }) => {
  return (
    <div className={`banner banner-descuentos ${className}`}>
      <h1>{titulo}</h1>
      <div className="descuentos__porcentaje descuentos__porcentaje-blanco">
        <span>Hasta</span>
        <span>{descuento}</span>
        <span>Descuento</span>
      </div>
      <Boton className="btn btn-white" content={boton} />
    </div>
  );
};

export default Banner;
