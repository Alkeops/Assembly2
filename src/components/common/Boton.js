const Boton = ({ className, onClick, content }) => (
  <button className={className} onClick={onClick}>
    {content}
  </button>
);

export default Boton;
