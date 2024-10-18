import { Console } from '@woowacourse/mission-utils';

export default class OutputView {
	static printResult(result) {
		Console.print(`결과: ${result}`);
	}
	static printError(errorMessage) {
		Console.print(errorMessage);
	}
}
