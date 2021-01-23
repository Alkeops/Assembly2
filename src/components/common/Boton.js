const Boton = ({ className, onClick, content, ...props }) => (
  <button className={className} onClick={onClick} {...props}>
    {content}
  </button>
);

export default Boton;
