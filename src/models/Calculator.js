export class Calculator {
	static calculate(numbers) {
		const sum = numbers.reduce((acc, curr) => acc + parseInt(curr, 10), 0);
		return sum;
	}
}
