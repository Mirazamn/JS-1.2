// let num = parseInt(prompt('Son kiriting:  '))
// let text = prompt('Matn Kiriting:  ')
// let h1 = document.querySelector('h1')
// let h2 = document.querySelector('h2')

// let ToText = num.toString()
// h1.innerHTML=`Text: ${ToText}`
// console.log(`Text: ${ToText}`);

// let ToNum = Number(text)
// h2.innerHTML=`Raqam: ${ToNum}`
// console.log(`Raqam: ${ToNum}`);


let str = prompt('String typedagi malumotlarni kiriting')
let num = parseInt(prompt('Number Typedagi malumotlarni kiriting'))
let boolen = Boolean(prompt('Boolen typedagi malumotlarni kiriting'))
alert(`Hamma malumotlar to'grimi?`)
alert(
    `
    Siz Kiritgan ${str} so'zi String Typaga tegishli
    Siz Kiritgan ${num} so'zi Number Typega tegishli
    Siz Kiritgan ${boolen} so'zi Boolean Typega tegishli`
)

console.log(`String: ${str}`);
console.log(`Number: ${num}`);
console.log(`Boolean: ${boolen}`);
