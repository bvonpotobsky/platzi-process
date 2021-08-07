const arr = [1,3,4,5,7,2,9];

function secondLargestNumber(numbers) {
    let first = numbers[0];
    let second = 0;

    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] > first) {
            second = first;
            first = numbers[i];
        }
        if(numbers[i] > second && numbers[i] < first) {
            second = numbers[i];
        }
    }
    return second;
}

console.log(secondLargestNumber(arr));