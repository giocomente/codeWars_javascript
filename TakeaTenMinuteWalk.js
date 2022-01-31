function isValidWalk(walk) {
    var x = 0;
    var y = 0;
    var t = 10;
    walk.forEach(e=> { 
        if (e == 'n'){
            y--;
            t--;
        };
        if (e == 's'){
            y++;
            t--;
        };
        if (e == 'w'){
            x--;
            t--;
        };
        if (e == 'e'){
            x++;
            t--;
        };
    });
    console.log(x, y, t);
    if (x == 0 && y == 0 && t ==0) return true;
    else return false;
};

console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']));