import { useContext } from "react";
import PktContext from "./PktContext";

const usePktContext = () => {
  return useContext(PktContext);
}

export default usePktContext;