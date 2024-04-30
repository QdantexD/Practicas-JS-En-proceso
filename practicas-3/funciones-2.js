function saludar() {
  let saludos = prompt("¿Como te llamas?");
  let frase = `¡Hola ${saludos}! ¿Como estas?`;
  document.write(frase);
}

saludar();
