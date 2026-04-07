import type React from "react";

type Props = {
  history: string[];
  onSelect: (vin: string) => void;
};

export const VinHistory: React.FC<Props> = ({ history, onSelect }) => {
  if (!history.length) return null;

  return (
    <div>
      <h3>Останні VIN:</h3>
      <ul>
        {history.map((vin) => (
          <li key={vin}>
            <button onClick={() => onSelect(vin)}>{vin}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};