const usersDatabase = [
  { username: "andres", password: "123" },
  { username: "caro", password: "456" },
  { username: "mariana", password: "789" },
];
const usersTimeline = [
  { username: "Estefany", timeline: "Me encata Javascript!" },
  { username: "Oscar", timeline: "Bebeloper es lo mejor!" },
  { username: "Mariana", timeline: "A mi me gusta mÃ¡s el cafÃ© que el tÃ©" },
  { username: "Andres", timeline: "Yo hoy no quiero trabajar" },
];


const username = prompt("cual es tu usuario?");
const password = prompt("cual es tu contraseña?");

function usuarioExiste(user, password) {
    for (let i = 0; i < usersDatabase.length; i++){
        if (usersDatabase[i].username === user && usersDatabase[i].password === password) {
            // console.log("usuario existe");
            // break;
            return true;
        }
        // else {
        //    console.log("usuario no existe")
        // } 
        
}
    return false;
}

function signIn(username, password) {
    if (usuarioExiste(username, password)) {
        alert(`Bienvenido ${username}`);
        console.log(usersTimeline);
    } else {
        alert("UUpss, usuario o contraseña invalidos")
    }


}

signIn(username, password)