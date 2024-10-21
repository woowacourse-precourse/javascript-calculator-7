# 문자열 덧셈 계산기
입력한 문자열에서 숫자를 추출하여 더하는 계산기 구현

- [@woowacourse mission‐utils의 Console 톺아보기](https://github.com/anonymousRecords/javascript-calculator-7/wiki/@woowacourse-mission%E2%80%90utils%EC%9D%98-Console-%ED%86%BA%EC%95%84%EB%B3%B4%EA%B8%B0)
- [class vs function](https://github.com/anonymousRecords/javascript-calculator-7/wiki/%08class-vs-function)

## 기능 요구 사항
**1. 문자열 입력**

- `Console.readLineAsync()`를 사용하여 문자열을 입력 받음

**2. 구분자 설정**

- 문자열을 분리하여 구분자를 설정함
  - 이때 구분자는 기본 구분자인 쉼표(,)와 콜론(:)과 커스텀 구분자(//[커스텀 구분자]\n)가 존재함

**3. 숫자 추출 및 변환**

- 분리된 문자열에서 숫자 배열 추출

**4. 덧셈 수행**

- 변환된 숫자들의 합 계산

**5. 결과 출력**

- `Console.print()`를 사용하여 계산 결과 출력

**6. 예외 처리**

- 잘못된 입력에 대한 에러 메시지 출력

## 실행 방법
```
// 설치
npm install

// 테스트
npm run test

// 서버 실행
npm run start 
```

## 입출력
### 입력 형식
- 쉼표(,) 또는 콜론(:)을 구분자로 사용한 문자열
- 커스텀 구분자(//[커스텀 구분자]\n)를 사용한 문자열

### 출력 형식
```md
결과 : [합계]
```

## 주의사항
- node >= 20.17.0