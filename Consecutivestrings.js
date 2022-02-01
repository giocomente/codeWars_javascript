function longestConsec(strarr, k) {
    if(strarr.length == 0 || k > strarr.length || k <= 0)  return "";
    let res = [];
    strarr.forEach((e ,i) => {
        if(i <= strarr.length-k){
            let s ="";
            for (var z = 0; z < k; z++) s += strarr[i+z];
            if(res.length == 0) res.push(s);
            else{
                if(s.length > res[res.length-1].length){
                    res =[];
                    res.push(s);
                };
            }
        }
    });
    return res[0];
}
console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 2));