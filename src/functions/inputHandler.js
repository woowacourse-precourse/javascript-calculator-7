import readline from 'readline';

const displayInputGuide = function displayInputGuideFunc() {
  console.log(` ---------------------------[ 문자열 덧셈 계산기 ]---------------------------
| 1. 입력한 문자열에서 숫자를 추출하여 더하는 프로그램입니다.                |
| 2. 기본 구분자는 쉼표(,)와 콜론(:)입니다.                                  |
| 3. 커스텀 구분자는 "//"와 "\\n" 사이에 위치하는 문자로 지정할 수 있습니다.  |
| 4. 추출된 숫자의 합을 계산하여 반환합니다.                                 |
 ----------------------------------------------------------------------------`);
  const allowedSpecialCharacters = `/ ? . , ; : | * ~ ! ^ - _ + < > @ # % & \\ = ' "`;
  console.log(
    `커스텀 구분자로는 알파벳 대소문자와 아래 특수 문자만 가능합니다\n${
      allowedSpecialCharacters
    }`,
  );
};

const getUserInput = function getUserInputFunc(callback) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('\n덧셈할 문자열을 입력해 주세요. \n', input => {
    callback(input);
    rl.close();
  });
};

export { displayInputGuide, getUserInput };
