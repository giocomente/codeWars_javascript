function add(a, b) {
    a=a.replace(/^0+/, '');
    b=b.replace(/^0+/, '');
    let arrA = [...a].map(e=>Number(e)).reverse();
    let arrB = [...b].map(e=>Number(e)).reverse();
 
    if (arrA.length >= arrB.length)
        return sum(arrA, arrB);
    else
        return sum(arrB, arrA); 
}

function sum(arrA, arrB) {
    let buf = 0;
    let res = [];
    arrA.forEach((eA, ind) => {
        if (ind < arrB.length)
            buf += arrB[ind];
        buf += eA;
        if (buf - 10 < 0) {
            res.push(String(buf));
            buf = 0;
        }
        else {
            res.push(String(buf - 10));
            buf = 1;
        }
    });
    if (buf == 1)
        res.push(String(buf));
    return res.reverse().join('');
}


console.log(add('63829983432984289347293874', '90938498237058927340892374089'));