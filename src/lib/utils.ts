export const getRandomNumber = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const getRandomLengthChars = () => {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const length = getRandomNumber(5, 40);
  const finalChars = [];
  while (finalChars.length < length) {
    finalChars.push(chars.charAt(getRandomNumber(0, chars.length - 1)));
  }
  return finalChars.join("");
};
