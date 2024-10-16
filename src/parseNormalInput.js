function checkFormattingIsValid(str) {
  if (str === '') {
    return [0];
  }

  if (!str) {
    throw new Error('빈 문자열입니다.');
  }

  const splitters = [':', ','];
  const parts = str.split(new RegExp(`[${splitters.join('')}]`));

  // 소수점 허용을 위해 숫자와 소수점을 처리하는 정규표현식
  const validNumber = /^-?\d+(\.\d+)?$/;

  if (parts.some(part => !validNumber.test(part))) {
    throw new Error('문자열에 포멧이 올바르지 않습니다.');
  }

  return parts;
}

function parseNormalInput(str) {
  const parts = checkFormattingIsValid(str);

  return parts.map(number => Number(number)).reduce((acc, curr) => acc + curr);
}

// 테스트 케이스 정의
const testCases = [
  // 1. 기본적인 테스트
  {
    input: '',
    expectedOutput: 0,
    description: '빈 문자열 입력 시 0을 반환해야 합니다.',
  },
  {
    input: '1,2',
    expectedOutput: 3,
    description: '쉼표로 구분된 숫자의 합을 올바르게 계산해야 합니다.',
  },
  {
    input: '1,2,3',
    expectedOutput: 6,
    description: '여러 쉼표로 구분된 숫자의 합을 올바르게 계산해야 합니다.',
  },
  {
    input: '1,2:3',
    expectedOutput: 6,
    description: '쉼표와 콜론이 섞여 있을 때도 올바르게 합산해야 합니다.',
  },

  // 2. 소수점 숫자 테스트
  {
    input: '1.5,2.5',
    expectedOutput: 4,
    description: '소수점 숫자들의 합을 올바르게 계산해야 합니다.',
  },
  {
    input: '1.25:2.75',
    expectedOutput: 4,
    description: '소수점 숫자와 콜론 구분자의 조합을 올바르게 계산해야 합니다.',
  },
  {
    input: '1,2.5',
    expectedOutput: 3.5,
    description: '정수와 소수점 숫자의 조합을 올바르게 계산해야 합니다.',
  },

  // 3. 잘못된 입력 처리 테스트
  {
    input: '1::2',
    expectedError: '잘못된 포맷입니다.',
    description: '구분자가 연속으로 있을 경우 에러를 발생시켜야 합니다.',
  },
  {
    input: ',1,2',
    expectedError: '잘못된 포맷입니다.',
    description:
      '문자열 시작 부분에 구분자가 있을 경우 에러를 발생시켜야 합니다.',
  },
  {
    input: '1,2,',
    expectedError: '잘못된 포맷입니다.',
    description: '문자열 끝에 구분자가 있을 경우 에러를 발생시켜야 합니다.',
  },
  {
    input: '1,,2',
    expectedError: '잘못된 포맷입니다.',
    description: '구분자가 중복될 경우 에러를 발생시켜야 합니다.',
  },

  // 4. 숫자가 아닌 값 테스트
  {
    input: 'abc',
    expectedError: '잘못된 포맷입니다.',
    description: '숫자가 아닌 값이 있을 경우 에러를 발생시켜야 합니다.',
  },
  {
    input: '1,2,a',
    expectedError: '잘못된 포맷입니다.',
    description:
      '숫자가 아닌 값이 포함되어 있을 경우 에러를 발생시켜야 합니다.',
  },

  // 5. 특수한 경우
  {
    input: '   ',
    expectedOutput: 0,
    description: '공백 문자열은 0으로 처리되어야 합니다.',
  },
  {
    input: null,
    expectedError: '빈 문자열입니다.',
    description: 'null 입력 시 에러를 발생시켜야 합니다.',
  },
  {
    input: undefined,
    expectedError: '빈 문자열입니다.',
    description: 'undefined 입력 시 에러를 발생시켜야 합니다.',
  },

  // 6. 더 복잡한 숫자 테스트
  {
    input: '0,0,0',
    expectedOutput: 0,
    description: '0으로 구성된 숫자들의 합은 0이어야 합니다.',
  },
  {
    input: '10,20,30',
    expectedOutput: 60,
    description: '두 자리 숫자들의 합을 올바르게 계산해야 합니다.',
  },
  {
    input: '-1,2',
    expectedOutput: 1,
    description: '음수와 양수의 조합을 처리해야 합니다.',
  },
  {
    input: '-1.5,2.5',
    expectedOutput: 1,
    description: '음수 소수와 양수 소수의 합을 처리해야 합니다.',
  },
];

// 테스트 실행
testCases.forEach(
  ({ input, expectedOutput, expectedError, description }, index) => {
    console.log(`테스트 케이스 ${index + 1}: ${description}`);
    try {
      const result = parseNormalInput(input);
      if (expectedError) {
        console.error(
          `  실패: 예상된 에러 '${expectedError}'가 발생하지 않았습니다.`,
        );
      } else if (result === expectedOutput) {
        console.log(`  성공: 결과는 ${result}입니다.`);
      } else {
        console.error(
          `  실패: 예상 결과 ${expectedOutput}, 실제 결과 ${result}`,
        );
      }
    } catch (error) {
      if (expectedError) {
        if (error.message === expectedError) {
          console.log(`  성공: 예상된 에러 '${error.message}'가 발생했습니다.`);
        } else {
          console.error(
            `  실패: 예상된 에러 '${expectedError}', 실제 에러 '${error.message}'`,
          );
        }
      } else {
        console.error(`  실패: 예기치 않은 에러 발생 - '${error.message}'`);
      }
    }
    console.log('---');
  },
);
