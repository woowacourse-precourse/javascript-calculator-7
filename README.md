# javascript-calculator-precourse

# 기능 명세서

## 입력한 문자열에서 숫자를 추출해 더하는 계산기를 구현하자

## 싱글 페이지 구성

### 입력

#### 입력이 올바른지 확인

- 입력으로 쉼표(,) 또는 콜론(:) 숫자 그리고 커스텀 문자열
- 커스텀 문자열 : // , \n 사이에 들어오는 값을 커스텀 구분자로 지정가능하다
- 그 외의 잘못된 값은 애러를 반환한다

<주의사항>

- 입력 값은 양수이므로 소수의 경우 허용한다
- 입력 문자열의 최대 길이는 10000자로 제한한다
- 커스텀 구분자는 특수기호 및 문자열로 한정한다 , 숫자를 제외한다
- 커스텀 구분자는 공백이 올 수 없다
- 커스텀 구분자는 여러번 정의 될 수 있다는 말이 없으므로 한번만 사용된다
- 음수의 경우 에러를 반환한다
- 구분자는 여러개가 올 수 있다
- 연속된 구분자는 조건에 없으므로 실패 케이스를 출력
- 공백이 포함되는 경우는 실패 케이스를 출력한다

#### 예시

    •	기본 구분자 사용 예시: "1,2:3" -> 6
    •	커스텀 구분자 사용 예시: "//;\n1;2;3" -> 6
    •	에러 케이스 예시: "1,,2" -> [ERROR]
    •	음수 입력: "-1,2" -> [ERROR]
    • 연속된 구분자 1,,2,,3 -> [ERROR]
    • //;\\n1;2;  3 -> [ERROR]

### 출력

#### 연산된 값을 조건에 따라 출력

case 1 (성공 케이스) - 사용자의 잘못된 입력이 없다면

- 연산된 숫자를 다음과 같은 양식으로 출력한다
  출력 : [결과 : 6]

case 2 ("") - 빈 문자열 입 력시 다음을 출력한다
출력 : [결과 : 0]

case 3 (실패 케이스) - 그 외 입력 즉 사용자의 잘못된 입력이 있다면

- [ERROR] 를 출력한다
  출력 : [ERROR]

#### 주의사항

- [ERROR] 발생시 (잘못된입력시) [ERROR]를 출력하고 어플리케이션을 종료 시켜야한다

### 연산

#### ADD 기능 수행

- 구분자를 기준으로 입력의 숫자를 모두 더한다
