let palabraOculta = "javascript";
let intentos = 3;

function verificarSuposicion(suposicion, palabraOculta) {
  if (suposicion.toLowerCase() === palabraOculta) {
    return true;
  }

  return false;
}

function adivinaLaPalabra() {
  alert("tienes tres intentos para adivinar");
  alert("Te dare una pista despues del primer error");
  alert("Buena suerte!");

  while (intentos > 0) {
    let palabraAdivinada = prompt("Digita la palabra a adivinar");

    if (verificarSuposicion(palabraAdivinada, palabraOculta)) {
      alert("Acertaste!");
      break;
    } else {
      intentos--;
      if (intentos > 0) {
        alert(`No adivinaste, Tienes ${intentos}intentos`);
      } else {
        alert("agotaste los instentos");
      }
    }
  }
}
