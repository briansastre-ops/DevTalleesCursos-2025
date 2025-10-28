function greet(name: string):string {
    return `Hello ${name}`;
}
//const greet2 = (name: string):string => {
    //return `Hello ${name}`;
//};// la funcion flecha no cambia el this, cuando tenes que enviar un callback es mejor usar la funcion flecha

const greet2 = (name:string) =>`Hello ${name}`; // vamos a simplificar

// la funcion flecha no cambia el this, cuando tenes que enviar un callback es mejor usar la funcion flecha

const message = greet('Brian');
const message2 = greet2('Sastre');
console.log(message, message2);

interface User {
    uid: string;
    username: string;
}
function getUser(): User{
    return{
        uid: 'ABC-123',
        username:'El_Papi23',
    }
}

/// Funciones con multiples retornos 

//funcion original con fleacha
//const getUser2= ()=>{
    //return{
        //uid: 'ABC-123',
       //username:'El_Papi2333',
    //}
//}


// funcion de flecha con retorno  simplificado
const getUser2= ()=>({
    
        uid: 'ABC-123',
        username:'El_Papi2333',
    });

const user = getUser();
const user2 = getUser2();
console.log(user, user2);


// uso de las arrow functions en los callbacks
const myNumber: number[] = [1,2,3,4,5];
//myNumber.forEach(function (value){
    //console.log({value});
//});

//myNumber.forEach((value)=>{
    //console.log({value});
//})

myNumber.forEach((value, index, arr)=>{
    console.log({value, index, arr});
});