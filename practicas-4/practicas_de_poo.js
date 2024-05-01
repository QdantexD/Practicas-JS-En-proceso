// Aqui eh creado class para el POO, objetado orientado a la programacion, en ingles pues Programing objet orient :v
class animal {
  constructor(especie, edad, color) {
    this.especie = especie;
    this.edad = edad;
    this.color = color;
    this.informacion = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
  }
  verInformation = () => {
    document.write(this.informacion + "<br>");
  };
}

// Nuevos metodos para agregar la funcion para ahorrar el esfuerzo mas optimizado :D

// Aqui eh puesto el perro porque la class animal, esta listo y el perro solamente son para poner nuevos clases,pero no seran necesario crear extenso con la funcion de class claro
let perro = new animal("perro", 5, "rojo");

perro.verInformation();
