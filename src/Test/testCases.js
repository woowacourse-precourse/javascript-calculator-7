export const customTestCases = [
  {
    input: '//;\\n1;2;3;4',
    expectedOutput: 10,
    description: "구분자 ';'로 분리된 정수들의 합",
  },
  {
    input: '//:\\n1:2:3:4',
    expectedOutput: 10,
    description: "구분자 ':'로 분리된 정수들의 합",
  },
  {
    input: '//|\\n1|2|3|4',
    expectedOutput: 10,
    description: "구분자 '|'로 분리된 정수들의 합",
  },
  {
    input: '//-\\n1-2-3-4',
    expectedOutput: 10,
    description: "구분자 '-'로 분리된 정수들의 합",
  },
  {
    input: '//;\\n1.5;2.5;3;4',
    expectedOutput: 11,
    description: "구분자 ';'와 소수점 숫자가 포함된 합",
  },
  {
    input: '//:\\n1.25:2.75:3:4',
    expectedOutput: 11,
    description: "구분자 ':'와 소수점 숫자가 포함된 합",
  },
  {
    input: '//|\\n1.1|2.2|3.3|4',
    expectedOutput: 10.6,
    description: "구분자 '|'와 소수점 숫자가 포함된 합",
  },
  {
    input: '//;\\n1;2.5;3;4....',
    expectedError:
      '[ERROR]: delimiter와 숫자 이외의 문자가 입력 됬거나, 입력 순서가 잘못되었습니다!',
    description: '잘못된 입력: 연속된 소수점이 있는 경우',
  },
  {
    input: '//|\\n1||2',
    expectedError:
      '[ERROR]: delimiter와 숫자 이외의 문자가 입력 됬거나, 입력 순서가 잘못되었습니다!',
    description: '잘못된 입력: 구분자가 연속으로 있는 경우',
  },
  {
    input: '//,\\n1,2.5,3..75',
    expectedError:
      '[ERROR]: delimiter와 숫자 이외의 문자가 입력 됬거나, 입력 순서가 잘못되었습니다!',
    description: '잘못된 입력: 숫자 중간에 잘못된 소수점 포함',
  },
  {
    input: '//@\\n1@2@abc',
    expectedError:
      '[ERROR]: delimiter와 숫자 이외의 문자가 입력 됬거나, 입력 순서가 잘못되었습니다!',
    description: '잘못된 입력: 숫자가 아닌 문자가 포함된 경우',
  },
  {
    input: '//***\\n1***2***3***4',
    expectedOutput: 10,
    description: "구분자 '***'로 분리된 정수들의 합",
  },
  {
    input: '//###\\n1###2.2###3###4',
    expectedOutput: 10.2,
    description: "구분자 '###'와 소수점이 포함된 합",
  },
  {
    input: '//^\\n1^2^3.5^4',
    expectedOutput: 10.5,
    description: "구분자 '^'와 소수점이 포함된 합",
  },
  {
    input: '//;\\n0;0.5;1;2',
    expectedOutput: 3.5,
    description: '0과 소수점이 포함된 입력',
  },
  {
    input: '//:\\n1:-2:3:4',
    expectedError:
      '[ERROR]: delimiter와 숫자 이외의 문자가 입력 됬거나, 입력 순서가 잘못되었습니다!',
    description: '음수와 양수가 혼합된 입력',
  },
  {
    input: '//|\\n1.1|-2.2|3.3|4.4',
    expectedError:
      '[ERROR]: delimiter와 숫자 이외의 문자가 입력 됬거나, 입력 순서가 잘못되었습니다!',
    description: '소수와 음수가 포함된 입력',
  },
  { input: '//;\\n1;1000;1001;2', expectedOutput: 2004, description: '' },
  { input: '//-\\n1-1000-1001-3', expectedOutput: 2005, description: '' },
  {
    input: '//;\\n',
    expectedError:
      '[ERROR]: delimiter와 숫자 이외의 문자가 입력 됬거나, 입력 순서가 잘못되었습니다!',
    description: '구분자가 있지만 내용이 없는 경우',
  },
  {
    input: '//:\\n',
    expectedError:
      '[ERROR]: delimiter와 숫자 이외의 문자가 입력 됬거나, 입력 순서가 잘못되었습니다!',
    description: '구분자가 있지만 내용이 없는 경우',
  },
  {
    input: '//-\\n1-',
    expectedError:
      '[ERROR]: delimiter와 숫자 이외의 문자가 입력 됬거나, 입력 순서가 잘못되었습니다!',
    description: '구분자가 있지만 마지막 값이 빈 경우',
  },
  {
    input: '//|\\n1|2|',
    expectedError:
      '[ERROR]: delimiter와 숫자 이외의 문자가 입력 됬거나, 입력 순서가 잘못되었습니다!',
    description: '마지막 구분자 이후에 값이 없는 경우',
  },
  {
    input: '//\\n1,2,3',
    expectedError: '[ERROR]:Delimiter를 입력받지 못했습니다.',
    description: '구분자가 명시되지 않은 경우',
  },
  {
    input: '///\\n1/2/3',
    expectedOutput: 6,
    description: '예약어 /가 사용되는 경우',
  },
  {
    input: '//\\\\n1\\2\\3',
    expectedOutput: 6,
    description: '예약어 \\가 사용되는 경우',
  },
  {
    input: '//n\\n1n2n3',
    expectedOutput: 6,
    description: '예약어 n이 사용되는 경우',
  },
  {
    input: '//^&^\\n1^&^2^&^3',
    expectedOutput: 6,
    description: "구분자가 '^&^' 이 사용되는 경우",
  },
  {
    input: '//1\\n51213',
    expectedOutput: 10,
    description: '구분자가 숫자가 사용되는 경우',
  },
];

