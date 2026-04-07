import type React from "react";
import type { VinDecodeResponse } from "../types";

type Props = {
  data?: VinDecodeResponse;
};

export const VinResults: React.FC<Props> = ({ data }) => {
  if (!data) return null;

  const hasError = data.results.some(
    (res) => res.variable === "Error Code" && res.value !== "0",
  );

  if (hasError) {
    const errorText = data.results.find(res => res.variable === 'Error Text')?.value;

    return <p className="error">{errorText}</p>;
  }

  const filteredData = data.results.filter(
  (r) =>
    r.value &&
    r.value !== "Not Applicable" &&
    !r.variable.includes("Error")
);

  if (!filteredData.length) {
    return <p className="error">{data.message}</p>;
  }

  return (
    <div>
      <h3>Decoding Results:</h3>
      <ul>
        {filteredData.map((r) => (
          <li key={r.variable}>
            <strong>{r.variable}:</strong> {r.value}
          </li>
        ))}
      </ul>
    </div>
  );
};
