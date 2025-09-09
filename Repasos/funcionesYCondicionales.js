// Dia 3

let fecha = new Date();
console.log(fecha); // Fri Sep 05 2025 00:01:08 GMT-0600 (hora estándar central)

fecha.getMonth(); // 05 (retorna un número que es el día)
fecha.getFullYear(); // 2025 (retorna un número que es el año)
fecha.toISOString(); // '2025-09-11T22:22:33.132Z' (retorna un string)

let literal = {};
let constructora = new Object();
//Hay dos formas de crear un nuevo objeto vacío. Usando un objeto literal o usando la función constructora de objecto

let usuario = { nombre: 'Samuel', apellido: "pérez", edad: 25, altura: 173, conTrabajo: {esDesarrollador: true}  };
//Como puedes observar, la llave es un texto y los valores pueden ser cualquier tipo de dato (inclusive otros objetos).
//Una propiedad esta compuesta por una llave y un valor. Si creas más de una propiedad, deberás separar cada propiedad con una coma (,):

// Notación de punto `.`
console.log(usuario.conTrabajo.esDesarrollador); // True
// Notación de corchetes `[]`
console.log(usuario["nombre"]); //Samuel
//los objetos pueden ser modificados, son "mutables". Podemos acceder (leer) el valor de sus propiedades usando . o [] y también asignarles un nuevo valor con el operador de asignación =.
