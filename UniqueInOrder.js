var uniqueInOrder=function(iterable){
    //!!console.log([...iterable].filter((a, i) => a !== iterable[i-1]));
    let m =[];
    for(let e of iterable){
        if (m.length == 0) m.push(e);
        else{

            if(m[m.length-1] != e) m.push(e);
        }
    };
    return m;
    
}

console.log(uniqueInOrder("ABBCcAD"));