function saludar() {
  let nombre = prompt("Hola como estas, ¿dime cual es tu nombre?");
  saludos = prompt(`${nombre} ¿Y como es tu dia?`);
  if (saludos == "bien") {
    alert("Que bueno, nomas un gran saludito ¿eh?");
  } else {
    alert("que mal pelotudo");
  }
}

function perro() {
  let perrito = prompt("¿Como se llama tu perro?");
  saludos_1 = prompt(`${perrito} ¿Y como esta vivo o muerto?`);
  if (saludos_1 == "vivo") {
    alert("Uy que bueno ah, sino podria darte un perro que me sobra");
  } else {
    alert("Bueno ta bien, ¿quieres que traiga pala para destapar el cadaver?");
  }
}
