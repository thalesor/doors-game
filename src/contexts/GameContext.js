import { createContext, useState } from "react";

export const GameContext = createContext(null);


export function GameProvider({ children }) {
  const [giftFound, setGiftFound] = useState(false);

  return (
    <GameContext.Provider value={{ giftFound, setGiftFound }}>
      {children}
    </GameContext.Provider>
  );
}