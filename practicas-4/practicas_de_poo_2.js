// Todo optimizado
class Animal {
  constructor(especie, edad, color) {
    this.especie = especie;
    this.edad = edad;
    this.color = color;
    this.informacion = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
  }

  verInformacion() {
    document.write(this.informacion + "<br>");
  }

  ladrar() {
    if (this.especie.toLowerCase() === "perro") {
      document.write("¡Guau, guau!" + "<br>");
    } else {
      document.write(`No puede ladrar, ya que es un ${this.especie}.` + "<br>");
    }
  }
}

class Perro extends Animal {
  constructor(edad, color, raza) {
    super("perro", edad, color);
    this.raza = raza;
  }
}

// Crear instancias de las clases
let perro1 = new Perro(25, "Rojo", "Doberman");
let perro2 = new Perro(80, "Azul", "Pitbull");
let gato = new Animal("gato", 5, "negro");
let raton = new Animal("ratón", 6, "blanco");

// Llamar a los métodos
perro1.verInformacion();
perro1.ladrar();
perro2.verInformacion();
perro2.ladrar();
gato.verInformacion();
gato.ladrar();
raton.verInformacion();
raton.ladrar();
