import { Link } from "react-router-dom";
const SliderCategoriaItem = () => {
  return (
    <Link to="/gabinetes/1234444">
      <div className="item-portada">
        <div className="item-portada__imagen"></div>
        <h4 className="item-portada__nombre">Procesador i9</h4>
        <p className="item-portada__descripcion">El mejor bla bla bla</p>
        <span className="item-portada__precio">$20,000.00</span>
      </div>
    </Link>
  );
};

export default SliderCategoriaItem;
