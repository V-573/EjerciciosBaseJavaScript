const winningParticipants = [
    { id: 1, name:'jennifer', ticket: 100},
    { id: 2, name:'jhon', ticket: 200},
    { id: 3, name:'fercho', ticket: 300},
    { id: 4, name:'juan', ticket: 400}
]


function winnerByName (name){

    const winner = winningParticipants.find(participant => participant.name === name);
    return winner || "winner not found"

}

console.log(winnerByName("juan"));
