function isPangram(string){
    let m = new Map();
    string.split('').forEach(e => {
        
        if(e.toLowerCase().match(/[a-z]/i)){
            m.set(e.toLowerCase(),1);
        }     
    });
    if(m.size == 26) return true;
    return false;
}
var string = "This is not a pangram.";
console.log(isPangram(string));