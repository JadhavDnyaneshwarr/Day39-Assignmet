let numbers = new Array();
for(let i = 0; i<10; i++){
    let number = Math.floor(Math.random() * 10) % 100 + 10;
    numbers.push(number);
}
console.log(numbers)

numbers.sort();
console.log(numbers)

console.log("second smallest number: " +numbers.slice(1,2) + " And second largest number: " + numbers.slice(8,9))