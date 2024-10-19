let tester1 = "//;\\n1";
let tester2 = "//;\n1;2;3;";
let tester3 = "1,2:3";
let tester4 = "-1,2,3";

let input;

function checkNumberSign(number) {
	return Math.sign(number);
}

function sumNumbers(array) {
	let result = 0;
	for (let i = 0; i < array.length; i++) {
		if (checkNumberSign(array[i]) >= 0) {
			result = Number(array[i]) + result;
		} else {
			throw new Error("양수가 아닙니다.");
		}
	}
	return result;
}

function testerFn(input) {
	let regexes = {
		check_special_chracter: RegExp(/[,;/\n]/, "g"), // 특수 문자 확인
		check_empty_string: RegExp(/^$/), // 빈 문자열
		check_front: /^\/\//,
		normal_delimiter: RegExp(/[,:]/, "g"),
		custom_delimiter: /[^//]/,
	};

	let delimiter;
	let reg;
	let input_array;

	try {
		if (input.match(regexes.check_special_chracter) || input.match(regexes.check_empty_string)) {
			let is_using_custom_reg = input.match(regexes.check_front);

			if (is_using_custom_reg) {
				delimiter = input.match(regexes.custom_delimiter)[0];
				reg = RegExp(`[\\\\/\\sA-Za-z${delimiter}]`, "g");

				input_array = input.split(reg);
				/* 	for (let i = 0; i < input_array.length; i++) {
					result = Number(input_array[i]) + result;
				} */
			} else {
				input_array = input.split(regexes.normal_delimiter);
			}
			const answer = sumNumbers(input_array);
			console.log(`결과 : ${answer}`);
		}
	} catch (e) {
		console.error(e);
	}
}
