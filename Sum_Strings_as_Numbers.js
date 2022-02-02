function sum_Strings(a,b) {
    a=a.replace(/^0+/, '');
    b=b.replace(/^0+/, '');
    let arrA = [...a].map(e=>Number(e)).reverse();
    let arrB = [...b].map(e=>Number(e)).reverse();
 
    if (arrA.length >= arrB.length)
        return sum(arrA, arrB);
    else
        return sum(arrB, arrA);
}

console.log(sum_Strings('08967', '0103'));

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
