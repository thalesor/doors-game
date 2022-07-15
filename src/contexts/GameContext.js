import { createContext, useState } from "react";

export const GameContext = createContext(null);


export function GameProvider({ children }) {
  const [gameIsReady, setGameIsReady] = useState(false);
  const [gameIsRunning, setGameIsRunning] = useState(false);
  const [prizedDoor, setPrizedDoor] = useState(null);

  function resetGameConfig()
  {
    setGameIsReady(false);
    setGameIsRunning(false);
    setPrizedDoor(null);
  }

  return (
    <GameContext.Provider value={{ gameIsReady, setGameIsReady, gameIsRunning, setGameIsRunning, prizedDoor, setPrizedDoor, resetGameConfig }}>
      {children}
    </GameContext.Provider>
  );
}