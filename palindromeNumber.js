function isPalindrome(x) {
    return x.toString() === x.toString().split("").reverse().join("")
}

const res = isPalindrome(676)
console.log('res: ', res);