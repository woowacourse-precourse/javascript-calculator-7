const validateAnswer = (answer) => {
	let isValid = true;

	[...answer].forEach((a) => {
		// 허용되지 않은 문자가 있으면 오류 출력
		if (!/[,:0-9\n]/.test(a)) {
			isValid = false; // 유효하지 않은 문자가 있을 경우 false로 설정
		}
	});

	return isValid; // 모든 문자가 유효하다면 true, 그렇지 않으면 false 반환
};

export default validateAnswer;
