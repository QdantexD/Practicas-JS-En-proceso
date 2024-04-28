let nombre = prompt("¿tu nombre?");
let dinero = prompt("¿cual es tu fondo?");

if (dinero > 0.6 && dinero < 1) {
  alert("Cómprate un helado de agua.");
} else if (dinero >= 1 && dinero < 1.6) {
  alert(`${nombre} Cómprate el helado de crema.`);
} else if (dinero >= 1.6 && dinero < 1.7) {
  alert(`${nombre} Cómprate el helado de heladovich.`);
} else if (dinero >= 1.8 && dinero < 1.9) {
  alert(`${nombre} Cómprate el helado de helardo.`);
} else if (dinero >= 2.9) {
  alert(`${nombre} Cómprate un helado con confites o el pote de 1/4 kg.`);
} else {
  alert("Lo siento, eres un pobre de mierda. ¡GAAAA!");
}
