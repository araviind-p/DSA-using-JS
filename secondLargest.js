const arr = [1, ,999,4, 3, 6, 7, 9, 3, 0, 89]

let largest = -Infinity
let secondLargest = -Infinity

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
        secondLargest = largest
        largest = arr[i]
    } else if (arr[i] > secondLargest & arr[i] < largest) {
        secondLargest = arr[i]
    }
}

console.log(largest);
console.log(secondLargest);