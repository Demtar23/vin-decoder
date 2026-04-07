import type {
  VinDecodeResponse,
  VinVariable,
  VinVariableRespone,
} from "../types";

const BASE_URL = "https://vpic.nhtsa.dot.gov/api/vehicles";

export async function decodeVin(vin: string): Promise<VinDecodeResponse> {
  const result = await fetch(`${BASE_URL}/decodevin/${vin}?format=json`);

  if (!result.ok) {
    throw new Error(`Network Error: ${result.status}`);
  }

  const data: VinDecodeResponse = await result.json();

  return data;
}

export async function getVehicleVariablesList(): Promise<VinVariable[]> {
  const result = await fetch(`${BASE_URL}/getvehiclevariablelist?format=json`);

  if (!result.ok) {
    throw new Error(`Network Error: ${result.status}`);
  }

  const data: VinVariableRespone = await result.json();

  return data.Results;
}

export async function getVariableById(id: string): Promise<VinVariable | null> {
  const variables = await getVehicleVariablesList();

  const variable = variables.find((v) => v.ID.toString() === id);

  return variable || null;
}
