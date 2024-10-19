export async function getSum(numbers) {
	if (numbers.length === 1 && numbers[0] === "") {
		return 0;
	}
	const sumNumber = numbers
		.map((number) => parseInt(number, 10))
		.reduce((acc, cur) => acc + cur, 0);
	return sumNumber;
}
