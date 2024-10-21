import { Console } from "@woowacourse/mission-utils";
import DelimiterHandler from "./DelimiterHandler";
class App {
  async run() {
    const input = await Console.readLineAsync(
      '덧셈할 문자열을 입력해 주세요.\n'
    );
    try {
      const numbers = DelimiterHandler(input);
}

export default App;
