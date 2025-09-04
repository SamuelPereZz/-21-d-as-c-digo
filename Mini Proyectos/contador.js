let contador = 0;

const botonSuma = document.querySelector('#suma');
const miContador = document.querySelector('#contador');
const botonResta = document.querySelector(`#resta`);

miContador.textContent = contador;

botonSuma.addEventListener('click', function () {
  miContador.textContent = contador = contador + 1;
});

botonResta.addEventListener('click', function () {
  miContador.textContent = contador = contador - 1;
});
