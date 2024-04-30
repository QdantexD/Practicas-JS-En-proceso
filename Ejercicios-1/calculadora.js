const sumar = (num1, num2) => {
  return parseInt(num1) + parseInt(num2);
};
const restar = (num1, num2) => {
  return parseInt(num1) - parseInt(num2);
};
const dividir = (num1, num2) => {
  return parseInt(num1) / parseInt(num2);
};
const multiplicar = (num1, num2) => {
  return parseInt(num1) * parseInt(num2);
};

alert("¿Que operacion deseas realizar?");
let operacion = prompt("1: Suma, 2: resta, 3: dividir, 4: multiplicar");

if (operacion == 1) {
  let numero1 = prompt("primer numero para sumar");
  let numero2 = prompt("segundo numero para sumar");
  let resultado = sumar(numero1, numero2);
  alert(`Tu resultado es ${resultado}`);
  document.write(`${resultado} = Este es tu  resultado GAAAA`);
} else if (operacion == 2) {
  let numero1 = prompt("primer numero para sumar");
  let numero2 = prompt("segundo numero para sumar");
  let resultado = restar(numero1, numero2);
  alert(`Tu resultado es ${resultado}`);
  document.write(`${resultado} = Este es tu  resultado GAAAA`);
} else if (operacion == 3) {
  let numero1 = prompt("primer numero para sumar");
  let numero2 = prompt("segundo numero para sumar");
  let resultado = dividir(numero1, numero2);
  alert(`Tu resultado es ${resultado}`);
  document.write(`${resultado} = Este es tu  resultado GAAAA`);
} else if (operacion == 4) {
  let numero1 = prompt("primer numero para sumar");
  let numero2 = prompt("segundo numero para sumar");
  let resultado = multiplicar(numero1, numero2);
  alert(`Tu resultado es ${resultado}`);
  document.write(`${resultado} = Este es tu  resultado GAAAA`);
} else {
  alert("no se ha encontrado la operacion, asi que no molestar");
  document.write(`No molestar ¿si?`);
}
