const str = "Aravind"
var size = str.length
res = ""

function reverseStr(str) {
    if (str === "") {
        return ""
    } else {
        return reverseStr(str.substr(1)) +  str.charAt(0)
    }
}

console.log(reverseStr(str));