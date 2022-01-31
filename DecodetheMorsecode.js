decodeMorse = function(morseCode){
    morseCode = morseCode.trim();
    let decode =[];
    morseCode.split('   ').forEach(word => {
      word.split(' ').forEach(l=>{
          decode.push(MORSE_CODE[l]);
      });
      decode.push(' ');
    });
    decode.pop();
    return decode.join('');
}

console.log(decodeMorse('.... . -.--   .--- ..- -.. .'));