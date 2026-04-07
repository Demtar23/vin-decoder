import { useState } from "react";

const MAX_HISTORY_LENGTH = 3;
const HISTORY_KEY = "vinHistory"

export function useVinHistory() {
  const [history, setHistory] = useState<string[]>(
    () => JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]")
  );

  function addToHistory(vin: string) {
    const newHistory = [vin, ...history.filter((v) => v !== vin)].slice(0, MAX_HISTORY_LENGTH);
    setHistory(newHistory);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(newHistory));
  }

  return { history, addToHistory };
}