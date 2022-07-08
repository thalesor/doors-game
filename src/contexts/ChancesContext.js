import { createContext, useState } from "react";

export const ChancesContext = createContext(null);


export function ChancesProvider({ children }) {
  const [chances, setChances] = useState(null);

  return (
    <ChancesContext.Provider value={{ chances, setChances }}>
      {children}
    </ChancesContext.Provider>
  );
}