# javascript-calculator-precourse

### 구분자 처리 함수 구현
* input: string
* output: string[]
* StringTokenizer 활용 
* big integer 고려 필요

#### big integer calc
* input: string1, string2
* output: string

#### Erorr Handling
* "//" 와 "\n" 짝이 맞지 않는 경우
* "//" 와 "\n" 사이에 '문자'가 아닌 '문자열'이 들어간 경우
* 구분자가 중복되는 경우
* 구분자와 숫자의 순서가 맞지 않는 경우 (",0" 또는 "0,")
* 구분자 이외의 문자가 숫자 사이에 들어오는 경우

### ETC
* "//" 와 "\n" 사이에 숫자가 있을 경우 해당 숫자는 문자로 취급해야 하는가? -> Yes. 컴퓨터에서 키보드 상 입력 가능한 모든 것은 다 문자로 취급함.
* 추후 사칙연산 지원할 수 있도록 확장성 고려 필요함. -> Calculator이니까!
