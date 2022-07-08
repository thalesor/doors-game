import { useContext } from "react";
import { ChancesContext } from "../contexts/ChancesContext";

export default function useChances() {
  const chancesContext = useContext(ChancesContext);
  if (!chancesContext) {
    throw new Error("useChances must be used inside a ChancesContext Provider");
  }

  return chancesContext;
}