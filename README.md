# javascript-calculator-precourse

## 구현할 기능 목록
- [x] Console API를 이용하여 사용자 입력 받는 기능 구현
- [x] 공백을 입력하였을 시, 0이 출력되게 구현
- [x] 핵심 요구사항인 계신기 기능 구현
- [x] 커스텀 구분자 지정할 수 있게 기능 구현
- [x] 잘못된 값을 입력할 경우 에러 처리 구현

## ✅ 기능 설명 

### Calculator 클래스

1. 정적 필드
- ```DEFAULT_DELIMITERS``` : 기본 구분자
- ```DEFAULT_DELIMITER_REGEX``` : 문자열에 기본 구분자가 포함되었는지 확인하는 정규식
- ```CUSTOM_DELIMITER_REGEX``` : 문자열에 커스텀 구분자가 포함되었는지 확인하는 정규식

위의 변수들은 **정적 상수**로서, 재사용성과 유지보수성을 고려하여 설계.

2. 인스턴스 필드
- ```delimiterRegex``` : 구분자를 확인하는 정규식. 초기값으로 정적 필드의 DEFAULT_DELIMITER_REGEX 할당
- ```customDelimiter``` : 커스텀 구분자 변수. 초기값으로 null 할당

3. 메서드 
- ```calculate``` : 주어진 문자열의 계산을 담당하는 핵심 메서드. 계산한 결과를 리턴.
- ```hasCustomDelimiter``` : 문자열에 커스텀 구분자가 포함되어있는지 확인하는 메서드.
- ```extractCustomDelimiter``` : 커스텀 구분자를 추출하여, **customDelimiter** 변수에 추출한 커스텀 구분자를 할당하고, **delimiterRegex** 를 커스텀 구분자를 포함한 정규식으로 재할당하는 메서드.
- ```parseNumbers``` : 주어진 문자열을 숫자로 파싱하는 메서드. 해당 메서드에서 예외 처리 담당.
- ```sumNumbers``` : 숫자로 파싱된 문자열의 합을 계산하는 메서드.
- ```setCustomDelimiter``` : **customDelimiter** 변수의 값을 변경하는 메서드
