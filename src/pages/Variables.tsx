import { useEffect, useState } from "react";
import type { VinVariable } from "../types";
import { getVehicleVariablesList } from "../services/api";
import { Link } from "react-router-dom";

export const Variables = () => {
  const [variables, setVariables] = useState<VinVariable[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getVehicleVariablesList();
        setVariables(data);
      } catch {
        setError("Не вдалося завантажити змінні");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <p className="loading">Завантаження змінних...</p>;
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  return (
    <div>
      <h1>Список всіх змінних</h1>
      <ul>
        {variables.map((v) => (
          <li key={v.ID}>
            <Link to={`/variables/${v.ID}`}>{v.Name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
