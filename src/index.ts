// Tipos básicos
let age: number = 5;
const firstName: string = 'Vinícius';
const isValid: boolean = true;
let idk: any = 5;

idk = '10';
idk = true;

// Listas com typescript
const ids: number[] = [1, 2, 3, 4, 5];
const booleans: boolean[] = [true, false, true, true];
const strings: string[] = ['Azul', 'Vermelho', 'Amarelo'];

// Tupla
const person: [number, string] = [1, 'Fiat 147'];

// Lista de Tuplas
const people: [number, string][] = [
    [1, 'Jacob'],
    [2, 'Ana'],
    [3, 'Sketch']
];

// Intersections
const productId: string | number = 1

// Enum
enum Direction {
    Up = 1,
    Down = 2
};

const direction = Direction.Up;

// Type Assertions
const productName: any = "Carro";

// Dessas duas formas funciona:
// let itemId = productName as String;
let itemId = <string>productName;


console.log(direction);