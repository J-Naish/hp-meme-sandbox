// function for split string into array by the symbol "^""
export const splitStringIntoArray = (string) => {
  const splitSymbol = "^"; // assume that the symbol is "^"
  const array = string.split(splitSymbol);
  return array;
}