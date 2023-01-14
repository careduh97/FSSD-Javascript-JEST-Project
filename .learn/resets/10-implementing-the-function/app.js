//Codigo del Tutorial Jest
console.log("Hello World")

const sum = (a, b) => {
    return a + b
}

console.log (sum(7,3))

//Codigo de conversiones entre monedas

let oneEuroIs = {
    "JPY": 127.9, // Yenes japoneses
    "USD": 1.2, // Dolares americanos
    "GBP": 0.8, // Libras esterlinas
}

function fromEuroToDollar (euro) {
    return euro * 1.2
}

console.log(Number(fromEuroToDollar(3.5).toFixed(2)))

function fromDollarToYen (dollar) {
    return dollar * (127.9/1.2)
}

console.log(Number(fromDollarToYen(5).toFixed(2)))

function fromYenToPound (yen) {
    return yen * (0.8/127.9)
}

console.log(Number(fromYenToPound(950).toFixed(2)))

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }