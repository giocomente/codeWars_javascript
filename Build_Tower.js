/**
 * 
 * @param {number} nFloors Кол-во уровней пирамиды
 * @returns []
 */
function towerBuilder(nFloors) {
    let result =[];
    for(let i=1, s=nFloors-1; i<nFloors+1; i++,s--){
        let stars ='';
        let spaces = " ".repeat(s);
        stars = '*'.repeat(2*i-1);
        stars += spaces;
        stars = spaces + stars;
        result.push(stars);
    }
    return result;
}
//
console.log(towerBuilder(7));