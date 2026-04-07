import type React from "react";
import type { VinDecodeResponse } from "../types";
import { useState } from "react";
import { decodeVin } from "../services/api";
import { validateVin } from "../utils/validateVin";

type Props = {
  onResults: (data: VinDecodeResponse, vin: string) => void;
  onLoadingChange: (loading: boolean) => void;
  currentVin: string;
};

export const VinForm: React.FC<Props> = ({ onResults, onLoadingChange, currentVin }) => {
  const [vin, setVin] = useState<string>("");
  const [error, setError] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const validatorError = validateVin(vin);

    if (validatorError) {
      setError(validatorError);
      return;
    }

    if (vin === currentVin) {
      return;
    }

    setError("");

    try {
      onLoadingChange(true);
      const data: VinDecodeResponse = await decodeVin(vin);
      onResults(data, vin);
    } catch {
      setError("Помилка при запиті до API");
    } finally {
      onLoadingChange(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <input
          type="text"
          value={vin}
          onChange={(e) => setVin(e.target.value.toUpperCase())}
          placeholder="Введіть VIN"
        />
        <button type="submit">Розшифрувати</button>
      </div>
      {error && <p className="error">{error}</p>}
    </form>
  );
};
