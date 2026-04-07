import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import type { VinVariable } from "../types";
import { getVariableById } from "../services/api";

export const VariableDetails = () => {
  const { id } = useParams<{ id: string}>();
  const [variable, setVariable] = useState<VinVariable | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      if (!id) {
        return;
      }

      try {
        const data = await getVariableById(id);

        if (!data) {
          setError('Змінну не знайдено');
        } else {
          setVariable(data);
        } 
      } catch {
        setError('Помилка при завантаженні змінної');
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);

  if (loading) {
    return <p className="loading">Завантаження змінних...</p>;
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  if (!variable) {
    return null;
  }

  return (
    <div>
      <h1>{variable.Name}</h1>
      {/* Description може містити HTML теги від NHTSA API */}
      <p dangerouslySetInnerHTML={{ __html: variable.Description }} />
      <Link to={"/variables"}>Повернутися до списку змінних</Link>
    </div>
  );
}