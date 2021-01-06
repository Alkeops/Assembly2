import SliderCategoriaItem from "./SliderCategoriaItem";

const SliderCategoria = ({ categoria }) => {
  return (
    <div className="slider-categoria">
      <h3 className="slider-categoria__nombre">{categoria}</h3>
      <div className="slider-categoria__contenedor">
        <SliderCategoriaItem />
        <SliderCategoriaItem />
        <SliderCategoriaItem />
        <SliderCategoriaItem />
      </div>
    </div>
  );
};

export default SliderCategoria;
