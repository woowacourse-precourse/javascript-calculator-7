import { Console } from '@woowacourse/mission-utils';

export default class InputView {
	static readInput() {
		return Console.readLineAsync('계산할 값을 입력하세요. : ');
	}
}
