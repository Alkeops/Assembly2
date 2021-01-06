import Publicidad from "./Publicidad/Publicidad";
import SliderCategoria from "./SliderCategoria/SliderCategoria";

function Home() {
  return (
    <>
      <Publicidad />
      <SliderCategoria categoria="gabinetes" />
    </>
  );
}

export default Home;
