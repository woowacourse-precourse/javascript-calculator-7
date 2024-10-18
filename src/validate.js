// 입력값에 숫자가 있는지 확인
function checkNum(input) {
    const REG = /[^0-9]/g;
    if (!input) { // 입력값이 ''이면 0이 출력되어야한다
        return true;
    }
    let result = input.replace(REG, ''); //입력값을 숫자를 제외하고 전부 ''으로 치환
    if (!result) { //result가 ''이면 숫자가 없다
        return false;
    }
    return true;
}

// 커스텀 구분자 없을때 음수가 있는지 확인
function checkIsBasicMinus(input) {
    const NUMS = input.split(/,|:/).map(function(num){return parseInt(num);});
    for (let i = 0; i < NUMS.length; i++) {
        if (NUMS[i] < 0) {
            return false;
        }
    }
    return true;
}

//커스텀 구분자 추출
function customSeparatorValid(input) {
    let separator;
    if (input.indexOf('//') == 0 && input.indexOf('\\n') != -1) {
        separator = input.substring(input.indexOf('//') + 2, input.indexOf('\\n'));
        return separator
    }
    else {
        return 0;
    }
}

//커스텀 구분자가 있을때 음수 확인
function checkIsCustomMinus(input) {
    let custom = customSeparatorValid(input)
    if (custom == 0) {
        return true;
    }
    else {
        let customNums = input.substring(input.indexOf('\\n')+2);
        customNums = input.split(custom).map(function(num){return parseInt(num);});
        for (let i = 0; i < customNums.length; i++) {
            if (customNums[i] < 0) {
                return false;
            }
        }
    }
    return true;
}

function checkSeparator(input) {
    let custom = customSeparatorValid(input);
    // 쉼표, 콜론 확인
    if (custom == 0) {
        let nums = input.indexOf(/,|:/);
        if (nums == -1) {
            return false;
        }
    }
    // "//"와 "\n"사이에 구분자와 숫자 사이에 있는 구분자가 같은지 확인
    else {
        let customs = input.substring(input.indexOf('\\n')+2);
        let customIdx = customs.indexOf(custom);
        if (checkNum(input)) { // 커스텀 구분자를 사용하더라도 계산식에 없을 경우
            return true;
        }
        if (customIdx == -1) {
            return false;
        }
    }

    return true;
}

export { checkNum, checkIsBasicMinus, checkIsCustomMinus, checkSeparator };