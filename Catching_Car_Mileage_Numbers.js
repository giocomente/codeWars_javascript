function isInteresting(number, awesomePhrases) {
    
    let result = 0;
    for(let i = 0; i < 3; i++){
        
        if(awesomePhrases.includes(number)){ 
            console.log("awesomePhrases");
            if(i == 0) result = 2;
            else result = 1;
            break;
        }
        if(allZerosBack(number)) { 
            console.log("allZerosBack");
            if(i == 0) result = 2;
            else result = 1;
            break;
        }
        if(sameNumber(number)) { 
            console.log("sameNumber");
            if(i == 0) result = 2;
            else result = 1;
            break;
        }
        if(isIncementing(number)) { 
            console.log("isIncementing");
            if(i == 0) result = 2;
            else result = 1;
            break;
        }
        if(isDecrementing(number)) { 
            console.log("isDecrementing");
            if(i == 0) result = 2;
            else result = 1;
            break;
        }
        if(isPalindrome(number)) { 
            console.log("isPalindrome");
            if(i == 0) result = 2;
            else result = 1;
            break;
        }
        number += 1;
    }
    return result;
}
function allZerosBack(number){
    if (number < 100) return false;
    let x = [...String(number)];
    x.shift();
    if(x.filter(n => n != '0').length == 0) return true;
    return false;
}
function sameNumber(number){
    if (number < 100) return false;
    let x = [...String(number)];
    let f = x[0];
    let xNof = x.filter(n => n != f);
    if(xNof.length == 0) return true;
    return false;
}
function isIncementing(number){
    if (number < 100) return false;
    let x = [...String(number)].map(n => ~~n);
    let f = x[0];
    let result = false;
    for(let i = 1; i < x.length; i++){
        if(f == 9){ 
            if((x[i] == 0) && (i == x.length-1)){
                result = true;
                break;
            }
            else{
                result = false;
                break;
            }
        }
        if(x[i] == f + 1){
            result = true;
            f = x[i];
        }
        else {
            result = false;
            break;
        }
    }
    return result;
}
function isDecrementing(number){
    if (number < 100) return false;
    let x = [...String(number)].map(n => ~~n);
    let f = x[0];
    let result = false;
    for(let i = 1; i < x.length; i++){
        if(f == 1){ 
            if((x[i] == 0) && (i == x.length-1)){
                result = true;
                break;
            }
            else{
                result = false;
                break;
            }
        }
        if(x[i] == f - 1){
            result = true;
            f = x[i];
        }
        else {
            result = false;
            break;
        }
    }
    return result;
}
function isPalindrome(number){
    if (number < 100) return false;
    let left = [...String(number)];
    left.length = ~~(left.length/2);
    let right = [...String(number)].reverse();
    right.length = ~~(right.length/2);
    if(left.toString() === right.toString()) 
        return true;
    return false;
}

console.log(isInteresting(98, [1337, 256]));
// console.log(isInteresting(1336, [1337, 256]));
// console.log(isInteresting(1337, [1337, 256]));
// console.log(isInteresting(11208, [1337, 256]));
// console.log(isInteresting(11209, [1337, 256]));
// console.log(isInteresting(11211, [1337, 256]));