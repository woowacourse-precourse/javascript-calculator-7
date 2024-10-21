export default class Controller {
    defaultNum(list, st){
        if (list.length === 0){
            return 0;
        }
        if (list.length === 1){
            return parseInt(st, 10);
        }
    }

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
        return numberString.split(customSeparator)
            .map(num => parseInt(num.trim(), 10))
            .filter(num => !isNaN(num));
    }

    sumCalculatorList(list){
        return list.reduce((total, curr) => {
            if (curr) {
                throw new Error("[ERROR] 음수 입력은 허용되지 않습니다.");
            }
            return total + curr;
        }, 0);
    }
}