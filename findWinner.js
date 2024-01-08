const competitions=[['JavaScript','C#'],['C#','Python'],['Python','JavaScript']]// array de 3 elementos tipo array, cada elemento contienen 2 elementos tipo string
const results = [0, 0, 1] // array con el proposito en este programa de especificar que cero seria para AWAY y uno para HOME. 

function tournamentWinner(competitions, results) {
    const scores = {}
    let winner = ''
    for (let i = 0; i < competitions.length; i++) {// aseguramos que se hagan las iteraciones correspondientes al tamaño del array, en este caso 3 veces
        const [home, away] = competitions[i]// competitions es un array  que tiene como elemento un array de 2 elementos, con el for iteramos sobre cada elemento e igualamos en cada ciclo los valores de HOME y AWAY
        // En el primer ciclo HOME seria igual  jAVASCRIPT y AWAY seria igual a C#
        console.log(`ciclo ${i}, iteramos sobre el primer elemento de competitions que es ${competitions[i]} \n y los almaceno en home y away cada valor del elemento de competitions`)
        const winningTeam = results[i] === 0 ? away : home// Despues de valores previos para definir ganador, results es itrerado y 0 para away y uno para home, dependiendo el valor previo en la const result
        // winningTeam quedaria con el valor que almacene Home o Away dependiendo de lo puesto previamente en results. En estas variables, home y away, se almacena el nombre del equipo que gano de la iteracion previa del for y dependiendo el valor de results que es el encargado de darnos el ganador del partido
        // por ejemplo en este caso el array result indica lo siguiente [0,0,1] que equivale a que ganaria [away, away, home]
        scores[winningTeam] = (scores[winningTeam] || 0) + 3// vamos a añadir elementos tipo array al objeto score. Se inicia la variable asegurandole un valor de cero y luego se le suma 3, en caso de tener un valor previo se mantiene el valor y se le suma 3
console.log(scores)
        if (!winner || scores[winningTeam] > scores[winner]) {
            winner = winningTeam
        }
        
    }

    return winner

}

console.log(tournamentWinner(competitions, results))

