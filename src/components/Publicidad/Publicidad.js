import Banner from "./Banner";
import BannerDescuentos from "./BannerDescuentos";

const Publicidad = () => {
  return (
    <section className="publicidad">
      <BannerDescuentos />
      <Banner titulo="Gabinetes" descuento="30%" boton="Ver Ahora" />
      <Banner titulo="Procesadores" descuento="25%" boton="Ver Ahora" />
      <Banner titulo="Tarjetas Madre" descuento="70%" boton="Ver Ahora" />
      <Banner titulo="Discos Duro" descuento="55%" boton="Ver Ahora" />
      <BannerDescuentos />
    </section>
  );
};

export default Publicidad;
