export const readLineAsync = (promptMessage) => {
    return new Promise((resolve) =>{
      console.log(promptMessage);
      const stdin = process.stdin;
      stdin.setEncoding('utf-8');
      stdin.once('data', (data) => {
        resolve(data.trim());
      });
    });
  }