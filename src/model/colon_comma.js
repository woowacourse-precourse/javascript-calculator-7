export const splitByColonAndComma = (input) => {
  let formattedString = input.split(":").join(",");
  formattedString = formattedString.split(",");

  return formattedString;
};
