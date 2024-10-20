import Calculator from './calculator.js';
import Input from './io-system/input.js';
import Output from './io-system/output.js';
import Splits from './utils/splits.js';

class App {
    async run() {
        // 1️⃣ 사용자 입력
        const userInput = await Input();

        // 2️⃣ 입력값 검증
        const validNums = Splits(userInput);

        // 3️⃣ 계산기 실행
        const result = Calculator(validNums);

        // 4️⃣ 결과 출력
        Output(result);
    }
}

export default App;
