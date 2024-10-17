import { customTestCases, normalTestCases } from './testCases.js';
import parseCustomInput from '../Parser/SubParser/parseCustomInput.js';
import parseNormalInput from '../Parser/SubParser/parseNormalInput.js';
import runTest from './runTest.js';

function runTests(
  normalParser,
  customParser,
  inputNormalTestCases,
  inputCustomTestCases,
) {
  console.log('노말 인풋을 테스트 합니다');
  runTest(inputNormalTestCases, normalParser);
  console.log('====================================================');
  console.log('=====================================================');
  console.log('커스텀 인풋을 테스트 합니다.');
  runTest(inputCustomTestCases, customParser);
}

runTests(parseNormalInput, parseCustomInput, normalTestCases, customTestCases);
