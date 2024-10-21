# 미션1 - 문자열 덧셈 계산기

## 기능 요구 사항

입력한 문자열에서 숫자를 추출하여 더하는 계산기를 구현한다.

- [] 쉼표(,) 또는 콜론(:)을 구분자로 가지는 문자열을 전달하는 경우 구분자를 기준으로 분리한 각 숫자의 합을 반환한다.

  - 예시: "" => 0, "1,2" => 3, "1,2,3" => 6, "1,2:3" => 6
  - [] '덧셈할 문자열을 입력해 주세요.' 문구를 출력한다.
  - [] 덧셈할 문자열을 입력받는다.
  - [] 쉼표(,) 또는 콜론(:)을 구분자로 가지는 문자열을 전달하는 경우 구분자를 기준으로 분리한다.
  - [] 분리한 각 숫자들을 `String`에서 `Number` 타입으로 변환한다.
  - [] 변환한 `Number` 타입의 각 숫자들의 합을 계산한다.
  - [] 계산된 합을 반환한다.
    ```
    덧셈할 문자열을 입력해 주세요.
    1,2:3
    결과 : 6
    ```

- [] 앞의 기본 구분자(쉼표, 콜론) 외에 커스텀 구분자를 지정할 수 있다. 커스텀 구분자는 문자열 앞부분의 "//"와 "\n" 사이에 위치하는 문자를 커스텀 구분자로 사용한다.
  - [] 문자열 앞부분의 "//"와 "\n" 사이에 위치하는 문자를 확인하여 커스텀 구분자로 지정한다.
  - [] 기본 구분자 외에 커스텀 구분자를 기준으로도 문자열을 분리한다.
  - 실행 결과 예시
    ```
    덧셈할 문자열을 입력해 주세요.
    //;\n1;2;3
    결과 : 6
    ```
- [] 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시킨 후 애플리케이션은 종료되어야 한다.
  - [] 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시킨다.
  - [] Error 발생 시 애플리케이션이 종료된다.