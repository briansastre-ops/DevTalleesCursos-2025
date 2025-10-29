const Persona ={
    name:'tony',
    age:45,
    key:'ironman',
}

const {name: ironmanName, age, key} = Persona;
// destructuracion de objetos
//const name = Persona.name;
//const age = Persona.age;
//const key = Persona.key;


console.log({ironmanName, age, key})
interface Hero {
    name:string;
    age:number;
    key:string;
    rank?:string;
}
// cuando tiene una variables y queres mandar a una proportie  podes obviar el nombre
const useContext = ({key,age,name, rank = 'sin rango'}: Hero) => {

    return{
        keyName: key,
        user: {
            name,
            age,
        },
        rank:rank,
    }
}

const context = useContext(Persona);

console.log(context);

const {
    rank,
    keyName,
    // user:{name},
} = useContext(Persona);



console.log({rank, keyName, name});


