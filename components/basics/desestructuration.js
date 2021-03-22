// Literal object {}

const wolverine = {
    nombre: 'Wolverine',
    poder: 'Regeneracion',
    // edad
    getNombre() {
        return `${ this.nombre } ${ this.poder }`
    }
};

// Desestructuration of a literal object
// function printHero( { nombre, poder, edad = 69 } ){

//     console.log(nombre, poder, edad);
    
// };

// printHero( wolverine );

const heroes = ['Wolverine', 'Batman', 'Aquaman'];

// Desestructuration of an array

// const h1 = heroes[0];
// const h2 = heroes[1];
// const h3 = heroes[2];

// Every comma is a position in the array
const [ , , h3 ] = heroes;

console.log(h3);