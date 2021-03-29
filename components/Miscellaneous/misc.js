/* Calcular el promedio de un alumno que tiene 7 calificaciones. */
console.log("First misc:");

let score1 = 3.5;
let score2 = 4;
let score3 = 3.8;
let score4 = 3;
let score5 = 2.5;
let score6 = 4.5;
let score7 = 5;

const numAssigns = 7;

/* Operation and logging into the console */
const sumScore = score1 + score2 + score3 + score4 + score5 + score6 + score7;

const finalScore = sumScore / numAssigns;

console.log(finalScore);

/* Leer 10 números y obtener su cubo y su cuarta. */
console.log("Second misc:")

const numsFourth = [4, 12, 24, 33, 45, 56, 78, 89, 64, 31];

/* Getting all the data from the array and doing their respective operation */ 
for(i = 0; i < numsFourth.length; i++){
  cube = numsFourth[i] * numsFourth[i] * numsFourth[i];
  quarter = cube * numsFourth[i];  
  console.log(cube);
  console.log(quarter);
}


/** ================================================================================================================================================================== */
/* Determinar si un alumno aprueba o reprueba un curso, sabiendo que aprobara si su promedio de tres calificaciones es mayor o igual a 70; reprueba en caso contrario. */
console.log('Third misc:');

const totalAssingns = 3;
let math = 76;
let lang = 76;
let socl = 69;

/* Math operation and prom */
let sumAssign = math + lang + socl;
let final = sumAssign / totalAssingns;

/* Conditional */
if(final >= 70) {
    console.log(final);
    console.log('Approved');
} else {
    console.log(final);
    console.log('Not approved');
}

/* Leer 10 números e imprimir solamente los números positivos */
console.log('Fourth misc:');

const lotNums = [4, -12, 24, 33, 45, -56, 78, 89, 64, -31];

/* Final condition and log of the positive numbers */
for(i = 0; i < lotNums.length; i++) {
  if(lotNums[i] > 0) {
    console.log(lotNums[i]);
  }
};


/** ================================================================================================================================================= */
/* En un almacén se hace un 20% de descuento a los clientes cuya compra supere los $1000 ¿Cual será la cantidad que pagara una persona por su compra? */
console.log('Fifth misc:');

let meat = 625;
let milk = 149;
let eggs = 538;

const finalPrice = meat + milk + eggs;

/* Appliying the discount if the conditional evaluates to true and logging in the console */
if(finalPrice > 1000){
  const dcto = finalPrice * 0.2;
  const dctoPrice = finalPrice - dcto;
  console.log(`The price with final discount is: ${dctoPrice}`);
} else {
  console.log(`The price without discount is: ${finalPrice}`);
}

/* Leer 20 números e imprimir cuantos son  positivos, cuantos negativos y cuantos neutros. */
console.log('Sixth misc:');

const anotherLotNums = [4, -12, 24, 33, 45, -56, 0, 89, 64, -31, -4, 0, 24, 33, 45, 0, -78, 89, -64, 0];

/* Iteration of the array and conditional to log in */
for(i = 0; i < anotherLotNums.length; i++){
  if(anotherLotNums[i] > 0){
    const positive = anotherLotNums[i];
    console.log(positive);
  } else if (anotherLotNums[i] < 0) {
    const negative = anotherLotNums[i];
    console.log(negative);
  } else if (anotherLotNums[i] === 0) {
    const zero = anotherLotNums[i];
    console.log(zero);
  }
};


/** ======================================================================================================== */
/** Un obrero necesita calcular su salario semanal, el cual se obtiene de la sig. manera:
	Si trabaja 40 horas o menos se le paga $16 por hora
	Si trabaja mas de 40 horas se le paga $16 por cada una de las primeras 40 horas y $20 por cada hora extra. */
console.log('Seventh misc:');

let hourWorked = 46;
const fortyPaid = 16;

// Main condition stablishes the total pay of the worker
if(hourWorked <= 40) {
  const payNoExtras = hourWorked * fortyPaid;
  console.log(payNoExtras);
} else {
  const base = 640;
  const extras = 20;
  const extraHours = hourWorked - 40;
  const payExtras = extraHours * extras;
  const totalPay = base + payExtras;
  console.log(totalPay);
};


/** =============================================================================== */
/** Leer 15 números negativos y convertirlos a positivos e imprimir dichos números. */
console.log('Eight misc:');

const negLotNums = [-4, -12, -24, -33, -45, -56, -32, -89, -64, -31, -4, -42, -24, -33, -45];

// Iterate the array and converting positive every negative num
for(i = 0; i < negLotNums.length; i++){
  if(negLotNums[i] < 0) {
    const posNum = negLotNums[i] * -1;
    console.log(posNum);
  };
};


/** =================================================================================== */
/** Realizar un algoritmo para calcular la media y la baja de todo un grupo de números. */
console.log('Nineth misc:');

const moreNums = [34, 12, 24, 33, 45, 56, 32, 89, 64, 31, 4, 42, 24, 33, 45, 5, 13, 25, 34, 46, 1, 33, 90, 65, 32, 96, 43, 25, 34, 46];

let arrayIterator = 0;
let first = 0;
let med = 0;
let lower = 0;
let low = moreNums[0];
const totalNum = moreNums.length;

// Iterate the array and adition every position to the previous
moreNums.forEach(arrayIterator => {
  first = first + arrayIterator;
});

// Min value of the array using Math.min
// let lower = Math.min(...moreNums);

// Another way to define the min value of the array using forEach

moreNums.forEach( lower => {
  if(lower < low){
    low = lower;
  };
});

// Another way to define the min value of the array using for

// for(i = 0; i < moreNums.length; i++){
//   if(moreNums[i] < low){
//     low = moreNums[i];
//   };
// };

med = first / totalNum;

console.log(`Total sumado: ${first}`);
console.log(`Media del total: ${med}`);
console.log(`Baja de todo el complemento: ${low}`);


/** =============================================================================================================================== */
/** Calcular e imprimir la tabla de multiplicar de un numero cualquiera. Imprimir el multiplicando, el multiplicador y el producto. */
console.log('Tenth misc:');

try{

  let salida = '';
  let base = 5;
  let hasta = 20;

  // Iterating all the index to print a complete table and doing it's respective operation every iteration
  for ( let i = 1; i <= hasta; i++){
      salida += `${ base } x ${ i } = ${ base * i }\n`;
  };

  console.log('==========================');
  console.log(`       Tabla del: ${ base }`);
  console.log('==========================');
  console.log(salida);           

} catch(err) {
  throw err;
};


/** ================================================================================================================================================= */
/** Simular el comportamiento de un reloj digital, imprimiendo la hora, minutos y segundos de un día desde las 0:00:00 horas hasta las 23:59:59 horas */