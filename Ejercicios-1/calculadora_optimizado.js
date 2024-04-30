const realizarOperacion = (num1, num2, operacion) => {
  num1 = parseInt(num1);
  num2 = parseInt(num2);

  switch (operacion) {
    case "1":
      return num1 + num2;
    case "2":
      return num1 - num2;
    case "3":
      return num1 / num2;
    case "4":
      return num1 * num2;
    case "5":
      return num1 ** num2;
    default:
      return null;
  }
};

alert("¿Qué operación deseas realizar?");
let operacion = prompt(
  "1: Suma, 2: Resta, 3: Dividir, 4: Multiplicar, 5: ecuacion"
);

if (operacion >= 1 && operacion <= 5) {
  let numero1 = prompt("Primer número");
  let numero2 = prompt("Segundo número");
  let resultado = realizarOperacion(numero1, numero2, operacion);

  if (resultado !== null) {
    alert(`Tu resultado es ${resultado}`);
    document.write(`${resultado} = Este es tu resultado.`);
  } else {
    alert("Operación no reconocida, no molestar.");
    document.write("No molestar, ¿sí?");
  }
} else {
  alert("Operación no reconocida, no molestar.");
  document.write("No molestar, ¿sí?");
}
