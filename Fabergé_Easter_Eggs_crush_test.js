const BigNumber = require('bignumber.js');
/**
 * 
 * @param {number} n Количество яиц 
 * @param {number} m Количество попыток 
 * @returns {number} Количество этажей
 */
function height(n,m) {
    // if (n == 0 || m == 0) return new BigNumber("0").toString();
    // else if(n == 1) return  new BigNumber(m).toString();
    // else if(n == 2) return new BigNumber(m*(m+1)/2).toString();
    // else if(n >= m) return new BigNumber(2 ** n)- 1;
    // else return height(n-1,m-1)+1+height(n,m-1);
    let h = 0;
    let bk = 1;
    for (let i = 1; i < n+1; i++) {

        bk =( bk * m / i);
        console.log(bk)
        h =  h + bk;
        m--;
        
    }
    
    return new BigNumber(h).toString();
}

console.log((height(237, 500)));