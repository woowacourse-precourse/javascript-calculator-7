async function setDelimiter(input){

    const default_delimiter = [',', ':']; 
    const custom_delimiter = [];
    // input이 "//"로 시작하면서 "\n"을 포함하면
    if(input.startsWith("//") && input.includes("\n")) 
    {
        const index = input.indexOf("\n");
        const delimiter = input.slice(2,index);
        custom_delimiter.push(delimiter);
    }
    
    return custom_delimiter.length !== 0 ? custom_delimiter : default_delimiter;
}

export default setDelimiter;