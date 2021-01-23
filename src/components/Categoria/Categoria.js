import SliderCategoria from "components/SliderCategoria/SliderCategoria";
import React from "react";

const Categoria = ({
  match: {
    params: { categoria },
  },
}) => {
  return (
    <div className="categoria-page">
      <SliderCategoria categoria={categoria} />
    </div>
  );
};

export default Categoria;
