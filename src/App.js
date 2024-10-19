import { Console } from "@woowacourse/mission-utils";

class App {
	checkNumberSign(number) {
		return Math.sign(number);
	}
	sumInputNumbers(array) {
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
		const regexes = {
			check_special_chracter: RegExp(/[,;/\n]/, "g"),
			check_empty_string: RegExp(/^$/),
			check_front: /^\/\//,
			split_normal: RegExp(/[,:]/, "g"),
			split_custom: /[^//]/,
		};

		let custom_seperator;
		let custom_regex;
		let input_array = [];

		let input = await Console.readLineAsync(",(쉼표)와 ;(세미 콜론)와 숫자를 조합한 문자열을 입력해주세요. ex)1,2:3 ");

		try {
			if (input.match(regexes.check_special_chracter) || input.match(regexes.check_empty_string)) {
				let is_using_custom_reg = input.match(regexes.check_front);

				if (is_using_custom_reg) {
					custom_seperator = input.match(regexes.split_custom)[0];
					custom_regex = RegExp(`[\\\\/\\sA-Za-z${custom_seperator}]`, "g");

					input_array = input.split(custom_regex);
				} else {
					input_array = input.split(regexes.split_normal);
				}
				const answer = this.sumInputNumbers(input_array);
				Console.print(`결과 : ${answer}`);
			}
		} catch (error) {
			throw new Error(`[ERROR] ${error.message}`);
		}
	}
}

export default App;
