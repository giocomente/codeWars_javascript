function whoIsWinner(piecesPositionList){
    let witdh = 7;
    let height = 6;
    let Yellow = 1;
    let Red = 2;
    let state = new Array(height).fill(new Array(witdh).fill(0));
    let result = "Draw";
    let first = false;
    piecesPositionList.forEach(move => {
        let iColumn = move[0].charCodeAt(0) - 'A'.charCodeAt(0);
        let color = move.indexOf('Yellow') == 2 ? Yellow : Red;
        let iRow = -1;
        for(let i = height-1; i >= 0; i--){
            if(state[i][iColumn] == 0){
                let line = state[i].slice();
                line[iColumn] = color;
                state[i] = line;
                iRow = i;
                break;
            }
        }
        if (check(state, iRow, iColumn, witdh, height) && color == Yellow){
            if(!first){
                result = "Yellow";
                first = true;
            }
        }
        if (check(state, iRow, iColumn, witdh, height) && color == Red){
            if(!first){
                result = "Red";
                first = true;
            }
        }
    });
    return result;
}

function check(state, iRow, iColumn, witdh, height){
    let value = state[iRow][iColumn];

    //check row
    let line = state[iRow].slice();
    if (checkLine(line, value, 4)) return true;

    //check column
    line = getColumn(state, iColumn);
    if (checkLine(line, value, 4)) return true;

    //check diagonal left
    let row = iRow;
    let col = iColumn;
    line = [];
    while(row > 0 && col > 0){
        if(row - 1 < 0) break;
        if(col - 1 < 0) break;
        row--;
        col--;
    }
    while(row < height && col < witdh){
        line.push(state[row][col])
        if(row + 1 > height) break;
        if(col + 1 > witdh) break;
        row++;
        col++;
    }
    if (checkLine(line, value, 4)) return true;

    //check diagonal right
    row = iRow;
    col = iColumn;
    line = [];
    while(row < height && col < witdh){
        if(row - 1 < 0) break;
        if(col + 1 >= witdh) break;
        row--;
        col++;
    }
    while(row < height && col < witdh){
        line.push(state[row][col])
        if(row + 1 > height) break;
        if(col - 1 < 0) break;
        row++;
        col--;
    }
    if (checkLine(line, value, 4)) return true;

    return false;
}

function checkLine(line, value, max){
    let count = 0;
    let maxCount = 0;
    line.forEach(e =>{
        e == value? count++ : count = 0;
        if(count > maxCount) maxCount = count;
    });
    if (maxCount >= max) return true;
    return false;
}

function getColumn(state, iColumn){
    let column = [];
    for(line of state){
        column.push(line[iColumn]);
    }
    return column;
}

function printState(state){
    console.log("A B C D E F G");
    state.forEach(e=>{
        let line = e.join(' ') + '\n';
        console.log(line);
    });
}

console.log(whoIsWinner([ "A_Red",
"B_Yellow",
"A_Red",
"E_Yellow",
"F_Red",
"G_Yellow"]));