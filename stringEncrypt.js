const uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function encryptString(str,n) {
    let res = ""
    for (let i = 0; i < str.length; i++) {
        let index = (findIndex(str[i]) + n) % 26
        if (uppercaseLetters.includes(str[i])) {
            res += uppercaseLetters[index]
        } else if (lowercaseLetters.includes(str[i])) {
            res += lowercaseLetters[index]
        } else {
            res += str[i]
        }
    }
    return res
}
function findIndex(char) {
    for (let i = 0; i < 26; i++) {
        if (char === uppercaseLetters[i] || char === lowercaseLetters[i]) {
            return i
        }
    }
    return 0
}
const ans = encryptString("Zeebra", 3)
console.log(ans)
