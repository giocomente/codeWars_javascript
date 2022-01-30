//Первая версия
function arrayDiff(a, b) {
    //Итоговый массив
    var c = [];
    //Индекс первого массива (а) для перебора
    var index;
    for (index = 0; index < a.length; ++index) {
       if(b.indexOf(a[index])<0){
        //Сохраняем в итговый элемент из первого если его нет во втором
        c.push(a[index]);
      } 
    }
    return c; 
}

//Рефакторинг с фильтрацией

function arrayDiff(a, b) {
    return a.filter(e => !b.includes(e));
}