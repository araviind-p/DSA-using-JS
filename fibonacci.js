// var fib = function (n) {
//     fibArr = [0, 1]
//     if (n < 2) {
//         return fibArr[n]
//     }
//     for (let i = 2; i < n; i++) {
//         fibArr.push(fibArr[i-1] + fibArr[i - 2])
//         console.log('fibArr: ', fibArr);
//     }
//     return fibArr.reduce((a, b) => a + b)
// };

// let res=fib(6)
// console.log('res: ', res);


//recursion


var fib = function (n) {
    if (n <= 1) return n
    return fib(n - 1) + fib(n - 2)
}

const res = fib(5)
console.log('res: ', res);