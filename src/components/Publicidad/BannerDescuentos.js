import Boton from "../common/Boton";

const BannerDescuentos = () => {
  return (
    <div className="banner descuentos">
      <h1>Aumenta tu productividad</h1>
      <h1>Descuentos</h1>
      <div className="descuentos__porcentaje descuentos__porcentaje-rojo">
        <span>Hasta</span>
        <span>50%</span>
        <span>Descuento</span>
      </div>
      <p>*Solo productos participantes, aplican restricciones</p>
      <Boton className="btn btn-black" content="Descubrelos" />
    </div>
  );
};

export default BannerDescuentos;
