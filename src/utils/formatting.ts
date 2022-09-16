export const addLeadingZeros = (
  number: number,
  length: number = 2,
  pad: string = '0'
) => {
  return String(number).padStart(length, pad);
};
