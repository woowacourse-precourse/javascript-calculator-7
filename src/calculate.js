class Calculator {
    constructor() {}
  
    add(input) {
      if (input === "") {
        return 0;
      }
  
      let delimiter = /[,:]/;
      let numbersString = input;
  
      if (input.startsWith("//")) {
        const parts = input.split("\n");
        if (parts.length < 2) {
          throw new Error("[ERROR]");
        }
        const customDelimiter = parts[0].substring(2);
        delimiter = new RegExp(`[${customDelimiter}]`);
        numbersString = parts[1];
      }
    }}