const BigNumber = require('bignumber.js');
/**
 * 
 * @param {number} n Количество яиц 
 * @param {number} m Количество попыток 
 * @returns {number} Количество этажей
 */
function height(n,m) {
    if (n === 0 || m === 0) return new BigNumber("0");

    
    return new BigNumber("0").toString();
}

console.log((height(0, 4)));