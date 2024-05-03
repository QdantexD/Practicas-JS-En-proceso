class App {
  constructor(descargas, puntuacion, peso) {
    this.descargas = descargas;
    this.puntuacion = puntuacion;
    this.peso = peso;
    this.iniciada = false;
    this.instalada = false;
  }
  abrir() {
    if ((this.iniciada = false)) {
      this.iniciada == true;
      alert("app encendida");
    }
  }
  cerrar() {
    if ((this.iniciada = true)) {
      this.iniciada == false;
      alert("app apagada");
    }
  }
  instalada() {
    if ((this.instalada = false)) {
      this.instalada == true;
      alert("app instalada correctamente");
    }
  }
  deinstalar() {
    if ((this.deinstalar = true)) {
      this.deinstalar == false;
      alert("app eliminada correctamente");
    }
  }
}

app = new App("16.000", "5 estrellas", "900mb");

app.instalar();
app.abrir();
app.cerrar();
app.deinstalar();
