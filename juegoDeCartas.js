// array que representa el maso de cartas

const deck = ['♡', '♢', '♤', '♧', '♣', '♦', '♥', '♠'];

function shuffleDeck() {
    for (let i = deck.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        //imprimir los valores de i, j y el array después del intercambio
        console.log(`Iteración ${deck.length - 1}: i= ${i}, j= ${j}`);
        [deck[i], deck[j]] = [deck[j], deck[i]];
    // imprimo el valor en el que se transforma mi mazo en cada iteración
        console.log(deck);
    }
}


function dealCards(numCard) {
    const dealCards = deck.splice(0, numCard)
   return dealCards 
}

shuffleDeck() 

const player1 = dealCards(2) 
const player2= dealCards(2) 
const player3 = dealCards(2) 

console.log('player1 hand: ', player1)
console.log('player2 hand: ', player2)
console.log('player3 hand: ', player3)