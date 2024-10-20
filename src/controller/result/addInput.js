const addInput = (input) => {
  let result = 0;
  input.forEach((element) => {
    result += parseInt(element);
  });

  return String(result);
};

export default addInput;
