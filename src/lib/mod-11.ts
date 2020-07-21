export default function mod11(
  data: string,
  numberDigit: number,
  limMult: number,
  numberX10: boolean
): string {
  let mult: number;
  let sum: number;
  let i: number;
  let n: number;
  let dig: number | string;

  if (!numberX10) numberDigit = 1;
  for (n = 1; n <= numberDigit; n++) {
    sum = 0;
    mult = 2;
    for (i = data.length - 1; i >= 0; i--) {
      sum += mult * parseInt(data.charAt(i));
      if (++mult > limMult) mult = 2;
    }
    if (numberX10) {
      dig = ((sum * 10) % 11) % 10;
    } else {
      dig = sum % 11;
      const CPL = "X";
      if (dig == 10) dig = CPL;
    }
    data += dig;
  }
  return data.substr(data.length - numberDigit, numberDigit);
}
