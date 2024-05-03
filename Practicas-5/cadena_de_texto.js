let cadena = "es lol";
let cadena2 = "Cadena";

let resultado = cadena.includes("lol");
let resultado2 = cadena.indexOf("lol");
let resultado3 = cadena.concat(" lol");
let resultado4 = cadena.padEnd(40, "12");
let resultado5 = cadena.repeat(10);
let resultado6 = cadena.toUpperCase();
let resultado7 = cadena.toLowerCase();
let resultado8 = cadena.trim(); //Aqui puse el trim para que puedan saber cuantos caracteres tienen//

document.write(resultado + "<br>");
document.write(resultado2 + "<br>");
document.write(resultado3 + "<br>");
document.write(resultado4 + "<br>");
document.write(resultado5 + "<br>");
document.write(resultado6 + "<br>");
document.write(resultado7 + "<br>");
document.write(resultado8.length + "<br>"); //Aqui puse el length para que puedan imprimir, claro con document.write

// 5:42:45 / 10:00:40
