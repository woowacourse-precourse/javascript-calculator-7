# javascript-calculator-precourse

## 🚀 구현할 기능 목록
- **사용자로부터 문자열 입력 (Console.readLineAsync()를 사용)**
    - [x] 문자열이 비어있는가? → 오류 출력
    - [x] 커스텀 구분자가 있는가?
      -  O
          - [x] 커스텀 구분자 인식
          - [x] 구분자 기준 split
      - X
        - [x] 일반 구분자 split
        
- **커스텀 구분자 split**
    - [x] //, \n 사이의 커스텀 문자열 인식
    - [x] **split 후 연산 전 오류 검증**
      
- **일반 구분자 split**
    - [x] 쉼표 및 세미콜론을 기준으로 split
    - [x] **split 후 연산 전 오류 검증** 
      
- **split 후 연산 전 오류 검증**
    - [x] 일반 구분자 split 시 split된 값들의 형식이 Numbers가 아닐 경우 → 오류 출력
    - [x] 연산 문자열에 '음수'가 포함됐을 경우 → 오류 출력
  
- **구분된 숫자 연산**
    - [x] split된 문자들 Number 형변환
    - [x] 형변환 후의 숫자들의 합 구하기
      
- **사용자에게 연산 결과 출력 (Console.Print()를 사용)**
  - [x] 연산된 결과를 터미널에 출력 <br /><br />

## 프로그래밍 요구사항
- [x] Node.js 20.17.0 버전
- [x] 프로그램의 시작점은 App.js의 run()
- [x] package.json 파일은 변경 불가, 외부 라이브러리 허용 불가
- [x] process.exit()을 호출하지 않고 프로그램 종료
- [x] @woowacourse/mission-utils에서 제공하는 Console API를 사용한다.
  - 값 입력: `Console.readLineAsync()`
  - 값 출력: `Console.print()` <br /><br />

## 폴더 구조
```javascript
src/
├── controller/
│   └── StringSumCalculator.js // 모델과 뷰를 잇는 컨트롤러
├── model/
│   ├── CalculateSumModel.js // split한 배열을 입력받아 모든 요소를 형변환, 합을 계산함
│   ├── GetDelimiterModel.js // 커스텀 문자열과 계산식을 얻어냄
│   └── SplitModel.js // 구분자를 기준으로 Split해서 배열을 반환
└── view/
    ├── SumOutputView.js // 결과 출력
    └── TextInputView.js // 입력
App.js
```
