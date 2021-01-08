import { useEffect, useState } from "react";
import productos from "../../productos";
import SliderCategoriaItem from "./SliderCategoriaItem";

const SliderCategoria = ({ categoria }) => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    productos.then((res) => {
      setProduct(res);
    });
  }, []);
  return (
    <div className="slider-categoria">
      <h3 className="slider-categoria__nombre">{categoria}</h3>
      <div className="slider-categoria__contenedor">
        {product.map(({ nombre, id, descripcion, precio, categoria }) => (
          <SliderCategoriaItem
            nombre={nombre}
            categoria={categoria}
            id={id}
            descripcion={descripcion}
            precio={precio}
            key={id}
          />
        ))}
      </div>
    </div>
  );
};

export default SliderCategoria;
