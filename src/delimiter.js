import { Console } from '@woowacourse/mission-utils';

const delimiter = (answer) => {
	const numbers = answer.split(/[:,]/);
	const sum = numbers.map(Number).reduce((a, b) => a + b, 0);
	Console.print(`결과 : ${sum}`);
};

export default delimiter;
