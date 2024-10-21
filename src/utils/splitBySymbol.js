import { hasInvalidSymbol, hasNegative } from '../errorHandling';

const splitByDefaultSeparator=(value)=>{
    const commaSeparatedValue = value.split(",");
    let seperatedValue = [];
    commaSeparatedValue.forEach((item)=>{
        seperatedValue = seperatedValue.concat(item.split(":"));
    })
    if(hasInvalidSymbol(seperatedValue)){
        throw new Error("[ERROR] 기본 구분자는 콜론(:)또는 콤마(,) 형식으로 입력해주세요.어플리케이션이 종료됩니다. ");
    }
    if(hasNegative(seperatedValue)){
        throw new Error("[ERROR] 숫자는 양수만 입력이 가능합니다. 어플리케이션이 종료됩니다. ");
    }
    return seperatedValue;
}

const splitByCustomSeparator=(value)=>{
    const index = 2;
    const lineBreakIndex = value.indexOf("\\n");
    const customSeperator = value.slice(index,lineBreakIndex);
    const substringValue = value.slice(lineBreakIndex+2);
    const seperatedValue = substringValue.split(customSeperator)

    if(hasInvalidSymbol(seperatedValue)){
        throw new Error("[ERROR] 커스텀 구분자는 // 커스텀구분자 \\n로 형식으로 입력해주세요. 어플리케이션이 종료됩니다. ");
    }
    if(hasNegative(seperatedValue)){
        throw new Error("[ERROR] 양수만 입력이 가능합니다. 어플리케이션이 종료됩니다. ");
    }
    return seperatedValue;
}


const splitBySymbol = (value) => {
    if(value.startsWith('//')){
        return splitByCustomSeparator(value);
    }else{
        return splitByDefaultSeparator(value);
    }
}

export default splitBySymbol

 