const splitBySymbol = (value) => {
    if(value[0] != "/"){
        const commaSeparatedValue = value.split(",");
        let seperatedValue = [];
        commaSeparatedValue.forEach((item)=>{
            seperatedValue = seperatedValue.concat(item.split(":"));
        })
        // 만약 다른 기호가 들어가 있을때, 양수가 아닐때 에러 반환 추후에 구현 예정
        return seperatedValue;
    }else{
        const index = 2;
        const lineBreakIndex = value.indexOf("\\n");
        const customSeperator = value.slice(index,lineBreakIndex);
        const substringValue = value.slice(lineBreakIndex+2);
        const seperatedValue = substringValue.split(customSeperator)
        // 만약 다른 기호가 들어가 있을때, 양수가 아닐때 에러 반환 추후에 구현 예정 
        return seperatedValue;
    }  
}

export default splitBySymbol

 