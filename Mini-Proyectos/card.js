const dataName = {
  nombre: 'Samuel',
  apellido: 'Pérez',
  edad: 25,
  intereses:
    '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum culpa, repudiandae quo possimus temporibus dignissimos reprehenderit quod explicabo natus ullam, saepe alias aspernatur dolores odio iste ad assumenda commodi nobis.',
};

const titulo1 = document.createElement('h2');
const nombre = document.createTextNode(dataName.nombre);
titulo1.appendChild(nombre);
document.body.appendChild(titulo1);

