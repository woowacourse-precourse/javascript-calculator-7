import { Console, MissionUtils } from "@woowacourse/mission-utils";

class App {
	async run() {
		let regs = {
			normal: /[,:]/g,
			custom: /[/\n]/i,
		};
		let reg;
		let input;
		let answer = 0;
		let input_array;
		const custom_reg_tester = new RegExp(regs.custom);

		try {
			input = await Console.readLineAsync(",(쉼표)와 ;(세미 콜론)와 숫자를 조합한 문자열을 입력해주세요. ex)1,2:3 ");
			if (custom_reg_tester.test(input)) {
				// 커스텀 구분자 사용할 경우
				reg = input.split(regs.custom)[2];
				input_array = input.split(regs.custom)[3].split(reg);
			} else {
				reg = regs.normal;
				input_array = input.split(reg);
			}

			for (let i = 0; i < input_array.length; i++) {
				answer = answer + Number(input_array[i]);
			}
			Console.print(`결과 : ${answer}`);
		} catch (error) {
			Console.print(error);
		}
	}
}

export default App;
