function multiply(a, b)
{
    a=a.replace(/^0+/, '');
    b=b.replace(/^0+/, '');
    if(a == '') return '0';
    if(b == '') return '0';
    let arrA = [...a].map(e=>Number(e));
    let arrB = [...b].map(e=>Number(e));
    let result = [];
    
    

    if (arrA.length >= arrB.length) {
        console.log(arrA.length);
        result = multiplyAB(arrA, arrB);
    }
    else {
        console.log(arrB.length);
        result = multiplyAB(arrB, arrA);
    } 
 
    // result.forEach(e =>{
    //     console.log(e.join(''));
    // })

    let arr1 = result[0];
    for(let i = 1; i < result.length; i++){
    

        let arr2 = result[i];
    

        
        //arr1.unshift(0);

        // while(arr2.length < arr1.length)
        //     arr2.push(0);

        for(let j = 0; j < i; j++) 
            arr2.push(0);
        
        console.log('(',arr1.length,')   ', arr1.join(''));
        console.log('++++++++++++');
        console.log('(',arr2.length,')   ', arr2.join(''));
        console.log('==========');
        // arr1 = '16647225757205144841795765678000'.split('').map(e=>Number(e));
        // arr2 = '0582652901502180069462851798730'.split('').map(e=>Number(e));
        if(arr1.length >= arr2.length) arr1 = sum(arr1, arr2);
        else arr1 = sum(arr2, arr1);

        console.log(arr1.join(''));
        console.log('***********');
        console.log('***********');

    }
    return arr1.join('');
}

function multiplyAB(a, b){
    let buf = 0;
    let arrBuf0 = [];
    let arrBuf = [];
    a = a.reverse();
    b = b.reverse();
    b.forEach(eB =>{
        a.forEach(eA =>{
            let n = eB * eA;
            n += buf;
            if (n < 10){
                buf = 0;
                arrBuf0.push(n);
            }
            else{
                let nn = ~~[...String(n)][1];
                arrBuf0.push(nn);
                buf = ~~[...String(n)][0];
            }
        })
        if(buf > 0) arrBuf0.push(buf);
        arrBuf.push(arrBuf0.reverse());
        arrBuf0 = new Array();
        buf = 0;
    });
    return arrBuf;
}

function sum(a, b) {
    arrA = a.reverse();
    arrB = b.reverse();
    let buf = 0;
    let res = [];
    arrA.forEach((eA, ind) => {
        if (ind < arrB.length)
            buf += arrB[ind];
        buf += eA;
        if (buf - 10 < 0) {
            res.push(buf);
            buf = 0;
        }
        else {
            res.push(buf - 10);
            buf = 1;
        }
    });

    if (buf == 1)
        res.push(buf);

    return res.reverse();
}

console.log(multiply("1020303004875647366210", "2774537626200857473632627613"))

// console.log(sum('013527667069636756229760515342445169156730'.split('').map(e=>Number(e)), '00000000000000000000000000000000000000000'.split('').map(e=>Number(e))).join(''));