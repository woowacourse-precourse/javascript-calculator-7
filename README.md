# javascript-calculator-precourse

## 입력 및 출력값

덧셈할 문자열을 입력해 주세요.
1,2:3
결과 : 6

## TODO 기능 요구사항

### Default calculator

- [x] 사용자에게 문자열 입력받는다. ('덧셈할 문자열을 입력해 주세요.') - 'Console.readLinseAsync()'
- ~~ [ ] 사용자가 입력한 문자를 그대로 출력한다. - 안내 문구 다음 문단 - 'Console.print()' ~~
- [x] 기본 구분자인 쉼표(,)와 클론(:)이 숫자 사이에 입력되면 구분자로 사용하여 배열에 선언한다.
- [x] 선언된 배열의 모든 값을 더한다.
- [x] 더한 값을 출력한다. ('결과 : 6')

### Custom caculator

- [x] 사용자가 입력한 문자열에 "//"와 "\n"가 입력되어 있다면 커스텀 구분자 식으로 인식한다. (조건문)
- [x] Default cacultator와 동일한 기능을 출력한다.
- [x] 기본 구분자와 커스텀 구분자를 혼용해서 사용해도 연산이 출력된다.

## TODO 예외 사항

- 사용자가 잘못된 값을 입력할 경우 '[ERROR]'로 시작하는 메시지와 함께 Error를 발생시킨 후 애플리케이션 종료

  - 기본 입력 예외사항

    - [x] 사용자가 음수를 입력했을 때 -> ('[ERROR] NEGATIVE_NUMBER_ERROR')
    - [x] 숫자가 아닌 문자를 입력했을 때 -> ('[ERROR] FORMULA_ERROR')
    - [x] 띄어쓰기가 포함된 경우 -> '' 0으로 인식
    - [x] 구분자로 끝난 경우 -> ('[ERROR] SEPARATOR_ERROR') : 커스텀으로 두 개 이상의 구분자가 가능하기 때문
    - [x] 구분자가 연속으로 쓰인 경우 (예 : '1;;') -> ('[ERROR] FORMULA_ERROR')

  - 커스텀 구분자 입력 예외사항

    - [x] 커스텀 구분자를 숫자로 설정한 경우 -> ('[ERROR] CUSTOM_SEPERATOR_ERROR')
    - [ ] 구분자가 '-' 가 아닌데 '-'를 써서 음수가 된 경우 -> ('[ERROR] NEGATIVE_NUMBER_ERROR')
    - [ ] 구분자 커스텀 기호가 아닌 경우 (예 : '/$\n' or '\n$//') -> ('[ERROR] CUSTOM_SEPERATE_ERROR')
    - [ ] '\n'이 아닌 다른 기호로 구분자를 끝낸 경우 -> ('[ERROR] CUSTOM_SEPERATE_ERRO')

### TEST

- [ ] 커스텀 구분자와 기본 구분자가 함께 쓰여도 계산이 가능하다.
- [ ] 기본 구분자를 커스텀 구분자로 사용해도 오류없이 동일하게 출력된다.
