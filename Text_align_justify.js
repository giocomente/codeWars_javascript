/**
 * @param {String} str - inital string
 * @param {Number} len - line length
 */
var justify = function(str, len) {
    let arrWords = str.split(' ').filter(n=>{return n.length>0});     
    let lineWords = [];
    let result ="";
    let lenLineWords = lineWords.reduce((prev, word)=>{
        return prev + word.length
    }, 0);
    for(let iWord = 0; iWord < arrWords.length; iWord++){
        lineWords.push(arrWords[iWord]);
        lenLineWords = lineWords.reduce((prev, word)=>{
            return prev + word.length
        }, 0);
        if(lenLineWords == len){
            lineWords.forEach(word =>{
                result += word;
            });
            result += '\n';
            lineWords = [];
            continue;
        }
        lineWords.push(' ');
        lenLineWords = lineWords.reduce((prev, word)=>{
            return prev + word.length
        }, 0);
        if(lenLineWords > len){

            if(lineWords.length == 4){ 
                lineWords.pop();
                lineWords.pop();
                lineWords.pop();
                iWord--;
                result +=lineWords[0];
                result += '\n';
                lineWords = [];
                
                continue;
            }

            lineWords.pop();
            lineWords.pop();
            lineWords.pop();
            iWord--;

            lenLineWords = lineWords.reduce((prev, word)=>{
                return prev + word.length
            }, 0);
            

            let difNumGrap = len - lenLineWords;
            let i = 0;
            let k = 0;
            let z = lineWords.length;
            for(j = 0; j < difNumGrap; j++){
                i = 2*k+1;
                lineWords[i] += ' ';
                k++;
                if(k > z/2 - 1) k=0;
            }
            lineWords.forEach(word =>{
                result += word;
            });
            result += '\n';
            lineWords = [];
        }
    }
    if(lenLineWords > 0){
        lineWords.forEach(word =>{
            result += word;
        });
    }
    if(result[result.length-1] == '\n'){
        result[result.length-1] = '';
    }
    return result.slice(0, -1);
};

  let len = 35;
  console.log(justify("Lorem  ipsum  dolor  sit amet, consectetur  adipiscing  elit. Vestibulum    sagittis   dolor mauris,  at  elementum  ligula tempor  eget.  In quis rhoncus nunc,  at  aliquet orci. Fusce at   dolor   sit   amet  felis suscipit   tristique.   Nam  a imperdiet   tellus.  Nulla  eu vestibulum    urna.    Vivamus tincidunt  suscipit  enim, nec ultrices   nisi  volutpat  ac. Maecenas   sit   amet  lacinia arcu,  non dictum justo. Donec sed  quam  vel  risus faucibus euismod.  Suspendisse  rhoncus rhoncus  felis  at  fermentum. Donec lorem magna, ultricies a nunc    sit    amet,   blandit fringilla  nunc. In vestibulum velit    ac    felis   rhoncus pellentesque. Mauris at tellus enim.  Aliquam eleifend tempus dapibus. Pellentesque commodo, nisi    sit   amet   hendrerit fringilla,   ante  odio  porta lacus,   ut   elementum  justo nulla et dolor.", len));