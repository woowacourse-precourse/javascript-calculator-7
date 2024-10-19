import { Console } from "@woowacourse/mission-utils";

class App {
	checkNumberSign(number) {
		return Math.sign(number);
	}

	sumNumbers(array) {
		let result = 0;
		for (let i = 0; i < array.length; i++) {
			if (this.checkNumberSign(array[i]) >= 0) {
				result = Number(array[i]) + result;
			} else {
				throw new Error("양수가 아닙니다");
			}
		}
		return result;
	}

	async run() {
		let regexes = {
			check_special_chracter: RegExp(/[,;/\n]/, "g"),
			check_empty_string: RegExp(/^$/),
			check_front: /^\/\//,
			normal_delimiter: RegExp(/[,:]/, "g"),
			custom_delimiter: /[^//]/,
		};

		let input;
		let delimiter;
		let reg;
		let input_array;

		input = await Console.readLineAsync(",(쉼표)와 ;(세미 콜론)와 숫자를 조합한 문자열을 입력해주세요. ex)1,2:3 ");

		try {
			if (input.match(regexes.check_special_chracter) || input.match(regexes.check_empty_string)) {
				let is_using_custom_reg = input.match(regexes.check_front);

				if (is_using_custom_reg) {
					delimiter = input.match(regexes.custom_delimiter)[0];
					reg = RegExp(`[\\\\/\\sA-Za-z${delimiter}]`, "g");
					input_array = input.split(reg);
				} else {
					input_array = input.split(regexes.normal_delimiter);
				}
				const answer = this.sumNumbers(input_array);
				Console.print(`결과 : ${answer}`);
			}
		} catch (error) {
			throw new Error(`[ERROR] ${error.message}`);
		}
	}
}

export default App;
