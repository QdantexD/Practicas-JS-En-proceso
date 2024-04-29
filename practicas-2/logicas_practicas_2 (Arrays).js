let pc1 = {
  nombre: "SoyPc",
  procesador: "AMD Ryzen 5600X",
  ram: "16 Ram",
  espacio: "1 TB",
};

let frase = `El nombre de mi Pc es: <b>${pc1.nombre}</b> <br>
              El procesador es: <b>${pc1.procesador}</b> <br>
              la memoria ram es: <b>${pc1.ram}</b> <br>
              el espacio en disco es de <b>${pc1.espacio}</b>`;

document.write(frase);
