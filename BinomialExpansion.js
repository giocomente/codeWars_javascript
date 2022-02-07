function expand(expr) {
    //console.log(expr);
    let func = expr.match(/\(([^)]+)\)/g)[0];
    func = func.replace(/[()]/g, '');
    power = expr.split("^")[1]; 
    if(power == 0) return '1';
    if(power == 1) return func;
    let a = func.split(/[a-z]/g)[0];
    let b = func.split(/[a-z]/g)[1];
    if(a == '') a = 1;
    if(a == '-') a = -1;
    a = Number(a);
    b = Number(b);
    let char = expr.match(/[a-z]/g)[0];
    let coef = [];
    coef.push(a);
    coef.push(b);
    let coefCalcA = [];
    let coefCalcB = [];
    for(let i = 1; i < power; i++){
      coef.forEach(c =>{
        coefCalcA.push(c * a);
      });
       coef.forEach(c =>{
        coefCalcB.push(c * b);
      });
      coefCalcA.push(0);
      coefCalcB.unshift(0);
      coef = new Array();

      //console.log(coefCalcA, '   ', coefCalcB);

      for(let j =0; j < coefCalcA.length; j ++){
        coef.push(coefCalcA[j] + coefCalcB[j]);
      }
      coefCalcA = new Array();
      coefCalcB = new Array();

      //console.log(coef);
    }
  //   console.log(coef);
    
    let result = "";
    coef.forEach(c => {
      if(c != 0){
        if(power > 1){
            if(c != 1) {
            if(c > 0 && result.length > 0) result += '+';
            if(c == -1)  result += '-';
            else result += c;
            }
            
            result += char;
            result += '^';
            result += power;
        }
        if(power == 1){
            if(c != 1) {
            if(c > 0) result += '+';
            result += c;
            }
            result += char;
        }
        if(power == 0){
            if(c > 0) result += '+';
            result += c;
        }
      }
      power--;
    });
    
    return result;
  }
  
  //console.log(expand("(x+1)^0"));
  //console.log(expand("(x+1)^1"));
  console.log(expand("(-n-12)^5"));