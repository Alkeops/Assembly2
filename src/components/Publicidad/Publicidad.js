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
        categoria="gabinetes"
      />
      <Banner
        titulo="Procesadores"
        className="procesadores"
        descuento="25%"
        boton="Ver Ahora"
        categoria="procesadores"
      />
      <Banner
        titulo="Tarjetas Madre"
        className="tarjeta"
        descuento="70%"
        boton="Ver Ahora"
        categoria="tarjetas madre"
      />
      <Banner
        className="discos"
        titulo="Discos Duro"
        descuento="55%"
        boton="Ver Ahora"
        categoria="discos duro"
      />
      <BannerDescuentos />
    </section>
  );
};

export default Publicidad;
