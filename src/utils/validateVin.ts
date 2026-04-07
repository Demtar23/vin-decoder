export function validateVin(value: string): string {
  if (!value) return "VIN cannot be empty";
  if (value.length > 17) return "VIN cannot be longer than 17 characters";

  for (let i = 0; i < value.length; i++) {
    const c = value[i].toUpperCase();
    if (!(c >= "A" && c <= "Z") && !(c >= "0" && c <= "9")) {
      return "Invalid VIN format";
    }
  }
  return "";
}