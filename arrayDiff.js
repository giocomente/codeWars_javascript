function arrayDiff(a, b) {
    var c = [];
    var index;
    for (index = 0; index < a.length; ++index) {
       if(b.indexOf(a[index])<0){
        c.push(a[index]);
      } 
    }
    return c; 
  }