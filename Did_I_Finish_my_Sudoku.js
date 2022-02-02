function doneOrNot(board){
    let res = 'Finished!';
    //---check line---
    for(line of board){
        if (new Set(line).size != line.length) {
            res = "Try again!";
            break;
        }
        for(e of line){
            if(e == 0) {
                res = "Try again!";
                break;
            }
        }
    }
    //---check column---
    for(let i=0; i < 9; i++){
        let column = getColumn(board, i);
        if (new Set(column).size != column.length) {
            res = "Try again!";
            break;
        }
    }
    //---check regions---
    for(let i=0; i < 3; i++){
        for(let j=0; j < 3; j++){
            let region = getRegion(board, i, j);
            if (new Set(region).size != region.length) {
                res = "Try again!";
            }
        }
    }

    return res;
}

function getColumn(board, i){
    let column = [];
    for(line of board){
        column.push(line[i]);
    }
    return column;
}

function getRegion(board, i, j){
    let region = [];
    let r = i*3;
    let c = j*3;
    for(let row = r; row < r+3; row++){
        for(let col =c; col < c+3; col++){
            region.push(board[row][col]);
        }
    }
    
    console.log(region);

    return region;
}

console.log(doneOrNot([
    [5, 3, 4, 6, 7, 8, 9, 1, 2], 
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]])
);