import { useContext } from "react";
import { GameContext } from "../contexts/GameContext";

export default function useGame() {
  const gameContext = useContext(GameContext);
  if (!gameContext) {
    throw new Error("useGame must be used inside a GameContext Provider");
  }

  return gameContext;
}