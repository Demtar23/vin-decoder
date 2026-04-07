export type VinResult = {
  Variable: string;
  Value: string | null;
};

export type VinDecodeResponse = {
  Results: VinResult[];
  Message: string;
};

export type VinVariable = {
  ID: number;
  Name: string;
  Description: string;
}

export type VinVariableRespone = {
  Count: number;
  Message: string;
  Results: VinVariable[];
}
