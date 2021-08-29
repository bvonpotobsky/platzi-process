const obj1 = {
    a: 'b',
    b: 'a',
}

const obj2 = {};

for(prop in obj1) {
    obj2[prop] = obj1[prop];
}
console.log('---------');

const uno = {
    a: 'a',
    b: 'b',
    c: {
        d: 'd',
        e: 'e',
    },

    showA() {
        console.log(this.a);
    }
}

const dos = JSON.stringify(uno);
const tres = JSON.parse(dos);
// function recursive() {
//     // validación 
//     if() {
//         // llamados recursivos
//     } else {
//         // llamados normales, si recursividad
//     }
// }

const numbers = [1, 2, 3, 4, 5, 6, 6, 8, 9];
let number = 0;

for (let index = 0; index < numbers.length; index++) {
    number = numbers[index];
    console.log({ index, number });
}
console.clear();

// Function recurive
function recursive(numbersArray) {
    if(numbersArray.length != 0) {
        const first = numbersArray[0];
        console.log(first);
        numbersArray.shift();

        return recursive(numbersArray);
    } 
}
recursive(numbers);

