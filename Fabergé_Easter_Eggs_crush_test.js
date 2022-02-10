const BigNumber = require('bignumber.js');
/**
 * 
 * @param {number} n Количество яиц 
 * @param {number} m Количество попыток 
 * @returns {number} Количество этажей
 */
function height(n,m) {
    let h = new BigNumber(0);;
    let bk = new BigNumber(1);
    for (let i = 1; i < n+1; i++) {

       bk = bk.multipliedBy(m/i).integerValue();
        h = h.plus(bk);
        m--;
        
    }
    
    return h;
}

console.log((height(2, 14)).toString());