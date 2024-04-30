let cantidad = prompt("¿Cuantos Alumnos son?");
let alumnosTotales = [];
for (let i = 0; i < cantidad; i++) {
  alumnosTotales[i] = [prompt("Nombre del alumno" + " " + (i + 1)), 0];
}

const tomarAsistencia = (nombre, i) => {
  let presencia = prompt("¿Presente o Ausente? (p/a) para " + nombre);
  if (presencia === "p" || presencia === "P") {
    alumnosTotales[i][1]++;
  }
};

for (let i = 0; i < 5; i++) {
  for (let alumno in alumnosTotales) {
    tomarAsistencia(alumnosTotales[alumno][0], alumno);
  }
}

for (let alumno in alumnosTotales) {
  let resultado = `${alumnosTotales[alumno][0]}: <br>
    ___________Presentes: ${alumnosTotales[alumno][1]} <br>
    ___________Ausencias: ${5 - parseInt(alumnosTotales[alumno][1])}`;
  if (5 - alumnosTotales[alumno][1] > 18) {
    resultado += "<b style='color:red'>REPROBADO POR INASISTENCIAS</b><br><br>";
  } else {
    resultado += "<br><br>";
  }
  document.write(resultado);
}
