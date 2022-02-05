function topThreeWords(text) {
    let arr = text.split(' ')
        .map(e =>e.replace(/[^a-zA-Z']+/g, ''))
        .filter(n => n!='')
        .filter(n => n!='\'')
        .map(w => w.toLowerCase());
    let map = new Map();
    arr.forEach(e => {
        if(!map.has(e)) map.set(e, 1);
        else map.set(e, map.get(e) + 1);
    });
    let result = [...map.entries()].sort((a, b) => b[1] - a[1]);
    if(result.length > 3) result.length = 3;
    return result.map(e => e[0]);
}

console.log(topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e   //wont won't won't ' ' ' ' ' "));