export type VinResult = {
  variable: string;
  value: string | null;
};

export type VinDecodeResponse = {
  results: VinResult[];
  message: string;
};

export type VinVariable = {
  id: number;
  name: string;
  description: string;
}

export type VinVariableRespone = {
  count: number;
  message: string;
  results: VinVariable[];
}
