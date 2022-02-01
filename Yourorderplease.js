function order(words){
    return words.split(' ').sort((word1, word2)=>{
        if (findNumeric(word1) > findNumeric(word2)) return 1;
        if (findNumeric(word1) == findNumeric(word2)) return 0;
        if (findNumeric(word1) < findNumeric(word2)) return -1;
    }).join(' ');
}
function findNumeric(word) {
    return word[word.search(/\d/)];
}

console.log(order("4of Fo1r pe6ople g3ood th5e the2"));