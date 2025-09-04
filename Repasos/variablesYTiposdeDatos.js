console.log('Sam Empieza hoy, cero excusas');

var DatoNumerico = 5;
var DatoNumerico2 = 10.12;
DatoNumerico + DatoNumerico2; //15.12
//En JavaScript, no hay una diferencia entre números enteros y números decimales, todos los números son de tipo number

const DatoCadena = 'Hola mundo!';
const DatoCadena2 = `Esto es una cadena de texto
que ocupa varias líneas. Puedes escribir
tantas líneas como quieras`;
//La cadena de texto (tipo string) es otro tipo de dato muy común. En JavaScript, las cadenas de texto se representan entre comillas simples, dobles o acentos graves Las comillas simples y dobles funcionan igual, pero al usar acentos graves podemos escribir cadenas de texto que ocupen varias líneas:
let DatoBoleano = true;
//Los booleanos representa sólo dos valores: true (verdadero) o false (falso). Por ejemplo:
//¿La luz está encendida (true) o apagada (false)?
//¿Está lloviendo (true) o no está lloviendo (false)?
//¿Está el usuario logueado (true) o no está logueado (false)?

var DatoNull = null;
//El valor null es un concepto fundamental en programación y bases de datos que representa la ausencia intencional de un valor o la inexistencia de un valor especial con un solo estado posible, "vacío" 
const DatoSinDefinir = undefined;
//A diferencia de null, que es un valor que se asigna intencionalmente para representar la ausencia de datos, undefined es un estado predeterminado o automático que surge cuando se declara una variable sin darle un valor.
let DatoSimbolo = Symbol;
//Representa un valor primitivo único e inmutable que se utiliza para crear identificadores de propiedad de objeto únicos. A diferencia de las cadenas o números, cada Symbol es distinto incluso si tienen la misma descripción, lo que garantiza la unicidad y evita conflictos en las claves de los objetos. 

var DatoBigInt = BigInt;
//Es un tipo de dato numérico que permite representar enteros con precisión arbitraria por ejemplo numeros infinitos como PI: 3.14159265358979323846264338327950288419716939937510582097494459230781640628620.
