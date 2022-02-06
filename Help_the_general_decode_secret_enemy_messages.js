//console.log (device.encode ('What is this ? &&&')) ;
console.log ('a - ', device.encode ('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')) ;
console.log ('b - ', device.encode ('bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb')) ; 
console.log ('c - ', device.encode ('cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc')) ;
console.log ('d - ', device.encode ('dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd')) ;
console.log ('e - ', device.encode ('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee')) ;
console.log ('f - ', device.encode ('ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')) ;
console.log ('g - ', device.encode ('gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg')) ;
console.log ('  - ', device.encode ('                                                                  ')) ;
console.log ('1 - ', device.encode ('111111111111111111111111111111111111111111111111111111111111111111')) ;
console.log ('2 - ', device.encode ('222222222222222222222222222222222222222222222222222222222222222222')) ;
console.log ('3 - ', device.encode ('333333333333333333333333333333333333333333333333333333333333333333')) ;
console.log ('4 - ', device.encode ('444444444444444444444444444444444444444444444444444444444444444444')) ;
console.log ('5 - ', device.encode ('555555555555555555555555555555555555555555555555555555555555555555')) ;
console.log ('. - ', device.encode ('..................................................................')) ;
console.log (', - ', device.encode (',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,')) ;
// console.log (device.encode ('!@#$%^&*()_+-')) ;
// console.log ('abcdefghijklmnopqrstuvwxyz') ;
// console.log ('abcdefghijklmnopqrstuvwxyz'.split ('').map (function (a) {
//   return device.encode (a) ;
// }).join ('')) ;
console.log ('aaaaaaaaaaaaaaaaaaaaaaaaaa'.split ('').map (function (a) {
  return device.encode ('_'+a)[1] ;
}).join ('')) ;
console.log ('aaaaaaaaaaaaaaaaaaaaaaaaaa'.split ('').map (function (a) {
  return device.encode ('__'+a)[2] ;
}).join ('')) ;

device.decode = function (w) {
  return w ; 
}