//caracteristicas de los arreglos  son datos que que tienen una forma o algo en comun

//const  myArray:(number|string)[] = [1,2,3,4,5,6,7,8,9,10];

const  myArray:number[] = [1,2,3,4,5,6,7,8,9,10];

const myArray2 = [...myArray]; //structuredClone(myArray); los dos casos son muy comunes

//myArray2.push('hola mundo');
myArray2.push(11);
console.log({myArray, myArray2});

