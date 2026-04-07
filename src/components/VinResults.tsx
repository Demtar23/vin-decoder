import type React from "react";
import type { VinDecodeResponse } from "../types";

type Props = {
  data?: VinDecodeResponse;
};

export const VinResults: React.FC<Props> = ({ data }) => {
  if (!data) return null;

  const hasError = data.Results.some(
    (res) => res.Variable === "Error Code" && res.Value !== "0",
  );

  if (hasError) {
    const errorText = data.Results.find(res => res.Variable === 'Error Text')?.Value;

    return <p className="error">{errorText}</p>;
  }

  const filteredData = data.Results.filter(
  (r) =>
    r.Value &&
    r.Value !== "Not Applicable" &&
    !r.Variable.includes("Error")
);

  if (!filteredData.length) {
    return <p className="error">{data.Message}</p>;
  }

  return (
    <div>
      <h3>Результати розшифрування:</h3>
      <ul>
        {filteredData.map((r) => (
          <li key={r.Variable}>
            <strong>{r.Variable}:</strong> {r.Value}
          </li>
        ))}
      </ul>
    </div>
  );
};
