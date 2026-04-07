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
          setError('Variable not found');
        } else {
          setVariable(data);
        } 
      } catch {
        setError('Error loading variable');
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);

  if (loading) {
    return <p className="loading">Loading variables...</p>;
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  if (!variable) {
    return null;
  }

  return (
    <div>
      <h1>{variable.name}</h1>
      {/* Description може містити HTML теги від NHTSA API */}
      <p dangerouslySetInnerHTML={{ __html: variable.description }} />
      <Link to={"/variables"}>Back to Variables</Link>
    </div>
  );
}