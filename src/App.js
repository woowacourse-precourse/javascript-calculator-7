class App {
  async run() {}
}

// 입력: 사용자에게 덧셈할 문자열을 입력받는 메소드
getInput() {
  return new Promise((resolve) => {
    console.log('덧셈할 문자열을 입력해 주세요.'); 
    process.stdin.once('data', (data) => {
      resolve(data.toString().trim()); 
    });
  });
}



export default App;
