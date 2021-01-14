import { createContext, useReducer } from "react";

const initialState = {
  productosEnCart: [],
  cantidadTotal: 0,
  cantidadArticulos: 0,
};
const cart = createContext(initialState);
const { Provider } = cart;

const CartProvider = ({ children }) => {
  const idExists = (state, id) =>
    state.findIndex((elemento) => elemento.id === id);

  const [stateCart, dispatch] = useReducer((state, { type, payload }) => {
    const posicion = idExists(state.productosEnCart, payload.id);
    let modificado = Object.assign({}, state.productosEnCart[posicion]);
    switch (type) {
      case "ADD_PRODUCT":
        if (posicion < 0)
          return {
            cantidadTotal: state.cantidadTotal + 1,
            cantidadArticulos: state.cantidadArticulos + payload.quantity,
            productosEnCart: [...state.productosEnCart, payload],
          };
        else {
          modificado = {
            ...modificado,
            quantity: modificado.quantity + payload.quantity,
          };
          return {
            ...state,
            cantidadArticulos: state.cantidadArticulos + payload.quantity,
            productosEnCart: [...difState(state, payload.id), modificado],
          };
        }
      case "DELETE_PRODUCT":
        return {
          ...state,
          cantidadTotal: state.cantidadTotal - 1,
          cantidadArticulos: state.cantidadArticulos - modificado.quantity,
          productosEnCart: [...difState(state, payload.id)],
        };
      case "MODIFY_PRODUCT":
        if (modificado.quantity === 1 && !payload.suma)
          return {
            ...state,
            cantidadTotal: state.cantidadTotal - 1,
            cantidadArticulos: state.cantidadArticulos - 1,
            productosEnCart: [...difState(state, payload.id)],
          };
        return {
          ...state,
          cantidadArticulos: payload.suma
            ? state.cantidadArticulos + 1
            : state.cantidadArticulos - 1,
          productosEnCart: [
            ...difState(state, payload.id),
            (modificado = {
              ...modificado,
              quantity: payload.suma
                ? modificado.quantity + 1
                : modificado.quantity - 1,
            }),
          ],
        };
      case "CLEAN_CART":
        return { ...initialState };
      default:
        throw new Error("...");
    }
  }, initialState);
  return <Provider value={{ stateCart, dispatch }}>{children}</Provider>;
};

const difState = (state, id) =>
  state.productosEnCart.filter((prod) => prod.id !== id);
export { cart, CartProvider };
