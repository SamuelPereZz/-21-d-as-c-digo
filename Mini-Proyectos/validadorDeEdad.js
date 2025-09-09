const miFormulario = document.getElementById('validarEdad');

miFormulario.addEventListener('submit', function (event) {
  // 1. Prevenir el envío automático del formulario
  event.preventDefault();

  const formData = new FormData(this);
  const edad = formData.get('edad');
  console.log(edad);

  if (edad < 18) {
    alert('Eres menor');
  } else {
    alert('Bienvenido');
  }
});
