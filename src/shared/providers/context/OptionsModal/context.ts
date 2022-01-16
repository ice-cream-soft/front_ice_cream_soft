import { createContext } from "react";
import { IOptionsModalProps } from "./dto";

const OptionsModalContext = createContext({} as IOptionsModalProps);

export default OptionsModalContext;
