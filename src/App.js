import { Console } from '@woowacourse/mission-utils';
class App {
   async run() {
      let input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
      const result = this.calculateSum(input);
      Console.print(`결과 : ${result}`);
   }

   calculateSum(input) {
      if (!input) {
         throw new Error('[ERROR] 입력해주세요.');
      }
      const delimiterMatch = input.match(/^\/\/(.+)\\n(.+)/);
      // console.log('delimiterMatch', delimiterMatch);

      let numberPart;
      if (delimiterMatch) {
         //  const customDelimiter = delimiterMatch[1];
         numberPart = delimiterMatch[2];
         console.log('numberPart', numberPart);
      } else {
         numberPart = input;
      }

      const delimiters = [',', ':', ...(delimiterMatch ? [delimiterMatch[1]] : [])];
      // console.log(delimiters.join(''));

      const regex = new RegExp(`[${delimiters.join('')}]`);
      //대괄호가 없으면 ,: 이것과 정확히 일치하는 경우만 찾고 있으면 , 또는 : 중 하나와 일치해도 찾음
      // console.log('regex', regex);

      const numbers = numberPart.replace(/\s/g, '').split(regex).filter(Boolean).map(Number);
      console.log('numbers', numbers);

      const negative = numbers.filter((num) => num < 0);
      if (negative.length > 0) {
         throw new Error('[ERROR] 음수는 허용되지 않습니다');
      }

      const sum = numbers.reduce((acc, curr) => acc + curr, 0);
      return sum;
   }
}
export default App;
