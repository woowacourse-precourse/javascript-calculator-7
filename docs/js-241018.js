let input;

// 특수문자 색출 함수
function checkInputDelimiter(input) {}

function sumNumbers(array) {
	let result = 0;
	for (let i = 0; i < array.length; i++) {
		result = Number(array[i]) + result;
	}
	return result;
}

let tester1 = "//;\\n1";
let tester2 = "//;\n1;2;3;";
let tester3 = "1,2:3";
let tester4 = "-1,2,3";

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
	let result = 0;

	try {
		if (input.match(regexes.check_special_chracter) || input.match(regexes.check_empty_string)) {
			let is_using_custom_reg = input.match(regexes.check_front);

			if (is_using_custom_reg) {
				delimiter = input.match(regexes.custom_delimiter)[0];
				reg = RegExp(`[\\\\/\\sA-Za-z${delimiter}]`, "g");

				input_array = input.split(reg);
				for (let i = 0; i < input_array.length; i++) {
					result = Number(input_array[i]) + result;
				}
			} else {
				input_array = input.split(regexes.normal_delimiter);
				for (let i = 0; i < input_array.length; i++) {
					result = Number(input_array[i]) + result;
				}
			}
			console.log(`결과 : ${result}`);
		}
	} catch (e) {
		throw new Error("[ERROR] 잘못된 문자열을 입력하셨습니다.");
	}
}
