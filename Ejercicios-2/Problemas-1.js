class celulares {
  constructor(color, peso, resolucion, camara, ram) {
    this.color = color;
    this.peso = peso;
    this.resolucion = resolucion;
    this.camara = camara;
    this.ram = ram;
    this.encendido = false;
  }
  presionarBotonEncendido() {
    if (this.encendido == false) {
      alert("celular prendido");
      this.encendido = true;
    } else {
      alert("El celular esta prendido");
    }
  }
  apagar() {
    if (this.encendido == true) {
      alert("celular apagado");
      this.encendido = false;
    } else {
      alert("El celular ya esta apagado");
    }
  }
  reiniciar() {
    if (this.encendido == true) {
      alert("reinniciando celular");
    } else {
      alert("El celular esta apagado (Proceso de reinicio)");
    }
  }
  tomandoFotos() {
    alert(`Fotos tomadas en una resolucion de: ${this.resolucion}`);
  }
  grabarVideos() {
    alert(`Grabacion activa by: ${this.camara}`);
  }
  mostrarInfo() {
    return `
    Color: <b>${this.color}</b></br>
    Peso: <b>${this.peso}</b></br>
    Tamaño: <b>${this.resolucion}</b></br>
    Resolucion de Camara: <b>${this.camara}</b></br>
    Memoria Ram: <b>${this.ram}</b></br>
    `;
  }
}

class celularAltaGama extends celulares {
  constructor(color, peso, tamaño, rdc, ram, rdce) {
    super(color, peso, tamaño, rdc, ram);
    this.resolucionDeCamaraExtra = rdce;
  }
  grabarVideosLento() {
    alert(
      "Estas grabando en fotogramas mas alta, para que se vean lento y epico GAAAA"
    );
  }
  reconocimientoFacial() {
    alert("vamos a iniciar un reconocimiento facial");
  }
  inforAltaGama() {
    return (
      this.mostrarInfo() +
      `Resolucion de Camara Extra: ${this.resolucionDeCamaraExtra}`
    );
  }
}

const celular1 = new celularAltaGama(
  "rojo",
  "16 gramo",
  "1809x720p",
  "Camera epic",
  "128 gb Ram",
  "4K"
);
const celular2 = new celularAltaGama(
  "verde",
  "168 gramo",
  "780x120p",
  "camera Lol significa que los que juegan lol no valen un sol",
  "500 mb Ram",
  "HD"
);
const celular3 = new celularAltaGama(
  "negro",
  "85.5 gramo",
  "1858x7900p",
  "Camera ultra mega poderoso super WOW ULTRA HYPER GLOBAL POTENCIAL",
  "885 gb Ram",
  "8K"
);

document.write(`
    ${celular1.inforAltaGama()} <br>
    ${celular2.inforAltaGama()} <br>
    ${celular3.inforAltaGama()} <br>
`);
