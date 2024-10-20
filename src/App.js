import { Console } from "@woowacourse/mission-utils";

class App {
	async run() {
		// 문자열 입력 기능 구현
		Console.print("덧셈할 문자열을 입력해 주세요.");
		const input = await Console.readLineAsync("");

		// 결과 반환
		const result = this.add(input);
		Console.print(`결과 : ${result}`);
	}

	// add: 입력 문자열에서 숫자를 분리하고 합산하는 메서드
	add(input) {
		// 빈 문자열 처리 기능 구현
		if (input === "") return 0n;

		// 구분자 기준 문자열 처리 기능 구현
		const numbers = this.divide(input);

		// 숫자 유효성 검사 기능 구현
		this.validate(numbers);

		// 숫자 합산 기능 구현
		return numbers.reduce((acc, num) => acc + num, 0n);
	}

	// divide: 입력 문자열을 구분자 기준으로 분리하는 메서드
	divide(input) {
		let separator = [",", ":"];
		let str = input;

		// 커스텀 구분자가 있는 경우
		if (input.startsWith("//")) {
			const endIndex = input.indexOf("\\n");

			// 커스텀 구분자 예외 처리
			if (endIndex === -1) {
				throw new Error("[ERROR] 커스텀 구분자가 올바르게 정의되지 않았습니다.");
			}

			const customSeparator = input.substring(2, endIndex);

			// 커스텀 구분자가 숫자일 때 예외 처리
			if (!isNaN(customSeparator)) {
				throw new Error("[ERROR] 커스텀 구분자는 숫자일 수 없습니다.");
			}

			// 이스케이프 처리 후 커스텀 구분자 추가
			separator.push(this.escape(customSeparator));
			str = input.substring(endIndex + 2);
		}

		// 기본 구분자 및 커스텀 구분자 처리
		separator = separator.join("|");
		return str.split(new RegExp(`${separator}`)).map((num) => {
			try {
				return BigInt(num);
			} catch {
				throw new Error("[ERROR] 유효하지 않은 값을 포함되어 있습니다.");
			}
		});
	}

	// validate: 숫자 유효성을 검사하는 메서드
	validate(numbers) {
		const invalidNumbers = numbers.filter((num) => {
			return typeof num !== "bigint" || num < 0n;
		});

		// 유효성 검사 예외 처리
		if (invalidNumbers.length > 0) {
			throw new Error("[ERROR] 유효하지 않은 값을 포함하고 있습니다.");
		}
	}

	// escape: 정규식 특수 문자를 이스케이프 처리하는 메서드
	escape(string) {
		return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
	}
}

export default App;
