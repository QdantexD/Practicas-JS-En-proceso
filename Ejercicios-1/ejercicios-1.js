let frase = false;

const validarCliente = () => {
  let edad = prompt("¿Cual es tu edad pendejo?");
  if (edad > 18) {
    alert("Muy bien ya puedes pasar");
    document.write("Bien, bien adelante, pero no jodas ¿quieres? GAAAA");
  } else {
    alert("te jodes porque no tienes la edad adecuada");
    document.write("Por favor no insistas ¿quieres?");
  }
};

validarCliente();
