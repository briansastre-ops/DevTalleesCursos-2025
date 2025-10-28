//Como decirle a mis compañeros  que los objetos  luzcan de cierta manera
//podes tener muchas interfaces en un mismo archivo y no cuenta como codigo  de java script
// la interfaces  obligan nada a que un objeto tenga una forma determinada
// pero si alguien quiere usar esa interface  tiene que respetar la forma que le dimos
interface Person {
    FirstName: string;
    LastName: string;
    Age: number;
    

    address: Address; // signo de ? indica que es opcional
    
}


interface Address {
    postalCode: string;
    city: string;
}

// obejto literal
const Person ={
    FirstName: 'Tony',
    LastName: 'Stark',
    Age: 45,
    //adress:{
     //   postalCode: 12345,
      //  city: 'new York',
    //}
};
const ironman: Person = {
    FirstName: 'Tony',
    LastName: 'Stark',
    Age: 45,
    address: {
        postalCode: 'ABC-12345',
        city: 'New York',
    }
};

console.log(ironman);
//const spiderman: Person = {  //ctrl+ . para que te agregue las propiedas de las interface 
  //  FirstName: "",
   // LastName: "",
    //Age: 0,
    
//} // esto significa que spiderman tiene que tener la misma forma que Person






//const spiderman= {...ironman}// los tres puntos es el operador spread

//const spiderman = structuredClone(ironman);// structuredClone es una funcion que clona objetos
//spiderman.FirstName='Peter';
//spiderman.LastName='Parker';
//spiderman.Age=18;
//spiderman.adress.city='New York';


//console.log(spiderman,spiderman);