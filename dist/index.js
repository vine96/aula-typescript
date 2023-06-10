"use strict";
// Tipos básicos
let age = 5;
const firstName = 'Vinícius';
const isValid = true;
let idk = 5;
idk = '10';
idk = true;
// Listas com typescript
const ids = [1, 2, 3, 4, 5];
const booleans = [true, false, true, true];
const strings = ['Azul', 'Vermelho', 'Amarelo'];
// Tupla
const person = [1, 'Fiat 147'];
// Lista de Tuplas
const people = [
    [1, 'Jacob'],
    [2, 'Ana'],
    [3, 'Sketch']
];
// Intersections
const productId = 1;
// Enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
})(Direction || (Direction = {}));
;
const direction = Direction.Up;
// Type Assertions
const productName = "Carro";
// Dessas duas formas funciona:
// let itemId = productName as String;
let itemId = productName;
console.log(direction);
