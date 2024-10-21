// src/views/InputView.js
import { Console } from '@woowacourse/mission-utils';

class InputView {
	static readInput() {
		return Console.readLineAsync('계산할 값을 입력하세요. : ');
	}
}

export default InputView;
