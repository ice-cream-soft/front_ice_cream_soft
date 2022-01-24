import { createContext } from "react";
import { ICartContext } from "./dto";

const CartContext = createContext({} as ICartContext);

export default CartContext;
