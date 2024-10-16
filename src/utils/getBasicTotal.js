export function getBasicTotal(array){
    var total = 0;
    const numArr = array.split(/,|:/);
      for (let i =0; i<numArr.length; i++){
        total += Number(numArr[i]);
    }
    return total;
}