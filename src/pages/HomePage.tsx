import { useState } from "react";
import { VinForm } from "../components/VinForm";
import { VinHistory } from "../components/VinHistory";
import { VinResults } from "../components/VinResults";
import type { VinDecodeResponse } from "../types";
import { decodeVin } from "../services/api";
import { useVinHistory } from "../hooks/useVinHistory";

export const HomePage = () => {
  const [results, setResults] = useState<VinDecodeResponse>();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentVin, setCurrentVin] = useState("");

  const { history, addToHistory } = useVinHistory();
  
  function handleResults(data: VinDecodeResponse, vin: string) {
  setResults(data);
  setCurrentVin(vin);
  addToHistory(vin);
}

  async function handleSelectHistory(vin: string) {
    if (vin === currentVin) {
      return;
    }

    try {
      setLoading(true);
      setError("");
      const data = await decodeVin(vin);
      handleResults(data, vin);
    } catch {
      setError("Помилка при запиті до API");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h1>VIN Decoder</h1>
      <VinForm
        onResults={handleResults}
        onLoadingChange={setLoading}
        currentVin={currentVin}
      />
      <VinHistory history={history} onSelect={handleSelectHistory} />
      {error && <p className="error">{error}</p>}
      {loading ? (
        <p className="loading">Завантаження...</p>
      ) : (
        <VinResults data={results} />
      )}
    </div>
  );
};
