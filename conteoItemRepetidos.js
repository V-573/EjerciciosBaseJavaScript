const words = [
  "apple",
  "banana",
  "orange",
  "banana",
  "kiwi",
  "apple",
  "banana",
];

// const wordFrecuency = words.reduce((accumulator1, currentValue1) => {
//   if (accumulator1[currentValue1]) {
//     accumulator1[currentValue1]++;
//   } else {
//     accumulator1[currentValue1] = 1;
//   }
//   return accumulator1;
// }, {});

// console.log(wordFrecuency);

const wordFrecuency = words.reduce((objeto, element) => {
    // el operador || es para establecer si el valor del lado izquierdo existe  (propiedad nueva o existente?) porque si no se da el valor del lado derecho (0 para un valor de propiedad que no existe, si ya existe entonces se tiene encuenta el valor de la propiedad existente)
  objeto[element] = (objeto[element] || 0) + 1
  return objeto;
}, {});// aca inicializo mi valor e indico en este caso que se trata de un objeto

console.log(wordFrecuency);