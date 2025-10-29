
const characterNames = [ 'Goku', 'Vegeta', 'Trunks' ];


const [, , trunks] = characterNames;

console.log({  trunks }); // Goku Vegeta Trunks

const retunArrayFn = ()=>{
    return['abc', 123] as const; // esto le dice a ts que la primera posicion siempre va a ser una string y la segunda de tipo number
}

const [letters, numbers] = retunArrayFn();

console.log(numbers ,letters);


//Tarea: Implementar useState
//Crea una función llamada useState. Debe cumplir con los siguientes requisitos:

//Requisitos
//La función debe llamarse useState.

//Debe retornar un arreglo con dos elementos:

//#1 - Un string (el valor inicial).

//#2 - Una función anónima de flecha que:

//Recibe un string.
//Imprime ese string en consola.

// 1# - Un string (el valor inicial).
const useState = (value: string) => {
    return [value, (newValue:string) => { console.log(newValue) }] as const;
}

const [name, setName] = useState('Goku');
console.log(name);       // Goku
setName('Vegeta');       // Imprime "Vegeta"