export const normalTestCases = [
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
  {
    input: '1::2',
    expectedError:
      '[ERROR]:문자열에 포멧이 올바르지 않거나, 음수를 입력했습니다.',
    description: '구분자가 연속으로 있을 경우 에러를 발생시켜야 합니다.',
  },
  {
    input: ',1,2',
    expectedError:
      '[ERROR]:문자열에 포멧이 올바르지 않거나, 음수를 입력했습니다.',
    description:
      '문자열 시작 부분에 구분자가 있을 경우 에러를 발생시켜야 합니다.',
  },
  {
    input: '1,2,',
    expectedError:
      '[ERROR]:문자열에 포멧이 올바르지 않거나, 음수를 입력했습니다.',
    description: '문자열 끝에 구분자가 있을 경우 에러를 발생시켜야 합니다.',
  },
  {
    input: '1,,2',
    expectedError:
      '[ERROR]:문자열에 포멧이 올바르지 않거나, 음수를 입력했습니다.',
    description: '구분자가 중복될 경우 에러를 발생시켜야 합니다.',
  },
  {
    input: 'abc',
    expectedError:
      '[ERROR]:문자열에 포멧이 올바르지 않거나, 음수를 입력했습니다.',
    description: '숫자가 아닌 값이 있을 경우 에러를 발생시켜야 합니다.',
  },
  {
    input: '1,2,a',
    expectedError:
      '[ERROR]:문자열에 포멧이 올바르지 않거나, 음수를 입력했습니다.',
    description:
      '숫자가 아닌 값이 포함되어 있을 경우 에러를 발생시켜야 합니다.',
  },
  {
    input: '   ',
    expectedOutput: 0,
    description: '공백 문자열은 0으로 처리되어야 합니다.',
  },
  {
    input: null,
    expectedError: '[ERROR]:빈 문자열입니다.',
    description: 'null 입력 시 에러를 발생시켜야 합니다.',
  },
  {
    input: undefined,
    expectedError: '[ERROR]:빈 문자열입니다.',
    description: 'undefined 입력 시 에러를 발생시켜야 합니다.',
  },
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
    expectedError:
      '[ERROR]:문자열에 포멧이 올바르지 않거나, 음수를 입력했습니다.',
    description: '음수와 양수의 조합을 처리해야 합니다.',
  },
  {
    input: '-1.5,2.5',
    expectedError:
      '[ERROR]:문자열에 포멧이 올바르지 않거나, 음수를 입력했습니다.',
    description: '음수 소수와 양수 소수의 합을 처리해야 합니다.',
  },
];
