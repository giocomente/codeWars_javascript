function pickPeaks(arr){
    let res = {pos:[], peaks:[]};
    let flPlato = false;
    let vlPlato = 0;
    let iPlato = -1;
    for(var i = 1; i < arr.length-1; i++){
        if(arr[i-1] < arr[i] && arr[i+1] < arr[i]){
            res.pos.push(i);
            res.peaks.push(arr[i]);
        }
        if(arr[i-1] < arr[i] && arr[i+1] == arr[i]){
            flPlato = true;
            vlPlato = arr[i];
            iPlato = i;
        }
        if(arr[i+1] < arr[i] && flPlato){
            res.pos.push(iPlato);
            res.peaks.push(vlPlato);
            flPlato = false;
            vlPlato = 0;
            iPlato = -1;
        }
        if(arr[i+1] > arr[i] && flPlato){
            flPlato = false;
            vlPlato = 0;
            iPlato = -1;
        }
        //
    }
    return res;
}

console.log(pickPeaks([1,2,3,6,4,1,2,3,2,1]));