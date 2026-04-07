export function validateVin(value: string): string {
  if (!value) return "VIN не може бути пустим";
  if (value.length > 17) return "VIN не може бути довше 17 символів";

  for (let i = 0; i < value.length; i++) {
    const c = value[i].toUpperCase();
    if (!(c >= "A" && c <= "Z") && !(c >= "0" && c <= "9")) {
      return "Невірний формат VIN";
    }
  }
  return "";
}