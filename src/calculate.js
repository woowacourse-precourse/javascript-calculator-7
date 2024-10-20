function add(input) {
    try {
      if (input === "") {
        return 0;
      }
  
      let delimiter = /[,:]/;
      let numbersString = input;
  
      if (input.startsWith("//")) {
        const parts = input.split("\n");
        if (parts.length < 2) {
          throw new Error("[ERROR] 잘못된 입력 형식입니다.");
        }
        const customDelimiter = parts[0].substring(2);
        delimiter = new RegExp(`[${customDelimiter}]`);
        numbersString = parts[1];
      }
  
      const numbers = numbersString.split(delimiter); }