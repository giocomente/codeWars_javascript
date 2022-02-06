function testRegExp(num){
    return /^[1-9]0*0$/.test(num);
}

console.log(testRegExp('80000'));