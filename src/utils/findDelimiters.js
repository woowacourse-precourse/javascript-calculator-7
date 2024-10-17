// 구분자 추출 함수
export function findDelimiters(input){

    // 기본 구분자
    const delimiters = [',', ':'];

    // "//" + 1개의 문자 + "\n" 이므로 5문자
    const SPLIT_SIZE = 5;

    // 자른 결과 배열
    const splitArray = [];

    // SPLIT_SIZE에 맞게 input 문자열 자르기
    // 5. “//]\n//[\n” 와 같이 커스텀 구분자가 2개가 될 경우 ⇒ 커스텀 구분자 “[”, “]” 에 “,” , “;” 까지 포함하여 검사 진행
    for(let i = 0; i < input.length; i += SPLIT_SIZE){
        splitArray.push(input.slice(i, i + SPLIT_SIZE));
    }

    for (let word of splitArray){
        // 1. 맨 처음에 “//” 문자가 나오지 않으면 무조건 숫자부터 시작 ( 요구사항에 “문자열 앞부분” 이라는 말이 있기 떄문)
        // "//" 이 단어의 처음에 없으면 숫자 시작이므로 추출한 구분자 리턴
        if(!word.startsWith("//")){
            return delimiters;
        }
        
        // 4. “//2\n” 와 같이 커스텀 구분자 안에 숫자가 들어갈때 ⇒ 에러로 출력 (입력 형식에 맞지 않다고 판단)
        const isDigit = !isNaN(parseInt(word[2], 10));

        if(word[0] == '/' && word[1] == '/' && word[3] == '\\' && word[4] == 'n' && !isDigit){
            // 이미 포함된 구분자 나오는 경우 제외
            if(!delimiters.includes(word[2])){
                delimiters.push(word[2]);
            }
        }
        // 2. “//;;\n” 와 같은 2개 이상의 이어진 문자열이 나올때 ⇒ 에러로 출력 ( 커스텀 구분자는 문자열 앞부분의 "//"와 "\n" 사이에 위치하는 "문자"를 커스텀 구분자로 사용한다. 요구사항에 "문자"라고 나와있으므로 에러로 출력)
        // 3. “//\n” 와 같이 커스텀 구분자 안에 아무 구분자도 없을때 ⇒ 에러로 출력
        // 10. "//" 이 나오고 "\n"이 나오지 않는 경우나 개수가 똑같지 않은 경우 => 에러로 출력
        else{
            throw new Error("[ERROR]");
        }
    }

    return delimiters;
}