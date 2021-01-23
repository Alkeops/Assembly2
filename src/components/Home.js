import Publicidad from "./Publicidad/Publicidad";
import SliderCategoria from "./SliderCategoria/SliderCategoria";

function Home() {
  return (
    <>
      <Publicidad />
      <SliderCategoria categoria="gabinetes" />
      <SliderCategoria categoria="procesadores" />
      <SliderCategoria categoria="discos duro" />
      <SliderCategoria categoria="tarjetas madre" />
    </>
  );
}

export default Home;
