import { testCustomInput, testNormalInput } from './testCases.js';
import parseCustomInput from '../Parser/SubParser/parseCustomInput.js';
import parseNormalInput from '../Parser/SubParser/parseNormalInput.js';

function runTests(testNormal, testCustom) {
  console.log('노말 인풋을 테스트 합니다');
  testNormal(parseNormalInput);
  console.log('-------------------------');
  console.log('-------------------------');
  console.log('커스텀 인풋을 테스트 합니다.');
  testCustom(parseCustomInput);
}

runTests(testNormalInput, testCustomInput);
