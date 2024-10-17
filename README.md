# 문자열 덧셈 계산기

## 기능 요구 사항

입력한 문자열에서 숫자를 추출하여 더하는 계산기를 구현한다.

- 쉼표(,) 또는 콜론(:)을 구분자로 가지는 문자열을 전달하는 경우 구분자를 기준으로 분리한 각 숫자의 합을 반환한다.

```
예: "" => 0, "1,2" => 3, "1,2,3" => 6, "1,2:3" => 6
```

- 앞의 기본 구분자(쉼표, 콜론) 외에 커스텀 구분자를 지정할 수 있다. 커스텀 구분자는 문자열 앞부분의 "//"와 "\n" 사이에 위치하는 문자를 커스텀 구분자로 사용한다.
  - 예를 들어 "//;\n1;2;3"과 같이 값을 입력할 경우 커스텀 구분자는 세미콜론(;)이며, 결과 값은 6이 반환되어야 한다.
- 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 `Error`를 발생시킨 후 애플리케이션은 종료되어야 한다.

**입출력 요구 사항**  
입력

구분자와 양수로 구성된 문자열
출력
덧셈 결과

```
결과 : 6
```

실행 결과 예시

```
덧셈할 문자열을 입력해 주세요.
1,2:3
결과 : 6
```

<br />

## 프로그래밍 요구 사항

- Node.js 20.17.0 버전에서 실행 가능해야 한다.
- 프로그램 실행의 시작점은 `App.js`의 `run()`이다.
- package.json 파일은 변경할 수 없으며, 제공된 라이브러리와 스타일 라이브러리 이외의 외부 라이브러리는 사용하지 않는다.
- 프로그램 종료 시 `process.exit()`를 호출하지 않는다.
- 프로그래밍 요구 사항에서 달리 명시하지 않는 한 파일, 패키지 등의 이름을 바꾸거나 이동하지 않는다.
- 자바스크립트 코드 컨벤션을 지키면서 프로그래밍한다.
- 기본적으로 JavaScript Style Guide를 원칙으로 한다.

**라이브러리**

- `@woowacourse/mission-utils`에서 제공하는 `Console` API를 사용하여 구현해야 한다.
- 사용자의 값을 입력 및 출력하려면 `Console.readLineAsync()`와 `Console.print()`를 활용한다.

---

### Test Code

<details>
  <summary>Open!</summary>

```javascript
import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE } from '../src/constants/message.js';

const mockQuestions = inputs => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

const runAppAndCheckOutput = async (inputs, outputs) => {
  mockQuestions(inputs);
  const logSpy = getLogSpy();

  const app = new App();
  await app.run();

  outputs.forEach(output => {
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
  });
};

const runAppAndExpectError = async (inputs, errorMessage) => {
  mockQuestions(inputs);
  const app = new App();
  await expect(app.run()).rejects.toThrow(errorMessage);
};

describe('문자열 계산기', () => {
  test('정상 입력', async () => {
    await runAppAndCheckOutput(['1,2,3'], ['결과 : 6']);
    await runAppAndCheckOutput(['1:2:3'], ['결과 : 6']);
    await runAppAndCheckOutput(['1,2:3'], ['결과 : 6']);
    await runAppAndCheckOutput(['1.1,2.1:3'], ['결과 : 6.2']);
    await runAppAndCheckOutput(['1.1,2.1,3.'], ['결과 : 6.2']);
  });
  test('커스텀 구분자 사용', async () => {
    await runAppAndCheckOutput(['//;\\n1'], ['결과 : 1']);
    await runAppAndCheckOutput(['//a\\n1a2a3'], ['결과 : 6']);
  });
  test('커스텀 구분자로 특수문자', async () => {
    await runAppAndCheckOutput(['//%\\n1%2%3'], ['결과 : 6']);
  });
  test('커스텀 구분자로 공백', async () => {
    await runAppAndCheckOutput(['// \\n1 2'], ['결과 : 3']);
  });
  test('커스텀 구분자로 백슬래쉬', async () => {
    await runAppAndCheckOutput(['//\\\\n1\\2'], ['결과 : 3']);
    await runAppAndCheckOutput(['//\\\\n1\\2,3'], ['결과 : 6']);
  });
  test('제로값 입력 처리', async () => {
    await runAppAndCheckOutput(['0,0,1'], ['결과 : 1']);
    await runAppAndCheckOutput(['01,0,1'], ['결과 : 2']);
  });
  test('빈 문자열 입력 처리', async () => {
    await runAppAndCheckOutput([''], ['결과 : 0']);
    await runAppAndCheckOutput(['//;\\n'], ['결과 : 0']);
  });
  test('커스텀 구분자가 2자 이상일 경우 예외', async () => {
    await runAppAndExpectError(
      ['//;;\\n1;;2;;3'],
      ERROR_MESSAGE.invalidCustomSeparatorLength,
    );
    await runAppAndExpectError(
      ['//aa\\n1aa2aa3'],
      ERROR_MESSAGE.invalidCustomSeparatorLength,
    );
  });
  test('등록되지 않은 구분자 사용 예외', async () => {
    await runAppAndExpectError(['1,2;3'], ERROR_MESSAGE.invalidInput);
  });

  test('음수 입력 예외', async () => {
    await runAppAndExpectError(['-1,2,3'], ERROR_MESSAGE.invalidInput);
  });

  test('구분자가 시작이나 끝에 있을 때 예외', async () => {
    await runAppAndExpectError(['1,2,'], ERROR_MESSAGE.hasBoundarySeparator);
    await runAppAndExpectError([',1,2'], ERROR_MESSAGE.hasBoundarySeparator);
    await runAppAndExpectError([','], ERROR_MESSAGE.hasBoundarySeparator);
  });

  test('빈 커스텀 구분자 예외', async () => {
    await runAppAndExpectError(
      ['//\\n1,2,3'],
      ERROR_MESSAGE.invalidCustomSeparator,
    );
  });

  test('구분자가 연속으로 올 때 예외', async () => {
    await runAppAndExpectError(['1,2::3'], ERROR_MESSAGE.consecutiveSeparators);
    await runAppAndExpectError(
      ['//;\\n1;;2::3,4'],
      ERROR_MESSAGE.consecutiveSeparators,
    );
  });

  test('허용되지 않은 문자가 있을 때 예외', async () => {
    await runAppAndExpectError(['1,2:3,sdf'], ERROR_MESSAGE.invalidInput);
    await runAppAndExpectError(['1,2:3,^'], ERROR_MESSAGE.invalidInput);
  });

  test('공백이 포함된 입력 예외', async () => {
    await runAppAndExpectError(['1, 2'], ERROR_MESSAGE.invalidInput);
  });

  test('.는 커스텀 구분자로 허용되지 않음', async () => {
    await runAppAndExpectError(
      ['//.\\n1.2.3'],
      ERROR_MESSAGE.invalidCustomSeparatorDot,
    );
  });

  test('잘못된 소수점 입력 예외', async () => {
    await runAppAndExpectError(['1..2,3'], ERROR_MESSAGE.consecutiveDots);
  });
});
```

</details>
