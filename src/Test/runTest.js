function logTestCaseStart(index, description, input) {
  console.log(`테스트 케이스 ${index + 1}: ${description}`);
  console.log(`input : ${input}`);
}

function logSuccess(message) {
  console.log(`  성공: ${message}`);
}

function logFailure(message) {
  console.error(`  실패: ${message}`);
}

function handleResultCheck(result, expectedOutput, expectedError) {
  if (expectedError) {
    logFailure(`예상된 에러 '${expectedError}'가 발생하지 않았습니다.`);
  } else if (result === expectedOutput) {
    logSuccess(`결과는 ${result}입니다.`);
  } else {
    logFailure(`예상 결과 ${expectedOutput}, 실제 결과 ${result}`);
  }
}

function handleErrorCheck(error, expectedError) {
  if (expectedError) {
    if (error.message === expectedError) {
      logSuccess(`예상된 에러 '${error.message}'가 발생했습니다.`);
    } else {
      logFailure(
        `예상된 에러 '${expectedError}', 실제 에러 '${error.message}'`,
      );
    }
  } else {
    logFailure(`예기치 않은 에러 발생 - '${error.message}'`);
  }
}

export default function runTest(testCases, parserFunction) {
  testCases.forEach(
    ({ input, expectedOutput, expectedError, description }, index) => {
      logTestCaseStart(index, description, input);
      try {
        const result = parserFunction(input);
        handleResultCheck(result, expectedOutput, expectedError);
      } catch (error) {
        handleErrorCheck(error, expectedError);
      }
      console.log('--------');
    },
  );
}
