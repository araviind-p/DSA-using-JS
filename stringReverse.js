const word="Hello"
let rev=""

for(let i=0;i<word.length;i++){
    rev=word[i]+rev
}

console.log(rev);
console.log(word.split("").reverse().join(""));

const num=987

