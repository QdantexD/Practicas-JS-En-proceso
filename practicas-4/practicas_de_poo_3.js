// Todo optimizado, pero con algunos cambios para ver que tal es uh
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

  hacerSonido() {
    document.write("Este animal hace un sonido indefinido." + "<br>");
  }
}

class Perro extends Animal {
  constructor(edad, color, raza) {
    super("perro", edad, color);
    this.raza = null;
  }

  verInformacion() {
    document.write(`${this.informacion}. Además, la raza es ${this.raza}.<br>`);
  }

  set modificarRaza(newName) {
    this.raza = newName;
  }

  get getRaza() {
    return this.raza;
  }
}

// Crear instancias de las clases
const perro1 = new Perro(25, "Rojo", "Doberman");
const perro2 = new Perro(80, "Azul", "Pitbull");
const gato = new Animal("gato", 5, "negro");
const raton = new Animal("ratón", 6, "blanco");

// Llamar a los métodos
perro1.modificarRaza = "Pedro";
perro1.verInformacion();
perro1.hacerSonido();
document.write(perro1.getRaza);
document.write(perro1.raza);
