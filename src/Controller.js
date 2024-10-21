export default class Controller {

    baseSeparatorSplit(st){
        let lst = [];
        let currentNumber = "";
        for (let ch of st){
            if(ch === ":" || ch === ','){
                if(currentNumber !== ""){
                    lst.push(parseInt(currentNumber, 10));
                    currentNumber = "";
                }
            }else{
                currentNumber += ch;
            }
        }
        if (currentNumber !== ""){
            lst.push(parseInt(currentNumber, 10));
        }
        return lst;
    }
    extractCustomSeparator(st){
        let separator = ""

        if(st.startsWith('//')){
            const idx = st.indexOf("\\n");
            if(idx > 2){
                separator = st.slice(2, idx);
            }
        }
        return separator;
    }

    CommonSeparatorSplit(st, customSeparator){
        if (customSeparator === ""){
            return this.baseSeparatorSplit(st);
        }
        const separatorIndex = st.indexOf("\\n");
        const numberString = st.slice(separatorIndex + 2);
        console.log(`숫자 배열 인덱스 : ${numberString}`)
        return numberString.split(customSeparator)
            .map(num => parseInt(num.trim(), 10))
            .filter(num => !isNaN(num));
    }

    sumCalculatorList(list){
        return list.reduce((total, curr) => total + curr, 0);
    }

}