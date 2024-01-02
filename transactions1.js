const transactions = [
    { id: 1, description: 'Grocery Shopping', amount: -50 },
    { id: 2, description: 'Salary Deposit', amount: 2000 },
    { id: 3, description: 'Utility Bill Payment', amount: -100 },
    { id: 4, description: 'Online Purchase', amount: -30 }
]


// aca hago suma de cada valor del array transactions
const balanceTotal = transactions.reduce((acc, transaction) => {
   console.log(transaction.amount)
    return acc + transaction.amount
}, 0);
    console.log(balanceTotal)
// hasta aca la suma


// aca escojo la transaccion de mayor valor:

const largeTransaction = transactions.reduce((acc, transaction) => {
    return transaction.amount > acc ? transaction.amount : acc

}, 0)
console.log("large transaction : ", largeTransaction)


// fin de la transaccion de mayor valor


// aca imprimo cada gasto, purchase Transactions:
const purchaseTransaction = transactions.reduce((acc, transaction) => {   

    if (transaction.amount < 0) {
        acc.push(`Gasto ${acc.length + 1} por compra de ${transaction.description} por valor de ${transaction.amount}`)
    }
    return  acc
}, [])

console.log("purchase transactions: ", purchaseTransaction)

// aca termina purchase transaction

