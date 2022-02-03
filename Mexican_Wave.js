function wave(str){
    let result=[];
    [...str].forEach((e, i, arr)=>{
        let newArr = arr.slice();
        if(e != ' '){
            newArr[i] = e.toUpperCase();
            result.push(newArr.join(''));
        }
       
    });
    return result;
}

console.log(wave("hello"));