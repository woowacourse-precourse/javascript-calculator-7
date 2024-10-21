# javascript-calculator-precourse

## 기능 목록
- [x] 입력 프롬프트를 띄워 입력을 받고 형식에 맞춰 출력하는 기능

- [x] 입력값에 커스텀 구분자가 정확히 정의되어 있는지 확인하는 기능

- [x] 커스텀 구분자가 정의되어 있다면, 커스텀 구분자를 추출하고, 숫자에 대한 문자열을 분리하는 기능

- [x] 커스텀 구분자와 숫자에 대한 문자열에 대한 유효성을 검사하는 기능
  * [x] 커스텀 구분자는 숫자가 될 수 없다.
  * [x] 커스텀 구분자는 default 구분자(,:)가 될 수 없다.
  * [x] 숫자에 대한 문자열은 숫자, 구분자 이외의 문자로 이루어 질 수 없다.
  * [x] 이를 만족하지 못한 경우, '[ERROR]'로 시작하는 에러 메세지를 출력하며 프로그램을 종료한다. 

- [x] 숫자에 대한 문자열을 구분자를 기준으로 분리하는 기능

- [x] 분리된 숫자들로 더하기 연산을 하는 기능


## 📄 기능 구현 상세

###  🗂️ 파일 트리

```
📂 calculator
├─ 📂 src
│  ├─ index.js
│  ├─ App.js
│  ├─ 📂 application
│  │  ├─ 📂 parser
│  │  │  ├─ InputSeparator.js
│  │  │  ├─ NumberSplitter.js
│  │  │  └─ Parser.js
│  │  ├─ IOPort.js
│  │  └─ CalucationService.js
│  ├─ 📂 constant
│  │  ├─ DELIMITER.js
│  │  └─ MESSAGE.js
│  ├─ 📂 domain
│  │  ├─ CaulationModel.js
│  │  └─ Calculator.js
│  ├─ 📂 presentation
│  │  └─ IOHandler.js
│  └─ 📂 validation
│     └─ Validator.js
├─ 📂 __tests__
└─ README.MD
```

### 🌊 Flow Chart

<div style="text-align: center; width: 80%; margin: auto;">

```Mermaid

flowchart TD
    A[시작] --> B[App.run 실행]
    B --> C[CalculationService.execute 호출]
    C --> D[사용자 입력 받기]
    D --> K[입력 파싱]
    K --> E{유효성 검사}
    E -- Yes --> F[숫자 분리]
    E -- No --> G[에러 메시지]
    G --> J
    F --> H[계산 수행]
    H --> I[결과 표시]
    I --> J[종료]

```
</div>

### 🗄️ UML DIAGRAM

<div style="text-align: center; width: 80%; margin: auto;">

```Mermaid

classDiagram
    class App {
        -CalculationService calculationService
        +run()
    }
    class CalculationService {
        -IOPort ioPort
        -Parser parser
        -Calculator calculator
        +execute()
    }
    class IOPort {
        <<interface>>
        +getInput()
        +displayResult()
    }
    class IOHandler {
        +getInput()
        +displayResult()
    }
    class Parser {
        +parse()
    }
    class Calculator {
        +executeCalculation()
    }
    class InputSeparator {
        +getCustomDelimiter()
        +getNumberString()
    }
    class NumberSplitter {
        +split()
    }
    class Validator {
        +validateNumberString()
        +validateDelimiter()
    }
    class CalculationModel {
        -numbers
        +getNumbers()
    }

    App --> CalculationService : creates
    App --> IOHandler : creates
    App --> Parser : creates
    App --> Calculator : creates
    CalculationService --> IOPort : uses
    CalculationService --> Parser : uses
    CalculationService --> Calculator : uses
    IOHandler ..|> IOPort : implements
    Parser --> InputSeparator : uses
    Parser --> NumberSplitter : uses
    Parser --> Validator : uses
    Calculator --> CalculationModel : creates

    %% Sequence of method calls
    App : 1) run()
    CalculationService : 2) execute()
    IOPort : 3) getInput()
    Parser : 4) parse()
    Calculator : 5) executeCalculation()
    IOPort : 6) displayResult()

```

</div>
