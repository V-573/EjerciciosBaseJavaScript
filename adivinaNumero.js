const numeroSecreto = Math.floor(Math.random() * 10 + 1);

const NumeroJugador = parseInt(prompt("adivina el nmero entre 1 y 10"));

console.log(`Este es el numergo que jugaste ${numeroSecreto}`);


if (NumeroJugador === numeroSecreto) {
    console.log("has ganado");

} else if (NumeroJugador > numeroSecreto) {
    console.log("el numero es muy bajo");
}

else {
    console.log("El numero es muy alto");

}