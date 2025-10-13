const ironman ={
    FirstName: 'Tony',
    LastName: 'Stark',
    Age: 45,
    adress:{
        postalCode: 'acb12345',
        city: 'new York',
    }
};



//const spiderman= {...ironman}// los tres puntos es el operador spread

const spiderman = structuredClone(ironman);// structuredClone es una funcion que clona objetos
spiderman.FirstName='Peter';
spiderman.LastName='Parker';
spiderman.Age=18;
spiderman.adress.city='New York';


console.log(spiderman,spiderman);