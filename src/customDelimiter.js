import { Console } from '@woowacourse/mission-utils';

const customDelimiter = (answer) => {
	const delimiter = answer.substring(2, 3);
	const numbers = answer.split('\\n')[1].split(delimiter);
	const sum = numbers.map(Number).reduce((a, b) => a + b, 0);
	Console.print(`결과 : ${sum}`);
};

export default customDelimiter;
