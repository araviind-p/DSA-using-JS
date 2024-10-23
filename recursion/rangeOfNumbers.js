var res = []

function rangeOfNumbers(a, b) {
    console.log('a: ', a);
    console.log('b: ', b);

    if (a > b) {
        return []
    } else {
        const numbers = rangeOfNumbers(a, b - 1)
        console.log(numbers);
        numbers.push(b)
        return numbers
    }
}

console.log(rangeOfNumbers(0, 5));