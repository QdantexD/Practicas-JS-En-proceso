class Calculadora {
  static sumar(num1, num2) {
    return parseInt(num1) + parseInt(num2);
  }

  static restar(num1, num2) {
    return parseInt(num1) - parseInt(num2);
  }

  static dividir(num1, num2) {
    return parseInt(num1) / parseInt(num2);
  }

  static multiplicar(num1, num2) {
    return parseInt(num1) * parseInt(num2);
  }
  static potenciar(num1, num2) {
    let numero = num;
    for (let i = 0; i < exp; i++) {
      numero = numero + num;
    }
    return numero;
  }
  static raizCuadrada(num) {
    return.Math.sqrt(num);
  }
  static raizCubica{
    return.Math.cbrt(num)
  }
}

alert("¿Qué operación deseas realizar?");
let operacion = prompt(
  "1: Suma, 2: Resta, 3: Dividir, 4: Multiplicar, 5: Potencias, 6: Raiz cuadrada
);

if (operacion == 1) {
  let numero1 = prompt("Primer número para sumar");
  let numero2 = prompt("Segundo número para sumar");
  let resultado = Calculadora.sumar(numero1, numero2);
  alert(`Tu resultado es ${resultado}`);
  document.write(`${resultado} = Este es tu resultado GAAAA`);
} else if (operacion == 2) {
  let numero1 = prompt("Primer número para restar");
  let numero2 = prompt("Segundo número para restar");
  let resultado = Calculadora.restar(numero1, numero2);
  alert(`Tu resultado es ${resultado}`);
  document.write(`${resultado} = Este es tu resultado GAAAA`);
} else if (operacion == 3) {
  let numero1 = prompt("Primer número para dividir");
  let numero2 = prompt("Segundo número para dividir");
  let resultado = Calculadora.dividir(numero1, numero2);
  alert(`Tu resultado es ${resultado}`);
  document.write(`${resultado} = Este es tu resultado GAAAA`);
} else if (operacion == 4) {
  let numero1 = prompt("Primer número para multiplicar");
  let numero2 = prompt("Segundo número para multiplicar");
  let resultado = Calculadora.multiplicar(numero1, numero2);
  alert(`Tu resultado es ${resultado}`);
  document.write(`${resultado} = Este es tu resultado GAAAA`);
} else if (operacion == 5) {
  let numero1 = prompt("Primer número para multiplicar");
  let numero2 = prompt("Segundo número para multiplicar");
  let resultado = Calculadora.multiplicar(numero1, numero2);
  alert(`Tu resultado es ${resultado}`);
  document.write(`${resultado} = Este es tu resultado GAAAA`);
} else {
  alert("No se ha encontrado la operación, así que no molestar");
  document.write(`No molestar ¿sí?`);
}


// 6:27:35 / 10:00:40
