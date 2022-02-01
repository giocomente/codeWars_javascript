function solution(string) {
    let res =[];
    for (let e of string){ e.toUpperCase() == e?res.push(" "+e):res.push(e);};
    return res.join('');
}

console.log(solution("camelCasingTest"));