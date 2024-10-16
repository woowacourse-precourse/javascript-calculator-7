const splitBySymbol = (value) => {
    if(value[0] != "/"){
        const commaSeparatedValue = value.split(",");
        let seperatedValue = [];
        commaSeparatedValue.forEach((item)=>{
            seperatedValue = seperatedValue.concat(item.split(":"));
        })
        return seperatedValue;
    }else{}  
}

export default splitBySymbol

 