import CALCULATOR from './Calculator';

const ERROR = Object.freeze({
  prefix: '[ERROR]',
  invalidCustomForm: `"${CALCULATOR.customFormPrefix}사용할 구분자${CALCULATOR.customFormSuffix}"형식으로 구분자를 등록해주세요`,
  invalidCustomSeperator: '숫자는 구분자로 사용할 수 없습니다',
  invalidChar: '구분자로 등록되지 않은 문자가 포함되어 있습니다.',
  negativeNum: '음수는 입력할 수 없습니다',
});
export default ERROR;
