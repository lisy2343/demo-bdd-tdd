const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const Calculadora = require('../../models/calculadora');

var calculadora;

Given('la calculadora con los números {int} y {int}', (numero1, numero2) => {
  calculadora = new Calculadora(numero1, numero2);
});

When('quiero sumar ambos números', () => {
  calculadora.sumar();
});

Then('el resultado debe ser {int}', (expected) => {
  assert.equal(calculadora.getResultado(), expected);
});
