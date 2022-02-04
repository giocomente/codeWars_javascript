function rectangleRotation(a, b) {
    let point1 = transformPoint(a/2, b/2);
    let point2 = transformPoint(-a/2, b/2);
    let point3 = transformPoint(-a/2, -b/2);
    let point4 = transformPoint(a/2, -b/2);
    let R = 1;
    let flag = true;
    let point = {x:0, y:0};
    let count1 = 0;
    let count2 = 0;
    let pointStart = {x:Math.round(point2.x), y:Math.round(point1.y)};
    for(let x = pointStart.x; x <= -1*pointStart.x; x++){
        for(let y = pointStart.y; y >= 0; y--){
            point = {x:x, y:y};
            if(checkInto(point, point1, point2, point3, point4)){
                count1++;
            }
        }
    }
    for(let x = pointStart.x; x <= -1*pointStart.x; x++){
        // for(let y = pointStart.y; y >= 0; y--){
            point = {x:x, y:0};
            if(checkInto(point, point1, point2, point3, point4)){
                count2++;
            }
        // }
    }
    let count = count1*2 - count2;
    // console.log(Math.round(point2.x));
    // console.log(Math.round(point1.y));
    // while(flag) {
        
    //         point.x++;
    //         flag = false;
    //         for(let i=0; i < R; i++){
    //             point.y++;
    //             if(checkInto(point, point1, point2, point3, point4)){
    //                 count++;
    //                 flag = true;
    //             }
    //         }
    //         for(let i=0; i < R; i++){
    //             point.x--;
    //             if(checkInto(point, point1, point2, point3, point4)){
    //                 count++;
    //                 flag = true;
    //             }
    //             point.x--;
    //             if(checkInto(point, point1, point2, point3, point4)){
    //                 count++;
    //                 flag = true;
    //             }
    //         }
    //         for(let i=0; i < R; i++){
    //             point.y--;
    //             if(checkInto(point, point1, point2, point3, point4)){
    //                 count++;
    //                 flag = true;
    //             }
    //             point.y--;
    //             if(checkInto(point, point1, point2, point3, point4)){
    //                 count++;
    //                 flag = true;
    //             }
    //         }
    //         for(let i=0; i < R; i++){
    //             point.x++;
    //             if(checkInto(point, point1, point2, point3, point4)){
    //                 count++;
    //                 flag = true;
    //             }
    //             point.x++;
    //             if(checkInto(point, point1, point2, point3, point4)){
    //                 count++;
    //                 flag = true;
    //             }
    //         }
    //         for(let i=0; i < R; i++){
    //             point.y++;
    //             if(checkInto(point, point1, point2, point3, point4)){
    //                 count++;
    //                 flag = true;
    //             }
    //         }
    //         R++;
    // } 

    //console.log(R);
    return count;

}

function transformPoint(x, y){
    return {x:x*0.70710678118 - y*0.70710678118, y:x*0.70710678118 + y*0.70710678118};
}

function checkInto(point, point1, point2, point3, point4){
    let result = false;
    let checkLine1 =  plusMinus(point, point1, point2) <= 0;
    let checkLine2 =  plusMinus(point, point2, point3) <= 0;
    let checkLine3 =  plusMinus(point, point3, point4) <= 0;
    let checkLine4 =  plusMinus(point, point1, point4) >= 0;
    return (checkLine1 && checkLine2 && checkLine3 && checkLine4);
}

function plusMinus(point, point1, point2){
    return (point.x-point1.x)*(point2.y-point1.y)-(point.y-point1.y)*(point2.x-point1.x);
}

console.log(rectangleRotation(30, 2));

// console.log(plusMinus({x:-1, y:0}, {x:-1, y:-1}, {x:3, y:3}));
//console.log(transformPoint(3, 0));
//console.log(Math.sin(45));