//Declaracion de un array vacio:
const arreglos = []

//Dentro del objeto Array podemos guardar todo tipo de dato, incluso otro array:
const datosDeArray = ["Cadena", 5136, arreglos, []]


//PUSH

let frutas = ["Manzana", "Banana"];

// El método push() añade uno o más elementos al final de un array y devuelve la nueva longitud del array.
frutas.push("Pera")

console.log(frutas) //['Manzana', 'Banana', 'Pera']


//MAP
//El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
var numbers = [1, 5, 10, 15];
var doubles = numbers.map(function (x) {
  return x * 2;
});
console.log(doubles) //[2, 10, 20, 30]

//FILTER
//El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
const words = ["spray", "elite", "exuberant", "destruction", "present"];

const result = words.filter((word) => word.length > 6);

console.log(result);