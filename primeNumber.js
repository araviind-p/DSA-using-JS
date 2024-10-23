let count = 0
let num = 3
let res = [2]

while (count < 9) {
    let flag = 1
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            flag = 0;
            break
        }
    }
    if (flag == 1) {
        res.push(num)
        count++
    }
    num++;
}

let numOfPrimes = parseInt(prompt("How many prime numbers would you like to generate?"))
console.log('numOfPrimes: ', numOfPrimes);
console.log(res);