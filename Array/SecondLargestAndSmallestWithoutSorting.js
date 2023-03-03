let numbers = new Array();
for(let i = 0; i<10; i++){
    let number = Math.floor(Math.random() * 10) % 100 + 10;
    numbers.push(number);
}
console.log(numbers)

let largest = -Infinity;
let secondLargest = -Infinity;
let smallest = Infinity;
let secondSmallest = Infinity;

for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];

    if (num > largest) {
        // update largest and second largest
        secondLargest = largest;
        largest = num;
    } else if (num > secondLargest && num != largest) {
        // update second largest
        secondLargest = num;
    }
    
    if (num < smallest) {
        // update smallest and second smallest
        secondSmallest = smallest;
        smallest = num;
    } else if (num < secondSmallest && num != smallest) {
        // update second smallest
        secondSmallest = num;
    }
}

console.log("Second largest number: " + secondLargest);
console.log("Second smallest number: " + secondSmallest);
