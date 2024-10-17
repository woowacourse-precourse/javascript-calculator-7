import { MissionUtils } from "@woowacourse/mission-utils";

function returnCustomSum(inputText) {
  // custom 구분자가 있을 경우의 계산
}

function returnSum(inputText) {
  // custom 구분자가 없을 경우의 계산
  let returnAns = 0
  for (let i = 0; i < inputText.length; i++) {
    if (i === 0) {
      returnAns += parseInt(inputText[i])
    } else if (inputText[i] === ':' || inputText[i] === ',') {
      returnAns += parseInt(inputText[i + 1])
    }
  }
  return returnAns
}

function checkInput(inputText) {
  // inputText값이 유효한 값인지 확인. 유효하면 true, 유효하지 않으면 false 리턴.
  // 1. 입력값 길이 0이면 반드시 유효
  if (inputText.length === 0) {
    return 'answer zero'
  }

  // 2. 커스텀 입력값일 경우 유효성 검사
  if (inputText.startsWith('//')) {
    // // 이후에 \n이 등장하는지 확인할 필요가 있다.
    let N_START_IDX = 0

    // 구분자 판별 후 판별 여부에 따라 리턴값 결정
    try {
      for (let i = 0; i < inputText.length; i++) {
        if (inputText[i] === '\\' && inputText[i + 1] === 'n') {
          // \n의 위치를 파악했다면 N_START_IDX에 넣자
          // 이 값을 바탕으로 커스텀 구분자를 확인할 수 있다
          N_START_IDX = i
          break
        }
      }
    } catch (error) {
      return false
    }

    if (N_START_IDX != 0) {
      // 구분자 파악해서 계산 가능한 입력값을 받았는지 확인
      const SAPARATOR = inputText.slice(2, N_START_IDX)
      const NUMBER_PART = inputText.slice(N_START_IDX + 2)
      // 구분자 메타문자 변경
      const ES_SAPARATOR = SAPARATOR.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
      // 숫자가 구분자에 의해 올바르게 구분되고 있는지 확인. 동적으로 사용해야 하므로 new RegExp 사용해 객체 생성
      const CUSTOM_PATTERN = new RegExp(`^\\d+(${ES_SAPARATOR}\\d+)*$`)
      // return CUSTOM_PATTERN.test(NUMBER_PART)
      if (CUSTOM_PATTERN.test(NUMBER_PART)) {
        return 'custom pattern'
      } else {
        return false
      }
    }
    // \n의 위치를 찾지 못해 N_START_IDX 값이 0일 경우 false 리턴
    return false
  }

  // 3. 커스텀 입력값이 아닐 경우 유효성 검사
  const CHECK_NON_CUSTOM = /^\d+([,:]\d+)*$/;
  // return CHECK_NON_CUSTOM.test(inputText);
  if (CHECK_NON_CUSTOM.test(inputText)) {
    return 'non custom pattern'
  } else {
    return false
  }
}

class App {
  async run() {
    // 입력 기능 구현
    // 1. 덧셈할 문자열을 입력해 주세요. 문구를 띄워주자
    MissionUtils.Console.print("덧셈할 문자열을 입력해 주세요.")
    const STRING_INPUT = await MissionUtils.Console.readLineAsync('')

    // 입력 형식에 맞지 않을 경우 ERROR 출력 후 종료
    // 1. STRING_INPUT 값을 확인하고, error 여부를 판단하여 throw
    // 2. index.js 파일의 try catch문 작동
    const CHECK_INPUT = await checkInput(STRING_INPUT)
    if (!CHECK_INPUT) {
      throw new Error("[ERROR]")
    } else {
      // 입력 형식이 올바를 경우 returnSum 함수를 통해 STRING_INPUT에 대한 결과를 저장
      // return RETURN_ANS
      if (CHECK_INPUT === 'answer zero') {
        return 0
      } else if (CHECK_INPUT === 'custom pattern') {
        return await returnCustomSum(STRING_INPUT)
      } else {
        return await returnSum(STRING_INPUT)
      }
    }
  }
}

export default App;
