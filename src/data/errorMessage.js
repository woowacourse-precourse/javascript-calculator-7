import { END_LETTER, START_LETTER } from "./constants.js";

export const WRONG_INPUT_ERROR = `입력에 오류가 발생했어요.\n쉼표(,) 또는 콜론(:)을 구분자로 가지는 문자열을 전달하는 경우 구분자를 기준으로 분리한 각 숫자의 합을 반환합니다.\n- 입력 예시) 1:2,3\n구분자로 사용할 문자를 //와 \\n 사이에 적어 문자열 앞부분에 넣어 커스텀 구분자를 추가할 수 있습니다.\n- 입력 예시) ${START_LETTER};${END_LETTER}1;2;3 -> 세미콜론(;)이 구분자로 추가됩니다.`;
export const WRONG_SELECTOR_ERROR = `커스텀 구분자를 다시 지정해보세요.\n문자열 앞부분에 커스텀 구분자를 ${START_LETTER}와 ${END_LETTER} 사이에 적어 넣어보세요!\n구분자를 설정하는 끝 단어(${END_LETTER})는 커스텀 구분자로 사용할 수 없어요.\n- 입력 예시) ${START_LETTER};${END_LETTER}1;2;3 -> 세미콜론(;)이 구분자로 추가됩니다.`;
export const WRONG_SEPERATOR_ERROR = `지정되지 않은 구분자를 사용하셨어요. 혹시 커스텀 구분자 기능을 사용해보시겠어요?\n구분자로 사용할 문자를 //와 \\n 사이에 적어 문자열 앞부분에 넣어보세요!\n- 입력 예시) ${START_LETTER};${END_LETTER}1;2;3 -> 세미콜론(;)이 구분자로 추가됩니다.`;
export const WRONG_NUMBERS_ERROR = `숫자 배열을 다시 입력해 보세요.\n숫자배열은 숫자 사이에 구분자를 가지는 문자열이고 기본 구분자는 쉼표(,) 또는 콜론(:)입니다.\n- 입력 예시) 1:2,3`;
export const NO_SEPERATOR_IN_SELECTOR = `커스텀 구분자 지정문 안에는 문자가 들어가야해요.\n문자를 넣어 다시한번 입력해주세요!\n- 입력 예시) ${START_LETTER};${END_LETTER}1;2;3 -> 세미콜론(;)이 구분자로 추가됩니다.`;
