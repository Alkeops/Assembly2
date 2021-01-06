import Banner from "./Banner";
import BannerDescuentos from "./BannerDescuentos";

const Publicidad = () => {
  return (
    <section className="publicidad">
      <BannerDescuentos />
      <Banner
        titulo="Gabinetes"
        className="gabinete"
        descuento="30%"
        boton="Ver Ahora"
      />
      <Banner
        titulo="Procesadores"
        className="procesadores"
        descuento="25%"
        boton="Ver Ahora"
      />
      <Banner
        titulo="Tarjetas Madre"
        className="tarjeta"
        descuento="70%"
        boton="Ver Ahora"
      />
      <Banner
        className="discos"
        titulo="Discos Duro"
        descuento="55%"
        boton="Ver Ahora"
      />
      <BannerDescuentos />
    </section>
  );
};

export default Publicidad;
