import { Link } from "react-router-dom";
const SliderCategoriaItem = ({
  nombre,
  id,
  descripcion,
  precio,
  categoria,
}) => {
  return (
    <Link to={`/${categoria}/${id}`}>
      <div className="item-portada">
        <div className="item-portada__imagen"></div>
        <div className="item-portada__info">
          <h4 className="item-portada__nombre">{nombre}</h4>
          <p className="item-portada__descripcion">{descripcion}</p>
          <span className="item-portada__precio">{precio}</span>
        </div>
      </div>
    </Link>
  );
};

export default SliderCategoriaItem;
