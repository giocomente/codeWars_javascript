function solution(number){
    let res = [];
    let m = Array.from(String(number)).map(n => Number(n));
    m.forEach((e, i)=>{
        res.push(calc(e, m.length-i));
    });
    return res.join('');
}

function calc(num, dim){
    let arrDim = new Map ([[4,'M'], [3, 'CDM'], [2, 'XLC'], [1, 'IVX']]);
    let numR = '';
    let char = arrDim.get(dim);
    if(num == 1) numR = char[0];
    if(num == 2) numR = char[0] + char[0];
    if(num == 3) numR = char[0] + char[0] + char[0];
    if(num == 4) numR = char[0] + char[1];
    if(num == 5) numR = char[1];
    if(num == 6) numR = char[1] + char[0];
    if(num == 7) numR = char[1] + char[0] + char[0];
    if(num == 8) numR = char[1] + char[0] + char[0] + char[0];
    if(num == 9) numR = char[0] + char[2];
    return numR;
}

console.log(solution(4));