import { createContext, useContext, useReducer } from "react";
import produtos from "../produtos";
import { cartReducer } from "./Reducers";

const Cart = createContext(null);
const Context = ({ children }) => {
  const products = produtos;

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });
  return (
    <>
      <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>
    </>
  );
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
