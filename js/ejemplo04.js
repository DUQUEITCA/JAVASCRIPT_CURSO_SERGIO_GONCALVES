console.log(3 & 1); // 1


/**
 * 0011
 * 0001
 * ----
 * 0001 
 * 
 */


let estudiantes = ['SERGIO', 'EFRENYER', 'MARTIN', 'DAVID', 'EDUARDO'];

console.log('Recorrido como Arreglo');

for (let i = 0; i < estudiantes.length; i = i + 1){
    console.log(estudiantes[i]);
    //document.write(estudiantes[i] + '<br>');
}

console.log('Recorrido como Objeto');

/*
estudiantes
    0          1          2        3         4
['SERGIO', 'EFRENYER', 'MARTIN', 'DAVID', 'EDUARDO'];
     |        |           |       |        |         
     v        v           v       v        v
elEstudiante

*/

for (let elEstudiante of estudiantes){
    console.log(elEstudiante);
}


