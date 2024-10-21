# javascript-calculator-precourse

# 문자열 덧셈 계산기

## 기능 목록

1. "덧셈할 문자열을 입력해주세요." 라는 문구와 함께 문자열을 입력받는다. ✅

2. Case 1. 기본 구분자만을 사용할 때 (기본 구분자 -> 쉼표, 콜론)

2-1-1. 기본 구분자를 기준으로 문자열에서 숫자를 추출한다. ✅

2-1-2. 그 후 각 숫자를 합한다. ✅

2. Case 2. 커스텀 구분자도 사용할 때

2-2-1. //와 \n 사이에 위치하는 커스텀 구분자를 인식한다. ✅

2-2-2. 기본 구분자와 커스텀 구분자를 기준으로 문자열에서 숫자를 추출한 후 각 숫자를 합한다. ✅

3. "결과 : " 라는 문구와 함께 계산의 결과를 출력한다. ✅

4. 잘못된 값이 입력될 경우 에러 메세지와 함께 에러를 발생시킨 후 애플리케이션을 종료시킨다. ✅

5. 빈 입력은 0을 출력한다. ✅

## 예상 에러 목록

1. 커스텀 구분자가 두 문자 이상일 때 ✅
2. 문자열에 양수와 구분자외에 다른 문자가 포함되어 있을 때 ✅
3. 커스텀 구분자 인식 형식을 제대로 지키지 않았을 때 ✅
4. 문자열에 양수로 헷갈리기 쉬운 0이 포함되어 있을 때 ✅