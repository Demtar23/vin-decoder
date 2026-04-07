import { useState } from "react";

export function useVinHistory() {
  const [history, setHistory] = useState<string[]>(
    () => JSON.parse(localStorage.getItem("vinHistory") || "[]")
  );

  function addToHistory(vin: string) {
    const newHistory = [vin, ...history.filter((v) => v !== vin)].slice(0, 3);
    setHistory(newHistory);
    localStorage.setItem("vinHistory", JSON.stringify(newHistory));
  }

  return { history, addToHistory };
}