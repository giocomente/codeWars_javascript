function validBraces(braces){
    const pairBraces = new Map([['(',')'],['[',']'],['{','}']]);
    let stackBraces =[];
    let flag = false;
    braces.split('').forEach(e => {
        
        if(pairBraces.has(e))  stackBraces.push(e);
        else {
            if(pairBraces.get(stackBraces.pop()) != e) {
                flag = false;
                return;
            }
            else flag = true;
        }
      
    });
    if(stackBraces.length != 0) flag = false;
    
    return flag;
}

console.log(validBraces("{{{{{(((((([[[[]]]]"));