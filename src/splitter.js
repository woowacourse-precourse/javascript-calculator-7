const splitter = {

    splitString({ stringNumbers, seperator }) {
        if(arguments.length == 2){
            //커스텀 구분자가 존재할 경우에 커스텀 구분자를 기준으로 쪼갠다.
            return stringNumbers.split(seperator)
        } else {
            //커스텀 구분자가 존재하지 않을 경우 세미콜론과 쉼표를 기준으로 쪼갠다
            return stringNumbers.split(/;|,/)
        }
    }

}
    