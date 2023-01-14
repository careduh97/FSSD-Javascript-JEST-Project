const { sum, fromDollarToYen } = require("./app.js");

test("Sumar 14 + 9 debe ser igual a 23", () => {
    let total = sum(14,9);
    expect(total).toBe(23);
})

//Codigo para tests de conversion de monedas

test("3.5 euros deberian ser 4.20 dolares", function() {
    const { fromEuroToDollar } = require("./app.js");
    expect(Number(fromEuroToDollar(3.5).toFixed(2))).toBe(4.20);
})

test("5 dolares deberian ser 532.92 yenes", function() {
    const { fromDollarToYen } = require("./app.js");
    expect(Number(fromDollarToYen(5).toFixed(2))).toBe(532.92);
})

test("950 yenes deberian ser 5.94 libras", function() {
    const { fromYenToPound } = require("./app.js");
    expect(Number(fromYenToPound(950).toFixed(2))).toBe(5.94);
})