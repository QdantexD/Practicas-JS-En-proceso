const obtenerInformacion = (materia) => {
  let materias = {
    fisica: ["pedro", "juan", "pepito", "cofla", "maria"],
    programacion: ["pedro", "juan", "pepito", "cofla", "maria"],
    logica: ["pedro", "juan", "pepito", "cofla", "maria"],
    quimica: ["pedro", "juan", "pepito", "cofla", "maria"],
  };
  if (materias[materia] !== undefined) {
    return materias[materia];
  } else {
    return false;
  }
};

let informacion = obtenerInformacion("fisica");
document.write(informacion);

if (informacion !== false) {
  document.write(informacion);
}
