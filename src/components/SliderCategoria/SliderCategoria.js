import { cargarProductos } from "config/firebase/firestoreService";
import { useEffect, useState } from "react";

import SliderCategoriaItem from "./SliderCategoriaItem";

const SliderCategoria = ({ categoria }) => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    docs();
  }, []);
  const docs = async () => {
    const docs = await cargarProductos();
    setProduct(docs);
  };
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
